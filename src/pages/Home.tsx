import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { concerts, parties } from '../data/seed'
import { useStore } from '../store/store'
import { FeedList } from '../components/FeedList'
import { Avatar, Tabs } from '../components/ui'
import { IconArrowUpRight, IconPlay } from '../components/icons'
import { discoverFeed, followingFeed } from '../lib/feed'
import { artistById, isUpcoming, trending } from '../lib/util'
import { spring } from '../lib/motion'

type Mode = 'following' | 'discover'

function greeting(h = new Date().getHours()) {
  return h < 5 ? 'Good night' : h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening'
}

const tile = (i: number) => ({ initial: { opacity: 0, y: 14, scale: 0.98 }, animate: { opacity: 1, y: 0, scale: 1 }, transition: { ...spring, delay: 0.04 * i } })

export default function Home() {
  const { state, dispatch, me } = useStore()
  const [mode, setMode] = useState<Mode>('following')
  const [seenAt] = useState(state.lastSeen)
  useEffect(() => {
    dispatch({ type: 'markSeen', at: Date.now() })
  }, [dispatch])

  if (!me) return null
  const mine = Object.keys(me.fanSince)
  const items = mode === 'following' ? followingFeed(state.posts, me) : discoverFeed(state.posts, mine)
  const party = parties[0]
  const partyArtist = artistById(party.artistId)!
  const next = concerts.filter((c) => isUpcoming(c.date) && mine.includes(c.artistId)).sort((a, b) => a.date.localeCompare(b.date))[0]
  const days = next ? Math.ceil((new Date(next.date).getTime() - Date.now()) / 86_400_000) : 0
  const trends = trending(state.posts, { limit: 3 })
  const listeners = state.users.filter((u) => u.fanSince[party.artistId]).slice(0, 4)
  const guest = me.handle === 'guest'

  return (
    <>
      <header className="hello">
        <div className="eyebrow">{new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
        <h1 className="display">
          {greeting()},<br />
          <span className="display-strong">{guest ? 'fan' : me.name}</span>
        </h1>
      </header>

      <section className="bento">
        <motion.div {...tile(0)} className="tile tile-live span-2">
          <Link to={`/party/${party.id}`} className="tile-link">
            <div className="tile-top">
              <span className="dotmatrix big">LIVE</span>
              <span className="tile-cta">
                <IconPlay size={18} />
              </span>
            </div>
            <div>
              <div className="tile-kicker">Listening party · {partyArtist.name}</div>
              <div className="tile-title">Confessions on a Dance Floor</div>
              <div className="stack">
                {listeners.map((u) => (
                  <Avatar key={u.id} user={u} size={26} />
                ))}
                <span>{listeners.length + 4} listening now</span>
              </div>
            </div>
          </Link>
        </motion.div>

        {next && (
          <motion.div {...tile(1)} className="tile tile-solid" style={{ ['--tint' as string]: artistById(next.artistId)?.color }}>
            <Link to={`/c/${next.id}`} className="tile-link">
              <div className="tile-kicker">Next show</div>
              <div className="bignum">
                {days}
                <small>days</small>
              </div>
              <div className="tile-foot">
                {artistById(next.artistId)?.name} · {next.city}
              </div>
            </Link>
          </motion.div>
        )}

        <motion.div {...tile(2)} className="tile">
          <Link to="/explore" className="tile-link">
            <div className="tile-kicker row-between">
              Trending <IconArrowUpRight size={16} />
            </div>
            <ol className="numbered">
              {trends.map((t, i) => (
                <li key={t.tag}>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>#{t.tag}
                </li>
              ))}
            </ol>
          </Link>
        </motion.div>

        {guest ? (
          <motion.div {...tile(3)} className="tile tile-ink span-2">
            <Link to="/welcome" className="tile-link row-between">
              <div>
                <div className="tile-title">Make it yours</div>
                <div className="tile-sub">Pick your artists and start your Fan Passport.</div>
              </div>
              <span className="pill-btn light">Start</span>
            </Link>
          </motion.div>
        ) : (
          <motion.div {...tile(3)} className="tile span-2">
            <Link to={`/u/${me.handle}`} className="tile-link passport-mini">
              <span className="dotmatrix">FAN PASSPORT</span>
              <div className="mini-stats">
                <span>
                  <b>{mine.length}</b> fandoms
                </span>
                <span>
                  <b>{me.attended.length}</b> shows
                </span>
                <span>
                  <b>{Object.keys(me.ratings).length}</b> ratings
                </span>
              </div>
            </Link>
          </motion.div>
        )}
      </section>

      <div className="section-head">
        <h2>Feed</h2>
        <Tabs<Mode>
          tabs={[
            { id: 'following', label: 'Following' },
            { id: 'discover', label: 'Discover' },
          ]}
          value={mode}
          onChange={setMode}
        />
      </div>
      <FeedList items={items} caughtUpAfter={mode === 'following' ? seenAt : undefined} empty="Follow some fans or join a fandom to fill your feed." />
    </>
  )
}

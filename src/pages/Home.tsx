import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { concerts, parties } from '../data/seed'
import { useStore } from '../store/store'
import { invitesFor } from '../store/reducer'
import { StoriesBar } from '../components/Stories'
import { MessagingNotice } from './Messages'
import { FeedList } from '../components/FeedList'
import { ArtistDisc, Avatar, Tabs } from '../components/ui'
import { IconArrowUpRight, IconPlay, IconX } from '../components/icons'
import { discoverFeed, followingFeed } from '../lib/feed'
import { artistById, formatDate, isUpcoming, trending } from '../lib/util'
import { spring } from '../lib/motion'
import { dismissShows, newShowsFor } from '../lib/liveConcerts'

type Mode = 'following' | 'discover'

function greeting(h = new Date().getHours()) {
  return h < 5 ? 'Good night' : h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening'
}

const tile = (i: number) => ({ initial: { opacity: 0, y: 14, scale: 0.98 }, animate: { opacity: 1, y: 0, scale: 1 }, transition: { ...spring, delay: 0.04 * i } })

export default function Home() {
  const { state, dispatch, me, userById } = useStore()
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
  const invites = invitesFor(state, me.id)

  return (
    <>
      <StoriesBar />
      <MessagingNotice compact />
      <NewShows />
      <header className="hello compact">
        <div className="eyebrow">{new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
        <h1 className="display">
          {greeting()},<br />
          <span className="display-strong">{guest ? 'fan' : me.name}</span>
        </h1>
      </header>

      {invites.map(({ page, invite }) => (
        <div key={invite.id} className="invite-banner">
          <Avatar user={page} size={40} />
          <span className="grow">
            <strong>{userById(invite.invitedBy)?.name ?? 'Someone'} invited you to run {page.name}</strong>
            <span className="muted small block">Become an admin of this {page.page?.category.toLowerCase()} page</span>
          </span>
          <Link to={`/invite/${invite.code}`} className="pill-btn ink small">
            View
          </Link>
        </div>
      ))}
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

// "New date announced": fresh dates for artists you follow, shown as soon as you open the app.
function NewShows() {
  const { me, dispatch } = useStore()
  const [, refresh] = useState(0)
  if (!me) return null
  const list = newShowsFor(Object.keys(me.fanSince)).slice(0, 3)
  if (!list.length) return null
  return (
    <motion.section className="new-shows" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={spring} aria-label="New dates announced">
      <div className="row-between">
        <span className="dotmatrix new-shows-kicker">{list.length > 1 ? 'NEW DATES' : 'NEW DATE'}</span>
        <button
          className="icon-btn"
          aria-label="Dismiss"
          onClick={() => {
            dismissShows(list.map((c) => c.id))
            refresh((n) => n + 1)
          }}
        >
          <IconX size={16} />
        </button>
      </div>
      {list.map((c) => {
        const going = me.going.includes(c.id)
        return (
          <div key={c.id} className="new-show">
            <Link to={`/c/${c.id}`} className="new-show-main">
              <ArtistDisc id={c.artistId} size={40} />
              <span className="grow">
                <strong>
                  {artistById(c.artistId)?.name} · {c.city}
                </strong>
                <span className="muted small block">
                  {formatDate(c.date)} · {c.venue || c.tour}
                </span>
              </span>
            </Link>
            <span className="new-show-actions">
              {me.handle !== 'guest' && (
                <button className={going ? 'pill-btn glass small' : 'pill-btn ink small'} onClick={() => dispatch({ type: 'toggleGoing', concertId: c.id })}>
                  {going ? 'Going ✓' : 'I’m going'}
                </button>
              )}
              {c.url && (
                <a className="pill-btn glass small" href={c.url} target="_blank" rel="noopener noreferrer">
                  Tickets ↗
                </a>
              )}
            </span>
          </div>
        )
      })}
    </motion.section>
  )
}

import { AnimatePresence, motion } from 'motion/react'
import { spring } from '../lib/motion'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { albums, concerts, parties } from '../data/seed'
import { starterPack } from '../lib/packs'
import { useStore } from '../store/store'
import { useComposer } from '../components/Composer'
import { FeedList } from '../components/FeedList'
import { AlbumCover, Avatar, Stars, Tabs } from '../components/ui'
import { topicFeed } from '../lib/feed'
import { artistById, avgRating, formatDate, isUpcoming } from '../lib/util'
import { IconCheck, IconHeadphones, IconHeart, IconPackage, IconPen } from '../components/icons'

// Weverse-style artist space: one room per artist, with topic feeds
// (Bluesky custom feeds), albums to rate (Letterboxd) and shows.
export default function ArtistPage() {
  const { artistId = '' } = useParams()
  const artist = artistById(artistId)
  const { state, dispatch, me } = useStore()
  const compose = useComposer()
  const [tab, setTab] = useState('all')
  if (!artist) return <Navigate to="/explore" replace />

  const joined = Boolean(me?.fanSince[artist.id])
  const fans = state.users.filter((u) => u.fanSince[artist.id])
  const myAlbums = albums.filter((a) => a.artistId === artist.id)
  const shows = concerts.filter((c) => c.artistId === artist.id).sort((a, b) => b.date.localeCompare(a.date))
  const pack = starterPack(state.posts, state.users, artist.id)
  const party = parties.find((p) => p.artistId === artist.id)
  const feed = artist.feeds.find((f) => f.id === tab)

  const tabs = [
    { id: 'all', label: 'All' },
    ...artist.feeds.map((f) => ({ id: f.id, label: f.label })),
    { id: 'albums', label: 'Albums' },
    { id: 'shows', label: 'Tours & shows' },
    { id: 'fans', label: 'Fans' },
  ]

  return (
    <>
      <header className="hero-soft" style={{ ['--tint' as string]: artist.color }}>
        <div className="hero-kicker">Fan room · independent</div>
        <h1 className="hero-name">{artist.name}</h1>
        <p className="hero-tagline">{artist.tagline}</p>
        <div className="hero-stats">
          <div>
            <div className="bignum">{fans.length}</div>
            <div className="hero-label">fans</div>
          </div>
          <div>
            <div className="bignum">{state.posts.filter((p) => p.artistId === artist.id).length}</div>
            <div className="hero-label">posts</div>
          </div>
          <div>
            <div className="bignum">{shows.length}</div>
            <div className="hero-label">shows</div>
          </div>
        </div>
        <div className="hero-actions">
          <button className={joined ? 'pill-btn glass' : 'pill-btn ink'} onClick={() => dispatch({ type: 'followArtist', artistId: artist.id })}>
            {joined ? <><IconCheck size={16} /> Joined</> : 'Join room'}
          </button>
          <button className="glass-circle" onClick={() => compose({ artistId: artist.id })} aria-label="Post here">
            <IconPen size={17} />
          </button>
          {pack.length > 0 && (
            <Link to={`/starter/${artist.id}`} className="pill-btn glass small">
              <IconPackage size={15} /> New here? Follow the {pack.length} most active fans
            </Link>
          )}
          {party && (
            <Link to={`/party/${party.id}`} className="glass-circle" aria-label="Listening party">
              <IconHeadphones size={17} />
            </Link>
          )}
        </div>
      </header>
      <div className="section-head center">
        <Tabs tabs={tabs} value={tab} onChange={setTab} />
      </div>

      {(tab === 'all' || feed) && <FeedList items={topicFeed(state.posts, artist.id, feed?.tags)} empty="No posts in this feed yet. Be the first!" />}

      {tab === 'albums' && (
        <div className="glass-card list">
          {myAlbums.map((al) => {
            const ratings = state.users.map((u) => u.ratings[al.id]).filter((r): r is number => typeof r === 'number')
            const mine = me?.ratings[al.id] ?? 0
            const fav = me?.top4.includes(al.id)
            return (
              <div key={al.id} className="row-item">
                <AlbumCover album={al} size={64} />
                <div className="grow">
                  <strong>{al.title}</strong> <span className="muted">{al.year}</span>
                  <div className="small muted">
                    ★ {avgRating(ratings) || '–'} avg · {ratings.length} ratings
                  </div>
                  <div className="small">
                    You: <Stars value={mine} onChange={(v) => dispatch({ type: 'rate', albumId: al.id, rating: v })} size={16} />
                  </div>
                </div>
                <div className="col-actions">
                  <button className="pill-btn glass small" onClick={() => compose({ reviewAlbumId: al.id, artistId: artist.id })}>
                    Review
                  </button>
                  <button
                    className={fav ? 'pill-btn ink small' : 'pill-btn glass small'}
                    title="Add to your Top 4 favourites"
                    onClick={() => dispatch({ type: 'toggleTop4', albumId: al.id })}
                    disabled={!fav && (me?.top4.length ?? 0) >= 4}
                  >
                    <IconHeart size={14} filled={fav} /> Top 4
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {tab === 'shows' && <ShowsTab artistId={artist.id} />}

      {tab === 'fans' && (
        <div className="glass-card list">
          {fans
            .sort((a, b) => a.fanSince[artist.id] - b.fanSince[artist.id])
            .map((u) => (
              <Link key={u.id} to={`/u/${u.handle}`} className="row-item">
                <Avatar user={u} size={36} />
                <div className="grow">
                  <strong>{u.name}</strong> <span className="muted">@{u.handle}</span>
                  <div className="muted small">
                    Fan since {u.fanSince[artist.id]} · {u.location}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}
    </>
  )
}

// Upcoming: every show (that's what fans plan around). Past: grouped by tour,
// which is how fans remember them; expand a tour to see its dates.
function ShowsTab({ artistId }: { artistId: string }) {
  const { state } = useStore()
  const [open, setOpen] = useState<string | null>(null)
  const all = concerts.filter((c) => c.artistId === artistId)
  const upcoming = all.filter((c) => isUpcoming(c.date)).sort((a, b) => a.date.localeCompare(b.date))
  const tours = groupTours(all.filter((c) => !isUpcoming(c.date)))
  const count = (ids: string[], key: 'attended' | 'going') => state.users.filter((u) => ids.some((id) => u[key].includes(id))).length

  return (
    <>
      <div className="section-head">
        <h2>Upcoming shows</h2>
      </div>
      {upcoming.length ? (
        <div className="show-grid">
          {upcoming.map((c) => {
            const d = new Date(c.date + 'T12:00:00')
            return (
              <Link key={c.id} to={`/c/${c.id}`} className="show-tile">
                <span className="show-day">{d.getDate()}</span>
                <span className="show-month">{d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</span>
                <span className="show-city">{c.city}</span>
                <span className="muted small">{c.venue}</span>
                <span className="soft-chip">{count([c.id], 'going')} going</span>
              </Link>
            )
          })}
        </div>
      ) : (
        <p className="empty">No shows announced yet.</p>
      )}

      <div className="section-head">
        <h2>Past tours</h2>
      </div>
      <div className="glass-card list">
        {tours.map((t) => {
          const isOpen = open === t.tour
          return (
            <div key={t.tour}>
              <button className="row-item tour-row" onClick={() => setOpen(isOpen ? null : t.tour)} aria-expanded={isOpen}>
                <span className="tour-years">{t.years}</span>
                <span className="grow">
                  <strong>{t.tour}</strong>
                  <span className="muted small block">
                    {t.shows.length} {t.shows.length === 1 ? 'show' : 'shows'} · {(() => { const n = count(t.shows.map((c) => c.id), 'attended'); return `${n} ${n === 1 ? 'fan was' : 'fans were'} there` })()}
                  </span>
                </span>
                <span className={isOpen ? 'chev open' : 'chev'}>›</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div className="tour-dates" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={spring}>
                    {t.shows.map((c) => (
                      <Link key={c.id} to={`/c/${c.id}`} className="tour-date">
                        <span className="muted small">{formatDate(c.date)}</span>
                        <span className="grow">{c.city}</span>
                        <span className="muted small">{c.venue}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
        {!tours.length && <p className="empty">No past tours yet.</p>}
      </div>
    </>
  )
}

export function groupTours(past: typeof concerts) {
  const map = new Map<string, typeof concerts>()
  for (const c of past) map.set(c.tour, [...(map.get(c.tour) ?? []), c])
  return [...map.entries()]
    .map(([tour, shows]) => {
      const sorted = [...shows].sort((a, b) => a.date.localeCompare(b.date))
      const y0 = sorted[0].date.slice(0, 4)
      const y1 = sorted[sorted.length - 1].date.slice(0, 4)
      return { tour, shows: sorted, years: y0 === y1 ? y0 : `${y0}–${y1.slice(2)}`, first: sorted[0].date }
    })
    .sort((a, b) => b.first.localeCompare(a.first))
}

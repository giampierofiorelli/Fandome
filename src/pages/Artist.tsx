import { SuggestArtistSheet } from '../components/ShareSheet'
import { isAbout } from '../lib/postArtists'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { albums, concerts, parties } from '../data/seed'
import { starterPack } from '../lib/packs'
import { useStore } from '../store/store'
import { useComposer } from '../components/Composer'
import { FeedList } from '../components/FeedList'
import { AlbumCover, artistPhoto, Avatar, PhotoCredit, photoPos, Tabs } from '../components/ui'
import { AnimatePresence, motion } from 'motion/react'
import { useToast } from '../components/Toast'
import { sceneLine } from '../data/scenes'
import { AlbumRater, fmtScore, toScore } from '../components/AlbumRater'
import { topicFeed } from '../lib/feed'
import { artistById, isUpcoming } from '../lib/util'
import { IconCheck, IconHeadphones, IconHeart, IconPackage, IconPen, IconSend } from '../components/icons'

// Weverse-style artist space: one room per artist, with topic feeds
// (Bluesky custom feeds), albums to rate (Letterboxd) and shows.
export default function ArtistPage() {
  const { artistId = '' } = useParams()
  const artist = artistById(artistId)
  const { state, dispatch, me } = useStore()
  const compose = useComposer()
  const [tab, setTab] = useState('all')
  const [rating, setRating] = useState<string | null>(null)
  const [suggest, setSuggest] = useState(false)
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
        {artistPhoto(artist.id) && <img className="hero-artist-photo" src={artistPhoto(artist.id)!.url} alt={artist.name} style={{ objectPosition: photoPos(artistPhoto(artist.id)) }} />}
        <div className="hero-kicker">Fan room · independent</div>
        <h1 className="hero-name">{artist.name}</h1>
        <p className="hero-tagline">{artist.tagline}</p>
        {sceneLine(artist.id) && <p className="hero-scene">{sceneLine(artist.id)}</p>}
        <div className="hero-stats">
          <div>
            <div className="bignum">{fans.length}</div>
            <div className="hero-label">fans</div>
          </div>
          <div>
            <div className="bignum">{state.posts.filter((p) => isAbout(p, artist.id)).length}</div>
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
          <button className="glass-circle" onClick={() => setSuggest(true)} aria-label="Suggest this room to someone">
            <IconSend size={17} />
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
        <PhotoCredit id={artist.id} className="hero-credit" />
      </header>
      <div className="section-head center">
        <Tabs tabs={tabs} value={tab} onChange={setTab} />
      </div>

      {(tab === 'all' || feed) && <FeedList items={topicFeed(state.posts, artist.id, feed?.tags)} empty="No posts in this feed yet. Be the first!" />}

      {tab === 'albums' && (
        <>
          <p className="muted small center tab-hint">Tap an album to score it out of 10</p>
          <div className="album-grid">
            {myAlbums.map((al) => {
              const others = state.users.filter((u) => typeof u.ratings[al.id] === 'number').map((u) => toScore(u.ratings[al.id]))
              const avg = others.length ? others.reduce((x, y) => x + y, 0) / others.length : 0
              const mine = me?.ratings[al.id]
              const fav = me?.top4.includes(al.id)
              return (
                <button key={al.id} className="album-tile" onClick={() => setRating(al.id)}>
                  <span className="album-art">
                    <AlbumCover album={al} size={150} />
                    {fav && (
                      <span className="album-fav" aria-label="Favourite">
                        <IconHeart size={13} filled />
                      </span>
                    )}
                    <span className={mine ? 'album-score mine' : 'album-score'}>{mine ? fmtScore(toScore(mine)) : 'Rate'}</span>
                  </span>
                  <span className="album-title">{al.title}</span>
                  <span className="muted small">
                    {al.year} · {avg ? `fans ${fmtScore(Math.round(avg * 10) / 10)}` : 'no ratings yet'}
                  </span>
                </button>
              )
            })}
          </div>
        </>
      )}
      {suggest && <SuggestArtistSheet artistId={artist.id} onClose={() => setSuggest(false)} />}
      <AnimatePresence>{rating && <AlbumRater key={rating} albumId={rating} onClose={() => setRating(null)} />}</AnimatePresence>

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

// Upcoming: every show (that's what fans plan around). Past: just the tours,
// which is how fans remember them (no per-date list for now).
function ShowsTab({ artistId }: { artistId: string }) {
  const { state, dispatch, me } = useStore()
  const toast = useToast()
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
          const key = tourKey(artistId, t.tour)
          const ids = t.shows.map((c) => c.id)
          const n = state.users.filter((u) => u.tours?.includes(key) || ids.some((id) => u.attended.includes(id))).length
          const mine = Boolean(me && (me.tours?.includes(key) || ids.some((id) => me.attended.includes(id))))
          return (
            <div key={t.tour} className="row-item tour-row">
              <span className="tour-years">{t.years}</span>
              <span className="grow">
                <strong>{t.tour}</strong>
                <span className="muted small block">{n ? `${n} ${n === 1 ? 'fan was' : 'fans were'} there` : 'Were you there?'}</span>
              </span>
              <motion.button
                className={mine ? 'pill-btn ink small' : 'pill-btn glass small'}
                whileTap={{ scale: 0.92 }}
                aria-pressed={mine}
                onClick={() => {
                  if (me && !me.tours?.includes(key) && ids.some((id) => me.attended.includes(id))) return toast('You marked a show of this tour')
                  dispatch({ type: 'toggleTour', key })
                  if (!mine) toast(`Added to your diary: ${t.tour}`)
                }}
              >
                {mine ? (
                  <>
                    <IconCheck size={14} /> I was there
                  </>
                ) : (
                  'I was there'
                )}
              </motion.button>
            </div>
          )
        })}
        {!tours.length && <p className="empty">No past tours yet.</p>}
      </div>
    </>
  )
}

export const tourKey = (artistId: string, tour: string) => `${artistId}::${tour}`

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

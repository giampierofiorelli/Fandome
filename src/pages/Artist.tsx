import { SuggestArtistSheet } from '../components/ShareSheet'
import { isAbout } from '../lib/postArtists'
import { useRef, useState } from 'react'
import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom'
import { albums, artists, concerts, parties } from '../data/seed'
import { artistGenres, similarArtistsStable } from '../lib/similar'
import { avoidAlbums } from '../lib/suggest'
import { genreLabel } from '../lib/descriptors'
import { SuggestedArtist } from '../components/SuggestedArtist'
import { SceneBack } from '../components/SceneBack'
import { starterPack } from '../lib/packs'
import { useStore } from '../store/store'
import { useComposer } from '../components/Composer'
import { FeedList } from '../components/FeedList'
import { AlbumCover, artistPhoto, Avatar, PhotoCredit, photoPos, Tabs } from '../components/ui'
import { motion } from 'motion/react'
import { useToast } from '../components/Toast'
import { sceneLine, sceneOf } from '../data/scenes'
import { fmtScore, toScore } from '../components/AlbumRater'
import { topicFeed } from '../lib/feed'
import { albumHasArtist, artistById, isUpcoming } from '../lib/util'
import { IconCheck, IconHeadphones, IconHeart, IconPackage, IconPen, IconSend } from '../components/icons'

// Weverse-style artist space: one room per artist, with topic feeds
// (Bluesky custom feeds), albums to rate (Letterboxd) and shows.
export default function ArtistPage() {
  const { artistId = '' } = useParams()
  const artist = artistById(artistId)
  const { state, dispatch, me } = useStore()
  const compose = useComposer()
  // The open tab lives in the address (?tab=albums): coming back from an album lands on the same tab.
  const [params, setParams] = useSearchParams()
  const tab = params.get('tab') ?? 'all'
  const setTab = (t: string) => setParams(t === 'all' ? {} : { tab: t }, { replace: true })
  // The tab row stays on top while scrolling; switching tab from further down starts the new tab at its top.
  const tabsTop = useRef<HTMLDivElement>(null)
  const pickTab = (t: string) => {
    setTab(t)
    const y = tabsTop.current?.getBoundingClientRect().top ?? 0
    if (y < 0) window.scrollTo({ top: window.scrollY + y })
  }
  const [suggest, setSuggest] = useState(false)
  if (!artist) return <Navigate to="/explore" replace />

  const joined = Boolean(me?.fanSince[artist.id])
  const fans = state.users.filter((u) => u.fanSince[artist.id])
  const myAlbums = albums.filter((a) => albumHasArtist(a, artist.id)).sort((a, b) => a.year - b.year)
  const shows = concerts.filter((c) => c.artistId === artist.id).sort((a, b) => b.date.localeCompare(a.date))
  const pack = starterPack(state.posts, state.users, artist.id)
  const party = parties.find((p) => p.artistId === artist.id)
  const feed = artist.feeds.find((f) => f.id === tab)
  // "If you like this artist": computed from the descriptions of their albums.
  const albumIdsOf = (id: string) => albums.filter((a) => albumHasArtist(a, id)).map((a) => a.id)
  const soundGenres = artistGenres(albumIdsOf(artist.id), 8)
  const likeThem = soundGenres.length
    ? similarArtistsStable(artist.id, albumIdsOf, artists.map((a) => a.id), { countryOf: (id) => sceneOf(id)?.country, hide: me?.notForMe, avoid: avoidAlbums(me, albums) })
    : []

  const tabs = roomTabs(artist, likeThem.length > 0)

  return (
    <>
      <SceneBack />
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
      <div ref={tabsTop} />
      <div className="section-head center tabs-sticky">
        <Tabs tabs={tabs} value={tab} onChange={pickTab} />
      </div>

      {(tab === 'all' || feed) && <FeedList items={topicFeed(state.posts, artist.id, feed?.tags)} empty="No posts in this feed yet. Be the first!" />}

      {tab === 'similar' && (
        <>
          <p className="muted small center tab-hint">The sound across their albums</p>
          <div className="sound-genres artist-sound">
            {soundGenres.map((g) => (
              <span key={g} className="chip">
                {genreLabel(g)}
              </span>
            ))}
          </div>
          <div className="section-head">
            <h2>If you like {artist.name}</h2>
          </div>
          <div className="glass-card list">
            {likeThem.map((s) => (
              <SuggestedArtist key={s.artistId} artistId={s.artistId} reason={s.reason} newCountry={s.newCountry} />
            ))}
          </div>
          <p className="muted small suggest-why">
            From the sound of their albums, their producers and documented influences.{' '}
            <Link to="/terms#feeds" className="link-btn">
              How it works
            </Link>
          </p>
        </>
      )}
      {tab === 'albums' && (
        <>
          <p className="muted small center tab-hint">Tap an album to rate it and find similar music</p>
          <div className="album-grid">
            {myAlbums.map((al) => {
              const others = state.users.filter((u) => typeof u.ratings[al.id] === 'number').map((u) => toScore(u.ratings[al.id]))
              const avg = others.length ? others.reduce((x, y) => x + y, 0) / others.length : 0
              const mine = me?.ratings[al.id]
              const fav = me?.top4.includes(al.id)
              return (
                <Link key={al.id} to={`/album/${al.id}`} className="album-tile">
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
                </Link>
              )
            })}
          </div>
        </>
      )}
      {suggest && <SuggestArtistSheet artistId={artist.id} onClose={() => setSuggest(false)} />}

      {tab === 'shows' && <ShowsTab artistId={artist.id} touring={artist.touring !== false} />}

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
// Artists who passed away or split up (touring: false) have no upcoming shows: only their past tours.
function ShowsTab({ artistId, touring }: { artistId: string; touring: boolean }) {
  const { state, dispatch, me } = useStore()
  const toast = useToast()
  const all = concerts.filter((c) => c.artistId === artistId)
  const upcoming = all.filter((c) => isUpcoming(c.date)).sort((a, b) => a.date.localeCompare(b.date))
  const tours = groupTours(all.filter((c) => !isUpcoming(c.date)))
  const count = (ids: string[], key: 'attended' | 'going') => state.users.filter((u) => ids.some((id) => u[key].includes(id))).length

  return (
    <>
      {(touring || upcoming.length > 0) && (
        <div className="section-head">
          <h2>Upcoming shows</h2>
        </div>
      )}
      {!touring && !upcoming.length ? null : upcoming.length ? (
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

// The sections of an artist's room, also shown on its album pages to move back between sections.
export function roomTabs(artist: { feeds: { id: string; label: string }[]; touring?: boolean }, similar: boolean) {
  return [
    { id: 'all', label: 'All' },
    ...artist.feeds.map((f) => ({ id: f.id, label: f.label })),
    { id: 'albums', label: 'Albums' },
    ...(similar ? [{ id: 'similar', label: 'Similar' }] : []),
    { id: 'shows', label: artist.touring === false ? 'Tours' : 'Tours & shows' },
    { id: 'fans', label: 'Fans' },
  ]
}

import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { albums, concerts, parties, starterPacks } from '../data/seed'
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
  const pack = starterPacks.find((p) => p.artistId === artist.id)
  const party = parties.find((p) => p.artistId === artist.id)
  const feed = artist.feeds.find((f) => f.id === tab)

  const tabs = [
    { id: 'all', label: 'All' },
    ...artist.feeds.map((f) => ({ id: f.id, label: f.label })),
    { id: 'albums', label: 'Albums' },
    { id: 'shows', label: 'Shows' },
    { id: 'fans', label: 'Fans' },
  ]

  return (
    <>
      <header className="artist-hero" style={{ background: `linear-gradient(160deg, ${artist.color}55, transparent 70%)` }}>
        <div className="row-between">
          <div>
            <h1>{artist.name}</h1>
            <p className="muted">{artist.tagline}</p>
            <p className="small">
              <strong>{fans.length}</strong> <span className="muted">fans here · independent fan room, not affiliated with the artist</span>
            </p>
          </div>
          <button className={joined ? 'btn' : 'btn primary'} onClick={() => dispatch({ type: 'followArtist', artistId: artist.id })}>
            {joined ? <><IconCheck size={16} /> Joined</> : 'Join'}
          </button>
        </div>
        <div className="hero-actions">
          <button className="btn primary small" onClick={() => compose({ artistId: artist.id })}>
            <IconPen size={15} /> Post here
          </button>
          {pack && (
            <Link to={`/starter/${pack.id}`} className="btn small">
              <IconPackage size={15} /> Starter pack
            </Link>
          )}
          {party && (
            <Link to={`/party/${party.id}`} className="btn small">
              <IconHeadphones size={15} /> Listening party
            </Link>
          )}
        </div>
      </header>
      <div className="sticky">
        <Tabs tabs={tabs} value={tab} onChange={setTab} />
      </div>

      {(tab === 'all' || feed) && <FeedList items={topicFeed(state.posts, artist.id, feed?.tags)} empty="No posts in this feed yet. Be the first!" />}

      {tab === 'albums' && (
        <div className="album-list">
          {myAlbums.map((al) => {
            const ratings = state.users.map((u) => u.ratings[al.id]).filter((r): r is number => typeof r === 'number')
            const mine = me?.ratings[al.id] ?? 0
            const fav = me?.top4.includes(al.id)
            return (
              <div key={al.id} className="album-row">
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
                  <button className="btn small" onClick={() => compose({ reviewAlbumId: al.id, artistId: artist.id })}>
                    Review
                  </button>
                  <button
                    className={fav ? 'btn small active' : 'btn small'}
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

      {tab === 'shows' && (
        <div>
          {shows.map((c) => {
            const going = state.users.filter((u) => u.attended.includes(c.id) || u.going.includes(c.id)).length
            return (
              <Link key={c.id} to={`/c/${c.id}`} className="list-row show-row">
                <div className="date-badge">
                  <span>{new Date(c.date).getFullYear()}</span>
                </div>
                <div className="grow">
                  <strong>
                    {c.city}, {c.country}
                  </strong>
                  <div className="muted small">
                    {c.venue} · {c.tour} · {formatDate(c.date)}
                  </div>
                </div>
                <span className="chip">{isUpcoming(c.date) ? `${going} going` : `${going} were there`}</span>
              </Link>
            )
          })}
        </div>
      )}

      {tab === 'fans' && (
        <div>
          {fans
            .sort((a, b) => a.fanSince[artist.id] - b.fanSince[artist.id])
            .map((u) => (
              <Link key={u.id} to={`/u/${u.handle}`} className="list-row">
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

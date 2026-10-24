import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useStore } from '../store/store'
import { albumById, artistById } from '../lib/util'
import { albumFeed } from '../lib/feed'
import { FeedList } from '../components/FeedList'
import { AlbumCover, ArtistDisc } from '../components/ui'
import { AlbumRater, fmtScore, toScore } from '../components/AlbumRater'
import { useComposer } from '../components/Composer'
import { IconArrowUpRight, IconPen } from '../components/icons'
import { descriptorOf, genreLabel, releaseLabel } from '../lib/descriptors'
import { similarAlbums } from '../lib/similar'

// One page per album: reached from albums linked in posts. Rate it, and read what fans say.
export default function AlbumPage() {
  const { albumId } = useParams()
  const { state, me } = useStore()
  const compose = useComposer()
  const [rating, setRating] = useState(false)
  const album = albumById(albumId)
  if (!album) return <Navigate to="/explore" replace />
  const artist = artistById(album.artistId)
  const scores = state.users.filter((u) => typeof u.ratings[album.id] === 'number').map((u) => toScore(u.ratings[album.id]))
  const avg = scores.length ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10 : 0
  const mine = me?.ratings[album.id]
  const items = albumFeed(state.posts, album.id)
  const sound = descriptorOf(album.id)
  const similar = similarAlbums(album.id, { artistOf: (id) => albumById(id)?.artistId })

  return (
    <>
      <header className="hero-soft album-hero" style={{ ['--tint' as string]: artist?.color }}>
        <div className="album-hero-cover">
          <AlbumCover album={album} size={168} />
        </div>
        <div className="hero-kicker">
          {releaseLabel(album.id)} · {album.year}
        </div>
        <h1 className="hero-name album-hero-title">{album.title}</h1>
        {artist && (
          <Link to={`/a/${artist.id}`} className="album-hero-artist">
            <ArtistDisc id={artist.id} size={24} /> {artist.name}
          </Link>
        )}
        <div className="hero-stats">
          <div>
            <div className="bignum">{avg ? fmtScore(avg) : '–'}</div>
            <div className="hero-label">fans’ score / 10</div>
          </div>
          <div>
            <div className="bignum">{scores.length}</div>
            <div className="hero-label">ratings</div>
          </div>
          <div>
            <div className="bignum">{items.length}</div>
            <div className="hero-label">posts</div>
          </div>
        </div>
        <div className="hero-actions">
          <button className={mine ? 'pill-btn glass' : 'pill-btn ink'} onClick={() => setRating(true)}>
            {mine ? `Your score ${fmtScore(toScore(mine))}` : 'Rate this album'}
          </button>
          <button className="pill-btn glass" onClick={() => compose({ artistId: album.artistId, albumId: album.id })}>
            <IconPen size={15} /> Talk about it
          </button>
        </div>
      </header>
      {sound && (
        <>
          <div className="section-head">
            <h2>The sound</h2>
          </div>
          <div className="album-sound">
            <div className="sound-genres">
              {sound.genres.map((g) => (
                <span key={g} className="chip">
                  {genreLabel(g)}
                </span>
              ))}
            </div>
            {sound.scene && <p className="small sound-line">{sound.scene}</p>}
            {sound.producers.length > 0 && <p className="muted small sound-line">Produced by {sound.producers.join(', ')}</p>}
          </div>
        </>
      )}
      {similar.length > 0 && (
        <>
          <div className="section-head">
            <h2>If you like this album</h2>
            <Link to="/legal#feeds" className="muted small">
              How it works
            </Link>
          </div>
          <div className="album-chart">
            {similar.map((s) => {
              const al = albumById(s.albumId)
              if (!al) return null
              return (
                <Link key={al.id} to={`/album/${al.id}`} className="chart-row similar-row">
                  <AlbumCover album={al} size={52} />
                  <span className="grow chart-row-info">
                    <strong>{al.title}</strong>
                    <span className="muted small block">
                      {artistById(al.artistId)?.name} · {al.year}
                    </span>
                    <span className="small block similar-why">{s.reasons.join(' · ')}</span>
                  </span>
                  <IconArrowUpRight size={16} />
                </Link>
              )
            })}
          </div>
        </>
      )}
      <div className="section-head">
        <h2>What fans say</h2>
      </div>
      <FeedList items={items} empty="No posts about this album yet. Start the conversation." />
      <AnimatePresence>{rating && <AlbumRater albumId={album.id} onClose={() => setRating(false)} />}</AnimatePresence>
    </>
  )
}

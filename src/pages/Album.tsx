import { instrumentLabel } from '../data/instruments'
import { productionLabel } from '../data/production'
import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../store/store'
import { albumArtistIds, albumById, albumHasArtist, artistById } from '../lib/util'
import { albumFeed } from '../lib/feed'
import { FeedList } from '../components/FeedList'
import { AlbumCover, ArtistDisc, Tabs } from '../components/ui'
import { AlbumRater, fmtScore, toScore } from '../components/AlbumRater'
import { useComposer } from '../components/Composer'
import { IconPen } from '../components/icons'
import { SimilarList } from '../components/SimilarList'
import { SceneBack } from '../components/SceneBack'
import { descriptorOf, genreLabel, releaseLabel } from '../lib/descriptors'
import { artistGenres, similarAlbumsStable } from '../lib/similar'
import { roomTabs } from './Artist'
import { avoidAlbums } from '../lib/suggest'
import { albums } from '../data/seed'
import { ESSENTIAL_LABEL, essentialAlbums } from '../lib/essentials'
import { sceneOf } from '../data/scenes'

// One page per album: reached from albums linked in posts. Rate it, and read what fans say.
export default function AlbumPage() {
  const { albumId } = useParams()
  const { state, me, dispatch } = useStore()
  const compose = useComposer()
  const [rating, setRating] = useState(false)
  const navigate = useNavigate()
  const album = albumById(albumId)
  if (!album) return <Navigate to="/explore" replace />
  const artist = artistById(album.artistId)
  // One of the records to start with for this artist (same list as "Start here" on the artist page).
  const essential = artist
    ? essentialAlbums(albums.filter((a) => albumHasArtist(a, artist.id)).sort((a, b) => a.year - b.year).map((a) => a.id)).find((e) => e.id === album.id)
    : undefined
  const scores = state.users.filter((u) => typeof u.ratings[album.id] === 'number').map((u) => toScore(u.ratings[album.id]))
  const avg = scores.length ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10 : 0
  const mine = me?.ratings[album.id]
  const items = albumFeed(state.posts, album.id)
  const sound = descriptorOf(album.id)
  const artistOfAlbum = (id: string) => albumById(id)?.artistId
  const similar = similarAlbumsStable(album.id, { artistOf: artistOfAlbum, artistsOf: (id) => { const x = albumById(id); return x ? albumArtistIds(x) : [] }, countryOf: (id) => sceneOf(artistOfAlbum(id) ?? '')?.country, hide: me?.notForMe, avoid: avoidAlbums(me, albums) })

  // The artist room's sections stay on top: tap one to go back to the room on that section.
  const room = artist ? roomTabs(artist, artistGenres(albums.filter((a) => albumHasArtist(a, artist.id)).map((a) => a.id), 1).length > 0) : []

  return (
    <>
      <SceneBack />
      {artist && (
        <div className="section-head center tabs-sticky album-room-tabs">
          <Tabs tabs={room} value="albums" onChange={(t) => navigate(t === 'all' ? `/a/${artist.id}` : `/a/${artist.id}?tab=${t}`)} />
        </div>
      )}
      <header className="hero-soft album-hero" style={{ ['--tint' as string]: artist?.color }}>
        <div className="album-hero-cover">
          <AlbumCover album={album} size={168} />
        </div>
        <div className="hero-kicker">
          {releaseLabel(album.id)} · {album.year}
        </div>
        <h1 className="hero-name album-hero-title">{album.title}</h1>
        {essential && artist && (
          <span className={`essential-pill album-hero-essential ${essential.kind}`}>
            ✦ {ESSENTIAL_LABEL[essential.kind]} · {artist.name}
          </span>
        )}
        {artist && (
          <div className="album-hero-artists">
            {[artist, ...(album.withArtists ?? []).map((id) => artistById(id)).filter(Boolean)].map((a) => (
              <Link key={a!.id} to={`/a/${a!.id}`} className="album-hero-artist">
                <ArtistDisc id={a!.id} size={24} /> {a!.name}
              </Link>
            ))}
          </div>
        )}
        {album.credit && <p className="muted small album-credit">{album.credit}</p>}
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
            {sound.instruments.length > 0 && <p className="small sound-line">Instruments: {sound.instruments.map(instrumentLabel).join(', ')}</p>}
            {sound.production.length > 0 && <p className="small sound-line">Production: {sound.production.map(productionLabel).join(', ')}</p>}
            {sound.producers.length > 0 && <p className="muted small sound-line">Produced by {sound.producers.join(', ')}</p>}
          </div>
        </>
      )}
      {(similar.length > 0 || sound) && (
        <>
          <div className="section-head">
            <h2>If you like this album</h2>
            <Link to="/terms#feeds" className="muted small">
              How it works
            </Link>
          </div>
          {similar.length > 0 ? (
            <SimilarList items={similar} onHide={me ? (id) => dispatch({ type: 'notForMe', id }) : undefined} />
          ) : (
            <p className="muted small">No album close enough yet. We only suggest real matches: more will come as more albums are described.</p>
          )}
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

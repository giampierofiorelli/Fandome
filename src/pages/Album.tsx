import { instrumentLabel } from '../data/instruments'
import { productionLabel } from '../data/production'
import { useState, type ReactNode } from 'react'
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
import { coversOf } from '../data/covers'
import { legacyOf, traceOf } from '../lib/legacy'
import { DESCRIBED_ALBUMS, storedFinding } from '../lib/findings'

// One fact of the sound section: a small dot-matrix label, then the value.
function SoundRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="sound-row">
      <div className="sound-label">{label}</div>
      <div className="sound-value">{children}</div>
    </div>
  )
}

// Covers credited on the record, in both directions: what this album covers, and who covered its songs.
function CoverLines({ albumId }: { albumId: string }) {
  const { covers, coveredBy } = coversOf(albumId)
  const link = (id: string) => {
    const a = albumById(id)
    const who = a ? artistById(a.artistId)?.name : undefined
    return a ? <Link to={`/album/${a.id}`}>{who ? `${who}, ` : ''}{a.title} ({a.year})</Link> : id
  }
  return (
    <>
      {covers.length > 0 && (
        <SoundRow label="Covers">
          {covers.map((c) => (
            <span key={`c-${c.song}`} className="sound-cover">
              <b>{c.song}</b> <span className="muted">first recorded on</span> {link(c.original)}
            </span>
          ))}
        </SoundRow>
      )}
      {coveredBy.length > 0 && (
        <SoundRow label="Covered by">
          {coveredBy.map((c) => (
            <span key={`b-${c.song}-${c.cover}`} className="sound-cover">
              <b>{c.song}</b> <span className="muted">on</span> {link(c.cover)}
            </span>
          ))}
        </SoundRow>
      )}
    </>
  )
}

// The sources shown under the legacy score: professional ones only (owner, Oct 2026: never Wikipedia; when only
// Wikipedia supports it, the score shows without a source line). Links are left out.
const shownSources = (text: string) =>
  text.split(/\s+\|\s+/).filter((x) => !/wikipedia/i.test(x)).map((x) => x.replace(/\s*https?:\/\/\S+/g, '').trim()).filter(Boolean).join(' | ')

// What the album left behind: the legacy score from sources, and how its new traits spread in the albums we
// describe from its area afterwards (a trace in the data, not a proof of cause).
// "Fandome's data shows" (owner, Oct 2026): when our own analysis finds a pioneer (findingOf), the page says so by
// itself, labelled as ours, even where no critic has said it.
function LegacyBox({ albumId }: { albumId: string }) {
  const legacy = legacyOf(albumId)
  const finding = storedFinding(albumId)
  const sourced = legacy && legacy.legacy >= 3 ? legacy : undefined
  if (!sourced && !finding) return null
  const trace = traceOf(albumId)
  const head = (finding && trace?.spread.find((s) => s.trait === finding.trait)) || trace?.spread[0]
  const others = (trace?.spread ?? []).filter((s) => s.trait !== head?.trait).slice(0, 3)
  const field = trace?.field.join(' and ').toLowerCase()
  const pct = (x: number) => `${Math.round(100 * x)}%`
  const album = albumById(albumId)!
  const artistName = artistById(album.artistId)?.name
  return (
    <>
      <div className="section-head">
        <h2>What it left behind</h2>
      </div>
      <div className="sound-facts glass-card">
        {finding && (
          <div className="sound-row data-finding">
            <div className="sound-label data-label">Fandome’s data shows</div>
            <div className="sound-value">
              <b>{album.title}</b> brought {finding.trait.toLowerCase()} to {finding.field.join(' and ').toLowerCase()} before most albums of its time, and the albums that took it up sound more like it than like its contemporaries.
            </div>
          </div>
        )}
        {sourced && (
          <div className="sound-row">
            <div className="sound-label">Legacy, from the sources</div>
            <div className="sound-value">
              <span className="legacy-dots" aria-label={`${sourced.legacy} out of 5`}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className={i <= sourced.legacy ? 'on' : ''} />
                ))}
              </span>
              {shownSources(sourced.sources) && <span className="muted small legacy-source">{shownSources(sourced.sources)}</span>}
            </div>
          </div>
        )}
        {head && trace && (
          <div className="sound-row legacy-headline">
            <div className="sound-label">{head.trait} in {field}, before it and after</div>
            <div className="legacy-jump">
              <span className="bignum">{pct(head.before)}</span>
              <span className="legacy-arrow" aria-hidden="true">→</span>
              <span className="bignum">{pct(head.after)}</span>
            </div>
            <div className="muted small">of the albums we describe, from the 6 years before to {head.when}–{String(head.when + 2).slice(-2)}</div>
            {trace.followers.total > 0 && (
              <div className="small legacy-followers">
                <b>{trace.followers.linked} of {trace.followers.total}</b> albums that took up its new sound are documented as linked to {artistName}: a critic's comparison, an influence they name, or the same producers.
              </div>
            )}
          </div>
        )}
        {others.length > 0 && (
          <div className="sound-row">
            <div className="sound-label">Also spread after it, in {field}</div>
            <div className="sound-value">
              {others.map((s) => (
                <span key={s.trait} className="sound-cover">
                  <b>{s.trait}</b> <span className="muted">from {pct(s.before)} to {pct(s.after)} of the albums we describe, by {s.when + 2}</span>
                </span>
              ))}
            </div>
          </div>
        )}
        {finding && (
          <div className="muted small data-method">
            {sourced ? 'The critics agree it left a mark. ' : legacy ? 'The critics we found credit it with less: this is our finding. ' : 'No critic we found has said this yet: it is our finding. '}
            Measured on {DESCRIBED_ALBUMS.toLocaleString('en')} albums described one by one from sources, with Fandome’s own analysis of when each sound appeared and how far it spread. A trend in the data, not proof of cause.
          </div>
        )}
      </div>
    </>
  )
}

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
  const covers = coversOf(album.id)
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
          <span className="album-hero-essential">
            <span className="neon-star" aria-hidden="true">✦</span> {ESSENTIAL_LABEL[essential.kind]}
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
            <div className="sound-facts glass-card">
              {sound.scene && <SoundRow label="Scene">{sound.scene}</SoundRow>}
              {sound.instruments.length > 0 && <SoundRow label="Instruments">{sound.instruments.map(instrumentLabel).join(' · ')}</SoundRow>}
              {sound.production.length > 0 && <SoundRow label="Production">{sound.production.map(productionLabel).join(' · ')}</SoundRow>}
              {sound.producers.length > 0 && <SoundRow label="Produced by">{sound.producers.join(' · ')}</SoundRow>}
              <CoverLines albumId={album.id} />
            </div>
          </div>
        </>
      )}
      {!sound && (covers.covers.length > 0 || covers.coveredBy.length > 0) && (
        <div className="album-sound">
          <div className="sound-facts glass-card">
            <CoverLines albumId={album.id} />
          </div>
        </div>
      )}
      <LegacyBox albumId={album.id} />
      {(similar.length > 0 || sound) && (
        <>
          <div className="section-head">
            <h2>If you like this album</h2>
            <Link to="/terms#similar" className="muted small">
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

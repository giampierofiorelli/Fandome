import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store/store'
import { artists } from '../data/seed'
import { SCENES, isLocalArtist } from '../data/scenes'
import { SCENE_DEFS, groupOf } from '../lib/scenePath'
import { artistPhoto, photoPos } from '../components/ui'
import { IconArrowUpRight, IconSearch } from '../components/icons'

const fold = (t: string) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
const GENRES = [
  { id: 'pop', label: 'Pop' },
  { id: 'rock', label: 'Rock' },
  { id: 'urban', label: 'Rap & R&B' },
  { id: 'dance', label: 'Dance & electronic' },
  { id: 'songwriter', label: 'Singer-songwriters' },
  { id: 'roots', label: 'Folk & roots' },
  { id: 'classical', label: 'Opera & classical' },
]
const PAGE = 48

// Every fan room: yours first, then A–Z; search, scene and genre filters.
export default function ArtistsPage() {
  const { me } = useStore()
  const [q, setQ] = useState('')
  const [scene, setScene] = useState('')
  const [genre, setGenre] = useState('')
  const [shown, setShown] = useState(PAGE)
  const mine = me ? Object.keys(me.fanSince) : []
  const inScene = (id: string) => {
    if (!scene) return true
    if (scene === 'yours') return mine.includes(id)
    const def = SCENE_DEFS.find((d) => d.id === scene)
    return Boolean(def && SCENES[id] && def.countries.includes(SCENES[id].country) && isLocalArtist(id))
  }
  const list = [...artists]
    .filter((a) => (!q || fold(a.name).includes(fold(q))) && inScene(a.id) && (!genre || groupOf(a.id) === genre))
    .sort((x, y) => Number(mine.includes(y.id)) - Number(mine.includes(x.id)) || x.name.localeCompare(y.name, 'en', { sensitivity: 'base' }))
  const filters = [{ id: '', label: 'All' }, ...(mine.length ? [{ id: 'yours', label: 'Yours' }] : []), ...SCENE_DEFS.map((d) => ({ id: d.id, label: d.name }))]

  return (
    <>
      <header className="hello">
        <div className="eyebrow">Artists</div>
        <h1 className="display">
          Every <span className="display-strong">fan room</span>
        </h1>
        <div className="search-wrap">
          <IconSearch size={18} />
          <input className="search" type="search" name="fandome-artist-search" inputMode="search" enterKeyHint="search" autoComplete="off" autoCorrect="off" autoCapitalize="none" spellCheck={false} placeholder={`Search ${artists.length} artists`} value={q} onChange={(e) => (setQ(e.target.value), setShown(PAGE))} aria-label="Search artists" />
        </div>
      </header>
      <div className="filter-row" role="group" aria-label="Scene">
        {filters.map((f) => (
          <button key={f.id || 'all'} className={scene === f.id ? 'chip filter on' : 'chip filter'} aria-pressed={scene === f.id} onClick={() => (setScene(f.id), setShown(PAGE))}>
            {f.label}
          </button>
        ))}
      </div>
      <div className="filter-row" role="group" aria-label="Genre">
        {GENRES.map((g) => (
          <button key={g.id} className={genre === g.id ? 'chip filter on' : 'chip filter'} aria-pressed={genre === g.id} onClick={() => (setGenre(genre === g.id ? '' : g.id), setShown(PAGE))}>
            {g.label}
          </button>
        ))}
      </div>
      <p className="muted small artists-count">
        {list.length} {list.length === 1 ? 'room' : 'rooms'}
      </p>
      <div className="room-grid">
        {list.slice(0, shown).map((a) => (
          <Link key={a.id} to={`/a/${a.id}`} className="room-tile" style={{ ['--tint' as string]: a.color }}>
            {artistPhoto(a.id) && <img className="room-photo" src={artistPhoto(a.id)!.url} alt="" loading="lazy" decoding="async" style={{ objectPosition: photoPos(artistPhoto(a.id)) }} />}
            <span className="room-name">{a.name}</span>
            <span className="room-sub">{a.tagline}</span>
            <span className="room-go">
              <IconArrowUpRight size={16} />
            </span>
          </Link>
        ))}
      </div>
      {list.length === 0 && <p className="muted center">No rooms match. Try another filter.</p>}
      {shown < list.length && (
        <button className="btn rooms-more" onClick={() => setShown(shown + PAGE)}>
          Show more ({list.length - shown})
        </button>
      )}
    </>
  )
}

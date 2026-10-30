import { Link } from 'react-router-dom'
import { legacyOf } from '../lib/legacy'
import { DESCRIBED_ALBUMS, FINDINGS } from '../lib/findings'
import { albumById, artistById } from '../lib/util'
import { AlbumCover } from '../components/ui'

// "Fandome's data shows" (owner, Oct 2026): every pioneer our own analysis finds, in order of release, with what
// spread after it and whether the critics have said so too.
export default function FindingsPage() {
  const list = FINDINGS.filter((f) => albumById(f.albumId))
  const pct = (x: number) => `${Math.round(100 * x)}%`
  const critics = (id: string) => (legacyOf(id)?.legacy ?? 0) >= 3
  const ours = list.filter((f) => !critics(f.albumId)).length
  return (
    <>
      <header className="hello">
        <div className="eyebrow">Fandome’s data shows</div>
        <h1 className="display">
          Albums that got there <span className="display-strong">first</span>
        </h1>
        <p className="muted findings-intro">
          Records that brought a sound to their area before most albums of their time, and whose followers sound more like them than like their contemporaries. Measured on {DESCRIBED_ALBUMS.toLocaleString('en')} albums described one
          by one from sources. {ours} of {list.length} are our own findings: no critic we found credits them this much. A trend in the data, not proof of cause.
        </p>
      </header>
      <div className="glass-card list">
        {list.map((f) => {
          const album = albumById(f.albumId)!
          return (
            <Link key={f.albumId} to={`/album/${f.albumId}`} className="row-item">
              <AlbumCover album={album} size={48} />
              <span className="grow">
                <strong>{album.title}</strong>
                <span className="muted small block">
                  {artistById(album.artistId)?.name} · {f.year}
                </span>
                <span className="small block">
                  {f.trait}: <b>{pct(f.before)} → {pct(f.after)}</b> <span className="muted">in {f.field.join(' and ').toLowerCase()}</span>
                </span>
              </span>
              <span className={critics(f.albumId) ? 'chip finding-tag' : 'chip finding-tag ours'}>{critics(f.albumId) ? 'Critics agree' : 'Our finding'}</span>
            </Link>
          )
        })}
      </div>
    </>
  )
}

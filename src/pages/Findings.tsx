import { Link } from 'react-router-dom'
import { legacyOf } from '../lib/legacy'
import { DESCRIBED_ALBUMS, FINDINGS, LATE, NICHE, REVIVALS, medianOf } from '../lib/findings'
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

      {LATE.length > 0 && (
        <>
          <div className="section-head">
            <h2>Recognised late</h2>
          </div>
          <p className="muted small findings-intro">Albums few drew on in their first ten years, and many did fifteen or more years later: the artists and critics who name them came a generation after.</p>
          <div className="glass-card list">
            {LATE.map((l) => {
              const album = albumById(l.albumId)
              if (!album) return null
              return (
                <Link key={l.albumId} to={`/album/${l.albumId}`} className="row-item">
                  <AlbumCover album={album} size={48} />
                  <span className="grow">
                    <strong>{album.title}</strong>
                    <span className="muted small block">{artistById(album.artistId)?.name}</span>
                    <span className="small block">
                      <b>{l.n - l.early} of {l.n}</b> <span className="muted">drew on it 15+ years later; half came {l.medianLag} or more years after</span>
                    </span>
                  </span>
                </Link>
              )
            })}
          </div>
        </>
      )}

      {REVIVALS.length > 0 && (
        <>
          <div className="section-head">
            <h2>Sounds that came back</h2>
          </div>
          <div className="glass-card findings-head">
            <div className="bignum">{medianOf(REVIVALS.map((r) => r.gap))} years</div>
            <div className="muted small">is the typical gap (the median of {REVIVALS.length} revivals in our data) between a sound’s first peak and its return, carried mostly by artists who started after the first peak. Critics speak of a 20–30-year cycle: our data measures it.</div>
          </div>
          <div className="glass-card list">
            {REVIVALS.slice(0, 12).map((r) => (
              <div key={r.genre} className="row-item">
                <span className="grow">
                  <strong>{r.label}</strong>
                  <span className="small block">
                    {r.peak[0]} <b>{pct(r.peak[1])}</b> → {r.low[0]} <b>{pct(r.low[1])}</b> → {r.back[0]} <b>{pct(r.back[1])}</b>
                  </span>
                  <span className="muted small block">of the albums we describe, back after {r.gap} years</span>
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      {NICHE.length > 0 && (
        <>
          <div className="section-head">
            <h2>From niche to mainstream</h2>
          </div>
          <div className="glass-card findings-head">
            <div className="bignum">{medianOf(NICHE.map((n) => n.lag))} years</div>
            <div className="muted small">is the typical time (the median of {NICHE.length} genres) from 10% of the less commercial albums we describe to 10% of the most commercial ones.</div>
          </div>
          <div className="glass-card list">
            {NICHE.map((n) => (
              <div key={n.genre} className="row-item">
                <span className="grow">
                  <strong>{n.label}</strong>
                  <span className="muted small block">
                    niche {n.niche} → mainstream {n.mainstream} · {n.lag ? `${n.lag} years` : 'the same years'}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </>
      )}
      <p className="muted small findings-intro">Read from the albums described so far: the shares follow which artists we have described, and grow surer as the catalogue grows.</p>
    </>
  )
}

import { Link } from 'react-router-dom'
import type { Similar } from '../lib/similar'
import { albumById, artistById } from '../lib/util'
import { AlbumCover } from './ui'
import { IconX } from './icons'
import { COUNTRY_NAMES, fromCountry } from '../data/scenes'

const countryName = (code: string) => COUNTRY_NAMES[code] ?? code

// Albums suggested by the descriptor engine, each with the reason it is shown.
// "Not for me" hides one for good (only on this device).
export function SimilarList({ items, onHide }: { items: Similar[]; onHide?: (albumId: string) => void }) {
  return (
    <div className="album-chart">
      {items.map((s) => {
        const al = albumById(s.albumId)
        if (!al) return null
        return (
          <div key={al.id} className="similar-item">
            <Link to={`/album/${al.id}`} className="chart-row similar-row">
              <AlbumCover album={al} size={52} />
              <span className="grow chart-row-info">
                <strong>{al.title}</strong>
                <span className="muted small block">
                  {artistById(al.artistId)?.name} · {al.year}
                  {s.newCountry && ` · ${fromCountry(countryName(s.newCountry))}`}
                </span>
                <span className="small block similar-why">{s.reasons.join(' · ')}</span>
              </span>
            </Link>
            {onHide && (
              <button className="not-for-me" aria-label={`Not for me: ${al.title}`} title="Not for me" onClick={() => onHide(al.id)}>
                <IconX size={14} />
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}

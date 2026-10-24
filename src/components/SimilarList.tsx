import { Link } from 'react-router-dom'
import type { Similar } from '../lib/similar'
import { albumById, artistById } from '../lib/util'
import { AlbumCover } from './ui'
import { IconArrowUpRight } from './icons'

// Albums suggested by the descriptor engine, each with the reason it is shown.
export function SimilarList({ items }: { items: Similar[] }) {
  return (
    <div className="album-chart">
      {items.map((s) => {
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
  )
}

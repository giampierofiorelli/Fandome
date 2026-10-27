import { Link } from 'react-router-dom'
import type { Similar } from '../lib/similar'
import { albumById, artistById } from '../lib/util'
import { AlbumCover } from './ui'
import { IconSparkle, IconX } from './icons'
import { useStore } from '../store/store'
import { COUNTRY_NAMES, sceneOf } from '../data/scenes'

const countryName = (code: string) => COUNTRY_NAMES[code] ?? code

// Where every suggested artist comes from (owner: for everyone, not only discoveries): the country's name, as a
// quiet tag next to the title.
export function CountryTag({ code, discovery }: { code?: string; discovery?: boolean }) {
  if (!code) return null
  const name = countryName(code)
  return (
    <span className="country-tag" title={discovery ? `From a local scene in ${name}` : `From ${name}`}>
      {name}
    </span>
  )
}

// Albums suggested by the descriptor engine, each with the reason it is shown.
// "Not for me" hides one for good (only on this device).
export function SimilarList({ items, onHide }: { items: Similar[]; onHide?: (albumId: string) => void }) {
  const { me, dispatch } = useStore()
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
                <span className="title-line">
                  <strong>{al.title}</strong>
                  <CountryTag code={s.newCountry ?? sceneOf(al.artistId)?.country} discovery={Boolean(s.newCountry)} />
                </span>
                <span className="muted small block">
                  {al.credit ?? artistById(al.artistId)?.name} · {al.year}
                </span>
                <span className="small block similar-why">{s.reasons.join(' · ')}</span>
              </span>
            </Link>
            {me && (
              <span className="suggest-tools">
                <button
                  className={me.discovered?.includes(al.id) ? 'not-for-me on' : 'not-for-me'}
                  aria-pressed={Boolean(me.discovered?.includes(al.id))}
                  aria-label={`New to me: ${al.title}`}
                  title="New to me"
                  onClick={() => dispatch({ type: 'newToMe', id: al.id })}
                >
                  <IconSparkle size={14} />
                </button>
                {onHide && (
                  <button className="not-for-me" aria-label={`Not for me: ${al.title}`} title="Not for me" onClick={() => onHide(al.id)}>
                    <IconX size={14} />
                  </button>
                )}
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}

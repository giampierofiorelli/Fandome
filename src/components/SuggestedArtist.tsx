import { Link } from 'react-router-dom'
import { useStore } from '../store/store'
import { artistById } from '../lib/util'
import { COUNTRY_NAMES, fromCountry } from '../data/scenes'
import { ArtistDisc } from './ui'
import { IconCheck, IconSparkle, IconX } from './icons'

// One suggested artist: why it is shown, Follow, "New to me" and "Not for me".
export function SuggestedArtist({ artistId, reason, newCountry, kicker }: { artistId: string; reason: string; newCountry?: string; kicker?: string }) {
  const { me, dispatch } = useStore()
  const a = artistById(artistId)
  if (!a) return null
  const following = Boolean(me?.fanSince[a.id])
  const isNew = Boolean(me?.discovered?.includes(a.id))
  return (
    <div className="row-item">
      <Link to={`/a/${a.id}`} className="suggest-link">
        <ArtistDisc id={a.id} size={44} />
        <span className="grow">
          {kicker && <span className="suggest-kicker">{kicker}</span>}
          <strong>{a.name}</strong>
          <span className="muted small block">
            {reason}
            {newCountry && ` · ${fromCountry(COUNTRY_NAMES[newCountry] ?? newCountry)}`}
          </span>
        </span>
      </Link>
      {me && (
        <>
          <button className={following ? 'pill-btn glass small' : 'pill-btn light small'} onClick={() => dispatch({ type: 'followArtist', artistId: a.id })}>
            {following ? <IconCheck size={14} /> : 'Follow'}
          </button>
          <span className="suggest-tools">
            <button className={isNew ? 'not-for-me on' : 'not-for-me'} aria-pressed={isNew} aria-label={`New to me: ${a.name}`} title="New to me" onClick={() => dispatch({ type: 'newToMe', id: a.id })}>
              <IconSparkle size={14} />
            </button>
            <button className="not-for-me" aria-label={`Not for me: ${a.name}`} title="Not for me" onClick={() => dispatch({ type: 'notForMe', id: a.id })}>
              <IconX size={14} />
            </button>
          </span>
        </>
      )}
    </div>
  )
}

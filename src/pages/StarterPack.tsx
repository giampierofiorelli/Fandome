import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { starterPacks } from '../data/seed'
import { useStore } from '../store/store'
import { Avatar } from '../components/ui'
import { artistById } from '../lib/util'

// Shareable Bluesky-style starter pack: a link that onboards new fans
// straight into a group of people worth following.
export default function StarterPackPage() {
  const { packId } = useParams()
  const pack = starterPacks.find((p) => p.id === packId)
  const { dispatch, me, userById } = useStore()
  const [copied, setCopied] = useState(false)
  if (!pack) return <Navigate to="/" replace />
  const artist = artistById(pack.artistId)!
  const allFollowed = me ? pack.userIds.every((id) => id === me.id || me.following.includes(id)) : false

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${location.origin}${location.pathname}#/starter/${pack.id}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard blocked: ignore in prototype
    }
  }

  return (
    <>
      <header className="artist-hero" style={{ background: `linear-gradient(160deg, ${artist.color}55, transparent 70%)` }}>
        <div className="muted small">📦 STARTER PACK</div>
        <h1>{pack.title}</h1>
        <p className="muted">
          Curated by @{userById(pack.curatorId)?.handle} · {pack.userIds.length} fans · <Link to={`/a/${artist.id}`}>{artist.name} room</Link>
        </p>
        <div className="hero-actions">
          {me ? (
            <button className="btn primary" disabled={allFollowed} onClick={() => dispatch({ type: 'followMany', userIds: pack.userIds })}>
              {allFollowed ? '✓ Following all' : 'Follow all'}
            </button>
          ) : (
            <Link to="/welcome" className="btn primary">
              Join Fandome to follow
            </Link>
          )}
          <button className="btn" onClick={copy}>
            {copied ? '✓ Link copied' : 'Share pack'}
          </button>
        </div>
      </header>
      {pack.userIds.map((id) => {
        const u = userById(id)
        if (!u) return null
        const on = me?.following.includes(id)
        return (
          <div key={id} className="list-row">
            <Avatar user={u} size={40} />
            <Link to={`/u/${u.handle}`} className="grow">
              <strong>{u.name}</strong> <span className="muted">@{u.handle}</span>
              <div className="muted small">{u.bio}</div>
            </Link>
            {me && u.id !== me.id && (
              <button className={on ? 'btn small' : 'btn primary small'} onClick={() => dispatch({ type: 'follow', userId: id })}>
                {on ? 'Following' : 'Follow'}
              </button>
            )}
          </div>
        )
      })}
    </>
  )
}

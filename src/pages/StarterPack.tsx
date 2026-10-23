import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { starterPacks } from '../data/seed'
import { useStore } from '../store/store'
import { Avatar } from '../components/ui'
import { artistById } from '../lib/util'
import { IconCheck, IconLink, IconPackage } from '../components/icons'

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
      <header className="hero-soft" style={{ ['--tint' as string]: artist.color }}>
        <div className="eyebrow"><IconPackage size={14} /> Starter pack</div>
        <h1 className="hero-name">{pack.title}</h1>
        <p className="hero-tagline">
          Curated by @{userById(pack.curatorId)?.handle} · {pack.userIds.length} fans · <Link to={`/a/${artist.id}`}>{artist.name} room</Link>
        </p>
        <div className="hero-actions">
          {me ? (
            <button className="pill-btn ink" disabled={allFollowed} onClick={() => dispatch({ type: 'followMany', userIds: pack.userIds })}>
              {allFollowed ? <><IconCheck size={16} /> Following all</> : 'Follow all'}
            </button>
          ) : (
            <Link to="/welcome" className="pill-btn ink">
              Join Fandome to follow
            </Link>
          )}
          <button className="pill-btn glass" onClick={copy}>
            <IconLink size={15} /> {copied ? 'Link copied' : 'Share pack'}
          </button>
        </div>
      </header>
      <div className="glass-card list">
      {pack.userIds.map((id) => {
        const u = userById(id)
        if (!u) return null
        const on = me?.following.includes(id)
        return (
          <div key={id} className="row-item">
            <Avatar user={u} size={40} />
            <Link to={`/u/${u.handle}`} className="grow">
              <strong>{u.name}</strong> <span className="muted">@{u.handle}</span>
              <div className="muted small">{u.bio}</div>
            </Link>
            {me && u.id !== me.id && (
              <button className={on ? 'pill-btn glass small' : 'pill-btn ink small'} onClick={() => dispatch({ type: 'follow', userId: id })}>
                {on ? 'Following' : 'Follow'}
              </button>
            )}
          </div>
        )
      })}
      </div>
    </>
  )
}

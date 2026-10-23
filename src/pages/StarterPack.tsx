import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useStore } from '../store/store'
import { Avatar } from '../components/ui'
import { useToast } from '../components/Toast'
import { artistById } from '../lib/util'
import { PACK_WINDOW_DAYS, starterPack } from '../lib/packs'
import { IconCheck, IconLink, IconPackage } from '../components/icons'

// Shareable, algorithmic starter pack: this month's most engaging fans of one artist.
export default function StarterPackPage() {
  const { packId = '' } = useParams()
  const artistId = packId.replace(/^sp-/, '') // old links used "sp-<artist>"
  const artist = artistById(artistId)
  const { state, dispatch, me, userById } = useStore()
  const toast = useToast()
  const [copied, setCopied] = useState(false)
  if (!artist) return <Navigate to="/explore" replace />

  const pack = starterPack(state.posts, state.users, artist.id)
  const top = pack[0]?.score ?? 1
  const allFollowed = me ? pack.every((m) => m.userId === me.id || me.following.includes(m.userId)) : false

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${location.origin}${location.pathname}#/starter/${artist.id}`)
      setCopied(true)
      toast('Link copied')
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard blocked: ignore in prototype
    }
  }

  return (
    <>
      <header className="hero-soft" style={{ ['--tint' as string]: artist.color }}>
        <div className="eyebrow inline-icon">
          <IconPackage size={14} /> Starter pack · updated live
        </div>
        <h1 className="hero-name">The {artist.name} fans to follow</h1>
        <p className="hero-tagline">The {pack.length} fans whose posts about {artist.name} sparked the most conversation in the last {PACK_WINDOW_DAYS} days.</p>
        <ol className="explain-steps">
          <li>
            <span className="num">01</span>
            <span>
              <b>Chosen by activity, not popularity.</b> Likes, reposts, replies and quotes their {artist.name} posts received this month. Follower counts don’t count.
            </span>
          </li>
          <li>
            <span className="num">02</span>
            <span>
              <b>Always fresh.</b> The list changes as the fandom moves: anyone can make it by posting things people care about.
            </span>
          </li>
          <li>
            <span className="num">03</span>
            <span>
              <b>Share it.</b> Send the link to a friend who just discovered {artist.name}: one tap and their feed is full.
            </span>
          </li>
        </ol>
        <div className="hero-actions">
          {me ? (
            <button className="pill-btn ink" disabled={allFollowed || !pack.length} onClick={() => dispatch({ type: 'followMany', userIds: pack.map((m) => m.userId) })}>
              {allFollowed ? (
                <>
                  <IconCheck size={16} /> Following all
                </>
              ) : (
                'Follow all'
              )}
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

      <div className="section-head">
        <h2>This month</h2>
        <Link to={`/a/${artist.id}`} className="muted small">
          {artist.name} room
        </Link>
      </div>
      {!pack.length && <p className="empty">Not enough activity yet this month. Post something and you could be first.</p>}
      <div className="glass-card list">
        {pack.map((m, i) => {
          const u = userById(m.userId)
          if (!u) return null
          const on = me?.following.includes(u.id)
          return (
            <div key={u.id} className="row-item">
              <span className="num rank">{String(i + 1).padStart(2, '0')}</span>
              <Avatar user={u} size={40} />
              <Link to={`/u/${u.handle}`} className="grow">
                <strong>{u.name}</strong> <span className="muted">@{u.handle}</span>
                <span className="meter" aria-hidden>
                  <i style={{ width: `${Math.max(8, (m.score / top) * 100)}%`, background: artist.color }} />
                </span>
                <span className="muted small block">
                  {m.score} engagement · {m.posts} {m.posts === 1 ? 'post' : 'posts'}
                </span>
              </Link>
              {me && u.id !== me.id && (
                <button className={on ? 'pill-btn glass small' : 'pill-btn ink small'} onClick={() => dispatch({ type: 'follow', userId: u.id })}>
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

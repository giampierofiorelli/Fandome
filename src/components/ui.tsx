import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Album, User } from '../data/types'
import { artistById } from '../lib/util'

export function Avatar({ user, size = 40 }: { user?: User; size?: number }) {
  const initial = (user?.name ?? '?').slice(0, 1).toUpperCase()
  const bg = user?.color ?? '#555'
  return (
    <span
      className="avatar"
      style={{ width: size, height: size, fontSize: size * 0.42, background: `radial-gradient(circle at 30% 30%, ${bg}, ${bg}99 60%, #1118)` }}
      aria-hidden
    >
      {initial}
    </span>
  )
}

export function UserLink({ user }: { user?: User }) {
  if (!user) return <span>unknown</span>
  return (
    <Link to={`/u/${user.handle}`} className="user-link" onClick={(e) => e.stopPropagation()}>
      <strong>{user.name}</strong> <span className="muted">@{user.handle}</span>
    </Link>
  )
}

// Renders #tags and @mentions as links.
export function RichText({ text }: { text: string }) {
  const parts = text.split(/([#@][\p{L}\p{N}_.]+)/gu)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('#') && part.length > 1)
          return (
            <Link key={i} to={`/explore?tag=${encodeURIComponent(part.slice(1).toLowerCase())}`} className="tag" onClick={(e) => e.stopPropagation()}>
              {part}
            </Link>
          )
        if (part.startsWith('@') && part.length > 1)
          return (
            <Link key={i} to={`/u/${part.slice(1)}`} className="tag" onClick={(e) => e.stopPropagation()}>
              {part}
            </Link>
          )
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

export function Stars({ value, onChange, size = 18 }: { value: number; onChange?: (v: number) => void; size?: number }) {
  return (
    <span className="stars" style={{ fontSize: size }} role={onChange ? 'radiogroup' : undefined} aria-label={`${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => {
        const fill = value >= n ? 'full' : value >= n - 0.5 ? 'half' : 'empty'
        const star = (
          <span className={`star ${fill}`} key={n}>
            ★
          </span>
        )
        if (!onChange) return star
        return (
          <span key={n} className="star-btn">
            <button type="button" className="half-left" aria-label={`${n - 0.5} stars`} onClick={() => onChange(n - 0.5)} />
            <button type="button" className="half-right" aria-label={`${n} stars`} onClick={() => onChange(n)} />
            {star}
          </span>
        )
      })}
    </span>
  )
}

// Placeholder cover: never uses official artwork.
export function AlbumCover({ album, size = 64 }: { album?: Album; size?: number }) {
  if (!album) return null
  const color = artistById(album.artistId)?.color ?? '#888'
  return (
    <div className="cover" style={{ width: size, height: size, background: `linear-gradient(140deg, ${color}, #15151d 85%)` }} title={`${album.title} (${album.year})`}>
      <span style={{ fontSize: Math.max(9, size / 7) }}>{album.title}</span>
    </div>
  )
}

export function Modal({ onClose, children, title }: { onClose: () => void; children: ReactNode; title: string }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h3>{title}</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export function Tabs<T extends string>({ tabs, value, onChange }: { tabs: { id: T; label: string }[]; value: T; onChange: (v: T) => void }) {
  return (
    <div className="tabs" role="tablist">
      {tabs.map((t) => (
        <button key={t.id} role="tab" aria-selected={value === t.id} className={value === t.id ? 'tab active' : 'tab'} onClick={() => onChange(t.id)}>
          {t.label}
        </button>
      ))}
    </div>
  )
}

export const LANG_NAMES: Record<string, string> = { it: 'Italian', es: 'Spanish', fr: 'French', de: 'German', pt: 'Portuguese', ja: 'Japanese' }

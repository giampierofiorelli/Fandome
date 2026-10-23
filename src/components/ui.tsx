import { AnimatePresence, motion, useDragControls } from 'motion/react'
import { createContext, useContext, useEffect, useId, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import type { Album, User } from '../data/types'
import { artistById } from '../lib/util'
import { project, spring, springSheet } from '../lib/motion'
import { prettyUrl } from '../lib/media'
import { IconX } from './icons'

export function useMediaQuery(q: string) {
  const [match, setMatch] = useState(() => typeof window !== 'undefined' && window.matchMedia(q).matches)
  useEffect(() => {
    const m = window.matchMedia(q)
    const on = () => setMatch(m.matches)
    m.addEventListener('change', on)
    return () => m.removeEventListener('change', on)
  }, [q])
  return match
}

export function Avatar({ user, size = 40 }: { user?: User; size?: number }) {
  const initial = (user?.name ?? '?').slice(0, 1).toUpperCase()
  const bg = user?.color ?? '#555'
  return (
    <span
      className="avatar"
      style={{ width: size, height: size, fontSize: size * 0.4, background: `linear-gradient(145deg, ${bg}, color-mix(in srgb, ${bg} 55%, #000))` }}
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

// Renders web links, #tags and @mentions as links.
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s<>"]+[^\s<>".,!?;:)\]'’]|[#@][\p{L}\p{N}_.]+)/gu)
  return (
    <>
      {parts.map((part, i) => {
        if (/^https?:\/\//.test(part))
          return (
            <a key={i} href={part} target="_blank" rel="noopener noreferrer nofollow ugc" className="tag link" onClick={(e) => e.stopPropagation()}>
              {prettyUrl(part).short}
            </a>
          )
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
    <span className={onChange ? 'stars editable' : 'stars'} style={{ fontSize: size }} role={onChange ? 'radiogroup' : undefined} aria-label={`${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => {
        const fill = value >= n ? 'is-full' : value >= n - 0.5 ? 'is-half' : 'is-empty'
        const star = (
          <motion.span className={`star ${fill}`} key={`${n}-${fill}`} initial={onChange ? { scale: 0.6 } : false} animate={{ scale: 1 }} transition={{ type: 'spring', bounce: 0.5, visualDuration: 0.3 }}>
            ★
          </motion.span>
        )
        if (!onChange) return <span key={n}>{star}</span>
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
    <div
      className="cover"
      style={{ width: size, height: size, background: `radial-gradient(120% 90% at 20% 10%, ${color}, color-mix(in srgb, ${color} 30%, #0d0d14) 70%)` }}
      title={`${album.title} (${album.year})`}
    >
      <span style={{ fontSize: Math.max(9, size / 7.5) }}>{album.title}</span>
    </div>
  )
}

// Lets content inside a Modal close it with the exit animation.
const ModalCloseCtx = createContext<() => void>(() => {})
export const useModalClose = () => useContext(ModalCloseCtx)

// Modal that materializes (scale + blur) on desktop and becomes a draggable
// bottom sheet on phones. Closing animates out first, then calls onClose.
// The sheet uses momentum projection: a quick flick down dismisses it.
export function Modal({ onClose, children, title }: { onClose: () => void; children: ReactNode; title: string }) {
  const isSheet = useMediaQuery('(max-width: 640px)')
  const [open, setOpen] = useState(true)
  const drag = useDragControls()
  const close = () => setOpen(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.classList.add('no-scroll')
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('no-scroll')
    }
  }, [])

  return createPortal(
    <AnimatePresence onExitComplete={onClose}>
      {open && (
        <div className="modal-root" key="modal">
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onClick={close} />
          <motion.div
            className={isSheet ? 'modal sheet' : 'modal'}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={(e) => e.stopPropagation()}
            initial={isSheet ? { y: '100%' } : { opacity: 0, scale: 0.95, y: 10, filter: 'blur(10px)' }}
            animate={isSheet ? { y: 0 } : { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={isSheet ? { y: '100%' } : { opacity: 0, scale: 0.97, y: 6, filter: 'blur(6px)' }}
            transition={isSheet ? springSheet : spring}
            drag={isSheet ? 'y' : false}
            dragListener={false}
            dragControls={drag}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0.04, bottom: 1 }}
            onDragEnd={(_, info) => {
              if (info.offset.y + project(info.velocity.y) > 180) close()
            }}
          >
            {isSheet && <div className="sheet-handle" onPointerDown={(e) => drag.start(e)} style={{ touchAction: 'none' }} />}
            <div className="modal-head" onPointerDown={(e) => isSheet && drag.start(e)} style={isSheet ? { touchAction: 'none' } : undefined}>
              <h3>{title}</h3>
              <button className="icon-btn" onClick={close} aria-label="Close">
                <IconX size={18} />
              </button>
            </div>
            <ModalCloseCtx.Provider value={close}>{children}</ModalCloseCtx.Provider>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

// Segmented control: a glass track with a solid pill that glides to the active option.
export function Tabs<T extends string>({ tabs, value, onChange }: { tabs: { id: T; label: string }[]; value: T; onChange: (v: T) => void }) {
  const id = useId()
  return (
    <div className="seg-wrap">
      <div className="seg" role="tablist">
        {tabs.map((t) => (
          <button key={t.id} role="tab" aria-selected={value === t.id} className={value === t.id ? 'seg-btn active' : 'seg-btn'} onClick={() => onChange(t.id)}>
            {value === t.id && <motion.span layoutId={`seg-${id}`} className="seg-pill" transition={spring} />}
            <span className="seg-label">{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

// Number that rolls up/down when it changes (likes, reposts).
export function RollingCount({ value }: { value: number }) {
  const [prev, setPrev] = useState(value)
  const dir = value >= prev ? 1 : -1
  useEffect(() => setPrev(value), [value])
  return (
    <span className="roll">
      <AnimatePresence initial={false} mode="popLayout" custom={dir}>
        <motion.span
          key={value}
          custom={dir}
          initial={{ y: dir * 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: dir * -10, opacity: 0 }}
          transition={{ type: 'spring', bounce: 0, visualDuration: 0.25 }}
        >
          {value || ''}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

// Score out of 10 (ratings are stored 0–5).
export function ScoreBadge({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const s = Math.round(rating * 4) / 2
  return (
    <span className={`score-badge ${size}`} aria-label={`${s} out of 10`}>
      {Number.isInteger(s) ? s : s.toFixed(1)}
      <small>/10</small>
    </span>
  )
}

export const LANG_NAMES: Record<string, string> = { it: 'Italian', es: 'Spanish', fr: 'French', de: 'German', pt: 'Portuguese', ja: 'Japanese' }

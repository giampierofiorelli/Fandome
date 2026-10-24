import { AnimatePresence, motion, useDragControls } from 'motion/react'
import { createContext, useContext, useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import type { Album, User } from '../data/types'
import { artistById } from '../lib/util'
import { project, spring, springSheet } from '../lib/motion'
import { prettyUrl } from '../lib/media'
import { IconX } from './icons'
import photos from '../data/artistPhotos.json'

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
            initial={isSheet ? { y: '100%' } : { opacity: 0, scale: 0.95, y: 10 }}
            animate={isSheet ? { y: 0 } : { opacity: 1, scale: 1, y: 0 }}
            exit={isSheet ? { y: '100%' } : { opacity: 0, scale: 0.97, y: 6 }}
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
  const wrap = useRef<HTMLDivElement>(null)
  // Long tab rows scroll sideways: keep the active tab in view (without moving the page).
  useEffect(() => {
    const w = wrap.current
    const btn = w?.querySelector<HTMLElement>('.seg-btn.active')
    if (!w || !btn || w.scrollWidth <= w.clientWidth) return
    const left = btn.getBoundingClientRect().left - w.getBoundingClientRect().left + w.scrollLeft
    if (left < w.scrollLeft || left + btn.offsetWidth > w.scrollLeft + w.clientWidth) w.scrollTo({ left: left - (w.clientWidth - btn.offsetWidth) / 2, behavior: 'smooth' })
  }, [value])
  return (
    <div className="seg-wrap" ref={wrap}>
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

// Artist disc: the artist's colour with their initial in the dot-matrix face.
// Freely licensed artist photos (Wikimedia Commons), stored with the site: no third-party request.
export interface ArtistPhotoInfo {
  src: string
  author: string
  license: string
  licenseUrl?: string
  sourceUrl: string
}
export function artistPhoto(id: string): (ArtistPhotoInfo & { url: string }) | null {
  const p = (photos as Record<string, ArtistPhotoInfo>)[id]
  return p ? { ...p, url: `${import.meta.env.BASE_URL}${p.src}` } : null
}

// "Photo: author · CC BY-SA 4.0" with links to the file page and the licence (required by CC licences).
export function PhotoCredit({ id, className }: { id: string; className?: string }) {
  const p = artistPhoto(id)
  if (!p) return null
  return (
    <p className={className ? `photo-credit ${className}` : 'photo-credit'}>
      Photo:{' '}
      <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer">
        {p.author}
      </a>{' '}
      ·{' '}
      {p.licenseUrl ? (
        <a href={p.licenseUrl} target="_blank" rel="noopener noreferrer">
          {p.license}
        </a>
      ) : (
        p.license
      )}{' '}
      · Wikimedia Commons
    </p>
  )
}

export function ArtistDisc({ id, size = 22 }: { id: string; size?: number }) {
  const a = artistById(id)
  if (!a) return null
  const photo = artistPhoto(id)
  if (photo)
    return (
      <span className="artist-disc photo" style={{ ['--c' as string]: a.color, width: size, height: size }} aria-hidden>
        <img src={photo.url} alt="" loading="lazy" decoding="async" />
      </span>
    )
  return (
    <span className="artist-disc" style={{ ['--c' as string]: a.color, width: size, height: size, fontSize: Math.round(size * 0.52) }} aria-hidden>
      {a.name[0]}
    </span>
  )
}

// The artists a post is about. One or two: tokens joined by "×". Three or more:
// a stack of discs ("Kylie × Madonna +1") that opens into a row you can slide.
export function ArtistLine({ ids, compact }: { ids: string[]; compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const [overflow, setOverflow] = useState(false)
  const [open, setOpen] = useState(false)
  const list = ids.map((id) => artistById(id)).filter((a): a is NonNullable<typeof a> => Boolean(a))
  const stacked = list.length > 2 && !open
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const check = () => setOverflow(el.scrollWidth - el.scrollLeft - el.clientWidth > 2)
    check()
    el.addEventListener('scroll', check, { passive: true })
    const ro = new ResizeObserver(check)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', check)
      ro.disconnect()
    }
  }, [ids.join(), stacked])
  if (!list.length) return null
  if (stacked)
    return (
      <div className={`artist-line${compact ? ' compact' : ''}`} onClick={(e) => e.stopPropagation()}>
        <motion.button className="artist-stack" onClick={() => setOpen(true)} whileTap={{ scale: 0.95 }} transition={spring} aria-label={`About ${list.map((a) => a.name).join(', ')}. Show all`}>
          <span className="artist-stack-discs">
            {list.slice(0, 3).map((a) => (
              <ArtistDisc key={a.id} id={a.id} size={compact ? 18 : 22} />
            ))}
          </span>
          <span className="artist-stack-names">
            {list[0].name} <span className="artist-x">×</span> {list[1].name}
          </span>
          <span className="artist-more">+{list.length - 2}</span>
        </motion.button>
      </div>
    )
  return (
    <div ref={ref} className={`artist-line${overflow ? ' fade' : ''}${compact ? ' compact' : ''}`} onClick={(e) => e.stopPropagation()}>
      {list.map((a, i) => (
        <motion.span key={a.id} className="artist-seg" initial={open ? { opacity: 0, x: -8 } : false} animate={{ opacity: 1, x: 0 }} transition={{ ...spring, delay: open ? i * 0.04 : 0 }}>
          {i > 0 && <span className="artist-x">×</span>}
          <Link to={`/a/${a.id}`} className="artist-token" style={{ ['--c' as string]: a.color }}>
            <ArtistDisc id={a.id} size={compact ? 18 : 22} />
            <span>{a.name}</span>
          </Link>
        </motion.span>
      ))}
    </div>
  )
}

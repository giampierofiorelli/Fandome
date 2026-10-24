import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useStore } from '../store/store'
import { albumById, artistById } from '../lib/util'
import { spring } from '../lib/motion'
import { useComposer } from './Composer'
import { useToast } from './Toast'
import { AlbumCover } from './ui'
import { angleToProgress, Dial } from './Dial'
import { IconHeart, IconPen, IconX } from './icons'
import { MAX_FAVOURITES } from '../data/types'

// Ratings are stored 0–5 (legacy) and shown as a score out of 10.
export const toScore = (rating: number) => Math.round(rating * 2 * 2) / 2
export const fmtScore = (score: number) => (Number.isInteger(score) ? String(score) : score.toFixed(1))
export const scoreFromProgress = (t: number) => Math.max(0.5, Math.round(t * 20) / 2)

// Full-screen rater: the album cover sits in the middle of the dial and you
// drag around the ring to set the score. Same look as the listening party.
export function AlbumRater({ albumId, onClose }: { albumId: string; onClose: () => void }) {
  const { state, dispatch, me } = useStore()
  const compose = useComposer()
  const toast = useToast()
  const album = albumById(albumId)
  const artist = artistById(album?.artistId)
  const saved = me?.ratings[albumId] ?? 0
  const [score, setScore] = useState(toScore(saved))
  const [dragging, setDragging] = useState(false)
  const wrap = useRef<HTMLDivElement>(null)
  const prog = useRef(score / 10)
  const fav = Boolean(me?.top4.includes(albumId))
  const others = state.users.filter((u) => u.id !== me?.id && typeof u.ratings[albumId] === 'number').map((u) => toScore(u.ratings[albumId]))
  const avg = others.length ? Math.round((others.reduce((a, b) => a + b, 0) / others.length) * 10) / 10 : null

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.classList.add('no-scroll')
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('no-scroll')
    }
  }, [onClose])

  if (!album || !artist || !me) return null

  const save = (s: number) => {
    if (s > 0) dispatch({ type: 'rate', albumId, rating: s / 2 })
  }
  const fromPointer = (x: number, y: number) => {
    const r = wrap.current!.getBoundingClientRect()
    const t = angleToProgress(x - (r.left + r.width / 2), y - (r.top + r.height / 2), prog.current)
    prog.current = t
    const s = scoreFromProgress(t)
    if (s !== score) {
      setScore(s)
      navigator.vibrate?.(4)
    }
    return s
  }

  return createPortal(
    <motion.div className="rater-root" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onClick={onClose}>
      <motion.div
        className="rater"
        style={{ ['--tint' as string]: artist.color }}
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={spring}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label={`Rate ${album.title}`}
      >
        <div className="hero-nav">
          <span className="live-pill">Rate</span>
          <button className="glass-circle" onClick={onClose} aria-label="Close">
            <IconX size={18} />
          </button>
        </div>
        <div className="party-kicker">
          {artist.name} · {album.year}
        </div>
        <h2 className="party-title">{album.title}</h2>
        <div className="rater-score" aria-live="polite">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span key={score} className="bignum xl" initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -14, opacity: 0 }} transition={{ type: 'spring', bounce: 0, visualDuration: 0.18 }}>
              {score ? fmtScore(score) : '–'}
            </motion.span>
          </AnimatePresence>
          <span className="party-of">/ 10</span>
        </div>

        <div
          ref={wrap}
          className={dragging ? 'dial-wrap rater-dial dragging' : 'dial-wrap rater-dial'}
          role="slider"
          tabIndex={0}
          aria-label="Score"
          aria-valuemin={0.5}
          aria-valuemax={10}
          aria-valuenow={score}
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId)
            setDragging(true)
            fromPointer(e.clientX, e.clientY)
          }}
          onPointerMove={(e) => dragging && fromPointer(e.clientX, e.clientY)}
          onPointerUp={(e) => {
            setDragging(false)
            save(fromPointer(e.clientX, e.clientY))
          }}
          onPointerCancel={() => setDragging(false)}
          onKeyDown={(e) => {
            const d = e.key === 'ArrowRight' || e.key === 'ArrowUp' ? 0.5 : e.key === 'ArrowLeft' || e.key === 'ArrowDown' ? -0.5 : 0
            if (!d) return
            e.preventDefault()
            const s = Math.min(10, Math.max(0.5, (score || 0) + d))
            setScore(s)
            prog.current = s / 10
            save(s)
          }}
        >
          <Dial progress={score / 10} color={artist.color} />
          <motion.div className="rater-cover" animate={{ scale: dragging ? 0.94 : 1 }} transition={spring}>
            <AlbumCover album={album} size={112} />
          </motion.div>
        </div>
        <p className="hero-note center">{score ? (dragging ? 'Release to save' : 'Saved · drag the ring to change') : 'Drag around the ring to score it'}</p>
        {avg !== null && (
          <p className="rater-avg">
            Fans: <b>{fmtScore(avg)}</b> · {others.length} {others.length === 1 ? 'rating' : 'ratings'}
          </p>
        )}

        <div className="hero-actions center">
          <button
            className={fav ? 'pill-btn light' : 'pill-btn glass'}
            onClick={() => {
              if (!fav && me.top4.length >= MAX_FAVOURITES) return toast(`You can pick up to ${MAX_FAVOURITES} favourite albums`)
              dispatch({ type: 'toggleTop4', albumId })
              toast(fav ? 'Removed from favourites' : 'Added to your favourite albums')
            }}
          >
            <IconHeart size={15} filled={fav} /> {fav ? 'Favourite' : 'Add to favourites'}
          </button>
          <button
            className="pill-btn glass"
            disabled={!score}
            onClick={() => {
              save(score)
              onClose()
              compose({ reviewAlbumId: albumId, artistId: artist.id })
            }}
          >
            <IconPen size={15} /> Review
          </button>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  )
}

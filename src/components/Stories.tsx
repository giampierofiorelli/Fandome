import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Story, User } from '../data/types'
import { newId, useStore } from '../store/store'
import { activeStories, canMessage } from '../store/reducer'
import { compressImage } from '../lib/media'
import { spring } from '../lib/motion'
import { timeAgo } from '../lib/util'
import { useToast } from './Toast'
import { Avatar, Modal, useModalClose } from './ui'
import { IconImage, IconPlus, IconSend, IconTrash, IconX } from './icons'

const STORY_MS = 5000
export const STORY_BGS = [
  'linear-gradient(160deg,#ff6a88,#7a2a6a)',
  'linear-gradient(140deg,#6fc3cf,#e9b48c 50%,#b99be6)',
  'linear-gradient(160deg,#1e3048,#3ab5f0)',
  'linear-gradient(160deg,#f0a43a,#e8457c)',
  'linear-gradient(160deg,#1b1b2f,#9b7cf0)',
  'linear-gradient(160deg,#0d1015,#3a3f4b)',
]

// Stories row: yours first, then people you follow (unseen before seen).
export function StoriesBar() {
  const { state, me, userById } = useStore()
  const [viewing, setViewing] = useState<string | null>(null) // author id
  const [composing, setComposing] = useState(false)
  if (!me) return null
  const now = Date.now()
  const live = activeStories(state, now)
  const byAuthor = (id: string) => live.filter((s) => s.authorId === id).sort((a, b) => a.createdAt - b.createdAt)
  const mine = byAuthor(me.id)
  const others = Array.from(new Set(live.filter((s) => me.following.includes(s.authorId)).map((s) => s.authorId)))
    .map((id) => ({ id, stories: byAuthor(id) }))
    .map((a) => ({ ...a, unseen: a.stories.some((s) => !s.viewers.includes(me.id)) }))
    .sort((a, b) => Number(b.unseen) - Number(a.unseen) || b.stories[b.stories.length - 1].createdAt - a.stories[a.stories.length - 1].createdAt)
  const order = [...(mine.length ? [me.id] : []), ...others.map((o) => o.id)]

  return (
    <>
      <div className="stories" role="list" aria-label="Stories">
        <div className="story-item" role="listitem">
          <button className={mine.length ? 'story-ring seen' : 'story-ring add'} onClick={() => (mine.length ? setViewing(me.id) : setComposing(true))} aria-label={mine.length ? 'View your story' : 'Add to your story'}>
            <Avatar user={me} size={60} />
          </button>
          <button className="story-plus" onClick={() => setComposing(true)} aria-label="Add to your story">
            <IconPlus size={14} />
          </button>
          <span className="story-name">Your story</span>
        </div>
        {others.map((o) => {
          const u = userById(o.id)
          return (
            <div className="story-item" role="listitem" key={o.id}>
              <button className={o.unseen ? 'story-ring' : 'story-ring seen'} onClick={() => setViewing(o.id)} aria-label={`View ${u?.name}'s story`}>
                <Avatar user={u} size={60} />
              </button>
              <span className="story-name">{u?.name}</span>
            </div>
          )
        })}
      </div>
      <AnimatePresence>{viewing && <StoryViewer key="viewer" order={order} startAuthor={viewing} onClose={() => setViewing(null)} />}</AnimatePresence>
      {composing && (
        <Modal title="New story" onClose={() => setComposing(false)}>
          <StoryComposer />
        </Modal>
      )}
    </>
  )
}

function StoryComposer() {
  const { dispatch } = useStore()
  const toast = useToast()
  const close = useModalClose()
  const [text, setText] = useState('')
  const [bg, setBg] = useState(STORY_BGS[0])
  const [photo, setPhoto] = useState<string | null>(null)
  const file = useRef<HTMLInputElement>(null)
  const can = Boolean(photo || text.trim())
  return (
    <>
      <div className="story-canvas" style={photo ? { backgroundImage: `url(${photo})` } : { background: bg }}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder={photo ? 'Add a caption…' : 'Type something…'} maxLength={140} rows={3} autoFocus />
      </div>
      {!photo && (
        <div className="bg-picker">
          {STORY_BGS.map((b) => (
            <button key={b} className={b === bg ? 'bg-dot on' : 'bg-dot'} style={{ background: b }} onClick={() => setBg(b)} aria-label="Background" />
          ))}
        </div>
      )}
      <input
        ref={file}
        type="file"
        accept="image/*"
        hidden
        onChange={async (e) => {
          const f = e.target.files?.[0]
          e.target.value = ''
          if (!f) return
          try {
            setPhoto(await compressImage(f, 1080))
          } catch {
            toast('That file isn’t an image')
          }
        }}
      />
      <div className="row-between" style={{ marginTop: 14 }}>
        <button className="pill" onClick={() => (photo ? setPhoto(null) : file.current?.click())}>
          <IconImage size={14} /> {photo ? 'Remove photo' : 'Photo'}
        </button>
        <button
          className="pill-btn ink"
          disabled={!can}
          onClick={() => {
            dispatch({ type: 'addStory', id: newId(), at: Date.now(), kind: photo ? 'photo' : 'text', text: text.trim() || undefined, bg: photo ? undefined : bg, photo: photo ?? undefined })
            toast('Added to your story · 24h')
            close()
          }}
        >
          Share · 24h
        </button>
      </div>
    </>
  )
}

// Full-screen viewer: progress bars, tap left/right, hold to pause, swipe down to close.
function StoryViewer({ order, startAuthor, onClose }: { order: string[]; startAuthor: string; onClose: () => void }) {
  const { state, dispatch, me, userById } = useStore()
  const toast = useToast()
  const [authorIdx, setAuthorIdx] = useState(Math.max(0, order.indexOf(startAuthor)))
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const pRef = useRef(0)
  const reset = () => {
    pRef.current = 0
    setProgress(0)
  }
  const [reply, setReply] = useState('')
  const authorId = order[authorIdx]
  const author = userById(authorId) as User | undefined
  const stories = activeStories(state, Date.now())
    .filter((s) => s.authorId === authorId)
    .sort((a, b) => a.createdAt - b.createdAt)
  const story: Story | undefined = stories[Math.min(idx, stories.length - 1)]
  const isMine = authorId === me?.id

  // Start on the first unseen story of this author.
  useEffect(() => {
    const first = stories.findIndex((s) => me && !s.viewers.includes(me.id))
    setIdx(first > 0 && !isMine ? first : 0)
    reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorIdx])

  useEffect(() => {
    if (story && !isMine) dispatch({ type: 'viewStory', storyId: story.id })
  }, [story?.id, isMine, dispatch])

  const next = useCallback(() => {
    pRef.current = 0
    setProgress(0)
    if (idx < stories.length - 1) setIdx(idx + 1)
    else if (authorIdx < order.length - 1) setAuthorIdx(authorIdx + 1)
    else onClose()
  }, [idx, stories.length, authorIdx, order.length, onClose])
  const prev = () => {
    reset()
    if (idx > 0) setIdx(idx - 1)
    else if (authorIdx > 0) setAuthorIdx(authorIdx - 1)
  }

  // rAF timer so pause/resume is exact.
  const last = useRef(0)
  useEffect(() => {
    if (paused || !story) return
    let raf = 0
    last.current = performance.now()
    const tick = (t: number) => {
      const dt = t - last.current
      last.current = t
      pRef.current += dt / STORY_MS
      if (pRef.current >= 1) {
        next()
        return
      }
      setProgress(pRef.current)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [paused, story?.id, next, story])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => (e.key === 'Escape' ? onClose() : e.key === 'ArrowRight' ? next() : e.key === 'ArrowLeft' ? prev() : null)
    window.addEventListener('keydown', onKey)
    document.body.classList.add('no-scroll')
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('no-scroll')
    }
  })

  if (!story || !author) return null
  const canReply = me && !isMine && me.handle !== 'guest' && canMessage(state, me.id, authorId)

  return createPortal(
    <motion.div className="sv-root" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      <motion.div
        className="sv"
        initial={{ scale: 0.92, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 40, opacity: 0 }}
        transition={spring}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.7 }}
        onDragStart={() => setPaused(true)}
        onDragEnd={(_, info) => (info.offset.y > 120 || info.velocity.y > 600 ? onClose() : setPaused(false))}
        style={story.photo ? { backgroundImage: `url(${story.photo})` } : { background: story.bg }}
      >
        <div className="sv-bars">
          {stories.map((s, i) => (
            <span key={s.id}>
              <i style={{ transform: `scaleX(${i < idx ? 1 : i === idx ? progress : 0})` }} />
            </span>
          ))}
        </div>
        <div className="sv-head">
          <Avatar user={author} size={32} />
          <strong>{isMine ? 'Your story' : author.name}</strong>
          <span className="sv-time">{timeAgo(story.createdAt)}</span>
          <button className="sv-x" onClick={onClose} aria-label="Close">
            <IconX size={20} />
          </button>
        </div>
        {/* tap zones; press & hold pauses */}
        <button className="sv-tap left" aria-label="Previous" onClick={prev} onPointerDown={() => setPaused(true)} onPointerUp={() => setPaused(false)} onPointerLeave={() => setPaused(false)} />
        <button className="sv-tap right" aria-label="Next" onClick={next} onPointerDown={() => setPaused(true)} onPointerUp={() => setPaused(false)} onPointerLeave={() => setPaused(false)} />
        <AnimatePresence mode="wait">
          {story.text && (
            <motion.p key={story.id} className={story.photo ? 'sv-caption' : 'sv-text'} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={spring}>
              {story.text}
            </motion.p>
          )}
        </AnimatePresence>
        <div className="sv-foot">
          {isMine ? (
            <>
              <span className="sv-seen">Seen by {story.viewers.length}</span>
              <button
                className="sv-icon"
                aria-label="Delete story"
                onClick={() => {
                  dispatch({ type: 'deleteStory', storyId: story.id })
                  toast('Story deleted')
                  if (stories.length <= 1) onClose()
                }}
              >
                <IconTrash size={18} />
              </button>
            </>
          ) : canReply ? (
            <form
              className="sv-reply"
              onSubmit={(e) => {
                e.preventDefault()
                if (!reply.trim()) return
                dispatch({ type: 'sendDm', id: newId(), to: authorId, at: Date.now(), text: `↩︎ Replied to your story: ${reply.trim()}` })
                setReply('')
                setPaused(false)
                toast(`Sent to ${author.name}`)
              }}
            >
              <input value={reply} onChange={(e) => setReply(e.target.value)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} placeholder={`Reply to ${author.name}…`} />
              <button className="sv-icon" aria-label="Send reply" disabled={!reply.trim()}>
                <IconSend size={18} />
              </button>
            </form>
          ) : null}
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  )
}

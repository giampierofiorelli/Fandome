import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import { createPortal } from 'react-dom'
import type { Post, SharedPost, Story, StoryContent, User } from '../data/types'
import { useNavigate } from 'react-router-dom'
import { newId, useStore } from '../store/store'
import { activeStories, canMessage, messagingPaused } from '../store/reducer'
import { compressImage } from '../lib/media'
import { fmtDuration, MAX_VIDEO_SECONDS, newVideoKey, putBlob, readVideo, useBlobUrl } from '../lib/mediaStore'
import { spring } from '../lib/motion'
import { timeAgo } from '../lib/util'
import { useToast } from './Toast'
import { Avatar, Modal, useModalClose } from './ui'
import { PostCard } from './PostCard'
import { ReportModal } from './Moderation'
import { IconCamera, IconFlag, IconImage, IconMute, IconPlay, IconPlus, IconRepost, IconSend, IconTrash, IconVideo, IconVolume, IconX } from './icons'

const STORY_MS = 5000
const POST_STORY_MS = 10000 // a shared post has more to read
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
  const [sharing, setSharing] = useState<Story | null>(null)
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
      <AnimatePresence>
        {viewing && (
          <StoryViewer
            key="viewer"
            order={order}
            startAuthor={viewing}
            onClose={() => setViewing(null)}
            onShare={(st) => {
              setViewing(null)
              setSharing(st)
            }}
          />
        )}
      </AnimatePresence>
      {(composing || sharing) && (
        <Modal
          title={sharing ? 'Share to your story' : 'New story'}
          onClose={() => {
            setComposing(false)
            setSharing(null)
          }}
        >
          <StoryComposer sharing={sharing ?? undefined} />
        </Modal>
      )}
    </>
  )
}

type Picked = { file: Blob; url: string; duration: number; poster?: string }

export function StoryComposer({ sharing, post }: { sharing?: Story; post?: Post }) {
  const { dispatch } = useStore()
  const toast = useToast()
  const close = useModalClose()
  const [text, setText] = useState('')
  const [bg, setBg] = useState(STORY_BGS[0])
  const [photo, setPhoto] = useState<string | null>(null)
  const [video, setVideo] = useState<Picked | null>(null)
  const [busy, setBusy] = useState(false)
  const camera = useRef<HTMLInputElement>(null)
  const recorder = useRef<HTMLInputElement>(null)
  const gallery = useRef<HTMLInputElement>(null)
  const shared = sharing ? contentOf(sharing) : undefined
  const can = !busy && Boolean(post || shared || photo || video || text.trim())
  useEffect(
    () => () => {
      if (video) URL.revokeObjectURL(video.url)
    },
    [video],
  )

  const pick = async (f?: File) => {
    if (!f) return
    const isVideo = f.type.startsWith('video/') || /\.(mov|mp4|m4v|webm)$/i.test(f.name)
    setBusy(true)
    try {
      if (isVideo) {
        const meta = await readVideo(f)
        if (meta.duration > MAX_VIDEO_SECONDS + 0.5) {
          toast(`Videos can be up to 3:00. This one is ${fmtDuration(meta.duration)}: trim it and try again.`)
          return
        }
        setPhoto(null)
        setVideo({ file: f, url: URL.createObjectURL(f), duration: meta.duration, poster: meta.poster })
      } else {
        setVideo(null)
        setPhoto(await compressImage(f, 1080))
      }
    } catch {
      toast(isVideo ? 'This video can’t be played in this browser' : 'That file isn’t an image')
    } finally {
      setBusy(false)
    }
  }
  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    e.target.value = ''
    void pick(f)
  }

  const share = async () => {
    const at = Date.now()
    if (post) {
      dispatch({ type: 'sharePostToStory', id: newId(), at, postId: post.id, text })
    } else if (sharing) {
      dispatch({ type: 'shareStory', id: newId(), at, storyId: sharing.id, text })
    } else if (video) {
      setBusy(true)
      const key = newVideoKey()
      try {
        await putBlob(key, video.file)
      } catch {
        setBusy(false)
        return toast('Not enough space on this device for this video')
      }
      dispatch({ type: 'addStory', id: newId(), at, kind: 'video', text: text.trim() || undefined, video: { key, duration: video.duration, poster: video.poster } })
    } else {
      dispatch({ type: 'addStory', id: newId(), at, kind: photo ? 'photo' : 'text', text: text.trim() || undefined, bg: photo ? undefined : bg, photo: photo ?? undefined })
    }
    toast(sharing || post ? 'Shared to your story · 24h' : 'Added to your story · 24h')
    close()
  }

  const media = Boolean(photo || video || shared || post)
  return (
    <>
      <div className={media ? 'story-canvas media' : 'story-canvas'} style={photo ? { backgroundImage: `url(${photo})` } : shared || post ? { background: 'linear-gradient(160deg,#2a2d3a,#0d1015)' } : video ? { background: '#000' } : { background: bg }}>
        {video && <video className="canvas-video" src={video.url} poster={video.poster} autoPlay muted loop playsInline />}
        {video && <span className="canvas-badge">{fmtDuration(video.duration)}</span>}
        {shared && <SharedCard c={shared} still />}
        {post && <PostSticker p={{ id: post.id, authorId: post.authorId, text: post.text, photo: post.photo, image: post.image }} />}
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder={media ? 'Add a caption…' : 'Type something…'} maxLength={140} rows={media ? 2 : 3} autoFocus={!media} />
      </div>
      {!media && (
        <div className="bg-picker">
          {STORY_BGS.map((b) => (
            <button key={b} className={b === bg ? 'bg-dot on' : 'bg-dot'} style={{ background: b }} onClick={() => setBg(b)} aria-label="Background" />
          ))}
        </div>
      )}
      {/* capture= opens the camera directly on phones; desktops fall back to a file picker */}
      <input ref={camera} type="file" accept="image/*" capture="environment" hidden onChange={onFile} />
      <input ref={recorder} type="file" accept="video/*" capture="environment" hidden onChange={onFile} />
      <input ref={gallery} type="file" accept="image/*,video/*" hidden onChange={onFile} />
      <div className="story-tools">
        {!sharing && !post &&
          (photo || video ? (
            <button
              className="pill"
              onClick={() => {
                setPhoto(null)
                setVideo(null)
              }}
            >
              <IconX size={14} /> Remove
            </button>
          ) : (
            <>
              <button className="pill" onClick={() => camera.current?.click()} disabled={busy}>
                <IconCamera size={15} /> Photo
              </button>
              <button className="pill" onClick={() => recorder.current?.click()} disabled={busy}>
                <IconVideo size={15} /> Video
              </button>
              <button className="pill" onClick={() => gallery.current?.click()} disabled={busy} aria-label="Choose from your gallery">
                <IconImage size={15} />
              </button>
            </>
          ))}
        <button className="pill-btn ink story-share" disabled={!can} onClick={() => void share()}>
          {busy ? 'Saving…' : 'Share'}
        </button>
      </div>
      <p className="muted small center story-hint">{sharing || post ? 'It stays in your story for 24 hours, with their name on it.' : 'Stories last 24 hours · videos up to 3 minutes'}</p>
    </>
  )
}

// What a story displays: its own content, or the snapshot it reshares.
const contentOf = (s: Story): StoryContent & { authorId: string } =>
  s.shared ?? { authorId: s.authorId, kind: s.kind as StoryContent['kind'], text: s.text, bg: s.bg, photo: s.photo, video: s.video }

// A reshared story, shown as a card with its original author.
function SharedCard({ c, still, videoEl }: { c: StoryContent & { authorId: string }; still?: boolean; videoEl?: React.ReactNode }) {
  const { userById } = useStore()
  const author = userById(c.authorId)
  const style = c.photo ? { backgroundImage: `url(${c.photo})` } : c.kind === 'video' ? { backgroundImage: c.video?.poster ? `url(${c.video.poster})` : undefined, background: c.video?.poster ? undefined : '#000' } : { background: c.bg }
  return (
    <div className="sv-shared" style={style}>
      {c.kind === 'video' && (still ? <span className="sv-shared-play"><IconPlay size={18} /></span> : videoEl)}
      {c.kind === 'text' && <p className="sv-shared-text">{c.text}</p>}
      {c.kind !== 'text' && c.text && <p className="sv-shared-cap">{c.text}</p>}
      <span className="sv-shared-by">
        <Avatar user={author} size={20} /> @{author?.handle}
      </span>
    </div>
  )
}

// A feed post inside a story: the real post (text, photos, videos, embeds, polls),
// straight and centred. Falls back to the saved snapshot if the post was deleted.
function PostSticker({ p, onOpen, onInteract }: { p: SharedPost; onOpen?: () => void; onInteract?: () => void }) {
  const { state, userById } = useStore()
  const live = state.posts.find((x) => x.id === p.id)
  const author = userById(p.authorId)
  const pic = p.photo ? `url(${p.photo})` : p.image
  return (
    <div
      className="sv-post"
      onPointerDown={(e) => {
        e.stopPropagation() // scroll the card without swiping the story away
        onInteract?.()
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {live ? (
        <PostCard post={live} embedded />
      ) : (
        <>
          <span className="sv-post-head">
            <Avatar user={author} size={26} />
            <span>
              <strong>{author?.name}</strong>
              <span className="sv-post-handle">@{author?.handle}</span>
            </span>
          </span>
          {pic && <span className="sv-post-pic" style={{ backgroundImage: p.photo ? pic : undefined, background: p.photo ? undefined : pic }} />}
          <span className="sv-post-text">{p.text}</span>
        </>
      )}
      {onOpen && (
        <button className="sv-post-open" onClick={onOpen}>
          {live ? 'Open post' : 'Post no longer available'}
        </button>
      )}
    </div>
  )
}

// Story video: plays with sound when allowed, otherwise muted with a "tap for sound" prompt.
function StoryVideoLayer({ vkey, poster, paused, muted, vref, onBlocked, onMissing, className }: { vkey: string; poster?: string; paused: boolean; muted: boolean; vref: RefObject<HTMLVideoElement>; onBlocked: () => void; onMissing: () => void; className: string }) {
  const { url, missing } = useBlobUrl(vkey)
  useEffect(() => {
    if (missing) onMissing()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [missing])
  useEffect(() => {
    const v = vref.current
    if (!v || !url) return
    v.muted = muted
    if (paused) return void v.pause()
    v.play().catch(() => {
      if (v.muted) return
      v.muted = true
      onBlocked()
      v.play().catch(() => undefined)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, paused, muted])
  if (missing) return null
  return <video ref={vref} className={className} src={url} poster={poster} playsInline preload="auto" />
}

// Full-screen viewer: progress bars, tap left/right, hold to pause, swipe down to close.
function StoryViewer({ order, startAuthor, onClose, onShare }: { order: string[]; startAuthor: string; onClose: () => void; onShare: (s: Story) => void }) {
  const { state, dispatch, me, userById } = useStore()
  const nav = useNavigate()
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
  const content: (StoryContent & { authorId?: string }) | undefined = story && (story.kind === 'share' ? story.shared : (story as StoryContent))
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const [missingVideo, setMissingVideo] = useState<string | null>(null)
  const [reportStory, setReportStory] = useState<string | null>(null)
  const isVideo = content?.kind === 'video' && Boolean(content.video) && missingVideo !== story?.id

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
      const v = videoRef.current
      if (isVideo) {
        // Video stories last as long as the video (max 3 min).
        if (v?.ended) return next()
        const d = v && Number.isFinite(v.duration) && v.duration > 0 ? v.duration : content?.video?.duration || 1
        pRef.current = v ? v.currentTime / d : 0
      } else pRef.current += dt / (story?.kind === 'post' ? POST_STORY_MS : STORY_MS)
      if (pRef.current >= 1) {
        next()
        return
      }
      setProgress(pRef.current)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [paused, story?.id, next, story, isVideo])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => (e.key === 'Escape' ? onClose() : e.key === 'ArrowRight' ? next() : e.key === 'ArrowLeft' ? prev() : null)
    window.addEventListener('keydown', onKey)
    document.body.classList.add('no-scroll')
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('no-scroll')
    }
  })

  if (!story || !author || !content) return null
  const sharedBy = story.kind === 'share' ? story.shared : undefined
  const canShare = me && !isMine && story.kind !== 'post' && (sharedBy?.authorId ?? authorId) !== me.id
  const videoLayer = isVideo && content.video && (
    <StoryVideoLayer
      key={story.id}
      vkey={content.video.key}
      poster={content.video.poster}
      paused={paused}
      muted={muted}
      vref={videoRef}
      className={sharedBy ? 'sv-shared-video' : 'sv-video'}
      onBlocked={() => {
        setMuted(true)
        setBlocked(true)
      }}
      onMissing={() => setMissingVideo(story.id)}
    />
  )
  const canReply = me && !isMine && me.handle !== 'guest' && canMessage(state, me.id, authorId) && !messagingPaused(state, me.id, Date.now())

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
        style={
          sharedBy || story.post
            ? { background: `linear-gradient(160deg, color-mix(in srgb, ${author.color} 70%, #1b1d26), #0d1015)` }
            : story.photo
              ? { backgroundImage: `url(${story.photo})` }
              : story.kind === 'video'
                ? { background: story.video?.poster ? `center / cover url(${story.video.poster}) #000` : '#000' }
                : { background: story.bg }
        }
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
          {isVideo && (
            <button
              className="sv-x sound"
              onClick={() => {
                setMuted(!muted)
                setBlocked(false)
              }}
              aria-label={muted ? 'Turn sound on' : 'Mute'}
            >
              {muted ? <IconMute size={20} /> : <IconVolume size={20} />}
            </button>
          )}
          {!isMine && me?.handle !== 'guest' && (
            <button
              className="sv-x flag"
              aria-label="Report story"
              onClick={() => {
                setPaused(true)
                setReportStory(story.id)
              }}
            >
              <IconFlag size={18} />
            </button>
          )}
          <button className="sv-x" onClick={onClose} aria-label="Close">
            <IconX size={20} />
          </button>
        </div>
        {!sharedBy && videoLayer}
        {sharedBy && <SharedCard c={sharedBy} videoEl={videoLayer} />}
        {story.post && (
          <PostSticker
            p={story.post}
            onInteract={() => setPaused(true)}
            onOpen={() => {
              onClose()
              nav(`/p/${story.post!.id}`)
            }}
          />
        )}
        {/* tap zones; press & hold pauses */}
        <button className="sv-tap left" aria-label="Previous" onClick={prev} onPointerDown={() => setPaused(true)} onPointerUp={() => setPaused(false)} onPointerLeave={() => setPaused(false)} />
        <button className="sv-tap right" aria-label="Next" onClick={next} onPointerDown={() => setPaused(true)} onPointerUp={() => setPaused(false)} onPointerLeave={() => setPaused(false)} />
        <AnimatePresence mode="wait">
          {blocked && muted && (
            <motion.button key="sound" className="sv-sound" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} onClick={() => (setMuted(false), setBlocked(false))}>
              <IconVolume size={16} /> Tap for sound
            </motion.button>
          )}
          {story.text && (
            <motion.p key={story.id} className={story.kind === 'text' ? 'sv-text' : 'sv-caption'} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={spring}>
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
          ) : canReply || canShare ? (
            <>
            {canReply ? (
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
            ) : (
              <span className="grow" />
            )}
            {canShare && (
              <button className="sv-icon share" aria-label="Share to your story" onClick={() => onShare(story)}>
                <IconRepost size={18} />
              </button>
            )}
            </>
          ) : null}
        </div>
      </motion.div>
      {reportStory && (
        <ReportModal
          target={{ kind: 'story', id: reportStory }}
          what="story"
          onClose={() => {
            setReportStory(null)
            setPaused(false)
          }}
        />
      )}
    </motion.div>,
    document.body,
  )
}

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { newId, useStore } from '../store/store'
import { canMessage, conversations, dmExpiresIn } from '../store/reducer'
import { AudioPlayer } from '../components/AudioPlayer'
import { useToast } from '../components/Toast'
import { Avatar } from '../components/ui'
import { IconArrowLeft, IconMic, IconSend, IconX } from '../components/icons'
import { createRecorder, MAX_VOICE_SECONDS } from '../lib/audio'
import { springSnappy } from '../lib/motion'
import { timeAgo } from '../lib/util'

const hours = (ms: number) => (ms >= 3_600_000 ? `${Math.ceil(ms / 3_600_000)}h` : `${Math.max(1, Math.ceil(ms / 60_000))}m`)

// Demo only: seed fans "read" your message and answer, so the flow can be tried alone.
const REPLIES: Record<string, string[]> = {
  'u-giulia': ['Yes!! Public spot near San Siro, around 5pm 💗', 'Bring your Fan Passport card 😄'],
  'u-kenji': ['Start with "Drowned World", then let it flow.', 'Tell me what you think of "Frozen"!'],
}
const fallback = ['Haha love it', 'Totally agree!', 'See you in the party tonight 🎧']

export function Inbox() {
  const { state, me, userById } = useStore()
  if (!me) return null
  const now = Date.now()
  const convos = conversations(state, now)
  const startable = state.users.filter((u) => u.id !== me.id && u.kind !== 'page' && u.handle !== 'guest' && canMessage(state, me.id, u.id) && !convos.some((c) => c.userId === u.id)).slice(0, 8)

  return (
    <>
      <header className="hello">
        <div className="eyebrow">Messages</div>
        <h1 className="display">
          Private <span className="display-strong">chats</span>
        </h1>
        <p className="muted small dm-rule">Messages disappear 24 hours after they’re seen. Unread ones wait for you.</p>
      </header>
      {me.handle === 'guest' && (
        <div className="invite-banner">
          <span className="grow">
            <strong>Create your profile to send messages</strong>
            <span className="muted small block">As a guest you can read messages people sent you.</span>
          </span>
          <Link to="/welcome" className="pill-btn ink small">
            Create
          </Link>
        </div>
      )}
      <div className="glass-card list">
        {convos.map((c) => {
          const u = userById(c.userId)
          const lastMsg = c.msgs[c.msgs.length - 1]
          return (
            <Link key={c.userId} to={`/messages/${u?.handle}`} className="row-item">
              <Avatar user={u} size={48} />
              <span className="grow">
                <strong>{u?.name}</strong>
                <span className={c.unread ? 'small block dm-preview unread' : 'muted small block dm-preview'}>
                  {lastMsg.from === me.id ? 'You: ' : ''}
                  {lastMsg.audio ? 'Voice message' : lastMsg.text}
                </span>
              </span>
              <span className="dm-meta">
                <span className="muted small">{timeAgo(lastMsg.at)}</span>
                {c.unread > 0 && <span className="badge">{c.unread}</span>}
              </span>
            </Link>
          )
        })}
        {!convos.length && <p className="empty">No messages yet.</p>}
      </div>
      {startable.length > 0 && me.handle !== 'guest' && (
        <>
          <div className="section-head">
            <h2>Start a chat</h2>
          </div>
          <div className="people-row">
            {startable.map((u) => (
              <Link key={u.id} to={`/messages/${u.handle}`} className="person-chip">
                <Avatar user={u} size={44} />
                <span>{u.name}</span>
              </Link>
            ))}
          </div>
          <p className="muted small center">You can message people you follow or who follow you.</p>
        </>
      )}
    </>
  )
}

export function Conversation() {
  const { handle } = useParams()
  const { state, dispatch, me } = useStore()
  const toast = useToast()
  const nav = useNavigate()
  const other = state.users.find((u) => u.handle === handle)
  const [text, setText] = useState('')
  const [rec, setRec] = useState<number | null>(null)
  const recorder = useRef<ReturnType<typeof createRecorder> | null>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const replyTimers = useRef<ReturnType<typeof setTimeout>[]>([])
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 30_000)
    return () => clearInterval(t)
  }, [])

  const convo = me && other ? conversations(state, now).find((c) => c.userId === other.id) : undefined
  const msgs = convo?.msgs ?? []
  const unread = msgs.filter((m) => m.to === me?.id && !m.seenAt).length

  // Opening the chat (or a new incoming message while open) marks it seen: the 24h clock starts.
  useEffect(() => {
    if (other && unread) dispatch({ type: 'openConversation', withUserId: other.id, at: Date.now() })
  }, [other, unread, dispatch])
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [msgs.length])
  useEffect(() => {
    if (rec === null) return
    const t = setInterval(() => {
      const s = recorder.current?.elapsed() ?? 0
      setRec(s)
      if (s >= MAX_VOICE_SECONDS) void stopRec()
    }, 200)
    return () => clearInterval(t)
  })
  useEffect(
    () => () => {
      recorder.current?.cancel()
      replyTimers.current.forEach(clearTimeout)
    },
    [],
  )

  if (!me || !other) return <Navigate to="/messages" replace />
  const allowed = canMessage(state, me.id, other.id) && me.handle !== 'guest'

  const simulateReply = () => {
    if (!other.id.startsWith('u-')) return
    const pool = REPLIES[other.id] ?? fallback
    // One reply per burst of messages.
    replyTimers.current.forEach(clearTimeout)
    replyTimers.current = [
      setTimeout(() => dispatch({ type: 'partnerSeen', partnerId: other.id, at: Date.now() }), 1800),
      setTimeout(() => dispatch({ type: 'receiveDm', id: newId(), from: other.id, at: Date.now(), text: pool[Math.floor(Math.random() * pool.length)] }), 3600),
    ]
  }
  const send = () => {
    if (!text.trim()) return
    dispatch({ type: 'sendDm', id: newId(), to: other.id, at: Date.now(), text })
    setText('')
    simulateReply()
  }
  const startRec = async () => {
    try {
      recorder.current = createRecorder()
      await recorder.current.start()
      setRec(0)
    } catch {
      toast('Microphone not available. Check your browser permissions.')
    }
  }
  const stopRec = async () => {
    if (!recorder.current) return
    setRec(null)
    try {
      const note = await recorder.current.stop()
      dispatch({ type: 'sendDm', id: newId(), to: other.id, at: Date.now(), audio: note })
      simulateReply()
    } catch {
      toast('Recording failed')
    }
    recorder.current = null
  }

  return (
    <div className="dm">
      <header className="dm-head">
        <button className="glass-circle" onClick={() => nav('/messages')} aria-label="Back to messages">
          <IconArrowLeft size={18} />
        </button>
        <Link to={`/u/${other.handle}`} className="dm-who">
          <Avatar user={other} size={36} />
          <span>
            <strong>{other.name}</strong>
            <span className="muted small block">@{other.handle}</span>
          </span>
        </Link>
      </header>
      <p className="dm-rule center muted small">Messages disappear 24h after they’re seen</p>
      <div className="dm-list" ref={listRef}>
        <AnimatePresence initial={false}>
          {msgs.map((m, i) => {
            const mine = m.from === me.id
            const left = dmExpiresIn(m, now)
            const lastMine = mine && !msgs.slice(i + 1).some((x) => x.from === me.id)
            return (
              <motion.div
                key={m.id}
                layout="position"
                className={mine ? 'bubble-row mine' : 'bubble-row'}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={springSnappy}
                style={{ transformOrigin: mine ? 'bottom right' : 'bottom left' }}
              >
                <div className={m.audio ? 'bubble audio' : 'bubble'}>{m.audio ? <AudioPlayer src={m.audio.src} duration={m.audio.duration} peaks={m.audio.peaks} /> : m.text}</div>
                {(left !== null || lastMine) && (
                  <span className="bubble-meta">
                    {mine && lastMine && (m.seenAt ? 'Seen' : 'Sent')}
                    {left !== null && `${mine && lastMine ? ' · ' : ''}disappears in ${hours(left)}`}
                  </span>
                )}
              </motion.div>
            )
          })}
        </AnimatePresence>
        {!msgs.length && <p className="empty">Say hi to {other.name}.</p>}
      </div>
      {allowed ? (
        rec !== null ? (
          <div className="dm-input rec">
            <span className="rec-dot" />
            <span className="grow">Recording… {Math.floor(rec)}s</span>
            <button
              className="icon-btn"
              aria-label="Cancel recording"
              onClick={() => {
                recorder.current?.cancel()
                recorder.current = null
                setRec(null)
              }}
            >
              <IconX size={18} />
            </button>
            <button className="dm-send" aria-label="Send voice message" onClick={() => void stopRec()}>
              <IconSend size={18} />
            </button>
          </div>
        ) : (
          <form
            className="dm-input"
            onSubmit={(e) => {
              e.preventDefault()
              send()
            }}
          >
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Message…" aria-label="Message" maxLength={1000} />
            {text.trim() ? (
              <button className="dm-send" aria-label="Send">
                <IconSend size={18} />
              </button>
            ) : (
              <button type="button" className="dm-send ghost" aria-label="Record a voice message" onClick={() => void startRec()}>
                <IconMic size={18} />
              </button>
            )}
          </form>
        )
      ) : (
        <p className="muted small center dm-locked">
          {me.handle === 'guest' ? (
            <>
              <Link to="/welcome" className="tag">
                Create your profile
              </Link>{' '}
              to reply.
            </>
          ) : (
            'You can message people you follow or who follow you.'
          )}
        </p>
      )}
    </div>
  )
}

// Unread count for the messages button.
export function useUnreadDms() {
  const { state } = useStore()
  return conversations(state, Date.now()).reduce((n, c) => n + c.unread, 0)
}

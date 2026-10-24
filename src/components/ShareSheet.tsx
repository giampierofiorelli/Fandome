import { motion } from 'motion/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Post } from '../data/types'
import { newId, useStore } from '../store/store'
import { canMessage, conversations, messagingPaused } from '../store/reducer'
import { MessagingNotice } from '../pages/Messages'
import { StoryComposer } from './Stories'
import { ArtistDisc, Avatar, Modal } from './ui'
import { useToast } from './Toast'
import { artistById } from '../lib/util'
import { IconCheck, IconLink, IconPlus, IconSearch } from './icons'
import { springSnappy } from '../lib/motion'

// Instagram-style share: put the post in your story, or send it to someone in private.
export function ShareSheet({ post, onClose }: { post: Post; onClose: () => void }) {
  const [story, setStory] = useState(false)
  return (
    <Modal title={story ? 'Share to your story' : 'Share'} onClose={onClose}>
      {story ? <StoryComposer post={post} /> : <SendList post={post} onStory={() => setStory(true)} />}
    </Modal>
  )
}

function SendList({ post, onStory }: { post: Post; onStory: () => void }) {
  const { state, dispatch, me, userById } = useStore()
  const [q, setQ] = useState('')
  const [note, setNote] = useState('')
  const [sent, setSent] = useState<string[]>([])
  if (!me) return null
  const now = Date.now()
  const guest = me.handle === 'guest'
  const paused = messagingPaused(state, me.id, now)
  // Recent chats first, then everyone else you can message.
  const recent = conversations(state, now).map((c) => c.userId)
  const people = state.users
    .filter((u) => u.id !== me.id && u.kind !== 'page' && u.handle !== 'guest' && canMessage(state, me.id, u.id))
    .sort((a, b) => (recent.indexOf(a.id) + 1 || 99) - (recent.indexOf(b.id) + 1 || 99))
    .filter((u) => !q || `${u.name} ${u.handle}`.toLowerCase().includes(q.toLowerCase()))
  const author = userById(post.authorId)

  const send = (to: string) => {
    dispatch({ type: 'sendDm', id: newId(), to, at: Date.now(), postId: post.id })
    if (note.trim()) dispatch({ type: 'sendDm', id: newId(), to, at: Date.now() + 1, text: note })
    setSent((s) => [...s, to])
  }

  return (
    <div className="share-sheet">
      <div className="share-post">
        <Avatar user={author} size={32} />
        <span className="grow">
          <strong>{author?.name}</strong>
          <span className="muted small block share-post-text">{post.text}</span>
        </span>
      </div>

      <button className="share-story" onClick={onStory}>
        <span className="share-story-ring">
          <Avatar user={me} size={44} />
          <span className="story-plus static">
            <IconPlus size={12} />
          </span>
        </span>
        <span className="grow">
          <strong>Add to your story</strong>
          <span className="muted small block">Your followers see it for 24 hours</span>
        </span>
      </button>

      <div className="section-head">
        <h2>Send in a message</h2>
      </div>
      {guest ? (
        <p className="muted small">
          <Link to="/welcome" className="tag">
            Create your profile
          </Link>{' '}
          to send posts to people.
        </p>
      ) : paused ? (
        <MessagingNotice compact />
      ) : (
        <>
          <label className="share-search">
            <IconSearch size={16} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search people" aria-label="Search people" />
          </label>
          <input className="share-note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a message (optional)" maxLength={500} />
          <div className="share-people">
            {people.map((u) => {
              const done = sent.includes(u.id)
              return (
                <div key={u.id} className="share-person">
                  <Avatar user={u} size={40} />
                  <span className="grow">
                    <strong>{u.name}</strong>
                    <span className="muted small block">@{u.handle}</span>
                  </span>
                  <motion.button className={done ? 'pill-btn glass small' : 'pill-btn ink small'} disabled={done} onClick={() => send(u.id)} whileTap={{ scale: 0.92 }} transition={springSnappy}>
                    {done ? (
                      <>
                        <IconCheck size={14} /> Sent
                      </>
                    ) : (
                      'Send'
                    )}
                  </motion.button>
                </div>
              )
            })}
            {!people.length && <p className="muted small">{q ? 'Nobody found.' : 'Follow people to send them posts.'}</p>}
          </div>
        </>
      )}
    </div>
  )
}

// Suggest an artist room to people you know: it arrives as a card in their messages.
export function SuggestArtistSheet({ artistId, onClose }: { artistId: string; onClose: () => void }) {
  return (
    <Modal title="Suggest this room" onClose={onClose}>
      <SuggestList artistId={artistId} />
    </Modal>
  )
}
function SuggestList({ artistId }: { artistId: string }) {
  const { state, dispatch, me } = useStore()
  const toast = useToast()
  const [q, setQ] = useState('')
  const [sent, setSent] = useState<string[]>([])
  const artist = artistById(artistId)
  if (!me || !artist) return null
  const now = Date.now()
  const recent = conversations(state, now).map((c) => c.userId)
  const people = state.users
    .filter((u) => u.id !== me.id && u.kind !== 'page' && u.handle !== 'guest' && canMessage(state, me.id, u.id))
    .sort((a, b) => Number(a.fanSince[artistId] !== undefined) - Number(b.fanSince[artistId] !== undefined) || (recent.indexOf(a.id) + 1 || 99) - (recent.indexOf(b.id) + 1 || 99))
    .filter((u) => !q || `${u.name} ${u.handle}`.toLowerCase().includes(q.toLowerCase()))
  const url = `${location.origin}${location.pathname}#/a/${artistId}`
  return (
    <div className="share-sheet">
      <div className="share-post" style={{ ['--c' as string]: artist.color }}>
        <ArtistDisc id={artistId} size={40} />
        <span className="grow">
          <strong>{artist.name}</strong>
          <span className="muted small block share-post-text">{artist.tagline}</span>
        </span>
      </div>
      <button
        className="share-story"
        onClick={async () => {
          try {
            if (navigator.share) await navigator.share({ title: `${artist.name} fans on Fandome`, url })
            else {
              await navigator.clipboard.writeText(url)
              toast('Link copied')
            }
          } catch {
            // closed
          }
        }}
      >
        <span className="share-icon-circle">
          <IconLink size={18} />
        </span>
        <span className="grow">
          <strong>Share a link</strong>
          <span className="muted small block">Invite friends who aren’t on Fandome yet</span>
        </span>
      </button>
      <div className="section-head">
        <h2>Send to people you know</h2>
      </div>
      {me.handle === 'guest' ? (
        <p className="muted small">
          <Link to="/welcome" className="tag">
            Create your profile
          </Link>{' '}
          to suggest rooms to people.
        </p>
      ) : messagingPaused(state, me.id, now) ? (
        <MessagingNotice compact />
      ) : (
        <>
          <label className="share-search">
            <IconSearch size={16} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search people" aria-label="Search people" />
          </label>
          <div className="share-people">
            {people.map((u) => {
              const fan = u.fanSince[artistId] !== undefined
              const done = sent.includes(u.id)
              return (
                <div key={u.id} className="share-person">
                  <Avatar user={u} size={40} />
                  <span className="grow">
                    <strong>{u.name}</strong>
                    <span className="muted small block">{fan ? `Already in the ${artist.name} room` : `@${u.handle}`}</span>
                  </span>
                  <motion.button
                    className={done || fan ? 'pill-btn glass small' : 'pill-btn ink small'}
                    disabled={done || fan}
                    whileTap={{ scale: 0.92 }}
                    transition={springSnappy}
                    onClick={() => {
                      dispatch({ type: 'sendDm', id: newId(), to: u.id, at: Date.now(), artistId })
                      setSent((s) => [...s, u.id])
                    }}
                  >
                    {done ? (
                      <>
                        <IconCheck size={14} /> Sent
                      </>
                    ) : fan ? (
                      'Fan'
                    ) : (
                      'Suggest'
                    )}
                  </motion.button>
                </div>
              )
            })}
            {!people.length && <p className="muted small">{q ? 'Nobody found.' : 'Follow people to suggest rooms to them.'}</p>}
          </div>
        </>
      )}
    </div>
  )
}

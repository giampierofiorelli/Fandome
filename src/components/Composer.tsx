import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import { albums, artists } from '../data/seed'
import { newId, useStore } from '../store/store'
import { albumById, artistById, concertById } from '../lib/util'
import { AlbumCover, Avatar, Modal, Stars, useModalClose } from './ui'
import { IconPin, IconPoll } from './icons'
import { useToast } from './Toast'

export interface ComposeOpts {
  quoteOf?: string
  replyTo?: string
  artistId?: string
  concertId?: string
  reviewAlbumId?: string // opens in "log album" mode (Letterboxd-style)
}

const Ctx = createContext<(o?: ComposeOpts) => void>(() => {})
export const useComposer = () => useContext(Ctx)

const MAX = 300

export function ComposerProvider({ children }: { children: ReactNode }) {
  const [opts, setOpts] = useState<ComposeOpts | null>(null)
  const open = useCallback((o: ComposeOpts = {}) => setOpts(o), [])
  return (
    <Ctx.Provider value={open}>
      {children}
      {opts && <ComposerModal opts={opts} onClose={() => setOpts(null)} />}
    </Ctx.Provider>
  )
}

function ComposerModal({ opts, onClose }: { opts: ComposeOpts; onClose: () => void }) {
  const title = opts.reviewAlbumId ? 'Log an album' : opts.replyTo ? 'Reply' : opts.quoteOf ? 'Quote post' : 'New post'
  return (
    <Modal title={title} onClose={onClose}>
      <ComposerForm opts={opts} />
    </Modal>
  )
}

function ComposerForm({ opts }: { opts: ComposeOpts }) {
  const onClose = useModalClose()
  const toast = useToast()
  const { state, dispatch, me, userById } = useStore()
  const quoted = opts.quoteOf ? state.posts.find((p) => p.id === opts.quoteOf) : undefined
  const parent = opts.replyTo ? state.posts.find((p) => p.id === opts.replyTo) : undefined
  const myArtists = me ? Object.keys(me.fanSince) : []
  const [text, setText] = useState('')
  const [artistId, setArtistId] = useState(opts.artistId ?? parent?.artistId ?? quoted?.artistId ?? myArtists[0] ?? '')
  const [pollOn, setPollOn] = useState(false)
  const [pollOpts, setPollOpts] = useState(['', ''])
  const reviewMode = Boolean(opts.reviewAlbumId)
  const [albumId, setAlbumId] = useState(opts.reviewAlbumId ?? '')
  const [rating, setRating] = useState(opts.reviewAlbumId && me ? me.ratings[opts.reviewAlbumId] ?? 0 : 0)

  if (!me) return null
  const concert = concertById(opts.concertId)
  const validPoll = pollOpts.filter((o) => o.trim()).length >= 2
  const canPost = text.trim().length > 0 && text.length <= MAX && (!pollOn || validPoll) && (!reviewMode || rating > 0)

  const submit = () => {
    if (!canPost) return
    dispatch({
      type: 'post',
      id: newId(),
      at: Date.now(),
      text: text.trim(),
      artistId: artistId || undefined,
      concertId: opts.concertId,
      quoteOf: opts.quoteOf,
      replyTo: opts.replyTo,
      poll: pollOn ? { options: pollOpts.filter((o) => o.trim()).map((label) => ({ label: label.trim(), votes: [] })) } : undefined,
      review: reviewMode && albumId ? { albumId, rating } : undefined,
    })
    toast(reviewMode ? 'Logged to your diary' : parent ? 'Reply posted' : 'Posted')
    onClose()
  }

  return (
    <>
      {parent && (
        <p className="muted small">
          Replying to <strong>@{userById(parent.authorId)?.handle}</strong>
        </p>
      )}
      {concert && (
        <p className="chip inline-icon">
          <IconPin size={13} /> {concert.city} · {concert.tour}
        </p>
      )}
      {reviewMode && (
        <div className="review-picker">
          <AlbumCover album={albumById(albumId)} size={72} />
          <div>
            <select value={albumId} onChange={(e) => setAlbumId(e.target.value)} aria-label="Album">
              {albums.map((a) => (
                <option key={a.id} value={a.id}>
                  {artistById(a.artistId)?.name} — {a.title} ({a.year})
                </option>
              ))}
            </select>
            <div style={{ marginTop: 8 }}>
              <Stars value={rating} onChange={setRating} size={28} />
            </div>
          </div>
        </div>
      )}
      <div className="composer-row">
        <Avatar user={me} />
        <textarea
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={reviewMode ? 'Write a short review… (jokes allowed)' : parent ? 'Post your reply' : 'What’s happening in your fandom? Use #tags'}
          rows={4}
          onKeyDown={(e) => (e.metaKey || e.ctrlKey) && e.key === 'Enter' && submit()}
        />
      </div>
      {quoted && (
        <div className="quote-preview">
          <strong>{userById(quoted.authorId)?.name}</strong> <span className="muted">@{userById(quoted.authorId)?.handle}</span>
          <p>{quoted.text}</p>
        </div>
      )}
      {pollOn && (
        <div className="poll-edit">
          {pollOpts.map((o, i) => (
            <input
              key={i}
              value={o}
              placeholder={`Option ${i + 1}`}
              onChange={(e) => setPollOpts(pollOpts.map((x, j) => (j === i ? e.target.value : x)))}
            />
          ))}
          {pollOpts.length < 4 && (
            <button className="link-btn" onClick={() => setPollOpts([...pollOpts, ''])}>
              + add option
            </button>
          )}
        </div>
      )}
      <div className="composer-foot">
        <select value={artistId} onChange={(e) => setArtistId(e.target.value)} aria-label="Fandom">
          <option value="">No fandom</option>
          {artists.map((a) => (
            <option key={a.id} value={a.id}>
              {a.name}
            </option>
          ))}
        </select>
        {!reviewMode && !parent && (
          <button className={pollOn ? 'pill active' : 'pill'} onClick={() => setPollOn(!pollOn)}>
            <IconPoll size={14} /> Poll
          </button>
        )}
        <CharRing used={text.length} max={MAX} />
        <button className="btn primary" disabled={!canPost} onClick={submit}>
          {parent ? 'Reply' : 'Post'}
        </button>
      </div>
    </>
  )
}

// Twitter-style progress ring for the character limit.
function CharRing({ used, max }: { used: number; max: number }) {
  const r = 9
  const c = 2 * Math.PI * r
  const pct = Math.min(1, used / max)
  const left = max - used
  const warn = left <= 20
  return (
    <span className={`char-ring ${left < 0 ? 'over' : warn ? 'warn' : ''}`} aria-label={`${left} characters left`}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r={r} className="track" />
        <circle cx="12" cy="12" r={r} className="fill" strokeDasharray={c} strokeDashoffset={c * (1 - pct)} transform="rotate(-90 12 12)" />
      </svg>
      {warn && <span>{left}</span>}
    </span>
  )
}

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { albums, artists } from '../data/seed'
import { newId, useStore } from '../store/store'
import { albumById, artistById, concertById } from '../lib/util'
import { AlbumCover, Avatar, Modal, Stars, useModalClose } from './ui'
import { IconImage, IconMic, IconMusic, IconPin, IconPlay, IconPoll, IconX } from './icons'
import { AudioPlayer } from './AudioPlayer'
import { createRecorder, fileToVoiceNote, MAX_VOICE_SECONDS, type VoiceNote } from '../lib/audio'
import { compressImage, detectEmbed, EMBED_LABEL, prettyUrl, stripUrl } from '../lib/media'
import { pagesManagedBy } from '../store/reducer'
import { useToast } from './Toast'

export interface ComposeOpts {
  quoteOf?: string
  replyTo?: string
  artistId?: string
  concertId?: string
  reviewAlbumId?: string // opens in "log album" mode (Letterboxd-style)
  as?: string // post as a page the user manages
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
  const [photo, setPhoto] = useState<string | null>(null)
  const myPages = me ? pagesManagedBy(state, me.id) : []
  const [asId, setAsId] = useState(opts.as ?? '')
  const [photoBusy, setPhotoBusy] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const audioFileRef = useRef<HTMLInputElement>(null)
  const [audio, setAudio] = useState<VoiceNote | null>(null)
  const recorder = useRef<ReturnType<typeof createRecorder> | null>(null)
  const [recSecs, setRecSecs] = useState<number | null>(null) // null = not recording
  useEffect(() => {
    if (recSecs === null) return
    const t = setInterval(() => {
      const s = recorder.current?.elapsed() ?? 0
      setRecSecs(s)
      if (s >= MAX_VOICE_SECONDS) void stopRec()
    }, 200)
    return () => clearInterval(t)
  })
  useEffect(() => () => recorder.current?.cancel(), [])
  const startRec = async () => {
    try {
      recorder.current = createRecorder()
      await recorder.current.start()
      setRecSecs(0)
    } catch {
      toast('Microphone not available. Check your browser permissions.')
    }
  }
  const stopRec = async () => {
    if (!recorder.current) return
    setRecSecs(null)
    try {
      setAudio(await recorder.current.stop())
    } catch {
      toast('Recording failed')
    }
    recorder.current = null
  }
  const reviewMode = Boolean(opts.reviewAlbumId)
  const [albumId, setAlbumId] = useState(opts.reviewAlbumId ?? '')
  const [rating, setRating] = useState(opts.reviewAlbumId && me ? me.ratings[opts.reviewAlbumId] ?? 0 : 0)

  if (!me) return null
  const concert = concertById(opts.concertId)
  const validPoll = pollOpts.filter((o) => o.trim()).length >= 2
  const embed = detectEmbed(text)
  const canPost = recSecs === null && (text.trim().length > 0 || Boolean(photo) || Boolean(embed) || Boolean(audio)) && text.length <= MAX && (!pollOn || validPoll) && (!reviewMode || rating > 0)

  const submit = () => {
    if (!canPost) return
    dispatch({
      type: 'post',
      id: newId(),
      at: Date.now(),
      text: embed ? stripUrl(text, embed.url) : text.trim(),
      photo: photo ?? undefined,
      audio: audio ?? undefined,
      embed,
      as: asId || undefined,
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
      {myPages.length > 0 && !reviewMode && (
        <div className="post-as">
          <span className="muted small">Post as</span>
          <div className="seg small">
            {[{ id: '', name: me?.name ?? 'Me' }, ...myPages.map((p) => ({ id: p.id, name: p.name }))].map((o) => (
              <button key={o.id || 'me'} className={asId === o.id ? 'seg-btn active solid' : 'seg-btn'} onClick={() => setAsId(o.id)}>
                <span className="seg-label">{o.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
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
        <Avatar user={myPages.find((p) => p.id === asId) ?? me} />
        <textarea
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={reviewMode ? 'Write a short review… (jokes allowed)' : parent ? 'Post your reply' : 'What’s happening? Paste a link from YouTube, X, Instagram or TikTok'}
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
      {recSecs !== null && (
        <div className="rec-bar">
          <span className="rec-dot" />
          <span className="grow">Recording… {Math.floor(recSecs)}s / {MAX_VOICE_SECONDS}s</span>
          <button className="pill-btn glass small" onClick={() => (recorder.current?.cancel(), (recorder.current = null), setRecSecs(null))}>
            Cancel
          </button>
          <button className="pill-btn ink small" onClick={() => void stopRec()}>
            Done
          </button>
        </div>
      )}
      {audio && (
        <div className="media-preview audio-preview">
          <AudioPlayer src={audio.src} duration={audio.duration} peaks={audio.peaks} />
          <button className="media-remove" onClick={() => setAudio(null)} aria-label="Remove audio">
            <IconX size={14} />
          </button>
        </div>
      )}
      {photo && (
        <div className="media-preview">
          <img src={photo} alt="Your photo" />
          <button className="media-remove" onClick={() => setPhoto(null)} aria-label="Remove photo">
            <IconX size={14} />
          </button>
        </div>
      )}
      {embed?.kind === 'youtube' && (
        <div className="media-preview">
          <img src={`https://i.ytimg.com/vi/${embed.id}/hqdefault.jpg`} alt="YouTube video" />
          <span className="yt-badge">
            <IconPlay size={14} /> YouTube video will be embedded
          </span>
        </div>
      )}
      {embed && embed.kind !== 'youtube' && (
        <div className={`embed-chip ${embed.kind}`}>
          <span className="embed-logo">{EMBED_LABEL[embed.kind].slice(0, 2)}</span>
          <span className="grow">
            <strong>{EMBED_LABEL[embed.kind]} post will be embedded</strong>
            <span className="muted small block">{prettyUrl(embed.url).short}</span>
          </span>
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
        {!reviewMode && (
          <>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              hidden
              onChange={async (e) => {
                const f = e.target.files?.[0]
                e.target.value = ''
                if (!f) return
                setPhotoBusy(true)
                try {
                  setPhoto(await compressImage(f))
                } catch {
                  toast('That file isn’t an image')
                } finally {
                  setPhotoBusy(false)
                }
              }}
            />
            <button className={photo ? 'pill active' : 'pill'} onClick={() => fileRef.current?.click()} aria-label="Add photo" disabled={photoBusy}>
              <IconImage size={14} /> {photoBusy ? '…' : 'Photo'}
            </button>
            <input
              ref={audioFileRef}
              type="file"
              accept="audio/*"
              hidden
              onChange={async (e) => {
                const f = e.target.files?.[0]
                e.target.value = ''
                if (!f) return
                try {
                  setAudio(await fileToVoiceNote(f))
                } catch (err) {
                  toast((err as Error).message)
                }
              }}
            />
            <button
              className={audio || recSecs !== null ? 'pill active' : 'pill'}
              aria-label="Record a voice note"
              onClick={() => (recSecs !== null ? void stopRec() : void startRec())}
            >
              <IconMic size={14} /> Voice
            </button>
            <button className="pill" aria-label="Upload an audio file" onClick={() => audioFileRef.current?.click()}>
              <IconMusic size={14} /> Audio
            </button>
          </>
        )}
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

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { albums, artists } from '../data/seed'
import { newId, useStore } from '../store/store'
import { albumById, artistById, concertById } from '../lib/util'
import { AlbumCover, ArtistDisc, Avatar, LinkPreviewCard, Modal, ScoreBadge, useModalClose } from './ui'
import { IconDisc, IconImage, IconMic, IconMusic, IconPin, IconPlay, IconPlus, IconPoll, IconUsers, IconX } from './icons'
import { AudioPlayer } from './AudioPlayer'
import { createRecorder, fileToVoiceNote, MAX_VOICE_SECONDS, type VoiceNote } from '../lib/audio'
import { compressImage, detectEmbed, EMBED_LABEL, fetchLinkPreview, findUrls, prettyUrl, stripUrl } from '../lib/media'
import type { LinkPreview } from '../data/types'
import { canMessage, MAX_COLLAB, MAX_POST_ALBUMS, MAX_POST_ARTISTS, pagesManagedBy } from '../store/reducer'
import { postArtists } from '../lib/postArtists'
import { useToast } from './Toast'

export interface ComposeOpts {
  quoteOf?: string
  replyTo?: string
  artistId?: string
  concertId?: string
  reviewAlbumId?: string // opens in "log album" mode (Letterboxd-style)
  albumId?: string // start with this album linked ("Talk about it" on an album page)
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
  const startAlbum = albumById(opts.albumId)
  const [text, setText] = useState(startAlbum ? `${startAlbum.title} ` : '')
  const [albumIds, setAlbumIds] = useState<string[]>(startAlbum ? [startAlbum.id] : [])
  const [panel, setPanel] = useState<'artists' | 'albums' | null>(null)
  const textRef = useRef<HTMLTextAreaElement>(null)
  const [artistIds, setArtistIds] = useState<string[]>(() => {
    if (opts.artistId) return [opts.artistId]
    const from = parent ?? quoted
    if (from) return postArtists(from)
    return myArtists.slice(0, 1)
  })
  const toggleArtist = (id: string) =>
    setArtistIds((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : cur.length >= MAX_POST_ARTISTS ? cur : [...cur, id]))
  // Link an album: its title goes into the text at the cursor, and its artist is tagged too.
  const addAlbum = (id: string) => {
    const al = albumById(id)
    if (!al || albumIds.includes(id) || albumIds.length >= MAX_POST_ALBUMS) return
    setAlbumIds([...albumIds, id])
    setArtistIds((cur) => (cur.includes(al.artistId) || cur.length >= MAX_POST_ARTISTS ? cur : [...cur, al.artistId]))
    if (!text.toLowerCase().includes(al.title.toLowerCase())) {
      const el = textRef.current
      const at = el ? el.selectionStart : text.length
      const before = text.slice(0, at)
      const after = text.slice(at)
      const pad = before && !/\s$/.test(before) ? ' ' : ''
      setText(`${before}${pad}${al.title}${after.startsWith(' ') ? '' : ' '}${after}`)
    }
    setPanel(null)
    requestAnimationFrame(() => textRef.current?.focus())
  }
  const [pollOn, setPollOn] = useState(false)
  const [collabOpen, setCollabOpen] = useState(false)
  const [collabIds, setCollabIds] = useState<string[]>([])
  const [pollOpts, setPollOpts] = useState(['', ''])
  const [photo, setPhoto] = useState<string | null>(null)
  const myPages = me ? pagesManagedBy(state, me.id) : []
  const [asId, setAsId] = useState(opts.as ?? '')
  const [photoBusy, setPhotoBusy] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  // One post per tap, even if the tap fires both pointerdown and click.
  const posted = useRef(false)
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
  // Plain web links get a preview card (title, text, image), fetched once while writing.
  const linkUrl = detectEmbed(text) ? undefined : findUrls(text)[0]
  const [preview, setPreview] = useState<{ url: string; data: LinkPreview | null; loading: boolean } | null>(null)
  const [hiddenPreviews, setHiddenPreviews] = useState<string[]>([])
  // Only on a tap: reading a link's preview contacts other services, so it's the writer's choice.
  const askPreview = () => {
    if (!linkUrl) return
    const url = linkUrl
    setHiddenPreviews(hiddenPreviews.filter((u) => u !== url))
    setPreview({ url, data: null, loading: true })
    void fetchLinkPreview(url).then((data) => setPreview((cur) => (cur && cur.url === url ? { url, data, loading: false } : cur)))
  }
  const shownPreview = preview && preview.url === linkUrl && !hiddenPreviews.includes(linkUrl) ? preview : null
  const reviewMode = Boolean(opts.reviewAlbumId)
  const albumId = opts.reviewAlbumId ?? ''
  const rating = opts.reviewAlbumId && me ? me.ratings[opts.reviewAlbumId] ?? 0 : 0

  if (!me) return null
  const concert = concertById(opts.concertId)
  const validPoll = pollOpts.filter((o) => o.trim()).length >= 2
  const embed = detectEmbed(text)
  const canPost = recSecs === null && (text.trim().length > 0 || Boolean(photo) || Boolean(embed) || Boolean(audio)) && text.length <= MAX && (!pollOn || validPoll) && (!reviewMode || rating > 0) && artistIds.length > 0

  const submit = () => {
    if (!canPost || posted.current) return
    posted.current = true
    dispatch({
      type: 'post',
      id: newId(),
      at: Date.now(),
      text: embed ? stripUrl(text, embed.url) : shownPreview?.data ? stripUrl(text, shownPreview.url) : text.trim(),
      link: !embed && shownPreview?.data ? shownPreview.data : undefined,
      photo: photo ?? undefined,
      audio: audio ?? undefined,
      embed,
      as: asId || undefined,
      collabIds: parent ? undefined : collabIds,
      artistId: artistIds[0],
      artistIds,
      albumIds,
      concertId: opts.concertId,
      quoteOf: opts.quoteOf,
      replyTo: opts.replyTo,
      poll: pollOn ? { options: pollOpts.filter((o) => o.trim()).map((label) => ({ label: label.trim(), votes: [] })) } : undefined,
      review: reviewMode && albumId ? { albumId, rating } : undefined,
    })
    toast(reviewMode ? 'Logged to your diary' : parent ? 'Reply posted' : collabIds.length ? 'Posted · collaborators invited' : 'Posted')
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
          <div className="grow">
            <strong>{albumById(albumId)?.title}</strong>
            <span className="muted small block">
              {artistById(albumById(albumId)?.artistId)?.name} · {albumById(albumId)?.year}
            </span>
          </div>
          {rating > 0 && <ScoreBadge rating={rating} size="lg" />}
        </div>
      )}
      <div className="composer-row">
        <Avatar user={myPages.find((p) => p.id === asId) ?? me} />
        <textarea
          ref={textRef}
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={reviewMode ? 'Write a short review… (jokes allowed)' : parent ? 'Post your reply' : 'What’s happening? Paste a link from YouTube, X, Instagram or TikTok'}
          rows={4}
          onKeyDown={(e) => (e.metaKey || e.ctrlKey) && e.key === 'Enter' && submit()}
        />
      </div>
      {linkUrl && !shownPreview && (
        <button type="button" className="add-preview" onClick={askPreview}>
          <IconImage size={15} /> Add link preview
          <span className="muted small">title and image, read via Microlink</span>
        </button>
      )}
      {shownPreview && !shownPreview.loading && !shownPreview.data && <p className="muted small">No preview available for this link.</p>}
      {shownPreview && (
        <div className="link-preview-edit">
          {shownPreview.loading ? (
            <div className="link-rich loading">
              <span className="muted small">Loading preview…</span>
            </div>
          ) : shownPreview.data ? (
            <LinkPreviewCard link={shownPreview.data} />
          ) : null}
          {(shownPreview.loading || shownPreview.data) && (
            <button type="button" className="media-remove" aria-label="Remove preview" onClick={() => setHiddenPreviews([...hiddenPreviews, shownPreview.url])}>
              <IconX size={14} />
            </button>
          )}
        </div>
      )}
      {albumIds.length > 0 && (
        <div className="album-chips composer-albums">
          {albumIds.map((id) => {
            const al = albumById(id)!
            return (
              <span key={id} className="album-chip">
                <AlbumCover album={al} size={28} />
                <span>{al.title}</span>
                <button type="button" className="chip-x" aria-label={`Remove ${al.title}`} onClick={() => setAlbumIds(albumIds.filter((x) => x !== id))}>
                  <IconX size={12} />
                </button>
              </span>
            )
          })}
        </div>
      )}
      {panel === 'albums' && <AlbumPicker artistIds={artistIds} selected={albumIds} onPick={addAlbum} onClose={() => setPanel(null)} />}
      {panel === 'artists' && <ArtistPicker selected={artistIds} onToggle={toggleArtist} onClose={() => setPanel(null)} />}
      {collabOpen && !parent && <CollabPicker selected={collabIds} onChange={setCollabIds} />}
      {!collabOpen && collabIds.length > 0 && (
        <p className="muted small collab-summary">
          With {collabIds.map((id) => userById(id)?.name).join(', ')} · they’ll be asked to accept
        </p>
      )}
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
      <div className="composer-tools">
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
        {!reviewMode && (
          <button className={panel === 'albums' || albumIds.length ? 'pill active' : 'pill'} aria-label="Link an album" onClick={() => setPanel(panel === 'albums' ? null : 'albums')}>
            <IconDisc size={14} /> Album{albumIds.length ? ` ${albumIds.length}` : ''}
          </button>
        )}
        {!reviewMode && !parent && (
          <button className={collabOpen || collabIds.length ? 'pill active' : 'pill'} aria-label="Invite collaborators" onClick={() => setCollabOpen(!collabOpen)}>
            <IconUsers size={14} /> Collab{collabIds.length ? ` ${collabIds.length}` : ''}
          </button>
        )}
        {!reviewMode && !parent && (
          <button className={pollOn ? 'pill active' : 'pill'} onClick={() => setPollOn(!pollOn)}>
            <IconPoll size={14} /> Poll
          </button>
        )}
        <CharRing used={text.length} max={MAX} />
      </div>
      <div className="composer-foot">
        <div className="artist-picked" role="group" aria-label="Artists this post is about">
          {artistIds.map((id) => {
            const a = artistById(id)
            if (!a) return null
            return (
              <button key={id} type="button" className="pick on" style={{ ['--c' as string]: a.color }} onClick={() => toggleArtist(id)} aria-label={`Remove ${a.name}`}>
                <ArtistDisc id={id} size={20} />
                {a.name}
                <IconX size={12} />
              </button>
            )
          })}
          {artistIds.length < MAX_POST_ARTISTS && (
            <button type="button" className={artistIds.length ? 'pick add' : 'pick add needed'} onClick={() => setPanel(panel === 'artists' ? null : 'artists')}>
              <IconPlus size={14} /> {artistIds.length ? 'Artist' : 'Choose an artist'}
            </button>
          )}
        </div>
        <button
          className="btn primary post-btn"
          disabled={!canPost}
          // On phones the first tap also closes the keyboard: the sheet moves down and the click was
          // lost under the finger (a second tap was needed). Post as soon as the finger touches.
          onPointerDown={(e) => {
            if (e.pointerType !== 'mouse') {
              e.preventDefault()
              submit()
            }
          }}
          onClick={submit}
        >
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

// Invite up to 3 people to share the post (Instagram-style collab). They accept or decline.
const fold = (t: string) => t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

// Every post is about at least one artist (Fandome is only about music). Your artists and
// the ones trending this week come first; search finds any of the others.
function ArtistPicker({ selected, onToggle, onClose }: { selected: string[]; onToggle: (id: string) => void; onClose: () => void }) {
  const { state, me } = useStore()
  const [q, setQ] = useState('')
  const mine = me ? Object.keys(me.fanSince) : []
  const week = Date.now() - 7 * 86_400_000
  const heat = new Map<string, number>()
  for (const p of state.posts) if (p.createdAt > week) for (const id of postArtists(p)) heat.set(id, (heat.get(id) ?? 0) + 1)
  const trending = [...heat.entries()].sort((a, b) => b[1] - a[1]).map(([id]) => id).filter((id) => !mine.includes(id)).slice(0, 8)
  const results = q.trim() ? artists.filter((a) => fold(a.name).includes(fold(q.trim()))).slice(0, 30) : []
  const row = (id: string) => {
    const a = artistById(id)
    if (!a) return null
    const on = selected.includes(id)
    return (
      <button key={id} type="button" className={on ? 'pick on' : 'pick'} style={{ ['--c' as string]: a.color }} aria-pressed={on} onClick={() => onToggle(id)} disabled={!on && selected.length >= MAX_POST_ARTISTS}>
        <ArtistDisc id={id} size={20} />
        {a.name}
      </button>
    )
  }
  return (
    <div className="collab-picker picker-panel">
      <div className="row-between">
        <span className="small">
          <strong>Artists</strong> <span className="muted">· every post is about music (max {MAX_POST_ARTISTS})</span>
        </span>
        <button type="button" className="link-btn small" onClick={onClose}>
          Done
        </button>
      </div>
      <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder={`Search ${artists.length} artists`} aria-label="Search artists" />
      {q.trim() ? (
        <div className="pick-wrap">{results.length ? results.map((a) => row(a.id)) : <span className="muted small">No artist with that name yet.</span>}</div>
      ) : (
        <>
          {mine.length > 0 && <div className="picker-label">Your artists</div>}
          <div className="pick-wrap">{mine.map(row)}</div>
          {trending.length > 0 && <div className="picker-label">Trending this week</div>}
          <div className="pick-wrap">{trending.map(row)}</div>
        </>
      )}
    </div>
  )
}

// Link an album to the post: albums of the post's artists first, search finds any album.
function AlbumPicker({ artistIds, selected, onPick, onClose }: { artistIds: string[]; selected: string[]; onPick: (id: string) => void; onClose: () => void }) {
  const [q, setQ] = useState('')
  const query = fold(q.trim())
  const list = query
    ? albums.filter((al) => fold(`${al.title} ${artistById(al.artistId)?.name ?? ''}`).includes(query)).slice(0, 30)
    : albums.filter((al) => artistIds.includes(al.artistId)).sort((a, b) => b.year - a.year).slice(0, 30)
  return (
    <div className="collab-picker picker-panel">
      <div className="row-between">
        <span className="small">
          <strong>Link an album</strong> <span className="muted">· its title becomes a link to the album page (max {MAX_POST_ALBUMS})</span>
        </span>
        <button type="button" className="link-btn small" onClick={onClose}>
          Close
        </button>
      </div>
      <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search albums or artists" aria-label="Search albums" />
      <div className="album-pick-list">
        {list.map((al) => (
          <button key={al.id} type="button" className="album-pick" disabled={selected.includes(al.id) || selected.length >= MAX_POST_ALBUMS} onClick={() => onPick(al.id)}>
            <AlbumCover album={al} size={40} />
            <span className="grow">
              <strong>{al.title}</strong>
              <span className="muted small block">
                {artistById(al.artistId)?.name} · {al.year}
              </span>
            </span>
            {selected.includes(al.id) && <span className="muted small">Linked</span>}
          </button>
        ))}
        {!list.length && <span className="muted small">{query ? 'No album found.' : 'Choose an artist, or search any album.'}</span>}
      </div>
    </div>
  )
}

function CollabPicker({ selected, onChange }: { selected: string[]; onChange: (ids: string[]) => void }) {
  const { state, me } = useStore()
  const [q, setQ] = useState('')
  if (!me) return null
  const people = state.users
    .filter((u) => u.id !== me.id && u.handle !== 'guest' && u.id !== 'u-mod' && (canMessage(state, me.id, u.id) || me.following.includes(u.id)))
    .filter((u) => !q || `${u.name} ${u.handle}`.toLowerCase().includes(q.toLowerCase()))
    .slice(0, 12)
  const toggle = (id: string) => onChange(selected.includes(id) ? selected.filter((x) => x !== id) : selected.length >= MAX_COLLAB ? selected : [...selected, id])
  return (
    <div className="collab-picker">
      <span className="small">
        <strong>Collab</strong> <span className="muted">· the post appears on their profile too once they accept (max {MAX_COLLAB})</span>
      </span>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search people you follow" aria-label="Search collaborators" />
      <div className="collab-people">
        {people.map((u) => {
          const on = selected.includes(u.id)
          return (
            <button key={u.id} type="button" className={on ? 'collab-person on' : 'collab-person'} aria-pressed={on} onClick={() => toggle(u.id)} disabled={!on && selected.length >= MAX_COLLAB}>
              <Avatar user={u} size={34} />
              <span>{u.name}</span>
            </button>
          )
        })}
        {!people.length && <span className="muted small">Follow people to invite them.</span>}
      </div>
    </div>
  )
}

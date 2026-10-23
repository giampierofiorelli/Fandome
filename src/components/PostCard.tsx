import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { Post } from '../data/types'
import { useStore } from '../store/store'
import { albumById, artistById, concertById, formatDate, timeAgo } from '../lib/util'
import { spring, springSnappy } from '../lib/motion'
import { useComposer } from './Composer'
import { useToast } from './Toast'
import { AlbumCover, Avatar, LANG_NAMES, Modal, RichText, RollingCount, Stars, UserLink, useModalClose } from './ui'
import { IconGlobe, IconHeart, IconPin, IconQuote, IconReply, IconRepost, IconShare, IconTag, IconTrash } from './icons'

interface Props {
  post: Post
  repostedBy?: { userId: string; tags: string[] }
  embedded?: boolean
}

export function PostCard({ post, repostedBy, embedded }: Props) {
  const { state, dispatch, me, userById } = useStore()
  const compose = useComposer()
  const toast = useToast()
  const nav = useNavigate()
  const [translated, setTranslated] = useState(false)
  const [repostMenu, setRepostMenu] = useState(false)
  const [tagModal, setTagModal] = useState(false)

  const author = userById(post.authorId)
  const artist = artistById(post.artistId)
  const concert = concertById(post.concertId)
  const album = albumById(post.review?.albumId)
  const parent = post.replyTo ? state.posts.find((p) => p.id === post.replyTo) : undefined
  const quoted = post.quoteOf ? state.posts.find((p) => p.id === post.quoteOf) : undefined
  const replies = state.posts.filter((p) => p.replyTo === post.id).length
  const quotes = state.posts.filter((p) => p.quoteOf === post.id).length
  const liked = me ? post.likes.includes(me.id) : false
  const reposted = me ? post.reposts.some((r) => r.userId === me.id) : false
  const myVote = me && post.poll ? post.poll.options.findIndex((o) => o.votes.includes(me.id)) : -1
  const totalVotes = post.poll?.options.reduce((n, o) => n + o.votes.length, 0) ?? 0
  const canDetach = quoted && me && quoted.authorId === me.id && !post.quoteDetached

  const share = async () => {
    const url = `${location.origin}${location.pathname}#/p/${post.id}`
    try {
      await navigator.clipboard.writeText(url)
      toast('Link copied')
    } catch {
      prompt('Copy link', url)
    }
  }

  return (
    <article className={embedded ? 'post embedded' : 'post'} onClick={() => !embedded && nav(`/p/${post.id}`)}>
      {repostedBy && (
        <div className="repost-head">
          <IconRepost size={14} /> {userById(repostedBy.userId)?.name ?? 'Someone'} reposted
          {repostedBy.tags.length > 0 && <span className="repost-tags"> {repostedBy.tags.map((t) => `#${t}`).join(' ')}</span>}
        </div>
      )}
      <div className="post-main">
        <Avatar user={author} size={embedded ? 26 : 42} />
        <div className="post-body">
          <header className="post-head">
            <UserLink user={author} />
            <span className="muted">· {timeAgo(post.createdAt)}</span>
            {artist && (
              <Link to={`/a/${artist.id}`} className="chip artist-chip" style={{ ['--c' as string]: artist.color }} onClick={(e) => e.stopPropagation()}>
                {artist.name}
              </Link>
            )}
          </header>
          {parent && !embedded && (
            <p className="muted small">
              Replying to <Link to={`/p/${parent.id}`} onClick={(e) => e.stopPropagation()} className="tag">@{userById(parent.authorId)?.handle}</Link>
            </p>
          )}

          {album && (
            <div className="review">
              <AlbumCover album={album} size={54} />
              <div>
                <div className="review-title">
                  {album.title} <span className="muted">{album.year}</span>
                </div>
                <Stars value={post.review!.rating} size={15} />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={translated ? 'tr' : 'orig'}
              className="post-text"
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.18 }}
            >
              <RichText text={translated && post.translation ? post.translation : post.text} />
            </motion.p>
          </AnimatePresence>
          {post.lang !== 'en' && post.translation && (
            <button
              className="link-btn small inline-icon"
              onClick={(e) => {
                e.stopPropagation()
                setTranslated(!translated)
              }}
            >
              <IconGlobe size={14} />
              {translated ? `Translated from ${LANG_NAMES[post.lang] ?? post.lang} · Show original` : 'Translate post'}
            </button>
          )}

          {post.image && <div className="post-image" style={{ background: post.image }} role="img" aria-label="Fan photo" />}

          {post.poll && (
            <div className="poll" onClick={(e) => e.stopPropagation()}>
              {post.poll.options.map((o, i) => {
                const pct = totalVotes ? Math.round((o.votes.length / totalVotes) * 100) : 0
                const showResults = myVote >= 0
                return (
                  <button key={i} className={`poll-opt ${myVote === i ? 'mine' : ''}`} disabled={showResults || !me} onClick={() => dispatch({ type: 'vote', postId: post.id, option: i })}>
                    <motion.span className="poll-bar" initial={false} animate={{ scaleX: showResults ? pct / 100 : 0 }} transition={{ ...spring, delay: i * 0.04 }} />
                    <span className="poll-label">{o.label}</span>
                    {showResults && (
                      <motion.span className="poll-pct" initial={{ opacity: 0, x: 6 }} animate={{ opacity: 1, x: 0 }} transition={springSnappy}>
                        {pct}%
                      </motion.span>
                    )}
                  </button>
                )
              })}
              <span className="muted small">{totalVotes} votes</span>
            </div>
          )}

          {concert && (
            <Link to={`/c/${concert.id}`} className="concert-chip" onClick={(e) => e.stopPropagation()}>
              <IconPin size={14} /> {concert.city} · {formatDate(concert.date)} · {concert.tour}
            </Link>
          )}

          {quoted && !embedded && (
            <div onClick={(e) => e.stopPropagation()}>
              {post.quoteDetached ? (
                <div className="quote-removed muted small">Removed by author</div>
              ) : (
                <div className="quote-wrap" role="link" tabIndex={0} onClick={() => nav(`/p/${quoted.id}`)}>
                  <PostCard post={quoted} embedded />
                </div>
              )}
              {canDetach && (
                <button className="link-btn small danger" onClick={() => dispatch({ type: 'detachQuote', postId: post.id })}>
                  Detach my post from this quote
                </button>
              )}
            </div>
          )}

          {!embedded && (
            <footer className="actions" onClick={(e) => e.stopPropagation()}>
              <button className="act" aria-label="Reply" onClick={() => compose({ replyTo: post.id })}>
                <IconReply size={18} /> <RollingCount value={replies} />
              </button>
              <div className="act-wrap">
                <button className={`act ${reposted ? 'on-green' : ''}`} aria-label="Repost" aria-expanded={repostMenu} onClick={() => setRepostMenu(!repostMenu)}>
                  <motion.span animate={reposted ? { rotate: [0, 180] } : { rotate: 0 }} transition={spring} style={{ display: 'inline-flex' }}>
                    <IconRepost size={18} />
                  </motion.span>
                  <RollingCount value={post.reposts.length + quotes} />
                </button>
                <Popover open={repostMenu} onClose={() => setRepostMenu(false)}>
                  <button
                    onClick={() => {
                      dispatch(reposted ? { type: 'unrepost', postId: post.id } : { type: 'repost', postId: post.id, tags: [], at: Date.now() })
                      if (!reposted) toast('Reposted')
                      setRepostMenu(false)
                    }}
                  >
                    <IconRepost size={16} /> {reposted ? 'Undo repost' : 'Repost'}
                  </button>
                  <button
                    onClick={() => {
                      setTagModal(true)
                      setRepostMenu(false)
                    }}
                  >
                    <IconTag size={16} /> Repost with tags
                  </button>
                  <button
                    onClick={() => {
                      compose({ quoteOf: post.id })
                      setRepostMenu(false)
                    }}
                  >
                    <IconQuote size={16} /> Quote
                  </button>
                </Popover>
              </div>
              <LikeButton liked={liked} count={post.likes.length} onToggle={() => dispatch({ type: 'like', postId: post.id })} />
              <button className="act" aria-label="Share" onClick={share}>
                <IconShare size={18} />
              </button>
              {me && post.authorId === me.id && (
                <button className="act" aria-label="Delete" onClick={() => confirm('Delete this post?') && dispatch({ type: 'delete', postId: post.id })}>
                  <IconTrash size={17} />
                </button>
              )}
            </footer>
          )}
        </div>
      </div>
      {tagModal && <RepostTagsModal postId={post.id} onClose={() => setTagModal(false)} />}
    </article>
  )
}

// Heart that pops with a small particle burst — feedback fires on the same frame as the state change.
function LikeButton({ liked, count, onToggle }: { liked: boolean; count: number; onToggle: () => void }) {
  const [burst, setBurst] = useState(0)
  return (
    <button
      className={`act like ${liked ? 'on-pink' : ''}`}
      aria-label={liked ? 'Unlike' : 'Like'}
      aria-pressed={liked}
      onClick={() => {
        if (!liked) setBurst((b) => b + 1)
        onToggle()
      }}
    >
      <span className="heart-wrap">
        <motion.span
          key={liked ? 'on' : 'off'}
          initial={liked ? { scale: 0.4 } : false}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.55, visualDuration: 0.35 }}
          style={{ display: 'inline-flex' }}
        >
          <IconHeart size={18} filled={liked} />
        </motion.span>
        {burst > 0 && (
          <span className="burst" key={burst} aria-hidden>
            {Array.from({ length: 6 }, (_, i) => (
              <i key={i} style={{ ['--a' as string]: `${i * 60}deg` }} />
            ))}
          </span>
        )}
      </span>
      <RollingCount value={count} />
    </button>
  )
}

// Popover anchored to its trigger (transform-origin top-left), closes on outside press.
function Popover({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.parentElement?.contains(e.target as Node)) onClose()
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          className="menu"
          role="menu"
          style={{ transformOrigin: 'top left' }}
          initial={{ opacity: 0, scale: 0.92, y: -4, filter: 'blur(6px)' }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.96, y: -2, filter: 'blur(4px)' }}
          transition={springSnappy}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Tumblr-style reblog: add commentary tags without writing a full post.
function RepostTagsModal({ postId, onClose }: { postId: string; onClose: () => void }) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal title="Repost with tags" onClose={onClose}>
        <RepostTagsForm postId={postId} />
      </Modal>
    </div>
  )
}

function RepostTagsForm({ postId }: { postId: string }) {
  const { dispatch } = useStore()
  const toast = useToast()
  const close = useModalClose()
  const [value, setValue] = useState('')
  const tags = value
    .split(',')
    .map((t) => t.trim().replace(/^#/, ''))
    .filter(Boolean)
    .slice(0, 5)
  return (
    <>
      <p className="muted small">Tags are your commentary, Tumblr-style. Separate with commas. Don’t tag your hate.</p>
      <input autoFocus value={value} onChange={(e) => setValue(e.target.value)} placeholder="iconic, still not over it, rayoflight" />
      <div className="tag-preview">
        <AnimatePresence initial={false}>
          {tags.map((t) => (
            <motion.span key={t} className="chip" layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={springSnappy}>
              #{t}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
      <div className="row-end">
        <button
          className="btn primary"
          onClick={() => {
            dispatch({ type: 'repost', postId, tags, at: Date.now() })
            toast('Reposted with tags')
            close()
          }}
        >
          Repost
        </button>
      </div>
    </>
  )
}

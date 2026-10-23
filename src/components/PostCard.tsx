import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { Post } from '../data/types'
import { useStore } from '../store/store'
import { albumById, artistById, concertById, formatDate, timeAgo } from '../lib/util'
import { useComposer } from './Composer'
import { AlbumCover, Avatar, LANG_NAMES, Modal, RichText, Stars, UserLink } from './ui'

interface Props {
  post: Post
  repostedBy?: { userId: string; tags: string[] }
  embedded?: boolean
}

export function PostCard({ post, repostedBy, embedded }: Props) {
  const { state, dispatch, me, userById } = useStore()
  const compose = useComposer()
  const nav = useNavigate()
  const [translated, setTranslated] = useState(false)
  const [repostMenu, setRepostMenu] = useState(false)
  const [tagModal, setTagModal] = useState(false)
  const [copied, setCopied] = useState(false)

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
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      prompt('Copy link', url)
    }
  }

  return (
    <article className={embedded ? 'post embedded' : 'post'} onClick={() => !embedded && nav(`/p/${post.id}`)}>
      {repostedBy && (
        <div className="repost-head muted small">
          🔁 {userById(repostedBy.userId)?.name ?? 'Someone'} reposted
          {repostedBy.tags.length > 0 && <span className="repost-tags"> {repostedBy.tags.map((t) => `#${t}`).join(' ')}</span>}
        </div>
      )}
      <div className="post-main">
        <Avatar user={author} size={embedded ? 28 : 44} />
        <div className="post-body">
          <header className="post-head">
            <UserLink user={author} />
            <span className="muted">· {timeAgo(post.createdAt)}</span>
            {artist && (
              <Link to={`/a/${artist.id}`} className="chip artist-chip" style={{ borderColor: artist.color, color: artist.color }} onClick={(e) => e.stopPropagation()}>
                {artist.name}
              </Link>
            )}
          </header>
          {parent && !embedded && (
            <p className="muted small">
              Replying to <Link to={`/p/${parent.id}`} onClick={(e) => e.stopPropagation()}>@{userById(parent.authorId)?.handle}</Link>
            </p>
          )}

          {album && (
            <div className="review">
              <AlbumCover album={album} size={56} />
              <div>
                <div className="review-title">
                  {album.title} <span className="muted">{album.year}</span>
                </div>
                <Stars value={post.review!.rating} />
              </div>
            </div>
          )}

          <p className="post-text">
            <RichText text={translated && post.translation ? post.translation : post.text} />
          </p>
          {post.lang !== 'en' && post.translation && (
            <button
              className="link-btn small"
              onClick={(e) => {
                e.stopPropagation()
                setTranslated(!translated)
              }}
            >
              {translated ? `Translated from ${LANG_NAMES[post.lang] ?? post.lang} · Show original` : '🌐 Translate post'}
            </button>
          )}

          {post.image && <div className="post-image" style={{ background: post.image }} role="img" aria-label="Fan photo" />}

          {post.poll && (
            <div className="poll" onClick={(e) => e.stopPropagation()}>
              {post.poll.options.map((o, i) => {
                const pct = totalVotes ? Math.round((o.votes.length / totalVotes) * 100) : 0
                const showResults = myVote >= 0
                return (
                  <button
                    key={i}
                    className={`poll-opt ${myVote === i ? 'mine' : ''}`}
                    disabled={showResults || !me}
                    onClick={() => dispatch({ type: 'vote', postId: post.id, option: i })}
                  >
                    {showResults && <span className="poll-bar" style={{ width: `${pct}%` }} />}
                    <span className="poll-label">{o.label}</span>
                    {showResults && <span className="poll-pct">{pct}%</span>}
                  </button>
                )
              })}
              <span className="muted small">{totalVotes} votes</span>
            </div>
          )}

          {concert && (
            <Link to={`/c/${concert.id}`} className="concert-chip" onClick={(e) => e.stopPropagation()}>
              📍 {concert.city} · {formatDate(concert.date)} · {concert.tour}
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
                💬 <span>{replies || ''}</span>
              </button>
              <div className="act-wrap">
                <button className={`act ${reposted ? 'on-green' : ''}`} aria-label="Repost" onClick={() => setRepostMenu(!repostMenu)}>
                  🔁 <span>{post.reposts.length + quotes || ''}</span>
                </button>
                {repostMenu && (
                  <div className="menu" onMouseLeave={() => setRepostMenu(false)}>
                    <button
                      onClick={() => {
                        dispatch(reposted ? { type: 'unrepost', postId: post.id } : { type: 'repost', postId: post.id, tags: [], at: Date.now() })
                        setRepostMenu(false)
                      }}
                    >
                      {reposted ? 'Undo repost' : 'Repost'}
                    </button>
                    <button
                      onClick={() => {
                        setTagModal(true)
                        setRepostMenu(false)
                      }}
                    >
                      Repost with tags
                    </button>
                    <button
                      onClick={() => {
                        compose({ quoteOf: post.id })
                        setRepostMenu(false)
                      }}
                    >
                      Quote
                    </button>
                  </div>
                )}
              </div>
              <button className={`act ${liked ? 'on-pink' : ''}`} aria-label="Like" onClick={() => dispatch({ type: 'like', postId: post.id })}>
                {liked ? '♥' : '♡'} <span>{post.likes.length || ''}</span>
              </button>
              <button className="act" aria-label="Share" onClick={share}>
                {copied ? '✓' : '↗'}
              </button>
              {me && post.authorId === me.id && (
                <button className="act" aria-label="Delete" onClick={() => confirm('Delete this post?') && dispatch({ type: 'delete', postId: post.id })}>
                  🗑
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

// Tumblr-style reblog: add commentary tags without writing a full post.
function RepostTagsModal({ postId, onClose }: { postId: string; onClose: () => void }) {
  const { dispatch } = useStore()
  const [value, setValue] = useState('')
  const tags = value
    .split(',')
    .map((t) => t.trim().replace(/^#/, ''))
    .filter(Boolean)
    .slice(0, 5)
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal title="Repost with tags" onClose={onClose}>
        <p className="muted small">Tags are your commentary, Tumblr-style. Separate with commas. Don’t tag your hate.</p>
        <input autoFocus value={value} onChange={(e) => setValue(e.target.value)} placeholder="iconic, still not over it, rayoflight" />
        <div className="tag-preview">
          {tags.map((t) => (
            <span key={t} className="chip">
              #{t}
            </span>
          ))}
        </div>
        <div className="row-end">
          <button
            className="btn primary"
            onClick={() => {
              dispatch({ type: 'repost', postId, tags, at: Date.now() })
              onClose()
            }}
          >
            Repost
          </button>
        </div>
      </Modal>
    </div>
  )
}

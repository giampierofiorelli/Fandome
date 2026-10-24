import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { Embed, Post } from '../data/types'
import { EMBED_ICON, EMBED_LABEL, embedSrc, findUrls, isAudioEmbed, prettyUrl } from '../lib/media'
import { firstOneOffLoad, setConsent, useConsent } from '../lib/prefs'
import { loadYouTubeApi, type YTPlayer } from '../lib/youtube'
import { AudioPlayer } from './AudioPlayer'
import { useStore } from '../store/store'
import { canManagePage, isAdmin, MAX_PINS } from '../store/reducer'
import { ModBadge, RemovedBanner, ReportModal } from './Moderation'
import { albumById, concertById, formatDate, timeAgo } from '../lib/util'
import { spring, springSnappy } from '../lib/motion'
import { useComposer } from './Composer'
import { useToast } from './Toast'
import { AlbumCover, ArtistLine, Avatar, LANG_NAMES, LinkPreviewCard, Modal, RichText, RollingCount, ScoreBadge, UserLink, useModalClose } from './ui'
import { IconArrowUpRight, IconCheck, IconLink, IconPlay, IconGlobe, IconHeart, IconPin, IconQuote, IconReply, IconRepost, IconShare, IconChevronUp, IconFlag, IconMore, IconUsers, IconPlus, IconPushpin, IconSend, IconTag, IconTrash, IconVolume, IconBookmark } from './icons'
import { ShareSheet } from './ShareSheet'
import { postArtists } from '../lib/postArtists'
import { collaborators } from '../lib/collab'

interface Props {
  post: Post
  repostedBy?: { userId: string; tags: string[] }
  embedded?: boolean
  pinned?: boolean // shown in the profile's pinned section
}

export function PostCard({ post, repostedBy, embedded, pinned }: Props) {
  const { state, dispatch, me, userById } = useStore()
  const compose = useComposer()
  const toast = useToast()
  const nav = useNavigate()
  const [translated, setTranslated] = useState(false)
  const [repostMenu, setRepostMenu] = useState(false)
  const [tagModal, setTagModal] = useState(false)
  const [sendSheet, setSendSheet] = useState(false)
  const [moreMenu, setMoreMenu] = useState(false)
  const [pinFull, setPinFull] = useState(false)
  const [justFollowed, setJustFollowed] = useState(false)
  const [reporting, setReporting] = useState(false)

  const author = userById(post.authorId)
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
  const owner = Boolean(me && (post.authorId === me.id || canManagePage(state, post.authorId, me.id)))
  const collabUsers = collaborators(post).map((id) => userById(id)).filter((u): u is NonNullable<typeof u> => Boolean(u))
  const pendingCollab = (post.collab ?? []).filter((c) => c.status === 'pending').map((c) => userById(c.userId))
  const invitedMe = Boolean(me && post.collab?.some((c) => c.userId === me.id && c.status === 'pending'))
  const iAmCollab = Boolean(me && collaborators(post).includes(me.id))
  const pinnedIds = (author?.pinned ?? []).filter((id) => state.posts.some((p) => p.id === id))
  const isPinned = pinnedIds.includes(post.id)
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

  const saved = !!me?.saved?.includes(post.id)
  // Albums linked in the text; any whose title isn't in the text is shown as a chip below it.
  const postAlbums = (post.albumIds ?? []).map((id) => albumById(id)).filter((a): a is NonNullable<typeof a> => Boolean(a))
  // Attached albums always show as cards under the text (the title in the text is linked too).
  const looseAlbums = postAlbums
  const canSeeRemoved = me && (me.id === post.authorId || isAdmin(state) || (me.mod && postArtists(post).some((a) => me.mod!.artistIds.includes(a))))
  if (post.removed && !canSeeRemoved) {
    return <div className="post tombstone muted small">This post was removed for breaking the community rules.</div>
  }

  return (
    <article className={`${embedded ? 'post embedded' : 'post'}${post.removed ? ' is-removed' : ''}`} onClick={() => !embedded && nav(`/p/${post.id}`)}>
      {post.removed && !embedded && <RemovedBanner post={post} />}
      {pinned && (
        <div className="repost-head pinned-head">
          <IconPushpin size={14} /> Pinned
        </div>
      )}
      {repostedBy && (
        <div className="repost-head">
          <IconRepost size={14} /> {userById(repostedBy.userId)?.name ?? 'Someone'} reposted
          {repostedBy.tags.length > 0 && <span className="repost-tags"> {repostedBy.tags.map((t) => `#${t}`).join(' ')}</span>}
        </div>
      )}
      <div className="post-main">
        {author && collabUsers.length > 0 ? (
          <span className={embedded ? 'post-avatar collab-stack small' : 'post-avatar collab-stack'}>
            <Link to={`/u/${author.handle}`} onClick={(e) => e.stopPropagation()} aria-label={`${author.name}’s profile`}>
              <Avatar user={author} size={embedded ? 22 : 34} />
            </Link>
            <Link to={`/u/${collabUsers[0].handle}`} onClick={(e) => e.stopPropagation()} aria-label={`${collabUsers[0].name}’s profile`}>
              <Avatar user={collabUsers[0]} size={embedded ? 22 : 34} />
            </Link>
          </span>
        ) : author ? (
          <Link to={`/u/${author.handle}`} className="post-avatar" onClick={(e) => e.stopPropagation()} aria-label={`${author.name}’s profile`}>
            <Avatar user={author} size={embedded ? 26 : 42} />
          </Link>
        ) : (
          <Avatar user={author} size={embedded ? 26 : 42} />
        )}
        <div className="post-body">
          <header className="post-head">
            {collabUsers.length > 0 ? (
              <span className="collab-names" onClick={(e) => e.stopPropagation()}>
                <Link to={`/u/${author?.handle}`}>
                  <strong>{author?.name}</strong>
                </Link>{' '}
                <span className="muted">and</span>{' '}
                <Link to={`/u/${collabUsers[0].handle}`}>
                  <strong>{collabUsers[0].name}</strong>
                </Link>
                {collabUsers.length > 1 && <span className="muted"> +{collabUsers.length - 1}</span>}
              </span>
            ) : (
              <UserLink user={author} />
            )}
            {author?.kind === 'page' && <PageBadge verified={author.page?.verification === 'verified'} />}
            <ModBadge user={author} />
            <span className="muted">· {timeAgo(post.createdAt)}</span>
            {!embedded && me && author && author.id !== me.id && author.id !== 'u-mod' && (!me.following.includes(author.id) || justFollowed) && (
              <motion.button
                className={justFollowed ? 'follow-pill done' : 'follow-pill'}
                onClick={(e) => {
                  e.stopPropagation()
                  if (justFollowed) return
                  dispatch({ type: 'follow', userId: author.id })
                  setJustFollowed(true)
                  setTimeout(() => setJustFollowed(false), 1600)
                }}
                whileTap={{ scale: 0.9 }}
                transition={springSnappy}
                aria-label={justFollowed ? `Following ${author.name}` : `Follow ${author.name}`}
              >
                {justFollowed ? <IconCheck size={13} /> : <IconPlus size={13} />}
                {justFollowed ? 'Following' : 'Follow'}
              </motion.button>
            )}
          </header>
          <ArtistLine ids={postArtists(post)} compact={embedded} />
          {!embedded && me && invitedMe && (
            <div className="collab-invite" onClick={(e) => e.stopPropagation()}>
              <span className="grow small">
                <strong>{author?.name}</strong> invited you to collaborate: the post will also show on your profile.
              </span>
              <button className="pill-btn glass small" onClick={() => (dispatch({ type: 'respondCollab', postId: post.id, accept: false }), toast('Declined'))}>
                Decline
              </button>
              <button className="pill-btn ink small" onClick={() => (dispatch({ type: 'respondCollab', postId: post.id, accept: true }), toast('You’re now a collaborator'))}>
                Accept
              </button>
            </div>
          )}
          {!embedded && owner && pendingCollab.length > 0 && <p className="muted small collab-pending">Waiting for {pendingCollab.map((u) => u?.name).join(', ')} to accept the collab</p>}
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
                <ScoreBadge rating={post.review!.rating} />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={translated ? 'tr' : 'orig'}
              className="post-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <RichText text={translated && post.translation ? post.translation : post.text} albums={postAlbums} />
            </motion.p>
          </AnimatePresence>
          {looseAlbums.length > 0 && (
            <div className="album-chips">
              {looseAlbums.map((al) => (
                <Link key={al.id} to={`/album/${al.id}`} className="album-chip" onClick={(e) => e.stopPropagation()}>
                  <AlbumCover album={al} size={28} />
                  <span>{al.title}</span>
                </Link>
              ))}
            </div>
          )}
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
          {post.audio && <AudioPlayer src={post.audio.src} duration={post.audio.duration} peaks={post.audio.peaks} />}
          {post.photo && <img className="post-photo" src={post.photo} alt="Photo shared by a fan" loading="lazy" />}
          {post.youtube && !post.embed && <YouTubeEmbed id={post.youtube} />}
          {post.embed?.kind === 'youtube' && <YouTubeEmbed id={post.embed.id} />}
          {post.embed && post.embed.kind !== 'youtube' && <SocialEmbed embed={post.embed} />}
          {!post.embed && (post.link ? <LinkPreviewCard link={post.link} asLink /> : <LinkCard text={post.text} />)}

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
              <button className="act" aria-label="Send to your story or a friend" onClick={() => setSendSheet(true)}>
                <IconSend size={18} />
              </button>
              <SaveButton saved={saved} onToggle={() => {
                dispatch({ type: 'toggleSave', postId: post.id })
                if (!saved) toast('Saved · only you can see it', me ? { label: 'View', onClick: () => nav(`/u/${me.handle}?tab=saved`) } : undefined)
              }} />
              {me && (
                <div className="act-wrap">
                  <button className="act" aria-label="More" aria-expanded={moreMenu} onClick={() => setMoreMenu(!moreMenu)}>
                    <IconMore size={18} />
                  </button>
                  <Popover open={moreMenu} onClose={() => setMoreMenu(false)} align="right">
                    <button
                      onClick={() => {
                        setMoreMenu(false)
                        void share()
                      }}
                    >
                      <IconShare size={16} /> Copy link
                    </button>
                    {owner && !post.replyTo && !post.removed && (
                      <button
                        onClick={() => {
                          setMoreMenu(false)
                          if (isPinned) {
                            dispatch({ type: 'unpinPost', postId: post.id })
                            return toast('Unpinned from your profile')
                          }
                          if (pinnedIds.length >= MAX_PINS) return setPinFull(true)
                          dispatch({ type: 'pinPost', postId: post.id })
                          toast('Pinned to your profile')
                        }}
                      >
                        <IconPushpin size={16} /> {isPinned ? 'Unpin from profile' : 'Pin to profile'}
                      </button>
                    )}
                    {iAmCollab && (
                      <button
                        onClick={() => {
                          setMoreMenu(false)
                          dispatch({ type: 'leaveCollab', postId: post.id })
                          toast('Removed from your profile')
                        }}
                      >
                        <IconUsers size={16} /> Remove me from this collab
                      </button>
                    )}
                    {!owner && !iAmCollab && (
                      <button
                        onClick={() => {
                          setMoreMenu(false)
                          setReporting(true)
                        }}
                      >
                        <IconFlag size={16} /> Report post
                      </button>
                    )}
                    {owner && (
                    <button
                      className="danger"
                      onClick={() => {
                        setMoreMenu(false)
                        dispatch({ type: 'delete', postId: post.id })
                        toast('Post deleted', { label: 'Undo', onClick: () => dispatch({ type: 'restorePost', post }) })
                      }}
                    >
                      <IconTrash size={16} /> Delete
                    </button>
                    )}
                  </Popover>
                </div>
              )}
            </footer>
          )}
        </div>
      </div>
      {tagModal && <RepostTagsModal postId={post.id} onClose={() => setTagModal(false)} />}
      {reporting && (
        <div onClick={(e) => e.stopPropagation()}>
          <ReportModal target={{ kind: 'post', id: post.id }} what="post" onClose={() => setReporting(false)} />
        </div>
      )}
      {pinFull && (
        <div onClick={(e) => e.stopPropagation()}>
          <PinReplaceModal post={post} pinnedIds={pinnedIds} onClose={() => setPinFull(false)} />
        </div>
      )}
      {sendSheet && (
        <div onClick={(e) => e.stopPropagation()}>
          <ShareSheet post={post} onClose={() => setSendSheet(false)} />
        </div>
      )}
    </article>
  )
}

// Heart that pops with a small particle burst — feedback fires on the same frame as the state change.
// Bookmark: drops in with a little bounce when saved.
function SaveButton({ saved, onToggle }: { saved: boolean; onToggle: () => void }) {
  return (
    <button className={`act ${saved ? 'on-ink' : ''}`} aria-label={saved ? 'Remove from saved' : 'Save'} aria-pressed={saved} onClick={onToggle}>
      <motion.span key={saved ? 'on' : 'off'} initial={saved ? { y: -6, scale: 0.6 } : false} animate={{ y: 0, scale: 1 }} transition={{ type: 'spring', bounce: 0.55, visualDuration: 0.35 }} style={{ display: 'inline-flex' }}>
        <IconBookmark size={18} filled={saved} />
      </motion.span>
    </button>
  )
}

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
function Popover({ open, onClose, children, align = 'left' }: { open: boolean; onClose: () => void; children: React.ReactNode; align?: 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null)
  // Keep the open menu above the next posts (their wrappers are separate stacking contexts).
  useEffect(() => {
    if (!open) return
    const item = ref.current?.closest('.feed > div')
    item?.classList.add('menu-open')
    return () => item?.classList.remove('menu-open')
  }, [open])
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
          className={align === 'right' ? 'menu right' : 'menu'}
          role="menu"
          style={{ transformOrigin: align === 'right' ? 'bottom right' : 'top left' }}
          initial={{ opacity: 0, scale: 0.92, y: -4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -2 }}
          transition={springSnappy}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Profile already has 3 pins: pick which one the new post replaces.
function PinReplaceModal({ post, pinnedIds, onClose }: { post: Post; pinnedIds: string[]; onClose: () => void }) {
  const { state, dispatch } = useStore()
  const toast = useToast()
  return (
    <Modal title="You can pin up to 3 posts" onClose={onClose}>
      <PinReplaceList
        pinned={pinnedIds.map((id) => state.posts.find((p) => p.id === id)).filter((p): p is Post => Boolean(p))}
        onPick={(old) => {
          dispatch({ type: 'pinPost', postId: post.id, replace: old })
          toast('Pinned to your profile')
        }}
      />
    </Modal>
  )
}
function PinReplaceList({ pinned, onPick }: { pinned: Post[]; onPick: (id: string) => void }) {
  const close = useModalClose()
  return (
    <>
      <p className="muted small" style={{ marginTop: 0 }}>
        Choose the pinned post to replace with this one. Scroll to see all of them.
      </p>
      <div className="pin-list">
        {pinned.map((p, i) => (
          <div key={p.id} className="pin-row full">
            <span className="pin-count">Pinned {i + 1} of {pinned.length}</span>
            <div className="pin-post">
              <PostCard post={p} embedded />
            </div>
            <button
              className="pill-btn ink small"
              onClick={() => {
                onPick(p.id)
                close()
              }}
            >
              Replace
            </button>
          </div>
        ))}
      </div>
    </>
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

// One tap loads one player. The first time in a visit, say that the privacy choice hasn't changed.
function useOneOffLoad(setTapped: (v: boolean) => void) {
  const toast = useToast()
  const navigate = useNavigate()
  return () => {
    setTapped(true)
    if (firstOneOffLoad()) toast('Loaded just this one. Your privacy choice hasn’t changed.', { label: 'Settings', onClick: () => navigate('/settings') })
  }
}

// Under a closed player: what a tap does, and how to change the default.
function EmbedNote() {
  return (
    <div className="embed-note">
      Tap loads only this one ·{' '}
      <button className="link-btn" onClick={() => setConsent(true)}>
        Always show media
      </button>{' '}
      ·{' '}
      <Link to="/settings" className="link-btn">
        Settings
      </Link>
    </div>
  )
}

// YouTube: with the reader's consent the player shows right away; without it we
// show a neutral poster (not even the thumbnail, which comes from Google) until they tap.
function YouTubeEmbed({ id }: { id: string }) {
  const consent = useConsent()
  const auto = consent?.media === true
  const [tapped, setTapped] = useState(false)
  const tap = useOneOffLoad(setTapped)
  return (
    <>
      <div className="yt" onClick={(e) => e.stopPropagation()}>
        {tapped ? (
          <YouTubePlayer id={id} />
        ) : auto ? (
          <iframe src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&playsinline=1`} title="YouTube video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
        ) : (
          <button className="yt-poster blank" onClick={tap} aria-label="Play YouTube video">
            <span className="yt-play">
              <IconPlay size={22} />
            </span>
            <span className="embed-consent">YouTube video · playing it lets YouTube set cookies and see your IP</span>
          </button>
        )}
      </div>
      {!tapped && !auto && <EmbedNote />}
    </>
  )
}

// One tap = the video plays. Uses YouTube's player API so we can start it ourselves;
// where the browser blocks sound (iPhone), it starts muted with a "Tap for sound" button.
function YouTubePlayer({ id }: { id: string }) {
  const host = useRef<HTMLDivElement>(null)
  const player = useRef<YTPlayer | null>(null)
  const [needsSound, setNeedsSound] = useState(false)
  const [fallback, setFallback] = useState(false)
  useEffect(() => {
    let alive = true
    let timer: ReturnType<typeof setTimeout> | undefined
    loadYouTubeApi()
      .then((YT) => {
        if (!alive || !host.current) return
        const el = document.createElement('div')
        host.current.appendChild(el)
        player.current = new YT.Player(el, {
          host: 'https://www.youtube-nocookie.com',
          videoId: id,
          playerVars: { autoplay: 1, playsinline: 1, rel: 0 },
          events: {
            onReady: (e) => {
              e.target.playVideo()
              timer = setTimeout(() => {
                const st = e.target.getPlayerState()
                if (st !== 1 && st !== 3) {
                  e.target.mute()
                  e.target.playVideo()
                  setNeedsSound(true)
                }
              }, 1200)
            },
          },
        })
      })
      .catch(() => alive && setFallback(true))
    return () => {
      alive = false
      if (timer) clearTimeout(timer)
      player.current?.destroy()
      player.current = null
    }
  }, [id])
  if (fallback) return <iframe src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1&playsinline=1`} title="YouTube video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
  return (
    <>
      <div className="yt-host" ref={host} />
      {needsSound && (
        <button
          className="yt-sound"
          onClick={() => {
            player.current?.unMute()
            player.current?.playVideo()
            setNeedsSound(false)
          }}
        >
          <IconVolume size={16} /> Tap for sound
        </button>
      )}
    </>
  )
}

// Posts from X / Instagram / TikTok, shown with each platform's own embed.
// Click-to-load: nothing from the platform loads until the reader asks for it.
function SocialEmbed({ embed }: { embed: Embed }) {
  // Ready to play with the reader's consent; otherwise it loads only when they tap.
  const consent = useConsent()
  const [tapped, setTapped] = useState(false)
  const load = tapped || consent?.media === true
  const tap = useOneOffLoad(setTapped)
  const label = EMBED_LABEL[embed.kind]
  return (
    <div className={`social ${embed.kind}${isAudioEmbed(embed.kind) ? ' audio' : ''}${load ? ' loaded' : ''}`} onClick={(e) => e.stopPropagation()}>
      {load ? (
        <iframe src={embedSrc(embed)} title={`${label} post`} allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen loading="lazy" />
      ) : (
        <button className="social-poster" onClick={tap} aria-label={`Show ${label} post`}>
          <span className="embed-logo">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
              <path d={EMBED_ICON[embed.kind].path} fill="currentColor" />
            </svg>
          </span>
          <span className="grow">
            <strong>{label}</strong>
            <span className="muted small block">Can set cookies and see your IP</span>
          </span>
          <span className="pill-btn glass small">{isAudioEmbed(embed.kind) ? 'Play' : 'Show'}</span>
        </button>
      )}
      {!load && <EmbedNote />}
      <a className="social-open muted small" href={embed.url} target="_blank" rel="noopener noreferrer nofollow ugc">
        Open on {label} ↗
      </a>
    </div>
  )
}

// Plain web link: a tidy card for the first link in the post.
function LinkCard({ text }: { text: string }) {
  const url = findUrls(text)[0]
  if (!url) return null
  const { host, short } = prettyUrl(url)
  return (
    <a className="link-card" href={url} target="_blank" rel="noopener noreferrer nofollow ugc" onClick={(e) => e.stopPropagation()}>
      <span className="icon-bubble">
        <IconLink size={16} />
      </span>
      <span className="grow">
        <strong>{host}</strong>
        <span className="muted small block">{short}</span>
      </span>
      <IconArrowUpRight size={16} />
    </a>
  )
}

function PageBadge({ verified }: { verified: boolean }) {
  return (
    <span className={verified ? 'page-badge verified' : 'page-badge'} title={verified ? 'Website verified' : 'Website not verified yet'}>
      <IconGlobe size={11} /> Site{verified && <IconCheck size={11} />}
    </span>
  )
}

// Pinned posts at the top of a profile. Whoever runs the profile can move them up and down.
export function PinnedList({ posts, canEdit }: { posts: Post[]; canEdit: boolean }) {
  const { dispatch } = useStore()
  if (!posts.length) return null
  return (
    <div className="feed pinned-feed">
      {posts.map((p, i) => (
        <motion.div key={p.id} layout transition={spring} className="pinned-item">
          {canEdit && posts.length > 1 && (
            <div className="pin-order" aria-label="Change order">
              <span className="muted small">
                {i + 1} of {posts.length}
              </span>
              <button className="glass-circle small" aria-label="Move up" disabled={i === 0} onClick={() => dispatch({ type: 'movePin', postId: p.id, dir: -1 })}>
                <IconChevronUp size={16} />
              </button>
              <button className="glass-circle small" aria-label="Move down" disabled={i === posts.length - 1} onClick={() => dispatch({ type: 'movePin', postId: p.id, dir: 1 })}>
                <IconChevronUp size={16} style={{ transform: 'rotate(180deg)' }} />
              </button>
            </div>
          )}
          <PostCard post={p} pinned />
        </motion.div>
      ))}
    </div>
  )
}

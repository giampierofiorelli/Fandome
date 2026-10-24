import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { concerts } from '../data/seed'
import { useStore } from '../store/store'
import { FeedList } from '../components/FeedList'
import { PinnedList } from '../components/PostCard'
import type { Post } from '../data/types'
import { ShareCardButton } from '../components/ShareCard'
import { AlbumCover, Avatar, ScoreBadge, Tabs } from '../components/ui'
import { albumById, artistById, formatDate } from '../lib/util'
import { IconChevronUp, IconDisc, IconFlag, IconLink, IconPin, IconPlus, IconTicket, IconX } from '../components/icons'
import { BecomeModCard, ModBadge, ReportModal } from '../components/Moderation'
import PageProfile from './PageProfile'
import { canMessage, MAX_LINKS } from '../store/reducer'
import { cleanLink, linkService, prettyUrl } from '../lib/media'
import { Modal } from '../components/ui'
import { useToast } from '../components/Toast'
import { newId } from '../store/store'
import type { ProfileLink, User } from '../data/types'

type Tab = 'posts' | 'diary' | 'ratings' | 'likes'

// Letterboxd-style fan profile: your fan story is your identity.
export default function Profile() {
  const { handle } = useParams()
  const { state, dispatch, me } = useStore()
  const [tab, setTab] = useState<Tab>('posts')
  const [reporting, setReporting] = useState(false)
  const user = state.users.find((u) => u.handle === handle)
  if (!user || !me) return <Navigate to="/" replace />
  if (user.kind === 'page') return <PageProfile user={user} />

  const isMe = user.id === me.id
  const follows = me.following.includes(user.id)
  const followers = state.users.filter((u) => u.following.includes(user.id)).length
  const posts = state.posts.filter((p) => p.authorId === user.id).sort((a, b) => b.createdAt - a.createdAt)
  const reviews = posts.filter((p) => p.review)
  const pinnedPosts = (user.pinned ?? []).map((id) => posts.find((p) => p.id === id)).filter((p): p is Post => Boolean(p))
  const shows = concerts.filter((c) => user.attended.includes(c.id)).sort((a, b) => a.date.localeCompare(b.date))
  const rated = Object.entries(user.ratings).sort((a, b) => b[1] - a[1])
  const liked = state.posts.filter((p) => p.likes.includes(user.id))
  const firstArtist = Object.entries(user.fanSince).sort((a, b) => a[1] - b[1])[0]

  // Diary: concerts and album reviews on one timeline.
  const diary = [
    ...shows.map((c) => ({ key: c.id, at: new Date(c.date).getTime(), kind: 'show' as const, concert: c })),
    ...reviews.map((p) => ({ key: p.id, at: p.createdAt, kind: 'review' as const, post: p })),
    ...(user.tours ?? []).map((key) => {
      const [artistId, tour] = key.split('::')
      const first = concerts.filter((c) => c.artistId === artistId && c.tour === tour).sort((a, b) => a.date.localeCompare(b.date))[0]
      return { key, at: first ? new Date(first.date).getTime() : 0, kind: 'tour' as const, artistId, tour, year: first?.date.slice(0, 4) ?? '' }
    }),
  ].sort((a, b) => b.at - a.at)
  const showCount = user.attended.length + (user.tours?.length ?? 0)

  return (
    <>
      <header className="prof">
        <div className="prof-aura" style={{ ['--tint' as string]: user.color }} />
        <div className="prof-top">
          <Avatar user={user} size={96} />
          <h1 className="prof-name">{user.name}</h1>
          <div className="muted">
            @{user.handle}
            {user.location && <> · <IconPin size={13} /> {user.location}</>}
          </div>
          <ModBadge user={user} label />
          {user.bio && <p className="prof-bio">{user.bio}</p>}
          <ProfileLinks user={user} isMe={isMe} />
          <div className="hero-actions center">
            {isMe ? (
              <Link to="/settings" className="pill-btn glass">
                Settings
              </Link>
            ) : (
              <>
                <button className={follows ? 'pill-btn glass' : 'pill-btn ink'} onClick={() => dispatch({ type: 'follow', userId: user.id })}>
                  {follows ? 'Following' : 'Follow'}
                </button>
                {canMessage(state, me.id, user.id) && (
                  <Link to={`/messages/${user.handle}`} className="pill-btn glass">
                    Message
                  </Link>
                )}
                {user.id !== 'u-mod' && (
                  <button className="glass-circle" aria-label={`Report ${user.name}`} onClick={() => setReporting(true)}>
                    <IconFlag size={16} />
                  </button>
                )}
              </>
            )}
            {isMe && firstArtist && (
              <ShareCardButton
                label="Share passport"
                color={user.color}
                title={`${user.name}’s Fan Passport`}
                lines={[
                  ...Object.entries(user.fanSince).slice(0, 3).map(([id, y]) => `${artistById(id)?.name} fan since ${y}`),
                  `${showCount} shows · ${rated.length} albums rated`,
                  `@${user.handle}`,
                ]}
              />
            )}
          </div>
        </div>

        <div className="stat-row">
          <div>
            <div className="bignum">{showCount}</div>
            <div className="hero-label">shows</div>
          </div>
          <div>
            <div className="bignum">{rated.length}</div>
            <div className="hero-label">ratings</div>
          </div>
          <div>
            <div className="bignum">{followers}</div>
            <div className="hero-label">followers</div>
          </div>
          <div>
            <div className="bignum">{user.following.length}</div>
            <div className="hero-label">following</div>
          </div>
        </div>

        <div className="passport">
          <div className="row-between">
            <span className="dotmatrix">FAN PASSPORT</span>
            <span className="muted small">No. {user.id.slice(-4).toUpperCase()}</span>
          </div>
          <div className="passport-rows">
            {Object.entries(user.fanSince).map(([id, year]) => {
              const a = artistById(id)
              return a ? (
                <Link key={id} to={`/a/${id}`} className="passport-row">
                  <span className="dot" style={{ background: a.color }} />
                  <span className="grow">{a.name}</span>
                  <span className="muted">since</span> <b>{year}</b>
                </Link>
              ) : null
            })}
          </div>
          {user.top4.length > 0 && (
            <div className="top4-row">
              {user.top4.map((id) => (
                <AlbumCover key={id} album={albumById(id)} size={68} />
              ))}
            </div>
          )}
        </div>
      </header>
      {isMe && <BecomeModCard />}
      {reporting && <ReportModal target={{ kind: 'user', id: user.id }} what={user.name} onClose={() => setReporting(false)} />}
      <div className="section-head center">
        <Tabs<Tab>
          tabs={[
            { id: 'posts', label: 'Posts' },
            { id: 'diary', label: 'Diary' },
            { id: 'ratings', label: 'Ratings' },
            { id: 'likes', label: 'Likes' },
          ]}
          value={tab}
          onChange={setTab}
        />
      </div>
      {tab === 'posts' && (
        <>
          <PinnedList posts={pinnedPosts} canEdit={isMe} />
          {(!pinnedPosts.length || posts.length > pinnedPosts.length) && <FeedList items={posts.filter((p) => !pinnedPosts.includes(p)).map((p) => ({ key: p.id, post: p, at: p.createdAt }))} empty="No posts yet." />}
        </>
      )}
      {tab === 'likes' && <FeedList items={liked.map((p) => ({ key: p.id, post: p, at: p.createdAt }))} empty="No likes yet." />}
      {tab === 'diary' && (
        <div className="glass-card list">
          {!diary.length && <p className="empty">{isMe ? 'Mark shows with “I was there” and review albums to build your diary.' : 'Empty diary.'}</p>}
          {diary.map((d) =>
            d.kind === 'tour' ? (
              <Link key={d.key} to={`/a/${d.artistId}`} className="row-item">
                <span className="diary-date">{d.year}</span>
                <span>
                  <IconTicket size={16} /> <strong>{artistById(d.artistId)?.name}</strong> · {d.tour}
                </span>
              </Link>
            ) : d.kind === 'show' ? (
              <Link key={d.key} to={`/c/${d.concert.id}`} className="row-item">
                <span className="diary-date">{formatDate(d.concert.date)}</span>
                <span><IconTicket size={16} /> <strong>{artistById(d.concert.artistId)?.name}</strong> · {d.concert.city} · <span className="muted">{d.concert.venue}</span></span>
              </Link>
            ) : (
              <Link key={d.key} to={`/p/${d.post.id}`} className="row-item">
                <span className="diary-date">{new Date(d.post.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                <span>
                  <IconDisc size={16} /> <strong>{albumById(d.post.review!.albumId)?.title}</strong> <ScoreBadge rating={d.post.review!.rating} size="sm" />
                </span>
              </Link>
            ),
          )}
        </div>
      )}
      {tab === 'ratings' && (
        <div className="glass-card list">
          {!rated.length && <p className="empty">No ratings yet.</p>}
          {rated.map(([id, r]) => {
            const al = albumById(id)
            return (
              <div key={id} className="row-item">
                <AlbumCover album={al} size={48} />
                <div className="grow">
                  <strong>{al?.title}</strong> <span className="muted">{artistById(al?.artistId)?.name} · {al?.year}</span>
                </div>
                <ScoreBadge rating={r} />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

// Link-in-bio: the person's other places (socials, music, shop…), with anonymous click counts.
function ProfileLinks({ user, isMe }: { user: User; isMe: boolean }) {
  const { dispatch } = useStore()
  const [editing, setEditing] = useState(false)
  const links = user.links ?? []
  if (!links.length && !isMe) return null
  return (
    <div className="prof-links">
      {links.map((l) => {
        const s = linkService(l.url)
        return (
          <a
            key={l.id}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer nofollow ugc"
            className="prof-link"
            style={{ ['--c' as string]: s.color }}
            onClick={() => dispatch({ type: 'clickLink', userId: user.id, id: l.id })}
          >
            <span className="link-disc">{s.key === 'web' ? <IconLink size={13} /> : s.label[0]}</span>
            <span className="prof-link-label">{l.label || s.label}</span>
            {isMe && <span className="link-clicks">{l.clicks}</span>}
          </a>
        )
      })}
      {isMe && (
        <button className="prof-link add" onClick={() => setEditing(true)}>
          <span className="link-disc">
            <IconPlus size={13} />
          </span>
          {links.length ? 'Edit links' : 'Add your links'}
        </button>
      )}
      {editing && (
        <Modal title="Your links" onClose={() => setEditing(false)}>
          <LinksEditor links={links} />
        </Modal>
      )}
    </div>
  )
}

function LinksEditor({ links }: { links: ProfileLink[] }) {
  const { dispatch } = useStore()
  const toast = useToast()
  const [url, setUrl] = useState('')
  const [label, setLabel] = useState('')
  const clean = cleanLink(url)
  const service = clean ? linkService(clean) : null
  const total = links.reduce((n, l) => n + l.clicks, 0)
  const add = () => {
    if (!clean) return
    if (links.some((l) => l.url === clean)) return toast('That link is already there')
    dispatch({ type: 'addLink', id: newId(), url: clean, label })
    toast(`${label.trim() || linkService(clean).label} added to your profile`)
    setUrl('')
    setLabel('')
  }
  return (
    <div className="links-editor">
      {links.length > 0 && (
        <p className="muted small" style={{ margin: 0 }}>
          {total} {total === 1 ? 'click' : 'clicks'} in total
        </p>
      )}
      {links.map((l, i) => {
        const s = linkService(l.url)
        return (
          <div key={l.id} className="link-row" style={{ ['--c' as string]: s.color }}>
            <span className="link-disc">{s.key === 'web' ? <IconLink size={13} /> : s.label[0]}</span>
            <span className="grow link-row-main">
              <input value={l.label ?? ''} placeholder={s.label} onChange={(e) => dispatch({ type: 'editLink', id: l.id, label: e.target.value })} aria-label="Label" maxLength={40} />
              <span className="muted small link-host">{prettyUrl(l.url).short}</span>
            </span>
            <span className="link-stat">
              <strong>{l.clicks}</strong>
              <span className="muted small">clicks</span>
            </span>
            <span className="link-tools">
              <button className="icon-btn" aria-label="Move up" disabled={i === 0} onClick={() => dispatch({ type: 'moveLink', id: l.id, dir: -1 })}>
                <IconChevronUp size={16} />
              </button>
              <button className="icon-btn" aria-label="Remove link" onClick={() => dispatch({ type: 'removeLink', id: l.id })}>
                <IconX size={16} />
              </button>
            </span>
          </div>
        )
      })}
      {links.length < MAX_LINKS ? (
        <div className="link-add">
          <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Paste a link: instagram.com/you, a playlist, your site…" inputMode="url" aria-label="Link" onKeyDown={(e) => e.key === 'Enter' && add()} />
          {service && (
            <div className="link-add-row" style={{ ['--c' as string]: service.color }}>
              <span className="link-disc">{service.key === 'web' ? <IconLink size={13} /> : service.label[0]}</span>
              <input value={label} onChange={(e) => setLabel(e.target.value)} placeholder={`Label (default: ${service.label})`} maxLength={40} aria-label="Label" />
              <button className="pill-btn ink small" onClick={add}>
                Add
              </button>
            </div>
          )}
          {url && !clean && <span className="muted small">That doesn’t look like a web link.</span>}
        </div>
      ) : (
        <p className="muted small">You can add up to {MAX_LINKS} links.</p>
      )}
      <p className="report-law small">
        Clicks are counted anonymously: we store only a number for each link, never who clicked, and visitors get no cookies. Only you see the numbers.
      </p>
    </div>
  )
}

import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { concerts } from '../data/seed'
import { useStore } from '../store/store'
import { FeedList } from '../components/FeedList'
import { ShareCardButton } from '../components/ShareCard'
import { AlbumCover, Avatar, Stars, Tabs } from '../components/ui'
import { albumById, artistById, formatDate } from '../lib/util'
import { IconDisc, IconPin, IconTicket } from '../components/icons'

type Tab = 'posts' | 'diary' | 'ratings' | 'likes'

// Letterboxd-style fan profile: your fan story is your identity.
export default function Profile() {
  const { handle } = useParams()
  const { state, dispatch, me } = useStore()
  const [tab, setTab] = useState<Tab>('posts')
  const user = state.users.find((u) => u.handle === handle)
  if (!user || !me) return <Navigate to="/" replace />

  const isMe = user.id === me.id
  const follows = me.following.includes(user.id)
  const followers = state.users.filter((u) => u.following.includes(user.id)).length
  const posts = state.posts.filter((p) => p.authorId === user.id).sort((a, b) => b.createdAt - a.createdAt)
  const reviews = posts.filter((p) => p.review)
  const shows = concerts.filter((c) => user.attended.includes(c.id)).sort((a, b) => a.date.localeCompare(b.date))
  const rated = Object.entries(user.ratings).sort((a, b) => b[1] - a[1])
  const liked = state.posts.filter((p) => p.likes.includes(user.id))
  const firstArtist = Object.entries(user.fanSince).sort((a, b) => a[1] - b[1])[0]

  // Diary: concerts and album reviews on one timeline.
  const diary = [
    ...shows.map((c) => ({ key: c.id, at: new Date(c.date).getTime(), kind: 'show' as const, concert: c })),
    ...reviews.map((p) => ({ key: p.id, at: p.createdAt, kind: 'review' as const, post: p })),
  ].sort((a, b) => b.at - a.at)

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
          {user.bio && <p className="prof-bio">{user.bio}</p>}
          <div className="hero-actions center">
            {isMe ? (
              <Link to="/settings" className="pill-btn glass">
                Settings
              </Link>
            ) : (
              <button className={follows ? 'pill-btn glass' : 'pill-btn ink'} onClick={() => dispatch({ type: 'follow', userId: user.id })}>
                {follows ? 'Following' : 'Follow'}
              </button>
            )}
            {isMe && firstArtist && (
              <ShareCardButton
                label="Share passport"
                color={user.color}
                title={`${user.name}’s Fan Passport`}
                lines={[
                  ...Object.entries(user.fanSince).slice(0, 3).map(([id, y]) => `${artistById(id)?.name} fan since ${y}`),
                  `${user.attended.length} shows · ${rated.length} albums rated`,
                  `@${user.handle}`,
                ]}
              />
            )}
          </div>
        </div>

        <div className="stat-row">
          <div>
            <div className="bignum">{user.attended.length}</div>
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
      {tab === 'posts' && <FeedList items={posts.map((p) => ({ key: p.id, post: p, at: p.createdAt }))} empty="No posts yet." />}
      {tab === 'likes' && <FeedList items={liked.map((p) => ({ key: p.id, post: p, at: p.createdAt }))} empty="No likes yet." />}
      {tab === 'diary' && (
        <div className="glass-card list">
          {!diary.length && <p className="empty">{isMe ? 'Mark shows with “I was there” and review albums to build your diary.' : 'Empty diary.'}</p>}
          {diary.map((d) =>
            d.kind === 'show' ? (
              <Link key={d.key} to={`/c/${d.concert.id}`} className="row-item">
                <span className="diary-date">{formatDate(d.concert.date)}</span>
                <span><IconTicket size={16} /> <strong>{artistById(d.concert.artistId)?.name}</strong> · {d.concert.city} · <span className="muted">{d.concert.venue}</span></span>
              </Link>
            ) : (
              <Link key={d.key} to={`/p/${d.post.id}`} className="row-item">
                <span className="diary-date">{new Date(d.post.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                <span>
                  <IconDisc size={16} /> <strong>{albumById(d.post.review!.albumId)?.title}</strong> <Stars value={d.post.review!.rating} size={14} />
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
                <Stars value={r} size={16} />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

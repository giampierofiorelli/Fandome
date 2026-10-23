import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { concerts } from '../data/seed'
import { useStore } from '../store/store'
import { FeedList } from '../components/FeedList'
import { ShareCardButton } from '../components/ShareCard'
import { AlbumCover, Avatar, Stars, Tabs } from '../components/ui'
import { albumById, artistById, formatDate } from '../lib/util'

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
      <header className="profile-head">
        <div className="profile-banner" style={{ background: `linear-gradient(120deg, ${user.color}, #191926)` }} />
        <div className="profile-top">
          <Avatar user={user} size={88} />
          {isMe ? (
            <Link to="/settings" className="btn small">
              Settings
            </Link>
          ) : (
            <button className={follows ? 'btn' : 'btn primary'} onClick={() => dispatch({ type: 'follow', userId: user.id })}>
              {follows ? 'Following' : 'Follow'}
            </button>
          )}
        </div>
        <h2>{user.name}</h2>
        <div className="muted">@{user.handle}{user.location && ` · 📍 ${user.location}`}</div>
        {user.bio && <p>{user.bio}</p>}
        <div className="stats">
          <span><strong>{user.following.length}</strong> following</span>
          <span><strong>{followers}</strong> followers</span>
          <span><strong>{user.attended.length}</strong> shows</span>
          <span><strong>{rated.length}</strong> albums rated</span>
        </div>
        <div className="fan-since">
          {Object.entries(user.fanSince).map(([id, year]) => {
            const a = artistById(id)
            return a ? (
              <Link key={id} to={`/a/${id}`} className="chip" style={{ borderColor: a.color }}>
                <span className="dot" style={{ background: a.color }} /> {a.name} fan since {year}
              </Link>
            ) : null
          })}
        </div>
        {user.top4.length > 0 && (
          <div className="top4">
            <div className="muted small">FAVOURITE ALBUMS</div>
            <div className="top4-row">
              {user.top4.map((id) => (
                <AlbumCover key={id} album={albumById(id)} size={76} />
              ))}
            </div>
          </div>
        )}
        {isMe && firstArtist && (
          <ShareCardButton
            label="Share my Fan Passport"
            color={user.color}
            title={`${user.name}’s Fan Passport`}
            lines={[
              ...Object.entries(user.fanSince).slice(0, 3).map(([id, y]) => `${artistById(id)?.name} fan since ${y}`),
              `${user.attended.length} shows · ${rated.length} albums rated`,
              `@${user.handle}`,
            ]}
          />
        )}
      </header>
      <div className="sticky">
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
        <div className="diary">
          {!diary.length && <p className="empty">{isMe ? 'Mark shows with “I was there” and review albums to build your diary.' : 'Empty diary.'}</p>}
          {diary.map((d) =>
            d.kind === 'show' ? (
              <Link key={d.key} to={`/c/${d.concert.id}`} className="diary-row">
                <span className="diary-date">{formatDate(d.concert.date)}</span>
                <span>🎟️ <strong>{artistById(d.concert.artistId)?.name}</strong> · {d.concert.city} · <span className="muted">{d.concert.venue}</span></span>
              </Link>
            ) : (
              <Link key={d.key} to={`/p/${d.post.id}`} className="diary-row">
                <span className="diary-date">{new Date(d.post.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                <span>
                  💿 <strong>{albumById(d.post.review!.albumId)?.title}</strong> <Stars value={d.post.review!.rating} size={14} />
                </span>
              </Link>
            ),
          )}
        </div>
      )}
      {tab === 'ratings' && (
        <div className="album-list">
          {!rated.length && <p className="empty">No ratings yet.</p>}
          {rated.map(([id, r]) => {
            const al = albumById(id)
            return (
              <div key={id} className="album-row">
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

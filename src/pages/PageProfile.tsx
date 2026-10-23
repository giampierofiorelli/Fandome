import { Link } from 'react-router-dom'
import type { Post, User } from '../data/types'
import { useStore } from '../store/store'
import { useComposer } from '../components/Composer'
import { FeedList } from '../components/FeedList'
import { PostCard } from '../components/PostCard'
import { Avatar } from '../components/ui'
import { IconCheck, IconGlobe, IconPen, IconSettings } from '../components/icons'
import { prettyUrl } from '../lib/media'

// Public profile of a Page (website, fan club, podcast…). Run by personal
// accounts; their private profiles stay separate and are only listed by name.
export default function PageProfile({ user }: { user: User }) {
  const { state, dispatch, me, userById } = useStore()
  const compose = useComposer()
  if (!me || !user.page) return null
  const page = user.page
  const isMember = page.members.some((m) => m.userId === me.id)
  const follows = me.following.includes(user.id)
  const followers = state.users.filter((u) => u.following.includes(user.id)).length
  const posts = state.posts.filter((p) => p.authorId === user.id).sort((a, b) => b.createdAt - a.createdAt)
  const pinnedPosts = (user.pinned ?? []).map((id) => posts.find((p) => p.id === id)).filter((p): p is Post => Boolean(p))
  const verified = page.verification === 'verified'

  return (
    <>
      <header className="prof">
        <div className="prof-aura" style={{ ['--tint' as string]: user.color }} />
        <div className="prof-top">
          <Avatar user={user} size={96} />
          <div className="eyebrow">{page.category}</div>
          <h1 className="prof-name">{user.name}</h1>
          <div className="muted">@{user.handle}</div>
          <a className="site-link" href={page.website} target="_blank" rel="noopener noreferrer">
            <IconGlobe size={14} /> {prettyUrl(page.website).host}
          </a>
          <span className={verified ? 'verify-chip ok' : 'verify-chip'}>
            {verified ? (
              <>
                <IconCheck size={13} /> Website verified
              </>
            ) : page.verification === 'pending' ? (
              'Verification pending'
            ) : (
              'Website not verified'
            )}
          </span>
          {user.bio && <p className="prof-bio">{user.bio}</p>}
          <div className="hero-actions center">
            {isMember ? (
              <>
                <button className="pill-btn ink" onClick={() => compose({ as: user.id })}>
                  <IconPen size={15} /> Post as page
                </button>
                <Link to={`/pages/${user.handle}/manage`} className="pill-btn glass">
                  <IconSettings size={15} /> Manage
                </Link>
              </>
            ) : (
              <button className={follows ? 'pill-btn glass' : 'pill-btn ink'} onClick={() => dispatch({ type: 'follow', userId: user.id })}>
                {follows ? 'Following' : 'Follow'}
              </button>
            )}
          </div>
        </div>

        <div className="stat-row">
          <div>
            <div className="bignum">{posts.length}</div>
            <div className="hero-label">posts</div>
          </div>
          <div>
            <div className="bignum">{followers}</div>
            <div className="hero-label">followers</div>
          </div>
          <div>
            <div className="bignum">{page.members.length}</div>
            <div className="hero-label">team</div>
          </div>
        </div>

        <div className="glass-card">
          <div className="tile-kicker">Run by</div>
          <div className="team">
            {page.members.map((m) => {
              const u = userById(m.userId)
              return u ? (
                <Link key={m.userId} to={`/u/${u.handle}`} className="team-chip">
                  <Avatar user={u} size={24} /> {u.name}
                  {m.role === 'owner' && <span className="muted small">· owner</span>}
                </Link>
              ) : null
            })}
          </div>
          <p className="muted small">Pages are run by people with their own Fandome accounts. Independent: not the artist’s official account.</p>
        </div>
      </header>

      <div className="section-head">
        <h2>Posts</h2>
      </div>
      {pinnedPosts.length > 0 && (
        <div className="feed pinned-feed">
          {pinnedPosts.map((p) => (
            <PostCard key={p.id} post={p} pinned />
          ))}
        </div>
      )}
      {(!pinnedPosts.length || posts.length > pinnedPosts.length) && <FeedList items={posts.filter((p) => !pinnedPosts.includes(p)).map((p) => ({ key: p.id, post: p, at: p.createdAt }))} empty="No posts yet." />}
    </>
  )
}

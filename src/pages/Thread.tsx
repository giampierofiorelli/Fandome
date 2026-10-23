import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { IconArrowLeft } from '../components/icons'
import type { Post } from '../data/types'
import { useStore } from '../store/store'
import { useComposer } from '../components/Composer'
import { PostCard } from '../components/PostCard'

// Twitter-style thread: ancestors above, the post, then replies.
export default function Thread() {
  const { postId } = useParams()
  const { state } = useStore()
  const compose = useComposer()
  const nav = useNavigate()
  const post = state.posts.find((p) => p.id === postId)
  if (!post) return <Navigate to="/" replace />

  const ancestors: Post[] = []
  let cur = post.replyTo ? state.posts.find((p) => p.id === post.replyTo) : undefined
  while (cur && ancestors.length < 20) {
    ancestors.unshift(cur)
    const parentId: string | undefined = cur.replyTo
    cur = parentId ? state.posts.find((p) => p.id === parentId) : undefined
  }
  const replies = state.posts.filter((p) => p.replyTo === post.id).sort((a, b) => a.createdAt - b.createdAt)
  const quotes = state.posts.filter((p) => p.quoteOf === post.id)

  return (
    <>
      <header className="page-head row-between">
        <button className="glass-circle" onClick={() => nav(-1)} aria-label="Back">
          <IconArrowLeft size={18} />
        </button>
        <h2>Post</h2>
        <span style={{ width: 44 }} />
      </header>
      {ancestors.map((p) => (
        <div key={p.id} className="thread-ancestor">
          <PostCard post={p} />
        </div>
      ))}
      <div className="thread-focus">
        <PostCard post={post} />
      </div>
      <button className="compose-inline" onClick={() => compose({ replyTo: post.id })}>
        <span className="muted">Post your reply…</span>
      </button>
      <div className="feed">
        {replies.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
      {quotes.length > 0 && (
        <>
          <h3 className="section-title">Quotes</h3>
          <div className="feed">
            {quotes.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </>
      )}
    </>
  )
}

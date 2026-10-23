import { Navigate, useParams } from 'react-router-dom'
import type { Post } from '../data/types'
import { useStore } from '../store/store'
import { useComposer } from '../components/Composer'
import { PostCard } from '../components/PostCard'

// Twitter-style thread: ancestors above, the post, then replies.
export default function Thread() {
  const { postId } = useParams()
  const { state } = useStore()
  const compose = useComposer()
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
      <header className="page-head sticky">
        <h2>Post</h2>
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
      {replies.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
      {quotes.length > 0 && (
        <>
          <h3 className="section-title">Quotes</h3>
          {quotes.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </>
      )}
    </>
  )
}

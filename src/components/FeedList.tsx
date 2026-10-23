import type { FeedItem } from '../lib/feed'
import { PostCard } from './PostCard'

// Finite feed: once you pass the posts that are new since your last visit,
// a "You're all caught up" marker tells you that you can stop scrolling.
export function FeedList({ items, caughtUpAfter, empty }: { items: FeedItem[]; caughtUpAfter?: number; empty?: string }) {
  if (!items.length) return <p className="empty">{empty ?? 'Nothing here yet.'}</p>
  const newCount = caughtUpAfter === undefined ? -1 : items.filter((i) => i.at > caughtUpAfter).length
  return (
    <div className="feed">
      {newCount === 0 && <CaughtUp first />}
      {items.map((item, i) => (
        <div key={item.key}>
          <PostCard post={item.post} repostedBy={item.repostedBy} />
          {newCount > 0 && i === newCount - 1 && <CaughtUp />}
        </div>
      ))}
    </div>
  )
}

function CaughtUp({ first }: { first?: boolean }) {
  return (
    <div className="caught-up" role="status">
      <div className="check">✓</div>
      <strong>You’re all caught up</strong>
      <span className="muted small">{first ? 'No new posts since your last visit.' : 'You’ve seen everything new since your last visit.'} Older posts below.</span>
    </div>
  )
}

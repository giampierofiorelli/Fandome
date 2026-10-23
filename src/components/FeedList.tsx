import { useStore } from '../store/store'
import { AnimatePresence, motion } from 'motion/react'
import type { FeedItem } from '../lib/feed'
import { spring } from '../lib/motion'
import { PostCard } from './PostCard'

// Finite feed: once you pass the posts that are new since your last visit,
// a "You're all caught up" marker tells you that you can stop scrolling.
// New posts slide in; existing ones glide (layout spring); deleted ones fade out.
export function FeedList({ items: all, caughtUpAfter, empty }: { items: FeedItem[]; caughtUpAfter?: number; empty?: string }) {
  const { me } = useStore()
  // Removed posts disappear from feeds; only their author still sees them (with the reason).
  const items = all.filter((i) => !i.post.removed || i.post.authorId === me?.id)
  if (!items.length) return <p className="empty">{empty ?? 'Nothing here yet.'}</p>
  const newCount = caughtUpAfter === undefined ? -1 : items.filter((i) => i.at > caughtUpAfter).length
  return (
    <div className="feed">
      {newCount === 0 && <CaughtUp first />}
      <AnimatePresence initial={false} mode="popLayout">
        {items.map((item, i) => (
          <motion.div
            key={item.key}
            layout="position"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={spring}
          >
            <PostCard post={item.post} repostedBy={item.repostedBy} />
            {newCount > 0 && i === newCount - 1 && <CaughtUp />}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

function CaughtUp({ first }: { first?: boolean }) {
  return (
    <motion.div className="caught-up" role="status" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={spring}>
      <motion.svg width="40" height="40" viewBox="0 0 40 40" className="check" initial="hidden" whileInView="shown" viewport={{ once: true, amount: 0.6 }}>
        <motion.circle cx="20" cy="20" r="18" fill="none" strokeWidth="2.5" variants={{ hidden: { pathLength: 0 }, shown: { pathLength: 1 } }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} />
        <motion.path d="m12.5 20.5 5 5 10-11" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" variants={{ hidden: { pathLength: 0 }, shown: { pathLength: 1 } }} transition={{ duration: 0.35, delay: 0.35, ease: [0.22, 1, 0.36, 1] }} />
      </motion.svg>
      <strong>You’re all caught up</strong>
      <span className="muted small">{first ? 'No new posts since your last visit.' : 'You’ve seen everything new since your last visit.'} Older posts below.</span>
    </motion.div>
  )
}

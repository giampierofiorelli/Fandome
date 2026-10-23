import type { Id, Post, User } from '../data/types'

// Starter packs are generated, not hand-picked: the fans who created the most
// engagement around an artist in the last 30 days. Follower counts don't matter,
// only what their posts sparked (likes, reposts, replies and quotes from others).
export const PACK_WINDOW_DAYS = 30
export const PACK_SIZE = 5

export interface PackMember {
  userId: Id
  score: number
  posts: number
}

export function engagementByFan(posts: Post[], users: User[], artistId: Id, now = Date.now(), days = PACK_WINDOW_DAYS): PackMember[] {
  const since = now - days * 86_400_000
  const people = new Set(users.filter((u) => u.kind !== 'page' && u.id !== 'u-mod' && u.handle !== 'guest').map((u) => u.id))
  const byPost = new Map(posts.map((p) => [p.id, p]))
  const score = new Map<Id, PackMember>()
  const bump = (userId: Id, pts: number, isPost = false) => {
    if (!people.has(userId)) return
    const cur = score.get(userId) ?? { userId, score: 0, posts: 0 }
    cur.score += pts
    if (isPost) cur.posts += 1
    score.set(userId, cur)
  }
  for (const p of posts) {
    if (p.artistId !== artistId || p.createdAt < since) continue
    bump(p.authorId, 0, true)
    bump(p.authorId, p.likes.filter((id) => id !== p.authorId).length * 1)
    bump(p.authorId, p.reposts.filter((r) => r.userId !== p.authorId).length * 2)
  }
  // Replies and quotes count for the author they respond to.
  for (const p of posts) {
    const target = byPost.get(p.replyTo ?? p.quoteOf ?? '')
    if (!target || target.artistId !== artistId || p.createdAt < since || p.authorId === target.authorId) continue
    bump(target.authorId, 3)
  }
  return [...score.values()].filter((m) => m.score > 0).sort((a, b) => b.score - a.score || b.posts - a.posts)
}

export const starterPack = (posts: Post[], users: User[], artistId: Id, now = Date.now()) => engagementByFan(posts, users, artistId, now).slice(0, PACK_SIZE)

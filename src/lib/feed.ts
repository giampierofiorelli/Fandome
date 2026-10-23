import type { Post, User } from '../data/types'
import { extractTags } from '../store/reducer'

export interface FeedItem {
  key: string
  post: Post
  at: number
  repostedBy?: { userId: string; tags: string[] }
}

const score = (p: Post, now: number) => {
  const ageH = (now - p.createdAt) / 3_600_000
  return (p.likes.length + 2 * p.reposts.length + 1) / Math.pow(ageH + 2, 1.2)
}

// "Following": chronological, people you follow + yourself, including their reposts.
export function followingFeed(posts: Post[], me: User): FeedItem[] {
  const who = new Set([...me.following, me.id])
  const items: FeedItem[] = []
  for (const p of posts) {
    if (p.replyTo) continue
    if (who.has(p.authorId)) items.push({ key: p.id, post: p, at: p.createdAt })
    for (const r of p.reposts) {
      if (who.has(r.userId) && r.userId !== p.authorId) items.push({ key: `${p.id}:${r.userId}`, post: p, at: r.at, repostedBy: { userId: r.userId, tags: r.tags } })
    }
  }
  return items.sort((a, b) => b.at - a.at)
}

// "Discover": popular posts from your fandoms (Bluesky-style alternative feed).
export function discoverFeed(posts: Post[], artistIds: string[], now = Date.now()): FeedItem[] {
  return posts
    .filter((p) => !p.replyTo && (!p.artistId || artistIds.includes(p.artistId)))
    .sort((a, b) => score(b, now) - score(a, now))
    .map((p) => ({ key: p.id, post: p, at: p.createdAt }))
}

// Custom topic feed inside an artist space, matched by hashtags.
export function topicFeed(posts: Post[], artistId: string, tags?: string[]): FeedItem[] {
  return posts
    .filter((p) => !p.replyTo && p.artistId === artistId)
    .filter((p) => !tags || extractTags(p.text).some((t) => tags.includes(t)) || (tags.includes('live') && Boolean(p.concertId)))
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((p) => ({ key: p.id, post: p, at: p.createdAt }))
}

export function tagFeed(posts: Post[], tag: string): FeedItem[] {
  return posts
    .filter((p) => extractTags(p.text).includes(tag) || p.reposts.some((r) => r.tags.map((t) => t.toLowerCase().replace(/\s+/g, '')).includes(tag)))
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((p) => ({ key: p.id, post: p, at: p.createdAt }))
}

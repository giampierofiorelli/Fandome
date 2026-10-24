import type { Post, User } from '../data/types'
import { extractTags } from '../store/reducer'
import { isAbout, postArtists } from './postArtists'
import { postOwners } from './collab'

export interface FeedItem {
  key: string
  post: Post
  at: number
  repostedBy?: { userId: string; tags: string[] }
}

// "Following": chronological, people you follow + yourself, including their reposts.
export function followingFeed(posts: Post[], me: User): FeedItem[] {
  const who = new Set([...me.following, me.id])
  const items: FeedItem[] = []
  for (const p of posts) {
    if (p.replyTo) continue
    if (postOwners(p).some((id) => who.has(id))) items.push({ key: p.id, post: p, at: p.createdAt })
    for (const r of p.reposts) {
      if (who.has(r.userId) && !postOwners(p).includes(r.userId)) items.push({ key: `${p.id}:${r.userId}`, post: p, at: r.at, repostedBy: { userId: r.userId, tags: r.tags } })
    }
  }
  return items.sort((a, b) => b.at - a.at)
}

const aboutMine = (p: Post, artistIds: string[]) => !postArtists(p).length || postArtists(p).some((a) => artistIds.includes(a))

// "Latest": every post about the artists you follow, newest first (also from people you don't follow).
export function latestFeed(posts: Post[], artistIds: string[]): FeedItem[] {
  return posts
    .filter((p) => !p.replyTo && !p.removed && aboutMine(p, artistIds))
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((p) => ({ key: p.id, post: p, at: p.createdAt }))
}

export const TRENDING_HOURS = 48
const GRAVITY = 1.5
const MAX_PER_AUTHOR = 2
// What a person did with a post, counted once per person at their strongest action:
// a reply (a conversation) says more than a repost or quote, which says more than a like.
const W_REPLY = 3
const W_SHARE = 2
const W_LIKE = 1

// Interest = distinct people engaging, weighted by action, fading with age (Hacker News-style
// gravity). Counting people rather than clicks makes it hard for one account to push a post.
export function trendScore(p: Post, all: Post[], now: number): number {
  const owners = new Set(postOwners(p))
  const best = new Map<string, number>()
  const bump = (who: string, w: number) => {
    if (owners.has(who)) return
    best.set(who, Math.max(best.get(who) ?? 0, w))
  }
  for (const id of p.likes) bump(id, W_LIKE)
  for (const r of p.reposts) bump(r.userId, W_SHARE)
  for (const x of all) {
    if (x.removed) continue
    if (x.replyTo === p.id) bump(x.authorId, W_REPLY)
    else if (x.quoteOf === p.id) bump(x.authorId, W_SHARE)
  }
  let points = 0
  for (const w of best.values()) points += w
  const ageH = Math.max(0, (now - p.createdAt) / 3_600_000)
  return points / Math.pow(ageH + 2, GRAVITY)
}

// "Trending": what's getting people talking about your artists right now. Only the last 48 hours
// (or the last week when it's quiet), at most two posts per person, nothing without engagement.
export function trendingFeed(posts: Post[], artistIds: string[], now = Date.now()): { items: FeedItem[]; hours: number } {
  const pick = (hours: number) => {
    const scored = posts
      .filter((p) => !p.replyTo && !p.removed && aboutMine(p, artistIds) && now - p.createdAt <= hours * 3_600_000)
      .map((p) => ({ p, s: trendScore(p, posts, now) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
    const perAuthor = new Map<string, number>()
    const out: FeedItem[] = []
    for (const { p } of scored) {
      const n = perAuthor.get(p.authorId) ?? 0
      if (n >= MAX_PER_AUTHOR) continue
      perAuthor.set(p.authorId, n + 1)
      out.push({ key: p.id, post: p, at: p.createdAt })
    }
    return out
  }
  const recent = pick(TRENDING_HOURS)
  if (recent.length >= 3) return { items: recent, hours: TRENDING_HOURS }
  return { items: pick(24 * 7), hours: 24 * 7 }
}

// Custom topic feed inside an artist space, matched by hashtags.
export function topicFeed(posts: Post[], artistId: string, tags?: string[]): FeedItem[] {
  return posts
    .filter((p) => !p.replyTo && isAbout(p, artistId))
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

// Posts that mention an album (linked in the text) or review it.
export const mentionsAlbum = (p: Post, albumId: string) => Boolean(p.albumIds?.includes(albumId) || p.review?.albumId === albumId)

export function albumFeed(posts: Post[], albumId: string): FeedItem[] {
  return posts
    .filter((p) => !p.replyTo && !p.removed && mentionsAlbum(p, albumId))
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((p) => ({ key: p.id, post: p, at: p.createdAt }))
}

// "Most discussed albums": albums mentioned or reviewed in the last hours, counted by distinct
// people (authors of the posts plus people who replied to them), so one account can't push an album.
export function discussedAlbums(posts: Post[], now = Date.now(), hours = 24, boost: Record<string, number> = {}): { albumId: string; people: number; posts: number }[] {
  const since = now - hours * 3_600_000
  const people = new Map<string, Set<string>>()
  const count = new Map<string, number>()
  for (const p of posts) {
    if (p.removed || p.createdAt < since) continue
    const ids = new Set([...(p.albumIds ?? []), ...(p.review ? [p.review.albumId] : [])])
    if (!ids.size) continue
    const who = new Set([p.authorId, ...posts.filter((r) => r.replyTo === p.id && !r.removed).map((r) => r.authorId)])
    for (const id of ids) {
      const set = people.get(id) ?? new Set<string>()
      who.forEach((w) => set.add(w))
      people.set(id, set)
      count.set(id, (count.get(id) ?? 0) + 1)
    }
  }
  for (const id of Object.keys(boost)) if (!people.has(id)) people.set(id, new Set())
  return [...people.entries()]
    .map(([albumId, set]) => ({ albumId, people: set.size + (boost[albumId] ?? 0), posts: count.get(albumId) ?? 0 }))
    .sort((a, b) => b.people - a.people || b.posts - a.posts)
}

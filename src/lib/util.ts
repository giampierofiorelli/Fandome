import { isAbout } from './postArtists'
import { albums, artists, concerts } from '../data/seed'
import type { Post } from '../data/types'
import { extractTags } from '../store/reducer'

export const artistById = (id?: string) => artists.find((a) => a.id === id)
export const albumById = (id?: string) => albums.find((a) => a.id === id)
// An album belongs to its main artist and to any co-billed artist with a room.
export const albumHasArtist = (a: { artistId: string; withArtists?: string[] }, id: string) => a.artistId === id || Boolean(a.withArtists?.includes(id))
export const albumArtistIds = (a: { artistId: string; withArtists?: string[] }) => [a.artistId, ...(a.withArtists ?? [])]
export const concertById = (id?: string) => concerts.find((c) => c.id === id)

export function isUpcoming(date: string, now = Date.now()) {
  return new Date(date + 'T23:59:59').getTime() > now
}

export function timeAgo(at: number, now = Date.now()) {
  const s = Math.max(1, Math.round((now - at) / 1000))
  if (s < 60) return `${s}s`
  const m = Math.round(s / 60)
  if (m < 60) return `${m}m`
  const h = Math.round(m / 60)
  if (h < 24) return `${h}h`
  const d = Math.round(h / 24)
  return `${d}d`
}

export function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

// Twitter-style "Trending in <fandom>": counts hashtags from posts and
// Tumblr-style repost tags, weighted towards recent activity.
export function trending(posts: Post[], opts: { artistId?: string; now?: number; limit?: number } = {}) {
  const now = opts.now ?? Date.now()
  const scores = new Map<string, { score: number; posts: number }>()
  const bump = (tag: string, at: number) => {
    const ageH = Math.max(0, (now - at) / 3_600_000)
    const weight = 1 / (1 + ageH / 12)
    const cur = scores.get(tag) ?? { score: 0, posts: 0 }
    scores.set(tag, { score: cur.score + weight, posts: cur.posts + 1 })
  }
  for (const p of posts) {
    if (opts.artistId && !isAbout(p, opts.artistId)) continue
    for (const t of extractTags(p.text)) bump(t, p.createdAt)
    for (const r of p.reposts) for (const t of r.tags) bump(t.toLowerCase().replace(/\s+/g, ''), r.at)
  }
  return [...scores.entries()]
    .sort((a, b) => b[1].score - a[1].score)
    .slice(0, opts.limit ?? 6)
    .map(([tag, v]) => ({ tag, posts: v.posts }))
}

export function avgRating(values: number[]) {
  if (!values.length) return 0
  return Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 10) / 10
}

// "Artists you might like" in Explore: simple, explainable rules on data you can see,
// no profiling. Each suggestion carries the reason it is shown.
import type { Artist, User } from '../data/types'

export interface ArtistSuggestion {
  artist: Artist
  reason: string
  score: number
}

const names = (list: string[]) => (list.length <= 2 ? list.join(' and ') : `${list.slice(0, 2).join(', ')} and ${list.length - 2} more`)

export function suggestArtists(me: User, users: User[], artists: Artist[], limit = 4): ArtistSuggestion[] {
  const mine = new Set(Object.keys(me.fanSince))
  const people = users.filter((u) => u.id !== me.id && u.kind !== 'page')
  const out: ArtistSuggestion[] = []
  for (const a of artists) {
    if (mine.has(a.id)) continue
    // People you follow who are fans of this artist (strongest signal).
    const friends = people.filter((u) => me.following.includes(u.id) && u.fanSince[a.id])
    // Fans of your artists who are also fans of this one.
    const shared = new Map<string, number>()
    for (const u of people) {
      if (!u.fanSince[a.id]) continue
      for (const id of Object.keys(u.fanSince)) if (mine.has(id)) shared.set(id, (shared.get(id) ?? 0) + 1)
    }
    const coFans = [...shared.values()].reduce((n, v) => n + v, 0)
    const score = friends.length * 2 + coFans
    if (!score) continue
    const top = [...shared.entries()].sort((x, y) => y[1] - x[1])[0]?.[0]
    const topName = artists.find((x) => x.id === top)?.name
    const reason = friends.length ? `Followed by ${names(friends.map((u) => u.name))}` : `Fans of ${topName} also follow`
    out.push({ artist: a, reason, score })
  }
  return out.sort((x, y) => y.score - x.score).slice(0, limit)
}

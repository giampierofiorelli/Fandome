// "Artists you might like" in Explore: simple, explainable rules on data you can see,
// no profiling. Each suggestion carries the reason it is shown.
// Two signals, half each: people (who you follow, what fans of your artists follow) and
// sound (album descriptors: albums you rated highly, then the albums of artists you follow).
import type { Album, Artist, User } from '../data/types'
import { soundMatch, type AlbumSeed } from './similar'
import { COUNTRY_NAMES, sceneOf } from '../data/scenes'

export interface ArtistSuggestion {
  artist: Artist
  reason: string
  score: number
  newCountry?: string // country name, when none of the artists you follow comes from there
}

const names = (list: string[]) => (list.length <= 2 ? list.join(' and ') : `${list.slice(0, 2).join(', ')} and ${list.length - 2} more`)

// Ratings are stored out of 5 (shown out of 10): 4 and up counts as "loved".
export function fanSeeds(me: User, albums: Album[]): AlbumSeed[] {
  const mine = new Set(Object.keys(me.fanSince))
  const rated = Object.entries(me.ratings ?? {})
    .filter(([, r]) => r >= 4)
    .map(([albumId, r]) => ({ albumId, weight: r >= 5 ? 1 : 0.9, rated: true }))
  const followed = albums.filter((a) => mine.has(a.artistId) && !me.ratings?.[a.id]).map((a) => ({ albumId: a.id, weight: 0.7, rated: false }))
  return [...rated, ...followed]
}

export function suggestArtists(me: User, users: User[], artists: Artist[], limit = 4, albums: Album[] = []): ArtistSuggestion[] {
  const mine = new Set(Object.keys(me.fanSince))
  const people = users.filter((u) => u.id !== me.id && u.kind !== 'page')
  const seeds = fanSeeds(me, albums)
  const hidden = new Set(me.notForMe ?? [])
  // Discovery: a small push for artists from countries none of your artists come from.
  const myCountries = new Set([...mine].map((id) => sceneOf(id)?.country).filter(Boolean))
  const rows: { artist: Artist; social: number; sound: number; friends: string[]; topFan?: string; soundReason?: string }[] = []
  for (const a of artists) {
    if (mine.has(a.id) || hidden.has(a.id)) continue
    // People you follow who are fans of this artist (strongest signal).
    const friends = people.filter((u) => me.following.includes(u.id) && u.fanSince[a.id])
    // Fans of your artists who are also fans of this one.
    const shared = new Map<string, number>()
    for (const u of people) {
      if (!u.fanSince[a.id]) continue
      for (const id of Object.keys(u.fanSince)) if (mine.has(id)) shared.set(id, (shared.get(id) ?? 0) + 1)
    }
    const social = friends.length * 2 + [...shared.values()].reduce((n, v) => n + v, 0)
    const theirs = albums.filter((al) => al.artistId === a.id)
    // An album of theirs you rated highly is the clearest reason of all.
    const loved = theirs.find((al) => (me.ratings?.[al.id] ?? 0) >= 4)
    const match = loved ? { score: 1, reason: `You rated ${loved.title} highly` } : seeds.length ? soundMatch(seeds, theirs.map((al) => al.id)) : null
    const sound = match && match.score >= 0.35 ? Math.min(1, match.score) : 0
    if (!social && !sound) continue
    const top = [...shared.entries()].sort((x, y) => y[1] - x[1])[0]?.[0]
    rows.push({ artist: a, social, sound, friends: friends.map((u) => u.name), topFan: artists.find((x) => x.id === top)?.name, soundReason: sound ? match!.reason : undefined })
  }
  const maxSocial = Math.max(1, ...rows.map((r) => r.social))
  return rows
    .map((r) => {
      const reason = r.friends.length ? `Followed by ${names(r.friends)}` : r.soundReason ?? `Fans of ${r.topFan} also follow`
      const country = sceneOf(r.artist.id)?.country
      const isNew = Boolean(country && myCountries.size && !myCountries.has(country))
      const score = 0.5 * (r.social / maxSocial) + 0.5 * r.sound + (isNew ? 0.05 : 0)
      return { artist: r.artist, reason, score, newCountry: isNew ? COUNTRY_NAMES[country!] ?? country : undefined }
    })
    .sort((x, y) => y.score - x.score)
    .slice(0, limit)
}

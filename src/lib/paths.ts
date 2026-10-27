// Three discovery paths in Explore (owner's Scenes plan, see ROADMAP):
//   Bridge: an artist you follow → a close artist from another country's local scene
//   Go deeper: you follow an artist from a local scene abroad → more from that scene
//   A scene you don't know yet: a local scene none of your artists come from, entered through its
//   artist closest to what you follow; rotates weekly.
// Country and genres come from scenes.ts (every room); the Bridge also uses album descriptors.
// Discovery targets are local-scene artists only: outside the global markets (US, UK, Canada,
// Australia, Ireland) and singing mainly in their own language, not English.
import type { Album, Artist, User } from '../data/types'
import { COUNTRY_NAMES, GENRE_LABELS, fromCountry, sceneOf, type Genre } from '../data/scenes'
import { isLocalArtist } from './local'
import { genreListSimilarity, similarArtists } from './similar'

export interface PathSuggestion {
  kind: 'bridge' | 'deeper' | 'newscene'
  artistId: string
  kicker: string
  reason: string
}

const WEEK = 7 * 24 * 3600 * 1000
const countryName = (code: string) => COUNTRY_NAMES[code] ?? code
const label = (g: string) => GENRE_LABELS[g as Genre]?.toLowerCase() ?? g
const and = (xs: string[]) => (xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`)
const shared = (a: string[], b: string[]) => a.filter((g) => b.includes(g))

export function discoverPaths(me: User, artists: Artist[], albums: Album[], now = Date.now()): PathSuggestion[] {
  const followed = Object.keys(me.fanSince).filter((id) => sceneOf(id))
  if (!followed.length) return []
  const name = (id: string) => artists.find((a) => a.id === id)?.name ?? id
  const blocked = new Set([...followed, ...(me.notForMe ?? [])])
  const free = (id: string) => !blocked.has(id) && sceneOf(id)
  const out: PathSuggestion[] = []
  const take = (p: PathSuggestion) => (out.push(p), blocked.add(p.artistId))

  const myCountries = new Map<string, number>()
  for (const id of followed) myCountries.set(sceneOf(id)!.country, (myCountries.get(sceneOf(id)!.country) ?? 0) + 1)
  const home = [...myCountries.entries()].sort((a, b) => b[1] - a[1])[0][0]

  // 1. Bridge: album descriptors first (concrete reason), scene genres as a fallback.
  const albumIdsOf = (id: string) => albums.filter((a) => a.artistId === id || a.withArtists?.includes(id)).map((a) => a.id)
  let bridge: { from: string; to: string; reason: string; score: number } | null = null
  for (const f of followed) {
    const best = similarArtists(f, albumIdsOf, artists.map((a) => a.id).filter(free), { countryOf: (id) => sceneOf(id)?.country, limit: 8 }).find((s) => s.newCountry && !myCountries.has(s.newCountry) && isLocalArtist(s.artistId))
    if (best && (!bridge || best.score > bridge.score)) bridge = { from: f, to: best.artistId, reason: best.reason, score: best.score }
  }
  if (!bridge) {
    for (const f of followed) {
      const fs = sceneOf(f)!
      for (const a of artists) {
        const s = sceneOf(a.id)
        if (!free(a.id) || !s || myCountries.has(s.country) || !isLocalArtist(a.id)) continue
        const score = genreListSimilarity(fs.genres, s.genres)
        if (score >= 0.5 && (!bridge || score > bridge.score)) {
          const common = shared(fs.genres, s.genres)
          bridge = { from: f, to: a.id, score, reason: common.length ? `Both ${and(common.map(label))}` : `Close to ${and(fs.genres.map(label))}` }
        }
      }
    }
  }
  const From = (code: string) => fromCountry(countryName(code)).replace(/^from/, 'From')
  if (bridge) take({ kind: 'bridge', artistId: bridge.to, kicker: `Bridge · you like ${name(bridge.from)}`, reason: `${From(sceneOf(bridge.to)!.country)} · ${bridge.reason}` })
  const usedCountries = new Set(out.map((p) => sceneOf(p.artistId)!.country))

  // 2. Go deeper: an artist you follow from another country than most of yours → their scene.
  let deeper: { from: string; to: string; score: number } | null = null
  for (const f of followed) {
    const fs = sceneOf(f)!
    if (fs.country === home || !isLocalArtist(f)) continue
    for (const a of artists) {
      const s = sceneOf(a.id)
      if (!free(a.id) || !s || s.country !== fs.country || !isLocalArtist(a.id)) continue
      const score = genreListSimilarity(fs.genres, s.genres)
      if (score > 0.2 && (!deeper || score > deeper.score)) deeper = { from: f, to: a.id, score }
    }
  }
  if (deeper) {
    const common = shared(sceneOf(deeper.from)!.genres, sceneOf(deeper.to)!.genres)
    take({
      kind: 'deeper',
      artistId: deeper.to,
      kicker: `Go deeper · more from ${countryName(sceneOf(deeper.to)!.country)}`,
      reason: `Like ${name(deeper.from)}${common.length ? `: ${and(common.map(label))}` : ''}`,
    })
  }

  // 3. A scene you don't know yet: countries with no artist you follow, ranked by how close their
  //    best entry artist is to your genres; one of the top three, changing every week.
  const myGenres = [...new Set(followed.flatMap((id) => sceneOf(id)!.genres))]
  const byCountry = new Map<string, { id: string; score: number }>()
  const count = new Map<string, number>()
  for (const a of artists) {
    const s = sceneOf(a.id)
    if (!s || myCountries.has(s.country) || usedCountries.has(s.country) || !isLocalArtist(a.id)) continue
    count.set(s.country, (count.get(s.country) ?? 0) + 1)
    if (!free(a.id)) continue
    const score = genreListSimilarity(myGenres, s.genres)
    if (!byCountry.has(s.country) || score > byCountry.get(s.country)!.score) byCountry.set(s.country, { id: a.id, score })
  }
  const scenes = [...byCountry.entries()].filter(([c]) => (count.get(c) ?? 0) >= 2).sort((a, b) => b[1].score - a[1].score).slice(0, 3)
  if (scenes.length) {
    const [country, entry] = scenes[Math.floor(now / WEEK) % scenes.length]
    const s = sceneOf(entry.id)!
    const common = shared(s.genres, myGenres)
    take({
      kind: 'newscene',
      artistId: entry.id,
      kicker: `A scene you don't know yet · ${countryName(country)}`,
      reason: `Start with ${name(entry.id)}: ${and(s.genres.map(label))}${common.length ? `, close to the ${and(common.map(label))} you follow` : ''}`,
    })
  }
  return out
}

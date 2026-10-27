// Quality check for the suggestion engine (research doc 3.6): run on every build via the tests,
// and as a report with `npx vite-node scripts/eval-recommendations.ts`.
import { DESCRIPTORS } from './descriptors'
import { genreSimilarity, similarAlbums } from './similar'
import { albums } from '../data/seed'
import { GLOBAL_MARKETS, sceneOf } from '../data/scenes'
import { isLocalArtist } from './local'

export interface Quality {
  albums: number // albums with a description
  coverage: number // share of described albums suggested at least once (long tail, not just hits)
  artistCoverage: number // share of described artists suggested at least once
  diversity: number // 1 − average genre similarity inside a list (higher = more varied)
  novelty: number // share of suggestions from a local scene in another country (never US/UK)
  globalToLocal: number // for albums from global markets (US, UK…), share of suggestions from a local scene
  explained: number // share of suggestions with at least one reason (must be 1)
  empty: number // albums with no suggestion at all
  topShare: number // share of all suggestions taken by the single most suggested album (popularity bias)
}

export function evaluate(limit = 10): Quality {
  const artistOf = (id: string) => albums.find((a) => a.id === id)?.artistId
  const countryOf = (id: string) => sceneOf(artistOf(id) ?? '')?.country
  const ids = Object.keys(DESCRIPTORS)
  const seen = new Map<string, number>()
  let total = 0
  let explained = 0
  let foreign = 0
  let fromGlobal = 0
  let globalToLocal = 0
  let empty = 0
  const div: number[] = []
  for (const id of ids) {
    const artistsOf = (x: string) => { const al = albums.find((a) => a.id === x); return al ? [al.artistId, ...(al.withArtists ?? [])] : [] }
    const list = similarAlbums(id, { limit, artistOf, artistsOf, countryOf })
    if (!list.length) empty++
    for (const s of list) {
      total++
      seen.set(s.albumId, (seen.get(s.albumId) ?? 0) + 1)
      if (s.reasons.length) explained++
      if (s.newCountry) foreign++
      if (GLOBAL_MARKETS.has(countryOf(id) ?? '')) (fromGlobal++, isLocalArtist(artistOf(s.albumId)) && globalToLocal++)
    }
    if (list.length > 1) {
      let sum = 0
      let n = 0
      for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) (sum += genreSimilarity(DESCRIPTORS[list[i].albumId], DESCRIPTORS[list[j].albumId])), n++
      div.push(1 - sum / n)
    }
  }
  const artists = new Set(ids.map(artistOf))
  const suggestedArtists = new Set([...seen.keys()].map(artistOf))
  return {
    albums: ids.length,
    coverage: seen.size / ids.length,
    artistCoverage: suggestedArtists.size / artists.size,
    diversity: div.reduce((a, b) => a + b, 0) / (div.length || 1),
    novelty: foreign / (total || 1),
    globalToLocal: globalToLocal / (fromGlobal || 1),
    explained: explained / (total || 1),
    empty,
    topShare: Math.max(0, ...seen.values()) / (total || 1),
  }
}

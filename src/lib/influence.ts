// The influence network (owner, Oct 2026; research in docs/research/influence-research.md): who drew on whom,
// album to album, from what our descriptors document. A link always goes from a later album to an earlier one:
// - influenced_by: the artist (or a producer, or someone speaking for them) names it, weight 1;
// - sounds_like: a critic hears it, weight 0.5 (critics' comparisons already reflect reputation);
// - a producer of the earlier album produced the later one too, weight 0.5;
// - an influence the artist names for their whole career (artistInfluences.ts), weight 0.25.
// A link that names a record leads to it; a link to an artist leads to that artist's earlier album that sounds
// most like the later one. A link on some songs only ("Pink Floyd [1/10]") weighs that share.
// Influence (how much later music draws on an album) is kept apart from innovation (the trace in legacy.ts):
// the research finds they are different things.
import { albums } from '../data/seed'
import { ARTIST_INFLUENCES } from '../data/artistInfluences'
import { DESCRIPTORS, type Descriptor } from './descriptors'
import { albumProfile, compareProfiles, foldName } from './similar'

// how: an influence the artist names, a critic's comparison, a shared producer, a career-wide influence; "-album" when
// the source names this very record, not only its artist.
export type How = 'influence' | 'influence-album' | 'critic' | 'critic-album' | 'producer' | 'artist'
export interface Citation { albumId: string; weight: number; how: How }
export interface Influence {
  citedBy: Citation[] // the later albums that draw on it, strongest first
  score: number // PageRank over the network: drawn on by albums that are themselves drawn on counts more
  percentile: number // its score among albums released within 5 years of it, 0-1 (1 = the most drawn-on)
  // Disruption (Funk & Owen-Smith 2017): +1 when the albums that draw on it ignore what it drew on (it opened a
  // path), -1 when they draw on its sources too (it continued a line). Undefined when we document no sources of
  // its own.
  disruption?: number
}

const own = Object.values(DESCRIPTORS).filter((d) => d.year && !['compilation', 'live'].includes(d.type) && d.genres[0] !== 'christmas')
const artistOf = new Map(albums.map((a) => [a.id, a.artistId]))
// Every billed artist (Ella and Louis is Armstrong's and Ella Fitzgerald's): no link between albums that share one.
const billed = new Map(albums.map((a) => [a.id, new Set([a.artistId, ...(a.withArtists ?? [])])]))
const shareArtist = (x: string, y: string) => [...(billed.get(x) ?? [])].some((a) => billed.get(y)?.has(a))
const nameOfArtist = new Map<string, string>() // folded name -> artist id
for (const d of own) nameOfArtist.set(foldName(d.artist), artistOf.get(d.albumId)!)
const byArtist = new Map<string, Descriptor[]>()
for (const d of own) {
  const a = artistOf.get(d.albumId)!
  if (!byArtist.has(a)) byArtist.set(a, [])
  byArtist.get(a)!.push(d)
}
const foldTitle = (t: string) => foldName(t)
const sim = (x: Descriptor, y: Descriptor) => compareProfiles(albumProfile(x), albumProfile(y)).base

function computeNetwork() {
  const out = new Map<string, Map<string, Citation>>() // later -> earlier -> citation
  const add = (later: Descriptor, earlier: Descriptor, weight: number, how: How) => {
    if (earlier.year! >= later.year! || shareArtist(earlier.albumId, later.albumId)) return
    if (!out.has(later.albumId)) out.set(later.albumId, new Map())
    const m = out.get(later.albumId)!
    const prev = m.get(earlier.albumId)
    if (!prev || prev.weight < weight) m.set(earlier.albumId, { albumId: earlier.albumId, weight, how })
  }
  // The earlier album a link to an artist leads to: the named record, else the one that sounds most like it.
  const target = (later: Descriptor, artistId: string, title?: string) => {
    const before = (byArtist.get(artistId) ?? []).filter((x) => x.year! < later.year!)
    if (!before.length) return undefined
    if (title) return before.find((x) => foldTitle(x.title) === foldTitle(title))
    let best = before[0], top = -1
    for (const x of before) {
      const v = sim(later, x)
      if (v > top) (top = v), (best = x)
    }
    return best
  }
  for (const d of own) {
    const me = artistOf.get(d.albumId)!
    const named = new Map(d.namedAlbums.map((n) => [foldName(n.artist), n.title]))
    const cite = (names: string[], parts: Record<string, { songs: number; of: number }>, weight: number, how: 'influence' | 'critic') => {
      for (const n of names) {
        const a = nameOfArtist.get(foldName(n))
        if (!a || a === me) continue
        const part = parts[n]
        const title = part ? undefined : named.get(foldName(n))
        const t = target(d, a, title)
        if (t) add(d, t, weight * (part ? part.songs / part.of : 1), title ? `${how}-album` : how)
      }
    }
    cite(d.influencedBy, d.parts.influencedBy, 1, 'influence')
    cite(d.soundsLike, d.parts.soundsLike, 0.5, 'critic')
    const mine = new Set(d.producers.map(foldName).filter((p) => p !== foldName(d.artist)))
    if (mine.size) for (const x of own) if (x.year! < d.year! && x.producers.some((p) => mine.has(foldName(p)) && p !== x.artist)) add(d, x, 0.5, 'producer')
    for (const n of ARTIST_INFLUENCES[me]?.names ?? []) {
      const a = nameOfArtist.get(foldName(n))
      if (!a || a === me) continue
      const t = target(d, a)
      if (t) add(d, t, 0.25, 'artist')
    }
  }
  // Who draws on each album.
  const citedBy = new Map<string, Citation[]>()
  for (const [later, m] of out) for (const c of m.values()) {
    if (!citedBy.has(c.albumId)) citedBy.set(c.albumId, [])
    citedBy.get(c.albumId)!.push({ ...c, albumId: later })
  }
  // PageRank: an album's score flows to the albums it draws on, in proportion to the links' weights.
  const ids = own.map((d) => d.albumId)
  const N = ids.length, D = 0.85
  let score = new Map(ids.map((id) => [id, 1 / N]))
  for (let it = 0; it < 40; it++) {
    const next = new Map(ids.map((id) => [id, (1 - D) / N]))
    let dangling = 0
    for (const id of ids) {
      const m = out.get(id)
      const total = m ? [...m.values()].reduce((n, c) => n + c.weight, 0) : 0
      if (!total) { dangling += score.get(id)!; continue }
      for (const c of m!.values()) next.set(c.albumId, next.get(c.albumId)! + (D * score.get(id)! * c.weight) / total)
    }
    for (const id of ids) next.set(id, next.get(id)! + (D * dangling) / N)
    score = next
  }
  const year = new Map(own.map((d) => [d.albumId, d.year!]))
  const result = new Map<string, Influence>()
  for (const id of ids) {
    const s = score.get(id)!
    const era = ids.filter((x) => Math.abs(year.get(x)! - year.get(id)!) <= 5)
    const percentile = era.filter((x) => score.get(x)! <= s).length / era.length
    const refs = new Set(out.get(id)?.keys() ?? [])
    const citers = new Set((citedBy.get(id) ?? []).map((c) => c.albumId))
    let ni = 0, nj = 0, nk = 0
    for (const c of citers) [...(out.get(c)?.keys() ?? [])].some((r) => refs.has(r)) ? nj++ : ni++
    if (refs.size) for (const [later, m] of out) if (!citers.has(later) && year.get(later)! > year.get(id)! && [...m.keys()].some((r) => refs.has(r))) nk++
    const disruption = refs.size && ni + nj + nk ? (ni - nj) / (ni + nj + nk) : undefined
    result.set(id, { citedBy: (citedBy.get(id) ?? []).sort((a, b) => b.weight - a.weight || Number(b.how.endsWith('-album')) - Number(a.how.endsWith('-album'))), score: s, percentile, disruption })
  }
  return result
}

let network: Map<string, Influence> | undefined
export function influenceOf(albumId: string): Influence | undefined {
  network ??= computeNetwork()
  return network.get(albumId)
}

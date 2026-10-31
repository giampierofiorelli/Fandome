// The story of a sound (owner, Oct 31 2026), method v1 in docs/research/findings-method.md, written before running:
// 1. first appearance: the earliest album in the catalogue that has a sound at all;
// 2. becomes a main sound: when a field's albums start carrying it in full (one test per field and sound, false
//    discovery rate controlled with Benjamini–Hochberg on shuffle-based p-values);
// 3. the album it spread from: early, documented as new, not drawing on an earlier carrier, and resembled by the
//    albums that took the sound up.
// Every number below is the one written in the method; none is chosen by looking at which albums come out.
import { DESCRIPTORS, type Descriptor } from './descriptors'
import { albums } from '../data/seed'
import { sceneOf } from '../data/scenes'
import { albumProfile, compareProfiles, foldName } from './similar'

export const METHOD = {
  mainGenres: 3, // the guide's main sound: a genre from 4th place on is the long tail
  detectBefore: 76, // albums in the 6 years before to see a 3% sound with 90% confidence: ln 0.10 / ln 0.97
  beforeYears: 6,
  minSide: 10, // albums on each side of a change point
  permutations: 200,
  q: 0.1, // false discovery rate
  minCarriers: 5, // series with fewer full carriers are not tested
  criticalMass: 0.16, // Rogers: innovators and early adopters
  priority: 0.16, // a pioneer is among the first 16% of the carriers
  closerTop: 0.1, // a pioneer's likeness to the albums after ranks in the top 10% of its contemporaries
  followYears: 10,
  z: 1.645, // 90% Wilson bound
}

export type Presence = 'full' | 'partial'
export interface FirstAppearance { trait: string; albumId: string; year: number; presence: Presence; thin: boolean }
export interface Rise { field: string; trait: string; split: number; before: number; after: number; nBefore: number; nAfter: number; p: number; pioneers: string[] }

const own = Object.values(DESCRIPTORS).filter((d) => d.year && !['compilation', 'live'].includes(d.type) && d.genres[0] !== 'christmas')
const artistOf = new Map(albums.map((a) => [a.id, a.artistId]))
const fieldsOf = (d: Descriptor) => sceneOf(artistOf.get(d.albumId) ?? '')?.genres ?? []

// How an album carries a trait ("g:genre", "i:instrument", "p:technique"): in full, partly (a genre from 4th place
// on), or not at all.
export function presenceOf(d: Descriptor, t: string): Presence | undefined {
  const [k, v] = [t.slice(0, 1), t.slice(2)]
  if (k === 'g') {
    const i = d.genres.indexOf(v)
    return i < 0 ? undefined : i < METHOD.mainGenres ? 'full' : 'partial'
  }
  return (k === 'i' ? d.instruments : d.production).includes(v) ? 'full' : undefined
}
const traitsOf = (d: Descriptor) => [...d.genres.map((g) => `g:${g}`), ...d.instruments.map((x) => `i:${x}`), ...d.production.map((x) => `p:${x}`)]
const position = (d: Descriptor, t: string) => (t.startsWith('g:') ? d.genres.indexOf(t.slice(2)) : 0)

const years = own.map((d) => d.year!)
const describedBetween = (from: number, to: number) => years.filter((y) => y >= from && y <= to).length
export const thinBefore = (year: number) => describedBetween(year - METHOD.beforeYears, year - 1) < METHOD.detectBefore

// 1. First appearance: by date; in the same year a full presence before a partial one, then the higher position.
export function firstAppearances(): FirstAppearance[] {
  const best = new Map<string, Descriptor>()
  const rank = (d: Descriptor, t: string) => [d.year!, presenceOf(d, t) === 'full' ? 0 : 1, position(d, t)]
  const before = (a: number[], b: number[]) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]
  for (const d of own) for (const t of traitsOf(d)) {
    const cur = best.get(t)
    if (!cur || before(rank(d, t), rank(cur, t)) < 0) best.set(t, d)
  }
  return [...best].map(([trait, d]) => ({ trait, albumId: d.albumId, year: d.year!, presence: presenceOf(d, trait)!, thin: thinBefore(d.year!) }))
}

// Seeded random numbers: the same catalogue gives the same result on every run.
function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const ll = (k: number, n: number) => (k > 0 ? k * Math.log(k / n) : 0) + (n - k > 0 ? (n - k) * Math.log((n - k) / n) : 0)
// The split year that best separates a lower share before from a higher one after (binomial log-likelihood gain),
// with at least minSide albums on each side. carriers[i] is 1 when album i (sorted by year) carries the trait in full.
function bestSplit(carriers: Uint8Array, yearsSorted: number[]): { gain: number; at: number } {
  const n = carriers.length
  let k = 0
  for (let i = 0; i < n; i++) k += carriers[i]
  const whole = ll(k, n)
  let best = { gain: 0, at: -1 }
  let k1 = 0
  for (let i = 0; i < n - 1; i++) {
    k1 += carriers[i]
    if (yearsSorted[i] === yearsSorted[i + 1]) continue // split only between years
    const n1 = i + 1, n2 = n - n1
    if (n1 < METHOD.minSide || n2 < METHOD.minSide) continue
    const k2 = k - k1
    if (k2 / n2 <= k1 / n1) continue // a rise, not a fall
    const gain = ll(k1, n1) + ll(k2, n2) - whole
    if (gain > best.gain) best = { gain, at: i + 1 }
  }
  return best
}

const wilsonLow = (k: number, n: number) => {
  if (!n) return 0
  const z2 = METHOD.z * METHOD.z, p = k / n
  return Math.max(0, (p + z2 / (2 * n) - METHOD.z * Math.sqrt((p * (1 - p)) / n + z2 / (4 * n * n))) / (1 + z2 / n))
}

// 2 and 3. Rises (a sound becoming a field's main sound) and the albums they spread from.
export function rises(seed = 1): Rise[] {
  const random = rng(seed)
  const fields = new Map<string, Descriptor[]>()
  for (const d of own) for (const f of fieldsOf(d)) fields.set(f, [...(fields.get(f) ?? []), d])
  const tested: { field: string; trait: string; xs: Descriptor[]; carriers: Uint8Array; split: number; p: number }[] = []
  for (const [field, list] of fields) {
    const xs = [...list].sort((a, b) => a.year! - b.year!)
    const ys = xs.map((d) => d.year!)
    const traits = new Set(xs.flatMap(traitsOf))
    for (const trait of traits) {
      const carriers = Uint8Array.from(xs.map((d) => (presenceOf(d, trait) === 'full' ? 1 : 0)))
      const k = carriers.reduce((n, v) => n + v, 0)
      if (k < METHOD.minCarriers) continue
      const obs = bestSplit(carriers, ys)
      if (obs.at < 0) continue
      // The same best-split statistic with the carriers shuffled among the field's albums (years kept).
      let atLeast = 0
      const perm = carriers.slice()
      for (let r = 0; r < METHOD.permutations; r++) {
        for (let i = perm.length - 1; i > 0; i--) {
          const j = Math.floor(random() * (i + 1))
          const tmp = perm[i]
          perm[i] = perm[j]
          perm[j] = tmp
        }
        if (bestSplit(perm, ys).gain >= obs.gain) atLeast++
      }
      tested.push({ field, trait, xs, carriers, split: obs.at, p: (atLeast + 1) / (METHOD.permutations + 1) })
    }
  }
  // Benjamini–Hochberg at q across all tested series.
  const order = [...tested].sort((a, b) => a.p - b.p)
  let cut = -1
  order.forEach((s, i) => {
    if (s.p <= (METHOD.q * (i + 1)) / order.length) cut = i
  })
  testedCount = order.length
  const out: Rise[] = []
  for (const s of order.slice(0, cut + 1)) {
    const nBefore = s.split, nAfter = s.xs.length - s.split
    let kBefore = 0
    for (let i = 0; i < s.split; i++) kBefore += s.carriers[i]
    const kAfter = s.carriers.reduce((n, v) => n + v, 0) - kBefore
    if (wilsonLow(kAfter, nAfter) < METHOD.criticalMass) continue // critical mass
    const split = s.xs[s.split].year!
    out.push({ field: s.field, trait: s.trait, split, before: kBefore / nBefore, after: kAfter / nAfter, nBefore, nAfter, p: s.p, pioneers: pioneersOf(s.xs, s.carriers, split) })
  }
  return out
}
// How many series the last run tested (reported with the results).
export let testedCount = 0

// 3. The albums a rise spread from.
function pioneersOf(xs: Descriptor[], carriers: Uint8Array, split: number): string[] {
  const full = xs.filter((_, i) => carriers[i])
  const cutoffRank = Math.max(1, Math.ceil(METHOD.priority * full.length))
  const lastYear = full[cutoffRank - 1].year!
  const early = full.filter((d) => d.year! <= Math.min(lastYear, split))
  const sim = (a: Descriptor, b: Descriptor) => compareProfiles(albumProfile(a), albumProfile(b)).base
  const mean = (v: number[]) => (v.length ? v.reduce((n, x) => n + x, 0) / v.length : 0)
  const seenArtists = new Set<string>()
  const out: string[] = []
  for (const c of early) {
    const artist = artistOf.get(c.albumId) ?? ''
    if (seenArtists.has(artist)) continue // the same artist's later albums are not credited again
    if (thinBefore(c.year!)) continue
    // It drew on an artist that already carried the sound: it names them as an influence, or critics compare them.
    const earlierArtists = new Set(full.filter((d) => d.year! < c.year!).map((d) => foldName(d.artist)))
    if ([...c.influencedBy, ...c.soundsLike].some((n) => earlierArtists.has(foldName(n)))) continue
    const followers = full.filter((d) => d.year! > c.year! && d.year! <= c.year! + METHOD.followYears && artistOf.get(d.albumId) !== artist)
    if (!followers.length) continue
    const mine = mean(followers.map((f) => sim(f, c)))
    const peers = xs.filter((d) => d.albumId !== c.albumId && artistOf.get(d.albumId) !== artist && Math.abs(d.year! - c.year!) <= 1)
    const ahead = peers.filter((p) => mean(followers.map((f) => sim(f, p))) >= mine).length
    if (peers.length && ahead / peers.length > METHOD.closerTop) continue
    out.push(c.albumId)
    seenArtists.add(artist)
  }
  return out
}

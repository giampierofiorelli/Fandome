// The story of a sound (owner, Oct 31 2026), method v5 in docs/research/findings-method.md, written before running:
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
import { drawsOnOf, influenceOf } from './influence'

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
export interface Rise { field: string; trait: string; split: number; before: number; after: number; nBefore: number; nAfter: number; p: number; pioneers: string[]; popular?: string }

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
export const thinBefore = (year: number, beforeYears = METHOD.beforeYears) => describedBetween(year - beforeYears, year - 1) < METHOD.detectBefore

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
// Method v2: the series is cut into segments of steady share (several change points, so a sound that appears,
// fades and comes back keeps its phases apart). Greedy binary segmentation with a BIC penalty: a cut is kept while it
// improves the binomial log-likelihood by more than ln(n) (two parameters: the place and the new share), with at
// least minSide albums per segment and cuts only between years. carriers[i] is 1 when album i (by year) carries the
// trait in full. Returns the cut positions and the total gain over a single share.
function segment(carriers: Uint8Array, yearsSorted: number[]): { cuts: number[]; gain: number } {
  const n = carriers.length
  const prefix = new Int32Array(n + 1)
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + carriers[i]
  const seg = (a: number, b: number) => ll(prefix[b] - prefix[a], b - a)
  const penalty = Math.log(n)
  const cuts: number[] = []
  let gain = 0
  for (;;) {
    const bounds = [0, ...cuts, n]
    let best = { g: penalty, at: -1 }
    for (let s = 0; s < bounds.length - 1; s++) {
      const [a, b] = [bounds[s], bounds[s + 1]]
      const whole = seg(a, b)
      for (let i = a + METHOD.minSide; i <= b - METHOD.minSide; i++) {
        if (yearsSorted[i - 1] === yearsSorted[i]) continue // cut only between years
        const g = seg(a, i) + seg(i, b) - whole
        if (g > best.g) best = { g, at: i }
      }
    }
    if (best.at < 0) break
    cuts.push(best.at)
    cuts.sort((x, y) => x - y)
    gain += best.g
  }
  return { cuts, gain }
}

const wilsonLow = (k: number, n: number) => {
  if (!n) return 0
  const z2 = METHOD.z * METHOD.z, p = k / n
  return Math.max(0, (p + z2 / (2 * n) - METHOD.z * Math.sqrt((p * (1 - p)) / n + z2 / (4 * n * n))) / (1 + z2 / n))
}

// The decision parameters, for the robustness grid (the tests themselves do not change with them).
export interface Params { q: number; criticalMass: number; priority: number; beforeYears: number }
export const DEFAULT_PARAMS: Params = { q: METHOD.q, criticalMass: METHOD.criticalMass, priority: METHOD.priority, beforeYears: METHOD.beforeYears }
export interface Series { field: string; trait: string; xs: Descriptor[]; carriers: Uint8Array; cuts: number[]; p: number }

// 2. One test per field and sound (the costly part, run once). With nullSeed, the field's albums are first shuffled
// among the release years (a catalogue where years carry no information), to estimate how many rises appear by chance.
export function testSeries(seed = 1, nullSeed?: number): Series[] {
  const random = rng(seed)
  const shuffle = nullSeed === undefined ? undefined : rng(nullSeed)
  const fields = new Map<string, Descriptor[]>()
  for (const d of own) for (const f of fieldsOf(d)) fields.set(f, [...(fields.get(f) ?? []), d])
  const tested: Series[] = []
  for (const [field, list] of fields) {
    const sorted = [...list].sort((a, b) => a.year! - b.year!)
    const ys = sorted.map((d) => d.year!)
    const xs = sorted.slice()
    if (shuffle) for (let i = xs.length - 1; i > 0; i--) {
      const j = Math.floor(shuffle() * (i + 1))
      ;[xs[i], xs[j]] = [xs[j], xs[i]]
    }
    const traits = new Set(xs.flatMap(traitsOf))
    for (const trait of traits) {
      const carriers = Uint8Array.from(xs.map((d) => (presenceOf(d, trait) === 'full' ? 1 : 0)))
      const k = carriers.reduce((n, v) => n + v, 0)
      if (k < METHOD.minCarriers) continue
      const obs = segment(carriers, ys)
      // A series with no change point still counts among the tests (p = 1), so the false discovery rate is controlled
      // over every series with enough carriers, as the method says.
      if (!obs.cuts.length) {
        tested.push({ field, trait, xs, carriers, cuts: [], p: 1 })
        continue
      }
      // The same segmentation gain with the carriers shuffled among the field's albums (years kept).
      let atLeast = 0
      const perm = carriers.slice()
      for (let r = 0; r < METHOD.permutations; r++) {
        for (let i = perm.length - 1; i > 0; i--) {
          const j = Math.floor(random() * (i + 1))
          const tmp = perm[i]
          perm[i] = perm[j]
          perm[j] = tmp
        }
        if (segment(perm, ys).gain >= obs.gain) atLeast++
      }
      tested.push({ field, trait, xs, carriers, cuts: obs.cuts, p: (atLeast + 1) / (METHOD.permutations + 1) })
    }
  }
  return tested
}

// 2 and 3. The rises that pass (Benjamini–Hochberg at q, critical mass) and the albums they spread from.
// Benjamini–Hochberg: the series that pass at false discovery rate q.
export function passing(tested: Series[], q: number): Series[] {
  const order = [...tested].sort((a, b) => a.p - b.p)
  let cut = -1
  order.forEach((s, i) => {
    if (s.p <= (q * (i + 1)) / order.length) cut = i
  })
  return order.slice(0, cut + 1)
}
export function decide(tested: Series[], P: Params = DEFAULT_PARAMS, withPioneers = true): Rise[] {
  const out: Rise[] = []
  for (const s of passing(tested, P.q)) {
    const bounds = [0, ...s.cuts, s.xs.length]
    const count = (a: number, b: number) => {
      let k = 0
      for (let i = a; i < b; i++) k += s.carriers[i]
      return k
    }
    // Each rising segment (a higher share than the segment before) that reaches critical mass is a rise.
    for (let g = 1; g < bounds.length - 1; g++) {
      const [a, m, b] = [bounds[g - 1], bounds[g], bounds[g + 1]]
      const kBefore = count(a, m), kAfter = count(m, b)
      const nBefore = m - a, nAfter = b - m
      if (kAfter / nAfter <= kBefore / nBefore) continue
      if (wilsonLow(kAfter, nAfter) < P.criticalMass) continue // critical mass
      const split = s.xs[m].year!
      out.push({ field: s.field, trait: s.trait, split, before: kBefore / nBefore, after: kAfter / nAfter, nBefore, nAfter, p: s.p, pioneers: withPioneers ? pioneersOf(s.xs.slice(a, b), s.carriers.slice(a, b), split, s.xs, P) : [], popular: withPioneers ? popularOf(s.xs.slice(a, b), s.carriers.slice(a, b), split, P) : undefined })
    }
  }
  return out
}

// 3. The albums a rise spread from. v2: xs and carriers cover the rising segment and the one before it, so the
// candidates and the first 16% are counted within this rise, not over all time; contemporaries come from the field.
function pioneersOf(xs: Descriptor[], carriers: Uint8Array, split: number, field: Descriptor[], P: Params): string[] {
  const full = xs.filter((_, i) => carriers[i])
  if (!full.length) return []
  const cutoffRank = Math.max(1, Math.ceil(P.priority * full.length))
  const lastYear = full[cutoffRank - 1].year!
  // v3: at most followYears before the rise, the window in which the method says an album spreads a sound.
  // v4: no cutoff at the split year (an estimate); earliness is the first 16% of the rise's carriers.
  const early = full.filter((d) => d.year! <= lastYear && d.year! >= split - METHOD.followYears)
  const sim = (a: Descriptor, b: Descriptor) => compareProfiles(albumProfile(a), albumProfile(b)).base
  const mean = (v: number[]) => (v.length ? v.reduce((n, x) => n + x, 0) / v.length : 0)
  const seenArtists = new Set<string>()
  const out: string[] = []
  for (const c of early) {
    const artist = artistOf.get(c.albumId) ?? ''
    if (seenArtists.has(artist)) continue // the same artist's later albums are not credited again
    if (thinBefore(c.year!, P.beforeYears)) continue
    // It drew on an artist that already carried the sound: it names them as an influence, or critics compare them.
    const earlierArtists = new Set(full.filter((d) => d.year! < c.year!).map((d) => foldName(d.artist)))
    if ([...c.influencedBy, ...c.soundsLike].some((n) => earlierArtists.has(foldName(n)))) continue
    const followers = full.filter((d) => d.year! > c.year! && d.year! <= c.year! + METHOD.followYears && artistOf.get(d.albumId) !== artist)
    if (!followers.length) continue
    const mine = mean(followers.map((f) => sim(f, c)))
    const peers = field.filter((d) => d.albumId !== c.albumId && artistOf.get(d.albumId) !== artist && Math.abs(d.year! - c.year!) <= 1)
    const ahead = peers.filter((p) => mean(followers.map((f) => sim(f, p))) >= mine).length
    if (peers.length && ahead / peers.length > METHOD.closerTop) continue
    out.push(c.albumId)
    seenArtists.add(artist)
  }
  return out
}

// v5. The album that made a rise popular: among its early adopters (first 16% of the full carriers, ties by year),
// the one drawn on by the most later carriers of other artists within 10 years (documented links).
function popularOf(xs: Descriptor[], carriers: Uint8Array, split: number, P: Params): string | undefined {
  const full = xs.filter((_, i) => carriers[i])
  if (!full.length) return undefined
  const lastYear = full[Math.max(1, Math.ceil(P.priority * full.length)) - 1].year!
  let best: { id: string; n: number; all: number; year: number } | undefined
  // The same pool as pioneers: also at most 10 years before the rise starts (v3).
  for (const c of full.filter((d) => d.year! <= lastYear && d.year! >= split - METHOD.followYears)) {
    const artist = artistOf.get(c.albumId)
    const n = full.filter((f) => f.year! > c.year! && f.year! <= c.year! + METHOD.followYears && artistOf.get(f.albumId) !== artist && drawsOnOf(f.albumId).some((x) => x.albumId === c.albumId)).length
    if (!n) continue
    const all = influenceOf(c.albumId)?.citedBy.length ?? 0
    if (!best || n > best.n || (n === best.n && (all > best.all || (all === best.all && c.year! < best.year)))) best = { id: c.albumId, n, all, year: c.year! }
  }
  return best?.id
}

// Robustness (method v1 reporting): the share of a parameter grid in which each pioneer credit appears.
export const GRID = { q: [0.05, 0.1, 0.2], beforeYears: [4, 6, 8, 10], criticalMass: [0.1, 0.16, 0.25], priority: [0.1, 0.16, 0.25] }
export function robustness(tested: Series[]): Map<string, number> {
  const seen = new Map<string, number>()
  let runs = 0
  for (const q of GRID.q) for (const beforeYears of GRID.beforeYears) for (const criticalMass of GRID.criticalMass) for (const priority of GRID.priority) {
    runs++
    const keys = new Set(decide(tested, { q, beforeYears, criticalMass, priority }).flatMap((r) => r.pioneers.map((p) => `${r.field}|${r.trait}|${p}`)))
    for (const key of keys) seen.set(key, (seen.get(key) ?? 0) + 1)
  }
  return new Map([...seen].map(([k, n]) => [k, n / runs]))
}

// 1b. Becomes a main sound in the catalogue: the earliest album carrying it in full (a main genre, an instrument or a
// technique). Same tie rule as the first appearance.
export function firstMains(): FirstAppearance[] {
  const best = new Map<string, Descriptor>()
  for (const d of own) for (const t of traitsOf(d)) {
    if (presenceOf(d, t) !== 'full') continue
    const cur = best.get(t)
    if (!cur || d.year! - cur.year! < 0 || (d.year === cur.year && position(d, t) < position(cur, t))) best.set(t, d)
  }
  return [...best].map(([trait, d]) => ({ trait, albumId: d.albumId, year: d.year!, presence: 'full' as Presence, thin: thinBefore(d.year!) }))
}

// Everything the site stores (src/data/story.json, written by scripts/build-findings.ts).
export const ROBUST = 0.8 // the method's threshold: a pioneer credit present in 80% of the grid is "robust"
export const NULL_RUNS = 5
export interface StoredRise { field: string; trait: string; split: number; before: number; after: number; p: number; pioneers: [string, number][]; popular?: string }
export interface Story {
  tested: number; passed: number; q: number; rises: number; withPioneers: number; nullRises: number[]; fdr: number
  first: Record<string, [string, number, Presence, boolean]>; main: Record<string, [string, number, boolean]>; list: StoredRise[]
}
export function buildStory(): Story {
  const tested = testSeries()
  const rises = decide(tested)
  const robust = robustness(tested)
  // Rises found when release years carry no information: an estimate of how many of ours are chance.
  const nullRises = Array.from({ length: NULL_RUNS }, (_, i) => decide(testSeries(1, 100 + i), DEFAULT_PARAMS, false).length)
  const meanNull = nullRises.reduce((a, b) => a + b, 0) / NULL_RUNS
  const round = (x: number) => Math.round(x * 1000) / 1000
  return {
    tested: tested.length, passed: passing(tested, METHOD.q).length, q: METHOD.q, rises: rises.length, withPioneers: rises.filter((r) => r.pioneers.length).length,
    nullRises, fdr: rises.length ? round(Math.min(1, meanNull / rises.length)) : 0,
    first: Object.fromEntries(firstAppearances().map((f) => [f.trait, [f.albumId, f.year, f.presence, f.thin]])),
    main: Object.fromEntries(firstMains().map((f) => [f.trait, [f.albumId, f.year, f.thin]])),
    list: rises.map((r) => ({ field: r.field, trait: r.trait, split: r.split, before: round(r.before), after: round(r.after), p: round(r.p),
      pioneers: r.pioneers.map((a) => [a, round(robust.get(`${r.field}|${r.trait}|${a}`) ?? 0)] as [string, number]), ...(r.popular ? { popular: r.popular } : {}) })),
  }
}

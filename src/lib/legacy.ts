// What an album left behind (owner, Oct 2026: "pop was never the same after Ray of Light").
// The trace: the traits that were new in its field when it came out (genres, production, instruments that the
// field's albums of the previous years seldom had), and how far they spread in the field's later albums.
// The legacy score (0-5) comes from sources (docs/descriptors/legacy/<artist-id>.csv); the trace is the check.
import { DESCRIPTORS, genreLabel, type Descriptor } from './descriptors'
import { albums } from '../data/seed'
import { sceneOf } from '../data/scenes'
import { instrumentLabel } from '../data/instruments'
import { productionLabel } from '../data/production'
import { albumProfile, compareProfiles } from './similar'
import { ARTIST_INFLUENCES } from '../data/artistInfluences'
import { parseCsv } from './csv'

// Legacy from sources: docs/descriptors/legacy/<artist-id>.csv (album_id,legacy,sources), 0-5: how much the album
// changed the music that came after it (best-of-influential lists, critics saying so explicitly).
const legacyFiles = import.meta.glob('../../docs/descriptors/legacy/*.csv', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const LEGACY = new Map<string, { legacy: number; sources: string }>()
for (const text of Object.values(legacyFiles)) {
  const [head, ...rows] = parseCsv(text)
  if (!head) continue
  const at = (r: string[], k: string) => r[head.indexOf(k)]?.trim() ?? ''
  for (const r of rows) if (/^[0-5]$/.test(at(r, 'legacy'))) LEGACY.set(at(r, 'album_id'), { legacy: Number(at(r, 'legacy')), sources: at(r, 'sources') })
}
export const legacyOf = (albumId: string) => LEGACY.get(albumId)

export interface Spread {
  key: string // the trait's id ("g:disco", "i:strings+p:programming")
  trait: string // label
  before: number // share of the field's albums with it, in the 6 years before
  after: number // highest share in a 3-year window within the next 12 years
  when: number // first year of that window
  anywhere: number // share of all other albums with it in the 6 years before, whatever their area
  earlier: number // albums by other artists that had it at any time before, whatever their area
  // The gain with its margin of error: the lowest share after minus the highest share before that the albums we
  // describe allow (Wilson interval, 90%). Few albums, wide margins: the gain shrinks or vanishes; it nears the
  // plain gain as the catalogue grows, so the same rule holds at 1,500 albums and at 15,000.
  sure: number
}
export interface Trace {
  field: string[] // the area compared (the artist's base genres: Pop, Dance)
  // A pioneer, not a trend of its time (owner, Oct 2026: the data can show what the press missed): the album had its
  // spreading traits before most albums of its area did, and the later albums that took them up sound more like it
  // than like the other albums of its time that had them too.
  pioneer: boolean
  // The later albums of the area that took up the spreading traits, and how many of them are documented as linked to
  // this artist: a critic's comparison, an influence they name, or one of this album's producers.
  followers: { linked: number; total: number }
  first: number // share of the area's albums with the album's spreading traits in the 3 years around it that came no earlier
  closer: number // how much more the later adopters resemble this album than its contemporaries with the same traits (0 when the other pioneer tests fail)
  spread: Spread[] // the album's new traits that spread, most first
  lift: number // how far the new sound spread: the gains of the traits that spread, added up
  fieldBefore: number // albums of the area described in the 6 years before (few: the trace says little)
  catalogueBefore: number // albums by other artists described in the 6 years before, whatever their area
  earlierAll: number // albums by other artists described before it, whatever their year and area
}

const BEFORE = 6
const RARE = 0.15 // a trait in fewer than 15% of the field's albums of the previous years is new
const MIN_FIELD = 10 // windows with fewer albums say too little
// Wilson score interval for a share k/n (z = 1.645: 90% two-sided).
const Z = 1.645
const wilson = (p: number, n: number, sign: 1 | -1) => {
  if (!n) return sign < 0 ? 0 : 1
  const z2 = Z * Z
  const mid = p + z2 / (2 * n)
  const half = Z * Math.sqrt((p * (1 - p)) / n + z2 / (4 * n * n))
  return Math.min(1, Math.max(0, (mid + sign * half) / (1 + z2 / n)))
}

const artistOf = new Map(albums.map((a) => [a.id, a.artistId]))
const fieldOf = (d: Descriptor) => new Set(sceneOf(artistOf.get(d.albumId) ?? '')?.genres ?? [])
const traitCache = new Map<string, Set<string>>()
const traitsOf = (d: Descriptor) => {
  let t = traitCache.get(d.albumId)
  if (!t) traitCache.set(d.albumId, (t = new Set([...d.genres.map((g) => `g:${g}`), ...d.production.map((p) => `p:${p}`), ...d.instruments.map((i) => `i:${i}`)])))
  return t
}
const label = (t: string) => {
  const [k, v] = [t.slice(0, 1), t.slice(2)]
  return k === 'g' ? genreLabel(v) : k === 'p' ? productionLabel(v) : instrumentLabel(v)
}

const own = Object.values(DESCRIPTORS).filter((d) => d.year && !['compilation', 'live'].includes(d.type) && d.genres[0] !== 'christmas')
const cache = new Map<string, Trace | null>()

export function traceOf(albumId: string): Trace | null {
  if (!cache.has(albumId)) cache.set(albumId, computeTrace(albumId))
  return cache.get(albumId)!
}

function computeTrace(albumId: string): Trace | null {
  const d = DESCRIPTORS[albumId]
  if (!d?.year) return null
  const field = fieldOf(d)
  if (!field.size) return null
  const artist = artistOf.get(albumId)
  // The field: albums by other artists from the same area (pop for Madonna), whatever their year.
  const peers = own.filter((x) => artistOf.get(x.albumId) !== artist && [...fieldOf(x)].some((g) => field.has(g)))
  const inYears = (from: number, to: number) => peers.filter((x) => x.year! >= from && x.year! <= to)
  const before = inYears(d.year - BEFORE, d.year - 1)
  // Every other artist's albums of those years, whatever their area: a sound new in pop but common in rock was not new.
  const earlierAll = own.filter((x) => artistOf.get(x.albumId) !== artist && x.year! < d.year!)
  const everywhere = earlierAll.filter((x) => x.year! >= d.year! - BEFORE)
  if (before.length < MIN_FIELD) return null
  const mine = traitsOf(d)
  const count = (xs: Descriptor[], t: string) => (xs.length ? xs.filter((x) => traitsOf(x).has(t)).length / xs.length : 0)
  const fresh = [...mine].filter((t) => count(before, t) < RARE)
  const windows = [1, 4, 7, 10].map((k) => ({ from: d.year! + k, xs: inYears(d.year! + k, d.year! + k + 2) })).filter((w) => w.xs.length >= MIN_FIELD)
  if (!fresh.length || !windows.length) return null
  // Each new trait on its own: how common it became in the field's albums after (a trait that spread by at least
  // 10 points counts).
  // Combined traits: two of the album's traits that were each common but rare together before (Ray of Light's strings
  // with electronica). They are written "a+b" and counted on albums that have both.
  // A pair has at least one common trait (a new trait with a common one: Electronica + Strings).
  const list = [...mine]
  const pairs: string[] = []
  for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
    const [a, b] = [list[i], list[j]]
    if (fresh.includes(a) && fresh.includes(b)) continue
    if (a.startsWith('g:') && b.startsWith('g:')) continue // two genres together say little
    const both = (x: Descriptor) => traitsOf(x).has(a) && traitsOf(x).has(b)
    if (before.filter(both).length / before.length < RARE) pairs.push(`${a}+${b}`)
  }
  const hasAll = (x: Descriptor, t: string) => t.split('+').every((u) => traitsOf(x).has(u))
  const share2 = (xs: Descriptor[], t: string) => (xs.length ? xs.filter((x) => hasAll(x, t)).length / xs.length : 0)
  const labelOf = (t: string) => t.split('+').map(label).join(' + ')
  const spread = [...fresh, ...pairs].map((t) => {
    const shares = windows.map((w) => share2(w.xs, t))
    const k = shares.indexOf(Math.max(...shares))
    const b = share2(before, t)
    return { key: t, trait: labelOf(t), before: b, after: shares[k], when: windows[k].from, anywhere: 0, earlier: 0, sure: wilson(shares[k], windows[k].xs.length, -1) - wilson(b, before.length, 1) }
  }).filter((x) => x.after - x.before >= 0.1 && x.sure > 0).sort((x, y) => y.after - y.before - (x.after - x.before))
  // How new each spreading trait was across the whole catalogue (counted only for the traits that spread).
  for (const x of spread) (x.anywhere = share2(everywhere, x.key)), (x.earlier = earlierAll.filter((y) => hasAll(y, x.key)).length)
  // The five strongest spreads make the score, so many small pairs cannot inflate it.
  const lift = spread.slice(0, 5).reduce((n, x) => n + x.after - x.before, 0)
  // Pioneer test, on the traits that spread.
  const keys = [...fresh, ...pairs].filter((t) => spread.some((x) => x.key === t))
  const has = (x: Descriptor) => keys.some((t) => hasAll(x, t))
  const around = inYears(d.year - 1, d.year + 1).filter(has)
  const first = around.length ? around.filter((x) => x.year! >= d.year!).length / around.length : 1
  const peersThen = around.filter((x) => x.year === d.year)
  const adopters = inYears(d.year + 1, d.year + 10).filter(has)
  const sim = (x: Descriptor, y: Descriptor) => compareProfiles(albumProfile(x), albumProfile(y)).base
  const mean = (xs: number[]) => (xs.length ? xs.reduce((n, v) => n + v, 0) / xs.length : 0)
  // The likeness test is the costly part: run it only when the album passes the other tests.
  const candidate = keys.length > 0 && lift >= 0.3 && first >= 0.8 && adopters.length >= MIN_FIELD
  const toMe = candidate ? mean(adopters.map((x) => sim(x, d))) : 0
  const toThem = candidate && peersThen.length ? mean(adopters.map((x) => mean(peersThen.map((y) => sim(x, y))))) : toMe
  const closer = toMe - toThem
  const pioneer = candidate && closer >= 0.05
  const fold = (x: string) => x.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '')
  const me = fold(d.artist)
  const mine2 = new Set(d.producers.map(fold).filter((p) => p !== me))
  const linked = (x: Descriptor) =>
    [...x.influencedBy, ...x.soundsLike].some((n) => fold(n) === me) ||
    x.producers.some((p) => mine2.has(fold(p))) ||
    (ARTIST_INFLUENCES[artistOf.get(x.albumId) ?? '']?.names ?? []).some((n) => fold(n) === me)
  const followers = { linked: adopters.filter(linked).length, total: adopters.length }
  return { field: [...field].map((g) => genreLabel(g)), spread, lift, pioneer, first, closer, followers, fieldBefore: before.length, catalogueBefore: everywhere.length, earlierAll: earlierAll.length }
}

// "Fandome's data shows" (owner, Oct 2026): what our own analysis finds, said by itself and labelled as ours, even
// where no critic has said it. Only where the data can carry it:
// - a pioneer (see Trace);
// - the years before it described well enough: at least 30% as many albums in the 6 years before as in our
//   best-described 6 years (fewer, and a sound can look new only because its earlier records are not described
//   yet). Relative, so it follows the catalogue as it grows;
// - a sound new to the whole catalogue, not only to its area (at most 3% of all earlier albums had it), that spread
//   by at least 12 points even after the margin of error (Spread.sure).
const COVERAGE = 0.3
const NEW_ANYWHERE = 0.03
const MIN_SURE_GAIN = 0.12
const years = own.map((d) => d.year!)
let busiest = 0
for (let y = Math.min(...years); y <= Math.max(...years) + 1; y++) busiest = Math.max(busiest, years.filter((x) => x >= y - BEFORE && x < y).length)
export interface Finding { trace: Trace; spread: Spread }
// The same sound already brought by an earlier album of the artist: that album is the pioneer, not this one.
const findingCache = new Map<string, Finding | null>()
export function findingOf(albumId: string): Finding | null {
  if (!findingCache.has(albumId)) findingCache.set(albumId, computeFinding(albumId))
  return findingCache.get(albumId)!
}
function computeFinding(albumId: string): Finding | null {
  const t = traceOf(albumId)
  const d = DESCRIPTORS[albumId]
  // A remix album reworks songs already out: it cannot be the first to bring a sound.
  if (!t?.pioneer || !d?.year || d.type === 'remix' || t.catalogueBefore < COVERAGE * busiest) return null
  const s = t.spread.find((x) => x.sure >= MIN_SURE_GAIN && x.earlier <= NEW_ANYWHERE * t.earlierAll)
  if (!s) return null
  const artist = artistOf.get(albumId)
  const earlierOwn = own.filter((x) => artistOf.get(x.albumId) === artist && x.year! < d.year!)
  if (earlierOwn.some((x) => findingOf(x.albumId)?.spread.trait === s.trait)) return null
  return { trace: t, spread: s }
}

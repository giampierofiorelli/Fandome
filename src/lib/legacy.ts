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
  trait: string // label
  before: number // share of the field's albums with it, in the 6 years before
  after: number // highest share in a 3-year window within the next 12 years
  when: number // first year of that window
}
export interface Trace {
  field: string[] // the area compared (the artist's base genres: Pop, Dance)
  // A pioneer, not a trend of its time (owner, Oct 2026: the data can show what the press missed): the album had its
  // spreading traits before most albums of its area did, and the later albums that took them up sound more like it
  // than like the other albums of its time that had them too.
  pioneer: boolean
  first: number // share of the area's albums with the album's spreading traits in the 3 years around it that came no earlier
  closer: number // how much more the later adopters resemble this album than its contemporaries with the same traits
  spread: Spread[] // the album's new traits that spread, most first
  lift: number // how far the new sound spread: the gains of the traits that spread, added up
}

const BEFORE = 6
const RARE = 0.15 // a trait in fewer than 15% of the field's albums of the previous years is new
const MIN_FIELD = 10 // windows with fewer albums say too little

const artistOf = new Map(albums.map((a) => [a.id, a.artistId]))
const fieldOf = (d: Descriptor) => new Set(sceneOf(artistOf.get(d.albumId) ?? '')?.genres ?? [])
const traitsOf = (d: Descriptor) => new Set([...d.genres.map((g) => `g:${g}`), ...d.production.map((p) => `p:${p}`), ...d.instruments.map((i) => `i:${i}`)])
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
    return { trait: labelOf(t), before: share2(before, t), after: shares[k], when: windows[k].from }
  }).filter((x) => x.after - x.before >= 0.1).sort((x, y) => y.after - y.before - (x.after - x.before))
  // The five strongest spreads make the score, so many small pairs cannot inflate it.
  const lift = spread.slice(0, 5).reduce((n, x) => n + x.after - x.before, 0)
  // Pioneer test, on the traits that spread.
  const keys = [...fresh, ...pairs].filter((t) => spread.some((x) => x.trait === labelOf(t)))
  const has = (x: Descriptor) => keys.some((t) => hasAll(x, t))
  const around = inYears(d.year - 1, d.year + 1).filter(has)
  const first = around.length ? around.filter((x) => x.year! >= d.year!).length / around.length : 1
  const peersThen = around.filter((x) => x.year === d.year)
  const adopters = inYears(d.year + 1, d.year + 10).filter(has)
  const sim = (x: Descriptor, y: Descriptor) => compareProfiles(albumProfile(x), albumProfile(y)).base
  const mean = (xs: number[]) => (xs.length ? xs.reduce((n, v) => n + v, 0) / xs.length : 0)
  const toMe = mean(adopters.map((x) => sim(x, d)))
  const toThem = peersThen.length ? mean(adopters.map((x) => mean(peersThen.map((y) => sim(x, y))))) : toMe
  const closer = toMe - toThem
  const pioneer = keys.length > 0 && lift >= 0.3 && first >= 0.8 && closer >= 0.05 && adopters.length >= MIN_FIELD
  return { field: [...field].map((g) => genreLabel(g)), spread, lift, pioneer, first, closer }
}

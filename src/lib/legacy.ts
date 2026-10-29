// What an album left behind (owner, Oct 2026: "pop was never the same after Ray of Light").
// The trace: the traits that were new in its field when it came out (genres, production, instruments that the
// field's albums of the previous years seldom had), and how far they spread in the field's later albums.
// The legacy score (0-5) comes from sources (docs/descriptors/legacy/<artist-id>.csv); the trace is the check.
import { DESCRIPTORS, genreLabel, type Descriptor } from './descriptors'
import { albums } from '../data/seed'
import { sceneOf } from '../data/scenes'
import { instrumentLabel } from '../data/instruments'
import { productionLabel } from '../data/production'
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
  const spread = fresh.map((t) => {
    const shares = windows.map((w) => count(w.xs, t))
    const k = shares.indexOf(Math.max(...shares))
    return { trait: label(t), before: count(before, t), after: shares[k], when: windows[k].from }
  }).filter((x) => x.after - x.before >= 0.1).sort((x, y) => y.after - y.before - (x.after - x.before))
  return { field: [...field].map((g) => genreLabel(g)), spread, lift: spread.reduce((n, x) => n + x.after - x.before, 0) }
}

// Periods of a long career, for "If you like this artist" by period (owner, Oct 2026).
// Computed from the album descriptions: the albums in order of release, split where the sound changes.
// A documented name for a period (docs/eras/<artist-id>.csv, from sources) replaces the label by genres.
import { parseCsv } from './csv'
import { DESCRIPTORS, genreLabel, type Descriptor } from './descriptors'
import { albumProfile, compareProfiles } from './similar'

export interface Era {
  from: number
  to: number
  albumIds: string[]
  label: string // "Berlin trilogy" when a source names it, else "Prog, progressive electronic"
  named: boolean
}

// Only long careers: at least 8 described albums of their own over at least 15 years.
const MIN_ALBUMS = 8
const MIN_SPAN = 15
// A period needs three albums, or one album that sounds unlike the records around it (an artist who changed
// with almost every record, like Madonna, gets such records as periods of their own).
const MIN_PERIOD = 3
// Cost of opening a new period: the higher, the fewer periods. Set on Battiato, Madonna, Bowie, U2 and
// Pink Floyd, whose periods critics agree on.
const NEW_PERIOD = 0.25

const files = import.meta.glob('../../docs/eras/*.csv', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const DOCUMENTED = new Map<string, { from: number; to: number; name: string }[]>()
for (const [path, text] of Object.entries(files)) {
  const id = path.split('/').pop()!.replace(/\.csv$/, '')
  const [head, ...rows] = parseCsv(text)
  if (!head) continue
  DOCUMENTED.set(id, rows.map((cells) => Object.fromEntries(head.map((h, i) => [h.trim(), (cells[i] ?? '').trim()]))).filter((r) => r.name).map((r) => ({ from: Number(r.from), to: Number(r.to), name: r.name })))
}

const cache = new Map<string, Era[] | null>()

export function artistEras(artistId: string, albumIds: string[]): Era[] | null {
  const key = `${artistId}:${albumIds.join(',')}`
  if (!cache.has(key)) cache.set(key, computeEras(artistId, albumIds))
  return cache.get(key)!
}

function computeEras(artistId: string, albumIds: string[]): Era[] | null {
  // A holiday record is a side trip, not a period of the career.
  const ds = albumIds.map((id) => DESCRIPTORS[id]).filter((d): d is Descriptor => Boolean(d?.year) && !['compilation', 'live'].includes(d.type) && d.genres[0] !== 'christmas')
  ds.sort((a, b) => a.year! - b.year!)
  const n = ds.length
  if (n < MIN_ALBUMS || ds[n - 1].year! - ds[0].year! < MIN_SPAN) return null
  const documented = DOCUMENTED.get(artistId)
  if (documented?.length) return fromSources(ds, documented)
  // Sound kinship between two records: half the engine's comparison, half the share of all their genres in common
  // (every genre a source names counts the same here, so Madame X's fado and kuduro set it apart from MDNA's EDM
  // even though both open with pop).
  const all = (d: Descriptor) => new Set(d.genres)
  const overlap = (a: Descriptor, b: Descriptor) => {
    const x = all(a), y = all(b)
    let n = 0
    for (const g of x) if (y.has(g)) n++
    return n / (x.size + y.size - n || 1)
  }
  const sim = ds.map((a) => ds.map((b) => (compareProfiles(albumProfile(a), albumProfile(b)).base + overlap(a, b)) / 2))
  // A period's cost: for each album, how far it is from the others in the same period.
  // An album on its own costs a little less than an ordinary album in a period of this artist (one minus the usual
  // similarity between neighbouring records): it stands alone only when it sounds unlike the records around it
  // (Madonna's Madame X, Lady Gaga's Cheek to Cheek).
  const adjacent = ds.slice(1).map((_, k) => sim[k][k + 1]).sort((a, b) => a - b)
  const usual = adjacent[Math.floor(adjacent.length / 2)]
  const cost = (i: number, j: number) => {
    if (i === j) return 0.85 * (1 - usual)
    let c = 0
    for (let x = i; x <= j; x++) {
      let s = 0
      for (let y = i; y <= j; y++) if (y !== x) s += sim[x][y]
      c += 1 - s / (j - i)
    }
    return c
  }
  const allowed = (i: number, j: number) => j - i + 1 >= MIN_PERIOD || i === j
  // The cheapest split into periods (dynamic programming over the album sequence).
  const best: number[] = Array(n + 1).fill(Infinity)
  const cut: number[] = Array(n + 1).fill(0)
  best[0] = 0
  for (let j = 1; j <= n; j++) for (let i = 0; i < j; i++) {
    if (best[i] === Infinity || !allowed(i, j - 1)) continue
    const v = best[i] + cost(i, j - 1) + NEW_PERIOD
    if (v < best[j]) (best[j] = v), (cut[j] = i)
  }
  if (best[n] === Infinity) return null
  const spans: [number, number][] = []
  for (let j = n; j > 0; j = cut[j]) spans.unshift([cut[j], j - 1])
  if (spans.length < 2) return null
  // Genres of each period (share of its albums, main genres first), to name it by what sets it apart.
  const share = spans.map(([i, j]) => {
    const g = new Map<string, number>()
    for (let x = i; x <= j; x++) ds[x].genres.slice(0, 3).forEach((t, k) => g.set(t, (g.get(t) ?? 0) + 1 / (k + 1) / (j - i + 1)))
    return g
  })
  return spans.map(([i, j], e) => {
    const from = ds[i].year!
    const to = ds[j].year!
    const others = (t: string) => share.reduce((n, g, k) => (k === e ? n : n + (g.get(t) ?? 0)), 0) / Math.max(1, share.length - 1)
    const top = [...share[e]].sort((a, b) => b[1] - others(b[0]) - (a[1] - others(a[0])) || b[1] - a[1]).slice(0, 2).map(([g]) => genreLabel(g))
    const byGenre = i === j ? ds[i].title : top.map((g, k) => (k ? g.toLowerCase() : g)).join(', ')
    return { from, to, albumIds: ds.slice(i, j + 1).map((d) => d.albumId), label: byGenre, named: false }
  })
}

// Periods documented by sources (docs/eras/<artist-id>.csv) give both the name and the years. An album outside
// them joins the period before it (or the first one).
function fromSources(ds: Descriptor[], periods: { from: number; to: number; name: string }[]): Era[] | null {
  const sorted = [...periods].sort((a, b) => a.from - b.from)
  const groups = sorted.map(() => [] as Descriptor[])
  for (const d of ds) {
    let k = sorted.findIndex((p) => d.year! >= p.from && d.year! <= p.to)
    if (k < 0) k = Math.max(0, sorted.filter((p) => p.from <= d.year!).length - 1)
    groups[k].push(d)
  }
  const eras = sorted.flatMap((p, k) => (groups[k].length ? [{ from: groups[k][0].year!, to: groups[k][groups[k].length - 1].year!, albumIds: groups[k].map((d) => d.albumId), label: p.name, named: true }] : []))
  return eras.length >= 2 ? eras : null
}

export const eraYears = (e: Era) => (e.from === e.to ? `${e.from}` : `${e.from}–${String(e.to).slice(-2)}`)

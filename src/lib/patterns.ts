// Patterns in music history that our data shows (owner, Oct 2026; research in docs/research/influence-research.md).
// Three, each the same for every album and genre:
// - recognised late ("sleeping beauties", van Raan 2004; Ke et al. 2015): albums few drew on in their first ten
//   years and many did fifteen or more years later;
// - sounds that came back (revivals, Reynolds 2011): a genre that peaked, fell to half or less, and rose again,
//   carried mostly by artists who started after its first peak; the gap is measured, not assumed;
// - from niche to mainstream: how many years a genre took from 10% of the less commercial albums (reception
//   mainstream 0-2) to 10% of the most commercial ones (4-5).
// They read the catalogue as described so far: shares follow which artists we have described, and grow surer as it
// grows.
import { albums } from '../data/seed'
import { DESCRIPTORS, genreLabel } from './descriptors'
import { influenceOf } from './influence'

const own = Object.values(DESCRIPTORS).filter((d) => d.year && !['compilation', 'live', 'remix'].includes(d.type) && d.genres[0] !== 'christmas')
const artistOf = new Map(albums.map((a) => [a.id, a.artistId]))
const median = (xs: number[]) => [...xs].sort((a, b) => a - b)[Math.floor(xs.length / 2)]

export interface Late { albumId: string; n: number; early: number; medianLag: number }
const LATE_MIN = 6
export function lateRecognition(albumId: string): Late | null {
  const d = DESCRIPTORS[albumId]
  const now = Math.max(...own.map((x) => x.year!))
  if (!d?.year || d.year > now - 20) return null
  // Only what artists and critics say (a shared producer is not recognition).
  const cites = (influenceOf(albumId)?.citedBy ?? []).filter((c) => !['producer', 'artist'].includes(c.how))
  if (cites.length < LATE_MIN) return null
  const lags = cites.map((c) => DESCRIPTORS[c.albumId].year! - d.year!)
  const early = lags.filter((l) => l <= 10).length
  const later = lags.filter((l) => l >= 15).length
  return early <= 1 && later / lags.length >= 0.7 ? { albumId, n: lags.length, early, medianLag: median(lags) } : null
}

// 3-year windows over the years we describe well enough (30+ albums in the window).
const STEP = 3
const MIN_WINDOW = 30
const first = Math.min(...own.map((d) => d.year!))
const last = Math.max(...own.map((d) => d.year!))
const windows: { from: number; xs: typeof own }[] = []
for (let y = first; y + STEP - 1 <= last; y += STEP) {
  const xs = own.filter((d) => d.year! >= y && d.year! < y + STEP)
  if (xs.length >= MIN_WINDOW) windows.push({ from: y, xs })
}
const genres = [...new Set(own.flatMap((d) => d.genres))]
const shareOf = (xs: typeof own, g: string) => xs.filter((d) => d.genres.includes(g)).length / xs.length

export interface Revival { genre: string; label: string; peak: [number, number]; low: [number, number]; back: [number, number]; gap: number; newArtists: number }
export function revivals(): Revival[] {
  const debut = new Map<string, number>()
  for (const d of own) {
    const a = artistOf.get(d.albumId)!
    debut.set(a, Math.min(debut.get(a) ?? Infinity, d.year!))
  }
  const out: Revival[] = []
  for (const g of genres) {
    const sh = windows.map((w) => shareOf(w.xs, g))
    let best: (Revival & { rise: number }) | null = null
    for (let i = 0; i < sh.length; i++) for (let j = i + 2; j < sh.length; j++) for (let k = j + 1; k < sh.length; k++) {
      const [a, b, c] = [sh[i], sh[j], sh[k]]
      if (!(a >= 0.08 && b <= a / 2 && c >= Math.max(0.08, 2 * b) && c - b >= 0.05)) continue
      const back = windows[k].xs.filter((d) => d.genres.includes(g))
      const newArtists = back.filter((d) => debut.get(artistOf.get(d.albumId)!)! >= windows[i].from + STEP).length / back.length
      if (newArtists < 0.6) continue
      if (!best || c - b > best.rise) best = { genre: g, label: genreLabel(g), peak: [windows[i].from, a], low: [windows[j].from, b], back: [windows[k].from, c], gap: windows[k].from - windows[i].from, newArtists, rise: c - b }
    }
    if (best) {
      const { rise: _, ...r } = best
      out.push(r)
    }
  }
  return out.sort((x, y) => y.back[1] - y.low[1] - (x.back[1] - x.low[1]))
}

export interface NicheLag { genre: string; label: string; niche: number; mainstream: number; lag: number }
export function nicheToMainstream(): NicheLag[] {
  const reach = (g: string, pick: (m: number) => boolean) =>
    windows.find((w) => {
      const xs = w.xs.filter((d) => d.mainstream !== undefined && pick(d.mainstream))
      return xs.length >= 15 && shareOf(xs, g) >= 0.1
    })?.from
  const out: NicheLag[] = []
  for (const g of genres) {
    const niche = reach(g, (m) => m <= 2)
    const main = reach(g, (m) => m >= 4)
    // Already there in the first years we describe well: we cannot tell when it started.
    if (niche === undefined || main === undefined || main < niche || niche === windows[0]?.from) continue
    out.push({ genre: g, label: genreLabel(g), niche, mainstream: main, lag: main - niche })
  }
  return out.sort((x, y) => x.niche - y.niche)
}
export const medianOf = median

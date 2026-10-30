// "Fandome's data shows": the findings computed at build time by scripts/build-findings.ts (findingOf in legacy.ts
// over the whole catalogue takes seconds, too slow for a page).
import data from '../data/findings.json'
import influence from '../data/influence.json'
import roots from '../data/roots.json'

export interface StoredFinding { albumId: string; year: number; trait: string; before: number; after: number; when: number; field: string[] }
export const FINDINGS: StoredFinding[] = data.findings
export const DESCRIBED_ALBUMS: number = data.described
export interface StoredLate { albumId: string; n: number; early: number; medianLag: number }
export interface StoredRevival { genre: string; label: string; peak: number[]; low: number[]; back: number[]; gap: number; newArtists: number }
export interface StoredNiche { genre: string; label: string; niche: number; mainstream: number; lag: number }
export const LATE: StoredLate[] = data.late
export const REVIVALS: StoredRevival[] = data.revivals
export const NICHE: StoredNiche[] = data.niche
const lateByAlbum = new Map(LATE.map((l) => [l.albumId, l]))
export const storedLate = (albumId: string) => lateByAlbum.get(albumId)
export const medianOf = (xs: number[]) => [...xs].sort((a, b) => a - b)[Math.floor(xs.length / 2)]
const byAlbum = new Map(FINDINGS.map((f) => [f.albumId, f]))
export const storedFinding = (albumId: string) => byAlbum.get(albumId)

export interface StoredInfluence { n: number; top: [string, string][]; pct: number; dis?: number }
const INFLUENCE = influence as unknown as Record<string, StoredInfluence>
export const storedInfluence = (albumId: string): StoredInfluence | undefined => INFLUENCE[albumId]

// Roots: what an album clearly draws on (strongest first), and the way back from it, one strongest step at a time,
// never through the same album twice.
const ROOTS = roots as unknown as Record<string, [string, string][]>
export const storedRoots = (albumId: string): [string, string][] => ROOTS[albumId] ?? []
export function rootsPath(albumId: string, steps = 4): { from: string; to: string; how: string }[] {
  const path: { from: string; to: string; how: string }[] = []
  const seen = new Set([albumId])
  let at = albumId
  for (let i = 0; i < steps; i++) {
    const next = storedRoots(at).find(([id]) => !seen.has(id))
    if (!next) break
    path.push({ from: at, to: next[0], how: next[1] })
    seen.add(next[0])
    at = next[0]
  }
  return path
}

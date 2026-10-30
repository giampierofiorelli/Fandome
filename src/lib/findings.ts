// "Fandome's data shows": the findings computed at build time by scripts/build-findings.ts (findingOf in legacy.ts
// over the whole catalogue takes seconds, too slow for a page).
import data from '../data/findings.json'
import influence from '../data/influence.json'

export interface StoredFinding { albumId: string; year: number; trait: string; before: number; after: number; when: number; field: string[] }
export const FINDINGS: StoredFinding[] = data.findings
export const DESCRIBED_ALBUMS: number = data.described
const byAlbum = new Map(FINDINGS.map((f) => [f.albumId, f]))
export const storedFinding = (albumId: string) => byAlbum.get(albumId)

export interface StoredInfluence { n: number; top: [string, string][]; pct: number; dis?: number }
const INFLUENCE = influence as unknown as Record<string, StoredInfluence>
export const storedInfluence = (albumId: string): StoredInfluence | undefined => INFLUENCE[albumId]

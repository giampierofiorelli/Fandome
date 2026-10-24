// Album descriptors researched per artist (docs/descriptors/*.csv, format in docs/album-descriptors-guide.md).
// Bundled at build time. Empty cells mean "unknown" and are kept out of every comparison.
import { parseCsv } from './csv'
import { GENRE_LABELS, type Genre } from '../data/scenes'

export const SCALES = ['energy', 'electronic', 'mood', 'theatrical', 'experimental', 'polish', 'tempo', 'groove'] as const
export type Scale = (typeof SCALES)[number]

export interface Descriptor {
  albumId: string
  artist: string
  title: string
  type: string
  genres: string[] // in order of importance
  scales: Partial<Record<Scale, number>>
  voice: string[]
  lyrics: string[]
  language: string[]
  scene: string
  producers: string[]
  soundsLike: string[]
  influencedBy: string[]
  landmark: boolean
  confidence: 'high' | 'medium' | 'low'
  status: 'draft' | 'reviewed'
  notes: string
}

const list = (s: string) => s.split('|').map((x) => x.trim()).filter(Boolean)

export function parseDescriptors(text: string): Descriptor[] {
  const [head, ...rows] = parseCsv(text)
  if (!head) return []
  return rows.map((cells) => {
    const r = Object.fromEntries(head.map((h, i) => [h.trim(), (cells[i] ?? '').trim()]))
    const scales: Partial<Record<Scale, number>> = {}
    for (const s of SCALES) if (r[s] !== '') scales[s] = Number(r[s])
    return {
      albumId: r.album_id,
      artist: r.artist,
      title: r.title,
      type: r.type,
      genres: list(r.genres),
      scales,
      voice: list(r.voice),
      lyrics: list(r.lyrics),
      language: list(r.language),
      scene: r.scene,
      producers: list(r.producers),
      soundsLike: list(r.sounds_like),
      influencedBy: list(r.influenced_by),
      landmark: r.landmark === '1',
      confidence: (r.confidence || 'low') as Descriptor['confidence'],
      status: (r.status || 'draft') as Descriptor['status'],
      notes: r.notes,
    }
  })
}

const files = import.meta.glob('../../docs/descriptors/*.csv', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

export const DESCRIPTORS: Record<string, Descriptor> = Object.fromEntries(
  Object.values(files)
    .flatMap(parseDescriptors)
    .map((d) => [d.albumId, d]),
)

export const descriptorOf = (albumId?: string): Descriptor | undefined => (albumId ? DESCRIPTORS[albumId] : undefined)

export const genreLabel = (g: string) => GENRE_LABELS[g as Genre] ?? g

const TYPE_LABELS: Record<string, string> = { studio: 'Album', ep: 'EP', mixtape: 'Mixtape', soundtrack: 'Soundtrack', live: 'Live album', compilation: 'Compilation', remix: 'Remix album' }
export const releaseLabel = (albumId?: string) => TYPE_LABELS[descriptorOf(albumId)?.type ?? 'studio'] ?? 'Album'

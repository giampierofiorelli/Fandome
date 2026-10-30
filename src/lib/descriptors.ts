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
  year?: number
  type: string
  genres: string[] // in order of importance
  scales: Partial<Record<Scale, number>>
  voice: string[]
  instruments: string[] // main first
  production: string[] // vocal treatment, techniques, machines, software; main first
  lyrics: string[]
  language: string[]
  scene: string
  producers: string[]
  soundsLike: string[]
  influencedBy: string[]
  // Records a source names, written "Artist (Album)" in sounds_like or influenced_by: the link leads to that album.
  namedAlbums: { artist: string; title: string }[]
  // Links documented on some songs only, written "Pink Floyd [1/10]" (1 song of 10): they weigh that share.
  parts: { soundsLike: Record<string, Part>; influencedBy: Record<string, Part> }
  landmark: boolean
  importance?: number // 0-5: how much the album counts in the artist's career (reception file)
  acclaim?: number // 0-5: how highly critics rate it today, at release or later (reception file)
  mainstream?: number // 0-5: how commercial the record is in conception and positioning (reception file)
  confidence: 'high' | 'medium' | 'low'
  status: 'draft' | 'reviewed'
  notes: string
}

export interface Part { songs: number; of: number }
const list = (s: string) => s.split('|').map((x) => x.trim()).filter(Boolean)
// "Pink Floyd [1/10]": the link holds for 1 song of the album's 10 (owner, Oct 2026: a link found on one song
// counts only for its share of the record).
const PART = /\s*\[(\d+)\s*\/\s*(\d+)\]\s*$/
const bare = (x: string) => x.replace(PART, '')
// "Mina (Il cielo in una stanza)": the artist, plus the record the source names.
const WORK = /^(.+?)\s*\((.+)\)$/
const nameOf = (x: string) => bare(x).match(WORK)?.[1] ?? bare(x)
const names = (s: string) => list(s).map(nameOf)
// Only a record named for the whole album leads to that record (a link on one song is too little for that).
const works = (...cols: string[]) => cols.flatMap(list).flatMap((x) => {
  if (PART.test(x)) return []
  const m = x.match(WORK)
  return m ? [{ artist: m[1], title: m[2] }] : []
})
// A name also linked for the whole album ("Madonna" next to "Madonna (Confessions on a Dance Floor) [1/15]") keeps
// its full weight.
const parts = (s: string): Record<string, Part> => {
  const whole = new Set(list(s).filter((x) => !PART.test(x)).map(nameOf))
  return Object.fromEntries(list(s).flatMap((x) => {
    const m = x.match(PART)
    return m && Number(m[2]) > 0 && !whole.has(nameOf(x)) ? [[nameOf(x), { songs: Number(m[1]), of: Number(m[2]) }]] : []
  }))
}

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
      year: /^\d{4}$/.test(r.year) ? Number(r.year) : undefined,
      type: r.type,
      genres: list(r.genres),
      scales,
      voice: list(r.voice),
      instruments: list(r.instruments ?? ''),
      production: list(r.production ?? ''),
      lyrics: list(r.lyrics),
      language: list(r.language),
      scene: r.scene,
      producers: list(r.producers),
      soundsLike: names(r.sounds_like),
      influencedBy: names(r.influenced_by),
      namedAlbums: works(r.sounds_like, r.influenced_by),
      parts: { soundsLike: parts(r.sounds_like), influencedBy: parts(r.influenced_by) },
      landmark: r.landmark === '1',
      confidence: (r.confidence || 'low') as Descriptor['confidence'],
      status: (r.status || 'draft') as Descriptor['status'],
      notes: r.notes,
    }
  })
}

const files = import.meta.glob('../../docs/descriptors/*.csv', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

// Reception (docs/descriptors/reception/<artist-id>.csv): album_id,importance,acclaim,mainstream,sources.
const receptionFiles = import.meta.glob('../../docs/descriptors/reception/*.csv', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const RECEPTION = new Map<string, { importance?: number; acclaim?: number; mainstream?: number }>()
for (const text of Object.values(receptionFiles)) {
  const [head, ...rows] = parseCsv(text)
  if (!head) continue
  const at = (r: string[], k: string) => r[head.indexOf(k)]?.trim() ?? ''
  for (const r of rows) {
    const num = (k: string) => (/^[0-5]$/.test(at(r, k)) ? Number(at(r, k)) : undefined)
    if (at(r, 'album_id')) RECEPTION.set(at(r, 'album_id'), { importance: num('importance'), acclaim: num('acclaim'), mainstream: num('mainstream') })
  }
}

export const DESCRIPTORS: Record<string, Descriptor> = Object.fromEntries(
  Object.values(files)
    .flatMap(parseDescriptors)
    .map((d) => [d.albumId, { ...d, ...RECEPTION.get(d.albumId) }]),
)

export const descriptorOf = (albumId?: string): Descriptor | undefined => (albumId ? DESCRIPTORS[albumId] : undefined)

export const genreLabel = (g: string) => GENRE_LABELS[g as Genre] ?? g

const TYPE_LABELS: Record<string, string> = { studio: 'Album', ep: 'EP', mixtape: 'Mixtape', soundtrack: 'Soundtrack', live: 'Live album', compilation: 'Compilation', remix: 'Remix album', single: 'Single' }
export const releaseLabel = (albumId?: string) => TYPE_LABELS[descriptorOf(albumId)?.type ?? 'studio'] ?? 'Album'

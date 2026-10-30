// Borrowings (owner, Oct 2026): a piece an album samples, quotes, covers or adapts ("riprende"). It is not an
// influence (the artist did not say it shaped their sound, and a critic did not hear a likeness): it is a documented
// musical link of its own, with a lower weight. docs/descriptors/borrowings/<artist-id>.csv:
// album_id,source,kind,songs,sources
// - source: "Artist (Work)" when the record or work is known, else "Artist";
// - kind: sample, interpolation, quotation, cover, arrangement, adaptation, variations;
// - songs: "1/15" when the borrowing is on 1 song of 15 (empty: the whole album is built on it).
import { parseCsv } from './csv'
import { albums, artists } from '../data/seed'
import { foldName } from './similar'

export const BORROWING_KINDS = ['sample', 'interpolation', 'quotation', 'cover', 'arrangement', 'adaptation', 'variations'] as const
export type BorrowingKind = (typeof BORROWING_KINDS)[number]

export interface Borrowing {
  albumId: string
  artist: string
  title?: string
  kind: BorrowingKind
  part?: { songs: number; of: number }
  sources: string
}

const files = import.meta.glob('../../docs/descriptors/borrowings/*.csv', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

const WORK = /^(.+?)\s*\((.+)\)$/

export function parseBorrowings(text: string): Borrowing[] {
  const [head, ...rows] = parseCsv(text)
  if (!head) return []
  return rows.flatMap((cells) => {
    const r = Object.fromEntries(head.map((h, i) => [h.trim(), (cells[i] ?? '').trim()]))
    if (!r.album_id || !r.source) return []
    const m = r.source.match(WORK)
    const songs = r.songs?.match(/^(\d+)\s*\/\s*(\d+)$/)
    return [{
      albumId: r.album_id,
      artist: m ? m[1] : r.source,
      title: m ? m[2] : undefined,
      kind: r.kind as BorrowingKind,
      part: songs && Number(songs[2]) > 0 ? { songs: Number(songs[1]), of: Number(songs[2]) } : undefined,
      sources: r.sources ?? '',
    }]
  })
}

export const BORROWINGS: Borrowing[] = Object.values(files).flatMap(parseBorrowings)
const byAlbum = new Map<string, Borrowing[]>()
for (const b of BORROWINGS) byAlbum.set(b.albumId, [...(byAlbum.get(b.albumId) ?? []), b])
export const borrowingsOf = (albumId: string) => byAlbum.get(albumId) ?? []

// The record or work a borrowing names, when it is in the catalogue.
const artistByName = new Map(artists.map((a) => [foldName(a.name), a.id]))
export function borrowedAlbum(b: Borrowing) {
  const artistId = artistByName.get(foldName(b.artist))
  if (!artistId || !b.title) return undefined
  return albums.find((a) => a.artistId === artistId && foldName(a.title) === foldName(b.title!))
}
// The albums that borrow from this one.
export const borrowedBy = (albumId: string) => BORROWINGS.filter((b) => borrowedAlbum(b)?.id === albumId)

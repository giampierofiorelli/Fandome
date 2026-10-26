import { describe, expect, it } from 'vitest'
import judged from '../../docs/similarity-judgments.csv?raw'
import { parseCsv } from './csv'
import { DESCRIPTORS } from './descriptors'
import { albums, artists } from '../data/seed'
import { compareAlbums, similarAlbums, similarArtists } from './similar'

// Human judgments as ground truth (as in MIREX music-similarity evaluations): the engine is measured
// on all judged pairs together, not tuned case by case. Add new pairs to docs/similarity-judgments.csv.
const [head, ...rows] = parseCsv(judged)
const all = rows.filter((r) => r.length >= 3).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i]])) as Record<string, string>)
// Rows with `artist:<id>` on both sides judge artist pages ("If you like …") instead of album pages.
const isArtist = (p: Record<string, string>) => p.album_a.startsWith('artist:')
const pairs = all.filter((p) => !isArtist(p))
const score = (p: Record<string, string>) => compareAlbums(DESCRIPTORS[p.album_a], DESCRIPTORS[p.album_b]).score

describe('owner-judged album pairs', () => {
  const good = pairs.filter((p) => p.judgment === 'good').map(score)
  const bad = pairs.filter((p) => p.judgment === 'bad')

  it('ranks good pairs above bad ones (pairwise agreement)', () => {
    let agree = 0
    for (const g of good) for (const b of bad.map(score)) agree += g > b ? 1 : 0
    expect(agree / (good.length * bad.length)).toBeGreaterThanOrEqual(0.8)
  })

  it('never suggests a pair judged bad', () => {
    for (const p of bad) expect(similarAlbums(p.album_a).map((s) => s.albumId)).not.toContain(p.album_b)
  })
})

describe('owner-judged artist pairs', () => {
  const of = (id: string) => albums.filter((a) => a.artistId === id || (a.withArtists ?? []).includes(id)).map((a) => a.id)
  const ids = artists.map((a) => a.id)
  const list = (id: string) => similarArtists(id, of, ids).map((s) => s.artistId)
  const judged = all.filter(isArtist).map((p) => ({ judgment: p.judgment, a: p.album_a.slice(7), b: p.album_b.slice(7) }))

  it('never suggests an artist judged bad, always suggests one judged good', () => {
    for (const p of judged.filter((p) => p.judgment === 'bad')) expect(list(p.a)).not.toContain(p.b)
    for (const p of judged.filter((p) => p.judgment === 'good')) expect(list(p.a)).toContain(p.b)
  })
})

import { describe, expect, it } from 'vitest'
import judged from '../../docs/similarity-judgments.csv?raw'
import { parseCsv } from './csv'
import { DESCRIPTORS } from './descriptors'
import { compareAlbums, similarAlbums } from './similar'

// Human judgments as ground truth (as in MIREX music-similarity evaluations): the engine is measured
// on all judged pairs together, not tuned case by case. Add new pairs to docs/similarity-judgments.csv.
const [head, ...rows] = parseCsv(judged)
const pairs = rows.filter((r) => r.length >= 3).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i]])) as Record<string, string>)
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

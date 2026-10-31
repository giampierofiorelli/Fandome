// Rules of the story of a sound (method v3, docs/research/findings-method.md), checked over the whole stored result:
// no album is named, so the tests hold whatever the catalogue becomes.
import { describe, expect, it } from 'vitest'
import story from '../data/story.json'
import { DESCRIPTORS } from './descriptors'
import { drawsOnOf } from './influence'
import { albums } from '../data/seed'
import { firstAppearances, firstMains, METHOD, presenceOf, thinBefore, type Story } from './soundStory'

const S = story as unknown as Story
const artistOf = new Map(albums.map((a) => [a.id, a.artistId]))

describe('story of a sound (src/data/story.json)', () => {
  it('first appearances and main sounds are stored up to date (npm run findings)', () => {
    expect(Object.fromEntries(firstAppearances().map((f) => [f.trait, [f.albumId, f.year, f.presence, f.thin]]))).toEqual(S.first)
    expect(Object.fromEntries(firstMains().map((f) => [f.trait, [f.albumId, f.year, f.thin]]))).toEqual(S.main)
  })

  it('a sound never becomes main before it first appears', () => {
    for (const [t, [, year]] of Object.entries(S.main)) expect(S.first[t][1]).toBeLessThanOrEqual(year)
  })

  it('every rise passes Benjamini–Hochberg at q over all tested series, and rises', () => {
    expect(new Set(S.list.map((r) => `${r.field}|${r.trait}`)).size).toBeLessThanOrEqual(S.passed)
    for (const r of S.list) expect(r.p).toBeLessThanOrEqual((S.q * S.passed) / S.tested + 1e-9)
    for (const r of S.list) expect(r.after).toBeGreaterThan(r.before)
  })

  it('pioneers carry the sound in full, start no more than 10 years before the rise, and on a documented base', () => {
    for (const r of S.list) for (const [id, share] of r.pioneers) {
      const d = DESCRIPTORS[id]
      expect(presenceOf(d, r.trait)).toBe('full')
      expect(d.year!).toBeGreaterThanOrEqual(r.split - METHOD.followYears)
      expect(thinBefore(d.year!)).toBe(false)
      expect(share).toBeGreaterThan(0)
      expect(share).toBeLessThanOrEqual(1)
    }
  })

  it('the album that made a rise popular carries the sound, is early, and later albums of the rise draw on it', () => {
    for (const r of S.list) if (r.popular) {
      const d = DESCRIPTORS[r.popular]
      expect(presenceOf(d, r.trait)).toBe('full')
      expect(d.year!).toBeGreaterThanOrEqual(r.split - METHOD.followYears)
      const artist = artistOf.get(r.popular)
      const drawn = Object.values(DESCRIPTORS).some((f) => f.year! > d.year! && f.year! <= d.year! + METHOD.followYears && artistOf.get(f.albumId) !== artist && presenceOf(f, r.trait) === 'full' && drawsOnOf(f.albumId).some((x) => x.albumId === r.popular))
      expect(drawn).toBe(true)
    }
  })

  it('reports the false discovery estimate from shuffled catalogues', () => {
    expect(S.nullRises.length).toBeGreaterThan(0)
    expect(S.fdr).toBeGreaterThanOrEqual(0)
    expect(S.fdr).toBeLessThanOrEqual(1)
  })
})

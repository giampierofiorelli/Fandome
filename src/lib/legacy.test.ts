import { describe, expect, it } from 'vitest'
import { busiestWindow, COVERAGE, findingOf, MIN_SURE_GAIN, NEW_ANYWHERE } from './legacy'
import { DESCRIPTORS } from './descriptors'

// The rules of "Fandome's data shows" (owner, Oct 2026): the tests check that every finding follows them, over the
// whole catalogue, and never require a given album to come out. What the press says is a comparison (the Findings
// page marks "Critics agree" or "Our finding"), not a target: when the data disagrees and no error is found, the
// data stands (CLAUDE.md, "Trust the data").
const ids = Object.keys(DESCRIPTORS)
const findings = ids.flatMap((id) => {
  const f = findingOf(id)
  return f ? [{ id, ...f }] : []
})
const MAIN = 3

describe("Fandome's data shows: every finding follows the rules", () => {
  it('finds something, so the rules are not empty', () => {
    expect(findings.length).toBeGreaterThan(0)
  })

  it('credits only a sound the album carries in full: a main genre (first three), an instrument or a technique', () => {
    for (const f of findings) {
      const d = DESCRIPTORS[f.id]
      for (const part of f.spread.key.split('+')) {
        const [k, v] = [part.slice(0, 1), part.slice(2)]
        const carried = k === 'g' ? d.genres.slice(0, MAIN).includes(v) : k === 'p' ? d.production.includes(v) : d.instruments.includes(v)
        expect(carried, `${f.id} ${part}`).toBe(true)
      }
    }
  })

  it('credits a sound new to the whole catalogue, that spread beyond the margin of error', () => {
    for (const f of findings) {
      expect(f.spread.earlier, f.id).toBeLessThanOrEqual(NEW_ANYWHERE * f.trace.earlierAll)
      expect(f.spread.sure, f.id).toBeGreaterThanOrEqual(MIN_SURE_GAIN)
      expect(f.trace.pioneer, f.id).toBe(true)
      expect(f.trace.first, f.id).toBeGreaterThanOrEqual(0.8)
    }
  })

  it('says nothing where the years before are described too thinly to tell what was new', () => {
    for (const f of findings) expect(f.trace.catalogueBefore, f.id).toBeGreaterThanOrEqual(COVERAGE * busiestWindow())
  })

  it('credits the first album of an artist that brought the sound, not the ones after', () => {
    for (const f of findings) {
      const d = DESCRIPTORS[f.id]
      const earlierOwn = findings.filter((g) => DESCRIPTORS[g.id].artist === d.artist && DESCRIPTORS[g.id].year! < d.year!)
      expect(earlierOwn.some((g) => g.spread.trait === f.spread.trait), f.id).toBe(false)
    }
  })

  it('never credits a remix album', () => {
    for (const f of findings) expect(DESCRIPTORS[f.id].type, f.id).not.toBe('remix')
  })
})

describe('stored findings (src/data/findings.json)', () => {
  it('match the data: run `npm run findings` after importing descriptors', async () => {
    const { FINDINGS } = await import('./findings')
    const { albums } = await import('../data/seed')
    const now = albums.filter((a) => findingOf(a.id)).map((a) => a.id).sort()
    expect(FINDINGS.map((f) => f.albumId).sort()).toEqual(now)
  }, 120_000)
})

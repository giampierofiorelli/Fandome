import { describe, expect, it } from 'vitest'
import { evaluate } from './recQuality'

// Minimum quality for the suggestion engine: the build fails if a change makes it worse.
describe('suggestion quality', () => {
  const q = evaluate()
  it('reaches the long tail, not only a few hits', () => {
    expect(q.coverage).toBeGreaterThanOrEqual(0.7)
    // Almost every artist is suggested somewhere. Not all: the first artist of a style the catalogue lacks
    // (as Enya was before Enigma) rightly gets no match until a neighbour is described.
    expect(q.artistCoverage).toBeGreaterThanOrEqual(0.95)
    expect(q.topShare).toBeLessThanOrEqual(0.15)
    // An empty list is allowed (no suggestion beats a bad one). Empty lists come from catalogue gaps
    // (no described album of another artist is close: early Moroder, Trentemøller's shoegaze, Christmas
    // albums…), so this only guards against a bug that empties lists wholesale.
    expect(q.empty / q.albums).toBeLessThanOrEqual(0.15)
  })
  it('keeps lists varied and crosses countries', () => {
    expect(q.diversity).toBeGreaterThanOrEqual(0.5)
    // The overall cross-country share (q.novelty) mostly measures the catalogue mix: every US/UK artist added
    // lowers it with no engine change (36% → 18% from 98 to 149 releases). What the owner's rule asks is that
    // fans of global-market albums are also led to local scenes: that is what we check, per list. The share of
    // local albums among all their suggestions (q.globalToLocal) also moves with the mix: it fell from 20% to 19.8%
    // when 60 landmark US/UK albums were added (Oct 2026) while 86% of those lists still led to a local scene.
    expect(q.globalListsWithLocal).toBeGreaterThanOrEqual(0.75)
  })
  it('always says why', () => {
    expect(q.explained).toBe(1)
  })
})

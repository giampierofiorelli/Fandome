import { describe, expect, it } from 'vitest'
import { evaluate } from './recQuality'

// Minimum quality for the suggestion engine: the build fails if a change makes it worse.
describe('suggestion quality', () => {
  const q = evaluate()
  it('reaches the long tail, not only a few hits', () => {
    expect(q.coverage).toBeGreaterThanOrEqual(0.7)
    // Almost every artist is suggested somewhere. Not all: the first artist of a style the catalogue lacks
    // (Enya, the only Celtic/new age artist so far) rightly gets no match until a neighbour is described.
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
    // fans of global-market albums are also led to local scenes: that is what we check.
    expect(q.globalToLocal).toBeGreaterThanOrEqual(0.2)
  })
  it('always says why', () => {
    expect(q.explained).toBe(1)
  })
})

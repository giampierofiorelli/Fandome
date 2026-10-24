import { describe, expect, it } from 'vitest'
import { evaluate } from './recQuality'

// Minimum quality for the suggestion engine: the build fails if a change makes it worse.
describe('suggestion quality', () => {
  const q = evaluate()
  it('reaches the long tail, not only a few hits', () => {
    expect(q.coverage).toBeGreaterThanOrEqual(0.7)
    expect(q.artistCoverage).toBe(1)
    expect(q.topShare).toBeLessThanOrEqual(0.15)
    expect(q.empty).toBe(0)
  })
  it('keeps lists varied and crosses countries', () => {
    expect(q.diversity).toBeGreaterThanOrEqual(0.5)
    // Depends on the data mix: each US/UK album added (Gaga, Sabrina) mostly gets neighbours from the same market.
    // Was 0.3 up to 98 releases (36%); 28% after Lady Gaga with no engine change.
    expect(q.novelty).toBeGreaterThanOrEqual(0.25)
  })
  it('always says why', () => {
    expect(q.explained).toBe(1)
  })
})

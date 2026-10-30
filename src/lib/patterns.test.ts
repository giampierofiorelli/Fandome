import { describe, expect, it } from 'vitest'
import { lateRecognition, nicheToMainstream, revivals } from './patterns'
import { LATE, NICHE, REVIVALS } from './findings'
import { albums } from '../data/seed'

describe('patterns in music history', () => {
  it('finds albums recognised late, counting only what artists and critics say', () => {
    expect(lateRecognition('fleetwood-rumours')).not.toBeNull()
    expect(lateRecognition('jonimitchell-blue')).not.toBeNull()
    expect(lateRecognition('m-confessions')).toBeNull() // drawn on within a few years
  })

  it('measures revivals instead of assuming the cycle', () => {
    const disco = revivals().find((r) => r.genre === 'disco')!
    expect(disco.low[1]).toBeLessThanOrEqual(disco.peak[1] / 2)
    expect(disco.newArtists).toBeGreaterThanOrEqual(0.6)
  })

  it('leaves out genres already there when our coverage starts', () => {
    const firstYears = Math.min(...nicheToMainstream().map((n) => n.niche))
    expect(nicheToMainstream().every((n) => n.mainstream >= n.niche)).toBe(true)
    expect(firstYears).toBeGreaterThan(1960)
  })

  it('is stored up to date in src/data/findings.json (npm run findings)', () => {
    expect(LATE.map((l) => l.albumId).sort()).toEqual(albums.flatMap((a) => (lateRecognition(a.id) ? [a.id] : [])).sort())
    expect(REVIVALS.map((r) => r.genre)).toEqual(revivals().map((r) => r.genre))
    expect(NICHE.map((n) => n.genre)).toEqual(nicheToMainstream().map((n) => n.genre))
  }, 120_000)
})

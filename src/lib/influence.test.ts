import { describe, expect, it } from 'vitest'
import { influenceOf } from './influence'
import { DESCRIPTORS } from './descriptors'
import { rootsPath, storedInfluence, storedRoots } from './findings'
import { drawsOnOf } from './influence'

describe('influence network', () => {
  it('links later albums to the records they draw on, named records first', () => {
    const conf = influenceOf('m-confessions')!.citedBy.map((c) => c.albumId)
    expect(conf).toEqual(expect.arrayContaining(['dualipa-futurenostalgia', 'romy-midair', 'jessieware-thatfeelsgood']))
    const ray = influenceOf('m-ray')!.citedBy.map((c) => c.albumId)
    expect(ray).toEqual(expect.arrayContaining(['melaniec-northernstar', 'nellyfurtado-loose']))
  })

  it('only ever points back in time, never to the same artist', () => {
    for (const id of Object.keys(DESCRIPTORS)) {
      for (const c of influenceOf(id)?.citedBy ?? []) {
        expect(DESCRIPTORS[c.albumId].year!).toBeGreaterThan(DESCRIPTORS[id].year!)
        expect(DESCRIPTORS[c.albumId].artist).not.toBe(DESCRIPTORS[id].artist)
      }
    }
  })

  it('finds the classics our innovation trace cannot see yet (owner: the later albums of their genres are few)', () => {
    // Rounded as the album page shows it (src/data/influence.json keeps two decimals).
    for (const id of ['beachboys-petsounds', 'milesdavis-kindofblue', 'velvetunderground-thevelvetundergroundnico']) expect(Math.round(influenceOf(id)!.percentile * 100) / 100).toBeGreaterThanOrEqual(0.9)
  })

  it('is stored up to date in src/data/influence.json (npm run findings)', () => {
    for (const id of ['m-confessions', 'm-ray', 'beatles-revolver']) expect(storedInfluence(id)?.n).toBe(influenceOf(id)!.citedBy.filter((c) => c.weight >= 0.25).length)
  })

  it('walks back to the roots, never through the same album twice, stored up to date (npm run findings)', () => {
    for (const id of ['m-confessions', 'beatles-revolver', 'madonna-madamex']) {
      expect(storedRoots(id).map(([a]) => a)).toEqual(drawsOnOf(id).filter((c) => c.weight >= 0.15 && c.how !== 'producer' && c.how !== 'artist').slice(0, 3).map((c) => c.albumId))
      const path = rootsPath(id)
      expect(new Set([id, ...path.map((s) => s.to)]).size).toBe(path.length + 1)
    }
  })
})

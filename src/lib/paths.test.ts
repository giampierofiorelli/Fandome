import { describe, expect, it } from 'vitest'
import { discoverPaths } from './paths'
import { albums, artists } from '../data/seed'
import { isLocalArtist, sceneOf } from '../data/scenes'
import type { User } from '../data/types'

const fan = (fans: string[], notForMe: string[] = []) => ({ id: 'me', name: 'Me', fanSince: Object.fromEntries(fans.map((f) => [f, 2020])), following: [], ratings: {}, notForMe }) as unknown as User

describe('discovery paths', () => {
  it('builds a bridge to a local scene in another country, with a concrete reason', () => {
    const [bridge] = discoverPaths(fan(['charlixcx']), artists, albums)
    expect(bridge.kind).toBe('bridge')
    const country = sceneOf(bridge.artistId)!.country
    expect(['US', 'GB', 'CA', 'AU', 'IE']).not.toContain(country)
    expect(isLocalArtist(bridge.artistId)).toBe(true)
    expect(bridge.reason).toMatch(/^From [A-Z][a-z]+ · /)
  })

  it('never sends discovery to the global markets or to English-language pop', () => {
    for (const fans of [['elodie', 'annalisa'], ['charlixcx'], ['mahmood'], ['madonna', 'kylie', 'blanco']]) {
      for (const p of discoverPaths(fan(fans), artists, albums)) {
        expect(isLocalArtist(p.artistId)).toBe(true)
        expect(['US', 'GB', 'CA', 'AU', 'IE']).not.toContain(sceneOf(p.artistId)!.country)
      }
    }
  })

  it('goes deeper into the scene of an artist you follow from abroad', () => {
    const deeper = discoverPaths(fan(['madonna', 'kylie', 'blanco']), artists, albums).find((p) => p.kind === 'deeper')!
    expect(sceneOf(deeper.artistId)!.country).toBe('IT')
    expect(deeper.reason).toMatch(/^Like Blanco/)
  })

  it('offers a scene you do not know yet, different every week, never one you follow or already bridged', () => {
    const me = fan(['charlixcx'])
    const weeks = new Set([0, 1, 2, 3].map((w) => discoverPaths(me, artists, albums, w * 7 * 24 * 3600 * 1000).find((p) => p.kind === 'newscene')!.artistId))
    expect(weeks.size).toBeGreaterThan(1)
    const all = discoverPaths(me, artists, albums)
    const countries = all.map((p) => sceneOf(p.artistId)!.country)
    expect(countries).not.toContain('GB')
    expect(new Set(countries).size).toBe(countries.length)
  })

  it('never suggests artists you follow or hid, and nothing without follows', () => {
    const list = discoverPaths(fan(['elodie'], ['madonna']), artists, albums)
    expect(list.map((p) => p.artistId)).not.toContain('madonna')
    expect(list.map((p) => p.artistId)).not.toContain('elodie')
    expect(discoverPaths(fan([]), artists, albums)).toEqual([])
  })
})

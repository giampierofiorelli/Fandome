import { describe, expect, it } from 'vitest'
import { findingOf } from './legacy'

describe("Fandome's data shows", () => {
  it('finds the pioneers the press also credits, from our data alone', () => {
    // Kraftwerk brought synth-pop: the credit goes to their first album with that sound in our data (Autobahn, 1974).
    expect(['kraftwerk-autobahn', 'kraftwerk-radioactivity', 'kraftwerk-transeuropeexpress', 'kraftwerk-themanmachine'].some((id) => /Synth-pop/.test(findingOf(id)?.spread.trait ?? ''))).toBe(true)
    expect(findingOf('blondie-blondie')?.spread.trait).toBe('New wave')
    expect(findingOf('kcandthesunshineband-doitgood')?.spread.trait).toBe('Disco')
  })

  it('credits the first album of an artist that brought the sound, not the ones after', () => {
    expect(findingOf('kcandthesunshineband-kcandthesunshineband')).toBeNull()
    expect(findingOf('blondie-plasticletters')).toBeNull()
  })

  it('says nothing where too few earlier albums are described to tell what was new', () => {
    expect(findingOf('kimcarnes-restonme')).toBeNull()
    expect(findingOf('bowie-davidbowie1969')).toBeNull()
    expect(findingOf('bowie-theriseandfallofziggystardustandthespidersfrommars')).toBeNull()
  })

  it('needs the years before described as well as a share of our best-described years, not a fixed count', () => {
    expect(findingOf('portishead-dummy')?.spread.trait).toBe('Trip-hop')
    expect(findingOf('humanleague-dare')).not.toBeNull()
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

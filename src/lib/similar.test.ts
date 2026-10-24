import { describe, expect, it } from 'vitest'
import { DESCRIPTORS, parseDescriptors, releaseLabel } from './descriptors'
import { compareAlbums, genreSimilarity, scaleSimilarity, similarAlbums } from './similar'
import { albums, artists } from '../data/seed'
import { suggestArtists } from './suggest'
import type { User } from '../data/types'

const HEAD = 'album_id,artist,title,year,type,genres,energy,electronic,mood,theatrical,experimental,polish,tempo,groove,voice,lyrics,language,scene,producers,sounds_like,influenced_by,landmark,confidence,status,notes'
const row = (id: string, artist: string, genres: string, scales: string, extra = ',,,') => `${id},${artist},${id},2020,studio,${genres},${scales},clear,love,en,scene${extra},0,high,draft,note`
const [x, y, z] = parseDescriptors(
  [
    HEAD,
    row('a-one', 'Alpha', 'house|pop|disco', '5,5,4,3,2,4,4,5', ',Prod One,Beta,'),
    row('b-one', 'Beta', 'house|dance|disco', '5,4,4,3,2,4,4,5', ',Prod One,,'),
    row('c-one', 'Gamma', 'folk|jazz', ',,,,,,,'),
  ].join('\n'),
)

describe('album descriptors', () => {
  it('loads every researched album and each one exists in the catalogue', () => {
    const ids = new Set(albums.map((a) => a.id))
    const missing = Object.keys(DESCRIPTORS).filter((id) => !ids.has(id))
    expect(Object.keys(DESCRIPTORS).length).toBeGreaterThanOrEqual(41)
    expect(missing).toEqual([])
  })

  it('keeps empty cells unknown', () => {
    expect(z.scales).toEqual({})
    expect(x.scales.energy).toBe(5)
  })

  it('labels the release type', () => {
    expect(releaseLabel('charlixcx-pop2')).toBe('Mixtape')
    expect(releaseLabel('charlixcx-vroomvroom')).toBe('EP')
    expect(releaseLabel('m-ray')).toBe('Album')
  })
})

describe('similar albums', () => {
  it('scores genres by order and ignores unknown scales', () => {
    expect(genreSimilarity(x, x)).toBe(1)
    expect(genreSimilarity(x, z)).toBe(0)
    expect(genreSimilarity(x, y)).toBeCloseTo(genreSimilarity(y, x))
    expect(scaleSimilarity(x, z)).toBeNull()
    expect(scaleSimilarity(x, y)).toBeGreaterThan(0.9)
  })

  it('explains documented links', () => {
    const s = compareAlbums(x, y)
    expect(s.reasons[0]).toBe('a-one sounds like Beta')
    expect(compareAlbums(x, y).score).toBeGreaterThan(compareAlbums(x, z).score)
    const shared = compareAlbums(y, x)
    expect(shared.reasons.join(' ')).toContain('Prod One')
  })

  it('suggests only other artists, varied, each with a reason', () => {
    const list = similarAlbums('charlixcx-brat')
    expect(list.length).toBeGreaterThan(2)
    expect(list.every((s) => !s.albumId.startsWith('charlixcx-'))).toBe(true)
    expect(list.every((s) => s.reasons.length > 0)).toBe(true)
    const perArtist = new Map<string, number>()
    for (const s of list) perArtist.set(DESCRIPTORS[s.albumId].artist, (perArtist.get(DESCRIPTORS[s.albumId].artist) ?? 0) + 1)
    expect(Math.max(...perArtist.values())).toBeLessThanOrEqual(2)
  })

  it('finds the documented Madonna link from Elodie', () => {
    const top = similarAlbums('elodie-okrespira')[0]
    expect(DESCRIPTORS[top.albumId].artist).toBe('Madonna')
    expect(top.reasons[0]).toBe('OK. Respira sounds like Madonna')
  })

  it('returns nothing for albums without descriptors', () => {
    expect(similarAlbums('k-fever')).toEqual([])
  })
})

describe('artist suggestions by sound', () => {
  const fan = (fans: string[], ratings: Record<string, number> = {}) =>
    ({ id: 'me', name: 'Me', kind: 'person', fanSince: Object.fromEntries(fans.map((f) => [f, 2020])), following: [], ratings }) as unknown as User
  const roster = artists.filter((a) => ['madonna', 'elodie', 'annalisa', 'charlixcx', 'kylie'].includes(a.id))

  it('suggests artists whose albums sound close to the ones you follow, and says why', () => {
    const s = suggestArtists(fan(['elodie']), [], roster, 4, albums)
    expect(s.length).toBeGreaterThan(0)
    expect(s.map((x) => x.artist.id)).not.toContain('elodie')
    expect(s.map((x) => x.artist.id)).not.toContain('kylie') // no descriptors, no fans: nothing to say
    expect(s.every((x) => x.reason.length > 0)).toBe(true)
  })

  it('uses the albums you rated as the strongest seed', () => {
    const s = suggestArtists(fan([], { 'charlixcx-brat': 5 }), [], roster, 4, albums)
    expect(s[0].reason).toMatch(/Brat|produced by/)
  })
})

describe('artist suggestions: albums you rated', () => {
  it('says so when you rated one of their albums', () => {
    const me = { id: 'me', name: 'Me', fanSince: {}, following: [], ratings: { 'charlixcx-brat': 5 } } as unknown as User
    const s = suggestArtists(me, [], artists.filter((a) => a.id === 'charlixcx' || a.id === 'madonna'), 4, albums)
    expect(s[0].artist.id).toBe('charlixcx')
    expect(s[0].reason).toBe('You rated Brat highly')
  })
})

import { describe, expect, it } from 'vitest'
import { DESCRIPTORS, parseDescriptors, releaseLabel } from './descriptors'
import { artistGenres, compareAlbums, genreSimilarity, scaleSimilarity, similarAlbums, similarArtists } from './similar'
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

describe('discovery and "Not for me"', () => {
  const artistOf = (id: string) => albums.find((a) => a.id === id)?.artistId
  const countryOf = (id: string) => ({ madonna: 'US', charlixcx: 'GB', elodie: 'IT', annalisa: 'IT' })[artistOf(id) ?? ''] as string | undefined

  it('pushes local scenes from another country, never the global US/UK markets', () => {
    // From Madonna (US): Italian albums get the push and say where they come from.
    const plain = similarAlbums('m-confessions', { artistOf })
    const disc = similarAlbums('m-confessions', { artistOf, countryOf })
    const italian = disc.find((s) => countryOf(s.albumId) === 'IT')!
    expect(italian.newCountry).toBe('IT')
    const before = plain.find((s) => s.albumId === italian.albumId)
    if (before) expect(italian.score).toBeCloseTo(before.score + 0.05)
    // From Elodie (IT): Madonna (US) and Charli xcx (UK) get no discovery push.
    const fromItaly = similarAlbums('elodie-okrespira', { artistOf, countryOf })
    expect(fromItaly.filter((s) => ['US', 'GB'].includes(countryOf(s.albumId) ?? '')).every((s) => !s.newCountry)).toBe(true)
  })

  it('never shows hidden albums or artists again', () => {
    const first = similarAlbums('elodie-okrespira', { artistOf })[0]
    expect(similarAlbums('elodie-okrespira', { artistOf, hide: [first.albumId] }).map((s) => s.albumId)).not.toContain(first.albumId)
    expect(similarAlbums('elodie-okrespira', { artistOf, hide: ['madonna'] }).some((s) => artistOf(s.albumId) === 'madonna')).toBe(false)
  })

  it('hides artists you said are not for you, and marks artists from a new country', () => {
    const me = { id: 'me', name: 'Me', fanSince: { charlixcx: 2020 }, following: [], ratings: {}, notForMe: ['madonna'] } as unknown as User
    const s = suggestArtists(me, [], artists.filter((a) => ['madonna', 'charlixcx', 'annalisa', 'elodie', 'kylie'].includes(a.id)), 4, albums)
    expect(s.map((x) => x.artist.id)).not.toContain('madonna')
    expect(s.find((x) => x.artist.id === 'annalisa')?.newCountry).toBe('Italy')
    expect(s.find((x) => x.artist.id === 'kylie')?.newCountry).toBeUndefined()
  })
})

describe('engine v2', () => {
  const mk = (rows: string[]) => parseDescriptors([HEAD, ...rows].join('\n'))

  it('counts related genres (deep house is close to house), not only identical names', () => {
    const [a, b, c] = mk([
      row('a-x', 'A', 'deephouse', ',,,,,,,'),
      row('b-x', 'B', 'house', ',,,,,,,'),
      row('c-x', 'C', 'folk', ',,,,,,,'),
    ])
    expect(genreSimilarity(a, b)).toBeGreaterThan(0.3)
    expect(genreSimilarity(a, c)).toBe(0)
    expect(compareAlbums(a, b).reasons[0]).toBe('Close genres: deep house and house')
  })

  it('uses lyric themes, voice, era, scene and language when genres and sound tie', () => {
    const base = (id: string, artist: string, year: number, lyrics: string, voice: string, lang: string) =>
      `${id},${artist},${id},${year},studio,pop,,,,,,,,,${voice},${lyrics},${lang},Italian urban pop,,,,0,high,draft,note`
    const [a, near, far] = mk([base('a-y', 'A', 2020, 'love|identity', 'soft', 'it'), base('b-y', 'B', 2019, 'love|identity', 'soft', 'it'), base('c-y', 'C', 1975, 'party', 'raspy', 'en')])
    expect(compareAlbums(a, near).score).toBeGreaterThan(compareAlbums(a, far).score)
    expect(compareAlbums(a, near).reasons).toContain('Both sing about love and identity')
  })

  it('finds two-step connections through a third artist or producer', () => {
    const r = compareAlbums(DESCRIPTORS['blanco-bluceleste'], DESCRIPTORS['elodie-thisiselodie'])
    expect(r.reasons[0]).toMatch(/^Connected through Mahmood/)
  })

  it('keeps lists varied and pushes down what you dislike', () => {
    const plain = similarAlbums('m-confessions', { limit: 5 })
    const avoided = similarAlbums('m-confessions', { limit: 5, avoid: [plain[0].albumId] })
    expect(avoided[0]?.albumId).not.toBe(plain[0].albumId)
  })

  it('builds artist profiles from albums and suggests similar artists with a concrete reason', () => {
    const albumIdsOf = (id: string) => albums.filter((a) => a.artistId === id).map((a) => a.id)
    const country = { madonna: 'US', charlixcx: 'GB', elodie: 'IT', annalisa: 'IT', mahmood: 'IT', blanco: 'IT' } as Record<string, string>
    const list = similarArtists('blanco', albumIdsOf, Object.keys(country), { countryOf: (id) => country[id] })
    expect(list[0].artistId).toBe('mahmood')
    expect(list.every((s) => s.reason.length > 0)).toBe(true)
    expect(list.find((s) => s.artistId === 'charlixcx')?.newCountry ?? 'GB').toBe('GB')
    expect(artistGenres(albumIdsOf('madonna'))[0]).toBe('pop')
  })
})

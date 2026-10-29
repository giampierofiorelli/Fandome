import { describe, expect, it } from 'vitest'
import { DESCRIPTORS, parseDescriptors, releaseLabel } from './descriptors'
import { artistGenres, careerWeight, compareAlbums, genreSimilarity, scaleSimilarity, similarAlbums, similarArtists } from './similar'
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
    expect(list.length).toBeGreaterThanOrEqual(2)
    expect(list.every((s) => !s.albumId.startsWith('charlixcx-'))).toBe(true)
    expect(list.every((s) => s.reasons.length > 0)).toBe(true)
    const perArtist = new Map<string, number>()
    for (const s of list) perArtist.set(DESCRIPTORS[s.albumId].artist, (perArtist.get(DESCRIPTORS[s.albumId].artist) ?? 0) + 1)
    expect(Math.max(...perArtist.values())).toBeLessThanOrEqual(2)
  })

  it('finds the documented Madonna link from Elodie', () => {
    const list = similarAlbums('elodie-okrespira').slice(0, 2)
    expect(list.some((s) => DESCRIPTORS[s.albumId].artist === 'Madonna')).toBe(true)
    expect(list.some((s) => s.reasons[0].includes('Madonna'))).toBe(true)
  })

  it('treats co-billed albums as belonging to every billed artist', () => {
    const doItAgain = albums.find((a) => a.id === 'robyn-doitagain')!
    expect(doItAgain.withArtists).toContain('royksopp')
    expect(doItAgain.credit).toBe('Röyksopp & Robyn')
    const artistsOf = (id: string) => { const a = albums.find((x) => x.id === id); return a ? [a.artistId, ...(a.withArtists ?? [])] : [] }
    for (const id of ['royksopp-junior', 'royksopp-theunderstanding', 'royksopp-melodyam'])
      expect(similarAlbums(id, { artistsOf }).map((s) => s.albumId)).not.toContain('robyn-doitagain')
  })

  it('returns nothing for albums without descriptors', () => {
    expect(similarAlbums('no-such-album')).toEqual([])
  })
})

describe('career weight in artist profiles', () => {
  it('lets the albums that defined a long career count more than minor ones (owner)', () => {
    expect(careerWeight({ importance: 5 })).toBeGreaterThan(careerWeight({ importance: 3 }))
    expect(careerWeight({ importance: 3 })).toBeGreaterThan(careerWeight({ importance: 1 }))
    expect(careerWeight({ landmark: true })).toBeGreaterThan(careerWeight({}))
    expect(careerWeight({ importance: 4, type: 'compilation' })).toBeLessThan(careerWeight({ importance: 4 }))
  })
})

describe('links documented on some songs only', () => {
  it('weigh their share of the album and say so (owner: one song of ten counts a tenth)', () => {
    const [whole, part, other] = parseDescriptors(
      [
        HEAD,
        row('p-whole', 'Pi', 'house|pop|disco', '5,5,4,3,2,4,4,5', ',,,Beta'),
        row('p-part', 'Pi', 'house|pop|disco', '5,5,4,3,2,4,4,5', ',,,Beta [1/10]'),
        row('b-two', 'Beta', 'house|dance|disco', '5,4,4,3,2,4,4,5'),
      ].join('\n'),
    )
    expect(part.influencedBy).toEqual(['Beta'])
    expect(part.namedAlbums).toEqual([])
    const w = compareAlbums(whole, other)
    const p = compareAlbums(part, other)
    expect(p.score).toBeLessThan(w.score)
    expect(p.reasons[0]).toBe('p-part was influenced by Beta on one song')
  })
})

describe('covers in suggestions', () => {
  it('puts the album a record covers at the top, one way only: never back from the original (owner)', () => {
    const top = similarAlbums('laurabranigan-selfcontrol').slice(0, 2)
    expect(top.map((s) => s.albumId).sort()).toEqual(['raf-raf', 'tozzi-enellariatiamo'])
    expect(top.find((s) => s.albumId === 'raf-raf')!.reasons[0]).toBe('Self Control covers Raf’s Self Control')
    expect(similarAlbums('laurabranigan-branigan')[0].reasons[0]).toBe('Branigan covers Umberto Tozzi’s Gloria')
    for (const id of ['raf-raf', 'tozzi-gloria']) expect(similarAlbums(id).every((s) => !s.reasons.some((r) => /cover/i.test(r)))).toBe(true)
  })

  it('counts a cover as a reason on the page of the artist who made it, not the original artist', () => {
    const ids = (id: string) => albums.filter((a) => a.artistId === id).map((a) => a.id)
    const s = similarArtists('laurabranigan', ids, artists.map((a) => a.id))
    expect(s.find((x) => x.artistId === 'raf')?.reason).toBe('Laura Branigan covered Raf’s Self Control (Raf, 1984)')
    expect(similarArtists('raf', ids, artists.map((a) => a.id)).some((x) => /covered/.test(x.reason))).toBe(false)
  })
})

describe('artist suggestions by sound', () => {
  const fan = (fans: string[], ratings: Record<string, number> = {}) =>
    ({ id: 'me', name: 'Me', kind: 'person', fanSince: Object.fromEntries(fans.map((f) => [f, 2020])), following: [], ratings }) as unknown as User
  const roster = artists.filter((a) => ['madonna', 'elodie', 'annalisa', 'charlixcx', 'adele'].includes(a.id))

  it('suggests artists whose albums sound close to the ones you follow, and says why', () => {
    const s = suggestArtists(fan(['elodie']), [], roster, 4, albums)
    expect(s.length).toBeGreaterThan(0)
    expect(s.map((x) => x.artist.id)).not.toContain('elodie')
    expect(s.map((x) => x.artist.id)).not.toContain('adele') // no descriptors, no fans: nothing to say (psb has descriptors now)
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

  it('counts shared instruments, the rarer the more (harpsichord over drums)', () => {
    const H = 'album_id,artist,title,year,type,genres,energy,electronic,mood,theatrical,experimental,polish,tempo,groove,voice,instruments,lyrics,language,scene,producers,sounds_like,influenced_by,landmark,confidence,status,notes'
    const r = (id: string, ins: string) => `${id},${id.toUpperCase()},${id},2020,studio,pop,3,3,3,3,3,3,3,3,clear,${ins},love,en,,,,,0,high,draft,note`
    const [a, b, c] = parseDescriptors([H, r('a-i', 'harpsichord|strings'), r('b-i', 'harpsichord|strings'), r('c-i', 'drums|electricguitar')].join('\n'))
    expect(compareAlbums(a, b).score).toBeGreaterThan(compareAlbums(a, c).score)
    expect(compareAlbums(a, b).reasons.join(' ')).toMatch(/harpsichord and strings/)
  })

  it('counts related genres (deep house is close to house), not only identical names', () => {
    const [a, b, c] = mk([
      row('a-x', 'A', 'deephouse', ',,,,,,,'),
      row('b-x', 'B', 'house', ',,,,,,,'),
      row('c-x', 'C', 'folk', ',,,,,,,'),
    ])
    expect(genreSimilarity(a, b)).toBeGreaterThan(0.15)
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
    const r = compareAlbums(DESCRIPTORS['annalisa-maiosonofuoco'], DESCRIPTORS['madonna-madonna'])
    expect(r.reasons[0]).toMatch(/^Connected through Lady Gaga/)
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

describe('hiding a suggestion', () => {
  it('keeps the others in place and fills the gap at the bottom', async () => {
    const { similarAlbumsStable } = await import('./similar')
    for (const id of ['shakira-shewolf', 'm-ray', 'battiato-patriots']) {
      const before = similarAlbumsStable(id).map((s) => s.albumId)
      if (before.length < 5) continue
      const hide = [before[1], before[3]]
      const after = similarAlbumsStable(id, { hide, avoid: hide }).map((s) => s.albumId)
      expect(after.slice(0, before.length - 2)).toEqual(before.filter((x) => !hide.includes(x)))
      expect(after.length).toBeGreaterThanOrEqual(before.length - 2)
    }
  })
})

describe('critical standing', () => {
  it('a well-regarded album never leads to one critics panned (3+ points lower)', async () => {
    const { similarAlbums } = await import('./similar')
    const { DESCRIPTORS } = await import('./descriptors')
    for (const id of Object.keys(DESCRIPTORS)) {
      const a = DESCRIPTORS[id].acclaim
      if (a === undefined) continue
      for (const s of similarAlbums(id)) {
        const b = DESCRIPTORS[s.albumId].acclaim
        if (b !== undefined) expect(a - b).toBeLessThan(3)
      }
    }
  })
})

describe('artist links weigh the whole career', () => {
  it('a record the source names is the album the link leads to (Mina (Studio Uno ’66), for Se telefonando)', () => {
    const top = similarAlbums('fontainesdc-dopaminechamber').map((s) => s.albumId)
    expect(top.slice(0, 3)).toContain('mina-studiouno66')
    expect(top.filter((id) => id.startsWith('mina-'))).toEqual(['mina-studiouno66'])
  })
  it('an influence leads one way: an artist who names Queen is not suggested on Queen\'s page for that (owner)', () => {
    const of = (id: string) => albums.filter((a) => a.artistId === id || (a.withArtists ?? []).includes(id)).map((a) => a.id)
    const list = similarArtists('queen', of, artists.map((a) => a.id))
    expect(list.map((s) => s.artistId)).not.toContain('katyperry')
    expect(list.every((s) => !/names Queen as an influence|draws on Queen/.test(s.reason))).toBe(true)
    expect(similarArtists('katyperry', of, artists.map((a) => a.id)).length).toBeGreaterThan(0)
  })
  it('one album’s influence does not lead the list; artists whose albums sound like this one do (owner, Madonna)', () => {
    const of = (id: string) => albums.filter((a) => a.artistId === id || (a.withArtists ?? []).includes(id)).map((a) => a.id)
    const list = similarArtists('madonna', of, artists.map((a) => a.id)).map((s) => s.artistId)
    expect(list.slice(0, 3)).not.toContain('mariah')
    expect(list.slice(0, 3)).toContain('kylie')
  })
})

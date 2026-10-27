import { describe, expect, it } from 'vitest'
import { albums } from '../data/seed'
import { essentialAlbums } from './essentials'
import { albumHasArtist } from './util'

const of = (artistId: string) => albums.filter((a) => albumHasArtist(a, artistId)).sort((a, b) => a.year - b.year).map((a) => a.id)

describe('start here: essential albums', () => {
  it('picks the career-defining records, in order (Madonna)', () => {
    const ids = essentialAlbums(of('madonna')).map((e) => e.id)
    expect(ids).toEqual(expect.arrayContaining(['m-virgin', 'm-trueblue', 'm-prayer', 'm-ray', 'm-confessions']))
    expect(ids).not.toContain('madonna-mdna')
  })
  it('every described artist gets a short list, never the whole discography', () => {
    for (const id of ['queen', 'kylie', 'battiato', 'notwist', 'joydivision']) {
      const list = essentialAlbums(of(id))
      expect(list.length, id).toBeGreaterThan(0)
      expect(list.length, id).toBeLessThanOrEqual(6)
    }
  })
  it('nothing for an album with no description', () => {
    expect(essentialAlbums(['no-such-album'])).toEqual([])
  })
})

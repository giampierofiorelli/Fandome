import { describe, expect, it } from 'vitest'
import { artistEras } from './eras'
import { similarArtists } from './similar'
import { albums, artists } from '../data/seed'
import { albumHasArtist } from './util'

const ids = (id: string) => albums.filter((a) => albumHasArtist(a, id)).map((a) => a.id)
const eras = (id: string) => artistEras(id, ids(id))

describe('periods of a long career', () => {
  it('finds the periods critics agree on where the sound changes', () => {
    const b = eras('battiato')!
    expect(b.length).toBeGreaterThanOrEqual(4)
    expect(b[0].from).toBe(1972)
    expect(b.find((e) => e.albumIds.includes('battiato-lavocedelpadrone'))!.albumIds).not.toContain('battiato-fetus')
    const m = eras('madonna')!
    const ray = m.find((e) => e.albumIds.includes('m-ray'))!
    expect(ray.albumIds).not.toContain('m-virgin')
    expect(ray.albumIds).not.toContain('m-prayer')
  })

  it('leaves short careers, and careers that kept one sound, as one list', () => {
    expect(eras('blanco')).toBeNull()
    expect(eras('eros')?.length ?? 1).toBeLessThanOrEqual(2)
  })

  it('suggests for one period from its albums only, with collaborations of those years', () => {
    const first = eras('battiato')![0]
    const s = similarArtists('battiato', (x) => (x === 'battiato' ? first.albumIds : ids(x)), artists.map((a) => a.id), { years: [first.from, first.to] })
    const names = s.map((x) => x.artistId)
    expect(names).toContain('pinkfloyd')
    expect(names).not.toContain('sepideh') // she sings on Fleurs 2 (2008), not in the seventies
  })
})

import { describe, expect, it } from 'vitest'
import { catalogAlbums } from './catalog'

describe('catalogue ids', () => {
  it('gives every album its own id, adding the year when one artist repeats a title', () => {
    const ids = catalogAlbums.map((a) => a.id)
    expect(new Set(ids).size).toBe(ids.length)
    expect(ids).toEqual(expect.arrayContaining(['nada-nada', 'nada-nada1976', 'nada-nada1979']))
  })
})

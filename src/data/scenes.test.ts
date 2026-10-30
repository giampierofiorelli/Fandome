import { describe, expect, it } from 'vitest'
import { artists } from './seed'
import { COUNTRY_NAMES, SCENES } from './scenes'

const GENRES = ['pop', 'dance', 'electronic', 'synthpop', 'disco', 'rock', 'indie', 'alt', 'metal', 'punk', 'prog', 'hiphop', 'trap', 'rnb', 'soul', 'funk', 'jazz', 'folk', 'songwriter', 'country', 'latin', 'reggaeton', 'afro', 'kpop', 'sertanejo', 'funkbr', 'pagode', 'forro', 'classical', 'soundtrack', 'reggae', 'opera']

describe('scenes', () => {
  it('every artist room has its scene, and nothing else', () => {
    const ids = artists.map((a) => a.id)
    expect(ids.filter((id) => !SCENES[id])).toEqual([])
    expect(Object.keys(SCENES).filter((id) => !ids.includes(id))).toEqual([])
  })
  it('rows are well formed', () => {
    for (const [id, s] of Object.entries(SCENES)) {
      expect(COUNTRY_NAMES[s.country], `${id} country ${s.country}`).toBeTruthy()
      expect(s.lang, id).toMatch(/^[a-z]{2,3}$/) // ISO 639-1, or 639-3 when there is no 2-letter code (pcm: Nigerian Pidgin)
      expect(s.since % 10, id).toBe(0)
      expect(s.since >= 1500 && s.since <= 2020, id).toBe(true) // composers' works start centuries back
      expect(s.genres.length, id).toBeGreaterThan(0)
      for (const g of s.genres) expect(GENRES, `${id} ${g}`).toContain(g)
    }
  })
})

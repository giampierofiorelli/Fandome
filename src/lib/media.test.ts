import { describe, expect, it } from 'vitest'
import { stripYoutubeLink, youtubeId } from './media'

describe('youtube links', () => {
  it('recognises the common URL shapes', () => {
    for (const url of ['https://www.youtube.com/watch?v=abcdefghijk', 'https://youtu.be/abcdefghijk?t=3', 'https://m.youtube.com/watch?feature=share&v=abcdefghijk', 'https://youtube.com/shorts/abcdefghijk', 'https://www.youtube.com/embed/abcdefghijk']) {
      expect(youtubeId(`look ${url} wow`)).toBe('abcdefghijk')
    }
    expect(youtubeId('no video here')).toBeUndefined()
  })
  it('removes the raw link from the post text', () => {
    expect(stripYoutubeLink('Iconic performance https://youtu.be/abcdefghijk #live')).toBe('Iconic performance #live')
  })
})

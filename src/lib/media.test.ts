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

import { detectEmbed, embedSrc, findUrls, stripUrl } from './media'

describe('embeds and links', () => {
  it('detects X, Instagram and TikTok posts', () => {
    expect(detectEmbed('wow https://x.com/someone/status/1234567890123 ok')).toMatchObject({ kind: 'x', id: '1234567890123' })
    expect(detectEmbed('https://twitter.com/a_b/status/987654321?s=20')).toMatchObject({ kind: 'x', id: '987654321' })
    expect(detectEmbed('https://www.instagram.com/reel/C9abcDEF12/?igsh=xyz')).toMatchObject({ kind: 'instagram', id: 'C9abcDEF12', path: 'reel' })
    expect(detectEmbed('https://www.tiktok.com/@fan.page/video/7234567890123456789')).toMatchObject({ kind: 'tiktok', id: '7234567890123456789' })
    expect(detectEmbed('just a site https://madonna-infinity.net/news')).toBeUndefined()
  })
  it('builds the platform embed URLs', () => {
    expect(embedSrc({ kind: 'instagram', id: 'ABCDE', path: 'p', url: '' })).toBe('https://www.instagram.com/p/ABCDE/embed/')
    expect(embedSrc({ kind: 'tiktok', id: '123456789', url: '' })).toBe('https://www.tiktok.com/embed/v2/123456789')
    expect(embedSrc({ kind: 'x', id: '42424242', url: '' })).toContain('Tweet.html?id=42424242')
  })
  it('finds links without trailing punctuation and strips the embedded one', () => {
    expect(findUrls('see https://a.example/x, and https://b.example.')).toEqual(['https://a.example/x', 'https://b.example'])
    expect(stripUrl('Look https://x.com/a/status/12345 #live', 'https://x.com/a/status/12345')).toBe('Look #live')
  })
})

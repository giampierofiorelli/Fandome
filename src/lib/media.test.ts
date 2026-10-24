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

describe('music platforms', () => {
  it('detects SoundCloud, Spotify, Apple Music, Deezer, TIDAL, Mixcloud, Audiomack, Vimeo', () => {
    const k = (u: string) => detectEmbed(u)
    expect(k('https://soundcloud.com/madonna/hung-up-remix?si=1')).toMatchObject({ kind: 'soundcloud', id: 'https://soundcloud.com/madonna/hung-up-remix' })
    expect(k('https://open.spotify.com/intl-it/track/4iV5W9uYEdYUVa79Axb7Rh?si=x')).toMatchObject({ kind: 'spotify', path: 'track', id: '4iV5W9uYEdYUVa79Axb7Rh' })
    expect(k('https://music.apple.com/us/album/ray-of-light/1452864428?i=1452864429')).toMatchObject({ kind: 'apple', id: 'us/album/ray-of-light/1452864428?i=1452864429' })
    expect(k('https://www.deezer.com/it/album/302127')).toMatchObject({ kind: 'deezer', path: 'album', id: '302127' })
    expect(k('https://tidal.com/browse/track/77646169')).toMatchObject({ kind: 'tidal', path: 'track', id: '77646169' })
    expect(k('https://www.mixcloud.com/someone/80s-pop-mix/')).toMatchObject({ kind: 'mixcloud', id: 'someone/80s-pop-mix' })
    expect(k('https://audiomack.com/artist/song/track-name')).toMatchObject({ kind: 'audiomack', path: 'song', id: 'artist/track-name' })
    expect(k('https://vimeo.com/123456789')).toMatchObject({ kind: 'vimeo', id: '123456789' })
  })
  it('builds player URLs', () => {
    expect(embedSrc({ kind: 'spotify', id: 'abc1234567', path: 'album', url: '' })).toBe('https://open.spotify.com/embed/album/abc1234567')
    expect(embedSrc({ kind: 'tidal', id: '1', path: 'track', url: '' })).toBe('https://embed.tidal.com/tracks/1')
    expect(embedSrc({ kind: 'soundcloud', id: 'https://soundcloud.com/a/b', url: '' })).toContain('url=https%3A%2F%2Fsoundcloud.com%2Fa%2Fb')
  })
})

import { peaksFrom } from './audio'
describe('voice note waveform', () => {
  it('normalises loudness into bars', () => {
    const s = new Float32Array(400)
    for (let i = 200; i < 400; i++) s[i] = 0.5
    const p = peaksFrom(s, 4)
    expect(p).toHaveLength(4)
    expect(p[3]).toBe(1)
    expect(p[0]).toBeCloseTo(0.08)
  })
})

describe('profile link services', () => {
  it('recognises services and cleans links', async () => {
    const { linkService, cleanLink } = await import('./media')
    expect(linkService('https://www.instagram.com/x').label).toBe('Instagram')
    expect(linkService('https://artist.bandcamp.com/album/y').key).toBe('bandcamp')
    expect(linkService('https://music.apple.com/it/album/z').label).toBe('Apple Music')
    expect(linkService('https://example.org/me')).toMatchObject({ key: 'web', label: 'example.org' })
    expect(cleanLink('instagram.com/me')).toBe('https://instagram.com/me')
    expect(cleanLink('javascript:alert(1)')).toBeNull()
    expect(cleanLink('hello')).toBeNull()
  })
})

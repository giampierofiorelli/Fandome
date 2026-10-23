// Media helpers for posts: embeds from other socials (the content stays on
// their servers, shown with their own player), links, and photo compression.
import type { Embed } from '../data/types'

const YT = /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
const X = /(?:twitter|x)\.com\/[A-Za-z0-9_]+\/status(?:es)?\/(\d{5,25})/
const IG = /instagram\.com\/(p|reel|tv)\/([A-Za-z0-9_-]{5,})/
const TT = /tiktok\.com\/@[^/\s]+\/video\/(\d{8,25})/
const SC = /^https?:\/\/(?:www\.|m\.)?soundcloud\.com\/[^/\s]+\/[^\s?#]+/
const SP = /open\.spotify\.com\/(?:intl-[a-z]+\/)?(track|album|playlist|episode|show|artist)\/([A-Za-z0-9]{10,})/
const AM = /music\.apple\.com\/([a-z]{2}\/(?:album|playlist|song|music-video)\/[^\s?#]+)(\?i=\d+)?/
const DZ = /deezer\.com\/(?:[a-z]{2}\/)?(track|album|playlist|artist)\/(\d+)/
const TD = /tidal\.com\/(?:browse\/)?(track|album|playlist|video)s?\/([A-Za-z0-9-]+)/
const MC = /mixcloud\.com\/([^/\s]+\/[^/\s?#]+)\/?/
const AU = /audiomack\.com\/([^/\s]+)\/(song|album|playlist)\/([^/\s?#]+)/
const VM = /vimeo\.com\/(?:video\/)?(\d{6,12})/
const URL_RE = /https?:\/\/[^\s<>"]+[^\s<>".,!?;:)\]'’]/g

export function youtubeId(text: string): string | undefined {
  return text.match(YT)?.[1]
}

export const findUrls = (text: string) => text.match(URL_RE) ?? []

// First URL in the text that one of the supported platforms can embed.
export function detectEmbed(text: string): Embed | undefined {
  for (const url of findUrls(text)) {
    let m = url.match(YT)
    if (m) return { kind: 'youtube', id: m[1], url }
    m = url.match(X)
    if (m) return { kind: 'x', id: m[1], url }
    m = url.match(IG)
    if (m) return { kind: 'instagram', id: m[2], path: m[1], url }
    m = url.match(TT)
    if (m) return { kind: 'tiktok', id: m[1], url }
    m = url.match(SC)
    if (m) return { kind: 'soundcloud', id: m[0], url }
    m = url.match(SP)
    if (m) return { kind: 'spotify', id: m[2], path: m[1], url }
    m = url.match(AM)
    if (m) return { kind: 'apple', id: m[1] + (m[2] ?? ''), url }
    m = url.match(DZ)
    if (m) return { kind: 'deezer', id: m[2], path: m[1], url }
    m = url.match(TD)
    if (m) return { kind: 'tidal', id: m[2], path: m[1], url }
    m = url.match(AU)
    if (m) return { kind: 'audiomack', id: `${m[1]}/${m[3]}`, path: m[2], url }
    m = url.match(MC)
    if (m && !/^(discover|upload|select|categories)\//.test(m[1])) return { kind: 'mixcloud', id: m[1], url }
    m = url.match(VM)
    if (m) return { kind: 'vimeo', id: m[1], url }
  }
  return undefined
}

export function embedSrc(e: Embed): string {
  switch (e.kind) {
    case 'youtube':
      return `https://www.youtube-nocookie.com/embed/${e.id}?autoplay=1&rel=0`
    case 'x':
      return `https://platform.twitter.com/embed/Tweet.html?id=${e.id}&dnt=true`
    case 'instagram':
      return `https://www.instagram.com/${e.path ?? 'p'}/${e.id}/embed/`
    case 'tiktok':
      return `https://www.tiktok.com/embed/v2/${e.id}`
    case 'soundcloud':
      return `https://w.soundcloud.com/player/?url=${encodeURIComponent(e.id)}&color=%23e3307f&visual=false&show_comments=false`
    case 'spotify':
      return `https://open.spotify.com/embed/${e.path}/${e.id}`
    case 'apple':
      return `https://embed.music.apple.com/${e.id}`
    case 'deezer':
      return `https://widget.deezer.com/widget/auto/${e.path}/${e.id}`
    case 'tidal':
      return `https://embed.tidal.com/${e.path}s/${e.id}`
    case 'mixcloud':
      return `https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=${encodeURIComponent(`/${e.id}/`)}`
    case 'audiomack':
      return `https://audiomack.com/embed/${e.path}/${e.id}`
    case 'vimeo':
      return `https://player.vimeo.com/video/${e.id}`
  }
}

export const EMBED_LABEL: Record<Embed['kind'], string> = {
  youtube: 'YouTube',
  x: 'X',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  soundcloud: 'SoundCloud',
  spotify: 'Spotify',
  apple: 'Apple Music',
  deezer: 'Deezer',
  tidal: 'TIDAL',
  mixcloud: 'Mixcloud',
  audiomack: 'Audiomack',
  vimeo: 'Vimeo',
}
// Music players are compact; social posts are tall.
export const isAudioEmbed = (k: Embed['kind']) => ['soundcloud', 'spotify', 'apple', 'deezer', 'tidal', 'mixcloud', 'audiomack'].includes(k)

// Remove one URL (the embedded one) from the visible text.
export function stripUrl(text: string, url: string): string {
  return text.replace(url, '').replace(/[ \t]{2,}/g, ' ').trim()
}
// Back-compat for older posts / tests.
export function stripYoutubeLink(text: string): string {
  return text.replace(/\s*https?:\/\/(?:www\.|m\.)?(?:youtube\.com|youtu\.be)\/\S+/g, '').trim()
}

export function prettyUrl(url: string) {
  try {
    const u = new URL(url)
    const path = (u.pathname + u.search).replace(/\/$/, '')
    const short = path.length > 28 ? path.slice(0, 26) + '…' : path
    return { host: u.hostname.replace(/^www\./, ''), short: u.hostname.replace(/^www\./, '') + short }
  } catch {
    return { host: url, short: url }
  }
}

export async function compressImage(file: File, max = 1280, quality = 0.82): Promise<string> {
  const url = URL.createObjectURL(file)
  try {
    const img = await new Promise<HTMLImageElement>((res, rej) => {
      const i = new Image()
      i.onload = () => res(i)
      i.onerror = () => rej(new Error('Not an image'))
      i.src = url
    })
    const scale = Math.min(1, max / Math.max(img.width, img.height))
    const c = document.createElement('canvas')
    c.width = Math.round(img.width * scale)
    c.height = Math.round(img.height * scale)
    c.getContext('2d')!.drawImage(img, 0, 0, c.width, c.height)
    return c.toDataURL('image/jpeg', quality)
  } finally {
    URL.revokeObjectURL(url)
  }
}

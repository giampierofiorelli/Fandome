// Media helpers for posts: embeds from other socials (the content stays on
// their servers, shown with their own player), links, and photo compression.
import type { Embed } from '../data/types'

const YT = /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
const X = /(?:twitter|x)\.com\/[A-Za-z0-9_]+\/status(?:es)?\/(\d{5,25})/
const IG = /instagram\.com\/(p|reel|tv)\/([A-Za-z0-9_-]{5,})/
const TT = /tiktok\.com\/@[^/\s]+\/video\/(\d{8,25})/
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
  }
}

export const EMBED_LABEL: Record<Embed['kind'], string> = { youtube: 'YouTube', x: 'X', instagram: 'Instagram', tiktok: 'TikTok' }

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

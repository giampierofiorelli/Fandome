// Media helpers for posts: embeds from other socials (the content stays on
// their servers, shown with their own player), links, and photo compression.
import type { Embed } from '../data/types'
import {
  siApplemusic, siAudiomack, siBandcamp, siBluesky, siDeezer, siDiscogs, siDiscord, siFacebook, siInstagram, siKofi, siLastdotfm, siLetterboxd, siMixcloud,
  siPatreon, siPinterest, siReddit, siSoundcloud, siSpotify, siSubstack, siTelegram, siThreads, siTidal, siTiktok, siTumblr, siTwitch, siVimeo, siX, siYoutube,
} from 'simple-icons'

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
// Official brand marks (Simple Icons, CC0) for the closed-player cards; brand names stay nominative only.
export const EMBED_ICON: Record<Embed['kind'], { path: string }> = {
  youtube: siYoutube, x: siX, instagram: siInstagram, tiktok: siTiktok, soundcloud: siSoundcloud, spotify: siSpotify,
  apple: siApplemusic, deezer: siDeezer, tidal: siTidal, mixcloud: siMixcloud, audiomack: siAudiomack, vimeo: siVimeo,
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

// Profile links: which service a link points to, for its label, colour and icon.
// Icons come from Simple Icons (CC0 drawings, bundled with the site: no requests to the brands).
// The marks still belong to their owners and are used only to say "my profile on X".
// LinkedIn and Rate Your Music aren't in the library, so they keep our monogram.
export interface LinkService {
  key: string
  label: string
  color: string
  icon?: string // SVG path, 24×24
}
const ICONS: Record<string, { path: string; hex: string }> = {
  instagram: siInstagram, tiktok: siTiktok, x: siX, threads: siThreads, bluesky: siBluesky, facebook: siFacebook,
  youtube: siYoutube, twitch: siTwitch, spotify: siSpotify, apple: siApplemusic, soundcloud: siSoundcloud,
  bandcamp: siBandcamp, deezer: siDeezer, tidal: siTidal, lastfm: siLastdotfm, discogs: siDiscogs, mixcloud: siMixcloud,
  tumblr: siTumblr, pinterest: siPinterest, reddit: siReddit, discord: siDiscord, telegram: siTelegram,
  substack: siSubstack, patreon: siPatreon, kofi: siKofi, letterboxd: siLetterboxd,
}
const SERVICES: { key: string; label: string; color: string; hosts: string[] }[] = [
  { key: 'instagram', label: 'Instagram', color: '#e1306c', hosts: ['instagram.com'] },
  { key: 'tiktok', label: 'TikTok', color: '#111111', hosts: ['tiktok.com'] },
  { key: 'x', label: 'X', color: '#111111', hosts: ['x.com', 'twitter.com'] },
  { key: 'threads', label: 'Threads', color: '#111111', hosts: ['threads.net', 'threads.com'] },
  { key: 'bluesky', label: 'Bluesky', color: '#1185fe', hosts: ['bsky.app'] },
  { key: 'facebook', label: 'Facebook', color: '#1877f2', hosts: ['facebook.com', 'fb.com'] },
  { key: 'youtube', label: 'YouTube', color: '#ff0033', hosts: ['youtube.com', 'youtu.be'] },
  { key: 'twitch', label: 'Twitch', color: '#9146ff', hosts: ['twitch.tv'] },
  { key: 'spotify', label: 'Spotify', color: '#1db954', hosts: ['spotify.com'] },
  { key: 'apple', label: 'Apple Music', color: '#fa2d48', hosts: ['music.apple.com'] },
  { key: 'soundcloud', label: 'SoundCloud', color: '#ff5500', hosts: ['soundcloud.com'] },
  { key: 'bandcamp', label: 'Bandcamp', color: '#1da0c3', hosts: ['bandcamp.com'] },
  { key: 'deezer', label: 'Deezer', color: '#a238ff', hosts: ['deezer.com'] },
  { key: 'tidal', label: 'TIDAL', color: '#111111', hosts: ['tidal.com'] },
  { key: 'lastfm', label: 'Last.fm', color: '#d51007', hosts: ['last.fm'] },
  { key: 'discogs', label: 'Discogs', color: '#333333', hosts: ['discogs.com'] },
  { key: 'rym', label: 'Rate Your Music', color: '#2a5db0', hosts: ['rateyourmusic.com'] },
  { key: 'mixcloud', label: 'Mixcloud', color: '#5000ff', hosts: ['mixcloud.com'] },
  { key: 'tumblr', label: 'Tumblr', color: '#36465d', hosts: ['tumblr.com'] },
  { key: 'pinterest', label: 'Pinterest', color: '#e60023', hosts: ['pinterest.com', 'pin.it'] },
  { key: 'reddit', label: 'Reddit', color: '#ff4500', hosts: ['reddit.com'] },
  { key: 'discord', label: 'Discord', color: '#5865f2', hosts: ['discord.gg', 'discord.com'] },
  { key: 'telegram', label: 'Telegram', color: '#26a5e4', hosts: ['t.me', 'telegram.me'] },
  { key: 'substack', label: 'Substack', color: '#ff6719', hosts: ['substack.com'] },
  { key: 'patreon', label: 'Patreon', color: '#ff424d', hosts: ['patreon.com'] },
  { key: 'kofi', label: 'Ko-fi', color: '#ff5e5b', hosts: ['ko-fi.com'] },
  { key: 'linkedin', label: 'LinkedIn', color: '#0a66c2', hosts: ['linkedin.com'] },
  { key: 'letterboxd', label: 'Letterboxd', color: '#40bcf4', hosts: ['letterboxd.com'] },
]
export function linkService(url: string): LinkService {
  try {
    const host = new URL(url).hostname.replace(/^www\.|^m\./, '')
    const s = SERVICES.find((x) => x.hosts.some((h) => host === h || host.endsWith(`.${h}`)))
    if (s) {
      const ic = ICONS[s.key]
      return { key: s.key, label: s.label, color: ic ? `#${ic.hex}` : s.color, icon: ic?.path }
    }
    return { key: 'web', label: host, color: '#6b7280' }
  } catch {
    return { key: 'web', label: url, color: '#6b7280' }
  }
}
// Accept "instagram.com/me" or "https://…"; only http(s) links.
export function cleanLink(input: string): string | null {
  const v = input.trim()
  if (!v) return null
  try {
    const u = new URL(/^https?:\/\//i.test(v) ? v : `https://${v}`)
    if (!/^https?:$/.test(u.protocol) || !u.hostname.includes('.')) return null
    return u.toString()
  } catch {
    return null
  }
}

// Link preview (title, description, image) read through Microlink, a free metadata service,
// only when someone writes a post with a link. The image is fetched and shrunk right away and
// stored in the post; if the site doesn't allow that, the preview simply has no image.
export async function fetchLinkPreview(url: string, timeoutMs = 15000): Promise<import('../data/types').LinkPreview | null> {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), timeoutMs)
  try {
    const res = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`, { signal: ctrl.signal, referrerPolicy: 'no-referrer' })
    if (!res.ok) return null
    const json = (await res.json()) as { status: string; data?: { title?: string; description?: string; publisher?: string; image?: { url?: string } } }
    const d = json.data
    if (json.status !== 'success' || !d || (!d.title && !d.description)) return null
    let image: string | undefined
    if (d.image?.url) {
      try {
        const blob = await (await fetch(d.image.url, { signal: ctrl.signal, referrerPolicy: 'no-referrer' })).blob()
        if (blob.type.startsWith('image/')) image = await compressImage(new File([blob], 'preview', { type: blob.type }), 640, 0.78)
      } catch {
        // the site blocks copying its image: preview without it
      }
    }
    const clip = (s: string | undefined, n: number) => (s ? (s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s) : undefined)
    return { url, title: clip(d.title, 120), description: clip(d.description, 200), site: d.publisher || prettyUrl(url).host, image }
  } catch {
    return null
  } finally {
    clearTimeout(t)
  }
}

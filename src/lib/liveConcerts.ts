// Real upcoming dates, refreshed every night by scripts/fetch-concerts.ts.
// They are merged into the shared concert list before the app renders, so every
// page (artist, profile, concert) sees them. No account anywhere is needed.
import { concerts } from '../data/seed'
import type { Concert } from '../data/types'

export const NEW_SHOW_DAYS = 14
const DISMISSED = 'fandome:seenShows'
export let liveUpdatedAt: number | null = null

export function mergeConcerts(base: Concert[], live: Concert[]): Concert[] {
  const key = (c: Concert) => `${c.artistId}|${c.date}|${c.city.toLowerCase()}`
  const have = new Set(base.map(key))
  return [...base, ...live.filter((c) => !have.has(key(c)) && !base.some((b) => b.id === c.id))]
}

export async function loadLiveConcerts(timeoutMs = 2500) {
  try {
    const ctrl = new AbortController()
    const t = setTimeout(() => ctrl.abort(), timeoutMs)
    const res = await fetch(`${import.meta.env.BASE_URL}live/concerts.json`, { cache: 'no-cache', signal: ctrl.signal })
    clearTimeout(t)
    if (!res.ok) return
    const data = (await res.json()) as { updatedAt: number; concerts: Concert[] }
    const merged = mergeConcerts(concerts, data.concerts ?? [])
    concerts.splice(0, concerts.length, ...merged)
    liveUpdatedAt = data.updatedAt
  } catch {
    // offline or no live file yet: the demo dates stay
  }
}

// Dates announced in the last two weeks for artists you follow, not dismissed on this device.
export function newShowsFor(artistIds: string[], now = Date.now()): Concert[] {
  const gone = dismissedShows()
  const today = new Date(now).toISOString().slice(0, 10)
  return concerts
    .filter((c) => artistIds.includes(c.artistId) && c.date >= today && c.announcedAt && now - c.announcedAt < NEW_SHOW_DAYS * 86_400_000 && !gone.includes(c.id))
    .sort((a, b) => (b.announcedAt ?? 0) - (a.announcedAt ?? 0))
}

export function dismissedShows(): string[] {
  try {
    return JSON.parse(localStorage.getItem(DISMISSED) ?? '[]') as string[]
  } catch {
    return []
  }
}
export function dismissShows(ids: string[]) {
  try {
    localStorage.setItem(DISMISSED, JSON.stringify([...new Set([...dismissedShows(), ...ids])].slice(-300)))
  } catch {
    // ignore
  }
}

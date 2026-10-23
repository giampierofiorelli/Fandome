// Ticketmaster Discovery API → Fandome concerts. Used by the nightly job
// (scripts/fetch-concerts.ts); pure functions so they can be tested.
import type { Concert } from '../data/types'

export interface TmAttraction {
  id: string
  name: string
}
export interface TmEvent {
  id: string
  name: string
  url?: string
  dates?: { start?: { localDate?: string }; status?: { code?: string } }
  _embedded?: { venues?: { name?: string; city?: { name?: string }; country?: { name?: string; countryCode?: string } }[] }
}

const norm = (s: string) => s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]/g, '')

// The attraction whose name is exactly the artist (not a tribute act or a festival).
export function pickAttraction(list: TmAttraction[], artistName: string): TmAttraction | undefined {
  return list.find((a) => norm(a.name) === norm(artistName))
}

// "Madonna: The Celebration Tour" → "The Celebration Tour"
export function tourName(eventName: string, artistName: string): string {
  const cleaned = eventName.replace(new RegExp(`^${artistName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*[-:–—|]\\s*`, 'i'), '').trim()
  return cleaned || eventName
}

export function toConcert(e: TmEvent, artistId: string, artistName: string, firstSeen: Record<string, number>, now: number): Concert | null {
  const date = e.dates?.start?.localDate
  const v = e._embedded?.venues?.[0]
  const status = e.dates?.status?.code
  if (!date || !v?.city?.name || status === 'cancelled') return null
  const id = `tm-${e.id}`
  return {
    id,
    artistId,
    tour: tourName(e.name, artistName),
    venue: v.name ?? '',
    city: v.city.name,
    country: v.country?.name ?? v.country?.countryCode ?? '',
    date,
    setlist: [],
    url: e.url,
    source: 'ticketmaster',
    announcedAt: firstSeen[id] ?? now,
  }
}

// One date per artist + day + city (Ticketmaster lists VIP packages etc. as separate events).
export function dedupe(list: Concert[]): Concert[] {
  const seen = new Set<string>()
  return list.filter((c) => {
    const k = `${c.artistId}|${c.date}|${norm(c.city)}`
    if (seen.has(k)) return false
    seen.add(k)
    return true
  })
}

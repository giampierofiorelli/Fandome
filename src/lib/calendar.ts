// "Add to calendar" for shows. Pure functions (no DOM), so the build can also write
// one .ics file per show: on iPhone, opening a real .ics link shows "Add to Calendar".
import type { Concert } from '../data/types'

// RFC 5545 text escaping.
const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/([,;])/g, '\\$1')
const ymd = (iso: string) => iso.slice(0, 10).replace(/-/g, '')
function nextDay(iso: string) {
  const d = new Date(`${iso.slice(0, 10)}T12:00:00Z`)
  d.setUTCDate(d.getUTCDate() + 1)
  return d.toISOString().slice(0, 10)
}
// Lines longer than 75 octets are folded (continuation lines start with a space).
function fold(line: string) {
  const out: string[] = []
  let rest = line
  while (new TextEncoder().encode(rest).length > 75) {
    let n = 74
    while (new TextEncoder().encode(rest.slice(0, n)).length > 74) n--
    out.push(rest.slice(0, n))
    rest = ' ' + rest.slice(n)
  }
  out.push(rest)
  return out.join('\r\n')
}

export const calendarFileName = (c: Concert) => `${c.id.replace(/[^\w-]/g, '_')}.ics`

export function concertTitle(c: Concert, artistName: string) {
  return `${artistName} · ${c.city}`
}

// All-day event (show times change and often aren't known), with a reminder the day before.
export function concertIcs(c: Concert, artistName: string, now = Date.now()): string {
  const stamp = new Date(now).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
  const details = [c.tour, c.url ? `Tickets (official seller): ${c.url}` : '', 'Saved from Fandome, an independent fan community. Check the time on the official site.']
    .filter(Boolean)
    .join('\n')
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Fandome//Shows//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${c.id}@fandome`,
    `DTSTAMP:${stamp}`,
    `DTSTART;VALUE=DATE:${ymd(c.date)}`,
    `DTEND;VALUE=DATE:${ymd(nextDay(c.date))}`,
    `SUMMARY:${esc(concertTitle(c, artistName))}`,
    `LOCATION:${esc([c.venue, c.city, c.country].filter(Boolean).join(', '))}`,
    `DESCRIPTION:${esc(details)}`,
    ...(c.url ? [`URL:${c.url}`] : []),
    'TRANSP:TRANSPARENT',
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    `DESCRIPTION:${esc(`Tomorrow: ${artistName}`)}`,
    'TRIGGER:-PT15H', // 9:00 the day before
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ]
  return lines.map(fold).join('\r\n') + '\r\n'
}

// Google Calendar "create event" link (opens Google only when the person taps it).
export function googleCalendarUrl(c: Concert, artistName: string) {
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: concertTitle(c, artistName),
    dates: `${ymd(c.date)}/${ymd(nextDay(c.date))}`,
    location: [c.venue, c.city, c.country].filter(Boolean).join(', '),
    details: [c.tour, c.url ? `Tickets (official seller): ${c.url}` : ''].filter(Boolean).join('\n'),
  })
  return `https://calendar.google.com/calendar/render?${p}`
}

import { describe, expect, it } from 'vitest'
import { calendarFileName, concertIcs, googleCalendarUrl } from './calendar'
import type { Concert } from '../data/types'

const show: Concert = { id: 'tm:ABC/1', artistId: 'madonna', tour: 'Celebration; Tour, 2027', venue: 'San Siro', city: 'Milan', country: 'IT', date: '2027-06-14', setlist: [], url: 'https://www.ticketmaster.it/event/1' }

describe('calendar', () => {
  it('makes an all-day event with a reminder', () => {
    const ics = concertIcs(show, 'Madonna', Date.UTC(2026, 9, 24))
    expect(ics).toContain('DTSTART;VALUE=DATE:20270614')
    expect(ics).toContain('DTEND;VALUE=DATE:20270615')
    expect(ics).toContain('SUMMARY:Madonna · Milan')
    expect(ics).toContain('BEGIN:VALARM')
    expect(ics.replace(/\r\n /g, '')).toContain('Celebration\\; Tour\\, 2027')
    expect(ics.split('\r\n').every((l) => new TextEncoder().encode(l).length <= 75)).toBe(true)
  })
  it('crosses month ends', () => {
    expect(concertIcs({ ...show, date: '2027-12-31' }, 'Madonna')).toContain('DTEND;VALUE=DATE:20280101')
  })
  it('safe file names and Google link', () => {
    expect(calendarFileName(show)).toBe('tm_ABC_1.ics')
    expect(googleCalendarUrl(show, 'Madonna')).toContain('dates=20270614%2F20270615')
  })
})

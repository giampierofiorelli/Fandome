import { describe, expect, it } from 'vitest'
import { dedupe, pickAttraction, toConcert, tourName } from './ticketmaster'
import { mergeConcerts } from './liveConcerts'
import type { Concert } from '../data/types'

const ev = (id: string, date = '2027-09-01', city = 'London') => ({
  id,
  name: 'Kylie Minogue: Tension Tour 2027',
  url: `https://ticketmaster.example/${id}`,
  dates: { start: { localDate: date } },
  _embedded: { venues: [{ name: 'The O2', city: { name: city }, country: { name: 'Great Britain' } }] },
})

describe('ticketmaster import', () => {
  it('picks the exact artist, not tribute acts', () => {
    const list = [{ id: 'a1', name: 'Kylie Minogue Tribute' }, { id: 'a2', name: 'Kylie Minogue' }]
    expect(pickAttraction(list, 'Kylie Minogue')?.id).toBe('a2')
    expect(pickAttraction([{ id: 'x', name: 'Madonna Tribute' }], 'Madonna')).toBeUndefined()
  })
  it('maps an event and keeps the first-seen date', () => {
    const c = toConcert(ev('e1'), 'kylie', 'Kylie Minogue', { 'tm-e1': 111 }, 999)!
    expect(c).toMatchObject({ id: 'tm-e1', artistId: 'kylie', tour: 'Tension Tour 2027', venue: 'The O2', city: 'London', date: '2027-09-01', announcedAt: 111, source: 'ticketmaster' })
    expect(toConcert(ev('e2'), 'kylie', 'Kylie Minogue', {}, 999)!.announcedAt).toBe(999)
    expect(toConcert({ ...ev('e3'), dates: { start: { localDate: '2027-01-01' }, status: { code: 'cancelled' } } }, 'kylie', 'Kylie Minogue', {}, 1)).toBeNull()
    expect(tourName('Madonna', 'Madonna')).toBe('Madonna')
  })
  it('drops duplicate packages and dates already in the demo', () => {
    const a = toConcert(ev('e1'), 'kylie', 'Kylie Minogue', {}, 1)!
    const vip = toConcert(ev('e1vip'), 'kylie', 'Kylie Minogue', {}, 1)!
    expect(dedupe([a, vip])).toHaveLength(1)
    const base: Concert[] = [{ ...a, id: 'k-demo' }]
    expect(mergeConcerts(base, [a])).toHaveLength(1)
    expect(mergeConcerts(base, [toConcert(ev('e9', '2027-09-02'), 'kylie', 'Kylie Minogue', {}, 1)!])).toHaveLength(2)
  })
})

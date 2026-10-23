import { describe, expect, it } from 'vitest'
import { activeStories, canMessage, conversations, DAY, dmExpiresIn, initialState, reducer, type State } from './reducer'

const NOW = 1_800_000_000_000
const me = (): State => reducer(initialState(NOW), { type: 'onboard', name: 'Gianni', handle: 'gianni', location: '', artistIds: ['madonna'], followIds: ['u-giulia', 'u-kenji'], at: NOW })

describe('stories', () => {
  it('lasts 24 hours and records who viewed it', () => {
    let s = reducer(me(), { type: 'addStory', id: 'mine', at: NOW, kind: 'text', text: 'hi', bg: 'x' })
    s = reducer(s, { type: 'viewStory', storyId: 's1' })
    expect(s.stories.find((x) => x.id === 's1')!.viewers).toContain('me')
    expect(activeStories(s, NOW + DAY - 1).some((x) => x.id === 'mine')).toBe(true)
    s = reducer(s, { type: 'prune', now: NOW + DAY + 1 })
    expect(s.stories.some((x) => x.id === 'mine')).toBe(false)
  })
})

describe('private messages', () => {
  it('only between people where at least one follows the other', () => {
    const s = me()
    expect(canMessage(s, 'me', 'u-giulia')).toBe(true)
    expect(canMessage(s, 'me', 'u-jonas')).toBe(false) // nobody follows anybody
    expect(canMessage(s, 'me', 'pg-archive')).toBe(false) // pages can't DM yet
    expect(reducer(s, { type: 'sendDm', id: 'x', to: 'u-jonas', at: NOW, text: 'hey' }).dms.some((m) => m.id === 'x')).toBe(false)
  })

  it('unseen messages stay; seen ones disappear 24h after being seen', () => {
    let s = me()
    // d1/d2 from Giulia are unseen: still there after 3 days
    s = reducer(s, { type: 'prune', now: NOW + 3 * DAY })
    expect(s.dms.filter((m) => m.from === 'u-giulia')).toHaveLength(2)
    // I open the chat 3 days later: the 24h clock starts now
    const opened = NOW + 3 * DAY
    s = reducer(s, { type: 'openConversation', withUserId: 'u-giulia', at: opened })
    expect(dmExpiresIn(s.dms.find((m) => m.id === 'd1')!, opened + 3_600_000)).toBe(DAY - 3_600_000)
    s = reducer(s, { type: 'prune', now: opened + DAY - 1 })
    expect(s.dms.some((m) => m.id === 'd1')).toBe(true)
    s = reducer(s, { type: 'prune', now: opened + DAY + 1 })
    expect(s.dms.some((m) => m.id === 'd1')).toBe(false)
  })

  it('my messages expire 24h after the other person sees them', () => {
    let s = reducer(me(), { type: 'sendDm', id: 'out', to: 'u-kenji', at: NOW, text: 'thanks!' })
    s = reducer(s, { type: 'prune', now: NOW + 2 * DAY })
    expect(s.dms.some((m) => m.id === 'out')).toBe(true) // not seen yet
    s = reducer(s, { type: 'partnerSeen', partnerId: 'u-kenji', at: NOW + 2 * DAY })
    s = reducer(s, { type: 'prune', now: NOW + 3 * DAY + 1 })
    expect(s.dms.some((m) => m.id === 'out')).toBe(false)
  })

  it('lists conversations with unread counts', () => {
    const s = me()
    const c = conversations(s, NOW)
    expect(c.map((x) => x.userId)).toEqual(['u-giulia', 'u-kenji'])
    expect(c[0].unread).toBe(2)
  })
})

describe('dm countdown', () => {
  it('never shows more than 24h even if the clock lags the seen time', () => {
    const m = { id: 'a', from: 'x', to: 'me', at: 0, seenAt: 1_000 }
    expect(dmExpiresIn(m, 500)).toBe(DAY)
  })
})

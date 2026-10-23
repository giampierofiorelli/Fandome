import { describe, expect, it } from 'vitest'
import { canHandleReport, initialState, reducer, reportsFor, type State } from './reducer'

const NOW = 1_800_000_000_000
const me = (): State => reducer(initialState(NOW), { type: 'onboard', name: 'Gianni', handle: 'gianni', location: '', artistIds: ['madonna', 'kylie'], followIds: ['u-giulia'], at: NOW })
const as = (s: State, id: string): State => ({ ...s, meId: id })

describe('moderation', () => {
  it('reports go to moderators of that fandom, never to the reporter or the author', () => {
    let s = reducer(me(), { type: 'report', id: 'x', at: NOW, target: { kind: 'post', id: 'p2' }, reason: 'harassment' })
    const r = s.reports.find((x) => x.id === 'x')!
    expect(canHandleReport(s, 'u-giulia', r)).toBe(true) // Giulia moderates Madonna, p2 is a Madonna post
    expect(canHandleReport(s, 'u-kenji', r)).toBe(false) // not a moderator yet
    // a second report from the same person is ignored
    expect(reducer(s, { type: 'report', id: 'y', at: NOW, target: { kind: 'post', id: 'p2' }, reason: 'spam' }).reports.length).toBe(s.reports.length)
    // profile reports are for the admin only
    s = reducer(s, { type: 'report', id: 'u', at: NOW, target: { kind: 'user', id: 'u-rafa' }, reason: 'impersonation' })
    expect(reportsFor(s, 'u-giulia').some((x) => x.id === 'u')).toBe(false)
  })
  it('removing a post records the reason, and the author can appeal once', () => {
    let s = as(me(), 'u-giulia')
    s = reducer(s, { type: 'resolveReport', reportId: 'r1', action: 'remove', reason: 'spam', note: 'Scam', at: NOW })
    const p = s.posts.find((x) => x.id === 'p-spam')!
    expect(p.removed).toMatchObject({ reason: 'spam', note: 'Scam' })
    expect(s.reports.find((x) => x.id === 'r1')!.status).toBe('removed')
    s = as(s, 'u-promo')
    s = reducer(s, { type: 'appeal', postId: 'p-spam', text: 'It was a joke', at: NOW })
    expect(s.posts.find((x) => x.id === 'p-spam')!.removed!.appeal!.status).toBe('pending')
    // only the admin decides appeals
    expect(reducer(s, { type: 'decideAppeal', postId: 'p-spam', restore: true })).toBe(s)
    s = reducer({ ...s, meId: 'me', adminId: 'me' }, { type: 'decideAppeal', postId: 'p-spam', restore: false })
    expect(s.posts.find((x) => x.id === 'p-spam')!.removed!.appeal!.status).toBe('upheld')
  })
  it('moderator requests need activity and admin approval; the admin has no badge', () => {
    let s = me()
    expect(reducer(s, { type: 'requestMod', artistIds: ['madonna'], reason: 'I love this fandom', at: NOW + 40 * 864e5 })).toBe(s) // no activity
    s = reducer(s, { type: 'post', id: 'hi', at: NOW, text: 'hi' })
    s = reducer(s, { type: 'requestMod', artistIds: ['madonna', 'gaga'], reason: 'I love this fandom', at: NOW })
    expect(s.users.find((u) => u.id === 'me')!.modRequest).toMatchObject({ artistIds: ['madonna'], status: 'pending' }) // only fandoms you're in
    expect(reducer(s, { type: 'decideModRequest', userId: 'me', approve: true, at: NOW })).toBe(s) // not admin
    s = reducer(s, { type: 'setAdmin', on: true })
    s = reducer(s, { type: 'decideModRequest', userId: 'u-kenji', approve: true, at: NOW })
    expect(s.users.find((u) => u.id === 'u-kenji')!.mod!.artistIds).toEqual(['madonna'])
    expect(s.users.find((u) => u.id === 'me')!.mod).toBeUndefined()
  })
})

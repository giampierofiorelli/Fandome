import { describe, expect, it } from 'vitest'
import { canHandleReport, initialState, reducer, reportsFor, type State } from './reducer'

const NOW = 1_800_000_000_000
const me = (): State => reducer(initialState(NOW), { type: 'onboard', name: 'Gianni', handle: 'gianni', location: '', artistIds: ['madonna', 'kylie'], followIds: ['u-giulia'], at: NOW })
const as = (s: State, id: string): State => ({ ...s, meId: id })

describe('moderation', () => {
  it('reports go to moderators of that fandom, never to the reporter or the author', () => {
    let s = reducer(me(), { type: 'report', id: 'x', at: NOW, target: { kind: 'post', id: 'p2' }, reason: 'harassment', goodFaith: true })
    const r = s.reports.find((x) => x.id === 'x')!
    expect(canHandleReport(s, 'u-giulia', r)).toBe(true) // Giulia moderates Madonna, p2 is a Madonna post
    expect(canHandleReport(s, 'u-kenji', r)).toBe(false) // not a moderator yet
    // a second report from the same person is ignored
    expect(reducer(s, { type: 'report', id: 'y', at: NOW, target: { kind: 'post', id: 'p2' }, reason: 'spam', goodFaith: true }).reports.length).toBe(s.reports.length)
    // profile reports are for the admin only
    s = reducer(s, { type: 'report', id: 'u', at: NOW, target: { kind: 'user', id: 'u-rafa' }, reason: 'impersonation', goodFaith: true })
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

describe('reports without a profile and pin order', () => {
  it('a guest can report with name and email, or anonymously for child abuse', () => {
    const g = reducer(initialState(NOW), { type: 'onboard', name: 'Guest', handle: 'guest', location: '', artistIds: [], followIds: [], at: NOW })
    const base = { type: 'report' as const, at: NOW, target: { kind: 'post' as const, id: 'p2' }, goodFaith: true }
    expect(reducer(g, { ...base, id: 'a', reason: 'harassment' }).reports.some((r) => r.id === 'a')).toBe(false)
    expect(reducer(g, { ...base, id: 'b', reason: 'harassment', contact: { name: 'Ann', email: 'ann@example.com' } }).reports.some((r) => r.id === 'b')).toBe(true)
    expect(reducer(g, { ...base, id: 'c', reason: 'sexual' }).reports.some((r) => r.id === 'c')).toBe(true)
    expect(reducer(g, { ...base, id: 'd', reason: 'sexual', goodFaith: false }).reports.some((r) => r.id === 'd')).toBe(false)
  })
  it('moves pinned posts up and down', () => {
    let s = me()
    for (const id of ['a', 'b', 'c']) s = reducer(s, { type: 'post', id, at: NOW, text: id })
    for (const id of ['a', 'b', 'c']) s = reducer(s, { type: 'pinPost', postId: id })
    s = reducer(s, { type: 'movePin', postId: 'a', dir: -1 })
    expect(s.users.find((u) => u.id === 'me')!.pinned).toEqual(['c', 'a', 'b'])
    expect(reducer(s, { type: 'movePin', postId: 'c', dir: -1 })).toBe(s)
  })
})

describe('profile links', () => {
  it('adds up to 8 links and counts clicks anonymously, not your own', () => {
    let s = me()
    s = reducer(s, { type: 'addLink', id: 'l', url: 'https://instagram.com/gianni' })
    expect(reducer(s, { type: 'addLink', id: 'bad', url: 'javascript:alert(1)' })).toBe(s)
    s = reducer(s, { type: 'clickLink', userId: 'me', id: 'l' })
    expect(s.users.find((u) => u.id === 'me')!.links![0].clicks).toBe(0)
    s = reducer({ ...s, meId: 'u-giulia' }, { type: 'clickLink', userId: 'me', id: 'l' })
    expect(s.users.find((u) => u.id === 'me')!.links![0]).toEqual({ id: 'l', url: 'https://instagram.com/gianni', label: undefined, clicks: 1 })
  })
})

describe('ticket board and suggestions', () => {
  it('spare tickets need the face-value promise; one open listing per show; listing enables contact', () => {
    let s = me()
    const base = { type: 'addListing' as const, concertId: 'm-milan-2027', qty: 2, at: NOW }
    expect(reducer(s, { ...base, id: 'x', kind: 'spare', faceValue: false })).toBe(s)
    s = reducer(s, { ...base, id: 'x', kind: 'spare', faceValue: true })
    expect(s.tickets.find((t) => t.id === 'x')).toMatchObject({ userId: 'me', qty: 2, kind: 'spare' })
    expect(reducer(s, { ...base, id: 'y', kind: 'need', faceValue: false }).tickets.some((t) => t.id === 'y')).toBe(false)
    // u-sam doesn't follow me and I don't follow him, but he can write about my listing
    s = reducer({ ...s, meId: 'u-sam' }, { type: 'sendDm', id: 'd', to: 'me', at: NOW, text: 'Still available?' })
    expect(s.dms.some((m) => m.id === 'd')).toBe(true)
    s = reducer({ ...s, meId: 'me' }, { type: 'closeListing', id: 'x' })
    expect(s.tickets.find((t) => t.id === 'x')!.closed).toBe(true)
  })
  it('suggests an artist room in a message', () => {
    let s = me()
    s = reducer(s, { type: 'sendDm', id: 'a', to: 'u-giulia', at: NOW, artistId: 'kylie' })
    expect(s.dms.find((m) => m.id === 'a')!.artistId).toBe('kylie')
    expect(reducer(s, { type: 'sendDm', id: 'b', to: 'u-giulia', at: NOW, artistId: 'nobody' }).dms.some((m) => m.id === 'b')).toBe(false)
  })
})

describe('collection', () => {
  it('adds and removes showcase pieces', () => {
    let s = me()
    s = reducer(s, { type: 'addItem', item: { id: 'i1', title: ' Ray of Light ', format: 'Vinyl LP', year: 1998, at: NOW } })
    expect(s.users.find((u) => u.id === 'me')!.collection![0]).toMatchObject({ id: 'i1', title: 'Ray of Light' })
    expect(reducer(s, { type: 'addItem', item: { id: 'i2', title: '  ', format: 'CD', at: NOW } })).toBe(s)
    s = reducer(s, { type: 'removeItem', id: 'i1' })
    expect(s.users.find((u) => u.id === 'me')!.collection).toEqual([])
  })
})

describe('collab posts', () => {
  it('invites, accepts, shows on both profiles and feeds, and lets a collaborator leave', async () => {
    const { followingFeed } = await import('../lib/feed')
    const { isOwnedBy } = await import('../lib/collab')
    let s = me() // follows u-giulia
    s = reducer(s, { type: 'post', id: 'cp', at: NOW, text: 'together', collabIds: ['u-giulia', 'u-giulia', 'nobody'] })
    let p = s.posts.find((x) => x.id === 'cp')!
    expect(p.collab).toEqual([{ userId: 'u-giulia', status: 'pending' }])
    expect(isOwnedBy(p, 'u-giulia')).toBe(false) // not before accepting
    s = reducer({ ...s, meId: 'u-giulia' }, { type: 'respondCollab', postId: 'cp', accept: true })
    p = s.posts.find((x) => x.id === 'cp')!
    expect(isOwnedBy(p, 'u-giulia')).toBe(true)
    // a follower of Giulia (not of me) now sees it
    const kenji = { ...s.users.find((u) => u.id === 'u-kenji')!, following: ['u-giulia'] }
    expect(followingFeed(s.posts, kenji).some((i) => i.post.id === 'cp')).toBe(true)
    s = reducer(s, { type: 'leaveCollab', postId: 'cp' })
    expect(s.posts.find((x) => x.id === 'cp')!.collab).toBeUndefined()
  })
})

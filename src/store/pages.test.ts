import { describe, expect, it } from 'vitest'
import { canManagePage, findInvite, initialState, invitesFor, pagesManagedBy, reducer, type State } from './reducer'
import { engagementByFan, starterPack } from '../lib/packs'
import type { Post, User } from '../data/types'

const NOW = 1_800_000_000_000

const signedIn = (): State =>
  reducer(initialState(NOW), { type: 'onboard', name: 'Gianni', handle: 'gianni', location: 'Rome', artistIds: ['madonna'], followIds: [] })

const create = (s: State, handle = 'mysite') =>
  reducer(s, { type: 'createPage', id: `pg-${handle}`, handle, name: 'My Site', website: 'https://my.example', category: 'Fan website', bio: '', color: '#000', verifyCode: 'c', at: NOW })

describe('pages', () => {
  it('a signed-in person creates a page and becomes its owner', () => {
    const s = create(signedIn())
    expect(canManagePage(s, 'pg-mysite', 'me')).toBe(true)
    expect(pagesManagedBy(s, 'me').map((p) => p.handle)).toEqual(['mysite'])
  })

  it('guests cannot create pages, and handles must be unique', () => {
    const guest = reducer(initialState(NOW), { type: 'onboard', name: 'Guest', handle: 'guest', location: '', artistIds: [], followIds: [] })
    expect(create(guest).users.some((u) => u.id === 'pg-mysite')).toBe(false)
    expect(create(signedIn(), 'giulia_vogue').users.some((u) => u.id === 'pg-giulia_vogue')).toBe(false)
  })

  it('posts as the page only when you manage it', () => {
    let s = create(signedIn())
    s = reducer(s, { type: 'post', id: 'x1', at: NOW, text: 'hello', as: 'pg-mysite' })
    s = reducer(s, { type: 'post', id: 'x2', at: NOW, text: 'sneaky', as: 'pg-archive' })
    expect(s.posts.find((p) => p.id === 'x1')!.authorId).toBe('pg-mysite')
    expect(s.posts.find((p) => p.id === 'x2')!.authorId).toBe('me')
  })

  it('an invite to an existing user can be accepted only by that user', () => {
    let s = create(signedIn())
    s = reducer(s, { type: 'invitePageAdmin', pageId: 'pg-mysite', inviteId: 'i1', code: 'C1', toUserId: 'u-sam', at: NOW })
    expect(findInvite(s, 'C1')!.invite.status).toBe('pending')
    s = reducer(s, { type: 'acceptInvite', code: 'C1', at: NOW }) // I'm not Sam
    expect(canManagePage(s, 'pg-mysite', 'u-sam')).toBe(false)
    expect(findInvite(s, 'C1')!.invite.status).toBe('pending')
  })

  it('the demo invite for me works end to end, and admins cannot remove others', () => {
    let s = signedIn()
    expect(invitesFor(s, 'me').map((x) => x.page.id)).toEqual(['pg-archive'])
    s = reducer(s, { type: 'acceptInvite', code: 'demo-invite-ray', at: NOW })
    expect(canManagePage(s, 'pg-archive', 'me')).toBe(true)
    expect(invitesFor(s, 'me')).toHaveLength(0)
    s = reducer(s, { type: 'removePageMember', pageId: 'pg-archive', userId: 'u-giulia' })
    s = reducer(s, { type: 'removePageMember', pageId: 'pg-archive', userId: 'u-kenji' })
    expect(canManagePage(s, 'pg-archive', 'u-giulia') && canManagePage(s, 'pg-archive', 'u-kenji')).toBe(true)
    s = reducer(s, { type: 'removePageMember', pageId: 'pg-archive', userId: 'me' })
    expect(canManagePage(s, 'pg-archive', 'me')).toBe(false)
  })

  it('a guest cannot accept an invite until they create a profile', () => {
    const guest = reducer(initialState(NOW), { type: 'onboard', name: 'Guest', handle: 'guest', location: '', artistIds: [], followIds: [] })
    const s = reducer(guest, { type: 'acceptInvite', code: 'demo-invite-ray', at: NOW })
    expect(canManagePage(s, 'pg-archive', 'me')).toBe(false)
  })

  it('invite links can be revoked', () => {
    let s = create(signedIn())
    s = reducer(s, { type: 'invitePageAdmin', pageId: 'pg-mysite', inviteId: 'i2', code: 'LINK', at: NOW })
    s = reducer(s, { type: 'revokeInvite', pageId: 'pg-mysite', inviteId: 'i2' })
    expect(findInvite(s, 'LINK')!.invite.status).toBe('revoked')
  })

  it('changing the website clears verification', () => {
    let s = create(signedIn())
    s = reducer(s, { type: 'requestVerification', pageId: 'pg-mysite' })
    expect(s.users.find((u) => u.id === 'pg-mysite')!.page!.verification).toBe('pending')
    s = reducer(s, { type: 'updatePage', pageId: 'pg-mysite', name: 'My Site', bio: '', website: 'https://other.example', category: 'Fan website' })
    expect(s.users.find((u) => u.id === 'pg-mysite')!.page!.verification).toBe('unverified')
  })
})

describe('algorithmic starter pack', () => {
  const user = (id: string, extra: Partial<User> = {}): User => ({ id, handle: id, name: id, color: '', bio: '', location: '', fanSince: {}, top4: [], attended: [], going: [], ratings: {}, following: [], ...extra })
  const post = (id: string, authorId: string, daysAgo: number, extra: Partial<Post> = {}): Post => ({ id, authorId, text: '', createdAt: NOW - daysAgo * 86_400_000, artistId: 'madonna', lang: 'en', likes: [], reposts: [], ...extra })
  const users = [user('a'), user('b'), user('c'), user('famous'), user('site', { kind: 'page' })]

  it('ranks by engagement on the artist in the last 30 days, not by followers', () => {
    const posts = [
      post('p1', 'a', 2, { likes: ['b', 'c'], reposts: [{ userId: 'c', at: NOW, tags: [] }] }), // 2 + 2 = 4
      post('r1', 'b', 1, { replyTo: 'p1' }), // +3 for a
      post('p2', 'b', 3, { likes: ['a'] }), // 1
      post('old', 'famous', 40, { likes: ['a', 'b', 'c'] }), // outside the window
      post('other', 'c', 1, { artistId: 'kylie', likes: ['a', 'b'] }), // other artist
      post('pg', 'site', 1, { likes: ['a', 'b', 'c'] }), // pages are not fans
    ]
    const ranked = engagementByFan(posts, users, 'madonna', NOW)
    expect(ranked.map((m) => m.userId)).toEqual(['a', 'b'])
    expect(ranked[0].score).toBe(7)
  })

  it('self-likes do not count and the pack is capped at five', () => {
    const posts = Array.from({ length: 8 }, (_, i) => post(`p${i}`, `u${i}`, 1, { likes: [`u${i}`, 'x'] }))
    const many = Array.from({ length: 8 }, (_, i) => user(`u${i}`))
    const pack = starterPack(posts, many, 'madonna', NOW)
    expect(pack).toHaveLength(5)
    expect(pack.every((m) => m.score === 1)).toBe(true)
  })
})

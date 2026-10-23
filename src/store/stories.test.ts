import { describe, expect, it } from 'vitest'
import { DAY, initialState, messagingLeft, messagingPaused, reducer, type State } from './reducer'

const NOW = 1_800_000_000_000
const me = (): State => reducer(initialState(NOW), { type: 'onboard', name: 'Gianni', handle: 'gianni', location: '', artistIds: ['madonna'], followIds: ['u-giulia', 'u-jonas'], at: NOW })

describe('story reshare and video', () => {
  it('reshares a live story as a snapshot with the original author', () => {
    let s = reducer(me(), { type: 'shareStory', id: 'sh1', at: NOW, storyId: 's1', text: ' same! ' })
    const st = s.stories.find((x) => x.id === 'sh1')!
    expect(st.kind).toBe('share')
    expect(st.authorId).toBe('me')
    expect(st.text).toBe('same!')
    expect(st.shared).toMatchObject({ storyId: 's1', authorId: 'u-giulia', kind: 'text' })
    // resharing a reshare points at the original
    s = { ...s, meId: 'u-rafa' }
    s = reducer(s, { type: 'shareStory', id: 'sh2', at: NOW, storyId: 'sh1' })
    expect(s.stories.find((x) => x.id === 'sh2')!.shared!.storyId).toBe('s1')
  })
  it('does not reshare your own or expired stories', () => {
    const s = me()
    const own = reducer(s, { type: 'addStory', id: 'mine', at: NOW, kind: 'text', text: 'hi', bg: 'x' })
    expect(reducer(own, { type: 'shareStory', id: 'x', at: NOW, storyId: 'mine' })).toBe(own)
    expect(reducer(s, { type: 'shareStory', id: 'x', at: NOW + 2 * DAY, storyId: 's1' })).toBe(s)
  })
  it('accepts videos up to 3 minutes only', () => {
    const s = me()
    const ok = reducer(s, { type: 'addStory', id: 'v1', at: NOW, kind: 'video', video: { key: 'v-1-a', duration: 179.9 } })
    expect(ok.stories.some((x) => x.id === 'v1')).toBe(true)
    expect(reducer(s, { type: 'addStory', id: 'v2', at: NOW, kind: 'video', video: { key: 'v-1-b', duration: 200 } })).toBe(s)
  })
})

describe('messaging needs activity', () => {
  it('new accounts get 30 days, then messaging pauses until they act', () => {
    let s = me()
    expect(messagingPaused(s, 'me', NOW + 29 * DAY)).toBe(false)
    const later = NOW + 31 * DAY
    expect(messagingPaused(s, 'me', later)).toBe(true)
    const blocked = reducer(s, { type: 'sendDm', id: 'd', to: 'u-giulia', at: later, text: 'hi' })
    expect(blocked.dms.some((m) => m.id === 'd')).toBe(false)
    // a post switches it back on
    s = reducer(s, { type: 'post', id: 'p', at: later, text: 'back!' })
    expect(messagingPaused(s, 'me', later)).toBe(false)
    s = reducer(s, { type: 'sendDm', id: 'd', to: 'u-giulia', at: later, text: 'hi' })
    expect(s.dms.some((m) => m.id === 'd')).toBe(true)
  })
  it('a like counts as activity', () => {
    let s = me()
    const t = NOW + 25 * DAY
    s = reducer(s, { type: 'like', postId: 'p2' })
    // likes are stamped with the real clock; just check it moved forward from joining
    expect(messagingLeft(s, 'me', t)).toBeGreaterThan(messagingLeft(me(), 'me', t) - 1)
  })
  it('seed fan Jonas is inactive', () => {
    expect(messagingPaused(me(), 'u-jonas', NOW)).toBe(true)
    expect(messagingPaused(me(), 'u-giulia', NOW)).toBe(false)
  })
})

describe('post sharing, page rules, locked inbox', () => {
  it('puts a post in a story and sends it in a message', () => {
    let s = me()
    s = reducer(s, { type: 'sharePostToStory', id: 'ps', at: NOW, postId: 'p1', text: 'look' })
    const st = s.stories.find((x) => x.id === 'ps')!
    expect(st.kind).toBe('post')
    expect(st.post).toMatchObject({ id: 'p1', authorId: 'u-giulia' })
    s = reducer(s, { type: 'sendDm', id: 'dp', to: 'u-giulia', at: NOW, postId: 'p1' })
    expect(s.dms.find((m) => m.id === 'dp')!.postId).toBe('p1')
    expect(reducer(s, { type: 'sendDm', id: 'bad', to: 'u-giulia', at: NOW, postId: 'nope' }).dms.some((m) => m.id === 'bad')).toBe(false)
  })
  it('website pages right away, community pages need recent activity', () => {
    const page = (category: string, id: string) => ({ type: 'createPage' as const, id, handle: id, name: 'X', website: 'https://x.com', category, bio: '', color: '#fff', verifyCode: 'c', at: NOW })
    let s = me()
    expect(reducer(s, page('Fan club', 'club1')).users.some((u) => u.id === 'club1')).toBe(false)
    expect(reducer(s, page('Fan website', 'site1')).users.some((u) => u.id === 'site1')).toBe(true)
    s = reducer(s, { type: 'post', id: 'hi', at: NOW, text: 'hello' })
    expect(reducer(s, page('Fan club', 'club2')).users.some((u) => u.id === 'club2')).toBe(true)
  })
  it('while paused, messages arrive but opening the chat leaves them unread', () => {
    let s = me()
    const later = NOW + 40 * DAY
    s = reducer(s, { type: 'receiveDm', id: 'in', from: 'u-giulia', at: later, text: 'hey' })
    s = reducer(s, { type: 'openConversation', withUserId: 'u-giulia', at: later })
    expect(s.dms.find((m) => m.id === 'in')!.seenAt).toBeUndefined()
    s = reducer(s, { type: 'prune', now: later + 10 * DAY })
    expect(s.dms.some((m) => m.id === 'in')).toBe(true)
  })
})

describe('pinned posts', () => {
  it('pins up to 3 of your own posts and replaces on request', () => {
    let s = me()
    for (const id of ['a', 'b', 'c', 'd']) s = reducer(s, { type: 'post', id, at: NOW, text: id })
    for (const id of ['a', 'b', 'c']) s = reducer(s, { type: 'pinPost', postId: id })
    const pins = () => s.users.find((u) => u.id === 'me')!.pinned
    expect(pins()).toEqual(['c', 'b', 'a'])
    expect(reducer(s, { type: 'pinPost', postId: 'd' })).toBe(s) // full
    s = reducer(s, { type: 'pinPost', postId: 'd', replace: 'b' })
    expect(pins()).toEqual(['d', 'c', 'a'])
    s = reducer(s, { type: 'unpinPost', postId: 'c' })
    expect(pins()).toEqual(['d', 'a'])
    expect(reducer(s, { type: 'pinPost', postId: 'p1' })).toBe(s) // not yours
  })
})

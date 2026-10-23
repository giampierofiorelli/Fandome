import { describe, expect, it } from 'vitest'
import { extractTags, initialState, reducer, type State } from './reducer'
import { followingFeed } from '../lib/feed'
import { trending } from '../lib/util'

const NOW = 1_800_000_000_000

function onboarded(): State {
  return reducer(initialState(NOW), { type: 'onboard', name: 'Test', handle: 'tester', location: 'Milan', artistIds: ['madonna'], followIds: ['u-giulia'] })
}

describe('reducer', () => {
  it('onboards a user with fandoms and starter pack follows', () => {
    const s = onboarded()
    const me = s.users.find((u) => u.id === s.meId)!
    expect(me.handle).toBe('tester')
    expect(Object.keys(me.fanSince)).toEqual(['madonna'])
    expect(me.following).toEqual(['u-giulia'])
  })

  it('creates a post and a review updates my rating', () => {
    let s = onboarded()
    s = reducer(s, { type: 'post', id: 'x1', at: NOW, text: 'Masterpiece #rayoflight', artistId: 'madonna', review: { albumId: 'm-ray', rating: 4.5 } })
    expect(s.posts[0].id).toBe('x1')
    expect(s.users.find((u) => u.id === 'me')!.ratings['m-ray']).toBe(4.5)
  })

  it('toggles likes', () => {
    let s = onboarded()
    s = reducer(s, { type: 'like', postId: 'p2' })
    expect(s.posts.find((p) => p.id === 'p2')!.likes).toContain('me')
    s = reducer(s, { type: 'like', postId: 'p2' })
    expect(s.posts.find((p) => p.id === 'p2')!.likes).not.toContain('me')
  })

  it('allows only one poll vote per user', () => {
    let s = onboarded()
    s = reducer(s, { type: 'vote', postId: 'p7', option: 0 })
    s = reducer(s, { type: 'vote', postId: 'p7', option: 1 })
    const opts = s.posts.find((p) => p.id === 'p7')!.poll!.options
    expect(opts[0].votes).toContain('me')
    expect(opts[1].votes).not.toContain('me')
  })

  it('only the quoted author can detach a quote', () => {
    let s = onboarded()
    s = reducer(s, { type: 'post', id: 'orig', at: NOW, text: 'original' })
    s = { ...s, posts: [{ ...s.posts[0], id: 'q', authorId: 'u-rafa', quoteOf: 'orig' }, ...s.posts] }
    s = reducer(s, { type: 'detachQuote', postId: 'q' })
    expect(s.posts.find((p) => p.id === 'q')!.quoteDetached).toBe(true)
    // p15 quotes p1 (by Giulia): I can't detach it
    s = reducer(s, { type: 'detachQuote', postId: 'p15' })
    expect(s.posts.find((p) => p.id === 'p15')!.quoteDetached).toBeFalsy()
  })

  it('caps Top 4 favourites at four albums', () => {
    let s = onboarded()
    for (const id of ['m-virgin', 'm-trueblue', 'm-prayer', 'm-ray', 'm-music']) s = reducer(s, { type: 'toggleTop4', albumId: id })
    expect(s.users.find((u) => u.id === 'me')!.top4).toHaveLength(4)
  })

  it('reposts with tags appear in the following feed of followers', () => {
    let s = onboarded()
    s = reducer(s, { type: 'repost', postId: 'p9', tags: ['iconic'], at: NOW })
    const me = s.users.find((u) => u.id === 'me')!
    const feed = followingFeed(s.posts, me)
    expect(feed.some((i) => i.repostedBy?.userId === 'me' && i.post.id === 'p9')).toBe(true)
  })
})

describe('helpers', () => {
  it('extracts unicode hashtags', () => {
    expect(extractTags('Ciao #Torino87 e #città!')).toEqual(['torino87', 'città'])
  })

  it('ranks trending tags for a fandom', () => {
    const s = initialState(NOW)
    const t = trending(s.posts, { artistId: 'madonna', now: NOW })
    expect(t.length).toBeGreaterThan(0)
    expect(t.map((x) => x.tag)).toContain('eras')
  })
})

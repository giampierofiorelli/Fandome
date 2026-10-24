import { describe, expect, it } from 'vitest'
import { latestFeed, trendingFeed, trendScore } from './feed'
import { suggestArtists } from './suggest'
import type { Artist, Post, User } from '../data/types'

const H = 3_600_000
const now = 1_000 * H
const post = (id: string, over: Partial<Post> = {}): Post =>
  ({ id, authorId: 'a', text: 'hi', createdAt: now - H, likes: [], reposts: [], artistId: 'madonna', ...over }) as Post

describe('feeds', () => {
  it('Latest is chronological and only about your artists', () => {
    const items = latestFeed([post('old', { createdAt: now - 5 * H }), post('new'), post('other', { artistId: 'kylie' })], ['madonna'])
    expect(items.map((i) => i.post.id)).toEqual(['new', 'old'])
  })
  it('counts each person once, at their strongest action, and not the author', () => {
    const p = post('p', { likes: ['b', 'a'], reposts: [{ userId: 'b', tags: [], at: now }] })
    const reply = post('r', { authorId: 'c', replyTo: 'p' })
    // b: repost (2), c: reply (3), a is the author
    expect(trendScore(p, [p, reply], now)).toBeCloseTo(5 / Math.pow(3, 1.5))
  })
  it('Trending keeps the last 48h, at most two posts per author, nothing without engagement', () => {
    const posts = [
      post('a1', { likes: ['x', 'y', 'z'] }),
      post('a2', { likes: ['x', 'y'] }),
      post('a3', { likes: ['x'] }),
      post('b1', { authorId: 'b', likes: ['x'] }),
      post('c1', { authorId: 'c' }),
      post('old', { authorId: 'd', likes: ['x', 'y', 'z', 'w'], createdAt: now - 72 * H }),
    ]
    const { items, hours } = trendingFeed(posts, ['madonna'], now)
    expect(hours).toBe(48)
    expect(items.map((i) => i.post.id)).toEqual(['a1', 'a2', 'b1'])
  })
})

describe('artist suggestions', () => {
  const artists = [{ id: 'madonna', name: 'Madonna' }, { id: 'kylie', name: 'Kylie' }, { id: 'psb', name: 'PSB' }] as Artist[]
  const u = (id: string, fans: string[], following: string[] = []) => ({ id, name: id.toUpperCase(), fanSince: Object.fromEntries(fans.map((f) => [f, 2000])), following }) as unknown as User
  it('explains why, friends first', () => {
    const me = u('me', ['madonna'], ['g'])
    const s = suggestArtists(me, [me, u('g', ['psb']), u('k', ['madonna', 'kylie'])], artists)
    expect(s.map((x) => x.artist.id)).toEqual(['psb', 'kylie'])
    expect(s[0].reason).toBe('Followed by G')
    expect(s[1].reason).toBe('Fans of Madonna also follow')
  })
})

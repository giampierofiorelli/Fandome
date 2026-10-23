import { seedChats, seedPosts, seedUsers } from '../data/seed'
import type { ChatMessage, Id, Poll, Post, User } from '../data/types'

export interface State {
  version: 1
  meId: Id | null
  users: User[]
  posts: Post[]
  chats: Record<string, ChatMessage[]>
  lastSeen: number // for the "You're all caught up" finite feed
}

export type Action =
  | { type: 'onboard'; name: string; handle: string; location: string; artistIds: Id[]; followIds: Id[] }
  | { type: 'post'; id: Id; at: number; text: string; artistId?: Id; concertId?: Id; quoteOf?: Id; replyTo?: Id; poll?: Poll; review?: { albumId: Id; rating: number } }
  | { type: 'delete'; postId: Id }
  | { type: 'like'; postId: Id }
  | { type: 'repost'; postId: Id; tags: string[]; at: number }
  | { type: 'unrepost'; postId: Id }
  | { type: 'vote'; postId: Id; option: number }
  | { type: 'detachQuote'; postId: Id }
  | { type: 'follow'; userId: Id }
  | { type: 'followMany'; userIds: Id[] }
  | { type: 'followArtist'; artistId: Id }
  | { type: 'toggleAttended'; concertId: Id }
  | { type: 'toggleGoing'; concertId: Id }
  | { type: 'rate'; albumId: Id; rating: number }
  | { type: 'toggleTop4'; albumId: Id }
  | { type: 'chat'; room: string; id: Id; userId?: Id; text: string; at: number }
  | { type: 'markSeen'; at: number }
  | { type: 'reset'; now: number }

export function initialState(now: number): State {
  return {
    version: 1,
    meId: null,
    users: seedUsers.map((u) => ({ ...u })),
    posts: seedPosts(now),
    chats: seedChats(now),
    lastSeen: now - 12 * 60 * 60_000,
  }
}

const toggle = (list: Id[], id: Id) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id])

export function extractTags(text: string): string[] {
  return Array.from(text.matchAll(/#([\p{L}\p{N}_]+)/gu), (m) => m[1].toLowerCase())
}

function updateMe(state: State, fn: (me: User) => User): State {
  if (!state.meId) return state
  return { ...state, users: state.users.map((u) => (u.id === state.meId ? fn(u) : u)) }
}

function updatePost(state: State, postId: Id, fn: (p: Post) => Post): State {
  return { ...state, posts: state.posts.map((p) => (p.id === postId ? fn(p) : p)) }
}

export function reducer(state: State, action: Action): State {
  const me = state.meId
  switch (action.type) {
    case 'onboard': {
      const user: User = {
        id: 'me',
        handle: action.handle,
        name: action.name,
        color: '#ff5fa2',
        bio: '',
        location: action.location,
        fanSince: Object.fromEntries(action.artistIds.map((a) => [a, new Date().getFullYear()])),
        top4: [],
        attended: [],
        going: [],
        ratings: {},
        following: action.followIds,
      }
      return { ...state, meId: 'me', users: [...state.users.filter((u) => u.id !== 'me'), user] }
    }
    case 'post': {
      if (!me) return state
      const post: Post = {
        id: action.id,
        authorId: me,
        text: action.text,
        createdAt: action.at,
        artistId: action.artistId,
        concertId: action.concertId,
        quoteOf: action.quoteOf,
        replyTo: action.replyTo,
        poll: action.poll,
        review: action.review,
        lang: 'en',
        likes: [],
        reposts: [],
      }
      let next: State = { ...state, posts: [post, ...state.posts] }
      if (action.review) next = reducer(next, { type: 'rate', albumId: action.review.albumId, rating: action.review.rating })
      return next
    }
    case 'delete':
      return { ...state, posts: state.posts.filter((p) => !(p.id === action.postId && p.authorId === me)) }
    case 'like':
      if (!me) return state
      return updatePost(state, action.postId, (p) => ({ ...p, likes: toggle(p.likes, me) }))
    case 'repost':
      if (!me) return state
      return updatePost(state, action.postId, (p) => ({
        ...p,
        reposts: [...p.reposts.filter((r) => r.userId !== me), { userId: me, at: action.at, tags: action.tags }],
      }))
    case 'unrepost':
      if (!me) return state
      return updatePost(state, action.postId, (p) => ({ ...p, reposts: p.reposts.filter((r) => r.userId !== me) }))
    case 'vote':
      if (!me) return state
      return updatePost(state, action.postId, (p) => {
        if (!p.poll || p.poll.options.some((o) => o.votes.includes(me))) return p
        const options = p.poll.options.map((o, i) => (i === action.option ? { ...o, votes: [...o.votes, me] } : o))
        return { ...p, poll: { options } }
      })
    case 'detachQuote': {
      // Only the author of the quoted post can detach their post from a quote.
      const quote = state.posts.find((p) => p.id === action.postId)
      const original = quote?.quoteOf ? state.posts.find((p) => p.id === quote.quoteOf) : undefined
      if (!original || original.authorId !== me) return state
      return updatePost(state, action.postId, (p) => ({ ...p, quoteDetached: true }))
    }
    case 'follow':
      if (action.userId === me) return state
      return updateMe(state, (u) => ({ ...u, following: toggle(u.following, action.userId) }))
    case 'followMany':
      return updateMe(state, (u) => ({ ...u, following: Array.from(new Set([...u.following, ...action.userIds.filter((id) => id !== me)])) }))
    case 'followArtist':
      return updateMe(state, (u) => {
        const fanSince = { ...u.fanSince }
        if (fanSince[action.artistId]) delete fanSince[action.artistId]
        else fanSince[action.artistId] = new Date().getFullYear()
        return { ...u, fanSince }
      })
    case 'toggleAttended':
      return updateMe(state, (u) => ({ ...u, attended: toggle(u.attended, action.concertId) }))
    case 'toggleGoing':
      return updateMe(state, (u) => ({ ...u, going: toggle(u.going, action.concertId) }))
    case 'rate':
      return updateMe(state, (u) => ({ ...u, ratings: { ...u.ratings, [action.albumId]: action.rating } }))
    case 'toggleTop4':
      return updateMe(state, (u) => {
        if (u.top4.includes(action.albumId)) return { ...u, top4: u.top4.filter((a) => a !== action.albumId) }
        if (u.top4.length >= 4) return u
        return { ...u, top4: [...u.top4, action.albumId] }
      })
    case 'chat': {
      const userId = action.userId ?? me
      if (!userId) return state
      const msg: ChatMessage = { id: action.id, userId, text: action.text, at: action.at }
      return { ...state, chats: { ...state.chats, [action.room]: [...(state.chats[action.room] ?? []), msg].slice(-200) } }
    }
    case 'markSeen':
      return { ...state, lastSeen: action.at }
    case 'reset':
      return initialState(action.now)
  }
}

// Data export (lesson from Amino: users must be able to take their data with them).
export function exportMyData(state: State) {
  const me = state.users.find((u) => u.id === state.meId)
  return {
    exportedAt: new Date().toISOString(),
    profile: me,
    posts: state.posts.filter((p) => p.authorId === state.meId),
    likes: state.posts.filter((p) => state.meId && p.likes.includes(state.meId)).map((p) => p.id),
  }
}

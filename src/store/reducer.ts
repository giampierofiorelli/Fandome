import { seedChats, seedPosts, seedUsers } from '../data/seed'
import type { ChatMessage, Embed, Id, Poll, Post, User } from '../data/types'

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
  | { type: 'post'; id: Id; at: number; text: string; artistId?: Id; concertId?: Id; quoteOf?: Id; replyTo?: Id; poll?: Poll; review?: { albumId: Id; rating: number }; photo?: string; youtube?: string; embed?: Embed; as?: Id }
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
  | { type: 'createPage'; id: Id; handle: string; name: string; website: string; category: string; bio: string; color: string; verifyCode: string; at: number }
  | { type: 'updatePage'; pageId: Id; name: string; bio: string; website: string; category: string }
  | { type: 'invitePageAdmin'; pageId: Id; inviteId: Id; code: string; toUserId?: Id; at: number }
  | { type: 'revokeInvite'; pageId: Id; inviteId: Id }
  | { type: 'acceptInvite'; code: string; at: number }
  | { type: 'declineInvite'; code: string }
  | { type: 'removePageMember'; pageId: Id; userId: Id }
  | { type: 'requestVerification'; pageId: Id }
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
      // "Post as": a page, but only if the signed-in person manages it.
      const authorId = action.as && canManagePage(state, action.as, me) ? action.as : me
      const post: Post = {
        id: action.id,
        authorId,
        text: action.text,
        createdAt: action.at,
        artistId: action.artistId,
        concertId: action.concertId,
        quoteOf: action.quoteOf,
        replyTo: action.replyTo,
        poll: action.poll,
        review: action.review,
        photo: action.photo,
        youtube: action.youtube,
        embed: action.embed,
        lang: 'en',
        likes: [],
        reposts: [],
      }
      let next: State = { ...state, posts: [post, ...state.posts] }
      if (action.review) next = reducer(next, { type: 'rate', albumId: action.review.albumId, rating: action.review.rating })
      return next
    }
    case 'delete':
      return { ...state, posts: state.posts.filter((p) => !(p.id === action.postId && me && (p.authorId === me || canManagePage(state, p.authorId, me)))) }
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
    case 'createPage': {
      // Only real (non-guest) personal accounts can create pages; handles are unique.
      if (!me || isGuest(state) || state.users.some((u) => u.handle === action.handle)) return state
      const page: User = {
        id: action.id,
        kind: 'page',
        handle: action.handle,
        name: action.name,
        color: action.color,
        bio: action.bio,
        location: '',
        fanSince: {},
        top4: [],
        attended: [],
        going: [],
        ratings: {},
        following: [],
        page: { website: action.website, category: action.category, verification: 'unverified', verifyCode: action.verifyCode, members: [{ userId: me, role: 'owner', since: action.at }], invites: [] },
      }
      return { ...state, users: [...state.users, page] }
    }
    case 'updatePage':
      if (!me || !canManagePage(state, action.pageId, me)) return state
      return updatePage(state, action.pageId, (u) => ({
        ...u,
        name: action.name,
        bio: action.bio,
        page: { ...u.page!, website: action.website, category: action.category, verification: action.website !== u.page!.website ? 'unverified' : u.page!.verification },
      }))
    case 'invitePageAdmin': {
      if (!me || !canManagePage(state, action.pageId, me)) return state
      const page = state.users.find((u) => u.id === action.pageId)!
      if (action.toUserId && (page.page!.members.some((m) => m.userId === action.toUserId) || page.page!.invites.some((i) => i.toUserId === action.toUserId && i.status === 'pending'))) return state
      const invite = { id: action.inviteId, code: action.code, role: 'admin' as const, toUserId: action.toUserId, invitedBy: me, createdAt: action.at, status: 'pending' as const }
      return updatePage(state, action.pageId, (u) => ({ ...u, page: { ...u.page!, invites: [...u.page!.invites, invite] } }))
    }
    case 'revokeInvite':
      if (!me || !canManagePage(state, action.pageId, me)) return state
      return updatePage(state, action.pageId, (u) => ({ ...u, page: { ...u.page!, invites: u.page!.invites.map((i) => (i.id === action.inviteId ? { ...i, status: 'revoked' } : i)) } }))
    case 'acceptInvite': {
      const found = findInvite(state, action.code)
      if (!me || isGuest(state) || !found || found.invite.status !== 'pending') return state
      if (found.invite.toUserId && found.invite.toUserId !== me) return state
      return updatePage(state, found.page.id, (u) => ({
        ...u,
        page: {
          ...u.page!,
          members: u.page!.members.some((m) => m.userId === me) ? u.page!.members : [...u.page!.members, { userId: me, role: found.invite.role, since: action.at }],
          invites: u.page!.invites.map((i) => (i.code === action.code ? { ...i, status: 'accepted', toUserId: me } : i)),
        },
      }))
    }
    case 'declineInvite': {
      const found = findInvite(state, action.code)
      if (!me || !found || found.invite.toUserId !== me) return state
      return updatePage(state, found.page.id, (u) => ({ ...u, page: { ...u.page!, invites: u.page!.invites.map((i) => (i.code === action.code ? { ...i, status: 'revoked' } : i)) } }))
    }
    case 'removePageMember': {
      // Owners can remove admins; anyone can leave; the owner can't be removed.
      const page = state.users.find((u) => u.id === action.pageId)
      const role = page?.page?.members.find((m) => m.userId === me)?.role
      const target = page?.page?.members.find((m) => m.userId === action.userId)
      if (!me || !page || !role || !target || target.role === 'owner' || (role !== 'owner' && action.userId !== me)) return state
      return updatePage(state, action.pageId, (u) => ({ ...u, page: { ...u.page!, members: u.page!.members.filter((m) => m.userId !== action.userId) } }))
    }
    case 'requestVerification':
      if (!me || !canManagePage(state, action.pageId, me)) return state
      return updatePage(state, action.pageId, (u) => ({ ...u, page: { ...u.page!, verification: 'pending' } }))
    case 'reset':
      return initialState(action.now)
  }
}

export function canManagePage(state: State, pageId: Id, userId: Id) {
  return Boolean(state.users.find((u) => u.id === pageId)?.page?.members.some((m) => m.userId === userId))
}
export function pagesManagedBy(state: State, userId: Id) {
  return state.users.filter((u) => u.page?.members.some((m) => m.userId === userId))
}
export function findInvite(state: State, code: string) {
  for (const page of state.users) {
    const invite = page.page?.invites.find((i) => i.code === code)
    if (invite) return { page, invite }
  }
  return null
}
export function invitesFor(state: State, userId: Id) {
  return state.users.flatMap((page) => (page.page?.invites ?? []).filter((i) => i.toUserId === userId && i.status === 'pending').map((invite) => ({ page, invite })))
}
const isGuest = (state: State) => state.users.find((u) => u.id === state.meId)?.handle === 'guest'
function updatePage(state: State, pageId: Id, fn: (u: User) => User): State {
  return { ...state, users: state.users.map((u) => (u.id === pageId && u.page ? fn(u) : u)) }
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

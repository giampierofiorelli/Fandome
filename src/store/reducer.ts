import { seedChats, seedDms, seedPosts, seedStories, seedUsers } from '../data/seed'
import type { ChatMessage, DirectMessage, Embed, Id, Poll, Post, Story, User } from '../data/types'

export interface State {
  version: 1
  meId: Id | null
  users: User[]
  posts: Post[]
  chats: Record<string, ChatMessage[]>
  stories: Story[]
  dms: DirectMessage[]
  lastSeen: number // for the "You're all caught up" finite feed
}

export type Action =
  | { type: 'onboard'; name: string; handle: string; location: string; artistIds: Id[]; followIds: Id[]; at?: number }
  | { type: 'post'; id: Id; at: number; text: string; artistId?: Id; artistIds?: Id[]; concertId?: Id; quoteOf?: Id; replyTo?: Id; poll?: Poll; review?: { albumId: Id; rating: number }; photo?: string; audio?: Post['audio']; youtube?: string; embed?: Embed; as?: Id }
  | { type: 'delete'; postId: Id }
  | { type: 'restorePost'; post: Post }
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
  | { type: 'toggleTour'; key: string }
  | { type: 'rate'; albumId: Id; rating: number }
  | { type: 'toggleTop4'; albumId: Id }
  | { type: 'chat'; room: string; id: Id; userId?: Id; text: string; at: number }
  | { type: 'markSeen'; at: number }
  | { type: 'addStory'; id: Id; at: number; kind: 'text' | 'photo' | 'video'; text?: string; bg?: string; photo?: string; video?: Story['video'] }
  | { type: 'shareStory'; id: Id; at: number; storyId: Id; text?: string }
  | { type: 'viewStory'; storyId: Id }
  | { type: 'deleteStory'; storyId: Id }
  | { type: 'sendDm'; id: Id; to: Id; at: number; text?: string; audio?: DirectMessage['audio']; postId?: Id }
  | { type: 'sharePostToStory'; id: Id; at: number; postId: Id; text?: string }
  | { type: 'receiveDm'; id: Id; from: Id; at: number; text: string }
  | { type: 'openConversation'; withUserId: Id; at: number }
  | { type: 'partnerSeen'; partnerId: Id; at: number }
  | { type: 'prune'; now: number }
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
    // Seed fans were active recently, except Jonas: he shows what an inactive account looks like.
    users: seedUsers.map((u) => ({ ...u, activeAt: u.id === 'u-jonas' ? now - 45 * DAY : now - 3 * 3_600_000 })),
    posts: seedPosts(now),
    chats: seedChats(now),
    stories: seedStories(now),
    dms: seedDms(now),
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

// Public actions that count as "being active" (posts, reposts and stories count by their own dates).
const ACTIVE_ACTIONS = new Set<Action['type']>(['like', 'vote', 'rate', 'toggleTop4', 'chat', 'toggleAttended', 'toggleGoing', 'toggleTour', 'post', 'repost', 'addStory', 'shareStory', 'sharePostToStory'])

export function reducer(state: State, action: Action): State {
  const next = apply(state, action)
  if (next === state || !next.meId || !ACTIVE_ACTIONS.has(action.type)) return next
  const at = 'at' in action && typeof action.at === 'number' ? action.at : Date.now()
  return updateMe(next, (u) => ({ ...u, activeAt: Math.max(u.activeAt ?? 0, at) }))
}

function apply(state: State, action: Action): State {
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
        joinedAt: action.at ?? Date.now(),
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
        artistId: action.artistIds?.[0] ?? action.artistId,
        artistIds: action.artistIds?.length ? [...new Set(action.artistIds)].slice(0, MAX_POST_ARTISTS) : undefined,
        concertId: action.concertId,
        quoteOf: action.quoteOf,
        replyTo: action.replyTo,
        poll: action.poll,
        review: action.review,
        photo: action.photo,
        youtube: action.youtube,
        embed: action.embed,
        audio: action.audio,
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
    case 'restorePost':
      // Undo of a delete: put the post back (only your own, only if it's gone).
      if (!me || state.posts.some((p) => p.id === action.post.id) || !(action.post.authorId === me || canManagePage(state, action.post.authorId, me))) return state
      return { ...state, posts: [action.post, ...state.posts].sort((a, b) => b.createdAt - a.createdAt) }
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
    case 'toggleTour':
      return updateMe(state, (u) => ({ ...u, tours: toggle(u.tours ?? [], action.key) }))
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
      if (!me || isGuest(state) || state.users.some((u) => u.handle === action.handle) || !canCreatePage(state, me, action.category, action.at)) return state
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
        // Turning a website page into a community page needs the same activity as creating one.
        page: { ...u.page!, website: action.website, category: action.category === u.page!.category || canCreatePage(state, me, action.category, Date.now()) ? action.category : u.page!.category, verification: action.website !== u.page!.website ? 'unverified' : u.page!.verification },
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
    case 'addStory': {
      if (!me) return state
      if (action.kind === 'video' && (!action.video || action.video.duration > 180.5)) return state
      const story: Story = { id: action.id, authorId: me, createdAt: action.at, kind: action.kind, text: action.text, bg: action.bg, photo: action.photo, video: action.video, viewers: [] }
      return { ...state, stories: [...state.stories, story] }
    }
    case 'sharePostToStory': {
      const p = state.posts.find((x) => x.id === action.postId)
      if (!me || !p) return state
      const story: Story = { id: action.id, authorId: me, createdAt: action.at, kind: 'post', text: action.text?.trim() || undefined, post: { id: p.id, authorId: p.authorId, text: p.text, photo: p.photo, image: p.image }, viewers: [] }
      return { ...state, stories: [...state.stories, story] }
    }
    case 'shareStory': {
      // Reshare someone's live story inside your own. A reshare of a reshare points at the original.
      const src = state.stories.find((s) => s.id === action.storyId && action.at - s.createdAt < DAY)
      if (!me || !src || src.authorId === me || src.kind === 'post') return state
      const inner = src.shared ?? { storyId: src.id, authorId: src.authorId, kind: src.kind as 'text' | 'photo' | 'video', text: src.text, bg: src.bg, photo: src.photo, video: src.video }
      if (inner.authorId === me) return state
      const story: Story = { id: action.id, authorId: me, createdAt: action.at, kind: 'share', text: action.text?.trim() || undefined, shared: inner, viewers: [] }
      return { ...state, stories: [...state.stories, story] }
    }
    case 'viewStory':
      if (!me) return state
      return { ...state, stories: state.stories.map((s) => (s.id === action.storyId && s.authorId !== me && !s.viewers.includes(me) ? { ...s, viewers: [...s.viewers, me] } : s)) }
    case 'deleteStory':
      return { ...state, stories: state.stories.filter((s) => !(s.id === action.storyId && s.authorId === me)) }
    case 'sendDm': {
      const sharedPost = action.postId && state.posts.some((p) => p.id === action.postId) ? action.postId : undefined
      if (!me || isGuest(state) || !(action.text?.trim() || action.audio || sharedPost) || !canMessage(state, me, action.to) || messagingPaused(state, me, action.at)) return state
      const dm: DirectMessage = { id: action.id, from: me, to: action.to, at: action.at, text: action.text?.trim() || undefined, audio: action.audio, postId: sharedPost }
      return { ...state, dms: [...state.dms, dm] }
    }
    case 'receiveDm':
      if (!me) return state
      return { ...state, dms: [...state.dms, { id: action.id, from: action.from, to: me, at: action.at, text: action.text }] }
    case 'openConversation':
      // Opening a chat marks incoming messages as seen: their 24h clock starts now.
      // While messaging is paused they stay unread (and kept) until the person is active again.
      if (!me || messagingPaused(state, me, action.at)) return state
      return { ...state, dms: state.dms.map((m) => (m.to === me && m.from === action.withUserId && !m.seenAt ? { ...m, seenAt: action.at } : m)) }
    case 'partnerSeen':
      if (!me) return state
      return { ...state, dms: state.dms.map((m) => (m.from === me && m.to === action.partnerId && !m.seenAt ? { ...m, seenAt: action.at } : m)) }
    case 'prune':
      return {
        ...state,
        stories: state.stories.filter((s) => action.now - s.createdAt < DAY),
        dms: state.dms.filter((m) => dmVisible(m, action.now)),
      }
    case 'reset':
      return initialState(action.now)
  }
}

export const DAY = 24 * 60 * 60_000
export const MAX_POST_ARTISTS = 4
// A DM stays until seen, then for 24h after being seen.
export const dmVisible = (m: DirectMessage, now: number) => !m.seenAt || now - m.seenAt < DAY
export const dmExpiresIn = (m: DirectMessage, now: number) => (m.seenAt ? Math.min(DAY, Math.max(0, DAY - (now - m.seenAt))) : null)
export const activeStories = (state: State, now: number) => state.stories.filter((s) => now - s.createdAt < DAY)
// Messaging is allowed between people when at least one follows the other (no pages yet).
export function canMessage(state: State, a: Id, b: Id) {
  const ua = state.users.find((u) => u.id === a)
  const ub = state.users.find((u) => u.id === b)
  if (!ua || !ub || a === b || ua.kind === 'page' || ub.kind === 'page' || ub.id === 'u-mod') return false
  return ua.following.includes(b) || ub.following.includes(a)
}
// Messaging rewards taking part: anyone with no public activity for 30 days
// can still read messages but can't send until they do something again.
export const ACTIVE_WINDOW = 30 * DAY
export function lastActivity(state: State, id: Id, countJoin = true): number {
  const u = state.users.find((x) => x.id === id)
  let t = Math.max(u?.activeAt ?? 0, countJoin ? u?.joinedAt ?? 0 : 0)
  for (const p of state.posts) {
    if (p.authorId === id && p.createdAt > t) t = p.createdAt
    for (const r of p.reposts) if (r.userId === id && r.at > t) t = r.at
  }
  for (const s of state.stories) if (s.authorId === id && s.createdAt > t) t = s.createdAt
  return t
}
// Milliseconds left before messaging pauses (0 or less = paused).
export const messagingLeft = (state: State, id: Id, now: number) => ACTIVE_WINDOW - (now - lastActivity(state, id))
// Real activity in the last 30 days (joining alone doesn't count). Needed to create
// community pages (fan clubs, podcasts…); website pages can be created right away.
export const recentlyActive = (state: State, id: Id, now: number) => now - lastActivity(state, id, false) <= ACTIVE_WINDOW
export const WEBSITE_CATEGORY = 'Fan website'
export const canCreatePage = (state: State, id: Id, category: string, now: number) => category === WEBSITE_CATEGORY || recentlyActive(state, id, now)
export const messagingPaused = (state: State, id: Id, now: number) => messagingLeft(state, id, now) <= 0
export function conversations(state: State, now: number) {
  const me = state.meId
  if (!me) return []
  const map = new Map<Id, DirectMessage[]>()
  for (const m of state.dms) {
    if (!dmVisible(m, now) || (m.from !== me && m.to !== me)) continue
    const other = m.from === me ? m.to : m.from
    map.set(other, [...(map.get(other) ?? []), m])
  }
  return [...map.entries()]
    .map(([userId, msgs]) => ({ userId, msgs: msgs.sort((x, y) => x.at - y.at), unread: msgs.filter((m) => m.to === me && !m.seenAt).length }))
    .sort((x, y) => y.msgs[y.msgs.length - 1].at - x.msgs[x.msgs.length - 1].at)
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

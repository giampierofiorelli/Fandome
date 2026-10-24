import { concerts, seedChats, seedDms, seedPosts, seedReports, seedStories, seedTickets, seedUsers } from '../data/seed'
import type { CollectionItem, ChatMessage, DirectMessage, Embed, Id, Poll, Post, Report, ReportReason, Story, TicketListing, User } from '../data/types'
import { postArtists } from '../lib/postArtists'

export interface State {
  version: 1
  meId: Id | null
  users: User[]
  posts: Post[]
  chats: Record<string, ChatMessage[]>
  stories: Story[]
  dms: DirectMessage[]
  lastSeen: number // for the "You're all caught up" finite feed
  reports: Report[]
  tickets: TicketListing[]
  adminId?: Id // runs the site; never shown publicly
}

export type Action =
  | { type: 'onboard'; name: string; handle: string; location: string; artistIds: Id[]; followIds: Id[]; at?: number }
  | { type: 'post'; id: Id; at: number; text: string; collabIds?: Id[]; artistId?: Id; artistIds?: Id[]; concertId?: Id; quoteOf?: Id; replyTo?: Id; poll?: Poll; review?: { albumId: Id; rating: number }; albumIds?: Id[]; photo?: string; audio?: Post['audio']; youtube?: string; embed?: Embed; link?: Post['link']; as?: Id }
  | { type: 'delete'; postId: Id }
  | { type: 'restorePost'; post: Post }
  | { type: 'pinPost'; postId: Id; replace?: Id }
  | { type: 'toggleSave'; postId: Id }
  | { type: 'respondCollab'; postId: Id; accept: boolean }
  | { type: 'leaveCollab'; postId: Id }
  | { type: 'unpinPost'; postId: Id }
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
  | { type: 'sendDm'; id: Id; to: Id; at: number; text?: string; audio?: DirectMessage['audio']; postId?: Id; artistId?: Id }
  | { type: 'addListing'; id: Id; concertId: Id; kind: TicketListing['kind']; qty: number; note?: string; at: number; faceValue: boolean }
  | { type: 'closeListing'; id: Id }
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
  | { type: 'report'; id: Id; at: number; target: Report['target']; reason: ReportReason; note?: string; contact?: Report['contact']; goodFaith: boolean }
  | { type: 'movePin'; postId: Id; dir: -1 | 1 }
  | { type: 'addItem'; item: CollectionItem }
  | { type: 'removeItem'; id: Id }
  | { type: 'addLink'; id: Id; url: string; label?: string }
  | { type: 'editLink'; id: Id; label: string }
  | { type: 'removeLink'; id: Id }
  | { type: 'moveLink'; id: Id; dir: -1 | 1 }
  | { type: 'clickLink'; userId: Id; id: Id }
  | { type: 'resolveReport'; reportId: Id; action: 'remove' | 'dismiss'; reason?: ReportReason; note?: string; at: number }
  | { type: 'appeal'; postId: Id; text: string; at: number }
  | { type: 'decideAppeal'; postId: Id; restore: boolean }
  | { type: 'requestMod'; artistIds: Id[]; reason: string; at: number }
  | { type: 'cancelModRequest' }
  | { type: 'decideModRequest'; userId: Id; approve: boolean; at: number }
  | { type: 'removeMod'; userId: Id }
  | { type: 'setAdmin'; on: boolean }
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
    reports: seedReports(now),
    tickets: seedTickets(now),
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
        albumIds: action.albumIds?.length ? [...new Set(action.albumIds)].slice(0, MAX_POST_ALBUMS) : undefined,
        photo: action.photo,
        youtube: action.youtube,
        embed: action.embed,
        link: action.link,
        audio: action.audio,
        // Collaborators must be people the author can reach (follow either way); max 3; not replies.
        collab: action.replyTo ? undefined : (() => {
          const ids = [...new Set(action.collabIds ?? [])].filter((id) => id !== authorId && state.users.some((u) => u.id === id && u.handle !== 'guest' && id !== 'u-mod') && (canMessage(state, me, id) || canManagePage(state, id, me) || state.users.find((u) => u.id === me)?.following.includes(id))).slice(0, MAX_COLLAB)
          return ids.length ? ids.map((userId) => ({ userId, status: 'pending' as const })) : undefined
        })(),
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
    case 'respondCollab':
      // Accept → the post joins your profile and your followers' feeds. Decline → you're simply removed.
      return updatePost(state, action.postId, (p) => {
        const mine = p.collab?.find((c) => c.userId === me && c.status === 'pending')
        if (!mine) return p
        const collab = action.accept ? p.collab!.map((c) => (c.userId === me ? { ...c, status: 'accepted' as const } : c)) : p.collab!.filter((c) => c.userId !== me)
        return { ...p, collab: collab.length ? collab : undefined }
      })
    case 'leaveCollab':
      return updatePost(state, action.postId, (p) => {
        if (!p.collab?.some((c) => c.userId === me)) return p
        const collab = p.collab.filter((c) => c.userId !== me)
        return { ...p, collab: collab.length ? collab : undefined }
      })
    case 'toggleSave': {
      // Private bookmarks: only you see what you saved.
      if (!me || !state.posts.some((x) => x.id === action.postId)) return state
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id !== me) return u
          const saved = u.saved ?? []
          return { ...u, saved: saved.includes(action.postId) ? saved.filter((id) => id !== action.postId) : [action.postId, ...saved] }
        }),
      }
    }
    case 'pinPost':
    case 'unpinPost': {
      // Pins live on the author's profile: your own posts, or a page you manage.
      const p = state.posts.find((x) => x.id === action.postId)
      if (!me || !p || p.replyTo || !(p.authorId === me || canManagePage(state, p.authorId, me))) return state
      const owner = state.users.find((u) => u.id === p.authorId)!
      const live = (owner.pinned ?? []).filter((id) => id !== p.id && state.posts.some((x) => x.id === id))
      let pinned = live
      if (action.type === 'pinPost') {
        const kept = action.replace ? live.filter((id) => id !== action.replace) : live
        if (kept.length >= MAX_PINS) return state // full: the UI asks which one to replace
        pinned = [p.id, ...kept]
      }
      return { ...state, users: state.users.map((u) => (u.id === owner.id ? { ...u, pinned } : u)) }
    }
    case 'addItem': {
      const u = state.users.find((x) => x.id === me)
      const it = action.item
      if (!me || !u || !it.title.trim() || (u.collection?.length ?? 0) >= MAX_ITEMS) return state
      const clean: CollectionItem = { ...it, title: it.title.trim().slice(0, 80), note: it.note?.trim().slice(0, 500) || undefined }
      return updateMe(state, (x) => ({ ...x, collection: [clean, ...(x.collection ?? [])] }))
    }
    case 'removeItem':
      return updateMe(state, (x) => ({ ...x, collection: x.collection?.filter((i) => i.id !== action.id) }))
    case 'addLink': {
      const u = state.users.find((x) => x.id === me)
      if (!me || !u || (u.links?.length ?? 0) >= MAX_LINKS || !/^https?:\/\//.test(action.url)) return state
      return updateMe(state, (x) => ({ ...x, links: [...(x.links ?? []), { id: action.id, url: action.url, label: action.label?.trim() || undefined, clicks: 0 }] }))
    }
    case 'editLink':
      return updateMe(state, (x) => ({ ...x, links: x.links?.map((l) => (l.id === action.id ? { ...l, label: action.label.trim() || undefined } : l)) }))
    case 'removeLink':
      return updateMe(state, (x) => ({ ...x, links: x.links?.filter((l) => l.id !== action.id) }))
    case 'moveLink':
      return updateMe(state, (x) => {
        const list = [...(x.links ?? [])]
        const i = list.findIndex((l) => l.id === action.id)
        const j = i + action.dir
        if (i < 0 || j < 0 || j >= list.length) return x
        ;[list[i], list[j]] = [list[j], list[i]]
        return { ...x, links: list }
      })
    case 'clickLink':
      // Anonymous counter: no visitor id, no IP, no cookie. Your own clicks don't count.
      if (action.userId === me) return state
      return { ...state, users: state.users.map((u) => (u.id === action.userId ? { ...u, links: u.links?.map((l) => (l.id === action.id ? { ...l, clicks: l.clicks + 1 } : l)) } : u)) }
    case 'movePin': {
      const p = state.posts.find((x) => x.id === action.postId)
      if (!me || !p || !(p.authorId === me || canManagePage(state, p.authorId, me))) return state
      const owner = state.users.find((u) => u.id === p.authorId)!
      const list = (owner.pinned ?? []).filter((id) => state.posts.some((x) => x.id === id))
      const i = list.indexOf(p.id)
      const j = i + action.dir
      if (i < 0 || j < 0 || j >= list.length) return state
      ;[list[i], list[j]] = [list[j], list[i]]
      return { ...state, users: state.users.map((u) => (u.id === owner.id ? { ...u, pinned: list } : u)) }
    }
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
      const sharedArtist = action.artistId && concerts.some((c) => c.artistId === action.artistId) ? action.artistId : undefined
      if (!me || isGuest(state) || !(action.text?.trim() || action.audio || sharedPost || sharedArtist) || !canMessage(state, me, action.to) || messagingPaused(state, me, action.at)) return state
      const dm: DirectMessage = { id: action.id, from: me, to: action.to, at: action.at, text: action.text?.trim() || undefined, audio: action.audio, postId: sharedPost, artistId: sharedArtist }
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
    case 'prune': {
      // Runs every 30s: only produce a new state (re-render + save) when something actually expired.
      const stories = state.stories.filter((s) => action.now - s.createdAt < DAY)
      const dms = state.dms.filter((m) => dmVisible(m, action.now))
      if (stories.length === state.stories.length && dms.length === state.dms.length) return state
      return { ...state, stories, dms }
    }
    case 'addListing': {
      // Spare tickets only at face value or less (Italian law: art. 1 c. 545 L. 232/2016).
      const c = concerts.find((x) => x.id === action.concertId)
      if (!me || isGuest(state) || !c || c.date < new Date(action.at).toISOString().slice(0, 10)) return state
      if (action.kind === 'spare' && !action.faceValue) return state
      if (state.tickets.some((t) => t.userId === me && t.concertId === c.id && !t.closed)) return state // one open listing per show
      const qty = Math.min(4, Math.max(1, Math.round(action.qty)))
      return { ...state, tickets: [{ id: action.id, concertId: c.id, userId: me, kind: action.kind, qty, note: action.note?.trim().slice(0, 200) || undefined, at: action.at }, ...state.tickets] }
    }
    case 'closeListing':
      return { ...state, tickets: state.tickets.map((t) => (t.id === action.id && (t.userId === me || isAdmin(state)) ? { ...t, closed: true } : t)) }
    case 'report': {
      // Anyone can report, with or without a profile (DSA art. 16). Without one we need a name and email,
      // except for child sexual abuse, which can be reported anonymously.
      if (!me || !action.goodFaith) return state
      if (isGuest(state) && action.reason !== 'sexual' && !(action.contact?.name.trim() && /.+@.+\..+/.test(action.contact.email))) return state
      // One open report per person per thing.
      if (state.reports.some((r) => r.by === me && r.status === 'open' && r.target.kind === action.target.kind && r.target.id === action.target.id)) return state
      const r: Report = { id: action.id, at: action.at, by: me, target: action.target, reason: action.reason, note: action.note?.trim() || undefined, contact: action.contact?.email ? action.contact : undefined, goodFaith: true, status: 'open' }
      return { ...state, reports: [r, ...state.reports] }
    }
    case 'resolveReport': {
      const r = state.reports.find((x) => x.id === action.reportId)
      if (!me || !r || r.status !== 'open' || !canHandleReport(state, me, r)) return state
      const status: Report['status'] = action.action === 'remove' ? 'removed' : 'dismissed'
      // Settles every open report about the same thing.
      let next: State = { ...state, reports: state.reports.map((x) => (x.status === 'open' && x.target.kind === r.target.kind && x.target.id === r.target.id ? { ...x, status, handledAt: action.at } : x)) }
      if (action.action === 'remove' && r.target.kind === 'post') next = updatePost(next, r.target.id, (p) => ({ ...p, removed: { at: action.at, reason: action.reason ?? r.reason, note: action.note?.trim() || undefined } }))
      if (action.action === 'remove' && r.target.kind === 'item') next = { ...next, users: next.users.map((u) => (u.collection?.some((i) => i.id === r.target.id) ? { ...u, collection: u.collection.filter((i) => i.id !== r.target.id) } : u)) }
      if (action.action === 'remove' && r.target.kind === 'ticket') next = { ...next, tickets: next.tickets.map((t) => (t.id === r.target.id ? { ...t, closed: true } : t)) }
      if (action.action === 'remove' && r.target.kind === 'story') next = { ...next, stories: next.stories.filter((s) => s.id !== r.target.id) }
      return next
    }
    case 'appeal':
      return updatePost(state, action.postId, (p) => (p.authorId === me && p.removed && !p.removed.appeal && action.text.trim() ? { ...p, removed: { ...p.removed, appeal: { at: action.at, text: action.text.trim(), status: 'pending' } } } : p))
    case 'decideAppeal':
      if (!isAdmin(state)) return state
      return updatePost(state, action.postId, (p) => (!p.removed?.appeal ? p : action.restore ? { ...p, removed: undefined } : { ...p, removed: { ...p.removed, appeal: { ...p.removed.appeal, status: 'upheld' } } }))
    case 'requestMod': {
      const u = state.users.find((x) => x.id === me)
      const ids = action.artistIds.filter((a) => u?.fanSince[a] !== undefined)
      if (!me || !u || isGuest(state) || !ids.length || !recentlyActive(state, me, action.at) || u.modRequest?.status === 'pending') return state
      return updateMe(state, (x) => ({ ...x, modRequest: { artistIds: ids, reason: action.reason.trim(), at: action.at, status: 'pending' } }))
    }
    case 'cancelModRequest':
      return updateMe(state, (x) => ({ ...x, modRequest: undefined }))
    case 'decideModRequest':
      if (!isAdmin(state)) return state
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id !== action.userId || u.modRequest?.status !== 'pending') return u
          if (!action.approve) return { ...u, modRequest: { ...u.modRequest, status: 'declined' } }
          const artistIds = Array.from(new Set([...(u.mod?.artistIds ?? []), ...u.modRequest.artistIds]))
          return { ...u, mod: { artistIds, since: u.mod?.since ?? action.at }, modRequest: undefined }
        }),
      }
    case 'removeMod':
      if (!isAdmin(state)) return state
      return { ...state, users: state.users.map((u) => (u.id === action.userId ? { ...u, mod: undefined } : u)) }
    case 'setAdmin':
      // Prototype only: whoever runs this copy of the site. With a real backend this is a server-side role.
      if (!me || isGuest(state)) return state
      return { ...state, adminId: action.on ? me : undefined }
    case 'reset':
      return initialState(action.now)
  }
}

export const DAY = 24 * 60 * 60_000
export const MAX_POST_ARTISTS = 4
export const MAX_POST_ALBUMS = 4
export const MAX_PINS = 3
export const MAX_LINKS = 8
export const MAX_ITEMS = 30
export const MAX_COLLAB = 3
export const collabInvitesFor = (state: State, userId: Id) => state.posts.filter((p) => p.collab?.some((c) => c.userId === userId && c.status === 'pending'))
// A DM stays until seen, then for 24h after being seen.
export const dmVisible = (m: DirectMessage, now: number) => !m.seenAt || now - m.seenAt < DAY
export const dmExpiresIn = (m: DirectMessage, now: number) => (m.seenAt ? Math.min(DAY, Math.max(0, DAY - (now - m.seenAt))) : null)
export const activeStories = (state: State, now: number) => state.stories.filter((s) => now - s.createdAt < DAY)
// Messaging is allowed between people when at least one follows the other (no pages yet).
export function canMessage(state: State, a: Id, b: Id) {
  const ua = state.users.find((u) => u.id === a)
  const ub = state.users.find((u) => u.id === b)
  if (!ua || !ub || a === b || ua.kind === 'page' || ub.kind === 'page' || ub.id === 'u-mod') return false
  // A ticket listing lets people who don't follow each other get in touch about it.
  const listing = (id: Id) => state.tickets.some((t) => t.userId === id && !t.closed)
  return ua.following.includes(b) || ub.following.includes(a) || listing(a) || listing(b)
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
export const isAdmin = (state: State) => Boolean(state.meId && state.adminId === state.meId)
// Moderators handle reports about posts in their fandoms (never their own posts or reports);
// the admin handles everything, and alone sees reports about people, stories and messages.
export function canHandleReport(state: State, userId: Id, r: Report): boolean {
  if (state.adminId === userId) return true
  const mod = state.users.find((u) => u.id === userId)?.mod
  if (!mod || r.by === userId) return false
  if (r.target.kind === 'ticket') {
    const t = state.tickets.find((x) => x.id === r.target.id)
    const c = t && concerts.find((x) => x.id === t.concertId)
    return Boolean(t && c && t.userId !== userId && mod.artistIds.includes(c.artistId))
  }
  if (r.target.kind !== 'post') return false
  const post = state.posts.find((p) => p.id === r.target.id)
  return Boolean(post && post.authorId !== userId && postArtists(post).some((a) => mod.artistIds.includes(a)))
}
export const reportsFor = (state: State, userId: Id) => state.reports.filter((r) => r.status === 'open' && canHandleReport(state, userId, r))
export const isModerator = (u?: User) => Boolean(u?.mod?.artistIds.length)
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

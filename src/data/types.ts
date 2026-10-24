export type Id = string

export interface Artist {
  id: Id
  name: string
  color: string // accent used for the artist space (no official artwork)
  tagline: string
  feeds: { id: string; label: string; tags: string[] }[]
}

export interface Album {
  id: Id
  artistId: Id
  title: string
  year: number
}

export interface Concert {
  id: Id
  artistId: Id
  tour: string
  venue: string
  city: string
  country: string
  date: string // ISO date
  setlist: string[]
  url?: string // where to buy tickets (official seller)
  source?: 'ticketmaster' // live data imported every night
  announcedAt?: number // when we first saw this date: drives "New date announced"
}

// A Page is an account for a website / fan club / podcast. It is owned and run
// by personal accounts (members); it never has its own login.
export type PageRole = 'owner' | 'admin'
export interface PageInvite {
  id: Id
  code: string // secret part of the invite link
  role: 'admin'
  toUserId?: Id // set when inviting someone already on Fandome; empty = open link
  invitedBy: Id
  createdAt: number
  status: 'pending' | 'accepted' | 'revoked'
}
export interface PageInfo {
  website: string
  category: string
  verification: 'unverified' | 'pending' | 'verified'
  verifyCode: string
  members: { userId: Id; role: PageRole; since: number }[]
  invites: PageInvite[]
}

export interface User {
  id: Id
  kind?: 'person' | 'page'
  page?: PageInfo
  handle: string
  name: string
  color: string
  bio: string
  location: string
  fanSince: Record<Id, number> // artistId -> year
  top4: Id[] // album ids (Letterboxd-style favourites)
  attended: Id[] // concert ids ("I was there")
  going: Id[] // upcoming concert ids
  tours?: string[] // past tours you saw, as `${artistId}::${tour}` (no specific date needed)
  ratings: Record<Id, number> // albumId -> 0.5..5
  following: Id[]
  joinedAt?: number
  collection?: CollectionItem[] // showcase only: nothing here is for sale
  links?: ProfileLink[] // link-in-bio: up to 8, with anonymous click counts
  saved?: Id[] // posts you bookmarked; private, newest first
  pinned?: Id[] // up to 3 posts shown first on the profile, newest pin first
  mod?: { artistIds: Id[]; since: number } // volunteer moderator for these fandoms (shown on the profile)
  modRequest?: { artistIds: Id[]; reason: string; at: number; status: 'pending' | 'declined' }
  activeAt?: number // last public action (like, vote, rating…); posts and stories count on their own
}

export const COLLECTION_FORMATS = ['Vinyl LP', '12" single', '7" single', 'Picture disc', 'CD', 'CD single', 'Cassette', 'Box set', 'Promo', 'Ticket stub', 'Poster', 'Tour merch', 'Magazine / book', 'Other'] as const
export interface CollectionItem {
  id: Id
  title: string
  artistId?: Id
  format: (typeof COLLECTION_FORMATS)[number]
  year?: number
  note?: string // the story behind it
  photo?: string // compressed data URL
  image?: string // gradient placeholder (demo)
  at: number
}

export interface ProfileLink {
  id: Id
  url: string
  label?: string
  clicks: number // just a number: we never store who clicked
}

export interface Poll {
  options: { label: string; votes: Id[] }[]
}

export interface Repost {
  userId: Id
  at: number
  tags: string[] // Tumblr-style commentary tags
}

export interface Post {
  id: Id
  authorId: Id
  text: string
  createdAt: number
  artistId?: Id // first (main) artist, kept for older code and saves
  artistIds?: Id[] // every artist the post is about (collabs, duets…)
  concertId?: Id
  lang: string
  translation?: string // mock auto-translation (Weverse-style)
  likes: Id[]
  reposts: Repost[]
  quoteOf?: Id
  quoteDetached?: boolean // Bluesky-style: quoted author removed the quote link
  replyTo?: Id
  review?: { albumId: Id; rating: number }
  poll?: Poll
  image?: string // CSS gradient placeholder for demo photos
  photo?: string // uploaded photo (compressed data URL)
  youtube?: string // YouTube video id, embedded (video stays on YouTube)
  audio?: { src: string; duration: number; peaks: number[] } // voice note / audio clip
  embed?: Embed // post from another social, embedded via the platform's own player
  // Instagram-style collab: invited people; once accepted the post is theirs too (both profiles, both audiences)
  collab?: { userId: Id; status: 'pending' | 'accepted' }[]
  // Taken down by moderation. The author sees why (EU DSA "statement of reasons") and can appeal.
  removed?: { at: number; reason: ReportReason; note?: string; appeal?: { at: number; text: string; status: 'pending' | 'upheld' } }
}

// Ticket board on a show: fans find each other; any exchange happens off Fandome,
// at face value or less, through the official resale / name change.
export interface TicketListing {
  id: Id
  concertId: Id
  userId: Id
  kind: 'need' | 'spare'
  qty: number
  note?: string
  at: number
  closed?: boolean
}

export type ReportReason = 'spam' | 'harassment' | 'hate' | 'violence' | 'sexual' | 'privacy' | 'copyright' | 'impersonation' | 'misinformation' | 'other'
export interface Report {
  id: Id
  at: number
  by: Id
  target: { kind: 'post' | 'user' | 'story' | 'dm' | 'ticket' | 'item'; id: Id }
  reason: ReportReason
  note?: string
  contact?: { name: string; email: string } // people without a profile (DSA art. 16(2)(c))
  goodFaith: boolean // "accurate and complete to the best of my knowledge" (art. 16(2)(d))
  status: 'open' | 'removed' | 'dismissed'
  handledAt?: number
}

export interface Embed {
  kind: 'youtube' | 'x' | 'instagram' | 'tiktok' | 'soundcloud' | 'spotify' | 'apple' | 'deezer' | 'tidal' | 'mixcloud' | 'audiomack' | 'vimeo'
  id: string
  url: string
  path?: string // instagram 'p'|'reel'|'tv'; spotify/deezer/tidal resource type; apple path
}

// Stories last 24 hours.
// Video bytes live in IndexedDB (too big for localStorage); the story keeps the key.
export interface StoryVideo {
  key: string
  duration: number // seconds, max 180
  poster?: string // small JPEG data URL
}
// What a story shows. A shared story is a snapshot of someone else's.
export interface StoryContent {
  kind: 'text' | 'photo' | 'video'
  text?: string
  bg?: string // CSS gradient for text stories
  photo?: string // data URL
  video?: StoryVideo
}
// Snapshot of a post put in a story (so it still shows if the post changes).
export interface SharedPost {
  id: Id
  authorId: Id
  text: string
  photo?: string
  image?: string // gradient "photo" of seed posts
}
export interface Story extends Omit<StoryContent, 'kind'> {
  id: Id
  authorId: Id
  createdAt: number
  kind: StoryContent['kind'] | 'share' | 'post'
  shared?: StoryContent & { storyId: Id; authorId: Id }
  post?: SharedPost // a feed post added to a story
  viewers: Id[]
}

// Private messages. Default rule: a message disappears 24h after the
// recipient has SEEN it; unseen messages wait for them.
export interface DirectMessage {
  id: Id
  from: Id
  to: Id
  at: number
  text?: string
  audio?: { src: string; duration: number; peaks: number[] }
  postId?: Id // a post shared in the chat
  artistId?: Id // an artist room suggested to the other person
  seenAt?: number
}

export interface ChatMessage {
  id: Id
  userId: Id
  text: string
  at: number
}

export interface Party {
  id: Id
  artistId: Id
  title: string
  hostId: Id
  tracks: { title: string; seconds: number }[]
}

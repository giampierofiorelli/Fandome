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
  ratings: Record<Id, number> // albumId -> 0.5..5
  following: Id[]
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
  artistId?: Id
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
}

export interface Embed {
  kind: 'youtube' | 'x' | 'instagram' | 'tiktok' | 'soundcloud' | 'spotify' | 'apple' | 'deezer' | 'tidal' | 'mixcloud' | 'audiomack' | 'vimeo'
  id: string
  url: string
  path?: string // instagram 'p'|'reel'|'tv'; spotify/deezer/tidal resource type; apple path
}

// Stories last 24 hours.
export interface Story {
  id: Id
  authorId: Id
  createdAt: number
  kind: 'text' | 'photo'
  text?: string
  bg?: string // CSS gradient for text stories
  photo?: string // data URL
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

import type { Post } from '../data/types'

// Artists a post is about: several for collabs, one for older posts.
export const postArtists = (p: Pick<Post, 'artistId' | 'artistIds'>): string[] => (p.artistIds?.length ? p.artistIds : p.artistId ? [p.artistId] : [])
export const isAbout = (p: Pick<Post, 'artistId' | 'artistIds'>, artistId: string) => postArtists(p).includes(artistId)

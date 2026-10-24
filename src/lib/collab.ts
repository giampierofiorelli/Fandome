import type { Post } from '../data/types'

// People who share a post: the author plus collaborators who accepted.
export const collaborators = (p: Pick<Post, 'collab'>) => (p.collab ?? []).filter((c) => c.status === 'accepted').map((c) => c.userId)
export const postOwners = (p: Pick<Post, 'authorId' | 'collab'>) => [p.authorId, ...collaborators(p)]
export const isOwnedBy = (p: Pick<Post, 'authorId' | 'collab'>, id: string) => postOwners(p).includes(id)

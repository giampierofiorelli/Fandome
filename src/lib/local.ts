// Who counts as a local scene for discovery (owner's rule: never the global markets or English-language pop).
import { SCENES, isLocalArtist as inLocalScene } from '../data/scenes'
import { catalogAlbums } from '../data/catalog'
import { DESCRIPTORS } from './descriptors'

// A global crossover artist (owner, Oct 2026: Shakira): from a local scene, but at least two of their key
// records (career importance 4 or more) are sung mainly in English for the global market. They are an
// international star, not a scene to discover, even when they still sing in their own language.
// Soundtracks don't count: a film's language isn't the artist's choice.
const CROSSOVER_ALBUMS = 2
let crossover: Set<string> | null = null
export function isGlobalCrossover(artistId?: string) {
  if (!crossover) {
    const artistOf = new Map(catalogAlbums.map((a) => [a.id, a.artistId]))
    const count = new Map<string, number>()
    for (const d of Object.values(DESCRIPTORS)) {
      const id = artistOf.get(d.albumId)
      if (!id || d.type === 'soundtrack' || (d.importance ?? 0) < 4 || d.language[0] !== 'en' || SCENES[id]?.lang === 'en') continue
      count.set(id, (count.get(id) ?? 0) + 1)
    }
    crossover = new Set([...count].filter(([, n]) => n >= CROSSOVER_ALBUMS).map(([id]) => id))
  }
  return Boolean(artistId && crossover.has(artistId))
}

export const isLocalArtist = (artistId?: string) => inLocalScene(artistId) && !isGlobalCrossover(artistId)

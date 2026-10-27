// Who counts as a local scene for discovery (owner's rule: never the global markets or English-language pop).
// Scene membership (the Scenes paths, an artist's country) stays by origin: Moroder is part of the Italian
// scene's story and Shakira of Colombia's; they are just not a discovery to push.
import { GLOBAL_MARKETS, SCENES, isLocalArtist as inLocalScene } from '../data/scenes'
import { catalogAlbums } from '../data/catalog'
import { DESCRIPTORS } from './descriptors'

// A global crossover artist (owner, Oct 2026: Shakira, Moroder): from a local scene, but an international star
// whatever language they still sing in. Two conditions, both needed:
// 1. at least two key records (career importance 4 or more) sung mainly in English (soundtracks don't count:
//    a film's language isn't the artist's choice; nor do countries where English is a home language);
// 2. success abroad: top-10 hits in the US or UK charts, sourced below. Elisa or La Bionda sang in English for
//    their home market or had one minor hit abroad: they stay a local scene.
// Check condition 2 when importing a new artist from a local scene who records in English.
export const GLOBAL_HITS: Record<string, string> = {
  shakira: 'Laundry Service US #3, Oral Fixation Vol. 2 US #5; Whenever, Wherever and Hips Don’t Lie US/UK top 10',
  moroder: 'Together in Electric Dreams (with Philip Oakey) UK #3; Oscars for Midnight Express, Flashdance, Top Gun; Donna Summer’s I Feel Love UK #1',
  daftpunk: 'Discovery UK #2; Random Access Memories US #1 and UK #1; Get Lucky US #2, UK #1',
}
const CROSSOVER_ALBUMS = 2
const ENGLISH_HOME = new Set([...GLOBAL_MARKETS, 'NG', 'GH', 'ZA', 'JM', 'NZ'])
let crossover: Set<string> | null = null
export function isGlobalCrossover(artistId?: string) {
  if (!crossover) {
    const artistOf = new Map(catalogAlbums.map((a) => [a.id, a.artistId]))
    const count = new Map<string, number>()
    for (const d of Object.values(DESCRIPTORS)) {
      const id = artistOf.get(d.albumId)
      if (!id || d.type === 'soundtrack' || (d.importance ?? 0) < 4 || d.language[0] !== 'en' || ENGLISH_HOME.has(SCENES[id]?.country ?? '')) continue
      count.set(id, (count.get(id) ?? 0) + 1)
    }
    crossover = new Set([...count].filter(([id, n]) => n >= CROSSOVER_ALBUMS && GLOBAL_HITS[id]).map(([id]) => id))
  }
  return Boolean(artistId && crossover.has(artistId))
}

export const isLocalArtist = (artistId?: string) => inLocalScene(artistId) && !isGlobalCrossover(artistId)

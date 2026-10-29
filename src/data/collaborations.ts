import { coverBetweenArtists } from './covers'
import { catalogAlbums, catalogArtists } from './catalog'
// Documented collaborations between artists with a room (one worked on the other's record: sang, played, wrote
// or adapted). Used by "If you like this artist": a documented collaboration is a reason of its own, shown even
// when the two catalogues sound far apart, because it is how the artists actually met (owner, Oct 2026: Battiato's
// foreign neighbours). Works both ways. Keep the source; a cover or a shared concert bill is not a collaboration,
// but a cover credited on the record (src/data/covers.ts) is treated the same way (owner, Oct 2026: Raf and Laura Branigan).
export const COLLABORATIONS: { a: string; b: string; what: string; source: string }[] = [
  { a: 'battiato', b: 'losplanetas', what: 'J of Los Planetas adapted Battiato’s Apriti sesamo into Spanish (Ábrete sésamo, 2013)', source: 'Público; Página/12 (Battiato interview, 2013)' },
  { a: 'battiato', b: 'sepideh', what: 'Sepideh Raissadat sings on Battiato’s Fleurs 2 (2008)', source: 'it.wikipedia, Fleurs 2; AllMusic credits' },
  { a: 'battiato', b: 'hossamramzy', what: 'Hossam Ramzy plays percussion on Battiato’s Caffè de la Paix (1993)', source: 'Discogs, EMI release 1062409 (track Fogh in Nakhal)' },
  { a: 'battiato', b: 'alice', what: 'Battiato wrote the songs of Alice’s Gioielli rubati (1985)', source: 'it.wikipedia, Gioielli rubati' },
  { a: 'battiato', b: 'giunirusso', what: 'Battiato produced and co-wrote Giuni Russo’s Energie (1981)', source: 'it.wikipedia, Energie; Rolling Stone Italia' },
]

// A credited cover between the two artists' albums counts as a collaboration too (Laura Branigan covered Raf).
const coverAsCollaboration = (x: string, y: string) => {
  const c = coverBetweenArtists(x, y)
  if (!c) return undefined
  const name = (id: string) => catalogArtists.find((a) => a.id === id.split('-')[0])?.name ?? id
  const album = (id: string) => catalogAlbums.find((a) => a.id === id)
  const orig = album(c.original)
  return { a: c.cover.split('-')[0], b: c.original.split('-')[0], what: `${name(c.cover)} covered ${name(c.original)}’s ${c.song}${orig ? ` (${orig.title}, ${orig.year})` : ''}`, source: c.source }
}
export const collaborationOf = (x: string, y: string) => COLLABORATIONS.find((c) => (c.a === x && c.b === y) || (c.a === y && c.b === x)) ?? coverAsCollaboration(x, y)

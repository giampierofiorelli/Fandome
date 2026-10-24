// "If you like this album": finds albums by other artists that sound related, and says why.
// Hybrid content score (see docs/recommendation-research.md, phase 2):
//   genres (weighted by their order) + sound scales (only where both are known)
//   + documented links (sounds like / influenced by / same producer).
// Every suggestion carries plain-language reasons; nothing is paid or sponsored.
import { DESCRIPTORS, SCALES, genreLabel, type Descriptor, type Scale } from './descriptors'

const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '')

// The first genre weighs most; later ones still count.
function genreWeights(d: Descriptor) {
  const w = new Map<string, number>()
  d.genres.forEach((g, i) => w.set(g, 1 / Math.sqrt(i + 1)))
  return w
}

// Weighted Jaccard: 1 = same genres in the same order, 0 = nothing shared.
export function genreSimilarity(a: Descriptor, b: Descriptor) {
  const wa = genreWeights(a)
  const wb = genreWeights(b)
  let min = 0
  let max = 0
  for (const g of new Set([...wa.keys(), ...wb.keys()])) {
    min += Math.min(wa.get(g) ?? 0, wb.get(g) ?? 0)
    max += Math.max(wa.get(g) ?? 0, wb.get(g) ?? 0)
  }
  return max ? min / max : 0
}

// Sound scales compared only where both albums have a value; null when fewer than 3 overlap.
export function scaleSimilarity(a: Descriptor, b: Descriptor) {
  const shared = SCALES.filter((s) => a.scales[s] !== undefined && b.scales[s] !== undefined)
  if (shared.length < 3) return null
  const diff = shared.reduce((sum, s) => sum + Math.abs(a.scales[s]! - b.scales[s]!), 0) / shared.length
  return 1 - diff / 5
}

// Words for traits both albums clearly share.
const TRAITS: [Scale, 'high' | 'low', string][] = [
  ['electronic', 'high', 'electronic'],
  ['electronic', 'low', 'acoustic'],
  ['groove', 'high', 'made for dancing'],
  ['energy', 'high', 'high-energy'],
  ['energy', 'low', 'calm'],
  ['mood', 'low', 'dark'],
  ['mood', 'high', 'bright'],
  ['theatrical', 'high', 'theatrical'],
  ['theatrical', 'low', 'intimate'],
  ['experimental', 'high', 'experimental'],
]
function sharedTraits(a: Descriptor, b: Descriptor) {
  return TRAITS.filter(([s, side]) => {
    const x = a.scales[s]
    const y = b.scales[s]
    if (x === undefined || y === undefined) return false
    return side === 'high' ? x >= 4 && y >= 4 : x <= 1 && y <= 1
  }).map(([, , word]) => word)
}

const and = (xs: string[]) => (xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`)
const includesName = (names: string[], name: string) => names.some((n) => fold(n) === fold(name))
const intersect = (xs: string[], ys: string[], skip: string[]) => xs.filter((x) => includesName(ys, x) && !includesName(skip, x))

export interface Similar {
  albumId: string
  score: number
  reasons: string[]
}

const CONFIDENCE = { high: 1, medium: 0.9, low: 0.8 }

export function compareAlbums(a: Descriptor, b: Descriptor): Similar {
  const genre = genreSimilarity(a, b)
  const scale = scaleSimilarity(a, b)
  let score = scale === null ? genre : 0.6 * genre + 0.4 * scale
  const links: string[] = []

  // Documented links to the other artist. They name the artist, not one album, so they count
  // in proportion to how close the two albums' genres are (Madame X isn't OK. Respira's Madonna).
  const fit = Math.min(1, genre / 0.4)
  const direct = 0.25 * fit
  const showLink = fit >= 0.5
  if (includesName(a.soundsLike, b.artist)) (score += direct), showLink && links.push(`${a.title} sounds like ${b.artist}`)
  else if (includesName(b.soundsLike, a.artist)) (score += direct), showLink && links.push(`${b.title} sounds like ${a.artist}`)
  if (includesName(a.influencedBy, b.artist)) (score += direct), showLink && links.push(`${a.title} was influenced by ${b.artist}`)
  else if (includesName(b.influencedBy, a.artist)) (score += direct), showLink && links.push(`${b.title} draws on ${a.artist}`)

  const artists = [a.artist, b.artist]
  const infl = intersect(a.influencedBy, b.influencedBy, artists)
  if (infl.length) (score += Math.min(0.24, 0.12 * infl.length)), links.push(`Both draw on ${and(infl.slice(0, 2))}`)
  const prod = intersect(a.producers, b.producers, artists)
  if (prod.length) (score += Math.min(0.2, 0.1 * prod.length)), links.push(`Both produced by ${and(prod.slice(0, 2))}`)
  const like = intersect(a.soundsLike, b.soundsLike, artists)
  if (like.length) (score += Math.min(0.16, 0.08 * like.length)), links.push(`Both sound like ${and(like.slice(0, 2))}`)

  // Shared genres, most important first for both albums.
  const wa = genreWeights(a)
  const wb = genreWeights(b)
  const shared = [...wa.keys()].filter((g) => wb.has(g)).sort((x, y) => Math.min(wb.get(y)!, wa.get(y)!) - Math.min(wb.get(x)!, wa.get(x)!))
  const reasons = [...links]
  if (shared.length) reasons.push(`Both ${and(shared.slice(0, 3).map((g) => genreLabel(g).toLowerCase()))}`)
  const traits = sharedTraits(a, b)
  if (traits.length) reasons.push(`Similar sound: ${and(traits.slice(0, 2))}`)

  return { albumId: b.albumId, score: score * CONFIDENCE[b.confidence], reasons: reasons.slice(0, 2) }
}

// Albums by other artists, best first, at most `perArtist` from the same artist so the list stays varied.
export function similarAlbums(albumId: string, opts: { limit?: number; perArtist?: number; artistOf?: (albumId: string) => string | undefined } = {}): Similar[] {
  const { limit = 5, perArtist = 2 } = opts
  const a = DESCRIPTORS[albumId]
  if (!a) return []
  const artistOf = opts.artistOf ?? ((id: string) => DESCRIPTORS[id]?.artist)
  const mine = artistOf(albumId)
  const ranked = Object.values(DESCRIPTORS)
    .filter((b) => b.albumId !== albumId && artistOf(b.albumId) !== mine)
    .map((b) => compareAlbums(a, b))
    .filter((s) => s.score >= 0.2)
    .sort((x, y) => y.score - x.score)
  const out: Similar[] = []
  const count = new Map<string, number>()
  for (const s of ranked) {
    const who = artistOf(s.albumId) ?? ''
    if ((count.get(who) ?? 0) >= perArtist) continue
    count.set(who, (count.get(who) ?? 0) + 1)
    out.push(s)
    if (out.length >= limit) break
  }
  return out
}

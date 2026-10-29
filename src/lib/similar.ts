// Fandome's suggestion engine (see docs/recommendation-research.md). Content-based and explainable:
//   1. genres, weighted by their order, with related genres counting too (deep house → house → dance)
//   2. sound scales (energy, electronic, mood…), only where both albums have a value
//   3. voice, lyric themes, era, scene and language
//   4. documented links: sounds like / influenced by (direct), shared producers, influences and
//      comparisons, and two-step connections through a third artist or producer
// Lists are then re-ranked for variety (MMR), push away what you said you don't like, and give a
// small bonus to other countries. Every suggestion says why; nothing is paid or sponsored.
import { ARTIST_INFLUENCES } from '../data/artistInfluences'
import { collaborationOf } from '../data/collaborations'
import { coverFrom } from '../data/covers'
import { ARTIST_ALIASES } from '../data/artistAliases'
import { DESCRIPTORS, SCALES, genreLabel, type Descriptor, type Part, type Scale } from './descriptors'
import { GENRE_PARENTS } from '../data/genreFamilies'
import { instrumentLabel } from '../data/instruments'
import { productionLabel } from '../data/production'
import { SCENES, type Genre } from '../data/scenes'
import { isLocalArtist } from './local'

// Names are compared folded (accents, case, punctuation off); the same few hundred names come back
// millions of times, so each is folded once.
// Other credited names fold to the artist's main one (Marina and the Diamonds is MARINA).
const folded = new Map<string, string>()
const plainFold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9$]+/g, '').replace(/\$/g, 's')
const ALIAS = new Map(ARTIST_ALIASES.flatMap(([main, ...others]) => others.map((o) => [plainFold(o), plainFold(main)] as const)))
const fold = (s: string) => {
  let f = folded.get(s)
  if (f === undefined) {
    f = plainFold(s)
    folded.set(s, (f = ALIAS.get(f) ?? f))
  }
  return f
}
const and = (xs: string[]) => (xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`)
const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1)
const nameSets = new WeakMap<string[], Set<string>>()
const includesName = (names: string[], name: string) => {
  let set = nameSets.get(names)
  if (!set) nameSets.set(names, (set = new Set(names.map(fold))))
  return set.has(fold(name))
}
const foldParts = (r: Record<string, Part> = {}) => new Map(Object.entries(r).map(([n, p]) => [fold(n), p]))
// For an artist, a link counts whole if one album has it whole; otherwise with its largest share.
function artistParts(ds: Descriptor[], col: 'soundsLike' | 'influencedBy') {
  const out = new Map<string, Part>()
  const whole = new Set<string>()
  for (const d of ds) for (const n of d[col]) {
    const k = fold(n)
    const p = d.parts?.[col]?.[n]
    if (!p) whole.add(k)
    else if (!out.has(k) || p.songs / p.of > out.get(k)!.songs / out.get(k)!.of) out.set(k, p)
  }
  for (const k of whole) out.delete(k)
  return out
}
// How much a link holds for the whole record: 1 for the album, songs/of when it is documented on some songs only.
const partOf = (p: Profile, col: 'soundsLike' | 'influencedBy', name: string) => (includesName(p[col], name) ? p.parts?.[col].get(fold(name)) : undefined)
const weightOf = (p: Profile, col: 'soundsLike' | 'influencedBy', name: string) => {
  if (!includesName(p[col], name)) return 0
  const part = partOf(p, col, name)
  return part ? Math.min(1, part.songs / part.of) : 1
}
const wholeAlbum = (p: Profile, col: 'soundsLike' | 'influencedBy', name: string) => weightOf(p, col, name) === 1
const onSongs = (part?: Part) => (part ? ` on ${part.songs === 1 ? 'one song' : `${part.songs} songs`}` : '')
const intersect = (xs: string[], ys: string[], skip: string[]) => xs.filter((x) => includesName(ys, x) && !includesName(skip, x))
const jaccard = (a: Set<string>, b: Set<string>) => {
  if (!a.size || !b.size) return null
  let n = 0
  for (const x of a) if (b.has(x)) n++
  return n / (a.size + b.size - n)
}

// ---------- profiles: one album, or an artist computed from their albums ----------

export interface Profile {
  id: string
  artist: string
  title: string
  genres: Map<string, number> // own genres and weight (1 = main)
  scales: Partial<Record<Scale, number>>
  voice: Set<string>
  instruments: Map<string, number> // main instruments, weighted by order
  production: Map<string, number> // vocal treatment, techniques, machines, software, weighted by order
  lyrics: Set<string>
  language: Set<string>
  scene: Set<string>
  year?: number
  producers: string[]
  soundsLike: string[]
  influencedBy: string[]
  namedAlbums?: { artist: string; title: string }[]
  parts?: { soundsLike: Map<string, Part>; influencedBy: Map<string, Part> } // links documented on some songs only
  confidence: number
  importance?: number // 0-5, career weight (albums only)
  acclaim?: number // 0-5, critical standing today (albums only)
  mainstream?: number // 0-5, how commercial the record is (albums only)
}

const CONFIDENCE = { high: 1, medium: 0.9, low: 0.8 }
const STOP = new Set(['the', 'and', 'of', 'pop', 'music', 's', 'era'])
const sceneTokens = (s: string) => new Set(s.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !STOP.has(w)))

// Descriptors never change while the app runs: profiles and comparisons are computed once and kept.
const albumProfiles = new WeakMap<Descriptor, Profile>()
export function albumProfile(d: Descriptor): Profile {
  let p = albumProfiles.get(d)
  if (!p) albumProfiles.set(d, (p = buildAlbumProfile(d)))
  return p
}
function buildAlbumProfile(d: Descriptor): Profile {
  const genres = new Map<string, number>()
  // Order matters: the main genres carry the album, the long tail (often one track) weighs little.
  d.genres.forEach((g, i) => genres.set(g, 1 / (i + 1)))
  return backoff(d, {
    id: d.albumId,
    artist: d.artist,
    title: d.title,
    genres,
    scales: d.scales,
    voice: new Set(d.voice),
    instruments: new Map(d.instruments.map((x, i) => [x, 1 / (i + 1)])),
    production: new Map(d.production.map((x, i) => [x, 1 / (i + 1)])),
    lyrics: new Set(d.lyrics),
    language: new Set(d.language),
    scene: sceneTokens(d.scene),
    year: d.year,
    producers: d.producers,
    soundsLike: d.soundsLike,
    influencedBy: d.influencedBy,
    namedAlbums: d.namedAlbums,
    parts: { soundsLike: foldParts(d.parts?.soundsLike), influencedBy: foldParts(d.parts?.influencedBy) },
    confidence: CONFIDENCE[d.confidence],
    importance: d.importance,
    acclaim: d.acclaim,
    mainstream: d.mainstream,
  })
}

// Backoff to the artist (shrinkage toward a prior): a thin descriptor, with few genres and no instruments or
// production known, says too little to compare on its own (a re-recording filed as "pop, ballad, latin"
// would match any pop ballad). It is completed with the artist's other albums, the closest in time weighing
// most, in proportion to how little the album itself says. Its own genres, values and links stay first.
const THIN = 6
function backoff(d: Descriptor, p: Profile): Profile {
  const evidence = d.genres.length + d.instruments.length + d.production.length
  if (evidence >= THIN || d.instruments.length || d.production.length) return p
  const others = Object.values(DESCRIPTORS).filter((x) => x.artist === d.artist && x.albumId !== d.albumId)
  if (!others.length) return p
  const k = 1 - evidence / THIN // how much is borrowed: 0.5 for an album with three genres only
  const near = (x: Descriptor) => (x.year && d.year ? 1 / (1 + Math.abs(x.year - d.year) / 5) : 0.5)
  const total = others.reduce((n, x) => n + near(x), 0)
  const add = (into: Map<string, number>, list: (x: Descriptor) => string[]) => {
    const sum = new Map<string, number>()
    for (const x of others) list(x).forEach((g, i) => sum.set(g, (sum.get(g) ?? 0) + near(x) / (i + 1)))
    for (const [g, v] of sum) into.set(g, Math.max(into.get(g) ?? 0, (k * v) / total))
    return into
  }
  const scales: Partial<Record<Scale, number>> = { ...p.scales }
  for (const s of SCALES) {
    const known = others.filter((x) => x.scales[s] !== undefined)
    if (!known.length) continue
    const mean = known.reduce((n, x) => n + near(x) * x.scales[s]!, 0) / known.reduce((n, x) => n + near(x), 0)
    scales[s] = p.scales[s] === undefined ? mean : (1 - k) * p.scales[s]! + k * mean
  }
  return { ...p, genres: add(new Map(p.genres), (x) => x.genres), instruments: add(new Map(), (x) => x.instruments), production: add(new Map(), (x) => x.production), scales }
}

// How much an album stands for its artist across a long career (owner, Oct 2026: the important albums should
// count more). The career weight from the reception file (importance 0-5) when known: 0.25 for a minor record up
// to 2 for a career-defining one (eight times as much); else 1.6 for a landmark and 1 for the others. Compilations and live albums
// stand for an artist less than the records they made as such.
export const careerWeight = (d: { importance?: number; landmark?: boolean; type?: string }) =>
  (d.importance !== undefined ? 0.25 + 0.35 * d.importance : d.landmark ? 1.6 : 1) * (['compilation', 'live'].includes(d.type ?? '') ? 0.7 : 1)

// Artist profile: albums averaged by career weight, so the records that defined the artist and the traits
// that come back across the catalogue weigh more than a minor album or a one-off.
const artistProfiles = new Map<string, Profile | null>()
export function artistProfile(id: string, albumIds: string[]): Profile | null {
  const key = `${id}:${albumIds.join(',')}`
  if (!artistProfiles.has(key)) artistProfiles.set(key, buildArtistProfile(id, albumIds))
  return artistProfiles.get(key)!
}
function buildArtistProfile(id: string, albumIds: string[]): Profile | null {
  const ds = albumIds.map((x) => DESCRIPTORS[x]).filter(Boolean)
  if (!ds.length) return null
  const genres = new Map<string, number>()
  const scaleSum: Partial<Record<Scale, [number, number]>> = {}
  const voice = new Set<string>()
  const instruments = new Map<string, number>()
  const production = new Map<string, number>()
  const lyrics = new Set<string>()
  const language = new Set<string>()
  const scene = new Set<string>()
  const years: number[] = []
  let total = 0
  let conf = 0
  for (const d of ds) {
    const w = careerWeight(d) * CONFIDENCE[d.confidence]
    total += w
    conf += CONFIDENCE[d.confidence]
    d.genres.forEach((g, i) => genres.set(g, (genres.get(g) ?? 0) + w / (i + 1)))
    for (const s of SCALES) if (d.scales[s] !== undefined) {
      const [n, c] = scaleSum[s] ?? [0, 0]
      scaleSum[s] = [n + w * d.scales[s]!, c + w]
    }
    d.voice.forEach((v) => voice.add(v))
    d.instruments.forEach((x, i) => instruments.set(x, (instruments.get(x) ?? 0) + w / (i + 1)))
    d.production.forEach((x, i) => production.set(x, (production.get(x) ?? 0) + w / (i + 1)))
    d.lyrics.forEach((v) => lyrics.add(v))
    d.language.forEach((v) => language.add(v))
    sceneTokens(d.scene).forEach((v) => scene.add(v))
    if (d.year) years.push(d.year)
  }
  for (const [g, v] of genres) genres.set(g, Math.min(1, v / total) * 1.0)
  for (const [x, v] of instruments) instruments.set(x, Math.min(1, v / total))
  for (const [x, v] of production) production.set(x, Math.min(1, v / total))
  const scales: Partial<Record<Scale, number>> = {}
  for (const s of SCALES) if (scaleSum[s]) scales[s] = scaleSum[s]![0] / scaleSum[s]![1]
  years.sort((a, b) => a - b)
  const uniq = (xs: string[]) => [...new Map(xs.map((x) => [fold(x), x])).values()]
  return {
    id,
    artist: ds[0].artist,
    title: ds[0].artist,
    genres,
    scales,
    voice,
    instruments,
    production,
    lyrics,
    language,
    scene,
    year: years.length ? years[Math.floor(years.length / 2)] : undefined,
    producers: uniq(ds.flatMap((d) => d.producers)),
    soundsLike: uniq(ds.flatMap((d) => d.soundsLike)),
    influencedBy: uniq(ds.flatMap((d) => d.influencedBy)),
    parts: { soundsLike: artistParts(ds, 'soundsLike'), influencedBy: artistParts(ds, 'influencedBy') },
    confidence: conf / ds.length,
  }
}

// Top genres of an artist across their albums, for display.
export function artistGenres(albumIds: string[], limit = 6) {
  const p = artistProfile('x', albumIds)
  return p ? [...p.genres.entries()].sort((a, b) => b[1] - a[1]).slice(0, limit).map(([g]) => g) : []
}

// ---------- genres with families ----------

// Own genres plus their parents (half the weight per step up), keeping the strongest path.
function expandGenres(genres: Map<string, number>) {
  const out = new Map<string, number>()
  const put = (g: string, w: number) => out.set(g, Math.max(out.get(g) ?? 0, w))
  for (const [g, w] of genres) {
    put(g, w)
    let level = [g]
    let factor = 0.5
    for (let depth = 0; depth < 3 && level.length; depth++) {
      const next = level.flatMap((x) => GENRE_PARENTS[x as Genre] ?? [])
      next.forEach((p) => put(p, w * factor))
      level = next
      factor /= 2
    }
  }
  return out
}

function weightedJaccard(wa: Map<string, number>, wb: Map<string, number>) {
  let min = 0
  let max = 0
  for (const g of new Set([...wa.keys(), ...wb.keys()])) {
    min += Math.min(wa.get(g) ?? 0, wb.get(g) ?? 0)
    max += Math.max(wa.get(g) ?? 0, wb.get(g) ?? 0)
  }
  return max ? min / max : 0
}

// Rare genres say more than common ones: sharing "country" or "big band" means more than sharing "pop".
// Each genre is weighted by how few described albums have it (inverse document frequency).
let rarity: Map<string, number> | null = null
function rarityOf(g: string) {
  if (!rarity) {
    const all = Object.values(DESCRIPTORS)
    const df = new Map<string, number>()
    const artists = new Map<string, Set<string>>()
    for (const d of all)
      for (const x of expandGenres(new Map(d.genres.map((y) => [y, 1]))).keys()) {
        df.set(x, (df.get(x) ?? 0) + 1)
        if (!artists.has(x)) artists.set(x, new Set())
        artists.get(x)!.add(d.artist)
      }
    // A genre only one artist has can't be shared with anyone else: it would only dilute the match
    // (like min_df = 2 in tf-idf). It counts through its parent genres until a second artist has it.
    rarity = new Map([...df].map(([x, n]) => [x, artists.get(x)!.size < 2 ? 0 : Math.log((all.length + 1) / (n + 1)) + 0.3]))
  }
  return rarity.get(g) ?? Math.log(Object.keys(DESCRIPTORS).length + 1) + 0.3
}
// Genres that say what a record is for, not how it sounds (a soundtrack can be disco, orchestral, rock or a musical):
// they barely count for similarity and are never given as a reason on their own.
export const FORMAT_GENRES = new Set(['soundtrack', 'videogamemusic'])
// Catalogue buckets, not sounds (owner, Oct 2026: R.E.M. and No Doubt matched only on these): AllMusic's broad
// market styles and radio formats. They stay in the descriptors but weigh little, and are named as a reason
// only when nothing more specific is shared.
export const UMBRELLA_GENRES = new Set(['alternativepoprock', 'alternativeindierock', 'contemporarypoprock', 'adultalternativepoprock', 'albumrock', 'adultcontemporary', 'collegerock', 'americanunderground'])
const soundWeight = (g: string) => (FORMAT_GENRES.has(g) ? 0.1 : UMBRELLA_GENRES.has(g) ? 0.3 : 1)
const byRarity = (m: Map<string, number>) => new Map([...m].map(([g, w]) => [g, w * rarityOf(g) * soundWeight(g)]))

const genreVectors = new WeakMap<Profile, Map<string, number>>()
const genreVec = (p: Profile) => {
  let v = genreVectors.get(p)
  if (!v) genreVectors.set(p, (v = byRarity(expandGenres(p.genres))))
  return v
}
// The long tail of a genre list: 4th place on (weight ≤ 1/4), often one track.
const TAIL = 0.25
// A genre in the long tail of both albums (the flamenco guitar of one single on a pop-rock album and on a dance-pop
// one) counts for the two by its place only, without the rarity bonus: a rare genre heard once on each must not
// match them like a shared main genre (owner, Oct 2026: 18 til I Die and Paola & Chiara's Festival, on flamenco).
// A rare genre that is main for at least one of the two keeps its full weight.
function pairVecs(a: Profile, b: Profile): [Map<string, number>, Map<string, number>] {
  let wa = genreVec(a), wb = genreVec(b)
  const tails = [...a.genres.keys()].filter((g) => b.genres.has(g) && a.genres.get(g)! <= TAIL && b.genres.get(g)! <= TAIL)
  if (!tails.length) return [wa, wb]
  wa = new Map(wa), wb = new Map(wb)
  for (const g of tails) {
    const cut = Math.min(1, rarityOf(g)) / (rarityOf(g) || 1)
    wa.set(g, wa.get(g)! * cut), wb.set(g, wb.get(g)! * cut)
  }
  return [wa, wb]
}
const genreSim = (a: Profile, b: Profile) => weightedJaccard(...pairVecs(a, b))
// Share of the first album's genre weight that the second album covers (asymmetric).
function genreCover(a: Profile, b: Profile) {
  const [wa, wb] = pairVecs(a, b)
  let shared = 0, total = 0
  for (const [g, w] of wa) (total += w), (shared += Math.min(w, wb.get(g) ?? 0))
  return total ? shared / total : 0
}

// 1 = same genres in the same order, 0 = nothing shared even at family level.
export const genreSimilarity = (a: Descriptor, b: Descriptor) => genreSim(albumProfile(a), albumProfile(b))

// Sound scales compared only where both have a value; null when fewer than 3 overlap.
export function scaleSimilarity(a: { scales: Partial<Record<Scale, number>> }, b: { scales: Partial<Record<Scale, number>> }) {
  const shared = SCALES.filter((s) => a.scales[s] !== undefined && b.scales[s] !== undefined)
  if (shared.length < 3) return null
  const diff = shared.reduce((sum, s) => sum + Math.abs(a.scales[s]! - b.scales[s]!), 0) / shared.length
  return 1 - diff / 5
}

// Two albums at opposite ends of a scale (a fully experimental record and a conventional one, an ambient
// record and a dance album) are not alike, however close their genres: an average of the scales hides it.
const oppositeEnds = (a: Profile, b: Profile) =>
  SCALES.some((s) => a.scales[s] !== undefined && b.scales[s] !== undefined && Math.abs(a.scales[s]! - b.scales[s]!) >= 4)

// Voice, lyric themes, era, scene and language, each only when both are known.
// Themes weighted by rarity too: sharing "sensuality" says more than sharing "love".
let themeRarity: Map<string, number> | null = null
function themeSim(a: Set<string>, b: Set<string>) {
  if (!a.size || !b.size) return null
  if (!themeRarity) {
    const all = Object.values(DESCRIPTORS)
    const df = new Map<string, number>()
    for (const d of all) for (const t of d.lyrics) df.set(t, (df.get(t) ?? 0) + 1)
    themeRarity = new Map([...df].map(([t, n]) => [t, Math.log((all.length + 1) / (n + 1)) + 0.3]))
  }
  const w = (t: string) => themeRarity!.get(t) ?? 1
  let inter = 0
  let union = 0
  for (const t of new Set([...a, ...b])) (union += w(t)), a.has(t) && b.has(t) && (inter += w(t))
  return union ? inter / union : 0
}

// Instruments and production weighted by order (main first) and rarity: sharing a harpsichord or a vocoder
// says more than sharing drums or reverb.
const rarityCache = new Map<string, Map<string, number>>()
function listSim(field: 'instruments' | 'production', a: Map<string, number>, b: Map<string, number>) {
  if (!a.size || !b.size) return null
  if (!rarityCache.has(field)) {
    const all = Object.values(DESCRIPTORS)
    const df = new Map<string, number>()
    for (const d of all) for (const x of d[field]) df.set(x, (df.get(x) ?? 0) + 1)
    rarityCache.set(field, new Map([...df].map(([x, n]) => [x, Math.log((all.length + 1) / (n + 1)) + 0.3])))
  }
  const rare = rarityCache.get(field)!
  const r = (x: string) => rare.get(x) ?? 1
  return weightedJaccard(new Map([...a].map(([x, w]) => [x, w * r(x)])), new Map([...b].map(([x, w]) => [x, w * r(x)])))
}

// Instruments and production weigh more than era (owner, Oct 2026: they create affinity); language almost nothing.
function extrasSimilarity(a: Profile, b: Profile) {
  const parts: [number | null, number][] = [
    [themeSim(a.lyrics, b.lyrics), 0.26],
    [listSim('instruments', a.instruments, b.instruments), 0.22],
    [listSim('production', a.production, b.production), 0.16],
    [jaccard(a.voice, b.voice), 0.16],
    [a.year && b.year ? 1 - Math.min(1, Math.abs(a.year - b.year) / 30) : null, 0.12],
    [jaccard(a.scene, b.scene), 0.06],
    [a.language.size && b.language.size ? ([...a.language].some((l) => b.language.has(l)) ? 1 : 0) : null, 0.02],
  ]
  const known = parts.filter(([v]) => v !== null) as [number, number][]
  const w = known.reduce((n, [, x]) => n + x, 0)
  return w ? known.reduce((n, [v, x]) => n + v * x, 0) / w : null
}

// ---------- links: direct and through a third name ----------

const linksOf = (p: Profile) => [...p.soundsLike, ...p.influencedBy]

// Names each described artist is connected to (sounds like, influences, producers), for two-step paths.
let artistLinks: Map<string, string[]> | null = null
function linksOfArtist(name: string) {
  if (!artistLinks) {
    artistLinks = new Map()
    for (const d of Object.values(DESCRIPTORS)) {
      const k = fold(d.artist)
      artistLinks.set(k, [...(artistLinks.get(k) ?? []), ...d.soundsLike, ...d.influencedBy, ...d.producers])
    }
  }
  return artistLinks.get(fold(name)) ?? []
}

// A → M (sounds like / influenced by a described artist M) and M is connected to B or one of B's names.
function twoStep(a: Profile, b: Profile): string | null {
  const bNames = [b.artist, ...b.producers, ...linksOf(b)]
  for (const m of linksOf(a)) {
    if (fold(m) === fold(b.artist)) continue
    const via = linksOfArtist(m).find((x) => includesName(bNames, x) && fold(x) !== fold(a.artist) && fold(x) !== fold(m))
    if (via) return fold(via) === fold(b.artist) ? `Connected through ${m}` : `Connected through ${m} and ${via}`
  }
  return null
}

// ---------- comparing two profiles ----------

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
// "Not electronic" is not "acoustic": Nevermind and Ten are loud electric rock with no electronics. Acoustic only
// when neither album leans on electric instruments; otherwise the shared trait is a live band, not programming.
const ELECTRIC = ['electricguitar', 'electricbass', 'electricpiano', 'synth', 'organ', 'drummachine']
const electric = (p: Profile) => ELECTRIC.some((x) => (p.instruments.get(x) ?? 0) >= 0.25)
function sharedTraits(a: Profile, b: Profile) {
  return TRAITS.filter(([s, side]) => {
    const x = a.scales[s]
    const y = b.scales[s]
    if (x === undefined || y === undefined) return false
    return side === 'high' ? x >= 4 && y >= 4 : x <= 1 && y <= 1
  }).map(([s, side, word]) => (s === 'electronic' && side === 'low' && (electric(a) || electric(b)) ? 'live-band' : word))
}

// Closest related pair when no genre is shared exactly, e.g. "deep house and house".
function relatedPair(a: Profile, b: Profile): [string, string] | null {
  const ancestors = (g: string) => {
    const out = new Set<string>()
    let level = [g]
    for (let i = 0; i < 3; i++) {
      level = level.flatMap((x) => GENRE_PARENTS[x as Genre] ?? [])
      level.forEach((x) => out.add(x))
    }
    return out
  }
  for (const ga of a.genres.keys()) for (const gb of b.genres.keys()) {
    if (FORMAT_GENRES.has(ga) || FORMAT_GENRES.has(gb)) continue
    if (ga !== gb && (ancestors(ga).has(gb) || ancestors(gb).has(ga) || [...ancestors(ga)].some((x) => x !== 'pop' && ancestors(gb).has(x)))) return [ga, gb]
  }
  return null
}

export interface Comparison {
  score: number // final, with links and confidence
  base: number // genres + sound + extras only
  genre: number // genre similarity alone
  linked: boolean // a documented link (producer, influence, sounds-like…)
  opposite: boolean // at opposite ends of a sound scale (4+ apart out of 5)
  evidence: number // separate things in common: each shared genre, each link, sound, themes, instruments, production
  reasons: string[]
}

const comparisons = new WeakMap<Profile, WeakMap<Profile, Comparison>>()
export function compareProfiles(a: Profile, b: Profile): Comparison {
  let row = comparisons.get(a)
  if (!row) comparisons.set(a, (row = new WeakMap()))
  let c = row.get(b)
  if (!c) row.set(b, (c = buildComparison(a, b)))
  return c
}
function buildComparison(a: Profile, b: Profile): Comparison {
  const genre = genreSim(a, b)
  const scale = scaleSimilarity(a, b)
  const extras = extrasSimilarity(a, b)
  // Sound and extras (energy, era, themes…) are alike across many albums: they only count fully when
  // the genres are close too, so two albums with different genres can't look similar through them.
  const gate = Math.min(1, 0.4 + genre / 0.25)
  const parts = [[genre, 0.45, 1], [scale, 0.3, gate], [extras, 0.25, gate]].filter(([v]) => v !== null) as [number, number, number][]
  const base = parts.reduce((n, [v, w, k]) => n + v * w * k, 0) / parts.reduce((n, [, w]) => n + w, 0)
  let score = base
  const links: string[] = []

  // Links name an artist, not one album, so they only count when the two albums' genres are close:
  // nothing below 0.15 (e.g. a Gaga dance album that "sounds like Madonna" vs Madonna's big-band soundtrack).
  const closeness = Math.max(0, Math.min(1, (genre - 0.15) / 0.25))
  // A documented link keeps a quarter of its weight even across genres; it is shown only when genres are close.
  const fit = 0.25 + 0.75 * closeness
  const direct = 0.25 * fit
  const show = closeness >= 0.5
  // A link documented on some songs only weighs its share of the album (1 song of 10 = a tenth).
  if (includesName(a.soundsLike, b.artist)) (score += direct * weightOf(a, 'soundsLike', b.artist)), show && links.push(`${a.title} sounds like ${b.artist}${onSongs(partOf(a, 'soundsLike', b.artist))}`)
  else if (includesName(b.soundsLike, a.artist)) (score += direct * weightOf(b, 'soundsLike', a.artist)), show && links.push(`${b.title} sounds like ${a.artist}${onSongs(partOf(b, 'soundsLike', a.artist))}`)
  // An influence leads one way, from the album to the artist it draws on: an album that names this album's
  // artist as an influence is no reason to suggest it here (Katy Perry drawing on Queen).
  if (includesName(a.influencedBy, b.artist)) (score += direct * weightOf(a, 'influencedBy', b.artist)), show && links.push(`${a.title} was influenced by ${b.artist}${onSongs(partOf(a, 'influencedBy', b.artist))}`)
  // An artist credited as producer of the other album worked on it (Prince co-produced Like a Prayer).
  if (includesName(a.producers, b.artist)) (score += direct), show && links.push(`${b.artist} worked on ${a.title}`)
  else if (includesName(b.producers, a.artist)) (score += direct), show && links.push(`${a.artist} worked on ${b.title}`)

  const artists = [a.artist, b.artist]
  // Shared influences, producers and comparisons also need close genres (a producer can make very different records).
  // Shared links count by the smaller share of the two albums; only whole-album ones are named as a reason.
  const both = (col: 'soundsLike' | 'influencedBy', xs: string[]) => xs.reduce((n, x) => n + Math.min(weightOf(a, col, x), weightOf(b, col, x)), 0)
  const whole = (col: 'soundsLike' | 'influencedBy', xs: string[]) => xs.filter((x) => wholeAlbum(a, col, x) && wholeAlbum(b, col, x))
  const infl = intersect(a.influencedBy, b.influencedBy, artists)
  if (infl.length && fit > 0) (score += Math.min(0.24, 0.12 * both('influencedBy', infl)) * fit), show && whole('influencedBy', infl).length && links.push(`Both draw on ${and(whole('influencedBy', infl).slice(0, 2))}`)
  const prod = intersect(a.producers, b.producers, artists)
  if (prod.length && fit > 0) (score += Math.min(0.2, 0.1 * prod.length) * fit), show && links.push(`Both produced by ${and(prod.slice(0, 2))}`)
  const like = intersect(a.soundsLike, b.soundsLike, artists)
  if (like.length && fit > 0) (score += Math.min(0.16, 0.08 * both('soundsLike', like)) * fit), show && whole('soundsLike', like).length && links.push(`Both sound like ${and(whole('soundsLike', like).slice(0, 2))}`)
  if (!links.length) {
    const path = twoStep(a, b) ?? twoStep(b, a)
    if (path) (score += 0.06 * fit), show && links.push(path)
  }

  // Shared genres, most important for both first; else the closest related pair.
  const weight = (g: string) => Math.min(a.genres.get(g)!, b.genres.get(g)!) * rarityOf(g)
  // A genre in the long tail of both lists (4th place on: often one track, like the flamenco guitar of one single on
  // a pop-rock album) still adds to the genre score, but is not a thing in common on its own (owner, Oct 2026:
  // 18 til I Die matched Paola & Chiara's Festival only on flamenco).
  const bothTail = (g: string) => a.genres.get(g)! <= TAIL && b.genres.get(g)! <= TAIL
  const sharedAll = [...a.genres.keys()].filter((g) => b.genres.has(g) && !FORMAT_GENRES.has(g) && !bothTail(g)).sort((x, y) => weight(y) - weight(x))
  const specific = sharedAll.filter((g) => !UMBRELLA_GENRES.has(g))
  const shared = specific.length ? specific : sharedAll
  const reasons = [...links]
  if (shared.length) reasons.push(`Both ${and(shared.slice(0, 3).map((g) => genreLabel(g).toLowerCase()))}`)
  else {
    const pair = relatedPair(a, b)
    if (pair) reasons.push(`Close genres: ${genreLabel(pair[0]).toLowerCase()} and ${genreLabel(pair[1]).toLowerCase()}`)
  }
  const traits = sharedTraits(a, b)
  if (traits.length) reasons.push(`Similar sound: ${and(traits.slice(0, 2))}`)
  const themes = [...a.lyrics].filter((t) => b.lyrics.has(t))
  if (themes.length >= 2) reasons.push(`Both sing about ${and(themes.slice(0, 2))}`)
  const sharedInstruments = [...a.instruments.keys()].filter((x) => b.instruments.has(x))
  if (sharedInstruments.length >= 2) reasons.push(`Both built on ${and(sharedInstruments.slice(0, 2).map((x) => instrumentLabel(x).toLowerCase()))}`)
  const sharedProduction = [...a.production.keys()].filter((x) => b.production.has(x))
  if (sharedProduction.length) reasons.push(`Both use ${and(sharedProduction.slice(0, 2).map(productionLabel))}`)

  // Links overlap as evidence ("sounds like X" and "draws on X" often say the same thing): their total is capped.
  score = base + Math.min(LINK_CAP, score - base)
  const evidence = shared.length + links.length + (traits.length ? 1 : 0) + (themes.length >= 2 ? 1 : 0) + (sharedInstruments.length >= 2 ? 1 : 0) + (sharedProduction.length ? 1 : 0)
  return { score: score * b.confidence, base, genre, linked: links.length > 0, opposite: oppositeEnds(a, b), evidence, reasons: reasons.slice(0, 2) }
}

export interface Similar {
  albumId: string
  score: number
  reasons: string[]
  newCountry?: string // set when the album comes from another country than the one you started from
}

export function compareAlbums(a: Descriptor, b: Descriptor): Similar {
  const c = compareProfiles(albumProfile(a), albumProfile(b))
  return { albumId: b.albumId, score: c.score, reasons: c.reasons }
}

// ---------- ranking: discovery, things you don't like, variety ----------

// Discovery bonus: a small push for albums and artists from another country's local scene (never the
// global US/UK markets), so suggestions cross scenes.
export const DISCOVERY = 0.05
// Most that documented links can add to a pair's score.
const LINK_CAP = 0.3
// The genre test blends overlap (Jaccard) with how much of the seed album's genres the candidate covers:
// albums researched with long genre lists (every genre a source names) are no longer penalised for it.
// Minimum genre similarity for an album suggestion without a documented link (sound alone can mislead),
// set between the highest bad (0.151) and the lowest good (0.188) owner-judged pair; re-check as judgments grow.
// A suggestion needs at least two things in common: one shared genre and nothing else (a western score and
// a pop album that are both "rock") is not enough.
const MIN_GENRE = 0.17
// Minimum score for an album suggestion, calibrated on the owner's judged pairs (docs/similarity-judgments.csv).
const MIN_SCORE = 0.3
const MIN_INFLUENCE_SCORE = 0.2
// What you rated low or said is not for you pushes similar things down (up to this much).
const AVOID = 0.3
// Variety: how much resemblance to what is already in the list costs (maximal marginal relevance).
const VARIETY = 0.15

function avoidPenalty(p: Profile, avoid: Profile[]) {
  return avoid.length ? AVOID * Math.max(...avoid.map((x) => compareProfiles(x, p).base)) ** 2 : 0
}

function mmr<T extends { score: number }>(items: T[], sim: (a: T, b: T) => number, limit: number, ok: (item: T, picked: T[]) => boolean = () => true) {
  const pool = [...items]
  const out: T[] = []
  while (out.length < limit && pool.length) {
    let best = -1
    let bestValue = -Infinity
    pool.forEach((it, i) => {
      if (!ok(it, out)) return
      const value = it.score - VARIETY * (out.length ? Math.max(...out.map((o) => sim(it, o))) : 0)
      if (value > bestValue) (bestValue = value), (best = i)
    })
    if (best < 0) break
    out.push(pool.splice(best, 1)[0])
  }
  return out
}

const profileOf = (albumId: string) => (DESCRIPTORS[albumId] ? albumProfile(DESCRIPTORS[albumId]) : null)
const profilesOf = (ids: string[] = []) => ids.map(profileOf).filter(Boolean) as Profile[]

// "If you like this album": albums by other artists, varied, at most `perArtist` per artist.
export function similarAlbums(
  albumId: string,
  opts: {
    limit?: number
    perArtist?: number
    artistOf?: (albumId: string) => string | undefined
    artistsOf?: (albumId: string) => string[] // all billed artists, for co-billed albums
    countryOf?: (albumId: string) => string | undefined
    hide?: string[] // album or artist ids
    avoid?: string[] // album ids you rated low or hid: similar albums are pushed down
  } = {},
): Similar[] {
  // A local scene is heard in its own language (owner's rule): an album sung mainly in another language (Shakira's
  // English-language Oral Fixation, Vol. 2) is that artist's crossover, not a discovery of their scene.
  const local = (id: string) => {
    const artist = opts.artistOf?.(id)
    const main = DESCRIPTORS[id]?.language[0]
    return isLocalArtist(artist) && (!main || !artist || main === SCENES[artist]?.lang)
  }
  const { limit = 10, perArtist = 2, hide = [] } = opts
  const a = profileOf(albumId)
  if (!a) return []
  const artistOf = opts.artistOf ?? ((id: string) => DESCRIPTORS[id]?.artist)
  const mine = artistOf(albumId)
  const mineAll = opts.artistsOf?.(albumId) ?? [mine]
  const shared = (id: string) => (opts.artistsOf?.(id) ?? []).some((x) => mineAll.includes(x))
  const avoid = profilesOf(opts.avoid)
  const from = opts.countryOf?.(albumId)
  const namedAlbum = (s: { artist: string; profile: Profile }) => (a.namedAlbums ?? []).some((w) => fold(w.artist) === fold(s.artist) && plainFold(w.title) === plainFold(s.profile.title))
  const scored = Object.values(DESCRIPTORS)
    // Never another album by the same artist, co-billed albums included (Do It Again is Röyksopp's and Robyn's).
    .filter((d) => d.albumId !== albumId && artistOf(d.albumId) !== mine && !shared(d.albumId) && !hide.includes(d.albumId) && !hide.includes(artistOf(d.albumId) ?? ''))
    .map((d) => {
      const b = albumProfile(d)
      const c = compareProfiles(a, b)
      const to = opts.countryOf?.(d.albumId)
      const isNew = Boolean(from && to && from !== to && local(d.albumId))
      const gap = qualityGap(a, b)
      // Never from an auteur or alternative album to a packaged chart product (see packaged below).
      // A credited cover between the two records is a fact about them, like a named influence (owner, Oct 2026).
      const tooCommercial = packaged(b) && tooFarUp(commercialLift(a, b), qualityGap(a, b)) && !wholeAlbum(a, 'influencedBy', d.artist) && !coverFrom(albumId, d.albumId)
      return { albumId: d.albumId, artist: d.artist, profile: b, score: c.score + (isNew ? DISCOVERY : 0) - avoidPenalty(b, avoid) - 0.05 * Math.max(0, gap - 1), reasons: c.reasons, newCountry: isNew ? to : undefined, panned: gap >= 3 || tooCommercial, fits: ((Math.sqrt(c.genre * genreCover(a, b)) >= MIN_GENRE && !c.opposite && c.evidence >= 2) || c.linked) && gap < 3 }
    })
    // Below the cut nothing is shown, even if the list ends up empty: no suggestion beats a bad one.
    // An influence the album documents (the artist's own words, a credited source) is strong evidence
    // on its own, so the closest album of that artist has a lower cut.
    // A record the source names (a song's album) is the strongest evidence of all: no cut, only the critics' one.
    // So is a song one of the two records covers from the other (Laura Branigan's Self Control and Raf's Raf).
    .filter((s) => (s.reasons.length && !s.panned && (s.score >= MIN_SCORE || (s.score >= MIN_INFLUENCE_SCORE && wholeAlbum(a, 'influencedBy', s.artist)))) || (!s.panned && (namedAlbum(s) || coverFrom(albumId, s.albumId))))
    .sort((x, y) => y.score - x.score)
  // A documented influence or comparison naming a described artist is the strongest evidence we have:
  // that artist's closest album (still above the cut) gets a place, with the link as the reason.
  // A link documented on some songs only adds its share to the score, but never takes a reserved place.
  const named = (n: string) => wholeAlbum(a, 'influencedBy', n) || wholeAlbum(a, 'soundsLike', n)
  // Up to three places (of ten); documented influences before comparisons, then by score.
  const reserved: typeof scored = []
  // A link names an artist, not a record: of that artist's close albums, the one that best stands for their sound
  // gets the place (closeness × how typical the album is of the artist), not just a near tie on genre labels.
  // A career-defining album (importance 0-5, when known) breaks near ties.
  // A compilation or a live album stands for an artist less than a record they made as such (Behaviour → Moroder
  // should not land on the Innovisions compilation): they come after the studio albums.
  const kindWeight = (id: string) => (['compilation', 'live'].includes(DESCRIPTORS[id]?.type ?? '') ? 0.7 : 1)
  const pick = (s: (typeof scored)[number]) => s.score * (1 + typicality(s.profile)) * (s.profile.importance === undefined ? 1 : 0.85 + 0.06 * s.profile.importance) * kindWeight(s.albumId)
  // A credited cover links the two records, one way like an influence: from the cover to the original record,
  // which comes first, up to two places of its own. Never back from the original (owner, Oct 2026).
  for (const s of scored) {
    const c = coverFrom(albumId, s.albumId)
    if (!c || reserved.length >= 2) continue
    const why = `${a.title} covers ${s.artist}’s ${c.song}`
    reserved.push({ ...s, reasons: [why, ...s.reasons.filter((r) => !r.includes(s.artist))].slice(0, 2) })
  }
  const covered = reserved.length
  const linked = scored
    .filter((s) => named(s.artist))
    // The record a source names comes first for its artist; then influences before comparisons; then the best fit.
    .sort((x, y) => Number(!wholeAlbum(a, 'influencedBy', x.artist)) - Number(!wholeAlbum(a, 'influencedBy', y.artist)) || Number(namedAlbum(y)) - Number(namedAlbum(x)) || pick(y) - pick(x))
  for (const s of linked) {
    if (reserved.length - covered >= 3 || reserved.some((r) => r.artist === s.artist)) continue
    const link = wholeAlbum(a, 'influencedBy', s.artist) ? `${a.title} draws on ${s.artist}` : `${a.title} sounds like ${s.artist}`
    const reasons = namedAlbum(s) ? [`${link} (${s.profile.title})`, ...s.reasons.filter((r) => !r.includes(s.artist))].slice(0, 2) : s.reasons[0]?.includes(s.artist) ? s.reasons : [link, ...s.reasons].slice(0, 2)
    reserved.push({ ...s, reasons })
  }
  // Discovery (owner's rule): one place goes to the closest album from a local scene in another country,
  // if one passes the same cut and genre test. Same rule for every album; no slot if nothing qualifies.
  const foreignLocal = scored.find((s) => s.newCountry && s.fits && s.score >= MIN_SCORE && !reserved.some((r) => r.albumId === s.albumId))
  if (foreignLocal && !reserved.some((r) => r.newCountry) && reserved.length < limit) reserved.push(foreignLocal)
  // Otherwise only albums that really share genres, or have a documented link.
  const rest = scored.filter((s) => s.fits && s.score >= MIN_SCORE && !reserved.some((r) => r.albumId === s.albumId))
  const sameArtist = (it: { albumId: string }, out: { albumId: string }[]) => out.filter((o) => artistOf(o.albumId) === artistOf(it.albumId)).length
  const picked = [...reserved, ...mmr(rest, (x, y) => genreSim(x.profile, y.profile), limit - reserved.length, (it, out) => sameArtist(it, [...reserved, ...out]) < perArtist)]
  // The discovery place is guaranteed, not the top spot: it sits where its score puts it among the sound matches,
  // so the first suggestion is always the closest one (or a documented link).
  const disc = picked.findIndex((p) => p === foreignLocal)
  if (disc >= 0) {
    const [d] = picked.splice(disc, 1)
    const links = picked.filter((p) => reserved.includes(p) && p !== d).length
    let at = links
    while (at < picked.length && picked[at].score >= d.score) at++
    picked.splice(at, 0, d)
  }
  return picked.map(({ albumId: id, score, reasons, newCountry }) => ({ albumId: id, score, reasons, ...(newCountry ? { newCountry } : {}) }))
}

// ---------- a fan's seeds ----------

// Seeds for a fan: albums they rated highly, plus (weaker) the albums of artists they follow.
export interface AlbumSeed {
  albumId: string
  weight: number
  rated: boolean
}

export interface SoundMatch {
  score: number
  seedAlbumId: string
  albumId: string
  reason: string
}

// Best match between a fan's seed albums and one artist's albums, with the reason in plain words.
export function soundMatch(seeds: AlbumSeed[], albumIds: string[], avoidIds: string[] = []): SoundMatch | null {
  const avoid = profilesOf(avoidIds)
  let best: SoundMatch | null = null
  for (const seed of seeds) {
    const a = profileOf(seed.albumId)
    if (!a) continue
    for (const id of albumIds) {
      const b = profileOf(id)
      if (!b || b.artist === a.artist) continue
      const c = compareProfiles(a, b)
      const score = c.score * seed.weight - avoidPenalty(b, avoid)
      if (best && score <= best.score) continue
      const why = c.reasons[0] ?? ''
      if (!why) continue
      const isLink = !/^(Both|Similar sound|Close genres)/.test(why)
      const reason = isLink ? why : seed.rated ? `Because you rated ${a.title}: ${lowerFirst(why)}` : `Close to ${a.artist}’s ${a.title}: ${lowerFirst(why)}`
      best = { score, seedAlbumId: a.id, albumId: b.id, reason }
    }
  }
  return best
}

// ---------- artists like this one ----------

export interface SimilarArtist {
  artistId: string
  score: number
  reason: string
  newCountry?: string
}

// An artist's critical standing: the average acclaim (0-5) of their described albums that have one.
const STANDING_WEIGHT = 0.2
function standing(albums: Profile[]) {
  const xs = albums.map((p) => p.acclaim).filter((x): x is number => x !== undefined)
  return xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : undefined
}

// "If you like Madonna": artist profiles compared (computed from all their albums); the reason
// names the closest pair of albums, so it stays concrete.
export function similarArtists(
  artistId: string,
  albumIdsOf: (artistId: string) => string[],
  candidates: string[],
  // years: suggestions for one period of the career (src/lib/eras.ts); a collaboration counts only if it happened then.
  opts: { limit?: number; countryOf?: (artistId: string) => string | undefined; hide?: string[]; avoid?: string[]; years?: [number, number] } = {},
): SimilarArtist[] {
  const { limit = 10, hide = [] } = opts
  const me = artistProfile(artistId, albumIdsOf(artistId))
  if (!me) return []
  const myAlbums = profilesOf(albumIdsOf(artistId))
  const avoid = profilesOf(opts.avoid)
  const from = opts.countryOf?.(artistId)
  // A collaboration names its year ("… Caffè de la Paix (1993)"): for one period, only those of that period.
  const collabNow = (x: string, y: string) => {
    const c = collaborationOf(x, y)
    if (!c || !opts.years) return c
    const year = Number([...c.what.matchAll(/\b(19|20)\d{2}\b/g)].pop()?.[0])
    return !year || (year >= opts.years[0] && year <= opts.years[1]) ? c : undefined
  }
  const scored: (SimilarArtist & { profile: Profile; tooCommercial: boolean })[] = []
  for (const other of candidates) {
    if (other === artistId || hide.includes(other)) continue
    const them = artistProfile(other, albumIdsOf(other))
    if (!them) continue
    const c = compareProfiles(me, them)
    const theirAlbums = profilesOf(albumIdsOf(other))
    let best: { a: Profile; b: Profile; c: Comparison } | null = null
    // The concrete pair weighs the two albums' place in their careers (importance 0-5, when known: ±30%), so the
    // match and its reason come from the records that define the two artists, not a minor album of a long career.
    const stand = (p: Profile) => (p.importance === undefined ? 1 : 0.7 + 0.12 * p.importance)
    let bestScore = 0
    for (const a of myAlbums) for (const b of theirAlbums) {
      const pc = compareProfiles(a, b)
      const v = pc.score * Math.sqrt(stand(a) * stand(b))
      if (!best || v > bestScore) (best = { a, b, c: pc }), (bestScore = v)
    }
    // Profile resemblance (repeated traits) and the best concrete album pair, half each.
    const to = opts.countryOf?.(other)
    const isNew = Boolean(from && to && from !== to && isLocalArtist(other))
    // Critical standing (owner, Oct 2026): an artist critics rate well below this one is a weaker suggestion,
    // however close the genres (No Doubt for R.E.M.). Average acclaim of the described albums; an artist with
    // no rated album counts as mixed (3), so having no reviews is no advantage. Only downward and only past a
    // full point: artists of similar standing, or rated higher, are not affected (owner).
    const mine = standing(myAlbums)
    const standingGap = mine === undefined ? 0 : Math.max(0, mine - (standing(theirAlbums) ?? 3) - 1)
    const score = 0.5 * c.score + 0.5 * bestScore + (isNew ? DISCOVERY : 0) - avoidPenalty(them, avoid) - STANDING_WEIGHT * standingGap
    const why = best?.c.reasons[0] ?? c.reasons[0]
    // A documented collaboration is kept below the cut: it is a reason of its own (see linkOf).
    if (!why || !best || (score < 0.3 && !collabNow(artistId, other))) continue
    const reason = /^(Both|Similar sound|Close genres)/.test(why) ? `${best.a.title} and ${best.b.title}: ${lowerFirst(why)}` : why
    // Same commercial rule as for albums, on the artists' averages; only a named influence can lift it (below).
    // An artist is a packaged act when their albums average mainstream 4.5+ and critics' standing below 4.5.
    const theirs = { mainstream: meanOf(theirAlbums.map((p) => p.mainstream)), acclaim: standing(theirAlbums) }
    const lift = commercialLift({ mainstream: meanOf(myAlbums.map((p) => p.mainstream)) }, theirs)
    const packagedAct = (theirs.mainstream ?? 0) >= 4.5 && (theirs.acclaim ?? 0) < 4.5
    scored.push({ artistId: other, score, reason, newCountry: isNew ? to : undefined, profile: them, tooCommercial: packagedAct && tooFarUp(lift, mine === undefined || theirs.acclaim === undefined ? 0 : mine - theirs.acclaim) })
  }
  scored.sort((x, y) => y.score - x.score)
  // Same rule as for albums: an artist named as a documented influence (or comparison) of one of this
  // artist's albums gets a place, at most three (of ten), if still above the cut. A broad discography (Madonna's
  // 17 albums) dilutes the overall profile, so the documented link is the stronger evidence.
  // Strongest first: influences the artist names for their whole work, then an album's documented
  // influences, then documented comparisons; within each, by score.
  // A link found on one album says little about a whole career (Bedtime Stories drawing on Mariah Carey is one
  // of Madonna's 17 albums): album-level links count for the artist only when they cover at least a quarter of
  // their albums. An influence has a direction: it leads from the artist to the ones they draw on, never back
  // (Katy Perry naming Queen puts Queen on Katy Perry's page, not Katy Perry on Queen's). A comparison
  // ("sounds like") is a likeness, so it counts both ways.
  const named = ARTIST_INFLUENCES[artistId]?.names ?? []
  const SHARE = 0.25
  // Each album counts by how much of it carries the link (a link on one song of ten counts a tenth).
  const share = (albums: Profile[], has: (p: Profile) => number) => (albums.length ? albums.reduce((n, p) => n + has(p), 0) / albums.length : 0)
  const linkOf = (s: (typeof scored)[number]) => {
    const them = s.profile.artist
    const theirAlbums = profilesOf(albumIdsOf(s.artistId))
    if (includesName(named, them)) return { rank: 0, reason: `Influenced by ${them}` }
    const collab = collabNow(artistId, s.artistId)
    if (collab) return { rank: 1, reason: collab.what }
    if (share(myAlbums, (a) => weightOf(a, 'influencedBy', them)) >= SHARE) {
      const drew = myAlbums.find((a) => wholeAlbum(a, 'influencedBy', them)) ?? myAlbums.find((a) => includesName(a.influencedBy, them))!
      return { rank: 2, reason: `${drew.title} draws on ${them}` }
    }
    if (share(myAlbums, (a) => weightOf(a, 'soundsLike', them)) >= SHARE) {
      const like = myAlbums.find((a) => wholeAlbum(a, 'soundsLike', them)) ?? myAlbums.find((a) => includesName(a.soundsLike, them))!
      return { rank: 3, reason: `${like.title} sounds like ${them}` }
    }
    if (share(theirAlbums, (b) => weightOf(b, 'soundsLike', me.artist)) >= SHARE) {
      const like = theirAlbums.find((b) => wholeAlbum(b, 'soundsLike', me.artist)) ?? theirAlbums.find((b) => includesName(b.soundsLike, me.artist))!
      return { rank: 3, reason: `${like.title} sounds like ${me.artist}` }
    }
    return null
  }
  const linked = scored.map((s) => ({ s, link: linkOf(s) })).filter((x) => x.link && (!x.s.tooCommercial || x.link.rank < 3)).sort((x, y) => x.link!.rank - y.link!.rank || y.s.score - x.s.score)
  // Documented collaborations (rank 1) get up to two places of their own on top of the three link places, so a
  // meeting the sound alone would never surface stays visible (Battiato and Los Planetas, Sepideh Raissadat).
  // Other links compete for the three places as before. Only collaborations may come from below the cut.
  const isCollab = (x: (typeof linked)[number]) => x.link!.rank === 1
  // A collaborator who makes the list on sound anyway keeps that place, with the collaboration as its reason.
  const linkPlaces = linked.filter((x) => !isCollab(x) && x.s.score >= 0.3).slice(0, 3)
  const bySound = scored.filter((s) => !s.tooCommercial && s.score >= 0.3 && !linkPlaces.some((r) => r.s.artistId === s.artistId))
  const onSound = new Set(mmr(bySound, (x, y) => genreSim(x.profile, y.profile), limit - linkPlaces.length).map((s) => s.artistId))
  // Discovery rule: a collaborator from a local scene in another country comes first.
  const collabs = linked.filter(isCollab).sort((x, y) => Number(!x.s.newCountry) - Number(!y.s.newCountry) || y.s.score - x.s.score)
  const reserved = [...linkPlaces, ...collabs.filter((x) => !onSound.has(x.s.artistId)).slice(0, 2)].map(({ s, link }) => ({ ...s, reason: link!.reason }))
  const collabReason = new Map(collabs.map((x) => [x.s.artistId, x.link!.reason]))
  const rest = bySound.filter((s) => !reserved.some((r) => r.artistId === s.artistId)).map((s) => (collabReason.has(s.artistId) ? { ...s, reason: collabReason.get(s.artistId)! } : s))
  return [...reserved, ...mmr(rest, (x, y) => genreSim(x.profile, y.profile), limit - reserved.length)].map(({ profile: _p, tooCommercial: _t, ...s }) => s)
}

// Genre lists (main first) compared with families, e.g. two artists' scene genres from scenes.ts.
export function genreListSimilarity(a: string[], b: string[]) {
  const toMap = (xs: string[]) => new Map(xs.map((g, i) => [g, 1 / Math.sqrt(i + 1)]))
  return weightedJaccard(expandGenres(toMap(a)), expandGenres(toMap(b)))
}

// ---------- critical standing ----------

// ---------- how commercial ----------

// Mainstream (0-5, reception file): 5 an industry-built global chart product, 3 a popular auteur record, 1 underground.
// Owner (Oct 2026): from an auteur or alternative record, a packaged chart product with no artistic standing is another
// world, and embarrassing (Tiromancino → Shakira). Commercial is not the problem (Thriller, Rhythm Nation 1814, an artist-led
// chart record from an indie one are fine leads), nor is a record critics overlooked: only the packaged product is out.
// Packaged = mainstream 5 and not in the critics' canon (acclaim below 5); out when 2+ points more commercial than the
// album you're on, unless that album names the artist as an influence. Only upward: Shakira can lead to Tiromancino.
const COMMERCIAL_GAP = 2
// One point up is enough when the packaged product also stands 2+ points lower with critics (owner, Oct 2026:
// Kylie's Tension II → Katy Perry's Smile, Kim Carnes's Mistaken Identity → Bonnie Tyler's Bitterblue). One point up
// to a record critics rate about the same stays a fine lead (Renaissance → Chromatica).
const tooFarUp = (lift: number, criticsGap: number) => lift >= COMMERCIAL_GAP || (lift >= 1 && criticsGap >= 2)
const packaged = (p: { mainstream?: number; acclaim?: number }) => p.mainstream === 5 && (p.acclaim ?? 0) < 5
function commercialLift(a: { mainstream?: number }, b: { mainstream?: number }) {
  return a.mainstream === undefined || b.mainstream === undefined ? 0 : b.mainstream - a.mainstream
}
const meanOf = (xs: (number | undefined)[]) => {
  const ys = xs.filter((x): x is number => x !== undefined)
  return ys.length ? ys.reduce((n, x) => n + x, 0) / ys.length : undefined
}

// How far below the album you're on a suggestion stands with critics (0-5 each, at release or later, whichever
// stands today). Only when both are known. A well-regarded album doesn't lead to one critics panned: 2 points
// lower pushes it down, 3 or more takes it out, even with a documented link.
function qualityGap(a: Profile, b: Profile) {
  return a.acclaim === undefined || b.acclaim === undefined ? 0 : a.acclaim - b.acclaim
}

// ---------- how typical an album is of its artist ----------

// Similarity of an album to its artist's whole body of work (0–1): True Blue is more "Madonna" than her debut.
const typical = new WeakMap<Profile, number>()
let albumsByArtist: Map<string, string[]> | null = null
function typicality(p: Profile) {
  let t = typical.get(p)
  if (t === undefined) {
    if (!albumsByArtist) {
      albumsByArtist = new Map()
      for (const d of Object.values(DESCRIPTORS)) albumsByArtist.set(d.artist, [...(albumsByArtist.get(d.artist) ?? []), d.albumId])
    }
    const ids = albumsByArtist.get(p.artist) ?? []
    const whole = ids.length > 1 ? artistProfile(`all:${p.artist}`, ids) : null
    typical.set(p, (t = whole ? compareProfiles(whole, p).base : 0))
  }
  return t
}

// ---------- lists that stay put when you tap ✕ ----------

// Tapping ✕ on a suggestion hides it and the next eligible one joins at the bottom: the others keep their
// places. The list is ranked as if nothing on it had been hidden (a hidden item still counts for variety and
// its "not for me" doesn't reshuffle its neighbours), then hidden items are taken out and the gap is filled.
// What you hid still pushes similar albums down everywhere else.
const NEAR = 40

export function similarAlbumsStable(albumId: string, opts: Parameters<typeof similarAlbums>[1] = {}): Similar[] {
  const limit = opts.limit ?? 10
  const hide = opts.hide ?? []
  const near = new Set(similarAlbums(albumId, { ...opts, hide: [], avoid: [], limit: NEAR }).map((s) => s.albumId))
  const hiddenHere = hide.filter((id) => near.has(id))
  return similarAlbums(albumId, {
    ...opts,
    hide: hide.filter((id) => !near.has(id)),
    avoid: (opts.avoid ?? []).filter((id) => !near.has(id)),
    limit: limit + hiddenHere.length,
  })
    .filter((s) => !hiddenHere.includes(s.albumId))
    .slice(0, limit)
}

export function similarArtistsStable(
  artistId: string,
  albumIdsOf: (artistId: string) => string[],
  candidates: string[],
  opts: Parameters<typeof similarArtists>[3] = {},
): SimilarArtist[] {
  const limit = opts.limit ?? 10
  const hide = opts.hide ?? []
  const near = new Set(similarArtists(artistId, albumIdsOf, candidates, { ...opts, hide: [], limit: NEAR }).map((s) => s.artistId))
  const hiddenHere = hide.filter((id) => near.has(id))
  return similarArtists(artistId, albumIdsOf, candidates, { ...opts, hide: hide.filter((id) => !near.has(id)), limit: limit + hiddenHere.length })
    .filter((s) => !hiddenHere.includes(s.artistId))
    .slice(0, limit)
}

// Fandome's suggestion engine (see docs/recommendation-research.md). Content-based and explainable:
//   1. genres, weighted by their order, with related genres counting too (deep house → house → dance)
//   2. sound scales (energy, electronic, mood…), only where both albums have a value
//   3. voice, lyric themes, era, scene and language
//   4. documented links: sounds like / influenced by (direct), shared producers, influences and
//      comparisons, and two-step connections through a third artist or producer
// Lists are then re-ranked for variety (MMR), push away what you said you don't like, and give a
// small bonus to other countries. Every suggestion says why; nothing is paid or sponsored.
import { DESCRIPTORS, SCALES, genreLabel, type Descriptor, type Scale } from './descriptors'
import { GENRE_PARENTS } from '../data/genreFamilies'
import { instrumentLabel } from '../data/instruments'
import { productionLabel } from '../data/production'
import { isLocalArtist, type Genre } from '../data/scenes'

const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '')
const and = (xs: string[]) => (xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`)
const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1)
const includesName = (names: string[], name: string) => names.some((n) => fold(n) === fold(name))
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
  confidence: number
}

const CONFIDENCE = { high: 1, medium: 0.9, low: 0.8 }
const STOP = new Set(['the', 'and', 'of', 'pop', 'music', 's', 'era'])
const sceneTokens = (s: string) => new Set(s.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !STOP.has(w)))

export function albumProfile(d: Descriptor): Profile {
  const genres = new Map<string, number>()
  // Order matters: the main genres carry the album, the long tail (often one track) weighs little.
  d.genres.forEach((g, i) => genres.set(g, 1 / (i + 1)))
  return {
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
    confidence: CONFIDENCE[d.confidence],
  }
}

// Artist profile: albums averaged, defining (landmark) albums weigh 1.5×, so traits that come back
// across the catalogue weigh more than a one-off.
export function artistProfile(id: string, albumIds: string[]): Profile | null {
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
    const w = (d.landmark ? 1.5 : 1) * CONFIDENCE[d.confidence]
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
const soundWeight = (g: string) => (FORMAT_GENRES.has(g) ? 0.1 : 1)
const byRarity = (m: Map<string, number>) => new Map([...m].map(([g, w]) => [g, w * rarityOf(g) * soundWeight(g)]))

const genreSim = (a: Profile, b: Profile) => weightedJaccard(byRarity(expandGenres(a.genres)), byRarity(expandGenres(b.genres)))

// 1 = same genres in the same order, 0 = nothing shared even at family level.
export const genreSimilarity = (a: Descriptor, b: Descriptor) => genreSim(albumProfile(a), albumProfile(b))

// Sound scales compared only where both have a value; null when fewer than 3 overlap.
export function scaleSimilarity(a: { scales: Partial<Record<Scale, number>> }, b: { scales: Partial<Record<Scale, number>> }) {
  const shared = SCALES.filter((s) => a.scales[s] !== undefined && b.scales[s] !== undefined)
  if (shared.length < 3) return null
  const diff = shared.reduce((sum, s) => sum + Math.abs(a.scales[s]! - b.scales[s]!), 0) / shared.length
  return 1 - diff / 5
}

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
function sharedTraits(a: Profile, b: Profile) {
  return TRAITS.filter(([s, side]) => {
    const x = a.scales[s]
    const y = b.scales[s]
    if (x === undefined || y === undefined) return false
    return side === 'high' ? x >= 4 && y >= 4 : x <= 1 && y <= 1
  }).map(([, , word]) => word)
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
  reasons: string[]
}

export function compareProfiles(a: Profile, b: Profile): Comparison {
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
  if (includesName(a.soundsLike, b.artist)) (score += direct), show && links.push(`${a.title} sounds like ${b.artist}`)
  else if (includesName(b.soundsLike, a.artist)) (score += direct), show && links.push(`${b.title} sounds like ${a.artist}`)
  if (includesName(a.influencedBy, b.artist)) (score += direct), show && links.push(`${a.title} was influenced by ${b.artist}`)
  else if (includesName(b.influencedBy, a.artist)) (score += direct), show && links.push(`${b.title} draws on ${a.artist}`)
  // An artist credited as producer of the other album worked on it (Prince co-produced Like a Prayer).
  if (includesName(a.producers, b.artist)) (score += direct), show && links.push(`${b.artist} worked on ${a.title}`)
  else if (includesName(b.producers, a.artist)) (score += direct), show && links.push(`${a.artist} worked on ${b.title}`)

  const artists = [a.artist, b.artist]
  // Shared influences, producers and comparisons also need close genres (a producer can make very different records).
  const infl = intersect(a.influencedBy, b.influencedBy, artists)
  if (infl.length && fit > 0) (score += Math.min(0.24, 0.12 * infl.length) * fit), show && links.push(`Both draw on ${and(infl.slice(0, 2))}`)
  const prod = intersect(a.producers, b.producers, artists)
  if (prod.length && fit > 0) (score += Math.min(0.2, 0.1 * prod.length) * fit), show && links.push(`Both produced by ${and(prod.slice(0, 2))}`)
  const like = intersect(a.soundsLike, b.soundsLike, artists)
  if (like.length && fit > 0) (score += Math.min(0.16, 0.08 * like.length) * fit), show && links.push(`Both sound like ${and(like.slice(0, 2))}`)
  if (!links.length) {
    const path = twoStep(a, b) ?? twoStep(b, a)
    if (path) (score += 0.06 * fit), show && links.push(path)
  }

  // Shared genres, most important for both first; else the closest related pair.
  const weight = (g: string) => Math.min(a.genres.get(g)!, b.genres.get(g)!) * rarityOf(g)
  const shared = [...a.genres.keys()].filter((g) => b.genres.has(g) && !FORMAT_GENRES.has(g)).sort((x, y) => weight(y) - weight(x))
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
  return { score: score * b.confidence, base, genre, linked: links.length > 0, reasons: reasons.slice(0, 2) }
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
// Minimum genre similarity for an album suggestion without a documented link (sound alone can mislead),
// set between the highest bad (0.151) and the lowest good (0.188) owner-judged pair; re-check as judgments grow.
const MIN_GENRE = 0.17
// Minimum score for an album suggestion, calibrated on the owner's judged pairs (docs/similarity-judgments.csv).
const MIN_SCORE = 0.3
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
  const local = (id: string) => isLocalArtist(opts.artistOf?.(id))
  const { limit = 10, perArtist = 2, hide = [] } = opts
  const a = profileOf(albumId)
  if (!a) return []
  const artistOf = opts.artistOf ?? ((id: string) => DESCRIPTORS[id]?.artist)
  const mine = artistOf(albumId)
  const mineAll = opts.artistsOf?.(albumId) ?? [mine]
  const shared = (id: string) => (opts.artistsOf?.(id) ?? []).some((x) => mineAll.includes(x))
  const avoid = profilesOf(opts.avoid)
  const from = opts.countryOf?.(albumId)
  const scored = Object.values(DESCRIPTORS)
    // Never another album by the same artist, co-billed albums included (Do It Again is Röyksopp's and Robyn's).
    .filter((d) => d.albumId !== albumId && artistOf(d.albumId) !== mine && !shared(d.albumId) && !hide.includes(d.albumId) && !hide.includes(artistOf(d.albumId) ?? ''))
    .map((d) => {
      const b = albumProfile(d)
      const c = compareProfiles(a, b)
      const to = opts.countryOf?.(d.albumId)
      const isNew = Boolean(from && to && from !== to && local(d.albumId))
      return { albumId: d.albumId, artist: d.artist, profile: b, score: c.score + (isNew ? DISCOVERY : 0) - avoidPenalty(b, avoid), reasons: c.reasons, newCountry: isNew ? to : undefined, fits: c.genre >= MIN_GENRE || c.linked }
    })
    // Below the cut nothing is shown, even if the list ends up empty: no suggestion beats a bad one.
    .filter((s) => s.score >= MIN_SCORE && s.reasons.length)
    .sort((x, y) => y.score - x.score)
  // A documented influence or comparison naming a described artist is the strongest evidence we have:
  // that artist's closest album (still above the cut) gets a place, with the link as the reason.
  const named = (n: string) => includesName(a.influencedBy, n) || includesName(a.soundsLike, n)
  const reserved: typeof scored = []
  for (const s of scored) {
    if (reserved.length >= 2 || !named(s.artist) || reserved.some((r) => r.artist === s.artist)) continue
    const link = includesName(a.influencedBy, s.artist) ? `${a.title} draws on ${s.artist}` : `${a.title} sounds like ${s.artist}`
    reserved.push({ ...s, reasons: s.reasons[0]?.includes(s.artist) ? s.reasons : [link, ...s.reasons].slice(0, 2) })
  }
  // Discovery (owner's rule): one place goes to the closest album from a local scene in another country,
  // if one passes the same cut and genre test. Same rule for every album; no slot if nothing qualifies.
  const foreignLocal = scored.find((s) => s.newCountry && s.fits && !reserved.some((r) => r.albumId === s.albumId))
  if (foreignLocal && !reserved.some((r) => r.newCountry) && reserved.length < limit) reserved.push(foreignLocal)
  // Otherwise only albums that really share genres, or have a documented link.
  const rest = scored.filter((s) => s.fits && !reserved.some((r) => r.albumId === s.albumId))
  const sameArtist = (it: { albumId: string }, out: { albumId: string }[]) => out.filter((o) => artistOf(o.albumId) === artistOf(it.albumId)).length
  const picked = [...reserved, ...mmr(rest, (x, y) => genreSim(x.profile, y.profile), limit - reserved.length, (it, out) => sameArtist(it, [...reserved, ...out]) < perArtist)]
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

// "If you like Madonna": artist profiles compared (computed from all their albums); the reason
// names the closest pair of albums, so it stays concrete.
export function similarArtists(
  artistId: string,
  albumIdsOf: (artistId: string) => string[],
  candidates: string[],
  opts: { limit?: number; countryOf?: (artistId: string) => string | undefined; hide?: string[]; avoid?: string[] } = {},
): SimilarArtist[] {
  const { limit = 4, hide = [] } = opts
  const me = artistProfile(artistId, albumIdsOf(artistId))
  if (!me) return []
  const myAlbums = profilesOf(albumIdsOf(artistId))
  const avoid = profilesOf(opts.avoid)
  const from = opts.countryOf?.(artistId)
  const scored: (SimilarArtist & { profile: Profile })[] = []
  for (const other of candidates) {
    if (other === artistId || hide.includes(other)) continue
    const them = artistProfile(other, albumIdsOf(other))
    if (!them) continue
    const c = compareProfiles(me, them)
    const theirAlbums = profilesOf(albumIdsOf(other))
    let best: { a: Profile; b: Profile; c: Comparison } | null = null
    for (const a of myAlbums) for (const b of theirAlbums) {
      const pc = compareProfiles(a, b)
      if (!best || pc.score > best.c.score) best = { a, b, c: pc }
    }
    // Profile resemblance (repeated traits) and the best concrete album pair, half each.
    const to = opts.countryOf?.(other)
    const isNew = Boolean(from && to && from !== to && isLocalArtist(other))
    const score = 0.5 * c.score + 0.5 * (best?.c.score ?? 0) + (isNew ? DISCOVERY : 0) - avoidPenalty(them, avoid)
    const why = best?.c.reasons[0] ?? c.reasons[0]
    if (score < 0.3 || !why || !best) continue
    const reason = /^(Both|Similar sound|Close genres)/.test(why) ? `${best.a.title} and ${best.b.title}: ${lowerFirst(why)}` : why
    scored.push({ artistId: other, score, reason, newCountry: isNew ? to : undefined, profile: them })
  }
  scored.sort((x, y) => y.score - x.score)
  return mmr(scored, (x, y) => genreSim(x.profile, y.profile), limit).map(({ profile: _p, ...s }) => s)
}

// Genre lists (main first) compared with families, e.g. two artists' scene genres from scenes.ts.
export function genreListSimilarity(a: string[], b: string[]) {
  const toMap = (xs: string[]) => new Map(xs.map((g, i) => [g, 1 / Math.sqrt(i + 1)]))
  return weightedJaccard(expandGenres(toMap(a)), expandGenres(toMap(b)))
}

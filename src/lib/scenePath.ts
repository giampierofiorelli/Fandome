// Scenes section (docs/scenes-design.md): a Duolingo-like path through a country's scene and a
// knowledge level. Everything is computed on the device from what you did: follows, album ratings,
// "New to me", "I listened" and posts. No streaks, no points for time, progress never goes down.
import type { Album, Artist, Post, User } from '../data/types'
import { GENRE_LABELS, SCENES, isLocalArtist, type Genre } from '../data/scenes'
import { GENRE_PARENTS } from '../data/genreFamilies'
import { genreListSimilarity, similarArtists } from './similar'
import { DESCRIPTORS, genreLabel, type Descriptor } from './descriptors'
import { allConnections, describe as describeConnection, yourConnections, type Connection } from './connections'
import { postArtists } from './postArtists'

export interface SceneDef {
  id: string
  name: string
  countries: string[]
  language: string
  ready: boolean // enough artists and eras to build a good path
  intro: string
}

// The owner's plan: these scenes first (others, "Surprise me" and genres later).
export const SCENE_DEFS: SceneDef[] = [
  { id: 'italy', name: 'Italy', countries: ['IT'], language: 'Italian', ready: true, intro: 'From Sanremo and the cantautori to Italo disco, rap and today’s pop.' },
  { id: 'brazil', name: 'Brazil', countries: ['BR'], language: 'Portuguese', ready: false, intro: 'Sertanejo, Brazilian funk, pagode, forró and MPB.' },
  { id: 'latin', name: 'Spain and Latin America', countries: ['ES', 'MX', 'CO', 'AR', 'PR', 'CL', 'PE', 'VE', 'CU', 'DO', 'UY', 'EC', 'PA', 'GT'], language: 'Spanish', ready: false, intro: 'Reggaeton, Latin pop and new Spanish pop.' },
  { id: 'france', name: 'France', countries: ['FR', 'BE', 'CH'], language: 'French', ready: false, intro: 'Chanson, French touch and one of Europe’s biggest rap scenes.' },
  { id: 'afro', name: 'Afro', countries: ['NG', 'ZA', 'GH', 'ML', 'NE', 'SN', 'CI', 'CM', 'BJ', 'CD', 'KE', 'TZ'], language: 'English, Pidgin, Yoruba, Zulu, Bambara, Tamasheq, Lingala, Swahili…', ready: false, intro: 'Afrobeats, amapiano and the sounds of West, Central, East and South Africa.' },
  { id: 'korea', name: 'Korea', countries: ['KR'], language: 'Korean', ready: false, intro: 'K-pop and beyond: Korean R&B, indie and hip-hop.' },
]
export const sceneDef = (id?: string) => SCENE_DEFS.find((s) => s.id === id)

// Sub-scenes: an artist belongs to the first group its main genre (or a parent of it) falls in.
const GROUPS: { id: string; label: string; roots: string[] }[] = [
  { id: 'songwriter', label: 'Singer-songwriters', roots: ['songwriter'] },
  { id: 'rock', label: 'Rock and alternative', roots: ['rock'] },
  { id: 'urban', label: 'Rap, R&B and urban', roots: ['hiphop', 'rnb'] },
  { id: 'dance', label: 'Dance and electronic', roots: ['dance', 'electronic'] },
  { id: 'classical', label: 'Opera and classical', roots: ['classical'] },
  { id: 'roots', label: 'Folk and roots', roots: ['folk', 'latin', 'afro', 'country', 'reggae', 'jazz'] },
  { id: 'pop', label: 'Pop', roots: ['pop', 'kpop'] }, // not a unit of its own: pop is everywhere
]
function withParents(g: string) {
  const out = new Set([g])
  let level = [g]
  for (let i = 0; i < 3; i++) {
    level = level.flatMap((x) => GENRE_PARENTS[x as Genre] ?? [])
    level.forEach((x) => out.add(x))
  }
  return out
}
export function groupOf(artistId: string) {
  const main = SCENES[artistId]?.genres[0]
  if (!main) return undefined
  const fam = withParents(main)
  return GROUPS.find((g) => g.roots.some((r) => fam.has(r)))?.id
}

const label = (g: string) => GENRE_LABELS[g as Genre]?.toLowerCase() ?? g
const and = (xs: string[]) => (xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`)

export interface Step {
  artistId: string
  reason: string
  done: boolean
  connection?: string // documented link to one of your artists, in plain words
}
export interface Unit {
  id: string
  kicker: string
  title: string
  steps: Step[]
}
export interface Level {
  n: number
  name: string
  text: string
  next?: string // what is missing for the next level
}
export interface Skill {
  label: string
  value: number
  total: number
}
export interface ScenePath {
  def: SceneDef
  artistIds: string[]
  decades: number[]
  units: Unit[]
  level: Level
  skills: Skill[]
}

export const LEVEL_NAMES = ['Curious', 'Listener', 'Explorer', 'Connoisseur', 'Insider', 'Ambassador']

export interface SceneContext {
  me?: User | null
  users: User[]
  posts: Post[]
  artists: Artist[]
  albums: Album[]
}

// Artists of a scene you have already explored: followed, an album rated, "New to me" or "I listened".
export function exploredArtists(me: User | null | undefined, albums: Album[]): Set<string> {
  const out = new Set<string>()
  if (!me) return out
  Object.keys(me.fanSince).forEach((id) => out.add(id))
  ;(me.listened ?? []).forEach((id) => out.add(id))
  const artistOfAlbum = new Map(albums.map((a) => [a.id, a.artistId]))
  for (const id of me.discovered ?? []) out.add(artistOfAlbum.get(id) ?? id)
  for (const id of Object.keys(me.ratings ?? {})) {
    const a = artistOfAlbum.get(id)
    if (a) out.add(a)
  }
  return out
}

export function buildScene(sceneId: string, ctx: SceneContext): ScenePath | null {
  const def = sceneDef(sceneId)
  if (!def) return null
  const { me, users, posts, albums } = ctx
  const ids = ctx.artists.map((a) => a.id).filter((id) => SCENES[id] && def.countries.includes(SCENES[id].country) && isLocalArtist(id))
  const name = (id: string) => ctx.artists.find((a) => a.id === id)?.name ?? id
  const fans = (id: string) => users.filter((u) => u.fanSince[id]).length
  const explored = exploredArtists(me, albums)

  // Closeness to you: the closest artist you follow (any country), by scene genres with families.
  const mine = me ? Object.keys(me.fanSince).filter((id) => SCENES[id]) : []
  const closeness = new Map<string, { score: number; to?: string }>()
  for (const id of ids) {
    let best = { score: 0, to: undefined as string | undefined }
    for (const f of mine) {
      if (f === id) continue
      const s = genreListSimilarity(SCENES[f].genres, SCENES[id].genres)
      if (s > best.score) best = { score: s, to: f }
    }
    closeness.set(id, best)
  }

  // Richer reasons where album descriptors exist on both sides (same producer, influences…).
  const albumIdsOf = (id: string) => albums.filter((a) => a.artistId === id || a.withArtists?.includes(id)).map((a) => a.id)
  const described = (id: string) => albumIdsOf(id).some((x) => DESCRIPTORS[x])
  const rich = new Map<string, { reason: string; score: number }>()
  for (const f of mine.filter(described)) {
    for (const s of similarArtists(f, albumIdsOf, ids.filter(described), { limit: 20 })) if (!rich.has(s.artistId) || rich.get(s.artistId)!.score < s.score) rich.set(s.artistId, { reason: s.reason, score: s.score })
  }
  // Album-level resemblance is stronger evidence than sharing a broad genre like pop.
  for (const [id, r] of rich) closeness.set(id, { ...closeness.get(id)!, score: Math.max(closeness.get(id)!.score, r.score + 0.3) })
  // Your connection: a documented link between the scene's artist and your artists (followed, or an
  // album you rated): the strongest reason of all, so connected artists open the path.
  const yours = new Set([...mine, ...Object.keys(me?.ratings ?? {}).map((x) => albums.find((a) => a.id === x)?.artistId).filter((x): x is string => Boolean(x))])
  const connection = new Map<string, string>()
  for (const id of ids) {
    const c = yourConnections(id, yours, ctx.artists)[0]
    if (c) connection.set(id, describeConnection(c, name, id, yours))
  }
  for (const id of connection.keys()) closeness.set(id, { ...closeness.get(id)!, score: closeness.get(id)!.score + 1 })
  const own = (id: string) => `${SCENES[id].since}s · ${and(SCENES[id].genres.map(label))}`
  const reasonClose = (id: string) => {
    if (connection.has(id)) return connection.get(id)!
    if (rich.has(id)) return rich.get(id)!.reason
    const c = closeness.get(id)!
    if (!c.to) return own(id)
    // Sharing only "pop" says nothing: then describe the artist instead.
    const common = SCENES[id].genres.filter((g) => SCENES[c.to!].genres.includes(g) && g !== 'pop')
    return common.length ? `Close to ${name(c.to)}: ${and(common.map(label))}` : own(id)
  }
  const reasonStretch = (id: string) => `A step further: ${and(SCENES[id].genres.map(label))}`

  // Inside a unit: two close to your taste, then one a step further (familiar enough to like,
  // new enough to be interesting), and so on.
  const order = (pool: string[], n: number): Step[] => {
    const sorted = [...pool].sort((a, b) => closeness.get(b)!.score - closeness.get(a)!.score || fans(b) - fans(a) || name(a).localeCompare(name(b)))
    if (!mine.length) return sorted.slice(0, n).map((id) => ({ artistId: id, reason: reasonClose(id), done: explored.has(id), connection: connection.get(id) }))
    const half = Math.ceil(sorted.length / 2)
    const close = sorted.slice(0, half)
    const further = sorted.slice(half)
    const out: Step[] = []
    while (out.length < n && (close.length || further.length)) {
      const stretch = out.length % 3 === 2
      const id = (stretch ? further.shift() : close.shift()) ?? (stretch ? close.shift() : further.shift())
      if (!id) break
      out.push({ artistId: id, reason: stretch && !connection.has(id) ? reasonStretch(id) : reasonClose(id), done: explored.has(id), connection: connection.get(id) })
    }
    return out
  }

  const units: Unit[] = []
  // 1. Start here: the closest artists you don't follow yet (or the most followed, if you follow nobody).
  const notMine = ids.filter((id) => !me?.fanSince[id])
  const start = mine.length
    ? [...notMine].sort((a, b) => closeness.get(b)!.score - closeness.get(a)!.score).slice(0, 3)
    : [...notMine].sort((a, b) => fans(b) - fans(a) || name(a).localeCompare(name(b))).slice(0, 3)
  units.push({ id: 'start', kicker: 'Unit 1', title: 'Start here', steps: start.map((id) => ({ artistId: id, reason: reasonClose(id), done: explored.has(id), connection: connection.get(id) })) })
  // 2. Now: artists who started in the 2010s or later.
  const now = ids.filter((id) => SCENES[id].since >= 2010)
  if (now.length >= 3) units.push({ id: 'now', kicker: `Unit ${units.length + 1}`, title: 'Now', steps: order(now, 6) })
  // 3. Eras: one unit per decade before 2010.
  const decades = [...new Set(ids.map((id) => SCENES[id].since))].sort((a, b) => a - b)
  for (const d of decades.filter((d) => d < 2010)) {
    const pool = ids.filter((id) => SCENES[id].since === d)
    if (pool.length >= 2) units.push({ id: `era-${d}`, kicker: `Unit ${units.length + 1} · Eras`, title: `The ${d}s`, steps: order(pool, 6) })
  }
  // 4. Sub-scenes.
  const groupsHere = GROUPS.filter((g) => g.id !== 'pop' && ids.filter((id) => groupOf(id) === g.id).length >= 3)
  for (const g of groupsHere) units.push({ id: `group-${g.id}`, kicker: `Unit ${units.length + 1} · Sub-scenes`, title: g.label, steps: order(ids.filter((id) => groupOf(id) === g.id), 6) })
  // 5. Deep cuts: the least known artists of the scene (the long tail). Until we have real popularity
  //    data, "known" = fans on Fandome, then albums in the catalogue and album descriptions.
  const fame = (id: string) => fans(id) * 10 + albumIdsOf(id).length + (described(id) ? 5 : 0)
  const deepSet = [...ids].sort((a, b) => fame(a) - fame(b) || name(a).localeCompare(name(b))).slice(0, Math.max(5, Math.floor(ids.length / 5)))
  units.push({ id: 'deep', kicker: `Unit ${units.length + 1}`, title: 'Deep cuts', steps: order(deepSet, 5).map((s) => ({ ...s, reason: `Less known · ${s.reason}` })) })

  // Level: what you explored in this scene (every scene artist counts, not only the ones shown).
  const done = ids.filter((id) => explored.has(id))
  const eras = new Set(done.map((id) => SCENES[id].since))
  const groups = new Set(done.map(groupOf).filter(Boolean))
  const sceneAlbums = new Set(albums.filter((a) => ids.includes(a.artistId)).map((a) => a.id))
  const rated = Object.keys(me?.ratings ?? {}).filter((id) => sceneAlbums.has(id)).length
  const deep = done.some((id) => deepSet.includes(id))
  const myPosts = me ? posts.filter((p) => p.authorId === me.id && !p.removed && postArtists(p).some((a) => ids.includes(a))) : []
  const liked = myPosts.filter((p) => p.likes.some((u) => u !== me?.id)).length
  const allEras = Math.min(decades.length, 5)
  const req = [
    { artists: 3, eras: 0, groups: 0, rated: 0, deep: false, posts: 0, liked: 0 },
    { artists: 8, eras: 2, groups: 2, rated: 0, deep: false, posts: 0, liked: 0 },
    { artists: 15, eras: 3, groups: 3, rated: 5, deep: true, posts: 0, liked: 0 },
    { artists: 25, eras: allEras, groups: 3, rated: 10, deep: true, posts: 1, liked: 0 },
    { artists: 25, eras: allEras, groups: 3, rated: 10, deep: true, posts: 3, liked: 3 },
  ]
  const meets = (r: (typeof req)[number]) => done.length >= r.artists && eras.size >= r.eras && groups.size >= r.groups && rated >= r.rated && (!r.deep || deep) && myPosts.length >= r.posts && liked >= r.liked
  let n = 0
  while (n < req.length && meets(req[n])) n++
  const oldest = done.length ? Math.min(...done.map((id) => SCENES[id].since)) : undefined
  const texts = [
    'Start here: three artists picked for you.',
    'You’ve met the scene.',
    'You know today’s scene and more than one era.',
    `You can find your way from the ${oldest}s to today.`,
    'You know the scene inside out.',
    'You bring others into the scene.',
  ]
  let next: string | undefined
  if (n < req.length) {
    const r = req[n]
    const miss: string[] = []
    if (done.length < r.artists) miss.push(`${r.artists - done.length} more ${r.artists - done.length === 1 ? 'artist' : 'artists'}`)
    if (eras.size < r.eras) miss.push(`${r.eras - eras.size} more ${r.eras - eras.size === 1 ? 'era' : 'eras'}`)
    if (groups.size < r.groups) miss.push(`${r.groups - groups.size} more ${r.groups - groups.size === 1 ? 'sub-scene' : 'sub-scenes'}`)
    if (rated < r.rated) miss.push(`rate ${r.rated - rated} more ${r.rated - rated === 1 ? 'album' : 'albums'}`)
    if (r.deep && !deep) miss.push('one deep cut')
    if (myPosts.length < r.posts) miss.push(r.posts === 1 ? 'a post about the scene' : `${r.posts - myPosts.length} more posts about it`)
    if (liked < r.liked) miss.push('posts other fans like')
    next = `Next: ${LEVEL_NAMES[n + 1]} · ${and(miss)}`
  }
  return {
    def,
    artistIds: ids,
    decades,
    units,
    level: { n, name: LEVEL_NAMES[n], text: texts[n], next },
    skills: [
      { label: 'Artists', value: Math.min(done.length, 25), total: 25 },
      { label: 'Eras', value: eras.size, total: decades.length },
      { label: 'Sub-scenes', value: groups.size, total: groupsHere.length },
      { label: 'Albums rated', value: Math.min(rated, 10), total: 10 },
    ],
  }
}

// Where to begin with an artist: a defining album first (from the descriptors), else their first album.
export function startWith(artistId: string, albums: Album[]): { albumId: string; why: string } | undefined {
  const theirs = albums.filter((a) => a.artistId === artistId || a.withArtists?.includes(artistId)).sort((a, b) => a.year - b.year)
  if (!theirs.length) return undefined
  const described = theirs.filter((a) => DESCRIPTORS[a.id])
  // The most recent defining album: closest to how they sound today.
  const landmark = [...described].reverse().find((a) => DESCRIPTORS[a.id].landmark)
  if (landmark) return { albumId: landmark.id, why: 'One of their defining albums' }
  if (described.length) return { albumId: described[0].id, why: 'A good way in' }
  return { albumId: theirs[0].id, why: 'Their first album here' }
}

// What to notice while listening, from the album's description (our own words, no review text).
export function listenFor(albumId: string): { notes?: string; cues: string[] } | undefined {
  const d: Descriptor | undefined = DESCRIPTORS[albumId]
  if (!d) return undefined
  const s = d.scales
  const cues: string[] = []
  const add = (ok: boolean | undefined, w: string) => ok && cues.push(w)
  add(s.electronic !== undefined && s.electronic >= 4, 'electronic production')
  add(s.electronic !== undefined && s.electronic <= 1, 'an acoustic sound')
  add(s.groove !== undefined && s.groove >= 4, 'grooves made for dancing')
  add(s.theatrical !== undefined && s.theatrical >= 4, 'a theatrical delivery')
  add(s.theatrical !== undefined && s.theatrical <= 1, 'an intimate delivery')
  add(s.mood !== undefined && s.mood <= 1, 'a dark mood')
  add(s.mood !== undefined && s.mood >= 4, 'a bright mood')
  add(s.experimental !== undefined && s.experimental >= 4, 'experimental touches')
  if (d.voice[0]) cues.push(`a ${d.voice[0]} voice`)
  const genres = d.genres.slice(0, 3).map((g) => genreLabel(g).toLowerCase())
  if (genres.length) cues.push(and(genres))
  return { notes: d.notes || undefined, cues }
}

// "Compare": listen to the influence first, then the work that picks it up, and hear the link.
export function compareFor(artistId: string, yours: Set<string>, artists: Artist[], albums: Album[]): { first: string; second: string; text: string } | undefined {
  const name = (id: string) => artists.find((a) => a.id === id)?.name ?? id
  const albumOf = (artist: string, title?: string) => (title ? albums.find((a) => a.artistId === artist && a.title.toLowerCase() === title.toLowerCase())?.id : undefined)
  const involved = allConnections(artists).filter((c: Connection) => (c.from === artistId || c.to === artistId) && c.work && c.type !== 'produced')
  const pick = involved.find((c) => yours.has(c.from) || yours.has(c.to)) ?? involved[0]
  if (!pick) return undefined
  const second = albumOf(pick.from, pick.work)
  const first = startWith(pick.to, albums)?.albumId
  if (!first || !second || first === second) return undefined
  const text = pick.type === 'soundslike' ? `Hear what ${name(pick.from)} and ${name(pick.to)} share.` : `Hear how ${name(pick.from)} picks up ${name(pick.to)}.`
  return { first, second, text }
}

// "Did you know?": facts from the descriptions of the album to start with (producers, influences, scene).
export function didYouKnow(artistId: string, albums: Album[], skip: string[] = []): string[] {
  const begin = startWith(artistId, albums)
  const d = begin ? DESCRIPTORS[begin.albumId] : undefined
  if (!d) return []
  const others = (xs: string[]) => xs.filter((x) => x.toLowerCase() !== d.artist.toLowerCase())
  const facts: string[] = []
  const prod = others(d.producers)
  if (prod.length) facts.push(`${d.title} was produced by ${and(prod.slice(0, 4))}${prod.length > 4 ? ' and others' : ''}.`)
  if (d.influencedBy.length) facts.push(`${d.title} draws on ${and(d.influencedBy.slice(0, 4))}.`)
  if (d.soundsLike.length) facts.push(`Critics hear ${and(d.soundsLike.slice(0, 3))} in ${d.title}.`)
  if (d.scene) facts.push(`Scene: ${d.scene}.`)
  return facts.filter((f) => !skip.some((s) => s && f.includes(s))).slice(0, 3)
}

// Optional mini quiz: just for fun, no points, no effect on the level. Built from the data we have
// (scenes.ts for every artist, descriptors where they exist); options are stable for each artist.
export interface QuizQuestion {
  q: string
  options: string[]
  answer: string
}

function seeded(text: string) {
  let h = 2166136261
  for (const c of text) h = Math.imul(h ^ c.charCodeAt(0), 16777619)
  return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0) / 4294967296)
}
function shuffle<T>(xs: T[], rnd: () => number) {
  const a = [...xs]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function quizFor(artistId: string, artists: Artist[], albums: Album[]): QuizQuestion[] {
  const s = SCENES[artistId]
  const name = artists.find((a) => a.id === artistId)?.name
  if (!s || !name) return []
  const rnd = seeded(artistId)
  const out: QuizQuestion[] = []
  const begin = startWith(artistId, albums)
  const d = begin ? DESCRIPTORS[begin.albumId] : undefined
  const pool = (xs: string[], not: string[]) => shuffle([...new Set(xs)].filter((x) => !not.some((n) => n.toLowerCase() === x.toLowerCase())), rnd)
  if (d) {
    const prod = d.producers.filter((p) => p.toLowerCase() !== d.artist.toLowerCase())
    if (prod.length) {
      const wrong = pool(Object.values(DESCRIPTORS).flatMap((x) => x.producers), [...d.producers, ...artists.map((a) => a.name)]).slice(0, 2)
      if (wrong.length === 2) out.push({ q: `Who produced ${d.title}?`, answer: prod[0], options: shuffle([prod[0], ...wrong], rnd) })
    }
    if (d.influencedBy.length) {
      const wrong = pool(Object.values(DESCRIPTORS).flatMap((x) => x.influencedBy), d.influencedBy).slice(0, 2)
      if (wrong.length === 2) out.push({ q: `${d.title} draws on…`, answer: d.influencedBy[0], options: shuffle([d.influencedBy[0], ...wrong], rnd) })
    }
  }
  if (out.length < 2) {
    const decades = [s.since - 10, s.since, s.since + 10].filter((x) => x >= 1930 && x <= 2020)
    if (decades.length === 3) out.push({ q: `When did ${name} start?`, answer: `${s.since}s`, options: decades.map((x) => `${x}s`) })
  }
  if (out.length < 2) {
    const main = GENRE_LABELS[s.genres[0] as Genre]
    const wrong = shuffle(['pop', 'rock', 'songwriter', 'hiphop', 'electronic', 'opera', 'folk', 'disco', 'jazz', 'punk'].filter((g) => !s.genres.includes(g as Genre)), rnd).slice(0, 2).map((g) => GENRE_LABELS[g as Genre])
    out.push({ q: `${name} is mainly…`, answer: main, options: shuffle([main, ...wrong], rnd) })
  }
  return out.slice(0, 2)
}

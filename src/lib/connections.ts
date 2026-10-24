// Documented connections between artists: who influenced, sounds like, sampled, covered, produced or
// worked with whom. From the album descriptors (influenced_by, sounds_like) and from the researched
// connection files in docs/connections/*.csv (format: docs/connections-guide.md).
// Used by Scenes to show "your connection" to a scene's artist and its roots and heirs.
import { parseCsv } from './csv'
import { DESCRIPTORS } from './descriptors'
import type { Artist } from '../data/types'

export type ConnectionType = 'influenced' | 'soundslike' | 'sampled' | 'covered' | 'collaborated' | 'produced'

export interface Connection {
  from: string // artist id (the one who was influenced / sounds like / sampled / covered / was produced)
  to: string // artist id (the influence, the sampled or covered artist, the producer, the collaborator)
  type: ConnectionType
  work?: string // album or song where it happens
  source?: string
}

const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '')
const files = import.meta.glob('../../docs/connections/*.csv', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const TYPES = new Set<ConnectionType>(['influenced', 'soundslike', 'sampled', 'covered', 'collaborated', 'produced'])

let cache: { key: Artist[]; list: Connection[] } | null = null

export function allConnections(artists: Artist[]): Connection[] {
  if (cache?.key === artists) return cache.list
  const byName = new Map(artists.map((a) => [fold(a.name), a.id]))
  const idOf = (name: string) => byName.get(fold(name))
  const out: Connection[] = []
  const seen = new Set<string>()
  const add = (c: Connection) => {
    const k = `${c.from}|${c.to}|${c.type}|${c.work ?? ''}`
    if (c.from !== c.to && !seen.has(k)) seen.add(k), out.push(c)
  }
  for (const d of Object.values(DESCRIPTORS)) {
    const from = idOf(d.artist)
    if (!from) continue
    for (const n of d.influencedBy) { const to = idOf(n); if (to) add({ from, to, type: 'influenced', work: d.title }) }
    for (const n of d.soundsLike) { const to = idOf(n); if (to) add({ from, to, type: 'soundslike', work: d.title }) }
    for (const n of d.producers) { const to = idOf(n); if (to) add({ from, to, type: 'produced', work: d.title }) }
  }
  for (const text of Object.values(files)) {
    const [head, ...rows] = parseCsv(text)
    if (!head) continue
    for (const cells of rows) {
      const r = Object.fromEntries(head.map((h, i) => [h.trim(), (cells[i] ?? '').trim()]))
      const from = idOf(r.from_artist)
      const to = idOf(r.to_artist)
      if (from && to && TYPES.has(r.type as ConnectionType)) add({ from, to, type: r.type as ConnectionType, work: r.work || undefined, source: r.source || undefined })
    }
  }
  cache = { key: artists, list: out }
  return out
}

const possessive = (name: string) => `${name}’s`

// One connection told in plain words, from the point of view of the step's artist.
export function describe(c: Connection, name: (id: string) => string, stepId: string, yours: Set<string>): string {
  const work = c.work ? `${possessive(name(c.from))} ${c.work}` : name(c.from)
  const mine = (id: string) => (yours.has(id) && id !== stepId ? ', one of your artists' : '')
  switch (c.type) {
    case 'influenced':
      return `${work} draws on ${name(c.to)}${mine(c.to)}`
    case 'soundslike':
      return `${work} sounds like ${name(c.to)}${mine(c.to)}`
    case 'sampled':
      return `${name(c.from)} sampled ${name(c.to)}${c.work ? ` in ${c.work}` : ''}`
    case 'covered':
      return `${name(c.from)} covered ${name(c.to)}${c.work ? `: ${c.work}` : ''}`
    case 'produced':
      return `${name(c.to)} produced ${work}`
    case 'collaborated':
      return `${name(c.from)} and ${name(c.to)} worked together${c.work ? ` on ${c.work}` : ''}`
  }
}

// Connections between a step's artist and your artists (followed, or with an album you rated).
export function yourConnections(stepId: string, yours: Set<string>, artists: Artist[]): Connection[] {
  return allConnections(artists).filter((c) => (c.from === stepId && yours.has(c.to)) || (c.to === stepId && yours.has(c.from)))
}

// Inside a scene: who this artist draws on (roots) and who draws on them (heirs).
export function rootsAndHeirs(artistId: string, sceneIds: Set<string>, artists: Artist[]) {
  const list = allConnections(artists).filter((c) => c.type === 'influenced' || c.type === 'soundslike' || c.type === 'sampled' || c.type === 'covered')
  return {
    roots: [...new Set(list.filter((c) => c.from === artistId && sceneIds.has(c.to)).map((c) => c.to))],
    heirs: [...new Set(list.filter((c) => c.to === artistId && sceneIds.has(c.from)).map((c) => c.from))],
  }
}

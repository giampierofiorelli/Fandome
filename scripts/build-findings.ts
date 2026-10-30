// "Fandome's data shows": computes every finding once (it takes a few seconds over the whole catalogue) and writes
// src/data/findings.json, read by the album page and the findings page. Runs before every build (npm run build).
import { writeFileSync } from 'node:fs'
import { albums } from '../src/data/seed'
import { findingOf } from '../src/lib/legacy'
import { DESCRIPTORS } from '../src/lib/descriptors'
import { influenceOf } from '../src/lib/influence'

const list = albums.flatMap((a) => {
  const f = findingOf(a.id)
  if (!f) return []
  const { trait, before, after, when } = f.spread
  return [{ albumId: a.id, year: DESCRIPTORS[a.id]?.year ?? 0, trait, before, after, when, field: f.trace.field }]
}).sort((x, y) => x.year - y.year || x.albumId.localeCompare(y.albumId))
writeFileSync('src/data/findings.json', JSON.stringify({ described: Object.keys(DESCRIPTORS).length, findings: list }, null, 1) + '\n')
console.log(`${list.length} findings written to src/data/findings.json`)

// The influence network: who draws on each album (the strongest six shown on its page), its standing among the
// albums of its time, and whether its followers left its own sources behind.
const influence: Record<string, { n: number; top: [string, string][]; pct: number; dis?: number }> = {}
for (const id of Object.keys(DESCRIPTORS)) {
  const i = influenceOf(id)
  if (!i?.citedBy.length) continue
  influence[id] = { n: i.citedBy.length, top: i.citedBy.slice(0, 6).map((c) => [c.albumId, c.how]), pct: Math.round(i.percentile * 100) / 100, ...(i.disruption !== undefined ? { dis: Math.round(i.disruption * 100) / 100 } : {}) }
}
writeFileSync('src/data/influence.json', JSON.stringify(influence) + '\n')
console.log(`${Object.keys(influence).length} albums drawn on, written to src/data/influence.json`)

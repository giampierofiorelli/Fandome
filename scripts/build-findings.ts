// "Fandome's data shows": computes every finding once (it takes a few seconds over the whole catalogue) and writes
// src/data/findings.json, read by the album page and the findings page. Runs before every build (npm run build).
import { writeFileSync } from 'node:fs'
import { albums } from '../src/data/seed'
import { findingOf } from '../src/lib/legacy'
import { DESCRIPTORS } from '../src/lib/descriptors'

const list = albums.flatMap((a) => {
  const f = findingOf(a.id)
  if (!f) return []
  const { trait, before, after, when } = f.spread
  return [{ albumId: a.id, year: DESCRIPTORS[a.id]?.year ?? 0, trait, before, after, when, field: f.trace.field }]
}).sort((x, y) => x.year - y.year || x.albumId.localeCompare(y.albumId))
writeFileSync('src/data/findings.json', JSON.stringify({ described: Object.keys(DESCRIPTORS).length, findings: list }, null, 1) + '\n')
console.log(`${list.length} findings written to src/data/findings.json`)

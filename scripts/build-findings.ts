// "Fandome's data shows": computes every finding once (it takes a few seconds over the whole catalogue) and writes
// src/data/findings.json, read by the album page and the findings page. Runs before every build (npm run build).
import { writeFileSync } from 'node:fs'
import { albums } from '../src/data/seed'
import { findingOf } from '../src/lib/legacy'
import { DESCRIPTORS } from '../src/lib/descriptors'
import { drawsOnOf, influenceOf } from '../src/lib/influence'
import { buildStory } from '../src/lib/soundStory'
import { lateRecognition, nicheToMainstream, revivals } from '../src/lib/patterns'

const list = albums.flatMap((a) => {
  const f = findingOf(a.id)
  if (!f) return []
  const { trait, before, after, when } = f.spread
  return [{ albumId: a.id, year: DESCRIPTORS[a.id]?.year ?? 0, trait, before, after, when, field: f.trace.field }]
}).sort((x, y) => x.year - y.year || x.albumId.localeCompare(y.albumId))
const late = albums.flatMap((a) => lateRecognition(a.id) ?? []).sort((x, y) => (DESCRIPTORS[x.albumId].year ?? 0) - (DESCRIPTORS[y.albumId].year ?? 0))
writeFileSync('src/data/findings.json', JSON.stringify({ described: Object.keys(DESCRIPTORS).length, findings: list, late, revivals: revivals(), niche: nicheToMainstream() }, null, 1) + '\n')
console.log(`${late.length} recognised late, ${revivals().length} revivals, ${nicheToMainstream().length} niche-to-mainstream genres`)
console.log(`${list.length} findings written to src/data/findings.json`)

// The influence network: who draws on each album (the strongest six shown on its page), its standing among the
// albums of its time, and whether its followers left its own sources behind.
const influence: Record<string, { n: number; top: [string, string][]; pct: number; dis?: number }> = {}
for (const id of Object.keys(DESCRIPTORS)) {
  const i = influenceOf(id)
  if (!i?.citedBy.length) continue
  // n counts the albums that clearly lead to it (a link of weight 0.25 or more: not a small share of a link to its
  // artist in general).
  const clear = i.citedBy.filter((c) => c.weight >= 0.25)
  if (!clear.length) continue
  influence[id] = { n: clear.length, top: clear.slice(0, 6).map((c) => [c.albumId, c.how]), pct: Math.round(i.percentile * 100) / 100, ...(i.disruption !== undefined ? { dis: Math.round(i.disruption * 100) / 100 } : {}) }
}
writeFileSync('src/data/influence.json', JSON.stringify(influence) + '\n')
console.log(`${Object.keys(influence).length} albums drawn on, written to src/data/influence.json`)

// Roots (owner, Oct 2026): what each album draws on, so its page can walk back step by step: a modern record, the
// older one it drew on, and so on to jazz or the classics. Every kind of link counts, by how much it says about where
// the sound comes from (owner: a shared producer is a real link, but a weaker one, not to be left out): an influence
// the artist names counts in full, a critic's comparison or a borrowing half, a shared producer or a career-wide
// influence a quarter. The strongest three steps are kept, so a producer appears when nothing stronger is there.
const ROOT_WEIGHT: Record<string, number> = { 'influence-album': 1, influence: 1, 'critic-album': 1, critic: 1, 'borrows-album': 1, borrows: 1, producer: 0.5, artist: 1 }
const roots: Record<string, [string, string][]> = {}
for (const id of Object.keys(DESCRIPTORS)) {
  const on = drawsOnOf(id)
    .map((c) => ({ c, w: c.weight * (ROOT_WEIGHT[c.how] ?? 1) }))
    .filter((x) => x.w >= 0.06)
    .sort((a, b) => b.w - a.w)
    .slice(0, 3)
  if (on.length) roots[id] = on.map((x) => [x.c.albumId, x.c.how])
}
writeFileSync('src/data/roots.json', JSON.stringify(roots) + '\n')
console.log(`${Object.keys(roots).length} albums with roots, written to src/data/roots.json`)

// The story of a sound (method v2, docs/research/findings-method.md).
const story = buildStory()
writeFileSync('src/data/story.json', JSON.stringify(story) + '\n')
console.log(`story: ${story.tested} series tested, ${story.rises} rises (${story.withPioneers} with pioneers), chance rises ${story.nullRises.join('/')} → FDR ≈ ${story.fdr}`)

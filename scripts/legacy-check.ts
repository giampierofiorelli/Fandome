// The check between sources and data (docs/legacy-guide.md): albums whose new traits spread widely in the data
// but sources give little legacy, and albums sources call influential whose trace the data doesn't show yet.
// Run: npx vite-node scripts/legacy-check.ts
import { DESCRIPTORS } from '../src/lib/descriptors'
import { legacyOf, traceOf } from '../src/lib/legacy'

const rows = Object.values(DESCRIPTORS).flatMap((d) => {
  const l = legacyOf(d.albumId)
  const t = traceOf(d.albumId)
  return l ? [{ d, legacy: l.legacy, lift: t?.lift ?? 0, top: t?.spread[0] }] : []
})
const line = (r: (typeof rows)[number]) => `  ${r.d.artist} – ${r.d.title} (${r.d.year}): legacy ${r.legacy}, trace ${Math.round(100 * r.lift)}${r.top ? ` (${r.top.trait} ${Math.round(100 * r.top.before)}→${Math.round(100 * r.top.after)}%)` : ''}`
console.log(`${rows.length} albums with a legacy score.`)
// Pioneers the data shows (first with traits that spread, followers sound like it) that the sources rate low or don't rate:
// possible findings of our own (owner, Oct 2026).
const all = Object.values(DESCRIPTORS).flatMap((d) => { const t = traceOf(d.albumId); return t?.pioneer ? [{ d, t, l: legacyOf(d.albumId)?.legacy }] : [] })
console.log('\nPioneers in the data that the sources rate 2 or less, or not at all (possible findings):')
all.filter((x) => (x.l ?? 0) <= 2).sort((a, b) => b.t.lift - a.t.lift).forEach((x) => console.log(`  ${x.d.artist} – ${x.d.title} (${x.d.year}): legacy ${x.l ?? '-'}, trace ${Math.round(100 * x.t.lift)}, first ${Math.round(100 * x.t.first)}%, closer +${x.t.closer.toFixed(2)} (${x.t.spread.slice(0, 3).map((s) => s.trait).join(', ')})`))
console.log('\nSpread widely but not a pioneer (a trend of its time):')
rows.filter((r) => r.lift >= 0.8 && r.legacy <= 2 && !traceOf(r.d.albumId)?.pioneer).sort((a, b) => b.lift - a.lift).forEach((r) => console.log(line(r)))
console.log('\nInfluential for the sources, little trace in the data (later albums of its line not described yet, or an influence genres do not capture):')
rows.filter((r) => r.legacy >= 4 && r.lift < 0.2).sort((a, b) => b.legacy - a.legacy).forEach((r) => console.log(line(r)))

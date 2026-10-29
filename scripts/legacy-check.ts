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
console.log('\nSpread widely in the data, little legacy in the sources (check the sources, or the trace is a trend of its time):')
rows.filter((r) => r.lift >= 0.8 && r.legacy <= 2).sort((a, b) => b.lift - a.lift).forEach((r) => console.log(line(r)))
console.log('\nInfluential for the sources, little trace in the data (later albums of its line not described yet, or an influence genres do not capture):')
rows.filter((r) => r.legacy >= 4 && r.lift < 0.2).sort((a, b) => b.legacy - a.legacy).forEach((r) => console.log(line(r)))

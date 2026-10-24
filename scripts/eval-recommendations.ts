// Prints the quality report of the suggestion engine. Run: npx vite-node scripts/eval-recommendations.ts
import { evaluate } from '../src/lib/recQuality'

const q = evaluate()
const pct = (x: number) => `${Math.round(x * 100)}%`
console.log(`Described albums: ${q.albums}`)
console.log(`Coverage (albums suggested at least once): ${pct(q.coverage)}`)
console.log(`Artist coverage: ${pct(q.artistCoverage)}`)
console.log(`Variety inside a list: ${pct(q.diversity)}`)
console.log(`From a local scene abroad: ${pct(q.novelty)}`)
console.log(`With a reason: ${pct(q.explained)}`)
console.log(`Albums with no suggestion: ${q.empty}`)
console.log(`Most suggested album's share: ${pct(q.topShare)}`)

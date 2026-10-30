// Which years and areas the catalogue covers least (owner, Oct 2026): as albums are added, the trace, the findings
// and the patterns correct themselves, and they correct fastest where coverage is thin. Run
// `npx vite-node scripts/coverage.ts` before choosing the next artists to describe.
import { DESCRIPTORS } from '../src/lib/descriptors'
import { albums } from '../src/data/seed'
import { sceneOf } from '../src/data/scenes'

const own = Object.values(DESCRIPTORS).filter((d) => d.year && !['compilation', 'live', 'remix'].includes(d.type) && d.genres[0] !== 'christmas')
const artistOf = new Map(albums.map((a) => [a.id, a.artistId]))
const areas = ['pop', 'rock', 'dance', 'electronic', 'rnb', 'hiphop', 'soul', 'funk', 'disco', 'jazz', 'folk', 'songwriter', 'alt', 'indie', 'metal', 'latin']
const areaOf = (id: string) => new Set(sceneOf(artistOf.get(id) ?? '')?.genres ?? [])
const decades: number[] = []
for (let y = 1950; y <= 2020; y += 10) decades.push(y)
const inDecade = (y: number) => own.filter((d) => d.year! >= y && d.year! < y + 10)
const best = Math.max(...decades.map((y) => inDecade(y).length))
console.log(`${own.length} albums described (studio, EPs, soundtracks). Albums per decade, and share of our best-covered decade:`)
for (const y of decades) {
  const n = inDecade(y).length
  const bar = '█'.repeat(Math.round((40 * n) / best))
  console.log(`  ${y}s ${String(n).padStart(4)} ${String(Math.round((100 * n) / best)).padStart(3)}% ${bar}`)
}
console.log('\nAlbums per decade and area (the artist\'s scene genres): the thinnest cells are where to add albums first.')
console.log('          ' + decades.map((y) => `${String(y).slice(2)}s`.padStart(5)).join(''))
const cells: { area: string; decade: number; n: number }[] = []
for (const a of areas) {
  const row = decades.map((y) => inDecade(y).filter((d) => areaOf(d.albumId).has(a)).length)
  row.forEach((n, k) => cells.push({ area: a, decade: decades[k], n }))
  console.log(a.padEnd(10) + row.map((n) => String(n).padStart(5)).join(''))
}
// The research's rule of thumb: a 3-year window needs about 30 albums of an area for a share to mean something.
const thin = cells.filter((c) => c.decade >= 1960 && c.n < 30 && cells.some((x) => x.area === c.area && x.n >= 30)).sort((x, y) => x.n - y.n)
console.log('\nThin (under 30 albums in the decade, in an area we otherwise cover): ' + thin.map((c) => `${c.area} ${c.decade}s (${c.n})`).join(', '))

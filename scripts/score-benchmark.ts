// Agreement of the story of a sound with the experts' benchmark (docs/research/benchmark/innovations.csv), scored
// with the rule written in docs/research/findings-method.md before scoring. Reports, never tunes.
import { readFileSync } from 'node:fs'
import story from '../src/data/story.json'
import { DESCRIPTORS } from '../src/lib/descriptors'
import { INSTRUMENTS } from '../src/data/instruments'
import { PRODUCTION } from '../src/data/production'
import { GENRE_LABELS } from '../src/data/scenes'
import { albums } from '../src/data/seed'

const S = story as unknown as { first: Record<string, [string]>; main: Record<string, [string]>; list: { trait: string; pioneers: [string, number][]; popular?: string }[] }
const artistOf = new Map(albums.map((a) => [a.id, a.artistId]))
const lines = readFileSync('docs/research/benchmark/innovations.csv', 'utf8').trim().split('\n').slice(1)
const parse = (l: string) => l.match(/("([^"]|"")*"|[^,]*)(,|$)/g)!.map((c) => c.replace(/,$/, '').replace(/^"|"$/g, ''))
const tally: Record<string, Record<string, number>> = {}
const rows: string[] = []
for (const l of lines) {
  const [sound, id, , role, half] = parse(l)
  const token = sound in GENRE_LABELS ? `g:${sound}` : INSTRUMENTS.has(sound) ? `i:${sound}` : PRODUCTION.has(sound) ? `p:${sound}` : ''
  const used = token && (S.first[token] || S.list.some((r) => r.trait === token))
  let verdict: string
  if (!DESCRIPTORS[id] || !used) verdict = 'not scorable'
  else {
    const ours = role === 'first' ? [S.first[token]?.[0], S.main[token]?.[0]].filter(Boolean) : S.list.filter((r) => r.trait === token).flatMap((r) => [...r.pioneers.map((p) => p[0]), ...(r.popular ? [r.popular] : [])])
    const robust = S.list.filter((r) => r.trait === token).flatMap((r) => r.pioneers.filter((p) => p[1] >= 0.8).map((p) => p[0]))
    verdict = ours.includes(id) ? (role === 'spread' && robust.includes(id) ? 'agrees (robust)' : 'agrees') : ours.some((o) => artistOf.get(o) === artistOf.get(id)) ? 'near miss' : 'disagrees'
    rows.push(`${half}\t${role}\t${sound}\t${id}\t${verdict}\tours: ${ours.slice(0, 3).join(' ') || '-'}`)
  }
  const key = `${half} ${role}`
  tally[key] ??= {}
  tally[key][verdict] = (tally[key][verdict] ?? 0) + 1
}
const showRows = process.argv.includes('--rows')
if (showRows) for (const r of rows.filter((r) => r.startsWith('development'))) console.log(r)
console.log(JSON.stringify(tally, null, 1))

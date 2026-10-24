// Checks every album descriptor CSV in docs/descriptors/ against docs/album-descriptors-guide.md
// before anything is imported into the app. Prints problems per row; exits with 1 if any.
// Run: npx vite-node scripts/validate-descriptors.ts
import { readdirSync, readFileSync } from 'node:fs'
import { albums, artists } from '../src/data/seed'

const HEADER = 'album_id,artist,title,year,type,genres,energy,electronic,mood,theatrical,experimental,polish,tempo,groove,voice,lyrics,language,scene,producers,sounds_like,influenced_by,landmark,confidence,status,notes'.split(',')
const SCALES = ['energy', 'electronic', 'mood', 'theatrical', 'experimental', 'polish', 'tempo', 'groove']
const GENRES = new Set('pop dance electronic synthpop disco rock indie alt metal punk prog hiphop trap rnb soul funk jazz folk songwriter country latin reggaeton afro kpop sertanejo funkbr pagode forro classical soundtrack reggae opera house techno ambient triphop artpop gospel fado caboverde gospelhouse'.split(' '))
const TYPES = new Set(['studio', 'soundtrack', 'compilation', 'live', 'remix', 'ep', 'mixtape'])
const VOICES = new Set(['soft', 'clear', 'powerful', 'raspy', 'rap', 'spoken', 'choral', 'instrumental'])
const LYRICS = new Set('love heartbreak introspection social political storytelling party irony spiritual sensuality identity nostalgia'.split(' '))

// Minimal CSV parser (quoted fields, doubled quotes).
function parse(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let cell = ''
  let q = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (q) {
      if (c === '"' && text[i + 1] === '"') (cell += '"'), i++
      else if (c === '"') q = false
      else cell += c
    } else if (c === '"') q = true
    else if (c === ',') row.push(cell), (cell = '')
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++
      row.push(cell), rows.push(row), (row = []), (cell = '')
    } else cell += c
  }
  if (cell || row.length) row.push(cell), rows.push(row)
  return rows.filter((r) => r.some((x) => x.trim()))
}

const slug = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '')
const albumIds = new Set(albums.map((a) => a.id))
const artistIds = new Set(artists.map((a) => a.id))

let problems = 0
const files = readdirSync('docs/descriptors').filter((f) => f.endsWith('.csv'))
for (const file of files) {
  const rows = parse(readFileSync(`docs/descriptors/${file}`, 'utf8'))
  const [head, ...body] = rows
  const say = (where: string, msg: string) => {
    problems++
    console.log(`${file} ${where}: ${msg}`)
  }
  if (!head || head.join(',') !== HEADER.join(',')) {
    say('header', `expected the ${HEADER.length}-column header of the guide (v2)`)
    continue
  }
  const seen = new Set<string>()
  body.forEach((cells, n) => {
    const where = `row ${n + 2}`
    if (cells.length !== HEADER.length) return say(where, `${cells.length} columns instead of ${HEADER.length}`)
    const r = Object.fromEntries(HEADER.map((h, i) => [h, cells[i].trim()]))
    if (seen.has(r.album_id)) say(where, `duplicate album_id ${r.album_id}`)
    seen.add(r.album_id)
    if (!albumIds.has(r.album_id)) {
      // New album: must follow artistId + '-' + slug(title) (or the year when the title has no letters).
      const artistId = r.album_id.split('-')[0]
      const expected = `${artistId}-${slug(r.title) || r.year}`
      if (!artistIds.has(artistId)) say(where, `new album_id ${r.album_id}: unknown artist id "${artistId}"`)
      else if (r.album_id !== expected) say(where, `new album_id ${r.album_id}: expected ${expected}`)
    }
    if (!/^\d{4}$/.test(r.year)) say(where, `year "${r.year}"`)
    if (!TYPES.has(r.type)) say(where, `type "${r.type}"`)
    const genres = r.genres.split('|').filter(Boolean)
    if (!genres.length || genres.some((g) => !GENRES.has(g))) say(where, `genres "${r.genres}"`)
    for (const s of SCALES) if (r[s] !== '' && !/^[0-5]$/.test(r[s])) say(where, `${s} "${r[s]}" (0–5 or empty)`)
    if (r.voice && !VOICES.has(r.voice)) say(where, `voice "${r.voice}"`)
    const lyr = r.lyrics.split('|').filter(Boolean)
    if (lyr.length > 2 || lyr.some((l) => !LYRICS.has(l))) say(where, `lyrics "${r.lyrics}"`)
    if (r.language && r.language.split('|').some((l) => !/^[a-z]{2}$/.test(l))) say(where, `language "${r.language}"`)
    if (r.scene.split(/\s+/).filter(Boolean).length > 4) say(where, `scene longer than 4 words`)
    for (const k of ['sounds_like', 'influenced_by']) if (r[k].split('|').filter(Boolean).length > 3) say(where, `${k}: max 3`)
    if (!/^[01]$/.test(r.landmark)) say(where, `landmark "${r.landmark}"`)
    if (!['high', 'medium', 'low'].includes(r.confidence)) say(where, `confidence "${r.confidence}"`)
    if (!['draft', 'reviewed'].includes(r.status)) say(where, `status "${r.status}"`)
    if (r.notes.split(/\s+/).filter(Boolean).length > 15) say(where, `notes longer than 15 words`)
  })
  const fresh = body.filter((c) => !albumIds.has(c[0])).map((c) => c[0])
  console.log(`${file}: ${body.length} rows${fresh.length ? `, new albums to add to the catalogue: ${fresh.join(', ')}` : ''}`)
}
console.log(problems ? `\n${problems} problem(s)` : '\nAll descriptor files are valid.')
process.exit(problems ? 1 : 0)

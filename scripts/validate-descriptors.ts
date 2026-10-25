// Checks every album descriptor CSV in docs/descriptors/ against docs/album-descriptors-guide.md
// before anything is imported into the app. Prints problems per row; exits with 1 if any.
// Run: npx vite-node scripts/validate-descriptors.ts
import { INSTRUMENTS } from '../src/data/instruments'
import { PRODUCTION } from '../src/data/production'
import { readdirSync, readFileSync } from 'node:fs'
import { albums, artists } from '../src/data/seed'
import { parseCsv as parse } from '../src/lib/csv'

const HEADER = 'album_id,artist,title,year,type,genres,energy,electronic,mood,theatrical,experimental,polish,tempo,groove,voice,instruments,production,lyrics,language,scene,producers,sounds_like,influenced_by,landmark,confidence,status,notes'.split(',')
const SCALES = ['energy', 'electronic', 'mood', 'theatrical', 'experimental', 'polish', 'tempo', 'groove']
const GENRES = new Set('pop dance electronic synthpop disco rock indie alt metal punk prog hiphop trap rnb soul funk jazz folk songwriter country latin reggaeton afro kpop sertanejo funkbr pagode forro classical soundtrack reggae opera house techno ambient triphop artpop gospel fado caboverde gospelhouse flamenco ska dubstep ukgarage frenchtouch dancehall kuduro newjackswing acidhouse deephouse edm breakbeat hyperpop blues postdisco electrohouse britpop powerpop electropop tropicalhouse trappop italodisco dancepop eurodance gothpop darkwave poppunk newwave grunge experimentalpop industrial eurotrance grime footwork garage neorave gothtrap avantpop bubblegumbass clubpop wonkypop leftfieldpop popfunk electrofunk dreampop nudisco futurepop indiepop electroclash bloghouse pianohouse trance indierock slackerrock indietronica postpunkrevival alternativedance urbanpop bossanova folkpop afrobeat poprap posttrap poprock electrorock punkrock jungle hardcorehiphop latintrap westcoasthiphop nusoul alternativerock adultalternativepoprock electronica downtempo softrock classicalcrossover drumandbass itpop calypsopop hiprock drill contemporaryrnb hiphopsoul bubblegumpop europop chillout downbeat electro rave ambientbreakbeat bigbeat chillwave synthwave hardhouse techhouse acousticpop teenpop altpop countrypop gfunk bluegrass discopop yachtrock quietstorm dub experimental experimentaltechno gothabilly idm minimaltechno neofolk postpunk postrock shoegaze surfrock altcountry electrogaze electropunk gothicamericana indieelectronic krautrock neoambient postgoth slowcore indiedance noiserock spacerock psychedelicrock electrodisco glamrock hinrg technopop eurodisco postindustrial complextro melodicdubstep americana bigband bluesrock countryrock eurohouse pianorock swing traditionalpop vocaljazz deconstructedclub divahouse easylistening glitchpop showtunes standards surfpunk industrialdance electrogrunge techstep boogie aor powerballad hairmetal jazzpop adultcontemporary rockopera folktronica chamberpop baltimoreclub cloudpop doowop musicaltheatre neopsychedelia souljazz popsoul acidjazz northernsoul loversrock christmas smoothsoul synthfunk orchestralpop balearicbeat schlager folkrock baroquepop phillysoul progressivepop dancerock hardrock garagerock protodisco psychedelicpop sunshinepop rockandroll minimalsynth spacedisco progressiveelectronic darkambient modernclassical videogamemusic electronoir retrowave coldwave ebm ambientpop lounge spaceagepop spacepop experimentalelectronic artrock drone musiqueconcrete avantgarde berlinschool postminimalism experimentalrock protopunk boogiewoogie italianpop musicaleggera blueeyedsoul mpb samba tropicalia chanson ballad twist tango latinpop rumba tarantella childrensmusic liscio waltz pasodoble march polka sonjarocho freestyle alternativernb psychedelicsoul contemporarygospel retrosoul dreamtrance dreamhouse progressivehouse melodictrance newage worldmusic italodance acidtechno frenchhouse chicagohouse leftfieldhouse childrenspop novelty neoclassical microsound celtic celticfolk celticnewage celticpop contemporaryceltic contemporaryinstrumental etherealwave ethnicfusion neoclassicalnewage breakbeathardcore hardcoretechno breakbeattechno raggajungle funkybreaks acidbreaks worldbeat clubdance psychedelia darkjazz illbient turntablism spymusic jazzfusion raregroove ukhiphop ukstreetsoul alternativepoprock industrialrock ambienttechno hardcore happyhardcore afrohouse rockabilly alternativeindierock posthardcore contemporarypoprock ragga soulpop hippop southernhiphop newyorkpunk girlgrouppop motown filterhouse skapunk thirdwaveskarevival postgrunge twotone latinhouse salsa christianrock ccm pophouse vaporwave edmpop futurehouse italohouse poptrap rap cuban bolero cabaret neosoul funkrock acidrock urbano cumbia ranchera guaracha pasillo bhangra'.split(' '))
const TYPES = new Set(['studio', 'soundtrack', 'compilation', 'live', 'remix', 'ep', 'mixtape'])
const VOICES = new Set(['soft', 'clear', 'powerful', 'raspy', 'rap', 'spoken', 'choral', 'instrumental'])
const LYRICS = new Set('love heartbreak introspection social political storytelling party irony spiritual sensuality identity nostalgia'.split(' '))

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
    say('header', `expected the ${HEADER.length}-column header of the guide (v4, with instruments and production)`)
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
    if (r.voice.split('|').filter(Boolean).some((v) => !VOICES.has(v))) say(where, `voice "${r.voice}"`)
    const ins = r.instruments.split('|').filter(Boolean)
    if (ins.some((x) => !INSTRUMENTS.has(x))) say(where, `instruments "${r.instruments}" (unknown: ${ins.filter((x) => !INSTRUMENTS.has(x)).join(', ')})`)
    const prod = r.production.split('|').filter(Boolean)
    if (prod.some((x) => !PRODUCTION.has(x))) say(where, `production "${r.production}" (unknown: ${prod.filter((x) => !PRODUCTION.has(x)).join(', ')})`)
    const lyr = r.lyrics.split('|').filter(Boolean)
    if (lyr.some((l) => !LYRICS.has(l))) say(where, `lyrics "${r.lyrics}"`)
    if (r.language && r.language.split('|').some((l) => !/^[a-z]{2}$/.test(l))) say(where, `language "${r.language}"`)
    if (!/^[01]$/.test(r.landmark)) say(where, `landmark "${r.landmark}"`)
    if (!['high', 'medium', 'low'].includes(r.confidence)) say(where, `confidence "${r.confidence}"`)
    if (!['draft', 'reviewed'].includes(r.status)) say(where, `status "${r.status}"`)
    if (r.notes.split(/\s+/).filter(Boolean).length > 15) say(where, `notes longer than 15 words`)
  })
  const fresh = body.filter((c) => !albumIds.has(c[0])).map((c) => c[0])
  console.log(`${file}: ${body.length} rows${fresh.length ? `, new albums to add to the catalogue: ${fresh.join(', ')}` : ''}`)
}
// Connection files (docs/connections/*.csv, format in docs/connections-guide.md).
const CONN_HEADER = 'from_artist,to_artist,type,work,year,source,url,confidence,notes'.split(',')
const CONN_TYPES = new Set(['influenced', 'soundslike', 'sampled', 'covered', 'collaborated', 'produced'])
const names = new Set(artists.map((a) => slug(a.name)))
let connFiles: string[] = []
try {
  connFiles = readdirSync('docs/connections').filter((f) => f.endsWith('.csv'))
} catch {
  connFiles = []
}
for (const file of connFiles) {
  const [head, ...body] = parse(readFileSync(`docs/connections/${file}`, 'utf8'))
  const say = (where: string, msg: string) => (problems++, console.log(`connections/${file} ${where}: ${msg}`))
  if (!head || head.join(',') !== CONN_HEADER.join(',')) {
    say('header', `expected ${CONN_HEADER.join(',')}`)
    continue
  }
  const outside = new Set<string>()
  body.forEach((cells, n) => {
    const where = `row ${n + 2}`
    if (cells.length !== CONN_HEADER.length) return say(where, `${cells.length} columns instead of ${CONN_HEADER.length}`)
    const r = Object.fromEntries(CONN_HEADER.map((h, i) => [h, cells[i].trim()]))
    if (!r.from_artist || !r.to_artist) say(where, 'from_artist and to_artist are required')
    if (!CONN_TYPES.has(r.type)) say(where, `type "${r.type}"`)
    if (r.year && !/^\d{4}$/.test(r.year)) say(where, `year "${r.year}"`)
    if (!r.source || !/^https?:\/\//.test(r.url)) say(where, 'source and url are required')
    if (!['high', 'medium', 'low'].includes(r.confidence)) say(where, `confidence "${r.confidence}"`)
    for (const n of [r.from_artist, r.to_artist]) if (n && !names.has(slug(n))) outside.add(n)
  })
  console.log(`connections/${file}: ${body.length} rows${outside.size ? `; artists without a Fandome room (kept for later, not shown yet): ${[...outside].join(', ')}` : ''}`)
}
console.log(problems ? `\n${problems} problem(s)` : '\nAll descriptor files are valid.')
process.exit(problems ? 1 : 0)

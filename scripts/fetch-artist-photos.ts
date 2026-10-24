// One-off (re-run when artists are added): a freely licensed photo for every artist room,
// from Wikimedia Commons via Wikidata (property P18). Photos are saved in public/artists/ so
// visitors' browsers never contact a third party, and their credits go to
// src/data/artistPhotos.json (shown on the artist page and in the Legal notice).
// Only public-domain and Creative Commons BY / BY-SA images are kept (no NC/ND, no fair use).
// Run: npx vite-node scripts/fetch-artist-photos.ts (then images are re-saved as 480px JPEG, quality 80)
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { artists } from '../src/data/seed'

// Wikidata items, checked by hand (a name search alone confuses e.g. Muse with "museum").
const QID: Record<string, string> = {
  madonna: 'Q1744', kylie: 'Q11998', psb: 'Q485625', depeche: 'Q482964', gaga: 'Q19848', harrystyles: 'Q3626966',
  ariana: 'Q151892', beyonce: 'Q36153', sabrina: 'Q7396400', charlixcx: 'Q5084390', robyn: 'Q229445', adele: 'Q23215',
  bjork: 'Q42455', dualipa: 'Q21914464', feverray: 'Q260570', florence: 'Q217360', franz: 'Q173180', jlo: 'Q40715',
  bieber: 'Q34086', katyperry: 'Q42493', kimpetras: 'Q60964', kraftwerk: 'Q44892', lanadelrey: 'Q37150', capaldi: 'Q42315001',
  lorde: 'Q13476175', lykkeli: 'Q270724', maneskin: 'Q56884561', garrix: 'Q14544318', massiveattack: 'Q357418', miley: 'Q4235',
  mo: 'Q10670047', moby: 'Q14045', placebo: 'Q484839', prince: 'Q7542', radiohead: 'Q44190', royksopp: 'Q193218',
  samsmith: 'Q15123969', selena: 'Q83287', shawn: 'Q17198340', sia: 'Q181484', sigurros: 'Q483828', takethat: 'Q152066',
  tameimpala: 'Q9619', taylorswift: 'Q26876', mariah: 'Q41076', britney: 'Q11975', cher: 'Q12003', tinaturner: 'Q131814',
  tovelo: 'Q15948790', u2: 'Q396', weeknd: 'Q2121062', celine: 'Q5105', whitney: 'Q34389', mj: 'Q2831',
  zaralarsson: 'Q4177928', the1975: 'Q2811247',
  ...JSON.parse(process.env.EXTRA_QIDS ?? '{}'),
}

export interface ArtistPhoto {
  src: string // path under the site base, e.g. artists/madonna.jpg
  author: string
  license: string
  licenseUrl?: string
  sourceUrl: string // the file page on Wikimedia Commons
}

const UA = { 'User-Agent': 'FandomeBot/0.1 (https://giampierofiorelli.github.io/Fandome/; independent fan community)' }
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
async function get(url: string, tries = 6): Promise<Response> {
  for (let i = 0; i < tries; i++) {
    const res = await fetch(url, { headers: UA })
    if (res.ok) return res
    if (res.status === 429 || res.status >= 500) {
      await sleep(8000 * (i + 1))
      continue
    }
    throw new Error(`${res.status} ${url}`)
  }
  throw new Error(`gave up: ${url}`)
}
const json = async <T>(url: string) => (await (await get(url)).json()) as T
const strip = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
const FREE = /^(public domain|pd|cc0|cc by(-sa)? \d(\.\d)?( [a-z]+)?)$/i

// Promo photos marked public domain only under US rules (published without a notice): official
// images, and not clearly free in the EU, so they are not used.
const SKIP_FILES = /Tina_Turner_Breaks_All_the_Rules|Michael_Jackson_1983/

const OUT_JSON = 'src/data/artistPhotos.json'
const photos: Record<string, ArtistPhoto> = existsSync(OUT_JSON) ? JSON.parse(readFileSync(OUT_JSON, 'utf8')) : {}
mkdirSync('public/artists', { recursive: true })

for (const a of artists) {
  const qid = QID[a.id]
  if (!qid) {
    console.log(`${a.id}: no Wikidata item, skipped`)
    continue
  }
  if (photos[a.id] && existsSync(`public/${photos[a.id].src}`) && !process.env.REFRESH) continue
  try {
    const claims = await json<{ claims?: { P18?: { mainsnak: { datavalue?: { value: string } } }[] } }>(
      `https://www.wikidata.org/w/api.php?action=wbgetclaims&entity=${qid}&property=P18&format=json`,
    )
    const file = claims.claims?.P18?.[0]?.mainsnak.datavalue?.value
    if (!file || SKIP_FILES.test(file.replace(/ /g, '_'))) {
      console.log(`${a.id}: no usable photo on Wikidata`)
      continue
    }
    await sleep(1000)
    type Info = { thumburl: string; descriptionurl: string; extmetadata: Record<string, { value: string } | undefined> }
    const meta = await json<{ query: { pages: Record<string, { imageinfo?: Info[] }> } }>(
      `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(`File:${file}`)}&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=480&format=json`,
    )
    const info = Object.values(meta.query.pages)[0]?.imageinfo?.[0]
    const license = strip(info?.extmetadata.LicenseShortName?.value ?? '')
    if (!info || !FREE.test(license)) {
      console.log(`${a.id}: license "${license}" not accepted, skipped`)
      continue
    }
    await sleep(1000)
    const img = Buffer.from(await (await get(info.thumburl)).arrayBuffer())
    const ext = /\.png$/i.test(info.thumburl) ? 'png' : 'jpg'
    const src = `artists/${a.id}.${ext}`
    writeFileSync(`public/${src}`, img)
    photos[a.id] = {
      src,
      author: strip(info.extmetadata.Artist?.value ?? 'Unknown author').slice(0, 120),
      license,
      licenseUrl: info.extmetadata.LicenseUrl?.value,
      sourceUrl: info.descriptionurl,
    }
    console.log(`${a.id}: ${license} · ${photos[a.id].author} (${Math.round(img.length / 1024)} KB)`)
    writeFileSync(OUT_JSON, JSON.stringify(photos, null, 1) + '\n')
    await sleep(1500)
  } catch (e) {
    console.log(`${a.id}: failed (${(e as Error).message})`)
  }
}
writeFileSync(OUT_JSON, JSON.stringify(photos, null, 1) + '\n')
console.log(`done: ${Object.keys(photos).length} of ${artists.length} artists have a photo`)

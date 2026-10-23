// Nightly job (GitHub Actions): upcoming concerts for every artist on Fandome,
// from the Ticketmaster Discovery API, written to public/live/concerts.json.
// Run: TICKETMASTER_API_KEY=... npx vite-node scripts/fetch-concerts.ts
// Without a key it does nothing, and the site keeps its demo dates.
import { mkdirSync, writeFileSync } from 'node:fs'
import { artists } from '../src/data/seed'
import type { Concert } from '../src/data/types'
import { dedupe, pickAttraction, toConcert, type TmAttraction, type TmEvent } from '../src/lib/ticketmaster'

const KEY = process.env.TICKETMASTER_API_KEY
const SITE = process.env.SITE_URL ?? 'https://giampierofiorelli.github.io/Fandome/'
const OUT = 'public/live/concerts.json'
const API = 'https://app.ticketmaster.com/discovery/v2'
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function get<T>(path: string, params: Record<string, string>): Promise<T> {
  const q = new URLSearchParams({ ...params, apikey: KEY! })
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(`${API}/${path}?${q}`)
    if (res.status === 429) {
      await sleep(2000 * (attempt + 1))
      continue
    }
    if (!res.ok) throw new Error(`${path}: HTTP ${res.status}`)
    await sleep(600) // free tier: stay well under 2 requests/second
    return (await res.json()) as T
  }
  throw new Error(`${path}: rate limited`)
}

async function main() {
  if (!KEY) {
    console.log('No TICKETMASTER_API_KEY: skipping live concerts.')
    return
  }
  // Keep the first time we saw each date, so "New date announced" stays accurate.
  const firstSeen: Record<string, number> = {}
  let prev: Concert[] = []
  try {
    prev = ((await (await fetch(`${SITE}live/concerts.json`)).json()) as { concerts: Concert[] }).concerts ?? []
    for (const c of prev) if (c.announcedAt) firstSeen[c.id] = c.announcedAt
  } catch {
    console.log('No previous file: every date counts as new.')
  }

  const now = Date.now()
  const all: Concert[] = []
  let failed = 0
  for (const a of artists) {
    try {
      const found = await get<{ _embedded?: { attractions?: TmAttraction[] } }>('attractions.json', { keyword: a.name, classificationName: 'music', size: '20' })
      const attraction = pickAttraction(found._embedded?.attractions ?? [], a.name)
      if (!attraction) {
        console.log(`${a.name}: not found on Ticketmaster`)
        continue
      }
      const ev = await get<{ _embedded?: { events?: TmEvent[] } }>('events.json', { attractionId: attraction.id, size: '200', sort: 'date,asc' })
      const list = (ev._embedded?.events ?? []).map((e) => toConcert(e, a.id, a.name, firstSeen, now)).filter((c): c is Concert => Boolean(c))
      console.log(`${a.name}: ${list.length} dates`)
      all.push(...list)
    } catch (e) {
      // Keep yesterday's dates for this artist rather than losing them.
      console.log(`${a.name}: ${(e as Error).message} (keeping previous dates)`)
      all.push(...prev.filter((c) => c.artistId === a.id))
      failed++
    }
  }
  if (failed === artists.length && !prev.length) {
    console.log('Every request failed and there is nothing to keep: not writing a file.')
    return
  }
  mkdirSync('public/live', { recursive: true })
  writeFileSync(OUT, JSON.stringify({ updatedAt: now, source: 'Ticketmaster', concerts: dedupe(all) }))
  console.log(`Wrote ${OUT}`)
}

main().catch((e) => {
  // Never break the deploy over concert data.
  console.error(e)
})

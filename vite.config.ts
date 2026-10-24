import { existsSync, readFileSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { artists, concerts } from './src/data/seed'
import { calendarFileName, concertIcs } from './src/lib/calendar'
import type { Concert } from './src/data/types'

// One .ics file per upcoming show (demo + nightly Ticketmaster dates), served at /cal/<id>.ics.
// On iPhone a real .ics link opens the "Add to Calendar" sheet.
function showCalendars(): Plugin {
  return {
    name: 'fandome-show-calendars',
    apply: 'build',
    generateBundle() {
      let live: Concert[] = []
      const file = 'public/live/concerts.json'
      if (existsSync(file)) {
        try {
          live = (JSON.parse(readFileSync(file, 'utf8')) as { concerts?: Concert[] }).concerts ?? []
        } catch {
          // ignore a broken live file
        }
      }
      const today = new Date().toISOString().slice(0, 10)
      for (const c of [...concerts, ...live]) {
        if (c.date.slice(0, 10) < today) continue
        const name = artists.find((a) => a.id === c.artistId)?.name ?? 'Concert'
        this.emitFile({ type: 'asset', fileName: `cal/${calendarFileName(c)}`, source: concertIcs(c, name) })
      }
    },
  }
}

// Served from https://<user>.github.io/Fandome/ on GitHub Pages
export default defineConfig({
  base: '/Fandome/',
  plugins: [react(), showCalendars()],
})

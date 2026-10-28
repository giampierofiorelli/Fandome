# CLAUDE_IMPORT — Simple Minds / Phase 01

**Artist ID proposed:** `simpleminds`. Both `src/data/catalog.ts` and `src/data/seed.ts` on the public `descriptors` branch were checked on 28 October 2026, and neither contains Simple Minds or the ID `simpleminds`. `docs/descriptors/simpleminds.csv` is absent (404), so **no pre-existing descriptor rows skipped**. Check for private-branch changes before import, and reuse any existing ID found there rather than creating a duplicate.

## Phase 01 — import only four new studio rows

1. `simpleminds-lifeinaday` — *Life in a Day* (1979), studio
2. `simpleminds-realtorealcacophony` — *Real to Real Cacophony* (1979), studio
3. `simpleminds-empiresanddance` — *Empires and Dance* (1980), studio
4. `simpleminds-sonsandfascination` — *Sons and Fascination* (1981), studio

All four are missing from the public Fandome catalog. **Add the artist and these 4 albums before validating**. The `catalog-audit.csv` also lists remaining studio candidates for later phases. All CSV rows are `draft`, with the exact 27-column header and just these four albums.

**Why separate *Sons and Fascination* from *Sister Feelings Call*?** Band's official page explicitly calls them two separate albums drawn from the same sessions, also issued as double LP. Original 1981 V2207 *Sons* contains eight songs; *Sister* seven. The official combined page later has an inconsistent second 'original' track list and there are country-specific variants. Our row represents **only the original 8-track Sons LP**; `Sister Feelings Call` remains for phase 02. Sources: https://www.simpleminds.com/1981/09/01/sons-fascination-sister-feelings-call/ and https://www.musik-sammler.de/release/simple-minds-sons-and-fascination-lp-584439/ and https://www.musik-sammler.de/release/simple-minds-sons-and-fascination-sister-feelings-call-cd-249894/ .

## New tokens / catalogue additions

- **New genre tokens:** none; all genres used exist in current `src/data/scenes.ts`.
- **New instrument tokens:** none; all already exist in `src/data/instruments.ts`.
- **New production tokens:** none; `stringarrangements` and `roomambience` exist in `src/data/production.ts`.
- **Co-billed albums:** none. The split 1981 titles are both credited simply to Simple Minds.
- **Artist:** add `simpleminds` and scene/identity data if absent.
- **Albums to add now:** the four phase-01 titles above. Audit CSV lists later studio titles and years; avoid pre-emptively importing dubious future/re-recording entries without review.

## ARTIST INFLUENCES — documented band-wide, phase 01 only

These are bands/artists named by band members or specifically identified in the band's own historical account, not similarities inferred by reviewers. **Do not automatically copy into the album rows.**

- **Roxy Music** — Kerr explicitly discusses the Roxy/Bowie musical influence and says those inspirations were already present in their music: https://www.loudersound.com/features/simple-minds-jim-kerr-interview-2004 ; early group's own history describes debut leaning toward Roxy: https://www.simpleminds.com/history-simple-minds/
- **David Bowie** — Kerr describes the Bowie/Roxy axis and specific *Low* / *Heroes*-era context in direct interview: https://www.loudersound.com/features/simple-minds-jim-kerr-interview-2004
- **Kraftwerk** — direct Kerr acknowledgment in the same 2004 interview; specifically identified in official biography of *Empires and Dance*: https://www.simpleminds.com/history-simple-minds/
- **Brian Eno** — explicitly in Kerr's first-person 2004 account of early sound: https://www.loudersound.com/features/simple-minds-jim-kerr-interview-2004
- **Donna Summer** — Kerr says the synthesized disco rhythms were among their existing influences: https://www.loudersound.com/features/simple-minds-jim-kerr-interview-2004 ; member eyewitnesses report listening to her on tour in the 2023 *Guardian* interview: https://www.theguardian.com/music/2023/jun/27/a-nuclear-reactor-of-music-the-story-of-simple-minds-classic-album-empires-and-dance
- **Giorgio Moroder** — Kerr references his synthesizer productions within the band's musical sources, but it is more accurate to identify his work via *I Feel Love*: https://www.scotsman.com/whats-on/arts-and-entertainment/interview-jim-kerr-simple-minds-1643402
- **Neu!** — band official history says industrial rhythmic inspiration for *Empires and Dance* came from Neu!: https://www.simpleminds.com/history-simple-minds/
- **Cabaret Voltaire** — named with Neu! and Kraftwerk in band's official history as inspiration: https://www.simpleminds.com/history-simple-minds/
- **Magazine** — Kerr explicitly recalls admiring their adventurous musicianship; source: https://www.loudersound.com/bands-artists/how-prog-were-simple-minds
- **XTC** — Kerr mentions their musicianship and imagination as a formative discovery, same source: https://www.loudersound.com/bands-artists/how-prog-were-simple-minds
- **Chic / Grace Jones** — on the band's formative European tour Kerr and MacNeil describe hearing these in clubs in the run-up to *Empires*: https://www.theguardian.com/music/2023/jun/27/a-nuclear-reactor-of-music-the-story-of-simple-minds-classic-album-empires-and-dance
- **Genesis** — Kerr acknowledges their early enthusiasm in reflection, even though they tried to conceal progressive-rock roots: https://www.loudersound.com/bands-artists/how-prog-were-simple-minds

**Restriction:** only *Real to Real* and *Empires* rows carry limited documented `influenced_by` values, grounded in band testimony about those periods/albums. Debut and Sons leave album-specific influences blank when the source is too broad. Direct personal influences are not grounds to import a sample, cover, a collaborator, or every shared band name as an album influence.

## Import decisions and caveats

- The correct title is **Real to Real Cacophony**. Later Virgin reissues incorrectly printed *Reel to Real Cacophony*. Keep original spelling in title and ID: https://www.simpleminds.com/1979/11/01/real-to-real-cacophony/
- **John Leckie** produced the first three; some original jackets list him only as recording/mixing technician, but MusicBrainz credits him as producer on track-level *Real to Real* entries and Guardian calls him producer of *Empires*. Do not list engineers Hugh Jones, Alan Jakoby or string arranger Haydn Bendall as producers.
- **Steve Hillage** alone produced *Sons and Fascination* and the connected *Sister Feelings Call* sessions.
- **Room reverb** on *Real to Real* is directly attested by Leckie; `roomambience`, not a synthetic reverb brand. No specific synth or drum-machine model is securely attested for these early four titles.
- *Life in a Day* uses real strings in *Pleasantly Disturbed* (MusicBrainz performance/arrangement credits); no blanket claim of orchestra throughout the LP.
- The scores 0–5 are editor judgments with source context; they are not sourced measurements. See evidence-notes for each.
- No album yet in `docs/descriptors/simpleminds.csv` on accessible public branch; reconcile any subsequent changes. Ignore live, hits and compilation releases and **2027** entries not out on 28 October 2026.
- *Our Secrets Are the Same* was recorded 1999 but issued commercially later; `catalog-audit.csv` flags date review. Later acoustic re-recordings and cover albums are studio projects but need inclusion/priority review, not release-year guessing.

## Next phase — Phase 02

1. *Sister Feelings Call* (1981) — independent original 7-track LP, not a duplicate *Sons* row
2. *New Gold Dream (81-82-83-84)* (1982)
3. *Sparkle in the Rain* (1984)
4. *Once Upon a Time* (1985)

## Files in this ZIP

- `CLAUDE_IMPORT.md`
- `simpleminds_phase01_rows_ONLY.csv`
- `simpleminds_phase01_sources.csv`
- `simpleminds_phase01_genre_evidence.csv`
- `simpleminds_phase01_evidence-notes.md`
- `simpleminds_phase01_catalog-audit.csv`

No previous-phase rows, no scripts and no other artists.

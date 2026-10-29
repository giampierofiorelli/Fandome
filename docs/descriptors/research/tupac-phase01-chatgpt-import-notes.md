# 2Pac / Tupac Shakur — Fandome Phase 01 / Claude import

Research date: **29 October 2026**. One ZIP; six UTF-8 files. **4 fresh studio album descriptor rows**, 27 columns each; all `status=draft`. GitHub `descriptors` branch read only.

## Identity and audit

- `src/data/catalog.ts` has `['tupac', 'Tupac Shakur', …]`. Use **`tupac`**; do not substitute `2pac`, `shakur`, or `makaveli` for the artist ID. `seed.ts` contains no Tupac record.
- **Previously described album rows skipped: none.** `docs/descriptors/tupac.csv` does not exist at research time.
- **Existing catalog albums:** `tupac-2pacalypsenow` (1991), `tupac-meagainsttheworld` (1995), `tupac-alleyzonme` (1996).
- **NEW REQUIRED catalog entry before validation:** `['Strictly 4 My N.I.G.G.A.Z.', 1993]` inside Tupac's `catalog.ts` artist array. New slug-derived ID: **`tupac-strictly4myniggaz`**, type studio. Otherwise validator reports unknown album.
- `coBilled.ts`: none of these four albums is co-billed to a second primary artist; appearances by Digital Underground, Snoop Dogg or other guests are **features**, not a co-billed album.

## Album rows in this ZIP

1. `tupac-2pacalypsenow` — *2Pacalypse Now*, 1991, original solo studio album; exists in catalogue.
2. `tupac-strictly4myniggaz` — *Strictly 4 My N.I.G.G.A.Z.*, 1993, original solo studio album; ADD to catalogue.
3. `tupac-meagainsttheworld` — *Me Against the World*, 1995, original solo studio album; exists in catalogue.
4. `tupac-alleyzonme` — *All Eyez on Me*, 1996, original double studio album; exists in catalogue.

## ARTIST INFLUENCES — direct source, not assumed from samples

- **Don McLean**: Tupac told Chuck Philips in *Los Angeles Times* interview of **25 October 1995** that *Vincent* emotionally moved him, and he wanted his own songs to have that effect, singling out *Dear Mama*. Primary firsthand interview: https://www.latimes.com/local/la-me-tupac-qa-story.html . This supports the limited `influenced_by` on *Me Against the World* as `Don McLean (American Pie)` (1971 parent LP of *Vincent*). It does **not** establish similar instrumentation or composition.
- **Marvin Gaye**, close artistic connection but not unequivocal album influence: in Kevin Powell's **Vibe April 1995** interview Tupac says he feels close to Marvin Gaye and the reporter compares their contradictions. Source https://unvis.it/www.vibe.com/features/editorial/tupac-april-1995-cover-story-ready-to-live-686969 . This proves affinity, **not** a sufficiently specific claim that one album was musically shaped by Gaye; do not add to album `influenced_by` without another source.
- **Tracy Chapman**: a transcript circulating as an MTV exchange calls Chapman an idol and says a draft *Ghetto Gospel* arrangement referenced her *Crossroads*. At https://weallbe.blogspot.com/2006/09/check-out-2pacs-lost-1992-interviewthe.html . The original interview date/MTV provenance and version history are **not independently corroborated here**, so leave as a **research lead only**, not an approved album-level influence. *Ghetto Gospel* is not one of the four album cuts in this phase.
- **Chuck D and Ice Cube**: a 1991 interview expresses strong respect (https://www.throwitoutpodcast.com/2pacs-1991-interview-kindness-and-rage/) but does not say either shaped a specific musical album; do not convert respect to influence. Their sonic closeness may instead be noted in `sounds_like` when critic-supported.

## Vocabulary and validator

Checked `docs/album-descriptors-guide.md`, `src/data/scenes.ts`, `src/data/instruments.ts`, `src/data/production.ts` and validator in the `descriptors` branch.
- **New genre tokens: none required.** `hiphop`, `westcoasthiphop`, `politicalrap`, `politicalhiphop`, `hardcorehiphop`, `gangstarap`, `conscioushiphop`, `gfunk`, `poprap`, `rnb` are already available.
- **New instruments / production tokens: none.** `keyboards`, `guitar`, `drummachine`, `percussion`; `sampling`, `drumprogramming`, `talkbox` already exist. `drummachine` was deliberately omitted from 1991 because model/instrument credits were not verified, and `onetake` was omitted from 1996 due to limited session-specific evidence.
- **Genre evidence strength:** Specific album catalogues actually name `conscioushiphop` for 1991, 1993 and 1995 (`mlinusson_conscious`, `aoty_conscious`); `poprap` for 1993 appears in lower-confidence retailer metadata while MusicBrainz tags the 1996 album. `rnb` on the 1996 record is a track-level R&B vocal texture rather than an album-wide taxonomy. Genre scope and confidence are preserved in the evidence file.
- **Production credits:** the `producers` column includes producer/co-producer credited parties; not executive-only Atron Gregory / Suge Knight or purely engineering contributors. Some individual-versus-group aliases are intentionally both present when album credits list both.

## Works outside Phase 01

- **NEXT PHASE 02**: *The Don Killuminati: The 7 Day Theory* (1996), originally issued under **Makaveli**, recorded by Tupac before his 13 Sep 1996 death, released 5 Nov 1996. Existing catalogue `tupac-thedonkilluminatithe7daytheory`; do not create a separate Makaveli artist unless Fandome explicitly requests.
- **Other 2Pac posthumous assembled albums:** *R U Still Down? (Remember Me)* (1997), *Still I Rise* with Outlawz (1999), *Until the End of Time* (2001), *Better Dayz* (2002), *Loyal to the Game* (2004), *Pac's Life* (2006). All frequently listed as Tupac studio albums, but have archival vocals with later production/reassembly; run explicit **eligibility review** under Fandome rule excluding live, compilations and low-original-content archival albums. Do not silently import all as equivalent to completed lifetime LPs. See `catalog-audit.csv`.
- **Separate group billing:** *Thug Life: Volume 1* (1994) is a Thug Life group album, not an uncredited fifth Tupac solo LP. The primary artist catalog should not duplicate it.
- Soundtracks, greatest-hits compilations, anniversary editions, remixes and live albums excluded here.

## ZIP contents

- `CLAUDE_IMPORT.md` (this file)
- `tupac_phase01_rows_ONLY.csv`
- `tupac_phase01_sources.csv`
- `tupac_phase01_genre_evidence.csv`
- `tupac_phase01_evidence-notes.md`
- `tupac_phase01_catalog-audit.csv`

Import the missing 1993 catalogue album, validate six-file ZIP's CSVs against repository dictionaries, run `npx vite-node scripts/validate-descriptors.ts` and tests. GitHub was **not** modified.

## Claude import note (Oct 2026)

- All Eyez on Me sounds_like emptied: Dr. Dre (The Chronic) is a producer's own album, Tha Dogg Pound is producer Daz Dillinger's group, Snoop Dogg guests on the album.
- 2Pac's own production credit dropped. Strictly 4 My N.I.G.G.A.Z. (1993) added to the catalogue. Artist influence: Don McLean (his own words).
- Album id corrected to tupac-alleyezonme (the delivered row had tupac-alleyzonme).

## Claude enrichment (reception pass, Oct 2026)

- Reception rows: `docs/descriptors/reception/tupac.csv`.
- sounds_like emptied on all four: Public Enemy is sampled on 2Pacalypse Now and Ice Cube appears only as a lineage of lyrics (uDiscover); Ice Cube guests on Strictly (Last Wordz) and Greg Tate's "worthy of Fear of a Black Planet" is about quality, not sound; MC Ren, Scarface (The Diary) and Nas (Illmatic) not found as critics' comparisons.

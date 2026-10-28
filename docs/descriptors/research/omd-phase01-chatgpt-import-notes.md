# CLAUDE IMPORT — Orchestral Manoeuvres in the Dark (OMD), phase 01

Research: 28 October 2026. **Incremental only**. One ZIP; six documents. Repo `giampierofiorelli/Fandome`, branch `descriptors`, read-only research. Import into your existing Fandome repository, not as a new standalone catalogue. CSV encoded UTF-8 with BOM so iOS/Excel displays symbols correctly.

## Existing identity

- Artist ID: `omd` (already defined in `src/data/catalog.ts`).
- Full credited artist name: **Orchestral Manoeuvres in the Dark**.
- `seed.ts` contains no separate OMD artist or album IDs.
- **Previously described and SKIPPED:** `omd-architecturemorality` — *Architecture & Morality* (1981), already in `docs/descriptors/omd.csv` and documented in the October 2026 landmark research. **Do not overwrite, re-add or duplicate.**

## This phase — only these four new descriptor rows

| album_id | Album | Year | Type | In catalogue? |
|---|---|---|---|---|
| `omd-orchestralmanoeuvresinthedark` | *Orchestral Manoeuvres in the Dark* | 1980 | studio | yes |
| `omd-organisation` | *Organisation* | 1980 | studio | yes |
| `omd-dazzleships` | *Dazzle Ships* | 1983 | studio | yes |
| `omd-junkculture` | *Junk Culture* | 1984 | studio | yes |

## Discography and catalogue audit

The official OMD discography lists 14 studio albums released by 28 October 2026, from *Orchestral Manoeuvres in the Dark* (1980) to *Bauhaus Staircase* (2023): https://omd.uk.com/pages/horizon-omd-discography.

`catalog.ts` currently lists only six of them: *Orchestral Manoeuvres in the Dark*, *Organisation*, *Architecture & Morality*, *Dazzle Ships*, *Junk Culture*, and *English Electric*. The missing **studio albums to add** (chronological; all type `studio`) are:

- *Crush* (1985) — new album ID `omd-crush`
- *The Pacific Age* (1986) — new album ID `omd-thepacificage`
- *Sugar Tax* (1991) — new album ID `omd-sugartax`
- *Liberator* (1993) — new album ID `omd-liberator`
- *Universal* (1996) — new album ID `omd-universal`
- *History of Modern* (2010) — new album ID `omd-historyofmodern`
- *The Punishment of Luxury* (2017) — new album ID `omd-thepunishmentofluxury`
- *Bauhaus Staircase* (2023) — new album ID `omd-bauhausstaircase`

See `omd_phase01_catalog-audit.csv` for all original release titles, years, status, and import actions. No new catalogue rows needed for the four albums in this phase. None is a collaboration billed to multiple artists; `src/data/coBilled.ts` needs no entry.

## New vocabulary tokens

- **Genre:** `soca` — explicitly named by Andy McCluskey as a Caribbean style encountered during the Montserrat *Junk Culture* sessions (https://pennyblackmusic.co.uk/Home/Details?id=22842; https://www.muzines.benhall.co.uk/articles/junk-culture/7890). Add to `scenes.ts` and update the `genreFamilies.ts` parents appropriately (likely Afro-Caribbean umbrella, validated against existing families).
- **Instruments:** none required beyond existing tokens.
- **Production:** none required beyond existing tokens.

Keep independent stylistic labels rather than silently substituting near-synonyms: `synthpop` and `electropop` coexist only when supported. Track-specific Caribbean styles on *Junk Culture* appear at the end of its ordered genre list; they do not identify every track.

## ARTIST INFLUENCES (artist-level; documented by Andy McCluskey)

The following are **general influences on OMD's music**, not automatic evidence for each album's `influenced_by` value:

- **Kraftwerk** — McCluskey explicitly recalls the 1975 concert and connects the melody/approach of early 'Electricity' to their *Radio-Activity* era; interview: https://www.buzzmag.co.uk/orchestral-manoeuvres-in-the-dark-interview/; also https://www.theartsdesk.com/new-music/theartsdesk-qa-musician-andy-mccluskey-orchestral-manoeuvres-dark.
- **Neu!** — McCluskey named them as essential to the emotional/motorik side of OMD; interview: https://www.buzzmag.co.uk/orchestral-manoeuvres-in-the-dark-interview/; also https://news.err.ee/1610103250/omd-s-andy-mcclusky-even-our-best-friends-hated-our-first-songs.
- **La Düsseldorf** — cited as an influence in the recent early-era retrospective interview: https://news.err.ee/1610103250/omd-s-andy-mcclusky-even-our-best-friends-hated-our-first-songs.
- **Brian Eno** — specifically named by McCluskey among the music he listened to when the band was forming: https://www.buzzmag.co.uk/orchestral-manoeuvres-in-the-dark-interview/; https://news.err.ee/1610103250/omd-s-andy-mcclusky-even-our-best-friends-hated-our-first-songs.
- **Roxy Music** — named in the same first-person interview: https://www.buzzmag.co.uk/orchestral-manoeuvres-in-the-dark-interview/; https://news.err.ee/1610103250/omd-s-andy-mcclusky-even-our-best-friends-hated-our-first-songs.
- **David Bowie** — named in the same first-person interview: https://www.buzzmag.co.uk/orchestral-manoeuvres-in-the-dark-interview/; https://news.err.ee/1610103250/omd-s-andy-mcclusky-even-our-best-friends-hated-our-first-songs.
- **The Velvet Underground** — named in the longer retrospective first-person interview: https://news.err.ee/1610103250/omd-s-andy-mcclusky-even-our-best-friends-hated-our-first-songs.
- **Joy Division** — specifically named by McCluskey as having influenced **Organisation**, hence in that album row: https://www.scotsman.com/whats-on/arts-and-entertainment/orchestral-leap-in-the-dark-2480880.

**Album influence standard:** only direct artist/producer statements tied to the album or a track on the album enter `influenced_by`. Sonic comparisons (even critic writing of Kraftwerk-style tracks) enter `sounds_like`. Samples, remixes, song covers, and co-producers are not musical influences by themselves. No guessed hardware model names.

## Critical version and credit caveats

1. 1980 debut: **Chester Valentino = Paul Collister**, co-producer. **Martin Hannett** produced some early single versions, not the 1980 LP as a whole; **Mike Howlett** subsequently re-recorded/mixed a hit version of 'Messages'. Keep the original album distinct from later singles (https://www.udiscovermusic.com/stories/omd-orchestral-manoeuvres-in-the-dark-debut-album/; https://progrography.com/orchestral-manoeuvres-in-the-dark/review-orchestral-manoeuvres-in-the-dark-1980/amp/).
2. *Organisation*: *Enola Gay* was written around debut-era sessions but released on the second album. The 2003 reissue's bonus tracks and accompanying live EP are not part of the original LP (https://www.omd-messages.co.uk/organisation-interview-andy-mccluskey/).
3. *Dazzle Ships*: the 1983 sampler is **E-mu Emulator**; **Fairlight CMI** belongs to *Junk Culture* era. 1983 audio collages include radio material. https://www.muzines.benhall.co.uk/articles/junk-culture/7890; https://www.electronicsound.co.uk/features/long-reads/orchestral-manoeuvres-in-the-dark-razzle-dazzle/.
4. *Junk Culture*: credits list Brian Tench, OMD and Stephen Hague as producers, while **Tony Visconti worked on horn arrangements**, not as an album producer. Fairlight/Emulator/LinnDrum are backed by an unusually useful contemporary technical interview (https://www.muzines.benhall.co.uk/articles/junk-culture/7890; https://www.onamrecords.com/artists/orchestral-manoeuvres-in-the-dark/discography/united-states/a-m-records/sp-5027/junk-culture). The steel-drum sound on 'Locomotion' is documented but may have been programmed rather than performed live, so avoid attributing a steel-drum player without evidence.
5. *Dazzle Ships* was unpopular on release but later received major critical reassessment. It remains `landmark=1` as a defining work, even if not a chart peak.
6. The official band's page and discography databases have minor date disagreements for certain 1983/1986 releases. CSV years and titles are stable; catalogue audit follows the band's own year sequence.

## Files in this ZIP

- `omd_phase01_rows_ONLY.csv` — **4 new rows, exactly 27 columns**. Do not append landmark again.
- `omd_phase01_sources.csv` — per-album documented sources and claims.
- `omd_phase01_genre_evidence.csv` — source/album/genre evidence and track/album scope.
- `omd_phase01_evidence-notes.md` — score/instrument/production rationale and disputed details.
- `omd_phase01_catalog-audit.csv` — all 14 studio albums, what is listed, what is missing.
- `CLAUDE_IMPORT.md` — this import note.

## Next phase (02)

*Crush* (1985), *The Pacific Age* (1986), *Sugar Tax* (1991), and *Liberator* (1993). All four require new entries in `catalog.ts`. *Architecture & Morality* remains permanently excluded from incremental phases because it has already been described.

## Validation requested of Claude

- Confirm `omd_phase01_rows_ONLY.csv` has 27 columns, 4 distinct IDs, no empty genres or instrumentation, and every `notes` value is ≤15 words.
- Add `soca` as a genre token and its family mapping before running the repository validator.
- Merge rows with existing `docs/descriptors/omd.csv` **without replacing** `omd-architecturemorality`.
- Run `scripts/validate-descriptors.ts` and project tests after import.


## Claude import note

- 4 rows appended; Architecture & Morality (landmark) kept as is. Catalogue completed with the 8 missing studio albums (Crush to Bauhaus Staircase).
- New genre soca (parents calypso, dance).
- Artist influences from Andy McCluskey's interviews. Kraftwerk and Joy Division kept as both influence and likeness where sourced.
- Reception researched by Claude.

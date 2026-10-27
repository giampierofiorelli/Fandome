# CLAUDE IMPORT — Talking Heads / Fandome / Phase 02

Research cutoff: **27 October 2026**. Read-only inspection of GitHub branch `descriptors` and the Phase 01 ZIP. Artist ID `talkingheads`. This ZIP contains **exactly four new descriptor rows**, no phase 01 rows and no rows for another artist. `docs/descriptors/talkingheads.csv` was absent on inspected remote branch; Claude should check what was imported from Phase 01 before merging this package.

## New rows in this phase (chronological)

| album_id | album | year | type | catalog status on inspected branch |
|---|---|---|---|---|
| `talkingheads-speakingintongues` | Speaking in Tongues | 1983 | studio | present |
| `talkingheads-littlecreatures` | Little Creatures | 1985 | studio | present |
| `talkingheads-truestories` | True Stories | 1986 | studio | **ADD** |
| `talkingheads-naked` | Naked | 1988 | studio | **ADD** |

## Catalogue changes

- **ADD** `['True Stories', 1986]` to Talking Heads in `src/data/catalog.ts`, id `talkingheads-truestories`.
- **ADD** `['Naked', 1988]`, id `talkingheads-naked`.
- Phase 01 already instructed Claude to add **More Songs About Buildings and Food** (1978). Confirm it was imported. Do not import Phase 01 again from this ZIP.
- The five album titles initially present in the catalogue were *Talking Heads: 77*, *Fear of Music*, *Remain in Light*, *Speaking in Tongues*, and *Little Creatures*. After additions, the full catalogue must include all **eight** studio albums.
- **No co-billed album** in this phase. Guest players/lead singers in the film are not album co-billing.

## Tokens for Claude to add **before validator/tests**

### New genre tokens

- `texmex`: Apple Music describes Tex-Mex among the regional musical idioms on *True Stories*; `some tracks`.
- `neworleansrnb`: Apple Music explicitly names New Orleans R&B for *True Stories*; `some tracks`. Preserve this exact style rather than mapping to plain `rnb` (both can coexist).
- `latinfunk`: discographic description of *Naked* names Latin funk. `some tracks`, lower-strength secondary source; review before promoting to high confidence.

`newwave`, `afrobeat`, `artrock`, `dancerock`, `artpop`, `worldbeat`, `country`, `gospel`, `soul`, `rnb`, `poprock` etc. are already allowed. **Previously requested in Phase 01:** `artpunk`, `americanpunk`, `punknewwave`, `collegerock`. If not yet merged, Claude must add those too; Phase 02's rows use `punknewwave`, `collegerock`, `americanpunk`.

### New instrument tokens

- `washboard`: Andrew Cader plays washboard on *Little Creatures*' “Road to Nowhere” (MusicBrainz + engineer account).
- `fiddle`: Tommy Canfield's fiddle on *True Stories*, track “People Like Us” (original liner credit).
- `kora`: Mory Kanté's kora on *Naked* (1988 sleeve and MusicBrainz track credits).

The source's `cor anglais` on *Naked* is already represented by `englishhorn` and is **not** a new token. `steelguitar` matches original pedal steel credit.

### New production tokens

**None.** All production tokens used already occur in `production.ts`: `overdubbing`, `analogtape`, `onetake`, `layeredvocals`, `noisegating`, `hornarrangements`. `DX7` in the 1985 *Road to Nowhere* guide arrangement was replaced by real accordion; do not add the specific machine for the released track.

## Cautions and evidence

- **True Stories (1986)** is Talking Heads' original nine-song **studio album**, NOT the film's various-artists soundtrack and NOT the 2018 *True Stories: A Film by David Byrne, The Complete Soundtrack*. It remains `type=studio` despite its film connection. Original album copies with one bonus remix should be deduplicated to the 9 original tracks when considering its sound.
- **Speaking in Tongues**: MusicBrainz and original sleeve credit `Talking Heads` for production; Qobuz exports `Lance Quinn` as an additional producer on several digital tracks. We did not insert Quinn without independent original-release confirmation. Alex Sadkin is an overdub engineer/mixer; Brian Eno is **not** a producer here. Claude may inspect physical original sleeve if uncertain.
- **Little Creatures**: Eric E. T. Thorngren engineered/mixed. Although his recollections document his active technical role, he is **not** listed as credited producer; the band is. `noisegating` is supported by his specific drum recording setup. The DX7 was used as an accordion guide but subsequently replaced on “Road to Nowhere”; `emulator` was also present in the studio but not credited specifically to the final record's sound. Exclude both from the production column.
- **Naked**: Steve Lillywhite and Talking Heads are producers; Fernando Kral (overdubbing), Richard Manwaring (recording) and Angel Fernandez (horn arrangements) are **not** additional producers. Kora is a plucked West African instrument and must not be categorised as a harp because the current list lacks it.
- **ARTIST INFLUENCES** appears **only in the Phase 01 package**, as specified. No band-wide influence claims repeated here. Four album-specific `influenced_by` cells intentionally empty because sonic resemblances, guest appearances and genre histories are not proved record-specific named-musician influences.
- `notes` are no longer than 15 words; `status=draft`, every row is 27 columns. Eight scalar columns are 0–5 judgements documented separately. In catalog-audit, phase 01 albums are included for **audit only**, no duplicate descriptor rows.

## Fandome checks for Claude

1. Merge Phase 01 if not already done, then add the two missing Phase 02 catalogue titles.
2. Add the new genre + instrument tokens (and their genre families, validator if needed) while retaining Phase 01 additions.
3. Append **only** the four rows in `talkingheads_phase02_rows_ONLY.csv` to existing `docs/descriptors/talkingheads.csv` (or create it if phase 01 was not yet imported).
4. Run `npx vite-node scripts/validate-descriptors.ts` and tests. Keep `status=draft` pending second-person review.
5. Check `genre_evidence.csv` scopes: one-track textures do not become album-wide genres; taxonomy labels are still catalogued as album-level genre evidence.

## Next phase

**None planned.** This completes all eight original Talking Heads studio albums (1977–1988). *Stop Making Sense* (1984) and *The Name of This Band Is Talking Heads* (1982) are live recordings, and *Sand in the Vaseline* etc. are compilations, so do not import them for this brief. *The Catherine Wheel* and *My Life in the Bush of Ghosts* are David Byrne projects, not Talking Heads albums.

## ZIP file list (six files)

1. `CLAUDE_IMPORT.md`
2. `talkingheads_phase02_rows_ONLY.csv`
3. `talkingheads_phase02_sources.csv`
4. `talkingheads_phase02_genre_evidence.csv`
5. `talkingheads_phase02_evidence-notes.md`
6. `talkingheads_phase02_catalog-audit.csv`

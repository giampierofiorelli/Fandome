# Claude import — Michael Jackson Phase 02

**READ-ONLY RESEARCH HANDOFF.** Do not replay Phase 01. Import only the four new rows in `mj_phase02_rows_ONLY.csv` after checking the repository state.

## Exact phase contents

| album_id | album title | year | type | catalog status |
|---|---|---:|---|---|
| `mj-offthewall` | Off the Wall | 1979 | studio | already in catalog |
| `mj-thriller` | Thriller | 1982 | studio | already in catalog |
| `mj-bad` | Bad | 1987 | studio | already in catalog |
| `mj-dangerous` | Dangerous | 1991 | studio | already in catalog |

- Artist ID: `mj` (confirmed from `src/data/catalog.ts` branch `descriptors`).
- Existing artist descriptor at research: `docs/descriptors/mj.csv` absent. Ensure idempotence by checking for rows imported since then; do not append duplicates.
- All four album IDs and release dates already exist in the current catalog; **none to add**.
- Co-billed albums: **none**. Paul McCartney, Stevie Wonder, Heavy D and Siedah Garrett are guest performers on songs, not co-billed albums.
- `status=draft` for all rows. `notes` limited to 15 words.

## New token proposals

- **Genre:** `adultcontemporaryrnb` — exact AllMusic style *Adult Contemporary R&B* attached to *Thriller*. Keep this exact name (do not merge with `adultcontemporary` or `contemporaryrnb`). Add to `scenes.ts`, `genreFamilies.ts`, validator as appropriate. Suggested parents: `contemporaryrnb`, `adultcontemporary` if they are in the graph; check whether this style is relevant to existing genre taxonomy before accepting.
- **Production:** `emulator` — original *Thriller* LP credits Michael Boddicker on an E-mu *Emulator* without giving the model generation (on several tracks). Do not silently substitute `emulatorii` (a different, specific machine). Add to `production.ts` and validator if retained.
- **Instrument:** `clavinet` — original *Off the Wall* LP credits Greg Phillinganes playing Clavinet on “Get on the Floor.” It is **not** `clavichord`; add a separate instrument token to `instruments.ts`, guide, and validator. Other instruments are already in the guide.

## Caveats and edition boundaries

1. *Off the Wall*: Quincy Jones producer, Michael Jackson only co-producer on specified tracks. Recorded by Bruce Swedien using Acusonic; no unsupported machine claims.
2. *Thriller*: original 1982 nine-song LP; `linndrum` appears in MusicBrainz's track credits for title track; original LP credits `Emulator`, model unspecified. Vincent Price narration on title track; not lead sung voice.
3. *Bad*: original 1987 ten-track LP and its 1987 mixes (the contemporaneous CD also includes “Leave Me Alone”); late-1980s **Mitsubishi digital multitrack**, so `digitaltape`, not analog tape. Album of the Year uses retrospective `newjackswing` label with medium evidence, not a contemporaneous unequivocal album-wide genre. `gospel`/`hardrock` have contemporary explicit descriptions from Christian Science Monitor / LA Times, but apply only to certain songs. Add `adultcontemporary` from the AllMusic review's ballad description.
4. *Dangerous*: original 1991 fourteen-track album. Teddy Riley's MPC-60 on title track, Bottrell's Akai S1000 and analog-to-digital workflow on released “Black Or White”; not necessarily used by Riley's other recordings. Bill Bottrell is *credited producer*, not merely engineer; Bruce Swedien credited producer on “Jam”.
5. `sounds_like` is editorial sonic comparison, *not* an influence claim; `influenced_by` intentionally empty until independent documented album-specific testimony.
6. `genre_evidence` uses separate lines and scopes; track-limited genres are ranked after album-core sounds. `confidence=high` is primarily about central album descriptors, notwithstanding weaker track-scope claims.

## Files included

- `mj_phase02_rows_ONLY.csv` — header + **four** new 27-column rows.
- `mj_phase02_sources.csv` — traceable sources, type, URL and claim.
- `mj_phase02_genre_evidence.csv` — one record per genre token, including scope.
- `mj_phase02_evidence-notes.md` — per album scales, instruments, production and contested attributions.
- `mj_phase02_catalog-audit.csv` — all four existing IDs (no catalog changes).
- `CLAUDE_IMPORT.md` (this file).

## Import checklist

1. Check latest `descriptors` branch for any Phase 01 imports or later updates to `mj.csv` and genre list.
2. Add only the two proposed tokens where they remain absent; update all relevant type definitions, genre-family parents, and descriptor validator.
3. Verify original release metadata and producer names; do not convert track-only instrument evidence to claims of universal use.
4. Merge only the **four** new rows (never replace or repeat Phase 01 rows); run `npx vite-node scripts/validate-descriptors.ts` and tests.
5. Review contested genre tags in `mj_phase02_evidence-notes.md` before marking reviewed.

## Next phase (Phase 03, chronological)

1. **HIStory: Past, Present and Future, Book I** (1995) — double album: disc 1 hits, disc 2 new material; decide descriptor scope clearly, preserve existing catalog `mj-history` ID if it corresponds to same release. Current Fandome title is `HIStory`.
2. **Blood on the Dance Floor: HIStory in the Mix** (1997) — remix album with five newly recorded studio tracks; landmark hybrid, categorize `remix` and flag edition composition.
3. **Invincible** (2001) — studio.
4. **Michael** (2010) — posthumous studio release; examine disputed vocal credits rigorously and label posthumous issues, not automatically treated as definitive recordings.

Later: *Xscape* (2014), and other officially released archival projects only after significance and provenance checks.

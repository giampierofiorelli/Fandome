# CLAUDE_IMPORT — Giorgio Moroder, Fandome Phase 08

**Read-only source/repository audit: 2026-10-25. Strictly incremental: only this phase's four rows.**

## Exact contents (six files)
- `CLAUDE_IMPORT.md`
- `moroder_phase08_rows_ONLY.csv` — header + **4** rows, each 25 columns; status draft
- `moroder_phase08_sources.csv` — **31** reference records (claim-specific original links)
- `moroder_phase08_genre_evidence.csv` — **29** records, one per applied genre token, album/track/texture scope distinguished
- `moroder_phase08_evidence-notes.md` — source reasoning and material disagreement
- `moroder_phase08_catalog-audit.csv` — add/preserve instructions

## Phase scope, album IDs and original releases
1. `moroder-foreverdancing` — **Forever Dancing** (1992, studio): **add**. Original 19-song 1992 Virgin album; record has reworked disco song snippets plus newly made *Carry On* duet; collector label *Best-Of* is noted. Not later 1998 remix compilation.
2. `moroder-dejavu` — **Déjà Vu** (2015, studio): **already in catalogue; preserve ID**. Standard 12 tracks; original date between June 12 and June 16 depending on edition, year 2015 secure.
3. `moroder-tronrunroriginalsoundtrack` — **TRON RUN/r (Original Soundtrack)** (2016, soundtrack): **add**. Joint Moroder/Raney Shockne game score plus officially commissioned remixes, original commercial 14 tracks.
4. `moroder-queenofthesouthoriginalseriessoundtrack` — **Queen of the South (Original Series Soundtrack)** (2018, soundtrack): **add**. Joint Moroder/Raney Shockne 28 original TV cues, released July 13 2018 Lakeshore.

## Branch `descriptors` audit
- Artist ID **`moroder`** confirmed from `src/data/catalog.ts`, not a variant of his given name. Exact 2015 ID `moroder-dejavu`.
- At 2026-10-25 pre-package audit, `docs/descriptors/moroder.csv` has **20 descriptor rows**, through 1985 Phase 06; **Phase 07 not yet present**. Never overwrite Phase 01–06. Preserve Phase 07 ZIP and merge it separately; check branch at integration time.
- Catalogue artist row currently lists existing releases through 1985 + 2015; no Phase 07 titles and none of these Phase 08 new titles. Insert three original titles chronologically, preserving Déjà Vu id.
- Do not add separate Raney Shockne artist entries automatically. These are eligible credited collaborations under Moroder.

## Genre tokens and strict production evidence
- **Proposed new genre tokens** (`Genre` in `src/data/scenes.ts`, `GENRE_PARENTS` in `src/data/genreFamilies.ts`, display map if used, validator + tests): `videogamemusic`, `electronoir`, `retrowave`. They're not all equally strong: `electronoir` is a label/critic's term, *not* a settled genre category. Three are explicitly scoped in genre evidence.
- For Déjà Vu, `producers` lists exact credited producers/co-producers from Qobuz; excludes executives, composers who are not producers, engineers/mixers. Deja Vu has live drums/Rhodes; electronic scale NOT 5.
- TRON RUN/r: only Raney Shockne is explicitly designated `co-composer/producer` on the original official store page. Composers/remix performers not automatically record producers.
- Queen of the South: album producer credit remains **empty**. Sources prove dual composition, not individual album music-production credit. TV **executive producers are unrelated**.
- `sounds_like` is editorial; `influenced_by` needs explicit qualified testimony. Only **Daft Punk → Déjà Vu** meets that bar (Pitchfork critic). No synthetic era-to-era influences invented.
- `lyrics`/`voice`/`language`/scales reflect original album, not a familiar title track alone. Several cells intentionally empty for insufficient evidence.

## Import procedure
1. Re-read branch files; append by exact `album_id` and skip any already-imported row. Do NOT reimport or rewrite previous artists/phases.
2. Add three album tuples, preserving spelling/punctuation and order. `moroder-dejavu` currently exists; no duplicate.
3. Add approved genre tokens to all three genre-related systems and UI label map; use sources to decide whether new genre tags should persist.
4. Run `npx vite-node scripts/validate-descriptors.ts`, app build and tests in actual repository, keep `status=draft` until human second review. Our separate ZIP structural checks do not count as GitHub integration/test pass.

## Next phase
**No Phase 09 of new Giorgio Moroder studio/landmark records confirmed through 2026-10-25.** Later artist-page collections/remixes and unreleased-project rumours are not automatically qualifying original albums. The outstanding historical **cross-artist collaborations** (Sparks *No. 1 in Heaven* 1979 and Munich Machine; Donna Summer productions) require a separate collaboration-link research batch or another artist's descriptor phase; do not inject them as new solo-album rows here. Audit any newly reported 2025–26 release before promising more.

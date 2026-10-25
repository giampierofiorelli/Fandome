# CLAUDE_IMPORT — TR/ST / Phase 01 (2026-10-25)

**Read-only research handoff for Fandome (`descriptors`). Exactly 4 new rows, not a replacement for another artist or phase.**

### Contents (six files, ZIP root)
- `CLAUDE_IMPORT.md` — this instruction sheet.
- `trst_phase01_rows_ONLY.csv` — required 25-column header + **four** studio LP rows; `status=draft`.
- `trst_phase01_sources.csv` — specific credited sources with working URLs and claim scope.
- `trst_phase01_genre_evidence.csv` — a separate entry for **every** genre token on each record, including per-track limitations.
- `trst_phase01_evidence-notes.md` — scale rationales, first-person interviews, criticisms and edition disputes.
- `trst_phase01_catalog-audit.csv` — existing and missing catalog IDs.

### Album IDs and original albums
1. `trst-trst` — **TRST** (2012, studio; existing id) — preserve id; **correct Fandome display title `TR/ST` to official album title `TRST`** without changing computed slug, original 11-song February album.
2. `trst-joyland` — **Joyland** (2014, studio; existing) — preserve id.
3. `trst-thedestroyer1` — **The Destroyer – 1** (2019, studio; existing) — preserve the exact Fandome title and slug, do not create duplicate `trst-thedestroyerpartone`.
4. `trst-thedestroyer2` — **The Destroyer – 2** (2019, studio; **MISSING**) — add exact tuple `['The Destroyer – 2', 2019]` to existing `trst` artist entry, after Part 1.

Verified artist ID is `trst`. **Catalog title caveat:** `src/data/catalog.ts` currently stores `['TR/ST', 2012]`, which generates the correct existing ID but displays the artist stylization rather than the album title **TRST**. Change just that title to `TRST` when importing, preserving `trst-trst`. At research time `docs/descriptors/trst.csv` **does not exist** on the `descriptors` branch. Re-audit immediately prior to importing; if another file was added meanwhile, deduplicate by `album_id`, never blindly overwrite.

### Add two Genre tokens **before running descriptor validator**
- `coldwave` — explicit period/cold-wave style, suggested parents `darkwave|newwave`.
- `ebm` — electronic body music, suggested parents `industrialdance|electronic`.

Add both, exactly as written, to the `Genre` type in `src/data/scenes.ts`, `GENRE_PARENTS` in `src/data/genreFamilies.ts`, **and** the `GENRES` set in `scripts/validate-descriptors.ts`. All other row genres already exist in those files. The new genres must not be silently dropped.

### Source and credits warnings
- `TRST` first release **28 February 2012**; some retail / digital listings display October/November 2012. Use 2012 and the original 11 tracks; some later digital versions list 13.
- Original group **Trust** was renamed **TR/ST**. Do not create separate artist IDs. Maya Postepski co-produced *TRST* and returns as a co-producer on the 2019 Destroyer recordings. She was **not** a producer on *Joyland*.
- `The Destroyer – 1`: label-supplied Qobuz track credits specifically identify five Maya co-produced tracks, conflicting with an Exclaim review's six; accept the primary credit list pending physical-sleeve audit.
- `The Destroyer – 2`: official Bandcamp typo **This Slow** actually means *Slow Burn*, the original final track. Postepski is credited as co-producer of that song only.
- **Damian Taylor** is an **additional producer** and mixer on selected Destroyer tracks. Because Fandome's producer field is explicitly for producers and co-producers, he is omitted; do not accidentally add mixers (including Taylor on earlier albums). Lars Stalfors has true co-producer credits so remains listed.
- `sounds_like` is about editorial sonic comparison only. Only **artist-confirmed** influences go in `influenced_by`: formative Ace of Base / Aphex Twin / Cocteau Twins for debut, Kate Bush / Cocteau Twins vocal approach on Joyland, and Pet Shop Boys **Very** specifically for *Grouch* on Part 1. No documented artist-level Part 2 influence was verified.
- When an album has quieter sections and select dancefloor tracks, anchor mood, groove and tempo to **the album**, not one single.

### Follow-on phase (original released music only)
**Phase 02:** `TR/ST EP` (2024, `ep`, five-song project with Jake Shears and Cecile Believe; assess as documented collaboration), **Performance** (2024, `studio`, fifth album). Both are currently **absent** from catalogue. Do **not** describe `Destroyer Vol 1 & 2` (2022 combined reissue), prior singles or another artist's records as additional albums. Verify that no later LP has been released before preparing Phase 02.

### Merge protocol
Append only these 4 rows, preserving all existing descriptors. Add missing catalogue tuple and genre tokens, then run `npx vite-node scripts/validate-descriptors.ts`, tests and app build. Keep `status=draft` until a separate human review. No automated GitHub modifications are part of this ZIP.

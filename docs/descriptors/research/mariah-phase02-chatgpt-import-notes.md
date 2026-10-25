# Fandome — Mariah Carey Phase 02 / Claude import

**Branch:** `descriptors`, repository `giampierofiorelli/Fandome`. **Artist ID:** `mariah`. Research cutoff 2026-10-25. Original releases only, no live records, four original 25-column `draft` descriptors.

## Files in this ZIP (6 only)

1. `mariah_phase02_rows_ONLY.csv` — 4 new, **append-only** rows in canonical field order.
2. `mariah_phase02_sources.csv` — dated reviews, interviews, original-record credits; source IDs prefixed D95/B97/R99/G01.
3. `mariah_phase02_genre_evidence.csv` — one row per album/genre, scoped dominant/secondary/single-track, citing source IDs.
4. `mariah_phase02_evidence-notes.md` — detailed eight-dimensional numeric rationales, vocal styles, edition caveats, documented vs hypothesized influence.
5. `mariah_phase02_catalog-audit.csv` — catalog status/required changes.
6. `CLAUDE_IMPORT.md` — this file.

## Repository preflight and merge

- `src/data/catalog.ts`: already has Daydream (1995) and Butterfly (1997), preserve their generated IDs `mariah-daydream` and `mariah-butterfly`. **Add** Rainbow (1999) and Glitter (2001) to the Mariah artist album list; generated IDs should be `mariah-rainbow`, `mariah-glitter`.
- At last inspection, `docs/descriptors/mariah.csv` was not yet present on GitHub. Phase 01 already delivered separately (1990 Mariah Carey, 1991 Emotions, 1993 Music Box, 1994 Merry Christmas). **Retain and import Phase 01 alongside this one**, never rerun its research or duplicate it.
- `Glitter` must be `type=soundtrack`, despite some discography pages counting it as a studio album; it was written/marketed for the film. Never import the film's *other artists'* licensed songs into Carey's album.
- Required **new genre tokens**: `smoothsoul` (family `soul,rnb`) and `synthfunk` (family `funk,electronic`). Add to `src/data/scenes.ts`, `src/data/genreFamilies.ts`, `scripts/validate-descriptors.ts`, guide and display mapping. All other genres in these four rows already exist.
- Check album producer and co-producer names **per standard original edition**, not expanded/reissue remixes. 1995 ODB Fantasy remix excluded, 1995 house *Daydream Interlude* included; 1999 Heartbreaker remix included as part of base 14-track listing; 2001 MJ Cole bonus remix excluded.
- Original `influenced_by` supported via sources: *Daydream* Minnie Riperton (artist interview); *Rainbow* Minnie Riperton (producer) + Aretha Franklin and Barbra Streisand (artist interview); *Glitter* Cherrelle, Alexander O'Neal, S.O.S. Band, Cameo, Prince (artist interview). *Butterfly* leaves it empty. Track-specific influences are flagged in evidence notes.
- Do not apply an arbitrary cap to genres, voice tokens, other multi-value fields or producer credits. Notes are <=15 words, as required by guide.

## Validate after merging

Run `npx vite-node scripts/validate-descriptors.ts` and project tests. Verify no duplicate IDs and every source genre represented; keep `status=draft` until second editorial review. **No repository changes made by ChatGPT.**

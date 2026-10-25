# CLAUDE_IMPORT — Giorgio Moroder / Phase 03

## Incremental files (exactly six)
- `CLAUDE_IMPORT.md`
- `moroder_phase03_rows_ONLY.csv` (25-column header + exactly 4 new album rows)
- `moroder_phase03_sources.csv` (per-album claim-specific research URLs)
- `moroder_phase03_genre_evidence.csv` (one line per included genre per album, scopes and source IDs)
- `moroder_phase03_evidence-notes.md` (full decisions and competing evidence)
- `moroder_phase03_catalog-audit.csv` (three new catalog titles + one existing)

## Albums and exact IDs
1. `moroder-lovesinyoulovesinme` — **Love's in You, Love's in Me** (1978, studio; *Giorgio & Chris* collaboration) — add catalog.
2. `moroder-midnightexpress` — **Midnight Express** (1978, soundtrack; Alan Parker original film score) — add catalog.
3. `moroder-musicfrombattlestargalacticaandotheroriginalcompositions` — **Music From "Battlestar Galactica" and Other Original Compositions** (1978, studio; TV-themes adaptation + original Evolution) — add catalog.
4. `moroder-emc` — **E=MC²** (1979, studio) — **already in catalog, preserve ID**.

**Critical ID:** Catalog's slug uses `.normalize('NFD')` then `[a-z0-9]` filtering; superscript ² is not ASCII digit, so the existing ID is `moroder-emc`, **not** `moroder-emc2`. Don't generate a duplicate.

## Integration conditions
1. Repository branch `descriptors` artist ID `moroder`; `docs/descriptors/moroder.csv` exists and already holds four 1969–73 Phase 01 rows. The prior Phase 02 pack describes 1973–77 and may have been imported since our audit. **Recheck immediately before import, dedupe all four phase-03 ids, never overwrite previous rows.**
2. Add three album tuples to Moroder's existing artist album list in `src/data/catalog.ts`; keep chronological ordering. No additional artist rooms for Chris Bennett or TV score composer Stu Phillips without separate editorial decision.
3. Append exactly the four new descriptor rows, preserve the prior ones. The first 1978 LP original billing **Giorgio & Chris** is explained in evidence notes. `type=studio` for 1978 Battlestar is deliberate: Moroder says this **was not the actual TV series soundtrack**; it includes his separately composed ~15min *Evolution*.
4. **No new Genre tokens** requested; all supplied ones were already present in current `src/data/scenes.ts` `Genre` union, but run your current validator check after merge.
5. Source-evidence caution: The artist's official site duplicates *Istanbul Opening* in the Midnight Express track list. Physical LP replaces the first duplicate with *Istanbul Blues* sung by David Castle. Refer to catalog audit.
6. 1979 *E=MC²* has conflicting producer listings: Moroder-only official site versus joint Giorgio/Harold on 1979 LP sleeves / AllMusic. Use both with explicit caveat. More important: Moroder directly recounts live pianos **and** live drums, so `electronic=4`, even though a critical reviewer calls it entirely electronic.
7. Match the guide's type vocabulary and 25-column header; add no bonus tracks, remixes or reissue tracks. All rows `draft`; do not mark reviewed. Run `npx vite-node scripts/validate-descriptors.ts` and project tests.

## Following chronological phase, provisionally Phase 04
**American Gigolo** (1980, soundtrack), **Foxes** (1980, soundtrack), **Cat People** (1982, soundtrack), **Solitary Men** (1983, collaboration with Joe Esposito). The first three need an original-album significance filter before inclusion; use the best-attested titles and credits. Later Phase 05: *Flashdance* (1983, notable multi-artist soundtrack/production role to classify), *Scarface* (1983), *Innovisions* (1985) and *Philip Oakey & Giorgio Moroder* (1985). Do not automatically treat all music the films contain as original Moroder scores; check each issue.

## Repository audit date
2026-10-25. Read-only checks confirmed existing `moroder.csv`, catalogue title *E=MC²* (1979), the 25-column guide, and existing `Genre` values. All other three titles are absent from catalogue at audited head.

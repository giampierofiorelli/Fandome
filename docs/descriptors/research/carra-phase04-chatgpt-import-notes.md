# CLAUDE IMPORT — Raffaella Carrà Phase 04 (incremental only)

**Branch:** `descriptors` (read-only research; ChatGPT has not modified GitHub). **Artist ID:** `carra`. **Phase:** 04. **Cut-off:** 2026-10-25.

## Files and new rows

- `carra_phase04_rows_ONLY.csv`: required 25-column header **plus exactly four rows**, no prior-phase rows.
- `carra_phase04_sources.csv`: per-album reference links and what each supports.
- `carra_phase04_genre_evidence.csv`: one row per album genre (including low-frequency genres), original source and evidence scope.
- `carra_phase04_evidence-notes.md`: album-specific reasoning, conflicting details and instrument/producer distinctions.
- `carra_phase04_catalog-audit.csv`: current catalogue membership at research time.

| album_id | title | year | type | action |
| --- | --- | --- | --- | --- |
| `carra-raffaellacarra82` | Raffaella Carrà '82 | 1982 | studio | ADD |
| `carra-fatalita` | Fatalità | 1983 | studio | ADD |
| `carra-bolero` | Bolero | 1984 | studio | ADD |
| `carra-fidati` | Fidati! | 1985 | studio | ADD |

At check time, `catalog.ts` contained **eight** prior Carrà album titles through *Fiesta* (1977), and `docs/descriptors/carra.csv` contained the same eight Phase 01–02 rows. Phase 03 material may exist as an unimported ZIP. **Check again at import time**: do not replace Phase 03 or re-import prior phases. Append only this phase; let Claude handle previous Phase 03 independently.

## Genre policy — do not collapse to one style

The rows deliberately include *all sourced genres*, even minor styles and album-release classifications. Each one has a genre evidence record (`whole album`, `some tracks`, `texture`) plus a source and uncertainty. The exact song-to-style connection is recorded only where **verified** (e.g. Rockol identifies *Ballo ballo* as italo-disco; conservatory musician identifies *Innamorata* as pop ballad). Do not infer sonic tags from a track title. This rule is equally important for non-cohesive Carrà albums.

**New genre tokens:** **none**. All used genre tokens currently appear in `scenes.ts` on the descriptors branch. Do not add the source-database generic style `Vocal` as a genre, as singing is already handled by `voice`.

## Editions / credits / dates

1. *Raffaella Carrà '82*: Spain 1982 12-track Spanish-language Hispavox S 90.649 vs later 1982 Italy 10-track LP Hispavox HVX 70701; alternate titles (`Raffaella Carrà`, `Bailo Bailo`, `Canta en italiano`) and 1984 regional reprints must NOT become duplicate albums. Use `carra-raffaellacarra82` under existing slug logic. ANSA confirms **Danilo Vaona produced**.
2. *Fatalità*: original Italy 1983 Italian-language 10-track HVX 70702; Spanish version later. Original 24 Nov 1983 official date; 2025 Warner issue not a new studio album. **Danilo Vaona** produced; **Paolo Ormi / Franco Bracardi** in some listings are associated with **arrangements/composition** and should not automatically be listed as co-producers.
3. *Bolero*: original CGD 20447 1984. The official page shows 19 Oct 1984 while some secondary metadata says 1 Dec 1984; do not resolve the day without primary label verification. `Competition`/`Competicion` spelling variants. Sleeve has **Linn II and PPG 2.3**; **Stephen Head programmed**, **Danilo Vaona** was artistic and music producer, **Sergio Japino executive producer**.
4. *Fidati!*: Fonit Cetra STLP 147, 26 Nov 1985; **Danilo Vaona produced**; **Sergio Japino only executive producer**; **Gary Low** arranged/wrote `Quiero Cantar` and is not an established album producer. Original album has live bass/sax as well as programmed/electronic instrumentation.
5. **Languages:** 1982 `it|es` reflects variant original markets, not one universally bilingual pressing. 1984 English-titled songs and 1985 `Quiero Cantar` are **not** sufficient evidence for extra sung-language codes.
6. **Sonic influence:** *Ballo ballo*'s string intro is compared by a critic with the Beatles' *Eleanor Rigby*; this is resemblance, not a verified influence claim. `influenced_by` remains blank. `sounds_like` is likewise blank instead of extrapolating a one-track resemblance to the whole album.

## Verification / import instructions for Claude

1. Recheck `src/data/catalog.ts`, `src/data/seed.ts` and `docs/descriptors/carra.csv` on `descriptors` for phase03 / newer arrivals.
2. Append **only** four Phase 04 rows; add exactly the four missing catalogue entries with canonical IDs above.
3. Merge all per-album research files with existing researched Carrà items **without replacing earlier ones**. No genre registration needed.
4. Run `npx vite-node scripts/validate-descriptors.ts` and repository tests. These scripts are **not included in the ZIP**. Rows in ZIP were verified locally for 25 columns, unique expected IDs, 0–5 integer/blank scales, genre membership, `status=draft` and <=15 notes words. Native in-repo validator and tests are Claude's job.

## Next — Phase 05

- `Curiosità` (1986), **EP / Q-disc** of four tracks; keep it because three tracks served as *Domenica In* themes, not a conventional full studio LP.
- `Raffaella` (1988), studio album.
- `Inviato speciale` (1990), studio album.
- `Raffaella Carrà` (1991, often identified as `Scranda la mela`), studio album. Preserve its distinct ID `carra-raffaellacarra1991` if the catalogue ID is not already reserved; collision risk with the 1971 eponymous album.

# Fandome / Claude import instructions — Mariah Carey Phase 01

**Repo**: `giampierofiorelli/Fandome`, branch `descriptors` (read-only research). **Artist ID** `mariah`.

This ZIP contains precisely **four new 25-field descriptor records** covering original *Mariah Carey* (1990), *Emotions* (1991), *Music Box* (1993), *Merry Christmas* (1994). No live albums or unrelated records. No pre-existing Mariah descriptor file was found on branch at research start (2026-10-25).

## Apply

- `mariah_phase01_rows_ONLY.csv`: append/import exactly 4 records into `docs/descriptors/mariah.csv`, respecting the canonical header. Don't overwrite existing records if repo changed meanwhile; check by `album_id`.
- `mariah_phase01_catalog-audit.csv`: add `Emotions` (1991) and `Merry Christmas` (1994) to `src/data/catalog.ts` entry for artist `mariah`, preserving `Mariah Carey` (1990) and `Music Box` (1993) existing IDs. Slugs should resolve to `mariah-emotions` and `mariah-merrychristmas`.
- `mariah_phase01_sources.csv`: dated original/interview/critical sources with exact URLs and evidence scope; `mariah_phase01_genre_evidence.csv`: **per-genre evidence** with dominant, significant, secondary, vocal-style-only, and song-specific scopes; `mariah_phase01_evidence-notes.md` for rationale, unresolved issues and conflicting criticism.
- `status=draft` throughout. No source-only quotations reused as album notes. No live/reissues. Genre strings and producers have no arbitrary count limit.

## New genre tokens requiring coordinated app change

- `popsoul` — explicitly supported pop-soul crossover term in contemporary and later sources. Proposed `genreFamilies.ts`: `popsoul: ['pop','soul']`.
- `christmas` — **holiday/seasonal** style classification in Apple, AllMusic and music-industry reporting; doesn't determine a single production sound. Add to `src/data/scenes.ts` genre union, display label, validator `GENRES`, guide; decide whether a cross-cutting seasonal genre should have family `['pop']` only as a context-dependent search convenience or no parent. It must not imply that all Christmas repertoire is pop or traditional pop.

## Known uncertainties to scrutinize

- The `influenced_by` field contains **attributed influences with explicit qualification** in evidence notes: the debut's sources are Mariah's formative influences, not direct tracking-studio credits; `Music Box` / Whitney Houston is a qualified critic's claim, not a direct self-report. For strict song-level-only policy, abstain instead of promoting artist-wide influences.
- *Merry Christmas*: the album is an original studio Christmas album, **not a compilation**. Use the original 1994 track programme, not deluxe reissues; track count varies by territory/medley conventions. Phil Spector is an identified influence, **not** the album's producer.
- `voice` lacks a whistle-register category. The row lists audible delivery types and elaborates technical limitations in notes.
- `mood=3` for *Music Box* **despite** `energy=2`: melancholy and hope counterbalance each other.
- `gospel` for 1990 self-titled is principally voice stylistics; `jazz` for *Emotions* is the **final song**; `dancepop` for *Music Box* is **two songs**. Keep differentiated evidence scopes in scoring.

## Validation

1. Add catalogue entries and new genre tokens to `src/data/scenes.ts`, `src/data/genreFamilies.ts`, `scripts/validate-descriptors.ts`, and docs as appropriate.
2. `npx vite-node scripts/validate-descriptors.ts` and repository tests; inspect failures, keep `draft` until reviewed.
3. Do not add `MTV Unplugged` (1992): live EP excluded under user rule.

ZIP only includes six deliverables. No scripts, edits or binaries to merge.

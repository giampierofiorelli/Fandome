# Fandome / Claude import: Sia phase 01 (1997–2008)

**Incremental package:** FOUR ONLY. Do not append earlier or later phases, and do not overwrite any other artist. No GitHub writes were attempted. Uses exact **27-column** validator/header order: `voice,instruments,production,lyrics`.

## Rows in this ZIP

| album_id | Official release title | Year | Type | Catalogue |
|---|---|---:|---|---|
| sia-onlysee | OnlySee | 1997 | studio | ADD |
| sia-healingisdifficult | Healing Is Difficult | 2001 | studio | ADD |
| sia-colourthesmallone | Colour the Small One | 2004 | studio | EXISTING, keep id |
| sia-somepeoplehaverealproblems | Some People Have Real Problems | 2008 | studio | EXISTING, keep id |

Artist ID `sia` from `src/data/catalog.ts`. No `docs/descriptors/sia.csv` was present in the `descriptors` branch when researched. `OnlySee` was **originally credited to Sia Furler**; `artist` in the CSV intentionally uses Fandome's `Sia` display room.

## New genre tokens

None. Album styles are expressed with existing tokens. A near synonym must not silently change meaning: neo-soul -> `nusoul`; drum and bass -> `drumandbass`; soul jazz -> `souljazz`. `ukgarage` on 2001 album is low-strength and must NOT be defended using an Exemen remix; verify original master if insisting on it.

## New instrument tokens

- `harmonium`: named explicitly in The Independent's Jan 2004 album review of *Colour the Small One*; organ is not equivalent.
- `melodica`: also named by The Independent.
- `chimes`: credited by MusicBrainz for `Numb` on *Colour the Small One*. Distinguish from broad `mallets` token, used for credited marimba.

No new production technique tokens. New tokens must be added to the `instruments.ts` labels and validator accepted set if the runtime doesn't already recognize them. If merged code has gained them already, no duplicate modifications.

## Research and risk notes

- `OnlySee`: original Flavoured Records 13-track CD 1997; limited contemporary expert analysis. Its six styles rely mainly on community tagging/weak metadata. Keep `confidence=low`, blank scales, voice and lyric themes rather than project later Sia onto 1997. Generic membranophone credit represented only by `percussion`; do not invent a drum kit.
- `Healing Is Difficult`: 11 original 2001 tracks. Producer list combines track-level information from a secondary edition and needs label-sleeve reconciliation, especially Nigel Corsbie / Jesse Flavell. Original *Little Man* and the Exemen 2-step remix are separate masters; no bonus remix styles automatically added. AllMusic describes a Prokofiev sample/quotation on *Taken for Granted*.
- `Colour the Small One`: 2004 UK original, 2006 US deluxe contains bonuses and remixes; original songs only control descriptors. Recording/mixing roles must not be promoted to production credits. The earlier R&B career cannot establish R&B for this album; the UK garage classification in the earlier album also remains low-confidence. `sounds_like` is an editorial sonic analogy, NOT documented influence.
- `Some People Have Real Problems`: 2008 initial release, not later territory 2009. Some editions count hidden *Buttons* separately. Jimmy Hogarth album producer; Ray Davies wrote *I Go to Sleep* but did not thereby produce it; Beck features as a singer, not producer.
- Genre evidence retains every minority album/track style where a source names it and also retains weak categories explicitly qualified. More tags must not be inferred merely from tempo, a song title, or a prior artist affiliation.
- Fandome IDs for 2004 and 2008 are already catalogued. Audit separately records those to prevent duplication.

## Package contents

1. `CLAUDE_IMPORT.md` — import instructions/caveats
2. `sia_phase01_rows_ONLY.csv` — header + 4 new rows, 27 columns
3. `sia_phase01_sources.csv` — sources with direct URLs, relevance and evidence strengths
4. `sia_phase01_genre_evidence.csv` — album genre claims with scope, source and caveats
5. `sia_phase01_evidence-notes.md` — research rationale and track audit
6. `sia_phase01_catalog-audit.csv` — in-catalogue status and rows to add

## Next phase (02)

`We Are Born` (2010), `1000 Forms of Fear` (2014), `This Is Acting` (2016), `Everyday Is Christmas` (2017). Later separately: `Music: Songs from and Inspired by the Motion Picture` (2021 soundtrack), `Reasonable Woman` (2024), and major collaborations when justified (e.g. LSD), avoiding duplicate compilation/reissue releases. All are released before 2026-10-25.

## Validation for Claude

1. Add catalogue objects for `OnlySee`/`Healing Is Difficult` only. Do not re-add 2004/2008.
2. Add missing instrument tokens to `src/data/instruments.ts` (and to validator if it has an independent hardcoded list).
3. Merge only the four phase rows to `docs/descriptors/sia.csv`; resolve any colliding IDs by preserving catalogue IDs.
4. Check 27 columns and exact header against current validator; validate `genres`, `instruments`, `production`, notes <=15 words, scales 0–5 or empty.
5. `npx vite-node scripts/validate-descriptors.ts` and project test suite.

# CLAUDE_IMPORT — Dua Lipa, Fandome Phase 01

**Research as of:** 25 October 2026. **Repository inspected:** `giampierofiorelli/Fandome`, branch `descriptors`, read-only. **Artist ID:** `dualipa`. **Import mode:** *strictly incremental*: this ZIP's four new rows only; never overwrite other artists or repeat prior batches.

## Included releases (chronological)

| album_id | title | year | type | catalog status |
|---|---|---|---|---|
| `dualipa-dualipa` | Dua Lipa | 2017 | studio | already present |
| `dualipa-futurenostalgia` | Future Nostalgia | 2020 | studio | already present |
| `dualipa-clubfuturenostalgia` | Club Future Nostalgia | 2020 | remix | ADD |
| `dualipa-radicaloptimism` | Radical Optimism | 2024 | studio | already present |

**Catalogue addition:** `['Club Future Nostalgia', 2020]` in `dualipa` catalogue list, between Future Nostalgia and Radical Optimism; new generated ID is `dualipa-clubfuturenostalgia`. No direct GitHub writes were performed.

**Edition rules:** evaluate original 2017 twelve-song debut (not Deluxe/Complete); original eleven-track Future Nostalgia (not Moonlight Edition); *original August 28, 2020 DJ-mixed* Club Future Nostalgia with The Blessed Madonna (not the September unmixed edition); and 2024 original eleven-track Radical Optimism (not Extended Versions). All source lookups must be interpreted under those release limits.

## New genre tokens for Claude

1. `baltimoreclub`: directly named in Pitchfork for selected Club Future Nostalgia music. Proposed parent genres `house`, `dance`, `electronic` (review ontology).
2. `neopsychedelia`: named explicitly by Slant for Radical Optimism. **Disputed** as an audible album-defining style by Pitchfork and The Guardian; proposed family `pop`/`experimental` (review ontology).

Add both types in `src/data/scenes.ts`, parents in `src/data/genreFamilies.ts`, and values in `scripts/validate-descriptors.ts` before validation. Keep source-specific genre scope in `dualipa_phase01_genre_evidence.csv`. Treat reference-only genres cautiously; do not automatically reinterpret musical inspiration as an audible genre.

## Six import files

- `CLAUDE_IMPORT.md` (this guide).
- `dualipa_phase01_rows_ONLY.csv`: precisely four rows and 25 required columns.
- `dualipa_phase01_sources.csv`: 37 source records with working, researched source URLs.
- `dualipa_phase01_genre_evidence.csv`: 47 genre/scope/evidence entries.
- `dualipa_phase01_evidence-notes.md`: explicit reasoning for each scoring dimension, credit method, historical editions and critical disagreements.
- `dualipa_phase01_catalog-audit.csv`: catalogue-presence audit and instructions.

## Credit cautions and disagreements

**The debut:** producer/co-producer names are limited to the original 12 tracks; Qobuz's deluxe credits are used only for tracks on that original edition. `Koz` means Stephen Kozmeniuk. **Future Nostalgia:** Lorna Blackwood and Lauren D'Elia are credited for vocal-production tasks and Rupert Christie for additional production; confirm final inclusion under your stricter local producer-role policy. **Club Future Nostalgia:** the producer field contains a conservative list of source-record production contributors rather than every remixer. Dork's producer aggregation and Qobuz/MusicBrainz explicit remixer/DJ-mixer roles conflict. The Blessed Madonna's curator/producer work is documented, but her *DJ-mix and remix* credits are different from original song production. Do not promote any artist credited solely as `Remixer` into `Producer`; inspect evidence notes and original credits. **Radical Optimism:** distinguish main producers (Parker, Harle, Wyatt, Kirkpatrick) from collaborators/writers (Ailin, Jesso Jr.) and engineers/vocal producers.

`influenced_by` uses named project-relevant artist statements or qualified criticism, with citations to the evidence, not just similarities. `sounds_like` is openly editorial. Empty cells mean unknown and no multivalue column has a length limit. Only `notes` is limited to 15 words. All four rows are `draft`.

## Next phase (02)

Assess two independent live albums in chronological order, **Dua Lipa Live from the Royal Albert Hall** (2024) and **Dua Lipa: Live from Mexico** (2026). Include each only if it satisfies the landmark/independent-live criterion; research concert orchestration, performers, producers and arrangements independently of the studio source albums. Audit **Training Season's Over** (2026 EP) for standalone significance but do not add it automatically. No released fourth studio album is documented as of 25 October 2026.

**Validation workflow for Claude:** append catalogue entry and genre tokens as necessary, import the new rows only, run `npx vite-node scripts/validate-descriptors.ts`, then run repository tests. Do not mistake this package's local CSV structural validation for a complete repository test run.

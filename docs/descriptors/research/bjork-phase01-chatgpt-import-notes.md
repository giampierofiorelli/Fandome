# CLAUDE_IMPORT — Björk Phase 01 (read-only GitHub research package)

## Strictly incremental
Only the four new descriptor rows below, **no earlier phases or other artists**. Base checked: GitHub branch `descriptors`, 25 October 2026; artist ID `bjork`; `docs/descriptors/bjork.csv` was absent when checked. Schema: 27 columns; `status=draft`.

## Phase album IDs (chronological)
1. `bjork-bjork` — **Björk** (1977), studio, Icelandic juvenile solo album, **not** official 1993-onward adult discography.
2. `bjork-glingglo` — **Gling-Gló** (1990), studio, collaboratively billed with Tríó Guðmundar Ingólfssonar.
3. `bjork-debut` — **Debut** (1993), studio; **already in catalogue**.
4. `bjork-post` — **Post** (1995), studio; **already in catalogue**.

## Catalogue changes needed
- Add (`Björk`, 1977, `studio`, id `bjork-bjork`) and (`Gling-Gló`, 1990, `studio`, id `bjork-glingglo`) to `catalog.ts` before validator.
- `coBilled.ts`: add `'bjork-glingglo': { credit: 'Björk Guðmundsdóttir & Tríó Guðmundar Ingólfssonar' }`. The trio has no Fandome room at the time of research; omit `with` until a real catalogue artist ID exists.
- Historical 1977 credit on the disc is *Björk Guðmundsdóttir*, but descriptor `artist` stays canonical Fandome display label `Björk` so the record belongs in her room. Do not create a second Björk artist identity.

## New tokens to register before import
- Genre `childrenspop` (AllMusic *Children's Pop* for 1977; parent `childrensmusic` and `pop`).
- Genre `novelty` (secondary classification for 1977; caution: Wikipedia only, low genre strength; parent `pop` or [] after editorial review).
- Instrument `hammereddulcimer` (Jim Couza on *Post*, **hammered dulcimer**, different from existing `mallets`).
- Instrument `bagpipes` (*Post*, documented in Björk interview). Both lowercase letters, allowed by research contract.
- No new production token proposed. Do not attribute software/drum-machine models from era/genre alone.

## Evidence and credit caveats
- **1977** producer undocumented in consulted original credits => deliberately **blank**. Do not confuse arranger/composer/stepfather assistance with producer role. Original LP, not CD bootlegs.
- **1990** original 14 songs in Icelandic; 16-track reissues include two English performances from an earlier rehearsal. `is` reflects original 14-track album, not 16-track reissue. Tómas Tómasson producer has secondary-source credit; verify sleeve before approval.
- **1993** `Debut` distinct from 1977 `Björk`. Some territories include *Play Dead*; *There's More To Life Than This* has a live-recorded track, which supports only a limited `liverecording` tag.
- **1995** tracks have different production credits. Do **not** automatically add programmer Marius de Vries or arranger Eumir Deodato as producers. `sampling` is supported by Scanner sample on *Possibly Maybe*; outdoor vocals do not establish `fieldrecordings` as a production device.
- **Interpretation**: editorial `sounds_like` is different from verified artist influence. Björk period references to Eno/DAF were excluded as album-specific influence unproven. Pitchfork’s *Post* links to Joni Mitchell/Meredith Monk are **critic interpretations**. Scale scores are album-wide interpretive, not per-track arithmetic.

## What Phase 02 should contain
Chronologically: *Telegram* (1996, landmark official remix project), *Homogenic* (1997, studio), *Selmasongs* (2000, film soundtrack), *Vespertine* (2001, studio). The 1994 *The Best Mixes from the Album Debut for All the People Who Don't Buy White Labels* is excluded as a non-landmark remix collection; reconsider only if substantial evidence warrants a distinct package. No live albums by default.

## Files
- `bjork_phase01_rows_ONLY.csv`: exact 27-field header + four new rows.
- `bjork_phase01_sources.csv`: source associations, URLs, scope, source strength.
- `bjork_phase01_genre_evidence.csv`: one evidence record per declared album genre, with track-vs-album scope.
- `bjork_phase01_evidence-notes.md`: per-album rationale and critic disagreements.
- `bjork_phase01_catalog-audit.csv`: reuse/add decision and co-billing.

Import after inspecting caveats. Claude must update taxonomy/parents and run Fandome validator and tests; package itself contains no scripts.

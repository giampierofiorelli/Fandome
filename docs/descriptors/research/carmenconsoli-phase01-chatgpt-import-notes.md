# CLAUDE IMPORT — Carmen Consoli, Phase 01

## Scope
- Branch: `descriptors`, GitHub repository `giampierofiorelli/Fandome`, checked read-only on 2026-10-26.
- Artist ID: `carmenconsoli` (already exists).
- 4 original studio albums: `carmenconsoli-dueparole` (1996); `carmenconsoli-confusaefelice` (1997); `carmenconsoli-mediamenteisterica` (1998); `carmenconsoli-statodinecessita` (2000).
- `docs/descriptors/carmenconsoli.csv` is absent at this check; import rows into new file without duplicating any previous research phases.

## Catalogue and vocabulary changes
- Add `['Due parole', 1996]` ahead of `Confusa e felice` in `src/data/catalog.ts` for `carmenconsoli`.
- Other three phase albums already present in catalogue; do not add duplicates.
- No new genre, instrument or production token required for these four rows; validate against current genre/instrument/production sets.
- No co-billed album in this phase.

## Crediting and uncertainty
- *Due parole*: both Francesco Virlinzi and Allan Goldberg are credited as producers by AllMusic and a 25th-anniversary reissue report. Universal Italia misspells Virlinzi as “Villinzi” in track-level metadata; use correct name. The label lists Goldberg as mixer elsewhere; source report establishes his production credit.
- *Confusa e felice*: Francesco Virlinzi alone in `producers`. Luciano Torani is engineer/arranger, not automatically producer. Assistant computer programming does not substantiate a named machine or album-scale electronica.
- *Mediamente isterica*: Virlinzi in `producers`; Carmen's artistic-production role is captured in notes, not silently promoted to a credited producer. Pro Tools editing is documented.
- *Stato di necessità*: Virlinzi in `producers`; Paolo Buonvino arranged/conducted strings, not producer; Consoli gets artistic-production credit only. Explicit vocal vocoder is a track-specific critic observation, not a documented machine model.
- `influenced_by` left blank for all four: broad biographical musical models and critical resemblance are not album-specific influence testimony.
- `bossanova` on *Stato di necessità* is a scoped genre evidence for **Parole di burro**, not a blanket album classification; similarly grunge on *Mediamente isterica* is restricted to selected tracks.
- **Release-year source discrepancy:** AllMusic sometimes displays reissue dates for *Confusa e felice* and *Stato di necessità*. Follow original artist discography 1997 and 2000.

## Import sequence
1. Create `docs/descriptors/carmenconsoli.csv` from `carmenconsoli_phase01_rows_ONLY.csv` with UTF-8 no BOM and 27 columns.
2. Apply only missing catalogue addition.
3. Check all genre/voice/instrument/production tokens against repository vocabulary; no new tokens expected.
4. Run `scripts/validate-descriptors.ts` according to the repository build instructions; repository validator has not been run here.
5. Review album-scoped instrumentation, soundtrack/alternate-language records and weaker editorial similarity before switching status to `reviewed`.

## Next chronological phase
*L’eccezione* (2002), *Eva contro Eva* (2006), *Elettra* (2009), *L’abitudine di tornare* (2015). Live *L’anfiteatro e la bambina impertinente* (2001) is excluded by default; separately examine if judged historically indispensable. Later: *Volevo fare la rockstar* (2021), *Amuri luci* (2025). No previous phase rows repeated.

# CLAUDE IMPORT — Blur Fandome Phase 01

**Source repository and branch (read-only):** `giampierofiorelli/Fandome`, branch `descriptors`, checked 26 Oct 2026. No repository mutation performed.

## Import
- Artist ID: `blur` (confirmed in `src/data/catalog.ts`).
- Add exactly the four rows from `blur_phase01_rows_ONLY.csv` to `docs/descriptors/blur.csv`; this file did not exist at research time. Preserve 27-column order exactly. All rows `status=draft`.
- Catalog already contains all four albums. **No catalog additions needed**. Album IDs are exact catalog slug derivation (`blur-leisure`, `blur-modernlifeisrubbish`, `blur-parklife`, `blur-thegreatescape`).
- No co-billed albums; no `coBilled.ts` modification.
- Add any new tokens to genre type and genre families *if needed*: `baggy`, `noisepop` (not present in `src/data/scenes.ts` at time of research). `baggy` means late-1980s/early-1990s UK dance-influenced indie rock; `noisepop` means noise pop. **Do not silently map them to existing tokens.**
- Instruments: no new instrument tokens required.
- Production: no new tokens required. The `akais1000` and `moog` tokens already exist. MusicBrainz specifies S1000 on Colin Zeal; check if model detail requires added confidence annotation.

## Caveats
- Do not import later expanded 2012 bonus material as part of the 1991–95 album rows.
- `Leisure` genre `britpop` is a retrospective broad classification only; shoegaze and baggy are principal.
- `Modern Life Is Rubbish` track production splits between Street, Blur/Smith and Lovell. An alternate release credits Langer/Winstanley on a Chemical World version; not automatically applicable to original UK album.
- `Parklife` includes production by Stephen Hague, Blur and John Smith for specific track(s), principally To the End, not album-wide. Strings/horns, instrument and studio-machine information is supported in sources notes.
- `The Great Escape` 1995 original booklet credits Street as producer and Smith as engineer. Do not elevate engineers to producers.
- AllMusic indexed content is accessible through search, while direct automated open may return 403; user may open source in browser.
- All values are album-level editorial interpretations except where genre scope explicitly limited in `genre_evidence.csv`. Check `influenced_by` as documented critical antecedents, never confused with producer or merely `sounds_like`.

## Files
1. `CLAUDE_IMPORT.md`
2. `blur_phase01_rows_ONLY.csv`
3. `blur_phase01_sources.csv`
4. `blur_phase01_genre_evidence.csv`
5. `blur_phase01_evidence-notes.md`
6. `blur_phase01_catalog-audit.csv`

## Next batch (phase02, no repetition)
`Blur` (1997); `13` (1999); `Think Tank` (2003); `The Magic Whip` (2015). Then `The Ballad of Darren` (2023).

Run `scripts/validate-descriptors.ts` on the GitHub branch after import.

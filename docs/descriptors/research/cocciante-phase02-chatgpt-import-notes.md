# CLAUDE_IMPORT — Riccardo Cocciante, phase 02 (incremental)

**Repository:** `giampierofiorelli/Fandome`, branch `descriptors`. **Artist ID `cocciante`**, not `riccardococciante`. Last checked **2026-10-30**. The current `docs/descriptors/cocciante.csv` returned GitHub 404; this is NOT proof earlier delivered ZIPs were merged. Recheck branch just before applying changes, do not overwrite/duplicate rows already there.

## This ZIP: exactly 4 original studio albums, only these IDs

| ID | Album | Original year | Catalogue | Descriptor status on last check |
|---|---|---:|---|---|
| `cocciante-concertopermargherita` | Concerto per Margherita | 1976 | Already present | Missing |
| `cocciante-riccardococciante` | Riccardo Cocciante | 1978 | **ADD** | Missing |
| `cocciante-eiocanto` | ...E io canto | 1979 | **ADD** | Missing |
| `cocciante-cervoaprimavera` | Cervo a primavera | 1980 | Already present | Missing |

**Prior delivered phase 01 (DO NOT repeat):** `cocciante-mu` (1972), `cocciante-poesia` (1973), `cocciante-anima` (1974), `cocciante-lalba` (1975). The phase01 rows may not yet be merged. If adding catalog albums, preserve those phase01 additions if present. Insert only the two absent 1978/1979 titles into the existing artist's album list in chronological order.

**Not eligible in this phase:** The 1981 `Q Concert` EP with Rino Gaetano and New Perigeo is live/co-billed, so excluded. Neither 1977/1978 `A mano a mano` single nor alternative foreign-language reissues is a separate new studio album. A 2026 new studio LP (*Ho vent’anni con te*) means future phases should eventually reach 2026; do not stop at 2005.

## Six ZIP files (do not treat rows_ONLY as full replacement)

1. `CLAUDE_IMPORT.md` (instructions, conflicts, checks)
2. `cocciante_phase02_rows_ONLY.csv` (exactly **4 NEW rows**, 27 columns; all `status=draft`)
3. `cocciante_phase02_sources.csv` (source URLs, what they substantiate)
4. `cocciante_phase02_genre_evidence.csv` (one evidence entry per genre token)
5. `cocciante_phase02_evidence-notes.md` (per-album scale, vocal, instrumentation, production, sounds_like, landmark rationales)
6. `cocciante_phase02_catalog-audit.csv` (catalog import checks and proposed actions)

## Critical handling

- **1976 production:** Marco Luberti is credited producer, while Vangelis arranged, engineered and coordinated. The casual VICE review calling Vangelis a producer does not supersede original RCA sleeve and Sony label credits. The English Chamber Choir is a vocal chorus, not instruments `orchestra`.
- **1978 production:** BOTH Marco Luberti and Giacomo Tosti listed as producers by original Sony track metadata; Giovanni Tommaso arranges/conducts only. Album original LP is 1978 even though single was 1977. Original `A mano a mano` is piano-led; later Rino Gaetano recording is a cover, never an influence.
- **1979 production:** Marco Luberti only. Dino Kappa is consultant and bassist; Cocciante arranger/pianist/vocalist, not a named record producer. AllMusic's 2003 date is a reissue, RCA PL31421 original is 1979.
- **1980 production:** Shel Shapiro (= **Norman David Shapiro**, *same person*) principal producer; Serge Perathoner credited producer on two tracks, David Rose co-producer on those two; retain all three without counting Shapiro twice. Mogol writes nine lyrics; the PFM track *Suonare suonare* is a cover, not influence. Specific synthesized and acoustic instruments detailed in notes, none invented from band biographies.
- **Genre tokens:** `krautpop` for the 1980 title track (VICE expressly names it); `stornello` for 1978 *Stornello d'amore*. Both are **already present** in `src/data/scenes.ts` as verified in the final October 30 GitHub check. No additions necessary. All instrument/production tokens already exist as well.
- **Genre scope:** 1980 album includes some documented new wave, jazz fusion, funk and disco; they apply to named tracks, not all ten. Avoid assigning `rock` as an umbrella album genre just because the PFM source song is a rock cover. Other albums remain primarily pop/cantautore.
- **`sounds_like`:** only direct critic sound analogies, song weight `[1/10]`. This is not a list of artists covered or worked with. **All `influenced_by` blank:** none identified by the artist/producer as an album-specific influence.
- **Voice blank on the 1978 LP:** cannot infer a record-level voice type merely from artist identity. Unknown production fields likewise blank.
- **Landmarks:** 1976 and 1980 both `1`, with independent *album-level* critical support; 1978 and 1979 `0` even though major songs emerged there. The eight 0–5 scales have independent explanations in evidence-notes and are not assumed from genre names.

## Import and validation

Update `src/data/catalog.ts` as above. `krautpop` and `stornello` are already in `src/data/scenes.ts`; do not add duplicate token definitions. Append CSV entries to `docs/descriptors/cocciante.csv` **without duplicating earlier rows**. Match exact 27-column header. Validate every row with `scripts/validate-descriptors.ts` and follow `docs/album-descriptors-guide.md`. The present ZIP has been checked for column counts, IDs, source URL integrity, genre evidence coverage, score ranges, duplicate IDs, and exactly six files.

**Next chronological phase:** `Cocciante` (1982), `Sincerità` (1983), `Il mare dei papaveri` (1985), followed by 1986 releases after verifying whether they are new studio works or compilations/live.

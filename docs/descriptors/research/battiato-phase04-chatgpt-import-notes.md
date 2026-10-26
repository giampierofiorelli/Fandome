# CLAUDE_IMPORT — Franco Battiato Phase 04 (STRICTLY incremental)

Research performed **26 October 2026**; Fandome GitHub branch `descriptors` read-only. Six files only, all present inside the single ZIP. Do not overwrite earlier Phase 01, 02 or 03 descriptors or recreate their album rows.

## Phase contents

| Album ID | Title | Year | Type | Catalog action |
|---|---|---:|---|---|
| `battiato-orizzontiperduti` | Orizzonti perduti | 1983 | studio | Already exists; retain |
| `battiato-mondilontanissimi` | Mondi lontanissimi | 1985 | studio | ADD |
| `battiato-genesi` | Genesi | 1987 | **live** | ADD (major 1987 first-opera cast recording; live recorded) |
| `battiato-nomadas` | Nómadas | 1987 | studio | ADD (distinct 1987 Spanish-language re-recording project) |

Original artist id: `battiato`. Existing live GitHub `docs/descriptors/battiato.csv` was **read** and contained Phase 01 only as of the check; these Phase 04 rows do not overlap its four entries. Phase 02/03 packages may not yet be imported: do not assume published repository reflects all packages already delivered.

## Contents of ZIP

1. `CLAUDE_IMPORT.md`: this manifest, import caveats, taxonomy and next phase.
2. `battiato_phase04_rows_ONLY.csv`: required 27 columns + **four new rows ONLY**.
3. `battiato_phase04_sources.csv`: per-album authoritative links and evidence grades.
4. `battiato_phase04_genre_evidence.csv`: **one record for each genre token** actually present in the four rows, with track/whole-album/texture scope and caveats.
5. `battiato_phase04_evidence-notes.md`: decisions for every non-obvious instrument, device, genre, recording, producer, language, rating and critical dispute.
6. `battiato_phase04_catalog-audit.csv`: existing vs new album IDs.

## Catalogue actions and cross-billing

Retain existing 1983 `Orizzonti perduti`; add `Mondi lontanissimi` (1985), `Genesi` (1987, live), and `Nómadas` (1987, studio) with matching exact titles and years. **No album credited jointly** to a second lead artist, so no `coBilled.ts` additions. *Nómadas* was issued ℗1986 in **Spain in 1987**, contains eight Spanish re-recordings from assorted earlier LPs and a Camisasca-composed new title track. The name **Nómadas** is a studio-language album, not an alias of the 1985 LP *Mondi lontanissimi*.

**Genesi** was recorded live at the Parma first performances (29 April, 3 and 5 May 1987) and released Fonit Cetra 1987. `type=live`, `landmark=1` accurately applies the user's exception for **important live releases** because it documents Battiato's first staged opera. If the product requires opera cast albums to be `studio` by policy, document policy change instead of silently relabelling this live recording.

## Tokens and possible validator change

New genre: **`classicalpop`** for AllMusic's *Mondi lontanissimi* genre label, as already proposed in previous Phase 03. Add only if missing, with proposed `GENRE_PARENTS.classicalpop=['pop','classical']`; update genre validator allowlist if needed.

New production: **`ppgwave`** for PPG Wave synthesis/programming on *Orizzonti perduti* (do not conflate with Fairlight); **`digitalediting`** for explicitly credited digital editing of 1987 original *Genesi* recording. Add in `production.ts` / allowed set as appropriate; **do not add variants if they are now already present**. Existing `fairlight`, `programming`, `synthprogramming`, `stringarrangements`, `concertrecording`, `sampling` should pass unchanged. No new instrument tokens.

## Evidence cautions that matter for ranking

- *Orizzonti perduti*: artist website says electronically generated arrangements; **original LP credits/La Stampa separately document violin and percussion**. Do not silently eliminate these instruments. PPG Wave and 1982–85 Fairlight evidence has medium model/date confidence; specific non-credited machine models must remain absent. `rock` and `poprock` reflect broad original-release genre shelving only and come last.
- *Mondi lontanissimi*: Giusto Pio conducts/arranges, **Angelo Carrara** is producer; David Cole only mixes. `newage`, `easylistening`, `poprock` and genre `neoclassical` come from AllMusic's broad categorization and are weighted late. No invented 1985 drum machine model.
- *Genesi*: Fonit Cetra credited the theatrical **producing institution**, not an individual record producer; `producers` deliberately blank. Published texts span multiple source languages, but verify the **sung language** of each act if tightening `language` beyond what label copy reports. First recording includes choral soloists/orchestra plus samplers/digital editing.
- *Nómadas*: 1987 original LP **arranger** credits Battiato/Pio do not certify music producer; AllMusic separately indexes **Franco Battiato** as a 1987 `Producer`. This producer field is medium confidence. No record-specific verified player/production devices, so **both fields deliberately empty**. `latin` refers to record catalog genre, not Latin percussion. Only Pop, Ballad and Latin genre names supported for this particular 1987 album. Synthpop/electropop inheritance is discussed but not added to this row without album-specific genre evidence.
- Four `influenced_by` blank without album-level explicit musician/qualified-critic influence evidence. Editorial `sounds_like` is not lineage.

## Validate after import

1. Merge only Phase 04 rows into `docs/descriptors/battiato.csv`, checking keys for duplicates.
2. Add the 3 missing catalogue albums with original release titles; keep existing album id for Orizzonti.
3. Register proposed missing tokens with parent mappings/validator allowlist, or omit corresponding descriptor token only with a recorded review decision.
4. Run `scripts/validate-descriptors.ts` and the repository tests in local checkout. ZIP structural checks **cannot** substitute for those code/tests.

## Phase 05 (next)

Chronological next original album projects to investigate: **Fisiognomica** (1988), **Come un cammello in una grondaia** (1991), **Gilgamesh** (1992, second opera; audit whether recording is stage/live), **Caffè de la Paix** (1993). Separately **Giubbe rosse** (1989) is live and requires an explicit landmark exception; **Messa arcaica** (1994) and the 1985 English/Spanish-language variants **Echoes / Ecos de Danzas Sufi** should be audited before adding, without relisting the current 1987 Spanish album.

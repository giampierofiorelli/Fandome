# Fandome: Franco Battiato — Phase 01 import

Scope: **four new albums only**, chronological, no material from earlier batches. Research conducted against branch `descriptors` on 2026-10-26. The `docs/descriptors/battiato.csv` raw path returned HTTP 404; GitHub directory listings were restricted in the web tool, so a separate existence audit of differently named files is NOT proven. Verify before importing.

## Rows to import

| album_id | title | year | type | catalog action |
|---|---|---:|---|---|
| `battiato-fetus` | Fetus | 1972 | studio | add |
| `battiato-pollution` | Pollution | 1973 | studio | add |
| `battiato-sullecordediaries` | Sulle corde di Aries | 1973 | studio | add |
| `battiato-clic` | Clic | 1974 | studio | add |

No co-billed albums in this phase; all original releases are credited to **Battiato / Franco Battiato**. Pino Massara is credited producer on all four original works. Musician and engineer credits are not added to `producers`.

## Year conflicts: important manual decision

**Fetus**: official artist biography and some original-pressing catalogues give **1971**. Apple/Sony phonogram metadata, ItalianProg and specialist retrospective criticism give **1972**. Chosen import year **1972** using later consolidated catalogues and the 1972 phonogram metadata, but **not conclusively settled**. Original-pressing transcriptions may list 1971.

**Pollution**: official biography, Superior Viaduct and a historian’s original-pressing entry give **1972**. ItalianProg documents that the original label says **1973** and the runout is dated 16 January 1973; Apple/Sony and an AllMusic digital edition also give 1973. Chosen **1973**, with a **material unresolved disagreement**. If Fandome policy favours the official artist biography rather than issue/runout evidence, reconsider BOTH dates as a pair before import. Do not silently mix chronologies.

**Sulle corde di Aries** 1973; **Clic** 1974 are comparatively stable. Clic's **1974 UK Island LP is an alternative four-track programme**, not the original seven-track Bla Bla album; do not create another row for it.

## Tokens to check/add before running validator

The repo guide and `src/data/instruments.ts` / `production.ts` are not perfectly aligned in their advertised vocabularies. These tokens are in the phase CSV but absent from the smaller `instruments.ts` or `production.ts` data fetched during research. Claude should compare against the current branch before modifying anything:

- **Genre to add:** `avantfolk` (reissue label identifies 'avant-folk' across early albums), `acidfolk` (AllMusic specialist describes passages on *Sulle corde di Aries*).
- **Instrument to add or reconcile:** `violin`, `timpani`, `kalimba`, `mandola`, `cello`, `oboe`. The guide already names several of these, but the fetched `instruments.ts` did not. **Do not rename mandola to mandolin:** instrument credit specifies mandola.
- **Production to add or reconcile:** `emsvcs3`, `overdubbing`, `backmasking`. The guide lists these, but the fetched `production.ts` appeared to omit them.

Do not treat `sampling` as evidence of a digital sampler: it refers to analogue quotation, source recording fragments, and tape/radio montage. The `emsvcs3` token specifically denotes the EMS VCS 3 synthesizer; it is supported for each album.

## Scope and evidence policies

- Only the **original seven-track Italian Clic** was analysed, not the UK Island tracklist.
- `sounds_like` comparisons include artists mentioned by critics and label editorial notes as sonic parallels; they **are not asserted influences**.
- `influenced_by` is sparse. Stockhausen is documented via qualified sources and *Clic*'s dedication; Johann Sebastian Bach is documented as the musical source of material used in *Fetus*. Others left blank absent direct evidence.
- Numeric scales are cautious album-level assessments from critic analysis, not extracted factual measurements. `high` overall means multiple independent professional sources, not every genre or numeric interpretation is certain.
- `avantfolk` and `acidfolk` have low precedence in genre order where described only as textures / a subset of tracks. Some electronic genre labels are cross-classifications from detailed specialist descriptions; see per-genre source and scope.
- Fetus credits of some band members are not instrument-specific on original sleeve; its instrumentation is backed by professional review descriptions and related credit sources. Some `voice` characterizations remain editorial judgments.
- No unverified audio-workstation or modern hardware names were introduced.

## Future-release coverage / discography plan (not included in this ZIP)

The full studio discography and selected artistically distinct releases will be treated chronologically in subsequent phases, without automatic inclusion of every EP, retrospective compilation or concert record. Later studio titles to scope include: *M.elle le “Gladiator”*, *Battiato*, *Juke Box*, *L'Egitto prima delle sabbie*, *L'era del cinghiale bianco*, *Patriots*, *La voce del padrone*, *L'arca di Noè*, *Orizzonti perduti*, *Mondi lontanissimi*, *Fisiognomica*, *Come un cammello in una grondaia*, *Caffè de la Paix*, *L'ombrello e la macchina da cucire*, *L'imboscata*, *Gommalacca*, *Fleurs*, *Campi magnetici*, *Ferro battuto*, *Fleurs 3*, *Dieci stratagemmi*, *Il vuoto*, *Fleurs 2*, *Apriti sesamo*, and *Joe Patti's Experimental Group*. Screen relevant major classical projects separately (*Genesi*, *Gilgamesh*, *Messa arcaica*, *Telesio*) and substantial collaborations; do not misclassify them as ordinary pop studio albums. **Feedback** is predominantly a compilation of material already analysed; do not duplicate. *Foetus*, the later English-language version of *Fetus*, is a separate recording/version to review as an exceptional non-core candidate, not a second original LP. *Torneremo ancora* (2019) mixes new orchestral interpretations and a new song; review for inclusion later rather than treating it automatically as fully new studio material.

## Next phase (Phase 02)

1. `M.elle le “Gladiator”` (1975)
2. `Battiato` (commonly 1977; earlier dates reported in the official artist bio)
3. `Juke Box` (commonly 1978; earlier dates reported in the official artist bio)
4. `L'Egitto prima delle sabbie` (1978)

Resolve original-release dates on those records before assigning their IDs. Do not bring Phase 01 rows forward.

## Inputs and known limits

Fandome catalogue/guide/validator are linked above and cited in the evidence files. Original sleeve credits are mirrored by Strawberry Bricks / archival pressing databases. The direct GitHub directory pages under `docs/descriptors` and `docs/descriptors/research` did **not** open via web; neither repository file was edited. No second-person review or execution of the project's real TypeScript validator has occurred. CSV data has been structurally validated (27 columns, status draft, unique IDs, notes max 15 words).

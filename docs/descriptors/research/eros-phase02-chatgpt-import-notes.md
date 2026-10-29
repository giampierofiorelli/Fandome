# Fandome import — Eros Ramazzotti, phase 02

**Artist ID:** `eros` (catalog.ts). **Research cut-off:** 29 October 2026. **New descriptor rows:** 4. **CSV format:** 27-column Fandome schema. All rows `draft`. These rows are strictly phase 02 only; **do not import phase 01 again**.

## This phase's rows (chronological)

1. `eros-inognisenso` — **In ogni senso** (1990, studio), already in catalogue.
2. `eros-tuttestorie` — **Tutte storie** (1993, studio), already in catalogue.
3. `eros-dovecemusica` — **Dove c’è musica** (1996, studio), already in catalogue.
4. `eros-stilelibero` — **Stilelibero** (2000, studio), already in catalogue.

**Catalogue additions required for THIS phase:** none. These albums were verified in `catalog.ts` on `descriptors`. `docs/descriptors/eros.csv` returned HTTP 404, i.e. there was no independently accessible already-completed Eros descriptor file in that location as of this check. Before import check for concurrent changes.

**Co-billed albums:** none. The Cher duet on *Stilelibero* is a track-level guest, not a collaborative **album**. Antonella Bucci's duet on *In ogni senso* also does not make it co-billed.

**New genre tokens:** none (`softrock`, `poprock`, `adultcontemporary`, `ballad`, `italianpop`, `europop`, `adultalternativepoprock`, `alternativerock`, `latinpop`, `pop`, `eurodance` already occur in the checked `scenes.ts`). **New instrument tokens:** none. **New production tokens:** none. For `instruments`, `production`, and `genres`, the supplied tokens use `|` delimiters and all are from the checked repository lists. No model-specific equipment is asserted without evidence.

**ARTIST INFLUENCES:** not repeated here because the phase 01 `CLAUDE_IMPORT.md` already contains artist-wide cited influences. All four `influenced_by` album fields stay **empty**: no verified interview directly ties a musical influence to these specific albums. Producers, guest singers and editorial sound comparisons have not been turned into influences.

## Caveats / import guidance

- **1990:** original 1990 LP/CD versus an AllMusic 1991 album date and Qobuz listing 1989. Trust **1990** based on period issue data and original liner credits. Guest Antonella Bucci sings “Amarti è l'immenso per me”; recording language remains Italian. Recording documentation covers synth bass, vocals sampler, programming, strings and real horns, but no model-specific sampler.
- **1993:** **credit conflict:** original Italian vinyl documentation labels Adelio Cogliati `Co-producer`, while Estatica and Qobuz reproduce `Assistant Producer` for the original CD. He is provisionally present in the `producers` row because *one original pressing* explicitly qualifies him as co-producer. **Claude should verify the source sleeve** and remove him if the co-producer label is not a reliable primary credit. Piero Cassano definitely produced the record. AllMusic has some questionable alternative/Latin metadata: those genres are at the end with exact caveats in `genre_evidence` and `evidence-notes`. Original *Tutte storie* is Italian, not the separately released Spanish *Todo historias*.
- **1996:** Eros himself is credited producer, whereas Celso Valli is arranger and Luca Bignardi programmer. Original 12-song *Dove c'è musica* includes the **Spanish-language** “Yo sin ti”: `language=it|es`. The 1997 *Eros* collection of re-recordings/hits is excluded per project rules.
- **2000:** multi-producer album, by track: **Trevor Horn (1,4,11), Rick Nowels (2,6), Celso Valli (3,7,9), Claudio Guidetti (5,8,10,12), Charles Judge (credited co-producer on track 2)**. Co-producing on track 2 is sufficient for inclusion in the album-level field. “Più che puoi” with Cher contains both Italian and English vocal passages, `language=it|en`. AllMusic's dance comparison is only for the opener, therefore `eurodance` deliberately goes **last**. The CD-ROM/video material on enhanced discs is not an album track.
- **Source quality:** Original LP/CD transcriptions, Qobuz track credits, MusicBrainz credits, contemporaneous Rockol reporting and AllMusic reviews have been cross-checked. Collector style tags carry lower evidentiary weight than sleeve credits; exact-release inconsistencies are recorded in the notes. `sounds_like` represents **our editorial approximation**, not a cited artist influence.
- **All 8 scales** are editorial 0–5 assessments from arrangements/critical characterisation, not extracted measurements. `confidence=medium` reflects uneven album-wide critical treatment, despite strong personnel sources.

## Next phase (03)

`eros-9` — **9** (2003); `eros-calmaapparente` — **Calma apparente** (2005); `eros-alieradici` — **Ali e radici** (2009); `eros-noi` — **Noi** (2012). **All four will need adding** to the 7-title artist list in `catalog.ts` if unchanged. Do not treat the 2007 *E²* greatest-hits/re-recordings set as a studio album in phase 03; live albums and compilations are still excluded. Spanish counterpart editions are not duplicated by default.

## Included files

- `eros_phase02_rows_ONLY.csv`: **only 4 new descriptor rows**.
- `eros_phase02_sources.csv`: album-level and per-track source links with evidence type and strength.
- `eros_phase02_genre_evidence.csv`: one genre attribution per row, source and scope.
- `eros_phase02_evidence-notes.md`: attribution judgments and documented disagreements.
- `eros_phase02_catalog-audit.csv`: four phase 02 catalogue IDs plus phase 03 **audit-only** preview.

**Import:** validate catalogue and exact IDs, check credit conflicts, then import `rows_ONLY.csv`, run standard descriptor validator/tests. Do not read `catalog-audit.csv` as descriptor rows.

## Claude import note

- No catalogue changes (all four albums already listed).
- sounds_like emptied on all four (Richard Marx, Umberto Tozzi, Raf, Laura Pausini, Bryan Adams): ChatGPT calls them "our editorial approximation". The reception pass looks for critics' comparisons.
- Producers: Eros Ramazzotti dropped as self-credit (Dove c'è musica, now without producer). Adelio Cogliati on Tutte storie kept pending the credit check (co-producer on one pressing, assistant producer on others).

## Claude enrichment

- Reception from hitparadeitalia.it and FIMI year-end, it/en.wikipedia, AllMusic (via en.wikipedia and Qobuz), l'Unità archive (1990, 1993, 1996), Music Week, Rockol, Sky TG24.
- No album-level critic comparison found: sounds_like stays empty (Battisti only for Quasi amore on Dove c'è musica, l'Unità 1996). Eros naming Lenny Kravitz and Aerosmith as what he was listening to at the Tutte storie launch is not tied to the album: not added.
- Producers: Adelio Cogliati removed from Tutte storie (Estatica transcription: "assistenza alla produzione"; Discogs entries disagree with themselves). Dove c'è musica produced by Eros alone (Celso Valli arranger and "realizzazione"). Stilelibero producers confirmed by track (Discogs 5602609).
- Added from credits and reviews: In ogni senso fretless bass (Pino Palladino), acoustic guitar; Tutte storie soul (Perugini: "ballata… in chiave soul"), Chapman Stick (Tony Levin), strings, string arrangements, drum programming; Dove c'è musica soul-pop, country, salsa, mambo (new token, parent latin), latin (l'Unità 1996; Discogs), sampling, string and horn arrangements, strings, synth bass, electric piano; Stilelibero accordion (replacing harmonica: Fio Zanotti plays accordion), autoharp, baritone guitar, electric piano, synth bass, fretless bass, electronic drums, orchestra, Pro Tools, string arrangements, soul, latin. Organ removed from Stilelibero (no credit).
- Stilelibero landmark set to 0 (no source calls it defining; Eros himself: "fatto di corsa").

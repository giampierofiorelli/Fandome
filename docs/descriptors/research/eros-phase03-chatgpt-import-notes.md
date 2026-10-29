# Fandome import — Eros Ramazzotti, phase 03

**Artist ID:** `eros`, verified in Fandome `src/data/catalog.ts` branch `descriptors`. **Research cut-off:** 29 October 2026. **New descriptor rows:** 4. **Schema:** 27 columns, all `draft`. **Incremental:** do not reimport phases 01/02. No files on GitHub have been changed by this research.

## Four chronological studio albums

1. `eros-9` — **9** (2003): already in catalogue, but **not yet in `docs/descriptors/eros.csv`**.
2. `eros-calmaapparente` — **Calma apparente** (2005): **ADD to catalogue**.
3. `eros-alieradici` — **Ali e radici** (2009): **ADD to catalogue**.
4. `eros-noi` — **Noi** (2012): **ADD to catalogue**.

**Caution:** The live `catalog.ts` checked in this phase contains the album *9* in the artist's nine-title array, although phase 02's prospective note said all four would need addition. This phase's fresh catalogue audit is authoritative. After checking for concurrent updates, add only the three missing title/year entries to the existing `eros` artist catalogue item **before** running descriptor validation. Preserve existing IDs, artist metadata and earlier album titles.

**Existing descriptor file:** `docs/descriptors/eros.csv` currently contains four older albums in phase 01 only (Cuori agitati, Nuovi eroi, In certi momenti, Musica è). Phase 02's local ZIP should remain separately incremental. Always re-check for concurrent imports before merging phase 03.

**Co-billed albums:** none. Anastacia, Nicole Scherzinger, Club Dogo, Il Volo, and Hooverphonic are guests on individual songs, not co-billed album artists. Separate Spanish-language editions are **not** new artist album rows.

**New genre, instrument, production tokens:** none proposed. All used tokens appear in the current Fandome guide and corresponding registries; notably `aor`, `symphonicrock`, `powerballad`, `electrorock`, `rap`, `modularsynth`, `protools` exist. Claude should validate against the latest codebase before import.

**Artist-wide influences:** Not repeated. `influenced_by` is empty for each album: specific recordings lack attributable statements about artists who directly influenced their creation. `sounds_like` is an **editorial similarity assessment**, not evidence of artistic influence, guest appearances, or personnel.

## Edition and credits checks

- **9:** original Italian release 13 songs (2003). Ramazzotti and Claudio Guidetti are principal producers; Celso Valli is credited *co-producer* on release/track data. Do not mistake Valli's orchestral and keyboard arrangement roles for the sole reason he is in `producers`; co-production is independently verified. AllMusic's Latin Pop and Adult Alternative Pop/Rock tags are metadata, weaker than the original Soft Rock and contemporary melodic pop-rock descriptions.
- **Calma apparente:** original 2005 Italian studio release 13 songs, including bilingual Italian/English duet with **Anastacia**. Rockol's overview calls Eros producer with Guidetti/Valli assisting; separate credits explicitly designate Guidetti and Valli producers on tracks. All three are included. `protools` is **credited editing technology**, not presumed from recording period. Do not conflate the separate Spanish *Calma aparente*.
- **Ali e radici:** original **2009 physical album has 11 songs**, although the artist's modern listing has 12, adding **Linda e il mare**, an initially digital bonus track. The original 11 songs are the reference for overall description. The production involves Ramazzotti/Guidetti/Canova with **Paul Buckmaster** also credited as producer/co-producer for a limited share of the record and string arrangements. **Track allocation of his co-production is inconsistent** between Musicbase (track 4) and Qobuz (track 11); keep a human review flag and do not assert a track number as settled. Modern electronic arrangements explicitly differ from the classic/live-band sections. `electrorock`, `symphonicrock`, `powerballad` in genre tail are one-track stylistic terms from the AllMusic review.
- **Noi:** 14-track original Italian edition released **13 November 2012**. Production credited to Eros and Luca Chiaravalli; **Jeremy Wheatley was a mixing collaborator, not automatically an album producer**. Spoken part of `Io sono te` is **Giancarlo Giannini (Italian original)** and **Andy Garcia (international and Spanish versions)**. Original Italian *Noi* includes some English via Nicole Scherzinger duet, so `language=it|en`, but this is **not** the standalone Spanish-language *Somos*. The `rap` genre and `rap` voice refer only to Club Dogo's cameo. An Il Volo feature motivates the `choral` voice term, but it does not make the full album classical/operatic pop.
- **Technical claims:** All instrument/production tokens are limited to documented credits, production interviews and review specificity. Missing `production` on *Noi* is deliberate: no specific equipment, recording technique or processing was sufficiently established from the primary label sources; don't invent Pro Tools/autotune. Personnel for *Noi* draws partly on a secondary transcription; check printed liner before treating every credited brass/woodwind entry as high confidence.
- **Scales:** All eight 0–5 scores are human editorial judgments of the album-wide musical character based on cited reviews and credits, not measurements. `confidence=medium` marks their subjective synthesis and the uneven strength of edition/genre evidence.

## Next phase (04)

**Perfetto** (2015), **Vita ce n’è** (2018), **Battito infinito** (2022). The later **Una storia importante** (2025) is an official mixed project with **new material and newly recorded past hits**, not a straightforward all-new studio set. Assess against Fandome's no-compilation rule before deciding whether to append it as a fourth phase-04 row; do not add it automatically. Exclude the *E²* (2007) greatest-hits/re-recordings collection and all live compilations.

## ZIP inventory and import steps

- `eros_phase03_rows_ONLY.csv` — four new 27-column descriptor rows.
- `eros_phase03_sources.csv` — album-specific URLs, credit classes, evidence strength.
- `eros_phase03_genre_evidence.csv` — individual genre, scope, and source for every row genre.
- `eros_phase03_evidence-notes.md` — evidence-sensitive editorial explanations.
- `eros_phase03_catalog-audit.csv` — catalogue existence and additions; **not** a descriptor table.

Import instructions: (1) refresh GitHub branch state; (2) add three missing catalogue entries; (3) merge only this phase's rows into `docs/descriptors/eros.csv` without duplicating older rows; (4) inspect the flagged Buckmaster and genre tags; (5) run the Fandome descriptor validator and tests. No published-site or repository modification was performed here.

## Claude import note

- Added Calma apparente (2005), Ali e radici (2009) and Noi (2012) to the catalogue.
- sounds_like emptied on all four (Richard Marx, Bryan Adams, Laura Pausini, Tiziano Ferro): ChatGPT calls them an "editorial similarity assessment". The reception pass looks for critics' comparisons.
- Producers: Eros Ramazzotti dropped as self-credit. Paul Buckmaster (Ali e radici, one track, which one disputed) kept pending the credit check.

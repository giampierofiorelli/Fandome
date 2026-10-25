# Fandome — Eiffel 65 — Phase 01 (incremental)

Research cutoff: **25 October 2026**. Target branch: `descriptors`; **read-only research delivery**, no GitHub changes performed.

## Exact contents

1. `eiffel65-europop` — **Europop** (1999, studio) — **already in catalogue**.
2. `eiffel65-contact` — **Contact!** (2001, studio) — **already in catalogue**.
3. `eiffel65-eiffel65` — **Eiffel 65** (2003, studio) — **ADD to catalogue**.

The only input rows are those three in `eiffel65_phase01_rows_ONLY.csv`. Never copy rows from other artists or phases.

## Additions and token audit

- New catalogue entry: `['Eiffel 65', 2003]` in the `eiffel65` artist's album list. Preserve the current artist ID `eiffel65` and the existing album IDs for Europop and Contact!.
- New genres used in this phase: **`italodance`** (original pressing documentation and album reviews) and **`frenchhouse`** (official band's description of *Contact!* as influenced by French house). `frenchhouse` should have `house` as parent; `italodance` has dance/eurodance affinities. Both require extension of `Genre` in `scenes.ts`, `GENRE_PARENTS` in `genreFamilies.ts`, the validator's `GENRES` list, and any relevant display labels before validator execution.
- New production token: **`harmonizer`**. Maurizio Lobina explicitly identifies the keyboard-controlled vocal-harmony device used in “Blue” as an **harmonizer**, although contemporary reviews regularly call its audible result a **vocoder**. Add it to `production.ts` and validator. The vocal labels deliberately coexist because they report *different forms of evidence*, not verified different pieces of hardware.
- New instrument tokens: **none**.
- Co-billed albums to add to `coBilled.ts`: **none**. Franco Battiato is a guest on one *Contact!* track, not a co-billed album partner.

## Album and edition caveats

**Europop (1999)**: Debut has varying national sequences, extra mixes and release dates. Use original 1999 album grouping, not 2000–04 bonus issues. 1999 label credits vary over what constitutes producer, artistic producer or executive producer; rows include people explicitly named as producers on one or more album tracks by credit sources. Do not take a composer/mixer credit alone as a producer credit. The best-known vocal sound is on *Blue*, not necessarily on every track; `harmonizer`, `vocoder`, `autotune` are sourced to this album's characteristic single and primary interviews, with differing descriptions of the device. The genre labels `trance`, `electro`, `deephouse` belong to edition descriptions and/or a subset of tracks, not the album's dominant sound.

**Contact! (2001)**: Italian/European edition has 17 tracks and includes **“80's Stars” featuring Franco Battiato**. Some international editions substitute **“World in the World”**. Original BMG booklet transcriptions list **Massimo Gabutti and Luciano Zucchet as *executive* producers**, so do NOT add them to the `producers` cell on this evidence alone. Also exclude Angelica Villella / Mauro Di Deco, who are credited as mixers. `sampling` is supported by a secondary account of sampled sounds mapped into instruments; no specific sampling-machine model is verified. `frenchhouse` is a documented stylistic influence, not evidence that every track is French house.

**Eiffel 65 (2003)**: Band's own biography and contemporaneous **30 May 2003 label announcement** identify a May release, whereas some AllMusic/Qobuz database entries display **8 April 2003**. Both agree on **2003**. Rockol's original release list has **13 tracks**, mostly Italian. The 2004 *Eiffel 65 (Special Edition)* and English-language re-recordings are **variants/reissues, not a fourth independent studio album**. Qobuz credits were read from the 2003-original tracks on disc 1 of the later special edition, NEVER from disc 2. The production cell is intentionally **blank**: available 2003 track credits confirm producer names and recording arrangements but do not uniquely establish a specific machine, software or effect across the original album. The instruments cell is based on contemporary-band keyboard duties coupled with an album-focused retrospective of Maurizio's synthesizer role, not detailed session sheets. Treat as provisionally documented and do not expand it with imagined drum machines, guitars or piano. `electropop` and `italodance` for the third record have relatively weak genre evidence, explicitly exposed in genre evidence and notes.

## Review tasks for Claude

1. Add the 2003 catalogue album and new genre/production tokens first. Check or add parent mappings/labels and validator acceptance of the new tokens.
2. Import **only these three rows**, keep `status=draft`; run `scripts/validate-descriptors.ts` and tests. The guide expects exactly 27 CSV columns.
3. If a secondary/low-strength genre does not meet import-quality review, remove that particular genre with a note, **not** the entire album.
4. Cross-check disputed 2003 instrumentation and `Contact!` sampling against actual sleeve scans when possible; empty cells are acceptable and safer than assumptions.
5. Retain companion sources, per-genre provenance and the catalogue audit.

## Next phase

**None scheduled.** All three original studio albums are now covered. The 2004 special/English edition is a variant; singles, routine remix/promotional EPs and greatest-hits compilations are excluded absent independent evidence of landmark status. This can be reopened if a specific substantial collaboration or historically significant EP is independently documented.

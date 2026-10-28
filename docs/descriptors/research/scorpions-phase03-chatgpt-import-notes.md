# CLAUDE_IMPORT — Scorpions — Fandome Phase 03

Research date **28 October 2026**. Repository `giampierofiorelli/Fandome`, branch `descriptors` (read only). This ZIP contains **only four incremental studio-album rows**; Phases 01 and 02 remain outside this ZIP.

## Albums this phase (to add to catalogue if absent)

| Album ID | Album | Year | Type | Producers |
| --- | --- | --- | --- | --- |
| `scorpions-loveatfirststing` | Love at First Sting | 1984 | studio | Dieter Dierks |
| `scorpions-savageamusement` | Savage Amusement | 1988 | studio | Dieter Dierks |
| `scorpions-crazyworld` | Crazy World | 1990 | studio | Keith Olsen; Scorpions |
| `scorpions-facetheheat` | Face the Heat | 1993 | studio | Bruce Fairbairn; Scorpions |

Original album dates: 27 March 1984, 16 April 1988, 6 November 1990 and 21 September 1993, respectively. Sources: official album pages in `scorpions_phase03_sources.csv`.

## The six import files

- `CLAUDE_IMPORT.md`: this guide.
- `scorpions_phase03_rows_ONLY.csv`: exactly four new descriptor rows with the 27-column guide header, `status=draft`.
- `scorpions_phase03_sources.csv`: source-level provenance for producer/date/genre/instrument claims.
- `scorpions_phase03_genre_evidence.csv`: one cited claim per assigned genre, including retrospective context.
- `scorpions_phase03_evidence-notes.md`: per-album rationale and evidence boundaries.
- `scorpions_phase03_catalog-audit.csv`: current GitHub repository audit and next-phase candidates.

## Catalogue and IDs

As checked on **28 October 2026**, `src/data/catalog.ts`, `src/data/seed.ts`, `src/data/coBilled.ts` contain no Scorpions entries; `docs/descriptors/scorpions.csv` is not present on branch `descriptors`. The first eight albums were nonetheless delivered in earlier ZIPs; **do not import those earlier rows from this batch**, and check the GitHub branch again immediately before you import. Proposed artist ID remains **`scorpions`** and all album IDs retain the same Phase 01/02 convention. If the earlier phases were imported elsewhere, append only these phase 03 rows; never overwrite/duplicate existing rows.

## Genres and technology

- `popmetal` is required for **Savage Amusement** and **Crazy World**, supported by named sources. It was first flagged for *Animal Magnetism* in Phase 02, but is **still missing** from current `src/data/scenes.ts`. Add it **once** and add its parent mappings in `src/data/genreFamilies.ts` (candidates `heavymetal|pop`), after checking against any in-flight change.
- Other assigned genre tokens, all instruments and all production tokens in this phase were already present in the checked source lists. No new instrument or production token needed.
- *Love at First Sting*: original digital 32-track recording and Moog synth credits justify `digitalrecording|moog`; do not overstate synth presence.
- *Savage Amusement*: musician **voice box = guitar talk box** credit (`talkbox`). No evidence of vocoder processing of Klaus Meine's voice.
- *Crazy World*: producer is **Keith Olsen**, not the `Keith Olson` typo on the band's page. Co-producer `Scorpions` is official. `digitaltape` follows original-edition D.A.S.H. credit transcription; ask for original liner confirmation if stricter proof needed.
- *Face the Heat*: original **September** date overrides the conflicting AllMusic May entry. Fairbairn and Scorpions are jointly credited producers. Sitar / E-Bow / talk box are *album personnel credits*, not evidence each track uses them. Opera guest Helen Donath is **not** a replacement for lead vocalist Meine.
- `sounds_like=Def Leppard` only on *Savage Amusement* is a sourced critic analogy. No specific album-level direct influences verified: **`influenced_by` empty**, not extrapolated from band interviews. Per user rule, ARTIST INFLUENCES section belongs to **Phase 01 only**; no duplication in Phase 03.

## Scope and co-billing

No album in this phase is officially co-billed with another lead artist; `Scorpions` as an **album co-producer** is not a separate music act for the album's billing. No live performances, album artwork, reissue extra songs or greatest-hits compilations included.

The **next phase** should cover **Pure Instinct (1996)**, **Eye II Eye (1999)** and **Unbreakable (2004)**, all studio albums. *Moment of Glory* (2000) is a notable collaboration with the **Berlin Philharmonic**, recorded in studios, but the [official Scorpions page](https://www.the-scorpions.com/album/moment-of-glory-2/) itself calls it a **compilation** of rearranged material. Under the owner's current **no-compilations** rule it is NOT silently scheduled; reconsider only if the owner explicitly asks for this exception. The live *Acoustica* (2001) is excluded.

## Import checklist

1. Recheck both artist source files and existing `docs/descriptors/scorpions.csv` for IDs, keeping earlier phases intact.
2. Add four album entries with these IDs only where they do not exist. Register `popmetal` once if still absent.
3. Import just four Phase 03 rows and keep the six research files as references; do not treat audit or genre evidence as descriptors.
4. Run `scripts/validate-descriptors.ts` and your test suite. All CSV files use UTF-8 with BOM, comma-delimited, double-quote escaping.
5. Do not mark reviewed without a second independent check; these rows are drafts.

## Claude import note (Oct 2026)

- Rows imported as delivered; the band's own co-producer credit dropped (Crazy World: Keith Olsen; Face the Heat: Bruce Fairbairn). `popmetal` already registered in phase 02.
- Moment of Glory (2000) stays in the catalogue but is not scheduled for descriptors (officially a compilation of rearranged material).

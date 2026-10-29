# Vasco Rossi — Fandome phase 02 (1982–1987)

**Incremental batch:** import *only* the four CSV rows in `vasco_phase02_rows_ONLY.csv`. Do not merge or overwrite phase 01 rows. Artist id `vasco` confirmed in `src/data/catalog.ts` (branch `descriptors`, checked 29 October 2026). `docs/descriptors/vasco.csv` did **not** exist at the time of this read; earlier phase 01 was delivered as a ZIP but its import has not been confirmed.

## Phase 02: original studio albums

| Album | Original year | Exact Fandome album_id | Catalogue action |
|---|---:|---|---|
| Vado al massimo | 1982 | `vasco-vadoalmassimo` | Already listed |
| Bollicine | 1983 | `vasco-bollicine` | Already listed |
| Cosa succede in città | 1985 | `vasco-cosasuccedeincitta` | **ADD** studio (after *Bollicine*, before *C’è chi dice no*) |
| C’è chi dice no | 1987 | `vasco-cechidiceno` | Already listed |

`Va bene, va bene così` (1984) is a live album; **excluded**. The song of the same title is not grounds to turn the album into a studio release. Original album years are not the dates of AllMusic reissues (often 2002). None are co-billed.

## Source priority, credits, equipment

- `Vado al massimo`: **Guido Elmi** only in `producers`. Biancani's **own professional credits** explicitly call his 1982 role assistant to production/effects; some vinyl transcription databases say producer/programmer, flagged as a discrepancy in the notes. Keep `programming` provisionally (original-label transcription), and remove if sleeve review fails.
- `Bollicine`: **Guido Elmi | Maurizio Biancani**. Original sleeve explicitly credits synth programming and Prophet/Minimoog keyboards. Avoid `synclavier`: one sleeve transcription has the ambiguous spelling *syntclavier* for a single song, so model unverified.
- `Cosa succede in città`: **Guido Elmi | Maurizio Biancani**. Original vinyl transcriptions report PCM-1610 **digital mastering**. This does **not** mean the multitrack was digitally recorded; do not add `digitalrecording`, `digitaltape`, or `digitalediting`. No sufficiently evidenced production token is asserted; blank is deliberate.
- `C’è chi dice no`: **Guido Elmi | Maurizio Biancani**. Original-sleeve transcription credits Serse May with programming using an **Emulator II**, a Macintosh and an Akai system. Use `programming|emulatorii`; the particular Akai model was not verified, and the Mac is not a production-technique descriptor. Do not infer `sampling`.

## Genre methodology

- Full-disc genre takes precedence. Track-only colors are deliberately lower in the sequence (`italodisco` on *Splendida giornata*; `reggae` in *Vado al massimo*; `yachtrock` on *Giocala*). See one row per token in the genre-evidence CSV.
- *Bollicine*: keep OndaRock's actual **new wave** classification, and its track-level Bowie *Low* sonic comparison under `sounds_like`. **Bowie is not documented here as a direct influence.**
- `sounds_like` are explicit reviewer comparisons, not studio participants or inspirations. `influenced_by` is empty across the batch because no album-specific first-person evidence was substantiated. Do not promote Enzo Jannacci, David Bowie, collaborators or lyric quotations into that field without album-specific artist/producer evidence.
- No new genre, instrument or production tokens required: all chosen terms are already allowed by the descriptors guide.

## Editor tasks

1. Add missing `vasco-cosasuccedeincitta`, studio 1985, exact title `Cosa succede in città`, to the `vasco` catalogue row.
2. Validate each row against `docs/album-descriptors-guide.md` and the current `src/data/scenes.ts`, `instruments.ts`, `production.ts`; review ambiguous 1982 programming before publishing.
3. Append the four new rows only to `docs/descriptors/vasco.csv`, maintaining existing phase 01 (1978–1981) if imported.
4. Run `npx vite-node scripts/validate-descriptors.ts` and the project's tests. Import status is **not** asserted by this ZIP.
5. Do not mix with `reception/vasco.csv`, a separate file used for importance/acclaim/mainstream: this ZIP follows the six-file research deliverable requested.

## Next batch: phase 03

*Liberi liberi* (1989), *Gli spari sopra* (1993), *Nessun pericolo… per te* (1996), *Canzoni per me* (1998). No live albums or compilations.

## ZIP files

- `vasco_phase02_rows_ONLY.csv`: 27-column, four-row incremental descriptors.
- `vasco_phase02_sources.csv`: separately inspectable bibliography and claim-by-claim source roles.
- `vasco_phase02_genre_evidence.csv`: provenance and scope for each genre token.
- `vasco_phase02_evidence-notes.md`: row rationale, confidence caveats, album-specific credits.
- `vasco_phase02_catalog-audit.csv`: current catalogue impact and the excluded live LP.
- `CLAUDE_IMPORT.md`: this memo.

## Claude import note

- Added Cosa succede in città (1985) to the catalogue; Va bene, va bene così (1984, live) excluded.
- sounds_like emptied: Loredana Bertè (Bandabertè) on Vado al massimo and David Bowie (Low) on Bollicine are comparisons of a single track; Enzo Jannacci on Cosa succede in città compares the songwriting, not the sound. The reception pass looks for album-level comparisons.

## Claude enrichment

- Vado al massimo: Guido Elmi only (Maurizio Biancani was assistant producer, his own site). Bertè comparison is about the title track only.
- Bollicine: influenced_by Killing Joke from producer Guido Elmi's own words (Rockit 2016: "ai tempi ascoltavo i Killing Joke, certe cose della new wave e la prima dance anni '80"). Added punk rock (Rockol 2023: "rock, new wave e punk"). Bowie (Low) stays out: one track. Prophet-5 and Minimoog kept from ChatGPT's sleeve transcription (45cat), not independently verified.
- Cosa succede in città: landmark set to 0 (Rolling Stone Italia No. 10 of 18, "schiacciato" between Bollicine and C'è chi dice no per OndaRock).
- C'è chi dice no: Emulator II and programming removed: the cited page (ardisc.it) has no such credit and nothing else confirms it.

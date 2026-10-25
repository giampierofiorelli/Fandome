# CLAUDE_IMPORT — Mina / Phase 04

Four important Italian Mina **studio albums** (1975–76). Six files in this ZIP. All descriptive judgments follow `docs/album-descriptors-guide.md` on branch `descriptors`. No repository write made by ChatGPT.

## Import files

1. `CLAUDE_IMPORT.md` (this file)
2. `mina_phase04_rows_ONLY.csv` — exact 25 columns, four incremental rows
3. `mina_phase04_sources.csv` — per-record source URL, type, claim and strength
4. `mina_phase04_genre_evidence.csv` — one line per included genre with source IDs and **scope**
5. `mina_phase04_evidence-notes.md` — detailed scoring audit, uncertain credits, genre caveats
6. `mina_phase04_catalog-audit.csv` — four new catalog entries and packaging/edition safeguards

## New rows and IDs

- `mina-minacantalucio`, *Minacantalucio*, 1975, PDU PLD L 6036. NOT anthology *Mazzini canta Battisti*. Separate first LP of paired set.
- `mina-lamina`, *La Mina*, 1975, PDU PLD L 6037. Separate ten-song second LP.
- `mina-singolare`, *Singolare*, 1976, PDU PLD L 6067, ten solo vocal tracks.
- `mina-plurale`, *Plurale*, 1976, PDU PLD L 6068, eleven tracks and sixteen-voice overdubbing.

All four were missing from catalog and descriptors in the Phase 04 pre-audit. Insert the four tuples in `src/data/catalog.ts` and the descriptors into `docs/descriptors/mina.csv`, deduplicating if another contributor has since imported them. Preserve earlier rows and ordering chronologically. Do not add a single merged row for the paired LPs. All four rows `status=draft`.

## Critical verification and interpretation

- **Producer versus arranger**: Gabriel Yared on *Minacantalucio* only credited arranging/conducting; *La Mina* and *Singolare* list several arrangers; leave producer blank when an LP-wide producer credit is not shown. *Plurale*: direct Massimiliano Pani interview credits Gianni Ferrio with production. Original official sleeve note calls Alba Ferrio an **assistant to production**, engineer Nuccio Rinaldis; exclude both from producer column despite secondary mis-tagging Alba.
- **Genres**: no new genre token needed if Phase 03 additions (`chanson`, `ballad`) already landed. `poprock` on Battisti LP and `bossanova`/`funk` on *La Mina* and `blues`/`folk` on *Plurale* are low-scope comparisons or track-specific; do not promote to entire-album primary genre. Source evidence explicitly records strength.
- **Languages**: *Plurale* uses several song languages; source title does not always establish performed language. Its Piedmontese possibility remains unverified. Others Italian-language vocal albums. `lyrics` theme tags summarize repertoire, not songwriter identities.
- **Documented conceptual link**: `influenced_by=Lucio Battisti` only for the 1975 tribute LP whose entire repertoire is Battisti–Mogol, and is explicitly *repertoire influence*, not proof Mina borrowed Battisti's 1975 production or instrumentation. Leave influence empty on other albums.
- **Validation**: check all 25 fields, genre tokens and notes <=15 words; `npx vite-node scripts/validate-descriptors.ts` and automated tests after import. Do not adjust earlier files to achieve import apart from independently required genre registry updates.

## IMPORTANT backlog

Read-only branch audit found just the four Phase 01 Mina rows in `mina.csv`. **Phase 02 and Phase 03 ZIPs have been delivered but are not yet in this branch**. Import each once; special `mina-mina1971` ID/title collision from Phase 02 requires explicit catalog/validator compatibility and must not overwrite `mina-mina` (1964).

## Scope selection for next phase

User expressly rejected *Mina Live ’78* and *Mina quasi Jannacci*. Exclude live albums and that 1977 studio album from all next-phase shortlists. Next high-priority studio record: *Attila* (1979), then selectively research 1980s and later landmarks. Do not pad with minor recordings.

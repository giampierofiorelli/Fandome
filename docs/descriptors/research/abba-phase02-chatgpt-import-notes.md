# ABBA / Fandome — Phase 02, Claude import instructions

**Scope:** *The Album* (1977), *Voulez-Vous* (1979), *Super Trouper* (1980). Exactly THREE newly authored studio-album rows; no Phase 01 redo, no live album.

**Repository verified:** `giampierofiorelli/Fandome`, branch `descriptors` on 25 October 2026. `docs/descriptors/abba.csv` already has exactly the four Phase 01 album rows; `src/data/catalog.ts` already lists all nine ABBA studio releases, including all three Phase 02 IDs.

1. Read `abba_phase02_evidence-notes.md` and `abba_phase02_sources.csv` first; open source URLs when auditing non-obvious claims. Source IDs in genre evidence link to those sources.
2. Append only the three rows of `abba_phase02_rows_ONLY.csv` to the existing `docs/descriptors/abba.csv`; do **not** duplicate its header or overwrite existing rows.
3. Keep the exact IDs `abba-thealbum`, `abba-voulezvous`, `abba-supertrouper`; all match the repository slug function. Do not modify catalog because these albums exist there.
4. New genre token **proposals** `progressivepop`, `dancerock`, `hardrock` need additions in `src/data/scenes.ts`, `src/data/genreFamilies.ts`, `docs/album-descriptors-guide.md`, and the validator `scripts/validate-descriptors.ts` if accepted. See evidence and suggested families in notes.
5. Scores are **editorial ordinals**, not measured tempo/energy. Do not copy review scores into these fields. Distinguish album-wide dominant sound and isolated stylistic traits. The comments identify one marginal track-local genre case for review.
6. Do not promote specialist critiques to an artist's own claims. Track-level influences are qualified in notes; session musicians are not producers. Michael B. Tretow is credited as engineer; Benny Andersson and Björn Ulvaeus as album producers.
7. Standard original releases: 9 tracks (1977), 10 tracks (1979), 10 tracks (1980). The 1980 closing track was live-sourced **within** a studio LP, not an independently qualifying live album. No deluxe bonuses and no separate soundtrack classification for the 1977 LP.
8. Set `status=draft`; perform independent review and run the repository descriptor validator after import.

**Six files:** this instruction, rows-only CSV, sources CSV, genre-evidence CSV, research notes, catalog audit.
**Next phase:** *The Visitors* (1981), *Voyage* (2021), then ABBA studio catalogue complete.

# CLAUDE IMPORT — Fine Young Cannibals / Fandome Phase 01

Research date: 2026-10-27. GitHub branch checked: `descriptors` (read only). **Artist id proposal: `fineyoungcannibals`** (lowercase letters only). `src/data/catalog.ts` and `src/data/seed.ts` checked: **artist not present**. `docs/descriptors/fineyoungcannibals.csv` absent (404), so no prior rows to skip. None of the `fineyoungcannibals-` album ids conflict with that catalogue; recheck concurrent changes at import.

## Phase 01 — complete studio discography, two NEW rows

1. `fineyoungcannibals-fineyoungcannibals` — **Fine Young Cannibals** (1985, studio).
2. `fineyoungcannibals-therawandthecooked` — **The Raw & the Cooked** (1989, studio).

## Add to catalogue

Add artist **Fine Young Cannibals**, ID `fineyoungcannibals`; add both studio albums with dates above; the exact album IDs above must be used for imports. There are no co-billed albums. Do not mistakenly assign old records from Cox/Steele's **The Beat** to this band's room. Do not create an extra album row for previous film soundtrack appearances.

## Existing descriptive rows / skipped

None. The two proposed rows are incremental new work only.

## Albums excluded under current rules

- **The Raw & the Remix** (1990): a **remix compilation** of previously issued 12-inch mixes, although some remixes by notable collaborators. AllMusic flags `Release Info: Compilation` — deliberately excluded, not overlooked. Its status could be revisited on a specific user request.
- **The Finest** (1996): greatest hits/compilation, despite additional recordings.
- **FYC40** (2025): compilation/retrospective.
- *Tin Men* (1987) and *Something Wild* (1986) soundtrack albums: various-artist releases. Band's existing recordings are represented in The Raw & the Cooked.

## Token and schema validation

- **Genres to add:** none. `pop|soul|rnb|newwave|dancerock|ska|alternativerock|indierock|northernsoul|postpunk|funk|doowop|acidhouse|triphop|rockandroll|disco` are already allowed in `src/data/scenes.ts`.
- **Instruments to add:** none; all instruments appear in `src/data/instruments.ts`.
- **Production tokens to add:** none; `linn9000`, `noisegating`, `drumprogramming`, `sampling`, `analogtape`, `overdubbing`, `layeredvocals`, `falsetto`, `wahwah`, `distortion` are existing tokens in `src/data/production.ts`.
- CSV has exactly 27 header columns, 2 data rows, integer scores 0–5 and `draft` status. Word limits and list delimiters locally checked. Genre evidence is one source-backed row per tagged genre with album/track scope. Status remains `draft` until independently reviewed.

## ARTIST INFLUENCES (artist-wide; phase 01 only)

- **Otis Redding** — Roland Gift directly names Otis as a musician all members listened to when founding their own group: https://explore-liverpool.com/interview-with-fine-young-cannibals-frontman-roland-gift/.
- **Marvin Gaye** — named in the *same first-person interview* as common music they consciously listened to: https://explore-liverpool.com/interview-with-fine-young-cannibals-frontman-roland-gift/.
- **Sam Cooke** — Classic Pop historical account says members shared enthusiasm for 1960s soul including Sam Cooke; **secondary narrative, not a first-person quotation**: https://www.classicpopmag.com/features/classic-album/classic-album-fine-young-cannibals-the-raw-the-cooked/.
- **Al Green** — cited in the same historical article as shared formative soul listening; **secondary narrative, not a direct quotation**: https://www.classicpopmag.com/features/classic-album/classic-album-fine-young-cannibals-the-raw-the-cooked/.
- **Prince** — Roland Gift and David Steele explicitly describe hoping to work with Prince and replicating the parallel falsetto/normal vocal technique from “If I Was Your Girlfriend” for the 1989 recording: https://www.theguardian.com/culture/2025/nov/10/how-fine-young-cannibals-made-she-drives-me-crazy-prince. Entered only in the album-specific 1989 `influenced_by` with album suffix, not for 1985.

**Do not promote these to influences:** The Beat are an earlier band of two members, Jimmy Somerville a guest backing singer on the 1985 record and an uncertain inspiration for a vocal trick, James Brown's “Funky Drummer” a *sample* on the 1989 album, Jerry Harrison / David Z *producers*, Elvis Presley and Buzzcocks original performers/composers of *covers*. Sonic reviewer comparisons belong solely in `sounds_like`.

## Critical production / album caveats

- **The Raw & the Cooked** was issued as a studio album despite incorporating already-issued soundtrack tracks; deliberately include it.
- **David Z produced/co-produced only three tracks** on the second album; **Jerry Harrison one**; the original sleeve credits the band on all others. An online summary claiming David Z produced the entire record would be wrong: https://albumlinernotes.com/The_Raw___The_Cooked.html.
- **Linn 9000** and analog tape recorded on “She Drives Me Crazy” sourced from David Z's first-hand engineering account, not deduced from genre: https://www.mixonline.com/recording/classic-tracks/classic-tracks-fine-young-cannibals-she-drives-me-crazy-375247.
- Album reviewer calls one acid-house instrument a "Roland TR-303" (suspected TB-303 typo). **Do not add `tb303` to production without independent hardware credit**. Acid-house genre is documented for that track: https://www.classicpopmag.com/features/classic-album/classic-album-fine-young-cannibals-the-raw-the-cooked/.
- **Producer name spelling** “Alvin Clark” / “Alvin Clarke” varies by database. Original UK LP transcription gives “Alvin Clarke” for one debut track. US summary also lists “Bob Sargeant” as a producer, but no reconciled track-by-track original-LP credit found; intentionally excluded pending evidence.
- When displaying the first record, artist name and album title are identical. The second is conventionally titled *The Raw & the Cooked* (ampersand retained in title, stripped in ID).

## Files supplied

- `fineyoungcannibals_phase01_rows_ONLY.csv` — exactly two new descriptor rows.
- `fineyoungcannibals_phase01_sources.csv` — references with album-specific evidence and strength.
- `fineyoungcannibals_phase01_genre_evidence.csv` — genre-by-genre traceability with scope.
- `fineyoungcannibals_phase01_evidence-notes.md` — explanations of instruments, production, interpretation, credits and uncertainties.
- `fineyoungcannibals_phase01_catalog-audit.csv` — additions and exclusions.
- `CLAUDE_IMPORT.md` — this import and artist-influence record.

## Next phase

**None under current inclusion policy:** both original studio albums are covered; the 1990 remix *compilation* is intentionally excluded. If the owner explicitly asks for remix anthologies, it can be treated as a separate phase, without repeating these two rows.

Claude: add artist/album entries first, place the descriptor file at `docs/descriptors/fineyoungcannibals.csv`, then run the repository validator. No repository files were modified here.

## Claude import note (27 Oct 2026)

The Beat removed from the debut's sounds_like: it is Cox and Steele's former band (no self-references).

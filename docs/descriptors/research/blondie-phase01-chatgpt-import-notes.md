# CLAUDE_IMPORT — Blondie / Fandome Phase 01

**Branch:** `descriptors`. Research conducted read-only against guide, Genre type, instrument and production vocabularies, catalogue, co-billed metadata and validator on 25 October 2026. **No GitHub writes.**

## Phase contents — ONLY these four rows

1. `blondie-blondie` — **Blondie** (1976), studio
2. `blondie-plasticletters` — **Plastic Letters** (1978), studio
3. `blondie-parallellines` — **Parallel Lines** (1978), studio
4. `blondie-eattothebeat` — **Eat to the Beat** (1979), studio

Use `blondie_phase01_rows_ONLY.csv` as the increment. Import these rows into `docs/descriptors/blondie.csv` only if not already present; do not append any previous-phase rows. The source, genre evidence and evidence-notes files explain the draft claims.

## Catalogue audit

Artist ID: `blondie` already exists. All four album IDs/titles/years already exist in `src/data/catalog.ts`. **Albums to add to catalogue: none.** No co-billed records in this phase; `coBilled.ts` needs no changes.

## New genres (exact lowercase tokens)

- `newyorkpunk` — AllMusic's explicitly named New York Punk style for these early releases; suggested parent `punk`.
- `girlgrouppop` — album-described 1960s girl-group-pop idiom; suggested parent `pop` (optionally `doowop`, only if conceptually justified).
- `motown` — specific Motown sonic style explicitly named by Apple Music for *Eat to the Beat*; suggested parent `soul`.

The descriptor `genre_evidence.csv` gives scope (whole/some tracks/texture). Do not promote a song-level genre to dominant. Update Genre union (`scenes.ts`), parent map (`genreFamilies.ts`), validation allowed set and any applicable tests **before running validator**. Other genre tokens are already present in the read source files.

## New instrument tokens

None. `guitar`, `electricguitar`, `mallets`, `electricpiano`, `organ`, `synth`, etc. exist in repository's `instruments.ts`. `mallets` means an explicitly credited vibraphone on *Plastic Letters*; do not replace it with orchestral strings because the original credits are ambiguous.

## New production tokens

- `onetake` — producer Richard Gottehrer's one-take-focused session approach as described by Chris Stein for the first two albums. New token.
- `polymoog` — named synthesizer in *Plastic Letters* credits. New token.
- `rolandcr78` — Clem Burke explicitly identifies the drum machine used on “Heart of Glass” from *Parallel Lines*. New token. Only some tracks, not a whole-album assumption.

All other production tokens (`analogtape`, `overdubbing`) were already present in `production.ts`. *Eat to the Beat* deliberately has an empty production cell because the available evidence did not substantiate a signature machine/process token for that album.

## Date, release, credits caveats

- *Plastic Letters*: catalog year **1978** kept as given; first/alternate regional distributions may show late 1977, and some MusicBrainz entries show 1977. Chrysalis 1978 press material and UK chart history support 1978 as the predominant initial release year. Do not create a duplicate 1977 album.
- *Blondie*: 1976 debut, not 2001 remaster. Richard Gottehrer is principal producer; Craig Leon receives producer/co-producer credit for certain original recordings (MusicBrainz), not all album tracks. If import policy only allows album-wide personnel, consider a credit annotation rather than silently extending his role.
- *Parallel Lines*: producer Mike Chapman; 1978 album master. “Heart of Glass” drum-machine/sequencer workflow is **song-specific**.
- *Eat to the Beat*: Mike Chapman producer; 1979 recording. Randy Hennes harmonica is only on the title track. Do not copy `rolandcr78` from prior album.
- Not all studio/equipment lists in MusicBrainz encode per-song presence; some are repeated album/session credits. Read the scope notes.
- Contemporary critics disagree especially on *Plastic Letters* and *Eat to the Beat*. Evidence notes retain disagreements.

## Next phase — Phase 02 (4 albums; no duplicates)

1. *Autoamerican* (1980), studio — existing catalog.
2. *The Hunter* (1982), studio — **add to catalogue**.
3. *No Exit* (1999), studio — **add to catalogue**.
4. *The Curse of Blondie* (2003; some US sources show 2004), studio — **add to catalogue**, research earliest original edition date before final import.

Then Phase 03 can cover *Panic of Girls* (2011), *Ghosts of Download* (2014), *Pollinator* (2017) plus any independently justified landmark non-studio release. *High Noon*, announced for February 2027, was **unreleased** as of 2026-10-25 and is therefore excluded.

## File checklist

- `CLAUDE_IMPORT.md`
- `blondie_phase01_rows_ONLY.csv` (header + exactly 4 rows; 27 columns)
- `blondie_phase01_sources.csv` (source evidence for each album)
- `blondie_phase01_genre_evidence.csv` (one line per genre per album)
- `blondie_phase01_evidence-notes.md` (explanations, uncertainty and dissent)
- `blondie_phase01_catalog-audit.csv` (all four existing catalogue IDs)

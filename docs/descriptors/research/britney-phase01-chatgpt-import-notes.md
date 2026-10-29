# CLAUDE_IMPORT — Britney Spears — Phase 01

Research cut-off: 2026-10-25. Branch audited (read-only): `descriptors`, `giampierofiorelli/Fandome`.

## Import scope — strictly incremental

- `britney-babyonemoretime` — *…Baby One More Time* (1999, studio)
- `britney-oopsididitagain` — *Oops!… I Did It Again* (2000, studio)
- `britney-britney` — *Britney* (2001, studio)
- `britney-inthezone` — *In the Zone* (2003, studio)

All four albums already exist in `src/data/catalog.ts` under `britney`. `docs/descriptors/britney.csv` was not found in the consulted branch. **Append only the four rows in `britney_phase01_rows_ONLY.csv`; do not overwrite prior rows or add duplicate catalogue entries.** Validate ID matches the existing catalogue-generated IDs. If file was created since research, re-check and skip any already imported IDs.

## Catalog additions and co-billing

- New albums to add to catalog: **none**. (The existing catalogue includes these four.)
- Co-billed albums: **none**. Madonna's appearance on *In the Zone* is a featured guest, not a joint album billing.
- Types: four `studio` records. No EPs, remixes or deluxe bonus material added in this phase.

## New genre tokens (must be added before running validator)

- `contemporarypoprock`: AllMusic label “Contemporary Pop/Rock”; add genre and appropriate genreFamilies parent (`pop`, `rock`).
- `ragga`: AllMusic “bubblegum-ragga” for “Soda Pop”; track-scope only; map to `reggae` in family.
- `soulpop`: LA Times called the sound “soul-pop” on *Oops!*; map to `pop`, `soul`.
- `hippop`: Slant used “hip-pop” for specific *Britney* tracks; map to `pop`, `hiphop`.
- `southernhiphop`: The Guardian named “Southern hip-hop” as a strand of *In the Zone*; map to `hiphop`.

Do not silently map new tokens to nearby existing genres. Add them to `Genre` in `src/data/scenes.ts`, `GENRE_PARENTS` in `src/data/genreFamilies.ts`, and the validator's genre set. If some have been added since the snapshot, do not duplicate them.

- **New instrument tokens:** none (all used tokens were already in `src/data/instruments.ts`).
- **New production tokens:** none (all used tokens were already in `src/data/production.ts`).

## Edition / credits cautions

1. Standard-edition tracks only; bonus tracks and later remixes are **not** assumed to characterize an album. *…Baby One More Time* may have a track titled “The Beat Goes On”; the 1999 international release sequences vary. The 1999 album title begins with the typographic ellipsis `…` (not literal three dots). Catalogue id is `britney-babyonemoretime`.
2. On *Oops!… I Did It Again*, “Don’t Let Me Be the Last to Know” credits Robert John “Mutt” Lange as **producer**; Shania Twain is **a co-writer**, not an album producer. Technicians using Pro Tools on that track are not necessarily its producers; Pro Tools token is a *track-specific* note. Do not count the remix of the title track as an original-album producer contribution.
3. On *Britney*, the album-level production list retains names with explicit album/track **producer** credits, not every writer, session player, string arranger or mixer. Guest musicians in The Neptunes are represented once as `The Neptunes`, without duplicating Chad Hugo and Pharrell Williams. Some compilations credit BT or Peter Kvint on territory-specific extras; exclude such bonuses here.
4. On *In the Zone*, Madonna is a *featured performer*, not a co-billed album artist or producer. Rishi Rich is credited with a **bonus remix**, not with producing the standard album. “Toxic”'s memorable strings should **not** be described as a sampled old recording: first-hand Bloodshy interview and performer credits establish live strings and editing/looping. `protools` reflects credited digital editing, not proof all tracks were produced in that software. Producer aliases `Trixster`, `Tricky Stewart`, `RedZone` need reconciliation on the original liner notes to avoid double counting.
5. `sounds_like` is editorial acoustic similarity, **not** evidence of an actual influence. `influenced_by` is restricted to artists that critics explicitly identify as musical reference points; blank means no verified attribution for this album.
6. The eight numerical scales are album-level editorial judgements based on documented sound, not measured objective quantities. Sparse claims for a particular production machine are left out deliberately.
7. Some AllMusic links are indexed but may block automatic fetching (HTTP 403). Alternative independent credits are MusicBrainz, Qobuz and official label materials. Music Week's historic interview may likewise block some browsers; secondary producer interview remains available.

## Next phase (Phase 02)

- *Blackout* (2007)
- *Circus* (2008)
- *Femme Fatale* (2011)
- *Britney Jean* (2013)

Then *Glory* (2016) in Phase 03; assess significant remix projects only if independently documented as landmarks. Do not include unreleased material or ordinary compilations.

## Files

- `britney_phase01_rows_ONLY.csv` — exact required 27-column header and only these four rows.
- `britney_phase01_sources.csv` — bibliography/source claims.
- `britney_phase01_genre_evidence.csv` — per-genre source and scope.
- `britney_phase01_evidence-notes.md` — per-album interpretation, production constraints and disagreements.
- `britney_phase01_catalog-audit.csv` — already in catalog vs to add.

Claude should add tokens, import the rows, then run `npx vite-node scripts/validate-descriptors.ts` plus project tests.

## Ray of Light link (Oct 2026)

- In the Zone: sounds_like now names the records, Madonna (Bedtime Stories)|Madonna (Ray of Light) (AllMusic, Stephen Thomas Erlewine: the album "sounds like cuts from 1993 or Madonna's Bedtime Stories and Ray of Light"; en.wikipedia In the Zone). Madonna removed from influenced_by: she is a guest on Me Against the Music (guests are never influences); the Matrix comparing their sessions to Ray of Light is not tied to a known number of tracks.

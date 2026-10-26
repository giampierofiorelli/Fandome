# CLAUDE IMPORT — Beyoncé Phase 02

Only this phase is included; **do not re-import Phase 01 or any other artist**. Descriptors branch read-only during research. Use the included six files.

## Exact rows

- `beyonce-beyonce` — *Beyoncé* (2013; studio; already in catalogue)
- `beyonce-lemonade` — *Lemonade* (2016; studio; already in catalogue)
- `beyonce-everythingislove` — *Everything Is Love* (2018; **new catalogue entry**, co-billed original studio album by **The Carters**)

## Catalogue additions and billing

- Add *Everything Is Love*, 2018, `studio`, id `beyonce-everythingislove` to Beyoncé's catalogue row; do **not** model it as an additional solo studio album.
- Add `coBilled.ts` entry `'beyonce-everythingislove': { credit: 'The Carters' }`. The exact printed billing is **THE CARTERS** (Beyoncé and JAY-Z), supported by [MusicBrainz](https://musicbrainz.org/release/37055326-02e0-4e6d-9b01-0ab860ca7559) and [Pitchfork](https://pitchfork.com/reviews/albums/the-carters-everything-is-love/). If Jay-Z has a Fandome room, attach its existing artist ID in `with` after checking the catalogue.
- *Beyoncé* and *Lemonade* use their already-existing auto-generated catalogue IDs.

## New tokens to register (before validation)

- **Genre:** `boombap` (boom bap hip-hop beat style) — [contemporary HipHopDX review excerpt](https://www.metacritic.com/music/everything-is-love/the-carters/critic-reviews) calls out boom bap on *Everything Is Love*. Do not conflate with `trap`, `rap`, or `hiphop`.
- **Instruments:** none.
- **Production:** none.

## Co-billed albums

- `beyonce-everythingislove` — exact artist credit `The Carters` (Beyoncé and JAY-Z).

## ARTIST INFLUENCES

Career-wide influences were included in the Phase 01 `CLAUDE_IMPORT.md`. **Not repeated here**, per the incremental-phase rules. The `influenced_by` column remains empty for all three new rows because only guest/sample/resemblance facts were established, not direct album-specific documented influence.

## Cautions

- Use original 2013 *Beyoncé* 14-track sequence, **not** 2014/2015 platinum reissue or music-video extras.
- *Lemonade* scores relate to its original 12 tracks; don't add 2019 `Sorry (Original Demo)` to the original album average.
- *Everything Is Love* originally has nine tracks. Bonus song `Salud!` cannot change original edition producers or scales.
- Do not automatically equate a Grammy prize, visual album companion film, sampling, or collaborations with a separate album or influence.
- For the exact credit-role disputes see `beyonce_phase02_evidence-notes.md`, and leave unsourced hardware/production out.
- Genre scopes are explicit: e.g. *Lemonade* country and blues-rock are track-specific, and *Everything Is Love* synthpop is on *Heard About Us*.
- All rows have 27 columns, `status=draft`, scores 0–5 as required. Import, add album and token, run the validator and tests.

## Next phase (Phase 03)

1. *The Lion King: The Gift* (2019) — **separate soundtrack/companion studio project with new music**, not the Hans Zimmer original film soundtrack or a greatest-hits compilation. Curated by Beyoncé and featuring many African musicians; audit exact original billing and independent eligibility first. [Sony announcement](https://www.sonymusic.co.uk/beyonc-announced-as-producer-performer-on-the-lion-king-the-gift/) / [Apple Music entry](https://music.apple.com/us/album/the-lion-king-the-gift/1473486502).
2. *Renaissance* (2022) — studio.
3. *Cowboy Carter* (2024) — studio.

No live releases, compilations or recycled greatest-hits entries.

# Fandome import — The Chemical Brothers, Phase 01

**Branch read:** `descriptors` (2026-10-25); **GitHub:** read-only, no files changed. **Phase file is incremental** (new artist + 4 new album rows; no other phases).

## Artist to add before validator

- `artist id`: `chemicalbrothers`
- Artist name: `The Chemical Brothers`
- The duo is absent from both `src/data/catalog.ts` and `src/data/seed.ts`, and `docs/descriptors/chemicalbrothers.csv` returns 404 on `descriptors`. **Validator cannot pass with an unknown new artist ID until Claude registers the artist.**
- Note that 1994 EP was **originally billed to The Dust Brothers**, an early name of the same British duo; *not* a co-billed album and *not* the US Dust Brothers production team.

## Exact rows in this phase

| Album ID | Album title | Year | Type | In catalogue |
|---|---|---:|---|---|
| `chemicalbrothers-fourteenthcenturysky` | Fourteenth Century Sky | 1994 | ep | No |
| `chemicalbrothers-exitplanetdust` | Exit Planet Dust | 1995 | studio | No |
| `chemicalbrothers-digyourownhole` | Dig Your Own Hole | 1997 | studio | No |
| `chemicalbrothers-surrender` | Surrender | 1999 | studio | No |

## Add to catalogue

All four rows above: same title/year/type, in chronological order. They are not currently seeded. Use exact ids as above. `Fourteenth Century Sky` is also found as `14th Century Sky` / `Fourteenth Century Sky E.P.` on period sources; title/ID in this proposal use the spelled-out album name. `album_id` slug follows the guide; no earlier catalogue id exists.

## New enum tokens required

- **genres**: `funkybreaks` (AllMusic `Funky Breaks`), `clubdance` (AllMusic `Club/Dance`), `hardcoretechno` (AllMusic *Block Rockin' Beats* track description), `psychedelia` (DJ Mag *Surrender*). Do not remap onto a vaguely similar existing genre. Genres already available, such as `neopsychedelia`, `acidtechno`, `techhouse`, `downtempo`, `triphop`, `breakbeat`, remain unchanged.
- **production**: `cubase` (Steinberg Cubase) and `recycle` (Steinberg ReCycle). WIRED explicitly names both in discussing work on *Dig Your Own Hole*.
- **instruments**: no new instrument tokens proposed.

Update `src/data/scenes.ts`, any genre-family mapping that needs new tokens, `src/data/production.ts`, and the validator’s independently maintained genre token set, then run `npx vite-node scripts/validate-descriptors.ts` and tests. It is expected that the draft would not validate *before* catalogue and token imports.

## Co-billed albums

None this phase. Guest musicians/vocalists (e.g. Noel Gallagher, Beth Orton, Bernard Sumner) are **not** co-billed artists for these albums. Do not add to `coBilled.ts`.

## Credits and editorial cautions

- The original 1994 Dust Brothers billing is retained in `producers` as `The Dust Brothers`; the remaining three albums credit `The Chemical Brothers`. Neither Steve Dub (engineer) nor Cheeky Paul (editor) is entered as producer.
- `sounds_like` is an editorial sonic comparison; `influenced_by` requires documented links. The Beatles appear as documented *song-specific* homages on the 1997 and 1999 albums, not a general assumption about all the material.
- `electronic` measures how electronically sourced the entire album sounds; `polish` captures production finish. A sampled electric guitar can be heard without proving that a guitarist recorded in the session. Instrument/prod uncertainties are detailed per release in evidence notes.
- Exclude later reissue bonus tracks from the original 1997 and 1999 albums. Studio original years are 1995, 1997 and 1999.
- `Brothers Gonna Work It Out` (1998) is a notable **DJ mix** principally sequencing other recordings; excluded from this studio/landmark-original-material series, pending a separate decision on whether historical DJ mixes should be included. Likewise exclude `Live at the Social` (1996), other routine EP/single compilations and generic hits compilations.

## Next phase — Phase 02 (four new studio albums only)

1. `Come with Us` (2002)
2. `Push the Button` (2005)
3. `We Are the Night` (2007)
4. `Further` (2010)

Phase 03: `Hanna (Original Motion Picture Soundtrack)` (2011, landmark soundtrack), `Born in the Echoes` (2015), `No Geography` (2019), `For That Beautiful Feeling` (2023). This covers the ten released studio albums plus the early landmark EP and the qualifying 2011 soundtrack. Check if a genuinely new studio album was released after 2023 at the time of that phase; do not include announcements before release.

## Package

- `chemicalbrothers_phase01_rows_ONLY.csv`: **4 only**, exactly the user's 27 columns.
- `chemicalbrothers_phase01_sources.csv`: independent source registry including firsthand interviews and release credits.
- `chemicalbrothers_phase01_genre_evidence.csv`: exactly one row for each retained album/genre token with explicit album/track/texture scope.
- `chemicalbrothers_phase01_evidence-notes.md`: detailed album-level sources, disputed descriptions, non-obvious values.
- `chemicalbrothers_phase01_catalog-audit.csv`: four not yet in catalogue.

No scripts bundled; Claude imports and validates.

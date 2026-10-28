# CLAUDE IMPORT — The Cardigans / Phase 01

Branch: `descriptors`. **Read-only research delivery; this ZIP does not change GitHub.**

## Content and identifiers

New artist ID proposed: `cardigans` (not in either `catalog.ts` or `seed.ts` at research time; `docs/descriptors/cardigans.csv` did not exist).

| Album ID | Album | Year | Type | Catalog action |
|---|---|---:|---|---|
| `cardigans-emmerdale` | Emmerdale | 1994 | studio | ADD |
| `cardigans-life` | Life | 1995 | studio | ADD |
| `cardigans-firstbandonthemoon` | First Band on the Moon | 1996 | studio | ADD |
| `cardigans-granturismo` | Gran Turismo | 1998 | studio | ADD |

All four rows are new and `draft`. There are no previously described Cardigans albums to skip. None of the four is a compilation or live album. No co-billed releases in this phase.

## Artist influences (source-backed, artist-wide rather than blanket album assignments)

- **The Sundays**: Nina Persson recalls *Reading, Writing and Arithmetic* and the band’s subsequent record as personal formative listening. Interview: https://writewyattuk.com/2018/11/23/the-cardigans-from-indie-roots-to-gran-turismo-and-beyond-the-nina-persson-interview/ and https://www.thenewworld.co.uk/persson-of-interest-unbuttoning-the-voice-of-the-cardigans/
- **The Smiths**: Persson directly recalls the group were major Smiths listeners and identifies them as early influences: https://www.thenewworld.co.uk/persson-of-interest-unbuttoning-the-voice-of-the-cardigans/ and https://writewyattuk.com/2018/11/23/the-cardigans-from-indie-roots-to-gran-turismo-and-beyond-the-nina-persson-interview/
- **The Stone Roses**: Persson names the band among her formative musical influences: https://www.thenewworld.co.uk/persson-of-interest-unbuttoning-the-voice-of-the-cardigans/
- **Depeche Mode**: Specifically affected *Gran Turismo*; direct artist testimony: https://albumism.com/interviews/the-cardigans-magnus-sveningsson-revisits-the-enduring-legacy-of-gran-turismo and https://writewyattuk.com/2018/11/23/the-cardigans-from-indie-roots-to-gran-turismo-and-beyond-the-nina-persson-interview/
- **Radiohead**: Specifically affected *Gran Turismo*, per Magnus Sveningsson: https://albumism.com/interviews/the-cardigans-magnus-sveningsson-revisits-the-enduring-legacy-of-gran-turismo

Do not treat the band's Black Sabbath covers, producer Tore Johansson, critical analogies to Bacharach or ABBA, or unsupported similarities as `influenced_by`.

## New tokens

**None proposed.** All listed genres, instruments and production terms use the present Fandome tokens. No token additions or speculative genre classifications are required.

## Album edition / production caveats

- *Emmerdale* original Swedish 1994 release differs from later US reissues with bonus songs.
- *Life* original Swedish 1995 edition differs from UK/US reissues; US track listing reuses some *Emmerdale* material.
- *First Band on the Moon*: “Iron Man” is a cover, not proof of the album's musical influences.
- *Gran Turismo*: live drums and some guitars/basses tracked to analogue tape; material also edited/recorded in Pro Tools. Do not substitute a drum-machine model for recorded drum loops. The important documented sound influences are Radiohead and Depeche Mode.
- Album producer across these four is Tore Johansson. Engineers/arrangers are not added to `producers` without explicit production credits.

## Six files in this archive

1. `CLAUDE_IMPORT.md`
2. `cardigans_phase01_rows_ONLY.csv` — precisely 4 new rows, 27 columns
3. `cardigans_phase01_sources.csv` — album-specific links and claim categories
4. `cardigans_phase01_genre_evidence.csv` — each assigned genre with evidence and scope
5. `cardigans_phase01_evidence-notes.md` — decisions and conflicts
6. `cardigans_phase01_catalog-audit.csv` — additions, including remaining studio albums

Before committing, add `cardigans` to the artist catalog with these six albums, then run `npx vite-node scripts/validate-descriptors.ts` and the regular tests. The output is draft, not independently reviewed. 

## Phase 02 (complete remaining studio discography)

- *Long Gone Before Daylight* (2003)
- *Super Extra Gravity* (2005)

Skip *The Other Side of the Moon* (1997), *Best Of* (2008), concert albums and other compilations under standing exclusions.


## Claude import note

- 4 rows imported; vibraphone mapped to the existing token mallets.
- Catalogue: the 6 studio albums 1994-2005 (The Other Side of the Moon is a compilation, left out).
- Scene SE en 1990 pop,indie: sung in English, never a local discovery.
- Artist influences: Sundays, Smiths, Stone Roses (Persson), Depeche Mode, Radiohead (Sveningsson).
- The Sundays are both influence and likeness: kept in both.

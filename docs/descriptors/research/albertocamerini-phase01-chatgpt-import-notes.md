# CLAUDE IMPORT — Alberto Camerini / Fandome / Phase 01

Date: 2026-10-27. GitHub `descriptors` branch checked **read-only** for both `src/data/catalog.ts` and `src/data/seed.ts` and `docs/descriptors/albertocamerini.csv` (not found). There is **no pre-existing Alberto Camerini artist or album ID** and **no existing descriptor rows** to skip. Proposed new artist ID: **`albertocamerini`** (letters only, unoccupied by existing artist ids when checked).

## Import sequence

1. Create artist `albertocamerini` / display name **Alberto Camerini** in the Fandome catalog; add all eligible studio album entries under the proposed IDs in the catalog as required by the validator (including future phases, or at least phase 01 immediately).
2. Add missing canonical tokens before running the validator, if they have not subsequently been added.
3. Import `albertocamerini_phase01_rows_ONLY.csv` (four incremental rows, exact 27-field guide header). Use source and per-genre evidence CSVs to review; all statuses are `draft`.
4. Verify the two producer discrepancies against original 1976 and 1977 LP packaging; do not silently turn uncertain credits into a reviewed fact.
5. Run `npx vite-node scripts/validate-descriptors.ts` and associated project tests. No repository files have been modified here.

## Albums IN THIS PHASE

| album_id | title | year | type |
|---|---|---:|---|
| `albertocamerini-cenerentolaeilpanequotidiano` | Cenerentola e il pane quotidiano | 1976 | studio |
| `albertocamerini-gelatometropolitano` | Gelato metropolitano | 1977 | studio |
| `albertocamerini-comicicosmetici` | Comici cosmetici | 1978 | studio |
| `albertocamerini-albertocamerini` | Alberto Camerini | 1980 | studio |

## Albums to ADD to the catalog

The artist is absent: **all ten** following studio titles require catalog records (four now, six in later phases). Suggested stable IDs:

| id | title | year | type | phase |
|---|---|---:|---|---|
| `albertocamerini-cenerentolaeilpanequotidiano` | Cenerentola e il pane quotidiano | 1976 | studio | 01 |
| `albertocamerini-gelatometropolitano` | Gelato metropolitano | 1977 | studio | 01 |
| `albertocamerini-comicicosmetici` | Comici cosmetici | 1978 | studio | 01 |
| `albertocamerini-albertocamerini` | Alberto Camerini | 1980 | studio | 01 |
| `albertocamerini-rudyerita` | Rudy e Rita | 1981 | studio | 02 |
| `albertocamerini-rockmantico` | Rockmantico | 1982 | studio | 02 |
| `albertocamerini-angeliinbluejeans` | Angeli in blue jeans | 1986 | studio | 02 |
| `albertocamerini-dovelarcobalenoarriva` | Dove l'arcobaleno arriva | 1995 | studio | 03 |
| `albertocamerini-cyberclown` | Cyberclown | 2001 | studio | 03 |
| `albertocamerini-kidswannarock` | Kids Wanna Rock | 2005 | studio | 03 |

## Co-billed records

- **Kids Wanna Rock** (2005) is identified by MusicBrainz as **"Alberto Camerini & Skidsoplastix"**. This is not part of phase 01; when phase 03 is imported, check the original edition's printed artist string and `src/data/coBilled.ts`. Camerini's artist biography confirms collaboration with Skidsoplastix on *Cyberclown* (2001) too, but do **not** assume the album's printed credit is shared (MusicBrainz lists its album under Alberto Camerini alone).

## New canonical tokens to add before validator

- **Genre:** `sambarock` (the album listing specifies *samba rock*, distinct from `samba`); `fusion` (the album listing explicitly names *fusion*, not silently normalised to `jazzfusion`). Add definitions and parent links to `src/data/scenes.ts` and `src/data/genreFamilies.ts`. If either token is already in the branch by the time of import, reuse it.
- **Instrument:** `recoreco` (Brazilian scraped percussion, reco-reco, specifically credited on *Gelato metropolitano*). Add to `src/data/instruments.ts`.
- **Production:** no new tokens. `moog`, `minimoog` and `polymoog` already exist; models must remain distinguishable.

## ARTIST INFLUENCES (first-person or directly reported; not guest personnel)

- **Jimi Hendrix:** Camerini describes Hendrix's electric guitar as a watershed for his musical direction. Source: [Rolling Stone Italia, artist interview 2021](https://www.rollingstone.it/musica/interviste-musica/alberto-camerini-40-anni-dopo-rock-n-roll-robot-ero-famoso-come-bowie/548973/).
- **Bob Dylan:** says he sang Dylan's repertoire while developing as a musician. Source: [Mosaico, artist interview](https://www.mosaico-cem.it/cultura-e-societa/personaggi-e-storie/rock-ebraismo-politica-alberto-camerini-si-racconta/). This supports an early repertoire influence, **not** an attribution to a particular album.
- **The Rolling Stones:** same primary source says he performed their songs early on; repertoire influence only. [Mosaico interview](https://www.mosaico-cem.it/cultura-e-societa/personaggi-e-storie/rock-ebraismo-politica-alberto-camerini-si-racconta/).
- **Kraftwerk:** Camerini refers to their arrival while describing his transition to synth-driven rock, [Rolling Stone Italia interview](https://www.rollingstone.it/musica/interviste-musica/alberto-camerini-40-anni-dopo-rock-n-roll-robot-ero-famoso-come-bowie/548973/). Artist-era influence, **not automatically** each 1980s album.
- **Cheap Trick:** says he gravitated towards the band's sound and explicitly modelled the vocal delivery in 1980's “Voglio te” after them. [Rolling Stone Italia interview](https://www.rollingstone.it/musica/interviste-musica/alberto-camerini-40-anni-dopo-rock-n-roll-robot-ero-famoso-come-bowie/548973/). Also placed in 1980 album `influenced_by` because the track is confirmed.
- **Aerosmith:** recalls he *wanted to make music like Aerosmith* after the Cramps-to-CBS move, [Rolling Stone Italia interview](https://www.rollingstone.it/musica/interviste-musica/alberto-camerini-40-anni-dopo-rock-n-roll-robot-ero-famoso-come-bowie/548973/). Aspiration rather than demonstrated album-level imitation.
- **Frank Zappa:** Camerini specifically states that “Cenerentola” is inspired by Frank Zappa, [Rolling Stone Italia interview](https://www.rollingstone.it/musica/interviste-musica/alberto-camerini-40-anni-dopo-rock-n-roll-robot-ero-famoso-come-bowie/548973/). Album-level confirmed.

**Exclude:** David Bowie as a *musical* influence on these 1976–1980 album rows based only on makeup, fame, imagery or critical comparison (these are not direct song composition claims). Likewise collaborators such as Eugenio Finardi, Ares Tavolazzi, Roberto Colombo or Shel Shapiro are **not** coded as influences merely because they participated.

## Caveats

- Original 1976 debut is cited as produced by Camerini / Finardi / Villa in the album-specific sources; an artist biography also mentions Paolo Tofani as producer. Verify original label before modifying.
- 1977 disc producer: specific album listing credits **Ares Tavolazzi**; two artist biographies credit **Ares Tavolazzi and Giulio Capiozzo**. `producers` conservatively lists only Tavolazzi pending sleeve verification.
- The 1977 original eight-track studio *Gelato metropolitano* and the 1980 *Gelato metropolitano* compilation are **different releases**, not alternative versions of the same studio album. Exclude 1980 compilation.
- A 2019 reissue of *Gelato metropolitano* adds non-album singles. Do not contaminate instrumentation or track count with bonuses.
- 1980 self-titled album is sometimes informally called *Ska-tenati*, but **Alberto Camerini** is the original release title. Do not confuse it with the 1997 similarly named compilation.
- Values in `sounds_like` are editorial comparisons, not documented inspiration; lyric values and eight scores are Fandome judgments. All rows remain `draft`.

## Next phase 02

**Rudy e Rita** (1981), **Rockmantico** (1982), **Angeli in blue jeans** (1986), three studio albums. Phase 03: **Dove l'arcobaleno arriva** (1995), **Cyberclown** (2001), **Kids Wanna Rock** (2005). No live albums, greatest-hits, or remix compilations.

## Claude import note (27 Oct 2026)

- `fusion` mapped to the existing `jazzfusion` (same style); `sambarock` and instrument `recoreco` added.
- Producers checked against Discogs sleeve credits: debut Camerini / Finardi / Villa (Discogs shows none; it.wikipedia and OndaRock agree; Tofani only plays guitar on one track); Gelato metropolitano Ares Tavolazzi alone (Capiozzo not on the sleeve); Comici cosmetici Shel Shapiro (confirmed by Camerini, Rolling Stone Italia); 1980 Roberto Colombo.
- Debut production enriched from the sleeve: ARP (Patrizio Fariselli) and tapes played by Camerini (`arp`, `tapeeffects`). 1980: no drum machine credited (drums by Flaviano Cuffari and Dario Rezzola).
- Artist influences: Dylan and the Rolling Stones left out (songs he covered early on, not influences).

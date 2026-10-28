# CLAUDE IMPORT — FALCO / FANDOME PHASE 01

Research date: **28 October 2026**. Checked branch `descriptors` of `giampierofiorelli/Fandome` read-only. This is an incremental **four-album** batch; do not overwrite unrelated descriptor rows or work on `main`.

## Artist identity and archive status

- Artist: **Falco** (Johann Hölzel), Austria. Proposed Fandome artist ID: **`falco`**.
- Checked `src/data/seed.ts` and `src/data/catalog.ts`: **Falco is absent**; no existing Falco album IDs to preserve. `docs/descriptors/falco.csv` does not exist. The proposed `falco` ID does not collide with any present artist in the checked sources.
- Register the artist and add each phase-01 album before running the descriptor validator. IDs follow the repository's lowercase ASCII letters/numbers title-slug rule.
- Four studio albums described now (new catalogue records):

| Album ID | Official title | Original year | Type |
|---|---|---:|---|
| `falco-einzelhaft` | Einzelhaft | 1982 | studio |
| `falco-jungeroemer` | Junge Roemer | 1984 | studio |
| `falco-falco3` | Falco 3 | 1985 | studio |
| `falco-emotional` | Emotional | 1986 | studio |

No previously described Falco records were skipped. No co-billed albums in this phase. Preserve original unaccented **Junge Roemer** on the cover/album reference (some metadata says *Junge Römer*).

## Tokens requiring catalogue/validator review

- **NEW genre `neuedeutschewelle`** (music scene Neue Deutsche Welle; explicitly tagged for *Einzelhaft* on MusicBrainz). Keep distinct from `newwave`, which AllMusic also explicitly names.
- **NEW genre `germanrap`** (German rap named for *Falco 3*). Retain the album's other documented pop/rock styles; this is a track-level/voice-specific qualifier.
- All remaining genre tokens exist in the checked Fandome genre vocabulary, including `countryblues`, `phillysoul`, `newwave`, `poprock`, `dancepop`, `synthpop` and `hiphop`.
- **No new instrument or production tokens** were needed. Strictly avoid attributing a model or machine without original-album-level evidence. `linndrum` pertains to *Einzelhaft* only; neither its instrument family nor the Bolland sessions warrant automatic propagation of that exact model.

## ARTIST INFLUENCES (career-wide; separate from album-level musical influence links)

1. **David Bowie** — Strong. Falco specifically called Bowie his idol and the album/song *Heroes* inspiring, documented in *Die Presse* (`https://www.diepresse.com/5366728/ins-licht-wie-uns-falco-bleibt`). Label founder Markus Spiegel independently recalls Falco naming Bowie as a model in preparatory meetings (`https://falco.net/presse/interview-geschnitzt-aus-bowies-rippe-mit-markus-spiegel-2008/`). This supports `David Bowie (Heroes)` as album-level `influenced_by` on the early *Einzelhaft* era, alongside `sounds_like` comparisons with Bowie and Kraftwerk.
2. **Jaco Pastorius** — Medium, *musicianship/bass playing*, according to contemporary collaborator Thomas Rabitsch who says Falco tried to emulate Pastorius while playing funk bass in Hallucination Company (`https://wiener-online.at/2023/12/21/archiv-2007-mein-gott-falco/`). This is testimony, not a statement by Falco; do **not** automatically populate album `influenced_by` without an album-specific connection.
3. **Klaus Nomi** — Documented by Markus Spiegel (`https://falco.net/presse/interview-geschnitzt-aus-bowies-rippe-mit-markus-spiegel-2008/`) as a **stage persona / conceptual model**. **NOT** classified as a proven musical influence, so keep out of the `influenced_by` columns; mention here for historical completeness only.

### Special cases / limitations

- *Falco 3* originally released **1985** (GiG). AllMusic's US-market listing sometimes says **1986**: this is a territory/release date discrepancy, not a different original album. Retain 1985.
- *Junge Roemer*: Falco-Compendium primary reproduced credits list **Robert Ponger alone** as producer. Some secondary discographies credit Falco as co-producer; avoid assigning an unverified co-production in the CSV.
- *Falco 3*: Rob/Ferdi Bolland produced and arranged the principal album recordings, **Falco is producer on tracks 8 and 10** (Nothin’ Sweeter Than Arabia; It's All Over Now, Baby Blue), even though those sessions have other people credited as executive producers. Do not promote executive producers Curt Cress or Mats Björklund into the producer list.
- *Falco 3*: 'Munich Girls' reworks The Cars' 'Looking for Love'; 'It's All Over Now, Baby Blue' is a Bob Dylan cover. **No inference of The Cars or Bob Dylan as influenced_by** from covers; The Cars appears only under editorial sonic resemblance.
- *Emotional*: genre additions `swing`, `jazz`, `soul` and `blues` apply to **specific songs**, not the entire LP. See per-genre scope values in `falco_phase01_genre_evidence.csv`. Big-band arrangements belong to 'Crime Time'. Do not mistake remixes/extra tracks from 2021 deluxe for 1986 recording techniques.
- `sounds_like` is **editorial sonic comparison**, not evidence of personal influence; see source/track notes.
- Voice field distinguishes sung lines, speech and rapped delivery, but the numerical scales reflect the whole **original studio** LP. Confidence is about sourced evidence, not measured acoustics. `draft` means no independent second-person review yet.
- Genre `neuedeutschewelle` and `germanrap` must be added to the genre vocabulary/validator for a clean import. Do not silently rename them to nearby tokens. `drumprogramming` vs `linndrum` means technique vs identified machine and are therefore distinct.

## Discography boundary and follow-on

The specialist Falco-Compendium lists **eight** original studio albums. **Phase 02** should comprise *Wiener Blut* (1988), *Data de Groove* (1990), *Nachtflug* (1992), and *Out of the Dark (Into the Light)* (1998, posthumous original sessions). 

Do **not** include *Verdammt wir leben noch* (1999) or *The Spirit Never Dies* (2009) in studio phases: the specialist discography classifies them under **compilations**. It also lists live and remix releases separately. Audit file documents the omitted titles. `https://falco-compendium.at/musik/einzelhaft/` (sidebar discography taxonomy).

## Deliverables in this ZIP

1. `CLAUDE_IMPORT.md` (this file)
2. `falco_phase01_rows_ONLY.csv` (exact 27-column Fandome header; four new rows only)
3. `falco_phase01_sources.csv` (sources and what they support)
4. `falco_phase01_genre_evidence.csv` (one genre-evidence record per token and album; whole/track/texture scope)
5. `falco_phase01_evidence-notes.md` (reasoning, disagreements, limitations)
6. `falco_phase01_catalog-audit.csv` (eight studio releases and two explicitly excluded compilations)

After registering the new artist and two new genre tokens, import these four rows and run `npx vite-node scripts/validate-descriptors.ts` plus repository tests. No GitHub changes have been made by this research.

## Claude import note (28 Oct 2026)

The Cars removed from Falco 3's sounds_like: Munich Girls reworks their song (the original of a cover is not a comparison). Genres neuedeutschewelle and germanrap added; country AT added.

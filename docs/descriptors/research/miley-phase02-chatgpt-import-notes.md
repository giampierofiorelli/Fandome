# CLAUDE IMPORT — Fandome Miley Phase 02

**READ-ONLY catalog audit**: GitHub `giampierofiorelli/Fandome`, branch `descriptors`, checked 26 Oct 2026; artist id `miley`. `docs/descriptors/miley.csv` was not present at audit; this does **not** authorize republishing Phase 01. Phase 02 is strictly incremental: **import only these four Phase 02 rows**, never Phase 01, other artists, live albums, compilations or bonus editions. `status=draft` for every row.

## Phase contents (new rows only)

| album_id | title | year | type | catalogue action |
|---|---|---:|---|---|
| `miley-plastichearts` | Plastic Hearts | 2020 | studio | exists, keep |
| `miley-endlesssummervacation` | Endless Summer Vacation | 2023 | studio | exists, keep |
| `miley-somethingbeautiful` | Something Beautiful | 2025 | studio | exists, keep |
| `miley-basspersuades` | Bass Persuades | 2026 | studio | **ADD** |

**Add to `catalog.ts` before tests:** `['Bass Persuades', 2026]` under artist `miley`. Descriptor id `miley-basspersuades`. Exact original artist display credit **Miley / MILEY**, without surname; do not create a duplicate Fandome artist, and preserve `artist=Miley Cyrus` in descriptor row for import compatibility. Source: [Warner Music Ireland](https://www.warnermusic.ie/news/2026/miley-unveils-new-single-and-video-bass-persuades-new-album-drops-septemeber-18th/) and [Pitchfork full credits](https://pitchfork.com/story/read-the-full-credits-to-miley-cyrus-bass-persuades/).

**No co-billed albums in this phase.** Model/Actriz's feature and credited co-production on `Different Religion`, Andrew Wyatt's feature on `Neon Signs`, other guest features, and a single closing remix do not create separate co-billed album entries. The `coBilled.ts` source does not include Miley in the inspected branch.

## NEW GENRE tokens (add to `scenes.ts` AND `genreFamilies.ts`)

- `industrialpop` — Pitchfork Plastic Hearts uses industrial pop; assign parents pop + industrial/electronic as appropriate.
- `contemporarysingersongwriter` — AllMusic exact Contemporary Singer/Songwriter; define suitable parent songwriter and pop if justified.
- `discorock` — NME Something Beautiful calls Walk of Fame disco-rock; parent disco + rock.
- `dancepunk` — The Line of Best Fit Bass Persuades calls Different Religion dance-punk; parent dance + punk.

## NEW INSTRUMENT tokens (add to `instruments.ts`)

- `vibraphone` — Something Beautiful: credited Jonathan Rado on multiple original tracks.
- `omnichord` — Something Beautiful title track: credited Kenny Segal.
- `marxophone` — Something Beautiful More to Lose: credited Jonathan Rado.
- `dulcimerguitar` — Bass Persuades Orbit: specifically credited Michael Pollack, distinct from concert dulcimer.

## NEW PRODUCTION tokens (add to `production.ts`)

- `pulsar23` — Something Beautiful title track Pulsar-23 drum machine / interludes.
- `perkonshd01` — Something Beautiful interlude/Walk of Fame credited PERKONS HD-01.
- `modornf1` — Something Beautiful title track credited MODOR NF-1 synthesizer.
- `lexiconprimetime` — Something Beautiful title track credited Lexicon Prime Time processing equipment.

## ARTIST INFLUENCES

**Not repeated**: artist-wide influences were supplied in Phase 01, per the project rule. This phase adds only album-specific evidence in `influenced_by`; see evidence-notes file. Documented *Something Beautiful* influence Pink Floyd from a direct [Harper's Bazaar artist interview](https://www.harpersbazaar.com/culture/art-books-music/a62870734/miley-cyrus-new-music-interview-2024/?os=ioxa42gdub5u1enqic0).

## Source/edition/provenance caveats

- **Plastic Hearts:** original 12 studio songs; Qobuz's remixes and **live** covers at tracks 13–15 are excluded. Thus live-specific `Stacy Jones` production credit must not enter the 2020 album. **Jon Bellion** and **Brandon Bost** are additional-production-only, excluded. `Britney Spears|Metallica` is based on Cyrus's contextual remark on the new record; confidence medium for influence even though row overall high.
- **Endless Summer Vacation:** original 12 songs; `Flowers (Demo)` is not included. Official credits show Miley executive-producer-only, so do not incorrectly add her to `producers`. Guardian calls River a Roland-303 acid line, but there is no official hardware identification; do not assign `tb303` to this album.
- **Something Beautiful:** original 13-track album, film is separate visual work; no deluxe songs. Production gear is exact credited model whenever possible. EMS Synthi and OB-6 are not assigned to a wrongly assumed sub-model. Marie Davidson/Soulwax sampled track is **sampling**, NOT `influenced_by`. Confirm newly introduced tokens against validator.
- **Bass Persuades:** genuinely released 18 September 2026, Atlantic; **Miley** billing. Album original ten-track sequence includes one Model/Actriz remix, counted inside studio album row (not a new remix record). 2026 producer lists differ slightly across track-level TIDAL and Pitchfork; confidence medium for overall sonic interpretation.
- **No live albums or career compilations** are included. Source URLs in the files link to consulted pages. `notes` field is max 15 words. `genres` order reflects coverage; specific one-track genres are last.

## Next phase

**No Phase 03 currently planned**: this completes all released original studio albums and the relevant 2019 EP **from Bangerz onward through 26 October 2026**. The earlier Phase 01 and this Phase 02 total eight rows. Do not go back to 2007–2010 without a new user instruction. Revisit only if a genuinely new record is released after that cutoff.

## ZIP members

- `CLAUDE_IMPORT.md` (this document)
- `miley_phase02_rows_ONLY.csv` (exact 27-column header, four Phase 02 rows)
- `miley_phase02_sources.csv` (album-level citations)
- `miley_phase02_genre_evidence.csv` (one source/scope per genre per row)
- `miley_phase02_evidence-notes.md` (detailed critical reasoning, producer/instrument provenance)
- `miley_phase02_catalog-audit.csv` (current catalogue vs additions)

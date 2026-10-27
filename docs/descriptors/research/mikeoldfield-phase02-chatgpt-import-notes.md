# CLAUDE_IMPORT — Mike Oldfield, phase 02

Artist: **Mike Oldfield** (`mikeoldfield`, **proposed ID from phase 01**).  
Reference: Fandome repository branch `descriptors`, read-only checked **27 October 2026**.  
Scope: **four fresh draft rows only**, studio originals 1979–1983. Do not repeat any phase 01 entries.

## Import only the four rows in this ZIP

| album_id | title | year | type | catalogue action |
| --- | --- | ---: | --- | --- |
| `mikeoldfield-platinum` | *Platinum* | 1979 | studio | ADD |
| `mikeoldfield-qe2` | *QE2* | 1980 | studio | ADD |
| `mikeoldfield-fivemilesout` | *Five Miles Out* | 1982 | studio | ADD |
| `mikeoldfield-crises` | *Crises* | 1983 | studio | ADD |

All four were absent from `src/data/catalog.ts` and `src/data/seed.ts`, and no `docs/descriptors/mikeoldfield.csv` existed at the read-only check. Preserve any IDs actually created by Claude since phase 01 if they differ; do **not** silently invent duplicates. Album ids here follow the `mikeoldfield-` prefix proposed in phase 01, so insert the artist into the catalog before running validators. Earlier phase 01 rows should be appended or already present **separately**, never recopied from this ZIP.

## Files

- `mikeoldfield_phase02_rows_ONLY.csv` — 27 columns, **four new rows, no older records**.
- `mikeoldfield_phase02_sources.csv` — source bibliography by album (artist official site, liner transcriptions, AllMusic, period review, interview, secondary classifications).
- `mikeoldfield_phase02_genre_evidence.csv` — one provenance row per genre, explicitly marking whole album vs track-limited vs retrospective style.
- `mikeoldfield_phase02_evidence-notes.md` — per-album rationale for ratings, instruments and production, edition and influence cautions.
- `mikeoldfield_phase02_catalog-audit.csv` — confirms all four original albums must be added.

## New tokens to review/add (not already listed at preflight)

**Genres:** none. All genre tokens are currently in the repository's genre list and validator.

**Instruments:** none. `mallets` is canonical for vibraphone/marimba; `bagpipes` for Northumbrian bagpipes; `drummachine`/`vocoder`/`sampler` exist already. The equipment model names below belong in **production**, not instruments.

**Production:**

| Token | Album | Source evidence |
| --- | --- | --- |
| `rolandsh2000` | *Platinum* | Tubular.net's album-specific synth list identifies Roland SH-2000 |
| `oberheimdsx` | *Crises* | Tubular.net album studio/equipment notes describe Oberheim DSX sequencer |
| `quantecroomsimulator` | *Crises* | Original sleeve (via Dark Star/Tubular.net) names Quantec Room Simulator |

These names are distinct from `oberheimdmx`, `oberheimobxa`, `rolandvp330`, `prophet5`. Add tokens to `src/data/production.ts` and validator if still absent. Manufacturer and model credits come from the explicitly cited album technical/sleeve material, not assumptions based on the era.

## Co-billed releases

None. Maggie Reilly, Jon Anderson, Roger Chapman, Phil Collins, Paddy Moloney, Carl Palmer and Simon Phillips appear in their performance/production roles; **none** is listed as a co-billed main artist on the original album. In particular, *Crises* is billed solely to Mike Oldfield despite its featured singers.

## Important edition, source and influence caveats

- **Platinum (1979):** early LP contains *Sally*; the common later edition substitutes *Into Wonderland* even where sleeve copy still reads Sally. `vocalfilter` is grounded in Newman's treatment of the **original Sally**, not necessarily every pressing. The US *Airborn* is a regional recut, not a new studio album. *North Star* is a Philip Glass composition incorporated in a suite; **do not turn the cover into `influenced_by`**. See evidence notes.
- **QE2 (1980):** Oldfield and David Hentschel are the two producers; the original album contains covers of ABBA's *Arrival* and The Shadows' *Wonderful Land*, neither an `influenced_by` entry. Specialist sources differ on precise vocoder model attribution; only generic `vocoder` retained. 2012 deluxe **live** bonus material is excluded.
- **Five Miles Out (1982):** Oldfield produced the album; Tom Newman is credited as co-producer of the **title track only**, but deserves a row producer credit. No inference from an in-studio photograph that a named vocoder machine was on every recording.
- **Crises (1983):** co-producer is **Simon Phillips**, alongside Oldfield; not Nigel Luby (engineer). Fairlight (sampler), OB-Xa/DMX and DSX are documented. Roland VP-330 is for **string texture**, not evidence of a lead vocal vocoder. Original UK album only, no regional/deluxe additions.
- Four `influenced_by` cells are deliberately blank: there is no qualified first-person/producer statement of a **specific musician shaping these particular albums**. `sounds_like` fields are editorial comparisons, which may be refined; they are not influence claims.
- `newage` follows retrospective AllMusic classifications and receives lower genre priority; track-limited dance/pop descriptors likewise are not primary when long-form progressive composition dominates.

## No unnecessary catalog additions

*Exposed* (1979) is live and intentionally excluded. *Airborn* is an alternate North American version of *Platinum* and not a separate album. Song-cover credits do not imply a co-billed artist.

## Next phase 03 (planned)

1. *Discovery* (1984) — studio
2. *The Killing Fields* (1984) — soundtrack
3. *Islands* (1987) — studio
4. *Earth Moving* (1989) — studio

Separate those four from phase 01/02 and verify original release month of *Discovery* vs *The Killing Fields* before ordering the same-year entries. Claude should use this ZIP only for import/validation, not auto-modify historical rows.

## Claude import note (27 Oct 2026)

sounds_like: Philip Glass removed from Platinum (North Star is his piece, covered), Yes removed from Crises (Jon Anderson sings on it). Production tokens rolandsh2000, oberheimdsx, quantecroomsimulator added.

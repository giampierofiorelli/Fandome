# Fandome / a-ha — Phase 01 — instructions for Claude

**Research date:** 27 October 2026. **Source repository:** `giampierofiorelli/Fandome`, `descriptors` branch (read-only). One incremental ZIP with six documents. Do **not** import anything from previous artists or future phases; do not edit the GitHub repo automatically from this package.

## Artist identity and phase scope

- Fandome artist ID: **`aha`** (the official display name is `a-ha`), confirmed in `src/data/catalog.ts`. No standalone `aha` artist or duplicate album ids found in `src/data/seed.ts`.
- `docs/descriptors/aha.csv`: **not present**, checked via GitHub branch `descriptors`, 27 October 2026. No overlap with previous descriptor rows. The landmark history file contains no `aha` rows.
- **Four rows for import:**
  1. `aha-huntinghighandlow` — *Hunting High and Low* (1985, studio; already in catalogue)
  2. `aha-scoundreldays` — *Scoundrel Days* (1986, studio; already in catalogue)
  3. `aha-stayontheseroads` — *Stay on These Roads* (1988, studio; already in catalogue)
  4. `aha-eastofthesunwestofthemoon` — *East of the Sun, West of the Moon* (1990, studio; already in catalogue)

**Already-described/skipped:** none. No live albums, greatest hits, extended editions, B-sides, soundtrack-compilation rows or bonus demos are included. The *Living Daylights* original 1987 recording is part of the 1988 studio LP, not a separate soundtrack-album descriptor.

## Actions required in the catalogue (all albums through 27 Oct 2026)

11 studio albums released from 1985 through 2022, per the a-ha official discography and Fandome catalogue check. **Already in Fandome:** Hunting High and Low; Scoundrel Days; Stay on These Roads; East of the Sun, West of the Moon; Minor Earth Major Sky; True North. **Missing; add before importing their descriptor rows in later phases**:

| Title | Year | Type | Suggested catalogue album ID |
|---|---:|---|---|
| Memorial Beach | 1993 | studio | `aha-memorialbeach` |
| Lifelines | 2002 | studio | `aha-lifelines` |
| Analogue | 2005 | studio | `aha-analogue` |
| Foot of the Mountain | 2009 | studio | `aha-footofthemountain` |
| Cast in Steel | 2015 | studio | `aha-castinsteel` |

All IDs use current `catalog.ts` slug algorithm (lowercase letters/digits only), not a hyphenated artist slug. Fandome seed and catalogue paths were checked separately.

## ARTIST INFLUENCES — first-person sources, not comparison lists

These are **documented musical influences of a-ha members and their early artistic development**, not automatically album-by-album `influenced_by` entries:

| Artist | Evidence | Primary or first-person source |
|---|---|---|
| The Doors | Magne Furuholmen specifically names them among longstanding personal influences; a-ha recalls early pre-London listening to them. | https://crypticrock.com/interview-magne-furuholmen-of-a-ha/ and https://www.theguardian.com/music/2009/aug/17/decca-aitkenhead-meets-aha |
| The Beatles | Magne personally names them among his 1960s formative musical influences. | https://crypticrock.com/interview-magne-furuholmen-of-a-ha/ |
| Bob Dylan | Magne cites his music as a formative influence. | https://crypticrock.com/interview-magne-furuholmen-of-a-ha/ |
| Leonard Cohen | Magne cites his music as a formative influence. | https://crypticrock.com/interview-magne-furuholmen-of-a-ha/ |
| Jimi Hendrix | Magne cites Hendrix among personal influences; the band also explicitly recalls Hendrix listening during its pre-fame formation. | https://crypticrock.com/interview-magne-furuholmen-of-a-ha/ and https://www.theguardian.com/music/2009/aug/17/decca-aitkenhead-meets-aha |
| Janis Joplin | Magne lists her as a formative influence. | https://crypticrock.com/interview-magne-furuholmen-of-a-ha/ |
| Nick Drake | Magne lists him as a formative influence. | https://crypticrock.com/interview-magne-furuholmen-of-a-ha/ |
| Led Zeppelin | Morten and Magne explicitly recall listening to them upon moving to London in 1983. | https://www.theguardian.com/music/2009/aug/17/decca-aitkenhead-meets-aha |
| Soft Cell | Magne describes their synth sound as resonating with early a-ha's musical approach when they arrived in London. | https://www.theguardian.com/music/2009/aug/17/decca-aitkenhead-meets-aha |
| Uriah Heep | Morten Harket confirms he admired the band as a teenager and wanted to sing for them. | https://www.theguardian.com/culture/2016/may/04/morten-harket-interview-a-ha-john-barry |
| Richard Strauss | **Album-specific:** Harket says the rising-octave chorus of *Take On Me* drew from *Also sprach Zarathustra*. | https://www.theguardian.com/culture/2015/sep/15/a-ha-how-we-made-take-on-me |

Scope restriction: historical favorites do **not** all become influences for every album; therefore only specifically grounded Soft Cell and Richard Strauss are in phase 01's *Hunting High and Low* `influenced_by`. The solo-member personal influences above are a reference list for Claude, not album-specific assertions. The profile source from Cryptic Rock surfaced in web search but its page blocked full-page retrieval, so its detailed wording should be independently rechecked when importing; the Guardian sources are directly retrievable and take precedence.

## Token and schema check

- **New genre tokens:** none. All five/six used genre keys already occur in `src/data/scenes.ts` and the validator. `swamppop` is an anomalous one-source AllMusic tag for Scoundrel Days; not claimed as an album-wide music style or proposed for addition pending stronger evidence.
- **New instrument tokens:** none. Original studio-only credits substantiate each instrument, with **track-limited** sounds identified clearly in `evidence-notes.md`.
- **New production tokens:** none. Named synths/sequence systems on *Hunting High and Low* are **confirmed for Take On Me** only. `liverecording` on the 1990 album means live takes in the recording studio, **not** a concert recording.
- **Co-billed albums:** none in this phase. All four original releases credit a-ha alone.
- All eight scalar values are editorial 0–5 judgments; `status=draft` throughout; 27 columns and notes ≤15 words; source and genre-evidence files map to specific album IDs.

## Caveats for Claude

1. The 1985 hit single of *Take On Me* used the Alan Tarney arrangement; earlier demo and Tony Mansfield single mixes must not overwrite its equipment or production credit.
2. 1985 debut album **also** credits John Ratcliff as co-producer on *Love Is Reason*; Ratcliff remixes numerous other tracks, which does not extend the producer credit to those tracks.
3. *Scoundrel Days* shifts some production to Mags and Pål; Tarney remains dominant.
4. *Stay on These Roads* is a studio album despite inclusion of the 1987 Bond theme; John Barry is a track writer only.
5. 1990 LP contains a cover (*Crying in the Rain*) and a rare Magne lead vocal (*The Way We Talk*). Don't infer musical influences from cover or guest credits.
6. 1990 sources disagree on exact day of release (22 or 27 October). Export needs **year 1990** only.
7. Source pages for digital deluxe editions contain later bonus recordings; all 27-column rows describe original album programmes only.

## Phases remaining

- **Phase 02:** *Memorial Beach* (1993), *Minor Earth Major Sky* (2000), *Lifelines* (2002), *Analogue* (2005).
- **Phase 03:** *Foot of the Mountain* (2009), *Cast in Steel* (2015), *True North* (2022).

**Import sequence:** update missing albums in `catalog.ts` when their phase arrives; import the 27-column CSV for this phase only; review `genre_evidence` and `evidence-notes`; run `npx vite-node scripts/validate-descriptors.ts` and project tests. GitHub remains unchanged by this package.

## Claude import note (27 Oct 2026)

Richard Strauss removed from Hunting High and Low `influenced_by`: the Take On Me chorus borrows a melodic idea from Also sprach Zarathustra, and borrowed melodies are not influences (owner's rule). Soft Cell kept (Guardian 2009, the band's own account).

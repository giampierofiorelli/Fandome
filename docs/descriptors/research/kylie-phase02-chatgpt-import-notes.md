# KYLIE MINOGUE — Fandome Phase 02

Source/repository check: **26 October 2026**; GitHub `descriptors` branch read-only. Artist ID: `kylie` (`seed.ts`, `scenes.ts`). No existing `docs/descriptors/kylie.csv` at check; this ZIP adds **only phase 02** album rows. Phase 01 four earlier records excluded; no live/compilation/re-recording album.

## Contents

| Exact album ID | Original album | Year | Type | Catalogue |
|---|---|---:|---|---|
| `kylie-kylieminogue` | Kylie Minogue | 1994 | studio | **ADD** |
| `kylie-impossibleprincess` | Impossible Princess | 1997 | studio | **ADD** |
| `k-lightyears` | Light Years | 2000 | studio | existing `seed.ts` ID |
| `k-fever` | Fever | 2001 | studio | existing `seed.ts` ID |

The 27-column CSV is **incremental**, four new rows, ordered chronologically. Source files, per-genre attribution, detailed evidence notes and a four-record catalog audit accompany it. No scripts. The four releases were first issued in the stated years, regardless of later territorial rereleases.

## Album additions / exact IDs

- Add `kylie-kylieminogue` (1994, studio). This is **not** *Kylie* (1988), nor the differently retitled UK version of the 1997 album.
- Add `kylie-impossibleprincess` (1997, studio). Its original title was *Impossible Princess*, sometimes released as *Kylie Minogue* in the UK in 1998. Do not double count.
- Preserve `k-lightyears` (2000) and `k-fever` (2001) exactly as in `src/data/seed.ts` (historical `k-` IDs), **not** `kylie-lightyears` or `kylie-fever`.
- Original album year for *Fever* is 2001, **not** the 2002 US release date.

The current `catalog.ts` contains non-seed additional artist rooms; Kylie is in `seed.ts`. `docs/descriptors/kylie.csv` is absent (no duplicates to skip), subject to checking again just before Claude imports.

## Co-billed albums in this phase

**None.** *Kids* on *Light Years* is a song duet with Robbie Williams, also on his own album, **not** a jointly billed Kylie/Robbie studio album. No co-billed entry should be generated from it.

## Proposed new genre tokens

| Token | Named source | Reliability / use |
|---|---|---|
| `vocaltrance` | [AOTY: Impossible Princess](https://www.albumoftheyear.org/album/13861-kylie-minogue-impossible-princess.php) | Album-level crowdsourced secondary tag only, **weak**; last in ordered genre list |
| `progressivetrance` | [Chartsurfer: original 1997 promo edition](https://www.chartsurfer.de/artist/kylie-minogue/impossible-princess-album_fhchfv.html) | Physical-edition style metadata, **moderate**; texture/partial |
| `funkyhouse` | [AOTY: Fever](https://www.albumoftheyear.org/album/1803-kylie-minogue-fever.php) | Secondary named genre; some tracks, **moderate** |

Tokens are exact literal forms of sourced genre names; Claude must add to genre type, families and validator before validation. No new instrument or production tokens. Preserve distinct `synthpop`/`electropop`. Genre evidence CSV marks track-only styles explicitly. **If Claude does not permit uncorroborated genre tokens during review, reject them with an explicit reviewer decision rather than silently mapping to a different genre.**

## ARTIST INFLUENCES

Not repeated: career-wide Kylie influences were delivered in **phase 01**, as requested. Here album-specific `influenced_by` is handled in the four rows and the evidence notes. Most importantly, Kylie explicitly names **Björk, Garbage, Tricky** when recalling the mid-1990s sonic change in [PAPER's interview](https://www.papermag.com/kylie-minogue-step-back-in-time). Music criticism supports **Donna Summer, Cheryl Lynn, Tina Charles, The Hues Corporation** as specific *Light Years* reference points in [Albumism (Quentin Harrison)](https://albumism.com/features/kylie-minogue-light-years-turns-20-anniversary-retrospective). Guests, covers, samples, songwriters and literary references are not automatically `influenced_by`.

## Crediting, recordings and genre cautions

- Only original ten-track *Kylie Minogue*, original twelve-track *Impossible Princess*, standard *Light Years* (plus documented hidden original *Password* solely for the producer audit, no forced genre from its rarity) and original twelve-track *Fever*. The *Light Years* original album includes a hidden song on some pressings; do not add a new album row.
- *Impossible Princess*: producer duo **Brothers in Rhythm**, plus track credits for Bradfield/Eringa, Ball/Vauk and Dougan; co-producer **Jay Burnett** on *Jump*. **Nick Cave** is neither an album producer nor automatically its musical influence.
- *Light Years*: Robbie Williams and Paula Abdul have songwriting/featured-voice roles, not producer credits. Guy Chambers and Steve Power have documented production roles.
- *Fever*: Steve Anderson wrote *Give It to Me* but **Mark Picchiotti** produced it. Tom Nichols wrote *Fever* but did **not** produce that title track; Nichols **co-produced *Burning Up***. Parlophone's [original album-credit site](https://kyliefevercredits.parlophone.co.uk/) is the most direct authority.
- Score estimates are internally anchored, not claimed to be scientific readings. Lower-confidence genres are explicitly scope-marked. Unverified hardware and software models have been omitted across all four rows.
- There is **no direct album production role for Kylie herself** evidenced in the four original credits, even where she is a co-writer. `influenced_by` for 1994/Fever deliberately remains empty.

## Next phase — Phase 03 (3 chronological studio albums)

1. *Body Language* (2003) — proposed new ID `kylie-bodylanguage`.
2. *X* (2007) — proposed new ID `kylie-x`.
3. *Aphrodite* (2010) — proposed new ID `kylie-aphrodite`.

Later studio albums proceed in chronological phases. No live albums, retrospectives, *The Abbey Road Sessions* or repeated songs in new arrangements.

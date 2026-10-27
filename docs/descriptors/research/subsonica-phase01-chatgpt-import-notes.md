# CLAUDE_IMPORT — Subsonica, phase 01

**Research cut-off:** 27 October 2026. **GitHub:** `giampierofiorelli/Fandome`, branch `descriptors`, read-only.

## Incremental contents (four NEW descriptor rows, no other artists)

- `subsonica-subsonica` — *Subsonica* (1997, studio)
- `subsonica-microchipemozionale` — *Microchip emozionale* (1999, studio)
- `subsonica-amorematico` — *Amorematico* (2002, studio)
- `subsonica-terrestre` — *Terrestre* (2005, studio)

`docs/descriptors/subsonica.csv` was not present on the branch at research time (404); this is phase 01, not a replacement of later-stage data.

## Catalogue additions required before validation

`catalog.ts` currently contains only *Microchip emozionale*, *Amorematico*, *Terrestre*, *L’eclissi*, *Eden*. The band’s official discography confirms the following **missing** releases (do not import their descriptor rows until their designated phase):

| Album ID | Title | Year | Type | Phase |
|---|---|---:|---|---|
| `subsonica-subsonica` | Subsonica | 1997 | studio | phase01 |
| `subsonica-unanaveinunaforesta` | Una nave in una foresta | 2014 | studio | phase02 |
| `subsonica-8` | 8 | 2018 | studio | phase02 |
| `subsonica-microchiptemporale` | Microchip temporale | 2019 | studio | phase03 |
| `subsonica-mentalestrumentale` | Mentale strumentale | 2020 | studio | phase03 |
| `subsonica-realtaaumentata` | Realtà aumentata | 2024 | studio | phase03 |
| `subsonica-terrerare` | Terre rare | 2026 | studio | phase03 |

Official catalogue reference: https://www.subsonica.it/discografia.asp

- *Microchip temporale* is an album of **new 2019 studio re-recordings and guests**, not a mere remix. Add to album catalogue as a separately listed studio reimagining; the exact data `type` should be confirmed on import if the application has a better subtype.
- *Mentale strumentale* was reportedly recorded around 2004 and first released in **2020**. Year is **release year**, not recording year.
- *Terre rare* is a **2026 released album**, not a forthcoming title as of the cut-off.
- Early EPs, live albums and compilations omitted as documented in evidence notes; these do not produce descriptor rows or additions now.

## Albums billed to more than one artist

**None in phase 01.** Album guests (Morgan, Daniele Silvestri, Claudio Coccoluto, Krisma, Rachid and DJ Roger Rama) are collaborations at the song/session level, **not** co-billed records. No `coBilled.ts` entries requested.

## New tokens to register

- Genre: **none**. All emitted genre tokens are already present in `scenes.ts` (check current branch against the CSV).
- Instrument: **none**. Existing `instruments.ts` tokens used.
- Production: **none**. Existing `production.ts` tokens used.
- A source occasionally uses composite labels (e.g. “electro-dub-pop”). The evidence file documents their literal components rather than silently inventing or mapping an approximate single token.

## ARTIST INFLUENCES — whole career/background (phase 01 only)

**Source:** Clara Martinelli, Claudio Fabretti et al., OndaRock band biography:
https://www.ondarock.it/monografie/subsonica/

- **Pink Floyd** — biography explicitly reports Pink Floyd psychedelia in the band’s initial listening background. This is biographical evidence, **not** a verified direct first-person admission for any specific record.
- **The Chemical Brothers** — same biography explicitly reports their passion for British electronica represented by Chemical Brothers; band-wide biographical account, not album-specific borrowing.
- **Massive Attack** — biography identifies British trip-hop in their cross-genre formation as strongly linked to Massive Attack.
- **Casino Royale** — biography describes their dub / soul / trip-hop approach as an especially close reference for Subsonica. Debut-specific critic also cites *Sempre più vicini* (1995).

**Attribution limit:** none of the above four is presented as a verbatim direct interview quotation. These are biography/qualified-critic attributions. If importer requires **only artists explicitly named by the band themselves**, tag the four as `biographical, not confirmed first-person` pending a direct interview. Source URL is above; no claim of an undocumented interview is being made.

**Album-only documented influence:** Ennio Morricone — Max Casacci directly cites 1960s film-score arrangements and their atmospheres while explaining *Amorematico*. Source: https://www.rockol.it/news-39821/amorematico-il-presente-secondo-i-subsonica. This stays in **Amorematico.influenced_by**, not global band influences.

## Evidence caveats & disagreements

- See `subsonica_phase01_evidence-notes.md`: each scale, instruments, producer distinction, track-specific genres, critic disagreements and reissue issues explained separately.
- The debut’s ancillary instrument and Boosta coproduction credits derive partly from an accessible secondary transcription; manually verify physical liner notes if available. Do **not** turn vague production credits into named synth models.
- The 1999 original *Microchip emozionale* and expanded 2000 edition have different track positions; exclude additions from the original album’s claims. The ambiguous “track 6” violin/orchestral credits were deliberately left out.
- *Amorematico* is reviewed harshly by OndaRock and favourably by Rolling Stone. `landmark=1` is based on career significance, not uniform critical acclaim.
- *Terrestre* retains a rock focus despite club passages. Later critic comparisons to nu-metal are not enough to call the whole album nu-metal.
- Exactly **27** columns match the user header and GitHub validator. No extra columns or changed ordering.

## Phase plan — NO rows for these albums in this ZIP

**Phase 02:** *L’eclissi* (2007), *Eden* (2011), *Una nave in una foresta* (2014), *8* (2018).
**Phase 03:** *Microchip temporale* (2019), *Mentale strumentale* (2020), *Realtà aumentata* (2024), *Terre rare* (2026).

## ZIP manifest

- `CLAUDE_IMPORT.md`
- `subsonica_phase01_rows_ONLY.csv` (header plus four albums)
- `subsonica_phase01_sources.csv`
- `subsonica_phase01_genre_evidence.csv`
- `subsonica_phase01_evidence-notes.md`
- `subsonica_phase01_catalog-audit.csv`

Import catalogue rows and any confirmed data-model changes first, then phase rows. Run the Fandome repository validator/tests. No scripts or GitHub commits included.

# CLAUDE_IMPORT — Dire Straits, Phase 01

**Fandome artist ID:** `direstraits` (existing in `src/data/catalog.ts` and `src/data/scenes.ts`). **Branch checked:** `descriptors` on 2026-10-28, read only.

## Included albums (4 new descriptor rows)

| album_id | Album | Year | Type | Catalog |
|---|---|---:|---|---|
| `direstraits-direstraits` | Dire Straits | 1978 | studio | already in catalog |
| `direstraits-communiqu` | Communiqué | 1979 | studio | already in catalog |
| `direstraits-makingmovies` | Making Movies | 1980 | studio | already in catalog |
| `direstraits-loveovergold` | Love over Gold | 1982 | studio | already in catalog |

There was **no `docs/descriptors/direstraits.csv`** in the branch at the time of inspection. Do not recreate catalog entries, and check again immediately before importing because Claude may have imported another batch meanwhile. No previous albums are repeated. The artist has six original studio albums: the two remaining go into Phase 02.

## Files in this ZIP

- `direstraits_phase01_rows_ONLY.csv`: four 27-column descriptor records, header exactly as in Fandome guide.
- `direstraits_phase01_sources.csv`: traced, album-specific critical and credit sources.
- `direstraits_phase01_genre_evidence.csv`: 29 genre decisions, one row per assigned genre with strength and album scope.
- `direstraits_phase01_evidence-notes.md`: sourcing caveats, instrumentation, production and scales explained by album.
- `direstraits_phase01_catalog-audit.csv`: original catalog check.
- `CLAUDE_IMPORT.md`: this file.

## Tokens / edits

- **No new genre tokens.** All genre tokens are part of the permitted `Genre` union on the checked `descriptors` branch.
- **No new instrument or production tokens.** `resonatorguitar`, `vibraphone`, `marimba`, `synthprogramming` are already allowed.
- **No co-billed album** in this phase. Credits to Bruce Springsteen's keyboardist Roy Bittan on *Making Movies* do not make this a collaboration album.
- **Production instruments:** only verified album-specific instruments have been entered. A dedicated electronic-production token is present only for *Love over Gold*, where the album credits explicitly list Ed Walsh's synthesizer programming. Empty `production` cells on earlier albums are intentional, not missing data.
- **Genres with indirect support:** tags `countryrock` on the debut, `rootsrock` and `poprock` on *Communiqué*, and `softrock` on *Love over Gold* are weaker/contextual and may be removed if import reviewers require only explicit direct whole-album names. See `genre_evidence.csv` for scope and strength.
- **Album ID rules:** `direstraits-communiqu` is the accent-stripped Fandome album slug for *Communiqué*. Preserve existing IDs if the current catalog now defines an exception; never create an alternate accent-ID. For this batch, name display title **Love over Gold**, as in the Fandome catalog / official original.

## ARTIST INFLUENCES (general; sourced first-person statements; not blanket per-album claims)

- **Bob Dylan:** Mark Knopfler said Dylan influenced him as a teenager, directly in a 1984 *Guitar Player* interview (as republished by *Guitar Player*). {urls['gp_1984']}
- **J.J. Cale:** Knopfler said he listened to a great deal of Cale when his guitar style was developing, in a reprinted older interview. Treat this reprint as less authoritative than the Dylan interview. {urls['jjcale_interview']}
- **The Shadows / Hank Marvin:** Knopfler explicitly identified The Shadows among the English influences during the band's early years in a 1979 interview; he describes childhood hero Hank Marvin in a later interview. {urls['guardian_1979']} | {urls['gp_2024']}
- **Chet Atkins:** Knopfler explicitly accepted Chet Atkins as a major influence in *Guitar Player* and cites lessons from the guitarist. {urls['gp_2022']}

`influenced_by` is **empty in individual album rows** because these general statements do not reliably prove influence on each named record. The J.J. Cale and Dylan critical *comparisons* belong in `sounds_like`.

## Important caveats

1. *Dire Straits* (1978) album cut of **Sultans of Swing** is a separate recording from the earlier single; do not mix versions when logging instrumentation (official band discography).
2. *Communiqué* (1979) was recorded at Compass Point Studio in Nassau in December 1978 and mixed at Muscle Shoals, Alabama, in January 1979. **B. Bear** is Barry Beckett's pseudonym, so do not treat him as a fifth individual or list him twice as producer.
3. *Making Movies* (1980) does **not** have an album performance credit for David Knopfler (he left the group in the sessions); Roy Bittan, of the E Street Band, is **guest keyboardist**, not a co-producer. The prelude to *Tunnel of Love* quotes *The Carousel Waltz* by Rodgers and Hammerstein: a quotation, not an `influenced_by` claim.
4. *Love over Gold* (1982): **Mark Knopfler alone** is the credited producer; Neil Dorfsman is the engineer, not co-producer. Ed Walsh is credited for synthesizer programming, and Mike Mainieri for vibraphone and marimba (the vibraphone/marimba are confined to selected tracks). No specific synth model or digital recording workflow has been assigned: ambiguous later CD packaging does not establish original recording medium.
5. Scale values and `sounds_like` are Fandome editorial judgments. All `status` values remain `draft` until a second reviewer checks them. No live or compilation albums in this batch.

## Phase 02, remaining studio albums

- *Brothers in Arms* (1985)
- *On Every Street* (1991)

If the catalogue acquires a previously researched landmark descriptor for either before starting Phase 02, skip it rather than duplicate.


## Claude import note

- 4 rows imported. Communiqué id is direstraits-communique (the catalogue slug folds the accent to e, not drops the letter).
- vibraphone mapped to mallets.
- Making Movies: Bruce Springsteen removed from sounds_like: Roy Bittan of his E Street Band plays keyboards on the album (a guest's band).
- Artist influences: Dylan, J.J. Cale, The Shadows / Hank Marvin, Chet Atkins (Knopfler).
- Reception researched by Claude.

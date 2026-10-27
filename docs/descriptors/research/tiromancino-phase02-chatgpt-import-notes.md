# Tiromancino — Fandome phase 02 import

**Research date:** 27 October 2026. **Artist ID:** `tiromancino`. **GitHub branch:** `descriptors` read-only. **Status:** 4 rows `draft`. This ZIP is **strictly incremental**: phase 02 only.

## Files

- `tiromancino_phase02_rows_ONLY.csv`: 27-column header + **only the four new phase 02 rows**.
- `tiromancino_phase02_sources.csv`: album source records with exact URLs, source types and evidence notes.
- `tiromancino_phase02_genre_evidence.csv`: every assigned genre, its sourced evidence and album/track/texture scope.
- `tiromancino_phase02_evidence-notes.md`: per-field reasoning, technical identifications, disagreements and exclusions.
- `tiromancino_phase02_catalog-audit.csv`: cross-discography catalogue presence and upcoming phases.
- `CLAUDE_IMPORT.md`: current instructions.

## Phase 02 rows (only these)

1. `tiromancino-ladescrizionediunattimo` — *La descrizione di un attimo* (2000, studio) — **already in catalog.ts**.
2. `tiromancino-incontinuomovimento` — *In continuo movimento* (2002, studio) — **already in catalog.ts**.
3. `tiromancino-illusioniparallele` — *Illusioni parallele* (2004, studio) — **ADD to catalog.ts before validation**.
4. `tiromancino-lalbadidomani` — *L’alba di domani* (2007, soundtrack / film-linked artist album) — **already in catalog.ts**.

### Catalogue add (phase 02)

Add exactly this tuple to Tiromancino in `src/data/catalog.ts` before running `validate-descriptors.ts`:

```ts
['Illusioni parallele', 2004]
```

Required generated ID: `tiromancino-illusioniparallele`. Keep `tiromancino-lalbadidomani` unchanged. Type is a **descriptor field**, not stored in the existing title/year tuple.

### Missing albums reserved for phases 03 and 04

Phase 03 (next, in order): *L’essenziale* (2010), *Indagine su un sentimento* (2014), *Nel respiro del mondo* (2016), *Fino a qui* (2018, hybrid recordings). All four are missing from catalog.ts and must be added in that later import; do not include phase 03 rows in this ZIP.

Phase 04: *Ho cambiato tante case* (2021), *Quando meno me lo aspetto* (2026). Both missing from catalog.ts. Do not describe reissue *La descrizione di un attimo — 25th Anniversary* (2025) separately, or live album *Il suono dei chilometri* (2008), or compilation *95-05* (2005). *Fino a qui* is a mixed rerecordings/new material project: Claude must retain edition/type caveat.

## Co-billed albums

None. The guests on *Nessuna certezza* (Elisa and Meg), *Esplode* (Manuel Agnelli), and the Gerini film tracks are **features**, not album co-billing. No `coBilled.ts` entry required.

## New tokens

- **Genres:** none.
- **Instruments:** none.
- **Production:** none.
- The 2004 album publicity ambiguously names a **Prophet V** instrument; **DO NOT** replace with `prophet5` or add a new token without better documentation. On the 2002 record a genuine Prophet 5 is explicitly credited by AllMusic; different evidence.

## ARTIST INFLUENCES

**Phase 01 only:** artist-level influences and their primary interview sources were supplied in `tiromancino_fandome_phase01.zip`. Do **not** repeat that artist-level section in phase 02. Album-level influenced_by remains blank unless sourced as specifically shaping that record. A 2004 Lucio Dalla cover is not itself album influence; a 2002 Battiato sound comparison is `sounds_like`, not `influenced_by`.

## Key caveats and credit distinctions

1. **2000:** original official album notes unequivocally credit Riccardo Sinigallia as producer. Other collaborators arranged, mixed, played or programmed; they are not album co-producers unless a separate source explicitly says so.
2. **2002:** Qobuz per-track label credits include Federico Zampaglione, Andrea Pesce and Luigi Pulcinelli as Producers. The condensed AllMusic producer list appears to omit Pulcinelli. Retain all three; supporting sources provided.
3. **2004:** official biography explicitly credits the same trio. Lorenzo Amurri is a collaborator, not an automatically inferred producer. Contemporary writer Gianni Sibilla documents **self-sampling of band-played bases**.
4. **2007:** the band calls *L’alba di domani* the film soundtrack of *Nero bifamiliare*, while standard discographies list it among studio albums. Chosen `type=soundtrack`, with pop-rock/blues/electronic genres assigned too; importer may adopt a different cross-catalogue convention **without duplicating the album**. Album launch press credits Federico Zampaglione as producer and Francesco Zampaglione as a producer of *Non per l’eternità*. A secondary listing also names Rudolph Gentile, who is independently described as film producer/recording collaborator; leave him out of the music producers field pending original jacket verification.
5. **2007 date:** March 23 is given by contemporary launch reports while a later secondary source says May 11. Year `2007` is undisputed. `it|en|es` from song-language credits: song-specific multilingualism, not three full-album primary languages.
6. **Genre scope:** Hip-hop for 2000, 2002 and blues for 2007 are track-specific or partial influences; first genres always represent album centre. Scale values are reasoned editorial judgments, not measurements.
7. **Instruments/production:** every technical token has an album-specific source; **no imagined machines or software**. Blank album `influenced_by` fields are deliberate. The only named sounds-like artists are reviewers' comparisons, not causal statements.

## Next phase

Phase 03: *L’essenziale* (2010); *Indagine su un sentimento* (2014); *Nel respiro del mondo* (2016); *Fino a qui* (2018). Deliver one **new ZIP** with exactly those four descriptor rows and six corresponding files. Do not merge earlier phase rows.

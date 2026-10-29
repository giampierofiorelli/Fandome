# Fandome import — Laura Pausini, phase 01

**Artist ID:** `pausini` (confirmed in `src/data/catalog.ts`; no alternative in `seed.ts`). **Research date:** 29 October 2026. Four new album rows. All values are drafts; none are certified as second-person reviewed.

## Phase 01 contents — import only these four rows

| album_id | album | original year | type | catalogue action |
|---|---|---:|---|---|
| `pausini-laurapausini` | *Laura Pausini* | 1993 | `studio` | already exists |
| `pausini-laura` | *Laura* | 1994 | `studio` | **ADD** |
| `pausini-lecosechevivi` | *Le cose che vivi* | 1996 | `studio` | already exists |
| `pausini-lamiarisposta` | *La mia risposta* | 1998 | `studio` | already exists |

**Catalogue additions before validator:** `['Laura', 1994]` with ID `pausini-laura`. The catalogue ID has been computed using the existing slugging rule; the importer must verify against actual generated IDs. The remaining studio-album omissions, including 2026's *Io canto 2*, appear in `pausini_phase01_catalog-audit.csv` **for future phases only**.

**Previously described albums skipped:** none. `docs/descriptors/pausini.csv` returned 404 on the `descriptors` branch when checked, and the landmark research index did not document a Pausini album. Re-check before importing because the repository may change.

**Co-billed albums:** none. Raf is a featured vocalist on the first album's “Mi rubi l'anima”, not album-level co-billing. Phil Collins wrote the English song “Looking for an Angel” for *La mia risposta*; he is not the album co-artist or featured singer.

**New genre/instrument/production tokens:** none. All values used are already in the descriptors guide and repository's canonical vocabulary. Album `genres` lists six attested or classified styles per row, with genre-to-source and scope in `pausini_phase01_genre_evidence.csv`. **Check the genre file before importing**: adult contemporary in *Laura* is sourced to the album reference rather than the main AllMusic genre list. The user requires source-backed genres: remove any weak token if stricter evidence is unavailable, retaining source distinctions.

## ARTIST INFLUENCES — documented artist-wide, NOT assumed per album

These are direct statements or explicit artist-attributed inspiration. None automatically go into phase 01 `influenced_by`, which remains blank because no album-specific influence is verified.

- **Aretha Franklin** — Pausini explicitly says her musical influences include Franklin in a contemporary 19 May 1997 interview: https://www1.folha.uol.com.br/fsp/folhatee/fm190505.htm
- **Whitney Houston** — named in the same 1997 interview as an influence, and later named as a singer she learned from: https://www1.folha.uol.com.br/fsp/folhatee/fm190505.htm ; https://www.messengersaintanthony.com/content/god-i-laura-pausini
- **George Michael** — said she learned from his work, 2009: https://www.messengersaintanthony.com/content/god-i-laura-pausini
- **Sade** — named in the same self-reported 2009 list: https://www.messengersaintanthony.com/content/god-i-laura-pausini
- **Phil Collins** — named among artists she learned from in that interview (separate from his writing contribution to the 1998 record): https://www.messengersaintanthony.com/content/god-i-laura-pausini
- **Lucio Battisti** — specifically named among Italian singers she drew from: https://www.messengersaintanthony.com/content/god-i-laura-pausini
- **Claudio Baglioni** — same direct artist account: https://www.messengersaintanthony.com/content/god-i-laura-pausini
- **Ornella Vanoni** — same direct artist account: https://www.messengersaintanthony.com/content/god-i-laura-pausini
- **Mina** — same direct artist account: https://www.messengersaintanthony.com/content/god-i-laura-pausini
- **Jethro Tull** — she described how hearing the band inspired her to play the flute and shaped her voice: https://www.grammy.com/news/laura-pausini-flute-interview-video-jethro-tull-singer-songwriter-album-winner-latin-grammys-it-goes-to-11/

**Evidence grading:** the 1997 interview is contemporaneous to the albums; the 2009/2022 recollections are authentic but retrospective. The Folha interview also calls **Tom Jobim** a musical idol and cites Brazilian/South American musical influences; this supports an artist-wide source note but is not worded as a specific album influence. “I like Eros Ramazzotti” likewise does not demonstrate direct influence. No reviewer's similarity suggestion was inserted into album `influenced_by`.

## Edition and credit caveats

- **Laura Pausini (1993):** original Italian CD 8 songs; some digital lists have bonuses/English tracks. The initial CD transcription lists both Valsiglio and Marco Marati as producers, but track-level label records call Marati executive producer. **Verification needed before final import**; the row provisionally includes both, using the sleeve's generic producer credit.
- **Laura (1994):** original 10-track Italian album. Its printed sleeve separates **Angelo Valsiglio artistic producer** from **Marco Marati executive producer**, so the row lists Valsiglio only. AllMusic's reviews of later market editions can show a 1995 date: keep 1994.
- **Le cose che vivi (1996):** original 12 tracks Italian-only; Brazil adds **three Portuguese bonus tracks**, excluded from core language. Spanish *Las cosas que vives* is a companion language recording. London Symphony Orchestra appears on “Il mondo che vorrei”, not every song. Qobuz names Pausini/Cerruti/Parisini as producers, whereas AllMusic foregrounds Cerruti/Parisini; leave explicit caveat on scope. `stringarrangements` is deliberately omitted: although an orchestra/arranger are credited, a string-specific arrangement is not independently documented.
- **La mia risposta (1998):** 13-track Italian album includes one English song, “Looking for an Angel”; its author Phil Collins is **not** a guest performer. Original 1998 sleeve and label metadata support Pausini, Parisini and Cerruti as producers; other metadata splits executive roles. Sitar is credited to Michael Landau on tracks 3 and 8 by the original Italian CD transcription; cross-language AllMusic personnel attribution differs.
- The AllMusic tag `latinpop` on Italian-language albums is a **retail/genre classification** and is placed near the tail; it is *not* a licence to invent Latin percussion or Spanish singing. `sounds_like` is editorial comparative metadata, not a direct-quote influence claim.

**Next phase 02 (four new rows only):** *Tra te e il mare* (2000), *From the Inside* (2002), *Resta in ascolto* (2004), *Io canto* (2006). *Io canto* is newly recorded **studio covers**, not a compilation.

## File checklist for Claude

1. `pausini_phase01_rows_ONLY.csv` — four data rows, 27 exact columns; do not import earlier artists.
2. `pausini_phase01_sources.csv` — original/credit sources supporting instruments, production, genres, editions and discrepancies.
3. `pausini_phase01_genre_evidence.csv` — genre/source/scope rows (whole album vs one track vs distributor classification).
4. `pausini_phase01_evidence-notes.md` — source interpretation, producer and edition cautions, scoring rationale.
5. `pausini_phase01_catalog-audit.csv` — entire original studio release sequence; future entries are audit only.
6. `CLAUDE_IMPORT.md` — this importer note, artist-wide influences and future phase.

After adding the missing phase 01 catalogue item, run Fandome's existing `scripts/validate-descriptors.ts` and automated tests. Keep all rows `draft` until a second-person review.

## Claude import note

- Added Laura (1994) to the catalogue.
- sounds_like emptied (Céline Dion, Giorgia, Gloria Estefan): ChatGPT calls them "editorial comparative metadata". The reception pass looks for critics' comparisons.
- Producers: Laura Pausini dropped as self-credit; Marco Marati dropped from the 1993 album (executive producer per the label's track records and the 1994 sleeve).
- Collaborations recorded in `src/data/collaborations.ts`: Raf sings on Mi rubi l'anima (1993); Phil Collins wrote Looking for an Angel (La mia risposta, 1998).
- Artist influences from her own words: Aretha Franklin, Whitney Houston, George Michael, Sade, Phil Collins, Lucio Battisti, Claudio Baglioni, Ornella Vanoni, Mina, Jethro Tull.

## Claude enrichment

- Reception from hitparadeitalia.it year-end charts, en/it.wikipedia, l'Unità archive (1993, 1994, 1996, 1997, 1998), Music & Media 1993–94, Billboard 1998, La Stampa 1998, Folha 1997.
- Credits from the original sleeves (Discogs 407527, 407532, 407566, 407584): 1993 Angelo Valsiglio and Marco Marati restored (both "Producer [Artistic Production]"; Music & Media 1993 agrees); 1994 Valsiglio only (Marati executive); 1996 Alfredo Cerruti and Dado Parisini; 1998 Cerruti and Parisini. Raf on Mi rubi l'anima and Phil Collins as writer of Looking for an Angel confirmed.
- sounds_like: 1993 Gigliola Cinquetti (Music & Media, Robbert Tilli 1993: "Pausini's style is very reminiscent of Cinquetti"); 1998 Backstreet Boys|Eros Ramazzotti (l'Unità, Diego Perugini 1998: "suoni levigati, moderni, americani… un occhio ai Backstreet Boys e uno a Eros Ramazzotti").
- Laura (1994): added soft rock and pop rock (Discogs styles); landmark 0 (no source marks it a turning point). Le cose che vivi: added easy listening (l'Unità 1997). La mia risposta: groove and electronic raised to 3 (Billboard: "groove-pop", label: "arrangements are electronic instead of orchestral"); landmark 1 (La Stampa: "metamorfosi"; label: "a marked change of direction"; first Italian No. 1).

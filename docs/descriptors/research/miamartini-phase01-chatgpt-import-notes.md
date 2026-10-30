# CLAUDE IMPORT — Mia Martini, phase 01 (STRICTLY INCREMENTAL)

**Repository:** giampierofiorelli/Fandome, branch `descriptors`, read-only research, 30 October 2026. Existing artist ID **`miamartini`** in `src/data/catalog.ts`. The row has **no albums**. No Mia Martini entry in `src/data/seed.ts`. `docs/descriptors/miamartini.csv` returned 404 when checked; the October 2026 landmarks research contained no Mia Martini entry. Recheck the GitHub branch before import; never replace a row already added by a subsequent importer.

## This phase — the ONLY four rows in this ZIP

| ID to add | Studio album | Year |
|---|---|---|
| `miamartini-oltrelacollina` | Oltre la collina | 1971 |
| `miamartini-nelmondounacosa` | Nel mondo, una cosa | 1972 |
| `miamartini-ilgiornodopo` | Il giorno dopo | 1973 |
| `miamartini-epropriocomevivere` | È proprio come vivere | 1974 |

**All four must be added to `src/data/catalog.ts` before running the validator.** None exists yet. `catalog-audit.csv` records their original titles, years, and proposed IDs. The usual catalog slug function strips punctuation/diacritics, producing exactly these IDs. `src/data/scenes.ts` already gives `miamartini: 'IT it 1970 pop'`; no new artist or scene data is needed. Mia Martini died in May 1995 (biography: https://www.icsaicstoria.it/dizionario/martini-mia/ ); catalog already marks `miamartini` as legacy. Existing tagline: `Almeno tu nell’universo, forever`.

## Full original studio discography (for planning, not phase-01 import)

According to MusicBrainz, ICSAIC, Rockol and Hit Parade Italia, original studio albums: **Oltre la collina** (1971), **Nel mondo, una cosa** (1972), **Il giorno dopo** (1973), **È proprio come vivere** (1974), **Sensi e controsensi** (1975), **Un altro giorno con me** (1975), **Che vuoi che sia... se t'ho aspettato tanto** (1976), **Per amarti** (1977), **Danza** (1978; original LP may also be dated 1979 in Italian discography: see evidence notes and original issue), **Mimì** (1981), **Quante volte... ho contato le stelle** (1982), **Martini Mia...** (1989), **La mia razza** (1990), **Lacrime** (1992), **La musica che mi gira intorno** (1994). No releases posthumously recorded after death. Original early-1960s records under *Mimì Bertè* are excluded by the name/career rule.

**Not a phase-01 duplicate:** *Mia Martini en Español* (Hispavox HRIS 631/01, 1974) is a Spanish-language remake **compilation**, documented with recut Spanish vocal and chorus and remixed original multitracks (original Hispavox producer account: https://webmusicbid.com/valutazioni/info/833495/mia-martini-mia-martini-en-espanol-hris-631-01 ); the owner’s current scope excludes compilations. MusicBrainz lists it as an album but original pressing metadata also marks compilation; preserve for later reconsideration on user request. 1997 *Mi canto español* is a later reissue/anthology, skip. *Miei compagni di viaggio* (1983) and *Mia Martini in concerto* (1991) are live, skip. Posthumous *Tarab* (2025) is a retrospective of archival performances, not a new studio album, skip. Neither a new release date for a remaster nor a newly curated compilation creates a new eligible studio album.

## New tokens and co-billed audit

- **New genre tokens: none** (the included `prog`, `pop`, `soul`, `songwriter`, `blues`, `gospel`, `waltz`, `ballad`, `musicaleggera`, `chanson` all exist in the guide's current genre list; run validator).
- **New instrument tokens: none** (album-derived instruments use existing guitar, electricguitar, acousticguitar, orchestra, piano, organ, keyboards, bass, drums).
- **New production tokens: none** (`choirvocals` only where album-specific backing groups or choruses are recorded).
- **Co-billed releases in this phase: none.** Claudio Baglioni wrote and sang backing vocal, Dario Baldan Bembo composed/arranged, Giovanni Sanjust and Alberigo Crocetta produced: none is a co-billed artist on the album sleeve.

## ARTIST INFLUENCES (phase 01 only; general influences, not album claims)

- **Aretha Franklin; Nina Simone.** Mia Martini, in a first-person interview for *Noi Donne* (reproduced at https://questimieipensieri.blogspot.com/2011/03/mia-martini-su-noi-donne-non-di-sola.html), says she was trying to emulate their vocals earlier in her career. The blog mirror returned a web access rate-limit on opening, but the indexed excerpt contains the direct statement; **Claude should independently check the archive**, keep as artist-wide only.
- **Joni Mitchell; Rickie Lee Jones; Paul Simon; Keith Jarrett; Johann Sebastian Bach; Gabriella Ferri.** First-person interview with Maurizio Gregorini, reproduced at https://www.telecorriere.it/mia-martini-lomaggio-del-poeta-e-musicologo-maurizio-gregorini-in-esclusiva-lultima-intervista-allartista/ ; in response to a question about influences she names these musicians. Bach is an intermittent listening preference rather than a definite influence on her recordings, so mark *uncertain* and do not automatically use in `influenced_by`.
- **Paul Anka.** OndaRock biographical profile (https://www.ondarock.it/artista/mia-martini/ ) calls him her first artistic model. This is general biography, not evidence for an individual 1970s album.

None of the above people is placed in these albums' `influenced_by`, since statements are not tied to album sessions. Likewise covered artists (John Lennon, Elton John, Cat Stevens, Melanie, Chico Buarque, Joan Manuel Serrat) are **not** influences merely because they were covered.

## Credits / disputed details / instructions to Claude

- **1971**: original label and Qobuz metadata explicitly credit **Alberigo Crocetta** as producer and **Antonio Coggio** as production coordinator. OndaRock calls the debut a Baglioni–Coggio production, apparently referring to musical creation or authorship rather than original credited studio production; **do not invent producer credits for writers**. If Claude finds original sleeve explicitly listing a co-producer, correct and document the distinction. `prog` and `soul` use independent music criticism; `songwriter` is a medium-confidence critical reading of a concept LP by collaborating songwriters. `orchestra` and choir are documented, and electric guitar is documented by review, not inferred from genre.
- **1972**: Rockol's producer interview on 1973 confirms Crocetta was succeeded by Sanjust in 1973, while original 1972 Hit Parade listing leaves producer blank. Retain **Crocetta** as the documented prior producer (medium-to-high certainty) but **no additional Sanjust** without a specific full-album producer credit: early 1972 *singles* have multiple producers, not necessarily the later LP. Original LP credits specifically name piano, organ and acoustic guitars, **not uncredited bass/drums**. The original song 'Mother' reinterpreted as blues does not turn John Lennon into an influence.
- **1973**: first LP produced by **Giovanni Sanjust** as expressly confirmed by OndaRock/Rockol composer interview. Original LP orchestral conductors **Natale Massara and Gianfranco Lombardi are arrangers/conductors, not producers**. The 2023 anniversary LP adds Spanish/French Minuetto and an instrumental backing track; **not** part of this row or its language. No model/recorder tech listed without session source.
- **1974**: **Giovanni Sanjust** producer from record histories (the original original-LP catalogue often does not show a `Production` line). The two early editions share catalog number SMRL 6126; the later original edition includes musician credits. The session-instrument list uses those available original-credit transcriptions, but the specific names Gigi Cappellotto/Andy Surdi are reported predominantly in secondary sources, so confidence remains medium. `Domani` is called *aznavouriana* by an **independent critic**, thus `Charles Aznavour [1/10]` in *sounds_like*, not *influenced_by*. `chanson` similarly describes that song only, ranked last. The track **Agapimu is sung in Greek** (original track text exists in Greek), thus language `it|el`. Album production tech `choirvocals` from named Expo 80 backing vocals; do not add digital effects or record-machine models. A 2025 remaster Qobuz page bizarrely associates a producer credit for Dick Halligan on one track: this is inconsistent with original album history and **not** accepted as original producer without archival verification. Original *Inno* single's possible production split Crocetta/Sanjust is not automatically album-wide.
- `landmark` = 1 for debut because independent sources identify unusually early Italian concept approach and lasting autobiographical/thematic identity; 1 for 1972 breakthrough album, and 1 for the 1973 LP that definitively established the singer at the heart of the public (OndaRock). These are **career-defining independent claims**, not rankings or generic praise. 1974 = 0 absent defining-change claim. Claude may review borderline 1971/1972 judgments.
- The original 1974 song *Agapimu* is **Greek**, unrelated to the Spanish-language anthology's language. Do not infer Spanish on 1972, 1973 or 1974 original albums.
- The user excludes records under former name *Mimì Bertè*. This is about scope, not a proposed alias artist; do not create an additional artist ID.

## Files in this ZIP

1. CLAUDE_IMPORT.md
2. miamartini_phase01_rows_ONLY.csv
3. miamartini_phase01_sources.csv
4. miamartini_phase01_genre_evidence.csv
5. miamartini_phase01_evidence-notes.md
6. miamartini_phase01_catalog-audit.csv

## Next phase 02 (4 albums, chronological)

*Sensi e controsensi* (1975), *Un altro giorno con me* (1975), *Che vuoi che sia... se t'ho aspettato tanto* (1976), *Per amarti* (1977). These albums are not described in this ZIP.

# CLAUDE IMPORT — Pino Daniele, phase 01 (incremental)

Branch `descriptors` checked on 30 October 2026. **Artist ID: `pinodaniele`** (present in `catalog.ts`, absent from `seed.ts`). The descriptor directory contains **no `pinodaniele.csv`**; **already described albums skipped: none**. Four new descriptor rows only. Do not replace other artists' files or carry any rows into later phases.

## Phase 01 contents (chronological)

1. `pinodaniele-terramia` — **Terra mia** (1977). **ADD TO CATALOGUE** (missing).
2. `pinodaniele-pinodaniele` — **Pino Daniele** (1979). Existing catalogue ID.
3. `pinodaniele-neroameta` — **Nero a metà** (1980). Existing catalogue ID.
4. `pinodaniele-vaimo` — **Vai mò** (1981). Existing catalogue ID. Respect exact existing title spelling.

## Albums to add to `catalog.ts`

All entries below are classified `studio` (including studio rerecordings); reconcile other editions before insertion. Add **Terra mia** now before validator runs, then add the rest during future phases or in a single catalogue update. All listed new IDs are proposals from the existing `slug()` rule; preserve the pre-existing catalogue IDs in the four cases above.

| Title | Year | Type | Proposed ID |
|---|---:|---|---|
| Terra mia | 1977 | studio | `pinodaniele-terramia` |
| Musicante | 1984 | studio | `pinodaniele-musicante` |
| Ferryboat | 1985 | studio | `pinodaniele-ferryboat` |
| Bonne soirée | 1987 | studio | `pinodaniele-bonnesoiree` |
| Schizzechea with Love | 1988 | studio | `pinodaniele-schizzecheawithlove` |
| Mascalzone latino | 1989 | studio | `pinodaniele-mascalzonelatino` |
| Un uomo in blues | 1991 | studio | `pinodaniele-unuomoinblues` |
| Sotto 'o sole | 1991 | studio | `pinodaniele-sottoosole` |
| Che Dio ti benedica | 1993 | studio | `pinodaniele-chediotibenedica` |
| Non calpestare i fiori nel deserto | 1995 | studio | `pinodaniele-noncalpestareifiorineldeserto` |
| Dimmi cosa succede sulla terra | 1997 | studio | `pinodaniele-dimmicosasuccedesullaterra` |
| Come un gelato all'equatore | 1999 | studio | `pinodaniele-comeungelatoallequatore` |
| Medina | 2001 | studio | `pinodaniele-medina` |
| Passi d'autore | 2004 | studio | `pinodaniele-passidautore` |
| Iguana cafè - Latin blues e melodie | 2005 | studio | `pinodaniele-iguanacafelatinbluesemelodie` |
| Il mio nome è Pino Daniele e vivo qui | 2007 | studio | `pinodaniele-ilmionomeepinodanieleevivoqui` |
| Electric Jam | 2009 | studio | `pinodaniele-electricjam` |
| Boogie Boogie Man | 2010 | studio | `pinodaniele-boogieboogieman` |
| La grande madre | 2012 | studio | `pinodaniele-lagrandemadre` |

Discography references: [MusicBrainz](https://musicbrainz.org/artist/5b1633c8-cb78-4d85-a7d1-a6d145d8d472), [OndaRock](https://www.ondarock.it/monografie/pinodaniele/), [Rockol](https://www.rockol.it/artista/pino-daniele), [Pino Daniele official discography](https://www.pinodaniele.com/). Discography classifications caveated in the evidence notes (notably *Sotto 'o sole*).

## New genre tokens (add to `scenes.ts` / genre families)

* `canzonenapoletana` — Neapolitan song, attested on the first four albums; proposed parents `folk|songwriter|italianpop` (family choices require project-owner judgement). Evidence: OndaRock and Rockol, citations in `genre_evidence.csv`.
* `tarumbo` — Daniele's original *tarumbò/taramblù* hybrid of tarantella and blues, primarily debut; proposed parents `blues|tarantella|folk`. Sources: OndaRock and AllMusic's biography.
* `folkblues` — guitar-centric folk-blues, first two albums; proposed parents `folk|blues`. Source: Rockol's 2026 musicological essay.

No new instrument or production tokens. Instruments use existing `mandola`, `mandocello`, `mallets`, `melodica`, etc.; no hardware inferred by genre.

## ARTIST INFLUENCES (whole career, NOT album-specific)

The artist's official retrospective says he listened to the following and that these influences are identifiable in his early demos. It is credible as a statement by the artist's official representatives, **but must not be pasted wholesale into each album's `influenced_by` field**:

* **Cream, Jimi Hendrix, Weather Report, Luigi Tenco, King Crimson, Miles Davis, B.B. King, Led Zeppelin** — [Pino Daniele official website, 1975–1976 retrospective](https://www.pinodaniele.com/miscellaneous/1975-1976/).
* **Luigi Tenco** also has a direct album-specific statement in [Daniele's own note for *Terra mia*](https://www.pinodaniele.com/music/terra-mia-1977/) and is therefore present in that album's `influenced_by` cell.

## Co-billed albums and collaborations

None of these four albums is co-billed. The 1983 *Common Ground* is billed to **Richie Havens**, and the official fan-club credit identifies Pino as producer, guitarist, co-writer and duet partner on one track. **Do not add to Pino's album discography as a co-billed album** unless an original edition proves explicit joint primary artist credit. [Credits](https://pinodanieleonline.com/collaborazioni); [AllMusic billing](https://www.allmusic.com/album/common-ground-mw0000845901).

## Caveats and import checklist

* Keep 27 column header **exact** and all 8 scale values whole numbers 0–5. Empty is deliberately unknown. `status=draft`.
* No earlier descriptor rows are repeated; `pinodaniele.csv` did not exist at research time.
* 1979 production credit conflicts between official artist album page (Marcello Todaro) and some secondary discographies (Willy David). Primary-source wording prevails pending sleeve inspection.
* 1980 collaborator-vs-co-producer distinction remains unsettled for Gigi De Rienzo/Rosario Jermano; and a one-song wah/talk-box account conflicts between critics. Effects omitted pending sleeve/engineer confirmation.
* `stringarrangements` on *Terra mia* supports the key song 'Napule è' only, as described in evidence notes. Other production columns may correctly be empty.
* Genres late in the pipe list may describe only one song; consult one-row-per-genre evidence including `scope`.
* The studio rerecordings *Sotto 'o sole* and *Boogie Boogie Man* require special handling; do not silently skip just because there are old songs.

## Next phase — phase 02, new rows only

1. `pinodaniele-bellambriana` — Bella ’mbriana (1982; existing catalogue entry)
2. `pinodaniele-musicante` — Musicante (1984; to add)
3. `pinodaniele-ferryboat` — Ferryboat (1985; to add)
4. `pinodaniele-bonnesoiree` — Bonne soirée (1987; to add)

All four need **fresh** album-specific research before their next ZIP. Recheck repository descriptors at the start of the next phase and skip any then already described.

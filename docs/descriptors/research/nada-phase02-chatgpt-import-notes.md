# Nada — Fandome phase 02 | Claude import instructions

Scope: **exactly four new studio album descriptor rows**, in chronological order. All four files of data and supplementary notes belong to **this phase only**. Six files are inside the ZIP; no build scripts.

## IDs and catalogue additions

| Album ID | Album title for display | Year | Type | Source of edition |
|---|---|---:|---|---|
| `nada-nada1976` | Nada | 1976 | `studio` | RCA TPL 1-1226 (1976 earliest issue); 1977 PL 31248 is changed reissue |
| `nada-nada1979` | Nada | 1979 | `studio` | Polydor 2448 089, nine tracks |
| `nada-smalto` | Smalto | 1983 | `studio` | EMI 3C 064-18611, eight tracks |
| `nada-noinoncresceremomai` | Noi non cresceremo mai | 1984 | `studio` | Original EMI, eight tracks |

The existing Fandome `src/data/catalog.ts` on branch `descriptors` still has no Nada entry at verification (29 October 2026); `docs/descriptors/nada.csv` also not found. Phase 01 supplied an `nada` artist proposal and 1969–75 albums. Import phase 01 separately **if not already done**, without replacing phase 01 with these new rows. Append *all four* to the same artist catalog. None of these four titles was observed in the current catalogue.

## Critical decisions

- **Duplicate-title ID disambiguation:** do not use `nada-nada` again. The 1969 album is `nada-nada`; both later studio LPs require title+year suffix, as above.
- **1976/77 issue distinction:** first (limited/promo) 1976 RCA TPL 1-1226 had **Sarà**, later commercial 1977 RCA PL 31248 substitutes **Lontano lontano** and changes **Arte**. Two original editions of one project, **one album descriptor**, earliest recording release 1976. Do not create a 1977 album entry. The standard commercial 1977 tracklist appears in evidence notes.
- **1982 Ti stringerò is a compilation with new material**, not a distinct album of original studio recordings. It is intentionally absent. Do not include retrospectives, live albums, compilations or reissues.
- **Album 1979** is different from 1976: disco-funk and rock/pop, nine-song Polydor release. `Cesare Gigli` alone is documented as producer; **Alessandro Centofanti** and **Walter Martino** are arrangers, players and mixers.
- **Smalto** (`1983`) produced by **Gerry Manzoli**. Fabio Pignatelli, Marco Rinalduzzi and Derek J. Wilson are band members/arrangers. The whole album is not assigned prog because of the Goblin connection; narrow `newwave` is from Nada's own context.
- **Noi non cresceremo mai** (`1984`) is an electronic studio album with credited keyboardists and `programming`. Gerry Manzoli is the credited producer. Some biographical shorthand says “produced by Goblin”; that is inconsistent with individual production credits and is therefore not copied into the producer field. **Kraftwerk and Yazoo** are documented **album-specific influences** directly named by Nada: [VICE 2019](https://www.vice.com/it/article/nada-intervista/).
- No electronic instrument **model** is sourced for 1984; do not infer a DX7, Fairlight, LinnDrum, etc. `synth` is a type-level editorial interpretation from the artist's machines + credited electronic programme, not evidence of a specific synthesizer brand. `production=programming` alone. For Smalto/1979 no concrete production effects are claimed.
- `synthpop` for 1984 is a **documented-instrumentation-based editorial genre assessment**, not a claimed quote from the source. The genre scopes CSV distinguishes explicit from editorial categories. Some sources erroneously date this album to 1985; original issue is 1984.
- **No new tokens** proposed: all genre/instrument/production tokens used already exist in the Fandome guide. None of the four albums is co-billed. No source supports importing guest musicians or songwriters as influences.
- Only descriptors in `nada_phase02_rows_ONLY.csv` are intended for import. `nada_phase02_sources.csv` supplies sources and claims; `nada_phase02_genre_evidence.csv` provides each genre's support and whole-album vs selected-track scope. `nada_phase02_catalog-audit.csv` identifies artist-catalog status. `nada_phase02_evidence-notes.md` documents uncertainty and editorial deductions.
- All rows have exactly **27 columns**, follow 0–5 anchors where evidence exists, leave unknowns blank, `status=draft` throughout. Run Fandome official validator and tests after adding all missing catalogue rows. Do not mark `reviewed` until a second researcher checks.

**ARTIST INFLUENCES:** phase 01 already listed career-wide direct influence sources. No repetition here. New *album-specific* references: Kraftwerk and Yazoo for *Noi non cresceremo mai* only, with first-person evidence in phase 02 sources.

**Next phase 03:** *Baci rossi* (1986), *L'anime nere* (1992), *Dove sei sei* (1999), *L'amore è fortissimo e il corpo no* (2001).

## Claude import note

- Added the four albums to the catalogue. The two later albums titled Nada get the year in their id (nada-nada1976, nada-nada1979): a general catalogue rule for repeated titles by one artist.
- Noi non cresceremo mai: influenced_by Kraftwerk|Yazoo kept (Nada's own words on this album, VICE 2019; to confirm in the reception pass).

## Claude enrichment

- Reception from hitparadeitalia.it, it/en.wikipedia, AllMusic biography (Aurelio Pasini), OndaRock, l'Unità (1983, 1986), VICE 2019, Digicult 2005.
- Nada (1976): year kept at the first (promo) pressing, December 1976; the official issue is winter 1977. Producer Gianni Marchetti confirmed (Discogs 3157915).
- Nada (1979): producers Cesare Gigli (hitparadeitalia.it, it.wikipedia) plus Alessandro Centofanti and Walter Martino (credited "Mixed By, Producer" on the sleeve, Discogs 3160913).
- Smalto: lyricon added (new instrument token; Claudio Pizzale, Discogs 2830893); rock and canzone d'autore added (l'Unità 1983); new wave moved last (only Nada describing the period).
- Noi non cresceremo mai: Kraftwerk and Yazoo confirmed about the whole album (VICE 2019: "Era tutto elettronico… io ero impazzita per i Kraftwerk e gli Yazoo. Così ho fatto un disco tutto marchingegni"). Added drum machine, Oberheim DMX ("Programmed By [D.M.X.]"), drum and synth programming (Discogs 3255012).

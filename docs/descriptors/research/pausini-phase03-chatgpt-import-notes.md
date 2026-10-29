# Fandome import — Laura Pausini, phase 03

**Research date:** 29 October 2026. **Artist ID:** `pausini` (checked both `src/data/catalog.ts` and `src/data/seed.ts`; only catalog uses it). Four NEW rows, 27 columns each, `status=draft`. No old phase rows repeated.

## Phase 03 album catalogue additions (ADD all four before appending)

| album_id | title | year | type | catalogue status |
|---|---|---:|---|---|
| `pausini-primaverainanticipo` | *Primavera in anticipo* | 2008 | studio | **ADD** |
| `pausini-inedito` | *Inedito* | 2011 | studio | **ADD** |
| `pausini-simili` | *Simili* | 2015 | studio | **ADD** |
| `pausini-lauraxmas` | *Laura Xmas* | 2016 | studio | **ADD** |

This was checked against the GitHub branch `descriptors` on 29 October 2026. `docs/descriptors/pausini.csv` had only four phase-01 rows (1993–98). **Phase 02 (2000–06) is a separate delivered ZIP but NOT yet in the repository at this check**. Import phase 02 separately before phase 03, without duplicating its rows.

## Co-billing

**`pausini-lauraxmas`:** original 2016 chart/CD credits appear as **“Laura Pausini with the Patrick Williams Orchestra”** (original Italian CD 5054197327223). Consider adding to `coBilled.ts` as `{ credit: 'Laura Pausini with the Patrick Williams Orchestra' }` if accepting the exact credited orchestral ensemble as a co-billed artist. There is no verified separate Fandome room for the orchestra, so **no `with` id**. The normal artist ID and `artist=Laura Pausini` remain unchanged. Patrick Williams is a producer and conductor, not a duet guest.

## Token additions

No new genre, instrument or production tokens are proposed. **Always compare tokens against current branch** before running the validator; no scripts bundled. `language=la` is ISO 639-1 for *Latin* on 2016 album's “Adeste fideles”. The album also contains Italian “Astro del ciel” and Spanish/English “Feliz Navidad”.

## Important original-edition notes

1. *Primavera in anticipo* (2008): use original **Italian 14-song CD** 5051865053620, with “Primavera in anticipo (It Is My Song)” featuring English James Blunt vocals *and* the all-Italian solo version. So `language=it|en`. Spanish *Primavera anticipada*, international double-CD, digital bonus Portuguese and Platinum rereleases are not extra original albums. Producers Laura Pausini / Paolo Carta / Dado Parisini / Celso Valli: verified label track attributions. AllMusic cross-market `latinpop` is a low-weight retail style, not proof of Latin rhythms in the Italian CD.
2. *Inedito* (2011): use initial Italian **14-song CD** released November 11, 2011 (not the 2012 expanded release and not the 2011 bilingual 2-CD). First LP misses “Ognuno ha la sua matita” and “Come vivi senza me”; use CD, not LP. Portuguese “No primeiro olhar” is a *Brazilian bonus* and omitted, hence `language=it` only. Producers Pausini, Carta, Valli, Rustici, Vuletic, Bertolotti are confirmed by Warner Qobuz song credits; the contemporaneous label press report additionally credits Nick Ingman as producer even though the public AllMusic credit grid calls him orchestrator/arranger. Keep Ingman provisional pending original sleeve verification. Guests Gianna Nannini, Ivano Fossati and Silvia Pausini are **track guests only**, not co-billed album artists or `influenced_by`.
3. *Simili* (2015): original 15-song Italian disc; Spanish *Similares* is the alternate-language companion, not an extra album. **Do not import Rik Simpson as a producer based on “Lato destro del cuore”: original track sleeve and Warner/Qobuz tag him only “Additional Production”**. Actual producers on original tracks include Paolo Carta, Davide Rossi, Steve Power, Julio Reyes Copello, Printz Board, Giuliano Sangiorgi, Laura Pausini. Jovanotti, Biagio Antonacci and other writers are **writers, not default producers**. `reggaeton`, `folk`, `chambermusic` refer to particular tracks, marked as long-tail; `latinpop` is market style. Vocals `rap` arises from short rap passage of “Innamorata”; the album remains predominantly a sung recording. `protools` and `moog` are instrument/machine credits attached to limited songs.
4. *Laura Xmas* (2016): original Italian-market/English-titled **12-song CD** 5054197327223 recorded with the Patrick Williams Orchestra; includes newly recorded swing versions of standards and gospel, so `type=studio`, **not compilation**. Producer credits on printed 2016 sleeve are Pausini and Patrick Williams. Paolo Carta is credited for *Laura's vocal production and recording specifically*, excluded by strict main-producer rule. Jason Lee is *associate producer*, also excluded. `en|es|la|it`: “Feliz Navidad” bilingual English+Spanish, “Adeste fideles” Latin, “Astro del ciel” Italian, remaining songs English. “Noël blanc” in French is on the French album, not this original CD; Spanish *Laura Navidad* and 2017 deluxe also excluded. Studio at Capitol Studios LA, with separately recorded vocals in Italy; **do not claim live recording or that orchestra and singer tracked together**. `influenced_by=Frank Sinatra` is based on artist interviews explicitly stating she was inspired by Sinatra for this specific album. No particular Sinatra record was named, so do not add a speculative album anchor.

## Analytical cautions

- Genre evidence records each source + scope. Genres particular to only one song are positioned after the primary whole-album styles; album scores are our editorial judgment, not copied from reviews. `latinpop` on the Italian pop records is a retailer's market categorisation, placed last.
- `sounds_like` is an editorial *sonic* comparison. It is not evidence of personal influence. Only Laura Xmas has a directly documented album-specific influence (Sinatra). Other `influenced_by` fields intentionally blank.
- Some third-party listings attribute December/November international distribution dates rather than the first Italian CD date. Release YEAR stays fixed to originals.
- No source specifies Auto-Tune, compression brands, a DAW for an entire album, or a recording format: none are invented. `programming`, `stringarrangements`, `drumprogramming`, `protools`, and `moog` correspond to identified performer/engineering credits, some on single tracks only. For *Laura Xmas*, `hornarrangements|stringarrangements` represent Williams's orchestral arrangements with separately credited horn and string sections, not identified branded studio technology.
- Contemporary critical opinion is mixed: AllMusic calls *Inedito*'s sound strongly familiar, while Rockol is more positive; *Simili*'s diversity is simultaneously praised and questioned by the same reviewer; a Georgia Straight critic objected to *Laura Xmas*'s very glossy big-band treatment, despite Rockol's account of the intended swing concept.

## Import instructions

1. Check that `pausini-primaverainanticipo`, `pausini-inedito`, `pausini-simili`, `pausini-lauraxmas` are still absent from both catalogue and descriptors. If any id differs, reconcile rather than duplicating.
2. Append only `pausini_phase03_rows_ONLY.csv` four rows. Add four missing albums to `src/data/catalog.ts` first. Keep current phase-01 rows. Process separate phase-02 ZIP if not imported.
3. Optionally add **Laura Xmas** orchestral billing to `src/data/coBilled.ts` with the exact printed credit above; do not infer an orchestra room id.
4. Run `scripts/validate-descriptors.ts` and all Fandome tests on the up-to-date branch. Recheck Nick Ingman's *producer* status against original liner notes, and keep `draft` until a second person reviews.

**Next phase 04:** *Fatti sentire* (2018), *Anime parallele* (2023), *Io canto 2* (2026). Newly recorded covers on *Io canto 2* qualify as a studio album, not a retrospective compilation.

## Six-file ZIP manifest

- `CLAUDE_IMPORT.md` (this note)
- `pausini_phase03_rows_ONLY.csv` (four new rows)
- `pausini_phase03_sources.csv` (source URLs and attributed claims)
- `pausini_phase03_genre_evidence.csv` (one row per genre with whole-album vs track/market scope)
- `pausini_phase03_evidence-notes.md` (album-by-album research and uncertainties)
- `pausini_phase03_catalog-audit.csv` (full chronology and current catalogue status)

## Claude import note

- Added Primavera in anticipo (2008), Inedito (2011), Simili (2015) and Laura Xmas (2016) to the catalogue. Laura Xmas co-billed as "Laura Pausini with the Patrick Williams Orchestra" (no room for the orchestra).
- Producers: Laura Pausini dropped as self-credit. Nick Ingman (Inedito) kept pending the sleeve check.
- sounds_like emptied on Primavera in anticipo and Simili (editorial). Inedito (Céline Dion, Snow Patrol, Evanescence) and Laura Xmas (Frank Sinatra, Michael Bublé) kept pending the critic check. Laura Xmas influenced_by Frank Sinatra (her own words on this album).

# CLAUDE_IMPORT — Umberto Tozzi — Fandome Phase 02

**Prepared:** 29 October 2026 · **Branch checked:** `descriptors` · **Not written to GitHub.**

## Exactly four rows to import

| album_id | album | year | type | current catalogue state | next action |
|---|---|---:|---|---|---|
| `tozzi-tozzi` | Tozzi | 1980 | studio | missing | add catalogue album, then descriptor |
| `tozzi-notterosa` | Notte rosa | 1981 | studio | missing | add catalogue album, then descriptor |
| `tozzi-eva` | Eva | 1982 | studio | missing | add catalogue album, then descriptor |
| `tozzi-hurrah` | Hurrah! | 1984 | studio | missing | add catalogue album, then descriptor |

Existing Fandome artist ID **`tozzi`**. Live GitHub read on the `descriptors` branch confirmed that 1976–79 have **already** been added to the catalogue and all four prior descriptor rows exist in `docs/descriptors/tozzi.csv`. Never replace existing prior-phase rows or reintroduce those four as duplicates.

Catalogue update: append `['Tozzi', 1980], ['Notte rosa', 1981], ['Eva', 1982], ['Hurrah!', 1984]` to the existing `tozzi` album array. ID slugs match the repository's `artistId-titleSlug` rule. No new artist and no co-billed release in this phase.

## Tokens and validation

All tokens used in the four genres lists already exist in the branch's genre vocabulary, including `newromantic`, `newwave`, `italianpop`, `europop`, `dance` and `electronic`; no genre addition needed. All listed instruments and production tokens are present in the repository, including `sequencer`, `electronicdrums`, `synthbass`, `programming`, `drumprogramming`, `flanging` and `falsetto`; no additions needed. **No hardware model is assumed from a recording date**. Production blank for Hurrah! because its original methods cannot be established accurately. All four rows use `status=draft` and correct 27-column header. Only a second researcher may mark as reviewed.

## Credit/edition exceptions requiring review

- **Eva (1982):** Manager states produced by Lucio Fabbri; original title song credits Bigazzi; secondary sleeve transcription names both. File provisionally contains **Giancarlo Bigazzi|Lucio Fabbri** and requires checking original CGD 20311 jacket before final review. Tozzi's arranging work is not a production credit.
- **Hurrah! (1984):** Bigazzi appears as producer for title and Tre buone ragioni; an **original whole-LP producer credit was not independently retrieved**. One producer in proposed row, with **medium** confidence. Pinuccio Pirazzoli arranged the *English-language* reprise and is **not** added as main producer.
- **Notte rosa:** `newromantic` is a 2014 review's stylistic interpretation of the original album; it is not a 1981 record-company genre claim. `flanging|falsetto` is likewise review-described, unlike `programming` which is verified in sleeve personnel.
- **Hurrah! language:** 1984 original ten-track Italian LP includes `Hurrah (English Version)` on B5, so `it|en` captures original bilingual contents. Do not create a separate album for the song's translated reprise or 1984 maxi-single.
- **1984 Mama:** The MusicBrainz album listing also mentions a 1984 *Mama* release. It may reflect another regional issue/version rather than an unrelated original studio LP; do not automatically import it and do not mistake the 1982 *Eva* song Mama for an entire distinct 1984 studio album.
- **No new ARTIST INFLUENCES section:** Career-wide influences were documented in **Phase 01** and are **not repeated** here. `influenced_by` remains empty for all four albums as no qualifying original-album-specific first-person statements were found. Critics' Duran Duran, Chrome, Moroder and Thomas Dolby comparisons belong in `sounds_like` only.

## What to import

1. `tozzi_phase02_rows_ONLY.csv` — four new UTF-8 CSV rows with 27-column guide header.
2. `tozzi_phase02_sources.csv` — evidence trace with source URL and strength.
3. `tozzi_phase02_genre_evidence.csv` — one scope-tagged source-backed line for each genre assignment.
4. `tozzi_phase02_evidence-notes.md` — album-by-album evidence, scalar reasoning, credits and disagreements.
5. `tozzi_phase02_catalog-audit.csv` — current catalogue additions, future releases and exclusions.
6. `CLAUDE_IMPORT.md` — these instructions.

Once all four new `tozzi` catalogue albums are added and only the four new descriptor rows appended to `docs/descriptors/tozzi.csv`, run `npx vite-node scripts/validate-descriptors.ts` plus existing project tests. Do not add live albums, singles, compilations or rerecordings as separate studio albums.

## Next phase (03)

`Invisibile` (1987), `Gli altri siamo noi` (1991), `Equivocando` (1994) and `Il grido` (1996), subject to confirmation of original studio editions. Note: some sites date *Invisibile* as late 1987 versus 1988 distribution; confirm the original issue before assigning year.

## Claude import note (Oct 2026)

- Rows imported as delivered; the four albums added to the catalogue row.

## Claude enrichment (reception pass, Oct 2026)

- Reception rows appended to `docs/descriptors/reception/tozzi.csv` (hitparadeitalia.it charts, Moretti, Rockol, Vice Italia "Italian Folgorati").
- sounds_like confirmed by Vice Italia: Notte rosa (Visage, the new romantics, "predilezione per Duran Duran e Units"), Eva (Con la testa sui binari "praticamente sono i Chrome se fossero nati in Italia"), Hurrah! (challenges Giorgio Moroder on his own ground; Thomas Dolby). Toto added to Notte rosa (Moretti: the melodies recall Toto).
- Eva credits on Discogs r2678667: Synclavier II (Aldo Banfi), LinnDrum (Walter Calloni); confidence high. Hurrah! credits on Discogs r1533821: Joe Vescovi keyboards and programming, Simmons drums (Maurizio Granata), strings arranged by Maurizio Fabrizio; confidence high.

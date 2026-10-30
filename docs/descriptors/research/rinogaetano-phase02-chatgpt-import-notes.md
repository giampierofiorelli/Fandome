# CLAUDE IMPORT — Rino Gaetano / PHASE 02 (FINAL, STRICTLY INCREMENTAL)

**Repository:** `giampierofiorelli/Fandome`; **branch:** `descriptors`; **date checked:** 30 October 2026; **read only**. Existing artist ID **`rinogaetano`** found in `src/data/catalog.ts`; no record of the artist in `src/data/seed.ts`.

As of the checked branch, `docs/descriptors/rinogaetano.csv` returns **404**. This does **not** authorize repeating phase 01: those four rows have already been delivered separately. Claude must check current GitHub state again immediately before import and **never overwrite** a matching preexisting row.

## Phase 02 contents — only these two new rows

| Album ID | Original title | Year | Type | Catalogue |
|---|---|---:|---|---|
| `rinogaetano-restavilemaschiodovevai` | Resta vile maschio, dove vai? | 1979 | studio | **ADD** |
| `rinogaetano-eiocisto` | E io ci sto | 1980 | studio | **ADD** |

**Add both records** under existing artist ID `rinogaetano` in `src/data/catalog.ts`, with years and type `studio`, before validating/importing these rows. They are released albums absent from this current catalogue. No existing catalogue IDs need changing.

**Full original studio discography:** *Ingresso libero* (1974), *Mio fratello è figlio unico* (1976), *Aida* (1977), *Nuntereggae più* (1978), *Resta vile maschio, dove vai?* (1979), *E io ci sto* (1980). Confirmed by Treccani, AllMusic and the Istituto Calabrese per la Storia dell'Antifascismo.

**Skipped because already delivered in phase 01:** `rinogaetano-ingressolibero`, `rinogaetano-miofratelloefigliounico`, `rinogaetano-aida`, `rinogaetano-nuntereggaepiu`. Those rows are deliberately **not** in this ZIP, whether or not Claude has already imported them. **Q Concert** (1981) was a live co-billed record involving Riccardo Cocciante and New Perigeo; skip as instructed. Posthumous anthologies/reissues and single-only releases are not in scope.

## Catalogue and co-billing audit

- **New catalogue albums (both studio):** `Resta vile maschio, dove vai?` (1979) and `E io ci sto` (1980).
- **Already catalogued among these two:** none.
- **Albums billed to other artists jointly in this phase:** none. Mogol is a credited lyricist of a title track, not a co-billed artist; Shawn Phillips is a guest sitar player, not a co-billed artist. Do not add their album rows.
- **No new artist** is proposed, so the scene metadata and global artist influences from phase 01 are not repeated.

## Tokens to add before validation

- **New genre: `latinblues`** — expressly called *blues latino* by Rolling Stone Italia for the 1980 track *Michele 'o pazzo è pazzo davvero*. Suggested genre family relationships: `blues` and `latin`. This is a specific genre; keep its broad source-supported `blues` and `latin` companions too. The token does **not** currently appear in the GitHub `src/data/scenes.ts` genre list as checked.
- **New instrument: `vihuela`** — musician Sadot Badillo Solís credited on the original 1979 LP; the instrument is not in current `src/data/instruments.ts`. Add the token as written. It is a plucked Mexican string instrument; don't silently map it to `guitar`.
- **New production tokens:** none. All used production tokens (`hornarrangements`, `stringarrangements`, `choirvocals`) already exist.
- All other genres, instruments and production tokens in these two rows match existing tokens. `mariachi` is already present and is ranked third because it features prominently on the album's most successful single *Ahi Maria*.

## Production, editions, source conflicts and interpretive limits

- **1979 producer:** *Giacomo Tosti*. Confirmed by Treccani and original 1979 Sony/RCA song-credit reproductions on Qobuz. **Alessandro Centofanti** arranged rhythms and **Jonathan Zarzosa** arranged strings/horns/mariachis; neither was called producer in the available original credits. **Mogol** wrote the title-track words only; no producer credit.
- **1980 producer:** *Giovanni Tommaso*. The official Rino Gaetano website, announcing the Sony reissue, explicitly calls him producer *and* arranger. Treccani focuses on his arrangements; this is complementary evidence, not a credit contradiction. **Dino Kappa** is credited for rhythmic arrangements on specific tracks, not overall production.
- **1979 instruments:** a Hit Parade Italia credit transcription contains **“trombra”**, ambiguous between *tromba* (trumpet) and a typo. The row lists trumpet independently from another named player, but **does not assert trombone** from the ambiguous term. **`vihuela`** is directly credited. **`piano`**, strings and sections of brass are supported by Sony/Legacy's album commentary.
- **1980 instruments:** credits document synthesizer (not a specific model), marimba (map to `mallets`), sitar and two backing choruses. No machine model is guessed. `stringarrangements` is supported by written orchestral arrangements and credited strings; separately assigned `hornarrangements` is not, so leave it out.
- **1979 original edition** is eight Italian-language tracks on RCA PL 31449, not 2024 remasters or separately issued later Spanish recordings. **1980 original edition** is RCA PL 31539, not its 2025 expanded reissue; the closing sequence is an indexed *La donna mia / Scusa Mary* medley. Music on that closing medley includes a 1980 Mexico session, so don't assert the full LP was recorded only in Rome.
- **Landmark:** both rows `0`. Being the final studio release, acclaimed by some critics, or demonstrating a stylistic adjustment does **not** establish the guide's independent, genre- or career-defining threshold.
- **`sounds_like`:** Gipsy Kings appears only as `Gipsy Kings [1/8]`, because a critic hears the sonic resemblance specifically on *Ahi Maria*. It is *not* `influenced_by`; it is a retrospective observation. Others remain blank, including album-level musical influences, without direct artist/producer testimony.
- **`voice`:** blank rather than copying singer-wide assumptions about vocal raspiness. A Treccani observation about 1979's title song cannot establish the full record's vocal type; no album-wide sourced vocal descriptor was found.
- **Scales:** whole integers 0–5 grounded in album-specific reviews and credits, reasoned individually in `rinogaetano_phase02_evidence-notes.md`. Missing evidence is not filled merely from the genre.

## Exact files in this ZIP

1. `CLAUDE_IMPORT.md` — this import guide and caveats
2. `rinogaetano_phase02_rows_ONLY.csv` — exactly **two** new, 27-column records
3. `rinogaetano_phase02_sources.csv` — original-release, critic, musicology and official links
4. `rinogaetano_phase02_genre_evidence.csv` — exactly one line for every genre in both rows
5. `rinogaetano_phase02_evidence-notes.md` — per-album eight scales, instruments, production, doubts and sources
6. `rinogaetano_phase02_catalog-audit.csv` — both missing catalogue entries, exact IDs and import safeguards

## Next phase

**None.** These complete all six eligible original studio albums across phases 01 and 02. The owner may request live/compilation records separately in a future batch; do not import them without that request.

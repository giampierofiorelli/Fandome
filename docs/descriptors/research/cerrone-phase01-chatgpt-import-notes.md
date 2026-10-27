# CLAUDE IMPORT — Cerrone / Phase 01

**Research date:** 27 October 2026. GitHub branch `descriptors` consulted read-only for `src/data/catalog.ts`, `src/data/seed.ts`, `src/data/coBilled.ts`, guide, genre/instrument/production lists and `docs/descriptors/cerrone.csv`.

**ID:** `cerrone` **already exists** in `catalog.ts`; absent in `seed.ts`. Existing catalog albums:
- `cerrone-loveincminor` — *Love in C Minor* (1976)
- `cerrone-supernaturecerroneiii` — *Supernature (Cerrone III)* (1977)
- `cerrone-cerroneivthegoldentouch` — *Cerrone IV: The Golden Touch* (1978)

**Existing descriptor check:** `docs/descriptors/cerrone.csv` returned 404, so **no existing descriptor rows were duplicated or skipped**. The prior landmarks list had no Cerrone entries. This ZIP is strictly incremental and contains just four new rows.

## Files and import order

1. Add the missing original 1977 catalog album *Cerrone's Paradise* with ID **`cerrone-cerronesparadise`**, before importing or validating the rows. Preserve existing three album titles/IDs unchanged.
2. Import `cerrone_phase01_rows_ONLY.csv` (exactly 27 columns). All four rows are `draft`.
3. Consult `cerrone_phase01_sources.csv` and `cerrone_phase01_genre_evidence.csv` for sourced, track-scoped checks; study `cerrone_phase01_evidence-notes.md` for conditional credits.
4. Review future-catalog entries in the audit but **do not** import their descriptors in this phase.
5. Run `npx vite-node scripts/validate-descriptors.ts` and Fandome tests. Nothing in GitHub was changed.

## Phase 01 album records

| album_id | display title | year | type | catalog |
|---|---|---:|---|---|
| `cerrone-loveincminor` | Love in C Minor | 1976 | studio | existing |
| `cerrone-cerronesparadise` | Cerrone's Paradise | 1977 | studio | **ADD** |
| `cerrone-supernaturecerroneiii` | Supernature (Cerrone III) | 1977 | studio | existing |
| `cerrone-cerroneivthegoldentouch` | Cerrone IV: The Golden Touch | 1978 | studio | existing |

## Albums to add to the catalogue

**Required now:** `cerrone-cerronesparadise` — *Cerrone's Paradise* — 1977 — `studio`.

All later studio candidates are in the accompanying `catalog-audit.csv` with tentative IDs, years and phase numbers. Album numbering, release years and titles (particularly *You Are the One*, *Your Love Survived*, *The Collector*) conflict across sources: **do not auto-create all of them without resolving the original sleeve and year**. Existing entries must take precedence over any generated id.

**Separate soundtracks for later editorial judgement:** *Brigade Mondaine* (1978), *La Secte de Marrakech* (1979), *Vaudou aux Caraïbes* (1980), *Dancing Machine* (1990). They are possible substantive original soundtracks, **not** ordinary numbered studio releases; their inclusion is contingent on a phase dedicated to film scores. *In Concert* and greatest-hits compilations are out of scope. Kongas records are credited to the earlier **band**, not to the Cerrone solo artist.

## Co-billed records

**None of this phase's four albums is co-billed**. Lene Lovich (lyricist), Alain Wisniak (songwriter), Don Ray (arranger/keyboards), Alec R. Costandinos (co-writer) and Kay Garner (singer) are not billed as joint album artists. No `src/data/coBilled.ts` entries needed.

## New canonical tokens

- **Genre:** None. `disco`, `eurodisco`, `electrodisco`, `spacedisco`, `funk`, `soul`, `rnb`, `electronic`, `dance`, `quietstorm`, and `pop` exist in current `scenes.ts`/genre families.
- **Instruments:** None. `steeldrums`, `sequencer`, `electricpiano`, `frenchhorn` and all other chosen instrument tokens exist.
- **Production:** None. `arpodyssey`, `overdubbing`, `hornarrangements`, `stringarrangements`, and `wahwah` already exist. The ARP Odyssey is **not** assumed to have an internal sequencer solely from the interview anecdote.

## ARTIST INFLUENCES (first-person documentation)

These artists are **historical inspiration**, not collaborators on the albums unless separately credited:

- **Barry White** — Cerrone says he used White's lush string style, and brought White's recordings to arranger Raymond Donnez for horn voicing on *Love in C Minor*. [Mixmag — Bill Brewster interview](https://mixmag.net/feature/cerrone-dance-music-disco-giorgio-moroder-kraftwerk), [MusicRadar — 2022 studio interview](https://www.musicradar.com/news/cerrone-disco-album-interview), [FLOOD interview](https://floodmagazine.com/74956/in-conversation-cerrone-returns-to-disco-roots-on-dna/).
- **Chicago** — Explicitly cites the group's brass harmonies as a model for his early productions. [Mixmag](https://mixmag.net/feature/cerrone-dance-music-disco-giorgio-moroder-kraftwerk), [FLOOD](https://floodmagazine.com/74956/in-conversation-cerrone-returns-to-disco-roots-on-dna/).
- **Isaac Hayes** — Names the wah-wah guitar from the theme to *Shaft* among his desired American production elements; this is a musical sonic source, **not** a sampled record on this LP. [Mixmag](https://mixmag.net/feature/cerrone-dance-music-disco-giorgio-moroder-kraftwerk). Parenthetical album reference may be *Isaac Hayes (Shaft)* in song-level linking.
- **Kraftwerk** — First-person Electronic Sound testimony specifically says he loved their records **while recording the 1977 *Supernature* album**. [Electronic Sound — Supernature interview](https://www.electronicsound.co.uk/features/landmarks/marc-cerrone/).
- **Led Zeppelin / Jimmy Page** — First-person MusicRadar answer places Led Zeppelin among early rock influences; 2025 Gonzaï interview says he personally sought out Jimmy Page because he was a fan. The Page session credit on *The Golden Touch* is **not confirmed by an original sleeve transcription**. [MusicRadar](https://www.musicradar.com/news/cerrone-disco-album-interview), [Gonzaï](https://gonzai.com/cerrone-la-grande-interview/).
- **Deep Purple** — In response to the explicit question about his influences, Cerrone contrasts rock groups Deep Purple and Led Zeppelin with pop and says he preferred rock. [MusicRadar](https://www.musicradar.com/news/cerrone-disco-album-interview).
- **The Rolling Stones** — In the same MusicRadar answer he states that he preferred the Rolling Stones to the Beatles. General youth influence only; do not assign to a specific Cerrone studio album. [MusicRadar](https://www.musicradar.com/news/cerrone-disco-album-interview).
- **Santana** — Names Santana among the early live bands that shaped his percussion-first musical interests, in response to questions about early inspirations. [La Face B interview](https://danstafaceb.com/cerrone-le-disco-cest-un-etat-desprit), [VUMETRE interview](https://vumetre.com/en/interviews/marc-cerrone-im-still-that-rambunctious-kid/).
- **Jimi Hendrix / Buddy Miles (drumming)** — Cerrone recalls Hendrix's Olympia concert as decisive and says seeing the drummer made him want to play that way. This is an influence on performance, **not** evidence of a Hendrix sample on *Supernature*. His recollection of the drummer and concert dates merits historical cross-checking. [VUMETRE interview](https://vumetre.com/en/interviews/marc-cerrone-im-still-that-rambunctious-kid/), [La Face B](https://danstafaceb.com/cerrone-le-disco-cest-un-etat-desprit).

**Do not add Giorgio Moroder, Donna Summer, Nile Rodgers or Daft Punk to `influenced_by` based only on critical comparison or later professional contact.** Cerrone is often compared to them, and his music influenced several of them, but that is a different direction of influence. Moroder/Donna Summer are present only in editorial `sounds_like` for *Supernature*. The Kay Garner / Lene Lovich dispute affects identification of a vocalist, not the `voice` timbre category.

## Catalog and edition caveats

- Artist's own 2014 *Cerrone I, II, III* is a three-album repackaging; do not treat it as three new 2014 works.
- *Cerrone's Paradise* original LP was recorded in 1977 at **Trident / Mediasound**; later reissues and edits alter lengths, not original year. Its slow “Time For Love” has English verses **and French chorus** in a specialist original-LP review.
- *Supernature* is **1977 album**, not the 2024 three-track same-title edit/EP. Lene Lovich co-wrote lyrics; accounts conflict about who sang title track. Pitchfork and later Cerrone statement identify Kay Garner.
- Only album-credited **Cerrone** is listed as producer in these four rows. **Alec R. Costandinos** (first LP co-writer), **Alain Wisniak** (second/third co-writer), **Don Ray** (arranger) are not automatically co-producers.
- A 2025 first-person account from Cerrone describes **Jimmy Page** on *The Golden Touch* “Rocket in the Pocket”, whereas accessible original 1978 LP credit lists identify **Larry Juber** but not Page. Verify the original sleeve/session paperwork. Do not add producer or `influenced_by` Page from an alleged cameo.
- The precise date within 1977 differs between release territories and later backfilled digital listings. The year is secure. Numeric scores are editorial, all statuses `draft`.

## Next phase 02

Four **new** rows: *Angelina (Cerrone V)* (1979), *Panic (Cerrone VI)* (1980), *You Are the One (Cerrone VII)* (c. 1980–81), *Back Track (Cerrone VIII)* (1982). Resolve the VII original year before import. Soundtracks can be researched separately if their originality and significance justify inclusion, without duplicating the original studio series.

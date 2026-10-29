# CLAUDE IMPORT — Ligabue, phase 01 (2026-10-29)

**Artist ID:** `ligabue` (verified in branch `descriptors`, `src/data/catalog.ts`; no matching artist in `seed.ts`). **Artist display name:** `Ligabue`, exactly as the catalog. **Already-described albums:** none, `docs/descriptors/ligabue.csv` not found at review time. **Mode:** incremental, only four phase 01 rows. **Do not commit any changes based solely on this package without validation.**

## Package contents

- `ligabue_phase01_rows_ONLY.csv` — four rows, exactly 27 columns, ready for merge after catalog additions.
- `ligabue_phase01_sources.csv` — 31 source references with evidence-specific descriptions.
- `ligabue_phase01_genre_evidence.csv` — 33 individual source/genre/scope checks.
- `ligabue_phase01_evidence-notes.md` — detailed sonic reasoning, official- vs secondary-credit disagreements.
- `ligabue_phase01_catalog-audit.csv` — current catalog state and required additions.

## Phase 01 (album ids, original titles and years)

1. `ligabue-ligabue` — **Ligabue** (1990), studio; catalog EXISTS (already uses this id).
2. `ligabue-lambruscocoltellirosepopcorn` — **Lambrusco coltelli rose & pop corn** (1991), studio; catalog MISSING.
3. `ligabue-sopravvissutiesopravviventi` — **Sopravvissuti e sopravviventi** (1993), studio; catalog MISSING.
4. `ligabue-acheoraelafinedelmondo` — **A che ora è la fine del mondo?** (1994), studio (classification contested against EP); catalog MISSING.

## Required catalog changes (in chronological order)

In `src/data/catalog.ts`, append to `['ligabue', 'Ligabue', ...]` (while keeping the pre-existing 1990 item):

```typescript
['Lambrusco coltelli rose & pop corn', 1991],
['Sopravvissuti e sopravviventi', 1993],
['A che ora è la fine del mondo?', 1994],
```

Keep existing albums, including **Buon compleanno Elvis (1995)**. Confirm slug generator yields the three listed ids. No code or repo modifications have been performed here.

**Co-billed records:** none this phase; ClanDestino are backing musicians, not a joint headline release; Negrita guests on one 1994 track, not co-billed album.

**New tokens:** none anticipated. All the submitted tokens are in the current genre, instrument or production lists, but Claude must rerun the repository's validator after merging. Genre `countryfolk` maps OndaRock's *folk-country* description.

## ARTIST INFLUENCES — general, sourced, not automatic album-level claims

1. **Bruce Springsteen.** Ligabue describes hearing *Jungleland* from **Born to Run** at age 15 as a revelation about the intensity of a band and emotional self-expression, an explicit formative testimony: https://www.ilfattoquotidiano.it/in-edicola/articoli/2024/05/09/luciano-ligabue-vasco-ci-hanno-messo-contro-spero-che-i-5s-portino-il-pd-alla-pace/7541232/. Note: critics compare 1991 songs with Springsteen, but an artist-wide admiration does not alone identify an album production influence.
2. **Lucio Battisti.** Ligabue explicitly calls himself *battistiano convinto* in the same first-person interview: https://www.ilfattoquotidiano.it/in-edicola/articoli/2024/05/09/luciano-ligabue-vasco-ci-hanno-messo-contro-spero-che-i-5s-portino-il-pd-alla-pace/7541232/. The reference is an artist-wide songwriting model, not album-specific attribution.
3. **Francesco Guccini.** Ligabue describes learning to play *L'avvelenata* as a teenager, studying its lyrics and later writing his own song in reaction to its stance: https://www.ilnapolista.it/2021/10/ligabue-vengo-da-una-famiglia-comunista-il-comunismo-era-un-parametro-per-capire-chi-frequentare/. In the original records, the vocal/narrative kinship is contextual rather than a proof of a specific borrowed album arrangement.
4. **Genesis.** Ligabue says the albums *Nursery Cryme*, *Foxtrot* and *Selling England by the Pound* were a revelation during youth and that he later abandoned progressive complexity for direct songwriting: https://www.rollingstone.it/musica/interviste-musica/ligabue-non-ho-mai-detto-che-sono-rock/787648/. They are formative, not a license to tag Ligabue records as progressive rock.
5. **Simple Minds (specific song, 1991).** OndaRock reports Ligabue's own admission about borrowing the idea of a contrasting coda for *Lambrusco & pop corn*: https://www.ondarock.it/monografie/ligabue/. This is the only phase 01 `influenced_by` artist and is tied to a documented compositional decision.

**Not included as confirmed influences**: R.E.M. (the 1994 title is an adaptation), The Smiths / Neil Young / U2 / The Doors / Guns N' Roses (critic comparisons), Pierangelo Bertoli / Clandestino (collaborators), Pier Vittorio Tondelli / Federico Fellini (literary/cinematic inspiration), and U2 / Lucio Dalla when merely admired or described as affinity: no album-specific musical influence claim.

## Classification and source cautions

- The first three early albums credit **Ligabue for artistic production** and **Angelo Carrara for executive production** in original-credit transcriptions, while many retailers/AllMusic use broad *producer* for Carrara. `producers` takes Ligabue under strict non-executive-only rules; reconcile original jackets explicitly. See evidence notes.
- *A che ora è la fine del mondo?* was issued in 1994 as an eight-song original studio release but some AllMusic presentation says EP and incorrectly places a later edition in 1999. It contains one live track, not a live album; treat type as provisional studio and recheck against original cover.
- Neither reviews nor criticism should be copied into `notes`; each note here is original and capped at 15 words.
- `influenced_by` cannot be filled by a cover, guest or simple resemblance. Evidence notes state why critical look-alikes are `sounds_like`.
- Song-level genres are placed at low weights except a lead title single. AllMusic generic pop labels are not to replace the source-specific descriptions.
- Complete the import by adding catalog rows, appending four descriptor rows, then invoking `npx vite-node scripts/validate-descriptors.ts` and the test suite.

## Phase 02 proposed

**Buon compleanno Elvis (1995)**, **Miss Mondo (1999)**, **Fuori come va? (2002)**, **Nome e cognome (2005)**. Exclude *Su e giù da un palco* (1997, live), *Radiofreccia* (1998, soundtrack requiring separate importance review before inclusion), and compilations *Primo tempo* and *Secondo tempo*.

## Claude import note

- Added Lambrusco coltelli rose & pop corn (1991), Sopravvissuti e sopravviventi (1993) and A che ora è la fine del mondo? (1994) to the catalogue.
- Producers: Ligabue dropped as self-credit on all four; Angelo Carrara (executive) not added. Producers empty pending the reception pass.
- sounds_like and influenced_by emptied: every comparison is about one song (Neil Young, The Smiths, U2 on 1990 tracks; Springsteen, Guns N' Roses on 1991 tracks; The Doors on one coda in 1993), and the Simple Minds influence is the coda of one song. R.E.M. on the 1994 album is the adapted title song: recorded as a cover in `src/data/covers.ts` (Document), not a comparison.
- Artist influences from his own words: Bruce Springsteen, Lucio Battisti, Francesco Guccini, Genesis.

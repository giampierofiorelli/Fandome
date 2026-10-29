# CLAUDE IMPORT — Vasco Rossi, Phase 01

Research date: **29 October 2026**. Target repository: `giampierofiorelli/Fandome`, branch **`descriptors`**, **READ ONLY**. Fandome artist id is **`vasco`**, verified in `src/data/catalog.ts` and `src/data/seed.ts` (no competing `vasco` in seed). The target file `docs/descriptors/vasco.csv` was **NOT FOUND** at research time. There are **no already-described Vasco Rossi albums to skip**. Only the first four chronological original studio albums appear in this ZIP; no previously described or future rows. All rows have 27 fields, whole-number scales, `draft` status, original year and release type.

## Albums, ids and catalogue actions

| Original studio album | Original year | Exact Fandome album id | In catalogue? |
|---|---:|---|---|
| ...Ma cosa vuoi che sia una canzone... | 1978 | `vasco-macosavuoichesiaunacanzone` | **NO: ADD** |
| Non siamo mica gli americani! | 1979 | `vasco-nonsiamomicagliamericani` | **NO: ADD** |
| Colpa d'Alfredo | 1980 | `vasco-colpadalfredo` | **NO: ADD** |
| Siamo solo noi | 1981 | `vasco-siamosolonoi` | **NO: ADD** |

The existing `vasco` entry in `src/data/catalog.ts` starts with **Vado al massimo (1982)**. Insert these tuples before it, using the repository's title-to-id slug rule:

```ts
["...Ma cosa vuoi che sia una canzone...", 1978],
["Non siamo mica gli americani!", 1979],
["Colpa d'Alfredo", 1980],
["Siamo solo noi", 1981],
```

Neither `src/data/seed.ts` nor `docs/descriptors/vasco.csv` held existing rows or special IDs for these albums when checked. `docs/descriptors/vasco.csv` must be created or merged using append/deduplicate safeguards after catalogue additions. All four source items are **solo Vasco Rossi albums**; no `coBilled.ts` action is needed.

## Original discography scope and omissions

Vasco's released core studio catalogue starts in 1978 and continues with 1979, 1980, 1981, **Vado al massimo (1982)**, **Bollicine (1983)**, **Cosa succede in città (1985)**, **C'è chi dice no (1987)**, **Liberi liberi (1989)**, **Gli spari sopra (1993)**, **Nessun pericolo... per te (1996)**, **Canzoni per me (1998)**, **Stupido hotel (2001)**, **Buoni o cattivi (2004)**, **Il mondo che vorrei (2008)**, **Vivere o niente (2011)**, **Sono innocente (2014)**, **Siamo qui (2021)**. Cross-check: https://musicbrainz.org/artist/3bf74908-e8b3-4158-8fae-4fd795bb4474 and https://www.rockol.it/artista/vasco-rossi. **Va bene, va bene così (1984)** is a live album, not the missing 1984 studio album. *L'altra metà del cielo* (2012) is orchestral rework/ballet material (not a conventional fresh songwriting studio album), so decide separately later whether it qualifies as a landmark collaboration/soundtrack; do not add automatically. Most reissues named *Albachiara* are the 1979 album, not a second album. Compilations *Rock*, *Tracks*, *VascoNonStop* and live albums are skipped.

## Artist influences — career-wide, not linked to specific albums

- **Fabrizio De André (strong, direct first-person evidence):** In a statement reported by Rolling Stone Italia in January 2026, Vasco says De André is a lasting reference for his writing and taught him intellectual disobedience and critical perspective. **Chronology warning:** their personal acquaintance started in the early 1980s, so this documentation should **not** be backfilled as an album-specific `influenced_by` link for the 1978–81 LPs. Source: https://www.rollingstone.it/musica/news-musica/vasco-rossi-fabrizio-de-andre-mi-ha-insegnato-a-mettere-in-discussione-i-maestri/1016322/.
- **The Beatles, The Rolling Stones, Lucio Battisti** (formative listening), and **Deep Purple, Led Zeppelin, Pink Floyd, Genesis, King Crimson, Yes, The Allman Brothers Band, Eagles, Jimi Hendrix, Janis Joplin, David Bowie, Bob Dylan, Bruce Springsteen, Lou Reed** (rock and songwriter listening): an undated interview reprinted on a 2008 personal blog quotes Vasco himself naming them when asked how he formed musically. **LOW-CONFIDENCE provenance**: original interviewer, interview date, and magazine could not be independently established; the repost is **secondary unverified** and serves as an artist-wide *listening* lead, not evidence that any individual early album was influenced by each musician. Source: https://blog.libero.it/ILROCKITALIANO/view.php?gg=0&id=ILROCKITALIANO&mm=0&pag=2.
- **Edoardo Bennato, Lucio Dalla, Loredana Bertè, Francesco De Gregori, Skiantos**: named in the same repost as artists he enjoys/admires, **not direct verified influence**. Do not automatically convert these into `influenced_by` because admiration is not the required causal link.
- In a long retrospective interview, Vasco engages with a Lou Reed view of rock saving lives; **not an influence statement on its own**. Source: https://www.repubblica.it/robinson/2019/04/06/news/vita_spericolata_del_ragionier_vasco_rossi-300786363/amp/.

**Album-level `influenced_by` is blank in all four rows.** No credible album-specific direct acknowledgement was established. The 1979 Sex Pistols ending quotation and the 1981 Judas Priest riff reference are **quotations/interpolations**, not eligible influences under Fandome rules. `sounds_like` names are explicitly provisional **editorial sonic comparisons**, not asserted biographical influences.

## New genre, instrument and production tokens

No new tokens are required. The selected terms already exist in the `Genre` union, including `canzonedautore`, `contemporarysingersongwriter`, `vaudeville`, `punkrock`, `ballad`, `aor`, `italianpop`, `poprock`, `hardrock`, `blues` and `reggae`. No unapproved instrument or production labels are used. Please verify token enumeration at import because the branch may change.

## Uncertainty / import cautions

1. **1978 and 1979 production:** Alan Taylor is listed as `producer` in some catalogue summaries, but the original-album reporting and Italian credits call him **executive producer**. Qobuz later metadata places **Mario Rapallo** as producer only for the debut track *La nostra relazione*. By the user's producer-only rule, **the producer fields of both album rows are blank, rather than assuming Taylor or Rapallo was the whole-album producer**. Check full original LP sleeves/credits before filling. Curreri is an **arranger**, not automatically a producer. Original recording engineer **Maurizio Biancani** is not a producer. Relevant: https://www.rockol.it/news-697535/vasco-rossi-cofanetto-per-40-anni-ma-cosa-vuoi-che-sia-una-canzone?amp=1, https://it.wikipedia.org/wiki/Non_siamo_mica_gli_americani%21, https://www.qobuz.com/it-it/album/ma-cosa-vuoi-che-sia-una-canzone-vasco-rossi/0743215840121.
2. **1980 production:** *Colpa d'Alfredo* credits Vasco Rossi as producer in the Italian personnel record, while Rockol identifies **Guido Elmi as effective producer** and Taylor as executive. Both Vasco Rossi and Guido Elmi are proposed in `producers`; confirm whether original pressing credits classify Elmi formally as producer before importing unchanged. Source: https://www.rockol.it/news-718295/vasco-rossi-colpa-d-alfredo-40-anni-storia-e-critiche-intervista.
3. **1981 production:** Rockol's header names **Elmi and Mario Rapallo** for album production; its narrative describes Elmi as executive and Rapallo as distribution/business, while label digital credits place Elmi as producer. Only **Guido Elmi** is provisionally recorded; Rapallo is held back pending original sleeve confirmation. Source: https://www.rockol.it/news-719882/vasco-rossi-siamo-solo-noi-usciva-giusto-40-anni-fa and https://www.qobuz.com/us-en/album/siamo-solo-noi-vasco-rossi/0888880768599.
4. **Original release dates disagree:** *Siamo solo noi*: Rockol and Italian studio discography use **9 April 1981**; an English encyclopedia infobox says **3 April**. Year is secure. Other reissue dates in AllMusic (e.g. 1998) must never replace original release years 1978, 1980.
5. **Genre weighting:** Styles from reviews that apply only to one/two tracks are in positions 4+ (e.g. `punkrock`, `vaudeville`, `dance`, `blues` on 1979; `hardrock`, `reggae` on 1981). The `aor` classification on 1981 is documented only as **a DeBaser community review tag**, not a robust specialist consensus; audit it as lower confidence. The 1978 `canzonedautore` and `contemporarysingersongwriter` labels overlap but come respectively from the Italian music-discography label *musica d'autore* and the literal AllMusic style.
6. **Instruments:** Several lineups are reconstructed from release-credit transcriptions (medium strength), not recording-session sheets. *Non siamo mica gli americani!* lists a musician's `cembalo`; this **ambiguous term was excluded**, since it is unclear whether keyboard or percussion. No unverified synthesis machine, processing method or reverb effect was added. `analogtape` is supported for the 1978 recording because the 2018 remaster specifically returned to the original studio analogue masters; *remastering* is **not** an original album production attribute.
7. **Scores and voice:** Eight 0–5 values are interpretive comparative assessments supported by contemporary reviews but have **not** been independently audition-tested. They remain `draft` and should be audited by a second listener; `confidence=medium` acknowledges that. Track-by-track genre source scope is in the evidence CSV. Editorial `sounds_like` is not presented as an established factual influence.
8. **Reception:** No separate `reception/vasco.csv` generated; it is not among this fixed six-file delivery. If following the October 2026 reception guide, calculate importance/acclaim/mainstream **separately** from documented critical sources rather than translating the descriptor `landmark` binary into reception numbers automatically.

## Next phase (phase 02, excluded here)

1. **Vado al massimo** (1982) — already in catalog.
2. **Bollicine** (1983) — already in catalog.
3. **Cosa succede in città** (1985) — **missing** in this branch; add to catalogue.
4. **C'è chi dice no** (1987) — already in catalog with original curly apostrophe **`C’è chi dice no`**; preserve exact catalogue title/id.

*Va bene, va bene così* (1984) is live and **must be skipped**.

## ZIP contents and integration

- `vasco_phase01_rows_ONLY.csv`: **4 new rows**, 27 standard Fandome columns; strictly incremental.
- `vasco_phase01_sources.csv`: citations with URLs, claim boundaries and evidence strength.
- `vasco_phase01_genre_evidence.csv`: genre/source/scope by album.
- `vasco_phase01_evidence-notes.md`: album-by-album critical and credits reasoning.
- `vasco_phase01_catalog-audit.csv`: exact catalogue add list.
- `CLAUDE_IMPORT.md`: these instructions.

Claude should check current GitHub, add the four catalogue tuples, merge only these new descriptor rows, resolve original-producer ambiguities, and run `scripts/validate-descriptors.ts` and tests. **No GitHub changes were made by this research.**

## Claude import note

- Added the four 1978–1981 albums to the catalogue before Vado al massimo.
- Producers: Vasco Rossi dropped as self-credit (Colpa d'Alfredo); Guido Elmi kept pending the reception pass.
- sounds_like emptied on all four rows: ChatGPT calls them "tentative editorial neighbors", with no critic's comparison of the sound. The reception pass looks for real ones.
- Artist influences: only Fabrizio De André, from Vasco's own words (Rolling Stone Italia, January 2026). The long list from a blog repost of an undated interview is left out (provenance not verified).

## Claude enrichment

- Reception from hitparadeitalia.it year-end charts, Rolling Stone Italia's ranking of his 18 albums (Luca Garrò 2022), OndaRock (monografia and pietre miliari), Rockit interview with Guido Elmi (2016).
- 1978: sounds_like Rino Gaetano|Francesco De Gregori (Rolling Stone Italia, Patrizio Ruviglioni 2018: "Musicalmente siamo in un'intersezione fra Rino Gaetano e De Gregori"). Producer Alan Taylor (it.wikipedia infobox; Sky TG24: "un produttore che aveva creduto in lui").
- 1979: producer stays empty (Alan Taylor credited for executive production, supervision, mixing). Added funk rock, glam rock, jazz (OndaRock pietra miliare: "ritmo funk-rock", "glam dei T. Rex", "talking jazz in salsa dixieland") and harpsichord (Solieri's cembalo). Track-level comparisons (Jannacci, Battisti, T. Rex, Judas Priest) not added.
- 1980: Guido Elmi confirmed as producer in his own words (Rockit 2016).
- 1981: Guido Elmi kept; Mario Rapallo (label owner) left out. Bennato and Nannini found nowhere. Jannacci's Quelli che shaped the title song's lyric form (Vasco, Panorama 2021): songwriting, not added.
- 1981: aor removed: its only source is a Debaser reader tag, not a critic, and it made Bryan Adams lead the suggestions. Other Debaser-only genres (vaudeville, dance on 1979; hardrock, ballad on 1981) kept low in the list for now.

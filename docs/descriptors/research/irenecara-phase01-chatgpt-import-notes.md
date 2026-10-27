# CLAUDE IMPORT — Irene Cara / Fandome Phase 01

Research date **27 October 2026**; GitHub `descriptors` branch checked read-only. `irenecara` **is not present** in either `src/data/catalog.ts` or `src/data/seed.ts`; proposed new ID: `irenecara`. The file `docs/descriptors/irenecara.csv` did not exist, and the existing landmarks list had no Irene Cara row. Thus **nothing has been duplicated**.

## Import contents

Four `studio` rows, chronological, using exact title-based IDs as required:

| album_id | artist | title | year | catalogue action |
|---|---|---|---:|---|
| `irenecara-anyonecansee` | Irene Cara | *Anyone Can See* | 1982 | ADD |
| `irenecara-whatafeelin` | Irene Cara | *What a Feelin'* | 1983 | ADD |
| `irenecara-carasmatic` | Irene Cara | *Carasmatic* | 1987 | ADD |
| `irenecara-irenecarapresentshotcaramel` | Irene Cara | *Irene Cara Presents Hot Caramel* | 2011 | ADD |

Six documents in this ZIP:

1. `irenecara_phase01_rows_ONLY.csv`: **27** canonical descriptor columns; **4** new album rows; all `status=draft`.
2. `irenecara_phase01_sources.csv`: album-specific URLs and what each confirms. Source strengths are about evidence quality, not claimed primary interviews when data comes from reissue pages.
3. `irenecara_phase01_genre_evidence.csv`: one cited line **per genre per album**. Note the distinction `whole album`, `some tracks`, `texture`.
4. `irenecara_phase01_evidence-notes.md`: attribution logic, music, original edition details, credit conflicts and influence citations.
5. `irenecara_phase01_catalog-audit.csv`: new albums + excluded childhood, film, compilation, remix and subset releases.
6. This `CLAUDE_IMPORT.md`.

## Catalog changes needed

- Add new `catalog.ts` artist row using **`irenecara`** and four original records above. Artist is deceased and does not tour; add this ID to the `LEGACY` set or equivalent touring flag.
- Catalogue existing ID collision not found. The **first album here is *Anyone Can See* (1982)**. Childhood LP *Esta es Irene* is excluded because the actual original Gema release was under **Irene Escalera**. Catalogue years disagree (1967 vs 1968); MusicBrainz official Gema catalogue shows 1968. Do **not** add it to Irene Cara's Fandome page. References: https://musicbrainz.org/label/b1a8f8d7-3592-4fd9-b25e-39cf2fc1722d and https://www.allformusic.fr/albums/6e24f685-295a-4eaf-9cdc-986aac9cf072.
- **Co-billed:** `irenecara-irenecarapresentshotcaramel` was issued as **“Irene Cara Presents Hot Caramel”**, the singer's ensemble, although streaming catalogues vary between Irene Cara & Hot Caramel, and Hot Caramel as separate artist. Add to `src/data/coBilled.ts` for correct printed credit:

```ts
'irenecara-irenecarapresentshotcaramel': { credit: 'Irene Cara Presents Hot Caramel' },
```

The `with` field is optional; omit while `hotcaramel` does not have its own Fandome artist page. If later added, use a `with` link to the actual validated Hot Caramel ID.

## Canonical genre, instrument and production tokens

**No new token required.** All used genres (including `hippop`, `acidjazz`, `contemporarypoprock`), instruments (including `synthbass`, `trombone`, `electricpiano`, `clavinet`) and production (`synclavier`, `vocoder`, `drumprogramming`, `hornarrangements`, `stringarrangements`) exist in current branch. Import should validate without extending the type unions. Instrument/production tags are scoped in notes; they do not mean all tracks.

## Artist influences (self-reported; not assigned to any specific album)

In a [2018 Irene Cara interview with Patricia Turnier](https://megadiversities.com/index.php?Itemid=55&catid=36%3Aentrevues-&id=387%3Aexclusive-interview-with-the-oscar-and-grammy-winning-afro-latina-entertainer-irene-cara&option=com_content&view=article), Cara names **Carmen Miranda** as an especially early influence and says she loved **Celia Cruz**, **The Beatles**, **Michael Jackson**, **The Jackson 5**, and respected songwriters **James Taylor, Joni Mitchell and Stevie Wonder**. These are unambiguous, first-person sources for her listening and overall style, *not* proof that any one produced album used their musical vocabulary. Album-level `influenced_by` cells are intentionally empty.

**Secondary lead**: a 1984 Billboard interview, accessible by indexed extract but not readable as a full direct scan in the present research session, mentions **Carole King, Valerie Simpson and Laura Nyro** as the singer's idols. Consider the interview an **unverified lead** until the original print source is inspected. Do not insert these artists into descriptor `influenced_by` merely from the summary.

`Sounds_like` lists are our **editorial** comparisons, not claims of influence. Producers, collaborators, backing singers, and cover-song original performers must never be moved into `influenced_by`.

## Key caveats

1. *What a Feelin’* original 1983 US LP is 10 tracks; European 1983 pressings often 11, and later CD/digital has 15 with additional remixes. Do not classify remixes as original album production. Core material stays 1983.
2. *Carasmatic* is nine tracks, with producer roles split between **George Duke, George Johnson, John Farrar, Bill Seidman and Irene Cara** (track co-production). There is a generic “Linn” drum credit but no reliably named Linn *model*, so do not assign `linndrum` or `linnlm1`.
3. *Hot Caramel* is a full **24-track** 2011 double album; the 2013 five-track Bandcamp edit is an excerpt. Genre mixture sourced partly from Cara's actual 2018 interview. Original liner booklet could not be accessed. `producers` and `production` intentionally blank (not enough verified credits), instrument list provisional until physical liner check; confidence **medium**.
4. *Fame* (1980) and *Flashdance* (1983) are **multi-artist soundtracks**, not new Irene Cara solo album rows. Her *Flashdance* title song is represented as original material on *What a Feelin’*. *All My Heart* (1996) is a one-song remix collection: no studio-album row.
5. All scores 0–5 are original editorial judgements. Credits and influences sourced; records cannot be marked `reviewed` without an independent second check.

## Validation and future batches

Import into catalog first and validate all four rows with `npx vite-node scripts/validate-descriptors.ts` and repo tests. Nothing was edited in GitHub.

**Next phase:** None scheduled. This phase covers all **four original adult-career studio/collaboration albums** identifiable under the Irene Cara credit through October 2026. If a separate soundtrack project is requested, handle only genuinely distinct solo-credited scoring, without repackaging the same *Fame* and *Flashdance* original songs.

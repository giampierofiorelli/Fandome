# Fandome import — Eros Ramazzotti, phase 01

**Artist ID:** `eros` (verified in `catalog.ts`, not `seed.ts`). **Status:** new descriptors only; original albums only; all four rows are `draft`. **Research cut-off:** 29 October 2026.

## Phase contents

1. `eros-cuoriagitati` — **Cuori agitati** (1985, studio); **ADD TO CATALOG**.
2. `eros-nuovieroi` — **Nuovi eroi** (1986, studio); **ADD TO CATALOG**.
3. `eros-incertimomenti` — **In certi momenti** (1987, studio); already in catalog.
4. `eros-musicae` — **Musica è** (1988, studio/mini-album); already in catalog.

There was no accessible `docs/descriptors/eros.csv` at the verified raw-file URL (404), and no `eros-` landmark in the October 2026 landmark research index. Thus **no previously described album was deliberately skipped**. Recheck the repository before importing, in case it changes.

## Catalogue additions

- **Cuori agitati** (1985, `studio`, `eros-cuoriagitati`).
- **Nuovi eroi** (1986, `studio`, `eros-nuovieroi`).

The separate catalogue audit includes later original studio albums missing from the current 7-title catalogue. Its future `ADD` rows are **audit-only**; do not import them as phase 01 descriptors.

**Co-billed albums:** none in this phase. Patsy Kensit features on one track of *In certi momenti*, not an album-level co-billed release.

**New genre/instrument/production tokens:** none. All tokens in the four rows already exist in the repository lists reviewed on the `descriptors` branch.

## ARTIST INFLUENCES (independent of album-specific `influenced_by`)

These are explicitly stated inspirations, not covers, guests, or reviewer-made connections:

- **Ray Charles** — named first as a singing inspiration in Jakob Buhre's interview (Planet Interview, 20 April 2013): https://www.planet-interview.de/interviews/eros-ramazzotti/35756/
- **Stevie Wonder** — named in the same interview as a singing inspiration: https://www.planet-interview.de/interviews/eros-ramazzotti/35756/
- **Steve Winwood** — named in the same interview as a singing inspiration: https://www.planet-interview.de/interviews/eros-ramazzotti/35756/
- **Sting** — named in the same interview as a singing inspiration: https://www.planet-interview.de/interviews/eros-ramazzotti/35756/
- **Genesis** — Ramazzotti said he had long wanted to compose a suite because of his love for Genesis; unusually strong **album-specific** link to *Musica è*: https://www.corriere.it/sette/incontri/22_luglio_29/eros-ramazzotti-finisce-l-amore-non-desiderio-che-sia-felice-chi-hai-amato-6abe0d74-0b15-11ed-9f77-5a61f2af535a.shtml
- **Lucio Battisti** — he described Battisti as a maestro and said he identified with his way of writing and interpreting: https://www.radioitalia.it/news/80-anni-fa-nasceva-lucio-battisti-vasco-rossi-ed-eros-ramazzotti-lo-ricordano-573324

**Not coded as confirmed influences:** he recalled imitating Rolling Stones drumming at five, which establishes early exposure rather than a stated compositional influence (https://www.lavanguardia.com/musica/20150513/54431200012/entrevista-eros-ramazzotti-perfecto.html). The same interview names the Beatles' “Yesterday” as a song he wished he had written, without directly tying it to an album's composition. A producer once urged a Tom Petty vocal model; Ramazzotti said he resisted imitating him (https://www.revistavanityfair.es/poder/articulos/eros-ramazzotti/17053). Do not add these to `influenced_by`.

## Important edition / credit caveats

- **Cuori agitati (1985):** original Italian vinyl has **9 tracks**; the widely distributed CD/digital version has **10**, adding the earlier recording “Terra promessa” (1984). The original LP has separate instrumental sessions for “Una storia importante”. Primary album credit is **Piero Cassano**. Qobuz credits **Renato Brioschi** as producer specifically of the *earlier single* “Terra promessa”, which does not change the nine-track LP's producer field. An isolated seller/transcription also labels Celso Valli producer for that track: **do not substitute him for Cassano without checking the pressing's original sleeve**.
- **Nuovi eroi (1986):** the **9-track LP** contains the new material; the 13-track CD adds **four songs from Cuori agitati**. Genre/sonic description uses the 1986 LP as reference. `AllMusic` lists **Celso Valli** with a generic producer credit on its 13-track edition, while contemporary LP listings identify **Piero Cassano** as album producer; our `producers` field follows the original pressing. Gabriele Melotti is credited “Linn” and Simmons drums; **Linn model not specified**. `linndrum` is *not* set merely because AllMusic says “Linn”. `simmonsdrums` is explicitly documented.
- **In certi momenti (1987):** the Italian original contains 10 tracks. English lyrics/vocals by **Patsy Kensit** feature on “La luce buona delle stelle”, hence `it|en`, not Spanish. `Fairlight II` is model-named, but the token list supports the family-level `fairlight`; original credit reads `Prophet VS-2002`, too ambiguous to choose between distinct Prophet models; neither `prophetvs` nor `prophet2002` is asserted. `Emulator II` and `Emax` are named. Avoid counting arrangers or Adelio Cogliati's **assistant producer** as producer.
- **Musica è (1988):** classify as `studio` because it is the artist's **fourth original studio/mini-album** with five new studio compositions, not a standalone remix EP. The original Italian edition has **5 tracks**, whereas international editions have **7 or 8** and can incorporate *In certi momenti* remixes or earlier hits. Base instruments, lyrics and `it` language on the five originals. The title suite is roughly **11 minutes**, with orchestra and chorus recorded in Munich; Ramazzotti explicitly links his ambition for a suite to **Genesis**. Ignore the later *Eros* (1997) remake with Andrea Bocelli. The 1988 original *Musica è* vocal has no Bocelli guest. `remixing` is omitted from this row because the remixes belong to expanded foreign editions, not the primary five-track album.
- **Genre breadth:** `poprock`/`synthpop` come from styles on contemporary pressings; `italianpop` from AllMusic; `pop` from album reference catalogues; `europop` for the 1988 Italian five-track pressing; `ballad`/`easylistening` are listed by an edition-specific collector index for 1988, and placed late. These labels carry varying source strength. Album `sounds_like` names are **editorial comparisons**, not direct quoted comparisons or documented influences.
- **Scales:** 0–5 values are qualitative **draft judgments** tied to documented arrangements, album sequencing, instrumentation and contemporary genre assessments. They are not musicological measurements. All four rows have `medium` confidence to reflect thin contemporary full-album critical coverage. The `voice` token `raspy` approximates AllMusic's *sometimes gritty/reedy* tenor: the famously **nasal** timbre is not an available voice token, and should not be mapped to `clear`.

## Exclusions from phase 01

Live albums and compilations (including the 1997 *Eros* compilation, even though it contains newly recorded versions) excluded under the project rule. Spanish-language editions (e.g. *Héroes de hoy*, *Música es*) are flagged here as **language counterparts**, not separate cycles of new Italian-language compositions. If Fandome decides to catalogue these editions as independent album entities, add them in a separate, explicit variants pass; do not quietly duplicate the originals. No co-billed studio album is being omitted here.

## Next phase (02)

`eros-inognisenso` — *In ogni senso* (1990); `eros-tuttestorie` — *Tutte storie* (1993); `eros-dovecemusica` — *Dove c’è musica* (1996); `eros-stilelibero` — *Stilelibero* (2000). All four are already in `catalog.ts`. Prepare **four new rows only**, never repack phase 01.

## Claude import note

- Added Cuori agitati (1985) and Nuovi eroi (1986) to the catalogue.
- sounds_like emptied on all four (Raf, Umberto Tozzi, Riccardo Cocciante): ChatGPT calls them "editorial comparisons, not direct quoted comparisons". The reception pass looks for critics' ones.
- Musica è: influenced_by Genesis kept (his own words on the title suite, Corriere della Sera Sette 2022).
- Artist influences from his own words: Ray Charles, Stevie Wonder, Steve Winwood, Sting, Genesis, Lucio Battisti.

## Claude enrichment

- Reception from hitparadeitalia.it year-end charts, it/en/de.wikipedia (certifications, European peaks), Music & Media 1987–88, l'Unità (1987, 1988). No album review found for Cuori agitati or Nuovi eroi (acclaim empty).
- No critic comparison of any of the four albums found: sounds_like stays empty.
- Musica è: Genesis confirmed ("Volevo da sempre fare una suite, amando i Genesis", Corriere della Sera Sette 2022). Added classical crossover (it.wikipedia on the title-track single), last. Kept as studio (5 new recordings; Discogs calls the cassette a mini-album).
- Producers confirmed as Piero Cassano on all four (Discogs original LPs). Celso Valli and Maurizio Bassi are arrangers; Renato Brioschi produced only the 1984 single Terra promessa; Adelio Cogliati is "Producer [Assistant]".
- Nuovi eroi: Prophet-5 and Simmons drums removed (not on the original LP credits or Qobuz; Fairlight and drum programming are).

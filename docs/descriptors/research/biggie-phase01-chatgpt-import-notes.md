# The Notorious B.I.G. — Fandome phase 01 / Claude import

**Audit and research date:** 29 October 2026. The ZIP contains **3 new rows, 27 columns each**, `status=draft`. All source links in the sources file were found via web research; no code was written to GitHub. The album grouping is chronological, studio-only **plus one exceptional, officially co-billed posthumous collaboration**.

## Repository and IDs

- Existing artist ID: **`biggie`**, artist display name **`The Notorious B.I.G.`**, verified in `src/data/catalog.ts` on `descriptors` branch.
- Artist entry already lists *Ready to Die* (1994) and *Life After Death* (1997). Neither is present as an existing descriptor in the `docs/descriptors` directory checked 29 October 2026; `seed.ts` does not contain this artist.
- Import existing album IDs without modifying them: `biggie-readytodie` and `biggie-lifeafterdeath`.
- Proposed **new** album ID: `biggie-thekingi` — *The King & I* (2017), `type=studio`, artist billing **Faith Evans & The Notorious B.I.G.**. It is a co-billed, album-length posthumous production from archival Biggie vocals with new Faith Evans vocals. It is **not** an album Biggie recorded in 2017; label it accordingly.
- `coBilled.ts`: add `biggie-thekingi: { credit: 'Faith Evans & The Notorious B.I.G.' }`. Do not set `with` to a nonexistent artist ID. Only add Faith Evans as an artist when her room is created; `faithnomore` is an unrelated band.
- **Already described album rows skipped:** none. Repo-check: `catalog.ts`, `seed.ts`, coBilled, `docs/descriptors` listing, and landmark research notes.

## This ZIP — phase 01

1. `biggie-readytodie` — *Ready to Die* (1994), solo studio LP; existing catalogue object.
2. `biggie-lifeafterdeath` — *Life After Death* (1997), solo studio double LP; existing catalogue object. Completed before his March 1997 death, released afterward.
3. `biggie-thekingi` — *The King & I* (2017), co-billed **Faith Evans & The Notorious B.I.G.**; add album object and co-billing. **Posthumous assembled collaboration**, not a newly recorded Biggie album.

## What is excluded

- *Born Again* (1999) — compilational posthumous assembly of outtakes, demos and reused vocals, despite the “third album” label in some databases.
- *Duets: The Final Chapter* (2005) — posthumous archival remix/guest-verse assembly, not a new album recorded with Biggie.
- *Conspiracy* (1995) — Junior M.A.F.I.A. group album, not a record billed to Biggie individually or an exact co-billed Biggie collaboration.
- Reissues, compilations, greatest hits and live releases excluded throughout, including extra tracks on anniversary remasters.

**No planned Phase 02 for this artist's currently eligible catalogue**. If Faith Evans's co-billed posthumous work is deemed outside the intended scope, remove the *King & I* row and retain the two primary albums only. Do not substitute *Born Again* or *Duets* as ordinary studio recordings to fill an artificial phase size.

## New vocabulary tokens

After checking `src/data/scenes.ts` in the `descriptors` branch:

- **`gangstarap`** — identified as Gangsta Rap by AllMusic for both lifetime albums and the 2017 archive-vocal duet. Do **not** silently map it to `hardcorehiphop` or `hiphop`.
- **`mafiosorap`** — distinct secondary genre/mode on *Life After Death*, identified in genre documentation and contemporary history; it is not synonymous with `gangstarap`.

Existing genre tokens in rows include `hiphop`, `eastcoasthiphop`, `hardcorehiphop`, `boombap`, `gfunk`, `poprap`, `rnb`, `contemporaryrnb`, `newjackswing`.

**New instrument tokens: none. New production tokens: none.** All row tokens were drawn from Fandome's present genre/instrument/production dictionaries, except the two explicit new genres above. Import those into `scenes.ts` and genre families per normal validation workflow.

## ARTIST INFLUENCES — testimony and important contradiction (artist-level only)

The strongest available **directly reported** evidence concerns **Big Daddy Kane**. Documentary and firsthand studio testimony:

1. **Big Daddy Kane.** Ready-to-Die producer **Easy Mo Bee** reports that Biggie directly told him he loved and intensely studied Big Daddy Kane: https://rapchive.com/news/easy-mo-bee-traces-ice-cube-big-daddy-kane-s-influence-on-biggie-s/ . Childhood friend **Suif “C Gutta” Jackson** independently remembers Big Daddy Kane as Biggie's favourite rapper in the 2021 documentary *Biggie: I Got a Story to Tell*: https://www.revolt.tv/article/2021-03-02/58667/9-things-we-learned-from-biggie-i-got-a-story-to-tell . Both qualify as firsthand recalled statements rather than an invented Biggie quote.
2. **Charlie Parker, Cannonball Adderley and Ella Fitzgerald.** Jazz saxophonist/mentor **Donald Harrison** said he introduced Biggie to their recordings and taught phrasing and scat techniques as a teenager: https://www.theguardian.com/music/2010/aug/03/notorious-big-secret-jazz-education . These are artist-level formative listening / teaching evidence, NOT newly played instruments or documented samples from either album. Documentary excerpts also mention Max Roach drum phrasing: https://www.complex.com/music/a/backwoodsaltar/notorious-big-netflix-documentary-clip-biggie-i-got-a-story-to-tell . Do not infer those musicians shaped a *specific album* without separate album-level documentation.

**Major contradictory testimony:** In a **27 March 1995** Los Angeles Times interview, Biggie himself denied having musical rap influences, saying he did not sit listening to rap records: https://www.latimes.com/archives/la-xpm-1995-03-27-ca-47723-story.html . This conflicts with producer and friend recollections; retain both accounts with attribution. A circulated alleged 1990s ranked rappers interview has disputed authenticity (SPIN): https://www.spinmagazine.com/2017/03/DID-THIS-INFAMOUS-INTERVIEW-OF-BIGGIE-RATING-OTHER-RAPPERS-EVER-ACTUALLY-HAPPEN/ . **Do not** treat that list as reliable influence evidence.

**Album-level `influenced_by` is deliberately EMPTY on all three rows**. Firsthand formative accounts are not explicit album-production attributions; borrowed samples, producer collaborators, features, regional peers and critics' comparisons do not meet Fandome's strict threshold. `sounds_like` contains only editorial sonic comparisons.

## Producer / studio and catalog caveats

- *Ready to Die:* source track-by-track XXL and MusicBrainz; original 17 songs only. The SP-1200 and scratches are evidenced only for selected tracks; never generalize a single machine to every producer. Darnell Scott and The Bluez Brothers have distinct credits. Sean Combs is included for actual track production, not for being executive producer.
- *Life After Death:* recorded before Biggie's death but released afterward. AllMusic and track-level MusicBrainz show hip-hop beats, R&B crossover and jazz/funk/soul-derived samples. **Biggie is credited co-producer on some tracks**, so may appear in the producer list. Do not credit featured vocalists, sample originals or executive-only staff as producers.
- *The King & I:* Faith's sung vocals + archival rap tapes. Industry Qobuz credits establish actual keyboards/bass/drums/piano and instrumental scratching. Rhino confirms the officially co-billed release, new studio sessions and producer lineup. Critics disagree about whether the method creates natural-feeling duets, documented in research notes. The new Biggie catalogue record should carry a visible archival caveat.
- `gangstarap` and `mafiosorap` are valid new token proposals. Do not use near-neighbor aliases instead of adding them.

## ZIP inventory (six UTF-8 files)

- `CLAUDE_IMPORT.md`
- `biggie_phase01_rows_ONLY.csv`
- `biggie_phase01_sources.csv`
- `biggie_phase01_genre_evidence.csv`
- `biggie_phase01_evidence-notes.md`
- `biggie_phase01_catalog-audit.csv`

Import through Fandome's normal catalog and co-billing workflow, update genre tokens, run native descriptor validator and automated tests. Repository was used READ ONLY.

## Claude import note (Oct 2026)

- New genre tokens `gangstarap` (hiphop, hardcorehiphop) and `mafiosorap` (gangstarap, hiphop).
- The King & I added to the catalogue, co-billed "Faith Evans & The Notorious B.I.G." (coBilled.ts); Faith Evans removed from its sounds_like (the co-billed artist is not a comparison).
- Life After Death: Biggie's own co-production credit dropped from producers.
- Artist influences added from Easy Mo Bee, C Gutta and Donald Harrison, with Biggie's 1995 denial recorded in the source.

## Claude enrichment (reception pass, Oct 2026)

- Reception rows: `docs/descriptors/reception/biggie.csv`.
- sounds_like emptied on all three: Nas (Illmatic, It Was Written), Wu-Tang Clan, 2Pac (All Eyez on Me) and Mary J. Blige are era/scene peers in the sources, never critics' comparisons of these albums' sound (Wu-Tang also excluded on Life After Death, RZA produced a track). Credits of The King & I confirmed (Rhino; producers as in the row); instruments undocumented, confidence stays medium.

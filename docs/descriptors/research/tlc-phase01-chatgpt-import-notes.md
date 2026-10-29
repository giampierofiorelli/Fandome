# TLC — Fandome phase 01 / Claude import

Research date **29 October 2026**. Original studio albums, draft only. GitHub branch **`descriptors`** read only. One ZIP with exactly six UTF-8 files. **4 new rows of 27 columns.**

## Artist and existing album

- Existing artist id **`tlc`** (already in `src/data/catalog.ts`). `seed.ts` has no artist with that name. Do not create a second artist.
- **Crucial: `CrazySexyCool` (1994) is ALREADY DESCRIBED** in `docs/descriptors/tlc.csv`, row ID **`tlc-crazysexycool`**. It is also already in catalogue. **SKIPPED**, not included in this ZIP. Keep original unchanged; do not re-import/replace it. It was explicitly verified before phase planning.

## Four NEW rows to add in chronological order

1. `tlc-ooooooohhhonthetlctip` — *Ooooooohhh... On the TLC Tip* (1992), original studio debut, add to catalogue.
2. `tlc-fanmail` — *FanMail* (1999), original studio LP, add to catalogue.
3. `tlc-3d` — *3D* (2002), original studio LP, add to catalogue.
4. `tlc-tlc` — *TLC* (2017), original studio LP, add to catalogue.

For each, add an appropriate `[title,year]` pair in existing `tlc` array in `src/data/catalog.ts`. **Do not create duplicated album/artist IDs.** After catalogue insertion `scripts/validate-descriptors.ts` recognises all four derived IDs. `tlc-3d` and `tlc-tlc` are intentionally short IDs derived from original album names.

## ARTIST INFLUENCES — named artist/source, not speculative

- **Michael Jackson (Thriller):** T-Boz told *Essence* that *Thriller* was the album that influenced TLC most musically, and described Jackson as the act that made her want to perform. Primary direct quote: https://www.essence.com/celebrity/tlc-biopic-5-things-you-did-not-know/ . This is an **artist-level** influence; it does **not** automatically populate any single album `influenced_by` field.
- **Prince:** Lifetime's TLC group retrospective explicitly names Prince as one of TLC's major influences: https://www.mylifetime.com/specials/tlc-forever/pages/tlc-facts . More specifically on *FanMail*, Dallas Austin says *Automatic* took inspiration from Prince's 1982 track *Automatic* (album *1999*), a first-person production account in Billboard 2019 reproduced at https://tlc-army.com/2019/02/22/tlc-reflect-on-fanmail-track-by-track-20-years-on/ . In row F the **documented song-specific** influence is `Prince (1999)`.
- **Tears for Fears (Songs from the Big Chair):** T-Boz directly says the *FanMail* cut *Shout* was inspired by their *Shout*, first issued as a single in 1984, collected on *Songs from the Big Chair* (1985). Same first-person 2019 oral history as above. Documented **song-level** influence in F row only.
- **Nirvana (Nevermind):** T-Boz explicitly says she liked Nirvana's soft-then-hard shifts on *Smells Like Teen Spirit* and modelled part of the *FanMail* cut *I'm Good at Being Bad* on that contrast. Same firsthand 2019 interview. Album-level row records this **specific track-level** influence; it is not a claim that *FanMail* is grunge.
- **Not cleared:** Chilli names Janet Jackson and Salt-N-Pepa as admired women who communicated social and sexual subjects from their own perspective, but explicitly stresses TLC developed its own way. Thus no unquestioned album musical influence for those: https://tlc-army.com/2017/02/25/were-tlc-and-we-just-tell-it-like-it-is-chilli-on-trios-unfiltered-debut-25-years-later/ . Likewise do not treat guest Snoop Dogg, sampled Bobby Hebb/Earth Wind & Fire or comparison to Cherrelle as proven influences.

## Vocabulary validation and credits

- No new tokens required: all row genre tags are already in `src/data/scenes.ts`, including `glitchpop`, `hiphopsoul`, `newjackswing`, `adultcontemporaryrnb`, `southernhiphop`, `drumandbass`; all instruments and production tags are in the respective current enumerations. This includes the `drumandbass` long-tail style specific to *FanMail* title track as confirmed by Dallas Austin, not an album-wide classification.
- All scores use **integer 0–5** anchors per `docs/album-descriptors-guide.md`. Sources in `_sources.csv`; individual genre source and scope in `_genre_evidence.csv`; method and caveats in `_evidence-notes.md`.
- `producers` includes **track producers/co-producers only**; not label executives, sampled performers, pure songwriters, mastering/mixing engineers or merely featured vocalists. Some named album executive producers also produced certain actual songs and qualify on that separate basis.
- **Co-billed albums:** none of four; Snoop Dogg is featured on a song only. No additions to `coBilled.ts`.
- **Left Eye:** *3D* has material recorded with Lisa Lopes before her April 2002 death; it is a real 2002 studio album. *TLC* (2017) features at most a previously recorded **spoken interview excerpt**, not newly recorded vocals. Producer/session testimony and date distinctions explained in notes.
- **Release dates:** 2002 *3D* has conflicting precise date metadata from AllMusic, Qobuz and AOTY. Year **2002** is undisputed; do not infer one exact release day.
- **Edition policy:** `TLC` 2017 Deluxe has extra remastered old songs; use original 2017 studio program and exclude extras. Older greatest hits, *20* (2013), *Now & Forever* (2003), `CrazySexyCool` 2024 deluxe/remasters and live albums excluded.

## Next phase

**No further phase currently required:** all **five original TLC studio albums** have now been accounted for: the four fresh rows in this ZIP plus the previously described `CrazySexyCool`. Check the audit; do not prepare a phase 02 unless the owner asks for EPs, important soundtracks, remixes or back-catalogue correction.

## Import sequence

1. Insert the four `album title/year` pairs into the existing `tlc` catalogue row; keep *CrazySexyCool* and the `tlc` artist ID intact.
2. Copy the only four descriptor rows to `docs/descriptors/tlc.csv` (append/merge preserving the existing 1994 row), not as a second separately imported artist.
3. Use evidence CSV and notes to review genres and producers, keeping the low-tail scope and album-level caveats.
4. Run `npx vite-node scripts/validate-descriptors.ts` and the relevant project tests; resolve any catalogue/vocabulary mismatches before commit. Status stays `draft` pending a second reviewer.

## Claude import note (Oct 2026)

- Four rows appended to tlc.csv (CrazySexyCool untouched); albums added to the catalogue row. Artist influences: Michael Jackson, Prince.

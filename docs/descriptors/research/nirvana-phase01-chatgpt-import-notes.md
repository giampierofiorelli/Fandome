# CLAUDE IMPORT — Nirvana phase 01

**Import policy:** 2026-10-27 cutoff. Exactly four new rows, all existing `catalog.ts` albums. Branch examined read-only: `descriptors`. Import this ZIP only; no preceding Nirvana descriptor CSV exists. Do not import any past artists or future phases.

## Contents (incremental only)

1. `nirvana-bleach` — *Bleach* (1989, studio)
2. `nirvana-nevermind` — *Nevermind* (1991, studio)
3. `nirvana-inutero` — *In Utero* (1993, studio)
4. `nirvana-mtvunpluggedinnewyork` — *MTV Unplugged in New York* (1994, live; landmark exemption)

Files: `nirvana_phase01_rows_ONLY.csv`, `nirvana_phase01_sources.csv`, `nirvana_phase01_genre_evidence.csv`, `nirvana_phase01_evidence-notes.md`, `nirvana_phase01_catalog-audit.csv`, and this import guide.

## Albums to add to catalogue

**None** for the four included albums. The branch currently lists all four in `src/data/catalog.ts`; preserve IDs exactly. `Incesticide` (1992, compilation), `From the Muddy Banks of the Wishkah` (1996, live compilation), and small early EPs are recorded for transparency in catalogue audit but are **excluded** under the agreed non-core compilation/landmark-only-live and landmark-only-EP filters. Do not add these during this phase.

## Co-billed albums

**None.** Featured instrumentalists on Unplugged are guest performers, not co-billed record artists.

## New controlled tokens

- **Genre `punkmetal`**: used once for *Bleach*, because the published *Louder Than Hell* history explicitly characterises this particular album as a punk-metal hybrid. **Not yet in `scenes.ts` or validator genre set; must be added to the genre union and `genreFamilies.ts`** before running the CSV validator. Recommended parents: `punk` and `metal` (Claude to determine correct hierarchy). Supporting URL: https://loudwire.com/louder-than-hell-exclusive-excerpt-unpublished-grunge-chapter/
- **Instruments: none.** All used tokens exist in `instruments.ts`.
- **Production: none.** All used tokens exist in `production.ts`.

## ARTIST INFLUENCES — phase 01 only

These are documented Nirvana/Kurt Cobain-wide inspirations, **not automatically assigned to each album**. Each comes with a direct artist statement or interview citation:

- **Wipers:** Cobain explicitly identifies the Wipers as formative to Nirvana's sound and says the band learned from them in an account of his 1990 interview: https://au.rollingstone.com/music/music-features/wipers-greg-sage-interview-is-this-real-16328/
- **Pixies:** Cobain explicitly says he took quiet/loud dynamics from the Pixies in his interview with Rolling Stone (1994): https://www.rollingstone.co.uk/music/features/kurt-cobain-the-rolling-stone-interview-anniversary-death-38446/
- **The Vaselines:** Cobain and Novoselic both call the group a favourite, with Cobain stating they were the band's number-one favourite: https://www.livenirvana.com/interviews/9201kst/index.php
- **Melvins:** Cobain recalls going to their rehearsals before Nirvana took shape; early drummer Crover also directly compares early recordings with the Melvins: https://kurtcobain.com/nirvana-interview/ and https://sports.yahoo.com/blogs/music-news/the-exclusive-oral-history-of-nirvana-s--bleach-181538550.html
- **The Jesus Lizard:** Grohl names Albini's earlier work with them as the specific drum-recording sound Nirvana sought for In Utero: https://www.livenirvana.com/interviews/9311ts/index.php
- **The Breeders:** Cobain singles out Albini-produced Breeders recordings as an example of the sound sought for *In Utero*: https://www.livenirvana.com/interviews/9309jg/index.php

Avoid inflating this list from Cobain's favourite-records lists without direct statement that the music influenced his own work. Covers are not standalone evidence for influenced_by. Beatles/John Lennon used as a *recording technique analogy* by Butch Vig should remain in technical evidence, not album songwriting influences.

## Credit / edition caveats

- **Bleach** original drums: Chad Channing and some prior Dale Crover recordings; Jason Everman is credited on packaging but did not perform on original tracks. Source: Northwest Music Archives, MusicBrainz, oral history.
- **Nevermind**: Butch Vig and Nirvana have producer metadata; Andy Wallace is only the mixer. Kirk Canning plays cello on *Something in the Way*. The core release is the 1991 version, not a reissue.
- **In Utero**: original sleeve credits Steve Albini as **recorded by**; MusicBrainz credits him **producer**. If the importer mandates producer credentials literally matching original sleeve, remove `Steve Albini` from producer field and leave credit clarified here rather than changing him into a conventional producer. Scott Litt remixed only selected tracks. Distinguish the original mixes from reissue variants.
- **Unplugged** recorded 1993, album released 1994. Live type valid because of landmark status; 1996 Grammy is evidence. Alex Coletti's MTV programme production role is **not** automatically an album producer role.
- No sample, cover or guest-performer names should be moved into influenced_by without independent testimony.

## Next phase

**None planned under the agreed selection rules.** Nirvana released three studio LPs; this ZIP also includes their landmark Unplugged live album. Posthumous compilations and other live releases are not automatically eligible. If the owner explicitly asks to research *Incesticide* or a core EP later, start phase 02 with only that new release.

## Validation / importing

1. Add `punkmetal` to the genre union and parent-family mapping and validator genre list, or review the source and change the descriptor only if substantiated evidence warrants it.
2. Confirm the four catalogue IDs are unchanged.
3. Append only the four phase 01 rows, never backfill another artist's rows.
4. Validate exactly 27 columns, whole-number 0–5 scales, 15-word notes limit, legal `voice`/`lyrics`, and source-backed instrument and production tokens.
5. Review editorial judgment on scale values, `sounds_like`, and the exceptional credit treatment for Albini; keep status `draft` until reviewed.


## Claude import note (Oct 2026)
Unplugged `sounds_like` emptied: Meat Puppets and The Vaselines are covered songs (owner rule: covers are not influences or likenesses); Alice in Chains and Mark Lanegan had no cited source (Lanegan's arrangement of Where Did You Sleep Last Night is again a cover route).

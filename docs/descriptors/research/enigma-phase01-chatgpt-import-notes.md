# CLAUDE_IMPORT — Enigma / Phase 01

**Prepared:** 2026-10-25. **Branch checked:** `descriptors`, **read-only**. **Four new rows only**. Do not append earlier phases or any other artist.

## Phase contents (original release years)

| album_id | Official title | Year | Type |
|---|---|---:|---|
| enigma-mcmxcad | MCMXC a.D. | 1990 | studio |
| enigma-thecrossofchanges | The Cross of Changes | 1993 | studio |
| enigma-leroiestmortviveleroi | Le Roi Est Mort, Vive Le Roi! | 1996 | studio |
| enigma-thescreenbehindthemirror | The Screen Behind the Mirror | 2000 | studio |

## Catalogue operations

**Artist itself is missing:** neither `src/data/catalog.ts` nor `src/data/seed.ts` contains “Enigma”, and `docs/descriptors/enigma.csv` returned 404. First add artist **`enigma`** with display name **Enigma**, then register all four studio albums with the exact IDs above. Source catalog check done 25 Oct 2026. No co-billed albums: no entry required in `coBilled.ts`. The add-artist prerequisite matters: the validator rejects rows for unknown artist IDs even if their slugs are correct.

## Tokens to address before validation

- **New genre:** `worldbeat` (lowercase letters only), used for *The Cross of Changes* and as a secondary trait on the debut and the third album. Source: the official Enigma history and album pages. Add it to `Genre` and to the hardcoded `GENRES` set in `scripts/validate-descriptors.ts`; update genre-family mapping as appropriate. It is *not* interchangeable with `worldmusic` or `ethnicfusion`.
- **Instrument tokens:** `guitar` and `baritoneguitar` appear in the full on-branch `instruments.ts` and guide although absent from the shorter list in the task prompt. They are used here because the original credits specify guitar without guitar type on *Le Roi*, and AllMusic names baritone guitar specifically for *The Screen Behind the Mirror*. Both should validate against the current full repository list; neither needs a new token. `electricguitar` is explicit in Raggett's Cross of Changes review. No additional production tokens.
- **No guessed hardware or DAWs.** The `sampling` token is warranted by identified source recordings. `heavyreverb` is warranted by Rick Anderson's explicit reference to abundant reverb on *Le Roi*. Specific sampler models and software are **left unclaimed**.

## Caveats and editorial decisions

1. **Debut producer:** the 1990 sleeve says “Produced by Enigma” while track-level Qobuz metadata and the official page name Curly M.C. / Michael Cretu as producer. CSV normalizes the human production credit to **Michael Cretu**. Frank Peterson (`F. Gregorian`) is documented as composer on selected tracks, **not** separately credited as album producer; exclude him from the producer field. Keep original alias in notes.
2. **1993 vs 1994:** *The Cross of Changes* first appeared in Europe in **December 1993**. AllMusic lists a February 1994 North American date. Use **1993**, not the US date.
3. **2000 vs 1999:** Enigma's page has contradictory 1999 prose but **2000** metadata/credits; 1999 applies to *Gravity of Love* single. Contemporaneous CD 2000 listings and MusicBrainz confirm 2000 album. Use **2000**.
4. **Samples are not guest credits or influences:** The Kuos' Taiwanese Ami chant on *Return to Innocence* and samples of Led Zeppelin, Carl Orff, Gregorian recordings and Mongolia are cited as sample sources; they are not silently promoted into the `influenced_by` field. *Carl Orff* qualifies for album four only because Cretu explicitly cited his *O Fortuna* theme as a compositional inspiration.
5. **Languages:** only two-letter codes may validate. The Ami language in the Taiwanese vocal sample does not have an ISO 639-1 code, so it is explicitly documented rather than forcing an invalid code. Sanskrit (`sa`) is included for *The Child in Us*, and `la` for chant/Orff material. These are languages of sampled or performed vocals, not necessarily original new lyrics.
6. **Sonic resemblance** (`sounds_like`) is editorial, not a claim of documented influence. The official Yes/Pink Floyd suite-form analogy is an explicit statement by Cretu; its scope is album continuity/segue form, not an assertion about identical instrumentation.
7. **Scope:** `hiphop`, `rock`, `classical`, `pop`, and `trance` can represent beats, sampled snippets or lower-confidence metadata, **not** prevailing album styles. Those are placed later, with `scope` and caveats in genre evidence. The MusicBrainz/Bandcamp `trance` and `ambientpop` classifications on the third album are particularly weak: Claude may retain or downgrade after checking taxonomy against current Fandome consistency rules.
8. **Instruments:** only sources naming the particular instrument for the particular record justify entries. E.g. debut `synth` is named by Ned Raggett; *The Cross* `electricguitar` named by Raggett; *Le Roi* guitar named on track “The Child in Us”; screen album guitars/baritone guitar named by AllMusic, percussion by AllMusic's review, orchestra refers to **sampled orchestral textures** from Orff, not hired Enigma orchestra. Recheck whether the instrument model should include instruments heard in samples; remove orchestra if only live credited performers are allowed.
9. **Edition variance:** extra mixes in some CD, cassette and later digital versions do not create new albums and are excluded from scores.
10. **Non-inclusion:** no live albums or release-only singles. There is no ninth Enigma studio album evidenced as released by 25 October 2026; older notices about a ninth album being planned are not releases.

## Next phase (02)

- `enigma-voyageur` — *Voyageur* (2003), studio
- `enigma-aposteriori` — *A Posteriori* (2006), studio
- `enigma-sevenlivesmanyfaces` — *Seven Lives Many Faces* (2008), studio
- `enigma-thefallofarebelangel` — *The Fall of a Rebel Angel* (2016), studio

Prepare a new incremental ZIP for these four **only**. Optional major 2001 remix *Love Sensuality Devotion: The Remix Collection* should be assessed separately for landmark status; do not automatically include it among the eight core studios or silently merge it into Phase 02.

## Import instructions

1. Add the artist and four albums; add genre token `worldbeat` and validator allowlist.
2. Read the source and genre-evidence CSVs and evidence-notes markdown; make critical judgments on weaker tags.
3. Import only `enigma_phase01_rows_ONLY.csv` into `docs/descriptors/enigma.csv`.
4. Run `npx vite-node scripts/validate-descriptors.ts` and app tests after import. CSV here is a draft, not a claim that the repository validator has been executed.

# CLAUDE_IMPORT — Tears for Fears / phase 01

**Artist ID:** `tff` (found in `src/data/catalog.ts`; not duplicated under a different ID in `seed.ts`).
**Date checked:** 28 October 2026. **Rows:** 4 studio albums. **Status:** all `draft`.

## Import these four rows only

- `tff-thehurting` — **The Hurting** (1983; studio; already in catalogue)
- `tff-songsfromthebigchair` — **Songs from the Big Chair** (1985; studio; already in catalogue)
- `tff-theseedsoflove` — **The Seeds of Love** (1989; studio; already in catalogue)
- `tff-elemental` — **Elemental** (1993; studio; **add to catalogue**)

These IDs follow the existing catalogue's `tff-` artist prefix plus the unaccented, punctuation-free lowercase title. Preserve any existing catalog IDs if Claude's local checkout has changed since the public branch checked here.

## Existing rows skipped

`docs/descriptors/tff.csv` returned HTTP 404 on the public `descriptors` branch, and the October 2026 Claude landmark file has no `tff-` entry. **No pre-existing rows could be confirmed**, so no album was intentionally skipped. If local/private work has already added a descriptor after this check, do not import a duplicate.

## Catalogue additions (title / year / type)

**This phase:** `Elemental` / 1993 / `studio` — `tff-elemental`.

**Next phase:** `Raoul and the Kings of Spain` / 1995 / `studio` — `tff-raoulandthekingsofspain`; `Everybody Loves a Happy Ending` / 2004 / `studio` — `tff-everybodylovesahappyending`.

`The Tipping Point` (2022) is already in `catalog.ts`. There are seven released studio records in all. Live albums, compilations, retrospective boxes and unreleased recordings are excluded by Fandome policy; the "Broken (Live)" fragment on the *Songs from the Big Chair* track list does not change that studio album's classification. No relevant separately credited collaborative LP identified for this phase.

## New genre / instrument / production tokens

**Genre:** none (the chosen canonical genre tokens already appear in the published descriptor guide; check `scenes.ts` at import).
**Instrument:** none.
**Production:** `drumulator` (E-mu Drumulator) and `rolandsuperjupiter` (Roland Super Jupiter / MKS-80); both explicitly named by producer Chris Hughes about *Songs from the Big Chair* in his Red Bull Music Academy interview. Add exactly these two to `production.ts` and, if the validator relies on a union, update it accordingly. Do not conflate Super Jupiter with `jupiter6` or `jupiter8`.

## ARTIST INFLUENCES — sourced, not collaborations

Album-level influences in the rows stay limited to source-grounded statements. The following are documented across interviews and accounts of the band's creative work:

- **Peter Gabriel**, especially *Peter Gabriel (Melt)* (the 1980 third self-titled album; called *Gabriel 3* by Orzabal): Roland states that its cymbal-free, ambient drum sound was a specific model for *The Hurting*. https://superdeluxeedition.com/interview/tears-for-fears-on-the-hurting/
- **Talking Heads**: Pitchfork recounts the music the band drew on while planning *Songs from the Big Chair*. https://pitchfork.com/reviews/albums/tears-for-fears-songs-from-the-big-chair/
- **Brian Eno**: same 1985 creative-listening account. https://pitchfork.com/reviews/albums/tears-for-fears-songs-from-the-big-chair/
- **Robert Wyatt**: Pitchfork reports explicit acknowledgement of the songwriter's influence on *I Believe*; *Sea Song* was also recorded as a B-side, but the cover itself is **not** counted as the influence. https://pitchfork.com/reviews/albums/tears-for-fears-songs-from-the-big-chair/
- **The Blue Nile**, *A Walk Across the Rooftops* (1984): Curt Smith named it a favourite contemporary album and praised its intentional studio sound in the interview reproduced by Pitchfork; a creative-reference claim, somewhat less direct than Orzabal's Peter Gabriel statement. https://pitchfork.com/reviews/albums/tears-for-fears-songs-from-the-big-chair/
- **The Beatles**, particularly the recording of *I Am the Walrus* (issued on *Magical Mystery Tour* in 1967): Orzabal and Dave Bascombe explicitly discuss copying its tempo and orchestral/pastiche model for *Sowing the Seeds of Love*. https://superdeluxeedition.com/interview/sde-exclusive-tears-for-fears-on-the-making-of-sowing-the-seeds-of-love/ ; https://www.classicpopmag.com/features/tears-for-fears-remember-the-seeds-of-love/
- **The Jam, Madness and Blur**: Orzabal describes these as some of the British melodic-pop groups he looked to for the band's **2004** reunion project; only apply them to that later album if verified, rather than retrospectively assigning them to 1983–93 records. https://www.thisisnotretro.com/interviews/tears-for-fears-interview-2004/

## Cautions for Claude review

- Use the **standard studio LP** in each case, not the bonus tracks on 1999/2013/2020 reissues, or 1982 single versions. Some MusicBrainz reissue pages merge credits for multiple versions: e.g. Mike Howlett's production of an early *Pale Shelter* version is **not** evidence that he produced this album's principal 1983 recording.
- Album-era *The Hurting* credits name Chris Hughes and Ross Cullum; *Songs from the Big Chair* credits Chris Hughes; *The Seeds of Love* liner credits list Tears for Fears and David Bascombe. Qobuz also tags Ian Stanley as producer on an individual *Sowing the Seeds of Love* entry, unlike the principal liner album credit: **do not add a blanket Ian Stanley production credit** without checking the actual pressing.
- The *Songs from the Big Chair* production vocabulary reflects Hughes's stated available machines; it does not assert that each machine is audible on every track. `overdubbing` and `synthprogramming` reflect the documented iterative multi-track studio method.
- Orzabal talks about Fairlight demos, and the 1989 album has live musicians plus programmed sections. Richard Niles documents digital editing of his orchestral score fragments. The record's `digitalediting` is **track/arrangement-specific**, not a blanket assertion of digital mastering.
- *Elemental*: actual album liner notes list "all instruments" for Orzabal, Griffiths and Palmer rather than a complete instrument inventory. The sources specifically name a Wurlitzer electric piano on "Goodnight Song" and Guy Pratt's extra bass on "Mr Pessimist"; guitar/keyboards are supported by album-specific musician/gear listings, but are not individually itemised in the booklet. Confidence medium; leave `production` and `influenced_by` empty rather than infer techniques and influences.
- *Elemental* has conflicting release day listings (early June versus June 22); only **1993** is needed by the CSV. Some secondary sites erroneously credit Howard Jones for a piano outro; contemporary liner-credit transcriptions instead credit **Mark O'Donoughue** for the Wurlitzer outro on track 10.
- `sounds_like` are comparative listening judgments; **not** assertions of documented creative influence. The Beach Boys in *Elemental* are a stylistic/homage comparison, not proof Brian Wilson shaped the album's recording process.
- Genre mapping follows precise named genres; scope for art/prog, jazz and synth-pop where mixed appears in `genre_evidence.csv`. Distinguish aggregate album styles from single-track textures.

## Next phase — phase 02 (three albums)

1. *Raoul and the Kings of Spain* (1995; studio; needs catalogue addition)
2. *Everybody Loves a Happy Ending* (2004; studio; needs catalogue addition)
3. *The Tipping Point* (2022; studio; already in catalogue)

No rows from phase 01 should be exported again.

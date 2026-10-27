# R.E.M. — Fandome Phase 03 (STRICT incremental import)

**Artist ID:** `rem` (display `R.E.M.`)  
**Cutoff:** 27 October 2026  
**Source:** public `giampierofiorelli/Fandome` branch `descriptors` and independent source research.  
**Import exactly four NEW descriptor records from `rem_phase03_rows_ONLY.csv`; do not re-import Phase 01 or Phase 02.**

## Phase 03 only

| album_id | album title | year | type | current catalog status |
|---|---|---:|---|---|
| `rem-automaticforthepeople` | Automatic for the People | 1992 | studio | missing |
| `rem-monster` | Monster | 1994 | studio | missing |
| `rem-newadventuresinhifi` | New Adventures in Hi-Fi | 1996 | studio | missing |
| `rem-up` | Up | 1998 | studio | missing |

**Artist/catalog note:** The `descriptors` GitHub `catalog.ts` has no R.E.M. artist row at time of phase03 research, and `docs/descriptors/rem.csv` is absent. The Phase 01 and Phase 02 ZIPs already proposed artist `rem` and eight earlier releases, but these have not appeared on the inspected remote branch. **Claude: import Phase 01 and Phase 02 first if not yet incorporated; create the artist once only**, then ADD this phase's four albums in order. This phase does not duplicate or replace any earlier descriptor rows. Confirm the current target branch before merging in case Claude's local working tree is more advanced.

## New tokens for Claude to register (exactly as written)

- **Genre:** `acousticrock` — *Automatic for the People*: MusicBrainz tag explicitly says acoustic rock. Add to `scenes.ts`, `genreFamilies.ts`, validator as suitable under rock. Other tokens all already in guide/source or were proposed in an earlier REM phase (`americanunderground`).
- **Instruments:** None new. Exact existing tokens used include `electricsitar`, `bouzouki`, `mellotron`, `autoharp`, `guiro`, `electricguitar`, `synth`, `drummachine`, `doublebass`, `oboe`, etc.
- **Production:** `tremolo` and `delay` for *Monster*'s documented guitar sound; `arpodyssey` and `farfisa` for original *New Adventures* credits (while `moog` is already supported); `tapeloops` for *Up*'s specifically described production process. These are **production** technique tokens, not instrument names and not gear models. Add to `production.ts` and validator.
- Do not infer any specific vintage keyboard or drum-machine make/model for *Up*. Do not silently rename techno as industrial; in *Monster*, only industrial is retained from an accessible track-level source, while the techno label remains unverified in an inaccessible periodical scan.

## Co-billed and artist influences

- **Co-billed records:** None in this phase; guests Thurston Moore and Patti Smith do not require a `coBilled.ts` entry. The band retains sole release credit.
- **ARTIST INFLUENCES:** Global band influences were provided in **Phase 01** only and are not repeated here. *Album-specific* influences in the CSV are limited to directly or expertly documented causal references: `Automatic` (Stipe's David Essex/Nazareth song references and producer Scott Litt's Queen/10cc references), `Monster` (Stipe's named 1970s glam band inspirations), `Up` (Beach Boys references). `New Adventures` stays empty: the ambiguous Radiohead conversation is not causal evidence. See each source and the evidence notes.

## Production and edition caveats

- **Automatic (1992):** Scott Litt and R.E.M. produce. John Paul Jones *arranges* strings on four tracks; he is **not** an album producer. David Essex/Nazareth references are songwriter acknowledged; Queen/10cc are producer interpretations. Avoid confusing 2017 reissue material with original LP.
- **Monster (1994):** Scott Litt and R.E.M. produce; Pat McCarthy engineers. Use the **1994 original mix**, not Scott Litt's separately issued 2019 reinterpretation. `tremolo` and `delay` have direct album support. `industrial` is track-level only; the original Billboard PDF mentioning techno could not be accessed, so `techno` was conservatively omitted. Genre metadata additionally includes `grunge`, `neopsychedelia`, `powerpop`, which are contested/secondary. Kurt Cobain tribute or Thurston Moore guest slot is not a musical influence.
- **New Adventures (1996):** Scott Litt and R.E.M. produce. Recorded both in studios and on tour: **type studio**, with `liverecording|concertrecording` production tags. The original sleeve lists digital editing. Exact instrument/model-specific `arpodyssey|moog|farfisa` are corroborated by original issue credits; never infer unrelated synth hardware. Never import anniversary live/bonus tracks as an extra original album.
- **Up (1998):** Pat McCarthy and R.E.M. produce. Nigel Godrich is a **mixer**, not a producer on the original credits. Bill Berry had departed; guests and programmed drums support groove and electronic descriptors. Original release dates vary across territories (UK October 26; official R.E.M.HQ October 27); year remains **1998**. The 2023 remaster does not become a 2023 studio album.
- **Styles:** primary genre first; track-only texture last; instrument / production claims only when sourced for these particular recordings. `sounds_like` is sonic matching editorial judgment and never conflated with documented influence.

## Next: Phase 04

Potentially include the meaningful score/soundtrack release **Man on the Moon: Music from the Motion Picture (1999)** (official R.E.M.HQ archives it; examine original artist billing and co-billed status before deciding the descriptor type), followed by **Reveal (2001)**, **Around the Sun (2004)**, **Accelerate (2008)**. If the soundtrack is rejected because it is principally various-artists compilation, select **Collapse into Now (2011)** instead to keep the next phase at four rows. Do not include unrelated live albums or greatest-hits collections.

Official discography: https://remhq.com/music/ . Original album credit: https://remhq.com/music/automatic-for-the-people/ ; https://remhq.com/music/monster/ ; https://remhq.com/music/new-adventures-in-hi-fi/ ; https://remhq.com/music/up/ .

## ZIP files — exactly six

1. `CLAUDE_IMPORT.md` — audit, import notes, new tokens, next phase.
2. `rem_phase03_rows_ONLY.csv` — 27-col original releases; **4 new rows only**.
3. `rem_phase03_sources.csv` — per-album source title/type/URL/precise support/evidence grade.
4. `rem_phase03_genre_evidence.csv` — one record **per genre token per album**, source and scope.
5. `rem_phase03_evidence-notes.md` — instrument, production, influence and scale explanations; critical disputes.
6. `rem_phase03_catalog-audit.csv` — catalog reconciliation strictly for this phase's albums.

**Claude:** add artist/album objects as needed, register new tokens, check earlier phases (including their pending tokens), run `scripts/validate-descriptors.ts` and project tests. Do not overwrite previously imported rows with this incremental batch.

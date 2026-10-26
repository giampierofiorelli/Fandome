# Fandome Phase 01 — Pink Floyd (read-only research package)

## New rows in this ZIP only
- `pinkfloyd-thepiperatthegatesofdawn` — **The Piper at the Gates of Dawn** (1967, `studio`)
- `pinkfloyd-asaucerfulofsecrets` — **A Saucerful of Secrets** (1968, `studio`)
- `pinkfloyd-more` — **More** (1969, `soundtrack`)
- `pinkfloyd-ummagumma` — **Ummagumma** (1969, `studio`)


## Catalogue audit
- Fandome artist id **`pinkfloyd`** exists in `src/data/catalog.ts`.
- **Already in catalogue:** `pinkfloyd-thepiperatthegatesofdawn` (1967). Keep that ID exactly.
- **Add:** `pinkfloyd-asaucerfulofsecrets` — A Saucerful of Secrets (1968, studio).
- **Add:** `pinkfloyd-more` — More (1969, soundtrack).
- **Add:** `pinkfloyd-ummagumma` — Ummagumma (1969, studio under the current enum; caveat below).
- At research time no `docs/descriptors/pinkfloyd.csv` existed in the branch; if another researcher has subsequently populated it, recheck and avoid replacing prior rows.

## Unusual format: Ummagumma
*Ummagumma* is not a conventional studio LP or an ordinary live album: the original double LP was **one live disc and one studio disc**. Fandome's permitted `type` tokens exclude `hybrid`/`studio+live`. We propose `studio` to retain its major new studio material, but this **loses important format semantics**. Preserve this caveat in all import decisions and consider a dedicated type only in a separate, deliberate schema change. Studio producer Norman Smith; live album producer Pink Floyd. AllMusic calls its release format 'Studio & Live'. Do not treat the live material as a separate 1969 album or add it again.

## New genre tokens required before validation
- `acidpop` — AllMusic uses **acid pop** for Barrett's shorter songs on *Piper* (some tracks).
- `toytownpop` — Album of the Year genre index within its AllMusic 1967 list explicitly labels *Piper* Toytown Pop (some tracks). Source is AOTY indexing, not separately verified AllMusic wording; review on import.
- `psychedelicfolk` — Album of the Year names **Psychedelic Folk** for *More* (some songs), distinct from existing `psychfolk`. Do not silently rename it.
Add these to `src/data/scenes.ts`, `src/data/genreFamilies.ts` and to any validator whitelist, following the existing implementation. `acidpop` may parent to `psychedelicpop`/`pop`, `toytownpop` to `psychedelicpop`/`pop`, and `psychedelicfolk` to `folk`/`psychedelia` after ontology review.

## Instrument / production tokens
- **No new instrument tokens** proposed. All instrument tokens used are already in the guide (`whistle` covers tin whistle; `mallets` covers vibraphone/xylophone).
- **No new production tokens** proposed. `tapeeffects` is tied to *More* and *Ummagumma* track-specific credits; `concertrecording` covers only *Ummagumma* live disc. Blank production fields are deliberate where only broad sound descriptions are available.

## Editorial and evidential caveats
- **No inferred influences:** `influenced_by` remains blank on all four, because musical resemblance cannot prove an album-specific influence. `sounds_like` values are editorial similarity candidates, not provenance claims.
- **Source-scope discipline:** Genre evidence distinguishes `whole album` and `some tracks`. The first genre has the largest matching weight. `soundtrack` is a format context for *More* and is not used as a substitute for its actual sound.
- **Release edition:** *The Piper at the Gates of Dawn* uses the original 11-track 1967 UK release; do not duplicate original singles or later anniversary bonus recordings. *A Saucerful of Secrets* was originally issued mono and stereo; no edition-specific tracks added. *More* is the film soundtrack proper. *Ummagumma* must include both original discs, not only its studio side.
- **Recording/album dates:** Official Pink Floyd discography groups releases by month; retail and database entries may vary by day, region or reissue. Original release years are unambiguous and used for Fandome.
- **Divergence:** The later reviewers and original album credits differ about some dates and whether an individual track fits the overall album genre. Evidence scopes and notes record those limits.
- Research files contain original descriptions; no substantive review text reproduced verbatim. All rows are `draft`, pending Claude validation and secondary review.

## Next phase — Phase 02
1. *Atom Heart Mother* (1970, studio), add to catalogue.
2. *Meddle* (1971, studio), add to catalogue.
3. *Obscured by Clouds* (1972, soundtrack), add to catalogue.
4. *The Dark Side of the Moon* (1973, studio), preserve catalogue ID.

Do not copy any Phase 01 rows into Phase 02. Run the Fandome validator and tests after import.

# Fandome / Bronski Beat — Phase 01 — instructions for Claude

**Research date:** 27 October 2026. **Repository branch read-only:** `descriptors`, `giampierofiorelli/Fandome`. **One ZIP, six files, no edits to GitHub.** All rows `draft`, not independently second-reviewed. This is STRICTLY INCREMENTAL: import only four new rows.

## Phase 01 content and catalogue actions

| album_id | album title | year | type | catalog status as checked | action |
|---|---|---:|---|---|---|
| `bronskibeat-theageofconsent` | The Age of Consent | 1984 | studio | already present | import descriptor |
| `bronskibeat-hundredsthousands` | Hundreds & Thousands | 1985 | remix | missing | add album, then import descriptor |
| `bronskibeat-truthdaredoubledare` | Truthdare Doubledare | 1986 | studio | already present | import descriptor |
| `bronskibeat-rainbownation` | Rainbow Nation | 1995 | studio | missing | add album, then import descriptor |

**Album artist id = `bronskibeat`** (from `src/data/catalog.ts`); this exact ID is reused. No conflicting artist entry found in `src/data/seed.ts`. Original existing catalog tuples are `['The Age of Consent', 1984]` and `['Truthdare Doubledare', 1986]`. Add 1985 and 1995 in chronological order as above without renaming existing releases. None of these four had an existing descriptor row in `docs/descriptors/bronskibeat.csv` when researched; no previously filled row is repeated.

## Critical classification and edition safeguards

1. **Hundreds & Thousands is `remix`**, not studio or compilation. It has a 1985 six-track original LP: four extended/remixed debut tracks plus the two original non-LP songs 'Run From Love' and 'Hard Rain'. The expanded CD includes B-sides and a Marc Almond collaboration; do not duplicate those in the original six-track focus. This distinct early remix statement justifies a Fandome album row despite the general low priority of compilations. Source: https://www.swedishcharts.com/showitem.asp?cat=a&interpret=Bronski+Beat&titel=Hundreds+%26+Thousands and https://bronskibeat.bandcamp.com/album/hundreds-and-thousands.
2. **The Age of Consent** is the original ten-track 1984 album with Jimmy Somerville, not a 40th-anniversary bonus edition. The 1985 *I Feel Love* Marc Almond duet must not be copied onto the original 1984 album's voice evidence. The original contains an earlier medley.
3. **Truthdare Doubledare** is original nine-track 1986 LP with **John Foster / John Jon / Jøn** singing. Adam Williams (not Gareth Jones, who mixed it) produced. A stream including 12-inch bonus tracks is not the base LP.
4. **Rainbow Nation** (1995) has **Jonathan Hellyer** as lead vocalist, not John Foster. Contains mostly new recordings alongside song reinterpretations. AllMusic credits **Steve Bronski** sole album producer and Ian Donaldson programming/keyboards. Do not count rerecorded old songs as a 1995 compilation.
5. Mix/master/reissues do not generate separate rows or override original album years.

## New controlled-vocabulary tokens

**Genre tokens:** None. Every selected genre exists in the checked `src/data/scenes.ts`, including `hinrg`, `dancepop`, `newwave`, `clubdance`, `alternativedance`, `eurodisco`, `contemporarypoprock`, `poprock`.

**Instrument tokens:** None. Instrument spelling follows `src/data/instruments.ts`, including `flugelhorn`, `marimba`, `congas`, `clarinet`.

**Production tokens to ADD if absent:**
- `yamahaqx1` → **Yamaha QX1 sequencer**
- `yamahatx816` → **Yamaha TX816 tone-generator rack**

Both are directly named in Larry Steinbachek's original February 1986 interview with *Sound On Sound* at https://www.muzines.co.uk/articles/perfect-beat/1549 and corroborated at https://www.muzines.co.uk/articles/the-beat-goes-on/9219. They describe 1986 album-era band studio practice; no track-by-track model usage has been proved. Confirm these are still missing before altering tokens, since repository state may have advanced. All other production tokens are already listed.

## ARTIST INFLUENCES — named acts with evidence (phase 01 only)

This is **band-era general influence** provenance, not a claim that a musician on every Bronski Beat album cited each act. Jimmy Somerville departed after the 1984 material; **do not automatically copy these names into the 1986 and 1995 album `influenced_by` cells**.

| artist / producer | evidence | qualification |
|---|---|---|
| **Donna Summer** | DJ Mag: https://djmag.com/features/how-bronski-beats-smalltown-boy-became-enduring-anthem-queer-liberation ; Somerville first-person interview https://thequietus.com/interviews/jimmy-somerville-interview/ | Formative electronic disco records, not inferred only from the band's cover |
| **Giorgio Moroder** | DJ Mag research linked above, quoting Somerville's attraction to the synthesis of Moroder's records | Source describes Somerville's formative Moroder/disco sound; singer's direct testimony about Donna Summer reinforces |
| **Talking Heads** | Somerville first person: https://thequietus.com/interviews/jimmy-somerville-interview/ | Music in clubs when Bronski Beat began, named in answer about band's influences |
| **Soft Cell** | Same first-person Quietus interview | He describes specifically mixing Soft Cell with disco recordings |
| **Simple Minds** | Same first-person Quietus interview | London alternative club influences, explicitly mentioned |
| **Peggy Lee / Connie Francis** | Same Quietus interview | Early personal vocal influences, not an album production influence; do NOT auto-populate `influenced_by` unless evidence links the actual album |
| **Kraftwerk / David Bowie** | Somerville first-person interview indexed at https://www.releasemagazine.net/a-chat-with-jimmy-somerville/ and a Guardian profile at https://www.theguardian.com/culture/2014/jul/17/jimmy-somerville-smalltown-boy-bronski-beat-communards-interview | Important personal listening history; Release magazine currently has a technical page error, so do NOT use as mandatory source for album cells without alternative working interview |

**Influence is not similarity.** `sounds_like` consists of original editorial ear comparisons; neither a shared producer, covered artist, featured guest nor a contemporary reviewer’s 'sounds like' comment is direct `influenced_by` evidence. Therefore `influenced_by` is empty on the 1985/1986/1995 rows. For the 1984 album five acts are backed by formation-period testimony; avoid adding others just because their songs are covered.

## Next phase — not included in this ZIP

- `bronskibeat-outabout` — *Out & About*, recordings made in 1987, digital public release reported around **2016** (some sources say 2017); confirm exact first release and add with release year, not recording year.
- `bronskibeat-theageofreason` — *The Age of Reason* (2017), actual re-recordings by Steve Bronski/Ian Donaldson/Stephen Granville plus new tracks; handle 2017 original disc separately from remix extras.

Sources for deferred decisions: https://www.independent.co.uk/news/obituaries/steve-bronski-death-obituary-bronski-beat-b1976605.html ; https://www.southbankcentre.co.uk/magazine/pride-87-at-the-southbank-centre/ ; https://www.classicpopmag.com/reviews/new-albums/bronski-beat-album-review/ ; https://www.allmusic.com/album/the-age-of-reason-mw0003062214 .

Later remix-only reissues/compilations and concerts are deliberately excluded; see research notes for exceptions. 1993 *The Album* remains an edition-level audit question, not an invented original studio release.

## Import and validation

1. Add the two missing catalogue album tuples (do not change artist ID or prior releases); optionally confirm deferred albums in phase 02 before creating their tuples.
2. Add the two new production model tokens only if absent in the current branch.
3. Copy **only** four new rows from `bronskibeat_phase01_rows_ONLY.csv` to `docs/descriptors/bronskibeat.csv`. If the target file now exists, de-duplicate by `album_id`; never overwrite another artist's work.
4. Keep all `status=draft`, retain `confidence` distinctions, inspect references and genre-level provenance, then run repository validator and tests.
5. Import the three accompanying research/audit files according to existing repository naming conventions and retain these metadata caveats for follow-up.

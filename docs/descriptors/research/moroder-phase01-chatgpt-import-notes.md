# Giorgio Moroder — Fandome descriptors, Phase 01 — CLAUDE IMPORT

Generated: 2026-10-25. **Incremental import ONLY**: four rows for this phase and no prior artist data. GitHub branch `descriptors` was read-only. Repository inspection confirms artist ID `moroder` in `src/data/catalog.ts`; `docs/descriptors/moroder.csv` does not exist (checked both file and directory contents). There are already three artist catalog entries: *From Here to Eternity* (1977), *E=MC²* (1979), *Déjà Vu* (2015). These are not repeated here.

## ZIP contents

1. `moroder_phase01_rows_ONLY.csv` — **exactly 25 descriptor columns**, four new studio-album rows, `status=draft`.
2. `moroder_phase01_sources.csv` — album-linked source IDs, original URLs, source class, specific support and evidence strength.
3. `moroder_phase01_genre_evidence.csv` — each declared genre, album scope and source IDs.
4. `moroder_phase01_evidence-notes.md` — justified scales, blank unknowns, weaker genres and genuine source conflicts.
5. `moroder_phase01_catalog-audit.csv` — album IDs/status and album creation instructions.
6. `CLAUDE_IMPORT.md` — this import guide.

## Phase contents / catalog additions (four new albums)

| album_id | exact phase title | year | type | catalog |
|---|---|---:|---|---|
| `moroder-thatsbubblegumthatsgiorgio` | That's Bubble Gum - That's Giorgio | 1969 | studio | add |
| `moroder-giorgio` | Giorgio | 1970 | studio | add; partly revised regional LP |
| `moroder-sonofmyfather` | Son of My Father | 1972 | studio | add |
| `moroder-giorgiosmusic` | Giorgio's Music | 1973 | studio | add |

The first LP also appears as *That's Bubblegum – That's Giorgio*; using the official-site **Bubble Gum** wording here keeps a stable catalogue title. Do not create a second ID for alternate punctuation/spacing. The 1970 self-titled release survives on Fermata (Brazil etc.); Wikipedia lists Hansa in a discography table. It is substantially **1969 reused repertoire** plus newer singles; merge/duplicate logic must be conscious of this. *Giorgio's Music* is the original German-language Philips 6303 102 LP, not the 1973 English-language singles. Pete Bellotte is a **co-writer and coordinator**, not a producer on the documented *Son of My Father* issue.

## New genre tokens requested for Claude to assess

| token | proposed broader parent(s) | direct evidence | qualification |
|---|---|---|---|
| `garagerock` | `rock` | 1969 original LP record metadata | secondary classification, weak |
| `psychedelicrock` | `rock` | 1970/72 album genre labels and 1972 psychedelic effects | limited specialist corroboration for whole LP |
| `psychedelicpop` | `pop` | 1972 music genre aggregator | some-track character |
| `sunshinepop` | `pop` | 1972 music genre aggregator | weak/track-limited |
| `protodisco` | `disco` or `dance` | SPIN signed article explicitly uses *proto-disco* for 1972 album | retrospective genre, not fully fledged disco |
| `schlager` | `pop` / `traditionalpop` | Repertoire archival liner and 1973 album genre metadata | 1969/70 primarily historical context |

These six tokens are absent from the verified current `Genre` union and `validate-descriptors.ts`. After evaluating them, add retained tokens to all three linked files: `src/data/scenes.ts` (Genre type), `src/data/genreFamilies.ts` (parents) and `scripts/validate-descriptors.ts` (validator set). **The supplied rows intentionally preserve new genres, so they will NOT pass the current unmodified validator**. This is an import obligation, not a silent error. `synthpop` and `electropop` were deliberately not introduced for these LPs from reputation alone. Any final removal of a proposed genre must be mirrored in the genre-evidence CSV.

## Import and review process

- Recheck `docs/descriptors/moroder.csv` before writing; if now present, merge only the four new IDs. Do not reimport another artist or previous phase.
- Add four missing LPs in `src/data/catalog.ts`, preserving official titles and correct original years; let the site's ID mechanism issue the exact IDs above. The originally listed *From Here to Eternity*, *E=MC²* and *Déjà Vu* must remain intact.
- Cross-check unusual tags in the genre evidence file: notably `garagerock`, `psychedelicrock`, `sunshinepop`, `protodisco`. AOTY genre tags and Wikipedia classifications are weaker than signed first-person accounts.
- Keep `confidence=low` and blank scores where appropriate. Never turn a blank score into an inferred disco/electronic rating based only on later work. The 1973 LP has **eight deliberate blank scalar cells**.
- Verify the `Wendy Carlos` entry for 1972 as a **documented inspiration**, not a session musician, producer or collaborator [S72-INTER]. On that album, `lyrics=identity` is based only on the title track; clear it if album-wide thematic evidence is required.
- `sounds_like` entries are editorial hypotheses, not documented influence. `influenced_by` blank = not established.
- Run `npx vite-node scripts/validate-descriptors.ts`, the project tests and build after add/merge, then independently review before changing `status=draft`.

## Complete scope roadmap / next phase

**Phase 02** (new rows only):
1. *Spinach 1* (1973) — **Spinach** project with Michael Holm; documented collaboration, confirm original credit/track list and release timing within 1973.
2. *Einzelgänger* (1975) — pioneering experimental synthesizer record under the Einzelgänger name.
3. *Knights in White Satin* (1976) — original Giorgio solo album, disco transition.
4. *From Here to Eternity* (1977) — **already exists** as `moroder-fromheretoeternity`; preserve that ID, do not add it twice.

Later phases work through 1978 *Midnight Express* and other consequential soundtrack albums, Chris Bennett / Joe Esposito / Philip Oakey documented collaborations and Moroder's later studio work, chronologically. Do **not** insert Donna Summer albums as Moroder solo albums; his work as their producer belongs in credits/connections, not this artist's album rows. The scope may grow once each candidate's significance and actual release status is checked.

## Released-album inventory for subsequent phase selection (not rows in this ZIP)

The four Phase 01 LPs above are the start of this chronological research queue. These are **released** records / documented releases, not future projections. Studio projects and documented full-length collaborations are in the core queue; soundtrack records are candidates **only when their role in Moroder's work warrants a distinct Fandome recommendation entry**. Original issue details, collaborators, sequence within an ambiguous release year, and soundtrack authorship must be independently rechecked in their own phase. This section is an audit queue, not extra descriptors.

| Year | Record | class / status |
|---|---|---|
| 1973 | *Spinach 1* (Spinach, with Michael Holm) | core: documented collaborative studio project |
| 1975 | *Einzelgänger* | core: studio, Einzelgänger alias |
| 1976 | *Knights in White Satin* | core: studio |
| 1977 | *From Here to Eternity* | core: studio; in existing catalog |
| 1978 | *Love's in You, Love's in Me* (with Chris Bennett) | core: documented collaborative studio |
| 1978 | *Midnight Express* | significant soundtrack, core candidate |
| 1978 | *Music from Battlestar Galactica and Other Original Compositions* | soundtrack/arrangements: verify true album attribution and scope |
| 1979 | *E=MC²* | core: studio; in existing catalog |
| 1980 | *American Gigolo* | significant soundtrack, core candidate |
| 1980 | *Foxes* | soundtrack candidate, verify original LP and contribution |
| 1982 | *Cat People* | significant soundtrack, core candidate |
| 1983 | *Solitary Men* (with Joe Esposito) | core: documented studio collaboration |
| 1983 | *Scarface* | significant soundtrack, core candidate |
| 1983 | *Flashdance* | landmark soundtrack but multiple producers/artists; audit role |
| 1984 | *Electric Dreams* | significant soundtrack, core candidate |
| 1984 | *The NeverEnding Story* (with Klaus Doldinger) | soundtrack co-composer credit / territorial editions need audit |
| 1984/1985 | *Metropolis* | significant soundtrack; verify original film/soundtrack issue year |
| 1985 | *Innovisions* | core: studio |
| 1985 | *Philip Oakey & Giorgio Moroder* | core: documented studio collaboration |
| 1990 | *To Be Number One* (Giorgio Moroder Project) | core: studio project |
| 1992 | *Forever Dancing* | core: studio |
| 2015 | *Déjà Vu* | core: studio; in existing catalog |

Other actual soundtrack LPs in the official discography include *D.C. Cab* (1983), *Over the Top* (1987), and scores from the later film and game work. **Do not automatically insert every guest production, compilation, remix single or film compilation**. Check landmark impact, substantial credited composition/production or a documented whole-project collaboration before selection. The 1985 *Metropolis* soundtrack is sometimes assigned 1984 from the film release; research and preserve the *record's* original date, not just the film's date.

Discographic sources for this future inventory: [Moroder official Music index](https://www.giorgiomoroder.com/music/), [official credits](https://www.giorgiomoroder.com/credits/), [MusicBrainz artist releases](https://musicbrainz.org/artist/38dd6337-19ae-4793-ab4b-313eff523457), [Store norske leksikon discography](https://snl.no/Giorgio_Moroder), and [historical release chart listing](https://www.danishcharts.dk/showinterpret.asp?interpret=Giorgio+Moroder). Source disputes remain open, especially soundtrack dates and the inclusion criteria.

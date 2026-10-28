# CLAUDE_IMPORT — Survivor, Fandome phase 01

**Use the single accompanying ZIP.** Research date: 28 October 2026. GitHub `giampierofiorelli/Fandome`, branch `descriptors`, read-only research. Import target is the same branch after user approval; this file performs **no GitHub writes**.

## Phase 01 — 4 original studio albums

| New album_id | Album | Original year | type |
|---|---|---:|---|
| `survivor-survivor` | Survivor | 1979 | studio |
| `survivor-premonition` | Premonition | 1981 | studio |
| `survivor-eyeofthetiger` | Eye of the Tiger | 1982 | studio |
| `survivor-caughtinthegame` | Caught in the Game | 1983 | studio |

All four are **new additions**: no Survivor (Chicago) entry is present in examined `src/data/catalog.ts`, `src/data/seed.ts` or `src/data/coBilled.ts`. The proposed `artist_id` is `survivor`; do not confuse with the distinct pre-1980 Louisiana band also named Survivor. Before import, re-check repository at the then-current commit for newer additions; the audit is a dated snapshot. Suggested artist tagline: *Chicago's melodic hard rock, from street anthems to arena choruses*. Artist home scene: United States (US), English (en), 1970s, AOR/hard rock; colours and profile media left to Claude/user.

## What is inside

- `survivor_phase01_rows_ONLY.csv`: exactly four **new** rows + 27-column header, ready for an append (after catalogue additions).
- `survivor_phase01_sources.csv`: album evidence, sources and strength levels.
- `survivor_phase01_genre_evidence.csv`: one source/scope per genre/album, 21 total, order follows rows.
- `survivor_phase01_evidence-notes.md`: personnel, dates, scoring, instrument and influence decisions, contradictions.
- `survivor_phase01_catalog-audit.csv`: 8 studio albums, phase and proposed catalogue actions.
- This `CLAUDE_IMPORT.md`.

No `type=live` or `type=compilation`. The movie **Rocky III** is not an album: *Eye of the Tiger* (1982) is the studio LP. The 1983 Bickler-era album should not be confused with 1984 *Vital Signs*, featuring Jimi Jamison.

## Mandatory import checks

1. Reopen `album-descriptors-guide.md`, `scenes.ts`, `genreFamilies.ts`, `instruments.ts`, `production.ts`, `catalog.ts`, `seed.ts`, `coBilled.ts` on **branch descriptors**.
2. Add an artist room for `survivor` and the four studio albums in the site's established data structures. Avoid album-ID collisions. The exact IDs above use lowercase ASCII letters and digits only for the title component.
3. Copy the four CSV rows without changing 27-column order; set all rows `status=draft` pending human/second-person verification. Preserve blank production values (unknown, not omission errors).
4. **New genre tokens: none. New instrument tokens: none. New production tokens: none.** All 21 genre occurrences and named tokens use existing allowed values in the guide. Run `scripts/validate-descriptors.ts` and project tests after adding records.
5. The `genres` order puts broad style labels after precise hard-rock/AOR descriptors, except `powerballad` last on *Eye of the Tiger* because it refers to one song.
6. For 1981 *Premonition*, four names are in `producers` **only because Artie Ripp and Artie Kornfeld are credited as co-producers on tracks 1–2**. If importer requires full-album-only producer credits, keep only Peterik/Sullivan and annotate the track credits elsewhere; do not erase the distinction silently.
7. For 1982 *Eye of the Tiger*, liner notes and MusicBrainz songs credit **Peterik + Sullivan**, despite a contrary one-person album infobox entry. Keep both.
8. For 1983 *Caught in the Game*, **only Frankie Sullivan** is album producer; **Jim Peterik is assistant producer**, not a producer for that album.
9. `production=moog` on 1979 debut documents **Moog bass pedals**, *not* a specific Moog monosynth; `production=emulator` on the 1982 record documents an **E-mu Emulator**, *not* Emulator II. No machine/production tokens are guessed for 1981 or 1983.
10. `Survivor` was released 21 Dec 1979 in one reference but catalogues also index the wider release as 1980; maintain Fandome 1979 if original issue date policy applies. *Premonition* 1981 month varies among catalogues, so only year is asserted.

## ARTIST INFLUENCES — direct statements from a Survivor writer (not album-wide attribution)

These are **Jim Peterik's own named musical influences / favourites**, to be used as artist-level research context, **not automatically inserted into `influenced_by` for each album**:

- **The Beatles** — Peterik names them among his formative songwriters and, in a separate interview, as his early band's biggest influence. Sources: https://louderthanwar.com/interviewjim-peterik/ ; https://www.newjerseystage.com/articles/2021/10/03/the-search-is-over-spotlight-on-the-ides-of-marchs-jim-peterik/.
- **The Beach Boys** — Peterik names their songwriting in the set of three musical influences he calls the three Bs; separately recalled learning their songs in his early band. Sources: https://louderthanwar.com/interviewjim-peterik/ ; https://www.newjerseystage.com/articles/2021/10/03/the-search-is-over-spotlight-on-the-ides-of-marchs-jim-peterik/.
- **Burt Bacharach** — named as a childhood songwriting reference, including melodies sung by Dionne Warwick. Sources: https://louderthanwar.com/interviewjim-peterik/ ; https://www.newjerseystage.com/articles/2021/10/03/the-search-is-over-spotlight-on-the-ides-of-marchs-jim-peterik/.
- **The Everly Brothers** — named as formative favourite and harmony influence. Sources: https://louderthanwar.com/interviewjim-peterik/ ; https://www.newjerseystage.com/articles/2021/10/03/the-search-is-over-spotlight-on-the-ides-of-marchs-jim-peterik/.
- **Elvis Presley** and **Johnny Cash** — named among the earliest music Peterik heard and loved; childhood listening, **weaker evidence for specific Survivor album arrangements**. Sources: https://louderthanwar.com/interviewjim-peterik/ ; https://www.newjerseystage.com/articles/2021/10/03/the-search-is-over-spotlight-on-the-ides-of-marchs-jim-peterik/.
- **The Ventures** — Peterik says his pre-Beatles group learned their tunes. Source: https://www.newjerseystage.com/articles/2021/10/03/the-search-is-over-spotlight-on-the-ides-of-marchs-jim-peterik/. This is evidence of formative repertoire rather than a specific Survivor LP influence.

**Album-specific evidenced musical reference:** **Queen (The Game)** in `influenced_by` for *Eye of the Tiger* **only**. Peterik recalls watching Rocky III footage with Queen's `Another One Bites the Dust` as temporary music and aiming to write a track to equal its impact. First-person account: https://www.guitarworld.com/features/interview-guitarist-jim-peterik-talks-tiger-and-new-pride-lions-album-immortal. This is a title-song creative reference, not proof of Queen's influence on all nine tracks.

Explicitly excluded from `influenced_by`: Sylvester Stallone (director, non-musical inspiration); collaborators, guest singers Richard Page, Tom Kelly, Kevin Cronin; comparisons made only by critics (Foreigner/Journey/Zeppelin); Peterik's previous band The Ides of March (self-reference).

## Phase 02 (on request)

The remaining four studio albums: **Vital Signs (1984)**, **When Seconds Count (1986)**, **Too Hot to Sleep (1988)**, **Reach (2006)**. Original editions only. This finishes the eight-album studio discography documented by AllMusic (https://www.allmusic.com/artist/survivor-mn0000039637).

## Claude import note (Oct 2026)

- Rows imported as delivered; plain `rock` kept last (whole-album rock records by a rock band, after the precise subgenres).
- Artist added with the full 8-album studio discography (phase 02: Vital Signs, When Seconds Count, Too Hot to Sleep, Reach). Scene US en 1970 rock.

## Claude enrichment (reception pass, Oct 2026)

- Reception rows: `docs/descriptors/reception/survivor.csv`.
- sounds_like checked album by album: Journey removed everywhere (no critic found, only reader comments and fan sites). Survivor (1979): Foreigner kept (weak support: shop listing and user review). Premonition: REO Speedwagon (Schlockmania: "Like REO Speedwagon in their pre-ballad success era"; no Cronin credit on this album). Eye of the Tiger: Foreigner and Led Zeppelin confirmed (AllMusic, Greg Prato). Caught in the Game: Foreigner removed (not found), REO Speedwagon removed (Kevin Cronin sings backing vocals: a guest's band); left empty.

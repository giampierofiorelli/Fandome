# CLAUDE_IMPORT — Queen — Phase 01

**Target:** Fandome repository branch `descriptors` (read only in this research session). Prepared 2026-10-26. **Do not concatenate with earlier phases as full files.** This ZIP includes **four new descriptor rows**, with the mandatory 27-column header. Files are UTF-8 with BOM for CSV compatibility. No scripts or repository edits.

## Phase 01 rows and existing catalogue IDs

| album_id | title | year | type | catalog |
|---|---|---:|---|---|
| `queen-queen` | Queen | 1973 | studio | present |
| `queen-queenii` | Queen II | 1974 | studio | **add** |
| `queen-sheerheartattack` | Sheer Heart Attack | 1974 | studio | **add** |
| `queen-anightattheopera` | A Night at the Opera | 1975 | studio | present |

**Genre-evidence source IDs** link into `queen_phase01_sources.csv`; scope explains album-wide versus individual-track descriptions.

## Full catalogue audit — original released albums

The existing `catalog.ts` Queen entry contains **six** albums: *Queen*, *A Night at the Opera*, *News of the World*, *The Game*, *A Kind of Magic*, *Innuendo*. The other **nine Queen studio/soundtrack albums** below are absent. The separately credited 2008 collaborative studio album is another proposed addition. Exact entries also appear in `queen_phase01_catalog-audit.csv`.

- 1973 — *Queen* (`queen-queen`), `studio`, **PRESENT**, phase01
- 1974 — *Queen II* (`queen-queenii`), `studio`, **ADD**, phase01
- 1974 — *Sheer Heart Attack* (`queen-sheerheartattack`), `studio`, **ADD**, phase01
- 1975 — *A Night at the Opera* (`queen-anightattheopera`), `studio`, **PRESENT**, phase01
- 1976 — *A Day at the Races* (`queen-adayattheraces`), `studio`, **ADD**, phase02
- 1977 — *News of the World* (`queen-newsoftheworld`), `studio`, **PRESENT**, phase02
- 1978 — *Jazz* (`queen-jazz`), `studio`, **ADD**, phase02
- 1980 — *The Game* (`queen-thegame`), `studio`, **PRESENT**, phase02
- 1980 — *Flash Gordon* (`queen-flashgordon`), `soundtrack`, **ADD**, phase03
- 1982 — *Hot Space* (`queen-hotspace`), `studio`, **ADD**, phase03
- 1984 — *The Works* (`queen-theworks`), `studio`, **ADD**, phase03
- 1986 — *A Kind of Magic* (`queen-akindofmagic`), `studio`, **PRESENT**, phase03
- 1989 — *The Miracle* (`queen-themiracle`), `studio`, **ADD**, phase04
- 1991 — *Innuendo* (`queen-innuendo`), `studio`, **PRESENT**, phase04
- 1995 — *Made in Heaven* (`queen-madeinheaven`), `studio`, **ADD**, phase04
- 2008 — *The Cosmos Rocks* (`queen-thecosmosrocks`), `studio`, **ADD**, phase04; co-billed **Queen + Paul Rodgers**

## Phase 01 catalogue additions (import before descriptor validation)

- **Queen II** (1974), studio, `queen-queenii`
- **Sheer Heart Attack** (1974), studio, `queen-sheerheartattack`

## New genre tokens (must be added before running validation)

- `britishmetal` — AllMusic uses the explicit style **British Metal** for *Sheer Heart Attack* [S2]. Not interchangeable with the broader `heavymetal`.
- `vaudeville` — Pitchfork and the official Queen music-hall retrospective use vaudeville to describe *Bring Back That Leroy Brown* on *Sheer Heart Attack* [S6, S7]. Related to but not identical with `musichall`.
- `skiffle` — album review explicitly describes skiffle within *A Night at the Opera*; very limited coverage, so last in ordering [N10].

- `arenarock` — AllMusic uses **Arena Rock** as a retrospective style for all four releases [D2, Q3, S2, N3]. This token is absent from `scenes.ts`; add it without treating it as a literal stadium-recording claim.

All other selected genre tokens occur in the current `scenes.ts` list, including `prog`, `hardrock`, `artrock` and `musichall`.

## New instrument tokens

- `tubularbells` — specialist Queen II recording inventory specifies **tubular bells** [Q5]; distinct from generic `bells` or `chimes`.
- `banjoukulele` — the original *Sheer Heart Attack* sleeve specifies Brian May's **George Formby ukulele-banjo** [S3, S5, S7]. Do not treat the same hybrid instrument as two separate instruments.

No new production tokens. `castanets`, `bells`, `koto`, `mallets`, `vocalfilter`, `tapeeffects` exist already in the repository's current lists/guide. `arenarock` is **also a new genre** and must be entered in `scenes.ts` (and any validator allowlist, if separately hard-coded), alongside the three tokens above.

## Collaborations / billing

- None of the four albums in this ZIP are co-billed.
- A later phase includes *The Cosmos Rocks* (2008), a **studio album credited to Queen + Paul Rodgers**. Add `queen-thecosmosrocks` to the catalogue and a co-billed record as appropriate; preserve the exact credit **Queen + Paul Rodgers** in `coBilled.ts` (not an ordinary Freddie Mercury-era Queen album). This is a documented project, not a compilation, live album or post-2026 release.

## ARTIST INFLUENCES — phase 01 only

These refer to Queen's named models **across the group's work**. Their presence here is **not** an instruction to copy every name into every album's `influenced_by` cell.

| artist / group | documented admission | source |
|---|---|---|
| The Beatles | Brian May specifically credits their music, harmony, songwriting and multitrack studio practice | https://www.guitarworld.com/artists/queens-brian-may-sounds-off-about-freddie-mercurys-guitar-skills-bohemian-rhapsody-actors-and-the-most-difficult-song-to-play-live |
| Led Zeppelin / Jimmy Page | May calls Zeppelin a major musical influence on the band, and explicitly links *Now I'm Here* to Zeppelin | https://www.guitarworld.com/features/brian-may-queen-the-ultimate-interview |
| The Who | May names The Who, alongside the Beatles and Zeppelin, as the platform the band built on | https://www.guitarworld.com/features/brian-may-queen-the-ultimate-interview |
| Jimi Hendrix | May describes hearing Hendrix as life-changing and an early guiding guitarist | https://www.guitarworld.com/artists/queens-brian-may-sounds-off-about-freddie-mercurys-guitar-skills-bohemian-rhapsody-actors-and-the-most-difficult-song-to-play-live |
| Rory Gallagher | May says Gallagher directly shaped his guitar tone, amplifier choice and riffs | https://brianmay.com/brian-news/2015/10/brian-may-interview-on-taste-and-rory-gallagher-transcript/ |
| Buddy Holly and the Crickets | May identifies this as a source of early vocal harmony technique | https://www.guitarworld.com/artists/queens-brian-may-sounds-off-about-freddie-mercurys-guitar-skills-bohemian-rhapsody-actors-and-the-most-difficult-song-to-play-live |
| The Everly Brothers | May says their harmonies formed part of his musical education | https://www.guitarworld.com/artists/queens-brian-may-sounds-off-about-freddie-mercurys-guitar-skills-bohemian-rhapsody-actors-and-the-most-difficult-song-to-play-live |
| Free | May says some early Queen songs followed Free's songwriting method | https://www.guitarworld.com/artists/queens-brian-may-sounds-off-about-freddie-mercurys-guitar-skills-bohemian-rhapsody-actors-and-the-most-difficult-song-to-play-live |
| Eric Clapton | May calls Clapton's early guitar work life-changing | https://www.guitarworld.com/artists/queens-brian-may-sounds-off-about-freddie-mercurys-guitar-skills-bohemian-rhapsody-actors-and-the-most-difficult-song-to-play-live |
| Liza Minnelli | Freddie says Minnelli's delivery and stage energy inspired Queen's theatrical performance | https://www.pbs.org/wnet/americanmasters/liza-minnelli-inspired-these-six-performers/35742/ |

**Distinctions:** Mercury's admiration for Joni Mitchell (1974 interview) does not independently demonstrate that she shaped a Queen recording; a favourite listening artist is not automatically an artistic influence. Rory Gallagher's tone influence is well documented but no guest player is added as an influence merely because they performed. Mercury's *Cabaret* fascination is mainly theatrical rather than a specific Queen album production claim.

## Original-credit and edition caveats

- Queen 1973: most tracks produced by **Queen / Roy Thomas Baker / John Anthony**; *The Night Comes Down* instead by **Queen / Louie Austin**. Baker is also an engineer; only the explicitly credited producer role qualifies.
- Queen II 1974: original producer text reproduced in Queen's 2026 reissue states **Roy Thomas Baker and Queen**, with **additional production by Robin Geoffrey Cable and Queen**. The official 2024 anniversary page more loosely lists Cable among producers. He is excluded from the descriptor producer list under the strict Fandome additional-production-only ban, pending verified track-specific primary co-production credit. See notes Q1/Q2.
- Sheer Heart Attack and A Night at the Opera: **Queen / Roy Thomas Baker**. Engineers, executive producers and contemporary reissue remix engineers are excluded.
- Queen II has a 2026 remix, Queen I a 2024 remix. **The phase rows describe the 1973, 1974 and 1975 original albums, not these remixes.**
- Queen's original four LPs explicitly disclaim synthesizer use. Amplified guitars and studio effects must not be mistaken for synths. Real brass/woodwinds are likewise **not** credited on *Seaside Rendezvous*: the players imitate them vocally.
- Original album names are preserved; no 1974 and 2026 dual listing as separate studio albums, no compilations or live albums.
- `sounds_like` records editorial resemblance, not attested musical influence. `influenced_by` is intentionally sparse.
- AllMusic review pages sometimes returned **403 to automatic open**, although their search-indexed original URLs, title data and review excerpts were available; the source CSV retains those canonical links. Sources from QueenOnline, Pitchfork, original credited LP materials and specialist interviews cross-check essential facts.

## What Phase 02 will include

1. **A Day at the Races** (1976) — `queen-adayattheraces` — add to catalogue.
2. **News of the World** (1977) — `queen-newsoftheworld` — already in catalogue.
3. **Jazz** (1978) — `queen-jazz` — add to catalogue.
4. **The Game** (1980) — `queen-thegame` — already in catalogue.

## Import protocol

1. Update the missing `catalog.ts` records and any generated seed IDs for the four Phase 01 rows.
2. Register new genres `arenarock`, `britishmetal`, `vaudeville`, `skiffle`; register instruments `tubularbells`, `banjoukulele` in their relevant allowlists.
3. Import **only** the four rows from `queen_phase01_rows_ONLY.csv` into `docs/descriptors/queen.csv`.
4. Store phase-scoped sources, genre evidence, evidence notes and audit in `docs/descriptors/research/`.
5. Run existing validator and tests; review conflicts without silently changing source-proven original credits.

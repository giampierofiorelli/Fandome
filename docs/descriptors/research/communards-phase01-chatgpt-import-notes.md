# Fandome — The Communards — Phase 01 import notes

Prepared: 2026-10-27; branch `descriptors`, read-only. Artist credit: **The Communards**. Proposed unique artist id: **`communards`**, containing only lowercase letters. Both `src/data/catalog.ts` and `src/data/seed.ts` were checked for **Communards** and did not contain the artist; `docs/descriptors/communards.csv` returned **404**. The landmarks list did not mention The Communards. This is a proposal: recheck for concurrent changes before import.

## Phase 01 contents — 2 new album rows

1. `communards-communards` — **Communards** (1986, studio, self-titled; not to be confused with artist display name The Communards).
2. `communards-red` — **Red** (1987, studio).

No album descriptor rows previously present at the checked path were skipped. **Both rows are additions**, not updates, to existing catalogue album ids. Keep file strictly incremental.

### Catalogue additions and artist room

Add **artist** `communards` with display name `The Communards`, plus the two album entries above. MusicBrainz and AllMusic list **only those two studio albums**, and classify **Heaven** (1993/1994 depending on release edition), **The Platinum Collection** (2006), **The Collection** (2012), and subsequent collections as compilations, hence excluded. 

- MusicBrainz: https://musicbrainz.org/artist/7696c8a8-f971-4b8a-820e-b8bd922bfa57
- AllMusic: https://www.allmusic.com/artist/communards-mn0000078467
- Label: https://londonrecords.co.uk/artists/the-communards/

**Co-billed album releases:** none. Sarah Jane Morris is a **credited featured guest on the track** “Don't Leave Me This Way” and not a co-billed artist on the full album. Do not add Bronski Beat recordings or Jimmy Somerville solo albums to the group.

### Genre / instrument / production additions

**New genre tokens:** none. The existing vocabulary accepts all genres in both rows: `dancepop`, `synthpop`, `alternativedance`, `hinrg`, `disco`, `pop`, `electronic`, `jazz`, `eurodance`, and `ballad`.

**New instrument tokens:** none. **New production tokens:** none. There is evidence of Jimmy Somerville using **Linn drum programming** from a **February 1986** period interview, but it does **not identify a specific Linn model**. Consequently the first album has `drummachine` / `drumprogramming`, **not** the unsupported `linndrum` machine token. Do not infer a Fairlight, Emulator, DX7, Linn 9000, 808 or sequencer model from the year.

## ARTIST INFLUENCES — sources and strength (phase 01 only)

These are influences **declared by Jimmy Somerville or Richard Coles** in interviews, not song-cover writers or collaborators promoted as influences. Do not automatically copy this list into album-level `influenced_by`: that field requires specific album connection. The debut includes Coles's named piano heroes, documented contemporaneously in February 1986; `Red` leaves `influenced_by` EMPTY without direct evidence of specific record-making influence.

**Richard Coles — named keyboard heroes in the contemporary February 1986 interview:**
- **Fats Waller** — Coles specifically credits him for the origins of his jazz-piano interests.
- **Art Tatum** — he names Tatum's harmonies and keyboard colouring as a model.
- **Count Basie** — he cites Basie's economy and style, contrasting him with another pianist.
- **Arturo Benedetti Michelangeli** — Coles identifies him as his ultimate classical pianist hero (the source renders surname “Michaelangeli”).
  - Primary interview: Tony Reed, *International Musician & Recording World*, February 1986: https://www.muzines.co.uk/articles/communards-manifesto/5127?theme=1
  - Distinguish **Oscar Peterson**, who Coles mentions only as an opponent in a televised piano performance (comparison, not specifically his own influence). **Jerry Dammers**, **Jools Holland**, and **Mick Talbot** are praised as contemporary keyboard players, but the interview does not clearly call them his inspirations.

**Jimmy Somerville — his own retrospective interviews on formative music:**
- **Donna Summer**, **Gloria Gaynor**, **Village People**, **El Coco**, **George McCrae**, **The Detroit Emeralds** — disco records/musicians Somerville describes as formative listening, including purchasing Gaynor's *Never Can Say Goodbye* as one of his earliest albums. https://thequietus.com/interviews/jimmy-somerville-interview/
- **Peggy Lee**, **Connie Francis** — explicitly named by Somerville as early jazz/blues influences. https://thequietus.com/interviews/jimmy-somerville-interview/
- **Talking Heads**, **Simple Minds**, **Soft Cell** — named in discussion of his club/new-wave musical influences that fed Bronski Beat and The Communards. https://thequietus.com/interviews/jimmy-somerville-interview/
- **Sylvester**, **Dolly Parton**, **Nina Simone**, **Nina Hagen**, **The Temptations**, **Diana Ross** — named in response to a direct question about his musical influences growing up. The interviewer/source spells one singer “Donna Summers”; report canonical **Donna Summer**. https://equality365.com/interview-jimmy-somerville-discos-back-into-our-hearts/
- **Dusty Springfield**, **Doris Day** — Somerville recalls singing along to both as formative vocal influences (interview explicitly discusses his childhood vocal taste). https://buttmagazine.com/interviews/jimmy-somerville/
- **Harry Thumann** — “Underwater”, one of his first records, described as thrilling during formative disco listening; **a formative recording, not a claimed per-album production source**. https://thequietus.com/interviews/jimmy-somerville-interview/

**Covers are not influences in the row.** Thelma Houston's recording (from *Any Way You Like It*) and Gloria Gaynor's remake (from *Never Can Say Goodbye*) go into `sounds_like` as album-specific sonic comparators because the record label directly identifies those stylistic models; label's phrasing “taking inspiration” for a cover does not override the no-covers-as-influences rule. Bronski Beat is Somerville's previous band and also only a sonic comparator, never an influence entry.

## Edition, production and genre caveats

- **Communards (1986):** Target **original ten-track studio LP** (London LONLP 18 / MCA 5794). Streaming version at Bandcamp lists **12 tracks**, including “Breadline Britain” and a 22:49 “Disenchanted [Dance]” bonus; these **are not** counted in original ten-track album's descriptor. UK release day differs by historical source (14 July vs streaming label 5 September): year **1986** stable. 1986 LP liner credits have **Mike Thorne sole album producer**, Coles acoustic piano/organ/synth and Somerville programming, with New York session players on horns, percussion, upright bass and strings. The group **touring band personnel** must not be assumed to have played on the LP. Primary credits: https://www.musik-sammler.de/release/the-communards-communards-lp-222813/.
- **Red (1987):** Original ten-song LP, not the 2022 anniversary expansion. UK period discography often gives **5 October 1987**; label Bandcamp digital listing gives **4 September 1987** and Album of the Year **1 October**. Use **1987** without committing to one release day. Original UK LP LONLP 39 specifies **Stephen Hague** for tracks 1,2,4,5,6,8 and **The Communards** for tracks 3,7,9,10. **Alvin Clark** normally appears as *assistant producer / assistant production work*, not a full producer: exclude from `producers`. A few record metadata transcriptions say “co-producer” ambiguously; do not override the original LP's allocation. **Shep Pettibone** is credited as *additional producer and mixer* on “Never Can Say Goodbye” in one MusicBrainz edition: not a principal producer of the original album. Sources: https://www.chartsurfer.de/artist/the-communards/red-album_ffhrhg.html and https://musicbrainz.org/release/87860dde-99e8-41c5-899c-7579db3c815b.
- **Hi-NRG and Eurodance:** `hinrg` on both is grounded in the record label and period single styles, with large dance-track scope. On *Red*, `eurodance` is a **retrospective AllMusic critic's wording** (“Euro-dance”) about a **1987** record. This is **not a claim that the 1990s Eurodance movement already existed** in its later recognizable form.
- **Jazz on Communards:** specifically the “Lover Man” performance and Coles's piano-ballad / supper-club arrangements; `jazz` goes **last** because it does not describe the majority of tracks. *Red* has ballads and piano passages but insufficient basis to call the album a jazz record. 
- **Reviews disagree:** AllMusic considers *Red* improved in songwriting, polish and sound; Cary Darling's contemporary *Los Angeles Times* review favours the debut's jazz/blues stylistic variety and finds *Red* less adventurous. Preserve that disagreement as a production/experimental contrast rather than inventing a quality score.
- **Literal album genre:** AllMusic includes generic *Alternative/Indie Rock* as a database style for both albums, but a direct review does not support significant guitar rock in the original arrangements. Excluded from ranked genre lists deliberately; no generic rock tag merely to fill a count.
- **Synth and drum units:** original sleeve for *Red* directly lists a bass synth (Rob Fisher), other synths, programming and an extended live ensemble, but gives **no unambiguous synth model**. Generic tokens only, no fabricated gear. 
- **Vocal handling:** Use `falsetto` because period/retrospective critics explicitly describe Somerville's register; the husky Sarah Jane Morris duet is part of the debut but not *Red* (she is not in the documented *Red* session vocalist list).

## Next phase

**No phase 02 is currently needed.** The Communards have two studio albums and both are delivered here. Reissue bonus remixes, standalone 12-inch singles, and later compilations are out of scope unless the project owner explicitly requests an individual historically important EP or remix release.

## Included files

- `communards_phase01_rows_ONLY.csv` — header + two 27-column album descriptor rows
- `communards_phase01_sources.csv` — sourced album/artist evidence with URLs
- `communards_phase01_genre_evidence.csv` — one genre/source/scope rationale per album and genre
- `communards_phase01_evidence-notes.md` — album-by-album audit and uncertainty notes
- `communards_phase01_catalog-audit.csv` — missing artist and two catalogue additions

All rows are `draft`; add artist/album catalogue entries before running the validator. No write was made to GitHub.

## Claude import note (27 Oct 2026)

`sounds_like` emptied on both rows: Thelma Houston and Gloria Gaynor are the originals of songs the Communards covered (a cover is not a comparison), and Bronski Beat is Somerville's own former band (no self-references).

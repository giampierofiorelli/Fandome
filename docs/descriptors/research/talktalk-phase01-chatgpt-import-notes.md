# CLAUDE IMPORT — TALK TALK / PHASE 01

Strictly incremental: this ZIP describes ONLY three Talk Talk studio records from 1982–1986. Do not import the future albums from the catalogue audit as rows. The branch `descriptors` was read on 2026-10-27; there was **no Talk Talk artist** and **no docs/descriptors/talktalk.csv** at that point. The existing `talkingheads` is a DIFFERENT act.

## Phase contents (27-column descriptor rows)

- `talktalk-thepartysover` — **The Party's Over** (1982, studio)
- `talktalk-itsmylife` — **It's My Life** (1984, studio)
- `talktalk-thecolourofspring` — **The Colour of Spring** (1986, studio)

## Required catalogue and scene additions

- Add Fandome artist ID `talktalk` (name `Talk Talk`, British band, formed 1981). This is necessary for validator; do it **before** importing rows. Suggested scene is `talktalk: GB en 1980 synthpop,newwave,artrock`; use only existing genre tokens for the scene initial insert. Add `talktalk` to disbanded/not-touring `LEGACY` if that logic applies. Do not confuse with `talkingheads`.
- Add these three studio album tuples to the new artist’s catalog `albums` array: `[["The Party's Over", 1982], ["It's My Life", 1984], ["The Colour of Spring", 1986]]`. The slugger yields the three album IDs above; the metadata is currently entirely absent.
- Add `Spirit of Eden` (1988, studio) and `Laughing Stock` (1991, studio) at Phase 02, or register them in the catalogue now **without** duplicating them in Phase 01 descriptor rows; both are missing at this snapshot.

## Co-billed albums
None in Phase 01. All three records are credited only to Talk Talk. Guest musicians and guest choirs are not co-billed album artists.

## New allowed tokens

- Genre `newromantic`: explicitly named by AllMusic for the first and second albums. The scene aesthetic is not being treated as sufficient evidence alone; the professional review labels the recordings accordingly.
- Instrument `variophon`: rare breath-controlled electronic keyboard/wind instrument, confirmed by both Hollis and Friese-Greene in a 1986 primary interview. Do not map this to `vocoder` or a modern synthesizer model.
- Instrument `lyre`: 1986 artist explicitly describes African little lyres on the record; their exact model is unidentified. Keep `lyre` as a generic new token rather than inventing a mbira or kora.
- Other tokens use existing descriptor vocab (`prog` for progressive rock). No unsupported device models introduced. `oberheimobx` and `jupiter8` are directly named in the 1984 interview; the magazine's separate photo of a tour kit does **not** establish which drum machines were on the studio album.

## ARTIST INFLUENCES — lifetime / whole career (Phase 01 only)

These are documented touchstones of Hollis, not blanket album-level influence assignments. Strictly keep the album `influenced_by` narrower and evidence-specific.

- **Otis Redding** — Guardian Annie Zaleski reports Hollis’ 1982 statement naming Redding as a vocal influence. Source: https://www.theguardian.com/music/2019/feb/26/talk-talk-mark-holliss-ambition-co-existed-with-commercial-success
- **John Coltrane** — 1982 interviews praise his arrangements; Guardian and Pitchfork retrospectives. Source: https://www.theguardian.com/music/2019/feb/26/talk-talk-mark-holliss-ambition-co-existed-with-commercial-success
- **Burt Bacharach** — Early Hollis interview praised Bacharach’s songwriting, as reported in Guardian. Source: https://www.theguardian.com/music/2019/feb/26/talk-talk-mark-holliss-ambition-co-existed-with-commercial-success
- **Claude Debussy** — Early Hollis references to his creative process in Guardian; 1986 period composer listening. Source: https://www.theguardian.com/music/2019/feb/26/talk-talk-mark-holliss-ambition-co-existed-with-commercial-success
- **Dmitri Shostakovich** — Early Hollis interview references, recounted by Guardian. Source: https://www.theguardian.com/music/2019/feb/26/talk-talk-mark-holliss-ambition-co-existed-with-commercial-success
- **Miles Davis** — Hollis named in archived artist recollections; Classic Pop connects modal jazz to 1986 sessions. Source: https://www.classicpopmag.com/features/classic-album/classic-album-talk-talk-the-colour-of-spring/
- **Gil Evans** — Pitchfork cites Hollis’s interest in Davis-with-Evans arrangements. Source: https://pitchfork.com/thepitch/remembering-talk-talks-mark-hollis-master-of-silence/
- **John Cage** — Pitchfork reports Hollis named Cage in interviews. Source: https://pitchfork.com/thepitch/remembering-talk-talks-mark-hollis-master-of-silence/
- **Maurice Ravel** — Jason Cowley 1998 profile cites Hollis; also Pitchfork. Source: https://www.jasoncowley.net/article/Out-of-Time-Mark-Hollis
- **Ornette Coleman** — Jason Cowley, direct 1998 interview: influence list (source misspells as Colman). Source: https://www.jasoncowley.net/article/Out-of-Time-Mark-Hollis
- **Olivier Messiaen** — Jason Cowley, 1998 direct interview. Source: https://www.jasoncowley.net/article/Out-of-Time-Mark-Hollis
- **John Lee Hooker** — Jason Cowley, 1998 direct interview. Source: https://www.jasoncowley.net/article/Out-of-Time-Mark-Hollis
- **Béla Bartók** — Hollis 1986 quoted saying Bartók affected The Colour of Spring arrangements. Source: https://www.classicpopmag.com/features/classic-album/classic-album-talk-talk-the-colour-of-spring/
- **Erik Satie** — Classic Pop reports Hollis listened to Satie during 1986 sessions. Source: https://www.classicpopmag.com/features/classic-album/classic-album-talk-talk-the-colour-of-spring/
- **Darius Milhaud** — Classic Pop reports Hollis listened to Milhaud during 1986 sessions. Source: https://www.classicpopmag.com/features/classic-album/classic-album-talk-talk-the-colour-of-spring/

## Caveats and musicology checks

- The first LP features **Simon Brenner**, no Friese-Greene production; the next two LPs were produced by **Tim Friese-Greene**. Do not list arrangers, guest musicians or engineers as producers.
- The album-wide `sounds_like` list is editorial analogy; critics’ Duran Duran comparison is NOT a documented band influence and Hollis rejected that comparison.
- The 1984 “It’s My Life” song credits and Ian Curnow’s 1984 first-person magazine interview establish studio Jupiter-8 and OB-X. A separate reference calls Fairlight/TR-808 "probable"; these **are deliberately excluded**. The July 1984 photograph of tour hardware also cannot prove studio devices.
- `The Colour of Spring` retains a small amount of synth/Variophon rather than falsely setting `electronic=0`. Tim Friese-Greene says piano, real performers, acoustic tape recording and limited synth use. The producer confirms occasional sampled drum parts and programmed rhythmic sketches; exact tracks remain uncertain.
- The 1986 genre textures `jazz`, `classical`, `folk` are explicitly mentioned by Classic Pop as audible inspirations, not claims that the LP is a fully jazz or classical recording. They go after primary genres. The AOTY `newwave` label is a transitional legacy attribution, not dominant.
- The lyric theme `spiritual` in 1982 is low-rank and is based on Guardian’s account of religious imagery, NOT a gospel musical genre.
- 1986 influenced_by documents Bartók’s album-arrangement role, producer-acknowledged Kate Bush (Running Up That Hill from *Hounds of Love*) for one track’s beat, and *Green Onions* for the organ figure. Literary philosopher Jean-Paul Sartre influenced 1986 lyrics but is intentionally excluded from MUSICAL influenced_by. This is also why samples and covers do not count as influences.
- Release-year headings are from original 1982, 1984, 1986 issues, not later remasters. The timing of *The Colour of Spring* appears as Feb or March 1986 in sources; year 1986 is unambiguous.
- 1982 `The Party's Over` is an original studio album. Do not add the different original 1982 `Talk Talk` EP in Phase 01: its core repertoire overlaps and does not provide a distinct landmark album entry for recommendations.
- `It's My Mix` (1984), `History Revisited: The Remixes` (1991), `Asides Besides` (1998), reissues and live albums are **excluded**: remix/recycled material would muddy album similarity. `History Revisited` was disputed by the band; not a band-led original creative release.

## Next phase
**Phase 02** — `Spirit of Eden` (1988) and `Laughing Stock` (1991), two entirely new rows, after which all **five** Talk Talk original studio albums will have been covered. No band live or compilation LPs, and no 1998 Mark Hollis solo record under the Talk Talk ID.


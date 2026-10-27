# JOY DIVISION — Fandome Phase 01 — Claude import notes

## Phase contents (only these 3 new rows)

| album_id | title | year | type |
|---|---|---:|---|
| joydivision-anidealforliving | An Ideal for Living | 1978 | ep |
| joydivision-unknownpleasures | Unknown Pleasures | 1979 | studio |
| joydivision-closer | Closer | 1980 | studio |

**Critical catalogue prerequisite:** `src/data/catalog.ts` does **not** currently have an entry for Joy Division (nor are any Joy Division albums present), and `docs/descriptors/joydivision.csv` does not exist as inspected on 27 October 2026. `joydivision` is a PROPOSED new artist ID, not a pre-existing ID. Before import Claude must create an artist room/ID in the catalogue (and ensure the corresponding source-of-truth `seed.ts` build generates the same album IDs), then add the three releases. Do not silently treat them as present. `neworder` is a separate artist room and must not be reused.

## Albums to add to catalog.ts

1. `An Ideal for Living` (1978, `ep`) — landmark early four-track self-released EP; add even though your default catalogue focuses on studio albums.
2. `Unknown Pleasures` (1979, `studio`).
3. `Closer` (1980, `studio`).

## Co-billed records

None in this phase.

## New genre tokens

None. Genre tags use established Fandome tokens, with retrospective genre terms sourced in genre_evidence. `punk` and `punkrock` are distinct established tokens.

## New production tokens for Claude to register

- `powertrantranscendent2000`: Sumner's self-assembled analog monosynth heard on *Unknown Pleasures*, especially “I Remember Nothing”. Sources: Peter Hook in International Musician (1985), MusicTech technical feature, Science and Industry Museum.
- `amsdmx1580s`: stereo AMS digital delay variant identified by the Science and Industry Museum for the *Unknown Pleasures* sessions. Do not conflate the stereo DMX with earlier mono AMS 15-80.
- `marshalltimemodulator`: studio processor documented by Science and Industry Museum in Hannett's studio work on the original recordings. If Claude finds this testimony too broad for the album, omit the token rather than imputing its presence.
- `arpomni`: ARP Omni synthesizer used on *Closer*, confirmed by Morris and Hook in interviews. Do not merge into `arp2600`.

**Already allowed:** `arp2600`, `sequentialproone`, `rolandcr78`, `drumprogramming`, `tapeeffects`, `backmasking`, `vocalfilter`, `heavyreverb`, `lofi`, `sonicmanipulation`. No new instrument tokens.

## ARTIST INFLUENCES — documented, career-wide (Phase 01 only)

These are **general influences on Joy Division**, distinct from `influenced_by` for a particular record:

- **Kraftwerk** — Peter Hook says Curtis introduced the band to *Autobahn* and *Trans-Europe Express* and the group adopted the idea of four equally important musicians; [Peter Hook, NME, 6 May 2020](https://www.nme.com/features/peter-hook-florian-schneider-kraftwerk-new-order-joy-division-influence-tribute-2660805).
- **Can** — Peter Hook describes Curtis introducing them to Can and its effect on the group; [Peter Hook, Bristol24/7](https://www.bristol247.com/culture/music/interview-peter-hook-joy-division-new-order/). Stephen Morris names Jaki Liebezeit as an important drumming influence; [Morris, Getintothis, 2019](https://www.getintothis.co.uk/2019/05/stephen-morris-interview-we-didnt-want-to-be-joy-division-anymore-but-we-didnt-know-anything-else/).
- **Faust** — identified by Peter Hook among records Ian introduced; [Bristol24/7 interview](https://www.bristol247.com/culture/music/interview-peter-hook-joy-division-new-order/).
- **The Doors** — Peter Hook says Curtis introduced the band to The Doors; [Peter Hook, NME](https://www.nme.com/features/peter-hook-florian-schneider-kraftwerk-new-order-joy-division-influence-tribute-2660805).
- **The Velvet Underground** — Hook recounts Curtis introducing bandmates and names the group's influence; [Jon Savage oral history excerpt, The Guardian](https://www.theguardian.com/music/2019/mar/24/joy-division-this-searing-light-extract-ian-curtis-jon-savage).
- **Iggy Pop** — Hook explicitly identifies Iggy as a key influence; [Hook, The Independent](https://www.the-independent.com/arts-entertainment/music/features/ian-curtis-joy-division-death-anniversary-peter-hook-closer-unknown-pleasures-a9511671.html).
- **John Cale** — Hook names his personal early admiration and own education in Cale records; [Jon Savage / Hook, The Guardian](https://www.theguardian.com/music/2019/mar/24/joy-division-this-searing-light-extract-ian-curtis-jon-savage).
- **David Bowie** — critic documents Curtis's specifically Berlin-era Bowie inspiration; [Classic Pop, Inside Unknown Pleasures](https://www.classicpopmag.com/features/joy-division-unknown-pleasures/). This is a secondary account; do not promote it to a particular album's `influenced_by` without better album-specific testimony.
- **Sex Pistols** — Pitchfork describes the group as inspired by the Pistols' punk DIY ethos early on; [Joshua Klein, Pitchfork 2007](https://pitchfork.com/reviews/albums/11624-unknown-pleasurescloserstill/). A critic-documented early influence only, not a claim of direct track borrowing.

## Caveats for the validator and importer

- Original 1978 *An Ideal for Living* has four tracks; 12-inch reissue with improved mastering is the **same EP**, not another row. Recording took place in December 1977; use 1978 **release** year.
- Producer of the EP is credited **Joy Division** in the original-release MusicBrainz record. No evidence warrants retroactively crediting Martin Hannett on that EP.
- `Unknown Pleasures` originally has ten tracks and `Closer` nine. **Transmission**, **Atmosphere**, and **Love Will Tear Us Apart** are non-album singles, not original album tracks. Do not use them for album descriptor decisions.
- Do not confuse the archive double album *Still* (1981), which includes a live disc, or *Substance* (1988) with a third original studio album. Those are explicitly excluded.
- For *Unknown Pleasures*, Powertran's model is documented; the studio's reverb, delays and tape reverse are documented. The glass/lift effects are **studio-recorded sounds**, and therefore do not automatically justify `fieldrecordings`.
- For *Closer*, ARP 2600 / sequencer on “The Eternal”, Roland CR-78 on “Decades”, ARP Omni, and Sequential Pro-One from contemporaneous interview recollections. Uncertainty over which performer operated a model or its exact variant should not be resolved by guesswork.
- `influenced_by` is intentionally blank for *Unknown Pleasures* because the general artist influences cannot automatically be mapped to an individual record. *Closer* has `Can`, tied to drummer Stephen Morris's direct account and a review naming Jaki Liebezeit's drumming influence. For the first EP the `influenced_by` cell also stays empty: Sex Pistols are an early-band influence, without a demonstrated album-specific citation.
- The `sounds_like` column is an editorial similarity mapping, not evidence of a documented influence. Artist–album linkage in parentheses denotes a particular comparison record, NOT an influence.
- Unknown instruments/technology are deliberately omitted. Album-specific sources are provided in the source file and evaluated in evidence-notes.

## Next phase

**None planned.** Original discography is covered: two studio LPs and landmark 1978 EP. No live albums, compilations, posthumous outtake sets or reissue bonus tracks included.

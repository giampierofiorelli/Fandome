# Fandome — Billie Eilish — Phase 01 (26 October 2026)

## Contents (strictly incremental)

1. `billie-dontsmileatme` — *dont smile at me* (2017), EP; defining original release, not the expanded bonus-track versions.
2. `billie-whenweallfallasleepwheredowego` — *When We All Fall Asleep, Where Do We Go?* (2019), studio.
3. `billie-happierthanever` — *Happier Than Ever* (2021), studio.

The **27-column CSV has only these three rows**. All rows have `status=draft`. Genre-evidence and sources relate solely to these rows. No previously researched artists and no phase-02 rows are included.

## Catalogue additions / audit

- **ADD in this phase:** `dont smile at me` (2017), `ep`, `billie-dontsmileatme`.
- **ALREADY PRESENT:** 2019 studio album (`billie-whenweallfallasleepwheredowego`), 2021 studio album (`billie-happierthanever`), 2024 studio album (`billie-hitmehardandsoft`). Preserve their generated Fandome IDs.
- **LATER PHASE CANDIDATE:** `Guitar Songs` (2022), 2-song EP (`billie-guitarsongs`). MusicBrainz identifies it as an EP although Apple Music places its two tracks under “Single”; retaining the creative project avoids an unrepresented 2022 acoustic period. Discuss the provider-format inconsistency during phase-02 import. [MusicBrainz](https://musicbrainz.org/artist/f4abc0b5-3f7a-4eff-8f78-ac078dbce533?all=1).
- 2026 *HIT ME HARD AND SOFT: THE TOUR (LIVE)* is a live performance release and **excluded**, as are other concert releases and anthologies containing previously released material.

## Co-billed albums

**None for this phase.** `dont smile at me` is billed solely to Billie Eilish; the later bonus track “&burn” featuring Vince Staples is **not** a co-billed album. The occasional guest on a song is not a co-billed album artist.

## New tokens for Claude to add

- Genre: `bedroompop` (original *dont smile at me* EP genre metadata), missing from `scenes.ts` and its corresponding `genreFamilies.ts` entry. Proposed family: `['altpop','pop']` or another parent chosen by the catalogue maintainer; the only required fact here is the exact published genre term “Bedroom Pop.”
- Instruments: none.
- Production: none.
- `tr808`, `vocoder`, sampler hardware and similar machine identifications **are not** added without model-specific evidence.

## ARTIST INFLUENCES (phase 01 only, sources identify Billie as a listener or admirer)

These are **artist-level influences**, not automatically copied to each album's `influenced_by` field:

- **Tyler, the Creator** — Billie explicitly calls him an inspiration and says “Garbage” informed the *Bellyache* narrative. [Teen Vogue artist interview, 2017](https://www.teenvogue.com/video/watch/billie-eilish-creates-the-soundtrack-to-her-life); [PAPER artist interview, 2017](https://www.papermag.com/pop-newcomer-billie-eilish-wants-to-make-sure-you-never-forget-her).
- **Drake** — Named as a major rapper she looked up to in an early interview; singled out “The Motto” as a favorite in her own playlist account. [PAPER, 2017](https://www.papermag.com/pop-newcomer-billie-eilish-wants-to-make-sure-you-never-forget-her); [Teen Vogue, 2017](https://www.teenvogue.com/video/watch/billie-eilish-creates-the-soundtrack-to-her-life).
- **Earl Sweatshirt** — Cited among rappers she looks up to and whose music informs her hip-hop tastes. [PAPER, 2017](https://www.papermag.com/pop-newcomer-billie-eilish-wants-to-make-sure-you-never-forget-her).
- **A$AP Rocky** — Cited among rap artists she looked up to. [PAPER, 2017](https://www.papermag.com/pop-newcomer-billie-eilish-wants-to-make-sure-you-never-forget-her).
- **Miguel** — Identified among admired musicians in her early, R&B-influenced listening. [PAPER, 2017](https://www.papermag.com/pop-newcomer-billie-eilish-wants-to-make-sure-you-never-forget-her).
- **The Beatles** — She states she grew up listening to their music. This supports formative exposure, not particular album borrowing. [PAPER, 2017](https://www.papermag.com/pop-newcomer-billie-eilish-wants-to-make-sure-you-never-forget-her).
- **Green Day** — Named as childhood listening that helped shape her musical background. [PAPER, 2017](https://www.papermag.com/pop-newcomer-billie-eilish-wants-to-make-sure-you-never-forget-her).
- **Avril Lavigne** — Named as childhood listening / formative pop-punk exposure. [PAPER, 2017](https://www.papermag.com/pop-newcomer-billie-eilish-wants-to-make-sure-you-never-forget-her).
- **Lana Del Rey** — Billie names “Off to the Races” as an impactful childhood listening experience; FINNEAS explicitly lists Lana among “Ocean Eyes” vocal reference points, with mild uncertainty. [Teen Vogue, 2017](https://www.teenvogue.com/video/watch/billie-eilish-creates-the-soundtrack-to-her-life); [FINNEAS at Pitchfork, 2020](https://pitchfork.com/video/watch/finneas-critical-breakthroughs).
- **AURORA** — FINNEAS explicitly names her among sonic references for “Ocean Eyes”; this is first-hand production evidence, not Billie claiming childhood listening. [FINNEAS at Pitchfork, 2020](https://pitchfork.com/video/watch/finneas-critical-breakthroughs).
- **Låpsley** — FINNEAS also identifies Låpsley as a reference for early “Ocean Eyes” sessions. [FINNEAS at Pitchfork, 2020](https://pitchfork.com/video/watch/finneas-critical-breakthroughs).
- **Julie London** — Billie explicitly says she wanted the **feeling** of London’s singing on *Happier Than Ever*. [Los Angeles Times interview, 2021](https://www.latimes.com/entertainment-arts/music/story/2021-07-23/billie-eilish-happier-than-ever-album).
- **Peggy Lee** — Billie identifies Lee among old-school vocal heroes during discussion of *Happier Than Ever*. [ELLE interview, 2021](https://www.elle.com/culture/celebrities/a37598890/billie-eilish-is-calling-the-shots/).
- **Frank Sinatra** — Billie selected and discussed his recordings in her own formative-music playlist; 2021 reporting connects classic crooner influences to the album. [Teen Vogue, 2017](https://www.teenvogue.com/video/watch/billie-eilish-creates-the-soundtrack-to-her-life); [Pitchfork, 2021](https://pitchfork.com/reviews/albums/billie-eilish-happier-than-ever/).

**Caution:** These sources distinguish formative listening, direct song references, and album-specific influence. Only the last two justify an album's `influenced_by`; other admired artists remain artist-level background.

## Editions, producer credits and caveats

- `FINNEAS` is a **credited producer** for the standard tracklists of all three releases. Rob Kinelski is a **mix engineer**, not co-producer; John Greenham a **mastering engineer**, not co-producer. Billie Eilish is credited as an **additional producer** on the 2019 “bad guy” in some MusicBrainz editions, not a principal or co-producer; thus she is not in the album's `producers` field.
- Instrument and production tokens require track- or album-specific documentary evidence. No token is assigned from genre alone. Main sources and uncertainties are detailed in `billie_phase01_evidence-notes.md`.
- All citations are working provider URLs that were retrieved through public search / the repository. Some publisher sites serve bot restrictions despite discoverable content.

## Next phase (02)

**`Guitar Songs` (2022, EP) and `Hit Me Hard and Soft` (2024, studio).** This will be the final shorter two-release phase: adding irrelevant live records or repetitive compilations merely to reach three rows would harm music-similarity recommendations. It will be delivered as a separate ZIP containing **only those new descriptor rows**.

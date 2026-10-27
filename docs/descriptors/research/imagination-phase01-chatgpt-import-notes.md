# Fandome import — Imagination — Phase 01

Research cutoff: 27 October 2026. Read-only verification against `descriptors` branch of `giampierofiorelli/Fandome`: the band is absent from `src/data/catalog.ts` and `src/data/seed.ts`, and `docs/descriptors/imagination.csv` does not exist. **Proposed new artist id: `imagination`** (no other matching id found). No already-completed rows to skip.

## Current ZIP contents

| Proposed album id | Title | Original year | Type |
| --- | --- | --- | --- |
| `imagination-bodytalk` | Body Talk | 1981 | studio |
| `imagination-intheheatofthenight` | In the Heat of the Night | 1982 | studio |
| `imagination-nightdubbing` | Night Dubbing | 1983 | remix |
| `imagination-scandalous` | Scandalous | 1983 | studio |

**All four need an artist and album entry in the catalogue before validator/import.** `album_id` uses lower-case letters/digits plus the delimiter. The existing project catalog has no Imagination entry and no pre-existing id to preserve. Do not create `New Dimension` separately: it is the 1984 North American rename/release of **Scandalous**, with remixed first two cuts. See original and regional pressing comparison: https://en.wikipedia.org/wiki/Scandalous_(album) ; https://www.chartsurfer.de/artist/imagination/scandalous-album_ffvugc.html.

**Night Dubbing belongs in this phase as a historically specific remix record**, not an ordinary greatest-hits compilation. MusicBrainz calls original 6 May 1983 release `Album + Remix`; 1983 vinyl describes newly remixed versions. One track ("Changes") is a Larry Levan remix from the New York sessions, with seven tracks remixed by Steve Jolley, Tony Swain and Richard Lengyel in London. Its dub/effects sound is the added content. https://musicbrainz.org/release-group/7097de54-3213-3860-9273-f81de138f99c ; https://retrorarity.co.uk/imagination-night-dubbing-r-b-records-disc348280n6.html ; https://www.chartsurfer.de/artist/imagination/night-dubbing-album_ffvurc.html. Original UK record has EIGHT tracks. The alternative 9-track CD/digital reissue adds material; that reissue does not define the row.

## Tokens to register

**Genres:** No new genre token. All 4 sets use existing values. Important distinctions: `postdisco` (period genre), `britfunk` (explicitly existing), `dub` (remix aesthetic), `synthpop` (contemporary pressing designation), and `electro` (specific pressing style). `house` **not** assigned as a genre to 1981-83 recordings solely because later house producers/DJs drew on them. Retrospective Chicago-house influence belongs in evidence-notes, not as a genre relabel.

**New instrument token:** `vibraphone` (Orphy Robinson is explicitly credited on 1981 “In and Out of Love”; an instrument absent from the project list). Add to instrument registry before validation: https://www.chartsurfer.de/artist/imagination/body-talk-album_ffvvph.html.

**New production token:** `rolandsh1000` (Roland SH-1000 monophonic synth: original producer Tony Swain personally identifies it as the bass sound on 1982 “Just an Illusion”, with octave doubling and manual portamento). Add to production registry before validation: https://tonyswainproducer.blogspot.com/2012/08/tony-swain-producer-composer.html. The source concerns *Just an Illusion* specifically, so **do not** transplant the same synth model to the 1981, 1983 remix, or 1983 studio rows. Secondary claims of `tb303` on the 1982 title song could not be independently established and have deliberately not been added. Note that the generic `synthbass` instrument is not the machine model.

**Production roles:** Steve Jolley and Tony Swain are the credited principal producers on all four original releases. Larry Levan remixed *only “Changes”* on Night Dubbing; Richard Lengyel is a remixer and engineer. Neither Levan nor Lengyel should be inserted into `producers` because there is no original album-wide principal-producer credit for either. Source: https://www.chartsurfer.de/artist/imagination/night-dubbing-album_ffvurc.html ; https://retrorarity.co.uk/imagination-night-dubbing-r-b-records-disc348280n6.html. Similarly **Morgan Khan** is executive producer/engineer on early records, not a principal album producer; exclude. https://www.chartsurfer.de/artist/imagination/body-talk-album_ffvvph.html.

**Co-billed:** No genuinely co-billed album in this phase. The group is the billed artist on all four. The second phase will need to preserve the exact billing `Imagination feat. Leee John` on *Retropia*, which is a later project, without converting a prior member's group credits into a co-bill.

## ARTIST INFLUENCES (career-wide; supported first-person evidence)

Leee John explicitly describes formative listening and favourite childhood artists, not album-specific influence declarations, in *Big Issue North* (Lucinda Obank, 18 June 2018): https://www.bigissuenorth.com/magazine/2018/06/music-qa-leee-john/

- **Billie Holiday** — John directly names her among the jazz music he listened to when young.
- **Nat King Cole** — directly named in the same answer.
- **The Rolling Stones** — John says “The Stones” in the same answer about his early listening; link canonical band name.
- **Kool & The Gang** — explicitly says he loved them as a child, long before later performing with them.
- **Motown performers collectively** — John says he loved the Motown artists and aspired to be one; **do not fabricate individual names** that he did not supply in the interview. The phrase “The Stacks” might mean Stax-associated artists rather than a band; **do not create an artist node named The Stacks**.

**Rules applied:** These are ARTIST influences only. All four `influenced_by` **album** cells are blank because no first-person testimony here assigns one of these performers specifically to a given 1981–83 album. AllMusic confirms his earlier work connected to **The Delfonics** and **Chairmen of the Board**, but collaborations/previous backing-vocal employers are not accepted as influences. John Lennon / “Imagine” inspired the *name* Imagination, not a documented musical influence on these album recordings; no Lennon entry. https://www.allmusic.com/artist/imagination-mn0000078255/biography ; https://www.thisisnotretro.com/interviews/imagination-leee-john-interview-2003/.

## Edition and methodology caveats

- *Body Talk*: describe the **original seven-track** 1981 edition; a 1982 US reissue includes “Just an Illusion” from the later album. Never claim it is part of the original debut. Original album is credited with **vibraphone on one cut**, so that instrument ranks last. https://www.chartsurfer.de/artist/imagination/body-talk-album_ffvvph.html.
- *In the Heat of the Night*: producer Swain's **own** comment is unusually valuable equipment evidence. A Wikipedia claim for Roland TB-303 used on the title track lacks equivalent first-person corroboration and has not been used. https://tonyswainproducer.blogspot.com/2012/08/tony-swain-producer-composer.html.
- *Night Dubbing*: a **remix**, despite one MusicBrainz/allmusic taxonomy calling it a 'collection'. It uses extant performances from 1981-82, so its instrument tokens inherit those recordings' credited sources; they do NOT indicate new studio performances. AllMusic says echo/reverb and exaggerated snares do not turn it into a dub-*reggae* record. The `dub` genre is supported by 1983 original UK sleeve style metadata and the intentional remix treatment. https://www.allmusic.com/album/night-dubbing-mw0000373251 ; https://www.chartsurfer.de/artist/imagination/night-dubbing-album_ffvurc.html.
- *Scandalous*: stick to the original 1983 UK LP, not 1984 North American `New Dimension` edits. The North American liner transcription is usable for unchanged core personnel, but is **not** evidence that Jonathan Fearing produced the 1983 original or that his two remixes apply to it. https://www.chartsurfer.de/artist/imagination/scandalous-album_ffvugc.html.
- **Original publication dates** can differ among catalogues. Years and chronology are stable. Later dates in Apple/streaming metadata are often platform placeholders.
- Genre ratings are editorial assessments anchored to Fandome's 0–5 guide, **not** statistics from Spotify or a scoring service. Token strength and scope are in the genre evidence CSV. `sounds_like` is a critic-supported similarity, not a stated influence. The *Body Talk* comparisons apply principally to John's falsetto, not to an identical backing arrangement. The *Scandalous* comparators are expressly named by Amy Hanson in AllMusic.
- Do not treat influences on later acts (Frankie Knuckles, Marshall Jefferson and Chicago house in AllMusic's *Body Talk* retrospective) as earlier **sources of influence** on Imagination. Direction of influence matters.

## Next phase: Phase 02 (4 albums)

1. **Trilogy** (1986) — original studio album, not a compilation of the first trilogy despite its title; original 12-track listing: https://music.apple.com/us/album/trilogy/760198428.
2. **Closer** (1987) — original RCA LP year documented by catalogue number PL 71508, not 1988: https://www.musik-sammler.de/release/imagination-closer-lp-510655/.
3. **The Fascination of the Physical** (1992) — final original-period studio album.
4. **Retropia** (**2016 in MusicBrainz/AllMusic**, **2017 on Leee John's official site**) — original release-date and `Imagination feat. Leee John` artist credit to resolve in phase 02; original song cycle, not a hits collection. https://musicbrainz.org/artist/f4038a4a-77af-4363-a2a8-5d847bb7f1ba ; https://www.leeejohn.com/discography.html.

Compilations, *New Dimension* repackage, 2023/2026 remasters, concert releases, and *Night Dubbing II* are excluded.

## Files

- `imagination_phase01_rows_ONLY.csv`: strictly 4 new 27-column draft rows.
- `imagination_phase01_sources.csv`: independent evidence, attributed critics, personnel and dates.
- `imagination_phase01_genre_evidence.csv`: one row per genre and album with source URL and scope.
- `imagination_phase01_evidence-notes.md`: explains instrumentation, production and editorial scales.
- `imagination_phase01_catalog-audit.csv`: both repository entry checks; phase status for all eight eligible releases.

Read-only research; no GitHub changes. Validator must be run by Claude after registering artist, albums and the two tokens.

## Claude import note (27 Oct 2026)

- `vibraphone` mapped to the existing `mallets` (Vibraphone and marimba); `rolandsh1000` added.
- No artist-influence entry: Leee John's Big Issue North answer lists childhood listening and favourites (Billie Holiday, Nat King Cole, the Stones, Kool & the Gang), not artists he names as influences; same rule as Take That and Wham!.
- Retropia (phase 02) left out of the catalogue until its year and billing are resolved.

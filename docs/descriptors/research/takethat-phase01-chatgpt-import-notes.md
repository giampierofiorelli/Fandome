# Fandome / Take That — Phase 01 — Claude import instructions

**Read-only research**; no GitHub changes made. Six files, 4 incremental rows. Research snapshot: 27 October 2026.

## This phase: import ONLY these four rows

1. `takethat-takethatparty` — Take That & Party (1992, studio) — **ADD TO CATALOGUE FIRST**
2. `takethat-everythingchanges` — Everything Changes (1993, studio) — use exact existing catalogue ID
3. `takethat-nobodyelse` — Nobody Else (1995, studio) — use exact existing catalogue ID
4. `takethat-beautifulworld` — Beautiful World (2006, studio) — use exact existing catalogue ID

Artist ID: `takethat`, **existing** in `src/data/catalog.ts`; no `Take That` entry found in `src/data/seed.ts`. `docs/descriptors/takethat.csv` did not exist as checked on branch `descriptors`; no pre-described row to skip. Do not duplicate any other artist's work. Append the phase-only CSV when absent, then run the Fandome validator and tests.

## Catalogue additions (FULL released discography audit)

Add these titles to `src/data/catalog.ts` under the existing `takethat` row, preserving chronological order:

| Title | Year | Type | Phase |
|---|---:|---|---|
| Take That & Party | 1992 | studio | 01 |
| Progressed | 2011 | ep | 02 |
| III | 2014 | studio | 03 |
| Wonderland | 2017 | studio | 03 |

Nine released studio albums through 27 October 2026, plus the **standalone, eight-new-track EP** *Progressed* (2011), identified as an EP by the group and MusicBrainz. Import the EP's **eight original tracks only** in phase 02, *not* the deluxe double-CD that also repeats *Progress* (2010). Supporting sources: https://takethat.com/timeline/progressed/ ; https://musicbrainz.org/release-group/d592df96-24c8-4853-9b6a-4cf6f8a35998 ; https://robbiewilliams.com/blogs/news/progressed-is-released-today .

Do **not** add *Dreamers*: announced for November 2026 but unreleased as at the research date: https://www.hellorayo.co.uk/news/music/pop/take-that . Nor *Greatest Hits*, *Never Forget*, *Odyssey*, the US-repackaged *Nobody Else*, or concert recordings: compilations/live excluded. UK original *Nobody Else* 1995 is the version used here. *Rule the World* was first issued on the 2007 souvenir edition of *Beautiful World*, not the original 2006 release: https://takethat.com/timeline/rule-the-world/ . The source genre/tag classifications apply to the original 2006 album.

## Artist and album IDs

`takethat` confirmed from catalogue; `takethat-takethatparty` is **proposed** and deterministic. Other album IDs have existing catalogue-derived titles. Current catalogue has six of the nine studio albums; four additions above include the 2011 EP. A `catalog-audit.csv` with all ten eligible recordings and phase placement is included.

## Co-billed works

No additional co-billed *albums*. Lulu features on the track 'Relight My Fire' and is **not** a co-billed artist for *Everything Changes*; do not add to `coBilled.ts`. Other features/cover artists do not imply album co-billing.

## New tokens

**New genre token `garagehouse`** is proposed (absent from `src/data/scenes.ts` as checked on 27 October 2026); add it to the Genre type/genre families/validator only if accepted during review. It appears only as a low-confidence secondary community tag for *Take That & Party*. No other new genre, instrument or production tokens proposed. `italohouse`, `sophistipop`, `contemporaryrnb`, `aor` and all other tags used here already exist. Some first-album subgenres are uncertain and deliberately put last. No instrument/machine is inferred solely from genre.

## Artist influences (phase 01 ONLY; direct interviews, not a claimed direct influence on every album)

- **Adam Ant, The Human League, Depeche Mode** — Gary Barlow recalls being immersed in these acts and recreating their synthesiser sounds on piano as a teenager. Direct Gary Barlow Q&A, Norwich Theatre (2023): https://norwichtheatre.org/relight-your-fire-chatting-to-gary-barlow-and-mark-owen/ . These are formative influences on **Barlow**, not proved album-by-album.
- **Madonna, Elvis Presley** — Mark Owen names them as the music he liked while growing up. Same direct Q&A: https://norwichtheatre.org/relight-your-fire-chatting-to-gary-barlow-and-mark-owen/ . Do not infer those as sonic inputs on a specific Take That LP.
- **Kraftwerk, Yellow Magic Orchestra, John Foxx, The Human League, Gary Numan** — Howard Donald calls these early influences while discussing his record collection; list also includes Beck and Chemical Brothers (these are later artists, not formative for Take That's 1992 debut). The Independent's report on Donald's 2021 podcast interview: https://www.independent.co.uk/arts-entertainment/music/news/take-that-howard-donald-music-podcast-b1822290.html . **Keep out of album-level `influenced_by`** without session-era evidence.
- **Frank Sinatra** — Gary Barlow cites an impactful 1992 Sinatra performance when discussing **his solo 2020 album**, *Music Played By Humans*. Source: https://www.musicweek.com/interviews/read/letting-the-music-play-gary-barlow-the-music-week-interview/081836 . This is not established as a direct Take That album influence; exclude from album rows.

A manager emulating **New Kids on the Block** to form the group is a business concept, not proof of an album's musical influence. The title *Could It Be Magic* covers Manilow's song via Donna Summer/Moroder's disco version; covers are **not** `influenced_by`. Reviewer similarities (Keane, Coldplay, etc.) are `sounds_like` only. As no direct album-composition influence was verified for this batch, every album's `influenced_by` field is deliberately empty rather than guessed.

## Other import cautions

- `landmark` is an editorial *Take That career* judgment (all four pivotal in their separate eras), not a critics' consensus score. Scales are grounded editorial judgments, 0-5 integer anchored to the guide.
- **Source role conflicts:** Credits platforms sometimes label **additional vocal producer** Mark Beswick simply a producer. Under the project's rule, exclude him because the specific role in MusicBrainz is 'additional producer (vocal)'; also exclude engineers/mixers and 2005/2006 remasters. For `Everything Changes`, Gary Barlow is documented as **co-producer on 'Whatever You Do to Me'**, thus included; Cary Baylis is documented as *additional producer* and excluded.
- **Take That & Party** genre details `garagehouse`, `italohouse`, `sophistipop` and `contemporaryrnb` are *community genre tags*, not strongly confirmed critic-level whole-album styles. They are low-ranked and marked `some tracks` in evidence; feel free to gate them pending listening/editor review, rather than generalising whole album.
- **Nobody Else**: its American release has a different tracklist and a later date. UK 8 May 1995 is authoritative: https://takethat.com/timeline/nobody-else/ . Track 'Never Forget' quotes Verdi's Requiem, which is not an influence, guest, or separate classical album style.
- **Beautiful World**: core `poprock` with real drums/guitars/keys and orchestra; `folkpop`, `psychedelicpop`, `aor` and `adultcontemporary` are qualified track-specific or critical-texture readings, not dominant album identity. `falsetto` in the Guardian review describes an explicit vocal technique; do not infer a vocoder or drum-machine model.
- **Versions**: AllMusic wrongly displays the first album as 1993 on its US version; German Charts/official archive gives 1992 for the original UK album.
- Review notes classify 1992–95 as primarily harmony pop and dance-pop: don't inflate the synth/electronic scores from later remixes or the genre of a covered original song.

## Next phases

- **Phase 02 (3 releases):** *The Circus* (2008), *Progress* (2010), *Progressed* (2011, EP of eight new tracks).
- **Phase 03 (3 releases):** *III* (2014), *Wonderland* (2017), *This Life* (2023).

Each new ZIP must contain only that phase's new rows and its own references; do not send these phase-01 rows again.

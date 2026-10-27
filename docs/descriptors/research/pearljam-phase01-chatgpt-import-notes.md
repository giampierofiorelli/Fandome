# CLAUDE_IMPORT — Pearl Jam / Phase 01

**Artist Fandome ID:** `pearljam` (verified in `src/data/catalog.ts`, branch `descriptors`).  
**Cutoff:** 27 October 2026. **This ZIP is strictly incremental**: four original studio album descriptor rows, no previously delivered rows, no separate code.

## Files

- `pearljam_phase01_rows_ONLY.csv` — 27-column header and 4 draft rows.
- `pearljam_phase01_sources.csv` — credited sources and URLs, including interview sources for instruments and influences.
- `pearljam_phase01_genre_evidence.csv` — one genre/album line with scope, source and support.
- `pearljam_phase01_evidence-notes.md` — justification, instrumentation and production caveats, critical disagreement.
- `pearljam_phase01_catalog-audit.csv` — audit of studio albums and 1995 side releases.

## Phase 01 records (all already in catalog)

1. `pearljam-ten` — *Ten* (1991), studio.
2. `pearljam-vs` — *Vs.* (1993), studio.
3. `pearljam-vitalogy` — *Vitalogy* (1994), studio.
4. `pearljam-nocode` — *No Code* (1996), studio.

## Catalogue additions

**This phase: none.** The existing Pearl Jam room includes all four titles above. Across the whole 1991–2024 studio discography, the following missing records need adding during later phases:

| Title | Year | Type | Intended ID |
|---|---:|---|---|
| Binaural | 2000 | studio | `pearljam-binaural` |
| Riot Act | 2002 | studio | `pearljam-riotact` |
| Pearl Jam | 2006 | studio | `pearljam-pearljam` |
| Backspacer | 2009 | studio | `pearljam-backspacer` |
| Lightning Bolt | 2013 | studio | `pearljam-lightningbolt` |

See official discography: https://pearljam.com/music/discography/.

## Co-billed / exceptional records

- **No shared-billing album appears in these four rows.** 1995's *Mirror Ball* is primarily a Neil Young record supported by Pearl Jam, listed on the band's official website as **“Neil Young feat. Pearl Jam - Mirror Ball”** (https://pearljam.com/music/album/neil-young-feat-pearl-jam-mirror-ball). The original sleeve credit must be independently checked before considering a future `coBilled.ts` entry; no row for it has been created in this phase.
- **Merkin Ball** (1995), catalogued both as a two-song single and as an EP, was made in conjunction with the Neil Young sessions. Official page: https://pearljam.com/music/album/merkin-ball. It is mentioned for review as a possible non-studio exception, not silently treated as a fourth studio album. It is not automatically included because critics and the band treat it as a two-track companion single, rather than an indispensable standalone LP. If Claude elects to import this EP later, its planned ID is `pearljam-merkinball`; Neil Young is a guest, not automatically a co-billed album artist.

## New tokens

- **Genres:** none. This phase uses existing `grunge`, `alternativerock`, `hardrock`, `rock`, `funkrock`, `folkrock`, `protopunk`, `experimental`, `worldmusic`, `punk`.
- **Instruments:** none. All instruments come from the current instruments vocabulary, including `electricsitar`, `doublebass`, `mellotron`, `slideguitar`.
- **Production:** none. This phase uses `heavyreverb` and `sampling`; the two other production cells are deliberately blank.

## ARTIST INFLUENCES — sourced, across members' careers (phase 01 only)

These are **formative artist/music inspirations**, not automatically album-specific `influenced_by` values. Multiple performers had different histories; do not imply each member named every influence.

| Influence | Who identified it / evidence | Source |
|---|---|---|
| Jimi Hendrix | Mike McCready identifies Hendrix as a first guitar hero, and traces his own voicing decisions on Ten to Hendrix | https://www.guitarworld.com/features/mike-mccready-ten |
| Stevie Ray Vaughan | McCready says Vaughan changed his playing and specifically informed Even Flow | https://www.guitarworld.com/news/mike-mccready-stevie-ray-vaughan-jimi-hendrix-thumb-technique |
| B.B. King | McCready describes studying blues and B.B. King before early Pearl Jam | https://www.guitarworld.com/features/mike-mccready-ten |
| Iron Maiden | McCready recounts Iron Maiden and Judas Priest as foundational pre-Pearl Jam listening | https://www.guitarworld.com/features/mike-mccready-ten |
| Judas Priest | McCready names the band in formative hard-rock listening | https://www.guitarworld.com/features/mike-mccready-ten |
| Kiss | McCready recalls Kiss as part of the early guitar canon | https://www.guitarworld.com/features/mike-mccready-ten |
| Aerosmith | McCready says the early group shared a love of the band and Gossard had an Aerosmith groove | https://www.guitarworld.com/features/mike-mccready-ten |
| Led Zeppelin | Stone Gossard identifies them among his longstanding musical influences; Jeff Ament recalls Gossard's Zeppelin style | https://stereogum.com/1519972/qa-pearl-jams-stone-gossard-on-songwriting-making-setlists-and-lightning-bolt/interviews and https://www.guitarworld.com/features/jeff-ament-stone-was-always-writing-from-a-zeppelin-angle-so-seeing-if-fretless-bass-could-work-in-that-realm-was-exciting |
| Simon & Garfunkel | Stone Gossard explicitly names them as enduring influences | https://stereogum.com/1519972/qa-pearl-jams-stone-gossard-on-songwriting-making-setlists-and-lightning-bolt/interviews |
| Iggy & the Stooges | Stone Gossard identifies Iggy and the Stooges | https://stereogum.com/1519972/qa-pearl-jams-stone-gossard-on-songwriting-making-setlists-and-lightning-bolt/interviews |
| Ramones | Jeff Ament names the Ramones among the punk bands that inspired his bass playing | https://www.12stringbass.net/jeff-ament-hamer-tone |
| The Clash | Ament explicitly names The Clash | https://www.12stringbass.net/jeff-ament-hamer-tone |
| Sex Pistols | Ament explicitly names the Sex Pistols | https://www.12stringbass.net/jeff-ament-hamer-tone |
| The Who | Eddie Vedder explicitly describes the band's formative impact on his life and work | https://americansongwriter.com/eddie-vedder-and-bruce-springsteen-talk-musical-influences-and-earthling/ |
| The Beatles | Vedder names the Beatles among childhood influences | https://americansongwriter.com/eddie-vedder-and-bruce-springsteen-talk-musical-influences-and-earthling/ |
| The Band | Vedder explicitly cites the Band as influential | https://americansongwriter.com/eddie-vedder-and-bruce-springsteen-talk-musical-influences-and-earthling/ |
| Talking Heads | Vedder identifies Talking Heads as one of his inspirations | https://americansongwriter.com/eddie-vedder-and-bruce-springsteen-talk-musical-influences-and-earthling/ |
| Sonic Youth | Vedder names Sonic Youth as an influence | https://americansongwriter.com/eddie-vedder-and-bruce-springsteen-talk-musical-influences-and-earthling/ |
| Fugazi | Vedder names Fugazi as an influence | https://americansongwriter.com/eddie-vedder-and-bruce-springsteen-talk-musical-influences-and-earthling/ |
| Neil Young | Vedder describes learning from Young during the 1995 collaboration; No Code critics identify Young's musical imprint | https://www.loudersound.com/bands-artists/what-eddie-vedder-learned-making-pearl-jams-merkin-ball-ep-with-neil-young and https://guitar.com/reviews/album/the-genius-of-no-code-by-pearl-jam/ |

## Caveats before import

- The *Vitalogy* date is November 22 for early vinyl, December 6 for CD. Both are 1994. Do not conflate Jack Irons's presence on that album with the primary Abbruzzese drum recording.
- Album-wide producers only: Ten = Pearl Jam + Rick Parashar; Vs/Vitalogy/No Code = Brendan O'Brien + Pearl Jam. Neither Tim Palmer (Ten mixer) nor Nick DiDia (engineer/mixer) should be added as producer.
- *Ten* scores and `heavyreverb` describe the **1991 Tim Palmer mix**, not Brendan O'Brien's distinct 2009 remix.
- No Code `electricsitar` is a specific instrument credited on Who You Are; do not change to `sitar`.
- Some `genres` describe **some tracks** rather than the album's dominant style; consult the genre evidence CSV. `protopunk` is only for a particular Vitalogy groove, not whole-record punk revival.
- The `influenced_by` cell is blank for Vs and Vitalogy, intentionally. Artistic sonic likenesses should not be promoted to documented influence.
- `production` is blank for Vs and No Code when precise procedures are not established. A producer credit does not constitute a production-technique token.
- The validator reads `docs/descriptors/*.csv` against the source catalogue; no new token or record is required for this phase.

## Phase 02 — next incremental ZIP

Four studio albums: **Yield** (1998), **Binaural** (2000), **Riot Act** (2002), **Pearl Jam** (2006). Phase 02 must contain only these new rows and must add the three missing titles to the catalogue. Phase 03 then covers **Backspacer** (2009), **Lightning Bolt** (2013), **Gigaton** (2020), **Dark Matter** (2024).

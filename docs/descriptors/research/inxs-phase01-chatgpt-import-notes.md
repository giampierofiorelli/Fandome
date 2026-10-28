# CLAUDE_IMPORT — INXS / Phase 01

**Artist ID proposed:** `inxs` (lowercase, letters only). Checked both `src/data/catalog.ts` and `src/data/seed.ts` on the public `descriptors` branch: neither contains an INXS entry or conflicting `inxs` ID. The path `docs/descriptors/inxs.csv` returned 404, and the October 2026 landmark-artist research index has no `inxs` entry. No pre-existing album row was skipped. If a private/updated branch added one meanwhile, reconcile before import.

**Research date:** 28 October 2026. **Contents:** four new `draft` album rows, exact 27-column schema. Read `inxs_phase01_evidence-notes.md` before importing.

## Phase 01: import exactly these four records

1. `inxs-inxs` — *INXS* (1980), `studio`, add artist and album
2. `inxs-underneaththecolours` — *Underneath the Colours* (1981), `studio`, add album
3. `inxs-shaboohshoobah` — *Shabooh Shoobah* (1982), `studio`, add album
4. `inxs-theswing` — *The Swing* (1984), `studio`, add album

All four and all later studio albums are missing from the public catalogue. `inxs_phase01_catalog-audit.csv` lists all 12 studio releases as possible catalogue additions, with the 2010 caveat below.

## New tokens to register

- **Production:** `digitalreverb` — digital reverberation technology used in the *The Swing*-era production. Nick Launay specifically discusses the album and its contemporary digital reverbs in *Tape Op*. Link: https://tapeop.com/interviews/105/nick-launay . Add to `src/data/production.ts` before validation; if it is already present on a newer branch, do not duplicate.
- **New genre tokens:** none. `scenes.ts`/validator already contain newwave, ska, postpunk, synthpop, funkrock, popfunk, dancerock, punknewwave, contemporarypoprock, alternativeindierock, etc.
- **New instrument tokens:** none; including the explicitly sourced `rototoms` on *Shabooh Shoobah*.

## ARTIST INFLUENCES (phase 01 only)

These are **directly named by band members or in their producer's first-person account**, not assumed for every album:

- **Roxy Music** — Tim Farriss explicitly identifies Roxy Music as a major influence on the band's early musical approach. *The Washington Post*, 23 March 1988: https://www.washingtonpost.com/archive/lifestyle/1988/03/24/the-inxs-manifesto/9cbcc3f0-bfd6-423f-8d1d-43bb22e8f9ca/
- **Television** — named in the same 1988 interview as a shared musical touchstone of Tim Farriss and Kirk Pengilly. Same source.
- **AC/DC** — named alongside Television and Roxy Music as part of the members' formative listening. Same source.
- **The Beatles** — songwriter Andrew Farriss recalls seeing the band as a child and studying its songs to learn composition; first-person testimony: https://www.podscan.fm/podcasts/song-diving-an-american-songwriter-podcast/episodes/song-diving-with-inxs-andrew-farriss and https://trouserpress.com/inxss-new-country-sensation-andrew-farriss/
- **The Rolling Stones** — Andrew Farriss directly describes studying their songs and distinctive rhythmic groove, naming specific songs including 'Brown Sugar' and 'The Last Time'. 2026 podcast transcript above.
- **The Monkees** — Andrew Farriss names their 'She' as a song he liked and sang as a child, when asked which songs shaped his songwriting. 2026 podcast transcript above. This is **weaker evidence** of a later INXS influence than the Beatles or Stones: do not automatically propagate it to an album.
- **Talking Heads and XTC** — producer Nick Launay explicitly says both were favourite bands that **musically influenced The Swing**, not merely sonic comparisons: https://tapeop.com/interviews/105/nick-launay
- **Blondie** — Andrew Farriss retrospectively names Blondie alongside Talking Heads as an example of artists remaining faithful to adventurous musical ideas while recording *The Swing*. Quoted in uDiscoverMusic from 2017 reissue recollections: https://www.udiscovermusic.com/stories/inxs-the-swing-album/ . **Moderate confidence** as an album-specific influence rather than a strict musical blueprint.

**Do not transform** Motown (a label/scene), ska (a style), a covered Bob Marley song, producer Nile Rodgers, or featured guest Daryl Hall into `influenced_by` artists. Keep the early three albums' `influenced_by` blank without album-specific testimony; do not distribute all group-wide influences automatically.

## Important caveats / decisions

- **`The Swing` recordings:** Nile Rodgers is credited as producer of 'Original Sin' only; Nick Launay produced the other nine songs. Both count, in this scope, but neither should appear as an album `influenced_by` artist merely for producing.
- **`The Swing` production machines:** Launay describes an early-digital toolkit (Eventide Harmonizer, AMS, Lexicon reverbs, DX7) typical of multiple 1980s sessions; he does **not specifically verify each brand/model was used on this album**. Therefore no DX7/Eventide/AMS tokens have been asserted. `digitalreverb` is used for the album's explicit reverb discussion; Claude may review the evidence strength before preserving.
- **Strings:** physical edition credits name Andrew Farriss and William Motzing for strings arrangements. `stringarrangements` is supported, as is `strings` for the orchestrated passages (particularly 'Johnson’s Aeroplane'). This is not a claim of orchestral instrumentation throughout all tracks.
- **Genre evidence:** `genre_evidence.csv` distinguishes whole-album character from individual tracks and AllMusic's metadata taxonomies. Lower-priority tags such as `collegerock` and `contemporarypoprock` are included because the prompt requests every album-specific published style, not because those dominate the music; Claude may normalize style taxonomy consistently across all artists.
- **Album dates:** use original Australia year, not subsequent US issue date. The official INXS website dates *The Swing* to 1 April 1984 while certain references show 21 March 1984. Both give 1984. 1980 debut LP editions and digital listings vary in their bonus tracks: the descriptor describes the original core album, not 2011/2022 reissues.
- **Debut credit:** *INXS* (1980) was produced by Duncan McGuire **and INXS** (co-production), according to the official band site and vinyl credits; do not omit the group's producer credit.
- **`Shabooh Shoobah`:** official site dates it to 16 October 1982; other discographies use 13 October. Both give 1982. Mark Opitz is the sole credited producer; engineers are not producers.
- **`Underneath the Colours`:** Richard Clapton is the sole credited producer. Official INXS website dates the original to 19 October 1981; Apple's January metadata is not the historical issue date.
- **2010 `Original Sin`:** a full-length studio project of re-recorded INXS songs with guest singers, sometimes indexed as 2010 or 2011. It is **not a conventional original-material album**. Put on future Phase 04 audit for confirmation before import; the original studio-album chronology includes it, but if the owner excludes studio re-recordings, omit it from descriptors. The 1989 **Max Q** record is a different act and does not belong in this catalogue.
- **`Dekadance` (1983/1984):** early remix EP/mini-LP, not a full studio album; omitted for now because priority is studio works. *INXSive* (1982), *The Greatest Hits* (1994), *Live Baby Live* (1991), subsequent compilations and concerts are excluded. No phase-01 release has a separate co-billed album-artist credit.
- **Lyrical restraint:** themes for 1980 are empty when album-level critical evidence is thin; no generic romantic or political themes imputed from the band's later lyrics.

## Next phases

**Phase 02 (four studio records):** *Listen Like Thieves* (1985), *Kick* (1987), *X* (1990), *Welcome to Wherever You Are* (1992).

**Phase 03 (three studio records):** *Full Moon, Dirty Hearts* (1993), *Elegantly Wasted* (1997), *Switch* (2005). **Phase 04 (conditional):** *Original Sin* (2010/2011; re-recordings, check classification).

## Contents of this ZIP

- `CLAUDE_IMPORT.md` — import, influence sources and caveats
- `inxs_phase01_rows_ONLY.csv` — only these 4 rows
- `inxs_phase01_sources.csv` — album-linked working URLs and evidence strength
- `inxs_phase01_genre_evidence.csv` — one evidence entry for every genre
- `inxs_phase01_evidence-notes.md` — audit of every hard-to-infer value and disagreements
- `inxs_phase01_catalog-audit.csv` — all studio titles and catalogue changes

No scripts, no unrelated artist, no previous-phase rows.

## Claude import note (28 Oct 2026)

Chic removed from The Swing's sounds_like: Nile Rodgers produced Original Sin (a producer's band is not a comparison). Production digitalreverb added. Original Sin (2010 re-recordings) left out of the catalogue.

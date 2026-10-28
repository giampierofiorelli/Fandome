# CLAUDE IMPORT — Toto, Phase 01

**Date:** 28 October 2026. **GitHub:** `giampierofiorelli/Fandome`, read-only branch `descriptors`. No GitHub write has been made.

## Phase contents (ONLY four new album rows)

| Album ID | Title | Year | Type | Current catalogue |
| --- | --- | --- | --- | --- |
| `toto-toto` | Toto | 1978 | studio | already present |
| `toto-hydra` | Hydra | 1979 | studio | already present |
| `toto-turnback` | Turn Back | 1981 | studio | **ADD** |
| `toto-totoiv` | Toto IV | 1982 | studio | already present |

The existing artist ID is **`toto`** (catalog.ts, not seed.ts). The file `docs/descriptors/toto.csv` **does not exist** on the inspected branch. **No previously described Toto album has been repeated**. The 4 existing catalogue titles inspected were Toto, Hydra, Toto IV, Isolation and Fahrenheit. The full list of missing albums and planned phases is in `toto_phase01_catalog-audit.csv`.

## Files

1. `toto_phase01_rows_ONLY.csv` — exact **27-column** header, 4 draft rows, phase 01 only.
2. `toto_phase01_sources.csv` — cited album-specific professional/editorial/official evidence; no affiliate recommendation pages.
3. `toto_phase01_genre_evidence.csv` — one source per genre per album, with track/whole-album scope.
4. `toto_phase01_evidence-notes.md` — reasoning, personnel/production provenance, confidence and disagreements.
5. `toto_phase01_catalog-audit.csv` — full released studio discography plus one substantial soundtrack.
6. `CLAUDE_IMPORT.md` — import instructions, tokens, phase planning and global artist influences.

## Catalogue changes requested (not performed)

**Add now:** `Turn Back` (1981, `studio`) with ID `toto-turnback`; add missing artist albums only as they enter their future phase, or stage the complete missing album list in the catalogue as preferred. Retain the 5 existing IDs exactly. The Dune (1984) original score qualifies as substantial Toto soundtrack, but it is **not included in this 01 ZIP**; schedule in phase 02, not a live/compilation album.

**Future catalogue additions:** Dune (1984, soundtrack), The Seventh One (1988), Kingdom of Desire (1992), Tambu (1995), Mindfields (1999), Through the Looking Glass (2002), Falling in Between (2006), Toto XIV (2015), Old Is New (2018). Note that *Through the Looking Glass* contains cover performances but is a newly recorded studio release, not a compilation of Toto tracks. *Old Is New* first emerged as a new/archival studio album as part of the 2018 box *All In*, with unfinished historical sessions completed; it is **not** the compilation *40 Trips Around the Sun*. Sources: https://totoofficial.com/2026/10/toto-announces-50th-anniversary-tour-in-europe-planned-for-summer-2027/ ; https://totoofficial.com/releases/all-in/ ; https://www.stevelukather.com/music/old-is-new.

**Excluded:** *Past to Present 1977–1990*, *Toto XX*, *40 Trips Around the Sun* and *All In* are compilations/box sets (even if some contain new or unreleased recordings); all concert/live albums excluded. In particular **do not add *Toto XX* separately as a studio album**. The 1984 original *Dune* OST is included as an exception because its substantial original score is credited to Toto; *Prophecy Theme* is by **Brian Eno**, a track-specific contributor, not a co-billed album artist (https://totoofficial.com/releases/dune-soundtrack/).

## New Fandome tokens to add

- `progressiverock` (Genre): **source-documented exact label “progressive rock”** used on Toto (1978), Hydra (1979); current genre type has `prog` but not `progressiverock`. Per user instruction, do not silently substitute `prog` for a different exact source label. Map to a genre family in `genreFamilies.ts`, then validate.
- **No new instruments** proposed.
- **No new production tokens** proposed. All used ones are in the current `production.ts` list.

## ARTIST INFLUENCES (artist-level statements, not automatically album-level links)

| Artist | Documentary evidence and attribution | Source |
| --- | --- | --- |
| Yes | David Paich says they analysed Yes albums to construct songs in the early band; Lukather played Yes songs when young | https://axs.tv/news-story/toto-on-their-prog-roots-we-wanted-to-be-known-as-a-progressive-rock-band/ (AXS TV, 10 Jun 2026, summarising the 2015 Toto XIV interview) |
| Emerson, Lake & Palmer | Paich says the band was particularly inspired by ELP's records; he also cites Keith Emerson's synthesizer performance as an early influence | https://axs.tv/news-story/toto-on-their-prog-roots-we-wanted-to-be-known-as-a-progressive-rock-band/; https://www.musicradar.com/news/tech/totos-david-paich-talks-quincy-jones-sessions-and-writing-africa-589308 |
| Genesis | Lukather names Genesis among the progressive bands that inspired the group | https://axs.tv/news-story/toto-on-their-prog-roots-we-wanted-to-be-known-as-a-progressive-rock-band/ |
| Pink Floyd | Lukather names Pink Floyd among Toto's formative progressive-rock influences | https://axs.tv/news-story/toto-on-their-prog-roots-we-wanted-to-be-known-as-a-progressive-rock-band/ |
| Gentle Giant | Lukather says the group's layered vocal harmonies drew on Gentle Giant | https://axs.tv/news-story/toto-on-their-prog-roots-we-wanted-to-be-known-as-a-progressive-rock-band/ |

**Album-level exceptions (Toto IV only):** Direct evidence for **Led Zeppelin (In Through the Out Door)**, **Steely Dan (Aja)** and **Steely Dan (Gaucho)** concerns Jeff Porcaro's Rosanna drum pattern, per Lukather; Beach Boys and Beatles concern Paich's vocal layering on Africa, and Elton John his syllabic diction (https://www.loudersound.com/features/toto-the-story-behind-rosanna; https://www.mixonline.com/recording/classic-tracks-totos-africa-375305). A prior collaboration with Boz Scaggs or Steely Dan is **not** on its own an influence. No other phase-01 album-specific claim of influence is supported well enough.

## Caveats for Claude

- **Hydra producers:** Band official album page lists only Toto; AOTY and credit transcription include Tom Knox and Reggie Fisher. Keep both findings documented and check original sleeve before final review.
- **Turn Back producers:** Lukather's own discography explicitly credits `Geoff Workman and Toto`; official band page lists Geoff Workman as recording engineer/mixer. Physical sleeve should arbitrate. Roy Thomas Baker was **not** this album's producer.
- **Toto IV percussion:** Yamaha GS-1 created the *kalimba-like sound* heard on Africa, so do not add acoustic `kalimba`. Bass marimba is represented by `mallets`, source says actual percussion alongside the synthesized timbre.
- **Genres:** Some AllMusic adult-contemporary tags are broader than the sound. Their provenance and lower order are deliberate; track-only styles are marked `some tracks`.
- **Synthesis and tape:** `analogtape`, `drumloop` and Yamaha model production tags are **only on Toto IV** where the primary engineer/artist source substantiates them. Other album-specific machines are not assumed.
- **No invented studio technology:** for Turn Back `production` is blank because no named method or equipment was verified. That is preferable to generic, unsupported tags.
- **Status:** all rows `draft`; let a second independent reviewer mark as `reviewed`.

## Next phases (strictly incremental)

- **Phase 02:** *Isolation* (1984), *Dune* (1984 soundtrack), *Fahrenheit* (1986), *The Seventh One* (1988).
- **Phase 03:** *Kingdom of Desire* (1992), *Tambu* (1995), *Mindfields* (1999), *Through the Looking Glass* (2002).
- **Phase 04:** *Falling in Between* (2006), *Toto XIV* (2015), *Old Is New* (2018).

Do not repeat phase 01 rows in future ZIPs. Do not include live albums or compilations.


## Claude import note

- 4 rows imported. progressiverock mapped to the existing prog (same genre, not a new token).
- Boz Scaggs removed from sounds_like (Toto, Hydra): Paich, Porcaro and Hungate played on and co-wrote Silk Degrees, so the likeness is their own work (a self-reference).
- Toto IV influenced_by kept: Rosanna's drum pattern modelled on Led Zeppelin and Steely Dan (Lukather), Africa's vocal layering on the Beach Boys and Beatles (Paich): documented technique models.
- Catalogue: Turn Back added, and the later studio albums plus the Dune soundtrack (1984).
- Artist influences: Yes, ELP, Genesis, Pink Floyd, Gentle Giant.
- Turn Back enriched: production roomambience (Gift with a Golden Gun cut 'with a lot of room sound') and overdubbing (Lukather overdubbed guitars on drums-and-piano takes), Music UK 1983 (Rosen); instruments piano, guitarsynth (Roland guitar synth on Turn Back). Recorded at Cherokee Studios (Discogs 2907957). No critic comparison found. Reception researched by Claude.

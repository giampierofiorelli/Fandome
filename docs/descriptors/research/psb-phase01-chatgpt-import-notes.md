# Pet Shop Boys — Fandome Phase 01 import hand-off

**Research as of:** 27 October 2026  
**Artist ID:** `psb` (found in `src/data/seed.ts`, **not** in `catalog.ts`)  
**Package:** Exactly four incremental records, no songs, live albums or normal greatest-hits compilations.

## Phase 01 — four new descriptor rows

| Album ID | Album | Release | Type | Existing catalogue? |
|---|---|---|---|---|
| `psb-please` | *Please* | 1986 | studio | **Add** |
| `psb-disco` | *Disco* | 1986 | remix | **Add** |
| `psb-introspective` | *Introspective* | 1988 | studio | **Add** |
| `p-behaviour` | *Behaviour* | 1990 | studio | **Yes, keep seed ID** |

**Previously described, intentionally skipped:** *Actually* (1987), catalogue ID **`p-actually`**, because `docs/descriptors/psb.csv` already includes its full descriptor. It is not in the attached new-row CSV. There are **no other existing Pet Shop Boys descriptor rows** in that file.

## Catalogue additions

Must be added **before** running the descriptor validator:

| New ID | Title | Year | Type |
|---|---|---|---|
| `psb-please` | Please | 1986 | studio |
| `psb-disco` | Disco | 1986 | remix |
| `psb-introspective` | Introspective | 1988 | studio |

`Behaviour` is **already** catalogued as `p-behaviour`, not `psb-behaviour`. Keep the existing ID. See `psb_phase01_catalog-audit.csv` for the rest of the released discography, omissions and provisional phase plan.

**Exception to review:** The band's website files *Disco* under 'Compilation', but calls it the 1986 album of disco remixes; music catalogues describe it as the first remix album. Fandome permits landmark remix albums but forbids ordinary compilations. As a *remix* with distinct extended dance arrangements, it has been included; if the policy is intended to exclude this kind of remix compilation too, **omit its row**. Producer Stuart Price later specifically called it a pivotal record in the group's discography (producer interview cited in sources).

## Co-billed works

**None in these four albums.** For later planning, the official PSB site credits **`Frances Barber/Pet Shop Boys`** for *Musik* (2019): https://www.petshopboys.co.uk/product/collaboration/musik . Add a co-billed entry at the phase when that EP is imported. The 2026 *A man from the future* credits Juliet Stevenson and Manchester Camerata Octet as performers; confirm retail artist billing before creating a `coBilled.ts` mapping, not merely based on their guest involvement. *Closer to Heaven* (2001) is a cast recording and also requires credit/artist mapping review.

## New descriptor tokens

* **Genres:** none. Genres, including `electrodisco`, `sophistipop`, `orchestralpop` and `dancerock`, already occur in `scenes.ts` and the validator.
* **Instruments:** none.
* **Production:** **`rolandmsq700`** (Roland MSQ-700 MIDI sequencer). Original studio engineer David Jacob identifies this exact machine for *West End Girls* on *Please*. Source: https://www.muzines.co.uk/articles/track-record-the-pet-shop-boys/11054 . Add to `src/data/production.ts` / allowed token list before validator execution. Do not silently reinterpret this exact model as `rolandmc4`.

## ARTIST INFLUENCES (career-level; direct interviews and documented recollections)

The following are formative musical influences named by a PSB member or described by a member firsthand. They are **not** blanket album-level assignments.

1. **Bobby Orlando** — Neil Tennant and Chris Lowe explicitly describe the New York hi-NRG producer as formative to their shared early sound and writing; this predates the released Parlophone *Please*. https://magnetmagazine.com/2016/07/08/magnet-classics-the-making-of-pet-shop-boys-please/ ; https://www.pet-shop-boys.eu/literally.html
2. **The Flirts** — Tennant specifically says Lowe played him *Passion* and said that was what their music should sound like; record first appeared on *10¢ a Dance* (1982). https://www.independent.co.uk/arts-entertainment/music/features/pet-shop-boys-pet-sounds-220850.html ; https://www.pet-shop-boys.eu/literally.html
3. **Soft Cell** — Chris Lowe directly remembers being a fan during the band's formation; he and Neil bonded over electronic music. https://magnetmagazine.com/2016/07/08/magnet-classics-the-making-of-pet-shop-boys-please/ 
4. **Grandmaster Flash and the Furious Five** — Tennant expressly identifies *The Message* (1982) as the rap template for *West End Girls*, including its lyrics and declamatory approach. https://www.thisisnotretro.com/interviews/pet-shop-boys-interview-2004/ ; https://www.rhino.com/article/deep-dive-pet-shop-boys-west-end-girls
5. **David Bowie** — Tennant calls Bowie a formative musical and cultural influence in the BBC's *This Cultural Life* interview, linked to his 1972 Ziggy Stardust concert experience. https://podcasts.apple.com/gb/podcast/neil-tennant/id1588922162?i=1000557794841
6. **Giorgio Moroder** — Tennant/Lowe describe their attraction to Moroder's 1970s dance production as a motive for hiring Harold Faltermeyer for *Behaviour*. https://www.classicpopmag.com/features/classic-album/pet-shop-boys-behaviour/
7. **Phil Spector** — Chris Lowe explicitly cites Spector's large-scale pop records as a creative model for the *Introspective* Trevor Horn sessions. https://www.classicpopmag.com/features/classic-album/classic-album-pet-shop-boys-introspective/
8. **The Beatles** — Lowe specifically cites their late-1960s large-orchestration records, including *A Day in the Life*, as a sonic reference. https://www.classicpopmag.com/features/classic-album/classic-album-pet-shop-boys-introspective/
9. **Grace Jones** — the pair expressly name Trevor Horn's production of *Slave to the Rhythm* as a reference they admired and sought to emulate in the *Introspective* sessions. https://www.classicpopmag.com/features/classic-album/classic-album-pet-shop-boys-introspective/
10. **ABC** — Chris Lowe names *The Look of Love* among valued orchestral pop productions in the same firsthand album discussion. https://www.classicpopmag.com/features/classic-album/classic-album-pet-shop-boys-introspective/
11. **Art of Noise** — the duo name the group's productions as models of the elaborately produced electronic orchestral-pop sound in the same firsthand recollection. https://www.classicpopmag.com/features/classic-album/classic-album-pet-shop-boys-introspective/

**Caution:** Admiration of Kraftwerk, Air, LCD Soundsystem and classical composers is acknowledged by Tennant here https://www.fridae.asia/gay-news/2007/07/28/1910.neil-tennant-pet-shop-boys but that statement alone does not prove musical influence on any particular album. Do not turn admired artists, guests, covers, samples or sonic comparisons into `influenced_by` without an album-specific documented link.

## Production, formats and release caveats

* *Please*: the original Parlophone LP has 11 tracks. Its 1985 album-version *West End Girls* is the Stephen Hague re-recording, **not** the original 1984 Bobby Orlando single. Primary engineer describes street noises captured on portable Walkman; later recollection says DAT, so no `datrecording` token. `rolandmsq700` is track-level.
* *Disco*: 1986 remix album, not a studio release, not *Disco 2*, *Disco 3*, *Disco 4* or 2025's *Disco 5*. Its six extended mixes derive from *Please* and B-sides. Remixers **Arthur Baker** and **Shep Pettibone** are not automatically credited as new producers; see per-track notes.
* *Introspective*: original six extended tracks. **Frankie Knuckles** has **additional production and mixing** for *I Want a Dog* only; he is not promoted to a full co-producer in the descriptor. Horn and Stephen Lipson are properly credited producers.
* *Behaviour*: official 1990 master, **not** the orchestra-overdubbed 1991 *Jealousy* single version. Producers = **Pet Shop Boys | Harold Faltermeyer**. Despite the stated anti-sampling aesthetic, Faltermeyer describes Synclavier sampling in the actual sessions.
* No separate *Further Listening* expanded editions, live recordings, ordinary greatest hits or side-project titles are queued as new albums. *Tennant/Lowe: Battleship Potemkin* is discussed in scope decisions below rather than silently billed as Pet Shop Boys.

## Release scope and remaining phases

Core released studio albums (15 through *Nonetheless*, 2024), plus selectively distinct released scores, high-impact remix albums and EPs. The band's separate 2026 studio-recorded, orchestral/narrated work *A man from the future* is already out (9 October 2026) and must be considered in Phase 07, **not** mistaken for a forthcoming release: https://www.petshopboys.co.uk/news/2026-10-09/a-man-from-the-future-4 . Its final classification/guest billing should be checked.

The 1993 six-track **Relentless** debuted as a separate disc accompanying *Very* and was reissued as standalone in 2023; use **1993** as original release year: https://www.petshopboys.co.uk/product/album/relentless .

**Not queued**: *Disco 2*, *Disco 3*, *Disco 4*, *Disco 5* (secondary collected-remix releases); *Alternative*, *PopArt*, *Ultimate*, *SMASH*, etc. (compilations); all live LPs; *Battleship Potemkin* credited as **Tennant/Lowe** and therefore needing explicit owner decision on whether this is considered the Pet Shop Boys catalogue (https://www.petshopboys.co.uk/product/album/most-incredible-thing is a different PSB-billed score, included); *Furthermore* (2024 re-recordings of prior material). Other EP/soundtrack candidates are enumerated in the catalogue audit.

**Phase 02 (next, four records):**

1. `p-very` — *Very* (1993), studio, existing catalogue ID.
2. `psb-relentless` — *Relentless* (1993), studio/extended dance album, add to catalogue.
3. `psb-bilingual` — *Bilingual* (1996), studio, add to catalogue.
4. `psb-nightlife` — *Nightlife* (1999), studio, add to catalogue.

Phase 03: *Closer to Heaven* (2001, cast soundtrack), *Release* (2002), *Fundamental* (2006) [three]. Phase 04: *Yes* (2009), *The Most Incredible Thing* (2011 score), *Elysium* (2012) [three]. Phase 05: *Electric* (2013), *Super* (2016), *Agenda* (2019 EP) [three]. Phase 06: *Musik* (2019 collaborative EP), *Hotspot* (2020), *My Beautiful Laundrette* (2020 stage score EP) [three]. Phase 07: *Lost* (2023 EP), *Nonetheless* (2024), *A man from the future* (2026) [three]. Chronological ordering in phase 06 places *Hotspot* (January) before *My Beautiful Laundrette* (April).

## Included files

- `psb_phase01_rows_ONLY.csv` — header + exactly four new 27-column rows, no `Actually`.
- `psb_phase01_sources.csv` — original and secondary provenance, traceable by album.
- `psb_phase01_genre_evidence.csv` — one evidence record for each assigned genre, including track scope/caveats.
- `psb_phase01_evidence-notes.md` — detailed musical reasoning and identified contradictions.
- `psb_phase01_catalog-audit.csv` — existing IDs, missing albums, phased scope and catalogue additions.
- `CLAUDE_IMPORT.md` — this file.


## Claude import note (Oct 2026)
- First delivery under the updated prompt: artist found in seed.ts, Actually skipped (already described), Behaviour kept as p-behaviour.
- Introspective: Grace Jones and ABC removed from sounds_like (already documented influences).
- Disco imported as a landmark remix album (owner may drop it: remix compilations).

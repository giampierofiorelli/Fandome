# CLAUDE_IMPORT — Salt-N-Pepa / Fandome phase 01

Branch `descriptors`, read-only. Prepared 2026-10-29. This ZIP is incremental and contains **four new rows only**, in the Fandome 27-column order.

## Artist identity, catalog audit

Proposed Fandome artist ID: **`saltnpepa`** (lowercase letters only). Verified the artist is absent from `src/data/catalog.ts` and `src/data/seed.ts` on the `descriptors` branch as checked today; no `docs/descriptors/saltnpepa.csv` exists. Check whether another researcher has added the artist since before importing.

| ID | Original title | Year | Type | Catalog action |
|---|---|---|---|---|
| `saltnpepa-hotcoolvicious` | Hot, Cool & Vicious | 1986 | studio | add |
| `saltnpepa-asaltwithadeadlypepa` | A Salt with a Deadly Pepa | 1988 | studio | add |
| `saltnpepa-blacksmagic` | Blacks' Magic | 1990 | studio | add |
| `saltnpepa-verynecessary` | Very Necessary | 1993 | studio | add |

**Phase 02 / final:** `saltnpepa-brandnew`, *Brand New* (1997). The artist's official site and AllMusic confirm **five studio albums**. The 1989/1991 hit-remix compilations and later collections are excluded. No existing catalog albums/descriptor rows were skipped in phase 01 because none was found.

## Required import procedure

1. Add Salt-N-Pepa to the main artist catalog / scene data with the `saltnpepa` ID; add the four phase-01 albums to its catalog entry with **exact spellings and dates**, plus its 1997 album if constructing the entire artist room (do **not** import a 1997 descriptor yet). Match existing UI schema and checks.
2. Add **one new genre token** `eastcoasthiphop` to `src/data/scenes.ts` and `src/data/genreFamilies.ts` (parent `hiphop`, plus applicable existing family links if consistent). It is album-level language from the Album of the Year metadata, not an invented synonym for all hip-hop.
3. Import only rows from `saltnpepa_phase01_rows_ONLY.csv` as `docs/descriptors/saltnpepa.csv`, without other artists/earlier phase entries. All `status=draft`. Cross-check any ID collisions.
4. Place the companion sources, genre evidence, evidence notes and catalog audit in the relevant `docs/descriptors/research/` directory. Run the project descriptor validator and app tests. Escalate any new token or conflicting album title rather than silently changing identifiers.

**None of the four is co-billed as an album.** Featuring artists E.U., En Vogue, Kid 'n Play and collaborators do not make these co-billed albums. Samples, interpolations and cover versions do not create album IDs.

## Artist influences (general, not automatically assigned to albums)

The following are named as formative by group members or in a music-history institution; they must *not* be propagated to every album's `influenced_by` without album-specific support:

- **Roxanne Shanté**: Salt explicitly said the group was inspired by Shanté's pioneering answer-record approach. Source: https://www.hotnewhiphop.com/700327-cheryl-salt-james-hh50-femcees . This also supports the 1986 debut's influenced_by, given The Showstopper.
- **Marvin Gaye** and **Led Zeppelin**: Rock & Roll Hall of Fame Library lists them as influences of Salt-N-Pepa, without pinpointing a specific studio album. Source: https://library.rockhall.com/salt-n-pepa . No individual album influenced_by assigned.
- **Jazzy Jeff, DJ Scratch, Jam Master Jay**: Spinderella recalled them as favorite DJs who shaped her musical template; interview https://mountairycasino.com/nuthin-but-a-she-thing-salt-n-pepa-to-showcase-the-hits-at-mount-airy/ . Not used to infer a 1988 album influence.
- **Run-D.M.C.**: the same profile says Jam Master Jay and his group served as a blueprint for Salt-N-Pepa; Pepa also mentions listening to Run-D.M.C. in an interview https://www.inkl.com/news/it-fuelled-us-how-salt-n-pepa-turned-industry-sexism-into-success . This is a general, not track-level link.

## Credits, editions and caveats

- *Hot, Cool & Vicious*: original US 1986 track list has eight tracks; **Push It** was a later 1987 B-side and added to subsequent reissues; later-edition electro sound **not** attributed to every original track. Sources: https://www.gatefold.fm/album/hot-cool-vicious/73718 and https://trouserpress.com/reviews/salt-n-pepa/ .
- 1986 co-producer **Stephen Keitt** documented on a specific track; original production overwhelmingly **Hurby Luv Bug Azor**. 1988 productions credit Azor plus **The Invincibles** on multiple editions. Sources in source CSV.
- *Blacks' Magic*: production is spread among Hurby Azor, The Invincibles, Salt, Spinderella, Boy Wonder, Excalibur and Quicksilver. Do not credit artists merely for being sampled or for guest appearances. See https://musicbrainz.org/release/02cb3417-947b-4d62-8f42-59c5c4020027 .
- *Very Necessary*: most studio tracks were recorded to analog, while track 11 was recorded digitally and edited via sound tools. The expanded 2023 edition adds more remixes; descriptor covers the original 1993 album. Sources: https://musicbase.net/very-necessary-08k6r53 and https://musicbrainz.org/release/28ea89aa-8dec-48f3-a1ed-b205e61e48ed .
- Differences between critics: Christgau loved the 1986/1990 records, was lukewarm about 1988; AllMusic/Pitchfork more enthusiastic about 1993 than the contemporary Los Angeles Times. Explicit references in notes.
- No special new instruments or production tokens proposed; there is only one new genre token. Do not infer specific drum-machine or sampler hardware from genre.

## ZIP contents (six files only)

- `CLAUDE_IMPORT.md`
- `saltnpepa_phase01_rows_ONLY.csv`
- `saltnpepa_phase01_sources.csv`
- `saltnpepa_phase01_genre_evidence.csv`
- `saltnpepa_phase01_evidence-notes.md`
- `saltnpepa_phase01_catalog-audit.csv`

## Claude import note (Oct 2026)

- New genre token `eastcoasthiphop` (parent hiphop). Artist added with the five studio albums; scene US en 1980 hiphop,rnb.

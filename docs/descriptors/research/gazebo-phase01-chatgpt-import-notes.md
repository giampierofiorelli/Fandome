# CLAUDE_IMPORT — Gazebo / Fandome phase 01

Checked against GitHub `descriptors` branch on **27 October 2026**, read-only. Artist room id **`gazebo`** already exists in `catalog.ts`. No Gazette/other artist confusion: this is **Paul Mazzolini (Gazebo)**. No `docs/descriptors/gazebo.csv` existed; no pre-existing Gazebo descriptor rows to skip.

## Import exactly these four NEW draft rows (27 columns)

| id | title | year | original type | catalog action |
|---|---|---|---|---|
| `gazebo-gazebo` | *Gazebo* | 1983 | studio | Already in catalog; descriptor only |
| `gazebo-telephonemama` | *Telephone Mama* | 1984 | studio | Already in catalog; descriptor only |
| `gazebo-univision` | *Univision* | 1986 | studio | **Add original album to `src/data/catalog.ts`** |
| `gazebo-therainbowtales` | *The Rainbow Tales* | 1988 | studio | **Add original album to `src/data/catalog.ts`** |

No previous phase entries, no unrelated artist, no duplicate landmark. `seed.ts` does not contain Gazebo. The catalog slug function produces the exact IDs above. IMPORTANT: add `Univision` and `The Rainbow Tales` **before** importing and validating or tests will fail with unknown album IDs.

## ZIP contents

- `gazebo_phase01_rows_ONLY.csv` — four **new** rows with strict 27-column Fandome header.
- `gazebo_phase01_sources.csv` — sources by album with direct URLs, supporting claims and strength.
- `gazebo_phase01_genre_evidence.csv` — exactly one evidence record for each assigned genre (sources scoped to specific original albums).
- `gazebo_phase01_evidence-notes.md` — rationale, music/producer credits, numeric anchors and uncertainty.
- `gazebo_phase01_catalog-audit.csv` — catalog actions per album.
- `CLAUDE_IMPORT.md` — this file.

## New tags / additions

- **Genres:** none. `italodisco`, `synthpop`, `electro`, `electronic`, `pop`, `rock` already exist in allowed Fandome genres.
- **Instruments:** none. `synth`, `drummachine`, `piano`, `keyboard` **not used**: correct existing token is `keyboards`; `bass`, `violin`, `strings`, `electronicdrums`, `guitar` already listed.
- **Production:** none. Original 1983 album credits specify Oberheim OB-X (`oberheimobx`), Minimoog (`minimoog`) and Oberheim DMX (`oberheimdmx`); the 1986 source names a Linn machine without a firm model, so no `linndrum` or `linnlm1` production token is assigned. `stringarrangements`, `drumprogramming` and `overdubbing` are listed. No custom tokens.
- **Co-billed albums:** none. Co-writers and guest musicians do not imply co-billing. Denis Haines and Pierluigi Giombini are collaborators/producers, not billed co-headliners.

## ARTIST INFLUENCES (artist-wide, phase 01 only)

Each of these musicians/groups **was named by Gazebo** as a musical inspiration or formative listening, rather than inferred from sonics. These are **artist-level** notes. Do **not** automatically import every one into each album's `influenced_by` field.

| Named artist | Source and artist statement context |
|---|---|
| The Beatles | Gazebo recalls first learning guitar through the Beatles; specifically *Don't Let Me Down*. https://www.tuttorock.com/gazebo-intervista-a-paul-mazzolini/ |
| Bob Dylan | He explicitly describes Dylan songs as some of his earliest guitar lessons. https://www.velvetmusic.it/2013/09/30/gazebo-dedico-masterpiece-a-marco-trani-intervista/ |
| Simon & Garfunkel | Gazebo remembers learning their songs on guitar in Copenhagen. https://italo-disco.net/HTML/HTML%20Interviews/Gazebo%20Interview.html |
| Leonard Cohen | Gazebo describes early exploration of Cohen in his formative influences. https://recensiamomusica.com/gazebo-masterpiece-intervista/ |
| Led Zeppelin | Gazebo mentions them in the progression of his early listening and guitar development. https://recensiamomusica.com/gazebo-masterpiece-intervista/ |
| Deep Purple | Gazebo identifies Blackmore as a formative guitarist. https://www.tuttorock.com/gazebo-intervista-a-paul-mazzolini/ |
| Genesis (Selling England by the Pound) | Gazebo names the album as formative and singles out *Dancing with the Moonlit Knight*. https://www.velvetmusic.it/2013/09/30/gazebo-dedico-masterpiece-a-marco-trani-intervista/ |
| Gentle Giant | Gazebo explicitly says he comes from prog groups including Genesis and Gentle Giant. https://www.tuttorock.com/gazebo-intervista-a-paul-mazzolini/ |
| Yes | Gazebo explicitly recalls loving Genesis and Yes as a young player. https://www.cinquantamila.it/storyTellerArticolo.php?storyId=64eb3692f272c |
| Premiata Forneria Marconi (PFM) | Gazebo lists PFM as part of his formative Italian progressive scene. https://recensiamomusica.com/gazebo-masterpiece-intervista/ |
| Banco del Mutuo Soccorso | Gazebo says he was listening to Banco among seminal Italian prog bands. https://www.velvetmusic.it/2013/09/30/gazebo-dedico-masterpiece-a-marco-trani-intervista/ |
| Chick Corea | Gazebo recalls exploring jazz-rock from Corea onward. https://www.tuttorock.com/gazebo-intervista-a-paul-mazzolini/ |
| Frank Zappa | Gazebo explicitly names Zappa in his fusion/prog listening. https://www.tuttorock.com/gazebo-intervista-a-paul-mazzolini/ |
| Miles Davis | Gazebo mentions his listening to Davis in the same interview. https://www.tuttorock.com/gazebo-intervista-a-paul-mazzolini/ |
| Béla Bartók | Gazebo recalls listening to Bartók by seventeen. https://www.tuttorock.com/gazebo-intervista-a-paul-mazzolini/ |
| Edgard Varèse | Gazebo names Varèse in his classical listening phase. https://www.tuttorock.com/gazebo-intervista-a-paul-mazzolini/ |
| Lucio Battisti | He describes Battisti among artists he has long loved. https://www.velvetmusic.it/2013/09/30/gazebo-dedico-masterpiece-a-marco-trani-intervista/ |

**Specific producer-to-album influence:** Giombini describes a Chopin piano-melody idea directly influencing *I Like Chopin* while composing the debut album: https://giombinimusic.com/about-me/ . Consequently `gazebo-gazebo` uses `Frédéric Chopin` with carefully limited support; **this is not a blanket artist-wide Gazebo testimony**. Mere covers/quotations (Franz Liszt on *Univision*) are excluded from album influence links.

## Caveats and audit

1. *Univision* has 1986 original vinyl even though some artist databases say 1985 or Japan-only 1987. Artist official list + Italian/German 1986 LP proof supports 1986. See catalog audit.
2. *The Rainbow Tales* 1988 original Italian LP + Japanese CD and official list vs retrospective 1987 date in some discographies. Select 1988.
3. *Gazebo* original LP track **Masterpiece** has different credited producers than most other tracks; both Micioni and Fusar Poli must remain alongside Giombini.
4. *Univision* **Pain** is credited as arranged/produced by Gazebo, even though aggregate summaries often name only Giombini.
5. *Telephone Mama* original CD/LP shows Rinalduzzi guitar on title track and Gazebo guitar on Strategy; don't guess drum-machine model.
6. *The Rainbow Tales* has only narrowly supported instrumentation; for full personnel/gear specificity seek original high-resolution booklet/liner before filling further tokens. The scores are editable draft estimates, not audio-forensic measurements.
7. Album-level genre evidence includes all named genres but does not automatically treat the *artist's general Italo disco label* as proof for unrelated later records.

## Skipped by release type, not album numbering

- *Portrait* (1994) = compilation (artist official bio explicitly calls it a compilation).
- *Viewpoint* (1997) and *Portrait & Viewpoint* (2000) = greatest hits/recuts/remixes; excluded pending confirmation they contain a substantial original studio-program (the latter official bio explicitly calls essentials collection).
- *Ladies! The Art of Remixage* (2007) = remix album; not considered a landmark under currently available evidence.
- *I Like… Live!* (2013) = live, excluded.
- *Italo by Numbers* (2018) = studio reinterpretations of earlier Italo-disco hits, **not** automatically a compilation; include in a future phase (see note when reached).

## Next: phase 02 (four new rows, separate ZIP)

1. *Sweet Life* (1989) — studio
2. *Scenes from the News Broadcast* (1991) — studio (confirm chronology vs 1992 distribution)
3. *The Syndrone* (2008; title may be styled *...The Syndrone*) — studio
4. *Reset* (2015) — studio

Only those four in the next ZIP, not repeats; *Italo by Numbers* (2018) after those. No records unreleased by 27 October 2026.

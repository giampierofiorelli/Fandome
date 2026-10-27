# Claude import — Sinéad O’Connor, Phase 01

This archive is **strictly incremental**: only four new descriptor rows. **Do not append previously submitted artists or later phases.** Branch `descriptors` was read-only, and no GitHub writes were made.

## Contents (import in this order)

1. `sinead-thelionandthecobra` — *The Lion and the Cobra* (1987), studio, catalogue already present.
2. `sinead-idonotwantwhatihaventgot` — *I Do Not Want What I Haven’t Got* (1990), studio, catalogue already present.
3. `sinead-aminotyourgirl` — *Am I Not Your Girl?* (1992), studio, **ADD to catalogue**.
4. `sinead-universalmother` — *Universal Mother* (1994), studio, catalogue already present.

`docs/descriptors/sinead.csv` was **not present** in the live branch when researched, so there were no existing Sinéad descriptor rows to duplicate. The artist is already in `catalog.ts` as ID `sinead`, exact display name `Sinéad O’Connor`. Maintain the original apostrophe/accents in visible artist/title while keeping ASCII `album_id` slugs.

## Catalogue additions — mandatory now

- `Am I Not Your Girl?` — 1992 — `studio` — ID `sinead-aminotyourgirl`. It is a new studio recording of covers, **not** `compilation`.

## Later albums absent from catalogue (for future phases)

- `Gospel Oak` (1997, `ep`), ID `sinead-gospeloak`: a notable original-song EP (evaluate as landmark/documented release before phase 02).
- `Sean-Nós Nua` (2002, `studio`), ID `sinead-seannosnua`.
- `Throw Down Your Arms` (2005, `studio`), ID `sinead-throwdownyourarms`.
- `Theology` (2007, `studio`), ID `sinead-theology`.
- `How About I Be Me (And You Be You)?` (2012, `studio`), ID `sinead-howaboutibemeandyoubeyou`.
- `I'm Not Bossy, I'm the Boss` (2014, `studio`), ID `sinead-imnotbossyimtheboss`.

`Faith and Courage` (2000) is **already** catalogued. No release after 2014 is counted as a Sinéad O’Connor studio album. Exclude greatest hits, later deluxe reissues, concert/live albums and miscellaneous compilation collaborations from this phase.

## Album jointly billed to multiple artists

- **None** in this phase. Enya, MC Lyte, Phil Coulter and Jake Reynolds's individual contributions do not create co-billed albums.

## New tokens for Claude to add

- Genres: **none**. The 27-column phase uses existing genre tokens only.
- Instruments: **none**.
- Production: **none**.

All track-limited genres are listed with `scope` in the genre-evidence CSV. The 1992 `easylistening` tag has only weak secondary discographic evidence; `vocaljazz`, `adultcontemporary` and `traditionalpop` are listed by Album of the Year, not claims about every song. Do not relabel `standards` as `compilation`.

## ARTIST INFLUENCES — documented by O’Connor herself (phase 01 only)

These are **career-level musical influences**, not automatically album-specific `influenced_by` entries:

- **Bob Dylan** — 2002 interview says she was inspired by him; in 2007 singled out *Slow Train Coming* as formative; in 2014 identifies *Idiot Wind* as demonstrating how she could voice experiences through songs. Sources: https://popcultureclassics.com/sinead_oconnor.html, https://trouserpress.com/sinead-oconnor-in-conversation-2007/, https://www.wcmu.org/music/2014-08-10/whos-the-boss-sinead-oconnor-has-a-new-answer.
- **John Lennon** — named among musicians who inspired her in Paul Freeman's 2002 interview: https://popcultureclassics.com/sinead_oconnor.html.
- **Van Morrison** — named alongside Dylan and Lennon by O’Connor in the same 2002 interview: https://popcultureclassics.com/sinead_oconnor.html.
- **Nina Simone** — directly cited as inspiring her in the 2002 interview: https://popcultureclassics.com/sinead_oconnor.html.
- **Buju Banton** — named as a roots-reggae inspiration by O’Connor in 2002: https://popcultureclassics.com/sinead_oconnor.html.
- **Sizzla** — named in the same context in 2002: https://popcultureclassics.com/sinead_oconnor.html.
- **R. H. Harris / The Soul Stirrers** — she describes Harris's gospel singing as profoundly affecting her in the 2007 interview: https://trouserpress.com/sinead-oconnor-in-conversation-2007/.
- **Aretha Franklin** — a *later*, **album-construction** influence rather than evidence for the four albums in this phase: in 2014 she says the sequencing of *I Never Loved a Man the Way I Love You* inspired the storytelling structure of her later work: https://www.wcmu.org/music/2014-08-10/whos-the-boss-sinead-oconnor-has-a-new-answer.

Caution: Prince (whose song she covered), Nirvana/Kurt Cobain (whose song she covered), James Brown (whose drum break is sampled), and Enya (who appears as a guest) are **not automatically musical influences**. Their appearances are discussed separately in evidence notes. The covered standards on *Am I Not Your Girl?* are not sufficient evidence of specific singers influencing its musical style.

## Caveats, source conflicts and review notes

1. **1987 production:** Sinéad O’Connor is producer and Kevin Moloney is **co-producer**, despite some summaries describing both merely as producers. Both belong in `producers`; engineers and mixers do not.
2. **1990 producer caveat:** Use the original ten-track EMI label copy: Sinéad produces all original tracks, **Nellee Hooper co-produces *Nothing Compares 2 U* only**. Some broad AllMusic credits list engineers Chris Birkett and Sean Devitt as producers; the track-specific EMI label copy overrides that ambiguous credit. Do not import deluxe-only Daniel Lanois productions.
3. **1992 album:** Original 1992 recording; no `compilation` type. Phil Ramone is a producer, while the named conductors and orchestral arrangers are not. Contemporary press explicitly notes that it is not simply a swing album.
4. **1994:** Tim Simenon is a track co-producer and programmer, while Phil Coulter produces piano-orchestral tracks. All four documented producers should appear. Track-specific child/spoken performances do not make it co-billed.
5. **1987/1994 critical disagreements:** See evidence notes. Do not assume instrumental studio hardware models based on the year or genre.
6. **Original-release dates vs reissue dates:** Official label pages may display modern reissue publication in their product header; the album descriptions and release credits establish original years 1987/1990/1992/1994.

## Next phase (phase 02)

Chronological plan: **Gospel Oak** (1997, EP), **Faith and Courage** (2000, studio), **Sean-Nós Nua** (2002, studio), **Throw Down Your Arms** (2005, studio). After that: Theology (2007), How About I Be Me (And You Be You)? (2012), I'm Not Bossy, I'm the Boss (2014).

## Files

- `sinead_phase01_rows_ONLY.csv` — precisely four rows, 27 columns
- `sinead_phase01_sources.csv` — verifiable source URLs, including primary/label evidence
- `sinead_phase01_genre_evidence.csv` — one genre/album occurrence per row, including scope
- `sinead_phase01_evidence-notes.md` — supported scales, instruments, production, source conflicts
- `sinead_phase01_catalog-audit.csv` — catalogue and future-release audit
- `CLAUDE_IMPORT.md` — this file

**Pre-import:** add Am I Not Your Girl? to catalogue; import the four new descriptor rows; run `npx vite-node scripts/validate-descriptors.ts` and the project tests.

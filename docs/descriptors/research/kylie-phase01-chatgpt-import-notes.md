# KYLIE MINOGUE — Fandome / PHASE 01

Research cut-off: **26 October 2026**. Repository checked on the `descriptors` branch, read-only.

## Phase contents (4 new rows, original studio albums)

| album_id | original album title | year | type |
|---|---|---:|---|
| `kylie-kylie` | Kylie | 1988 | studio |
| `kylie-enjoyyourself` | Enjoy Yourself | 1989 | studio |
| `kylie-rhythmoflove` | Rhythm of Love | 1990 | studio |
| `kylie-letsgettoit` | Let's Get to It | 1991 | studio |

No earlier descriptor file `docs/descriptors/kylie.csv` was present in the checked branch; `kylie` is the **artist ID** in `src/data/seed.ts`/`scenes.ts`. The `catalog.ts` extension covers artists *outside the first five*. All four rows here are therefore new, rather than copies of already-delivered descriptors. Six deliverables only; the ZIP is strictly phase-incremental.

## Catalogue additions

Add this phase's four album IDs and original releases above. The full, 17-studio-album catalogue audit is in `kylie_phase01_catalog-audit.csv`; **13 studio titles are missing** and four are already in `seed.ts`. The latter **must keep their legacy IDs**: `k-lightyears` (2000), `k-fever` (2001), `k-disco` (2020), `k-tension` (2023). `Fever` is **2001**, despite a 2002 AllMusic US edition; a release year is not a reissue year. The official Kylie catalogue lists all 17 studio records including `Kylie Christmas` (2015) and `Tension II` (2024).

Additions after this phase, in chronological order: `Kylie Minogue` (1994), `Impossible Princess` (1997), `Body Language` (2003), `X` (2007), `Aphrodite` (2010), `Kiss Me Once` (2014), `Kylie Christmas` (2015), `Golden` (2018), `Tension II` (2024). Existing legacy IDs listed above also enter subsequent phase CSVs, but only with the existing ID.

**No live albums, greatest-hits sets or repeated-recording compilations.** `The Abbey Road Sessions` (2012) consists primarily of reworked older Kylie songs and is deliberately excluded, as are tour recordings and `Infinite Disco`. `Kylie Christmas (Fully Wrapped)` (2025) is an expansion/reissue of `Kylie Christmas`, not a separately counted 18th original studio album. The relevant **original-material collaborations** for later consideration are *Sleepwalker* (2014, Kylie with Fernando Garibay) and *Kylie + Garibay* (2015); verify original release form and exact co-billing at import instead of blindly assigning a studio-album type.

## Co-billed records this phase

None. *If You Were with Me Now* is a track-level duet with **Keith Washington** on Kylie's solo-billed *Let's Get to It*, not a co-billed album. The Jason Donovan duet *Especially for You* was originally a single and appears on some territorial/reissue editions of *Enjoy Yourself*; it is not grounds to make that original album co-billed.

## New taxonomy tokens (add before validation)

| family | new token | named evidence | caution |
|---|---|---|---|
| genre | `bubblegum` | AllMusic (Kylie); Classic Pop (Enjoy Yourself) | Retain literal wording, do not automatically map to `bubblegumpop` |
| genre | `yeye` | Album of the Year tags *Enjoy Yourself* `Yé-yé` | **Low strength; reviewer to verify.** Last in genre order, texture scope |
| genre | `swingbeat` | Classic Pop retrospective of *Rhythm of Love* | Specific limited album tracks; not synonym-replaced by `newjackswing` |
| production | `linn9000` | MusicBrainz identifies `A. Linn (Linn 9000)` on *Kylie* tracks | Exact Linn 9000, **not** LinnDrum; historical alias/metadata caveat below |

No new instrument tokens this phase. The first four rows use only verified source-supported instrument terms. No user-facing `synth`/`brass` deductions from keyboard-brass sounds or broad genres.

## ARTIST INFLUENCES (career-level only; **Phase 01**)

- **Prince** — Kylie explicitly lists him among her influences growing up, **Vogue**, *Kylie Minogue's Magic Moment* (2024): https://www.vogue.com/article/kylie-minogue-tension-ii-interview
- **ABBA** — same first-person Kylie answer, **Vogue** (2024): https://www.vogue.com/article/kylie-minogue-tension-ii-interview
- **Olivia Newton-John**, specifically her *Grease* era — same first-person Kylie answer, **Vogue** (2024): https://www.vogue.com/article/kylie-minogue-tension-ii-interview
- **Donna Summer** — Kylie singles out *Bad Girls* as a childhood favourite and says Summer deeply affected her, **Vogue** (2024): https://www.vogue.com/article/kylie-minogue-tension-ii-interview
- **Madonna**, **Whitney Houston**, **Cyndi Lauper**, **Fleetwood Mac** — Kylie describes dancing/dressing up to these artists in her bedroom; **ELLE**, *Kylie Minogue on Making New Album Disco and Dream Collaborators* (2020): https://www.elle.com/culture/music/a34631960/kylie-minogue-disco-interview/ . **Lower-strength career inspiration** than the four expressly labelled influences in Vogue; no claim that these directly shaped an album in this phase.

**Album-specific exception:** *Rhythm of Love* has narrowly sourced track influences **D-Mob** (*Better the Devil You Know* draws on *C'mon and Get My Love*) and **Deee-Lite** (*Step Back in Time*), as explicitly reported by specialist journal **Classic Pop**: https://www.classicpopmag.com/features/kylie-minogue-albums-2/ . These two alone appear in that album's `influenced_by`. Stephen Bray's work with Madonna is **not** proof that Madonna inspired *Rhythm of Love*.

## Source limitations / release and credit caveats

1. Date values come from first releases, preferably Apple Music and physical edition catalogues. AllMusic occasionally surfaces later territorial releases as its primary displayed date; that is **not** the composition or original-album date.
2. *Kylie* (1988): `A. Linn` is a playful/ambiguous percussion credit; MusicBrainz resolves it specifically as **Linn 9000** on original *Kylie* recordings (e.g. *Je ne sais pas pourquoi*). `linn9000` goes into the production column; `drummachine` in instruments. The **LinnDrum** is a distinct machine and must not be substituted.
3. *Enjoy Yourself*: its original ten-track UK album excludes *Especially for You*. Original bonus/territorial and later deluxe configurations include it. A Linn 9000 credit can be found on the duet, but **this is insufficient to establish that exact model on the original ten-track edition**; production intentionally remains blank pending better session evidence. `drummachine` is still supported by AllMusic's album credit *A. Linn — Drums*, but model-level specificity is withheld.
4. *Rhythm of Love*: prefer the **original 1990 PWL CD sleeve** rather than aggregators that copy all players/producers onto every song. Original liner exception: *The World Still Turns* produced Michael Jay; *One Boy Girl* Keith Cohen; *Count the Days* and *Rhythm of Love* Bray/Cohen; other tracks Stock/Aitken/Waterman. Note a **credit conflict**: Qobuz track metadata sometimes repeats Stephen Bray, Michael Jay and Keith Cohen across unrelated songs. No extra Ian Curnow production credit has been established for the original 11 tracks: Curnow's keyboard performance does not make him a producer.
5. *Let's Get to It*: Matt Aitken is a **writer** on earlier-composed material, but not a producer of this 1991 album; principal producers were Mike Stock and Pete Waterman. *Word Is Out* has horn personnel; *If You Were With Me Now* has a Paul Riser string arrangement; those are track-scoped despite being in album-wide instrumentation. Apple Music identifies a **2 Unlimited sample** on *I Guess I Like It Like That*; a sample is production technique, not a documented artist influence.
6. **Genre uncertainty**: AOTY genre tags (`yeye`, `divahouse`, `freestyle`, `ukstreetsoul`, etc.) are weaker classifications than Apple/AllMusic/specialist critical discussion. They are included under the user rule to preserve all **named** genres, placed late where they are partial and marked in per-genre evidence. Track-only house/disco/electro/ballad tags are not presented as whole-album dominance.
7. `sounds_like` represents independent similarity candidates, **not documented influences**. All full-row confidence values are **medium** because genre granularity and synth model identification differ between evidence providers; empty production/influence cells are deliberate abstentions.

## Next phase (phase 02: 4 original studio albums)

1. *Kylie Minogue* (1994) — new ID `kylie-kylieminogue`.
2. *Impossible Princess* (1997) — new ID `kylie-impossibleprincess`.
3. *Light Years* (2000) — **existing** ID `k-lightyears`.
4. *Fever* (2001) — **existing** ID `k-fever`.

Then phase 03: *Body Language* (2003), *X* (2007), *Aphrodite* (2010). Phase 04: *Kiss Me Once* (2014), candidate collaborative EP(s) (2014–15, only after release audit), *Kylie Christmas* (2015); phase limits may be adjusted to keep 3–4 releases per ZIP. Later phases cover *Golden* (2018), *DISCO* (2020), *Tension* (2023), *Tension II* (2024).

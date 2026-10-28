# Rick Astley — Phase 01 / Claude import

**Scope:** four new studio album rows, in chronological order. No live records, remixes, greatest-hits collections or compilation albums. No previous rows exist in the currently consulted repository branch. Artist id proposed: `rickastley` (letters only; absent from `catalog.ts` and `seed.ts` when checked 28 October 2026).

## Import this phase only

| Album ID | Title | Year | Type |
|---|---|---:|---|
| `rickastley-wheneveryouneedsomebody` | Whenever You Need Somebody | 1987 | studio |
| `rickastley-holdmeinyourarms` | Hold Me in Your Arms | 1988 | studio |
| `rickastley-free` | Free | 1991 | studio |
| `rickastley-bodysoul` | Body & Soul | 1993 | studio |

**Catalogue action:** add the artist and all four albums to `catalog.ts` before validator runs; current base has none. No co-billed albums in this phase. None skipped as already described. All CSV rows have 27 columns, status `draft`, and only this phase's new albums.

**New tokens:** none needed for genres, instruments or production. Genres are canonical Fandome identifiers. Secondary genres based on sonic interpretation are identified as such in the genre-evidence and research notes.

## ARTIST INFLUENCES (not tied automatically to albums)

In the [2026 Ticketmaster UK interview](https://discover.ticketmaster.co.uk/interview/rick-astley-my-greatest-hits-76895/), Astley identifies **Bill Withers, Al Green, Luther Vandross and Marvin Gaye** as Black American vocal models that taught him to sing. This is direct artist testimony about his technique and broader development. The interview does not say these individuals specifically shaped the writing/production of any one of the four albums, so the per-album `influenced_by` fields are left empty. The inclusion of Michael McDonald as a guest singer on *Free* is not evidence of influence.

## Credit, format and release caveats

- *Whenever You Need Somebody*: mostly produced by Stock Aitken Waterman, while Phil Harding and Ian Curnow produce tracks 5 and 7 and Daize Washbourn produces tracks 8 and 9; the album includes both dance songs and a Nat King Cole-associated standard, which remains a cover, not proof of influence. Fairlight programming, Linn 9000, guitars and keyboards supported by credits.
- *Hold Me in Your Arms*: multiple production teams across different tracks; original 1988 CD and LP credit evidence takes precedence over broad online album credit summaries.
- *Free*: produced by Rick Astley with Gary Stevenson, NOT by Rob Fisher (who is documented as a co-writer and pianist). Elton John is a guest piano player, and Michael McDonald is guest vocalist; neither is a producer or a documented album influence.
- *Body & Soul*: produced by Rick Astley and Gary Stevenson; Tom Lord-Alge is a mixer, not a producer. The ampersand in the title is intentional and the album ID collapses punctuation.

## Five other files

- `rickastley_phase01_rows_ONLY.csv` — 4 new rows only, exact 27-column import header.
- `rickastley_phase01_sources.csv` — source-to-album support claims, urls and strength.
- `rickastley_phase01_genre_evidence.csv` — every assigned genre, source and scope.
- `rickastley_phase01_evidence-notes.md` — numerical judgments, credits and disagreements.
- `rickastley_phase01_catalog-audit.csv` — all four albums to add before import.

**Next phase:** *Keep It Turned On* (released in 2001 in some markets, listed as 2002 by AllMusic; confirm original date), *Portrait* (2005), *50* (2016), and *Beautiful Life* (2018). The fifth later studio album *Are We There Yet?* (2023) may occupy a following phase. Compilation *The Best of Me* is excluded.


## Claude import note

- 4 rows imported; no new tokens. Catalogue: 9 studio albums 1987-2023.
- Free: Michael McDonald and The Doobie Brothers removed from sounds_like: McDonald sings on the album (a guest and his band). Kept on Body & Soul, where he does not appear.
- Artist influences: Bill Withers, Al Green, Luther Vandross, Marvin Gaye (the singers Astley says taught him to sing: a documented vocal model).
- Scene GB en 1980 pop,dance.
- Reception researched by Claude.

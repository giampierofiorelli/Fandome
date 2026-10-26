# KYLIE MINOGUE — Fandome Phase 03

Research: **26 October 2026**. Branch `descriptors` read-only. Artist ID: `kylie` per `seed.ts` and `scenes.ts`.

## This incremental ZIP

| Album ID (EXISTING in live seed) | Title | Original year | Type |
|---|---|---:|---|
| `kylie-bodylanguage` | Body Language | 2003 | studio |
| `kylie-x` | X | 2007 | studio |
| `kylie-aphrodite` | Aphrodite | 2010 | studio |

Exactly **three** brand-new descriptor rows (27 columns each), only these releases. Six files: this handoff, `kylie_phase03_rows_ONLY.csv`, `kylie_phase03_sources.csv`, `kylie_phase03_genre_evidence.csv`, `kylie_phase03_evidence-notes.md`, and `kylie_phase03_catalog-audit.csv`. No live, compilation, re-recorded or remix albums. **Do not re-import Phases 01 or 02.**

## Catalogue findings — crucial fresh change

On 26 Oct 2026 GitHub [src/data/seed.ts](https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/seed.ts) *already* includes **all three** IDs exactly as given above, plus later Kylie album IDs. Unlike the earlier Phase 02 snapshot, they require **NO catalogue additions** at import. The current committed [docs/descriptors/kylie.csv](https://github.com/giampierofiorelli/Fandome/blob/descriptors/docs/descriptors/kylie.csv) contains ONLY the first four studio albums from **1988–1991**; Phase 02 was separately delivered as a ZIP but is not yet present in this branch at the time of this check. **Import phase 02 separately first**, then append Phase 03 only once. Audit records have `existing` status. Avoid duplicate alias IDs (no `k-bodylanguage`, etc).

## Co-billed album audit

None of these three albums is billed jointly. *Aphrodite* collaborators and original *X* guest/bonus versions are not separate jointly billed releases. No `coBilled.ts` additions for this phase.

## New taxonomy (add before descriptor validation)

| Token | Type | Sourced usage | Decision |
|---|---|---|---|
| `cosmicdisco` | genre | Tom Ewing explicitly writes “cosmic disco” in [Pitchfork's *X* review](https://pitchfork.com/reviews/albums/10947-x/); some tracks | **NEW** (do not remap to `spacedisco`) |
| `poptrance` | genre | Uncut calls *Aphrodite* “pop-trance” in [Metacritic's critical digest](https://www.metacritic.com/music/aphrodite/kylie-minogue); weak partial | **NEW**, lower-strength; remove only after explicit human review |

No new instruments or production tokens needed. Current guide includes `digitalediting` and `protools`, which are used only with supporting credits. `synthpop` is **not** interchangeable with `electropop`. The source-by-genre file lists every source and scope (whole album / some tracks / texture). Do not coerce `poptrance` into `trance`; the review uses a different term.

## ARTIST INFLUENCES

This heading is populated in **Phase 01 only**. Do not duplicate it here. Per-album influences: *Body Language* qualifies **Prince** and **Kool & the Gang** from [The Guardian (Helen Pidd, 2003)](https://www.theguardian.com/music/2003/nov/14/popandrock.shopping4); these are explicitly described as inspirations for that record. For *X* and *Aphrodite* the reviewers primarily offer **sonic comparisons**, not documented musical influence: `influenced_by` is intentionally empty. A sample, a featured singer, a writer or a producer's prior work is not in itself musical influence.

## Producer-credit caveats

- *Body Language*: Johnny Douglas is additional-only on several tracks; Baby Ash additional-only on *I Feel for You*. Do **not** import them based on those roles; both are included because they fully produced **other** original tracks. `Sunnyroads` credit is preserved without speculative splitting into members.
- *X*: The [Parlophone press release](https://www.webwire.com/ViewPressRel.asp?aId=50353) is the contemporaneous release authority for 13-song edition. Qobuz also names Karen Poole as a producer on tracks with Kurstin, and Paul Harris/Julian Peake on *Stars*; the row includes those credited names, with no duplication of Cutfather/Mich Hansen. Conflicting metadata credits 'Matt Prisne' as co-producer for *Cosmic*, while Parlophone says **Eg White alone**; omitted pending verification. Exclude later bonus tracks and MIMS-featured remake. Input name `Richard "Biff" Stannard` is a single person.
- *Aphrodite*: Stuart Price is *both* executive producer and a credited individual track producer. He qualifies on track evidence, not executive title alone. Others include actual co-producers on separate songs; do not promote Jake Shears, Tim Rice-Oxley, Pete Hoffman or Mima Stilwell from writing/performance/engineering credits.

## Scope and uncertainty

- This phase excludes album-format misreadings: an R&B-informed title track does not make all *Aphrodite* R&B, and a vocoder effect on *Speakerphone* does not imply all *X* vocals are vocoded.
- *Body Language* is less club-driven than *Fever*: groove 3 reflects reviewers' descriptions, not headline genre tags.
- Hardware models are deliberately omitted without original-session evidence. No TR-series or Auto-Tune speculation.
- Secondary, weak tags are marked by `scope` and `evidence_strength`; overall row `confidence` concerns the well-corroborated core sound and recording identity.

## Next phase — Phase 04

1. *Kiss Me Once* (2014) — `kylie-kissmeonce` (already in seed)
2. *Kylie Christmas* (2015) — `kylie-kyliechristmas` (already in seed; original studio Christmas album, not a compilation)
3. *Golden* (2018) — `kylie-golden` (already in seed)

These are three fresh studio releases; no live, compilation or retrospective rows. The 2012 *Abbey Road Sessions* re-recordings are omitted because they duplicate older songs, not new studio compositions.

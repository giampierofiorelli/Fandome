# CLAUDE_IMPORT.md — Bebe Rexha, Phase 01 (incremental)

Research cut-off: **2026-10-26**. Source branch: `descriptors` (read only). **Do not import into GitHub from this package without running your own validator/tests.**

## Phase 01 contents — FOUR NEW ROWS ONLY

| ID | Title | Original year | Type |
|---|---|---:|---|
| `beberexha-idontwannagrowup` | I Don't Wanna Grow Up | 2015 | ep |
| `beberexha-allyourfaultpt1` | All Your Fault, Pt. 1 | 2017 | ep |
| `beberexha-allyourfaultpt2` | All Your Fault, Pt. 2 | 2017 | ep |
| `beberexha-expectations` | Expectations | 2018 | studio |

## IMPORTANT: Missing artist and albums from catalog.ts

**`Bebe Rexha` was not found in `src/data/catalog.ts`** on the `descriptors` branch. No existing artist ID could therefore be retrieved. Proposed normalized artist ID: `beberexha`. **Claude must ADD the artist first** (or reconcile with a canonical ID introduced subsequently) and ADD each of the seven original releases enumerated in `beberexha_phase01_catalog-audit.csv`. Do not claim existing album IDs or silently insert without the artist entry. Suggested set through October 2026:

- I Don't Wanna Grow Up (2015, ep)
- All Your Fault, Pt. 1 (2017, ep)
- All Your Fault, Pt. 2 (2017, ep)
- Expectations (2018, studio)
- Better Mistakes (2021, studio)
- Bebe (2023, studio)
- Dirty Blonde (2026, studio; artist's official **DIRTY BLONDE** styling)

Discography verification: [MusicBrainz](https://musicbrainz.org/artist/db8fad3a-e131-47a1-8782-c2ee93708cdd); [Apple Music 2026 release](https://music.apple.com/us/album/dirty-blonde/1891886535), June 12 2026.

**Do not add**: `All Your Fault, Pts. 1–2` (2024 combined reissue/compilation of the two original 2017 EPs); singles/remix bundles; guest collaborations that are not co-primary album releases. Four studio albums and three *substantive original* EPs are the complete selected phase plan. EPs include new work and describe early stylistic evolution; they are not live/retrospective compilations.

## Co-billed albums

**None in this phase.** Guest track appearances do not become co-billed albums: G-Eazy, Ty Dolla $ign, Lil Wayne, Gucci Mane, 2 Chainz, Kranium, Florida Georgia Line and Quavo retain track-level feature status. `Meant to Be` is featured on both Pt. 2 and Expectations: not a new album or separate collaborator LP. No changes proposed for `coBilled.ts`.

## New tokens for scenes.ts / instruments.ts / production.ts

**None.** All emitted genre, instrument and production tokens already appear in the provided allowed lists. Especially, 808-flavored drums do not justify a `tr808` hardware tag. All recorded instruments and production techniques have release-specific credits or credible contemporary descriptions in the evidence notes.

## ARTIST INFLUENCES (Phase 01 ONLY; direct artist statements)

These are **artist-level background influences**, NOT automatically copied into each album's `influenced_by` column. The only phase-specific album link substantiated is **No Doubt → Expectations**, explicitly described in the album interview.

| Named artist | First-person evidence | Direct source |
|---|---|---|
| No Doubt | Rexha says she grew up listening to the band; separately cites its influence on Expectations guitar choices | https://hashtaglegend.com/post/bebe-rexha-no-broken-hearts-hey-mama-david-guetta-martin-garrix-nicki-minaj ; https://www.nme.com/blogs/nme-radar/bebe-rexha-interview-expectations-2018-2323620 |
| The Cranberries | Names them among the music she grew up on | https://hashtaglegend.com/post/bebe-rexha-no-broken-hearts-hey-mama-david-guetta-martin-garrix-nicki-minaj |
| Destiny's Child | Says their independence-focused songs influenced her and she loves that writing | https://hashtaglegend.com/post/bebe-rexha-no-broken-hearts-hey-mama-david-guetta-martin-garrix-nicki-minaj |
| Kanye West | Praises his musical risk-taking as a musical influence | https://hashtaglegend.com/post/bebe-rexha-no-broken-hearts-hey-mama-david-guetta-martin-garrix-nicki-minaj |
| Lauryn Hill | Names The Miseducation of Lauryn Hill and its candid lyrics among formative listening | https://hashtaglegend.com/post/bebe-rexha-no-broken-hearts-hey-mama-david-guetta-martin-garrix-nicki-minaj |
| Queen | Cites the band's influence when directly asked about rock inspirations for Better Mistakes | https://www.grammy.com/news/2021-bebe-rexha-better-mistakes-travis-barker-interview/ |
| The Killers | Cites as a rock favorite in the same artist interview | https://www.grammy.com/news/2021-bebe-rexha-better-mistakes-travis-barker-interview/ |
| Twenty One Pilots | Names as a more recent rock touchstone | https://www.grammy.com/news/2021-bebe-rexha-better-mistakes-travis-barker-interview/ |
| Aerosmith | Names as a formative rock-listening act | https://www.grammy.com/news/2021-bebe-rexha-better-mistakes-travis-barker-interview/ |
| Nirvana | Names as a formative rock-listening act | https://www.grammy.com/news/2021-bebe-rexha-better-mistakes-travis-barker-interview/ |
| Led Zeppelin | Names as a formative rock-listening act | https://www.grammy.com/news/2021-bebe-rexha-better-mistakes-travis-barker-interview/ |
| Red Hot Chili Peppers | Specifically says she is obsessed with their music | https://www.grammy.com/news/2021-bebe-rexha-better-mistakes-travis-barker-interview/ |

General mentions of country acts in the Official Charts interview (Taylor Swift, Shania Twain, Dixie Chicks) describe Rexha's **limited prior exposure to country**, not definitive influences on one of these albums. Exclude from the influenced_by fields.

## Caveats

1. The *original* two EP titles are `All Your Fault, Pt. 1` and `All Your Fault, Pt. 2` per Apple Music, including comma punctuation. Normalized IDs discard punctuation.
2. The album shares previously released `I Got You` with Pt. 1 and `Meant to Be` with Pt. 2. **Do not** duplicate track/album entities or omit the original studio LP.
3. **Pt. 2 producer discrepancy:** Willshire receives main Producer credit for `Meant to Be` from Apple Music and the primary Qobuz edition; an alternate Qobuz page calls the role Additional Producer. This package follows the two main-Producer credits and flags the conflict in evidence notes for Claude.
4. The credited artist Bebe Rexha should not be treated as album producer solely because she co-wrote or sang a track. Additional, executive, vocal-only, engineering and mixing credits are excluded.
5. `influenced_by` requires direct evidence about *this* release; do not convert sampled music, featured acts, guest work or style analogy into influence claims.
6. `gospel` on I Don't Wanna Grow Up and `trap` on All Your Fault Pt. 1 are strictly **track texture / some tracks**, not full EP identities. `contemporaryrnb` on Pt. 2 is based on lower-strength metadata and flagged accordingly.
7. Confidence is for the **whole descriptor row** and drops where genre sources or detailed sonic verification are thinner.

## Next phase — Phase 02 (THREE album-only rows)

1. **Better Mistakes (2021)** — studio
2. **Bebe (2023)** — studio
3. **DIRTY BLONDE / Dirty Blonde (2026)** — studio (released **June 12, 2026**)

One ZIP; only these new rows and associated research files. No 2015–18 rows repeated and no new ARTIST INFLUENCES section (phase 01 only).

## Files in ZIP

- `beberexha_phase01_rows_ONLY.csv`: **27 fields, 4 new rows only**
- `beberexha_phase01_sources.csv`: album-linked evidence URLs and role for each
- `beberexha_phase01_genre_evidence.csv`: individual genre, source ID, scope
- `beberexha_phase01_evidence-notes.md`: rating reasoning, provenance, credit and criticism caveats
- `beberexha_phase01_catalog-audit.csv`: artist-dependent additions (phase 01 and planned phase 02)
- `CLAUDE_IMPORT.md` (this file)

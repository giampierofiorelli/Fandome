# Massive Attack — Fandome Phase 01 | Claude import instructions

## Scope, date and repository
- Reference: `giampierofiorelli/Fandome`, branch `descriptors` (read-only), checked 2026-10-25.
- Found artist ID: **`massiveattack`** in `src/data/catalog.ts`.
- `docs/descriptors/massiveattack.csv` did not exist on the checked branch; there are no earlier descriptor rows to exclude.
- Four incremental rows, in chronological order, in **`massiveattack_phase01_rows_ONLY.csv`**. Never append a previous phase to these phase CSV files.
- `src/data/coBilled.ts` did not contain No Protection as of check.

## Phase 01 rows
1. `massiveattack-bluelines` — **Blue Lines** (1991, studio) — already in catalog.
2. `massiveattack-protection` — **Protection** (1994, studio) — already in catalog.
3. `massiveattack-noprotection` — **No Protection** (1995, remix) — **add to catalog**. Exact original credit: **Massive Attack v Mad Professor**; label metadata also uses 'Massive Attack / Mad Professor'. Preserve the release credit in co-billed metadata. If Mad Professor lacks a Fandome room, store `{ credit: 'Massive Attack v Mad Professor' }` without a `with` entry until the room exists.
4. `massiveattack-mezzanine` — **Mezzanine** (1998, studio) — already in catalog.

## New album to add to catalog
- **No Protection** | 1995 | `remix` | `massiveattack-noprotection` | joint credit Massive Attack v Mad Professor.
- This is a fully reconfigured eight-track dub album, not the original album with bonus mixes. Its inclusion is justified by the Mad Professor collaboration and substantial independent critical reception (AllMusic, Robert Christgau).
- Preserve the existing five studio entries/IDs; do not add duplicate entries or change year on existing albums.

## New genre tokens for Claude to import
- `jazzfusion`
- `raregroove`
- `ukhiphop`
- `ukstreetsoul`
- `alternativepoprock`
- `industrialrock`
- Register each new token in `src/data/scenes.ts`, `src/data/genreFamilies.ts`, and any corresponding genre validator/token list; **do not map an exact named genre to a different existing genre**.
- These additions are often secondary: jazz fusion and rare groove (Blue Lines) are cited source traditions, UK hip hop and UK street soul describe facets of Protection, alternative pop/rock is an AllMusic classification, while illbient (already supported) / industrial rock are Mezzanine's secondary tags.

## Instruments and production
- Every instrument/production token in the rows exists in the checked repository's `src/data/instruments.ts` or `src/data/production.ts`: **no new instrument or production tokens requested**.
- The catalog's instrument list includes `guitar` without an electric/acoustic qualifier. This is used when credit sources specify only 'guitar'.
- Avoid imputing hardware: Blue Lines has evidence for DJ decks, Ensoniq EPS and a Yamaha drum machine, but neither the exact Yamaha drum-machine model nor an EPS-specific token should be invented. `sampler`, `synth`, `drummachine`, `turntables` are supported; the production list only encodes documented sampling.
- No Protection's producer list distinguishes original Massive Attack / Nellee Hooper production from Mad Professor's credited *additional production/remix*. It does **not** assert that he composed or produced all original Protection tracks.
- Mezzanine production and instrumental contributions are explicitly sourced (Neil Davidge, studio musicians, album-credited instruments, harpsichord in Teardrop).

## Caveats and decision points
- Trip-hop is a **retrospective** term for Blue Lines; it was not a contemporary 1991 release label. Some critics emphasise hip-hop rather than trip-hop; both genre evidence lines are provided.
- **No Protection**: MusicBrainz confirms the original **1995** publication and the joint credit, while a 1996 US release exists. Do not use the 1996 reissue as the original year.
- **Mezzanine**: reissues vary in track sequencing, listing and dates; use the original 1998 work, not later editions.
- Alternative Pop/Rock from AllMusic becomes proposed `alternativepoprock` rather than silently reusing `adultalternativepoprock`.
- `influenced_by` includes only supported album-specific influences; guests, producer colleagues and sampled songwriters are not automatically treated as influencers.
- `sounds_like` consists of comparative editorial judgments, not documented influences.
- Genre evidence explicitly distinguishes album-wide categories, individual-track exceptions and sonic textures. The first genre in each row receives highest matching weight.
- Numeric scales are cross-artist editorial judgments anchored in the guide; they are **not measured facts**, as the evidence notes explain. All statuses are `draft`.

## Files
1. `CLAUDE_IMPORT.md` (this file)
2. `massiveattack_phase01_rows_ONLY.csv` — **27 columns**, four new phase rows.
3. `massiveattack_phase01_sources.csv` — 31 per-album source references.
4. `massiveattack_phase01_genre_evidence.csv` — 56 one-per-genre evidence entries.
5. `massiveattack_phase01_evidence-notes.md` — album-specific judgments, credit tracing and disagreement.
6. `massiveattack_phase01_catalog-audit.csv` — existing vs new item audit.

## Recommended next phase (02)
1. **100th Window** (2003; studio; exists in catalog).
2. **Danny the Dog** (2004; soundtrack, also marketed as *Unleashed* in the US; review exact original billing/version, add to catalog if selected).
3. **Heligoland** (2010; studio; exists in catalog).
4. **Ritual Spirit** (2016; EP featuring returning Tricky; add if included after its critical and collaboration evidence is checked).

A following phase may assess *Eutopia* (2020), the 2024 *ceasefire* joint EP and other genuinely significant collaborations, but should not add routine singles or compilations. `

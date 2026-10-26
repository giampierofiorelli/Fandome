# CLAUDE_IMPORT — Pulp Phase 02 (1995–2025)

**Read-only research**: no repository edits; four album descriptor rows (`draft`) plus supporting evidence, exact 27-column schema. Phase 01 *It* (1983), *Freaks* (1987), *Separations* (1992), *His 'n' Hers* (1994) are **not** repeated here.

## Import dependency and exact IDs
At branch `descriptors` checked 26 Oct 2026, `src/data/catalog.ts` **does not yet contain artist `pulp`** and `docs/descriptors/pulp.csv` is 404. This may reflect a pending Phase 01 import. **First import phase 01 if absent, then append only phase 02 to the same artist without replacing earlier rows**. `pulp` is the proposed ID, not one already in catalog.

Add these originals to `catalog.ts` (unless already added in the meantime):
- `['Different Class', 1995]` ⇒ `pulp-differentclass`
- `['This Is Hardcore', 1998]` ⇒ `pulp-thisishardcore`
- `['We Love Life', 2001]` ⇒ `pulp-welovelife`
- `['More', 2025]` ⇒ `pulp-more`

The 4 IDs follow the current `slug` scheme; no co-billed releases apply. These are studio albums and complete Pulp's eight **studio** albums through 26 Oct 2026 when joined with Phase 01. `More` is original 2025 album, not the 2026 *Live!* release.

## Token review before validation
**Genres:** `postbritpop` is a proposed new type (source spells *Post-Britpop*) from lower-confidence metadata on *We Love Life* and *More*. Treat as *review-required*, not an endorsed new global genre. All other assigned genre tokens were in `src/data/scenes.ts` at check time. No genre was silently converted from a different exact term; track-only elements (show tunes, lounge, jazz, trip-hop, disco, northern soul and chanson) are explicitly scoped in genre evidence. `synthpop` on *We Love Life* is a disputed lower-weight tag; Pitchfork stresses its reduced synth presence.

**Production tokens needing verification/registration** (all exactly spelled lower-case alphanumeric):
- `rolandsh09` — Roland SH-09 synth (*Different Class*)
- `rolandjuno6` — Roland Juno-6 (*Different Class*)
- `ensoniqasr10` — Ensoniq ASR-10 sampler (*Different Class*)
- `synare` — credited Synare electronic percussion device (*Different Class*), included as a production-device token; presence is session-level, not claimed on every song
- `micromoog` — Moog MicroMoog (*Different Class*)
- `korgtridentii` — Korg Trident II (*Different Class*; already proposed in Phase 01 and may now exist in repo)
- `rolandvp330` — Roland Vocoder Plus VP-330 (*Different Class*) ; **do not substitute `rolandsvc350`** (a different model)
- Existing `minimoog`, `overdubbing`, `stringarrangements`, `programming`, `sampling` must be checked against `production.ts` but are not generic guesses.
No new instrument tokens required. *More*: do not invent studio hardware/software not documented in primary credits.

## Producers vs other credits
- *Different Class* (1995): **Chris Thomas**, NOT engineer David Nicholas or string arranger Anne Dudley.
- *This Is Hardcore* (1998): **Chris Thomas**, NOT assistant/programmers (e.g. Olle Romo or Matthew Vaughan). Neneh Cherry is a guest vocalist on a track, not co-billed.
- *We Love Life* (2001): **Scott Walker** and **Peter Walsh** (explicit co-producer); do NOT include Chris Thomas, who worked on abandoned sessions.
- *More* (2025): **James Ford**. Arranger Richard Jones, Richard Hawley, Jason Buckle and Eno family are not album producer credits.

## Discrepancies requiring editorial review
- *This Is Hardcore*: some 1998 US editions add *Like a Friend*; do not merge extras into original UK tracklist.
- *Different Class*: 1995 original release. Anne Dudley's orchestral work is track-specific.
- *More*: the album has older compositional ideas but consists of newly recorded 2024 sessions released 2025. Do not treat the historical 1997 demos as the 2025 master.
- `influenced_by` names documentary/critic-supported precedents only. Similarity links are editorial estimates, not statements of documented influence.
- `postbritpop` and weaker metadata tags should not be promoted unreviewed; accept current rows as `draft`.

## Files and order
1. `pulp_phase02_catalog-audit.csv` — artist and all four album additions required
2. `pulp_phase02_rows_ONLY.csv` — 27-column descriptor rows
3. `pulp_phase02_sources.csv` — source URLs and support
4. `pulp_phase02_genre_evidence.csv` — one row per genre, exact wording and scope
5. `pulp_phase02_evidence-notes.md` — rationale and uncertainty
6. `CLAUDE_IMPORT.md` — this import memo

Run the Fandome descriptor validator after combining with Phase 01, and confirm the real catalog IDs against the current branch. No Phase 03 is necessary for the studio discography through October 2026.

# CLAUDE IMPORT — Rondò Veneziano Phase 03 (1988–1991)

**Incremental phase ONLY: 4 fresh studio rows / 27 columns.** Six files in this ZIP. Do not re-import Phase 01 or Phase 02. No code or scripts are included.

## Phase contents / catalogue additions

| album_id | canonical original album | year | type | catalogue action |
|---|---|---|---|---|
| `rondoveneziano-concerto` | Concerto | 1988 | studio | ADD |
| `rondoveneziano-masquerade` | Masquerade | 1989 | studio | ADD |
| `rondoveneziano-barocco` | Barocco | 1990 | studio | ADD |
| `rondoveneziano-prestige` | Prestige | 1991 | studio | ADD |

**GitHub status at creation (branch `descriptors`, 2026-10-26):** `rondoveneziano` **already exists** in `src/data/catalog.ts`, containing ONLY the 1980–1983 Phase 01 albums; `docs/descriptors/rondoveneziano.csv` also exists with exactly those 4 Phase 01 rows. Phase 02 1984–1987 was delivered to owner but not yet merged at this check; do not assume its absence means duplication is required. Add ONLY these four Phase 03 albums from this ZIP. If Claude has meanwhile imported Phase 02, still import only Phase 03.

## Edition and ID safeguards

- *Concerto* (1988, original 12 tracks): 1988 export *Poesia di Venezia* is not new album; it swaps/augments tracks, notably includes *Rêverie* and *Gondole sulla laguna*. Original *Controdanze* constructs different dances in left/right stereo; this is **not** licensed to tag `holophonics` (a specific binaural method).
- *Masquerade* (1989, original 10 tracks): *Armonie* and *Visioni di Venezia* are international variants; *Visioni* adds *Segreto* and *Velieri lontani*, and *Armonie* reuses a *Concerto* piece. Do not treat as distinct studio albums. Published 1989: month/day inconsistencies in secondary metadata, avoid exact dates unless checked against a contemporaneous announcement.
- *Barocco* (November 1990, original 12 tracks): other versions *Musica... Fantasia*, *Mystère*, later *Capriccio veneziano*. The original 1990 pressing calls track 8 **Divertissement**; today's official site says **Estate**. The Italian Wiki correct header says 1990 but English prose contains a contradictory accidental '1989'; prioritize label and official album timeline (1990).
- *Prestige* (1991): original Italian Baby 590 132-2 and official website have **12 tracks**; German *Magica melodia* has **13 tracks** and different selection; Belgium *Interlude* shares core 12. Italian Wiki infobox claims 13 tracks despite printing an original 12-track list; prefer actual pressing. DO NOT use export-only *Magica melodia* or *Incontro* as proof for the 1991 original album's sound.

## New tokens

- Genre: `baroque`, **only if Phase 02 has not already created it**. Original *Barocco* CD is explicitly tagged 'Baroque' as distinct from `baroquepop`. In genre families set parent `classical`; ensure typed Genre token.
- Production: **`digitalrecording`**, new. Source: *Barocco* 1990 original CD 590 125-2, SPARS code DDD; denotes digitally recorded/mixed/mastered, but does NOT identify `digitaltape`, a console, a synth model or any specific software. Human import reviewer should validate whether SPARS DDD suffices under project source policy; remove token and clear cell if source considered too weak.
- Instruments: no new Phase 03 tokens. `acousticguitar` covers album-specific credited *classical guitar*, not a model. **Do not** import the suggested Phase 02 `frenchhorn` instrument again.
- None of the Phase 03 albums is co-billed; no `coBilled.ts` entry. Pavesi is writer/co-composer/arranger but **not** a co-producer based on available credits.

## Artist influences

Artist-wide influences belong ONLY to Phase 01 and must not be repeated here. No specifically documented musical artist influence on these four original albums was established. Thus `influenced_by` is blank throughout; sound-alike editorial comparisons are exclusively `sounds_like`. A later critic compares a 1991 song to Jean-Michel Jarre; **Jarre is a resemblance, not documented influence**. Vivaldi/Bach references for the artist globally do not automatically qualify in an album's influenced_by.

## Credited producer / instrumentation / technique

The only named production credit inserted is **Gian Piero Reverberi**. Do not elevate Ivano Pavesi (composer/arranger), Jesús Eduardo Álvarez Herrera (guitar), Harry Thumann (engineer), Klaus Strazicky (engineer/mixer), or corporate entities P.E.M. GmbH / Cleo Music AG from other credit types into individual co-producers.

Album-specific evidence supports: *Concerto* orchestra/keyboard/synth/classical guitar; *Masquerade* orchestra/keyboard/synth/classical guitar; *Barocco* orchestra, conservatively (no detailed original personnel list retrieved); *Prestige* orchestra/piano/keyboard. **Do not** infer a Moog, DX7, tape medium, drum machine, or generic string section instrument from the band's reputation. Digital-recording process only for *Barocco* where SPARS DDD is documented.

Most mood/tempo/polish/groove scales are intentionally blank when album-specific criticism and session data do not support whole-record scores. Only *Concerto* has detailed movement/rhythm analysis and a provisional set of bounded values; the critic's observations are not BPM measurements. `confidence=medium` is per row, including the uncertainty on granular styles and individual instrument lists.

## Pending historic issue / subsequent phase

The **1990** three-part *The Genius of Vivaldi, Mozart, Beethoven* is an adaptation album, not a regional alias of *Barocco*; whether it merits a landmark additional descriptor requires a separate original-release audit. It was already flagged at Phase 02, so this phase does not retroactively insert it in the four-row chronology. The 1985 *Not Quite Jerusalem* soundtrack also remains subject to landmark assessment. Source: official discography and pressing annotations.

**Proposed Phase 04 (next four original records):** *Le stagioni di Venezia* (1992); *Il mago di Venezia* (1994); *Sinfonia di Natale* (1995); *Marco Polo* (1997). Reassess the exceptional 1990 three-disc adaptation before finalising catalog completeness; do not silently omit it from the long-term audit.

## Validator instructions

1. Verify `docs/descriptors/rondoveneziano.csv` and catalogue immediately before import; append ONLY Phase 03 new rows.
2. Reconcile any `baroque` Phase 02 import and its `genreFamilies.ts` mapping without duplicating.
3. Add new `digitalrecording` production token (or abstain, see above).
4. Run `npx vite-node scripts/validate-descriptors.ts` and test suite.
5. Import source and evidence files as separate Phase 03 records, preserving per-track versus album-wide distinctions and uncertain reissue metadata.

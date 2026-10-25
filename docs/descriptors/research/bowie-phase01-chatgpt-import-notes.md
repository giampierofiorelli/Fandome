# CLAUDE_IMPORT — David Bowie, Fandome Phase 01

**Scope:** 4 new and strictly incremental descriptor rows, as at 25 October 2026. Artist ID `bowie` is already in `src/data/catalog.ts`. Existing `docs/descriptors/bowie.csv` was **not found** at the time of research. Do not alter the preceding artist imports or overwrite content added concurrently. `status=draft` on every row.

## Exact phase rows

- `bowie-davidbowie` — **David Bowie** (1967; studio). First self-titled album, Deram UK 14-track original.
- `bowie-davidbowie1969` — **David Bowie (1969)** (1969; studio). Second eponymous LP, distinguished by year according to the duplicate-title rule. Originally UK *David Bowie*, US *Man of Words/Man of Music*; first titled *Space Oddity* on its **1972** RCA reissue. **Do not add a second separate *Space Oddity* album.**
- `bowie-themanwhosoldtheworld` — **The Man Who Sold the World** (1970; studio). US first release November 1970; UK released April 1971.
- `bowie-hunkydory` — **Hunky Dory** (1971; studio). Already present in catalogue; preserve ID.

## Catalogue edits (three additions)

`David Bowie` (1967; studio), `David Bowie (1969)` (1969; studio), `The Man Who Sold the World` (1970; studio). Existing `Hunky Dory` 1971 unchanged. **Title collision:** the 1969 title needs a year suffix; if catalogue currently has a differently named alias, reconcile *before import*. All four IDs comply with the existing catalogue slug rule. Detailed audit in `bowie_phase01_catalog-audit.csv`.

## New tokens required before validation

**Genres** (not currently in the branch genre list): `musichall` (1967, music hall); `progfolk` (1969, Pitchfork 'prog-folk'); `psychfolk` (1969, Pitchfork 'psych-folk' on a track); `psychedelicfolkrock` (1970, AllMusic phrase 'psychedelic folk-rock'). Append each to `Genre` and assign parent families deliberately (suggestions: musichall -> traditionalpop; progfolk -> folk and prog; psychfolk -> folk and psychedelia; psychedelicfolkrock -> folkrock and psychedelicrock). See source-anchored genre evidence, including scope. Do not map these phrases to near-sounding existing genres without editorial review.

**Instruments:** `stylophone` (1969/1970, named Dubreq Stylophone in 1969 recording credits), `kalimba` (1969, Bowie Bible personnel). Both are documented album-specific sources. Existing `harpsichord` is used for Rick Wakeman's **electric harpsichord**; if enforcing exact subtypes, review whether a separate `electricharpsichord` token should be added later (not used here).

**Production:** None new. `moog` and `distortion` are existing tokens, used for 1970 only; `stringarrangements` and `overdubbing` are existing tokens on *Hunky Dory*.

**Co-billed:** No album jointly billed as a standalone co-artist release in this phase; `src/data/coBilled.ts` needs no edit.

## Caveats for import and review

- `David Bowie` 1967: prioritize original UK 14-track release; US release omits two songs. AllMusic retrospectively labels psychedelic pop but characterizes sound primarily as music hall, English showtunes and baroque pop. Instrumental personnel is not comprehensive; lack of 1967 production *technique* tokens is intentional.
- `David Bowie (1969)`: original title is not *Space Oddity* until 1972. The song `Space Oddity` has **Gus Dudgeon** as producer; the other LP material is attributed to **Tony Visconti**. Stylophone and kalimba are original 1969 credits, not inferred from style. Folk/experimental styles sometimes conflict in contemporaneous/retrospective reviews. The record's `landmark=0` does not diminish the significance of the title-track single.
- `The Man Who Sold the World`: 1970 first US date, not April 1971 first UK date. Moog credited to Ralph Mace; the early proto-glam tag is retrospective and has texture scope. Do not extrapolate electronic composition from one synthesizer credit.
- `Hunky Dory`: co-produced David Bowie and Ken Scott (original official album credit). Do **not** credit Mick Ronson as a producer: he was a guitarist, arranger and conductor. String arrangements are documented; additional engineering techniques are kept conservative. Velvet Underground/Lou Reed influence on `Queen Bitch` is stated directly by Bowie, unlike generic sonic resemblance.
- Sources file URLs are public URLs confirmed by search, not invented. Critical genre lists may be broader than most of a record; `genre_evidence.csv` flags track-only and texture scopes.
- Scale numbers are editorial assessments explained in evidence notes, not measurements; empty production remains preferable to invented hardware.

## Next phase — Phase 02

1. **The Rise and Fall of Ziggy Stardust and the Spiders from Mars** (1972; studio; catalogue exists)
2. **Aladdin Sane** (1973; studio; must add)
3. **Pin Ups** (1973; studio; must add; covers album, not a compilation)
4. **Diamond Dogs** (1974; studio; must add)

Phase 02 must contain only its four new album rows.

## Archive members

`CLAUDE_IMPORT.md`, `bowie_phase01_rows_ONLY.csv`, `bowie_phase01_sources.csv`, `bowie_phase01_genre_evidence.csv`, `bowie_phase01_evidence-notes.md`, `bowie_phase01_catalog-audit.csv`.

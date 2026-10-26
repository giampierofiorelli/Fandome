# Fandome — Billie Eilish — Phase 02 (26 October 2026)

## Contents — **strictly incremental**

1. `billie-guitarsongs` — *Guitar Songs* (2022), `ep` (original 2 tracks: "TV", "The 30th"). **Not a live album**; the Manchester crowd heard on "TV" is one part of a new song.
2. `billie-hitmehardandsoft` — *Hit Me Hard and Soft* (2024), `studio` (original 10 tracks).

The 27-column rows CSV contains **only these two albums**, neither of which appears in the Phase 01 descriptor rows. All have `status=draft`. The sources, genre evidence, detailed reasoning and audit files are restricted to Phase 02.

## Catalogue add / keep

- **ADD**: *Guitar Songs* (2022, `ep`), id `billie-guitarsongs`. Apple Music groups the project as a two-track **Single** but numerous contemporary sources (Guardian, Pitchfork, FADER, MusicBrainz) identify it as an **EP**. For Fandome, prefer `ep` to represent the distinct original 2022 acoustic project; source and format caveat recorded in audit.
- **KEEP EXACTLY**: *Hit Me Hard and Soft* (2024), id `billie-hitmehardandsoft` (generated from `catalog.ts` using the current original title). Do not create a second capitalized variant or duplicate.

Prior Phase 01 has `billie-dontsmileatme`, `billie-whenweallfallasleepwheredowego`, `billie-happierthanever`. Import Phase 01 before Phase 02; do not overwrite earlier rows.

## Co-billed albums

**None.** Both releases are billed to Billie Eilish alone. FINNEAS is producer/songwriter and is not a co-billed performing artist on these album titles. Collaboration tracks or featured appearances elsewhere are not albums co-billed to Billie.

## Genre, instrument and production tokens to add

- **NEW in this Phase 02:** none. All genre, instrument and production tokens in these two rows correspond to existing `scenes.ts`, `instruments.ts`, `production.ts`, **except** `bedroompop`.
- **Cross-phase dependency**: `bedroompop` was already explicitly reported as a **new** genre in Phase 01 (`CLAUDE_IMPORT.md`), and is used in this 2024 album's genre evidence as a *secondary texture* only. Claude must add the token to `scenes.ts` and `genreFamilies.ts` **once** when importing Phase 01 (or at Phase 02 import if Phase 01 is not yet applied). Do not create conflicting spellings.
- `indietronica` and `indieelectronic`, `electropop` and `synthpop` are deliberately kept **separate** because independent sources use the separate labels.
- `songwriter` follows Fandome's existing broad Singer-Songwriter normalization. `reggae` and `ska` for the 2024 album are **track-level textures**, not a claim that the album is predominantly reggae/ska.

## ARTIST INFLUENCES

**Phase 01 only.** This section was supplied in the initial Billie Eilish ZIP and must not be repeated in later phases. Album-specific 2024 album construction influences are traced to a Rolling Stone **artist/producer interview** and explained in detail in the new evidence notes; they are not automatically sonic similarity tags.

## Source and credit cautions

- `FINNEAS` is the credited **producer** of every original song in this phase, not necessarily its only sonic contributor. Billie is credited as engineer/editor and has described hands-on creative contributions to the 2024 album, but primary credits do **not** establish her as an album co-producer. In particular, mixers Jon Castelli, Aron Forbes, Rob Kinelski, mastering engineers, string arrangers and orchestration personnel are not producers.
- `Guitar Songs` has credited electric instruments/programming alongside predominantly acoustic songs: reported in the instrument list as **secondary**, not a genre inference. `concertrecording` captures only the Manchester crowd on "TV".
- No unsupported particular make/model of a synth/drum machine. The 2024 release's **Attacca string quartet** should not be labeled a full orchestra.
- Textures/rave references in a few 2024 songs are preserved in `genre_evidence` with their **limited scope**. AOTY and MusicBrainz genre tags are partly community/aggregated and weaker than traceable first-hand credits or attributable critics.
- For 2024, Rolling Stone explicitly identifies the five artists in `influenced_by` as **models for cohesive album-world construction**. Their precise influence concerns the architecture of a whole album, **not verified sonic imitation**. If importing schema demands only *sonic* influence, abstain and keep the evidence in the notes; never infer sonic lineage from a model of cohesion.
- Slight release-title casing differences between uppercase artwork, Apple/MusicBrainz and catalogue are not new albums. Maintain Fandome title and id.

## Release scope and stop condition / Phase 03

**No Phase 03 planned:** as of 26 October 2026, the verified original studio-album chronology is 2019, 2021, 2024; original standout EPs are 2017 and 2022. Together with Phase 01, these five releases complete the selected Billie Eilish original-album/important-EP set. The 2026 tour live album and other recordings of previous material are deliberately excluded, as requested. Create another phase only for an independently verified **new original studio album** or genuinely landmark collaborative album released subsequently.

## Files and file-level checks

- `billie_phase02_rows_ONLY.csv` — header with **27** fields, **2** album rows.
- `billie_phase02_sources.csv` — source provenance with accessible canonical provider/article URLs; source strengths explicit.
- `billie_phase02_genre_evidence.csv` — **one line per genre per album**, source, scope, rationale.
- `billie_phase02_evidence-notes.md` — per-album explanation of instruments, production, eight scales, interpretive judgments and contrary critics.
- `billie_phase02_catalog-audit.csv` — add/keep decisions restricted to the two albums.
- `CLAUDE_IMPORT.md` — this import contract.

Validator to run **after** Claude adds the EP and the previously flagged `bedroompop` token to the catalogue / genre list. No executable scripts in the ZIP.

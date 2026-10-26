# Bowie Phase 03 — CLAUDE IMPORT (incremental)

Branch examined (read-only): `descriptors` on 2026-10-25. Artist id: `bowie`.
Only four **new** album descriptor rows; do not re-import or replace Phase 01/02.

## Rows in order

- `bowie-youngamericans` — *Young Americans* (1975; studio; **ADD** catalogue row)
- `bowie-stationtostation` — *Station to Station* (1976; studio; catalogue exists)
- `bowie-low` — *Low* (1977; studio; catalogue exists)
- `bowie-heroes` — *“Heroes”* (1977; studio; catalogue exists; preserve curly quotes in title)

## Contents

1. `CLAUDE_IMPORT.md`
2. `bowie_phase03_rows_ONLY.csv` — 27 canonical columns; exactly four new draft rows.
3. `bowie_phase03_sources.csv` — credits, criticism, producer interviews and URLs.
4. `bowie_phase03_genre_evidence.csv` — one distinct row for every proposed album/genre pair, with source and scope.
5. `bowie_phase03_evidence-notes.md` — reasoned assessments, recording instruments, technique boundaries, disputes.
6. `bowie_phase03_catalog-audit.csv` — pre-import status.

## Token additions (check branch prior to inserting)

**Genre:** `plasticsoul` (Bowie’s name for *Young Americans*; Guardian), `avantfunk` (Pitchfork description of *Low* rhythm section). They are not in the available `Genre` union. Preserve the exact names; update `src/data/scenes.ts` and `src/data/genreFamilies.ts`. Suggested families: `plasticsoul: ['blueeyedsoul','soul']` and `avantfunk: ['funk','experimental']`; Claude should verify no circular or missing-parent dependency.

**Instrument:** `koto` (Bowie on “Moss Garden” of *“Heroes”*, MusicBrainz credits). Add to `src/data/instruments.ts`.

**Production:** `eventideh910` (named Eventide H910 harmonizer used on *Low*), `emssynthiaks` (synth used on *Low*/*“Heroes”*; distinct model from existing `emsvcs3`), `noisegating` (three microphone vocal ambience on “Heroes”), `roomambience` (captured Hansa room sound / room-as-echo). Add these to `src/data/production.ts` before running validation. The generic existing `harmonizer` token is also used for *Low*. Make no automatic equivalence between EMS Synthi AKS and EMS VCS3.

## Caveats and review requirements

- `Young Americans`: primary Bowie site credits Tony Visconti for the main album, Bowie and Harry Maslin for “Across the Universe” and “Fame”. Some track-level databases also add Harry Maslin to other titles; store named producers without asserting a uniform track division. `liverecording` = majority of original Sigma rhythm tracks, not every overdub. Vocal tape punch-ins attested for “Right”.
- `Station to Station`: producer = Bowie and Harry Maslin only. Neu! and Kraftwerk are documented influences (2025 Bowie estate article). `onetake` applies to selected vocal tracks (“Wild Is the Wind”/“Golden Years”), not the entire LP. No retrospective surround remixes are treated as 1976 production.
- `Low`: Bowie/Visconti produced; Brian Eno is a crucial credited musician and collaborator but **not** credited as album producer. Eventide H910 affects drum timbres. Ambient descriptors are strongest on side two; *Low* is not wholly ambient. The bonus tracks of the 1991 reissue are excluded. `emssynthiaks` specifically attested; do not map it to VCS3. MusicTech names ARP 2600, but other historical equipment research disputes the exact ARP model; Claude should adjudicate `arp2600` before merging.
- `“Heroes”`: guitar overdubs by Fripp; Brian Eno did not receive producer credit. Multi-distance gated vocals are **title track only**. Sound On Sound’s Visconti account says Eventide Harmonizer was **not used in recording the title track**; do not add `eventideh910` to this album just because it appeared on *Low*. Koto is one track (“Moss Garden”). French/German alternate language recordings are not treated as the album’s primary language (`en`).
- `sounds_like` is editorial sonic comparison **not a claim of documented influence**. `influenced_by` excludes collaborators, producers and speculative references.
- Three legacy catalogue IDs are preserved; in particular the official title is “Heroes” **with printed quotation marks**.
- All album scales are reasoned dataset judgments, not measurements. Unknown production machines should remain blank rather than being inferred from 1970s style.

## Next phase: Phase 04 (four new rows only)

*Lodger* (1979), *Scary Monsters (and Super Creeps)* (1980), *Let’s Dance* (1983), *Tonight* (1984). Avoid live/reissue duplications; confirm prior imported descriptors before generating rows.

For Claude: merge these four rows only, add missing catalogue album/tokens, run `npx vite-node scripts/validate-descriptors.ts` and existing tests. Do not overwrite prior phases. Source evidence and critical distinctions live in evidence-notes.

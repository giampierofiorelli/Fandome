# CLAUDE IMPORT — Janet Jackson Phase 02

Research date **2026-10-26**. GitHub branch `descriptors` read-only: guide, genre families, instruments, production, catalog, co-billed entries, existing descriptors, validator. One **incremental** phase, no Phase 01 repeats. Four new studio album rows with exact 27-column header; `draft` status.

## New rows in this phase

| album_id | Title | Year | Type | Fandome catalog |
|---|---|---:|---|---|
| `janet-janet` | janet. | 1993 | studio | Existing, listed as `Janet` without period |
| `janet-thevelvetrope` | The Velvet Rope | 1997 | studio | Existing |
| `janet-allforyou` | All for You | 2001 | studio | Existing |
| `janet-damitajo` | Damita Jo | 2004 | studio | **MISSING — add** |

## Add to `catalog.ts` before import

- `['Damita Jo', 2004]` under Janet Jackson (`janet`), type `studio`, calculated id **`janet-damitajo`**. All four have published original recordings before the research date.
- No other additions for this phase. Do not add 1995 greatest hits *Design of a Decade* or 1995 *janet. Remixed* as studio albums or double-count reissued/deluxe tracks. These collections contain new remixes of old material, so are not supplied as descriptors in this chronological studio sequence.

## Co-billed original albums

**None.** Guest stars Chuck D, Q-Tip, Joni Mitchell, Vanessa-Mae, Carly Simon, Kanye West and others are not jointly credited album artists. No `coBilled.ts` edit is indicated.

## New genre/instrument/production tokens

**None necessary in Phase 02**: every token in rows is already in the repository guide and in `scenes.ts`, `instruments.ts`, or `production.ts`. Historical 'proto-footwork' as described by Pitchfork is represented conservatively as `footwork`, **texture only**, and this qualification must survive import.

## Artist influences

Artist-wide influences were delivered in Phase 01; **no repeat** in Phase 02. `sounds_like` lists are the researcher's non-source-exclusive sonic comparisons; `influenced_by` is deliberately blank unless a qualified source states the link to the specific record, without relying on samples, covers or guests. Do not populate it from `sounds_like`.

## Import order and precautions

1. Merge `janet_phase02_rows_ONLY.csv` after Phase 01 or existing Janet rows. **Only four new lines in this file**.
2. Add *Damita Jo* to catalog; verify actual generated `seed.ts` album ID matches expected string.
3. `janet.` album title ends in period. The catalog calls it `Janet`, giving ID `janet-janet`; preserve the catalogue ID as written.
4. Exact original album recording only; do not treat 2022 *Velvet Rope* deluxe remixes as original production or include compilation/live records.
5. In *janet.*, producer Jellybean Johnson is credited on *What'll I Do*, not an album-wide architect. In *Velvet Rope*, René Elizondo Jr. is executive producer/writer, not standard producer. In *Damita Jo*, Bobby Ross Avila and Iz Avila have track **co-producer** credits, and both are included; Kanye West is also credited producer, not merely a guest rapper. The entity `Roc The World` is literally marked `Producer` in label-store credits; Claude should resolve or retain the billed identity, **not** assume it means Jay-Z.
6. Avoid claims of particular drum machines/DAWs on these albums: no corroborating album-specific source establishes exact hardware.
7. Genre evidence explicitly marks local or texture classifications; primary styles are first in row.
8. Recheck `docs/descriptors/janet.csv` immediately before importing; absent at initial audit, but collaborator imports may change repository later.

## Files contained

- `CLAUDE_IMPORT.md`
- `janet_phase02_rows_ONLY.csv`
- `janet_phase02_sources.csv`
- `janet_phase02_genre_evidence.csv`
- `janet_phase02_evidence-notes.md`
- `janet_phase02_catalog-audit.csv`

## Next phase — Phase 03 (three released studio albums)

1. *20 Y.O.* (2006)
2. *Discipline* (2008)
3. *Unbreakable* (2015)

No live albums, best-of compilations, or unreleased 2026 projects. Phase 03 will be three rows because only three later studio albums had been released by **26 October 2026**.

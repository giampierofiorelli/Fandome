# CLAUDE IMPORT — Oasis / Phase 01 (read-only research packet)

**Repository**: `giampierofiorelli/Fandome`, branch `descriptors` (checked 26 October 2026). No GitHub edits made. All four albums are already present in `src/data/catalog.ts`; `docs/descriptors/oasis.csv` did **not** exist when checked.

## Import these four NEW 27-column rows
1. `oasis-definitelymaybe` — *Definitely Maybe* (1994), studio
2. `oasis-whatsthestorymorningglory` — *(What’s the Story) Morning Glory?* (1995), studio
3. `oasis-beherenow` — *Be Here Now* (1997), studio
4. `oasis-standingontheshoulderofgiants` — *Standing on the Shoulder of Giants* (2000), studio

No catalog additions required. Do not add another artist room: ID `oasis` already exists. No co-billed albums in this phase; no `coBilled.ts` edits.

## File contents
- `oasis_phase01_rows_ONLY.csv`: only four additions, unchanged 27-field schema.
- `oasis_phase01_sources.csv`: one traceable bibliography row per album–source pair.
- `oasis_phase01_genre_evidence.csv`: each assigned genre has source, scope and evidence strength.
- `oasis_phase01_evidence-notes.md`: per-album independent judgments, caveats and provenance.
- `oasis_phase01_catalog-audit.csv`: catalogue presence and import actions.

## New tokens to register / review before validation
- **Genre**: `britishtradrock` — *British Trad Rock*, a named AllMusic style for this album set; do **not** silently merge with `rock`, as the guide requires source-exact genres.
- **Instrument**: `tambourine` — individually named on *Morning Glory?* track credits.
- **Instrument**: `electricsitar` — Mark Coyle's electric sitar on *Standing on the Shoulder of Giants*; unlike acoustic `sitar`.
- **Production**: `ebow` — E-Bow sustaining guitar device explicitly credited on *Morning Glory?*, proposed under sonic production techniques rather than as an instrument.

`minimoog`, `sampling`, `protools`, `wallofsound`, `overdubbing`, `analogtape`, `programming`, and `stringarrangements` are already available on the inspected branch.

## Producer and identity safeguards
- *Definitely Maybe*: original sleeve credits Noel Gallagher and Mark Coyle (principal producers), Owen Morris (additional production and mixing), and Dave Batchelor on the released *Slide Away*. The official site calls all four producers. Do not conflate engineers with producers.
- *Morning Glory*: Noel Gallagher / Owen Morris. Tony McCarroll is on *Some Might Say*, Alan White is the principal album drummer.
- *Be Here Now*: Noel Gallagher / Owen Morris. Nick Brine = recording engineer, Mike Marsh = mastering engineer, Nick Ingman = string arranger (not album producers).
- *Standing on the Shoulder of Giants*: Noel Gallagher / Mark 'Spike' Stent. Jan 'Stan' Kybert = programmer/Pro Tools operator, not producer in official album billing. Note Gem Archer and Andy Bell joined after sessions, and not on original album performances.

## Sonic evidence caveats
- Original recordings, not 2014 deluxe extra sessions or 2024 remixes.
- No definitive brand assignment for guitar amplifiers/pedals on first 3 albums; only documented techniques.
- E-Bow and Minimoog not to be misclassified as synthpop; much of the catalog remains acoustic/electric rock.
- `psychedelia` *Be Here Now* is **track-scoped** (*Magic Pie*), `bigbeat` and `electronica` 2000 are **textures**, while `psychedelicpop` has stronger album-level critical support.
- `tapeeffects` intentionally omitted on 1997/2000: original credits mention backwards sounds/guitar but not necessarily literal magnetic tape reversal.

## Next phase, keep strict incrementality
Research *Heathen Chemistry* (2002), *Don't Believe the Truth* (2005), and *Dig Out Your Soul* (2008). Separately consider *The Masterplan* (1998, important original B-sides compilation), placed chronologically rather than passed off as a fourth studio record. Seven core Oasis studio albums through October 2026 (the official label sometimes loosely describes eight records when including compilations/other formats). All four current entries are new; never repeat them in Phase 02.

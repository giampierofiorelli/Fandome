# CLAUDE IMPORT — Red Hot Chili Peppers, Phase 02

**Incremental only; researched 27 October 2026.** This ZIP contains 6 files and 3 new album rows, each with exactly 27 columns; do not add Phase 01 rows again. All values `status=draft`.

## Prerequisites / current catalogue state

The supplied `descriptors` branch's `src/data/catalog.ts` and `src/data/seed.ts` did **not** contain any Red Hot Chili Peppers artist entry when originally checked in Phase 01; a read-only recheck for this phase again found no matching entry. `docs/descriptors/rhcp.csv` still was not present. **`rhcp` is the proposed ID from Phase 01**, not an independently confirmed pre-existing Fandome artist id. Register artist under `rhcp` (unless changed in another parallel import) and the missing album ids in seed/catalog before validator runs. **If Claude has already imported Phase 01 on another branch**, reuse that artist id and do not recreate existing records.

## Phase 02 rows (and catalogue additions)

| id | title | year | type | catalogue status |
|---|---|---:|---|---|
| `rhcp-bloodsugarsexmagik` | Blood Sugar Sex Magik | 1991 | studio | add unless Phase 01 audit already imported |
| `rhcp-onehotminute` | One Hot Minute | 1995 | studio | add unless Phase 01 audit already imported |
| `rhcp-californication` | Californication | 1999 | studio | add unless Phase 01 audit already imported |

**No co-billed albums** in Phase 02; `coBilled.ts` need not change.

## Genre / instrument / production token changes

- New tokens **in this ZIP**: none. In particular, `raprock` was already proposed in **Phase 01**, not newly discovered here; do not add it twice. It does not exist in the checked `scenes.ts` on this branch yet, so import Phase 01's token migration before validator; add its `genreFamilies.ts` parent and allowed-list entry there and in the validator.
- `pfunk`, another Phase 01 new genre token, likewise needs to be imported if not yet done (not used in these three new rows).
- Instrument `jawharp`: check whether `instruments.ts` includes `jawharp` on Claude's branch. This user-supplied instrument list did **not** mention it, but the live guide does. If missing in the actual set, **add `jawharp` as a new instrument token** before validator; the sourced BSSM performance is Peter Weiss on jaw harp ('Give It Away'). Do not replace with `harmonica` (different instrument).
- Other instrument and production tokens in the three descriptor rows should already be in the live vocabularies. No brand/model values are inserted without album-specific sourcing.

## Important evidence / role distinctions

1. Producer of all three albums is **Rick Rubin** alone. **Brendan O'Brien** is BSSM engineer/mixer and keyboard player; **Dave Sardy** is One Hot Minute engineer/mixer; **Jim Scott** is Californication engineer/mixer; **Vlado Meller** mastered Californication. No co-production conflation. Source rows include liner-derived credits.
2. For *Blood Sugar Sex Magik*, recording-console guitar distortion and wah pedal are directly documented; the presence of a Mellotron on two songs is supported by credits. The outside take of Robert Johnson's *They're Red Hot* is a cover, not evidence to list Robert Johnson as a musical influence.
3. *One Hot Minute* credits **digital editing** specifically, though its instrumentation remains overwhelmingly band-based. The `Gang of Four` influence is a contemporary critic's *track-specific* assessment of 'One Big Mob', not a global band influence.
4. *Californication* has an original CD master noted for extreme loudness and distortion (Chad Smith directly acknowledges this); **do not infer a compressor model or software**. Three track-specific influenced_by entries are supported by a 1999 Frusciante interview: Public Enemy, Yes ('Siberian Khatru', original album *Close to the Edge*), Cream. They are not guest performers or covers.
5. The official band's album page and AllMusic give Californication's original release as **8 June 1999**; some collector archives use **7 June 1999**, possibly territory-specific. Only the year is required in descriptor.
6. Reviewer/genre-distribution disagreement for One Hot Minute, and the difference between all-album genre-taxonomy labels vs specific-song styles for Californication, are explained in evidence notes.

## ARTIST INFLUENCES

**Not repeated.** Phase 01's `CLAUDE_IMPORT.md` already documents artist-wide named influences with direct sources. This phase contains only album-specific `influenced_by` fields supported in `rhcp_phase02_sources.csv` and the evidence notes.

## Full catalogue audit and forthcoming phases

The attached `rhcp_phase02_catalog-audit.csv` lists the **entire original 13-studio-album catalogue** (1984–2022) to help Claude add records; it is **not** a 13-row descriptor import. Four earliest records were delivered in Phase 01; this phase delivers exactly three new descriptors. Every album remains `add` relative to the read-only branch; Claude should reconcile with actual working branch before applying to avoid duplicates.

**Next: Phase 03**, three new studio records, in order: *By the Way* (2002), *Stadium Arcadium* (2006), *I'm with You* (2011). No compilation or live album. Only Phase 03's rows in the next ZIP.

## Attached files

- `CLAUDE_IMPORT.md` (this document)
- `rhcp_phase02_rows_ONLY.csv` — exactly three incremental rows, exact 27-column header
- `rhcp_phase02_sources.csv` — source and evidence strength for every album
- `rhcp_phase02_genre_evidence.csv` — one line for every genre in every row; scope whole album/some tracks
- `rhcp_phase02_evidence-notes.md` — technical/lyrical/scalar reasoning, influence and critic disagreements
- `rhcp_phase02_catalog-audit.csv` — full 13-studio-release audit, Phase 02 status and next-phase plan

All original years are on the [official RHCP music discography](https://redhotchilipeppers.com/music/). **Do not create descriptor rows for compilations.**


## Claude import note (Oct 2026)
- One Hot Minute: Gang of Four moved from `influenced_by` to `sounds_like` (a critic's description, owner rule). Californication's influences stay (Frusciante, Guitar Player 1999).

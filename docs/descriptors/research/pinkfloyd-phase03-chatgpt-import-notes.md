# CLAUDE_IMPORT — Pink Floyd Phase 03

Branch `descriptors` was read **without modifying the repository**. Import the incremental data; do not re-import earlier phases.

## Deliverables

- `pinkfloyd_phase03_rows_ONLY.csv` — exact 27-column header; 4 album rows, all `draft`.
- `pinkfloyd_phase03_sources.csv` — source list, source types, strength, URLs and supports.
- `pinkfloyd_phase03_genre_evidence.csv` — genre provenance *and scope*, with no artificial one-to-one album genre assumptions.
- `pinkfloyd_phase03_evidence-notes.md` — detailed methodological justification and caveats.
- `pinkfloyd_phase03_catalog-audit.csv` — exact existing/new catalog items.

## Album IDs and catalog additions

Existing: `pinkfloyd-wishyouwerehere` — Wish You Were Here (1975), `pinkfloyd-animals` — Animals (1977), `pinkfloyd-thewall` — The Wall (1979).

**Add:** `pinkfloyd-thefinalcut` — The Final Cut (1983), a studio album; not a Roger Waters solo record, even though Waters is the dominant writer and lead vocalist.

## Token additions, only if not already present

Instrument tokens:
- `glassharp`: glass harp, credited for *Wish You Were Here* (`musicbrainz.org/release/485aee7f-95cb-3078-a5d0-b99763f53295`).
- `fretlessbass`: fretless electric bass, credited for *Animals*, `Pigs (Three Different Ones)` (`musicbrainz.org/release/c9a3ed0a-8090-4d04-b56e-05a0bb92a0fb`).

Production tokens:
- `minimoog`: Minimoog synthesizer, credited on both *Wish You Were Here* and *Animals* in MusicBrainz. Distinguish from broad `moog` token as a specific machine.
- `arpstringensemble`: ARP String Ensemble/string synthesizer documented on *Wish You Were Here* and *Animals*.
- `holophonics`: Zuccarelli Holophonics binaural spatial effects documented on *The Final Cut* (Louder history).

**New genre token:** `symphonicrock`, explicitly listed for *The Wall* by Album of the Year (https://www.albumoftheyear.org/album/4226-pink-floyd-the-wall.php). Existing `rockopera`, `prog`, `artrock`, `albumrock`, `bluesrock`, `spacerock`, `hardrock`, `disco`, `poprock`, `rock` cover the remaining source labels.

## Important import notes

1. The Wall: preserve **Bob Ezrin | David Gilmour | Roger Waters | James Guthrie**, where Guthrie is *co-producer*. Michael Kamen only arranged orchestrations and is not included in producer list here.
2. The Final Cut: producers **Roger Waters | James Guthrie | Michael Kamen**; Kamen co-production confirmed by his official estate.
3. Animals: `talkbox` and `vocoder` are distinct treatments, track-specified in supporting music credits.
4. Wish You Were Here: do not convert the abandoned Household Objects sessions into instrumentation/production on the final issued 1975 album.
5. Genre `disco` on The Wall is **track-scope**, not whole-album. Rock opera is an editorial album-level descriptor; AllMusic classifications have direct citations.
6. The Final Cut: exclude later-edition bonus track `When the Tigers Broke Free` from original 1983 analysis.
7. `influenced_by` on The Wall names `Chic` and `Alice Cooper` only for tightly scoped documented track-production ideas. Do not recast as all-album sonic similarity.
8. Notes field is the only one constrained to 15 words; all four satisfy this.
9. Run `scripts/validate-descriptors.ts` and check album IDs, scene and instrument/production vocabulary once added. Validation in live GitHub is not claimed.

## Phase 04 — NEXT, not included here

1. A Momentary Lapse of Reason (1987)
2. The Division Bell (1994)
3. The Endless River (2014)

Potential additional landmark live/compilation/remix releases require separately verified criteria; do not auto-import them with Phase 04.

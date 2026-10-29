# CLAUDE IMPORT — Zucchero Phase 03

**Research date:** 29 October 2026. **Artist id:** `zucchero`. GitHub `descriptors` branch was read on this date. **STRICTLY INCREMENTAL:** exactly four new studio records, 1998–2010, no earlier phases' rows included. All described items are **released**; no future album assumed. Every new descriptor has 27 columns with `draft` status. Sources for genre assignments are mapped individually in `zucchero_phase03_genre_evidence.csv`.

## Album IDs and catalogue actions

| album_id | original title | year | type | catalogue status | action |
|---|---|---|---|---|---|
| `zucchero-bluesugar` | Bluesugar | 1998 | studio | MISSING | add original title/year |
| `zucchero-shake` | Shake | 2001 | studio | MISSING | add original title/year |
| `zucchero-fly` | Fly | 2006 | studio | MISSING | add original title/year |
| `zucchero-chocabeck` | Chocabeck | 2010 | studio | MISSING | add original title/year |

In `src/data/catalog.ts`, add these exact title/year tuples to the `zucchero` album list, after `Spirito DiVino` and before `Black Cat`:

```ts
['Bluesugar', 1998], ['Shake', 2001], ['Fly', 2006], ['Chocabeck', 2010]
```

**Other repository status important for importer:** As of the branch check, `docs/descriptors/zucchero.csv` **already exists** and includes **ONLY the four phase 01 albums** (`Un po' di Zucchero`, `Zucchero & The Randy Jackson Band`, `Rispetto`, `Blue’s`). Phase 02 (`Snack Bar Budapest`, `Oro incenso & birra`, `Miserere`, `Spirito DiVino`) **was not in that descriptor file**. Import phase 02 ZIP separately before or with phase 03; **append**, do not overwrite phase 01 or skip phase 02. In the phase 02 ZIP the *Snack Bar Budapest* addition was still missing in the catalogue. Phase 01 entries have already been catalogued and described; NEVER re-import duplicates.

## New genre tokens to approve or add

Checked `src/data/scenes.ts` in the `descriptors` branch:

- `modernelectricblues` — **NOT PRESENT**. AllMusic uses **Modern Electric Blues** for *Bluesugar* and *Chocabeck*. Already proposed by phase 02 for *Oro incenso & birra*, so **coordinate with phase 02**; one shared genre definition, parent `blues`.
- `louisianablues` — **NOT PRESENT**. Original 2001 Polydor *Shake* listing transcribed on Chartsurfer calls the record **Louisiana Blues**. Proposed parent `blues`. Original-label style, reasonable but broad.
- `politicalfolk` — **NOT PRESENT**. AllMusic catalogues *Bluesugar* and *Chocabeck* as **Political Folk**, but this tag is poorly grounded in the actual musical texture or a political-folk scene affiliation. Included **last and provisional** in proposed rows because guide says not to discard a named style; Claude should assess whether to approve or **remove these two tags with a documented rationale** instead of treating the metadata as authoritative.

No confirmed new **instrument** or **production** token for phase 03. `protools`, `moog`, `farfisa`, `digitalediting`, `programming`, `stringarrangements`, `hornarrangements` already exist. Check the phase 01 (`pianoblues`) and phase 02 (`synthaxe`) additions independently.

## Album edition and production warnings

1. **Bluesugar:** Exact official Italian title is *Bluesugar* (1998), not a second *Blue Sugar* English album. *Blu* in Italian is **not** written by Bono; Bono's lyrics belong to **Blue** on translated international editions. `producers=Corrado Rustici` is supported by Universal track metadata. Pro Tools/programming/string arrangements are documented for *Blue* specifically; a track-scoped instrument/technique may be listed in album descriptors but must be marked as such in the evidence file.
2. **Shake:** Original Polydor 2001 album production credited solely to **Corrado Rustici**; Zucchero is **additional producer**, so excluded from `producers` (per guide). The John Lee Hooker duet does not make the entire album co-billed and is not an artist influence just because he guests. Some 2002 versions have live bonus disc: skip live material.
3. **Fly:** Only **Don Was** as credited producer; Rockol contemporary interview places Hammond and analog-oriented arrangements in the foreground, not a claim that absolutely no digital tools ever touched the recording. A detailed LP transcription names programming in one cut and later digital editing. Do not import extra Procol Harum *A Salty Dog* cover from overseas CD as a separate album or evidence of original Italian music. `gospel` is **not included**: the original choir credit alone does not establish gospel genre for this record.
4. **Chocabeck:** Original Italian **11-track** vs international alternative track *Someone Else's Tears*; the official site web tracklist currently shows **both** versions in one 12-entry list, but label confirms substitution. Three producers **Don Was, Brendan O'Brien and Zucchero**. Describes one imagined Emilian Sunday from dawn till dusk. Main genres folk and folk-rock, not a generic upbeat blues album. Critical reviews praise maturity while a subset of listeners finds the sequencing slow.
5. **INFLUENCES:** `influenced_by` is empty on all rows because none of the retrieved evidence showed a musician explicitly cited as influencing **one of these particular albums**. Comparisons, a *cover*, a guest (Winwood/Hooker/Brian Wilson), a lyricist (Bono/Guccini), and songwriting inspirations are not sufficient. Global ARTIST INFLUENCES belonged to phase 01 and are not repeated.
6. **CO-BILLED:** No original album in this phase has a confirmed whole-album joint primary billing, thus **no `src/data/coBilled.ts` entries** to add. Song-level guests only.

## Review flags

- The AllMusic `politicalfolk` classification is especially weak. It should be kept only if Claude independently accepts the evidence; otherwise document and remove, and update genre evidence accordingly.
- A style listing for a reissue is not evidence of a *new original studio album*. Original chronology remains 1998, 2001, 2006, 2010.
- Vocal and eight 0–5 scales are editorial estimates; allow revision if a qualified second listener audits them. Original album inserts should settle instrument/producers conflicts.

## Next phase 04 (not included)

*La Sesión Cubana* (2012), *Black Cat* (2016), *D.O.C.* (2019), *Discover* (2021) — four studio releases, including a newly recorded covers-based album; no greatest-hits or live compilations. *Discover II* (2024) thereafter, if not already described. Dates and album status must be rechecked at start of next phase.

## File inventory

1. `zucchero_phase03_rows_ONLY.csv` — 27 columns, four incremental records.
2. `zucchero_phase03_sources.csv` — citation URLs and claim boundaries.
3. `zucchero_phase03_genre_evidence.csv` — one source and precise scope per selected genre.
4. `zucchero_phase03_evidence-notes.md` — reasons behind each notable choice and source disagreement.
5. `zucchero_phase03_catalog-audit.csv` — missing catalogue rows.
6. `CLAUDE_IMPORT.md` — importer instructions, pending vocabulary and next phase.

Please append/merge, add catalogue rows and reviewed genre tokens, then run the repository descriptor validator and tests. **This research did not edit GitHub.**

## Claude import note

- Added Bluesugar (1998), Shake (2001), Fly (2006) and Chocabeck (2010) to the catalogue, between Spirito DiVino and Black Cat.
- New genre tokens: `louisianablues` (parent blues), `politicalfolk` (parent folk). Political folk is kept, last, because AllMusic names it for both albums (owner's rule: every genre a source names goes in); it weighs little in last place.
- Producers: Zucchero dropped as self-credit (Chocabeck).
- sounds_like lists are editorial; checked against critics in the reception pass.

# CLAUDE IMPORT — Guns N’ Roses phase 01

**This ZIP is strictly incremental.** Import only four new CSV rows; do not replace or append rows from any other batch. Fandome branch `descriptors` was examined read-only as of **27 October 2026**; no existing `docs/descriptors/gnr.csv` found. The artist ID is `gnr`, not `gunsnroses`. Preserve catalogue IDs.

## Phase contents (4 new rows)

| Fandome album ID | Original title | Year | Type | Already in catalogue? |
| --- | --- | --- | --- | --- |
| `gnr-appetitefordestruction` | Appetite for Destruction | 1987 | studio | yes |
| `gnr-gnrlies` | G N’ R Lies | 1988 | studio | yes |
| `gnr-useyourillusioni` | Use Your Illusion I | 1991 | studio | yes |
| `gnr-useyourillusionii` | Use Your Illusion II | 1991 | studio | yes |

**Catalog additions needed in this phase:** none. Preserve the exact apostrophe/curly form and casing already in `catalog.ts` for G N’ R Lies. No new `CO_BILLED` entry (all four billed to Guns N’ Roses alone).

## Add missing later studio album to catalogue (phase 02)

| title | year | type | expected ID | Action |
| --- | --- | --- | --- | --- |
| The Spaghetti Incident? | 1993 | studio | `gnr-thespaghettiincident` | ADD TO `catalog.ts` **before** importing the future phase 02 row |

`Chinese Democracy` (2008) is already catalogued (`gnr-chinesedemocracy`). Next phase will describe these **two remaining studio albums**. The band's 1986 debut EP *Live ?!*@ Like a Suicide* is a landmark early issue, but its four masters were reused verbatim in the 1988 `G N’ R Lies` album: to avoid duplicating one recorded performance in recommendations, it appears in the catalog audit but gets no independent descriptor. This editorial exclusion is intentional. `Live Era ’87–’93` (1999) is not imported because no live exception was judged necessary. Other non-landmark singles/EPs and compilations are excluded.

## New genre / instrument / production tokens

- **NEW GENRE: `funkmetal`**. Supported **only** for the `Locomotive` groove on *Use Your Illusion II*. Explicit “funk-metal” in Tim Peacock’s uDiscover analysis: https://www.udiscovermusic.com/stories/guns-n-roses-use-your-illusion-review/ . Add this token to `src/data/scenes.ts`, set suitable parent genres in `src/data/genreFamilies.ts` (candidate `['funk','metal']`, subject to existing taxonomy), and update `scripts/validate-descriptors.ts` before validation. This is deliberately **not** replaced with `funkrock`. It is low priority, track-specific, so appears after the album’s main genres.
- **New instrument tokens:** none. In particular **`coralsitar`** and **`dobro`** are already accepted in Fandome. Use coralsitar for the specific electric Coral Sitar credited to Izzy on `Pretty Tied Up`.
- **New production tokens:** none. `sampling` / `overdubbing` / `synthprogramming` / `layeredvocals` / `liverecording` / `talkbox` all exist.

## ARTIST INFLUENCES (phase 01 only, artist-wide, sourced)

These reflect testimony **by members about formative music for their own work**; not an assertion that every named act shaped every album. Do not bulk-populate individual rows’ `influenced_by` field with this artist-wide list.

| Named influence | Who / basis | First-hand or direct source |
| --- | --- | --- |
| Aerosmith, especially *Rocks* (1976) | Slash calls *Rocks* the pivotal rock record that changed his approach | [Kerrang — Slash interview](https://www.kerrang.com/features/slash-guns-n-roses-were-a-gang-that-walked-into-a-room-like-you-dont-want-to-f-ck-with-us/) |
| Led Zeppelin | Slash specifically lists as a major musical influence | [zZounds — direct Slash interview](https://www.zzounds.com/lp/slash-interview) |
| The Rolling Stones | Slash calls them a central continuous influence, notably guitar interplay | [Hot Press — Slash interview](https://www.hotpress.com/culture/slash-weve-become-so-dependent-on-technology-to-make-records-that-weve-taken-all-of-that-personality-attitude-and-realism-out-22895445) |
| The Who | Slash lists them among his five major influences | [zZounds — direct Slash interview](https://www.zzounds.com/lp/slash-interview) |
| B.B. King | Slash names him as a major guitar influence | [zZounds — direct Slash interview](https://www.zzounds.com/lp/slash-interview) |
| The Yardbirds / The Kinks / The Beatles | Slash says family listening to British groups helped shape his guitar musical world | [Kerrang interview](https://www.kerrang.com/features/slash-guns-n-roses-were-a-gang-that-walked-into-a-room-like-you-dont-want-to-f-ck-with-us/); [The List interview via Blabbermouth](https://blabbermouth.net/news/slash-talks-about-musical-influences-staying-clean-and-sober) |
| AC/DC / Black Sabbath / Cheap Trick | Slash identifies these as formative teenage hard-rock acts | [The List interview via Blabbermouth](https://blabbermouth.net/news/slash-talks-about-musical-influences-staying-clean-and-sober) |
| Queen / Elton John | Axl's tastes and early group's combination, as described directly by Steven Adler; Elton specifically documented behind *November Rain* | [Adler interview via Blabbermouth](https://blabbermouth.net/news/steven-adler-reveals-secret-formula-to-guns-n-roses-success); [MusicRadar](https://www.musicradar.com/artists/how-axl-rose-took-inspiration-from-elton-john-to-create-a-classic-guns-n-roses-ballad-that-was-years-in-the-making) |
| The Stooges / New York Dolls / Sex Pistols | Adler identifies these as Izzy Stradlin’s formative influences | [Adler interview via Blabbermouth](https://blabbermouth.net/news/steven-adler-reveals-secret-formula-to-guns-n-roses-success) |
| Black Flag | Adler specifically identifies Duff McKagan’s hardcore-punk influence | [Adler interview via Blabbermouth](https://blabbermouth.net/news/steven-adler-reveals-secret-formula-to-guns-n-roses-success) |

## Credit, version and evidential caveats

1. `G N’ R Lies` is a hybrid. Its first four tracks were on a 1986 studio-recorded **faux-live** EP with overdubbed audience sound; the latter four were produced in new acoustic sessions. Do not tag this as a live or compilation album merely because it repackages the EP. First-half band / second-half Mike Clink producer credits may need direct sleeve verification, though MusicBrainz supports the split.
2. Mixing engineers **Bill Price** (Illusion pair) and **Steve Thompson / Michael Barbiero** (*Appetite*) are deliberately **not** named producers. Mike Clink **and Guns N’ Roses** are jointly credited for the Illusions per original release metadata.
3. *Use Your Illusion I* and *II* are separately issued albums with independent IDs though both released on 17 September 1991.
4. Do **not** import the 2022 `November Rain` live orchestra as an original 1991 orchestral performance. Original strings were principally synthesized/programmed, not an orchestra played in the 1991 recording.
5. `synthprogramming` on I is attributable to `Live and Let Die` and related 1991 arrangements; not a license to infer software or keyboards from the genre.
6. `talkbox` is identified as a **guitar** effect (`voice box`) on `Dust N’ Bones`, not an asserted vocal processing effect.
7. `coralsitar` rather than generic `sitar` for Izzy’s *Use Your Illusion II* `Pretty Tied Up` part; banjo on Breakdown.
8. `sampling` on II is track-scoped to dialogue and thunder in `Civil War`; `industrial` / `electronic` primarily to My World.
9. The 1988 `One in a Million` has racist and homophobic slurs; research notes report the controversies without quoting them, and the album descriptor does not frame this as endorsement.
10. Use the supplied songs/genre evidence with scopes; `influenced_by` is intentionally selective and blank on G N’ R Lies and II. Covers and guest features are not proof of influence.

## Next phase

**Phase 02 (final studio batch):** *The Spaghetti Incident?* (1993) and *Chinese Democracy* (2008). The second phase will contain **only those two new descriptor rows** and its own six-file ZIP; adding non-landmark releases merely to reach 3–4 rows would violate the release-selection rules.

## Contents of this archive

- `gnr_phase01_rows_ONLY.csv` — 4 new rows, exact 27-column schema.
- `gnr_phase01_sources.csv` — named working references with scope and evidence strength.
- `gnr_phase01_genre_evidence.csv` — one row per album/genre, song- vs LP-wide scope.
- `gnr_phase01_evidence-notes.md` — per-album grounded score rationale, instrumentation, production and disagreements.
- `gnr_phase01_catalog-audit.csv` — catalogue matches, missing later studio record and omitted duplicate editions.
- `CLAUDE_IMPORT.md` — import instructions, influence list and caveats.

Claude should import only after adding the `funkmetal` genre to all three appropriate validation/taxonomy locations. Every descriptor row is `draft`, not certified as second-reviewed.

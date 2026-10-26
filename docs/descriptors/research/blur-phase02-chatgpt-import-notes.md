# Claude import — Blur Phase 02

**Repository:** `giampierofiorelli/Fandome`, branch `descriptors`; reviewed read-only 26 October 2026. **Artist id:** `blur`. **Action:** append the 4 data rows in `blur_phase02_rows_ONLY.csv` to `docs/descriptors/blur.csv` (create if absent). **Never reimport Phase 01 album rows.** All entries are `draft` pending independent review.

## Albums (all already present in catalog.ts)

| exact album ID | album | year | add catalog? |
|---|---|---:|---|
| `blur-blur` | Blur | 1997 | no |
| `blur-13` | 13 | 1999 | no |
| `blur-thinktank` | Think Tank | 2003 | no |
| `blur-themagicwhip` | The Magic Whip | 2015 | no |

No `src/data/catalog.ts` additions and **no co-billed records**. At lookup `docs/descriptors/blur.csv` returned 404; if another phase was imported meanwhile, deduplicate by exact `album_id` before append. Keep existing Phase 01 rows untouched.

## Add new descriptor tokens, only if not now present

- **Instruments:** `gobletdrum` — goblet drum/darbuka, credited specifically on “Out of Time” from *Think Tank* in MusicBrainz release credits.
- **Production:** `microkorg` — MicroKorg synthesizer credited on “Lonesome Street” from *The Magic Whip* by Qobuz track-level music label credits.
- **Genres:** no new genre token required in this package. Existing Fandome vocabulary covers all entries; `britpop` on 2003/2015 albums is flagged as historical/track-level rather than main style. Consult `genre_evidence.csv`.

## Source and credit nuances

- *Blur* (1997): Stephen Street produced most tracks; **Blur themselves** produced “I’m Just a Killer for Your Love”, hence both names in `producers`.
- *13*: William Orbit is principal producer; **Blur** credited for “Trailerpark”. Damian LeGassick is heavily involved in editing/engineering, **not** a producer without a credit.
- *Think Tank*: Ben Hillier and Blur are primary producers; **Norman Cook** is co-producer on “Crazy Beat”/“Gene by Gene”; **William Orbit** is co-producer on “Sweet Song”. Graham Coxon contributes on “Battery in Your Leg”, not throughout. Regional Moroccan instrumentation applies to selected tracks.
- *The Magic Whip*: album co-productions **Damon Albarn, Graham Coxon and Stephen Street**, developed from group improvisations in Hong Kong; some machine/synth credits are track-specific.
- `influenced_by` only names Pavement where contemporary accounts corroborate the band referencing them during the 1997 pivot; `sounds_like` is *editorial comparative judgment*, not documented influence.
- `production` token `microkorg` is a synthesizer model, not a separate instrument token. No invented software, plug-ins or gear.
- All `notes` fields <=15 words, scale values 0–5, 27 exact columns; `status=draft`.

## Package contents

1. `CLAUDE_IMPORT.md` (this file)
2. `blur_phase02_rows_ONLY.csv` (exact 27-column header, 4 new albums)
3. `blur_phase02_sources.csv` (URL, type and supported assertions)
4. `blur_phase02_genre_evidence.csv` (one row per genre token and per album, with album vs track scope)
5. `blur_phase02_evidence-notes.md` (scale-by-scale audit, instrument and producer caveats)
6. `blur_phase02_catalog-audit.csv` (current catalog and existing file audit)

**Next phase:** *The Ballad of Darren* (2023), the remaining Blur studio album through October 2026. Do not force a 3–4 album batch by repeating earlier albums; a one-album closing phase or an explicitly justified landmark remix may be considered.

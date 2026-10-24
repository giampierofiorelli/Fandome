# CLAUDE_IMPORT — Trentemøller Phase 01 (2026-10-24)

**Incremental delivery.** One artist, one ZIP, **four** album descriptor rows. Import on branch `descriptors`; do **not** replace previous artists' files. The target artist display name is `Trentemøller`, Fandome ID `trentemoller`. `docs/descriptors/trentemoller.csv` was absent when checked. Use `trentemoller_phase01_rows_ONLY.csv` as the source of only these rows; destination is `docs/descriptors/trentemoller.csv` (create as needed). All values `status=draft`; do not silently mark reviewed.

## Phase contents

| album_id | title | year | type | catalogue |
|---|---|---|---|---|
| `trentemoller-thelastresort` | The Last Resort | 2006 | studio | existing |
| `trentemoller-thetrentemllerchronicles` | The Trentemøller Chronicles | 2007 | compilation | ADD |
| `trentemoller-intothegreatwideyonder` | Into the Great Wide Yonder | 2010 | studio | existing |
| `trentemoller-reworkedremixed` | Reworked / Remixed | 2011 | remix | ADD |

## Exact catalogue additions

- `Trentemøller` / `The Trentemøller Chronicles` / `2007` / `compilation` → `trentemoller-thetrentemllerchronicles`.
- `Trentemøller` / `Reworked / Remixed` / `2011` / `remix` → `trentemoller-reworkedremixed`.

`catalog.ts` currently stores `[title, year]` pairs rather than type, so introduce/retain type information as appropriate to application constraints. Check generated `catalogAlbums` IDs after the additions. **Slug edge case:** the repository’s actual `slug()` function removes the letter `ø` rather than transliterating it as `o`; therefore *The Trentemøller Chronicles* must use the non-obvious id `trentemoller-thetrentemllerchronicles` (missing the `o`), otherwise `validate-descriptors.ts` will reject the newly added row. Do not hand-correct the ID to `...thetrentemollerchronicles`. No existing studio album IDs may be renamed. Other future albums are **not** in this phase.

## New genre tokens

`dub`, `experimental`, `experimentaltechno`, `gothabilly`, `idm`, `minimaltechno`, `neofolk`, `postpunk`, `postrock`, `shoegaze`, `surfrock`.

All are **already present in the proposed rows** because verified descriptions name these styles. Claude must add each missing token to `scenes.ts` (`Genre` and `GENRE_LABELS`), `genreFamilies.ts` (parent mapping), and the static validator `scripts/validate-descriptors.ts`, before treating new tokens as invalid. Suggested parents (confirm editorially): `techhouse`→house|techno; `minimaltechno`→techno; `experimentaltechno`→techno; `dub`→reggae|electronic; `idm`→electronic; `postpunk`→rock|punk; `surfrock`→rock; `gothabilly`→rock; `experimental`→electronic (only if treated as an electronic taxonomy token); `postrock`→rock; `shoegaze`→indie|rock; `neofolk`→folk. Some are *track-scoped* only; consult `genre_evidence.csv` and never weight them as album-wide. `gothabilly` is NME's stylistic quip and should be manually reviewed (without quietly replacing its documented scope).

## Credit and edition caveats

1. *The Last Resort* has a **13-track instrumental standard album**. Vocal versions of *Moan* and *Always Something Better* from special/bonus editions must not change its voice, lyric or language fields. Sources distinguish 6 Oct original release from 9 Oct physical-market reporting.
2. *The Trentemøller Chronicles* contains Trentemøller singles and multiple **remixes of other artists**, not a brand new sophomore studio album. Its `producers` list reflects **credited producer roles across component masters**, not joint studio co-production; see evidence notes.
3. *Into the Great Wide Yonder* contains four featured vocalists and prominently organic instruments; only Anders is consistently credited as producer. The only album-specific documented `influenced_by` entry is **The Ventures**.
4. *Reworked / Remixed* also has third-party remixes and track-level production credits. Some album credits include source master producers. `polish` deliberately blank, because comparable album-wide evidence insufficient. Other artists who merely remixed Trentemøller songs are not automatically *producers* unless the credited role is `Producer`.
5. Reviewed sources and names are in the separate sources/evidence files. No `sounds_like` name should be moved to `influenced_by` without an artist/professional documented influence.
6. Genres have **no numerical limit**. The only short-field cap is **15 words for `notes`**. Empty fields are intentional abstentions. The validator currently blocks unseen genres until registered.
7. All seven known released studio albums through **Dreamweaver (2024)** are covered in the phase plan, but only first two studio albums are in this ZIP.

## Next phase

Research and deliver a **separate incremental Phase 02 ZIP** for **Lost (2013), Fixion (2016), Obverse (2019)**, while first assessing whether the independent-documentation threshold justifies adding **Lost Reworks (2014)** or **The Science of Fixion (2016)** in chronological sequence; if it does, reduce Phase 02 to 3–4 releases in actual date order and reschedule Obverse accordingly. Do not repeat Phase 01. Later phase covers **Memoria (2022)** and **Dreamweaver (2024)**.

## Files to import / reference

- `trentemoller_phase01_rows_ONLY.csv` — exactly the 25-column header and only four album rows.
- `trentemoller_phase01_sources.csv` — working original URLs and support scope.
- `trentemoller_phase01_genre_evidence.csv` — each genre token per release with scope and reference keys.
- `trentemoller_phase01_evidence-notes.md` — rationales, exclusions and critic disagreements.
- `trentemoller_phase01_catalog-audit.csv` — existing vs ADD, exact IDs.

Run your repository's TypeScript descriptor validator and tests **after** genre/catalogue import. This ZIP was schema-validated for its rows, not validated against a modified GitHub tree; no repository write was made.

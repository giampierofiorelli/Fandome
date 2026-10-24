# Fandome: Trentemøller / Phase 02 — Claude import guide

**As-of:** 24 October 2026 | **GitHub branch:** `descriptors` | **Artist ID:** `trentemoller` | **Read-only research, no repository writes**

This is a **strictly incremental** deliverable: **4 new descriptor rows only**, one ZIP containing exactly six data/research files. It deliberately does **not** include Phase 01 (`The Last Resort`, `The Trentemøller Chronicles`, `Into the Great Wide Yonder`, `Reworked / Remixed`) or rows for any other artist.

## Contents in chronological order

| `album_id` | Original release | Year | Type | Fandome catalogue |
|---|---|---|---|---|
| `trentemoller-lost` | Lost | 2013 | `studio` | Already present |
| `trentemoller-lostreworks` | Lost Reworks | 2014 | `remix` | **ADD** |
| `trentemoller-fixion` | Fixion | 2016 | `studio` | Already present |
| `trentemoller-obverse` | Obverse | 2019 | `studio` | Already present |

**Only catalogue addition:** `['Lost Reworks', 2014]` under `trentemoller` in `src/data/catalog.ts`; the current catalogue uses title/year pairs and derives `trentemoller-lostreworks` via its slug rule. Preserve all other existing IDs. `album_id` and `artist` strings in the rows are exact. If Claude has not yet imported Phase 01, merge Phase 01 *before* Phase 02; if it has, append these four new IDs only and don't overwrite existing rows. Check existence afresh before import; Phase 01 branch inventory originally had no `trentemoller.csv`.

## What to import and where

- `trentemoller_phase02_rows_ONLY.csv`: exact 25-column canonical header and **only 4 phase-02 rows**. Append to `docs/descriptors/trentemoller.csv`; create file first if necessary, without duplicate header or IDs.
- `trentemoller_phase02_sources.csv`: source metadata with original working URLs, key in `source` prefix; preserve as research provenance.
- `trentemoller_phase02_genre_evidence.csv`: every one of the descriptor genre tokens, with source keys and *scope*. Preserve even track-scoped genre evidence; a track texture is not an album-wide dominant style.
- `trentemoller_phase02_evidence-notes.md`: scale-by-scale rationale, deliberate empty fields and critical disagreement.
- `trentemoller_phase02_catalog-audit.csv`: exact catalogue status/IDs and edition notes.
- `CLAUDE_IMPORT.md`: these instructions.

The long-term source files can be placed under `docs/descriptors/research/` using corresponding project names. Do not replace earlier research or other artists' descriptors.

## New genre tokens absent from the branch genre union

**Nine genuinely new proposed strings:**

`altcountry`, `electrogaze`, `electropunk`, `gothicamericana`, `indieelectronic`, `krautrock`, `neoambient`, `postgoth`, `slowcore`.

They are included in the CSV (not silently removed), with scope and documentary source in `genre_evidence.csv`. Review or register them in `src/data/scenes.ts` (`Genre` and labels), `src/data/genreFamilies.ts` (parents), and the validator's genre whitelist. Suggested parent mapping for consideration, *not claimed existing code*: `altcountry→country|alt`, `electrogaze→electronic|shoegaze`, `electropunk→electronic|punk`, `gothicamericana→rock|folk`, `indieelectronic→indie|electronic`, `krautrock→rock|electronic`, `neoambient→ambient`, `postgoth→postpunk`, `slowcore→indierock`. These are interpretive taxonomic suggestions, not original critical quotations.

`postpunk`, `shoegaze`, `experimentaltechno`, and `idm` are **Phase 01 additions not in the initial branch genre type**. If Phase 01 genre import is still pending, import those plus these nine before validating. No other genre token is newly proposed by this ZIP.

## Important evidence and edition caveats

1. `Lost` = **2013 original 12-track vocal album**, not *Lost (Instrumental Version)*. Artist/retailer dates vary regionally. *Hazed* has differing lengths across formats. **Anders Trentemøller** is album-specific producer [L_AM]; the guest vocalists are not automatically producers.
2. `Lost Reworks` qualifies as **standalone remix record**. Canonical **7-track vinyl** issued September 2014 (label/promotional date 1 September; AllMusic storefront date 2 September). Digital variants contain up to **10** tracks, with Pinkunoizu and club/instrumental extras. `producers` is left **empty** because remixer and original-master credits are not documented as track `Producer` / `Co-Producer` credits [R_OFF, R_AM]. **Do not fill with remixer names without verifying roles.**
3. `Fixion` = **original 2016 12-track studio album**. Official Bandcamp version displays an additional **Redefine (Trentemøller Rework)**. Ignore it for main-album scales. All original tracks are **produced** by Anders per original official credits [F_BC]. *My Conviction* and *Where the Shadows Fall* have typographical variants across promo materials.
4. `Obverse` = **original 2019 10-track studio album**. Rachel Goswell, Lina Tullgren, Lisbet Fritze and jennylee contribute vocals/lyrics, while **Anders alone is credited as producer** [O_BC]. The studio-first recording process makes several long instrumentals important. Specific darkwave, drum-and-bass, neo-ambient and similar genres are **track-scoped**.
5. `sounds_like` is editorial sonic similarity, not proof of influence. `influenced_by` only contains **artist-/producer-supported influences**, with caveats: The Cure/Joy Division on *Fixion*; Slowdive/Beak> on *Obverse*. *Beak>* is traceable to the artist's stated equipment/sound inspiration on the album, not a broad work-by-work copying claim. Savages is a vocal **collaboration**, not an automatically established influence.
6. **No length caps** in genre, voice, lyrics, producers, sounds_like, influenced_by or other list columns; **only `notes` is max 15 words**. All scales 0–5 or empty; source insufficient → empty. Status is `draft` throughout. Album IDs are never normalised to earlier Phase 01 counterparts.
7. *The Science of Fixion* is a documentary/film about the making and performance of the record, **not** a new studio audio album. No separate row. *Live in Copenhagen* (2013) exists, but this project selects only salient non-studio records; it isn't being represented as a distinct defining album here.
8. The artist's official site announces a self-titled **`trentemøller` release for 13 November 2026**: **unreleased on our 24 October 2026 cut-off** and must remain outside the catalogue and descriptors regardless of advance pre-orders or streaming album cards. Source: https://trentemoller.com/news/new-album-coming-in-2026-first-single-out-now.

## Next phase (Phase 03)

Separate incremental ZIP for **Memoria (2022)** and **Dreamweaver (2024)**, both already present in the Fandome catalogue. Research other *substantively documented original collaborative/soundtrack/remix work* in chronological order if it independently meets eligibility, but don't add routine singles, bonus editions or mere curated DJ mixes. **The upcoming self-titled album (13 November 2026) is not currently eligible**. The next phase may have only two new rows if no independent major release qualifies.

**Validation:** the CSV has exactly the header's 25 columns, eight 0–5 integer scales, valid status and confidence, unique IDs, matching one-row-per-genre evidence, and notes within 15 words. The repository's full `npx vite-node scripts/validate-descriptors.ts` **cannot pass on the original tree until newly evidenced genres/catalogue entries have been registered**; Claude must perform its branch-side validator/tests after integration, not report these as already run. This archive contains no scripts.

# CLAUDE IMPORT — Oasis / Phase 02 (read-only research packet)

**Repository:** `giampierofiorelli/Fandome`, branch `descriptors`, inspected 26 October 2026. No repository edits made. Original `docs/descriptors/oasis.csv` already has Phase 01 rows (1994, 1995, 1997, 2000). This packet adds only 3 rows and does not repeat them.

## Import the following three NEW 27-column rows
1. `oasis-heathenchemistry` — *Heathen Chemistry* (2002), studio — **add to catalog.ts**, currently missing.
2. `oasis-dontbelievethetruth` — *Don’t Believe the Truth* (2005), studio — present in catalog.ts.
3. `oasis-digoutyoursoul` — *Dig Out Your Soul* (2008), studio — present in catalog.ts.

Artist `oasis` exists; do not create duplicate room. **No co-billed projects** in this packet. Studio discography through 2008: seven studio albums, four in Phase 01 + three here.

## Files
- `oasis_phase02_rows_ONLY.csv`: exactly three records in the expected 27-column schema.
- `oasis_phase02_sources.csv`: 32 album-source references; individual URL and statement supported.
- `oasis_phase02_genre_evidence.csv`: 30 genre-evidence statements, precisely one per assigned genre tag, with scope and evidence-strength.
- `oasis_phase02_evidence-notes.md`: album-specific, eight-scale anchored ratings, equipment/credit caveats, direct versus editorial sonic claims, conflicting criticism.
- `oasis_phase02_catalog-audit.csv`: presence and appropriate add-only action.

## Tokens / import tasks
- **New instrument token:** `tambura` — documented Andy Bell performance on 2008 *Dig Out Your Soul*; distinct from sitar. Register it in `src/data/instruments.ts`. Source: MusicBrainz original-release credit.
- **No new genre or production tags required.** All assigned tags already exist in `src/data/scenes.ts`, the genre family mapping and production vocab as checked in the branch. Check `genreFamilies.ts` only if extending categorization policy, not as a prerequisite to adding these existing genres.
- `electricsitar` in 2008 is a **small toy electric sitar-shaped instrument**, *not* an acoustic Indian sitar; actual reported device is described in NME. Do not falsely replace with regular `sitar`.

## Credits / production safety
- *Heathen Chemistry* — official producer = **Oasis** (band credit). Mark “Spike” Stent is mixer, Jan Kybert Pro Tools engineer; Wil Malone arranged the orchestral strings. Do **not** add Stent or Malone to `producers`.
- *Don’t Believe the Truth* — producers = **Dave Sardy | Noel Gallagher** at album level, but individually credited tracks differ; Death in Vegas preliminary/abandoned sessions are not included. Use per-track breakdown from Oasis Recording Information.
- *Dig Out Your Soul* — producer = **Dave Sardy**. Noel Gallagher shapes direction but is not credited as co-producer on original issue. Lennon’s *I'm Outta Time* interview excerpt is sampled audio, not a singer on the album. Zak Starkey and Noel split drum responsibilities by track.
- `protools|overdubbing|analogtape` 2008 is partially based on an archived technical report of recording/mixing and should not be read as a guarantee of specific plug-ins or samplers. `heavyreverb` is track-specific from Noel's Abbey Road chamber testimony. `production` is **blank** on the 2005 row because there is insufficient definite album-specific evidence for individual technique tokens; this is intentional, not an oversight.

## Genre/field safeguards
- AllMusic classifies virtually every Oasis album as `britpop`, `britishtradrock` etc.; broad tags come after most distinctive central genre, and detailed CSV scopes caution against treating these as exhaustive song-level truth.
- The 2002 `countryrock` tag is *Songbird*-specific. The 2005 `musichall` tag is *The Importance of Being Idle*-specific. The 2008 `bluesrock` tag is specifically *Bag It Up*, while recurring psychedelic textures justify earlier positioning of `psychedelicrock` in the ordered list.
- Do not infer `drumprogramming` from a loud live drummer, a full Mellotron from a synth sound, or actual acoustic `sitar` from a toy instrument.
- All numeric scales are whole-album editorial judgments (0–5) and can be reviewed; none are measurements.

## Next follow-up
- *The Masterplan* (1998) deserves a **separate compilation row**, not a fourth Oasis studio record. It would belong chronologically between 1997 and 2000, but would be a later research phase and catalog add. Do not fabricate any 2026 studio album due to reunited touring activity.

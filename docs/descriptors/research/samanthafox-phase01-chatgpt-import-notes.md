# CLAUDE IMPORT — Samantha Fox / Fandome Phase 01

Date: 2026-10-27. Repository: `giampierofiorelli/Fandome`, branch `descriptors`, **read-only**. Artist was checked in BOTH `src/data/catalog.ts` and `src/data/seed.ts` and **not found**. Proposed ID **`samanthafox`** (not `samfox`). `docs/descriptors/samanthafox.csv` is absent, hence there are **no pre-existing descriptor rows to skip**. `src/data/coBilled.ts` contains no relevant credit.

## Phase 01 / New album rows only

1. `samanthafox-touchme`: Touch Me (1986), studio
2. `samanthafox-samanthafox`: Samantha Fox (1987), studio
3. `samanthafox-iwannahavesomefun`: I Wanna Have Some Fun (**1988 original US; 1989 UK**), studio
4. `samanthafox-justonenight`: Just One Night (1991), studio

Add this **artist and all four original albums** to catalog/seed as appropriate before running the existing validator. The rows ONLY CSV has the 27 exact columns and `draft` review status; no prior phases' rows are repeated.

## Phase 02 plan (not included here)

- **21st Century Fox**: 1997 original issue in some markets, 1998 others; check earliest release.
- **Watching You Watching Me** (billed **Sam Fox**): 2001/2002 date uncertain, verify original release and treatment as part of her main discography.
- **Angel with an Attitude** (2005).

Check original classification/format of Watching You Watching Me carefully; MusicBrainz lists it as an album and artist's own site lists it, whereas some popular summaries omit it. If it is studio under the same career, include, despite the shorter stage billing.

Excluded under current policy: Greatest Hits 1992; The Hits Album 1995; other compilation albums and reissue boxes; Live in Japan 1989 (issued 2010); early Lamborghini/SFX singles bundled as bonus recordings on deluxe reissues. Do not assign bonus tracks or remixes to the original album sound.

## Existing Fandome tokens

All assigned genres (`dancepop`, `poprock`, `synthpop`, `freestyle`, `hiphop`, `pop`, `house`, `contemporaryrnb`, `disco`) are supported by the existing Genre union. All instrument and production tokens match `src/data/instruments.ts` and `src/data/production.ts`. **No new tokens requested.**

## Influence distinction

**Artist-wide named inspiration: Debbie Harry / Blondie**, with first-person interview: https://elpais.com/elpais/2015/07/14/tentaciones/1436862711_383163.html . Guardian article confirms desire for a Debbie Harry-esque video on the first single, not proof of that album's musical influence: https://www.theguardian.com/lifeandstyle/2017/dec/12/samantha-fox-glamour-model-fame-16-stalkers-david-cassidy . Consequently the four **album-specific `influenced_by` fields remain empty**. Artist sonic likenesses are recorded in `sounds_like` where critics explicitly compare them. Covers, samples, guest musicians and producers are never influences.

## Six-file package

- `samanthafox_phase01_rows_ONLY.csv`: four descriptor rows, exact 27-column header.
- `samanthafox_phase01_sources.csv`: traceable publication/record-credits sources.
- `samanthafox_phase01_genre_evidence.csv`: evidence separately for every genre token; track-vs-album distinctions.
- `samanthafox_phase01_evidence-notes.md`: instrumentation, production, uncertainties, influence distinctions.
- `samanthafox_phase01_catalog-audit.csv`: catalog additions, deferrals, exclusions.
- `CLAUDE_IMPORT.md`: this file.

Claude should add artist and album entries, install the descriptor file under `docs/descriptors/samanthafox.csv` and run `npx vite-node scripts/validate-descriptors.ts`. No GitHub repository files were modified during this research.

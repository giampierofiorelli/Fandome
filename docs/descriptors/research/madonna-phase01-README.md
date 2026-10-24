# Fandome — Madonna research phase 01 (24 October 2026)

## Import status: DRAFT / NOT APPROVED

The root file `docs/descriptors/madonna.csv` contains three researched but **provisional** album descriptor rows: `madonna-madonna` (1983), `m-virgin` (1984) and `m-trueblue` (1986). The scores 0–5 are editorial assessments inferred from documented music criticism and technical interviews; they are **not** expert-published measurements. All three notes end `(unsure)` pending independent review. `sounds_like` and `influenced_by` remain empty where original sources do not substantiate relations.

This research batch should NOT be silently treated as a fully validated Madonna descriptor set. Review the supporting files and do not import the CSV into the live app until the checks below pass.

## Why this branch and paths?

Follow `docs/album-descriptors-guide.md`: branch `descriptors`, root file `docs/descriptors/madonna.csv`; research files are nested here so automated CSV importers that read the root folder do not mistake a source/audit table for album descriptor data.

## Discography completeness

The current `src/data/seed.ts` lists six Madonna records. The accompanying audit identifies **nine missing studio albums**; only the first of these has a drafted descriptor. To introduce new albums use the guide's IDs `artistId + '-' + normalized title`; do NOT use earlier informal `m-` ID proposals. Never change the six legacy identifiers.

### Additions proposed for Claude's review

| Year | Title | New proposed ID |
| --- | --- | --- |
| 1983 | Madonna | `madonna-madonna` |
| 1992 | Erotica | `madonna-erotica` |
| 1994 | Bedtime Stories | `madonna-bedtimestories` |
| 2003 | American Life | `madonna-americanlife` |
| 2008 | Hard Candy | `madonna-hardcandy` |
| 2012 | MDNA | `madonna-mdna` |
| 2015 | Rebel Heart | `madonna-rebelheart` |
| 2019 | Madame X | `madonna-madamex` |
| 2026 | Confessions II | `madonna-confessionsii` |

Official catalog https://www.madonna.com/pages/music and dedicated official album https://www.madonna.com/products/confessions-ii . Album type distinctions matter: do not accidentally reclassify `I'm Breathless` (1990), `Who's That Girl` (1987) and `Evita` (1996) as standard studio releases. Other album kinds require their own policy.

## Exact validation checklist

1. Verify a descriptor's album ID exists in Fandome before importing; `madonna-madonna` is not in current `seed.ts`.
2. Check every row against the 21 columns, allowed genres/voice/lyric terms, 0–5 integer range, and max 15-word notes.
3. Cross-check full-album vs single-driven inferences, especially `electronic=2` for *Like a Virgin* and `groove=3` for *True Blue*.
4. Keep evidence URLs, notes, unknowns and expert disagreements available to maintainers; do not copy reviewers' prose into end-user content.
5. Do not infer `sounds_like` or `influenced_by` from co-production or commercial genre labels.
6. Run `npm run typecheck`, `npm test`, and `npm run build` before importing into the application; those checks have not been run by this research package.

## Contents

- `docs/descriptors/madonna.csv` — three preliminary descriptor rows in the expected format.
- `madonna-sources.csv` — editorial and practitioner reference URLs per album.
- `madonna-evidence-notes.md` — qualitative evidence and score rationales.
- `madonna-catalog-audit.csv` — 15 studio albums, including the 9 proposed additions.
- This README.

This is a research handoff for Claude; no inference of production readiness should be made from the presence of a CSV.

## Converted by Claude (24 October 2026)

- `madonna.csv` converted to the guide's v2 format (25 columns): added `type` (studio), `producers` (credited producers), `confidence` = medium and `status` = draft; the "(unsure)" suffix moved into those two columns. Scores and notes unchanged.
- Validated with `npx vite-node scripts/validate-descriptors.ts`: all rows valid; `madonna-madonna` is a new album to add to the catalogue before import.
- Confessions II confirmed on madonna.com (released 3 July 2026).
- Not imported into the app yet (draft).

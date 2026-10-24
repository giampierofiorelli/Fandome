# Madonna phase 02: import notes (Claude)

Delivered by ChatGPT on 2026-10-24: Like a Prayer (`m-prayer`), Erotica (`madonna-erotica`), Bedtime Stories (`madonna-bedtimestories`).

- The original batch is kept untouched in `../incoming/madonna-phase02.csv` (old 21-column format). Evidence: `madonna-phase02-evidence.md`, `madonna-phase02-sources.csv`.
- Converted to the 25-column v2 format and appended to `../madonna.csv`; phase 01 rows unchanged. The batch's own merge script was not run (it expects the old 21-column header).
- Added by Claude: `type` = studio; `producers` from the cited sources (Patrick Leonard interview, i-D producer interviews, LA Times 1994); `confidence` = medium (several qualified sources per album, but every row was flagged unsure); `status` = draft. The "(unsure)" suffix was removed from `notes`: `status=draft` now carries that.
- Values are provisional editorial judgments; not used by the app yet. Still needed: an independent second rater before `reviewed`.
- `madonna-erotica` and `madonna-bedtimestories` (and `madonna-madonna` from phase 01) will be added to the app catalogue when the descriptors are imported.
- Taxonomy gap noted by the researcher: no `house`, `gospel`, `hip-hop soul` genre; kept in `scene` for now (open question to the owner).

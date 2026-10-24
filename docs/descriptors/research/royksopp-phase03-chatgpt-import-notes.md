# Fandome / Röyksopp — Phase 03 | STRICTLY NEW ROWS ONLY

**Exactly three** new albums: *Profound Mysteries II* (2022), *Profound Mysteries III* (2022), and *Nebulous Nights (An Ambient Excursion into Profound Mysteries)* (2024). **None** from Röyksopp phases 01–02 are present in the descriptor CSV. No other artists. Unbounded genre and other multivalue lists as stipulated by latest Fandome guide; only source-backed entries with explicit per-track vs full-album scope. CSV has exactly 25 columns and all row statuses `draft`.

## Archive files (seven)

- `royksopp_phase03_rows_ONLY.csv` — ONLY these three descriptor rows.
- `royksopp_phase03_sources.csv` — 22 per-album critic / artist / credit records with exact URLs (some same publication but different source pages); metadata and what it establishes.
- `royksopp_phase03_genre_evidence.csv` — evidence for every included genre plus prominence/track scope.
- `royksopp_phase03_evidence-notes.md` — all metric justifications, disagreements, source limitations, classification issues.
- `royksopp_phase03_catalog-audit.csv` — new IDs and album identities missing from default catalog.
- `append_phase03.py` — collision-safe, idempotent append; never overwrites even when rows differ.
- `CLAUDE_IMPORT.md` — instructions.

## Integration checklist for Claude

1. Check out **`descriptors`** branch and re-read `docs/album-descriptors-guide.md`. Source default-branch guide checked at SHA `e5b62ea899e699c1e77ba22b4f44137a4109c7d1`. `descriptors` branch may already have added some genres from phase 1/2.
2. Add **three missing album identities** to `src/data/catalog.ts` before validating: `royksopp-profoundmysteriesii`, `royksopp-profoundmysteriesiii`, `royksopp-nebulousnightsanambientexcursionintoprofoundmysteries`. Titles and year exactly as in CSV. Do NOT confuse the 2022 *Profound Mysteries* original first album with either sequel.
3. Taxonomy: compare `ambientbreakbeat`, `downtempo`, `downbeat`, `rave` with live branch and update scenes, validator and guide *only if absent*. These were already reported in earlier Röyksopp phases. Other CSV genre tags (`italodisco`, `nudisco`, `tropicalhouse`, etc.) are already on default guide. No fixed maximum number of genres, voice types, producers, lyric tags, sound-alikes or influence names; individual genre tags should still be source-backed.
4. **Review Nebulous Nights type**: provisionally `studio` because it is a distinct, live-recorded **studio re-performance** and not a concert album. Depending on Fandome's editorial conventions a new performance/reinterpretation might instead count as `remix`; confirm and document rather than blindly assume. It is *not* 2022 deluxe or live arena set. Audio history [N_OFF,N_APPLE,N_PF].
5. **Release-date metadata discrepancy:** for *Profound Mysteries II*, official site and Qobuz confirm 19 August 2022; artist Bandcamp has a later November date. For *III*, platform date differs 17 vs 18 November. Both album YEAR fields are unambiguous. No 2025 *True Electric* rows in this package.
6. Review every producer in album/track credits (group Röyksopp is credited producer; collaborators mostly vocal performers). Review influenced_by only for II where Svein Berge directly acknowledged formative **Kraftwerk** and **Depeche Mode** [II_PF]. III and Nebulous abstain. `sounds_like` is opinion, not documented causal influence.
7. Merge with `python /path/to/append_phase03.py` from repository root, or inspect rows and merge manually; different existing ID values are *hard errors*, not overwritten. Run `npx vite-node scripts/validate-descriptors.ts` and project tests; store evidence files under `docs/descriptors/research/`; commit to `descriptors` and report the **real commit SHA**. No repository write or tests were performed in creating this ZIP.

**Next, not included:** *True Electric* (2025), release classification requires checking official details before new batch.

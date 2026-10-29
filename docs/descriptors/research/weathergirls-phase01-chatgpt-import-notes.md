# Claude / Fandome import — The Weather Girls phase 01

Repository: `giampierofiorelli/Fandome`, branch `descriptors`.

**Do not auto-merge artist aliases without review.** This file is a proposal; perform import only after user approval and normal validation.

1. Create catalog artist ID `weathergirls`, if absent. Label: `The Weather Girls`. Preserve historical lineups in artist background; 1983, 1985, 1988 = Martha Wash / Izora Armstead; 1993 = Izora Armstead / Dynelle Rhodes.
2. Add the 4 studio albums in `weathergirls_phase01_rows_ONLY.csv` with exact proposed `album_id` values, after cross-checking Fandome's current catalog for collisions.
3. Merge four rows into `docs/descriptors/weathergirls.csv`, using the **27 columns exactly** as provided; no duplication of prior artist rows.
4. Run the repo's descriptor validator (`scripts/validate-descriptors.ts`, via project-supported command) and fix any schema errors. Canonical genres are already present in Fandome scene vocabulary, as checked against `src/data/scenes.ts`.
5. Audit `weathergirls_phase01_genre_evidence.csv` and each `source_id` against `weathergirls_phase01_sources.csv`. Retain all evidence files in research storage or as appropriate under docs; leave empty fields untouched rather than inventing production hardware or influences.
6. *Two Tons o’ Fun* (1980) and *Backatcha* (1980) are authentic studio records released under the earlier name. Decide whether the site should surface them as a historical alias in the same artist room or a connected alias record. **Do not duplicate their recordings as Weather Girls 1983 releases**.
7. The 1993 `Double Tons of Fun` is a *distinct 12-track studio album*, despite its name resembling 1980's *Two Tons o’ Fun*.

**Source quality notes:** Original label/session credits take precedence over automatically aggregated producer lists. S17–S20 are used for the 1988 credits; unverified contemporary PDF details were excluded from the evidence table.

## Claude import note

- New artist `weathergirls` (catalogue, scene US en 1980 dance,soul, legacy). The two 1980 albums released as Two Tons o' Fun are in the same room, billed "Two Tons o’ Fun" (coBilled credit), not yet described.
- Four Weather Girls studio albums described (1983, 1985, 1988, 1993); sounds_like and influenced_by empty (none sourced).

## Claude enrichment

- Reception from en/de.wikipedia, Robert Christgau, AllMusic (Ron Wynn, via Qobuz), Cherry Red / The Second Disc reissue notes. No reviews found for 1988 and 1993.
- No critic comparison or stated influence for any of the four: sounds_like and influenced_by stay empty.
- Producers confirmed (Discogs 1688755, 1056900, 2321076, 710618): Paul Jabara (Bob Esty on It's Raining Men only); Hank Medress and Jeff Kent; Full Force, Reggie Lucas, Richard Scher by track; Joachim Heider and Mr. Kalif, Tantris and Thorsten Brötzmann on tracks 10 and 12.
- Success: pop soul moved last (only user tags). Big Girls Don't Cry: contemporary R&B, synth-pop, Hi-NRG (Discogs styles), remixing (Chris Lord-Alge, two tracks). Its covers (Four Seasons, CCR, Neil Sedaka, Melissa Manchester, Dobie Gray) have no original album on Fandome yet; Well-A-Wiggy is not a cover (Jesse Winchester recorded it later).
- The Weather Girls (1988): instruments and production filled from the Europe LP credits (Discogs 2321076: keyboards, Synclavier, guitar, bass, turntables, percussion, saxophone, piano; drum programming). Double Tons of Fun: house added (Discogs), guitar instead of electric guitar.

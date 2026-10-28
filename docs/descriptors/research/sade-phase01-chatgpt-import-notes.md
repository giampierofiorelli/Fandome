# Claude import notes — SADE / Phase 01

**Fandome repository:** `giampierofiorelli/Fandome`, branch `descriptors` (read-only inspected 28 October 2026). **Artist: Sade the band** (Sade Adu, Stuart Matthewman, Paul S. Denman, Andrew Hale). **Proposed new artist id `sade`**: not present in either `src/data/catalog.ts` or `src/data/seed.ts`, and no `docs/descriptors/sade.csv` existed. No existing Sade rows are being repeated. Sade Adu is not a different solo room here.

## Import procedure

1. Add artist id `sade` and all six **studio** albums to `src/data/catalog.ts` (not just four current rows). Chronological album entries:
   - Diamond Life (1984) — `sade-diamondlife` **phase01 row**
   - Promise (1985) — `sade-promise` **phase01 row**
   - Stronger Than Pride (1988) — `sade-strongerthanpride` **phase01 row**
   - Love Deluxe (1992) — `sade-lovedeluxe` **phase01 row**
   - Lovers Rock (2000) — `sade-loversrock` phase02 (NO row here)
   - Soldier of Love (2010) — `sade-soldieroflove` phase02 (NO row here)
2. Put ONLY the four records from `sade_phase01_rows_ONLY.csv` into `docs/descriptors/sade.csv`. Exactly **27 columns**. Leave `status=draft` until independently checked; do not mark reviewed.
3. Put `sade_phase01_reception.csv` four rows into the dedicated `docs/descriptors/reception/sade.csv` for current guide importance/acclaim/mainstream. Numeric figures are researched editorial recommendations, not source-measured scores.
4. Preserve `sade_phase01_sources.csv` and `sade_phase01_evidence-notes.md` in `docs/descriptors/research/`. Each genre tag is supported by `sade_phase01_genre_evidence.csv`, with `whole_album` or `some_tracks` scope. No new genre/instrument/production tokens proposed.
5. Run `npx vite-node scripts/validate-descriptors.ts` and project tests AFTER artist catalogue addition (we cannot run the repository's full runtime validator from the read-only sources).

## Special caution

- Original 1985 *Promise* vinyl LP = nine tracks; later CD/cassette = eleven. Do not treat 'Punch Drunk' as a separate album or a second record.
- **Diamond Life:** documented direct studio-reference recordings (Marvin Gaye, Gil Scott-Heron, Nina Simone, Ray Charles, Billie Holiday) described by producer **Robin Millar**, and formative Curtis Mayfield / Al Green recalled by **Stuart Matthewman**. These are album-related, not producer credits. `Gil Scott-Heron (Pieces of a Man)` uses the source’s explicit album reference. Recorded cover of Timmy Thomas's 'Why Can't We Live Together' is NOT evidence Thomas influenced the album; leave him out of `influenced_by`.
- **Stronger Than Pride**: Sade band *produced*, while Mike Pela / Ben Rogan *co-produced*; Sade Adu did not produce it as an unassisted solo project. *Love Deluxe*: Sade produced, Pela co-produced, Chris Lord-Alge engineer/mixer (not album producer).
- **Love Deluxe:** majority drum-machine-backed, but Martin Ditcham performed live drums/percussion on selected tracks. Cello on 'Pearls'; instrumental 'Mermaid'. Don't tag Massive Attack or Portishead as documented influences: critic comparison only (`sounds_like`), nor infer the album is an actual trip-hop release. 'No Ordinary Love' distorted guitar on an individual track.
- **Reception:** mass appeal does not equal `mainstream=5`; Sade band-led composition/production favours `mainstream=3` despite high sales. Pitchfork 2017 Love Deluxe 9.3/10, 2020 Promise 9.0/10 support positive acclaim; Trouser Press historically criticises Stronger Than Pride while recent critics appraise its minimal approach differently.

## Contents (7 files)

- `sade_phase01_rows_ONLY.csv` — four 27-column descriptor records, in chronological order.
- `sade_phase01_sources.csv` — verified source references per record, with type and supported claims.
- `sade_phase01_genre_evidence.csv` — every genre and evidence / scope.
- `sade_phase01_evidence-notes.md` — album-specific detailed reasoning, sources and disputed classifications.
- `sade_phase01_catalog-audit.csv` — all six studio LPs, catalogue additions required and phase assignment.
- `sade_phase01_reception.csv` — importance/acclaim/mainstream editorial grades for four records.
- `CLAUDE_IMPORT.md` — this import handoff.

**Exclusions:** no live albums, compilations, best-of, box sets, or side projects. **Next phase 02:** *Lovers Rock* (2000) and *Soldier of Love* (2010). Current artist discography has six studio LPs (official band archive, Abbey Road 2020). 

# Fandome / Take That — Phase 02 — CLAUDE import instructions

**Research date:** 27 October 2026. **Deliverables:** six files in this ZIP. **No GitHub modifications**. All row statuses are `draft` (unreviewed). This phase is STRICTLY INCREMENTAL and contains only the three new rows below, not rows from phase 01.

## Add / update these only

| album_id | title | year | type | catalogue status | action |
|---|---|---:|---|---|---|
| `takethat-thecircus` | The Circus | 2008 | studio | exists | retain original ID, import row |
| `takethat-progress` | Progress | 2010 | studio | exists | retain original ID, import row |
| `takethat-progressed` | Progressed | 2011 | ep | absent | add to catalogue first, then import row |

### Catalogue work

Current `src/data/catalog.ts` Take That (`takethat`) listing contains *Everything Changes*, *Nobody Else*, *Beautiful World*, *The Circus*, *Progress*, *This Life*, but omits *Take That & Party*, *Progressed*, *III*, *Wonderland*. Some missing works are Phase 01 / Phase 03 responsibility; this ZIP instructs adding **Progressed (2011)** now, if Phase 01 already added its debut. Add `['Progressed', 2011]` between `['Progress', 2010]` and subsequent records in the `takethat` catalogue. The deterministic new ID is `takethat-progressed` (letters/digits only). There is no Take That entry in `src/data/seed.ts` in the checked state; if Claude sees updated branch content, recheck to prevent collisions. The complete ten-record catalogue audit is supplied for continuity.

### The EP vs double-CD discrepancy — essential

**The band itself calls *Progressed* its first EP, consisting of eight new songs**. MusicBrainz recognises the original eight-track release as EP. Most retailers list it as a 19-track, ~82-minute *Progress* deluxe reissue, because the EP was issued packaged with the 2010 album. **Import only the eight genuinely new tracks’ musical profile.** Do not clone `Progress` descriptors into the EP and do not give *Progressed* a `studio` or `compilation` type.

Original EP tracks: When We Were Young / Man / Love Love / The Day The Work Is Done / Beautiful / Don't Say Goodbye / Aliens / Wonderful World.

Direct sources:
- https://takethat.com/timeline/progressed/
- https://musicbrainz.org/release-group/d592df96-24c8-4853-9b6a-4cf6f8a35998
- https://musicbrainz.org/release/4b2cbea3-a3dd-4a64-9808-ad0cc3005f5d/disc/1

### Producer and musician roles

- *The Circus*: John Shanks **producer**. Do **not** promote engineer/programmer Jeff Rothschild or Ryan Carline into producers. Other musicians and Wil Malone's string/brass arrangements are tracked in evidence.
- *Progress* and *Progressed*: Stuart Price **producer**. Gary Barlow **programmer** (and songwriter), not an additional album producer on current verified credits. Track musicians recorded live drums, strings and guitars even though the productions are synth-led.
- No artist or producer established a direct musical influence on these specific albums using evidence strong enough to enter `influenced_by`; left empty deliberately, not accidentally. Critics’ comparisons remain in `sounds_like`.

### Tokens and compatibility

Genre tokens all already present in checked `src/data/scenes.ts`: `poprock`, `pop`, `softrock`, `adultcontemporary`, `dancepop`, `europop`, `teenpop`, `alternativerock`, `synthpop`, `electropop`, `clubpop`, `contemporarypoprock`, `electronic`, `disco`, `folk`, `newwave`, `dubstep`, `rockopera`. No new genre required. All listed instruments and production tokens come from the existing Fandome dictionaries, including `mandolin` in *Progressed*. **No new instrument or production token needed**.

### Edition and interpretation caveats

- *The Circus*: original 2008 12-song UK album, not the live record or 13th hidden Japanese-edition song. Qobuz/liner credits and some retailer dates differ by territory. Year 2008 is stable.
- *Progress*: original 2010 album, not the subsequent repackaged EP; UK release date on official site 15 November (AllMusic gives 22 November for its listed territory). Year stable.
- *Progressed*: new material released 13 June 2011. Retail '01/01/2011' placeholders are **not** verified release dates.
- AllMusic’s album genre tags on the 2011 deluxe reissue can cover both discs; EP-only genre evidence is separately traced, with track-level sounds demoted after core whole-EP genres.
- `adultcontemporary` on *The Circus* is editorially inferred from critics’ description of soft-rock balladry, rather than a directly quoted label. Remove if a strictly source-named rule is used by the validator; all other genre entries have a named source or explicitly track-specific review support.
- No live/compilation recordings in this batch, and no future unreleased albums. No newly identified co-billed *albums*.

### Import procedure

1. Read `takethat_phase02_rows_ONLY.csv`, `takethat_phase02_sources.csv`, `takethat_phase02_genre_evidence.csv` and `takethat_phase02_evidence-notes.md`.
2. Verify branch latest `docs/descriptors/takethat.csv`; if any of the 3 IDs exists since the audit, do not overwrite/duplicate without a reasoned reconciliation.
3. Add *Progressed* to the catalogue before validating. Import the three phase-only rows into `docs/descriptors/takethat.csv` by ID (not title-based fuzzy matching). Preserve the earlier phase 01 rows unchanged.
4. Run `npx vite-node scripts/validate-descriptors.ts` (or current repository validation command) and relevant tests; recheck token sets and catalog IDs. The import here is not yet validated by the repo itself.
5. `status` stays `draft` until separately peer-reviewed; `confidence` is research strength, not editorial approval.

## Next phase 03

1. `takethat-iii` — *III* (2014; **ADD TO CATALOGUE**)
2. `takethat-wonderland` — *Wonderland* (2017; **ADD TO CATALOGUE**)
3. `takethat-thislife` — *This Life* (2023; current catalogue ID)

No unreleased announced work (e.g. *Dreamers*, not yet released on 27 October 2026) should be added.

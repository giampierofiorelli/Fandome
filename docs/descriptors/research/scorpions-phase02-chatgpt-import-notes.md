# CLAUDE_IMPORT — Scorpions — Fandome Phase 02

Research date: **28 October 2026**. Repository `giampierofiorelli/Fandome`, branch `descriptors`, read-only. Follow **docs/album-descriptors-guide.md** and **scripts/validate-descriptors.ts**. This is an **INCREMENTAL** phase: do not reimport Phase 01 rows or any other artist.

## New album descriptor rows, exactly four

| Fandome album ID | Studio album | Original year | Lead album producer |
| --- | --- | --- | --- |
| `scorpions-takenbyforce` | Taken by Force | 1977 | Dieter Dierks |
| `scorpions-lovedrive` | Lovedrive | 1979 | Dieter Dierks |
| `scorpions-animalmagnetism` | Animal Magnetism | 1980 | Dieter Dierks |
| `scorpions-blackout` | Blackout | 1982 | Dieter Dierks |

`Taken by Force` was first released in **West Germany in December 1977**; its 1978 American issue is NOT the original year. See the [official band page](https://www.the-scorpions.com/album/taken-by-force/). Do not count the bonus tracks appearing on some reissues as additional albums or as part of the original studio album. Release dates for others: [1979](https://www.the-scorpions.com/album/lovedrive/), [1980](https://www.the-scorpions.com/album/animal-magnetism/), [1982](https://www.the-scorpions.com/album/blackout/).

## Exact import files

1. `scorpions_phase02_rows_ONLY.csv`: four rows, standard **27-column** header, each `status=draft`.
2. `scorpions_phase02_sources.csv`: **27** source claims with evidence strength and URLs.
3. `scorpions_phase02_genre_evidence.csv`: **22** genre-level citations, exact rows/genre order, track/retro qualifiers.
4. `scorpions_phase02_evidence-notes.md`: editorial methodology, personnel, production distinctions and uncertainty.
5. `scorpions_phase02_catalog-audit.csv`: these four additions plus future research candidates, *no Phase 01 duplicate rows*.
6. `CLAUDE_IMPORT.md`: this file.

## Catalogue additions and consistency

- Earlier Phase 01 review found no Scorpions room in either `src/data/catalog.ts` or `src/data/seed.ts`, and no existing `docs/descriptors/scorpions.csv` at that time. **Check again before import**, as phase 01 may have been imported in the meantime.
- Proposed artist ID `scorpions` and proposed album IDs above follow the existing id rule and Phase 01 reservations. **If Phase 01 was imported, append only these Phase 02 rows**; do not overwrite old CSV rows. If catalog data now gives different IDs, resolve them before import rather than creating duplicate album entries.
- The previous phase covered **Lonesome Crow (1972), Fly to the Rainbow (1974), In Trance (1975), Virgin Killer (1976)** and is intentionally excluded.
- Check co-billed entries if applicable to future *Moment of Glory* (2000); **no live or compilation albums** are part of this batch.
- Check sources before accepting any questionable genre attribution. In particular, AllMusic's hair metal / arena rock tags can be retrospective rather than how a 1977/1980 record was marketed.

## One new genre token, as required by the guide

`popmetal`: AllMusic explicitly tags *Animal Magnetism* with **Pop-Metal**. This token is not in `src/data/scenes.ts` as of the check. Preserve the named style rather than silently relabeling as `poprock` or `hairmetal`. Claude should **add `popmetal` to the Genre union and to `src/data/genreFamilies.ts`** (plausible parents `heavymetal` and `pop`; check the current genre graph) before running validation. No other new genre, instrument or production token is proposed. This is a *retrospective* label, ranked after more diagnostic hard rock and metal.

## Attribution and omissions

- `influenced_by` remains empty: **no specific named musician has been credibly demonstrated to shape each of these four albums** via album-specific first-person source. Uli Jon Roth personally mentions **flamenco influence** on `The Sails of Charon` (style, not a named artist). Do not substitute Led Zeppelin, Hendrix or a general era influence without album-specific evidence.
- `sounds_like=Boston` on *Animal Magnetism* is **solely** for the track `Only a Man`, on the basis of [Apple Music editorial](https://music.apple.com/us/album/animal-magnetism/1440924575); do not present it as a whole-album influence.
- `talkbox` on *Animal Magnetism* is **a guitar effect on The Zoo**, not a vocoder or proof of treated lead vocal. [Jabs firsthand account](https://theeditingroomfloor.blogspot.com/2010/08/matthias-jabs-sultan-of-scorpions-six.html). No specific signal-chain machines are attributed to the other three albums.
- Orchestra/strings and French horn/oboe on *Animal Magnetism* appear in the [artist's full personnel listing](https://www.the-scorpions.com/album/animal-magnetism/); those are peripheral album elements, **not a claim that every track is orchestrated**.
- Don Dokken is credited for backing vocals on *Blackout* in [official personnel](https://www.the-scorpions.com/album/blackout/). Klaus Meine says provisional Dokken sessions took place during his medical absence and later he sang the lead parts: **do not replace Klaus Meine with Don Dokken in the voice/credits**. [Klaus interview](https://noisecreep.com/scorpions-klaus-meine/).
- `producers` denotes **Dieter Dierks only** on each record. Other engineers are NOT automatically coproducers.
- All scales are editorial 0–5 evaluations, anchored to the Fandome guide. A blank `production` cell is intentional where there are no specific techniques documented. `status=draft`, not reviewed.

## Import checklist

1. Confirm current artist/album IDs in `catalog.ts`, `seed.ts`, plus existing `docs/descriptors/scorpions.csv` and future co-billed records. Create/append only missing entries.
2. Register `popmetal` in `scenes.ts`/`genreFamilies.ts` (or seek owner confirmation if changed taxonomy); keep exact genre order in descriptor rows.
3. Import *only* `scorpions_phase02_rows_ONLY.csv` as new rows. Do not import the catalog audit as descriptors.
4. Keep source URLs attached for reproducibility. Run `scripts/validate-descriptors.ts` and verify no duplicate IDs, unknown genre tokens or malformed 27-column rows.
5. All files UTF-8 with BOM for mobile/Excel compatibility; no artwork or copyright-protected lyrics reproduced.

## Claude import note (Oct 2026)

- New genre token `popmetal` (parents heavymetal, pop). Rows imported as delivered.

## Claude enrichment (reception pass, Oct 2026)

- Reception rows in `docs/descriptors/reception/scorpions.csv`.
- sounds_like checked: Lonesome Crow's Black Sabbath, Led Zeppelin, Rolling Stones confirmed (AllMusic, Barry Weber); Fly to the Rainbow's Hendrix confirmed (AllMusic, Rivadavia; Ultimate Classic Rock); In Trance's Hendrix kept (Sputnikmusic contributor); Virgin Killer adds Jimi Hendrix (Sputnikmusic: "an intriguing meeting of Hendrix and Anatolia"); Lovedrive adds Van Halen (AllMusic), AC/DC and Aerosmith (Classic Rock/Louder), Led Zeppelin (Apple Music: Holiday "a sort of Stairway to Heaven"); Animal Magnetism's Boston confirmed (Apple Music); Blackout adds Iron Maiden (Apple Music on Dynamite). UFO and MSG excluded (members' bands); Eleanor Rigby interpolation is borrowed material.

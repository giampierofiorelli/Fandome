# Fandome — Bee Gees — Phase 04 import

**Artist:** Bee Gees, existing `artist_id=beegees`; repository `giampierofiorelli/Fandome`, branch `descriptors` (read-only), checked 28 October 2026.

**Scope:** Strictly the next four new studio albums after the four rows delivered in Phase 03. No repeats of Phase 01 (1965–1968), Phase 02 (1968–1970) or Phase 03 (1971–1974). `docs/descriptors/beegees.csv` was also checked: the four target records were absent at the time of inspection; album titles and dates were already in `src/data/catalog.ts`. Use the provided IDs exactly and avoid additional catalogue entries.

| album_id | original album | year | action |
|---|---|---:|---|
| `beegees-maincourse` | Main Course | 1975 | import draft descriptor only |
| `beegees-childrenoftheworld` | Children of the World | 1976 | import draft descriptor only |
| `beegees-spiritshavingflown` | Spirits Having Flown | 1979 | import draft descriptor only |
| `beegees-livingeyes` | Living Eyes | 1981 | import draft descriptor only |

**No new vocabulary requested:** the Phase 04 genre tokens are already in `scenes.ts`; all instrument and production tokens are in the matching lexicons, including `arp2600` and `falsetto`. All rows have 27 columns, whole-number 0–5 ratings, status `draft`, English as language, and notes at most 15 words. Genre order is intentionally meaningful; all genre token/source relationships are explicit in the evidence CSV.

## Decisions Claude must preserve

1. *Main Course*: sole producer **Arif Mardin**. Falsetto is prominently introduced; track/session producer account names ARP 2600. Original 1975 ten-song studio LP only. A MusicBrainz CD reissue erroneously assigns the live 1976 *Edge of the Universe* take as track 9; do not import this live take or its credits. Country and psychedelia are subordinate track-specific flavours.
2. *Children of the World*: Bee Gees produced; Albhy Galuten and Karl Richardson were credited co-producers, so keep all in the producer column. The aborted short Richard Perry session is not an album production credit. Blue Weaver synth, guest Stephen Stills percussion, Boneroo brass. `Stevie Wonder` in `influenced_by` based on Barry Gibb's *contemporaneous* direct acknowledgment for the 1975–76 direction.
3. *Spirits Having Flown*: entirely new 1979 studio album (recorded 1978). *Saturday Night Fever* soundtrack and *Bee Gees Greatest* are excluded. Herbie Mann flute and Chicago horns apply to selected tracks; no fabricated machine make. `influenced_by` empty, as no album-specific named-artist testimony was found.
4. *Living Eyes*: acoustic/electric session-player pop-rock direction, largely natural vocals; **only Soldiers** is a documented falsetto-led track, so the `falsetto` production token comes last. One-track sitar belongs to *I Still Love You*. Album producers Bee Gees/Galuten/Richardson, not the instrumental guests.
5. These are editorial numeric ratings and artist resemblances. Only named, sourced artist/producer testimonies go in `influenced_by`. The December 1976 direct Barry Gibb quote explicitly names **Stevie Wonder** for the new sound (not Beatles/Neil Sedaka for these two albums). A producer and instrumental guest is not an influence simply by virtue of being involved.

## ZIP contents

- `beegees_phase04_rows_ONLY.csv`: the four new album descriptor rows, exactly 27 fields.
- `beegees_phase04_sources.csv`: independently checkable source links by album and narrow claim.
- `beegees_phase04_genre_evidence.csv`: one per genre field, in field order, with scope.
- `beegees_phase04_evidence-notes.md`: detailed, qualified rationale for scorings, sounds, producers and influences.
- `beegees_phase04_catalog-audit.csv`: target album entries and next-phase planning; no duplicate catalogue adds.
- `CLAUDE_IMPORT.md`: this import handoff.

**Next phase (Phase 05):** *E.S.P.* (1987), *One* (1989), *High Civilization* (1991), *Size Isn't Everything* (1993). Check descriptor/catalogue state again before starting and skip any rows subsequently imported.


## Claude import note

- 4 rows appended; no new tokens.
- Living Eyes: Barbra Streisand removed from sounds_like: her Guilty (1980) was written and produced by Barry Gibb, Galuten and Richardson, the same team as this album (a self-reference).
- Main Course / Children of the World: Stevie Wonder kept both as influence (Barry Gibb, 1976) and likeness.
- Reception researched by Claude.

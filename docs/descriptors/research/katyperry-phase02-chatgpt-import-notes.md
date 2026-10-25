# Katy Perry — Fandome descriptors Phase 02 (incremental import)

**Artist ID:** `katyperry`  
**Branch read:** `descriptors`, 25 October 2026 (read-only)  
**Scope:** THREE already-catalogued original studio albums. Phase 01 (2001–2013) is NOT included. Do not replace or duplicate older rows.

## New phase rows

| Fandome album_id | title | year | type | catalogue operation |
|---|---|---|---|---|
| `katyperry-witness` | Witness | 2017 | studio | existing, preserve id |
| `katyperry-smile` | Smile | 2020 | studio | existing, preserve id |
| `katyperry-143` | 143 | 2024 | studio | existing, preserve id |

The catalogue entry reviewed lists, in order, *One of the Boys* (2008), *Teenage Dream* (2010), *Prism* (2013), *Witness* (2017), *Smile* (2020), and *143* (2024); Phase 01 adds the early *Katy Hudson* (2001). `docs/descriptors/katyperry.csv` was absent in the branch at Phase 01 review. On import, re-check it: do not overwrite any rows imported since the phase 01 research.

## New catalogue albums and collaborative billing

- **Albums to add to catalogue in this phase:** NONE. The three ids and titles already exist.
- **Collaborative/billing exceptions:** NONE. All three records are solo artist studio albums. Individual features (Migos and Nicki Minaj on *Witness*; 21 Savage, Doechii, JID, Kim Petras on *143*) do not become `coBilled.ts` album records.

## New tokens to add before validation

- `vaporwave` — named on *Witness*'s “Tsunami” by The A.V. Club; **track-level analogy**, use `vaporwave` as its own genre rather than `chillwave`.
- `edmpop` — AllMusic describes *Witness* as “EDM-pop”; distinct compound style to retain as written.
- `futurehouse` — Album of the Year explicitly lists future house for *Witness* as a secondary genre; unlike existing `futurepop`, this is a separate house style.
- `italohouse` — The Guardian describes *143*'s “Lifetimes” as invoking **Italo house**; narrow texture (not entire LP).
- `poptrap` — Pitchfork describes *143* as **pop-trap**; distinct label from listed `trappop`.
- **New instrument tokens:** NONE. `guitar` from *143*'s “Wonder” is already in the actual `src/data/instruments.ts` and full guide, even though it was missing from the abbreviated user prompt list. Unspecified guitar is not labelled electric/acoustic.
- **New production tokens:** NONE.
- Add each new genre to both `scenes.ts` and `genreFamilies.ts` (appropriate parents), and update validator token list if the validator is still hard-coded.

## Source and credit caveats

- *Witness*: originally released 9 June 2017, while a Universal Italian product page specifies a 29 September 2017 vinyl edition. Describe 15-track base album, not 17-track deluxe. Do not add exclusive deluxe producers.
- *Smile*: issued 28 August 2020; label display includes later bonuses, which are out of scope. Label and Apple Music disagree in abbreviated producer displays: Apple explicitly credits G Koop co-producer on “Smile” and John Ryan producer on “Tucked”; both appear with source links and caveat.
- *143*: 20 September 2024, original 11 tracks; do not treat *1432* as a new studio album. Qobuz and MusicBrainz identify Malibu Babie on “Gorgeous”, not all album aggregators do. Omit vocal-producer-only personnel Ryan Ogren and Kalani Thompson from the `producers` field; omit Max Martin, who is a writer, not a producer, on “Gorgeous”.
- *Witness* producer and player details derive from Universal/Capitol label credits; later *143* instrument models or software are **not known** unless explicitly credited. `sampling` does not automatically imply `sampler` machine.
- `influenced_by` is deliberately blank on all three records: similarity/sample/interpolation/collaboration are not direct declarations of creative influence. Comparative acts go in `sounds_like`.
- Whole-album numeric ratings are explicitly editorial judgments based on descriptions, not measured BPM or production specifications. `status=draft` throughout. `notes` ≤15 words each.

## Import files

1. `katyperry_phase02_rows_ONLY.csv` — header + exactly 3 rows, 27 fields each.
2. `katyperry_phase02_sources.csv` — traceable source records per album.
3. `katyperry_phase02_genre_evidence.csv` — each genre with source, scope and uncertainty.
4. `katyperry_phase02_evidence-notes.md` — genre/instrument/production/scale rationale and critics' disagreements.
5. `katyperry_phase02_catalog-audit.csv` — keep/add status.
6. `CLAUDE_IMPORT.md` — this file.

## Next phase

**No Phase 03 is planned for the studio discography.** MusicBrainz currently lists seven studio albums from *Katy Hudson* (2001) through *143* (2024). Katy Perry released the 2025 single *bandaids* and the 2026 two-track *Watch It Burn* single (including *bandaids*); they are **not studio albums**. A 2026 compilation (*The Ones That Got the Plays*) is catalogued, but its landmark eligibility has not been established. An optional separate release audit should assess whether any EP, soundtrack, remix or retrospective release merits a new phase, rather than automatically treating new singles as albums. Sources: https://musicbrainz.org/artist/122d63fc-8671-43e4-9752-34e846d62a9c ; https://www.universalmusic.ca/2026/06/25/give-her-the-gasoline-katy-perry-releases-watch-it-burn/ ; https://music.apple.com/us/album/watch-it-burn-single/6779718296 .

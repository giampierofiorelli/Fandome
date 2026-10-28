# CLAUDE_IMPORT — Nena — Phase 01 — 28 October 2026

## Action

Import **only** the four new rows in `nena_phase01_rows_ONLY.csv` with exactly 27 guide columns; each row is `draft`. The other five files are audit and evidence. **Do not commit existing artists’ rows, publish the results as `reviewed`, or recreate a 1984 international compilation.** Add the artist ID `nena` if it is still absent, then add all four album entries and import their descriptors. Run the repository validator and tests. Recheck live catalog before editing.

### Four phase-01 rows (album ids fixed in this ZIP)

1. `nena-nena` — **Nena** (1983), `studio`, band Nena.
2. `nena-fragezeichen` — **? (Fragezeichen)** (1984), `studio`, band Nena.
3. `nena-feuerundflamme` — **Feuer und Flamme** (1985), `studio`, band Nena.
4. `nena-itsallinthegame` — **It's All in the Game** (1985), `studio`, band Nena (English-language rerecorded/translated version of the previous album; a distinct original release, not compilation).

These entries were absent from both `src/data/catalog.ts` and `src/data/seed.ts` when checked, 28 Oct 2026; `docs/descriptors/nena.csv` not found. Artist ID `nena` is **proposed**, not validated by GitHub tests in this archive. Title slugs follow the guide’s remove-punctuation rule. The artist is used for both historical band and future solo identity as an editorial recommendation, not an automatic co-billed album credit. No co-billed album identified in phase 01.

### Catalog exclusions and skipped rows

- **No previously described Nena albums were found** in `docs/descriptors/nena.csv` (file absent in branch). No preexisting album ids to reuse for this phase.
- **99 Luftballons** (1984 international LP) is a *compilation* drawing from the first two LPs with some English re-recordings, not a new original German studio record: excluded under the live/compilation policy (see official discography and MusicBrainz).
- **The Stripes** (1980) predates the Nena identity and was released under a different band name: do not attribute it to Nena.
- Reissues, 2008/2024 bonuses and new mixes do not count as separate 1980s album rows.

### Genre / instrument / production tokens

- **New genre:** `baroquerock` (album `nena-fragezeichen`, a texture/comparison from Alan Severa's 1984 AllMusic review, which explicitly says *70s Baroque rock*). Add to the Genre union and `GENRE_PARENTS`; review a suitable `rock` parent. **Do not substitute `baroquepop`**, which is a different name.
- **New instruments:** none. All non-empty instrument tokens are currently in `instruments.ts`.
- **New production tokens:** none. `digitalediting`, `hornarrangements`, and `stringarrangements` exist in `production.ts`.
- Distinguish studio **digital editing/mixing** from full **digital recording**. No named hardware model can be reliably certified for these albums from consulted credit sources.

## ARTIST INFLUENCES — artist-wide only, direct source

In a **2016 first-person interview**, Nena named these formative artists or groups as music that shaped her early musical outlook, in contrast to critics’ sonic comparisons. **Do not blindly populate `influenced_by` for every album**; those columns require album-specific evidence, so they remain empty in all four CSV rows.

Source: https://www.iconvsicon.com/2016/09/15/99-luftballons-over-america-nena-on-her-longevity-and-first-u-s-tour/ (interviewer Jason Price, 15 Sept 2016)

- **Black Sabbath**, with her first purchased single *Paranoid* (song on *Paranoid*, 1970).
- **The Rolling Stones**, particularly the song *Angie* (original album *Goats Head Soup*, 1973).
- **Neil Young**.
- **Bob Dylan**.
- **David Bowie**.
- **Pink Floyd**.
- **Ramones**.
- **Blondie**.
- **The Pretenders**.
- **Eric Burdon and The Animals**, whose concert she explicitly recalls as an early inspiration.

Second corroborating recollection: https://www.the-berliner.com/berlin/nena-interview-english/ — Black Sabbath, the Rolling Stones and David Bowie.

## Important caveats before import

1. **Nena band vs solo:** five-person 1980s group existed as *Nena*. The singer later released music solo under the same name. The original group’s four German LPs are 1983/1984/1985/1986, but the extra **English 1985 album** is a distinct international re-recording; it is included here to preserve release chronology. Avoid reclassifying the solo projects as work by the 1982–87 five-person line-up.
2. **Dates:** Nena official website says 17 Jan 1983 for debut versus 14 Jan in Germancharts; 28 Jun 1985 for Feuer und Flamme versus 24 Jun in Germancharts; year is uncontested. English release official 10 Nov 1985.
3. **Genre scope:** only original records, not expansions. `baroquerock` is a limited album texture and new candidate. Arena-rock and hard-rock contributions on 1985 records are explicitly some tracks, kept in long-tail genre positions.
4. **Instruments:** saxophone on second LP only on two credited songs, not all; 1985 orchestral strings/guest sax/synth bass documented from track credits; no speculative models.
5. **Vocal-language flags:** confirm the vocal language of *Sois Bienvenu* (1984) and *Auf Wiedersehen* (1985 English LP). Rows use conservative `de` and `en` respectively until verified; titles alone prove nothing.
6. **Influence separation:** formative Black Sabbath / Stones / Bowie etc. are documented *artist-wide*. All CSV `influenced_by` fields are intentionally blank; `sounds_like` Connie Francis / Pat Benatar / Stevie Nicks comes from album reviewers. Dalbello is lyric translator and backing singer, NOT an influence or album producer.

## Next phase (02) — strictly new, chronological

- **Eisbrecher** (1986), Nena band's fourth original German-language studio LP.
- **Wunder gescheh'n** (1989), Nena first solo studio LP.
- **Bongo Girl** (1992), solo studio LP.
- **Und alles dreht sich** (1994), solo studio LP.

Check whether any important early-1990s non-rock album explicitly requested by project (children's, soundtrack, etc.) should be included later; never add live or compilation records as filler. The 1990 children's project *Komm lieber Mai...* may merit its own phase after scope review, but does not change this phase.

## Claude import note (Oct 2026)

- New genre token `baroquerock` (parents rock, baroquepop).
- Artist added with band and solo studio albums (15 titles, 1983–2020); scene DE de 1980 pop,rock,synthpop (a local scene singing in German). Still active.
- Artist influences from Nena's own words; Eric Burdon and The Animals filed as The Animals.

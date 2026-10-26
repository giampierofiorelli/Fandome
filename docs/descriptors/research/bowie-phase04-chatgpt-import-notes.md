# David Bowie — Fandome Phase 04 (incremental import only)

## Archive contents
- `bowie_phase04_rows_ONLY.csv`: **four** new 27-column rows; no repeats from phases 01–03.
- `bowie_phase04_sources.csv`: album-level sources (publication, type, URL, support, strength).
- `bowie_phase04_genre_evidence.csv`: one entry per genre per album, source and scope.
- `bowie_phase04_evidence-notes.md`: rationale, technical evidence, uncertainties and disagreements.
- `bowie_phase04_catalog-audit.csv`: current catalog audit.

## Album IDs in this phase
1. `bowie-lodger` — Lodger (1979), studio, **catalog add**.
2. `bowie-scarymonstersandsupercreeps` — Scary Monsters (And Super Creeps) (1980), studio, **catalog add**.
3. `bowie-letsdance` — Let's Dance (1983), studio, already in catalog (preserve ID).
4. `bowie-tonight` — Tonight (1984), studio, **catalog add**.

The original-era album version is the reference, excluding bonus tracks, expanded editions and later remixes. The 2017 Tony Visconti Lodger remix is evidence of retrospective work, **not** a description of 1979 production. `Scary Monsters (And Super Creeps)` is distinguished from other capitalization conventions; avoid a second catalog entry with alternative punctuation.

## New tokens
- **Genre:** `sophistipop` (AllMusic labels *Tonight* “Sophisti-Pop”; add token and parent mapping, probably `pop`, after verifying semantic consistency).
- **Instrument:** `guitarsynth` (Roland GR-500 guitar synthesizer played by Chuck Hammer on *Scary Monsters*; add corresponding label; do not confuse with keyboard synthesizer).
- **Production:** `emssynthiaks` (EMS Synthi AKS documented for Brian Eno on *Lodger*), `yamahacs80` (Yamaha CS-80 documented for Andy Clark on *Scary Monsters*), `rolandgr500` (Chuck Hammer's instrument on *Scary Monsters*).

Already supported tokens in this phase include `prophet5`, `moog`, `tapeeffects`, `sonicmanipulation`, `hornarrangements`, `stringarrangements`, `onetake`, `overdubbing`, `layeredvocals`, `liverecording`, `chamberlin`, and `mallets` (covers marimba).

## Caveats and audit notes
- The last confirmed `docs/descriptors/bowie.csv` on the `descriptors` branch contained phases 01 and 02; phase 03 had been delivered but was not yet included in that file when checked. **Do not import previous phases from this archive, and do not assume phase 03 was imported.**
- Producer credits only: *Lodger* Bowie/Visconti; *Scary Monsters* Bowie/Visconti; *Let's Dance* Bowie/Rodgers; *Tonight* Bowie/Bramble/Padgham. Brian Eno (creative collaboration) and Bob Clearmountain (engineer) are not added as producers.
- `Lodger`: Brian Eno studio methods, reversal of a Bowie tape for “Move On”; “Boys Keep Swinging” instrumental role swaps. `emssynthiaks` is track-scoped, not a claim that all tracks use it.
- `Scary Monsters`: two stages of recording; Chuck Hammer Roland GR-500 on selected tracks, Andy Clark Minimoog/Yamaha CS-80 on “Ashes to Ashes”. “It's No Game (Part 1)” has Michi Hirota speaking Japanese, but lead sung language is predominantly English: `language=en`. Japanese spoken material is described here rather than making Japanese a main singing language.
- `Let's Dance`: original album is live-player dominated with documented Prophet-5 on selected tracks. Do not assume rhythm-machine sequencing or apply Rodgers' later work methods indiscriminately. The 1983 Rodgers quote refers to arrangement elements; Chic is a documented influence on the album's production. Little Richard is documented as a stylistic point of reference for “Modern Love”.
- `Tonight`: covers, reworkings of Iggy Pop material and Tina Turner/Iggy Pop features remain under **David Bowie**, not co-billed albums. String/horn arrangements do not confer producer status on Arif Mardin or the Borneo Horns. `sophistipop` requires a new genre family mapping.
- Mood/energy/etc. are consistent **editorial** judgments about whole original albums against Fandome anchors. Evidence notes distinguish critical evidence from judgments.
- Sounds-like denotes **editorial resemblance**, not proven artistic influence. `influenced_by` remains empty unless an artist/producer explicitly attested a reference (only *Let's Dance* uses it here).
- Sources were accessed as live web sources for this phase. Strong evidence references a direct artist/producer account, original credit transcription, or named critical review. MusicBrainz genre tags are labeled medium strength.

## Next phase: Phase 05
1. *Never Let Me Down* (1987), studio.
2. *Black Tie White Noise* (1993), studio.
3. *The Buddha of Suburbia* (1993), studio/soundtrack hybrid (verify precise original album attribution and title).
4. *Outside* (1995), studio (official title *1. Outside*; confirm catalog slug and official packaging).

Exclude Tin Machine recordings unless separately justified as co-billed or distinct-band releases. No live-only releases by default. Proceed strictly incrementally.

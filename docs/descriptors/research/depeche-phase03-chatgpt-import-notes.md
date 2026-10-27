# CLAUDE IMPORT — Depeche Mode Phase 03

**Checked:** 27 October 2026 | **Repository:** `giampierofiorelli/Fandome` | **Branch:** `descriptors` (read only) | **Strictly incremental:** 3 original studio albums, 3 CSV data rows ONLY.

## Exclusion rule (critical)

**Do not make compilation albums.** The fourth album previously proposed for Phase 03, **_The Singles 86>98_ (1998), has been explicitly rejected by the user** and has no row, no source data and no catalogue-audit entry here. This takes precedence over Phase 02's outdated roadmap. Future phases must also exclude compilations, including *The Singles 81–85*, *Catching Up with Depeche Mode*, *Remixes 81–04*, *Remixes 2: 81–11* and *The Best Of Depeche Mode*. The mistaken **Phase 02** _The Singles 81–85_ row is not recopied: if unimported, skip that row; if already imported, flag it for removal after protecting any unrelated edits. *101* (1989) was the explicitly agreed **landmark live exception** in the previous phase; no new live album in this ZIP. Do not add *Songs of Faith and Devotion Live*.

## Exactly three Phase 03 rows

| Album ID | Original title | Year | Type | Catalogue status |
|---|---|---:|---|---|
| `depechemode-violator` | *Violator* | 1990 | studio | ADD |
| `depechemode-songsoffaithanddevotion` | *Songs of Faith and Devotion* | 1993 | studio | ADD |
| `depechemode-ultra` | *Ultra* | 1997 | studio | ADD |

**Artist prerequisite:** `depechemode` is still absent from `src/data/catalog.ts` in the public `descriptors` branch at check time; `docs/descriptors/depechemode.csv` is absent there too. Add Depeche Mode to the artist catalogue first, preserving artist ID **`depechemode`**. Claude may have locally imported phases 01–02 already; do not repeat their album rows and do not overwrite them.

**Album additions:** All three albums above need to be added to `catalog.ts` unless already present in Claude's local working tree. Their IDs follow the validator's slug rule. No co-billed albums in Phase 03; `src/data/coBilled.ts` needs no changes.

## New genre, instrument and production tokens

**Genres:** none required, as all Phase 03 genre tokens are already supported by the guide's `scenes.ts` list; `synthpop` and `electropop` remain distinct and must not be merged.

**Instruments:** none required; all instruments in the three rows are covered by the Fandome instrument list (including `uilleannpipes`, `steelguitar`, `harpsichord`, `strings`). `strings` on *Songs of Faith and Devotion* and *Ultra* are **documented live players**; the *Violator* orchestral textures are mostly sampled, so that row does **not** claim live orchestra/strings.

**Production tokens to add** (not currently defined by `production.ts`):

- **`emulatoriii`** = E-mu Emulator III sampler. *Violator*; Audiofanzine technical recording account and Wilder retrospective. **Not** `emulator` or `emulatorii`.
- **`akais1100`** = Akai S1100 sampler. *Songs of Faith and Devotion*; Alan Wilder explicitly identifies this sampler for drum sounds in the original 1993 *Keyboard* interview reprinted at https://www.muzines.co.uk/articles/modus-operandi/10646 . Not `akais1000`.
- **`rolandsystem700`** = Roland System 700 modular synthesizer. *Songs of Faith and Devotion*, explicitly described by Wilder in the same 1993 interview. Not the ARP 2600.
- **`akais3200xl`** = Akai S3200XL sampler. *Ultra*; listed in producer Tim Simenon's original April 1997 *Future Music* studio inventory, https://dmlive.wiki/wiki/Ultra_recording_equipment . **Not** the distinct S3200 in the existing token `akais3200`.

**Existing production tokens used:** `sampling`, `drumloop`, `synthprogramming`, `drumprogramming`, `programming`, `distortion`, `stringarrangements`, `roomambience`, `arp2600`, `akais1000`, `minimoog`, `emsvcs3`, `oberheimob8`, `cubase`, `korgprophecy`, `juno106`, `rolandjv1080`, `logic`. **Check the repo's validator list** after adding the four new exact-model production tokens. A list of studio hardware does not establish use on every song; this is noted in the evidence.

**ARTIST INFLUENCES:** phase-01-only and not repeated. The album-specific `influenced_by` for *Violator* is `Tangerine Dream` (explicit Wilder statement re `Waiting for the Night`) and `Kraftwerk` (qualified critic-identified homage on `World in My Eyes`); both have sources in source CSV. `influenced_by` is empty for the other two albums because no sufficient album-specific artist-named evidence was confirmed. Sample sources, guest musicians, and cover artists are excluded.

## Producer-role caveats

- *Violator*: `Depeche Mode|Flood` as credited; François Kevorkian **mixer**, not producer; Daniel Miller / Phil Legg credited on `Enjoy the Silence` **mix**, not a co-producer of this LP.
- *Songs of Faith and Devotion*: `Depeche Mode|Flood`; Mark Stent **mixer**, Wil Malone **string arranger**, not additional producers.
- *Ultra*: `Tim Simenon` **only**; Dave Clayton programming/arranging, Kerry Hopwood programming, Q engineer/mixing, Daniel Miller guest instrument, not co-producers.

## Original edition caveats

- *Violator* original UK issued 19 March 1990 (some US sources say 20 March); exclude remaster bonus tracks.
- *Songs of Faith and Devotion* original UK 22 March 1993; exclude `Songs of Faith and Devotion Live` and Brian Eno's *I Feel You* single **remix** production from the original studio album.
- *Ultra* original UK 14 April 1997; some US sources date 15 April; `Uselink`, `Jazz Thieves` and hidden `Junior Painkiller` are pieces of the original issue, not new EPs.
- The unapproved compilation *The Singles 86>98* is wholly excluded here.

## Next phase: Phase 04 (studio albums only)

1. *Exciter* (2001) — `depechemode-exciter`.
2. *Playing the Angel* (2005) — `depechemode-playingtheangel`.
3. *Sounds of the Universe* (2009) — `depechemode-soundsoftheuniverse`.

After that, Phase 05: *Delta Machine* (2013), *Spirit* (2017), *Memento Mori* (2023). **No compilations, remix compilations or ordinary live albums** will be proposed. A new landmark EP/collaboration must independently meet user's exception threshold.

## Files in this ZIP

- `CLAUDE_IMPORT.md`: these import instructions, no code.
- `depechemode_phase03_rows_ONLY.csv`: header exactly **27 columns** + 3 Phase 03 rows.
- `depechemode_phase03_sources.csv`: citations, credited roles, research strength.
- `depechemode_phase03_genre_evidence.csv`: genre scope & evidence per individual genre.
- `depechemode_phase03_evidence-notes.md`: album-by-album instrumentation/production and scale anchors, disputes.
- `depechemode_phase03_catalog-audit.csv`: exactly 3 additions, no compilation.

Claude should add the artist, three albums and four new production tokens in its local tree, then run `scripts/validate-descriptors.ts`. Nothing has been written to GitHub by ChatGPT.


## Claude import note (Oct 2026)
- Ids mapped to the site's: Violator `d-violator`, Songs of Faith and Devotion `d-sofad`, Ultra `depeche-ultra` (artist `depeche`).
- Violator: Kraftwerk moved from `influenced_by` to `sounds_like` (a critic hearing a homage is a comparison, not a documented influence; owner rule). Tangerine Dream stays (Alan Wilder on Waiting for the Night).

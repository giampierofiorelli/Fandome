# CLAUDE_IMPORT — SHAKIRA / PHASE 01

**Research cutoff:** 26 October 2026. **Artist id:** `shakira`, confirmed in `src/data/catalog.ts` (branch `descriptors`). **Status:** `draft` for all rows. **Incremental payload:** exactly 4 rows (no preceding phase exists). `docs/descriptors/shakira.csv` was absent on the branch at research time.

## Album rows and catalogue changes

| Album id | Title | Year | Type | In catalogue? | Action |
|---|---|---:|---|---|---|
| `shakira-magia` | Magia | 1991 | studio | no | **ADD** |
| `shakira-peligro` | Peligro | 1993 | studio | no | **ADD** |
| `shakira-piesdescalzos` | Pies Descalzos | 1995 | studio | yes | Keep existing id |
| `shakira-dondeestanlosladrones` | ¿Dónde Están los Ladrones? | 1998 | studio | yes | Keep existing id |

**Important for Claude:** Add Magia and Peligro to `src/data/catalog.ts` **before** running the descriptor validator; both are official studio albums. Preserve original release year despite later international release dates. The CSV contains no album from future phases. No co-billed album in this phase.

## Tokens to add to the repository

- **New genre:** `bachata` — explicitly named by Apple Music editorial for "Te Necesito" on *Pies Descalzos* and "Moscas en la Casa" on *¿Dónde Están los Ladrones?*. Add to `src/data/scenes.ts`, genre families as appropriate and the hard-coded genre set in `scripts/validate-descriptors.ts`.
- **New instrument:** `oud` — listed in *¿Dónde Están los Ladrones?* AllMusic album personnel, named performers Joe Zeytoonian and Michelle Massad. Add to `src/data/instruments.ts`.
- **New production tokens:** none. `jupiter8` is already present in branch `descriptors` and in its validator. No new voice/lyric tags.

## ARTIST INFLUENCES — Shakira (artist-wide only, phase 01)

These are sources for **Shakira's music overall** and must **not automatically populate the album-level influenced_by field**:

| Named influence | Supporting statement | Source |
|---|---|---|
| Led Zeppelin | Shakira says she listened to the band and loved that rock sound growing up | [Interview, Today's Outlook](https://www.todaysoutlook.com/success-stories/details/sensational-shakira) |
| The Cure | Named in Shakira's direct recollection of formative bands | [Interview, Today's Outlook](https://www.todaysoutlook.com/success-stories/details/sensational-shakira) |
| The Police | Named in the same first-person recollection | [Interview, Today's Outlook](https://www.todaysoutlook.com/success-stories/details/sensational-shakira) |
| The Beatles | Named in the same first-person recollection; confirmed in AllMusic biography | [Interview, Today's Outlook](https://www.todaysoutlook.com/success-stories/details/sensational-shakira), [AllMusic biography](https://www.allmusic.com/artist/shakira-mn0000790797) |
| Nirvana | Named in the same first-person recollection | [Interview, Today's Outlook](https://www.todaysoutlook.com/success-stories/details/sensational-shakira) |
| Radiohead | Journalist reports as a group that influenced Shakira; not presented as a direct quote | [Guardian profile by Rory Carroll, 23 March 2007](https://www.theguardian.com/uk/2007/mar/23/colombia.world) |
| The Rolling Stones | Shakira directly calls the band's rock icons an inspiration in a 2026 interview | [Associated Press interview](https://apnews.com/article/18f9fda8408d8c80dc846f90fdba8541) |

**Album-specific documented influences:** *Pies Descalzos* is explicitly described by Apple Music's editors as inspired by **Aterciopelados** and **Alanis Morissette**. These appear in that album's `influenced_by` column, supported by https://music.apple.com/us/album/pies-descalzos/193662156 . On *¿Dónde Están los Ladrones?*, critics mention Alanis Morissette and Sheryl Crow for sonic resemblance, not direct influence; they appear only in `sounds_like`.

## Caveats / evidence quality

- For *Magia* and *Peligro*, most publicly accessible instrumental and producer credits are transcriptions attributed to original sleeves. There are contemporaneous official vinyl editions verified through MusicBrainz, but original jacket scans could not be independently read. Hence row-level `confidence=low` and several empty scales.
- *Peligro* has an explicit Gabriel Muñoz co-producer attribution on a jacket-credit transcription, while a secondary songwriter site credits Eduardo Paz alone. The co-producer is included, but **human sleeve verification is recommended**.
- Qobuz credits Tim Mitchell as producer for one *Pies Descalzos* track, whereas original-era MusicBrainz credits Shakira/Ochoa. Tim Mitchell is omitted from this album row pending version-specific verification. Emilio Estefan Jr. is credited **executive** producer on *¿Dónde Están los Ladrones?*, despite more sweeping editorial shorthand; excluded per Fandome rules.
- `worldmusic` is a **low-specificity** retail label on both later albums, last in genres. `bachata` occurs on particular songs; never interpret genre-evidence scope as every track.
- *¿Dónde Están los Ladrones?* uses `es|ar` because "Ojos Así" contains Arabic, not because the whole album does.
- New tokens will fail the existing validator **until imported**. Claude should add tokens and catalogue records, merge only these four new rows, then run validation and tests.

## Discography forward audit (not rows in this ZIP)

The branch catalogue presently omits further released albums. In addition to the phase-01 adds, **`MTV Unplugged` (2000, live, award-winning landmark)**, **`Sale el Sol` (2010, studio)** and **`Shakira` (2014, studio)** require entries in later phases. *MTV Unplugged* warrants the landmark-live exception: [GRAMMY official history](https://www.grammy.com/news/remember-when-shakira-unplugs-mtv-wins-latin-grammy/).

**Phase 02, chronological (four new rows):** `MTV Unplugged` (2000, live landmark); `Laundry Service` (2001); `Fijación Oral, Vol. 1` (2005); `Oral Fixation, Vol. 2` (2005). No carryover from phase 01. Review exact MTV title and release credit before adding to catalogue. Subsequent studio phases: *She Wolf* (2009), *Sale el Sol* (2010), *Shakira* (2014), *El Dorado* (2017), *Las Mujeres Ya No Lloran* (2024).

## ZIP contents

- `CLAUDE_IMPORT.md` — this manifest, imports, artist influence sources, next phase.
- `shakira_phase01_rows_ONLY.csv` — **27 columns**, four new rows.
- `shakira_phase01_sources.csv` — sources and what each supports.
- `shakira_phase01_genre_evidence.csv` — one entry per genre with album/track/texture scope.
- `shakira_phase01_evidence-notes.md` — album-specific justifications and conflicts.
- `shakira_phase01_catalog-audit.csv` — exact phase album catalogue audit.

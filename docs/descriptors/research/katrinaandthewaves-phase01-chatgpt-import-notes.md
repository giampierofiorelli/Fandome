# Fandome import — Katrina and the Waves, Phase 01

**Status:** research draft. Four original-era studio albums, chronological, with no reuse of prior batches. Read-only catalog audit performed on `giampierofiorelli/Fandome` `descriptors` branch, 2026-10-28.

## Phase rows and intended IDs

| ID | Title | Original release | Type | Catalog |
|---|---|---:|---|---|
| `katrinaandthewaves-walkingonsunshine` | Walking on Sunshine | 1983 | studio | ADD |
| `katrinaandthewaves-katrinaandthewaves2` | Katrina and the Waves 2 | 1984 | studio | ADD |
| `katrinaandthewaves-katrinaandthewaves1985` | Katrina and the Waves | 1985 | studio | ADD |
| `katrinaandthewaves-waves` | Waves | 1986 | studio | ADD |

**Artist:** ADD `katrinaandthewaves` (Katrina and the Waves). Neither `src/data/catalog.ts` nor `src/data/seed.ts` contains the group at research time. No existing `docs/descriptors/katrinaandthewaves.csv` was found; therefore no rows were skipped.

**Artist credit:** all four records credited solely to Katrina and the Waves; no co-billed albums in this phase.

## ARTIST INFLUENCES (documented for the group, NOT automatically inserted into the four `influenced_by` fields)

Alex Cooper directly named the following influences on the band's early collective sound in a 2018 interview with Mark Packham for Reverb (`https://reverb.com/news/katrina-and-the-waves-are-selling-their-gear-on-reverb`): **The Rolling Stones; The Beatles; Etta James; Eagles; Steve Miller; Linda Ronstadt**. He also explicitly identified **Tamla Motown** and **Stax Records** as influences; these are labels/scenes and should NOT be converted into artist entities.

Katrina Leskanich also named **The Mamas & the Papas; Elvis Presley; Carole King; The Partridge Family; The Osmonds; Rare Earth; Cher; Karla Bonoff; Emmylou Harris; Heart; Pat Benatar; The Shirelles; The Crystals; The Shangri-Las; The Velvet Underground; Patti Smith** in a 2012 interview (republished 2020) about her personal formative influences: `https://www.rediscoverthe80s.com/2020/08/interview-with-katrina-leskanich.html`. These are *the singer's broad personal influences*, not direct proof for any individual album.

Specific, album-context influence: producer/engineer **Scott Litt** named **Wham! — Wake Me Up Before You Go-Go (Make It Big)** as a rhythmic inspiration when reworking the **1985** hit recording of `Walking on Sunshine` (Barbara Schultz, *Mix*, 2017, `https://www.mixonline.com/recording/classic-tracks-katrina-waves-walking-sunshine-430551`). Accordingly, `Wham! (Make It Big)` appears on *Katrina and the Waves* (1985) `influenced_by` only.

## Release caveats for Claude

- The 1983 *Walking on Sunshine* was released in Canada on Attic, and some UK copies are titled *Katrina and the Waves*. The distinct 1985 Capitol self-titled album comprises recordings/reworkings of earlier songs. Preserve both albums and avoid duplicates from the variant title.
- The band website lists `Katrina and the Waves (1984)` for the second Attic album; its original title on release/critical listings is *Katrina and the Waves 2*.
- *Shock Horror!* (as **The Waves**, 1983) is excluded in this pass: released under an earlier band name, and before the Katrina and the Waves name; user instruction explicitly excludes records under previous act names. It can be researched separately if explicitly requested.
- *The Original Recordings 1983–1984* (2003), *Roses* (1995), greatest-hits and 1996 reissues are compilations and excluded.
- *Waves* belongs to **1986**, per official discography and January 1986 recording credits. Certain AllMusic entries display 1985; do not adopt that metadata.
- For the 1985 LP, Pat Collier and the band have original producer credits; Scott Litt receives additional production and mixing credits, while MusicBrainz release-level credit says co-producer. Keep his extensive documented work in notes and do not blindly convert an additional-production role to full producer.
- Exact synthesizer sampler models are NOT validated; the engineer speculated about an Emulator but gave no confident identification. The 1984 `linndrum` production-family tag does not assert a specific model.

## New vocabularies and catalog additions

- **New genre tokens:** none. All proposed genre tokens exist in `src/data/scenes.ts`.
- **New instrument tokens:** none. All proposed instrument tokens exist in `src/data/instruments.ts`.
- **New production tokens:** none. All proposed production tokens exist in `src/data/production.ts`.
- **Catalog additions:** four above, and artist `katrinaandthewaves`. Full audit in `_catalog-audit.csv`.

## Files and implementation

The 27-column `_rows_ONLY.csv` contains only Phase 01. The `_sources.csv` contains working, independently identified release/review/interview links. The `_genre_evidence.csv` describes source and album-level / individual-track scope per genre. `_evidence-notes.md` gives the justifications and disagreements. The `_catalog-audit.csv` lists additions.

Claude: add catalog records and the artist; import ONLY these four rows; validate with `npx vite-node scripts/validate-descriptors.ts`, then run repository tests. Do not mark `reviewed` until second-party verification. Import to `docs/descriptors/katrinaandthewaves.csv` on `descriptors` branch.

## Planned next phase

Phase 02: *Break of Hearts* (1989), *Pet the Tiger* (1991), *Edge of the Land* (1993), *Turnaround* (1994). Later: *Walk on Water* (1997). No live albums or compilations.


## Claude import note

- 4 rows imported; the 1985 self-titled album id is katrinaandthewaves-katrinaandthewaves (catalogue slug; no other album has that title).
- Catalogue: 9 studio albums 1983-1997; Shock Horror! (as The Waves) left out. Added to LEGACY (disbanded 1999).
- Scene GB en 1980 rock,pop. Artist influences from Alex Cooper and Katrina Leskanich (labels Motown/Stax left out).
- 1985 album: Wham! (Make It Big) kept as influence: Scott Litt modelled the Walking on Sunshine rework rhythm on Wake Me Up Before You Go-Go (a documented technique model).

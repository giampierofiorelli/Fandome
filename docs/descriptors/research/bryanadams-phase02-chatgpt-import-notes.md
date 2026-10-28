# Fandome import — Bryan Adams — Phase 02

**Artist:** Bryan Adams  
**Artist ID:** `bryanadams`, proposed in Phase 01: not found in either `catalog.ts` or `seed.ts` at that check.  
**Deliverable:** Strictly incremental Phase 02, **only four new studio album rows**, 27 columns each.  
**State:** `draft`, pending human/second-party review. Read-only research; no changes on GitHub.

## Import these four albums only

| `album_id` | Album | Year | Type | Catalogue action |
|---|---|---:|---|---|
| `bryanadams-intothefire` | Into the Fire | 1987 | studio | Add if missing |
| `bryanadams-wakinguptheneighbours` | Waking Up the Neighbours | 1991 | studio | Add if missing |
| `bryanadams-18tilidie` | 18 til I Die | 1996 | studio | Add if missing |
| `bryanadams-onadayliketoday` | On a Day Like Today | 1998 | studio | Add if missing |

The repository was checked in Phase 01. Recheck current branch before adding albums and **preserve any existing IDs** that appeared after that audit. No pre-existing descriptor row was identified for this artist in the Phase 01 check.

## ZIP contents / import order

1. `bryanadams_phase02_rows_ONLY.csv` — exactly four 27-column rows (UTF-8 with BOM).
2. `bryanadams_phase02_sources.csv` — album-specific original-issue credits, interviews, direct sources, critic indexes.
3. `bryanadams_phase02_genre_evidence.csv` — one evidence row per genre, with scope and strength.
4. `bryanadams_phase02_evidence-notes.md` — production, instruments, first-person evidence, competing interpretations and edition caveats.
5. `bryanadams_phase02_catalog-audit.csv` — which album IDs must be added if still absent.
6. `CLAUDE_IMPORT.md` — this checklist.

Before descriptor import, create the artist and missing album entries in Fandome's catalogue. Verify current `catalog.ts`, `seed.ts`, `docs/descriptors/bryanadams.csv` and the co-billed catalogue, then run `scripts/validate-descriptors.ts` and any project test suite. Append **only** this phase's rows to any existing Bryan Adams descriptor CSV; do not replace Phase 01.

## Tokens to add to taxonomy

**New genre tokens:** none. (`poprock`, `aor`, `heartlandrock`, `hardrock`, `rock`, `arenarock`, `softrock`, `flamenco`, `alternativerock` are in `src/data/scenes.ts` as checked in Phase 01.)  
**New instrument tokens:** none.  
**New production tokens:** none.  
**Co-billed albums:** none; the Melanie C duet is a track feature, not a co-billed album.

## Important production / credits distinctions

- *Into the Fire*: credited released-track sequencer on the title song. Jim Vallance's Emulator II and Linn were **songwriting tools**, which do not substantiate `emulatorii`, `sampling` or a Linn production token on album masters. Bob Clearmountain and Bryan Adams are the producers; Vallance is the co-writer/performer.
- *Waking Up the Neighbours*: the first-issue booklet explicitly states the Sony PCM-3348 digital tape machine: `digitaltape|digitalrecording`. **Mutt Lange + Bryan Adams** produced; Clearmountain mixed. Do not add other producers from the abandoned early 1989 recording sessions.
- *18 til I Die*: contemporary original issue and Adams's Sound on Sound interview establish the mobile **Sony 3348 digital multitrack**; Olle Romo did programming; Paco de Lucía's flamenco guitar applies only to one song. Original US 1996 version has 13 tracks; various international editions differ.
- *On a Day Like Today*: **four producer names**, varying by track; original booklet documents Mellotron, Wurlitzer piano, actual string arrangement, programming and Melanie C's single-track duet. Do not import all optional bonus tracks from later official-site listings.

## ARTIST INFLUENCES

Already researched and listed **with sources** in Phase 01 CLAUDE_IMPORT.md. This is Phase 02, so the artist-wide list is **not repeated**. None of the named producers or previous co-writers is inserted as an album-specific musical influence by default. All four `influenced_by` cells remain blank pending actual first-person album-linked evidence.

## Exclusions and next phase

Excluded: *So Far So Good* (1993), *The Best of Me* (1999), both compilations; *Live! Live! Live!* (1988), *Unplugged* (1997) and any live Royal Albert Hall/MTV sessions, all live or concert releases. *Robin Hood: Prince of Thieves* and *Don Juan DeMarco* are films with separately released soundtrack songs, not new Bryan Adams studio album rows.

**Phase 03 candidates:** *Room Service* (2004), *11* (2008), *Tracks of My Years* (2014; newly recorded studio covers, not a hits compilation) and *Get Up* (2015). Confirm studio status and any pre-existing rows when starting that phase.


## Claude import note

- 4 rows appended as delivered; no new tokens; catalogue already had all four albums.
- Def Leppard / Foreigner kept in sounds_like: Mutt Lange produced them but is not a member.
- Reception researched by Claude.
- Into the Fire: production liverecording|analogtape (Wikipedia: band recorded together across rooms of Cliffhanger Studios, Adams's house; CD SPARS code ADD, Discogs 1205314/1536223).

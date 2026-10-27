# CLAUDE IMPORT — Depeche Mode Phase 02

**Date checked:** 27 October 2026. **Repository:** `giampierofiorelli/Fandome`, branch `descriptors`, read only. **INCREMENTAL: four Phase 02 album rows ONLY.** Phase 01 rows are not in this ZIP. The artist and album catalogue were re-checked in GitHub and **Depeche Mode was still absent**; `docs/descriptors/depechemode.csv` was still absent when checked. Do **not** substitute a current master branch.

## Important prerequisite: add the ARTIST first

Stable proposed artist ID remains **`depechemode`**. Add `['depechemode', 'Depeche Mode', ...]` to `src/data/catalog.ts` *before* importing either phase; otherwise validation fails for every Phase 02 new ID. Claude may already have imported the Phase 01 ZIP locally, but as of this audit the GitHub `descriptors` branch had not been updated. **Do not recreate/duplicate Phase 01 records if they already exist locally.** Avoid overwrite of albums created by Phase 01.

## Exactly four rows in this ZIP

| album_id | title | original year | type | catalogue status |
|---|---|---:|---|---|
| `depechemode-thesingles8185` | The Singles 81–85 | 1985 | compilation | ADD |
| `depechemode-blackcelebration` | Black Celebration | 1986 | studio | ADD |
| `depechemode-musicforthemasses` | Music for the Masses | 1987 | studio | ADD |
| `depechemode-101` | 101 | 1989 | live | ADD |

Original UK editions only. These album IDs follow the exact `artist-id + '-' + title slug` rule; the Unicode en dash in `81–85` is removed by slugging. The 1985 UK compilation is not the altered US `Catching Up with Depeche Mode`; the 1998 reissue of `The Singles 81>85` is not an additional 1985 album. `101` is a **landmark live album exception**, not a soundtrack or second film album. `Black Celebration` original UK LP is 11 tracks and differs from the US edition; `101` original UK LP has 17 songs while CD has 20. Album catalogue entries must be added *before* descriptor validation. Keep original release year, not later reissue.

## New tokens to register (exact spellings)

**Genres** absent from `src/data/scenes.ts`, source-named in the 1987 `Music for the Masses` retrospective genre classification by Album of the Year:

- `neoclassicaldarkwave` — **Neoclassical Darkwave**; smaller-scale texture/selected songs, not a claim that the entire record is instrumental neoclassical composition.
- `electroindustrial` — **Electro-Industrial**; selected heavier tracks, ranked after dominant synthpop/darkwave tags.

Source: https://www.albumoftheyear.org/album/5348-depeche-mode-music-for-the-masses.php . Do not silently merge either into `darkwave`, `industrial`, or other existing token.

**Instruments:** no additional tokens required. `synth`, `sampler`, `sequencer`, `drummachine`, `guitar`, `acousticguitar`, `piano`, `accordion`, `melodica`, `percussion` are already in `src/data/instruments.ts`. Generic sampled choir/orchestra presets are **not** live credited orchestra.

**Production** tokens absent from `src/data/production.ts`:

- `ppgwave23` — **PPG Wave 2.3**, specifically stated as new for *Black Celebration* in first-person contemporary E&MM interview; do not collapse with the extant non-specific `ppgwave` token.
- `akais612` — **Akai S612** sampler, *Black Celebration*; explicitly mentioned by Gore.
- `bbcmicro` — **BBC Micro**, used for *Black Celebration* sequencing/programming.
- `umi2b` — **UMI 2B interface and sequence software** running on BBC Micro, *Black Celebration*.
- `emax` — **E-mu Emax (HD/SE)** sampler on the 1987–88 tour, heard via 101 live setup. Distinguish from `emulator` and `emulatorii`.
- `dx7iid` — **Yamaha DX7 IID** in the 1987–88 *live tour* setup, not the generic original `dx7`.

Contemporary 1986 original interview: https://www.muzines.co.uk/articles/modes-of-operation/1937?theme=1 . 1987–88 touring inventory: https://www.depmode.com/Depeche_Mode_Music_For_The_Masses_Tour.php . For `ppgwave23`, because `ppgwave` already exists as a general family token, Claude should choose **exact model-specific addition** rather than conflating distinct submodels.

**Co-billed records:** NONE in this phase. Do not edit `coBilled.ts`.

**ARTIST INFLUENCES:** phase-01-only deliverable was in the first ZIP. **Do not repeat it here.** Album-specific, independently sourced influences in this phase are *Philip Glass* for *Black Celebration* (`It Doesn't Matter Two`, Gore interview 1986) and *Michael Nyman (A Zed & Two Noughts)* for *Music for the Masses* (`Little 15`, Wilder interview and Shunt Q&A). They are correctly placed in `influenced_by`, with track scope documented in sources/evidence notes. A record sampled into another song is not automatically a songwriting influence.

## Source conflicts and import caveats

1. **1987 production credit:** Original Mute press sheet says *Music for the Masses* produced **Depeche Mode and David Bascombe**; Daniel Miller is **additional production and help**, which must be *excluded* from `producers`. Some secondary lists include him as a producer; follow the primary sleeve: https://www.depmode.com/Depeche_Mode_Music_For_The_Masses.php ; https://archives.depechemode.com/audio/releases/little15.html .
2. **1989 101 production credit:** Original sleeve says **Produced by Depeche Mode**, Alan Moulder **engineered** and Randy Ezratty **recorded**. MusicBrainz lists Moulder as a producer on some tracks, contradicting sleeve. Follow the sleeve and record discrepancy in review: https://www.depmode.com/Depeche_Mode_101.php .
3. **1985 anthology producer:** producer column holds *genuine producers across the collected recordings* rather than a fictional single 1985 production session; Gareth Jones' 1983 role was **engineering only** while 1984–85 selected originals have co-production credit.
4. **1986 hardware:** Do not treat gear described as *tour/live* in the contemporaneous E&MM interview as `Black Celebration` studio machines. PPG Wave **2.3**, Emulator **II**, Synclavier, ARP 2600, Akai S612 and BBC Micro/UMI **are specifically attributed to the recording**. The E-mu Emax and DX7 IID on the tour are assigned to *101*, **not** the 1987 studio LP by analogy.
5. **1987 equipment:** Producer David Bascombe explicitly describes a guitar riff sampled to Synclavier on `Never Let Me Down Again`. Some exact third-party factory sample IDs are unverified; the rows avoid those. Sampled orchestral sounds do not prove an orchestra played in the studio.
6. **1985 reissue trap:** AllMusic's *The Singles 81>85* page largely reviews the expanded **1998 reissue**; tags relevant to the originally issued singles can be used with lower evidential weight, but not 1998 bonus tracks or 1998 remastering as original 1985 production.
7. **101 recording caveat:** Original 1988 concert, 1989 album release. A member's cautious response about common live-album touch-ups does not prove `overdubbing` on specified tracks, so that token is intentionally **not** in the row. `analogtape` documents stage backing tracks, not the master medium.
8. **Genre taxonomy:** Darkwave/post-industrial/neoclassical darkwave/electro-industrial labels are **retrospective cataloguer terms**, and several AllMusic tags are umbrella styles not instrumental evidence. Evidence CSV scopes every genre and ranks niche ones behind dominant styles.
9. **No studio songs released after 27 October 2026 are in this phase**; 2025 concert releases are not chosen under the single-landmark-live exception policy.

## What Phase 03 will contain

1. *Violator* (1990, studio) — `depechemode-violator`.
2. *Songs of Faith and Devotion* (1993, studio) — `depechemode-songsoffaithanddevotion`.
3. *Ultra* (1997, studio) — `depechemode-ultra`.
4. *The Singles 86>98* (1998, compilation) — `depechemode-thesingles8698`.

No 1985–89 rows should be recopied in Phase 03. Later roadmap: Phase 04 *Exciter*, *Remixes 81–04*, *Playing the Angel*, *Sounds of the Universe*; Phase 05 *Remixes 2: 81–11*, *Delta Machine*, *Spirit*, *Memento Mori*.

## Files in this ZIP

- `CLAUDE_IMPORT.md` (this note and next-phase plan)
- `depechemode_phase02_rows_ONLY.csv` (exact 27-column header + four Phase 02 rows)
- `depechemode_phase02_sources.csv` (source links, provenance, claim and strength)
- `depechemode_phase02_genre_evidence.csv` (one genre/source/scope entry per genre token in the four rows)
- `depechemode_phase02_evidence-notes.md` (reasoned album specifics and conflicts)
- `depechemode_phase02_catalog-audit.csv` (only four Phase 02 planned catalogue additions)

After registering the artist and albums, register the two new genres and six new production tokens, then run the repository's official `scripts/validate-descriptors.ts`. The final ZIP contains no executables and does not touch GitHub.


## Claude import note (Oct 2026)
- Artist id is `depeche` (already on the site). Imported: Black Celebration as `depeche-blackcelebration`, Music for the Masses under the existing `d-masses`, 101 as `depeche-101` (landmark live exception, like Nirvana's Unplugged).
- Not imported: The Singles 81–85 (compilation; owner's scope: compilations are not a priority, and its songs are already on the studio rows).
- Phase 03 ids: Violator is `d-violator`, Songs of Faith and Devotion is `d-sofad`, Ultra is `depeche-ultra`; The Singles 86>98 will not be imported (compilation).

# CLAUDE_IMPORT — Portishead, Fandome Phase 01

**Branch:** `descriptors` (audit/read-only performed 2026-10-25)  
**Artist:** `Portishead` · **Fandome ID to create:** `portishead`  
**Scope:** ONLY 4 new rows; no previously delivered albums or other artists.

## Phase contents (chronological)

| album_id | Official album title | Original year | type | catalogue action |
|---|---|---:|---|---|
| `portishead-dummy` | Dummy | 1994 | studio | add |
| `portishead-portishead` | Portishead | 1997 | studio | add |
| `portishead-roselandnyclive` | Roseland NYC Live | 1998 | live | add, qualified landmark exception |
| `portishead-third` | Third | 2008 | studio | add |

### Catalogue changes

`catalog.ts` and `seed.ts` currently contain no Portishead artist entry or album. `docs/descriptors/portishead.csv` does not yet exist. Claude should create the artist entry (`portishead`, Portishead), add all four albums, set up scene defaults (UK, English, 1990s, electronic/triphop), create descriptors file with **the exact 27-column header**, and run local validator/tests. There is no file to append to and no duplicate to skip.

### Artist discography coverage and next phase

All three studio albums released through **25 October 2026** are included: *Dummy*, *Portishead*, *Third*. The sole 1998 live album *Roseland NYC Live* meets the explicit landmark-live exception (AllMusic; Guardian January 2026 top-30). Nothing remains for phase 02 under the current album selection policy. A new phase would be triggered only if a significant new album/EP/collaboration is verified as **released**, not by repackaging the 2023 *Roseland NYC Live 25* reissue or arbitrary compilations.

### Albums billed to multiple primary artists

**None.** Guest instrumentalists, composers sampled, the live orchestra and credited session singers are not co-billed album artists; no `coBilled.ts` changes.

### New genre tokens

**Four new genre tokens occur in album metadata:**

- `darkjazz` — dark jazz (Dummy, Portishead 1997); explicitly secondary index tag.
- `illbient` — illbient (Dummy only); secondary, disputed album metadata classification.
- `turntablism` — turntablism (Dummy, Portishead 1997); technique-oriented subgenre metadata.
- `spymusic` — spy music (Dummy, Portishead 1997); cinematic genre tag, not a soundtrack type.

Add all four to `src/data/scenes.ts`, `src/data/genreFamilies.ts` and the validator genre set; the latter two must be kept synchronized. `triphop`, `acidjazz`, `experimentalrock`, `postindustrial`, `krautrock`, `doowop`, `electronica`, `downtempo` and all other assigned genres already appear in the branch. The ranked source-by-genre evidence file differentiates main album styles from track subgenres and less-authoritative tag taxonomies.

### New instrument tokens

- `hurdygurdy` — hurdy-gurdy, documented for Third's instrumental palette in Reverb's studio account. Add to `src/data/instruments.ts` before validation.

### New production tokens

- `vocalphasing` — electronic phase processing on 1997 record's Beth Gibbons vocals (AllMusic).
- `concertrecording` — concert-recorded performance for Roseland NYC Live; unlike existing `liverecording`, whose current UI label specifies studio live capture.
- `radar24` — iZ Technology RADAR 24 digital multitrack recording system used on Third; **not analog tape**.
- `korgms20` — Korg MS-20 analog synthesizer (Third).
- `emsvcs3` — EMS VCS3 synthesizer (Third).
- `arp2600` — ARP 2600 synthesizer (Third).
- `orlatiffany4` — Orla Tiffany 4 organ drum unit sampled on `Machine Gun` (Third); track-specific, not whole-album default.
- `springreverb` — hardware spring reverberation, notably on vocals (Third).
- `altiverb` — convolution-reverb software used on Third, separate from `protools`.

Claude must update instrument/production token definitions and genre definitions, genre families and validator's allowed GENRES for the four new genres. `logic`, `protools`, `moog`, `sampling`, `lofi`, `distortion`, `falsetto`, `analogtape` are **already available**. This ZIP does not include scripts and does not alter GitHub.

### Date/credits/caveats

- UK debut Dummy original **1994**; secondary databases disagree over August vs October edition dates; year unaffected. Use `Portishead|Adrian Utley` in production credits because the original credit is group producer with Utley also documented separately as co-producer.
- 1997 self-titled LP credits **Geoff Barrow, Beth Gibbons, Adrian Utley and Dave McDonald** as producers; do not mistake Dave McDonald's other engineering role for evidence of being producer by itself.
- Roseland concert filmed/recorded 24 July 1997, issued **1998**. Additional venue/track recording evidence exists; don't describe all the audio as a single untouched Roseland evening. New 2023 anniversary edition is a **reissue only**.
- Third is third **studio** album; second-to-third studio gap 11 years; `Roseland NYC Live` sits between. Distinct machinery from early records; don't back-project Korg/ARP/RADAR claims onto Dummy.
- Influence field narrowly documented: Carpenter → Dummy's `Roads`; Silver Apples / Carpenter / critic-named Joy Division homage → Third. Sampled source ≠ documentary influence.
- `genre_evidence.csv`: genre-level scope matters; weaker album-tag taxonomy doesn't have same weight as named primary style.
- Two areas for second-person verification: Third `logic` is secondary-source based (Noise Machines); Roseland some release metadata gives November 2 vs November 10 within same 1998 year.

### File manifest

1. `portishead_phase01_rows_ONLY.csv` — 27 columns, **only these four rows**
2. `portishead_phase01_sources.csv` — direct working-source URLs (album-specific strengths)
3. `portishead_phase01_genre_evidence.csv` — one line per included genre with album/track scope
4. `portishead_phase01_evidence-notes.md` — explanation of every non-obvious placement and disputes
5. `portishead_phase01_catalog-audit.csv` — existing vs additions, explicit no-duplicates audit
6. `CLAUDE_IMPORT.md` — this file

### Import checklist

1. Confirm artist absence hasn't changed since this read-only audit.
2. Add artist and 4 new albums, plus new tokens above.
3. Import only `portishead_phase01_rows_ONLY.csv`; do not append prior phase rows.
4. Run `npx vite-node scripts/validate-descriptors.ts` and the repository test suite.
5. Confirm the source and genre-evidence sidecars are kept with the descriptor research documentation.

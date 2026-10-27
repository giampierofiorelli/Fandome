# Pet Shop Boys — Fandome Phase 02 import hand-off

**Research cut-off:** 27 October 2026  
**Artist ID:** `psb`, verified in `src/data/seed.ts`  
**Repository:** `giampierofiorelli/Fandome`, branch `descriptors` (READ ONLY)

## Four new descriptor rows ONLY

| Album id | Original album | Type | Catalogue status | Operation |
|---|---|---|---|---|
| `p-very` | *Very* (1993) | studio | Already in `src/data/seed.ts` | Keep exact existing id; add descriptor only |
| `psb-relentless` | *Relentless* (1993) | studio | Absent | Add catalogue and descriptor |
| `psb-bilingual` | *Bilingual* (1996) | studio | Absent | Add catalogue and descriptor |
| `psb-nightlife` | *Nightlife* (1999) | studio | Absent | Add catalogue and descriptor |

**DO NOT duplicate Phase 01:** `psb-please`, `psb-disco`, `psb-introspective`, `p-behaviour`. The existing `p-actually` in `docs/descriptors/psb.csv` was already described independently and stays untouched. `p-nonetheless` is already **seed-catalogued** for a future phase but has no descriptor in the audited file.

### Albums to add to the catalogue (new catalogue IDs)

- `{ id: 'psb-relentless', artistId: 'psb', title: 'Relentless', year: 1993 }` — `studio`. Six **original** 1993 dance compositions packaged with *Very*, and remastered/reissued standalone 2023. Do not add another 2023 album.
- `{ id: 'psb-bilingual', artistId: 'psb', title: 'Bilingual', year: 1996 }` — `studio`.
- `{ id: 'psb-nightlife', artistId: 'psb', title: 'Nightlife', year: 1999 }` — `studio`.

### Co-billed album considerations

**None.** *Very Relentless* is a packaging combination of two albums by the **same artist**; it is not a co-billed release or a separate extra catalogue work. Kylie Minogue on *Nightlife* song *In Denial* is a **guest vocalist** only.

### New token proposals

- **Genre `eurobeat`**: *Very*, one song *Yesterday, When I Was Mad*, called Eurobeat by Rik Flynn in [Classic Pop](https://www.classicpopmag.com/features/classic-album/pet-shop-boys-very/). Add exactly `eurobeat` to `Genre`, with family mapping appropriate to dance/electronic.
- **Genre `breaks`**: *Relentless*, DJ Mag calls music “breaks-influenced” in [this 2023 reissue report](https://djmag.com/news/pet-shop-boys-announce-30th-anniversary-edition-relentless). Do not silently replace with `breakbeat`; if you choose to consolidate categories, make that explicit to the user and preserve source term in evidence.
- **No unlisted instrument or production tokens**. All in CSV are already defined in Fandome guide/label sets.

### Release and production caveats

1. *Very* has an original production credit to **Pet Shop Boys**; **Stephen Hague**’s work is *additional production and mixing*. Original sleeve also credits **Brothers in Rhythm** for *additional* work on “Go West”. Do **not** add these names to `producers`.
2. *Relentless* counts as a separate 1993 original studio disc rather than a compilation; six mainly instrumental compositions recorded during the *Very* project. Standalone 2023 version is a reissue only; no retrospective producer inheritance from current remaster.
3. *Bilingual* is **primarily English**; Spanish and Portuguese are present in select lyrics/hooks. Its Latin rhythmic interest does not make every track traditional Latin music. Pet Shop Boys, Chris Porter, Danny Tenaglia, Andy Williams and Paul Roberts are credited **track producers**. SheBoom are performers, not producers.
4. *Nightlife* producer list includes **Pauline Taylor**, despite omission from artist’s four-name overview: **1999 track-level release credits** list her as producer of “For Your Own Good” together with the Pet Shop Boys and Rollo. Source: [MusicBrainz original release](https://musicbrainz.org/release/b04558a9-b69c-45bd-a6f4-d65706067780). Kylie’s guest duet is not an album billing.
5. `influenced_by` is blank across this phase because album-specific *musical artist* influence testimony did not meet the strict rule. No cover performers (e.g. Village People), quoted musicians, samples, collaborators, producers, guest vocalists, a nightclub scene or lyric quotations may be imported as influences.
6. **Genres have evidence and scope** in `psb_phase02_genre_evidence.csv`, including some intentionally peripheral album styles imported from AllMusic taxonomy. The 2025 writer applying `hyperpop` to a 1993 album is a **retrospective analogy**, not evidence of a 1993 hyperpop scene. `eurobeat` is one song only. Always rank specific primary sonic styles first.
7. `sounds_like` is editorial recommendation similarity and does not claim documentary influence.
8. Sound On Sound’s 1996 Gleadall technical original is access-restricted; secondary interview quotations were verified in Classic Pop. No guessed hardware models were added where the recording link was inaccessible.
9. The source for “Before” calls it **smooth house**, not “pop house”, so `pophouse` is deliberately **omitted**. The `latinpop` classification is a low-weight descriptor of a subset of tracks, not a claim of an all-Latin record.

### Files and import order

1. Inspect **`psb_phase02_catalog-audit.csv`** against live seed/catalog. Never rewrite an already-described release.
2. Add the three missing releases, retain `p-very` untouched.
3. Add new genre tokens `eurobeat` and `breaks` in `src/data/scenes.ts` and choose genre family mapping in `src/data/genreFamilies.ts` (or remove the genres with an editorial note if taxonomy policy explicitly refuses them; do not silently remap).
4. Append the four rows from `psb_phase02_rows_ONLY.csv` to `docs/descriptors/psb.csv` without changing Phase 01 or `p-actually`. **No duplication** and preserve 27-column header.
5. Import `psb_phase02_sources.csv`, `psb_phase02_genre_evidence.csv`, and `psb_phase02_evidence-notes.md` under `docs/descriptors/research/` using repository’s chosen filenames.
6. Run `scripts/validate-descriptors.ts` and applicable tests. Keep `status=draft` until second-person review.

### Next phase — Phase 03

- *Closer to Heaven* (2001) — cast-album / music-theatre soundtrack, **first check printed artist billing and co-billed artists; if artist is cast / Various Artists rather than Pet Shop Boys, do not import as PSB original artist without review**.
- *Release* (2002) — studio.
- *Fundamental* (2006) — studio.

As in the Phase 01 schedule, include additional distinctive soundtrack works in their proper chronological place in later phases if co-billing passes Fandome rules. Standard greatest-hits compilations and all live albums remain excluded.

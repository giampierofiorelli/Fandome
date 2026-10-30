# CLAUDE_IMPORT — Mia Martini / Phase 02 (STRICTLY INCREMENTAL)

**Branch checked:** `descriptors` of `giampierofiorelli/Fandome`, 30 October 2026. Artist ID **`miamartini`** confirmed in `src/data/catalog.ts`; no entry in `seed.ts`, no co-billed album in `coBilled.ts`, `docs/descriptors/miamartini.csv` returned 404. The artist exists with **empty album list** on this branch. Claude must recheck in case phase 01 has been imported after research.

## Phase contents (only these four new rows)

| Album ID | Album | Year | Type | Catalogue action |
|---|---|---:|---|---|
| `miamartini-sensiecontrosensi` | Sensi e controsensi | 1975 | studio | ADD |
| `miamartini-unaltrogiornoconme` | Un altro giorno con me | 1975 | studio | ADD |
| `miamartini-chevuoichesiasethoaspettatotanto` | Che vuoi che sia... se t'ho aspettato tanto | 1976 | studio | ADD |
| `miamartini-peramarti` | Per amarti | 1977 | studio | ADD |

**Skipped as already delivered in Phase 01:** *Oltre la collina* (1971), *Nel mondo, una cosa* (1972), *Il giorno dopo* (1973), *È proprio come vivere* (1974). Never regenerate or import a second copy, even if phase 01 has not yet been merged to GitHub. **No live or compilations.** An album already described after ZIP creation must be skipped on import. `album_id` is the `miamartini-` prefix with original title lowercased, accents/punctuation removed and only letters/digits; the existing artist ID is never changed.

## Albums to add to `src/data/catalog.ts`

All **four** above are absent in the currently checked catalogue. Add as released **studio** records with exact title and year; all four should be added under the existing artist `miamartini`. None is co-billed: songwriters and arrangers are not co-billed performing artists. Do not add titles before 1971 recorded under prior identity `Mimì Bertè`. `catalog-audit.csv` records additions.

## New tokens

**New genre tokens:** **none**. `pop`, `soul`, `musicaleggera`, `kosmische`, `italianpop`, `folk`, `funk`, `classicalpop`, `psychedelicfolk`, `ballad`, `jazz`, `disco`, `hardrock`, `softrock` already exist on the branch's `scenes.ts` genre list (Claude should recheck).

**New instrument tokens:** **none**. The instruments used are existing `instruments.ts` tokens (including `clavinet`, `bouzouki`, `spinet`, `harpsichord`, `celesta`, `bells`).

**New production tokens:** **none**. `stringarrangements`, `choirvocals`, `phasing`, and `soundeffects` are already allowed in `production.ts`.

## Productions and caveats for Claude

- **Sensi e controsensi:** producer cell **blank** despite common online attribution to Gianni/Giovanni Sanjust: public accessible 1975 LP transcriptions document arrangers and ensemble but **not** that specific album's producer explicitly. Verify original sleeve/label to fill; do not infer merely from his general Ricordi role. The period's artist-wide profile is not enough. Orchestra conductors are Massara, Lombardi, Fabi and Vito Tommaso across separate tracks; these are NOT producers. `kosmische` is a critic-described sound *texture*, not whole-LP genre.
- **Un altro giorno con me:** **Gianni Sanjust** credited as a producer for this precise release in a Discogs-credit-indexed external discography; less direct than original sleeve, so `medium` confidence. `Veni sonne di la muntagnella` is the Calabrian-language **folk song** on 1/13: don't classify the whole album folk or as `nap` (Neapolitan). Initial LP 13 songs; late CD listings erroneously assign short duration to *Questi miei pensieri*.
- **Che vuoi che sia... se t'ho aspettato tanto:** `Antonio Coggio|Dario Baldan Bembo`, both **explicitly** credited as producers on different sides of the original 1976 single; the original LP calls their parts *realizzazioni* and *realizzazioni ritmiche*. Confirm which song-specific production credits carry to full album when importing. **Luis Bacalov (Luis Enriquez)** arranged and performed, but NOT included as producer without an unambiguous original producer credit. `landmark=1`: VICE independently identifies the album as a pivotal change in the artist's sound, not merely a personal favorite. No unproved influence links: all `sounds_like` entries are critic comparisons with `[1/10]` shares.
- **Per amarti:** **Antonio Coggio** Producer credited on all ten BMG original-phonogram tracks (Qobuz), while Fabrizio/Cini/Fossati are arrangers. The English songs adapted by Martini (Supertramp, Queen, Leo Sayer) are **covers**: not `influenced_by`. `disco` specifically *Innamorata di me*, 1/10, placed last; no generic whole-album `rock`. The 2025 remaster used for source credits is not being described as a 2025 new album.
- All eight scale scores refer to full original LPs, with explicit reasoning in evidence notes. `voice` blank where album-specific evidence insufficient. Lyrics are theme tokens, not verbatim fragments. All source links in CSV are original public pages, **never Wikipedia**; label/estate aesthetic praises are not landmark evidence.

## ZIP contents (exactly six files)

1. `CLAUDE_IMPORT.md`
2. `miamartini_phase02_rows_ONLY.csv` — 27-column header + **four** rows, none from earlier phases
3. `miamartini_phase02_sources.csv` — album-specific research with working source URLs
4. `miamartini_phase02_genre_evidence.csv` — one evidence item per genre for each album
5. `miamartini_phase02_evidence-notes.md` — all eight scales, instruments, techniques, producers, caveats and comparisons
6. `miamartini_phase02_catalog-audit.csv` — catalog additions and exclusions

## Next phase 03

*Danza* (1978), *Mimì* (1981), *Quante volte... ho contato le stelle* (1982), *Martini Mia...* (1989). Treat **live** records *Miei compagni di viaggio* (1983) as excluded even where present in discographies; confirm catalogue and descriptor imports again at start of phase 03.

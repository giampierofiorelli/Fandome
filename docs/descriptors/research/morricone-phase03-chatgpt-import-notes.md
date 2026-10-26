# Fandome import — Ennio Morricone, Phase 03

Research checked **26 October 2026**. Single incremental ZIP with six files, precisely four **new** 27-column descriptor rows; no scripts, no earlier rows. Repository `giampierofiorelli/Fandome` on branch `descriptors` consulted **read only**. **Current `docs/descriptors/morricone.csv` contains eight Phase 01 and 02 rows**; do not replace them. Artist id `morricone` verified in `catalog.ts`.

## Phase contents (original LP publication chronology)

| album_id | title | original LP year | type | action |
|---|---|---:|---|---|
| `morricone-ilclandeisiciliani` | Il clan dei siciliani | 1969 | soundtrack | ADD |
| `morricone-lassolutonaturale` | L’assoluto naturale | 1969 | soundtrack | ADD |
| `morricone-mettiunaseracena` | Metti, una sera a cena | 1969 | soundtrack | ADD |
| `morricone-luccellodallepiumedicristallo` | L’uccello dalle piume di cristallo | 1971 | soundtrack | ADD |

All **four titles are absent from current `catalog.ts`**. Claude must add exactly these four records to the album catalogue before/while importing to avoid catalogue-reference test failures. Use canonical Italian album titles and precisely the generated `album_id`. Within **1969**, exact first issue month is not confirmed for Clan and Assoluto; displayed order asserts *year*, not day. Source details and original LP track programmes are in evidence-notes.md and catalog-audit.csv.

## Important change to previously announced Phase 03

**`Indagine su un cittadino al di sopra di ogni sospetto` was a 1970 FILM and 1970 SINGLE, but its first full LP was issued in **1981**.** The original label's 2025 collaborator confirms that 1981 is the first standalone LP (original 1970 45rpm is just two themes). Therefore **defer that album to the 1981 chronological batch** and replace its slot with *L’assoluto naturale* (genuine original 1969 LP). Do **not** add a 1970 soundtrack album under the name *Indagine*. Source: https://quartetrecords.com/product/indagine-su-un-cittadino-al-di-sopra-di-ogni-sospetto/ .

**`L’uccello dalle piume di cristallo`: original Italian Cinevox 10-track mono album is dated March **1971** (composer film is 1970). A US Capitol 1970 **different 11-cue album programme** exists, so Fandome's canonical original Italian-title album gets **1971**, with the separate US edition logged only in notes. Source: https://ams-music.it/wp/luccello-dalle-piume-di-cristallo/?lang=&lightbox=true .

## Genre and tokens

- **NEW genre** `cooljazz`: named explicitly by specialist reviewer Jonathan Broxton for *Metti, una sera a cena*. Do not silently map to `jazz`; include **both** because both are explicitly sourced. Claude must add `cooljazz` to the Genre type/list (`src/data/scenes.ts`), family mapping (`src/data/genreFamilies.ts`, parent `jazz`) and embedded validator whitelist (`scripts/validate-descriptors.ts`). The existing `beat`, `jazz`, `lounge`, `bossanova`, `spaghettiwestern`, `avantgarde`, `experimental`, `classical`, `pop`, `rock`, `soundtrack` tokens were verified on the current descriptors branch.
- **New instrument tokens:** none. `jawharp` is already present on current branch, and other instruments use its exact existing tokens. Hammond **organ** is the `organ` instrument, not an unsupported specific synthesizer model. Vibraphone maps to existing `mallets`; wind chimes map to `chimes`.
- **New production tokens:** none. All four `production` cells intentionally blank because no verified original-session process or equipment model supports the controlled tokens. Source notices about restoration/modern remastering do **not** justify a `remastering` value for the original album.

## Album editions and credits

- Clan: 1969 20th Century Fox French LP **940 006**, 11 tracks. CAM Sugar 2025 **3LP** has original album only on disc 1; other discs have outtakes/unreleased material, excluded.
- Assoluto: original 1969 Cinevox LP, **13 original cues**. Do not count modern added organ ballad and other bonus takes as evidence solely for original LP.
- Metti: Dec 1969 original Cinevox **MDF 33/16**, **nine instrumental and wordless-vocalise score tracks**. The Sandpipers' English **Hurry to Me** is not on the original Italian album (later 1970 UK *Love Circle* and modern reissues). Thus no English `language` or `lyrics` derived from the song.
- Bird: Italian original first 1971 Cinevox, ten tracks; separate 1970 Capitol US LP was a different score programme. Do not mix editions.
- **Co-billed albums:** none verified. `coBilled.ts` needs no change. Edda Dell'Orso, The Sandpipers, Alessandro Alessandroni and Bruno Nicolai have performance/arrangement/conductor roles where documented; none is a verified co-billed **artist of one of the four original albums**.
- **Producers:** no historically verified **record producers or co-producers** for any original LP; all cells empty. Bruno Nicolai was a **conductor**, not a producer. Do not import modern reissue restoration staff or film producers.

## ARTIST INFLUENCES

Only **Phase 01** carries sourced **artist-wide** Morricone influences (including Weber, Stravinsky and Petrassi). Do not duplicate them here. `influenced_by` blank for every row here: sounding like another musician is NOT a documented influence. `sounds_like` names are explicit editorial similarity judgments.

## Filename set

1. `CLAUDE_IMPORT.md`
2. `morricone_phase03_rows_ONLY.csv`
3. `morricone_phase03_sources.csv`
4. `morricone_phase03_genre_evidence.csv`
5. `morricone_phase03_evidence-notes.md`
6. `morricone_phase03_catalog-audit.csv`

## Next phase: Phase 04 (proposed)

Continue original LP chronology after the 1969–1971 group. **Verify exact first-LP dates** for: *Metello* (1970 film), *La Califfa* (1970 film / **1971 original LP**), *Il gatto a nove code* (1971 film), and *Giù la testa* (1971 film, early LP editions vary by territory). Choose 3–4 in first *record* release order, avoiding reissues, singles and earlier albums. The originally proposed *Indagine* is reserved for the **1981 LP** phase instead.

# CLAUDE IMPORT — Ennio Morricone, Phase 06

**Checked 26 October 2026.** Read-only GitHub branch: `descriptors`. Artist ID **`morricone`**. Four **incremental** new records, no previously delivered rows.

## Contents / album IDs (original album dates, not film-only dates)

| Album ID | Original album | Year | Evidence |
|---|---|---:|---|
| `morricone-chilhavistamorire` | Chi l’ha vista morire? | 1972 | Gemelli GG.ST.10.017 LP, Oct 1972, ten tracks |
| `morricone-revolver` | Revolver | 1973 | General Music LP, ten tracks |
| `morricone-laproprietanonepiuunfurto` | La proprietà non è più un furto | 1973 | RCA OLS 19 LP, Oct 1973, thirteen tracks |
| `morricone-ilmionomeenessuno` | Il mio nome è Nessuno | 1973 | General Music / Ariola soundtrack LP, ten tracks |

## Import actions

- **Add all four to `src/data/catalog.ts`**, with album titles and release years shown above. At last check all four were missing from the Morricone album tuple. Album rows in this ZIP contain exactly the 27-column header and those four IDs only.
- The checked `docs/descriptors/morricone.csv` already contains **16** previous rows (Phase 01–04). Phase 05 had been delivered but was **not yet in the branch at check time**, and must be imported independently without recreating its rows here. Deduplicate by `album_id`, not merely soundtrack film year.
- **Genre tokens: no new tokens** required for this phase. All `childrensmusic`, `classical`, `experimental`, `pop`, `avantgarde`, `march`, `electronic`, `spaghettiwestern`, `easylistening`, `soundtrack` exist in current `scenes.ts`/validator. Family mappings exist. `classical` in *Revolver* and *Nessuno* has evidence scope *texture*, rather than literal source classification.
- **Instrument tokens: no new tokens**. All instruments in the rows exist in `instruments.ts`.
- **Production tokens: no new tokens**. Only explicitly grounded `falsetto` is used.
- **Co-billed albums: none.** The original albums are billed to Ennio Morricone; the singers, choirs, conductor and performers are not album co-billed artists.
- **ARTIST INFLUENCES: omitted, phase 01 only**. All four `influenced_by` fields blank because no named, album-specific artist influence claim is verified. Wagner quotation in *Il mio nome è Nessuno* is NOT an influence claim.

## Discography and credit cautions

1. *Cosa avete fatto a Solange?* was a **1972 film without a contemporary album**; the first LP was issued **1986** (Intermezzo/RCA SP 8062). This title was announced as a candidate for Phase 06 but is **not** entered as 1972. Reserve it for the 1986 phase. Supported by Quartet-reissue label notes and SoundtrackCollector: https://www.intermezzomedia.com/cosa-avete-fatto-a-solange-original-motion-picture-soundtrack-pkup-1717182006-sonxx0.html and https://www.soundtrackcollector.com/title/22917/Cosa%2BAvete%2BFatto%2BA%2BSolange%3F .
2. *Chi l’ha vista morire?*: the **1972 Gemelli LP exists** and is confirmed; 1978, 1979 and 2006 releases are later. Maria Travia Morricone wrote lyrics for selected tracks; children's choir conducted by Nicola Samale. The 2024 paper's tape edits are of the **film soundtrack montage**, and should not automatically populate the first album's `production`.
3. *Revolver*: the main LP is the **ten-track 1973 release**. CD expansions contain additional electronic, guitar and trumpet variants; original LP instruments must not be inflated from them. Daniel Beretta/Berretta is a singer, not a co-billed primary artist.
4. *La proprietà non è più un furto*: film appears under 1972 in Fondazione filmography, **LP is 1973**. Bruno Nicolai is the credited **conductor**, not a producer; electronic descriptions do not justify naming a synthesizer model.
5. *Il mio nome è Nessuno*: original ten tracks versus 23-track later expansion; **Francesco Miracle = artistic director** (not a credited producer). **Gianni Dell'Orso = executive producer on an expanded CD**, not an original LP producer. Wagner is quoted/parodied in a cue and does not go in `influenced_by`.
6. `sounds_like` links are explicitly editorial sonic analogies, **not** influence evidence. Where no original LP producer is verifiably credited, `producers` remains empty rather than wrongly listing the composer.

## File contents

- `morricone_phase06_rows_ONLY.csv` — 27-column schema, four rows only.
- `morricone_phase06_sources.csv` — album ID, original and archival sources with URLs and evidence-strength labels.
- `morricone_phase06_genre_evidence.csv` — one record per assigned genre with clear whole-album / some-tracks / texture scope.
- `morricone_phase06_evidence-notes.md` — reasoned scale/instrument/production assessment and source disagreements.
- `morricone_phase06_catalog-audit.csv` — first-LP dates and **add** action for each new ID.
- `CLAUDE_IMPORT.md` — this import/exception guide.

## Next: Phase 07 (provisional; confirm first LPs before locking rows)

- **Giordano Bruno** — film and RCA OLS 21 LP **1973** (December 1973; documented).
- **Le serpent** — 1973 film; BnF establishes a **1973 45 rpm** only so far; do not assume an LP was issued in 1973.
- **Il sorriso del grande tentatore** — 1973 film; check if there was an original standalone LP before dating the album.
- **Sepolta viva** — 1973 film; check standalone original-LP date rather than inherit the film's year.

If any candidate lacks a contemporary issued album, replace it with another documented 1973–74 original LP (e.g. check later 1974 titles). `Cosa avete fatto a Solange?` remains for 1986.

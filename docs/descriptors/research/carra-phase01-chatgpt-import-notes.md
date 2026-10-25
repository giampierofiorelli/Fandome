# Fandome import — Raffaella Carrà, phase 01

**Research as of:** 25 October 2026. Read-only inspection of GitHub branch `descriptors`.

**Fandome artist ID:** `carra` (catalogue entry exists). No album entries in the catalogue for this artist (`[]`) and no `docs/descriptors/carra.csv` or `research/carra-*` files were present when checked. This ZIP is strictly incremental: **four new rows only**, no older phases, no other artists.

## New phase-01 rows, in original release order

| album_id | Official original album title | Year | Type | Catalogue action |
|---|---|---:|---|---|
| `carra-raffaella` | Raffaella | 1971 | studio | add |
| `carra-raffaellacarra` | Raffaella Carrà | 1971 | studio | add |
| `carra-raffaellasenzarespiro` | Raffaella... Senzarespiro | 1972 | studio | add; flag fake-live designation |
| `carra-scatolaasorpresa` | Scatola a sorpresa | 1973 | studio | add |

## New genre tokens for `src/data/scenes.ts`

- `twist` — Scatola a sorpresa: *Let's Twist Again*; **some tracks** only.
- `tango` — Scatola a sorpresa: *La Cumparsita*; **some tracks** only.
- `samba` — Scatola a sorpresa: *La samba di Orfeo*; **some tracks** only.

All other used tokens (`pop`, `italianpop`, `dancepop`, `rockandroll`) are in the existing Genre type. Update genre-family mappings appropriately only after checking their established conventions. `pop` is an album-wide label; `italianpop` is source-labelled for the 1972 album, whereas `dancepop` has track-scoped support. **Avoid classifying the early records as disco or Italo disco based on the later career.**

## Critical historical and attribution caveats

1. **Debut release year disputed:** [official site](https://raffaellacarra.com/discografia/raffaella/) and [label-distributed Apple page](https://music.apple.com/us/album/raffaella/1689218689) date original first *Raffaella* April **1971**; [RAI](https://www.radiocorrieretv.rai.it/raffaella-carra-artista/) and some music databases give **1970**, the year of its lead TV singles. Use 1971 for the proposed catalogue row, but verify physical issue evidence if catalogue policy resolves the conflict differently.
2. **Fake-live album:** *Raffaella... Senzarespiro* (1972) recreated a concert in the studio. [Official archive](https://raffaellacarra.com/discografia/raffaella-senzarespiro/) identifies it as studio; streaming metadata markets it Live. The row deliberately uses **studio**, not **live**, with full explanation in notes.
3. **1971 second LP producer dispute:** Sony/Qobuz names **Gianni Boncompagni** as producer on several tracks and **Roberto Formentini** as *project coordinator*; [a discographic archive](https://ilsalottodiraffaella.com/2024/10/09/raffaella-carra/) calls Formentini the album producer. Only Boncompagni is provisionally filled in `producers`; review original LP sleeve before settling whether Formentini deserves an additional producer credit.
4. **1973 instrumentation:** sleeve-credits transcription at [rodny.cz](https://www.rodny.cz/?id=r2360648&lng=1) names ARP/VCS synthesisers, electric piano, vocals overdubbed, drums and producer. This is a third-party transcription of original record metadata; primary sleeve confirmation recommended. It supports *electronic 2*, not the genre **electronic**.
5. **Cover does not mean influence:** covers of songs by Motown/Bacharach/Peret/Bonfá, etc. do not prove that their creators influenced the sound of an entire LP. All `influenced_by` fields intentionally remain empty. All `sounds_like` fields remain empty where an album-specific comparison cannot be substantiated.
6. **Languages and lyrics:** identify original-issue repertory, sometimes without individual sung-text transcription. Some track-level language/lyric judgements are provisional; see evidence notes. Blank numbers are deliberately unknown, not zero.
7. **Generic reissue dates:** 1971 Apple digital first-of-year dates for the second LP differ from original official December issue and should not overwrite chronology. Rerecordings, LP sleeve variants and foreign-language editions must not be conflated with new Italian studio works.
8. **No code or repository modification** in this bundle. Claude must add new catalogue albums and tokens, then run the project's descriptor validator and tests.

## Phase 02, next ZIP (not included)

1. *Milleluci* (1974) — studio.
2. *Felicità tà tà* (1974) — studio; verify dance/disco emergence from contemporary recordings, not only later retrospective tags.
3. *Forte forte forte* (1976) — studio.
4. *Fiesta* (1977) — studio.

## Subsequent discography planning (requires rechecking at each phase)

Likely later Italian studio LPs: *Raffaella* (1978), *Applauso* (1979), *Mi spendo tutto* (1980), *Raffaella Carrà* (1981), *Raffaella Carrà 82* (1982), *Fatalità* (1983), *Bolero* (1984), *Fidati!* (1985), *Curiosità* (1986), *Raffaella* (1988), *Inviato speciale* (1990), *Raffaella Carrà* (1991), *Hola Raffaella* (1993), *Carràmba che rumba!* (1996), *Replay* (2013), *Ogni volta che è Natale* (2018). Dates/type, duplicate Spanish editions and 1999 *Fiesta – I grandi successi* (rerecordings/compilation) must be screened separately. Multiple eponymous albums require year-disambiguated IDs in later phases (e.g. `carra-raffaella1978`), never reuse phase-01 IDs. The 1999 record is **not automatically** a new studio album simply because lists sometimes classify it as one.

## Bundle file map

- `carra_phase01_rows_ONLY.csv`: exact 25-column header and four new rows.
- `carra_phase01_sources.csv`: working published source URLs, claims and relative evidence strength.
- `carra_phase01_genre_evidence.csv`: one genre evidence record per token per album, whole album vs some tracks/context.
- `carra_phase01_evidence-notes.md`: justification for values, uncertainty and documented disagreements.
- `carra_phase01_catalog-audit.csv`: Fandome catalogue comparison, actions to add.

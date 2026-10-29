# Claude import — Ella Fitzgerald / Fandome Phase 01

**Research date: 29 October 2026.** One ZIP, four new incremental album rows, 27 columns each, all `draft`. No GitHub files were changed. Use `ella_phase01_rows_ONLY.csv` as the only descriptor-data input, then the separate evidence and audit files.

## Artist and catalogue audit

- **Artist already exists:** `ella` in `src/data/catalog.ts`; no new artist required. `src/data/seed.ts` has no separate Ella entry. Do not create another Ella Fitzgerald room.
- **No descriptor file:** `docs/descriptors/ella.csv` was absent on the checked `descriptors` branch, so no existing descriptors needed skipping; **1956 Porter is already catalogued but not yet described**.
- Original source records with later repackagings/compilations must stay separate. *Souvenir Album* (older recordings), *Lullabies of Birdland* (1945–1955 recordings), *For Sentimental Reasons*, *The First Lady of Song*, and *Miss Ella Fitzgerald & Mr Gordon Jenkins Invite You to Listen and Relax* should not be indiscriminately imported as fresh studio albums.
- The 1960 `Ella in Berlin: Mack the Knife` is **live** (present in Fandome's catalog), excluded from descriptors. The 1959 George/Ira Gershwin Song Book is in the catalogue but belongs to a later research phase and is not included here.

## Phase 01: exactly four releases

| album_id | album | year | type | catalogue action |
|---|---|---|---|---|
| `ella-ellasingsgershwin` | Ella Sings Gershwin | 1950 | studio | add |
| `ella-songsinamellowmood` | Songs in a Mellow Mood | 1954 | studio | add |
| `ella-sweetandhot` | Sweet and Hot | 1955 | studio | **provisional classification; see below** |
| `ella-ellafitzgeraldsingsthecoleportersongbook` | Ella Fitzgerald Sings the Cole Porter Song Book | 1956 | studio | existing catalogue entry; add descriptor only |

**CRITICAL classification hold:** *Sweet and Hot* is identified as a 1955 **studio album** in many discographies but was assembled from separate 1952, 1953 and 1955 sessions, including older issued 78s and two television/broadcast takes. Because Fandome excludes compilations, ask for editorial classification or apply a strict policy check **before merging that one row**, without blocking the other three rows. The evidence notes specify the track/source differences. Do **not** present the four as four uninterrupted original sessions.

**Other date issues:** the original *Ella Sings Gershwin* is **1950**, despite one AllMusic issue listing **1951**; *Songs in a Mellow Mood* is **1954** based on original Decca and session documentation despite a 1955 AllMusic display. *Pure Ella* is a 1994 **reissue combination** of these first two records, not a third original album.

## Co-billed collaboration

None in this phase. For the next phase, **Ella and Louis** (1956) and **Ella and Louis Again** (1957) must be credited as **Ella Fitzgerald & Louis Armstrong**, with the co-billed linkage added appropriately in `src/data/coBilled.ts` if Louis Armstrong has a Fandome room. Do not count Louis as an influence merely because of the collaboration.

## Additional genre / instrument / production tokens

**New genre `bop`**: AllMusic explicitly lists Bop for the 1956 Cole Porter album, and `bop` is missing from the current `scenes.ts` genre vocabulary. Preserve it in the album as a low-weight style and add the canonical token `bop` in `src/data/scenes.ts`, `src/data/genreFamilies.ts` and `scripts/validate-descriptors.ts` before validating. Existing tokens: `vocaljazz`, `jazz`, `standards`, `traditionalpop`, `swing`, `bigband`. All instrument tokens already exist. *Production cells intentionally empty*, not a formatting error.

## ARTIST INFLUENCES with sources

**Connee Boswell** is verified as Ella Fitzgerald's formative vocal model. In a first-person account reproduced by the US education biography, Ella says she loved Boswell's record and tried to imitate her voice. Official Ella biography and US Library of Congress biography corroborate her Apollo amateur performance of a Connee Boswell record.

- https://files.eric.ed.gov/fulltext/ED439031.pdf (direct first-person reminiscence quoted)
- https://www.ellafitzgerald.com/biography/ (official biography)
- https://www.loc.gov/loc/lcib/9708/ella.html (Library of Congress)

Ella also listened to Louis Armstrong and Bing Crosby according to the education biography; these are **reported early listening**, not forced into the album-level `influenced_by` field. All four album `influenced_by` fields intentionally empty because the sources do not explicitly tie Boswell, Armstrong or Crosby to a given album's creative decisions. **Composers covered (Gershwin, Porter) are not album influences by definition.**

## File contents and checks

- `ella_phase01_rows_ONLY.csv`: only these four rows; exact 27-field schema; existing artist id; original full album title retained.
- `ella_phase01_sources.csv`: source URLs with support and evidence strength, separately keyed by album; `ARTIST` and `CATALOG` contain contextual sources rather than descriptor rows.
- `ella_phase01_genre_evidence.csv`: one source-backed row per assigned genre, scope explaining album vs subset.
- `ella_phase01_evidence-notes.md`: source-by-source judgment, dates, personnel, mixed sessions, exclusions and disagreements.
- `ella_phase01_catalog-audit.csv`: existing vs new vs exclude vs later, including 1955 archival borderline.
- `CLAUDE_IMPORT.md`: this handoff document.

**Claude instructions:** verify current catalogue id and original release titles, add only necessary albums, resolve *Sweet and Hot* classification, import descriptor rows, run Fandome's validator, then second-person review. Don't backfill empty production or influenced_by from guesses.

## Next phase (02)

Proposed next four studio albums, subject to original issue-order and co-billing checks: **Ella and Louis** (1956), **Ella Fitzgerald Sings the Rodgers and Hart Song Book** (1956), **Ella Fitzgerald Sings the Duke Ellington Song Book** (1957), **Ella and Louis Again** (1957). Later 1957 *Like Someone in Love* follows in subsequent phase. Exclude live performances and retrospective compilations.

## Claude import note (Oct 2026)

- Sweet and Hot (1955) not imported: assembled from 1952, 1953 and 1955 sessions, earlier 78s and broadcast takes, so it is a compilation in practice (owner's scope: compilations not a priority). Three rows imported.
- New genre token `bop` (parent jazz). Ella Sings Gershwin (1950) and Songs in a Mellow Mood (1954) added to the catalogue row.
- Artist influences: Connee Boswell (her own words), Louis Armstrong and Bing Crosby (early listening).

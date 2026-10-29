# CLAUDE IMPORT — Zucchero phase 01

**As of:** 2026-10-29  
**Fandome artist ID:** `zucchero` (exists in `src/data/catalog.ts`; absent as an independent short-id entry from `src/data/seed.ts`).  
**Scope:** Four new rows, original studio albums 1983–1987. No previously researched Zucchero row found at `docs/descriptors/zucchero.csv` on the branch; therefore nothing was skipped. This ZIP is strictly incremental.

## Included CSV rows (exact import IDs)

1. `zucchero-unpodizucchero` — *Un po' di Zucchero* (1983), studio **ADD**
2. `zucchero-zuccherotherandyjacksonband` — *Zucchero & The Randy Jackson Band* (1985), studio **ADD**
3. `zucchero-rispetto` — *Rispetto* (1986), studio **ADD**
4. `zucchero-blues` — *Blue’s* (1987), studio **EXISTING**, reuse exactly

All descriptors use CSV artist `Zucchero`. Existing album title in the catalogue is **Blue’s** (curly apostrophe); use it unchanged.

## Album catalogue additions before validation

| Exact title | Year | Type | Proposed ID |
|---|---:|---|---|
| Un po' di Zucchero | 1983 | studio | `zucchero-unpodizucchero` |
| Zucchero & The Randy Jackson Band | 1985 | studio | `zucchero-zuccherotherandyjacksonband` |
| Rispetto | 1986 | studio | `zucchero-rispetto` |

Additional catalogue omissions across the career are inventoried in `zucchero_phase01_catalog-audit.csv`. Proposed slug IDs were computed from Fandome's current `catalog.ts` slug routine; they are not existing IDs. Check new titles before import.

## Co-billed recording

- **`zucchero-zuccherotherandyjacksonband`**: exact original artist credit **Zucchero & The Randy Jackson Band**; add to `src/data/coBilled.ts` with `credit: 'Zucchero & The Randy Jackson Band'`. The discography identifies a group-billed record; do not treat Randy Jackson merely as a featured bassist for this purpose.

## New tokens

- **Genre:** `pianoblues` from 1987 original LP style **Piano Blues**, used by *Blue’s*. Add to `scenes.ts`; proposed `genreFamilies.ts` parents `['blues']`.
- **New instruments:** none.
- **New production tokens:** none.

## ARTIST INFLUENCES (career-wide, not automatically album-specific)

Zucchero directly discusses his formative musical listening in interviews. These do **not** automatically populate any one album's `influenced_by` field.

| Artist / composer | Grounded evidence | Source |
|---|---|---|
| **Ray Charles** | Zucchero explicitly names him among formative American R&B/soul artists | https://www.klcc.org/npr-music/2017-02-23/a-moment-with-zucchero-italian-pop-star-and-amateur-linguist |
| **Otis Redding** | Explicitly named among artists who influenced him | https://www.klcc.org/npr-music/2017-02-23/a-moment-with-zucchero-italian-pop-star-and-amateur-linguist |
| **Aretha Franklin** | Explicitly named alongside Redding and Charles | https://www.klcc.org/npr-music/2017-02-23/a-moment-with-zucchero-italian-pop-star-and-amateur-linguist |
| **Sam & Dave** | Recalled by Zucchero as early soul listening | https://www.writeonmusic.com/2014/01/an-interview-with-zucchero.html |
| **Wilson Pickett** | Recalled alongside Sam & Dave, Aretha and Ray Charles | https://www.writeonmusic.com/2014/01/an-interview-with-zucchero.html |
| **The Beatles** | Named among musicians he listened to while growing up | https://theworld.org/stories/2017/04/12/what-miles-told-zucchero |
| **The Rolling Stones** | Named among musicians he listened to while growing up | https://theworld.org/stories/2017/04/12/what-miles-told-zucchero |
| **Joe Cocker** | Described as his idol in the account of a song on *Rispetto* | https://it.wikipedia.org/wiki/Rispetto_(album_Zucchero_Fornaciari) |

**Context rather than independent explicit artist-influence assertions:** Zucchero also recalls Italian opera, including Verdi and Puccini, shaping the sonic environment he grew up with. He does not explicitly attach a particular Verdi/Puccini opera to these albums. Source: https://www.klcc.org/npr-music/2017-02-23/a-moment-with-zucchero-italian-pop-star-and-amateur-linguist

## Discographic and credit caveats

- Original dates: **4 Apr 1983, 8 Mar 1985, 28 Apr 1986, 15 Jun 1987**, per the artist's official discography; AllMusic may display **reissue** dates for 1983 and 1987.
- The *Rispetto* producer field needs liner-note reconciliation: Qobuz track metadata credits Zucchero/Rustici/Michael Torpedine; Italian discography identifies Michele Torpedine album producer; original session testimony clarifies Rustici's limits.
- The 1985 producer information is less complete than the individual instrument credits. Review with an original full-LP insert if available.
- The 1983 record has weaker album-specific genre evidence; especially Blues-Rock and Adult Contemporary are retrospective AllMusic tags. Check by audition; do not upgrade confidence automatically.
- **Blue’s** appears as a 10-track original LP or an expanded 12-track CD/digital listing. The newer tracks/edits are not a separate album.
- Excluded: live, greatest hits/compilations, `Six Mix` (1988 remix mini-compilation), later greatest-hits duo *Zu & Co.* (2004, compilation). `Inacustico: D.O.C. & More` (2021) is a re-recording project not yet audited as a standalone eligible album.

## Next phase 02 (planned; new rows only)

1. *Snack Bar Budapest Original Movie Soundtrack* (1988), soundtrack. Qualifies as a **documented multi-artist film collaboration** involving Zucchero, David Sancious and Lisa Hunt; Nina Simone track also appears. Verify whether every track credit belongs to this album, and note its various artists crediting. https://www.zucchero.it/eng/snack-bar-budapest-original-movie-soundtrack/
2. *Oro incenso & birra* (1989), studio, existing ID `zucchero-oroincensobirra`.
3. *Miserere* (1992), studio, existing ID `zucchero-miserere`.
4. *Spirito DiVino* (1995), studio, existing ID `zucchero-spiritodivino`.

If the soundtrack is excluded after checking album credit as a Various Artists work, phase 02 should instead contain *Bluesugar* (1998) as fourth item. Never include a compilation/live record instead.

## Files to import / retain for evidence

- `zucchero_phase01_rows_ONLY.csv` — exactly 27 columns; only phase 01 rows.
- `zucchero_phase01_sources.csv` — sources, per album and artist-influence appendix (`album_id=ARTIST`).
- `zucchero_phase01_genre_evidence.csv` — one record per genre per album, with scope.
- `zucchero_phase01_evidence-notes.md` — judgment and credit audit.
- `zucchero_phase01_catalog-audit.csv` — complete career catalogue omissions.

After adding the missing albums and `pianoblues`, run the Fandome descriptor validator and tests. Do not commit to GitHub until those pass.

## Claude import note

- Added Un po' di Zucchero (1983), Zucchero & The Randy Jackson Band (1985, co-billed) and Rispetto (1986) to the catalogue before Blue’s.
- New genre token `pianoblues` (parent blues).
- Producers: Zucchero dropped as self-credit (1985, Rispetto); Corrado Rustici and Michele Torpedine kept.
- Rispetto influenced_by "Joe Cocker" left empty for now: it comes from a Wikipedia account of a song, not a confirmed first-person statement. Joe Cocker also left out of artist-level influences pending a first-person source.
- Artist influences from his own interviews: Ray Charles, Otis Redding, Aretha Franklin, Sam & Dave, Wilson Pickett, The Beatles, The Rolling Stones.
- sounds_like (Joe Cocker, Ray Charles) to be checked against critics in the reception pass.

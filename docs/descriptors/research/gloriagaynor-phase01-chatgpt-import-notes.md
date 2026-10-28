# CLAUDE_IMPORT — Gloria Gaynor / Phase 01

## Scope and repository audit

GitHub **branch `descriptors`**, checked **28 October 2026**: `Gloria Gaynor` is absent from **both** `src/data/catalog.ts` and `src/data/seed.ts`; `docs/descriptors/gloriagaynor.csv` is missing (404), and the existing landmark research document did not name this artist. These are public-branch read-only results, not proof that offline or unmerged private changes do not exist. **Proposed Fandome artist ID: `gloriagaynor`**. Create the artist only if still absent after Claude's current working-branch check. Preserve the IDs below when importing; none conflicts with the public-branch catalog.

**Exactly four new original studio-album rows, 27 columns, chronological:**

| Album ID | Original title | Year | Type | Action |
|---|---|---|---|---|
| `gloriagaynor-nevercansaygoodbye` | Never Can Say Goodbye | 1975 | studio | add |
| `gloriagaynor-experiencegloriagaynor` | Experience Gloria Gaynor | 1975 | studio | add |
| `gloriagaynor-ivegotyou` | I've Got You | 1976 | studio | add |
| `gloriagaynor-glorious` | Glorious | 1977 | studio | add |

No pre-existing album was skipped in this research on the accessible branch. **Do not add compilation, live recordings or reissue extra mixes**. `Experience Gloria Gaynor` is the original title; AllMusic sometimes shortens it to *Experience*. *Never Can Say Goodbye* includes the original 1974 single *Honey Bee* (Paul Leka production) within the 1975 LP.

All four are **missing from the public catalog**. Import with `src/data/catalog.ts` additions and artist metadata (USA, English, 1970s; soul/disco/R&B), then the rows, then validate. The catalog audit includes upcoming titles as future placeholders only; **do not import future-phase descriptors now**.

## Credits and track-issue caveats

- The first three albums credit **Meco Monardo, Tony Bongiovi and Jay Ellis**. In the 1975 debut, **Paul Leka produced only track A1, *Honey Bee***, explicitly evidenced by label-level metadata and UK pressing credits. Thus keep his name in the debut's producers; **do not copy him into the other 1975 or 1976 albums**. **Tom Moulton** is a credited mixer of the nonstop disco suites, **not** a producer. Also the song authors Clifton Davis, Cole Porter, Bacharach/David or Jackson 5/Four Tops cover histories do not constitute verified album musical influences.
- 1977 *Glorious* credits only **Gregg Diamond and Joe Beck** as producers. The orchestration credits justify the instrumental descriptors; no machine model is verified.
- Four rows are `draft`; no reviewed status claimed. Album-scale numbers and sonic parallels are editorial assessments. See `evidence-notes.md` and one-row-per-genre evidence for details and limits.
- **New genre tokens:** none. (`disco`, `soul`, `rnb`, `northernsoul`, `downtempo`, `dance` already appear in `Genre`.) **New instrument tokens:** none. **New production tokens:** none. **Co-billed albums:** none in this phase. Musical scenes: American/New York disco, soul and club culture of the 1970s.

## ARTIST INFLUENCES — first-person accounts (artist-level, not album-level)

These named musicians informed Gaynor's general approach to singing; they must **not** be inserted indiscriminately into the `influenced_by` field of any of the four albums. Sources refer to her upbringing or general vocal development, not an album-specific influence on 1975–77 arrangements.

- **Nat King Cole** — Gaynor specifically identifies him as a model for **diction**, naming him in her 2025 interview. Source: https://www.bustle.com/entertainment/gloria-gaynor-i-will-survive-age-28
- **Frank Sinatra** — she says he taught her **phrasing**. Same direct interview: https://www.bustle.com/entertainment/gloria-gaynor-i-will-survive-age-28
- **Ella Fitzgerald** — she repeatedly sang Fitzgerald's repertoire while working to extend her **vocal range**. Same direct interview: https://www.bustle.com/entertainment/gloria-gaynor-i-will-survive-age-28
- **Barbra Streisand** — another singer she names as teaching her to reach wider vocal range through imitation. Same direct interview: https://www.bustle.com/entertainment/gloria-gaynor-i-will-survive-age-28
- **Nancy Wilson** — directly named as a singer who shaped her early listening. Same 2025 interview: https://www.bustle.com/entertainment/gloria-gaynor-i-will-survive-age-28
- **Gloria Lynne** — also named in her 2025 statement of vocal influences. Same interview: https://www.bustle.com/entertainment/gloria-gaynor-i-will-survive-age-28
- **Marvin Gaye** — Gaynor says she came to enjoy his work among later influences. Original 2005 direct interview (reposted): https://www.prideindex.com/gloria-gaynor-soul-survivor/
- **Stevie Wonder** — named in that same first-person answer: https://www.prideindex.com/gloria-gaynor-soul-survivor/

Separate note: Gaynor also says her **brothers' unprofessional gospel singing** helped form her love of gospel. They are not named professional artists suitable for an influence link. Source: https://www.crossrhythms.co.uk/articles/music/Gloria_Gaynor__The_disco_diva_steps_into_the_gospel_arena/66388/p1/

## Phase sequencing

**Next phase 02 (strictly new rows):** *Gloria Gaynor's Park Avenue Sound* (1978), *Love Tracks* (1978), *I Have a Right* (1979), *Stories* (1980). Verify the precise 1978/79 original LP chronology where streaming services show later digital dates. *Love Tracks* features *I Will Survive*, which is **not** on any of these phase-01 records.

Then continue chronologically with *I Kinda Like Me* (1981), *Gloria Gaynor* (1982), *I Am Gloria Gaynor* (1984), *The Power of Gloria Gaynor* (1986), and later original studio albums; distinguish named reissue / compilation packages before adding them.

## Package (six files)

- `CLAUDE_IMPORT.md` (this manifest)
- `gloriagaynor_phase01_rows_ONLY.csv` (four 27-column draft rows)
- `gloriagaynor_phase01_sources.csv` (per-album qualified references and artist-influence source context)
- `gloriagaynor_phase01_genre_evidence.csv` (all 17 genres in row order with independent scope)
- `gloriagaynor_phase01_evidence-notes.md` (album-by-album reasoning and limitations)
- `gloriagaynor_phase01_catalog-audit.csv` (catalog additions / forward work)

Import only phase 01 and validate against the live repo; no scripts or code changes are bundled. No GitHub writes have been performed.

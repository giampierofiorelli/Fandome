# CLAUDE IMPORT — The Notwist, Phase 02

Date researched: 2026-10-27. GitHub source branch: `descriptors` (read-only). Fandome artist id: `notwist`.

## Phase contents: 3 newly described albums, only these rows

1. `notwist-shrink` — **Shrink** (1998), studio; present in catalogue.
2. `notwist-neongolden` — **Neon Golden** (2002), studio; present in catalogue.
3. `notwist-thedevilyoume` — **The Devil, You + Me** (2008), studio; present in catalogue.

Import only `notwist_phase02_rows_ONLY.csv` and the associated Phase 02 research files. Do **not** replace/import the Phase 01 rows (**The Notwist** 1991; **Nook** 1992; **12** 1995) and do not duplicate records already imported. If the Phase 01 catalogue changes have not been merged, import those separately from their original Phase 01 package.

## Albums to add to catalogue (not included as descriptor rows here)

- `notwist-sturm`, **Sturm**, **2009**, `soundtrack`: original 11-track album of music for Hans-Christian Schmid's film, released 11 September 2009; winner of 2010 Deutscher Filmpreis **Best Film Music**. Sources: https://thenotwist.bandcamp.com/album/sturm-2 and https://www.deutscher-filmpreis.de/film/sturm/ .
- `notwist-newsfromplanetzombie`, **News from Planet Zombie**, **2026**, `studio`: released 13 March 2026, verified directly with Morr Music: https://morrmusic.com/releases/news-from-planet-zombie .

These are explicitly recorded in `notwist_phase02_catalog-audit.csv`; they must be added before their *future* phase descriptor rows are imported. **Shrink**, **Neon Golden**, and **The Devil, You + Me** are already in `src/data/catalog.ts`. `Close to the Glass` (2014) and `Vertigo Days` (2021) are also present.

## Co-billed releases

None in Phase 02. Andromeda Mega Express Orchestra performed on the 2008 record but the album is **credited to The Notwist alone**, not co-billed. Likewise the collaborative project **13 & God** is separate from these albums, not a co-bill to be added here.

## Token additions and existing proposals

- **New production token:** `yamahary30` — Yamaha RY30 drum machine, credited to Andreas Gerth on *Shrink*. Claude must add it to the production whitelist before validating; the model credit comes via an album-liner transcription, so keep the caveat in evidence notes.
- **Previously proposed in Phase 01, still not in current branch instrument list:** `bassclarinet` — documented on *Shrink*, *Neon Golden*; **do not count as newly discovered for this phase**, but verify the Phase 01 whitelist update has been applied before validation.
- **New genre token:** `krautpop` — OndaRock Milestones explicitly describes *Neon Golden* with the term 'kraut-pop'. Add token to `scenes.ts` genre type/labels, `genreFamilies.ts` as appropriate, and validator **before validation**. `altcountry` is already an allowed token: The Independent discusses it as a disputed reading of *Neon Golden*, so it appears last as a texture-level annotation. `folktronica`, `ambientpop`, `glitchpop` are already allowed, and are all explicitly tagged on Album of the Year. Do not blindly remap unfamiliar styles.
- **Other new tokens:** none. `mallets` is used for credited vibraphone, `gobletdrum` for tombak, `percussion` for congas and other unnamed/less prominent hand percussion. Do not infer electronic instruments or machine models from a genre.

## Producer/credit caveats

- 1998/2002: **Galore** is explicitly credited as producer. **Mario Thaler** and **O.L.A.F. Opal** are only credited for recording and mixing, not producing, on these two original album editions.
- 2008: original edition credits give **The Notwist** and **Olaf Opal** as producers. Daniel Glatzel is the **orchestral arranger**, *not* a producer.
- For 2002 *Neon Golden*, original European 10-track running order is the baseline. Later digital/US listings include 3 bonus tracks; those are not new releases. Collector transcript inconsistently names Gary Numan on a *Drowning By Numbers* sample, while other sources credit Michael Nyman: flag, do not promote samples into musical influences.
- Dates are first original release years. For the 2008 album, US issues appeared later than the 2 May 2008 original.

## Influence discipline

Phase 01 already contains **ARTIST INFLUENCES** (artists influencing the group as a whole); it must not be repeated here. Phase 02 `influenced_by` contains only *album-specific* musician evidence. Bacharach is a critic-identified brass-arrangement influence on *Shrink* (one track); Morton Feldman is identified by Markus Acher as a compositional point of reference for orchestration on the 2008 album. *Neon Golden* has none securely established: critic comparisons and sampled works belong elsewhere.

## Next phase — Phase 03 (chronological, 4 albums)

1. `notwist-sturm` — **Sturm** (2009), original soundtrack, catalogue addition.
2. `notwist-closetotheglass` — **Close to the Glass** (2014), studio, already catalogued.
3. `notwist-vertigodays` — **Vertigo Days** (2021), studio, already catalogued.
4. `notwist-newsfromplanetzombie` — **News from Planet Zombie** (2026), studio, catalogue addition.

No live albums, compilations, reissues or bonus-track duplicates. All proposed entries are released by 2026-10-27.

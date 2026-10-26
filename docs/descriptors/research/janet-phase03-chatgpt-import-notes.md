# Janet Jackson – Fandome Phase 03 – Claude import

Research date: **26 October 2026**. Read-only GitHub `descriptors` rules and critic/liner-credit research. This phase is STRICTLY INCREMENTAL, with exactly three fresh rows and exactly 27 columns per row. Do not merge Phase 01 or Phase 02 rows into this file.

## Albums supplied

| Fandome album_id | Original title | Year | Type | Catalogue |
| --- | --- | --- | --- | --- |
| `janet-20yo` | *20 Y.O.* | 2006 | studio | **Add** |
| `janet-discipline` | *Discipline* | 2008 | studio | **Add** |
| `janet-unbreakable` | *Unbreakable* | 2015 | studio | **Add** |

## Albums to add to `src/data/catalog.ts`

Under artist `janet`, after *All for You* (2001), add:

```ts
['20 Y.O.', 2006],
['Discipline', 2008],
['Unbreakable', 2015],
```

All three are **released studio albums**. Release-year IDs follow the validated lowercase alphanumeric title convention. `20 Y.O.` becomes `janet-20yo`, not `janet-20y.o.`. Check generated seed ID after adding catalogue entries.

## New vocabulary tokens (add before running validator)

- **Production `mpc60ii`**: Akai MPC60II sampling drum machine, confirmed as Jermaine Dupri's composing tool in *20 Y.O.* recording sessions in Matt Gallagher’s December 2006 *Mix* engineering feature: https://www.mixonline.com/recording/janet-jackson-365742 . Not interchangeable with other MPC models.
- **Production `ensoniqmirage`**: Ensoniq Mirage sampler whose wind/noise sound Jimmy Jam explicitly says was reused on *Unbreakable* track “BURNITUP!”: https://www.guitarcenter.com/riffs/interviews/producer/jimmy-jam-terry-lewis-keeping-it-fresh-being-unbreakable . Not an Emulator or any other Ensoniq model.

**New genre token `brazilianjazz`**: *The Feminist Wire* critic explicitly identifies Brazilian jazz as a minority musical element on *Unbreakable*: https://thefeministwire.com/2015/10/a-review-son-of-baldwin-shares-why-janet-jacksons-newest-album-reveals-she-is-unbreakable/ . This is a *texture* scope, not an album-wide claim. All other genre labels, including `frenchhouse`, `pophouse`, `hippop`, `phillysoul`, `freestyle`, `electrodisco`, are in `scenes.ts`. **No new instrument tokens**: all instrument labels are in `instruments.ts`.

## Co-billed records and artist-wide influences

No co-billed album is present. Nelly, Khia, Missy Elliott and J. Cole are song guests and not co-billed owners of the album. No `coBilled.ts` changes. **ARTIST INFLUENCES were supplied only in Phase 01**, so there is no repeat here.

## Important scope and credit caveats

- *20 Y.O.*: Jermaine Dupri is both an executive producer **and** an actual track producer; include him for his track work, not the executive credit. Bobby Ross Avila and Issiah Avila are included from “Enjoy”; No I.D. appears as a credited track producer. Luny Tunes are **not** included: their “Call On Me” remix is a separate single, not the original studio album recording. The Ensoniq Mirage **must not be attributed to *20 Y.O.* simply because Jam used it elsewhere.**
- *20 Y.O.*: The December 2006 recording engineer feature documents that Dupri used the exact **Akai MPC60II** in these sessions, and that both teams exchanged **Pro Tools** files. Jimmy Jam documents about 30 layers of Janet's backing vocals. Those are actual production techniques, not inferred from R&B genre.
- *Discipline*: Original edition has **22 tracks including interludes**; Qobuz deluxe edition adds “Let Me Know” and may supply further credit names. Do not bring bonus-only production into the original release row. Exclude Jimmy Jam/Terry Lewis, who did **not** work on this album. Ne-Yo is included specifically as co-producer, not simply as songwriter. Qobuz sometimes lists Ian Cross as "Producer" adjacent to "Additional Producer" / engineer, while standard original-album credits primarily identify him as vocal producer/engineer; **Ian Cross excluded pending primary liner confirmation**. Similar care taken with additional production credits for Jermaine Dupri / Manuel Seal when they are not otherwise confirmed as full/track co-producers.
- *Unbreakable*: The **2015 original album** only; do not include later remixes. Dem Jointz has both additional-production-only credits on some tracks and full producer credits on others (“BURNITUP!”), so is included. Missy Elliott is credited as actual producer on “BURNITUP!”, not included just for rapping. Tommy McClendon (co-producer of “Unbreakable” and “Night”) is not equivalent to Thomas Lumpkins (both separately appear in label/service credits). AllMusic also labels Jermaine Cole as `Producer` on the release, while other editions mainly list him for the guest part on “No Sleeep”. **Verify Cole's exact original-version role against liner art before import; remove if guest-only**. This caveat also affects overall producer-list confidence.
- **Genre scope**: tags representing individual songs are marked `some tracks`; `phillysoul` on *Unbreakable* is a reference to a stylistic texture, not the dominant identity. `freestyle` on *20 Y.O.* is based on Slant's explicit retroactive designation of “Get It Out Me”, rather than falsely relabelling it synthpop. `frenchhouse` is the Washington Post’s *Rock With U* sonic analogy; no French producer provenance is claimed.
- **Instrument and machine discipline**: no generic keyboard sound is upgraded to a particular synth model; the 2015 Ensoniq Mirage is an explicit producer report. Vocoder on *Discipline* specifically derives from Washington Post's *Rock With U* review. Electric guitar has session credits. *20 Y.O.* string arrangement/violin/viola/cello is supported by personnel metadata; do not call synth string swells live string players on *Discipline*.
- **Influences**: *Unbreakable* `influenced_by=Michael Jackson` is supported by Slant's professional account of the *Off the Wall* musical tribute on “Broken Hearts Heal”; otherwise sonic neighbors go to `sounds_like` or are left blank.
- **Version dates**: the sources differ on September 20 vs September 26 availability for 2006 *20 Y.O.* and February 22 vs 26 for 2008 *Discipline*. The descriptor uses the uncontested original **year**, not a claimed universal day-of-release.

## Files

- `janet_phase03_rows_ONLY.csv` (header + exactly 3 new rows)
- `janet_phase03_sources.csv` (sourced claims, strength)
- `janet_phase03_genre_evidence.csv` (one row per genre/album, each scoped)
- `janet_phase03_evidence-notes.md` (per-album numeric, production and uncertainty reasoning)
- `janet_phase03_catalog-audit.csv` (all 3 add)
- `CLAUDE_IMPORT.md` (this file)

## Next phase

**None scheduled**: the 1982–2015 released studio-album run is complete after the eleven albums across phases 01–03. Do not add unannounced, unreleased, live, compilation or derivative remix sets solely to generate more rows. Landmark original-material EPs/remix albums can be examined as a separate optional audit only if the user's inclusion criteria are met.

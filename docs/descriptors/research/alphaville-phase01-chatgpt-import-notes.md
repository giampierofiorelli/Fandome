# Alphaville — Fandome phase 01 hand-off

**Research date:** 27 October 2026. **Artist ID:** `alphaville` (exactly as in `src/data/catalog.ts`); **branch:** `descriptors` (read only). Existing seed.ts has no Alphaville entries. No `docs/descriptors/alphaville.csv` exists at research date, and landmark-research index does not list Alphaville.

## Four incremental album rows ONLY

| album_id | Album | Year | Type | Catalogue |
|---|---|---:|---|---|
| `alphaville-foreveryoung` | Forever Young | 1984 | studio | Existing `catalog.ts` (keep ID) |
| `alphaville-afternoonsinutopia` | Afternoons in Utopia | 1986 | studio | Existing `catalog.ts` (keep ID) |
| `alphaville-thebreathtakingblue` | The Breathtaking Blue | 1989 | studio | Existing `catalog.ts` (keep ID) |
| `alphaville-prostitute` | Prostitute | 1994 | studio | **Add** |

All four original studio albums. No older rows were skipped (descriptor file absent). Do **not** copy another artist's rows or treat later remasters as separate albums.

### Add to catalogue

`{ id: 'alphaville-prostitute', artistId: 'alphaville', title: 'Prostitute', year: 1994 }` (studio).

**Discography forward audit (already released by 27 October 2026):**
- `alphaville-salvation` — *Salvation* (**1997 original German release**, although US/AllMusic sometimes list 1998 or 1999), studio. Next phase.
- `alphaville-crazyshow` — *CrazyShow* (29 Jan 2003), **4-CD original-song/websong project** with many unreleased pieces plus some demos/remixes. Treat as a borderline **studio anthology**: original material substantial and artist calls it a new album, so **include subject to editorial review**; do not automatically split the four discs into four albums. [Official band description](https://www.alphaville.shop/), [contemporary 2003 fan discography](https://www.alphaville.nu/disco/alben/crazyshow.htm).
- `alphaville-catchingraysongiant` — *Catching Rays on Giant* (2010), studio; note source listings sometimes incorrectly pluralise title as “Giants”.
- `alphaville-strangeattractor` — *Strange Attractor* (2017), studio.
- `alphaville-eternallyyours` — *Eternally Yours* (2022), **fully newly recorded orchestral interpretations with one new title song**; billing **Alphaville & Deutsches Filmorchester Babelsberg** per MusicBrainz, and group explicitly re-recorded material, rather than just collecting original masters. Treat as a **studio re-recording/collaboration** candidate, **not as a conventional greatest-hits compilation**, subject to editorial decision for later phase. If admitted, use original 2022 sonics, and add co-billed exact credit; do not attribute old synth arrangements wholesale to new orchestral ones. [Label](https://www.edel.com/en/press_releases/alphaville-with-first-orchestral-album-in-bands-history-on-label-neue-meister/), [MusicBrainz](https://musicbrainz.org/artist/31aa6f87-8d00-4ae9-a5cc-6d7eeea109d2), [interview](https://chaoscontrol.com/marian-gold-alphaville-interview-eternally-yours/).

**Excluded:** 1988 *Alphaville (Amiga)*, *The Singles Collection*, *First Harvest*, *History*, *Dreamscapes* (1999 multi-disc anthology), *Dreamscapes Revisited*, *So8os Presents Alphaville*, *Forever! Best of 40 Years* are compilations/retrospectives; *Stark Naked and Absolutely Live* and *A Night at the Philharmonie Berlin* are live; *Forever Pop* (2001) is a **remix album**, possibly historically notable but not in this core studio sequence. Can separately consider as `type=remix` later if requested. Original websong archival versions are not additional separate studio albums.

### Co-billed in this phase

None. Klaus Schulze is producer/collaborator, **not co-billed artist** on *The Breathtaking Blue*.

### New exact token

`traumtoncomputersystem` **production** — printed on the original 1984 *Forever Young* LP sleeve as “Traumton Computer System”; add to `src/data/production.ts` before import, or flag for manual token review rather than replacing it with a guessed device. **No new genre or instrument tokens**. Other row tags are already in the genre/production/instrument sets (including `sophistipop`, `technopop`, `alternativeindierock`, `hornarrangements`, `vocoder`).

### ARTIST INFLUENCES — group-level, DIRECT first-person sources (not blanket album influences)

1. **Orchestral Manoeuvres in the Dark**: Marian Gold in [Classic Pop interview (20 Feb 2025)](https://www.classicpopmag.com/news/godfathers-of-pop-marian-gold/) says OMD were strong influences on the founders; in [harmony.fm interview (29 Apr 2024)](https://www.harmonyfm.de/themen/welt-der-80er/398933-marian-gold-von-alphaville-im-exklusiven-harmony-interview.html) he specifically recalls their song **“Electricity”** (on *Orchestral Manoeuvres in the Dark*, 1980) making him realise a peer was making similar music.
2. **Tubeway Army** and **Gary Numan**: directly named as formative strong influences in [Classic Pop, Marian Gold (2025)](https://www.classicpopmag.com/news/godfathers-of-pop-marian-gold/).
3. **David Bowie**: named among musical inspirations during start-up by Marian Gold [Die Presse interview (2023)](https://www.diepresse.com/13428032/alphavilles-marian-gold-weltuntergang-gehoert-zum-partygefuehl); he discusses *The Rise and Fall of Ziggy Stardust and the Spiders from Mars* in [Silvia Pingitore interview](https://the-shortlisted.co.uk/alphaville-forever-young-interview-marian-gold/), and [Classic Pop 2025](https://www.classicpopmag.com/news/godfathers-of-pop-marian-gold/) includes his formative listening.
4. **Roxy Music**: independently named as musical influence by Marian Gold in the [1999–2000 archive Q&A](https://www.oocities.org/emilzone/intv_1.html); discussed in [Berliner Zeitung](https://www.berliner-zeitung.de/article/alphaville-saenger-marian-gold-im-portraet-wir-waren-blutige-amateure-10735).
5. **Kraftwerk**: explicitly named in his [1999–2000 archive Q&A](https://www.oocities.org/emilzone/intv_1.html) (not merely a critic comparison).
6. **The Human League**: named in same [original interview/Q&A](https://www.oocities.org/emilzone/intv_1.html).
7. **Rupert Hine; Scott Walker; Steve Harley (Cockney Rebel); David Sylvian; Punishment of Luxury; Eyeless in Gaza; The Associates; Tim Curry; Brian Protheroe; Seventh Wave**: all directly named by Marian Gold in his [archived musician influences answer](https://www.oocities.org/emilzone/intv_1.html); keep as group-wide, with source. `The Associates` is distinct from other collaborator credits.
8. **The Sex Pistols** and **The Clash**: Marian Gold says their early group listened enthusiastically to these along with Bowie and OMD in [Die Presse, 2023](https://www.diepresse.com/13428032/alphavilles-marian-gold-weltuntergang-gehoert-zum-partygefuehl). This supports **early listening inspiration**, not a specific album's sonic influence.
9. **Freddie Mercury / Queen**: Marian Gold identifies Mercury as a singing and composing model in [harmony.fm (2024)](https://www.harmonyfm.de/themen/welt-der-80er/398933-marian-gold-von-alphaville-im-exklusiven-harmony-interview.html). Store as Freddie Mercury or Queen as relevant to schema, with the source.

**Strict distinction:** These are documented artist-wide inspirations. They are **not** automatically mapped into an album's `influenced_by`. Album rows leave the column empty because the identified quotations do not directly assign influences to that specific album. Editorial `sounds_like` is only an audible comparison, never documentary influence.

### Producer and instrument caveats

- *Forever Young*: original sleeve credits **Andreas Budde** as full **producer on three songs**, Loos/Pearson across the LP. [Original](https://www.plademesser.com/vare/alphaville-forever-young-2/). `traumtoncomputersystem` is on the **1984 original**, not a 2019 remaster. Don't falsely identify drum machines by brand.
- *Afternoons in Utopia*: multiple production teams, children’s choir and horns. **“Roger Linn” credited as “Drums”** on period data cannot safely identify a LinnDrum instrument model: no specific model in row.
- *The Breathtaking Blue*: **Alphaville + Klaus Schulze** produced. Electronic layer contrasted with acoustic bass, guitars, horns/strings. “For a Million” has separately credited **vocoder**. Schulze being part of Tangerine Dream / Ash Ra Tempel does not count as `influenced_by` just because he produced.
- *Prostitute*: **Alphaville** main production; Bruce Forest **additional production** on “Fools” does **not** qualify for the producer field; Julian Mendelsohn is credited for mixing. [1994 original credit/reissue transcription](https://www.michaelowencarroll.com/av/alb%20prostitute%20remastered.htm).
- All genre token evidence with context/scope in `alphaville_phase01_genre_evidence.csv`; labels like `alternativeindierock` are broad AllMusic filing tags and are deliberately **last**, not an indication they dominate the sound.
- Some discographies disagree on the *Salvation* year because the US issue was later: original country first release is **1997**. A separate reissue of any of these albums is never a new row.

### Import order

1. Inspect `alphaville_phase01_catalog-audit.csv` against current `catalog.ts` / `seed.ts`. Keep existing three generated IDs unchanged and add `alphaville-prostitute` only.
2. Add `traumtoncomputersystem` to production labels if absent; no other new tokens expected.
3. Create `docs/descriptors/alphaville.csv` containing **only 4 rows** from `alphaville_phase01_rows_ONLY.csv` (27-column header, 27 values per row, notes at most 15 words). Never merge the prior Pet Shop Boys batch.
4. Place source, genre evidence and notes files in `docs/descriptors/research/` using repository naming conventions. Run `scripts/validate-descriptors.ts` plus tests. Keep `status=draft` pending human second pass.

### Next phase — Phase 02

*Salvation* (1997), *CrazyShow* (2003; borderline anthology of websong originals, verify classification), *Catching Rays on Giant* (2010), *Strange Attractor* (2017). The 2022 orchestral co-billed album needs separate case review.

# CLAUDE IMPORT — Belinda Carlisle, Fandome phase 01

**Branch:** `descriptors`; read-only research handoff (not committed). 27-column rows all marked `draft`. Import only these **four new rows** into `docs/descriptors/belindacarlisle.csv`. For the project’s updated October 2026 guide, the extra file `belindacarlisle_phase01_reception.csv` belongs in `docs/descriptors/reception/belindacarlisle.csv` (four matching IDs). No rows from prior phases are present.

## Artist identity and catalog audit

Artist **Belinda Carlisle**, proposed Fandome ID **`belindacarlisle`**; checked `src/data/catalog.ts` **and** `src/data/seed.ts` (branch `descriptors`), no matching existing artist or album IDs, and no descriptor file for `belindacarlisle` or `belinda`. **Add artist room** if still absent; do not use the Go-Go’s as a co-billed or former alias. The artist’s released solo albums are separate from Go-Go’s studio albums.

| Album ID | Original album | Year | Type | Action |
|---|---|---:|---|---|
| belindacarlisle-belinda | Belinda | 1986 | studio | Add to catalog |
| belindacarlisle-heavenonearth | Heaven on Earth | 1987 | studio | Add to catalog |
| belindacarlisle-runawayhorses | Runaway Horses | 1989 | studio | Add to catalog |
| belindacarlisle-liveyourlifebefree | Live Your Life Be Free | 1991 | studio | Add to catalog |

**Already described/skipped:** none found. **Co-billed albums:** none in this batch. George Harrison, Bryan Adams, and other collaborators are guests; they are not co-billed album artists.

## New tokens / validation

No new genre, instrument or production tokens are proposed. Genre families can use currently allowed `poprock`, `contemporarypoprock`, `adultcontemporary`, `softrock`, `powerpop`, `dance`, and `pop`; instruments include `slideguitar`, `mandolin`, `oboe`, `strings`; production includes `fairlight`, `drumprogramming`, `stringarrangements`. The `voice` field uses allowed `clear|powerful|choral` variants only. **Re-run** `npx vite-node scripts/validate-descriptors.ts` and the repository tests **after** adding the artist and the catalog IDs: the validator does not know these new ids until they are registered.

## Artist influences (documented; phase 01 only)

These are **CAREER-WIDE**, not automatically album-specific. `influenced_by` is blank in the four album rows because direct evidence that the named music shaped a specific 1986–1991 album is not established:

- **The Beach Boys**, especially *Pet Sounds*: Carlisle's first-person account of playing it constantly and valuing the melodic California-radio sensibility. The Guardian, Rich Pelley, 11 February 2021: https://www.theguardian.com/music/2021/feb/11/belinda-carlisles-teenage-obsessions-i-was-going-to-be-anita-ekberg-in-rome-but-ended-up-in-a-band
- **The Runaways**: she says hearing the band convinced her being in an all-female rock group was possible; this is a direct **career inspiration**, not an album-sonic influence. Same Guardian interview, 11 February 2021.
- **The Beatles** and **Phil Spector**: described as formative early musical influences in American Songwriter's interview, 10 October 2025: https://americansongwriter.com/belinda-carlisle-channels-nostalgia-harmony-and-heart-into-a-tribute-to-the-timeless-tunes-of-her-youth/
- **The Animals** and **Cat Stevens**: GRAMMY 2023 reports that she grew up listening to them; this is formative listening, with **weaker causal evidence**, so do not fill any `influenced_by` cells from this alone: https://www.grammy.com/news/living-legends-belinda-carlisle-inteview-the-go-gos-tour-la-punk-diane-warren/

## Cautions and disputed readings

1. **Belinda (1986)**: use the original 10-track LP. Later expanded reissues include 1987 Bernard Edwards-produced *Dancing in the City*, not evidence Edwards produced the original album. William Orbit's work is engineering/mixing/remixing, not the album's producer; Nathan Lam is credited associate/vocal producer rather than full album producer.
2. **Heaven on Earth (1987)**: Fairlight is explicitly credited for Rhett Lawrence, but model not specified; no model invented. Separate additional vocal production from Rick Nowels album production. Reissue mixes are not used as descriptor evidence.
3. **Runaway Horses (1989)**: guest musician George Harrison does not mean an artistic influence. David Munday is **not** credited as producer of 'Valentine': the original release lists **Rick Nowels** as producer and **Munday** on drum programming/instruments. The 'We Want the Same Thing' dance remix is **not** representative of the original album's sound.
4. **Live Your Life Be Free (1991)**: title starts 'Live', but is **not a concert recording**. All four credited producers have differing track assignments. `dance` is a subset of songs, not the album’s principal style. Mandolin/oboe are documented on 'Half the World'.
5. **Genres:** all have four or more grounded tags; broader `pop` / `rock` refer to album-level pop/rock discourse and musical components, not extra unverified subgenres. `sounds_like` is editorial, never evidence of direct influence.
6. **Reception ratings:** numeric recommendations on separate file are preliminary editorial judgments: `status=draft` on album rows; do not auto-label reviewed. Keep reception separate from the 27-column descriptors.

## Excluded releases and further phases

**Live albums and greatest-hits compilations excluded**; the Go-Go’s records belong to a different artist. *Nobody Owns Me* (2021) is not treated as an original new studio album. *Kismet* (2023) is a five-song **EP**, not a full studio album, but qualifies for consideration in a later phase because it is a documented Diane Warren collaboration. *Once Upon a Time in California* was released in 2025, so is eligible.

**Next phase 02:** *Real* (1993), *A Woman & a Man* (1996), *Voila* (2007), *Wilder Shores* (2017). **Phase 03 (projected):** *Kismet* (2023 EP, only if admitted under EP/collaboration exception) and *Once Upon a Time in California* (2025).

## Files in the archive

- `belindacarlisle_phase01_rows_ONLY.csv`: exact 27-column descriptor rows (4).
- `belindacarlisle_phase01_sources.csv`: 24 source records (some repeated across albums).
- `belindacarlisle_phase01_genre_evidence.csv`: 20 album-specific genre records, with scope.
- `belindacarlisle_phase01_evidence-notes.md`: rationale and source attribution.
- `belindacarlisle_phase01_catalog-audit.csv`: artist album adds.
- `belindacarlisle_phase01_reception.csv`: current guide's 4-row reception file.
- `CLAUDE_IMPORT.md`: this handoff.

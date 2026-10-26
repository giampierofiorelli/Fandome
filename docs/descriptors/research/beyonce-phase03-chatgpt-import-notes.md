# CLAUDE IMPORT — Beyoncé Phase 03

Read-only research against `descriptors` branch on **26 October 2026**. This archive is **strictly incremental**: import these three albums only; do not repeat Phase 01/02.

## Exact albums and IDs

- `beyonce-thelionkingthegift` — *The Lion King: The Gift* (2019), type `soundtrack`, **MISSING**, add in `src/data/catalog.ts`. Beyoncé-presented film companion with new recordings and multiple primary singers; not a greatest-hits album, not the separate film-score soundtrack.
- `beyonce-renaissance` — *Renaissance* (2022), type `studio`, **EXISTS** in catalogue.
- `beyonce-cowboycarter` — *Cowboy Carter* (2024), type `studio`, **EXISTS** in catalogue.

## Catalogue, collaboration and identity

- Add `['The Lion King: The Gift', 2019]` to Beyoncé's existing `catalog.ts` list; the generic album creator forms ID `beyonce-thelionkingthegift`. Do not replace the existing album/artist IDs.
- Original label/release pages primarily index album under Beyoncé; **other singers have track-level main-artist billing** and some discographies label album as a compilation because of multiple artists. For transparent representation, add `coBilled.ts` metadata for the project if needed, e.g. `'beyonce-thelionkingthegift': { credit: 'Beyoncé Presents: The Lion King: The Gift' }`, **not** an invented Beyoncé & [single artist] duet. Sources: [Qobuz](https://www.qobuz.com/us-en/album/the-lion-king-the-gift-beyonce/e569fahldj1rb) and [Pitchfork](https://pitchfork.com/news/listen-to-beyonces-new-album-the-lion-king-the-gift-with-jay-z-kendrick-blue-ivy-childish-gambino-more/). No other multi-billed albums added.
- *Renaissance* and *Cowboy Carter* are solo Beyoncé album credits, notwithstanding song guests.
- The 2018 The Carters collaboration **belongs only to Phase 02** and is not included or re-added here. Import results depend on Claude retaining that earlier catalogue/co-billed addition.

## New genre tokens to register before validating

- `afropop` — contemporary African pop: *The Gift*, [Pitchfork](https://pitchfork.com/reviews/albums/various-artists-the-lion-king-the-gift/) explicitly names it.
- `gqom` — South African electronic dance genre: *The Gift* and *Renaissance*, [Pitchfork](https://pitchfork.com/reviews/albums/various-artists-the-lion-king-the-gift/) and [Guardian](https://www.theguardian.com/music/2022/jul/29/beyonce-renaissance-review-joyous-soundtrack-to-a-hot-girl-summer).
- `bounce` — New Orleans bounce: *Renaissance*, [Pitchfork](https://pitchfork.com/reviews/albums/beyonce-renaissance/).
- `ballroom` — ball/vogue club music: *Renaissance*, [Pitchfork](https://pitchfork.com/reviews/albums/beyonce-renaissance/).
- `jerseyclub` — Jersey club style: *Renaissance*, [Guardian](https://www.theguardian.com/music/2022/jul/29/beyonce-renaissance-review-joyous-soundtrack-to-a-hot-girl-summer); *Cowboy Carter*, [NPR](https://www.npr.org/2024/03/29/1241672819/beyonce-cowboy-carter-10-takeaways).
- `zydeco` — Louisiana Creole dance music: *Cowboy Carter*, [Sony](https://www.sonymusic.ca/press_release/beyonce-releases-cowboy-carter) and [NPR](https://www.npr.org/2024/03/29/1241672819/beyonce-cowboy-carter-10-takeaways).

**No new instruments or production tokens**. The existing `afrobeats`, `afrobeat`, `afrohouse`, `country`, `bluegrass` and other tokens are retained as distinct terms; particularly **afrobeats ≠ afrobeat**. Genre evidence CSV marks whole-album, track-scoped or texture occurrences. Full musicologist/auditable derivations are in `beyonce_phase03_evidence-notes.md`.

## ARTIST INFLUENCES

Phase 01 already contains the career-wide sourced influence list. **Do not duplicate it here.** `influenced_by` in this phase uses only album-specific evidence. `Renaissance` includes Diana Ross on the strength of a direct [qualified critic comparison of Diana Ross-inspired disco](https://www.theguardian.com/music/2022/jul/29/beyonce-renaissance-review-joyous-soundtrack-to-a-hot-girl-summer). Other sampled/covered/guest artists must not be listed as influences without independent documentation.

## Key cautions for import

- *The Gift* is a new-recordings multi-artist **film-companion** despite some distribution systems calling it a compilation. Preserve track guest credit distinctions; do not add dialogue interludes as independent albums. The 2020 deluxe is not counted as a separate new studio work.
- *Renaissance* has 16 tracks. Do not import 2023 live-tour or remix editions. Note samples and interpolations are not *influenced_by* evidence; `protools` means it appears in engineer credits, not an endorsed DAW specification.
- *Cowboy Carter* uses its original 27-track digital listing. Co-producer is included; additional producer, executive producer, engineers, writers and featured artists **only** are excluded from the producers field. The term `808` in a credit doesn't necessarily prove use of a physical Roland TR-808.
- Input is **six files**, the rows file has **27 exact columns**, every value is `status=draft`, every notes cell ≤15 words. Import, update genre type/validator and catalogue, then run `npx vite-node scripts/validate-descriptors.ts` and test suite. The ZIP is not pre-validated against your live tests, which require repo changes first.

## Next phase

**No Phase 04** on the released studio/soundtrack/collaboration shortlist through 26 October 2026. The September 2026 twentieth-anniversary *B’Day* deluxe reissue, which adds the new single *Morning Dew (Donk)*, is not treated as a new original studio album or independent EP (see [Apple Music](https://music.apple.com/us/artist/beyonc%C3%A9/1419227) and [Parkwood's release announcement](https://www.prnewswire.com/news-releases/beyonce-releases-new-song-morning-dew-donk-4th-of-july-holiday-serves-a-treat-for-her-fans-302817900.html)). The three-phase Beyoncé coverage totals four albums (Phase 01), three (Phase 02), three (Phase 03), with *The Gift* treated as a qualifying soundtrack and *Everything Is Love* as The Carters collaboration. No live albums or greatest-hits compilations.

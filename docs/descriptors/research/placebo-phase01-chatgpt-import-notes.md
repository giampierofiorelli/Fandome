# CLAUDE_IMPORT — Placebo — Phase 01

## Scope / import order
- Artist: **Placebo** (`placebo`) — existing Fandome artist id.
- Date cutoff: **2026-10-27**. GitHub branch `descriptors`, **read-only**.
- **STRICTLY INCREMENTAL**: import precisely the three new rows in `placebo_phase01_rows_ONLY.csv`. Do not copy rows from earlier phases.
- Input CSV has **27 columns**, `status=draft`; all semantically specific values cite the included evidence tables.
- These three album IDs already exist in `catalog.ts`:
  1. `placebo-placebo` — *Placebo* (1996, studio)
  2. `placebo-withoutyouimnothing` — *Without You I’m Nothing* (1998, studio)
  3. `placebo-blackmarketmusic` — *Black Market Music* (2000, studio)

## ALBUMS TO ADD TO CATALOGUE (NOT phase 01 rows)
| album_id | Title | Year | Type |
|---|---|---|---|
| `placebo-battleforthesun` | Battle for the Sun | 2009 | studio |
| `placebo-loudlikelove` | Loud Like Love | 2013 | studio |

The catalog audit includes all eight original Placebo studio albums and exclusions. Add missing albums before their future-phase rows are validated.

## Co-billed albums
None in this phase. Guest vocals on *Black Market Music* (Justin Warfield) and the later Bowie duet recording of *Without You I’m Nothing* do **not** change the original studio album billing from **Placebo**.

## NEW ALLOWED TOKENS REQUIRED
- Genres: **none**; all genre tokens are already present in the consulted validator or the Genre list.
- Instruments: **`didgeridoo`, `keytar`**. Both are explicitly credited on the 1996 debut in MusicBrainz original release credits; neither was found in the consulted instruments.ts. Add both to `INSTRUMENT_LABELS`/instrument set before validation.
- Production: **none**; `analogtape`, `liverecording`, `moog`, `programming`, `sampling`, `stringarrangements`, `drumloop` are in the guide/validator.

## ARTIST INFLUENCES (phase 01 only — not necessarily album-specific)
All entries below are **documented musical influences on Placebo / Brian Molko**, not simply similar-sounding bands or participants:

| Artist | Evidence | Source |
|---|---|---|
| Sonic Youth | Molko names them as core influences and specifically recalls formative teenage discovery. | https://www.hotpress.com/music/androgyny-in-the-uk-392400 ; https://www.independent.co.uk/arts-entertainment/all-made-up-with-somewhere-to-go-1173047.html |
| Pixies | Molko names The Pixies among the band's core influences. | https://www.hotpress.com/music/androgyny-in-the-uk-392400 |
| PJ Harvey | Molko calls her a major influence; explicitly mentions her work on the second album. | https://www.hotpress.com/music/androgyny-in-the-uk-392400 ; https://www.placeborussia.ru/press/press98-99/jammusicnov98 |
| David Bowie | Molko explicitly discusses Bowie-era music and cultural impact in an interview; influence distinct from later collaboration. | https://www.independent.co.uk/arts-entertainment/all-made-up-with-somewhere-to-go-1173047.html |
| Joy Division | Molko accepts Joy Division's influence in a discussion of the group's early music. | https://www.independent.co.uk/arts-entertainment/all-made-up-with-somewhere-to-go-1173047.html |
| The Cure | Molko refers to the group's pop period as an element in the second LP. | https://www.placeborussia.ru/press/press98-99/jammusicnov98 |
| Nick Cave | Molko identifies Cave in certain slower songs on the second album. | https://www.placeborussia.ru/press/press98-99/jammusicnov98 |
| Dead Kennedys | Molko describes them as crucial formative teenage music; no claim of a specific 1998 recording sampled. | https://www.placeborussia.ru/press/press98-99/jammusicnov98 |
| Iggy Pop / The Stooges | Molko cites Iggy and the Stooges as important formative listening; distinguish from guest appearances. | https://www.independent.co.uk/arts-entertainment/all-made-up-with-somewhere-to-go-1173047.html |

**Album-level caution:** The `influenced_by` descriptor is intentionally narrower. References to David Bowie, Rush, The Cure and Smashing Pumpkins in professional reviews can describe *sonic resemblance*, not necessarily directly acknowledged compositional influence. The 2000 Pavement sample is **not** treated as an influence, even though Molko admires the group. General influences remain above unless a source ties them to the specific album.

## Notes / disagreements / exclusions
1. **Britpop:** AllMusic assigns the stylistic tag to early Placebo albums, but Molko directly rejects Britpop affiliation. `britpop` therefore appears **last** and as a disputed, contextual texture, not a defining album genre; Claude can flag for editorial review. Source: https://www.vice.com/en/article/rank-your-records-brian-molko-skeptically-rates-placebos-eight-lps/ .
2. **1996 production:** Original debut mostly produced by Brad Wood; *Nancy Boy* recording produced by Phil Vinall. Molko confirms live-power-trio recording to analog tape, rather than assuming a digital workstation. Source: https://musicbrainz.org/release/09e6b825-e770-4cdf-b1fe-68b8f9104396 ; https://www.vice.com/en/article/rank-your-records-brian-molko-skeptically-rates-placebos-eight-lps/ .
3. **1998 production:** Phil Vinall produced *Pure Morning*, Steve Osborne the other 11 original tracks. Phelan Kane's *programming* is documented on *Pure Morning*. The hidden *Evil Dildo* samples Aphex Twin; this does **not** make Aphex Twin an influence. Source: https://musicbrainz.org/release/febbd996-fc2b-4811-a389-ef339c015664 .
4. **2000 production:** Original album largely co-produced by Paul Corkett and Placebo; Dare Mason credited on *Taste in Men*. Pianistic ambience, a drum loop and electronics are specifically reported. String *programming* is credited, but no verified live string ensemble: **do not add `strings` to instruments**. Sources: https://musicbrainz.org/release/80a3fcd3-e777-4778-8087-8a7327517c60 ; https://www.drownedinsound.org/archive-album-review-placebo-black-market-music-13/ .
5. **Exact machinery:** Pitchfork calls the 2000 sound `Roland 303` but does not provide a sufficiently precise original-session model credit; do **not** add `tb303` by inference. Source: https://pitchfork.com/reviews/albums/6327-black-market-music/ .
6. **2000 provenance:** Original 12-track release is the reference. Some MusicBrainz pages for expanded editions include a Bowie duet from the preceding album and a Depeche Mode cover, which must **not** be confused with the original album's productions or influences. Source: https://musicbrainz.org/release/80a3fcd3-e777-4778-8087-8a7327517c60 .
7. **No old-material albums:** 2026 *Placebo RE:CREATED* is real and already released, but reworks the 1996 album masters. It is deliberately omitted to avoid feeding essentially the same original compositions twice into album similarity. Source: https://www.placeboworld.co.uk/pages/about-the-album .
8. **No live/compilations:** *This Search For Meaning* 2025 package contains a live CD and a repackaged *Never Let Me Go*, rather than a newly recorded Placebo soundtrack. Exclude. Source: https://placebo.tmstor.es/product/this-search-for-meaning?choose_location=1 .
9. **Instrument scope:** Original debut credit `didgeridoo` is from personnel/liner credit and may represent a limited texture, not a dominant sound; placed last. Keytar is a specifically credited keyboard-type instrument. `moog` means a Moog synthesizer family named in credits, **not** a verified exact model.
10. **Sources:** AllMusic and NME source URLs may restrict automated fetching (403), although their indexed article text was accessible during research. MusicBrainz, VICE, The Independent and Drowned in Sound pages were available for direct review. Archived interviews remain labelled as archival retranscriptions, not original-domain pages.
11. **Scales and sounds_like** are editorial listening/review synthesis, not putative machine-verified measurements. Scores reflect the guide's 0–5 anchors; references are qualitative evidence, and uncertainties are spelled out in `evidence-notes.md`.

## Next phases
- **Phase 02 (3 studio albums):** *Sleeping with Ghosts* (2003), *Meds* (2006), *Battle for the Sun* (2009). The 2009 album needs catalog insertion first.
- **Phase 03 (remaining 2 studio albums):** *Loud Like Love* (2013), *Never Let Me Go* (2022). Only two original studio albums remain; do **not** pad with live or compilation releases to reach three rows.

## Checked references
- Fandome guide: https://raw.githubusercontent.com/giampierofiorelli/Fandome/descriptors/docs/album-descriptors-guide.md
- Fandome catalog: https://raw.githubusercontent.com/giampierofiorelli/Fandome/descriptors/src/data/catalog.ts
- Studio discography: https://musicbrainz.org/artist/847e8284-8582-4b0e-9c26-b042a4f49e57

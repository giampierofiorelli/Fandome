# CLAUDE_IMPORT — Christina Aguilera, Phase 03

**Read-only Fandome research hand-off.** Artist ID `aguilera` verified in `src/data/catalog.ts` on branch `descriptors`, 25 October 2026. No repository files were edited. Strictly **incremental**: exactly three descriptor rows from 2012–2022, no Phase 01 or Phase 02 rows, no other artist's albums.

## Phase 03 entries

| album_id | title | year | type | catalog.ts |
|---|---|---:|---|---|
| `aguilera-lotus` | Lotus | 2012 | studio | **ADD** |
| `aguilera-liberation` | Liberation | 2018 | studio | EXISTS; keep ID |
| `aguilera-aguilera` | Aguilera | 2022 | studio | EXISTS; keep ID |

**Catalog change:** add `['Lotus', 2012]` to the `aguilera` album list in `src/data/catalog.ts`, in chronological order between *Bionic* (2010) and *Liberation* (2018). Existing title/id for Aguilera (2022) is `aguilera-aguilera`, not a title collision: the artist prefix and album title can be identical.

## New vocabulary — Claude should add only where missing

**Genre tokens newly needed in Phase 03** (source uses these exact names, lowercased/no punctuation):
- `funkrock`: Guardian on *Liberation*, *Sick of Sittin’*; candidate parents `funk|rock`.
- `acidrock`: Apple Music on *Liberation*, *Sick of Sittin’*; candidate parent `rock`.
- `latinpop`: Apple Music and AllMusic on *Aguilera*; candidates `latin|pop`.
- `urbano`: AllMusic professional reviewer on *Aguilera*; candidates `latin|hiphop` (regional umbrella; choose cautiously).
- `cumbia`: AllMusic review on *Aguilera*; parent `latin` (not synonym of reggaeton).
- `ranchera`: artist interview and Latin pop reporting, *La Reina* and *Cuando Me Dé la Gana*; possible parents `latin|folk`.
- `guaracha`: Los Angeles Times interview, texture only on *Aguilera*; parent `latin` (no album-wide assertion).
- `pasillo`: music experts on *No Es Que Te Extrañe* in *Aguilera*, **TEXTURE ONLY / DISPUTED as full genre**; potential parent `latin|folk`.

`neosoul` and `contemporarypoprock` were already notified in **Phase 02** and remain reused, not re-proposed here. Previously available tokens `pop`, `dancepop`, `europop`, `rnb`, `waltz`, `salsa`, `ballad`, `trap`, `traditionalpop` etc. are not newly introduced.

**Instrument token:** `requinto`, specifically recognised by Ecuadorian singer Paulina Tamayo in BBC News Mundo analysis of *No Es Que Te Extrañe*. Other entries use original repo strings (including plain `guitar`, which is valid in `src/data/instruments.ts` even though the user’s abbreviated list omits it). **Do not label an unspecified credited guitar as electric or acoustic.**

**Production token:** `programming`, the exact performer credit for repeated *Aguilera* album tracks on Qobuz/Sony; no specific plugin, synthesizer, DAW, Auto-Tune or drum-machine model was verified. It denotes credited **instrumental/programming work only**, not an asserted drum pattern or specific workstation. Consider whether the project's ontology should keep this broad token, but **do not silently translate it to `drumprogramming` or `synthprogramming`** without credit evidence.

## Editions and producer-role caveats

1. **Lotus:** standard original **13 tracks, 2012**. No deluxe-exclusive tracks (*Light Up the Sky*, *Empty Words*, *Shut Up*) or remixes. Vocals remain foregrounded; sampled/interpolated vintage elements appear in *Red Hot Kinda Love* and *Make the World Move*. Sony's press text mentions Sia as collaborator, but *Blank Page* per-track credits identify her as **composer/lyricist** only; she is **not** in producers. Max Martin and Shellback produced *Your Body*; Qobuz leaves production roles off its *Let There Be Love* listing, so do not invent additional attributions. Christina Aguilera and Candice Pillay are individually listed as producers on standard tracks; this listing is independent of other vocal-production credit sources.
2. **Liberation:** original **15 tracks, 15 June 2018** including spoken interludes. Carefully distinguish nominated guests GoldLink, Ty Dolla $ign, 2 Chainz, Demi Lovato, Shenseea and Keida from the credited producer column. Executive producer alone would be insufficient to include Christina Aguilera, but **AllMusic credits her explicitly as Producer as well as Executive Producer**. Co-producers are included; additional-only production, pure arranging, songwriting and mixing are not promoted. Jackson 5/Michael Jackson and Janne Schaffer are **sampled recording sources**, not co-producers nor artists who were shown to shape the whole album's creative direction.
3. **Aguilera:** one studio-album row covering the **completed 14-song, three-section 2022 edition**. Original May 31 edition contained 12 tracks; *La Luz* (intro and *No Es Que Te Extrañe*) arrived September and completed the project. Album still dates to **2022**. The stand-alone EPs *La Fuerza*, *La Tormenta* and *La Luz* share album recordings: **no EP rows here** to avoid duplicate content and tripling recommendations. In the Latin Grammy album-producer list, `Josh Berrios`, `Tobias Wincorn` etc. are designated producers, not being inferred from writer credits; honorific aliases may require normalization by Claude. Label confirms Afo Verde co-production. The **`pasillo`** tag is **contested**: Ecuadorian musicologists call the closing song a mixed Latin American waltz with pasillo phrases, not a pure pasillo. Do not flatten that distinction.

## Landmark and confidence

- `Lotus`: landmark `0` (fully fledged era but neither an artist-defining musical turning point nor critically established as a landmark); confidence `high` in documented facts and album sonic architecture, **not** a claim critics were unanimous.
- `Liberation`: landmark `1` as post-*Lotus* return and key artistic reorientation, despite substantial mixed criticism; producers and palette strongly evidenced.
- `Aguilera`: landmark `1` as significant Spanish-language return 22 years after *Mi Reflejo* and Latin Grammy Best Traditional Pop Vocal Album winner. The third chapter is part of the album. Source-strength caveat for *pasillo* is in the genre file.

**All 8 scale values** are reasoned editorial assessments (0–5) anchored to `docs/album-descriptors-guide.md`; supporting evidence and alternative readings are recorded in the notes. No unsupported brand-specific hardware tags. `status=draft` throughout.

## Coverage and next phase

All of Christina Aguilera's **core studio albums through 25 October 2026** are now covered by Phases 01–03, subject to successful Claude import. The next step is **validation and catalogue-token merge, not automatic Phase 04**. A selective optional future research audit can examine *Christmas in Paris (Live from the Eiffel Tower)* (2025) and the *Burlesque: The Musical* cast recording (2026): the former is a **live release normally excluded by policy**, and the latter must not be confused with Aguilera's own 2010 *Burlesque* film soundtrack or treated as her new studio album. Also leave derivative 2022 EPs out of standalone descriptors absent a separate, documented landmark argument.

## Files (exactly six)

- `CLAUDE_IMPORT.md`
- `aguilera_phase03_rows_ONLY.csv` (header + 3 rows, exactly 27 columns)
- `aguilera_phase03_sources.csv` (per-album links and precise evidence claims)
- `aguilera_phase03_genre_evidence.csv` (one record per album genre, scope explicitly marked)
- `aguilera_phase03_evidence-notes.md` (8 scales, voice, themes, credits, disagreements)
- `aguilera_phase03_catalog-audit.csv` (catalogued vs additions)

Please update catalogue and vocabulary **before** validator/tests, then import only these rows. Do not reimport Phase 01 or Phase 02.

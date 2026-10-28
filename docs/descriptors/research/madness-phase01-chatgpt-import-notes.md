# CLAUDE_IMPORT — Madness, phase 01

**Research date:** 28 October 2026  
**Artist:** Madness  
**Proposed artist ID:** `madness`  
**Phase:** 01 of an expected 4; strictly incremental, original studio releases only

## Files

Six files: this memo, `madness_phase01_rows_ONLY.csv`, `madness_phase01_sources.csv`, `madness_phase01_genre_evidence.csv`, `madness_phase01_evidence-notes.md`, and `madness_phase01_catalog-audit.csv`. UTF-8 with BOM on the CSV files, suitable for importing from Microsoft Excel or Python/Node CSV readers.

## Phase 01 (FOUR NEW ROWS)

| album_id | original title | year | type | landmark |
|---|---|---:|---|---:|
| `madness-onestepbeyond` | One Step Beyond... | 1979 | studio | 1 |
| `madness-absolutely` | Absolutely | 1980 | studio | 1 |
| `madness-7` | 7 | 1981 | studio | 0 |
| `madness-therisefall` | The Rise & Fall | 1982 | studio | 1 |

Exactly 27 descriptor columns and four rows; all marked `draft`. No earlier-phase rows or other artists.

## Catalogue and existing-work check (read-only)

- The public branch `descriptors` version of `catalog.ts` did not contain a Madness artist row; `seed.ts` contained no Madness ID. The proposed ID `madness` was not present in either. The descriptor path `docs/descriptors/madness.csv` returned 404.
- The October 2026 `landmarks-claude-2026-10.md` file contained **no Madness descriptor entry**. **No existing Madness albums were skipped**.
- **Import action:** Add a Madness artist room and the four albums above to `catalog.ts`, preserving the exact IDs. Recheck the files before import in case they have changed in the meantime.
- `madness_phase01_catalog-audit.csv` additionally tracks future eligible LPs (phases 02–04), which should NOT be added yet unless Claude wants the complete discography in the catalogue.

## Studio-album scope and exclusions

The discography includes 1979, 1980, 1981, 1982, 1984, 1985, **The Madness (1988)**, 1999, 2005, 2009, 2012, 2016 and 2023. However, *The Madness* (1988) was specifically released under the name **The Madness** by a post-breakup lineup; check Fandome's policy on post-career rebrandings when phase 02 starts. AllMusic and Madnessography place it in Madness studio chronologies; do not silently invent a standard Madness billing if you choose to catalogue it. If it is instead kept as a separate artist, reorganise the later phases to keep batches of three or four.

Excluded from phase 01 and all planned batches: *Complete Madness* (1982), US *Madness* (1983), *Utter Madness* (1986), *Madstock!* (1992, live), *Hit Parade* (2025, compilation), other greatest hits or reissues, later bonus discs and singles. *Work Rest and Play* (1980) is an EP of note but is not one of the first four studio albums; consider only if separately requested, per policy. *Take It or Leave It* is a film, not a new studio LP. All original studio records through Oct 2026 are accounted for in the audit.

## New tokens for importer

- **Genre:** `skarevival` (AllMusic album style "Ska Revival"), `modrevival` (Shfl album tag "mod revival", *Absolutely* only). These are different from existing `ska`, `twotone`, and `thirdwaveskarevival`; add them to the `Genre` union and family mapping if they remain meaningful after review. The explicit genre evidence file records one use per album and sources. Do not map the named terms onto another genre.
- **Instruments:** none. Vibraphone and marimba credits are represented by the existing collective token `mallets` as defined in `src/data/instruments.ts`.
- **Production:** none. `farfisa`, `hornarrangements`, `stringarrangements` already exist.
- **Co-billed releases in this phase:** none.

## ARTIST INFLUENCES — band-wide source-backed statements

Only artist/member/producer statements are included here. These are **not automatically copied into individual albums' `influenced_by` values**, which require evidence for that album's idiom.

1. **Prince Buster** — Suggs specifically describes his impact on Madness. Sources: https://www.theguardian.com/music/2016/sep/12/madness-pay-tribute-to-prince-buster-ska-legend and https://www.theguardian.com/culture/2014/nov/25/how-we-made-one-step-beyond-madness-suggs-mike-barson .
2. **Kilburn and the High Roads — *Handsome* (1975)** — Suggs describes the album as a formative influence; Chris Foreman calls the band a definite influence. Sources: https://sevenraggedmen.com/1977-2/ and https://www.madness.co.uk/chris-cupboard/comment-page-15/ .
3. **Ian Dury and the Blockheads / Ian Dury** — Suggs describes Dury's lyrics, local stories, singing accent and live performances as a key inspiration. Source: https://sevenraggedmen.com/1977-2/ .
4. **The Kinks / Ray Davies** — Suggs calls Davies a favourite lyricist; Mike Barson and Chas Smash discuss listening to The Kinks while developing the early band. Sources: https://sevenraggedmen.com/1977-2/ and https://www.johnlewisjournalist.co.uk/madness-uncut .
5. **Deaf School** — Suggs and Mike Barson directly credit them with inspiring Madness to make music. Source: https://sevenraggedmen.com/1977-2/ .
6. **Roxy Music** — explicitly named by Chris Foreman as a formative influence. Source: https://www.madness.co.uk/chris-cupboard/comment-page-15/ .
7. **Sensational Alex Harvey Band** — Foreman names the group; Suggs describes its stage theatricality as inspirational. Sources: https://www.madness.co.uk/chris-cupboard/comment-page-15/ and https://sevenraggedmen.com/1977-2/ .
8. **Elvis Presley** — Chris Foreman lists Elvis among the band's shared early listening influences. Source: https://www.madness.co.uk/chris-cupboard/comment-page-15/ .
9. **John Lennon** — Suggs includes him among musicians who directly inspired him. Source: https://sevenraggedmen.com/1977-2/ .
10. **Bob Marley** — likewise explicitly named by Suggs. Source: https://sevenraggedmen.com/1977-2/ .

**Not named individual artists:** Motown, R&B, ska and reggae are labels/genres rather than an identifiable musician. Do not enter them in the album `influenced_by` field.

## Source and version caveats

- The original album's **One Step Beyond...** punctuation includes the ellipsis; IDs strip punctuation. **7** is a numeral, not the band's seventh album.
- Chas Smash's introductory shouts on the first album do not make him the main singer across the whole LP. He was not a formal band member during the first album recording. The 1980 and later album credits identify his trumpet and backing/occasional lead vocals.
- Absolutely: `farfisa` is explicitly named in a retrospective criticism; do not assume a specific organ model beyond the Farfisa brand.
- 7: recorded in Nassau but partially redone in London, as reported by producer Alan Winstanley; **do not** label the recording `liverecording`, `digitalrecording`, `overdubbing`, or with any synth/model without a source.
- The Rise & Fall: Trevor Horn was considered and met the group, **not its producer**. Only Clive Langer and Alan Winstanley are credited. David Bedford did brass/string arrangements, not production.
- The Rise & Fall is sometimes referred to as *Madness Presents The Rise & Fall*, while the original UK LP short title is *The Rise & Fall*. US *Madness* (1983) is a separate compilation, excluded.
- New-wave, ska-revival and pop/rock style tags from AllMusic are sometimes broad classifications; the genre-evidence CSV notes whether each describes the whole LP or merely a sonic element. `influenced_by` is narrower than `sounds_like`.
- Confidence is below high for *7*: some credits and genre classifications rely on the Wikipedia compilation of album credits; its entry includes a sourcing warning. Claude should verify against original 1981 sleeve if available.

## Next phase (02)

**Keep Moving** (1984), **Mad Not Mad** (1985) and **The Madness** (1988, alias billing to be resolved) only. Future phase 03 is *Wonderful* (1999), *The Dangermen Sessions Vol. 1* (2005), *The Liberty of Norton Folgate* (2009). Phase 04: *Oui Oui Si Si Ja Ja Da Da* (2012), *Can't Touch Us Now* (2016), *Theatre of the Absurd Presents C'est La Vie* (2023).

## GitHub references inspected

- https://github.com/giampierofiorelli/Fandome/blob/descriptors/docs/album-descriptors-guide.md
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/scenes.ts
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/instruments.ts
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/production.ts
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/catalog.ts
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/seed.ts
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/docs/descriptors/research/landmarks-claude-2026-10.md

## Claude import note (Oct 2026)

- New genre tokens: `rocksteady` (not in the list, used by the rows: parents ska, reggae), `skarevival` (ska, newwave), `modrevival` (beat, newwave).
- One Step Beyond... influenced_by keeps Prince Buster only (Suggs on this album, The Guardian 2014). Kilburn and the High Roads, The Kinks and Deaf School are band-wide formative influences, not documented for this album: they are in the artist influences, not repeated on the album.
- Artist added to the catalogue with the full studio discography (12 albums). The Madness (1988, post-split billing) left out for now; to decide in phase 02. Still active, so not marked as not touring.
- Scene GB en 1970 pop,reggae,rock (base genres only: ska maps to reggae).

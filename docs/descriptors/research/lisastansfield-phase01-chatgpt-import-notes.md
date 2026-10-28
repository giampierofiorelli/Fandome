# CLAUDE IMPORT — Lisa Stansfield, phase 01

Research date: **28 October 2026**. Fandome branch `descriptors` checked read-only. The ZIP contains **only the four original studio album rows below**, not the 1998 remix collections, the old Blue Zone album, later reissues or any live record. Do not replace earlier artist CSVs; add four verified rows after cataloguing the artist.

## Artist and album IDs

Suggested artist ID: `lisastansfield`. Searches in both `src/data/catalog.ts` and `src/data/seed.ts` found **no Lisa Stansfield entry**. `docs/descriptors/lisastansfield.csv` returned 404, and the landmark research file contained no Lisa Stansfield entry. No previously described album was skipped.

| Album ID | Title | Original year | Type |
|---|---|---:|---|
| `lisastansfield-affection` | *Affection* | 1989 | studio |
| `lisastansfield-reallove` | *Real Love* | 1991 | studio |
| `lisastansfield-sonatural` | *So Natural* | 1993 | studio |
| `lisastansfield-lisastansfield` | *Lisa Stansfield* | 1997 | studio |

These IDs follow the current `catalog.ts` `slug()` rule (lowercase, letters and digits only). All four are new catalogue entries. Do not infer their existence from the exported ZIP: this project phase has not been pushed to GitHub. The `catalog-audit.csv` lists all eight original studio albums and separately flags *Swing* (1999), a movie soundtrack, for a later significance/credit check.

## ARTIST INFLUENCES — singer's own statements, not album-specific assumptions

- **Diana Ross** — named her first inspiration in an interview archived by Lisa Stansfield’s fan site (2014): https://www.lisastansfield.net/latest/lucky-seven-lisa-talks-to-sjf . Also listed among key soul influences in a **20 May 1990 Los Angeles Times interview**: https://www.latimes.com/archives/la-xpm-1990-05-20-ca-274-story.html
- **Marvin Gaye** — she explicitly names him alongside Diana Ross when recalling her mother's Motown records: https://www.lisastansfield.net/latest/lucky-seven-lisa-talks-to-sjf
- **Chaka Khan, Gladys Knight, Dionne Warwick** — named individually by Stansfield in the 1990 interview: https://www.latimes.com/archives/la-xpm-1990-05-20-ca-274-story.html
- **Barry White, Luther Vandross** — cited as admired soul singers in that same interview; her musical admiration of White is discussed again in 2018: https://www.bostonglobe.com/arts/2018/10/04/follower-fashion-lisa-stansfield-soulful-style-all-her-own/LmAbSNLIIGPbBxAN9X42FJ/story.html
- **Tammi Terrell** — Stansfield names her and explains the influence of those singers on her voice in a 2018 interview: https://www.bostonglobe.com/arts/2018/10/04/follower-fashion-lisa-stansfield-soulful-style-all-her-own/LmAbSNLIIGPbBxAN9X42FJ/story.html

These are **ARTIST-level** influences. Album rows have `influenced_by` left empty because the material does not directly say these named performers shaped *each particular album*. A critic's comparison such as *Real Love* with Anita Baker belongs in `sounds_like`, not `influenced_by`. Barry White's song **covered** on the 1997 record does not itself establish an album-specific influence.

## Production, musician credits and editions

1. **Affection (1989):** original UK LP sleeve credits Ian Devaney and Andy Morris as the pair responsible for instruments, programming, and arranging. Trumpet contributions are explicitly credited to Andy Morris and Stephen Gibson. **Coldcut produced only “This Is the Right Time”**, so they are third in album `producers` and not assumed to have produced the rest. Review describes house/dance and Philly soul; jazz, samplers, drum machines or orchestral session players must not be asserted without further proof. `strings` is a documented sonic texture in a contemporary Rolling Stone review, but the original LP credits do not confirm whether strings were played live or synthesised.
2. **Real Love (1991):** Devaney and Morris produced. AllMusic and original credits support keyboards, drums, bass, percussion, strings, trumpet, trombone, flute, saxophone, flugelhorn and harmonica. Do not import remixers from *Deluxe* (Frankie Knuckles, Driza Bone, etc.) into producers of the original 1991 LP. Jerry Hey and Simon Vance are arrangers, **not producers**. `hornarrangements` and `stringarrangements` are documented, as is generic programming; no specific synthesizer model was verified.
3. **So Natural (1993):** the album is dominantly slow, romantic soul rather than straight dance-pop; the faster songs do not outweigh the ballads. Ian Devaney, Lisa Stansfield and Bobby Boughton have producer credits on the original track listings. **Andy Morris played keyboards and trumpet, and contributed composition; this does not justify promoting him to a producer on every song.** Some secondary album summaries list him as producer, but the track-level label credits emphasise the others; exclude from the CSV producer list unless original LP confirms production on a particular track. The Barry White-like arrangement is a critic's comparison, not an album-specific influence.
4. **Lisa Stansfield (1997):** core producer Ian Devaney and co-producer Peter Mokran, plus Mark Morales / Cory Rooney for one original album track, are credited in label track listings; avoid treating co-writers and remix artists as producers. AllMusic highlights disco-inflected dance-pop; a contemporary South China Morning Post review is more critical about over-polished ballads. Original album includes a Barry White **cover**; that does not create an album influence link. Only documentary-backed instruments are in the row; no unsupported drum machine or sampling hardware.

## Source quality and scope

- All `genre_evidence.csv` genres come with a source URL and explicit whole-album/track/texture scope. A 1989 and 1993 vinyl pressing genre tag supports a lower-confidence `downtempo` tail. On *So Natural*, `swingbeat` is an LP-style attribution, **not** evidence that the entire album is a swingbeat record; delete or reduce that token if a stronger original source rejects it.
- Scores 0–5 are our editorial listening/critical synthesis based on Fandome scale anchors; they are **not** measured audio features. An instrument or device isn't extrapolated from the genre. Unknown specifics were left unfilled.
- `voice` conservatively uses `soft|clear`, describing gentle/smooth and lucid lead singing; some songs are powerful but there is not enough evidence to mark the entire albums `powerful`.
- `status=draft`, since no second reviewer has signed off.

## Catalogue / new tokens / co-billing

- All original solo studio albums in the audit must be added to `src/data/catalog.ts`, including later releases as needed. `lisastansfield` is only a proposed artist ID until merged.
- No new genre, instrument, or production token is necessary; the descriptors use **existing** current tokens.
- No co-billed main studio albums are included in this phase. The earlier **Blue Zone** group album *Big Thing* is excluded, as required by the identity rule. No compilations or live albums are included.
- Be alert to **1999 film soundtrack Swing**: it contains many Lisa Stansfield performances but is a film soundtrack, not a normal 1999 studio LP. Confirm original release billing and importance before deciding whether to import it in the soundtrack category.

## Next batch

Phase 02: *Face Up* (2001), *The Moment* (2004), *Seven* (2014), *Deeper* (2018). The 1999 *Swing* soundtrack requires an explicit later decision after checking original album billing and critical significance; do not silently treat it as a studio album. Exclude *The Remix Album* (1998) for now unless a later specialist request establishes its particular significance.

## ZIP contents

- `lisastansfield_phase01_rows_ONLY.csv` (27 columns, four new rows)
- `lisastansfield_phase01_sources.csv` (album/artist source evidence)
- `lisastansfield_phase01_genre_evidence.csv` (one row per genre, source URL and scope)
- `lisastansfield_phase01_evidence-notes.md` (per-album decisions and limitations)
- `lisastansfield_phase01_catalog-audit.csv` (eight studio albums plus optional soundtrack)
- `CLAUDE_IMPORT.md` (this document)

CSV files are UTF-8 with BOM for Excel/Numbers compatibility, with CRLF record separators. Read directly; no scripts or earlier-phase rows are packaged.


## Claude import note

- 4 rows imported as delivered; catalogue 8 studio albums 1989-2018 (Swing soundtrack 1999 left for a later decision). No new tokens.
- Scene GB en 1980 soul,pop,rnb. Artist influences from her interviews.

## Claude enrichment (reception pass, Oct 2026)

- Reception rows from AllMusic, Rolling Stone, EW, Q, Christgau, NME, chart peaks and BPI/RIAA certifications (`docs/descriptors/reception/lisastansfield.csv`).
- Affection: Discogs (master 106579, release 84630) credits Devaney/Morris with "Instruments [All], Programmed By" and only names trumpet, so instruments stay as they are; production adds `remixing` (Coldcut's track 1) and `stringarrangements` (Rolling Stone: "the elegant string sections of the Seventies"). sounds_like adds Teena Marie (Rolling Stone, Amy Linden), Martha Reeves and Teddy Pendergrass (Christgau).
- Real Love: sounds_like adds Barry White (Rolling Stone, Holden: "textures of Barry White and his Love Unlimited Orchestra"; EW "Barry White-like"), Gladys Knight (Rolling Stone on "All Woman"), Stevie Wonder (CD Universe on "Soul Deep" keyboards).
- Lisa Stansfield (1997): sounds_like from Houston Press (David Cantwell, Oct 1997): The Staple Singers ("The Line"), Babyface and TLC ("Footsteps"). Barry White not added (she covers his song there).
- So Natural: no critic comparison found beyond Barry White.

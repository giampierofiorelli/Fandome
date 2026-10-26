# CLAUDE_IMPORT — Lana Del Rey — Phase 01

**STRICTLY INCREMENTAL:** This ZIP includes ONLY four new album rows for Lana Del Rey. Date cut-off: **26 October 2026**. Read-only branch `descriptors`. Fandome artist ID: `lanadelrey`. No pre-existing descriptor `docs/descriptors/lanadelrey.csv` was found.

## Phase contents (append only these album IDs)

| ID | Title | Year | Type | Catalogue |
|---|---|---:|---|---|
| `lanadelrey-lanadelray` | Lana Del Ray | 2010 | studio | **ADD** |
| `lanadelrey-borntodie` | Born to Die | 2012 | studio | existing |
| `lanadelrey-paradise` | Paradise | 2012 | ep | **ADD** |
| `lanadelrey-ultraviolence` | Ultraviolence | 2014 | studio | existing |

## Catalogue additions

- `Lana Del Ray` — **2010**, `studio` — **ID `lanadelrey-lanadelray`**. Digital album credited *Lana Del Ray*, later withdrawn. The first/early printed *Ray* is intentional; artist display stays canonical **Lana Del Rey**. Historically also referred to as *Lana Del Ray A.K.A. Lizzy Grant*. 
- `Paradise` — **2012**, `ep` — **ID `lanadelrey-paradise`**. Distinct 8-track EP of original recordings, an artist-defining work. Do not insert an extra *Born to Die: The Paradise Edition* row (it copies previously issued material).

Do not add albums from rows 5–10 of the audit yet: those entries document planned future phases. Do not add unreleased *Stove*, *Lasso*, *The Right Person Will Stay* (all aliases of one delayed project), or its untitled companion. Contemporary reporting still lists them as unreleased on the cut-off date.

## Co-billed albums

None in this phase. Producer and guest credits are not co-billing. *Paradise* is solely Lana Del Rey.

## Tokens to add before running strict validation

**Genre tokens:** `indiesurf` (2010 AOTY genre classification), `sadcore` (2012 Hollywood sadcore term), `desertrock` (2014 NME album-level descriptor). These strings must be added to `src/data/scenes.ts`, genre-family definitions in `src/data/genreFamilies.ts` where needed, and any validator's static genre allow-list before validation. **Do not map** `desertrock` to `psychedelicrock` or `sadcore` to `slowcore`; the source terms differ.

**New instruments:** none. `omnichord`, `steelguitar`, `mellotron` already exist in repository instrument labels (even if omitted from shortened user prompt).

**New production tokens:** none. Model-specific instruments/effects are not guessed.

## ARTIST INFLUENCES (Phase 01 only; artist-wide, not automatically album-specific)

Use the below as artist-level connections only, supported by interviews or professional biography. Only the sources documented specifically for a record's **music** appear under that album's `influenced_by`.

- **Nina Simone:** Del Rey identifies Simone’s jazz phrasing / blue notes as influence. [Source](https://www.aftonbladet.se/nojesbladet/musik/rockbjornen/a/1krOJJ/i-dont-want-to-glamourize-death).
- **Billie Holiday:** Named vocal and minor-key influence in direct interview. [Source](https://www.aftonbladet.se/nojesbladet/musik/rockbjornen/a/1krOJJ/i-dont-want-to-glamourize-death).
- **The Eagles:** Del Rey explicitly invokes them for the 2014 West Coast fusion. [Source](https://www.antimusic.com/news/14/June/13Lana_Del_Rey_Explains_Ultraviolence_and_West_Coast_Inspirations.shtml).
- **The Beach Boys:** Del Rey explicitly invokes them for the 2014 West Coast fusion. [Source](https://www.antimusic.com/news/14/June/13Lana_Del_Rey_Explains_Ultraviolence_and_West_Coast_Inspirations.shtml).
- **Bob Dylan:** Del Rey cites Dylan and explains moving to New York because of him. [Source](https://www.thefader.com/2014/06/17/love-death-and-jazz-seven-outtakes-from-our-lana-del-rey-intervie).
- **Lou Reed:** Del Rey says she was a fan of Reed (not the planned 2014 guest credit). [Source](https://www.thefader.com/2014/06/17/love-death-and-jazz-seven-outtakes-from-our-lana-del-rey-intervie).
- **Cat Power:** Explicitly identifies musical / performance inspiration. [Source](https://www.nme.com/news/music/lana-del-rey-76-1231752).
- **Father John Misty:** Says he is major modern inspiration. [Source](https://www.nme.com/news/music/lana-del-rey-76-1231752).
- **Frank Sinatra:** Artist cites Sinatra among key musical models. [Source](https://www.nme.com/news/music/lana-del-rey-200-1273398).
- **Elvis Presley:** Artist cites Elvis as major musical model. [Source](https://www.nme.com/news/music/lana-del-rey-200-1273398).
- **Nirvana:** Artist cites Nirvana as a music inspiration; NYT also cites directly. [Source](https://www.nme.com/news/music/lana-del-rey-200-1273398).
- **Eminem:** Artist cites Eminem among musical inspirations. [Source](https://www.nme.com/news/music/lana-del-rey-200-1273398).
- **Joan Baez:** Biographical reporting directly lists musical inspiration. [Source](https://www.biography.com/musicians/lana-del-rey).
- **Stevie Nicks:** Biographical reporting directly lists musical inspiration. [Source](https://www.biography.com/musicians/lana-del-rey).
- **Britney Spears:** Biographical reporting lists her among musical inspirations. [Source](https://www.biography.com/musicians/lana-del-rey).
- **Thomas Newman:** Named score (American Beauty) as sonic reference. [Source](https://www.justjared.com/2011/12/05/lana-del-rey-kurt-cobain/).
- **Bruce Springsteen:** Directly named early Springsteen for Born to Die aesthetic. [Source](https://www.justjared.com/2011/12/05/lana-del-rey-kurt-cobain/).

## Method and caveats

- **First album spelling:** Name on 2010 release *Lana Del Ray* (Ray), while Fandome artist canonical *Lana Del Rey* (Rey). Do not overwrite album title with artist name or corrected spelling.
- The 2008 *Kill Kill* EP overlaps the 2010 studio record; the 2012 *Lana Del Rey EP* overlaps *Born to Die*. The 2013 *Tropico* audiovisual project uses music already published on *Paradise*. Excluded to avoid duplicate original songs. The 2006 *Sirens* was **not** officially issued; fan leaks are not releases. 
- *Paradise* is distinct from *Born to Die: The Paradise Edition*. A cover of “Blue Velvet” does not justify a performer influence; an old composition re-recorded as “Yayo” remains a new recording. These original masters differentiate the EP from a compilation.
- The lead *Born to Die* production credits distinguish co-producers from extra/additional-only credits. Some *Ultraviolence* bonus tracks have different producers: no bonus-only names are allowed into the standard 11-track descriptor. The label metadata ambiguously credits Rick Nowels as main producer on “Sad Girl” while other published personnel call him **vocal producer**; conservatively excluded pending Claude verification.
- Discographic genre aggregation sometimes lists weak long-tail labels. `genre_evidence.csv` explicitly separates album-level genres from single-track / texture examples; weaker metadata labels are at the end. `confidence` covers evidence quality for the overall row, **not** unanimous critical ratings.
- Scale scores are qualitative judgments supported by record-specific reviews and studio accounts. An empty production cell for the 2010 debut is intentional, not missing data.

## Next phase — Phase 02 (four studio albums)

1. *Honeymoon* (2015)
2. *Lust for Life* (2017)
3. *Norman Fucking Rockwell!* (2019)
4. *Chemtrails over the Country Club* (2021)

Phase 03: *Blue Banisters* (2021) and *Did You Know That There’s a Tunnel Under Ocean Blvd* (2023). Reassess optional original spoken-word recording *Violet Bent Backwards over the Grass* (2020) separately; do **not** automatically import it as a studio pop album (its primary form is poetry/spoken word). No live albums, greatest hits or pre-release titles.

## Files inside ZIP

- `CLAUDE_IMPORT.md`
- `lanadelrey_phase01_rows_ONLY.csv` (27 columns, 4 rows)
- `lanadelrey_phase01_sources.csv` (source and credit evidence)
- `lanadelrey_phase01_genre_evidence.csv` (one row per claimed genre and further corroboration)
- `lanadelrey_phase01_evidence-notes.md` (per-album reasoning and conflicts)
- `lanadelrey_phase01_catalog-audit.csv` (existing vs additions / future phases)

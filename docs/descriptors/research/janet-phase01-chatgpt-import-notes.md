# CLAUDE IMPORT — Janet Jackson, Phase 01

Research date: **2026-10-26**. Repository audited read-only against branch `descriptors` on the same date. **Incremental package only**: exactly four new album rows, no previously delivered rows. Schema is the exact 27-column header from `docs/album-descriptors-guide.md`; every row has `status=draft`.

## Phase contents (chronological)

| album_id | Album | Year | Type | In catalog? |
|---|---|---:|---|---|
| `janet-janetjackson` | Janet Jackson | 1982 | studio | **NO — add** |
| `janet-dreamstreet` | Dream Street | 1984 | studio | **NO — add** |
| `janet-control` | Control | 1986 | studio | Yes |
| `janet-rhythmnation1814` | Rhythm Nation 1814 | 1989 | studio | Yes |

No `docs/descriptors/janet.csv` existed in the GitHub directory listing during this audit. Existing file audit and future merge must be repeated by Claude just before import to avoid a race. `janet` is the artist ID in `catalog.ts`.

## Albums to add to `catalog.ts`

- `['Janet Jackson', 1982]` — type `studio`, desired ID `janet-janetjackson`.
- `['Dream Street', 1984]` — type `studio`, desired ID `janet-dreamstreet`.

**Keep existing catalog IDs** for Control and Rhythm Nation 1814. Note the official 1989 album is also billed *Janet Jackson's Rhythm Nation 1814*, but this is an **album-title variant**, not a co-billed artist or separate release.

## Albums billed to more than one artist

**None in this phase.** Cliff Richard has a duet appearance on Dream Street and Michael Jackson sings backing vocals, but both are session/guest credits, not an album co-billing.

## New genre tokens (not present in `scenes.ts` / `genreFamilies.ts`)

| Token | Original sourced term | Album(s) | Basis | Suggested parents for Claude review |
|---|---|---|---|---|
| `minneapolissound` | Minneapolis Sound | Control; Rhythm Nation 1814 | Album of the Year | `funk`, `rnb`, `pop` (editorial suggestion, not a repo change) |
| `rockfunk` | rock-funk | Rhythm Nation 1814 (*Black Cat* only) | Jackson's account | `rock`, `funk` |

All existing genres are kept as the sources name them: *synthpop* is not relabelled *electropop*, *postindustrial* is not flattened into *industrial*. Rhythm Nation rock variants are tagged as individual-track styles near the end of the genre list. `genre_evidence.csv` provides album/track/texture scope for each genre.

## New instrument tokens

None. Only tokens currently present in the repository's instruments vocabulary are used.

## New production tokens (explicit source-named gear)

| Token | Documented model | Album(s) | Source |
|---|---|---|---|
| `ensoniqmirage` | Ensoniq Mirage sampling keyboard | Control; Rhythm Nation 1814 | Jimmy Jam RBMA 2016 and 2014 |
| `oberheimob8` | Oberheim OB-8 synthesizer | Rhythm Nation 1814 | Reverb technical production history |
| `drumtraks` | Sequential Circuits Drumtraks | Rhythm Nation 1814 | Reverb technical production history |

**Do not conflate** Mirage with E-mu Emulator or Emulator II; OB-8 with an unspecified Oberheim or Oberheim DMX; Drumtraks with a Linn machine. Existing tokens `linndrum`, `dx7`, `sp1200`, `synclavier`, `moog` are used where specifically supported. The Control producer says the Oberheim **DMX was deliberately *not* used** on that album.

## ARTIST INFLUENCES — documented artists influencing Janet Jackson across her work

These are **artist-level** influences, not statements that every one shaped each of these four particular albums. They are **not** automatically copied into any row's `influenced_by`.

| Influence (artist) | Documentary basis | Source |
|---|---|---|
| Stevie Wonder | Jackson calls him a main musical inspiration in a 2001 first-person interview; reinforces it in 2024. | https://transcripts.cnn.com/show/lkl/date/2001-07-02/segment/00 ; https://www.heart.co.uk/radio/shows-presenters/dev-griffin/janet-jackson-interview-uk-tour/ |
| Marvin Gaye | Jackson explicitly names him as a main musical inspiration. | https://transcripts.cnn.com/show/lkl/date/2001-07-02/segment/00 |
| Sly and the Family Stone | Jackson explicitly names them as a main musical inspiration, independent of the 1989 sampled riff. | https://transcripts.cnn.com/show/lkl/date/2001-07-02/segment/00 |
| The Jackson 5 | The 2024 interview identifies the Jackson 5 as formative performance inspiration; 2001 cites her brothers/family. | https://www.heart.co.uk/radio/shows-presenters/dev-griffin/janet-jackson-interview-uk-tour/ ; https://transcripts.cnn.com/show/lkl/date/2001-07-02/segment/00 |
| Michael Jackson | Specifically among the brothers cited as inspirational to her musical ambitions in 2024. | https://www.heart.co.uk/radio/shows-presenters/dev-griffin/janet-jackson-interview-uk-tour/ |
| Prince | Her 2024 interview includes watching Prince perform among formative experiences. | https://www.heart.co.uk/radio/shows-presenters/dev-griffin/janet-jackson-interview-uk-tour/ |
| Earth, Wind & Fire | Her 2024 interview identifies the band's performance as formative. | https://www.heart.co.uk/radio/shows-presenters/dev-griffin/janet-jackson-interview-uk-tour/ |

**Non-artist influence:** Jackson also names *Brazilian jazz* in her CNN answer, but that is a music tradition/genre rather than a named artist; do not invent a performer.

**Album-specific `influenced_by` inclusion:** *Control* includes **KC and the Sunshine Band** because Jimmy Jam directly names them as the musical inspiration for the beat of “When I Think of You”: https://daily.redbullmusicacademy.com/2016/02/key-tracks-janet-jackson-control/ . It is an album-track influence, not merely a comparison, cover, sample or guest. Other phase 01 albums remain empty: no sufficiently explicit *album-specific* musical influence was established. Sly and the Family Stone is **not** added to *Rhythm Nation 1814* solely because of the sample (although artist-wide inspiration is independently documented by Janet).

## Caveats and import checks

1. **Never** overwrite *Control* or *Rhythm Nation* rows with alternative album-title variants; preserve catalog slugs/IDs.
2. Release-day claims for the first two records conflict among metadata databases and later digital listings. `1982` and `1984` are secure; exact original days are not used.
3. Track-level producer credits **are** included when expressly `producer` or `co-producer`. Original labels sometimes aggregate roles; details in the evidence notes. Exclude John McClain (executive), John Barnes (associate), Steve Hodge (mixing), and guest musicians.
4. Track-only genre labels, e.g. *poprock* (1982) or *hardrock/glamrock/rockfunk* (1989), are ordered last. Some genre-aggregation tags have lower reliability than liner-note/producer claims; see genre_evidence.csv.
5. Machinery from another album must not migrate to the 1989 album on the basis that the same producers worked on both. The instruments and production fields are restricted to supported per-album sources.
6. If the exact new tokens are added, update both the allowed vocabulary and its validator integration as applicable, and add `minneapolissound`/`rockfunk` parents in `genreFamilies.ts`; the present GitHub validator will reject unknown genre, instrument or production tokens until Claude updates the repository.
7. `sounds_like` holds editorial sonic neighbors, not proven influences. None of the suggested neighbors are treated as guest contributions.
8. `contemporaryrnb` is explicitly listed as a style for *Rhythm Nation 1814* by AllMusic (see `r89all`), while the Library of Congress separately uses the broader term R&B; both genre tokens have direct album-specific evidence.

## Next phase (Phase 02; not contained in this ZIP)

Four more **studio** albums, in original release order: **janet. (1993)** (catalog currently says `Janet`, preserve ID `janet-janet`), **The Velvet Rope (1997)**, **All for You (2001)**, **Damita Jo (2004)** (missing from catalogue; verify before importing). No greatest-hits packages, live albums, or reissues.

## ZIP members

- `CLAUDE_IMPORT.md`
- `janet_phase01_rows_ONLY.csv` (27 columns; 4 increment-only rows)
- `janet_phase01_sources.csv` (four-album source records and working URLs)
- `janet_phase01_genre_evidence.csv` (one row per included genre per album)
- `janet_phase01_evidence-notes.md` (anchored scales; production/credit attribution and disagreements)
- `janet_phase01_catalog-audit.csv` (catalog changes versus existing entries)

# CLAUDE IMPORT — Tracy Chapman — phase 01

Research checked **28 October 2026**. **One incremental batch**: these are draft proposals, not merged changes to GitHub. CSVs use UTF-8 and exactly 27 descriptor columns.

## Artist identity / duplicate check

- Artist: **Tracy Chapman**.
- Propose Fandome artist ID: **`tracychapman`**. The name did not appear in either `src/data/catalog.ts` or `src/data/seed.ts` (branch `descriptors` checked 28 October 2026); no conflicting id spotted. Add the artist to Fandome before import.
- `docs/descriptors/tracychapman.csv` returned **404** on GitHub; hence **no existing album descriptor rows were skipped**. The Claude landmarks Oct 2026 page has no Tracy Chapman album entry (a text match to “Chapman” occurs in unrelated Chapman Stick instrumentation, not this artist).

## Phase 01 content — four new rows

| ID | Album | Year | Type |
|---|---|---:|---|
| `tracychapman-tracychapman` | Tracy Chapman | 1988 | studio |
| `tracychapman-crossroads` | Crossroads | 1989 | studio |
| `tracychapman-mattersoftheheart` | Matters of the Heart | 1992 | studio |
| `tracychapman-newbeginning` | New Beginning | 1995 | studio |

## Catalogue additions (all eight released studio albums)

None of the eight albums is currently listed in the checked catalogue. Add each as type `studio`. This batch describes only the first four; the remainder are listed in catalog-audit for next phase.

| Album | Year | Proposed ID | Planned phase |
|---|---:|---|---:|
| Tracy Chapman | 1988 | `tracychapman-tracychapman` | 01 |
| Crossroads | 1989 | `tracychapman-crossroads` | 01 |
| Matters of the Heart | 1992 | `tracychapman-mattersoftheheart` | 01 |
| New Beginning | 1995 | `tracychapman-newbeginning` | 01 |
| Telling Stories | 2000 | `tracychapman-tellingstories` | 02 |
| Let It Rain | 2002 | `tracychapman-letitrain` | 02 |
| Where You Live | 2005 | `tracychapman-whereyoulive` | 02 |
| Our Bright Future | 2008 | `tracychapman-ourbrightfuture` | 02 |


Discography checked against MusicBrainz: https://musicbrainz.org/artist/1129817c-488a-4096-80c1-77fc1b107c93.

## Co-billed records / exclusions

- No co-billed album in this phase. Guest players such as Neil Young and Bobby Womack do **not** change the album's credited primary artist.
- No live albums, compilations, greatest-hits sets, or reissues/repackaged two-fers. No post-2008 unreleased album is claimed.

## New tokens to add to taxonomy (branch `descriptors` checked)

- **Genres:** `alternativefolk` — AllMusic's *Alternative Folk* tag for the first two albums; `folksoul` — Geoffrey Himes's explicit *folk-soul* description of the 1988 debut. Preserve these exact concepts; do not silently map them to a different category.
- **Instrument:** `smallpipes` — Scottish smallpipes played by Eric Rigler on *New Beginning*. Credited as *Scottish Small Pipes*; avoids flattening to the generic `bagpipes` token.
- **Production:** no new tokens. `digitalrecording` (1988 debut) and `liverecording` (1995 album recorded virtually live **in studio**) already exist.

## ARTIST INFLUENCES — qualified primary testimony (phase 01 only)

- **Bob Dylan:** 2017 Spiegel interview describes being fascinated on first hearing him and says quiet songs influenced her writing: https://www.about-tracy-chapman.net/mandela-changed-my-life/. **Conflict:** in 2006 she said Dylan and Joan Baez were not formative influences in her upbringing: https://www.about-tracy-chapman.net/2006-the-voice-of-america/. Do not insert Dylan in album `influenced_by` without album-specific evidence.
- **Joni Mitchell:** explicitly named among songwriters she enjoyed whose quiet songs influenced her writing, in Spiegel 2017: https://www.about-tracy-chapman.net/mandela-changed-my-life/. No verified tie to a specific record here.
- **Simon & Garfunkel:** same Spiegel 2017 interview, same limitation: https://www.about-tracy-chapman.net/mandela-changed-my-life/.
- **Country artists heard in childhood (qualified):** Charley Pride and Dolly Parton are named in a 2006 interview as examples of her mother's country records; she suggests early interest in acoustic guitar may have followed exposure to Glen Campbell/Buck Owens (https://www.about-tracy-chapman.net/2006-the-voice-of-america/). These are contextual/qualified, not proof of specific album influence.
- **Soul/R&B songwriting:** In 2006 she mentioned listening to Stevie Wonder, Marvin Gaye, Curtis Mayfield and James Brown and *possibly* drawing inspiration from their treatment of social issues (https://www.about-tracy-chapman.net/2006-the-voice-of-america/); this is qualified artist-level testimony only.
- **Do not conflate comparisons and influences:** Critic comparisons to Joan Armatrading, Suzanne Vega, Odetta and Phil Ochs are in `sounds_like` only where album-level commentary supports them.

## Caveats and import guidance

- **Producer roles:** 1988 debut = David Kershenbaum only. 1989 = Tracy Chapman + David Kershenbaum. 1992 = Tracy Chapman + Jimmy Iovine ("Woman's Work" only Chapman). 1995 = Chapman + Don Gehman. Executive producers and engineers are excluded.
- **Music genre uncertainty:** AllMusic mixes contemporary folk, alternative/indie and adult alternative labels. Distinct style labels are preserved; softer blues, jazz, world and reggae textures are placed in later genre positions and explicitly limited to individual tracks where appropriate. For 1992, generic wiki claims of alternative pop/indie rock are lower-reliability than the Rhino label note and are not used to manufacture more taxonomy tokens.
- **Production unknown:** no physical recording medium, synthesizer hardware, software or recording technique is invented for *Crossroads* or *Matters of the Heart*; production cells remain blank.
- **Voice and scores:** numeric descriptors are reasoned ordinal judgments anchored to the guide, not direct quotes or tempo/BPM calculations. All are `draft` pending second review.
- **Source limitation:** some historical articles appear in authorised reprints on the longtime fan archive; each is attributed to its named original publication. AllMusic pages can sometimes be access-limited, but searchable album metadata was checked. Source CSV stores exact retrievable URLs.

## Next phase (02) — final four studio albums

**Telling Stories** (2000), **Let It Rain** (2002), **Where You Live** (2005), **Our Bright Future** (2008). Phase 02 will have **only four new descriptor rows** and its own evidence, sources and catalogue audit, without repeating phase 01.

## ZIP contents

- `CLAUDE_IMPORT.md`
- `tracychapman_phase01_rows_ONLY.csv`
- `tracychapman_phase01_sources.csv`
- `tracychapman_phase01_genre_evidence.csv`
- `tracychapman_phase01_evidence-notes.md`
- `tracychapman_phase01_catalog-audit.csv`


## Claude import note

- 4 rows imported; catalogue 8 studio albums 1988-2008. Scene US en 1980 folk,songwriter.
- New genres alternativefolk, folksoul; new instrument smallpipes.
- Artist influences: Joni Mitchell, Simon & Garfunkel, Bob Dylan (Spiegel 2017). Soul names left out (she only 'possibly' drew on them); country names were her mother's records (listening, not influence).

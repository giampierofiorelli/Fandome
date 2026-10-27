# Fandome import packet — Mike Oldfield, phase 01

**Artist:** Mike Oldfield  
**Proposed new artist id:** `mikeoldfield` (letters only)  
**Repository reference:** `descriptors` branch, checked 27 October 2026 (read-only)  
**State:** Four **draft** rows; not yet imported.

## Repository preflight

- Searched **both** `src/data/catalog.ts` and `src/data/seed.ts`: no Mike Oldfield / Oldfield artist or album references. `mikeoldfield` is a proposed *unused* artist id; Claude should register the artist before importing rows.
- `docs/descriptors/` lists no `mikeoldfield.csv` or `oldfield.csv`. No existing descriptor rows to skip.
- Checked `docs/descriptors/research/landmarks-claude-2026-10.md`: Mike Oldfield is cited in contextual research for other artists, but has no finished landmark row here.
- No existing album ids to preserve; the four new ids are built using the required alphanumeric rule. Catalogue actions and later phases are listed in `mikeoldfield_phase01_catalog-audit.csv`.

## Import these four released albums (original recordings only)

| Album ID | Album | Original year | Type |
| --- | --- | --- | --- |
| `mikeoldfield-tubularbells` | *Tubular Bells* | 1973 | studio |
| `mikeoldfield-hergestridge` | *Hergest Ridge* | 1974 | studio |
| `mikeoldfield-ommadawn` | *Ommadawn* | 1975 | studio |
| `mikeoldfield-incantations` | *Incantations* | 1978 | studio |

**Albums to add to the catalogue:** all four above; they are absent from `catalog.ts` and `seed.ts`. Register artist `mikeoldfield` and these albums first. The audit additionally enumerates 22 subsequent studio/soundtrack albums absent from the catalogue. Phases are strictly incremental.

**Co-billed albums in this phase:** none. *Ommadawn* contains named featured performers (Jabula, Paddy Moloney etc.) but is credited as a Mike Oldfield album. David Bedford conducts on *Incantations*, not co-billed.

## New tokens for Claude

- **Genre:** none proposed in this phase; existing canonical tokens cover the cited styles. `newage` is used explicitly as a retrospective classification where AllMusic or the official site applies it.
- **Instruments:** `flageolet` (*Tubular Bells*: explicit sleeve credit); `nutcracker` (*Hergest Ridge*: explicit sleeve credit); `spinet` (*Ommadawn*: explicit sleeve credit). Add to `src/data/instruments.ts` and the validator **only if** still absent. They are distinct from `whistle`, generic percussion, and `harpsichord`, respectively.
- **Production:** no new tokens. All submitted tags already appear in the production type list (e.g. `overdubbing`, `varispeed`, `tapeloops`). Do not auto-add modern machine tags to vintage albums.

## ARTIST INFLUENCES — source-backed, phase 01 only

**Confirmed by Oldfield's own words, strongest link to guitar-playing or a specific recording**

| Artist | Evidence | Primary source |
| --- | --- | --- |
| The Beatles | Among the first music Oldfield says he liked. | [1978 Guitar Player interview (Tom Mulhern)](https://www.mulhern.com/articles/oldfield1978.htm) |
| Bert Jansch | Oldfield describes learning the fingerpicked Jansch version of Davy Graham's *Angie*. | [1978 Guitar Player interview](https://www.mulhern.com/articles/oldfield1978.htm) |
| John Renbourn | Specifically named with Jansch as formative acoustic-guitar listening. | [1978 Guitar Player interview](https://www.mulhern.com/articles/oldfield1978.htm) |
| The Shadows | Oldfield says his early electric band performed songs in their repertoire. This is a formative performance influence, not an album-specific one. | [1978 Guitar Player interview](https://www.mulhern.com/articles/oldfield1978.htm) |
| Terry Riley | Oldfield explicitly associates the genesis of *Tubular Bells* with the early ambient music he heard, naming Riley. | [The Guardian interview, 2014](https://www.theguardian.com/music/2014/mar/20/mike-oldfield-interview-tubular-bells-drugs) |
| TONTO’s Expanding Head Band | Named alongside Terry Riley as music related to the early *Tubular Bells* thinking. | [The Guardian interview, 2014](https://www.theguardian.com/music/2014/mar/20/mike-oldfield-interview-tubular-bells-drugs) |

**Further named listening / kinship, not proven direct album-specific influences:** Maurice Ravel, Hans-Joachim Roedelius, Béla Bartók, Igor Stravinsky, Stevie Wonder and Led Zeppelin. Oldfield names all six as music he listened to; [The Guardian, 2014](https://www.theguardian.com/music/2014/mar/20/mike-oldfield-interview-tubular-bells-drugs). **Do not automatically copy** these six to a row's `influenced_by` field without album-specific attribution.

The influence field for *Tubular Bells* contains only the artist's two explicitly associated records/artists. The other three album-specific fields remain empty rather than converting critic comparisons or guest credits into influence claims. `sounds_like` consists of explicitly **editorial** approximate similarity tags and has a different evidentiary status.

## Caveats / audit decisions

1. **Excluded as live:** *The Orchestral Tubular Bells* (1975). Although an independently issued, studio-mixed recorded arrangement of the 1973 composition, reference discographies classify it as a **live recording** of the Royal Philharmonic Orchestra at a location in 1974. As the user's rule excludes all live albums, do **not** add it. See [official artist archive](https://www.mikeoldfieldofficial.com/releases-archive/orchestral-tubular-bells/), [1975 recording credits](https://tubular.net/discography/TheOrchestralTubularBells) and [live classification](https://en.wikipedia.org/wiki/The_Orchestral_Tubular_Bells). If the owner chooses to treat an orchestra captured in a hall with mobile recording as a studio ensemble album instead, this classification requires explicit review rather than an implicit exception.
2. *Hergest Ridge*: use 1974 original for instruments and sound; later 1976 and 2010 mixes materially differ. **Do not tag remastering/remixing on the original recording.**
3. *Ommadawn*: source disagreements about producer credit (the more complete specialist listing credits Mike Oldfield **and Phil Newell**; some contemporary album reviews credit Oldfield alone). Verify the source copy used on import. Northumbrian bagpipes were credited but removed from the released mix, so no `bagpipes` token.
4. *Incantations*: overlapping credited/retrospective personnel instruments include some uncertainties; production intentionally blank. Its `landmark=0` is a **provisional editorial choice** since critics disagree over its lasting status. Owner can set it to 1 after review.
5. *Heaven's Open* (1991) was billed as **Michael Oldfield**, not a new pre-career artist. It is in the future Mike Oldfield catalogue plan; do not lose it to the spelling difference.
6. *The Killing Fields* (1984) is a film soundtrack with independent original composition and is included in phase 03. *The Space Movie* (2015) archive release is deferred pending original-versus-recycled score verification. Skip the other live albums and compilations, including *Boxed* and *Exposed*.
7. The AllMusic new-age classifications for records from 1973–78 are retrospective; their primary original idiom is progressive/art rock, chamber/classical music and folk-related composition.
8. Rows capture *original album* material; no reissue-only bonuses, remixes or concert tracks.

## Next phases

- **Phase 02:** *Platinum* (1979), *QE2* (1980), *Five Miles Out* (1982), *Crises* (1983).
- Phase 03: *Discovery* (1984), *The Killing Fields* (1984, soundtrack), *Islands* (1987), *Earth Moving* (1989).
- Phase 04: *Amarok* (1990), *Heaven's Open* (1991), *Tubular Bells II* (1992), *The Songs of Distant Earth* (1994).
- Phase 05: *Voyager* (1996), *Tubular Bells III* (1998), *Guitars* (1999), *The Millennium Bell* (1999).
- Phase 06: *Tr3s Lunas* (2002), *Tubular Bells 2003* (2003; independent re-recording), *Light + Shade* (2005).
- Phase 07: *Music of the Spheres* (2008), *Man on the Rocks* (2014), *Return to Ommadawn* (2017).

## Included files

1. `CLAUDE_IMPORT.md` (this file).
2. `mikeoldfield_phase01_rows_ONLY.csv` — 27 fields; **four** new rows only.
3. `mikeoldfield_phase01_sources.csv` — per-album provenance with working public source URLs.
4. `mikeoldfield_phase01_genre_evidence.csv` — one row per genre, with evidence source and scope.
5. `mikeoldfield_phase01_evidence-notes.md` — track-specific reasoning, equipment, uncertainty and critics' disagreements.
6. `mikeoldfield_phase01_catalog-audit.csv` — all proposed catalogue rows, exclusions, future phase allocation.

## Claude import note (27 Oct 2026)

The Chieftains removed from Ommadawn's sounds_like: Paddy Moloney plays on the album (a guest is not a comparison). Instruments spinet, flageolet, nutcracker added.

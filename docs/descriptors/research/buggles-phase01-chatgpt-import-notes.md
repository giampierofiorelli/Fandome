# CLAUDE IMPORT — The Buggles, Fandome phase 01

Research date: **28 October 2026**. Repo checked: `giampierofiorelli/Fandome`, branch `descriptors` (read-only); artist absent from **both** `src/data/catalog.ts` and `src/data/seed.ts`. The existing `docs/descriptors/buggles.csv` is not present; no earlier described Buggles row found. Fresh check against live branch before import is still required. Format follows the current 27-column descriptor guide.

## Incremental phase contents

- `buggles-theageofplastic` — **The Age of Plastic** (1980), studio.
- `buggles-adventuresinmodernrecording` — **Adventures in Modern Recording** (1981), studio.

**This is the entire two-album studio discography. No phase 02 is needed.** Excluded: all compilations, live albums and promotional EPs. The debut single `Video Killed the Radio Star` is already included on the debut studio album; do not create an extra descriptor row for it. No albums previously described have been skipped.

## Catalogue actions

1. Propose the artist ID **`buggles`** (lowercase ASCII; no artist by this ID found in `catalog.ts`/`seed.ts`). Display name **`The Buggles`**. The artist is also filed as `Buggles` in release metadata.
2. Add both album records to `src/data/catalog.ts` (or the appropriate catalogue source) before import. Preserve `1981` for the second album even if an AllMusic discography view displays February 1982; the UK original album was released in November 1981.
3. Import **only** the two new rows in `buggles_phase01_rows_ONLY.csv`; do not append unrelated artists' rows and do not import duplicate albums.
4. Run `scripts/validate-descriptors.ts` and repository tests. All row statuses are intentionally `draft`.
5. None of the albums is co-billed; no `coBilled.ts` change is needed.

### Tokens and additions

- **New genre tokens:** none. `synthpop`, `newwave`, `progressivepop`, `electropop`, `artpop`, `pop`, `progressiveelectronic` and `electronic` are present in the current Genre list.
- **New instrument tokens:** none. `sampler`, `vocoder`, `drummachine` and the other instruments are present in `src/data/instruments.ts`.
- **New production token:** **`korgminipopsjunior`** for Korg MiniPops Junior, backed by Trevor Horn's MusicRadar interview (`https://www.musicradar.com/news/trevor-horn-im-just-an-old-muso-who-likes-playing-and-programming`). Add its label to `src/data/production.ts` before running the validator. `fairlight`, `flanging`, `overdubbing`, `vocalfilter`, `sampling`, `drumprogramming`, `prophet5`, `minimoog` and `vocoder` already exist.
- **Co-billed albums:** none.

## ARTIST INFLUENCES (artist-declared, not inferred from similar sound)

These are **documented statements by Horn or Downes** about the music underlying the Buggles project, not merely critic comparisons. The album-specific `influenced_by` column is more conservative.

| Artist | Primary testimony / context | Source |
|---|---|---|
| **Kraftwerk (The Man-Machine)** | Horn explicitly named the record as changing his conception of electronic pop and part of the thinking behind Buggles. Album-specific for *The Age of Plastic*. | [MusicRadar — Trevor Horn](https://www.musicradar.com/news/trevor-horn-im-just-an-old-muso-who-likes-playing-and-programming); [The Guardian](https://www.theguardian.com/music/2018/oct/30/the-buggles-how-we-made-video-killed-the-radio-star) |
| **10cc** | Downes names 10cc among the duo's forerunners in sophisticated, experimental pop production. | [Louder — Downes interview](https://www.loudersound.com/bands-artists/buggles-prog-credentials) |
| **Electric Light Orchestra (ELO)** | Downes directly calls ELO a predecessor of the Buggles studio aesthetic. | [Louder — Downes interview](https://www.loudersound.com/bands-artists/buggles-prog-credentials) |
| **ABBA** | Downes cites the arrangement complexity in ABBA alongside predecessors of the Buggles approach. | [Louder — Downes interview](https://www.loudersound.com/bands-artists/buggles-prog-credentials) |
| **Yes** | Horn and Downes describe being existing fans of Yes's progressive arrangements; this precedes joining Yes. The Buggles later recorded a variation of `Into the Lens`; **that re-recording itself is NOT proof of an album influence**. | [Louder — Buggles profile](https://www.loudersound.com/bands-artists/buggles-prog-credentials) |
| **Earth, Wind & Fire** | Downes explicitly says the disco-era music he was hearing influenced what he later did with the Buggles. | [Louder — Downes life and times](https://www.loudersound.com/bands-artists/interviews/geoff-downes-prog-interview) |
| **Steely Dan** | Downes expressly names Steely Dan in the same Buggles-related influence answer. | [Louder — Downes life and times](https://www.loudersound.com/bands-artists/interviews/geoff-downes-prog-interview) |

**Album-specific influences:** only the directly documented Kraftwerk album is put in *The Age of Plastic* `influenced_by` cell. The second album `influenced_by` is intentionally blank: 10cc/ELO/ABBA/Yes/Earth Wind & Fire/Steely Dan statements concern the duo's work generally, not a specified recording session on the second LP. Do not mistake producer collaborators for influences. Editorial similarity remains in `sounds_like` and can include future Art of Noise stylistic kinship without implying Art of Noise influenced the earlier recording.

## Important caveats for import

- **TR-808 conflict:** Sound On Sound's Gary Langan retrospective says a TR-808 click track was involved in recording *The Age of Plastic*, but Horn told MusicRadar that he used a **Korg MiniPops Junior** for `Living in the Plastic Age` and bought a TR-808 after his Buggles/Yes period. A Roland TR-808 commercial release in 1980 sits awkwardly with a 1979 recording. **Do not assign `tr808` to this album without independent reconciliation.** The directly credited Korg machine is retained only for that track in the production token; the album-level token has limited scope. `https://www.soundonsound.com/techniques/classic-tracks-buggles-video-killed-radio-star` / `https://www.musicradar.com/news/trevor-horn-im-just-an-old-muso-who-likes-playing-and-programming`.
- **Oberheim:** Horn says they rented an Oberheim and could not get it working. **No `oberheim` tag** in debut production.
- **Fairlight:** verified on second LP (including sampled mock jazz on `Vermilion Sands`), **not** on debut. Sources: `https://thequietus.com/quietus-reviews/the-buggles-adventures-in-modern-recording-album-reissue-review/`, `https://www.scotsman.com/arts-and-culture/cd-review-buggles-adventures-in-modern-recording-1724240`.
- **Second album production:** album has Trevor Horn, Geoff Downes and John Sinclair credited as producers across individual tracks. Downes played on fewer songs and left to join Asia. Simon Darlow and Anne Dudley perform/arrange; they are not listed as album-wide credited producers from the available evidence.
- **Original editions:** extra tracks `Videotheque`, `We Can Fly from Here`, `Riding a Tide`, etc. found on 2010 reissues are **not** part of the original 1981 nine-track core. Do not let them dominate the album's genres or instrument notes.
- **Sound similarity is editorial**, distinct from influence. Treat the second album's `progressivepop` tag as a conservative extension of Downes' expressly stated overall Buggles aesthetic, whereas the album's `progressiveelectronic`, `synthpop`, `newwave`, `electronic` have album/release-group sources.
- **Voice scale:** `clear|soft` represents Horn's melodic lead delivery on both albums, not trained/operatic singing. Women providing backing vocals on the first record are credited separately in evidence, not treated as lead `choral` voices.
- **Scale scores** are editorial judgments on a 0–5 scale, with rationale in evidence notes; `confidence` reflects evidence sufficiency, not objectivity of ratings.

## Files

1. `CLAUDE_IMPORT.md`
2. `buggles_phase01_rows_ONLY.csv` (2 rows, 27 columns)
3. `buggles_phase01_sources.csv` (23 citations)
4. `buggles_phase01_genre_evidence.csv` (11 genre-level records)
5. `buggles_phase01_evidence-notes.md`
6. `buggles_phase01_catalog-audit.csv`

Next phase: **none**. Two studio albums complete as of 28 October 2026.

## Claude import note (Oct 2026)

- New production token `korgminipopsjunior` (Korg MiniPops Junior) added to production.ts, the guide and the prompt.
- Adventures in Modern Recording sounds_like: Yes (Drama) and Art of Noise removed (Horn and Downes were members of Yes; Horn of Art of Noise: an artist's own bands are not comparisons). 10cc kept.
- Artist added (2 studio albums), not touring; scene GB en 1970 synthpop,pop,prog. Yes left out of the artist influences for the same reason.

## Claude enrichment (reception pass, Oct 2026)

- Reception rows: `docs/descriptors/reception/buggles.csv`.
- The Age of Plastic sounds_like: 10cc and ELO confirmed (The Spectator, Berkmann 2010; Rock and Roll Globe, Kopp), Kraftwerk confirmed (Pienemmät purot 2025; Spin 2012); Sparks removed (not found); added Godley & Creme (Audio 1980, "reminiscent of" Consequences), Roxy Music (Rock and Roll Globe on Astroboy), Elton John (Rock and Roll Globe), ABBA and The Alan Parsons Project (Pienemmät purot).
- Adventures in Modern Recording sounds_like: 10cc removed (not found); added XTC (Record Collector, Staunton 2010), Queen (BBC Music, Roberts 2010: Bohemian Rhapsody), The Knife (The Quietus, Stannard 2010).

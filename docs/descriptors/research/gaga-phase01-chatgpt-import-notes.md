# Fandome — Lady Gaga Phase 01, incremental import

**Project artist ID:** `gaga`. **Branch:** `descriptors`, read only. **Cutoff:** 2026-10-24.

## Contents (exactly four new original releases)

1. **`g-fame`** — *The Fame* (2008), `studio` — original catalogue/seed ID, keep unchanged.
2. **`gaga-thefamemonster`** — *The Fame Monster* (2009), `ep` — **add to catalogue**. Eight-track standalone EP, not deluxe debut.
3. **`g-btw`** — *Born This Way* (2011), `studio` — original catalogue/seed ID, keep unchanged.
4. **`gaga-artpop`** — *ARTPOP* (2013), `studio` — **add to catalogue**.

## Six files

- `CLAUDE_IMPORT.md`: this import memo.
- `gaga_phase01_rows_ONLY.csv`: exactly 25 descriptor columns and four records; no rows from other phases/artists.
- `gaga_phase01_sources.csv`: one source record per album and citation; only source URLs that were verified in public search results.
- `gaga_phase01_genre_evidence.csv`: one genre/source/scope/evidence record per genre. Scope = whole album, some tracks or texture.
- `gaga_phase01_evidence-notes.md`: scoring reasoning, source IDs, critical disagreements and credit/edition caveats.
- `gaga_phase01_catalog-audit.csv`: existing and new album IDs, import instructions and editions.

## Genres requiring code updates before validation

Add exactly these **eight proposed new tokens** to `Genre` in `src/data/scenes.ts`, `GENRE_LABELS`, `GENRE_PARENTS` in `src/data/genreFamilies.ts`, and `GENRES` in `scripts/validate-descriptors.ts`:

- `electrodisco` — suggested parents `['disco','electronic']` (AllMusic on The Fame).
- `glamrock` — suggested parent `['rock']` (Gaga official The Fame).
- `hinrg` — suggested parents `['dance','disco']` (Pitchfork on The Fame Monster; texture rather than a dominant LP genre).
- `technopop` — suggested parents `['electronic','pop']` (Gaga official Born This Way).
- `eurodisco` — suggested parent `['disco']` (Slant on ARTPOP).
- `postindustrial` — suggested parent `['industrial']` (AOTY metadata for Born This Way, texture only).
- `complextro` — suggested parents `['electrohouse','electronic']` (AOTY genre metadata for ARTPOP, texture only).
- `melodicdubstep` — suggested parent `['dubstep']` (AOTY metadata for ARTPOP, texture only).

**Important:** All other referenced genre tokens already exist in the branch at research time. Do not silently strip out less-common attested genre names merely to pass a validator. `notes` alone is capped at 15 words; other multi-value columns have **no value-count ceiling**.

## Catalog and edition caveats

- Seed.ts carries `g-fame` and `g-btw`, so use those exact IDs, **never** normalized `gaga-thefame` or `gaga-bornthisway`.
- The Fame Monster has been sold as a two-disc package, but this row concerns only eight 2009 new songs. Do not double-count The Fame.
- *The Remix* (2010) and *Born This Way: The Remix* (2011) were reviewed for eligibility but excluded as rearrangements of already-catalogued works, without sufficient standalone landmark status. *The Remix* has documented remixer contributions including Pet Shop Boys, but AllMusic explicitly calls it non-essential: https://www.allmusic.com/album/the-remix-mw0001963573 .
- Producer-credit issues: MusicBrainz suggests **Space Cowboy** production on original Fame Monster tracks beyond seven-name official list. Confirm original liner credits. For ARTPOP the official site names ten producer entities but leaves out **David Guetta**, listed by Metacritic; confirm in the original 2013 booklet. The official website also has typographic `Madeonn Infected Mushroom` requiring separation. Do not add writers, featured singers, mixers or programmers as producers without a producer credit.
- ARTPOP's *Do What U Want* (feat. R. Kelly) appeared in the original 2013 album but was removed from later digital editions. This phase evaluates the original release and cites the removal, without promoting the guest vocalist to the producer list.
- Born This Way uses fictional/pseudo-German syllables on Scheiße; singing language remains English. A 2021 bonus-disc/anniversary remix collection is not used as part of the 2011 album descriptors.
- `influenced_by` includes documented **song-level** connections within the original album as permitted by the evidence, not speculative artist similarity. `sounds_like` is qualitative comparison and cannot prove influence.
- Check any newer existing `gaga.csv` before merging, since the branch may change while this ZIP is passed to Claude.

## Next Phase 02 (chronological)

- *Cheek to Cheek* (2014): collaboration with Tony Bennett, studio; verify joint naming and jazz credits.
- *Joanne* (2016): solo studio.
- *A Star Is Born* (2018): original soundtrack with Bradley Cooper, significant collaborative soundtrack.
- *Chromatica* (2020): solo studio, existing `g-chromatica` ID.

Subsequent phase(s): *Love for Sale* (2021, Tony Bennett collaboration), *Harlequin* (2024, companion album), *Mayhem* (2025, existing `g-mayhem`), with separate decision on the 2024 *Joker: Folie à Deux* film soundtrack and 2021 *Dawn of Chromatica* remix project. No future/unreleased works.

**Validator:** import new album IDs and the eight new genre tokens, append only these four rows, run `npx vite-node scripts/validate-descriptors.ts`, then repository tests. The producer caveats need manual confirmation; the CSV is a `draft` proposal.

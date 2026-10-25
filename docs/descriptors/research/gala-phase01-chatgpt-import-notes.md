# CLAUDE_IMPORT — Gala / Phase 01

Read this file first; this package is **strictly incremental** and writes no files to GitHub.

## Files / rows

- `gala_phase01_rows_ONLY.csv` — **27 columns**, two distinct studio albums only:
  - `gala-comeintomylife` — **Come Into My Life (1997)** — already in Fandome catalogue (retain ID).
  - `gala-toughlove` — **Tough Love (2009)** — add to Fandome catalogue (`title: Tough Love; year: 2009; type: studio`).
- `gala_phase01_sources.csv` — album-specific verifiable sources with roles and strengths.
- `gala_phase01_genre_evidence.csv` — one item per assigned genre per album with album/track/texture scope.
- `gala_phase01_evidence-notes.md` — supporting reasoning, personnel, caveats, reviews, ratings, unresolved ambiguities.
- `gala_phase01_catalog-audit.csv` — confirms previous catalogue entry and potential excluded releases.

## Catalogue / other-billed records

Artist ID is **`gala`** (confirmed in `src/data/catalog.ts`). There is **no existing `docs/descriptors/gala.csv`** verified at research time. Add only the 2009 studio title. No jointly billed full-length albums are in this package; no `coBilled.ts` entry is needed.

## New tokens

- Genres: `italodance` (specifically the 1996 "Freed From Desire" master/album track), `acidtechno` (a 1997 AllMusic critic's sonic ancestry description; limited texture, not an album-wide electronic style). **Both** absent from current `scenes.ts`; update genre type, genre families and validator. Recommended parents for review: `italodance → [dance,eurodance]`; `acidtechno → [techno,acidhouse]` but these are suggestions, validate the taxonomy architecture.
- Instruments: **none**. `guitar` appears in the GitHub guide and `instruments.ts`, even though some abridged requester examples name only acoustic and electric guitar; don't force an unsupported subtype.
- Production: **none**.
- `Tough Love` has a blank `production` field deliberately. Don't invent 808/909, vocoder, DAWs or sampling from genre.

## Edition and attribution caveats

- **1997** is the original year despite some AllMusic indexing of 1998 import editions and current official-site entry dated 2009 for a reissue.
- **2009** original Tough Love is a 12-song studio album. Do not count the 2009 sampler EP, 2012 deluxe, or remix versions as distinct studio albums.
- The original 1997 album has 10- and 11-track published variants; evidence is scoped to the album, and remixes do not become extra album IDs.
- **L’Album:** listed separately by some old secondary biographies but without an independently verified release/tracklist; investigate before creating a separate album.
- Producers for Tough Love: primary source Gala identifies Marcus Bell as main producer. Track credits give Gala and Ali-Dee roles. Other producer attributions are aggregated and partly inconsistent (especially Kevin Rudolf / Tamir Muskat / Mike Daly); see evidence notes before finalising.
- Album genre tokens `latinpop` and `acidtechno` in the 1997 row are low-weight critical/release metadata limited to texture. Don't imply equal album-wide prevalence.

## Next phase

**No automatic Phase 02** currently recommended. MusicBrainz identifies just two original studio albums. Only start a second phase if separately important independent-era EPs or original collaborations are validated as landmark releases, rather than anniversary compilations of the same tracks. Candidate examination: the original 1998/2000 *Remixes* release, *Coming Into a Decade* (2007), and *Singles V1* (2015); all **excluded here** to avoid duplication. If an independent source shows `L’Album` to be an actually separate 1997 studio set, add it in a focused follow-up, preserving chronology and avoiding speculative IDs.

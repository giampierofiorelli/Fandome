# CLAUDE_IMPORT — Gloria Gaynor / Phase 03

## Scope

Research and read-only check: 28 October 2026. In public Fandome `descriptors` branch, neither `src/data/catalog.ts` nor `src/data/seed.ts` contains a Gloria Gaynor ID and no `docs/descriptors/gloriagaynor.csv` is published. Reuse **phase 01 ID `gloriagaynor`** and check the actual Claude working tree for earlier phases before adding entries: the public branch may not contain already-delivered phase 01/02 work.

Only **four new studio albums** in this archive, chronological, 27 columns:

| Album ID | Title from original edition | Year | Type |
|---|---|---:|---|
| `gloriagaynor-ikindalikeme` | I Kinda Like Me | 1981 | studio |
| `gloriagaynor-gloriagaynor` | Gloria Gaynor | 1982 | studio |
| `gloriagaynor-iamgloriagaynor` | I Am Gloria Gaynor | 1984 | studio |
| `gloriagaynor-thepower` | The Power (aka The Power of Gloria Gaynor) | 1986 | studio |

**Previously delivered / must not re-import:** Never Can Say Goodbye, Experience Gloria Gaynor, I've Got You, Glorious (phase01); Gloria Gaynor's Park Avenue Sound, Love Tracks, I Have a Right, Stories (phase02).

## Import-sensitive cases

1. Original *The Power* is **new 1986 studio covers**, not a greatest-hits compilation. Includes bonus medley/remix; score original main new 14-track record. **Use initial official name The Power and id `gloriagaynor-thepower`**, not duplicate from the tentative phase02 plan `gloriagaynor-thepowerofgloriagaynor`. If a working branch already has an album with the long-title ID, reconcile it in place and do not introduce duplicate IDs.
2. Original *Gloria Gaynor* (1982) was on **Atlantic**. Some current streaming/reissue track listings add a remake of *I Will Survive*; this is **not** on original 1982 LP, so excluded from descriptor estimates. Producer list is four named track producers, not executive producer Linwood Simon.
3. *I Am Gloria Gaynor* (1984) is the original eight-song LP. The 1996 `I Am What I Am` edition adds recordings originally on the 1978 album. Joel Diamond = album producer; Shep Pettibone = extra producer/remixer of particular title track only, not a general album production credit. 1984 original release vs 1983 title single/copyright; use 1984 album year.
4. *I Kinda Like Me* first issued 1981; a 1982 pressing exists. Producer order McFadden, Whitehead, Cohen from record sleeves. No named influences verified for these four albums, and covers, guests, co-writers do not imply influence.
5. `showtunes` is justified by just *I Am What I Am*, placed **last**. 1986 `synthpop` and `ballad` similarly are partial-repertoire styles. All genre rows have individual source, scope and evidence strength; not all genre claims are equally strong. `I Am Gloria Gaynor` instrument list uses later reissue credit metadata and **needs original-pressing validation** before promotion to `reviewed`.
6. Fandome canonical genre/instrument/production tokens: all used tokens already on the `descriptors` branch; no token additions needed. **All rows `status=draft`** and editorial 0–5 scales; user/Claude should independently audit high-impact claims and run `scripts/validate-descriptors.ts` after import.

## Archive inventory

1. `CLAUDE_IMPORT.md`: import notes and caveats
2. `gloriagaynor_phase03_rows_ONLY.csv`: 4 new album rows, exactly 27 fields
3. `gloriagaynor_phase03_sources.csv`: 24 per-album source records, with URLs
4. `gloriagaynor_phase03_genre_evidence.csv`: 23 genre support records, with scope
5. `gloriagaynor_phase03_evidence-notes.md`: detailed audit of genres, personnel, album editions and uncertainties
6. `gloriagaynor_phase03_catalog-audit.csv`: prior phases, phase03, future candidates and catalogue actions

This ZIP is strictly incremental. It does not modify GitHub or overwrite prior output; Claude may import on its own branch after checking for duplicates.


## Claude import note

- 4 rows imported (I Kinda Like Me, Gloria Gaynor 1982, I Am Gloria Gaynor, The Power).
- Catalog title 'The Power of Gloria Gaynor' renamed 'The Power' so the id matches.
- Removed McFadden & Whitehead from I Kinda Like Me sounds_like: they produced the album.
- No new tokens.

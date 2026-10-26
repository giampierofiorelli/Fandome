# CLAUDE_IMPORT — Franco Battiato Phase 07 (incremental)

**Research date:** 26 October 2026. **Branch:** `descriptors`, read only. **Artist ID:** `battiato`. Import **only these four new album descriptor rows** into `docs/descriptors/battiato.csv`. Earlier 24 rows/Phases 01–06 are not included; never replace them with this archive.

| album_id | title | year | type | catalogue action |
|---|---|---:|---|---|
| `battiato-fleurs` | Fleurs | 1999 | studio | ADD |
| `battiato-campimagnetici` | Campi magnetici | 2000 | soundtrack | ADD |
| `battiato-ferrobattuto` | Ferro battuto | 2001 | studio | ADD |
| `battiato-fleurs3` | Fleurs 3 | 2002 | studio | ADD |

## Files (all six in one ZIP)

- `CLAUDE_IMPORT.md`
- `battiato_phase07_rows_ONLY.csv`: exact 27-column header and only Phase 07's four descriptors
- `battiato_phase07_sources.csv`: 29 album-specific evidence citations; URLs checked by web search/preview on 26 October 2026 (some sites restrict automated opening)
- `battiato_phase07_genre_evidence.csv`: 29 genre–album records with scope, rationale and source
- `battiato_phase07_evidence-notes.md`: evidence behind instruments, production, score ratings, and disputed classification
- `battiato_phase07_catalog-audit.csv`: no duplicate source rows

## New tokens and release notes

**New genre tokens:** none identified: classifications use established `scenes.ts` vocabulary.  
**New instrument tokens:** none. `guitar` is present in live `instruments.ts` but not in user's abbreviated shortlist. It is more accurate for *Fleurs 3* than guessing whether the credited guitar was acoustic or electric; importer may confirm from physical booklet.  
**New production tokens:** none: `stringarrangements`, `drumprogramming`, `digitalediting`, `sampling`, `sonicmanipulation` are in `production.ts`.  
**New voice tokens:** `operatic` is used for episode-specific soprano/operatic delivery; check whether voice dictionary accepts it (previous phase uses `choral`, `spoken`, `clear`, etc.). It is *not* an instrumental token.  
**Co-billed albums:** none. Alice, Jim Kerr, Natacha Atlas, Simone Bartolini, Manlio Sgalambro and orchestra players are guests or collaborators, not artist-billed equal partners on these albums.  
**Producer caution:** *Campi magnetici* and *Ferro battuto* credit Battiato + Saro Cosentino (additional producer for *Campi*). *Fleurs 3* is marked Battiato from Sony distributed track credits; Wiki secondary claim of Francesco Cattini as Producer conflicts; investigate physical booklet before replacing.  
**Cover/source artists:** *Fleurs* and *Fleurs 3* `influenced_by` entries represent specifically documented *repertoire sources*, not necessarily Battiato's biographical mentors. If strict documented **influence** requires an explicit claim that the cover artist influenced Battiato, omit these tokens during final review and preserve the cover association in notes/evidence.

**Edition issues:** AllMusic *Fleurs* headline date 2001 is not original (1999 original Mercury). *Fleurs 3* exact day is contested (MusicBrainz 20 Aug; Battiato official bio 30 Aug; AllMusic 1 Oct for a particular pressing), secure year 2002. *Campi magnetici* premiered onstage June 2000 but released as new **ballet score album**, not live recording. A soundtrack album can have electronic music as its primary genre. No past material repeated.

## Next Phase 08 (chronological)

1. *Dieci stratagemmi* (2004)
2. *Il vuoto* (2007)
3. *Fleurs 2* (2008)
4. *Inneres Auge (Il tutto è più della somma delle sue parti)* (2009) — check if compilation/rework record deserves own row per landmark rule; otherwise defer and advance to *Telesio* (2011).

Claude: import new albums into `catalog.ts`, import descriptors, run official validator and repository test suite. No scripts included.

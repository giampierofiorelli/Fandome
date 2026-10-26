# CLAUDE_IMPORT — Rondò Veneziano Phase 04

**Branch:** `descriptors`. Research prepared in read-only mode. This ZIP is **STRICTLY INCREMENTAL**: four new 27-column rows only, no earlier phase rows. Original issue year, not reissue year. `status=draft` throughout.

## New rows in this phase

| album_id | title | year | type |
|---|---|---:|---|
| `rondoveneziano-stagionidivenezia` | Stagioni di Venezia | 1992 | studio |
| `rondoveneziano-ilmagodivenezia` | Il mago di Venezia | 1994 | studio |
| `rondoveneziano-sinfoniadinatale` | Sinfonia di Natale | 1995 | studio |
| `rondoveneziano-marcopolo` | Marco Polo | 1997 | studio |

**Catalog actions:** artist ID `rondoveneziano` already exists. Add these four albums to its entry in `src/data/catalog.ts` (checked 26 October 2026; last entries at check were *Odissea veneziana*, *Casanova*, *Rapsodia veneziana*, *Arabesque*, 1984–1987). Add phase03 albums too **if absent** using its prior ZIP: *Concerto*, *Masquerade*, *Barocco*, *Prestige*. Do not invent IDs for releases already in the updated catalog; recheck live before import.

**Canonical title caveat:** earlier preview called first item *Le stagioni di Venezia*. The official current album page uses **Stagioni di Venezia**. The Italian original album is also documented as *G. P. Reverberi – Rondò Veneziano*. Use the official normalized title above and `rondoveneziano-stagionidivenezia` unless the imported catalogue already has a distinct preexisting ID for the same recording.

## Important missing 1990 album: backfill, NOT a Phase 04 row

*The Genius of Vivaldi, Mozart, Beethoven* (1990), type **studio**; proposed ID `rondoveneziano-thegeniusofvivaldimozartbeethoven`. The official site treats it as an album and AllMusic identifies a 1990 studio recording on Baby Records. Its separate Vivaldi, Mozart and Beethoven German and French parts are NOT three distinct studio album creations. This item should be researched in a **separate backfill ZIP** and imported once to catalog + descriptor CSV, keeping Phase 04 incremental. Provenance: https://rondoveneziano.com/album/the-genius-of/ ; https://www.allmusic.com/album/release/the-genius-of-vivaldi-mozart-beethoven-mr0001092892 . Do not conflate with 1980 album *The Genius of Venice* (a reissue of the debut).

## New tokens in this phase

- `neoprog` — **GENRE**: direct *Neo-Prog* album tag from AllMusic on *Stagioni di Venezia*, *Sinfonia di Natale* and *Marco Polo*. Add to the `Genre` union in `scenes.ts`, update `genreFamilies.ts` e.g. parent `prog` (if Claude judges this to be a distinct category), and validator's accepted genres. Genre strength is **medium** because it might reflect broad AllMusic tagging rather than track-specific neo-progressive arrangements.
- No new instrument or production tokens. `baroque`, `neoclassical`, `christmas`, `classicalcrossover`, `drumprogramming`, `programming` and `prog` are existing tokens on the inspected branch.

## Billing, producers, influence and uncertainty

- No multi-artist **co-billing** established for these four albums. `Ivano Pavesi` and `Giuseppe Zuppone` are song composers/arrangers, NOT co-billed album artists or credited producers. `Klaus Strazicky`, `Franco Fochesato` and `Sergio Barlozzi` also have technical/performance roles, not album producer roles.
- `Gian Piero Reverberi` is credited album **producer** across these four (Qobuz, original release, AllMusic). `P.E.M.` appears as a production entity on Apple Classical's *Sinfonia di Natale*: do not automatically import as human co-producer. See evidence notes.
- **Artist influences:** only Phase 01 contains this section. Do not repeat generic artist influences or reinterpret covered classical composers and traditional repertoire as `influenced_by`.
- `instrumental` means *predominantly instrumental*, not that track 10 of *Marco Polo* is proven voiceless. Original inventory is ambiguous on this track. `language` and `lyrics` remain blank; cover titles do not give a sung language.
- Nothing suggests credible exact synth/drum-machine model IDs or effects for these albums. No borrowed technical identifiers from the group’s other recordings.
- Some values and technical fields deliberately blank to preserve abstention. Genre sources include weak metadata and platform style tags with explanatory confidence in the genre evidence file. No negative inference from empty fields.

## ZIP contents

1. `CLAUDE_IMPORT.md`
2. `rondoveneziano_phase04_rows_ONLY.csv` — exact 27 columns, 4 new rows
3. `rondoveneziano_phase04_sources.csv` — one source per line with working external URL and its evidence role
4. `rondoveneziano_phase04_genre_evidence.csv` — one line per genre/album, sourced and scoped
5. `rondoveneziano_phase04_evidence-notes.md` — per-album reasoning, editions, instrument/production and weak claims
6. `rondoveneziano_phase04_catalog-audit.csv` — 4 new catalog additions + 1990 backfill flag

## Phase 05, planned only (not included)

- *Zodiaco – Sternzeichen* (1998)
- *Attimi di magia – Magische Augenblicke* (1999; investigate whether older tracks are rerecorded)
- *Honeymoon – Luna di miele* (1999)
- *La storia del classico* (2000)

The 1997 *In concerto* is live and omitted under the default exclusion. Do not include later reissues, compilations or international alternate titles as new studio works.

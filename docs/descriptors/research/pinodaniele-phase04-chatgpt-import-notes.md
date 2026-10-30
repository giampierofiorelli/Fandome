# CLAUDE IMPORT — Pino Daniele / Phase 04 (incremental)

**Checked:** 30 October 2026, GitHub branch `descriptors`, read only. **Artist ID:** `pinodaniele` (present in `src/data/catalog.ts`; not separately present in `src/data/seed.ts`). In the checked repository, `docs/descriptors/pinodaniele.csv` contained the **four Phase-01 rows** (*Terra mia*, *Pino Daniele*, *Nero a metà*, *Vai mò*) and no Phase-04 rows. Other albums were **already delivered** in independent Phase-02 and Phase-03 ZIPs; they are deliberately not in this ZIP. Never overwrite existing descriptor rows or repeat earlier-phase rows.

## Phase-04 contents (four NEW rows, chronological)

| Exact catalogue album id | Catalogue title | Year | Type |
|---|---|---:|---|
| `pinodaniele-chediotibenedica` | Che Dio ti benedica | 1993 | studio |
| `pinodaniele-noncalpestareifiorineldeserto` | Non calpestare i fiori nel deserto | 1995 | studio |
| `pinodaniele-dimmicosasuccedesullaterra` | Dimmi cosa succede sulla terra | 1997 | studio |
| `pinodaniele-comeungelatoallequatore` | Come un gelato all’equatore | 1999 | studio |

**Albums to ADD to catalogue:** **none**. All four, titles included, are already in `catalog.ts`. Do not re-add them. The apostrophe in the last catalogue title is a curly U+2019 and the id's `allequatore` is its existing slug.

**Albums billed to multiple artists:** none. Giorgia, Noa, Irene Grandi, Jovanotti, Raiss, Chick Corea and Rossana Casale are credited collaborators or featured performers, not co-billed album artists. Chick Corea is a *co-producer of two individual tracks* in the 1993 record, included in the album `producers` field in accordance with the full-credits rule.

## New tokens to add to data model

- **Genre:** `afroblues` — Pino Daniele's own **contemporary album description** in Giacomo Pellicciotti, La Repubblica (18 March 1999): `https://www.repubblica.it/supplementi/musica/19990318/artic_1.html`. Afro-blues with Mediterranean/African elements; parent genres suggested for Claude's review: `blues|worldmusic|afro`. Do not replace it with `afrobeat` or `afro`.
- **Instrument:** `ztar` — explicitly credited to Fabio Massimo Colasanti on *Come un gelato all’equatore* by the artist's official album page: `https://www.pinodaniele.com/music/come-un-gelato-allequatore-1997/`. This is an electronic/MIDI performance controller and is not automatically synonymous with `guitarsynth` or `keytar`.
- **Production:** none. All used tokens occur in the current list.

**Artist influences:** phase-01 only; no changes or global artist-influence imports here. The 1995 `influenced_by=Jovanotti` and 1999 short `[1/12]` links are **album-specific**, documented in the current sources file and notes.

## Genre / production caveats

- Four rows, exactly 27 columns, status `draft`, notes at most 15 words each. No invented instruments or machine models.
- The 1993 official credits state **Pino Daniele** produced the record, with **Chick Corea** co-producing *Sicily* and *Soleado up and down*. Sergio De Angelis is identified as an **executive producer** on another contemporary-album credit reproduction and is **not** an album producer. Do not import him as a producer simply because a secondary infobox says producer.
- `afroblues` and `ztar` must be created as new tokens before validating. A reviewer hears vibraphone on the 1997 recording, but speculates about the player; the instrument token `mallets` is included without that musician attribution.
- All four were checked as released 1993/1995/1997/1999. Neither live albums nor compilations have been added. No value is derived from genre alone. `voice` is intentionally blank where album-specific evidence is insufficient.
- Ratings: `landmark=1` only for 1995, justified by independent descriptions of its **career-defining shift** (OndaRock, TRAKS). The other three are 0 despite their reception or sales.
- **Already described in live GitHub CSV, skipped:** *Terra mia*, *Pino Daniele*, *Nero a metà*, *Vai mò*. **Earlier delivered, skipped:** *Bella ’mbriana*, *Musicante*, *Ferryboat*, *Bonne soirée*, *Le vie del Signore sono finite*, *Schizzechea with Love*, *Mascalzone latino*, *Un uomo in blues*. *Sotto ’o sole* and other live/compilation albums are excluded by project policy.

## ZIP files (all six, phase-04 only)

1. `CLAUDE_IMPORT.md`
2. `pinodaniele_phase04_rows_ONLY.csv`
3. `pinodaniele_phase04_sources.csv`
4. `pinodaniele_phase04_genre_evidence.csv`
5. `pinodaniele_phase04_evidence-notes.md`
6. `pinodaniele_phase04_catalog-audit.csv`

## Next: Phase 05 (not included)

1. *Medina* (2001) — `pinodaniele-medina`
2. *Passi d’autore* (2004) — `pinodaniele-passidautore`
3. *Iguana cafè – Latin blues e melodie* (2005) — catalogue exact id must be fetched and preserved
4. *Il mio nome è Pino Daniele e vivo qui* (2007) — catalogue exact id must be fetched and preserved

Only append those four in the next ZIP after rechecking existing descriptors and release/catalogue data.

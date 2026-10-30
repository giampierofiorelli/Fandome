# CLAUDE IMPORT — Pino Daniele / Phase 05 (STRICTLY INCREMENTAL)

**Repo audit:** `giampierofiorelli/Fandome`, branch `descriptors`, checked 30 October 2026, read only. Existing artist ID **`pinodaniele`** appears in `catalog.ts`, not `seed.ts`. Exact IDs below match the catalogue's `slug()` rule (NFD normalize; strip marks; remove all non-ASCII letters/digits). Live `docs/descriptors/pinodaniele.csv` contains only the eight Phase-01 and Phase-02 rows at time of checking; **none of the four below**.

## THIS PHASE: exactly four NEW rows, in order

| album_id (EXACT) | Title (exact catalogue casing) | Year | Type |
|---|---|---:|---|
| `pinodaniele-medina` | Medina | 2001 | studio |
| `pinodaniele-passidautore` | Passi d’autore | 2004 | studio |
| `pinodaniele-iguanacafelatinbluesemelodie` | Iguana cafè – Latin blues e melodie | 2005 | studio |
| `pinodaniele-ilmionomeepinodanieleevivoqui` | Il mio nome è Pino Daniele e vivo qui | 2007 | studio |

**Catalogue additions:** NONE. All four titles, years and IDs already exist in `src/data/catalog.ts`. Do not add duplicates or rename any ID. Album billing: the official 2004 sleeve is **Pino Daniele Project — Passi d’autore**, while the Fandome catalogue attributes the album to **Pino Daniele**. Project is a moniker, not an additional co-billed artist. **Co-billed multi-artist albums: none** in this phase; guest features (99 Posse, Faudel, Salif Keita, Lotfi Bushnaq, Giorgia) do not count as co-billing.

## Tokens Claude may need to add before validation

**Genres** (lowercase letters only; evidence is included in per-genre CSV):
- `rai` — Algerian raï music; explicitly identified by OndaRock for *Medina*, track *Galby*. Suggested parent: `worldmusic|arabicmusic`.
- `madrigal` — polyphonic Renaissance-style madrigal; original hidden Gesualdo piece on *Medina* and explicitly named choral style in *Passi d’autore*. Suggested parent: `classical|vocaljazz` (Claude should select only supported genre families; probably `classical`).
- `latinblues` — **artist's self-description** in the subtitle of *Iguana cafè – Latin blues e melodie*. Suggested parents: `latin|blues`. **Critics dispute whether blues is audible at all**; the tag has low order, not falsely presented as consensus.

**Instruments** (exactly documented on these recordings):
- `baglama` — Omar Faruk Tekbilek's baglama on *Medina*, a specific long-necked lute within the saz family. Keep the exact credit rather than silently reducing it to the broader `saz` token.
- `zurna` — Tekbilek's double-reed wind instrument on *Medina*.
- `riqq` — Hamadi Ben Mabrouk's Arabic frame-drum/tambourine on *Medina*.
- `tammorra` — Corrado Ferrari's Italian frame drum on *Il mio nome è Pino Daniele e vivo qui*, track 10.
- `ztar` — Colasanti on *Passi d’autore* (track 1) and *Iguana cafè*; **already proposed by Phase 04**, verify whether importer has created this token. It is a particular electronic performance instrument, **not** automatically `keytar` or `guitarsynth`.

**Normalizations to existing tokens:** source *vibes/marimba* → `mallets`; *canun* → `qanun`; *nay* → `ney`; *darbuka* → `gobletdrum`; *bendir* → `framedrum`. Do not conflate new baglama with every generic saz or riqq/tammorra with generic instruments when precise credit exists.

**New production tokens:** none (`programming`, `digitalediting`, `choirvocals`, `stringarrangements`, `liverecording` are all present). No uncredited machine model inferred from genre or era.

## Skipped, never repeat

- **Already in LIVE GitHub CSV:** `Terra mia` (1977), `Pino Daniele` (1979), `Nero a metà` (1980), `Vai mò` (1981), `Bella ’mbriana` (1982), `Musicante` (1984), `Ferryboat` (1985), `Bonne soirée` (1987).
- **Already delivered independently, whether or not imported yet:** phases 03 and 04, including `Le vie del Signore sono finite`, `Schizzechea with Love`, `Mascalzone latino`, `Un uomo in blues`, `Che Dio ti benedica`, `Non calpestare i fiori nel deserto`, `Dimmi cosa succede sulla terra`, and `Come un gelato all’equatore`. **Do not reproduce them here.**
- **Not priorities under owner rule:** *Sotto ’o sole* (1991, anthology), *Ricomincio da trenta* (2008, compilation), Medina Tour / In Tour live records and other concert releases.

## Caveats / exact credits

- *Medina* has 12 printed tracks **plus one unlisted Gesualdo da Venosa madrigal**. One-track sounds-like fraction uses 13 performed pieces (if importer instead treats only 12 indexed songs, adjust to `[1/12]` consistently; do not duplicate the hidden piece). **Producers Pino Daniele and Mike Mainieri**, the latter credited co-producer on exactly eight tracks. No guest is a producer merely for singing.
- *Passi d’autore* (2004) is a studio record under an artist-project title, not a live album; Pino alone is explicitly producer. Gianluca Podio arranged/led the classical voices and strings, **not** co-producer. A Django Reinhardt song adaptation is a cover, *not* musical influence; Dire Straits similarity comes from a critic's guitar comparison on **one of 14 tracks**.
- *Iguana cafè*: Pino produced; Podio only arranged; **Ferdinando Salzano and Alex Daniele are executive producers** and are excluded. Two famous cover versions do not create influence links. `latinblues` and `blues` deliberately late/contested because two independent critics dispute the album's blues content.
- *Il mio nome è Pino Daniele e vivo qui*: Pino sole producer; source says some studio tracks performed live together: `liverecording` does **not** mean a concert release. DeBaser reviewer names a Cuban-style brass section but no brass players are in the abbreviated official credits: `brass` is **auditory critic evidence**, **not** an invented instrumentalist. Official notes mention string arrangements but not performing string players: do not add `strings` instrument. Three critics' single-track comparisons are fractional; not artist influences.
- **Album-specific `influenced_by` intentionally empty on all four**: the named guests, cover writers, onstage collaborators, text-only homages and social inspirations do not qualify. Global **ARTIST INFLUENCES** are a Phase-01-only deliverable, not repeated.
- `landmark=0` across phase 05; even positive reviewers speak of ambition or comeback, not defining a genre or the whole career. `confidence=high` because independent reviews and exact official credits corroborate values, with disagreements recorded.
- The four `.csv` metadata files plus rows cover **every row's genres, eight scales, instruments, production, producers and caveats**. No source is Wikipedia.

## Exactly six files in this ZIP

1. `CLAUDE_IMPORT.md`
2. `pinodaniele_phase05_rows_ONLY.csv`
3. `pinodaniele_phase05_sources.csv`
4. `pinodaniele_phase05_genre_evidence.csv`
5. `pinodaniele_phase05_evidence-notes.md`
6. `pinodaniele_phase05_catalog-audit.csv`

## NEXT — Phase 06 (not here)

Chronological remaining studio/important EPs: **Electric Jam (2009, EP or studio mini-album; determine release classification and length from original label pages), Boogie Boogie Man (2010), La grande madre (2012)**. Check source and catalogue IDs again before Phase 06, never import another live/compilation release by default.

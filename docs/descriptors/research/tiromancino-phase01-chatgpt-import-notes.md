# Tiromancino — Fandome phase 01 import

**Researched to:** 27 October 2026. **Artist ID:** `tiromancino`. **Status:** all `draft`.
**GitHub baseline:** `descriptors` branch, read-only; `src/data/catalog.ts`; no `docs/descriptors/tiromancino.csv` found.

## Contents of this strictly incremental ZIP

- `tiromancino_phase01_rows_ONLY.csv`: 27-column header plus **4 new rows only**.
- `tiromancino_phase01_sources.csv`: **25** album-level source links and what they support.
- `tiromancino_phase01_genre_evidence.csv`: **35** per-genre source/scope observations.
- `tiromancino_phase01_evidence-notes.md`: field reasoning and critical disagreements.
- `tiromancino_phase01_catalog-audit.csv`: entire known studio sequence, currently catalogued versus missing, exclusions.

## Phase 01 album IDs

1. `tiromancino-tiromancyno` — *Tiromancyno* (1992; studio; **ADD**)
2. `tiromancino-insisto` — *Insisto* (1994; studio; **ADD**)
3. `tiromancino-alonealieno` — *Alone alieno* (1995; studio; **ADD**)
4. `tiromancino-rosaspinto` — *Rosa spinto* (1997; studio; **ADD**)

### Catalogue additions (phase 01)

Add the four studio-album tuples above **before validating**. Their IDs follow `tiromancino-` + normalized original title.

**Important naming note:** The original 1992 album was released as **Tiromancyno** and the group was then credited as Tiromancyno. The current official website re-labels it *Tiromancino*, while MusicBrainz and histories preserve the original spelling. Import the original title `Tiromancyno` and retain the artist room `Tiromancino` / `tiromancino`; do not create a separate artist.

## Other studio-album gaps found (future phases, no rows delivered here)

- `tiromancino-illusioniparallele` — *Illusioni parallele* (2004, studio)
- `tiromancino-lessenziale` — *L’essenziale* (2010, studio)
- `tiromancino-indaginesuunsentimento` — *Indagine su un sentimento* (2014, studio)
- `tiromancino-nelrespirodelmondo` — *Nel respiro del mondo* (2016, studio)
- `tiromancino-finoaqui` — *Fino a qui* (2018, studio / new recordings, mixed retrospective format)
- `tiromancino-hocambiatotantecase` — *Ho cambiato tante case* (2021, studio)
- `tiromancino-quandomenomeloaspetto` — *Quando meno me lo aspetto* (2026, studio; released February 2026)

Other already-catalogued studio entries: *La descrizione di un attimo* (2000), *In continuo movimento* (2002), *L’alba di domani* (2007). The audit includes all.

## Co-billed albums

**None identified in phase 01.** Daniele Silvestri's participation in *Rosa spinto* is as writer/performer on individual tracks, NOT co-billed album credit, producer credit, or evidence of artistic influence. No `coBilled.ts` entry proposed.

## New genre, instrument, production tokens

**None.** Every token in this phase occurs in the repository's existing lists.

## ARTIST INFLUENCES (phase 01 ONLY; direct evidence)

These are **career-level inspirations named by Federico Zampaglione**, not claims of specific album influence:

- **Pino Daniele:** Zampaglione calls him one of his musical reference points and describes evenings playing blues together. [Interview, Virginia Maresca, MyDreams, 21 Jan 2019](https://www.mydreams.it/intervista-federico-zampaglione-sara-un-tour-in-cui-si-potra-apprezzare-il-mio-lato-chitarristico/).
- **Lucio Battisti:** Zampaglione explicitly says he listened to Battisti and that traces of earlier music may echo in Tiromancino compositions. [Carlo Capalbo interview, MadMass, 27 Jun 2024](https://www.madmass.it/the-well-intervista-al-regista-federico-zampaglione-lhorror-piu-sanguinolento-tra-quelli-realizzati/).
- **Lucio Dalla:** Same direct statement about records that formed his musical background. [MadMass interview](https://www.madmass.it/the-well-intervista-al-regista-federico-zampaglione-lhorror-piu-sanguinolento-tra-quelli-realizzati/).
- **Eric Clapton:** Names *Just One Night* as the record that made a formative impression. [Demented Burrocacao interview, Rolling Stone Italia, 16 Oct 2021](https://www.rollingstone.it/musica/interviste-musica/testaccio-blues/590080/).
- **Jimi Hendrix:** Says Hendrix was important to his early listening and blues guitar interests. [Rolling Stone Italia interview](https://www.rollingstone.it/musica/interviste-musica/testaccio-blues/590080/).

Zampaglione also explicitly **rejects** straightforward imitation of Massive Attack, Oasis, Blur, Nirvana, Alice in Chains and Tricky. [Rolling Stone Italia interview](https://www.rollingstone.it/musica/interviste-musica/testaccio-blues/590080/). Do not use these as autobiographical `influenced_by` entries solely because journalists compare the sounds.

## Date, producer and recording caveats

- **1992 title:** *Tiromancyno* is the original title; modern band site lists *Tiromancino*. The 2008 *Le origini* is archival, not a new original studio album.
- **1992 production:** Stefano Borzi is credited in secondary release metadata, but original sleeve is not inspected; the **low** confidence row keeps only synthesizer as review-supported instrument and no specific production process.
- **1994 production:** no independently verified record producer; `producers` is **empty**. Keyboard model/recording machine unknown. `falsetto` is supported by critics' album discussion, not a claim that the lead always uses falsetto.
- **1995 production:** AllMusic explicitly credits Francesco Zampaglione as producer plus sampling and drum programming. No sampler model is reliably identified. VICE compares a sound with MS-20, **not** a confirmed Korg MS-20 credit; omit the device. Sampled clarinet is a sound on *Resto qui*, not proof of a session clarinetist.
- **1997 production:** a release summary says Pietro Micioni produced/mixed the LP at Gimmick; AllMusic credits the band as producer and drum programmer. Both production credits are provisionally retained, to be confirmed against the sleeve. Do not add Sinigallia, who is central to the **next** album, not this one.
- **1997 year:** Official Tiromancino site says 1997; Rockol and some secondary discographies say 1998. Use 1997, flag contradiction.
- **1997 language:** mainly Italian with an English-language song *Dying Again*. Notes explain `it|en`.
- **2018 classification:** *Fino a qui* features new recordings of earlier songs plus four new songs; audit leaves it studio with a prominent caveat for Claude to reconcile its hybrid type.

`notes` values are written anew and no longer than 15 words. Instrument and production cells contain only explicitly album-specific source-backed tokens. Blank cells are intentional, not zeroes.

## What phase 02 will contain (no overlaps)

1. `tiromancino-ladescrizionediunattimo` — *La descrizione di un attimo* (2000) **already catalogued**
2. `tiromancino-incontinuomovimento` — *In continuo movimento* (2002) **already catalogued**
3. `tiromancino-illusioniparallele` — *Illusioni parallele* (2004) **ADD**
4. `tiromancino-lalbadidomani` — *L’alba di domani* (2007) **already catalogued**

Import only current phase rows and audit other future releases separately. Do not re-import phase 01 in phase 02.

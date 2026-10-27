# CLAUDE_IMPORT — The Notwist / Phase 01

Date: 2026-10-27. Research is read-only against `descriptors`; **no GitHub writes**.

## Phase contents (strictly incremental)
- `notwist-thenotwist` — *The Notwist* (1991), studio
- `notwist-nook` — *Nook* (1992), studio
- `notwist-12` — *12* (1995), studio

The first two LPs and *12* do **not** already exist in the published Fandome `catalog.ts` (which begins with *Shrink*, 1998); `docs/descriptors/notwist.csv` is absent as checked on 2026-10-27. Import ONLY these 3 rows in Phase 01.

## Albums to add to catalogue
**Import prerequisites:** the three above. Exact suggested IDs: `notwist-thenotwist`, `notwist-nook`, `notwist-12`. The first has a **year dispute:** artist/label Bandcamp claims Jan 1, 1991; original-listing AllMusic and Deutschlandfunk treat it as 1990, and Amoeba's Subway CD says 30 Sep 1991. Provisional 1991 follows the band's own release chronology; resolve physical original Subway LP issue evidence before locking original date. Do not silently adjust the year.

**Later recorded works missing from catalog:** `notwist-sturm` — *Sturm* / *Music for “Storm”* (2009), soundtrack; `notwist-themessierobjects` — *The Messier Objects* (2014 or 2015, verify issue chronology), soundtrack/score compilation, check eligibility because previously existing score cues may be collected; `notwist-newsfromplanetzombie` — *News from Planet Zombie* (2026), studio, released 13 Mar 2026. The catalog audit records release/type caveats. Do not add these to Phase 01 rows.

The 2003/2004 *Different Cars and Trains* EP/remix record may be eligible only if its distinctive remixes merit landmark status; not yet selected. *Magnificent Fall* (2025) is categorized as a compilation; leave out. No live records, reissues, bonus remixes, or re-recordings are included.

## Co-billed albums
None in Phase 01. The band may have distinct collaborations under other projects; do not assume these are co-billed Notwist albums.

## New controlled-vocabulary tokens
- **Genre:** `hardcorepunk` — directly reflects hardcore punk (not the separate existing `hardcore` style). Add to `src/data/scenes.ts` / genre family taxonomy before validation.
- **Instrument:** `bassclarinet` — specific credited instrument played by Rudi Mahall on *12*. Preserve the distinct bass-clarinet identity; do not flatten to generic clarinet. Add to `src/data/instruments.ts`.
- **Production:** none.

## ARTIST INFLUENCES — Markus Acher's named influences (artist-wide; Phase 01 only)
These are musician statements, **not** lists of former collaborators and not automatic evidence of influence on every particular album:
- **Dinosaur Jr.** — Acher explicitly calls *You're Living All Over Me* formative and an inspiration for forming The Notwist. [Pitchfork](https://pitchfork.com/features/interview/6873-the-notwist/) and [15 Questions](https://15questions.net/interview/fifteen-questions-interview-notwist/page-1/).
- **Neil Young** — Acher says he mixed Neil Young's melodic approach with US hardcore. [Pitchfork](https://pitchfork.com/features/interview/6873-the-notwist/).
- **Jerry's Kids** and **Minor Threat** — named by Acher as direct models for fast sections of the band's early music. [Pitchfork](https://pitchfork.com/features/interview/6873-the-notwist/).
- **Rites of Spring**, **Moving Targets**, **Wipers**, **Pitchfork (the band)**, **Sonic Youth** — Acher's firsthand account of formative hardcore/post-hardcore. [15 Questions](https://15questions.net/interview/fifteen-questions-interview-notwist/page-1/).
- **Hüsker Dü** — listed among the band's formative hardcore influences by Acher. [Los Angeles Times, interview](https://www.latimes.com/archives/la-xpm-2003-jul-06-ca-bemis6-story.html).
- **Talk Talk (late period)** — Acher specifically identifies *Spirit of Eden* and *Laughing Stock* as decisive before *12*. [Rock Obrobje, Slovenian interview](https://www.rockobrobje.com/intervju-markus-acher-the-notwist/) and [The Skinny](https://www.theskinny.co.uk/music/interviews/the-notwist-do-the-evolution).
- **Stereolab**, **Autechre**, **Can**, **Neu!**, **Gil Evans** — Acher directly lists these as enduring, later-career influences. [The Skinny](https://www.theskinny.co.uk/music/interviews/the-notwist-do-the-evolution).
- **Mike Oldfield**, **The Police**, **Billy Cobham** — Acher identifies these as teenage models before the band's hardcore period. [15 Questions](https://15questions.net/interview/fifteen-questions-interview-notwist/page-1/).

## Research and validation caveats
- Lyrics themes are blank on all three albums: titles and musical affect are not enough to prove lyrical themes. Other parameters are album-specific critical judgments and explained in evidence notes.
- Instruments reflect *original recording credits*, not the current 2026 live lineup in Bandcamp profile metadata. In particular, the founder-era drummer was Martin Messerschmid, not Andi Haberl.
- Producer for *12*: O.L.A.F. Opal is directly described by Markus Acher as producing from the third LP onward; Mario Thaler is credited as recording and assisting with sampling, but his producer credit is not independently established here, so do **not** include as a co-producer by inference.
- 1995 *12* original nine-track edition only. Some later regional editions bundle *Nook* remixes, which should not distort this album's descriptor.
- `sounds_like` is an informed comparison, not verified actual influence. Sources distinguish them; only Acher's documented accounts appear in `influenced_by`.
- The band's Bandcamp catalogue-wide tags (`indie pop`, `electronic`, etc.) **do not qualify as album-specific genre evidence** for their early records.
- An early *Nook*-era experiment with tapes does not establish tape-effects processing on the released album; that production field is blank. The specific Akai sampler model used on *12* is not established by record-specific evidence, so only generic `sampler` and `sampling` are supplied.

## Next: Phase 02
**Shrink (1998), Neon Golden (2002), The Devil, You + Me (2008)** — three new rows only; not the Phase 01 files again.

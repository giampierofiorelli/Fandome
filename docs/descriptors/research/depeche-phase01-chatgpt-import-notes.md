# CLAUDE IMPORT — Depeche Mode, Phase 01

Prepared 2026-10-27. Branch checked: `descriptors` (read only). **Incremental import: FOUR new rows only.** No files in this ZIP should overwrite an existing artist's data.

## Artist creation is a prerequisite

`src/data/catalog.ts` has **no Depeche Mode artist row**. Proposed stable ID: **`depechemode`**. Add the artist itself, with display name **Depeche Mode**, before importing the new album IDs; otherwise the descriptor validator will fail on an unknown artist. All dates refer to original UK studio editions, not reissues. There was no `docs/descriptors/depechemode.csv` as checked on this branch. `docs/descriptors/research` also has no existing Depeche Mode research files.

## Phase 01, import in this order

| album_id | title | year | type | catalogue |
| --- | --- | ---: | --- | --- |
| `depechemode-speakspell` | Speak & Spell | 1981 | studio | ADD |
| `depechemode-abrokenframe` | A Broken Frame | 1982 | studio | ADD |
| `depechemode-constructiontimeagain` | Construction Time Again | 1983 | studio | ADD |
| `depechemode-somegreatreward` | Some Great Reward | 1984 | studio | ADD |

All four IDs are `depechemode-` + title lowercased with non-alphanumeric characters removed. Add those album entries to `catalog.ts` **before** validating the imported four descriptor rows. Source-of-truth for the first three UK editions: Depeche Mode official Archives; fourth: original Mute sleeve credits and official discography directory. Audit CSV also lists the future phases so the entire 15-studio-album discography is visible.

## New controlled vocabulary

**Genres to add** (source explicitly uses term, and absent from current `scenes.ts`):

- `minimalwave`: A Broken Frame, secondary album-level classification from Album of the Year (`https://www.albumoftheyear.org/album/5352-depeche-mode-a-broken-frame.php`). Editorial caveat: this is a modern retrospective genre label.
- `electrodub`: A Broken Frame, **only 'Satellite'**, from Apple Music's description (`https://music.apple.com/us/album/a-broken-frame-deluxe/665404834`). Track-level genre placed last, not a claim about the whole album.

**Instruments:** no new tokens. **Production:** no new tokens. `ppgwave`, `synclavier`, `emulator`, `emulatorii`, `tr808`, `arp2600` already exist in the project's **production** list. `emulator` = original E-mu Emulator on *Construction Time Again*; `emulatorii` = successor documented for 1984 sessions, **do not merge**. Note that `synth`/`sampler`/`sequencer` occur in **instruments** (rather than production).

## Co-billed records

None in this phase. No co-billing map changes are required.

## ARTIST INFLUENCES (Phase 01 only)

These are **career/formative influences** with a named group member or first-hand producer account. They are distinct from album-specific `influenced_by` and merely sonic `sounds_like` fields.

| Influence | First-hand attribution | Source |
| --- | --- | --- |
| **Kraftwerk** | Daniel Miller recalls that Depeche Mode shifted to synths in part from listening to Kraftwerk; Vince Clarke also selected *Computer World* among formative LPs. | [MusicRadar original Miller quotation](https://www.musicradar.com/artists/depeche-mode-get-enough-repub-synth-week); [Clarke to The Quietus, 2013](https://thequietus.com/interviews/bakers-dozen/vince-clarke-erasure-favourite-albums/) |
| **The Human League** | Martin Gore explicitly remembered their early albums and live staging as inspiring his interest in electronic music; Clarke confirms admiration for their synth-driven production. | [Gore at Moogfest 2019](https://parklifedc.wordpress.com/2019/04/30/interview-martin-gore-of-depeche-mode-in-conversation-with-daniel-miller-of-mute-records-moogfest-2019-4-26-19/); [Clarke in Tape Op #150](https://tapeop.com/interviews/150/vince-clarke) |
| **Orchestral Manoeuvres in the Dark (OMD)** | Gore names OMD as part of the scene that led him to electronic music; Clarke specifically discusses the simplicity of OMD's debut as a production influence. | [Gore at Moogfest 2019](https://parklifedc.wordpress.com/2019/04/30/interview-martin-gore-of-depeche-mode-in-conversation-with-daniel-miller-of-mute-records-moogfest-2019-4-26-19/); [Clarke in Tape Op #150](https://tapeop.com/interviews/150/vince-clarke) |
| **David Bowie** | Dave Gahan describes Bowie's records, persona and stage work as formative; he states Bowie remained meaningful for both himself and Gore. | [Gahan interview, Rolling Stone (2017)](https://au.rollingstone.com/music/music-news/depeche-modes-dave-gahan-on-urgent-new-spirit-lp-david-bowie-influence-1639/) |

**Do not promote a likeness or a collaborator to a documented influence.** In particular, the Martin Gore interview with ABC/Double J says the group were *accused* of following Einstürzende Neubauten but he disputed imitation; that name appears here only in editorial `sounds_like`, not `influenced_by`. The record's album-specific influence field is deliberately blank when direct evidence is lacking. The original Vince Clarke-led 1981 debut has the strongest specific precedents; later career influences should not automatically be backfilled into the four album rows.

## Caveats for Claude

- **Credits**: *Construction Time Again* credits Gareth Jones as **tonmeister / engineer**, **not a producer**; his first co-production credit is *Some Great Reward* (1984). Do not put him in 1983 `producers`.
- *A Broken Frame* (1982) is the only three-member album; **Alan Wilder does not perform on it**, even though he was already playing live. He first appears on the 1983 studio record.
- Some secondary sites disagree on the original *Speak & Spell* issue date. Use the official Mute UK LP entry **5 October 1981**, not later US listings or 2006 deluxe dates; year does not change.
- US *Speak & Spell* includes `Dreaming Of Me` in place of `I Sometimes Wish I Was Dead`; the original UK LP determines evidence and main descriptors. *A Broken Frame* US LP adds an instrumental. Avoid treating the editions as separate albums.
- Specific 1981 synthesiser models are disputed among equipment retrospectives; **do not** add Kawai/Yamaha/Roland models to production from an unverified session association. The debut's ARP 2600 and synthesised drums are more securely attested.
- A marching sound on *A Broken Frame* is documented as a live in-studio recording, but evidence for **digital sampling on that album** conflicts with Miller's account that their main sampling breakthrough arrived in 1983; consequently `sampling` is **blank/omitted** in that row.
- The *Some Great Reward* `emulatorii` attribution is supported by Gareth Jones' engineer account of the 1984 *People Are People* session; distinction from the older `emulator` on 1983 is intentional. If Claude finds contrary dated session logs, remove this model rather than silently swap devices.
- AllMusic's umbrella tags (`collegerock`, `alternativeindierock`, `alternativepoprock`, `dancerock`) are **its metadata labels**, not proof of a guitar-heavy sound. Genre evidence CSV labels these weak/secondary; the first genre always carries strongest weight.
- The 1984 *People Are People* US-only compilation is not part of the 15-studio-album sequence and has not been selected as a standalone landmark; the song appears on *Some Great Reward*. Likewise exclude *Catching Up With Depeche Mode* (1985 US compilation), ordinary video/live releases, reissues, 12-inch singles boxes and deluxe discs.
- Only the exceptional live album *101* is selected for the later roadmap. Two remix anthologies are selected for substantive collaboration/legacy; classify as `remix` rather than counting as new studio albums. `The Singles` anthologies are `compilation`.
- **No unissued future albums included**. The most recent released studio album in this set is *Memento Mori* (2023). The 2025 *Memento Mori: Mexico City* is a live release and excluded under the landmark-only live rule.

## Follow-on phases (planned, 4 albums each)

**Phase 02:** *The Singles 81–85* (1985, compilation), *Black Celebration* (1986), *Music for the Masses* (1987), *101* (1989, landmark live).  
**Phase 03:** *Violator* (1990), *Songs of Faith and Devotion* (1993), *Ultra* (1997), *The Singles 86>98* (1998, compilation).  
**Phase 04:** *Exciter* (2001), *Remixes 81–04* (2004, remix), *Playing the Angel* (2005), *Sounds of the Universe* (2009).  
**Phase 05:** *Remixes 2: 81–11* (2011, remix), *Delta Machine* (2013), *Spirit* (2017), *Memento Mori* (2023).

The later-phase exception inclusions (compilations/remixes/live) are **editorial proposals**, to be re-audited against significance and original credits when their phase is researched. They are **not** rows in this phase.

## Files delivered

- `depechemode_phase01_rows_ONLY.csv` — 27 exact columns and four new rows.
- `depechemode_phase01_sources.csv` — album-level sources and the explicit values they support.
- `depechemode_phase01_genre_evidence.csv` — every genre linked to an album/source and scope.
- `depechemode_phase01_evidence-notes.md` — per-album reasoning, strengths, limits and disagreements.
- `depechemode_phase01_catalog-audit.csv` — original-year catalogue check for 20 selected future records, each currently absent.

Import four rows after creating the artist and corresponding first four album entries, register the two new genres, then run the project's official validator. All source URLs were located through public research; some publishers (particularly AllMusic and Sound on Sound) may intermittently block automated fetching while remaining usable as normal web pages.


## Claude import note (Oct 2026)
- The artist already exists as `depeche` (seed.ts), not `depechemode`: rows imported as `depeche-<slug>`. Existing ids for later phases: `d-masses` (Music for the Masses), `d-violator`, `d-sofad` (Songs of Faith and Devotion), `d-memento` (Memento Mori); the other studio albums were added as `depeche-blackcelebration`, `depeche-ultra`, `depeche-exciter`, `depeche-playingtheangel`, `depeche-soundsoftheuniverse`, `depeche-deltamachine`, `depeche-spirit`.
- Speak & Spell: Gary Numan removed from `influenced_by` (only source is a gear retrospective; stays in `sounds_like`).
- Scope (owner): compilations and live albums are not a priority; The Singles 81–85 / 86>98, 101 and the Remixes sets proposed for later phases are not to be researched for now. Studio albums only.

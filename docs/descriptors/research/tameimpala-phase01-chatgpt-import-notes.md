# Fandome — Tame Impala — Phase 01

**Repository**: `giampierofiorelli/Fandome`, read-only research against branch `descriptors`, 2026-10-26.  
**Artist**: `Tame Impala`; canonical Fandome artist ID `tameimpala` (found in `src/data/catalog.ts`).  
**CSV contract**: 27 columns, `status=draft`; every file in this ZIP is incremental to this phase only.  
**Prior artist descriptor**: `docs/descriptors/tameimpala.csv` returned 404 when checked; no rows are repeated.

## Import exactly these four records

| album_id | title | year | type | catalogue |
|---|---|---:|---|---|
| `tameimpala-tameimpala` | Tame Impala | 2008 | ep | **ADD** |
| `tameimpala-innerspeaker` | Innerspeaker | 2010 | studio | present |
| `tameimpala-lonerism` | Lonerism | 2012 | studio | present |
| `tameimpala-currents` | Currents | 2015 | studio | present |

**To add to `catalog.ts`**: `['Tame Impala', 2008]` for the breakthrough Modular EP. The artist room itself already exists. Five studio albums were already listed in the catalogue; only the 2008 EP is newly added. Ensure the corresponding derived seed entry / release ID is built before validator runs.

**Not in this import**: 2008 `H.I.T.S. 003` (short early EP, not independently established as landmark); other single-track singles; `Live Versions` (2014), other live albums, anniversary/reissue tracks and remix collections. Neither soundtrack appearances nor Parker's guest/producer credits on other artists' releases are Tame Impala albums. The *2008 self-titled EP* appears with **four tracks at AllMusic and six at Apple Music/MusicBrainz**. Use the original six-track Modular programme for reference; do not treat alternate/earlier configurations as extra albums with this title. EP release listings differ by territory: use 2008.

## New tokens requiring Claude import

These are meaningful source-specific labels not present in the current `scenes.ts` Genre union / `production.ts` at research time. **Add each to the corresponding Genre family map or production labels before running the validator**:

- **Genres**: `garagerockrevival` (Garage Rock Revival; *Innerspeaker* secondary), `paisleypop` (Paisley Pop; *Innerspeaker* texture), `spacerockrevival` (Space Rock Revival; *Lonerism* texture), `heavypsych` (Heavy Psych; *Lonerism* minority). `psychedelicrock` and `neopsychedelia` are already allowed tokens.
- **Production**: `sequentialproone` (Sequential Circuits Pro-One, *Lonerism*), `rolandjv1080` (Roland JV-1080, *Currents*), `rolandgr55` (Roland GR-55 guitar synthesizer, *Currents*, specifically “The Less I Know the Better”), `sequentialdrumtraks` (Sequential Circuits DrumTraks, *Currents*). Existing `juno106` and `ableton` must not be conflated with these.
- **Instruments**: no new tokens. `guitarsynth` is the supported instrument token for the GR-55 played via a guitar. A guitar-synth patch described as simulated bass/organ does not establish recording of a separate physical bass guitar or organ on that track.

## Co-billed records

None in this phase. Albums are credited to Tame Impala (the recording project of Kevin Parker). Musicians joining the live group or credited with individual instrument tracks do not turn a Tame Impala album into a co-billed release.

## ARTIST INFLUENCES — sources naming musical or creative influence on Parker's work (Phase 01 only)

This section is **artist-wide**, not the `influenced_by` field of every album. Distinguish a favourite or a dream collaborator from a documented influence.

| Artist | Evidence and degree of connection | Source |
|---|---|---|
| **Air** | Parker directly chooses *Talkie Walkie* as **the record that influenced Tame Impala's sound**; its layered electronic-orchestra approach expanded his production imagination. | [The Guardian, Kevin Parker: soundtrack of my life (2013)](https://www.theguardian.com/music/2013/apr/28/kevin-parker-soundtrack-my-life) |
| **My Bloody Valentine** | Parker says he has long loved their enveloping wall-of-sound technique and was pursuing melancholy/dreaminess by the *Innerspeaker* period. | [Los Angeles Times artist interview (2010)](https://www.latimes.com/archives/blogs/pop-hiss/story/2010-06-29/tame-impalas-kevin-parker-discusses-his-bands-success-origins-and-impressions-of-california) |
| **The Flaming Lips** | Parker explicitly identifies the band as a major influence, including the affective effect of their concerts. | [i-D artist interview](https://i-d.co/article/tame-impalas-kevin-parker-on-the-shows-that-changed-his-life/); [Jambands artist interview (2015)](https://jambands.com/features/2015/07/14/riding-the-currents-with-tame-impala/2/) |
| **Supertramp** | Parker discusses them among his influences in the 2013 Sound Opinions interview; separately lists their music among lifelong listening favourites. | [Sound Opinions (2015 rebroadcast of 2013 interview)](https://soundopinions.org/show/503/); [Pitchfork Guest List (2010), favourites only](https://pitchfork.com/features/guest-lists/7822-tame-impala/) |
| **The Doors** | Parker explicitly describes the group's live improvisational connection as a major formative influence on his perception of musical interplay. | [Jambands interview (2015)](https://jambands.com/features/2015/07/14/riding-the-currents-with-tame-impala/2/) |
| **Blue Cheer** | Parker directly links his earlier heavy 1970s rock compositions and 2008 EP's “Half Full Glass of Wine” period to Blue Cheer-style music. | [Los Angeles Times (2010)](https://www.latimes.com/archives/blogs/pop-hiss/story/2010-06-29/tame-impalas-kevin-parker-discusses-his-bands-success-origins-and-impressions-of-california) |
| **Bee Gees** | Parker explicitly recounts how hearing them provoked his move toward the dance-oriented music heard on *Currents*. | [NME reporting Parker interview (2015)](https://www.nme.com/news/music/tame-impala-45-1222411) |

**Do not automatically assign all of these to every album's `influenced_by`.** *Currents*→Bee Gees and *Innerspeaker*→My Bloody Valentine are direct or contemporaneous album/sonic-direction links. *Lonerism* has an intentional blank in the influence column because broad career influence and critical resemblance do not demonstrate a specific compositional debt for that album. Comparisons to the Beatles, MGMT, Daft Punk or Prince belong in `sounds_like` unless causation is sourced.

## Production and interpretation caveats

1. **Fridmann is not a credited producer** on *Innerspeaker* or *Lonerism*. He mixed both; Kevin Parker produced them. One contemporary review describes the second LP as “produced by” Fridmann, but detailed release credits and Parker's account contradict that shorthand. The CSV uses `Kevin Parker` only.
2. **Studio Tame Impala is not equivalent to the touring band**. Parker mostly recorded alone. Some guests played on individual *Innerspeaker* tracks; Jay Watson is explicitly credited on *Lonerism* for piano and keyboards. List the instruments, but do not invent co-producer credits.
3. **Innerspeaker has synth-like guitars, not synthesizers credited as its core instruments.** Parker reports deliberately using electric guitar and effects in place of keyboards and synths. Exact hardware recording channel/recorder configuration differs in retellings; no disputed recorder model has been encoded.
4. **Lonerism**: Parker reports a Juno-106, Sequential Pro-One and Ableton. Dave Fridmann was the mixer; words like “computerised” in reviews are sonic impressions, not proof of a particular plug-in or synth model.
5. **Currents**: Parker used the Roland GR-55 on “The Less I Know the Better,” yielding modelled bass/organ-like sounds; do not register a separate bass-synth or keyboard used on that track from its patch names. Other Currents songs contain real drums, bass, analogue synths and sampled/drum-machine layers. Roland JV-1080 and Sequential DrumTraks are supported by the AudioTechnology interview.
6. **Genres**: the supplied per-genre evidence distinguishes whole-album, limited-track and production-texture usage. Genre labels such as `yachtrock`, `discorock`, `dancepop` are *minorities* on Currents and appear after its principal psychedelic pop/synthpop/disco genres. `synthpop` is not `electropop`; both are sourced independently. No count limits apply except `notes` (15 words).
7. **EP song overlap**: “Desire Be Desire Go” appears in variant recordings on the 2008 EP and *Innerspeaker*, but these are distinct releases and are not treated as duplicated descriptor rows.
8. **Date cutoff**: 26 October 2026. The latest full-length in catalog is *Deadbeat* (2025), already out; no unreleased releases included.

## Next phase

**Phase 02**: *The Slow Rush* (2020) and *Deadbeat* (2025). The five studio albums and breakthrough EP will then be covered. No live, greatest-hits or remixed-reissue releases are planned.

## Files in the ZIP

- `tameimpala_phase01_rows_ONLY.csv`: four 27-column new rows only;
- `tameimpala_phase01_sources.csv`: source register with working public links;
- `tameimpala_phase01_genre_evidence.csv`: one source reference per genre per release and scope;
- `tameimpala_phase01_evidence-notes.md`: why each field was set, uncertainty, critical disagreements;
- `tameimpala_phase01_catalog-audit.csv`: current catalogue and required add;
- `CLAUDE_IMPORT.md`: this import brief.

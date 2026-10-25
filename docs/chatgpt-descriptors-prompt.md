# Prompt for ChatGPT: album descriptors (same prompt for every artist)

Copy everything between the lines into a new ChatGPT chat. Change only the last line (the artist). For the next artist in the same chat, just write: "Next artist: <name>".

---

You are a music researcher for Fandome, an independent social network for music fans (site: https://giampierofiorelli.github.io/Fandome/). You describe albums with researched, sourced data that powers explainable recommendations ("if you like this album…"). You work artist by artist, always with the same rules and the same deliverables. These instructions apply to every artist I give you, now and later in this chat.

READ FIRST (GitHub, branch "descriptors", read only)
- Guide (columns, scales, anchors, id rule, allowed values): https://github.com/giampierofiorelli/Fandome/blob/descriptors/docs/album-descriptors-guide.md
- Genre list: https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/scenes.ts (the Genre type); genre families: https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/genreFamilies.ts
- Instrument list: https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/instruments.ts
- Production list: https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/production.ts
- Album catalogue (artist ids, existing albums): https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/catalog.ts
- Co-billed albums: https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/coBilled.ts
- Validator: https://github.com/giampierofiorelli/Fandome/blob/descriptors/scripts/validate-descriptors.ts
- Finished descriptor files (format, avoid repeats): https://github.com/giampierofiorelli/Fandome/tree/descriptors/docs/descriptors
- Research files from earlier batches (examples): https://github.com/giampierofiorelli/Fandome/tree/descriptors/docs/descriptors/research
If a link doesn't open, say so and use the rules below.

FOR EACH ARTIST
1. Find the artist's Fandome id in catalog.ts (e.g. ['trentemoller', 'Trentemøller', …] → id trentemoller). If docs/descriptors/<artist-id>.csv exists, never repeat albums already described.
2. List the RELEASED albums: all studio albums, plus EPs, soundtracks, remix or collaboration records only when they matter (landmark or documented collaboration). No live albums unless they are a landmark. Never include albums not out yet on today's date.
3. Split into PHASES of 3–4 albums, chronological. One phase = one ZIP. Each phase is STRICTLY INCREMENTAL: only its new rows, never rows from earlier phases or other artists.
4. For each album, research critics, musicologists, interviews, producers' and engineers' accounts, liner notes and official credits, then fill one row.

ROW FORMAT (exactly 27 columns, this header)
album_id,artist,title,year,type,genres,energy,electronic,mood,theatrical,experimental,polish,tempo,groove,voice,instruments,production,lyrics,language,scene,producers,sounds_like,influenced_by,landmark,confidence,status,notes
- album_id: existing albums keep the catalogue id (artist id + "-" + title lowercase, letters and digits only, no accents). New albums follow the same rule. If an artist has two albums with the same title, the later one gets the year: title "Mina (1971)", id mina-mina1971.
- type: studio, soundtrack, compilation, live, remix, ep, mixtape.
- genres: EVERY genre a source names for the album, NO LIMIT, in order of importance (the first weighs most; genres heard in one track go last), separated by |. Use the list's tokens; if a source names a genre not in the list, USE IT ANYWAY (lowercase, letters only, e.g. bossanova) and list it in CLAUDE_IMPORT.md as a new genre. Specific and broader together when both fit (deephouse|house). synthpop and electropop are different genres, and so are frenchhouse and frenchtouch: use the exact term the source uses, never map one genre name onto a similar token. "soundtrack" says what a record is for, not how it sounds: always add the genres it actually sounds like.
- 8 scales (energy, electronic, mood, theatrical, experimental, polish, tempo, groove): whole numbers 0–5 with the guide's anchors. EMPTY = unknown: leave it empty rather than guess from the artist's usual style.
- instruments: the main instruments heard on the album, main first, separated by |: piano, electricpiano, organ, harpsichord, accordion, keyboards, harmonium, melodica, mellotron, chamberlin, celesta, pumporgan, clavichord, glassharmonica, musicbox, synth, drummachine, sequencer, sampler, vocoder, turntables, theremin, guitar, baritoneguitar, acousticguitar, electricguitar, bass, synthbass, doublebass, steelguitar, mandolin, banjo, ukulele, sitar, sarangi, harp, hammereddulcimer, hurdygurdy, strings, violin, cello, orchestra, drums, percussion, mallets, glockenspiel, chimes, sleighbells, steeldrums, handclaps, tabla, brass, trumpet, cornet, trombone, tuba, saxophone, woodwinds, flute, clarinet, harmonica, bagpipes, uilleannpipes, lowwhistle, kazoo.
- production: how the album is made, main first, separated by |: vocal treatment and use, recording and production techniques, signature machines and software: autotune, vocoder, harmonizer, talkbox, pitchedvocals, vocalfilter, distortedvocals, vocalphasing, vocalchops, layeredvocals, falsetto, whistleregister, belting, sampling, analogtape, lofi, wallofsound, heavyreverb, sidechain, distortion, liverecording, fieldrecordings, tapeeffects, datrecording, digitaltape, concertrecording, springreverb, adatrecording, microbeats, tr808, tr909, linndrum, mpc, moog, prophet5, prophet2002, oberheim, dx7, fairlight, synclavier, protools, logic, ableton, flstudio, kurzweilk2000, akais3200, korg01w, tr707, tb303, juno106, sp1200, rolands760, alesis3630, rolandsvc350, akais3000, yamahaqy20, sibelius, juno60, emulatorii, rolandd50, rolandw30, akais1000, mackiecr1604, mackie8bus, korgprophecy, cubase, recycle, radar24, korgms20, emsvcs3, arp2600, orlatiffany4, altiverb.
- For instruments and production: only what sources state for THIS album (credits, liner notes, reviews, engineers' accounts), never deduced from the genre; leave empty if unknown. Something a source names that isn't in the lists: use it anyway (lowercase, letters and digits only) and report it in CLAUDE_IMPORT.md.
- voice, lyrics, language, producers, sounds_like, influenced_by: lists separated by |, NO LIMIT on values in any column. Allowed voice and lyrics values are in the guide.
- producers: only credited producers or co-producers (not writers, arrangers or mixers). influenced_by: only documented influences (artist, producer or qualified critic, source in the sources file). Sonic resemblance goes in sounds_like.
- landmark 1/0; confidence high/medium/low; status always draft.
- notes: your own words, MAX 15 WORDS (the only column with a limit). Never copy sentences from reviews or Wikipedia.

DELIVERABLES: one ZIP per phase, as in earlier batches
Name: <artist-id>_fandome_phase0N.zip, containing:
- CLAUDE_IMPORT.md: phase contents (album ids and titles), albums to add to the catalogue (title, year, type), albums billed to more than one artist (exact credit, e.g. "Röyksopp & Robyn"), new genre, instrument or production tokens, caveats (editions, credits, dates), what the next phase will contain.
- <artist-id>_phase0N_rows_ONLY.csv: header + only this phase's rows.
- <artist-id>_phase0N_sources.csv: album_id,source,source_type,url,what_it_supports,evidence_strength (working links).
- <artist-id>_phase0N_genre_evidence.csv: one line per genre per album, with source and scope (whole album, some tracks, texture).
- <artist-id>_phase0N_evidence-notes.md: per album, reasoning for each non-obvious value (including instruments and production), and critics' disagreements.
- <artist-id>_phase0N_catalog-audit.csv: which albums are already in the catalogue and which must be added.
No scripts needed: Claude imports the files, adds albums and tokens, runs the validator and tests. You can't write to GitHub: give the ZIPs to me and I pass them to Claude.

FOR ARTISTS ALREADY DELIVERED (when I ask)
Send <artist-id>_instruments.csv with header album_id,instruments,production,sources: one row per album already described, same rules as above.

Start now with phase 01 of the artist below; when it's ready, tell me what the next phase will contain.

Artist: <NAME>

---

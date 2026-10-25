# Prompt for ChatGPT: album descriptors (same prompt for every artist)

Copy everything between the lines into a new ChatGPT chat. Change only the last line (the artist). For the next artist in the same chat, just write: "Next artist: <name>".

---

You are a music researcher for **Fandome**, an independent social network for music fans (site: https://giampierofiorelli.github.io/Fandome/). You describe albums with researched, sourced data that powers explainable recommendations ("if you like this album…"). You work artist by artist, always with the same rules and the same deliverables. These instructions apply to every artist I give you, now and later in this chat.

## Read first (GitHub, branch `descriptors`, read only)

- Guide (columns, scales, anchors, id rule): https://github.com/giampierofiorelli/Fandome/blob/descriptors/docs/album-descriptors-guide.md
- Current genre list and labels: https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/scenes.ts (the `Genre` type) and families: https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/genreFamilies.ts
- Album catalogue (artist ids and existing albums): https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/catalog.ts
- Validator (what is accepted): https://github.com/giampierofiorelli/Fandome/blob/descriptors/scripts/validate-descriptors.ts
- Finished descriptor files, to see the format and avoid repeats: https://github.com/giampierofiorelli/Fandome/tree/descriptors/docs/descriptors (one file per artist, `<artist-id>.csv`)
- Research files from earlier batches, as examples: https://github.com/giampierofiorelli/Fandome/tree/descriptors/docs/descriptors/research

If a link doesn't open, say so and use the rules below.

## What to do for each artist

1. Find the artist's Fandome id in `catalog.ts` (e.g. `['trentemoller', 'Trentemøller', …]` → id `trentemoller`). Check whether `docs/descriptors/<artist-id>.csv` already exists: never repeat albums already described.
2. List the artist's **released** albums: all studio albums, plus EPs, soundtracks, remix or collaboration records only when they matter (landmark, or a documented collaboration). Never include albums that are not out yet on today's date.
3. Split the work into **phases** of 3–4 albums, in chronological order. One phase = one ZIP. Each phase is **strictly incremental**: only its new rows, never rows from earlier phases or other artists.
4. For each album, research critics, musicologists, interviews, producers' and engineers' accounts and official credits, then fill one row.

## Row format (exactly 27 columns, this header)

```
album_id,artist,title,year,type,genres,energy,electronic,mood,theatrical,experimental,polish,tempo,groove,voice,instruments,production,lyrics,language,scene,producers,sounds_like,influenced_by,landmark,confidence,status,notes
```

- `album_id`: existing albums keep the id from the catalogue (artist id + `-` + title in lowercase, letters and digits only, accents removed). New albums follow the same rule.
- `type`: `studio`, `soundtrack`, `compilation`, `live`, `remix`, `ep`, `mixtape`.
- `genres`: **every genre a source names for this album, no limit**, in order of importance, separated by `|`. Use the tokens of the genre list; if a source names a genre that isn't in the list, **use it anyway** (lowercase, letters only, e.g. `bossanova`) and list it in CLAUDE_IMPORT.md as a new genre: Claude adds it. Specific and broader genre together when both fit (e.g. `deephouse|house`). `synthpop` and `electropop` are different genres.
- The 8 scales (`energy`, `electronic`, `mood`, `theatrical`, `experimental`, `polish`, `tempo`, `groove`): whole numbers 0–5, using the guide's anchors. **Empty cell = unknown**: leave it empty rather than guess from the artist's usual style.
- `instruments`: the main instruments heard on the album, main first (credits, liner notes, reviews, engineers' accounts), from the guide's list; an instrument not listed is used anyway (lowercase, letters only) and reported in CLAUDE_IMPORT.md. Leave empty if sources don't say.
- `production`: how the album is made, main first: vocal treatment and use (auto-tune, vocoder, filtered or pitch-shifted vocals, layered vocals, falsetto, whistle register, belting), recording and production techniques (sampling, analog tape, lo-fi, wall of sound, heavy reverb, sidechain, live in the studio, tape effects), signature machines and software (TR-808, LinnDrum, Moog, Fairlight, Pro Tools, Ableton…), from the guide's list; anything not listed is used anyway and reported in CLAUDE_IMPORT.md. Only what sources state; empty if unknown.
- `voice`, `instruments`, `production`, `lyrics`, `language`, `producers`, `sounds_like`, `influenced_by`: lists separated by `|`, **no limit on the number of values** in any column. Allowed values for `voice` and `lyrics` are in the guide.
- `producers`: only people credited as producer or co-producer (not writers or mixers). `influenced_by`: only documented influences (stated by the artist, the producer or a qualified critic, with the source in the sources file). Sonic resemblance goes in `sounds_like`.
- `landmark` 1/0; `confidence` high/medium/low; `status` always `draft`.
- `notes`: your own words, **max 15 words** (the only column with a limit). Never copy sentences from reviews or Wikipedia.

## Deliverables: one ZIP per phase, as in earlier batches

Name: `<artist-id>_fandome_phase0N.zip`, with:

- `CLAUDE_IMPORT.md`: what the phase contains (album ids and titles), albums to add to the catalogue (title, year, type), albums billed to more than one artist (exact credit, e.g. `Röyksopp & Robyn`), new genre tokens, caveats (editions, credits, release dates), and what the next phase will contain.
- `<artist-id>_phase0N_rows_ONLY.csv`: header + only this phase's rows.
- `<artist-id>_phase0N_sources.csv`: `album_id,source,source_type,url,what_it_supports,evidence_strength`, with working links.
- `<artist-id>_phase0N_genre_evidence.csv`: one line per genre per album, with source and scope (whole album, some tracks, texture).
- `<artist-id>_phase0N_evidence-notes.md`: per album, the reasoning for each value that isn't obvious, and disagreements between critics.
- `<artist-id>_phase0N_catalog-audit.csv`: which albums are already in the catalogue and which must be added.

No scripts are needed: Claude imports the files, adds catalogue albums and genres, runs the validator and the tests. You can't write to GitHub: give the ZIPs to me and I pass them to Claude.

For artists already described (they have no instruments yet), when I ask: send `<artist-id>_instruments.csv` with header `album_id,instruments,production,sources`, one row per album already described.

Start now with phase 01 of the artist below; when it's ready, tell me what the next phase will contain.

**Artist: Trentemøller**

---

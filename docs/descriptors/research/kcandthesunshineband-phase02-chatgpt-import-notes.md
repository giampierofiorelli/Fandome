# CLAUDE_IMPORT — KC and the Sunshine Band — Phase 02 — 28 October 2026

## Import scope (exactly 4 studio albums)

- Single ZIP: `KC_Sunshine_02.zip` with six members. Import **only** `kcandthesunshineband_phase02_rows_ONLY.csv`; the other five files document the provenance and audit.
- Each row has **27 exact Fandome descriptors**; `status=draft`; no live, compilations or bonus cuts. IDs follow lowercased title without punctuation, prefixed by canonical Fandome artist ID `kcandthesunshineband`.
- These are **new albums after phase 01**. Do not re-import or overwrite phase 01's `Do It Good`, `KC and the Sunshine Band`, `The Sound of Sunshine`, or `Part 3`.

1. `kcandthesunshineband-whodoyalove` — **Who Do Ya (Love)** (1978); canonical printed title includes parentheses.
2. `kcandthesunshineband-doyouwannagoparty` — **Do You Wanna Go Party** (1979); AllMusic display sometimes adds a question mark, the original title here does not.
3. `kcandthesunshineband-thepainter` — **The Painter** (1981); base 11-track LP, not expanded issue.
4. `kcandthesunshineband-allinanightswork` — **All in a Night's Work** (1982); base 10-track LP, not expanded issue.

## Related 1980–81 title: **do not import under the band**

- *Greatest Hits* (1980) is a **compilation** even though it carries two newly recorded cuts. [Discography](https://jazzrocksoul.com/artists/kc-and-the-sunshine-band/). Exclude.
- *Space Cadet: Solo Flight* (1981) is the first **KC solo studio album**, originally credited solely to KC, **not** KC and the Sunshine Band. This is confirmed directly by the rights holder [Rhino](https://www.rhino.com/article/kc-takes-a-solo-flight) and [Apple Music](https://music.apple.com/us/album/space-cadet-solo-flight/820728486). A band biography or historical discography may group it within chronological artist discography, but canonical release credit must prevail. Put it in a separate KC solo room if later asked. Do not silently mark it as compilation or skip without audit.

## Catalog audit / existing work

The `descriptors` branch `src/data/catalog.ts` and `src/data/seed.ts` were consulted on 2026-10-28 and did not list this artist. Phase 01 describes four original albums in an external ZIP but may not have been merged. Before importing, re-check current branch: create artist and any absent albums, preserve all existing rows. Do not infer an import has already happened simply from previous delivery. The audit CSV therefore says no catalog entry in the branch and instructs rechecking for prior phases.

## Genre / production constraints

- **No new genre token** is needed: `discofunk`, `discosoul`, `disco`, `rnb`, `dancepop`, `funk`, `soul`, `pop`, `synthpop` all exist in the current guide and `src/data/scenes.ts`.
- **No new instruments**: all tokens exist, including `frenchhorn`, `harp`, `synth`, `oboe`, `clarinet` and `handclaps`.
- **No new production tags**: `hornarrangements`, `stringarrangements`, `falsetto`, `remixing` exist in `src/data/production.ts`. Do not claim undocumented synth or drum-machine models.
- The `genre_evidence.csv` lists source, exact genre and scope. `dancepop` in 1982 is a **music-editorial inference** from track-by-track disco-pop analysis, not a direct quotation of that exact token.
- Production pairing Casey/Finch stays credited throughout this phase. In *The Painter* a contemporary review shows a clear move to soul; in *All in a Night's Work* disco/synthpop returns.

## ARTIST INFLUENCES: do not fill specific album rows from these alone

In a [first-person 2017 interview](https://musicfeeds.com.au/features/kc-sunshine-band-dangers-fame-exciting-new-music/), Casey cited Stevie Wonder, Marvin Gaye, the Supremes, the Temptations, Gladys Knight, Joe Cocker, James Brown, Chicago, and Blood, Sweat & Tears as artist-level influences. This does not identify a specific album they shaped, so `influenced_by` remains empty for all four rows. The cover of the Four Tops' *It's the Same Old Song*, Van McCoy's *Baby I'm Yours*, Donna Summer's *All Through the Night* and DeSario guest duet are **not** influence evidence.

## Research and further coverage

Sources are in `kcandthesunshineband_phase02_sources.csv` and detailed reasoning in `kcandthesunshineband_phase02_evidence-notes.md`. Confirm current catalog references and run the repository descriptor validator. Never promote `draft` to `reviewed` automatically.

**Future phase** after these four: investigate *KC Ten* (1983) original artist credit **KC**, *Oh Yeah!* (1993), *I'll Be There for You* (2001), *Yummy* (2007), *Feeling You! The 60's* (2015), and later releases individually; not every candidate is a KC and the Sunshine Band studio album, so check labels and original credit before adding. No live/compilations. Do not repeat phase 01/02.

## Claude import note (Oct 2026)

- Rows imported as delivered. KC Ten (1983) removed from the band's catalogue row: originally credited to KC alone, like Space Cadet: Solo Flight.

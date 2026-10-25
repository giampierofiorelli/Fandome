# Katy Perry — Fandome descriptor import, Phase 01

**Branch reviewed:** `descriptors` (read only), October 25, 2026.  
**Scope:** four original studio albums, **2001–2013**. This ZIP contains only new Phase 01 rows for artist id `katyperry`; no rows from other artists, later phases, remixes, deluxe editions or live records.

## Included albums

| album_id | title | year | type | catalogue action |
|---|---|---:|---|---|
| `katyperry-katyhudson` | *Katy Hudson* | 2001 | studio | **ADD** |
| `katyperry-oneoftheboys` | *One of the Boys* | 2008 | studio | Keep existing |
| `katyperry-teenagedream` | *Teenage Dream* | 2010 | studio | Keep existing |
| `katyperry-prism` | *Prism* | 2013 | studio | Keep existing |

`src/data/catalog.ts` currently lists `One of the Boys`, `Teenage Dream`, `Prism`, `Witness`, `Smile` and `143` under `['katyperry', 'Katy Perry', …]`. The `docs/descriptors/katyperry.csv` file was absent on the reviewed branch. **Katy Hudson** is the 2001 debut, originally issued under the **Katy Hudson** artist credit before the Katy Perry stage name; it belongs under Fandome's Katy Perry artist for continuity while retaining original-artist provenance here. The appropriate new id under the prescribed rule is `katyperry-katyhudson`.

## New tokens to add before validating

- **Genre:** `christianrock` — the Christian-rock style specifically stated by AllMusic for *Katy Hudson*.
- **Genre:** `ccm` — AllMusic's distinct contemporary-Christian-music category, not interchangeable with gospel/Christian rock.
- **Genre:** `pophouse` — *Prism*'s early-1990s pop-house idiom explicitly identified by Alexis Petridis in The Guardian; retain separately from `deephouse` and `house`.
- **Instrument:** none. `guitar`, `electricpiano`, `sitar`, `tabla` and all others in the CSV are already valid in the branch's `instruments.ts` even if omitted from a shortened prompt list.
- **Production:** none. `protools`, `overdubbing`, `synthprogramming`, `hornarrangements`, `stringarrangements` and other used values already appear in the branch's `production.ts`.

Add genre tokens to both `scenes.ts` and `genreFamilies.ts` and update the validator's `GENRES` set. Suggested parents (subject to Claude's review): `christianrock: ['rock','gospel']`, `ccm: ['gospel']`, `pophouse: ['house','pop']`. The `gospel` parent of CCM reflects a practical hierarchy rather than identical genre meanings; review before applying if too broad.

## Caveats and exclusions

- *Katy Hudson* (2001) is **not** the Capitol debut; its artist credit differs from the catalog artist identity. Retain Fandome artist `Katy Perry` in the 27-column row, but do **not** rewrite historical discography metadata.
- *MTV Unplugged* (2009) is a live release and is omitted under the no-nonlandmark-live rule. 2012 *Teenage Dream: The Complete Confection* is a reissue of the 2010 album, not a second studio album; 2007 *Ur So Gay* is an EP/early single release, omitted as not a distinct landmark work. The 2026 compilation *The Ones That Got the Plays* is not a Phase 01 studio album.
- The base 12-song *Teenage Dream* release is the target, not the bonus collaborations or club mixes on some Qobuz/AllMusic editions; *Prism* is described using its standard 13-song issue unless otherwise stated. Qobuz date metadata for *Prism* can show January 1 as a placeholder: use established original release **year 2013**; exact day is not needed in the row.
- The 2001 Christian-rock and CCM categories are added **only because both are sourced**, despite overlap. The light jazz touches apply to named tracks, not the whole record.
- *One of the Boys*: do not misclassify Max Martin, Cathy Dennis, Desmond Child or Glen Ballard as album producers solely from their songwriting or legacy sessions. `S*A*M & Sluggo` is the duo's credited production name; `Katy Perry` is explicitly credited as producer by AllMusic, even though the track-level Qobuz listing generally omits that role.
- *Teenage Dream*: Kuk Harrell is credited as **vocal producer** and therefore deliberately excluded from the main `producers` field. Bonus/remix producers are excluded. `talkbox` is limited to Pitchfork's description of a *California Gurls* outro vocal motif, not claimed as a specific piece of session hardware.
- *Prism*: Katy Perry is a **credited track co-producer** with Greg Wells on *By the Grace of God*; MusicBrainz corroborates. `Christian Karlsson` is credited as producer; the critic's moniker **Bloodshy** refers to him, not a second additional person. `synthprogramming` is expressly credited to Greg Wells on a track. The album's Indian instruments and horn parts are comparatively local passages, not evidence of an album-wide world-music genre.
- `sounds_like` contains editorial similarity judgments; `influenced_by` uses only explicitly documented musical influence. Perry's admiration of an artist in general, a track responding to another track, and philosophical inspiration from Eckhart Tolle were deliberately **not** inflated into album-wide musical influence claims.
- Genre evidence has **one line per token** with scope `whole album`, `some tracks` or `texture`. Database genre tags have medium strength where they do not come from named music critics. Eight scales are **editorial interpretations of the cited descriptions**, not factual measurements; detailed rationale appears in `evidence-notes.md`.
- All statuses are `draft`. Validate the new tokens before running the repository's prescribed validator and tests. No repository files were modified.

## Exact Phase 01 files

1. `katyperry_phase01_rows_ONLY.csv` — 27-column header plus these four albums only.
2. `katyperry_phase01_sources.csv` — original URLs and credit/review support.
3. `katyperry_phase01_genre_evidence.csv` — one album × genre claim per row, source and scope.
4. `katyperry_phase01_evidence-notes.md` — interpretive decisions and disputes.
5. `katyperry_phase01_catalog-audit.csv` — preserve versus add.
6. `CLAUDE_IMPORT.md` — this import guide.

## Next phase — Phase 02

1. *Witness* (2017) — studio; existing catalogue entry `katyperry-witness`.
2. *Smile* (2020) — studio; existing catalogue entry `katyperry-smile`.
3. *143* (2024) — studio; existing catalogue entry `katyperry-143`.

All three were released by 25 October 2026. No unreleased future album has been included.

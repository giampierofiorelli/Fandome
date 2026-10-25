# CLAUDE_IMPORT — Christina Aguilera, Phase 02

**Artist ID:** `aguilera`. Source: GitHub `descriptors` branch `src/data/catalog.ts`; `aguilera.csv` did **not** exist during the previous Phase 01 audit. READ ONLY, no GitHub writes. **STRICTLY INCREMENTAL**: this ZIP contains three new 2006–2010 rows. It excludes all four Phase 01 rows: Christina Aguilera, Mi Reflejo, My Kind of Christmas and Stripped.

## Phase 02 rows

| album_id | Official title | year | type | Fandome catalogue |
|---|---|---:|---|---|
| `aguilera-backtobasics` | Back to Basics | 2006 | studio | EXISTS (retain ID) |
| `aguilera-bionic` | Bionic | 2010 | studio | EXISTS (retain ID) |
| `aguilera-burlesqueoriginalmotionpicturesoundtrack` | Burlesque (Original Motion Picture Soundtrack) | 2010 | soundtrack | **ADD** |

**Add to `catalog.ts`:** `['Burlesque (Original Motion Picture Soundtrack)', 2010]` under artist `aguilera` (type `soundtrack`; Claude imports appropriate type according to project implementation). Billboard/Qobuz/Apple verify 19 November 2010 original release year; dates can vary by market.

**Co-billed update (`src/data/coBilled.ts`):**

```ts
'aguilera-burlesqueoriginalmotionpicturesoundtrack': { with: ['cher'], credit: 'Christina Aguilera & Cher' },
```

Rationale: Apple Music titles album under both Christina Aguilera and Cher; Cher **already** has a Fandome room (`cher`). Original tracks: eight Aguilera, two Cher. Qobuz categorises store product generically as `Various Artists`; the album's tracks and Apple main credit justify preserving these two specific credited lead singers rather than `Various Artists`. Do not duplicate the album as a second descriptor row under Cher without catalogue conventions explicitly demanding it.

## Tokens for Claude to add

- **New genre tokens:** `cabaret` (Back to Basics period revue and Burlesque), `neosoul` (exact Neo-Soul label in AllMusic/Apple; guide disallows silent substitution with listed `nusoul`), `contemporarypoprock` (exact AllMusic style category Contemporary Pop/Rock, minor/texture). Add genre descriptions, parents in `genreFamilies.ts`, validator and compatible schema typing. Suggested parents: `cabaret → jazz|traditionalpop`, `neosoul → soul|rnb`, `contemporarypoprock → poprock` (Claude should choose approved existing convention). `soundtrack` is **format** and placed last; always other sound genres present.
- **New instrument tokens:** none: all are already present in `instruments.ts` (including trombone, mellotron, celesta and turntables).
- **New production tokens:** none. Unverified machine names or audio workstations were not inferred.

## Caveats / integrity

1. `Back to Basics`: original **22-song two-CD** programme. The first disc uses hip-hop-era sampling; the second uses live playing, **not necessarily live one-take recording**. `sampling` has a disc-one foundation and *Candyman* exception; `lofi` on one vintage-mic number only. Producers are confirmed only when production, co-production or vocal production is credited; no writer-only credits promoted.
2. `Bionic`: **original 18-track STANDARD** edition only. Deluxe-only Ladytron production on *Birds of Prey* and *Little Dreamer* is EXCLUDED; likewise deluxe-only *Monday Morning*, *Bobblehead*, *Stronger Than Ever*. Le Tigre *My Girls* and guest Peaches **ARE** standard; M.I.A. is a co-writer/vocal presence, **not** a producer in Qobuz original. Goldfrapp was an admired prospective collaborator but not a credited 18-track producer. All guest appearances are track-level, not album co-billing. Some sources disagree on Sia co-production vs vocal production; per-track label credits govern.
3. `Burlesque`: original 10-track soundtrack, not a solo Christina studio album, not a Cher studio album. Original Apple title uses parentheses whereas secondary sources add a colon. Film songs and album soundtrack may have different **initial market dates**; use original 2010 release. Cher's *You Haven't Seen the Last of Me* won Best Original Song at 2011 Golden Globes; Aguilera's *Bound to You* was nominated. Cher track producer assignments are INCLUDED in the shared album; Diane Warren is a writer, Steven Antin an executive producer; exclude both from `producers`.
4. The eight 0–5 scales are reasoned Fandome assessments with per-album justification in evidence notes. All three descriptor records are `draft`; **Claude performs validator/tests after adding new tokens and catalogue row**, without reimporting previous phase data.
5. `neosoul` and `nusoul` are semantically close. **Do not silently map** them until the Fandome ontology owner approves an alias rule; this ZIP follows the explicit exact-token request.

## Phase 03 next — planned STRICT increment

1. **Lotus** (2012), studio, **ADD** to `catalog.ts`.
2. **Liberation** (2018), studio, currently in catalogue.
3. **Aguilera** (2022), studio, currently in catalogue. Special handling: the Spanish project was also issued as several component EPs (*La Fuerza*, *La Tormenta*, *La Luz*); avoid duplicate album/EP coverage, verify any independent canonical importance of these EPs before adding them.

**Later-release caution:** *Christmas in Paris (Live from the Eiffel Tower)* (2025) is a released LIVE album, Apple Music confirms; original instruction excludes non-landmark live releases, so do not automatically include it in Phase 03.

## Six files for this phase

`CLAUDE_IMPORT.md`, `aguilera_phase02_rows_ONLY.csv` (header plus 3 rows, exactly 27 columns), `aguilera_phase02_sources.csv`, `aguilera_phase02_genre_evidence.csv`, `aguilera_phase02_evidence-notes.md`, `aguilera_phase02_catalog-audit.csv`.

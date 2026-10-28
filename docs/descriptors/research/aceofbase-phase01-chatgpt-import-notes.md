# CLAUDE IMPORT — Ace of Base / Phase 01

**Branch:** `descriptors` (read-only research delivered for manual Claude import)  
**Artist:** `Ace of Base`  
**Proposed artist ID:** `aceofbase` (absent from both catalog.ts and seed.ts at research date)  
**Status:** 3 x `draft` rows; 27 columns per row; incremental, no live or compilations.

## Import rows (ONLY this phase)

| album_id | title | original release | type |
| --- | --- | --- | --- |
| `aceofbase-happynation` | Happy Nation | 1992 | studio |
| `aceofbase-thebridge` | The Bridge | 1995 | studio |
| `aceofbase-flowers` | Flowers | 1998 | studio |

Rows are in `aceofbase_phase01_rows_ONLY.csv`. Do not prepend any other album. Create the `aceofbase` catalogue artist if missing, and add all five studio album titles listed in the catalogue audit; import only these first three descriptor rows. Artist is a Swedish act, primary song language English, founded in 1990.

## Discography exclusions / duplicate-edition rule

- `The Sign` (1993) is the American, expanded/resequenced version of the debut *Happy Nation*. Additional songs matter for the edition, but it must **not** become a duplicate studio-album row in this pipeline.
- `Happy Nation (U.S. Version)` (1993) is another version of the same project.
- `Cruel Summer` (1998) is the North American retitled/revised *Flowers*; avoid duplicate row.
- `Singles of the 90s`, `Greatest Hits`, `Hidden Gems` are compilations excluded per owner policy. No album rows already described in repository at time of research.

## New tokens to add before validation

- Genre: `reggaepop` — precise term explicitly used in the band's official album material. This is not interchangeable with `reggae`, so add genre label and family mapping in `scenes.ts` / `genreFamilies.ts`. If your validator only recognises canonical pre-existing genre codes, do not silently strip the genre: add it and validate.
- No newly coined instrument or production tokens.

## ARTIST INFLUENCES (general, phase 01 only)

- **Depeche Mode** — Ulf Ekberg states that he and Jonas were both serious fans in the period when they began working together and formed Tech Noir, before Ace of Base. Direct source: https://euromentravel.com/culture/popculture/ulf-ekberg-ace-of-base-interview . This documents early electronic taste, but does not demonstrate that Depeche Mode specifically shaped every album; album `influenced_by` left blank.
- **Unidentified Jamaican reggae band rehearsing next door** — Ulf Ekberg and Jonas Berggren both describe exchanging musical ideas with these musicians as the source of the group's reggae approach. Because no reliable band name is provided, **do not invent an artist entity**. Sources: https://euromentravel.com/culture/popculture/ulf-ekberg-ace-of-base-interview ; https://www.lpm.org/music/2018-10-16/ace-of-bases-jonas-berggren-reflects-on-30-years-of-the-sign .
- ABBA: Jenny explicitly rejects the premise of a close musical imitation; do not list ABBA as a documented influence solely due to four-member Swedish group comparisons. https://www.latimes.com/archives/la-xpm-1993-11-20-ca-58879-story.html .

## Credits caveats

- Happy Nation producers credited on official page: Jonas Berggren, Ulf Ekberg, Jonny Lindén, Denniz PoP, T.O.E.C.
- The Bridge producers taken from official full production list, including producer-credited Linn Berggren. Some per-song producer data varies among issues. Confirm team name `Radiant` with original sleeve if exact identity required.
- Flowers producer entities reflect the original European release, not later Cruel Summer-specific reworks.
- `influenced_by` remains empty in all three album rows: no artist-specific causal statement was established for an individual LP; song covers, homages, collaborators and sonic resemblance do not qualify.
- `production` blank for first two albums: no particular gear/recording technique confidently established for the actual whole album. This is correct per Fandome evidence requirements.

## Next phase — Phase 02 (final studio-album phase)

1. `aceofbase-dacapo` — *Da Capo* (2002)
2. `aceofbase-thegoldenratio` — *The Golden Ratio* (2010)

No live and compilation releases in phase 02. The Golden Ratio lineup change must be explicitly noted.

## Validation for Claude

1. Merge artist and missing titles in catalog.ts without changing existing ids; update scene entry as needed.
2. Add `reggaepop` to genre definitions and a family.
3. Validate all 27 fields, scales 0–5, voice/lyrics allowed tokens, notes <=15 words, unique ids, new 3 rows only.
4. Run `npx vite-node scripts/validate-descriptors.ts` and project test suite.
5. Review album-specific claims against evidence notes; do not elevate the ratings from draft to reviewed without human second-pass.


## Claude import note

- 3 rows imported; catalogue has the 5 studio albums (The Sign and Cruel Summer are US versions, not added).
- New genre reggaepop (parents reggae, pop).
- Scene SE en 1990 pop,dance,reggae: sung in English, never a local discovery.
- No artist influences entry: Ekberg says he and Jonas were Depeche Mode fans, which is taste, not a named influence; the reggae neighbours are unnamed.

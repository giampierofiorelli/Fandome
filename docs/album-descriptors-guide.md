# Album descriptors: how to fill them

One row per album, in CSV (comma-separated, one line per album, text with commas in double quotes). Whoever fills them (Claude, the owner, ChatGPT) follows the same scales, so the numbers mean the same thing everywhere. These are **our own judgments**: never copy sentences from reviews or Wikipedia; facts (year, producer, scene) are fine.

## Columns

| Column | What | Allowed values |
|---|---|---|
| `album_id` | Fandome id (given in the list we send) | as given, e.g. `m-ray` |
| `artist` | artist name | as given |
| `title` | album title | as given |
| `year` | original release year | as given |
| `type` | kind of release | one of: `studio`, `soundtrack`, `compilation`, `live`, `remix`, `ep`, `mixtape` |
| `genres` | all genres a source names for this album, no limit, in order of importance (the first weighs most), separated by `|` | from the genre list below |
| `energy` | how intense / driving | 0 very calm … 5 very intense |
| `electronic` | sound sources | 0 fully acoustic … 5 fully electronic |
| `mood` | emotional colour | 0 dark / melancholic … 5 bright / euphoric |
| `theatrical` | delivery and staging | 0 intimate, close … 5 big, dramatic, theatrical |
| `experimental` | how unusual | 0 very accessible / classic structures … 5 very experimental |
| `polish` | production | 0 raw, lo-fi … 5 glossy, highly produced |
| `tempo` | typical speed | 0 very slow … 5 very fast |
| `groove` | how danceable | 0 not danceable … 5 made for the dance floor |
| `voice` | lead voice types, main first, `|` separated (all the sources describe) | from: `soft`, `clear`, `powerful`, `raspy`, `rap`, `spoken`, `choral`, `instrumental` |
| `lyrics` | all main themes the sources describe, main first, `|` separated, no limit | from: `love`, `heartbreak`, `introspection`, `social`, `political`, `storytelling`, `party`, `irony`, `spiritual`, `sensuality`, `identity`, `nostalgia` |
| `language` | main singing language(s), `|` separated | ISO codes: `en`, `it`, `fr`, `es`, `pt`, `ko`… |
| `scene` | movement or scene | free text (e.g. `Italo disco`, `Britpop`, `cantautori`, `funk carioca`) |
| `producers` | all documented producers (credits), main first, no limit | names, `|` separated; never listed as influences |
| `sounds_like` | all artists (any country, no limit) this album sounds close to (sonic similarity, an editorial judgment) | names, `|` separated |
| `influenced_by` | all artists (no limit) that **documentably** shaped this album (stated by the artist, producer or qualified critics; reference in the sources file) | names, `|` separated; not collaborators, not producers |
| `landmark` | is it one of the artist's defining albums? | `1` or `0` |
| `confidence` | how solid the evidence is, for the whole row | `high` (several qualified sources agree), `medium`, `low` |
| `status` | review state | `draft` (proposal) or `reviewed` (checked by a second person) |
| `notes` | why it matters / what it sounds like, own words | max 15 words |

**Genres** (same list as `src/data/scenes.ts`): `pop`, `dance`, `electronic`, `synthpop`, `disco`, `rock`, `indie`, `alt`, `metal`, `punk`, `prog`, `hiphop`, `trap`, `rnb`, `soul`, `funk`, `jazz`, `folk`, `songwriter`, `country`, `latin`, `reggaeton`, `afro`, `kpop`, `sertanejo`, `funkbr`, `pagode`, `forro`, `classical`, `soundtrack`, `reggae`, `opera`, `house`, `techno`, `ambient`, `triphop`, `artpop`, `gospel`, `fado`, `caboverde` (Cape Verdean: batuque, morna, funaná), `gospelhouse`, `flamenco`, `ska`, `dubstep`, `ukgarage`, `frenchtouch`, `dancehall`, `kuduro`, `newjackswing`, `acidhouse`, `deephouse`, `edm`, `breakbeat`, `hyperpop`, `blues`, `postdisco`, `electrohouse`, `britpop`, `powerpop`, `electropop`, `tropicalhouse`, `trappop`, `italodisco`, `dancepop`, `eurodance`, `gothpop`, `darkwave`, `poppunk`, `newwave`, `grunge`, `experimentalpop`, `industrial`, `eurotrance`, `grime`, `footwork`, `garage`, `neorave`, `gothtrap`, `avantpop`, `bubblegumbass`. `synthpop` and `electropop` are different genres: use the one the source names. **If a source names a genre that is not in the list, use it anyway** (lowercase, letters only, e.g. `bossanova`) and mention it in the evidence notes: Claude adds it to the list. Use both the specific and the broader genre when both fit (e.g. `dancehall|reggae`).

## Scale anchors (so 3 means the same for everyone)

- **energy**: 1 = Adele *21* ballads; 3 = mid-tempo pop; 5 = Metallica *Master of Puppets*.
- **electronic**: 0 = Bob Dylan acoustic; 2 = band with some keyboards; 4 = Madonna *Ray of Light*; 5 = Kraftwerk.
- **mood**: 1 = Radiohead *OK Computer*; 3 = mixed; 5 = ABBA *Arrival*.
- **theatrical**: 1 = Bon Iver *For Emma*; 3 = standard pop; 5 = Queen *A Night at the Opera*.
- **experimental**: 0 = classic radio pop; 3 = indie with twists; 5 = Björk *Medúlla*.
- **polish**: 1 = garage/lo-fi; 3 = normal studio; 5 = big-budget pop.
- **groove**: 0 = ballads; 3 = some danceable tracks; 5 = Madonna *Confessions on a Dance Floor*.

Use whole numbers 0–5. Judge the whole album, not only its best-known singles (or their remixes). When still unsure, leave the cell empty or lower `confidence`.

**Leave a cell empty when the sources aren't enough.** An empty value means "unknown", and the algorithm ignores it instead of guessing. Never fill a value only from the album's genre or the artist's usual style: it has to come from evidence about *this* album (critics, musicologists, producers' and engineers' accounts, official credits).

## Sources and reasoning

Next to each CSV, the research files per artist in `docs/descriptors/research/` (as in the Madonna batch): `<artist-id>-sources.csv` (album_id, source, source_type, url, what_it_supports, evidence_strength), `<artist-id>-evidence-notes.md` (reasoning per album) and, when albums are added, `<artist-id>-catalog-audit.csv`. For each album: the sources used (title, author, outlet, date, link) and, for each value that isn't obvious, one line on why (e.g. "electronic 3: engineer Jason Corsaro describes live players over drum machines"). Disagreements between critics are noted, not hidden.

## Example (Madonna)

Illustrative only: these rows were written before the sources rule and are `draft`; the researched versions will replace them. `influenced_by` is left empty because no documented influence was checked: that's how an unknown value looks.

```csv
album_id,artist,title,year,type,genres,energy,electronic,mood,theatrical,experimental,polish,tempo,groove,voice,lyrics,language,scene,producers,sounds_like,influenced_by,landmark,confidence,status,notes
m-virgin,Madonna,Like a Virgin,1984,studio,pop|dance,4,3,5,3,1,4,4,4,clear,love|sensuality,en,New York dance-pop,Nile Rodgers,Cyndi Lauper|Whitney Houston,,1,medium,draft,"Bright Nile Rodgers dance-pop that made her a global star."
m-trueblue,Madonna,True Blue,1986,studio,pop|dance,3,3,4,3,1,4,3,3,clear,love|identity,en,80s pop,Madonna|Patrick Leonard|Stephen Bray,Cyndi Lauper|Janet Jackson,,1,medium,draft,"Polished pop with Latin touches and girl-group nods."
m-prayer,Madonna,Like a Prayer,1989,studio,pop|rock,3,2,3,4,2,4,3,3,powerful,spiritual|identity,en,80s pop,Madonna|Patrick Leonard|Stephen Bray|Prince,Prince|Janet Jackson,,1,medium,draft,"Personal, gospel-tinged pop about faith, family and freedom."
m-ray,Madonna,Ray of Light,1998,studio,electronic|pop,3,4,3,3,3,4,3,3,clear,spiritual|introspection,en,electronica,Madonna|William Orbit,Björk|Massive Attack,,1,medium,draft,"Atmospheric electronica and trance; spiritual and mature."
m-music,Madonna,Music,2000,studio,electronic|pop,4,5,4,3,3,4,4,4,clear,party|love,en,French touch,Madonna|Mirwais|William Orbit,Daft Punk|Goldfrapp,,1,medium,draft,"Glitchy French-touch electro mixed with acoustic folk moments."
m-confessions,Madonna,Confessions on a Dance Floor,2005,studio,dance|disco,5,5,5,3,1,5,4,5,clear,party|identity,en,nu-disco,Madonna|Stuart Price,Kylie Minogue|Daft Punk,,1,medium,draft,"Non-stop disco mix, seamless tracks built for the club."
```

## Albums that aren't in Fandome yet

Our list is incomplete: add every studio album of the artist (no live albums, compilations or EPs unless they are landmarks).

- Existing albums: keep their `album_id` exactly (find them in `src/data/seed.ts` and `src/data/catalog.ts`).
- New albums: `album_id` = the artist's Fandome id + `-` + the title in lowercase with only letters and digits (accents removed, spaces and punctuation dropped). Examples: Madonna (`madonna`) "Erotica" → `madonna-erotica`; "American Life" → `madonna-americanlife`; Sigur Rós (`sigurros`) "( )" → use the year: `sigurros-2002`. The artist's Fandome id is the first part of its existing album ids (for the first five rooms: Madonna = `madonna`, Kylie Minogue = `kylie`, Pet Shop Boys = `psb`, Depeche Mode = `depeche`, Lady Gaga = `gaga`).
- Put the exact official title and the original release year.

## How to send them

- **Where:** one file per artist in `docs/descriptors/<artist-id>.csv` (e.g. `docs/descriptors/madonna.csv`), with exactly the header above. Commit them on a branch named `descriptors` (not on `main`), so they don't clash with work on the site; Claude merges and imports them.
- Otherwise: a `.csv` file, or rows pasted in chat in a code block, with exactly the header above.
- One artist per batch is easiest to check. Claude validates every row (values, genres, ids) with `npx vite-node scripts/validate-descriptors.ts` before importing, and runs the tests so nothing broken reaches the site.
- ChatGPT can't write to GitHub (its connection is read-only): it hands the files to the owner, who passes them to Claude.

## Prompt for ChatGPT (copy as is, then paste the album list)

> You are a music expert helping to describe albums for a music discovery app. For each album in the list, return one CSV row with exactly these columns:
> album_id,artist,title,year,type,genres,energy,electronic,mood,theatrical,experimental,polish,tempo,groove,voice,lyrics,language,scene,producers,sounds_like,influenced_by,landmark,confidence,status,notes
> Rules: keep album_id, artist, title and year exactly as given (for albums not in the list, follow the id rule in the guide). genres: all genres from this list that a source names for this album (no limit), in order of importance (main first), separated by |: pop, dance, electronic, synthpop, disco, rock, indie, alt, metal, punk, prog, hiphop, trap, rnb, soul, funk, jazz, folk, songwriter, country, latin, reggaeton, afro, kpop, sertanejo, funkbr, pagode, forro, classical, soundtrack, reggae, opera, house, techno, ambient, triphop, artpop, gospel, fado, caboverde, gospelhouse, flamenco, ska, dubstep, ukgarage, frenchtouch, dancehall, kuduro, newjackswing, acidhouse, deephouse, edm, breakbeat, hyperpop, blues, postdisco, electrohouse, britpop, powerpop, electropop, tropicalhouse, trappop, italodisco, dancepop, eurodance, gothpop, darkwave, poppunk, newwave, grunge, experimentalpop, industrial, eurotrance, grime, footwork, garage, neorave, gothtrap, avantpop, bubblegumbass (synthpop and electropop are different: use the one the source names). If a source names a genre not in this list, use it anyway (lowercase, letters only) and say so in the notes; it will be added. Scales are whole numbers 0–5: energy (0 calm–5 intense), electronic (0 acoustic–5 fully electronic), mood (0 dark–5 bright), theatrical (0 intimate–5 dramatic), experimental (0 accessible–5 experimental), polish (0 raw–5 glossy), tempo (0 slow–5 fast), groove (0 not danceable–5 dance floor). Anchors: energy 1 = Adele "21", 5 = Metallica "Master of Puppets"; electronic 4 = Madonna "Ray of Light", 5 = Kraftwerk; mood 1 = Radiohead "OK Computer", 5 = ABBA "Arrival"; theatrical 5 = Queen "A Night at the Opera"; experimental 5 = Björk "Medúlla"; groove 5 = Madonna "Confessions on a Dance Floor". voice: all lead voice types the sources describe, main first, from soft, clear, powerful, raspy, rap, spoken, choral, instrumental (separated by |). lyrics: all main themes (no limit, main first) from love, heartbreak, introspection, social, political, storytelling, party, irony, spiritual, sensuality, identity, nostalgia (separated by |). language: ISO codes separated by |. scene: short free text. sounds_like and influenced_by: all documented artist names (no limit), separated by |. No column has a limit on the number of values. type: one of studio, soundtrack, compilation, live, remix, ep, mixtape. producers: all documented producers, main first, separated by | (never as influences). influenced_by: only influences documented by the artist, producers or qualified critics (not collaborators). landmark: 1 if it is one of the artist's defining albums, else 0. confidence: high, medium or low for the whole row. status: draft. notes: your own words, max 15 words, in double quotes; never copy text from reviews or Wikipedia. Leave a cell EMPTY when the evidence about this specific album is not enough; never infer a value only from the genre or the artist's usual style. Return the CSV with the header, then the sources (album_id, source, source_type, url, what_it_supports, evidence_strength) and the reasoning per album.

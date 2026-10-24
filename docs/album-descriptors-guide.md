# Album descriptors: how to fill them

One row per album, in CSV (comma-separated, one line per album, text with commas in double quotes). Whoever fills them (Claude, the owner, ChatGPT) follows the same scales, so the numbers mean the same thing everywhere. These are **our own judgments**: never copy sentences from reviews or Wikipedia; facts (year, producer, scene) are fine.

## Columns

| Column | What | Allowed values |
|---|---|---|
| `album_id` | Fandome id (given in the list we send) | as given, e.g. `m-ray` |
| `artist` | artist name | as given |
| `title` | album title | as given |
| `year` | release year | as given |
| `genres` | 1–3 genres, main first, separated by `|` | from the genre list below |
| `energy` | how intense / driving | 0 very calm … 5 very intense |
| `electronic` | sound sources | 0 fully acoustic … 5 fully electronic |
| `mood` | emotional colour | 0 dark / melancholic … 5 bright / euphoric |
| `theatrical` | delivery and staging | 0 intimate, close … 5 big, dramatic, theatrical |
| `experimental` | how unusual | 0 very accessible / classic structures … 5 very experimental |
| `polish` | production | 0 raw, lo-fi … 5 glossy, highly produced |
| `tempo` | typical speed | 0 very slow … 5 very fast |
| `groove` | how danceable | 0 not danceable … 5 made for the dance floor |
| `voice` | main lead voice | one of: `soft`, `clear`, `powerful`, `raspy`, `rap`, `spoken`, `choral`, `instrumental` |
| `lyrics` | 1–2 main themes, `|` separated | from: `love`, `heartbreak`, `introspection`, `social`, `political`, `storytelling`, `party`, `irony`, `spiritual`, `sensuality`, `identity`, `nostalgia` |
| `language` | main singing language(s), `|` separated | ISO codes: `en`, `it`, `fr`, `es`, `pt`, `ko`… |
| `scene` | movement or scene, short | free text, max 4 words (e.g. `Italo disco`, `Britpop`, `cantautori`, `funk carioca`) |
| `sounds_like` | up to 3 artists (any country) this album sounds close to | names, `|` separated |
| `influenced_by` | up to 3 artists that clearly shaped this album | names, `|` separated |
| `landmark` | is it one of the artist's defining albums? | `1` or `0` |
| `notes` | why it matters / what it sounds like, own words | max 15 words |

**Genres** (same list as `src/data/scenes.ts`): `pop`, `dance`, `electronic`, `synthpop`, `disco`, `rock`, `indie`, `alt`, `metal`, `punk`, `prog`, `hiphop`, `trap`, `rnb`, `soul`, `funk`, `jazz`, `folk`, `songwriter`, `country`, `latin`, `reggaeton`, `afro`, `kpop`, `sertanejo`, `funkbr`, `pagode`, `forro`, `classical`, `soundtrack`, `reggae`, `opera`.

## Scale anchors (so 3 means the same for everyone)

- **energy**: 1 = Adele *21* ballads; 3 = mid-tempo pop; 5 = Metallica *Master of Puppets*.
- **electronic**: 0 = Bob Dylan acoustic; 2 = band with some keyboards; 4 = Madonna *Ray of Light*; 5 = Kraftwerk.
- **mood**: 1 = Radiohead *OK Computer*; 3 = mixed; 5 = ABBA *Arrival*.
- **theatrical**: 1 = Bon Iver *For Emma*; 3 = standard pop; 5 = Queen *A Night at the Opera*.
- **experimental**: 0 = classic radio pop; 3 = indie with twists; 5 = Björk *Medúlla*.
- **polish**: 1 = garage/lo-fi; 3 = normal studio; 5 = big-budget pop.
- **groove**: 0 = ballads; 3 = some danceable tracks; 5 = Madonna *Confessions on a Dance Floor*.

Use whole numbers 0–5. When unsure between two values, pick the one closer to the album's best-known songs.

## Example (Madonna)

```csv
album_id,artist,title,year,genres,energy,electronic,mood,theatrical,experimental,polish,tempo,groove,voice,lyrics,language,scene,sounds_like,influenced_by,landmark,notes
m-virgin,Madonna,Like a Virgin,1984,pop|dance,4,3,5,3,1,4,4,4,clear,love|sensuality,en,New York dance-pop,Cyndi Lauper|Whitney Houston,Chic|Donna Summer,1,"Bright Nile Rodgers dance-pop that made her a global star."
m-trueblue,Madonna,True Blue,1986,pop|dance,3,3,4,3,1,4,3,3,clear,love|identity,en,80s pop,Cyndi Lauper|Janet Jackson,The Supremes|Motown,1,"Polished pop with Latin touches and girl-group nods."
m-prayer,Madonna,Like a Prayer,1989,pop|rock,3,2,3,4,2,4,3,3,powerful,spiritual|identity,en,80s pop,Prince|Janet Jackson,Prince|Sly Stone,1,"Personal, gospel-tinged pop about faith, family and freedom."
m-ray,Madonna,Ray of Light,1998,electronic|pop,3,4,3,3,3,4,3,3,clear,spiritual|introspection,en,electronica,Björk|Massive Attack,William Orbit|trip-hop,1,"Atmospheric electronica and trance; spiritual and mature."
m-music,Madonna,Music,2000,electronic|pop,4,5,4,3,3,4,4,4,clear,party|love,en,French touch,Daft Punk|Goldfrapp,Mirwais|Daft Punk,1,"Glitchy French-touch electro mixed with acoustic folk moments."
m-confessions,Madonna,Confessions on a Dance Floor,2005,dance|disco,5,5,5,3,1,5,4,5,clear,party|identity,en,nu-disco,Kylie Minogue|Daft Punk,ABBA|Donna Summer,1,"Non-stop disco mix, seamless tracks built for the club."
```

## How to send them

- Put the rows in a `.csv` file (or paste them in chat in a code block), with exactly the header above.
- One artist per batch is easiest to check. Claude validates every row (values, genres, ids) before importing, and runs a test so nothing broken reaches the site.

## Prompt for ChatGPT (copy as is, then paste the album list)

> You are a music expert helping to describe albums for a music discovery app. For each album in the list, return one CSV row with exactly these columns:
> album_id,artist,title,year,genres,energy,electronic,mood,theatrical,experimental,polish,tempo,groove,voice,lyrics,language,scene,sounds_like,influenced_by,landmark,notes
> Rules: keep album_id, artist, title and year exactly as given. genres: 1–3 from this list, main first, separated by |: pop, dance, electronic, synthpop, disco, rock, indie, alt, metal, punk, prog, hiphop, trap, rnb, soul, funk, jazz, folk, songwriter, country, latin, reggaeton, afro, kpop, sertanejo, funkbr, pagode, forro, classical, soundtrack, reggae, opera. Scales are whole numbers 0–5: energy (0 calm–5 intense), electronic (0 acoustic–5 fully electronic), mood (0 dark–5 bright), theatrical (0 intimate–5 dramatic), experimental (0 accessible–5 experimental), polish (0 raw–5 glossy), tempo (0 slow–5 fast), groove (0 not danceable–5 dance floor). Anchors: energy 1 = Adele "21", 5 = Metallica "Master of Puppets"; electronic 4 = Madonna "Ray of Light", 5 = Kraftwerk; mood 1 = Radiohead "OK Computer", 5 = ABBA "Arrival"; theatrical 5 = Queen "A Night at the Opera"; experimental 5 = Björk "Medúlla"; groove 5 = Madonna "Confessions on a Dance Floor". voice: one of soft, clear, powerful, raspy, rap, spoken, choral, instrumental. lyrics: 1–2 of love, heartbreak, introspection, social, political, storytelling, party, irony, spiritual, sensuality, identity, nostalgia (separated by |). language: ISO codes separated by |. scene: max 4 words. sounds_like and influenced_by: up to 3 artist names each, separated by |. landmark: 1 if it is one of the artist's defining albums, else 0. notes: your own words, max 15 words, in double quotes; never copy text from reviews or Wikipedia. If you are not sure about an album, still give your best estimate but add "(unsure)" at the end of notes. Return only the CSV with the header, nothing else.

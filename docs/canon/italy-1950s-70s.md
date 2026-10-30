# Canon: Italian popular music, 1950s–1970s

Scope: Sanremo and canzone melodica, urlatori, beat, the cantautori (Genova, Milan, Rome, Bologna, Naples), progressive rock, the 1970s singer-songwriters and the big pop voices. The list comes from the sources below, not from Fandome's catalogue. Data: `canon.csv` (118 artists: tier 1 = 22, tier 2 = 34, tier 3 = 62). `build.py` regenerates it. The raw extracts are `hpi_albums.tsv` (Hit Parade Italia annual album charts 1965–79), `hpi_singles.tsv` (annual singles charts 1950–79, 1964 missing), `sanremo_top3.tsv` (Sanremo podiums 1951–79) and `ondarock_mono.tsv` (OndaRock monograph discographies with ratings).

## Sources opened

| # | Outlet | Author | Year | What it is | URL |
|---|---|---|---|---|---|
| 1 | Rolling Stone Italia, "I 100 dischi italiani più belli di sempre" (issue 100; jury, one album per artist). Read in full through L'Unità's 2023 reproduction; top 10 checked against Il Post 2012 | jury (ed. Michele Lupi) | 2012 | ranked list | https://www.unita.it/2023/05/15/i-migliori-100-dischi-italiani-di-sempre-la-storica-classifica-di-rolling-stone/ · https://www.ilpost.it/2012/01/30/i-100-dischi-italiani-piu-belli-di-sempre-per-rolling-stone/ |
| 2 | OndaRock, Pietre miliari, Italian section (105 entries on the index page) | staff | ongoing | milestone reviews | https://www.ondarock.it/pietre-miliari/ |
| 3 | OndaRock, monographs (41 read: Battisti, De André, Guccini, De Gregori, Dalla, Battiato, Gaber, Tenco, Mina, Patty Pravo, PFM, Banco, Area, Le Orme, Goblin, Osanna, Perigeo, Ciampi, Graziani, Fossati, Conte and others), discography ratings | various | ongoing | monographs | https://www.ondarock.it/monografie/luciobattisti/ (pattern: /monografie/&lt;slug&gt;/) |
| 4 | Rolling Stone Italia, "I 20 dischi fondamentali del prog italiano" | Fabio Zuffanti | 14 Jan 2020 | list | https://www.rollingstone.it/musica/classifiche-liste-musica/i-20-dischi-fondamentali-del-prog-italiano/496380/ |
| 5 | Rolling Stone Italia, "I 20 dischi solisti prog fondamentali in Italia" | Fabio Zuffanti | 4 Feb 2020 | list | https://www.rollingstone.it/musica/i-20-dischi-solisti-prog-fondamentali-in-italia/500130/ |
| 6 | Rolling Stone Italia, "10 album per riscoprire il beat italiano" | Francesco Brusco | 15 Aug 2023 | list | https://www.rollingstone.it/?p=770140 |
| 7 | Rolling Stone Italia, "I 15 migliori album italiani usciti nel 1974" | staff | 17 Jan 2024 | list | https://www.rollingstone.it/musica/classifiche-liste-musica/i-15-migliori-album-italiani-usciti-nel-1974/842418/ |
| 8 | Rockit, "Splendidi 50enni: 10 dischi bellissimi che compiono mezzo secolo" (1973) | Giuseppe Catani | 10 Jan 2023 | list | https://www.rockit.it/articolo/splendidi-50enni-10-dischi-bellissimi-che-compiono-mezzo-secolo |
| 9 | Rockit, "10 grandi dischi che compiono 50 anni nel 2024" (1974) | Giuseppe Catani | 8 Jan 2024 | list | https://www.rockit.it/articolo/10-grandi-dischi-che-compiono-50-anni-nel-2024 |
| 10 | Rockit, "10 dischi che compiono 50 anni nel 2026" (1976) | Giuseppe Catani | 14 Jan 2026 | list | https://www.rockit.it/articolo/10-dischi-che-compiono-50-anni-2026 |
| 11 | Mox Cristadoro, *I 100 migliori dischi del progressive italiano* (Tsunami; intro by Fabio Zuffanti). Alphabetical, 1970–77. Read through a blog transcription, not the book | Mox Cristadoro | book (blog post 22 Jan 2020) | book list | https://returntotheunderground.blogspot.com/2020/01/100-best-albums-of-italian-progressive.html |
| 12 | Rolling Stone (US), "50 Greatest Prog Rock Albums of All Time": PFM *Per un amico* #19, Banco *Io sono nato libero* #35 | staff | 2015 | list | https://www.rollingstone.com/music/music-lists/50-greatest-prog-rock-albums-of-all-time-78659/ |
| 13 | Prog/Louder, "The 100 greatest prog albums of all time": PFM *Per un amico* in the 80–61 part | Prog magazine | 2014 | list | https://www.loudersound.com/features/the-100-greatest-prog-albums-of-all-time-80-61 |
| 14 | Hit Parade Italia, annual album charts 1965–1979 (best sellers of each year, with peak position) | HPI archive | — | charts | https://hitparadeitalia.it/hp_yenda/lpe1970.htm (pattern lpeYYYY) |
| 15 | Hit Parade Italia, annual singles charts 1950–1979 (1964 page not parsed) | HPI archive | — | charts | https://hitparadeitalia.it/hp_yends/hpe1960.htm (pattern hpeYYYY) |
| 16 | Hit Parade Italia, Festival di Sanremo editions 1951–1979 (final rankings) | HPI archive | — | results | https://hitparadeitalia.it/sanremo/edizioni/1958.htm (pattern YYYY) |
| 17 | Club Tenco, "Tutti i Premi Tenco" (career award, from 1974, plus cultural-operator award) | Club Tenco | — | award roll | https://www.clubtenco.it/tutti-i-premi-tenco/ |
| 18 | TicketOne magazine repost of a Rockol piece on Carosone (May 2026): Carosone with Buscaglione is "un vero innovatore della canzone italiana" | Rockol | 2026 | feature | https://www.ticketone.it/magazine/news/renato-carosone-vero-innovatore-della-canzone-italiana |
| 19 | Obituaries for Tony Dallara: "il primo degli urlatori" | AGI, Sky TG24 | Jan 2026 | news | https://www.agi.it/cultura/news/2026-01-16/musica-morto-tony-dallara-35128403/ · https://tg24.sky.it/spettacolo/musica/2026/01/16/tony-dallara-carriera-canzoni-famose |

## Sources I could not open, or that don't exist as asked

- **Rockol**: every rockol.it page (the anni '50 / anni '60 playlist guides, artist discographies) returns a Cloudflare 403. Rockol appears only through the TicketOne repost (#18).
- **Il Mucchio Selvaggio** and **Ciao 2001**: I found no online best-of list from either magazine.
- **Books by music historians** (Borgna, Liperi, Castaldo's *Dizionario della canzone italiana*, Giannelli on the urlatori): not available online. Mox Cristadoro (#11) is the only book used, and only through a transcription.
- **Premio Tenco Targhe** (album awards, from 1984): outside the era, not used.
- **Rolling Stone Italia** has no list of 1960s Italian albums, of Sanremo songs or of 1970s cantautori. Its ranked Battisti discography ("dal peggiore al migliore") turned up only as a teaser.
- **Pitchfork**: no reviews of these albums found.

## Method and notes

- **How the tiers were set.** Tier 1 means the artist is cited strongly across the critics' lists (RS Italia 100, OndaRock milestone, specialist lists) and also has big sales or awards (HPI, Sanremo, Premio Tenco). For singles-era stars it can mean Sanremo wins plus heavy singles-chart presence.
- **Ordering inside tier 1.** Rows follow a judgement on breadth of agreement, roughly: cantautori, Mina and Celentano, prog's big three, Genova school and Milan, then the 1950s melodic stars. The CSV keeps this order.
- **Tier 3** mixes notable or cult acts with one strong citation (several prog bands from Zuffanti's list or Cristadoro's book) and singles-era hitmakers backed only by chart data.
- **Singles-driven artists** (Modugno, Villa, Pizzi, Carosone, Buscaglione, Dallara, Bindi, Lauzi, Dik Dik, Vianello, Latilla, Boni and others): none of the opened sources names an album or collection for them. The CSV says so and gives their key songs from Sanremo and HPI. It does not invent a "best of": a collection still has to be chosen from a discography.
- **The RS Italia 100 allows one album per artist.** It picks some later or live records: Mina *Live '78*, Paolo Conte *Concerti*, De André *Crêuza de mä*. Live albums are kept out of `key_albums` and named only in `sources` (per CLAUDE.md, live albums and compilations are not a priority).
- **Years** are release years. HPI years are the chart year, which can run a year later (e.g. Baglioni's *Questo piccolo grande amore*, 1972 release, charted 1973).
- **Already in the catalogue (35 rows).** Many catalogue rows exist but are empty or thin.
  - Empty album lists: Modugno, Gaber, Paoli, Tenco, Milva, Rita Pavone, Morandi, Mia Martini, Vanoni, Caselli, Gabriella Ferri.
  - Missing landmark albums include Battisti *Una donna per amico* (RS Italia #3), De André *Tutti morimmo a stento* and *La buona novella*, Mina's 1969–71 run, Venditti *Sotto il segno dei pesci*, Dalla *Automobili*, Patty Pravo *Concerto per Patty*.
- **Not in the catalogue at all**, highest tiers first: Guccini, PFM, Area, Banco, Jannacci, Le Orme, Claudio Villa, Nilla Pizzi, Carosone, Paolo Conte, Bennato, Equipe 84, Rokes, Nomadi, New Trolls, Sorrenti, Finardi, Lolli, Ciampi, Branduardi, Fossati, Endrigo, Peppino Di Capri, Iva Zanicchi, Biglietto per l'Inferno, Balletto di Bronzo, NCCP.
- **Discovery rule.** Every artist here sings mainly in Italian, so all are local-scene artists under the `isLocalArtist` rule.
- **Possibly outside scope.** Papetti (instrumental) and the soundtrack composers (Morricone, Rota, Umiliani) are tier 2–3 only because OndaRock or the charts cite them. Drop them if the owner wants songs only.
- **Left out as 1980s acts** although an RS Italia or OndaRock entry exists: Gaznevada, Garbo, Krisma, Giuni Russo, Rettore, Alice. The catalogue already holds most of them.

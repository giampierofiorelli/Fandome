# Claude research notes (Oct 2026, wave 2)

# Wave 2 / E: evidence notes

Albums: thewho-tommy, velvetunderground-whitelightwhiteheat, cohen-songsofleonardcohen, beachboys-thebeachboystoday, byrds-sweetheartoftherodeo. Titles and years copied from `src/data/catalog.ts`. All rows `draft`.

## Could not open (so not used)
- AllMusic: HTTP 403 on every album page. The only AllMusic text used is the Tommy sentence that Louder quotes verbatim.
- Rolling Stone 500 ranks: the 2003 list pages on rollingstone.com print the blurbs but not the ranks. I verified one rank, Tommy No. 96, because the Live at Leeds blurb says "following up Tommy [see No. 96]". The Sweetheart No. 117 comes only from Daily Vault, so I left it out. Rolling Stone Japan's 2020 list returned 403.
- Austin Chronicle (Sweetheart at 50): 429. uDiscover (Beach Boys Today!): 403. Tablet (Cohen at 50): 403. Under the Radar: 403. v13 (Tommy deluxe): 403. Live for Live Music (Tommy): 500. The Rock's Backpages Cohen review is behind a paywall (I could read only its first line).
- I found no Pitchfork review of Tommy or The Beach Boys Today!
- No certifications were opened.

## New tokens
- genre `surf`: Discogs style "Surf" for The Beach Boys Today! (main release 869037). It is not `surfrock`, so I kept the source term.

## thewho-tommy
Sources:
- Discogs master 68455, main release 810914 (UK 1969): styles Rock Opera, Art Rock; Producer Kit Lambert.
- Discogs release 12144633 (2003 Deluxe), credits: Entwistle "Bass, Brass [French Horn, Trumpet, Flugelhorn]"; Moon "Drums, Timpani, Gong, Tambourine"; Townshend "Guitar, Keyboards".
- BBC Music, Chris Jones, 2004: https://www.bbc.co.uk/music/reviews/chdp
- Rolling Stone 500 (2003) blurb: https://www.rollingstone.com/music/music-lists/500-greatest-albums-of-all-time-156826/
- Louder/Classic Rock, Album of the Week Club: https://www.loudersound.com/reviews/the-who-tommy-album-of-the-week-club-review
- Medialoper, Jim Connelly: https://medialoper.com/certain-songs-3255-the-who-overture-its-a-boy/
- uDiscover, Richard Havers, 2026 (the Universal label site), opened with WebFetch: https://www.udiscovermusic.com/stories/tommy-a-masterpiece/
- thewho.net chronicle: https://thewho.net/?p=56
- Spokesman-Review, 2024: https://spokesman.com/stories/2024/may/17/tommy-55-years-later-how-the-whos-seminal-rock-ope

Cells:
- genres:
  - rockopera, artrock: Discogs.
  - rockopera: RS: "'Rock opera' is one way to describe this exploration of childhood trauma".
  - rock: uDiscover: "This was rock music, but not as we knew it."
- instruments:
  - Discogs deluxe credits, listed above.
  - Medialoper: "augmented only by organ, piano and Entwistle’s French Horn; the guitars were often acoustic, and even on the riff-driven songs the electric guitars were clean-sounding".
  - uDiscover: "layers of Townshend’s acoustic guitar".
- production: overdubbing. uDiscover: "the numerous overdubs".
- voice: clear. Medialoper: "the vocals were mostly pretty as opposed to gritty". Weak; medium.
- Scales:
  - energy 3: Louder "enormous power chords ringing out in urgent contrast to moments of fragility and calm". Medialoper "so low-key".
  - polish 2: BBC "Every slip, every bum note and every wobbly vocal"; "pared-down quality". Medialoper "sparse and full of space".
  - theatrical 4: an opera concept with an Overture and recurring motifs (Louder), but a low-key execution.
  - experimental 3: uDiscover "first to have the audacity to bill itself as an opera". Louder "recurring motifs".
  - mood 2: trauma and abuse themes (RS), ending in "spiritual release".
  - electronic 1: organ and piano, no synths.
- lyrics: RS "childhood trauma, sexual abuse, repression and spiritual release". Louder: "the spiritual quest of a young man who was reputedly Townshend himself"; "a massive confessional for Townshend".
- producers: Kit Lambert. Chris Stamp is credited only as executive producer, so he is left out.
- influenced_by: empty.
  - Meher Baba (uDiscover: "Pete’s inspiration came from the teachings of the Meher Baba") is a spiritual teacher, not a musical artist. He is not linked.
  - Townshend denies an influence from S.F. Sorrow, so it is not used.
- sounds_like: empty. No critic sound comparison found.
- landmark 1: RS 500 No. 96. Louder: it "catapulted The Who into the major leagues" and "saved The Who financially".
- Reception:
  - Louder: "Always more ‘important’ than genuinely satisfying".
  - AllMusic (quoted by Louder): "its critical standing has diminished somewhat in the ensuing decades".
  - thewho.net: Record Mirror gave it 5 stars and NME called it a "disappointment"; US #4, UK #2.
  - Disagreement noted, so acclaim is 4.
- legacy 4: Louder quotes are in legacy.csv.

## velvetunderground-whitelightwhiteheat
Sources:
- Pitchfork, Douglas Wolk, 2013 (45th anniversary reissue), page rating 10: https://pitchfork.com/reviews/albums/18770-the-velvet-underground-white-lightwhite-heat/
- Rolling Stone, 45th anniversary review: https://www.rollingstone.com/music/music-album-reviews/white-light-white-heat-45th-anniversary-super-deluxe-edition-125496/
- Paste, 2013: https://www.pastemagazine.com/articles/2013/12/revisiting-the-velvet-undergrounds-white-lightwhit.html
- Ultimate Classic Rock: https://ultimateclassicrock.com/velvet-underground-white-light-white-heat-deluxe/
- American Songwriter: https://americansongwriter.com/velvet-underground-white-lightwhite-heat-2013-reissue/
- Far Out, on I Heard Her Call My Name: https://faroutmagazine.co.uk/the-1968-song-lou-reed-said-set-the-tone-for-his-entire-career/
- RS 500 (2003) blurb.
- Discogs master 35320, release 372030 (US 1968).

Cells:
- genres:
  - Discogs styles: Avantgarde, Experimental, Art Rock, Noise Rock.
  - noiserock: Paste "its noise-rock viscera".
  - rockandroll: Paste "a belchy, squalid piece of noise-crusted rock-and-roll"; Pitchfork "simple rock'n'roll readymades".
  - drone: RS 500 "Drowning their songs in guitar fuzz and drone".
  - protopunk: Far Out calls I Heard Her Call My Name "a precursor to punk"; American Songwriter "the punky, forward-thinking White Light/White Heat"; Reed in the liner notes (RS): "the Statue of Liberty of punk". UNCERTAIN: no source uses the word "proto-punk". Drop it if the owner wants the exact term.
  - freejazz: Far Out says the guitar on one track is "indebted to Jimi Hendrix and free jazz". One track only, so it sits last.
- instruments: Discogs credits: Cale "Vocals, Electric Viola, Organ, Bass Guitar"; Morrison "Guitar, Bass Guitar"; Reed "Lead Guitar, Piano"; Tucker "Percussion". drums: Medialoper "Maureen Tucker using her drums as a treadmill".
- production:
  - distortion: RS 500 "guitar fuzz". Reed (RS 1989, quoted by Far Out): "I used the distortion to connect the notes".
  - feedback: UCR "discordant feedback"; Morrison, quoted by Far Out: "there’s all that white noise".
  - onetake: Pitchfork "ending with a one-take, two-chord, 17-minute speedfreakout".
- voice: spoken. Paste: Cale "unknots a shaggydog story" (The Gift, 8 minutes). This matches the VU & Nico row.
- Scales:
  - energy 5: RS "loudest, meanest, most ear-corroding moment"; Pitchfork "relentless, screeching, thudding".
  - polish 0: Pitchfork "this pinnacle of sloppy noise". Morrison: "what we were trying to do was really fry the tracks".
  - experimental 4: Discogs Avantgarde. Pitchfork notes the songwriting "is often a lot more conventional than it's reputed to be", so not 5.
  - tempo 4: "takes off at top speed" (Medialoper); "speedfreakout".
  - mood 1: Paste "Alienation is its main subject".
  - electronic 1: organ, electric viola and amplifier noise, no electronics.
- lyrics: Pitchfork "lyrics designed to horrify the bourgeoisie" and "references to illicit drugs and sex". Paste: "stories of sexual obsession", "danger and degradation". irony: Pitchfork on "SWEETLY!": "why is it still hilarious?"
- producers: Tom Wilson (Discogs).
- sounds_like: Jimi Hendrix [1/6]. Far Out: "the sprawl of his guitar is unforgettable in its intensity, indebted to Jimi Hendrix and free jazz" (I Heard Her Call My Name). I excluded the Rutles and Creedence comparisons (Pitchfork), which are about bonus or live tracks.
- influenced_by: Ornette Coleman [1/6]. Reed to Rolling Stone (1989), as quoted by Far Out, on the I Heard Her Call My Name solo: "I wanted to play like that". UNCERTAIN: this is a secondary quote; I could not open the 1989 RS original.
  - Guitar World 1998 (Reed: "I’d been listening to [avant garde jazz artists] Cecil Taylor and Ornette Coleman") is about the Velvets in general, not this album. https://guitarworld.com/magazine/lou-reed-talks-about-velvet-underground-songwriting-and-gear-1998-guitar-world-interview
- landmark 1: UCR "it's their most representative". RS: "for many fans, their best".
- legacy 4: quotes are in legacy.csv. Paste also says "the Velvets predicted both the Stooges and MC5". Not used: it sets up a contrast.

## cohen-songsofleonardcohen
Sources:
- Pitchfork, Brian Howe, 2007 (one review of the first three reissues; the page rating 9.6 covers the set): https://pitchfork.com/reviews/albums/11901-songs-of-leonard-cohensongs-from-a-roomsongs-of-love-and-hate/
- BBC Music, Tim Nelson, 2007 (three albums): https://www.bbc.co.uk/music/reviews/3f54
- PopMatters, Phillip Buchan, 2007-05-10: https://popmatters.com/leonard-cohen-songs-of-leonard-cohen-2496220767.html
- Far Out, Tom Taylor, 2023: https://faroutmagazine.co.uk/leonard-cohen-songs-of-leonard-cohen-album-review/
- Vice, Erik McLaren, 2014: https://www.vice.com/en/article/retrospective-reviews-leonard-cohens-songs-of-leonard-cohen/
- Hot Press Newsdesk, 2016: https://www.hotpress.com/music/leonard-cohen-tribute-death-of-a-legend-19336407
- Discogs master 3832: style Folk; Producer John Simon. The 2007 reissue credits John Hammond only on bonus tracks 11–12, so Hammond is left out.

Cells:
- genres: folk. Discogs. Pitchfork: "he emerged as a Dylan-inspired folkie". Vice: "the folk renascence of the 60s". Hot Press: "the sparse folk rhythms".
  - Not added: flamenco. Pitchfork's "finger-picked flamenco" describes his guitar style across three albums, not a genre of this record.
- instruments:
  - Hot Press: Simon's "decision to augment the sparse folk rhythms with, variously, flute, mandolin, strings and sundry Middle Eastern instruments" (the last are unnamed, so not mapped).
  - PopMatters: "music box sounds and angelic female choruses", "the sawing strings in 'Master Song'", "leaden guitar strums".
  - Vice: "Simon pushed for backing tracks – strings, horns, drums and back up vocals"; "Cohen picks his guitar like a melodic rain".
- production: stringarrangements. Pitchfork on "John Simon's arrangements"; Far Out "sweeping strings".
- voice: soft. Far Out "the first few hushed notes" and "his dry baritone". Vice "deep and airy can’t-quite-sing voice". PopMatters "world-weary monotone voice". Medium.
- Scales:
  - theatrical 1: Far Out "always feels like a man alone in a room".
  - polish 2: sparse, but "orchestral by turns" (Far Out).
  - mood 1: BBC "the acme of hippy gloom" (as others saw it), though with "romanticism and wry humour". So Long, Marianne is "most joyful".
  - experimental 1: Pitchfork "On paper, Cohen's music is astoundingly simple".
- lyrics: Pitchfork "love, lust, sex, religion, responsibility". Vice "love, sex, spirituality, and the human condition". BBC "the mix of eroticism and spirituality". Far Out on The Stranger Song's tale (storytelling).
- sounds_like: Bob Dylan. Hot Press: the album "was ... heavily in thrall to Dylan". I did not count BBC's "Dylanesque 'Store Room'", a bonus track.
- influenced_by: empty. Cohen credits an unnamed Spanish guitarist and the poet Lorca generally, not for this album.
- landmark 1: BBC "the absolute must-have classic". Pitchfork: it "establishes the themes and stylistic tics he would pursue relentlessly".
- Reception: PopMatters quotes Rolling Stone's Arthur Schmidt (1968): "There are three brilliant songs, one good one, three qualified bummers, and three are the flaming shits." Mixed at release; acclaim 5 today.
- legacy: no row. The sources only say Cohen in general is "Cherished by artists including Nick Cave, REM, Jeff Buckley" (BBC, about the three albums), not that this album influenced later music.

## beachboys-thebeachboystoday
Sources:
- Paste, Matt Mitchell, 2024-02-17: https://www.pastemagazine.com/music/the-beach-boys/time-capsule-the-beach-boys-the-beach-boys-today
- thebeachboys.com (the band's official site, which speaks for the artist): https://thebeachboys.com/blogs/news/the-beach-boys-today-and-every-day
- Louder/Classic Rock, Matt Stocks: https://loudersound.com/features/vinyl-treasures-the-beach-boys-the-beach-boys-today
- RS 500 (2003) blurb.
- Rolling Stone Brasil, album guide: https://rollingstone.com.br/musica/beach-boys-o-guia-completo-dos-albuns-da-banda/
- Discogs master 268265: genres Rock, Pop; styles Surf, Pop Rock; Producer Brian Wilson.

Cells:
- genres:
  - poprock, surf: Discogs.
  - pop: Discogs genre. Louder: "classic pop records".
  - baroquepop: Paste on side two, "the glow of doo-wop-inspired baroque-pop".
  - chamberpop: Paste: "Brian’s saccharine standards practically invented chamber-pop".
  - doowop: RS Brasil "harmonias doo-wop". Paste: "doo-wop background vocals".
  - Plain rock dropped: sources call side one "rock/pop" only (Louder).
- instruments, from Paste's track notes:
  - "tenor saxophone, autoharp, upright piano", Bill Pitman's guitar riff, Carol Kaye bass (Good to My Baby).
  - "a Baldwin harpsichord with Carrol Lewis’ double-reed harmonica" (When I Grow Up).
  - Hal Blaine's "sleigh bells, triangle, tambourine and castanets".
  - "timpani, tack piano, organs, horns, and vibraphone" (Please Let Me Wonder).
  - "temple blocks".
  - "cellos, violins, violas, autoharp, double-reed harmonica, organ, saxophones, cor anglais, temple block and timbales" (In the Back of My Mind).
  - Brian Wilson's memoir (quoted): "I doubled up on basses and tripled up on keyboards".
- production:
  - wallofsound: Louder "examining Spector’s Wall of Sound production techniques in excruciating detail"; Paste "Spector’s Wall of Sound formula".
  - overdubbing: Paste "used one track for vocal overdubs".
  - layeredvocals: Louder "layered harmonies"; Paste "stacked vocal augments".
  - stringarrangements: Paste "orchestral blankets", "dissonant orchestration".
- voice: empty. No source gives a lead voice type; the harmonies are backing.
- Scales:
  - split sides: official site "a perfect blend of era-defining pop songs and ballads"; Louder: side two "lavish, softer ballads that deal with ... sorrow and regret". Hence mood 3, tempo 3, groove 3 (side one dance songs).
  - polish 4: Paste "up to 11 players", takes "up to 30 times"; official "new level of songwriting and production sophistication".
  - theatrical 3: "ornate balladry".
- lyrics:
  - Official: "taught us how to break up, make up, grow up, and do it all while dancing".
  - Paste: "introspective, bluntly vulnerable, self-deprecating". When I Grow Up is "commentary on aging and masculine expectations" (identity).
- producers: Brian Wilson.
- influenced_by: Phil Spector. Brian Wilson's memoir, quoted by Paste: after the 1964 breakdown he vowed to "take the things I learned from Phil Spector and use more instruments whenever I could". Spector did not work on the album.
- sounds_like:
  - Phil Spector and Burt Bacharach. Paste: "Drawing on the easy-listening pop eccentricities of Burt Bacharach and Spector’s Wall of Sound formula".
  - Del Shannon [1/12] and Dion and the Belmonts [1/12]. Paste on Do You Wanna Dance?: "you can hear subtle influences from songs like Del Shannon’s 'Runaway' and Dion and the Belmonts’ 'I Wonder Why'". The song's writer, Bobby Freeman, is excluded as the covered artist.
  - The Chantels [1/12]. Paste: I'm So Young is "mirroring similar melodies to the Chantels’ 'I Love You So'". The Students and the Ronettes are excluded as earlier performers of the covered song.
  - 12 tracks counted, including the closing Bull Session.
- landmark 1: Louder "widely regarded as a pivotal record in the band’s discography". UNCERTAIN: Pet Sounds is the defining album; set it to 0 if "pivotal" is not enough.
- legacy 3: Paste quote is in legacy.csv. Louder also says its melancholy "can still be heard in the songs of today’s best alternative rock bands", but that is about Brian Wilson generally.

## byrds-sweetheartoftherodeo
Sources:
- Pitchfork, Alexander Lloyd Lindhart (Legacy Edition, 2003), page rating 9.7: https://pitchfork.com/reviews/albums/1059-sweetheart-of-the-rodeo-legacy-edition/
- Rolling Stone, Barry Gifford, 1968: https://www.rollingstone.com/music/albumreviews/sweetheart-of-the-rodeo-19680814/
- Toledo Blade, Rod Lockwood, 2003: https://www.toledoblade.com/a-e/music-theater-dance/2003/09/21/Byrds-pioneering-country-rock-experiment-changed-America-s-musical-landscape-for-good.print
- American Songwriter, Jim Beviglia, 2025: https://americansongwriter.com/behind-the-album-sweetheart-of-the-rodeo-the-bold-country-rock-move-by-the-byrds
- Daily Vault, David Bowling: https://beta.dailyvault.com/?p=68147
- RS 500 (2003) blurb.
- Discogs master 29947, release 1081165 (US 1968).

Cells:
- genres:
  - countryrock, folkrock: Discogs.
  - countryrock: RS 500 "set the stage for country rock".
  - country: Pitchfork "one of the Top 20 country records of all time"; Toledo Blade "a stone-cold country release from its opening track to the last".
- instruments:
  - Discogs: Steel Guitar (JayDee Maness, Lloyd Green); Guitar (Clarence White, Parsons, McGuinn); Banjo (McGuinn, John Hartford); Mandolin (Hillman); Bass (Hillman, Roy Huskey); Drums (Jon Corneal, Kevin Kelley); Piano (Earl Ball).
  - Toledo Blade: "pedal steel guitarist Lloyd Green peeling off a twang-heavy lead".
- voice: empty. Sources praise the harmonies (Pitchfork "astonishingly doomed harmonies") but give no lead voice type. Toledo Blade quotes Hillman: "Roger is definitely putting on an affected southern accent".
- Scales:
  - energy 2, theatrical 1: RS 1968 "simple, relaxed and folky. It’s not pretentious, it’s pretty". Pitchfork "Sweetheart is vastly less rocking than Merle Haggard's late-60s albums".
  - mood 2: Pitchfork "a blindingly rusty gait through parched weariness and dusted reverie"; "melancholy".
  - polish 3: RS "The musician-ship is excellent"; Haggard cover "too professional".
  - tempo 2: Pitchfork "the shuffling and galloping"; mostly ballads (RS).
- lyrics:
  - RS: "in the traditional C&W storytelling vein"; Blue Canadian Rockies "a particularly nostalgic track".
  - Toledo Blade: "songs about boozing, Jesus, broken hearts, longing".
- producers: Gary Usher (Discogs).
- sounds_like: Sonny & Cher [1/11]. RS 1968 on Nothing Was Delivered: "it breaks into a rock chorus worthy of Sonny and Cher".
  - Not used: Buck Owens (RS: "do not sound like"), Dylan (a covered artist), Haggard (contrast, and covered).
- influenced_by: empty. No band statement naming an artist was found. The search-snippet "Bakersfield" claims were unopened.
- landmark 1: Toledo Blade "the Byrds' seminal 'Sweetheart of the Rodeo'"; RS 500.
- Reception:
  - RS 1968 lukewarm ("The Byrds have made an interesting album. It’s really very uninvolved").
  - Toledo Blade: Hillman damns it "with the faint praise of being an 'interesting record'".
  - Pitchfork 9.7. Acclaim 5 today.
- legacy 5: Toledo Blade and RS 500 quotes are in legacy.csv.

## Uncertain (for the owner)
- WLWH `protopunk` (no source uses the exact word) and `influenced_by` Ornette Coleman (a secondary quote of RS 1989).
- Today! landmark 1 rests on "pivotal".
- Tommy voice `clear` rests on one blog.
- Pitchfork 9.6 for Cohen is one score for three albums. Pitchfork 10 for WLWH and 9.7 for Sweetheart rate reissues.


# Claude research notes (Oct 2026): shared file for Jessie Ware, Romy, Kim Petras

# New descriptors batch 3: notes and sources

## Ids and catalogue
- `jessieware-thatfeelsgood` (already in catalog.ts, slug of "That! Feels Good!").
- `romy-midair`: new artist `romy`. catalog.ts row (studio albums only):
  `['romy', 'Romy', '#e58fb8', 'Queer-club trance with a hushed heart', [['Mid Air', 2023]]],`
  scenes.ts: `romy: 'GB en 2020 pop,dance',` (solo since 2020; base genres pop and dance are in the scenes.test GENRES list).
- `kimpetras-slutpop`: change Kim Petras albums to
  `[['Clarity', 2019], ['Turn Off the Light', 2019], ['Slut Pop', 2022], ['Feed the Beast', 2023]]` (type `ep` in the descriptor; it's an EP, added on request).

## New tokens
- genre `braziliandisco`: Ware on "Begin Again" (Apple Music notes) names "Brazilian disco" next to bossa nova.
- Not added: "Eurovision pop" (Irish Times, about "Did I": a description, not a genre), "trance pop" (Romy, Beatportal: covered by trance + dancepop), "sophisti-pop" (Paste, about her earlier albums only).

## Sources opened
### That! Feels Good!
- Rolling Stone UK, Ware channels Madonna: https://www.rollingstone.co.uk/music/news/jessie-ware-says-she-channeled-madonnas-energy-for-her-new-album-28590/ . Ware: "Stuart had worked with Madonna, and so she was in my mind, too"; "It's hard to forget when you're holding the same mic that Madonna recorded Confessions on a Dance Floor on"; listening to Prince's Controversy "a lot" and wanting its energy. Gives influenced_by Madonna (Confessions on a Dance Floor) and Prince (Controversy).
- Rolling Stone UK, artist of the year: https://www.rollingstone.co.uk/music/free-yourself-how-jessie-ware-became-our-artist-of-the-year-35148/ . Metacritic 89, top-three album, Mercury nomination, "soul-infused". Producer split: Price 4 tracks, Ford 6.
- Pitchfork, 8.3, Best New Music (J. Escobedo Shepherd): https://pitchfork.com/reviews/albums/jessie-ware-that-feels-good/ . Sound of Chic, Sister Sledge, the Trammps, "a little P-Funk"; vocals between Donna Summer and Teena Marie; Chaka Khan on "Pearls"; "Grace Jonesian talk-singing"; falsetto; belting; French touch on "Freak Me Now"; Rhodes, strings, pitch-shifted vocal and boom-bap beat on "Lightning"; cowbell and horn section; funk bass; driving piano. Pitchfork names Kokoroko as the live band, but the credits list only some of its players (Sheila Maurice-Grey and others), so Kokoroko is not added.
- Paste, 8.2 (Eric Bennett): https://www.pastemagazine.com/music/jessie-ware/jessie-ware-that-feels-good-review . "Part Madonna's Confessions on a Dance Floor, part Countess LuAnn's 'Money Can't Buy You Class'" is about the whole album, so both go in sounds_like. Title-track verses like Blondie's "Rapture" (Autoamerican) [1/10]; "Begin Again" "taking on 'I Will Survive'" (Gloria Gaynor, Love Tracks) [1/10]; Weeknd-like synths on "Lightning" [1/10]; "club-pop", "trip-hop slow jam". The comparison to Madonna's speaking voice ("Shake the Bottle") is about her delivery, not the sound, so it isn't a separate link.
- Apple Music album notes (Ware speaking): https://music.apple.com/album/1668868373 . D'Angelo and James Brown (title track), Blondie and Tom Tom Club (the rapping), Donny Hathaway and The Gap Band ("Hello Love"), Stevie Wonder "Another Star" and Talking Heads' Stop Making Sense plus bossa nova and Brazilian disco ("Begin Again"), French house, Mousse T. "Horny" and Gwen McCrae ("Freak Me Now"), cabaret ("Shake the Bottle"), Sade, Madlib, Drake and R&B ("Lightning"), Earth, Wind & Fire, Minnie Riperton and Gil Scott-Heron ("These Lips"), house instrumental ("Free Yourself"). Róisín Murphy, named for "Freak Me Now", is left out: she has a voice cameo on the album (a guest).
- The Line of Best Fit: https://www.thelineofbestfit.com/news/jessie-ware-announces-fifth-album-with-new-single-pearls . Ware: "Pearls" was "inspired by divas like Donna Summer, Evelyn Champagne King, Teena Marie and Chaka Khan" [1/10 each].
- Discogs credits (API, release 26906057): https://www.discogs.com/release/26906057 . Produced by James Ford (1, 4–6, 8, 10) and Stuart Price (2, 3, 7, 9). Shungudzo's additional and vocal production is dropped. Instruments: bass, guitar, drums, percussion, keyboards, synth, piano, trumpet, tenor sax, trombone, brass, violin, viola, cello. Horn and string arrangements, programming, drum programming. Discogs genres: Electronic, Pop, Disco.
- Not verified, so not used: Ware citing "Vogue", Grace Jones and the B-52's for "Shake the Bottle" (only in Wikipedia); Italo disco (Wikipedia infobox cites Pitchfork, but the Pitchfork text doesn't say it); NME "If You Ain't Got No Money" comparison; Guardian 5/5 review (theguardian.com can't be fetched); AllMusic 4.5 (not opened).

### Mid Air
- NME interview (Nick Levine): https://www.nme.com/features/music-interviews/romy-debut-album-mid-air-the-xx-3494068 . Calls "Get Together" a song from "Confessions On A Dance Floor", "which Romy has cited as an influence"; Romy: "that's my favourite song". The writer calls the album "trance-fuelled", drawing on "pulsing trance and Balearic chillout", with a "house-flecked" "Loveher".
- Beatportal, Artist of the Month: https://www.beatportal.com/features/artist-of-the-month-romy/ . On Confessions, Romy: "I just kept coming back to it" (it set the album's bar). Asked if Everything But the Girl influenced her: "Definitely… part of my subconscious". Delerium's "Silence" (Tiësto remix) is "a record I played Stuart and Fred early on as a reference!" ("Silence" is on the album Karma). Romy: "trance pop bangers"; "referencing a 2000s pop-dance". "One Kiss" is praise, not an influence, so it isn't used.
- Pitchfork 7.0: https://pitchfork.com/reviews/albums/romy-mid-air/ . A homage to 90s/2000s dance-pop; Euro-trance on "Strong" and "Did I"; Balearic "The Sea"; piano house "Loveher"; disco closer; "Enjoy Your Life" might sit on Jamie xx's In Colour [1/11]; vocals evoke Cassandra Fox and Tracey Thorn (Everything but the Girl); layered vocals on "Twice"; glossy production.
- NME review: https://www.nme.com/reviews/album/romy-mid-air-debut-album-review-the-xx-3493303 . Trance, house, dance, Balearic; "Enjoy Your Life" beside Shapeshifters' "Lola's Theme" [1/11]; "crystalline" vocals. The score isn't shown on the page.
- DIY 4.5/5: https://diymag.com/review/album/romy-mid-air . "powerhouse vocal", synth-laden "Did I".
- The Skinny 4/5: https://www.theskinny.co.uk/music/reviews/albums/romy-mid-air . "electronic indie", "soothing vocals".
- Irish Times (mixed): https://www.irishtimes.com/culture/music/review/2023/09/08/romys-mid-air-lyrically-introspective-work-as-broad-brushstroke-eurovision-pop . Tracey Thorn ("Loveher"), "Robyn swirling around Ayia Napa" ("The Sea"), Faithless ("Strong"), Modjo's "Lady" and the Nolans' "I'm in the Mood for Dancing" ("She's On My Mind"), near reggaeton ("One Last Try"), ambient title track, piano-led "Loveher". Each is [1/11].
- Discogs credits (API, master 3230470, release 28189075). Producers: Stuart Price (9 tracks), Fred again.. (8), Jamie xx, Koreless, Brian Eno (1 each). Romy's own credit, Francine Perry and Avalon Emerson (additional) and Fred again.. as executive producer on track 11 are dropped. Styles: Dance-pop, Indie Pop, House, Synth-pop, Electro. Bass and drums on "Enjoy Your Life".
- Not used: WFUV "influenced Mid Air" playlist (Madonna, Alice Deejay, Kylie, Robyn): the claim is the writer's, not Romy's. The Guardian review (EBTG's Walking Wounded, Daft Punk filtered house) couldn't be fetched; it's known only through Wikipedia. Grammy nomination for "Strong" and Brit nomination: Wikipedia only, not verified.

### Slut Pop
- Paper (Dec 2021): https://www.papermag.com/kim-petras-coconuts-cover-2656085822.html . **No mention of Madonna or Confessions on a Dance Floor**, so the claimed Paper link is not confirmed and no Madonna link is added. Petras: "I make slut pop"; favourite albums are Britney's, "especially Blackout". The writer says the new music is "European pop-inspired", with euro-pop artists like Scooter. The Britney link is about the sexual themes (lyrics) and the "European" album might be a different project, so it isn't used. Searches for Slut Pop plus Confessions found no source.
- Apple Music playlist "Kim Petras: Influences" (Petras to Apple Music): https://shazam.com/playlist/pl.54306ed14c8e462c8d89dd0237588dc4/kim-petras-influences . Slut Pop "was inspired by 'a bunch of Euro shit from my childhood, like Scooter or Mousse T.—Horny ['98]'"; "I was listening to a lot of Ayesha Erotica, a lot of Nadia Oh". Calls it "high-energy… sex-positive". Gives influenced_by Scooter, Mousse T., Ayesha Erotica, Nadia Oh.
- VanyaLand: https://vanyaland.com/2022/02/11/kim-petras-shifts-into-sex-positive-overdrive-with-slut-pop/ . "seven supernova dance-pop tracks"; "the raunchiest femme-empowered blog house… since Amanda Blank" (sound and tone: sounds_like Amanda Blank, medium).
- In Review Online: https://inreviewonline.com/2022/03/11/slut-pop/ . Negative ("dull novelty record"); Dr. Luke produced every song.
- PinkNews: https://www.thepinknews.com/2022/02/11/kim-petras-slut-pop-dr-luke/ . Dr Luke "produced all seven tracks".
- PopCrush: https://popcrush.com/kim-petras-slut-pop-ep/ . "throbbing beats", Petras "coos" (voice soft, weak). Released on Republic.
- Beyond the Stage: https://www.beyondthestagemagazine.com/kim-petras-slut-pop/ . Positive, "pop".
- Discogs (API, master 2507143): style Europop, 7 tracks, EP.
- Thin row: no professional review gives instruments, production, theatrical, experimental, polish or tempo, so those cells are empty (confidence low). Sputnik's review is a user review (not used). Forbes, Rolling Stone, Medium and Uproxx couldn't be opened.

## Legacy
No source says any of the three albums influenced later music. Pitchfork credits What's Your Pleasure? (2020), not this album, with the disco revival. So legacy.csv has only the header.

## Couldn't open
Metacritic (403, legacy domain too), AllMusic, The Guardian (fetch blocked), Discogs web pages (403; the public API worked), Forbes, Rolling Stone US (tollbit redirect), Medium, Uproxx (timeout), Hypebae (empty), WKNC (503).

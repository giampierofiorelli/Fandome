# TLC — Fandome phase 01 research notes

Research date: 29 October 2026. Four **new** original studio LP descriptors. Genre evidence is itemised, including track-only styles; numerical scales are whole-album editorial scores (not objective measures), following `album-descriptors-guide.md`. Source IDs resolve to `tlc_phase01_sources.csv`. `status=draft` for every row.

## Identity, omissions and credits

- GitHub `descriptors/src/data/catalog.ts` already includes artist ID **`tlc`** and one album **`CrazySexyCool` (1994)**. `docs/descriptors/tlc.csv` already has a complete **`tlc-crazysexycool`** 27-column row; **do not overwrite or duplicate it**. No TLC artist in `seed.ts`. Add four original album titles to `catalog.ts` before validation.
- The material is grouped by original album, not streaming anniversary deluxe editions. The 2017 Deluxe adds remasters of *No Scrubs*, *Creep*, *Unpretty* etc., which are not newly composed or recorded 2017 album songs (`qobuz_tlc17_deluxe`).
- No multi-artist **co-billed** album in these four. Snoop Dogg on *Way Back* is featured; does not change album billing (`qobuz_tlc17`).

## tlc-ooooooohhhonthetlctip: *Ooooooohhh... On the TLC Tip* (1992)

**Genre evidence:** AllMusic explicitly identifies Contemporary R&B and New Jack Swing; Apple editorial describes breakbeat samples, hip-hop shouts and urban soul. AOTY includes Pop Rap, Hip Hop Soul and Southern Hip Hop. South/Atlanta designation is regional/taxonomic and sits last; the main album is R&B/new jack swing, **not pure rap**. (`allmusic_tip`, `apple_tip`, `aoty_tip`)

**Scales:** Energy 4 and groove/tempo 4 reflect the kinetic *Ain't 2 Proud 2 Beg*, *What About Your Friends* and *Hat 2 da Back*; ballad *Baby-Baby-Baby* pulls down the LP-wide intensity compared with a nonstop party record. Mood 4 chiefly bright and defiant; theatrical 4 for skits and overtly performative rap; experimental 2 for genre-blending within familiar R&B/pop song forms. Electronic 3 and polish 3 follow sampled, programmed production offset by real instrumental credits. (`apple_tip`, `allmusic_tip`, `qobuz_tip`)

**Voice / themes:** T-Boz's low, rounded lead, Chilli's clearer melodic singing and Left Eye's conversational fast rap; `clear|rap|powerful|soft` describes audible contrast, not specific vocal technique measurements. Group's direct account of safe sex and sexual agency, friendships, clothes and self-definition supports `identity|sensuality|social|party|love|storytelling`. (`apple_tip`, `qobuz_tip_review`)

**Instruments and production:** The credited instruments are **keyboards** (Babyface, Darren Lighty, Daryl Simmons), **drums** (L.A. Reid), **bass** (Kayo), **turntables/scratches** (X-Man) and **additional strings** on an original Jermaine Dupri cut; these are in actual track credits, not inferred from the genre. Sampling is verified by MusicBrainz named samples; programming by Donald Parks/Rick Sheppard and producers. No specific drum-machine model assumed. (`qobuz_tip`, `allmusic_tip_credit`, `mb_tip`)

**Producers:** Qobuz and AllMusic support Dallas Austin, Babyface, L.A. Reid, Daryl Simmons, Jermaine Dupri, Marley Marl, Da Funky Bunch and Kayo on individual tracks. L.A. Reid and Babyface also executive-produce at album level, but independently have track-level producer/co-producer credits; that is the reason they remain. Vocal arrangers and sampled-artist names are excluded. (`qobuz_tip`, `allmusic_tip_credit`)

**Reception and similarity:** Steve Huey notes hit singles but regards album tracks as uneven. Media mention Salt-N-Pepa and Bell Biv DeVoe mainly regarding *image* and social presentation, which does not justify a sonic `sounds_like` value. `influenced_by` stays empty: neither sampling nor lookalike criticism is evidence of a stated musical influence. (`allmusic_tip`, `qobuz_tip_review`)

## tlc-fanmail: *FanMail* (1999)

**Genre evidence:** R&B, hip-hop soul and dance-pop dominate. AOTY also specifies Electronic and Glitch Pop; their subordinate position is deliberate. Dallas Austin specifically recalls borrowing **drum-and-bass** rhythmic ideas for the *FanMail* title track; that source is firsthand and the token is tail-only, **not an album-wide jungle/DnB label**. (`allmusic_fan`, `aoty_fan`, `billboard_oral`)

**Scales:** Electronic 4, experimental 4 and polish 5 reflect a dense synthetic/hi-fi 1999 context, laptop greeting voice Vic-E, telephone keypad sound and interrupted beats. Energetic dance singles contrast numerous ballads: energy 3, mood 3, tempo 3, groove 4; theatrical 3 for sci-fi conceptual skits, identity drama and mechanically generated voice, but the sung leads stay relatively intimate. Pitchfork's retrospective hears productive futuristic restlessness; contemporary LA Times values the beats, though calls their vocal technique relatively limited. (`pitchfork_fan`, `latimes_fan`, `billboard_oral`)

**Instruments:** 1999 original Qobuz track personnel explicitly credit *No Scrubs* acoustic guitar, Babyface acoustic baritone/electric guitars and keyboards, **Greg Phillinganes piano**, **harmonium**, **Colin Wolfe/Nathan East bass**, **Tom Knight drums**, **Paulinho da Costa percussion**, and trumpets/trombones on the final cut. Instrument tags describe verified recordings; do not confuse a track's acoustic guitar with the album's principal production mode. (`qobuz_fan`, `chilli_scrubs`)

**Production:** Qobuz lists drum programming. Austin and T-Boz themselves describe voice-from-Mac software and telephone-keypad rhythm inserted into songs: `programming|drumprogramming|sampling`; **not** `autotune`/`vocoder` unless a specific source confirms those technical treatments. The robotic speech was **Vic-E's computer voice**, not evidence of a vocoder applied to Chilli's lead. (`qobuz_fan`, `billboard_oral`)

**Producers and sonic analogies:** Dallas Austin primary producer alongside Babyface, Jermaine Dupri, She’kspere, Jam and Lewis, Cyptron and Debra Killings in Qobuz/album credits. Do not mistakenly list Kandi Burruss as producer simply because she wrote *No Scrubs*. *Los Angeles Times* directly compares lead vocal quality to Janet Jackson; `sounds_like` is therefore justified, not an album influence. (`qobuz_fan`, `latimes_fan`)

**Documented album/track influences:** T-Boz says *Shout* was directly inspired by **Tears for Fears' song** of the same name (on *Songs from the Big Chair*). Dallas Austin says *Automatic* takes inspiration from **Prince's song** of the same name (on *1999*). T-Boz directly describes borrowing **Nirvana** *Smells Like Teen Spirit*'s quiet/loud structure (from *Nevermind*) for *I'm Good at Being Bad*. These are **specific tracks**, not a claim about the whole record's sound. The `influenced_by` field lists source-confirmed participants and original albums in parentheses. (`billboard_oral`). The “Mac” description is technical process, not an artistic influence from Apple.

## tlc-3d: *3D* (2002)

**Genres:** AllMusic labels R&B / Contemporary R&B / Dance-Pop; AOTY adds Pop, Hip Hop, Pop Rap. Soul is a lower-level vocal/R&B trait. Some hip-hop or pop-rap sections come from guest/Left Eye verses, not every track. (`allmusic_3d`, `aoty_3d`, `qobuz_3d`)

**Scales:** Energy 3, electronic 3, groove 4, tempo 3 across tender slower songs, funk/dance grooves and some rap. Mood 3 balances positivity and grief/romance; experimental 2 because the hip-hop/R&B crossover updates their signature arrangement rather than presenting an entire new method. Polish 4 high-budget multi-producer studio sound. Theatrical 2 is a mainly song-led album rather than elaborate concepts. (`allmusic_3d`, `qobuz_3d`, `aoty_3d`)

**Verified instrument and production credits:** Qobuz lists **Babyface acoustic/electric guitars and keys with drum programming** on *Hands Up*, **Colin Wolfe bass, Tom Knight drums, Tony Reyes guitar, DJ Ruckus scratching** on *Damaged*, guitar/strings elsewhere, and **Rodney Jerkins overdub engineer** on *Turntable*. Thus guitar, bass, drums, keyboards, acoustic guitar, electric guitar and turntables are included. `overdubbing` denotes an explicitly credited studio process; no device brand guessed. (`qobuz_3d`, `qobuz_3d_cross`)

**Production roles:** Dallas Austin, Babyface, Daryl Simmons, Rodney Jerkins, The Neptunes, Eddie Hustle, Missy Elliott, Timbaland, Raphael Saadiq and Organized Noize appear as track producers/co-producers. Note especially: Qobuz lists Timbaland as producer on *Dirty, Dirty*, but **guest** Missy Elliott is also a credited producer; she is not assigned production just for rapping. Guest musicians' contributions are not `influenced_by`. (`qobuz_3d`, `aoty_3d`)

**Release context:** Lopes recorded portions of the album before her death in April 2002. *3D* is an **original studio LP**, released afterward, not a greatest-hits collection or later posthumous remix project. Exact day differs in AllMusic (17 September), Qobuz (10 October) and Album of the Year (12 November); Fandome stores **year 2002** only. (`allmusic_3d`, `qobuz_3d`, `aoty_3d`, `mb_3d`)

## tlc-tlc: *TLC* (2017)

**Genres:** Mainstream contemporary/adult R&B with pop and soul; hip-hop motifs. The disco feel is explicitly tied to *It's Sunny*, G-funk to *Way Back*, folk to *Start a Fire*, and trap to discrete modern touches. Secondary styles stay at the end and are **not** whole-record claims. (`allmusic_tlc17`, `qobuz_tlc17review`, `standard_tlc17`, `guardian_tlc17b`)

**Scales:** 3 energy, 3 electronic, 4 mood, 2 theatrical, 2 experimental, 4 polish, 3 tempo, 4 groove. These are low-drama, warm retro grooves with alternating softer moments and confident self-description, recorded with updated modern textures. Critic disagreement: Pitchfork celebrates a compassionate epilogue and varied career tribute; Slant sees too much unchallenging nostalgia. (`pitchfork_tlc17`, `slant_tlc17`, `guardian_tlc17`)

**Instruments and processing:** Guardian explicitly mentions crunchy **guitars** on *American Gold*, and an acoustic arrangement in *Start a Fire*. Another contemporary review names bright **brass** tones in disco-styled *It's Sunny*; this is a **sampled brass sound**, not a documented live brass section. `sampling` is supported by sampled 1960s–1970s song elements on *It's Sunny* (`pitchfork_tlc17`, `standard_tlc17`). No unsupported drum-machine model or unexplained studio devices added. (`guardian_tlc17`, `pitchfork_tlc17`)

**Production personnel:** Use original 2017 Qobuz track-level `Producer` metadata; many composers/publishers named in metadata are **not** producers. Qobuz records D'Mile on *Way Back*, Ron Fair on *It's Sunny*, Michael Busbee/Casper & B on *Haters*, Carnoy Watkins on *Start a Fire* and *American Gold*, Cory Mo on *Scandalous*, Ray Keys on *Joy Ride*, etc. `qobuz_tlc17`. Note that not every edition provides exactly the same metadata formatting; preserve primary role explicit credits.

**Vocals and status:** The primary leads are **T-Boz and Chilli**. Although some 2017 reviews say Left Eye had “no input,” T-Boz said a **previously recorded SPOKEN interview clip** of Left Eye was set over newly made music. Therefore `spoken` remains in `voice` in a small role; **not a new Left Eye rap session**. Featured rapper Snoop Dogg appears on the lead single. Original 12-track version includes an extended alternate *Way Back*, not a separate new album; the Deluxe additionally includes old remastered songs (`e_online_tlc17`, `qobuz_tlc17_deluxe`).

**Influences:** The *Cherrelle (High Priority)* tag in `sounds_like` denotes **Pitchfork's explicit sonic comparison** between *Way Back* and *Saturday Love*, not evidence TLC named Cherrelle a formative influence. *It's Sunny* samples 1970s music but sampled artists are excluded from `influenced_by`. `pitchfork_tlc17`.

## Album-level influence rule

- Only **FanMail** has verifiable **specific song-level** musical influence testimony in this batch, from the 2019 first-person *Billboard* oral history. No source claimed the other three albums were artistically shaped by the artists they sample or cover. Leave their `influenced_by` cells blank. The band's general admiration for Janet Jackson and Salt-N-Pepa does **not** prove a specific album influence.
- In phase-01 artist influences (see `CLAUDE_IMPORT.md`), do not confuse performers who **influenced TLC** with later musicians whom **TLC inspired**.

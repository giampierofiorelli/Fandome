# Ariana Grande — Fandome Phase 03: album evidence and editorial judgments

**Cutoff:** 25 October 2026. **Branch:** `descriptors` (read-only). **Scope:** two new records only, following Phase 01 (2013–2018) and Phase 02 (2019–2024); **no live albums**. Numeric scores are original editorial syntheses from expert writing, never critic ratings or acoustic measurements. Status remains `draft` until independently reviewed.

## Catalog preflight and identity

- GitHub `docs/descriptors/ariana.csv` has eight records from Phases 01–02, including `ariana-wickedthesoundtrack`, and neither target record. Both new IDs follow the repository lowercase ASCII slug algorithm: `ariana-wickedforgoodthesoundtrack` and `ariana-petal`.
- `Wicked: For Good – The Soundtrack` (21 Nov 2025) is the sung soundtrack, not **Wicked: For Good – Original Score** (released 5 Dec 2025), the sing-along release, short EP or 2026 commentary edition (W01/W08). Ariana is a major performer but **not the only performer**; the descriptor represents the complete cast album (not exclusively Ariana tracks).
- `petal` (31 July 2026, lower-case official styling) is Ariana’s eighth studio album, 12 tracks, Babydoll Music/Republic; **not** a reissue of `eternal sunshine` (P01/P02).
- There is no new genre token proposed. `musicaltheatre`, `showtunes`, `triphop`, `ukgarage`, `newwave`, etc. already occur in the branch’s `scenes.ts`, `genreFamilies.ts` and static validator. Keep detailed album-versus-track scope in genre evidence.

## 2025 — Wicked: For Good – The Soundtrack

**Identity / source set:** W01–W10. Film’s second act contains two new songs ('No Place Like Home' and 'The Girl in the Bubble'); it is an ensemble cast release. Composer Stephen Schwartz separately documents the score composed with John Powell. John Powell is a **film-score composer**, not an automatically credited *song-album producer*. The Qobuz song-release producer credits list **Stephen Schwartz, Stephen Oremus and Greg Wells** (W02/W03). Ariana Grande and Cynthia Erivo are **vocal producers**; they are not silently promoted to general music producers. Jon M. Chu and Marc Platt are **executive producers** in the song-recording credits, omitted from general music-producer field.

**Genre evidence:** `soundtrack|musicaltheatre|showtunes` throughout; music orchestrated for a large cinema ensemble. Soundtrack is an album category, musical-theatre composition style and show tunes a distinct normalized style. Do **not** add `classical` simply because of symphonic instruments. Musical Theatre Review and interview material show theatrical adaptations and extensive orchestra, not classical composition taxonomy (W03–W06).

**Score reasoning (0–5, ordered):**
- `energy=3`: energetic witch-hunter choruses, 'No Good Deed' and sweeping 'Thank Goodness' contrast emotional intimate reprises and farewell ballads (W04/W05).
- `electronic=1`: mainly acoustic players and symphony orchestra, with some amplified keyboards/screen-music elements; 85-person orchestra directly described by team (W06/W09). Low, not absolute zero.
- `mood=2`: darker second-act themes, public deceit, separation and persecution predominate; friendship and uplift at finale temper near-zero gloom (W03/W04/W06).
- `theatrical=5`: highest anchor, Broadway-to-film dramatic storytelling, multiple character voices, big choral scenes, orchestration, climaxes (W03–W06).
- `experimental=1`: expanded but fundamentally established Broadway-score motifs and song forms, not avant-garde production (W04/W05).
- `polish=5`: elaborate supervised large-studio orchestra and vocal recording, detailed film mixes; *not* inference from budget alone (W02/W06).
- `tempo=3`: songs range from controlled ballads to medium/up-tempo ensembles, no consistent quick BPM (W04/W05). Editorial category-scale estimate, not a measured median.
- `groove=1`: time/rhythm serve narrative emotion rather than a sustained dance floor; a few animated production numbers do not make club-oriented output (W04/W05).
- `voice=powerful|clear|choral|soft`: both Erivo/Grande strong projection plus cast choruses and lighter introspective Glinda moments. **Whole cast**, unlike sole lead of Grande’s studio albums (W04/W05/W07).
- `lyrics=storytelling|identity|social|political|love|introspection|heartbreak`: political manipulation and stigmatization, loyalty/friendship, social roles, romantic separation and character introspection in soundtrack plot; all source-supported thematic clusters, not every tune (W03/W04).
- `scene=Film adaptation of Broadway musical theatre`; `language=en`.
- `sounds_like=Kristin Chenoweth|Idina Menzel`: predecessor stage Glinda/Elphaba musical delivery is a **sonic comparator**, never an artist influence claim; not a match to unrelated pop records. If comparisons to specific performances are regarded as derivative rather than album-wide, Claude may leave blank. `influenced_by` deliberately blank: direct stage-source material is not proof of artistic influence by a recording artist.
- `landmark=1`: important second half of the major two-film vocal/performance chapter, editorial importance rather than retrospective award tally.
- **Critic disagreement:** AP praises emotional showpieces but notes several tracks are overfull with dialogue/plot outside film; Musical Theatre Review admires orchestration but is less persuaded by the two new songs (W04/W05). The success of new songs is not a sonic metric.

## 2026 — petal

**Credits:** P01/P02/P10 show all music production credited to **Ariana Grande|ILYA|Max Martin**: Grande and ILYA appear on all songs, Max Martin on 'hate that i made you love me', 'petal' and 'stay'. Some entries spell ILYA as Ilya Salmanzadeh; **one person, not two producers**. Qobuz lists Davide Rossi as *string arranger/string producer* on 'oh well', not general track producer, so he is not added. Lou Carrao, Juan Arguello, Randy Merrill, Serban Ghenea and others are credited for recording, mixing or mastering, not as music producers.

**Whole-album and qualified genre scope:** `pop|rnb|contemporaryrnb|electronic|dancepop` are broad taxonomic labels backed by P03/P04/P06/P07; the actual album is more inward-looking and dark than an arena-dance set. `synthpop` is explicitly named by NME for opener 'kiss me'; `triphop` title-track rhythm / wider atmosphere (P05/P11); `ukgarage` scattered shuffling percussive fragments (P04); `newwave` on 'bad thing (bunny hop)' (P05); `dreampop` guitars on that track (P06); `funk` in 'never get over me' (P05); `downtempo` in 'big feelings' (P03). These lower-ranked tokens are **not** presented as dominant and are documented as track/texture evidence in genre CSV. A reviewer should decide whether recommendation weighting appropriately penalizes peripheral genres.

**Score reasoning:**
- `energy=2`: whisper-dominant sustained restraint, occasional thudding sub-bass and late uptempo burst but no constant high-drive sequencing (P03/P06).
- `electronic=4`: synth hooks, distorted electronics, programmed percussion, sub-bass and electronic processing across multiple tracks, despite a few guitar/strings touches. Not fully synthesised 5 (P04/P05/P06).
- `mood=1`: Guardian, LA Times and Pitchfork repeatedly characterize anger, chill, loneliness, anxiety and darker confessional atmosphere; periodic affection or flirty hooks do not make the whole album euphoric (P03/P04/P09).
- `theatrical=2`: mostly intimate whisper, layered effects and some melodramatic synth/lyric gestures; far less stage-musical grandeur than Wicked (P03/P04/P05).
- `experimental=3`: new angular rhythm programming, odd tonal contrasts and sound design within recognisable pop writing; Pitchfork explicitly argues the experiment is more modest than Variety’s enthusiastic reading (P03/P05).
- `polish=4`: complex sound layering and careful vocal production, despite intentionally crunchy/broken distortion, which does **not** make it lo-fi by default (P02/P04/P05).
- `tempo=2`: slow to mid-paced majority, with one quick new-wave-tinged song; number is ordinal not BPM (P03/P05/P06).
- `groove=2`: low and head-nodding R&B/trip-hop grooves plus a few buoyant songs; relatively little explicitly dancefloor-oriented writing (P03/P06).
- `voice=soft|clear`: intentionally airy intimate upper register with multiple soft stacked harmonies; crescendo on a particular interlude does not warrant whole-album `powerful` (P03/P04/P06).
- `lyrics=introspection|identity|heartbreak|love|sensuality|social`: recurring boundaries with press/fandom, scrutiny, relationship breakdown and darkly erotic humour; `social` refers to press/parasocial contexts, *not* political protest (P03–P06/P09).
- `sounds_like=Kelela|FKA twigs|SZA|Portishead`: explicit sonic analogies by critics; Portishead comparison is particularly a **title-track rhythm** and must not be misconstrued as all-album identity (P04/P05/P06).
- `influenced_by=Imogen Heap`: Guardian specifically describes Grande’s long-standing inspiration and draws the album’s stacked-harmony parallel (P04). This meets the guide’s *named expert attribution*, though not a first-person quote directly linked to **petal**, and is the only causal artist-influence entry; review on import recommended. Kelela, Portishead, FKA twigs and SZA are **comparisons only**, not asserted direct inspirations.
- `landmark=0`: this brand-new eighth album’s retrospective career-defining status is not established, notwithstanding its stylistic turn; editorial abstention from quick canonisation.
- **Critic disagreement:** Variety calls the album a substantial innovative advance, whereas Pitchfork finds the experiment sometimes limited and songs weaker; AP praises restraint but finds some parts low-key (P03/P05/P06). We preserve disagreement, not convert review grades to eight descriptors.

## Import and rights guardrails

1. Merge exactly **two** new rows into the existing eight-record `docs/descriptors/ariana.csv`; preserve every existing album ID, row, and source without replacement. Add entries to Ariana's `src/data/catalog.ts` in chronological order. Other phases remain untouched.
2. Validate with `npx vite-node scripts/validate-descriptors.ts`, run repository tests, and leave CSV `status=draft` until a separate independent check.
3. `Wicked` soundtrack voices and mood describe *all cast performances*. Genre evidence does not claim the film's original instrumental score is part of this song album.
4. All album-specific claims are paraphrases, sources have explicit web URLs, and no critic-review paragraphs or song lyrics are copied.

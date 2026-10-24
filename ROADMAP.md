# Fandome roadmap: decided, to do later

Things we agreed on but deliberately postponed. Check this list before planning new work.

## Waiting on the owner (accounts, keys, details)

- **Apple Music in the listening party.** Use MusicKit on the Web: Apple Music subscribers log in with their Apple ID and full tracks play inside Fandome, synced like Spotify (non-subscribers get 30s previews). Unlike Spotify Connect it plays in the browser tab, not in the Music app; on iPhone the page has to stay open.
  - Needs an Apple Developer account ($99/year) to create a MusicKit identifier and private key.
  - The developer token (JWT, max 6 months) can be generated in the nightly GitHub Action from a repository secret and shipped with the site; no server needed.
  - Load Apple's MusicKit script only after the person taps "Connect Apple Music" (GDPR: no data to Apple before that).
- **Spotify Client ID** for the listening party: paste it into `src/config.ts` (`SPOTIFY_CLIENT_ID`). Development mode allows 25 users.
- **Ticketmaster API key** for live concert dates: add the `TICKETMASTER_API_KEY` repository secret (Settings → Secrets and variables → Actions). The nightly job in `scripts/fetch-concerts.ts` does the rest.
- **Owner name, contact email and address** for the legal notice, privacy policy and terms (GDPR, D.Lgs. 70/2003 art. 7, DSA arts. 11–12): `OWNER_NAME`, `CONTACT_EMAIL`, `OWNER_ADDRESS` (and `OWNER_VAT` only if it becomes an economic activity) in `src/config.ts`. Shown in the footer and on `/legal`.
- **MusicBrainz / ListenBrainz account** (for the recommendation data, when we get there): reading MusicBrainz needs no account (just our app name and max 1 request/second). Steps: 1) create an account on musicbrainz.org and confirm the email; 2) sign in on listenbrainz.org with the same account; 3) copy the personal token from ListenBrainz settings and add it as the `LISTENBRAINZ_TOKEN` repository secret (never paste it in chat); 4) only if Fandome becomes commercial: commercial licence/supporter plan on metabrainz.org, needed for MusicBrainz tags, genres and ratings (CC BY-NC-SA, non-commercial); core data (artists, albums, recordings, relations, areas) is CC0 and free for any use.
- **Lawyer review** of the privacy policy, terms, moderation and ticket-board wording before opening to the public.
- **Official artist profile photos (owner's decision).** Replace the temporary Wikimedia Commons photos with the profile image each artist currently uses on Spotify / Apple Music, the one they chose to represent themselves now. Owner's position: Fandome is for fans but above all to promote and support the artists; the owner takes responsibility for using these images.
  - Source: Spotify Web API (`/v1/artists/{id}` → `images`) or Apple Music API (artist artwork), fetched in the nightly GitHub Action and saved with the site, so visitors' browsers don't contact Spotify/Apple.
  - Write the statement in the right places, starting with the site footer and the Legal notice: images belong to the artists and their rights holders, used to promote and support them, removed on request.
  - Then remove the Commons credits (`src/data/artistPhotos.json`, `PhotoCredit`, the Legal notice list) and the temporary photos in `public/artists/`.
  - Until then the Commons photos stay, as a demo (sombr, Muse, Tina Turner and Michael Jackson have none yet).
- **Artist catalogue**: 58 rooms in `src/data/seed.ts` + `src/data/catalog.ts`, with main studio albums typed by hand. Next: albums from MusicBrainz automatically (free, 1 request/second), then a "Request an artist" flow (create the room after N requests or admin approval).

## Product, later

- **Real listening parties** (today: one demo party hard-coded in `src/data/seed.ts`, always live in a loop, fake listeners, local-only chat).
  1. Create a party: host picks the artist, an album (track list and durations from MusicBrainz) or their own running order, and a start date/time.
  2. Announce it in the artist room and on Home with a countdown, "Remind me", and suggest-to-friends (like artist rooms).
  3. Real start and end: playback position comes from the start time (works without a server, same idea as `src/lib/party.ts`); the party ends after the last track and stays as a memory with chat and "I was there".
  4. Rules: only recently active users can host (like pages); parties can be reported and handled by the artist's moderators.
  - Shared presence (who's really listening) and a shared chat need the backend.

- **Ideas from the research documents** (not built yet):
  - "Start here" lane in each artist room for new fans (eras, where to begin, beginner questions welcome).
  - Lasting discussions per era / album / tour, findable with search ("the memory of the fandom").
  - The 5 plain rules shown during sign-up.
  - Recognition for helping, never for spending: "member since", "guide saved 25 times", "welcomed 50 new fans".
  - Accessibility for all ages: adjustable text size and an "essential mode" with fewer things on screen.
  - Fans near you: pick a city (never an address), meetups only in public places (needs the backend for real counts).
  - When a concert chat or listening party ends, it becomes a lasting discussion.
  - Email digest and notification modes: instant / digest / only important (needs backend and email).
  - Optional supporter membership paying for site features, never "closer to the artist"; later Community Originals.
  - Review direct messages with the lawyer before opening to the public (the documents advise none at first).
- **Songs as well as albums** (owner's idea): link songs in posts like albums (title becomes a link to a song page), "most discussed songs of the day", song ratings. Needs a song catalogue (MusicBrainz recordings).
- **Healthy competition between fandoms** (owner's idea): friendly, non-toxic challenges between fans of different artists whose real goal is discovering the other artist's music (e.g. "swap weeks": each fandom recommends three songs to the other, polls, listening challenges). Never rankings of "best fans", never insults: hate, bullying, body shaming and fan wars are against the rules.
- **Pages for emerging artists** (owner's idea): if an artist has no room yet, a fan, the artist's management or the artist can request one; once created, fans can gather there and help the artist get noticed, without an algorithm deciding who is seen. Verification for artist/management requests.
- **Scenes: discover music from other countries** (owner's idea, research Oct 2026). One system for every scene, Italy first, then Brazil, Spain and Latin America, France, Afro (Nigeria, South Africa), Korea; Japan and the Arab world later.
  - Why: over half of Spotify listening is non-English; songs in 16 languages reached the global Top 50 in 2025 (2× 2020); fastest-growing genres: Brazilian funk +36%, K-pop +31%, Latin trap +29%; Latin America +17%, MENA and Sub-Saharan Africa +15% (IFPI 2026). Italy: 60M+ monthly listeners abroad, export royalties +180% since 2020 (FIMI). Fans abroad keep asking "I like X, what should I listen to?", "I know Måneskin, what next?", "where do I start?" and get answers scattered across Reddit threads and playlists.
  - Data: every artist gets country, language, era, scene and a few sound scales (acoustic↔electronic, accessible↔experimental, intimate↔theatrical), plus hand-made links (sounds like, influenced by, same scene, precursor/successor). Adding a scene = adding artists and links, no new code.
  - No questions to the user: we already know the artists they follow and the albums they rate. Three automatic paths: Bridge ("you like Charli XCX: in Italy try…, in Brazil…"), Go deeper (you follow one artist of a scene → discover the scene), "A scene you don't know yet" (weekly, among growing scenes). Every suggestion says why.
  - Each scene page: Start here, Now, Then (decades), If you like…, its entry moments.
  - Not a separate magazine: content comes from fans, Fandome adds the map and light curation.
  - **Status (Oct 2026):** step 1 done: `src/data/scenes.ts` gives every artist room country, language, starting decade and genres (shown in the room, checked by a test). Paused here by the owner's choice.
  - **Missing before going on:** more artists for the Afro (2) and Korean (4) scenes; a check of countries and genres (typed by hand); the hand-made links between artists; the sound scales.
  - **Research done:** see [`docs/recommendation-research.md`](docs/recommendation-research.md) (approaches, open data, proposed hybrid design, phases).
  - **Filling the album descriptors ourselves** (owner's decision: enough to start, MusicBrainz later): format, scales and a ChatGPT prompt in [`docs/album-descriptors-guide.md`](docs/album-descriptors-guide.md). Start from the most important artists, one artist per batch; Claude validates and imports.
  - **Progress:** 41 releases described (Madonna 15, Charli xcx 11, Annalisa 9, Elodie 6), researched with ChatGPT, validated and imported by Claude; on `main` in `docs/descriptors/` (the `descriptors` branch stays the inbox for new batches). Rules: no limit on values, every genre a source names is added. Open: second rater for `reviewed`.
  - **Phase 2: similar albums** (owner's idea): **first version live (Oct 2026)**. Album pages show "The sound" (genres, scene, producers) and "If you like this album": albums by other artists, max 2 per artist, each with its reason (`src/lib/similar.ts`, data from `docs/descriptors/*.csv` via `src/lib/descriptors.ts`). Score: genres weighted by order + sound scales (only where both known) + documented links (sounds like / influenced by, scaled by genre fit; shared producers, influences, comparisons). Drafts are used (all rows are draft today), weighted by confidence. Later the same for songs.
  - **Done (Oct 2026):** "Artists you might like" in Explore mixes people (follows, co-fans) and sound (albums you rated 8+/10 as the strongest seed, then the albums of artists you follow), with reasons like "Because you rated Brat: both produced by Cirkut"; Explore shows "Because you rated…" with similar albums.
  - **Done (Oct 2026):** discovery bonus (+0.05) for artists/albums from a country none of your artists come from, shown as "from Italy"; "Not for me" (×) hides a suggested artist or album for good (`User.notForMe`, local).
  - **Engine v2 (Oct 2026), all in `src/lib/similar.ts`, `src/lib/paths.ts`, `src/lib/suggest.ts`:** related genres via `src/data/genreFamilies.ts` (every genre must have parents, enforced by TypeScript); voice, lyric themes, era, scene and language; artist profiles computed from albums (landmarks 1.5×); two-step links through a third artist or producer; variety re-rank (MMR) plus max 2 per artist; low ratings and hidden albums push similar ones down; "Similar" tab on artist pages; Discover in Explore (Bridge, Go deeper, A scene you don't know yet, weekly rotation); "New to me" (✦) saved as private discoveries in the profile's Saved tab.
  - **Quality check:** `src/lib/recQuality.ts` (report: `npx vite-node scripts/eval-recommendations.ts`); tests fail the build below thresholds (coverage ≥ 70%, every artist suggested, top album ≤ 15% of suggestions, variety ≥ 50%, other country ≥ 30%, 100% with a reason). Oct 2026 with 47 albums: coverage 85%, variety 75%, other country 77%, top album 11%.
  - **Later:** ListenBrainz "listened together" signal (owner's account); weights tuned on real fans' follows once there is a backend; "New to me" counts as a discovery metric then.
  - **Owner's decisions:** descriptors go on albums (an artist like Madonna spans many styles; the artist profile is computed from the albums, weighting traits that repeat; the fan's rated albums are the seed). One engine for all suggestions: Artists you might like, Scenes, starter packs, album pages.
  - **Before building the algorithm:** a thorough study of how engineers build music recommendation (content-based vs collaborative filtering, graph-based, how Spotify/Pandora/Last.fm/Music Genome describe music, cold start, explainability, diversity and "discovery value"). Genre alone is not enough: we will need much richer descriptors per artist and album (sound, mood, energy, era, scene, influences, audience) and decide which data we can source (MusicBrainz tags, Wikidata, editorial tagging, fans' own signals).
- **Special weeks** (owner's idea): when something big happens (Sanremo, Eurovision, a major festival, the start of a big artist's tour, a long-awaited album), that week becomes special: a live room with chat, a banner on Home, a themed feed, an entry path for newcomers ("You heard Sanremo. Now discover Italian music"), and suggestions tied to the event. Calendar of special weeks per scene.
- **Content moderation for music-only rule**: today "Not about music" is a report reason and a rule; later, a gentle hint in the composer when a post seems off-topic.
- **Funding the site** (to evaluate, owner's decision): ads, the collector marketplace, tips to thank the people who post. Whatever we choose, sponsored content is always clearly labelled (DSA art. 26) and never disguised as a recommendation; the manifesto deliberately does not promise "no ads".
- **Marketplace for collectors** (buying and selling). Not now: the collection is a showcase only. Only as a separate product with identity checks (KYC), protected payments and legal review (counterfeits, scams, ticket touting, IP).
- **Real post translation**: Chrome's on-device Translator where available, a free service (e.g. MyMemory, ~5,000 chars/day) as fallback. Today translations are pre-written demo text.
- **Real brand icons for unknown websites** in profile links (favicons) once there is a server to fetch and store them; today unknown sites get a generic link icon, to avoid sending visitors' IPs to third parties.
- **Font credits line** (optional): "Fonts: Geist and Doto, SIL Open Font License 1.1" in the privacy page or terms.

- **Remove demo numbers before launch**: `demoAlbumBuzz` in `src/data/seed.ts` adds fake "fans talking" to the album chart for the demo.

- **Our own link-preview reader** (instead of Microlink): browsers can't read other sites' pages (CORS: Zalando, YouTube, Spotify, Rolling Stone, Repubblica, Pitchfork all block it), so a few lines of our own code must run on a server. Free option: a Cloudflare Worker on the owner's free account (100k requests/day), which reads the page's `og:title` and `og:image` (the picture sites publish for social sharing) and returns them; no third-party data service, Cloudflare's standard DPA. Then switch `fetchLinkPreview` in `src/lib/media.ts` to it, and use `og:type = article` as one more signal for `isNewsLink` (news links: headline only, no image). Lawyer: press publishers' right (EU DSM art. 15) for news-site previews.

## Needs a backend (move off GitHub Pages)

Everything is stored only in each visitor's browser today (IndexedDB). A backend is needed for: real accounts and login, shared posts/messages/stories between devices, real anonymous link-click totals, moderation shared across moderators, reports reaching the team, the admin role as a server-side permission, collection and story media storage.

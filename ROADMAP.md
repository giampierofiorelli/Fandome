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
- **Discovery guides for music scenes** (owner's idea, document to come): step-by-step educational sections to get into a music market you don't know, starting with Italian music for foreign fans (classics and new names, beyond the stereotypes), then other scenes, and also the great artists of the past for people who want to discover older music.
- **Content moderation for music-only rule**: today "Not about music" is a report reason and a rule; later, a gentle hint in the composer when a post seems off-topic.
- **Marketplace for collectors** (buying and selling). Not now: the collection is a showcase only. Only as a separate product with identity checks (KYC), protected payments and legal review (counterfeits, scams, ticket touting, IP).
- **Real post translation**: Chrome's on-device Translator where available, a free service (e.g. MyMemory, ~5,000 chars/day) as fallback. Today translations are pre-written demo text.
- **Real brand icons for unknown websites** in profile links (favicons) once there is a server to fetch and store them; today unknown sites get a generic link icon, to avoid sending visitors' IPs to third parties.
- **Font credits line** (optional): "Fonts: Geist and Doto, SIL Open Font License 1.1" in the privacy page or terms.

## Needs a backend (move off GitHub Pages)

Everything is stored only in each visitor's browser today (IndexedDB). A backend is needed for: real accounts and login, shared posts/messages/stories between devices, real anonymous link-click totals, moderation shared across moderators, reports reaching the team, the admin role as a server-side permission, collection and story media storage.

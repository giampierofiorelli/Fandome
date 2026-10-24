# Fandome roadmap: decided, to do later

Things we agreed on but deliberately postponed. Check this list before planning new work.

## Waiting on the owner (accounts, keys, details)

- **Apple Music in the listening party.** Use MusicKit on the Web: Apple Music subscribers log in with their Apple ID and full tracks play inside Fandome, synced like Spotify (non-subscribers get 30s previews). Unlike Spotify Connect it plays in the browser tab, not in the Music app; on iPhone the page has to stay open.
  - Needs an Apple Developer account ($99/year) to create a MusicKit identifier and private key.
  - The developer token (JWT, max 6 months) can be generated in the nightly GitHub Action from a repository secret and shipped with the site; no server needed.
  - Load Apple's MusicKit script only after the person taps "Connect Apple Music" (GDPR: no data to Apple before that).
- **Spotify Client ID** for the listening party: paste it into `src/config.ts` (`SPOTIFY_CLIENT_ID`). Development mode allows 25 users.
- **Ticketmaster API key** for live concert dates: add the `TICKETMASTER_API_KEY` repository secret (Settings → Secrets and variables → Actions). The nightly job in `scripts/fetch-concerts.ts` does the rest.
- **Owner name and contact email** for the privacy policy and terms (GDPR, DSA arts. 11–12): `OWNER_NAME` and `CONTACT_EMAIL` in `src/config.ts`.
- **Lawyer review** of the privacy policy, terms, moderation and ticket-board wording before opening to the public.
- **Artist catalogue**: list of artists to add (or let Claude propose ~200); albums come automatically from MusicBrainz (free, 1 request/second). Then a "Request an artist" flow (create the room after N requests or admin approval).

## Product, later

- **Real listening parties** (today: one demo party hard-coded in `src/data/seed.ts`, always live in a loop, fake listeners, local-only chat).
  1. Create a party: host picks the artist, an album (track list and durations from MusicBrainz) or their own running order, and a start date/time.
  2. Announce it in the artist room and on Home with a countdown, "Remind me", and suggest-to-friends (like artist rooms).
  3. Real start and end: playback position comes from the start time (works without a server, same idea as `src/lib/party.ts`); the party ends after the last track and stays as a memory with chat and "I was there".
  4. Rules: only recently active users can host (like pages); parties can be reported and handled by the artist's moderators.
  - Shared presence (who's really listening) and a shared chat need the backend.

- **Marketplace for collectors** (buying and selling). Not now: the collection is a showcase only. Only as a separate product with identity checks (KYC), protected payments and legal review (counterfeits, scams, ticket touting, IP).
- **Real post translation**: Chrome's on-device Translator where available, a free service (e.g. MyMemory, ~5,000 chars/day) as fallback. Today translations are pre-written demo text.
- **Real brand icons for unknown websites** in profile links (favicons) once there is a server to fetch and store them; today unknown sites get a generic link icon, to avoid sending visitors' IPs to third parties.
- **Font credits line** (optional): "Fonts: Geist and Doto, SIL Open Font License 1.1" in the privacy page or terms.

## Needs a backend (move off GitHub Pages)

Everything is stored only in each visitor's browser today (IndexedDB). A backend is needed for: real accounts and login, shared posts/messages/stories between devices, real anonymous link-click totals, moderation shared across moderators, reports reaching the team, the admin role as a server-side permission, collection and story media storage.

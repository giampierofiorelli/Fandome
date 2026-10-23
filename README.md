# ✦ Fandome

**The social network for music fans.** Your fan story is your profile, concerts are where you meet.

> Prototype. Independent fan platform — not affiliated with, authorised or sponsored by any artist.
> All data is demo data stored in your browser. Future concert dates are fictional.

## What's inside (and where each idea comes from)

| Feature | Inspired by |
|---|---|
| Fast posts, threads, quote posts, hashtags, **Trending in &lt;fandom&gt;** | Twitter/X ("stan Twitter") |
| **Fan Passport**: fan since, Top 4 albums, star ratings, short reviews, diary of shows | Letterboxd |
| **Repost with tags** (tags as commentary) | Tumblr |
| One **room per artist**, topic feeds, **auto-translate** posts | Weverse |
| **Starter packs** at sign-up (shareable link), custom topic feeds, **detach your post from a quote** | Bluesky |
| **Listening party**: everyone hears the same track at the same time (music stays on Spotify/Apple Music) | Stationhead |
| **Concert pages**: "I'm going" / "I was there", live chat, setlist, memories | — |
| **Share cards** (PNG for Instagram/TikTok stories) — the growth loop | Spotify Wrapped |
| **Finite feed**: "You're all caught up" | Instagram |
| **Export my data** | lesson from Amino's shutdown |

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173/Fandome/
npm test          # reducer + helpers tests
npm run build     # production build in dist/
```

## Deploy (GitHub Pages, free)

Every push to `main` builds and deploys via `.github/workflows/pages.yml`.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
Free GitHub Pages requires the repository to be **public**.

Site URL: `https://<user>.github.io/Fandome/`

## Stack

React 18 + TypeScript + Vite, `HashRouter` (Pages has no server routing), state in a reducer persisted to `localStorage`.

## Next

- Supabase (free plan) for real accounts, posts, realtime chat and storage — still hosted on GitHub Pages.
- Moderation tools: report → case → decision → appeal → audit log.
- Concert data source (setlist.fm API is free for non-commercial use only).

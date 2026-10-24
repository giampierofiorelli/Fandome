# Scenes section: design (draft for the owner)

Based on [`scenes-research.md`](scenes-research.md) and the owner's decisions (ROADMAP, "Scenes section"). Nothing here is built yet.

## Where it lives

- Its own button in the bottom tab bar: a sixth slot (Home, Explore, Post, **Scenes**, Listening parties, Profile). Not inside Explore, not replacing the headphones.
- Same design as the rest: calm glass, one column, big light numerals for levels, Doto dot-matrix accents (a dotted ring for each scene's progress).

## Scenes home

- Cards for the plan's scenes: Italy, Brazil, Spain and Latin America, France, Afro, Korea. Each shows the country, language(s), your level and a dotted progress ring.
- "Recommended for you": the scene closest to what you follow (today's "A scene you don't know yet" logic, local scenes only).
- Thin scenes (Afro, Korea, Spain and Latin America today) appear as "Coming soon" until they have enough artists.
- Later: **Surprise me** (a random scene), more countries, and **genres** to explore with the same mechanism.

## A scene: the path

One clear path of small steps (like Duolingo), but you can open any unit (choice matters).

1. **Start here**: 3 artists of the scene closest to your taste (Bridge from the artists and albums you love), each with the reason.
2. **Now**: who matters in the scene today (2020s).
3. **Eras**: one unit per decade the scene covers (Italy: 1950s to 2020s).
4. **Sub-scenes**: units by genre family within the scene (Italy: cantautori, rock, urban/hip-hop, indie, Italo disco/electronic…).
5. **Key moments** (editorial, later): Sanremo, a festival, a historic album, a movement.
6. **Deep cuts**: less followed artists of the scene (long tail, against popularity bias).

Each step is an artist (or an album when we have its description) with one line on why it is there. You can: listen (embed, loaded only on tap or with consent), rate an album, follow, mark "New to me". A step counts as done when you do any of these, or tap "I listened".

**Order inside a unit** (the algorithm): rank the scene's artists by closeness to your profile (album descriptors when available, scene genres otherwise), then alternate **two close, one stretch** (the inverted U: familiar enough to like, new enough to be interesting), mix sub-genres (interleaving), and keep at most one artist per step from the same sub-scene in a row. Early steps carry more explanation; later ones less (scaffolding).

## Your level in a scene

Broad bands described in plain words (like the CEFR "can do" levels), computed only from what you did, never from time spent:

| Level | Roughly | Shown as |
|---|---|---|
| 0 Curious | nothing yet | "Start here" |
| 1 Listener | 3 artists explored | "You've met the scene" |
| 2 Explorer | 8 artists, 2 eras, 2 sub-scenes | "You know today's scene and one era" |
| 3 Connoisseur | 15 artists, 3 eras, 3 sub-scenes, 5 albums rated, 1 deep cut | "You can find your way from the 1970s to today" |
| 4 Insider | 25 artists, every era, 10 albums rated, a post about the scene | "You know the scene inside out" |
| 5 Ambassador | Insider, and you brought someone into the scene (shared a room or starter pack) | "You bring others to it" |

Below the level, four progress bars ("skills"): **artists** (breadth), **eras**, **sub-scenes**, **albums** (depth). Progress never goes down.

## Healthy by design (rules)

- No streaks, no leagues, no rankings of people, no points for time, no loss of progress, no notifications to pull you back (DSA guidelines on minors; our users are 14+).
- Private by default; you can choose to show your level badge for a scene on your profile.
- The reward is the music: every step says why it matters.

## What we need

- **Data**: enough artists per scene and era (Italy is ready; France almost; Brazil needs older eras; Spain and Latin America, Korea, Afro need more artists). Album descriptors make Start here and the order sharper.
- **Scene guides** (editorial, could be researched with ChatGPT like the descriptors): a short intro per scene, the sub-scenes and their key artists, key moments, with sources.
- **Tech**: no backend needed for the first version; progress lives on the device, computed from follows, ratings, "New to me" and a new "I listened" mark.

## Phases

1. Scenes tab + Italy, built from what we have (scenes.ts, descriptors); levels and path.
2. France and Brazil when their data is enough; "Coming soon" for the others.
3. Scene guides (intro, sub-scenes, key moments) with the owner and ChatGPT.
4. Surprise me, more countries, genre exploration.

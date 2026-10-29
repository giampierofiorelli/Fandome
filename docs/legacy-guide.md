# Legacy: what an album left behind

Owner (Oct 2026): some albums changed the music after them (pop was never the same after Ray of Light), often in ways genre labels don't capture (William Orbit's electronica brought into mainstream pop).

## Legacy score (from sources): `docs/descriptors/legacy/<artist-id>.csv`

```csv
album_id,legacy,sources
m-ray,4,"The New York Observer (Daryl Deino, 2017): ""a risk-taking album that helped define mainstream electronic dance music"" https://observer.com/2017/07/best-albums-of-the-1990s/"
```

0-5, how much the album changed the music that came after it (not sales, not quality, not the artist's career): 5 changed music history broadly (most-influential lists, critics saying so), 4 shaped a genre or a generation, 3 clear influence on a scene or several artists, 2 some, 1 little, 0 none documented. Local scenes are judged on their own scene. Claude researches it. Sources are professional: magazines, critics, books, best-of lists, registries (National Recording Registry, Grammy Hall of Fame). Never Wikipedia (owner, Oct 2026): use it only to find the original source it cites, open that, and cite it; the validator refuses Wikipedia in rows of 3 or more, which the album page shows.

## Trace (from our data): `src/lib/legacy.ts`

The album's new traits (genres, production, instruments that fewer than 15% of the albums of its area had in the 6 years before, and pairs of traits that were rare together, like strings with electronic programming) and how common each became in the area's later albums (3-year windows over the next 12 years). It shows a trend in the albums we describe, not a cause, and it grows with the catalogue.

## Where it shows

- Album page, "What it left behind": for a legacy of 3 or more, the score and its source, and the new traits that spread.
- `npx vite-node scripts/legacy-check.ts`: albums where sources and data disagree, to review.

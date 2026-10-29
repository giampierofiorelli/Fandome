# Periods of a long career

On an artist's "Similar" tab, long careers that changed sound get one list per period as well as the whole-career list (owner, Oct 2026). Code: `src/lib/eras.ts`.

## Computed periods

- Only artists with at least 8 described albums of their own over at least 15 years (compilations, live and holiday albums left out).
- Albums in order of release are split where the sound changes (album descriptions compared with the same engine as the suggestions). A period has three albums, or one key album (career weight 4+ or a landmark) that sounds unlike the records around it: an artist who changed with almost every record gets that record as a period.
- No split found, no periods: the page keeps one list.
- Label: the years and the two genres that set the period apart from the others.
- Each period's suggestions use only its albums, weighted by career weight like the whole-career list; collaborations count only if they happened in those years.

## Documented periods: `docs/eras/<artist-id>.csv`

When sources name the periods of a career, they replace the computed ones (years and names). Claude researches them.

```csv
from,to,name,source
1977,1979,Berlin trilogy,"AllMusic biography: 'the so-called Berlin trilogy of Low, Heroes and Lodger'"
```

- `from`, `to`: years of the period; an album outside every period joins the one before it.
- `name`: the name critics use (Berlin trilogy, Blue period); a period without a documented name can be named by its main style.
- `source`: who names it, with a short quote. Only names used by critics or the artist, not invented ones.

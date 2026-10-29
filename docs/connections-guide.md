# Connections between artists: how to fill them

Scenes show **your connection** to an artist of a scene (e.g. "Madonna's Confessions on a Dance Floor draws on Giorgio Moroder") and each artist's **roots and heirs**. Part of this comes from the album descriptors; this file type adds documented connections that descriptors can't hold: international artists influenced by Italian ones, samples, covers, collaborations, productions.

## File

- One CSV per scene or topic in `docs/connections/` (e.g. `docs/connections/italy.csv`), sent on the `descriptors` branch like the descriptors (ChatGPT hands the file to the owner, Claude validates and imports).
- Header, exactly:

```csv
from_artist,to_artist,type,work,year,source,url,confidence,notes
```

| Column | What |
|---|---|
| `from_artist` | the artist who **was influenced / sampled / covered / was produced / collaborated** |
| `to_artist` | the influence, the sampled or covered artist, the producer, the collaborator |
| `type` | one of `influenced`, `soundslike`, `sampled`, `covered`, `collaborated`, `produced` |
| `work` | album or song where it happens (optional but preferred) |
| `year` | year of that work (4 digits, optional) |
| `source` | who says it (artist interview, producer, critic, liner notes, official credits) |
| `url` | link to the source |
| `confidence` | `high` (first-hand or official credits), `medium` (qualified critic), `low` |
| `notes` | max 15 words, own words |

Rules:
- Use artist names exactly as in Fandome's rooms when they exist (e.g. `Giorgio Moroder`, `Mina`, `Donna Summer`). Artists without a room are kept for later and reported by the validator.
- **Documented only**: an influence must be stated by the artist, the producer or a qualified critic; a sample or cover must appear in credits. Sonic similarity goes under `soundslike`.
- Both directions count: Italian artists influenced by others, and **others influenced by Italian artists** (the second matters most for discovery).
- Claude checks the file with `npx vite-node scripts/validate-descriptors.ts`.

## Covers between albums on Fandome

When both the original and the cover are albums in the catalogue, the cover goes in `src/data/covers.ts` (song, original album id, cover album id, credit source) instead of the CSV: album pages then show "Covers …, first recorded on …" and "… was covered on …", and the cover counts as a `covered` connection for Scenes. In suggestions it leads one way, like an influence: the original record goes to the top of the cover's "If you like this album" list (up to two places, past the usual cut), and the covering artist's page gets the original artist with the reason ("Laura Branigan covered Raf’s Self Control"). Never back from the original (owner, Oct 2026). Only covers credited on the record. A cover is never a sound comparison or an influence in the descriptors.

## Example

```csv
from_artist,to_artist,type,work,year,source,url,confidence,notes
Donna Summer,Giorgio Moroder,produced,I Feel Love,1977,Official credits,https://example.org/credits,high,"Moroder's synth production defined the track."
Madonna,Giorgio Moroder,influenced,Confessions on a Dance Floor,2005,Stuart Price interview,https://example.org/interview,medium,"Price cites Moroder's Donna Summer work for Future Lovers."
```

## Prompt for ChatGPT (copy as is, then name the scene)

> You are a music researcher. For the scene I name, list documented connections between its artists and other artists (any country), in both directions: who influenced whom, who sampled or covered whom, who produced or collaborated with whom. Return a CSV with exactly this header: from_artist,to_artist,type,work,year,source,url,confidence,notes. type is one of influenced, soundslike, sampled, covered, collaborated, produced; from_artist is the one who was influenced / sampled / covered / produced / who collaborated. Only include connections stated by the artist, the producer, a qualified critic or official credits, with a working source URL; put sonic resemblance under soundslike. confidence: high (first-hand or credits), medium (qualified critic), low. notes: your own words, max 15 words. Use artist names as commonly written. Start with the most important international connections of the scene's key artists.

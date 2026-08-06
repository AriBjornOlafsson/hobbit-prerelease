# The Hobbit — A Drafter's Field Guide 

### 📖 [**Read the guide live: aribjornolafsson.github.io/hobbit-prerelease**](https://aribjornolafsson.github.io/hobbit-prerelease/)

An unofficial drafter's guide to *The Hobbit* limited format: the five color-pair
archetypes, best commons/uncommons per color, combat tricks, mana fixing, the
rares/mythics tier list, and a second commentator's read layered in as its own
chapter. Every card mention hovers (or taps, on mobile) to show the real card
image, pulled from Scryfall and shipped locally in `assets/cards/`.

Not affiliated with Wizards of the Coast — compiled from drafter commentary
ahead of the set's 2026-08-14 release.

> **Provisional mirror:** [hobbit-prerelease-guide.lovable.app](https://hobbit-prerelease-guide.lovable.app/)
> — a separate Lovable-hosted copy of this site. It is **not synced** with
> this repo in either direction; treat it as a standalone snapshot, not a
> live reflection of what's here.

## Running locally

No build step — it's a plain static site.

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Hosting on GitHub Pages

Deploys via GitHub Actions (`.github/workflows/static.yml`), not the legacy
"Deploy from a branch" build.

1. Push this repo to GitHub.
2. Repo Settings → Pages → Build and deployment → Source → **GitHub Actions**.
3. Push to `main` (or re-run the workflow manually) to trigger a deploy —
   it's then live at `https://<username>.github.io/<repo-name>/`.

If a deploy ever fails with a "multiple artifacts" error, it's a known
GitHub issue where **re-running** a failed Pages deployment reuses stale
artifact state — push a new commit (or trigger a fresh run) instead of
re-running the broken one.

## Structure

- `index.html` — the page
- `style.css` — all styling, including the parchment/tab UI and the
  holographic hover-card effect
- `script.js` — tab switching, hover-card logic (tilt + real image), ambient
  ember animation
- `assets/cards/*.jpg` — real card art, one file per card referenced in the
  guide (129 total)

Fonts (Cinzel, Cinzel Decorative, EB Garamond) load from Google Fonts — no
build step needed, but that means a working internet connection to render
with the intended type. Everything else is fully self-contained.

## Credits

This guide is a compilation, not original analysis. Every archetype read,
tier placement, and tip comes from the prerelease coverage of these
channels (also listed in-guide under Chapter X):

- [Joel are Magic](https://www.youtube.com/@joelaremagic)
- [Limited Level-Ups](https://www.youtube.com/@limitedlevel-ups)
- [Limited Logic MTG](https://www.youtube.com/@LimitedLogicMTG)
- [Nizzahon Magic](https://www.youtube.com/@NizzahonMagic)
- [NicolaiBolas](https://www.youtube.com/c/NicolaiBolas)
- [Tolarian Community College](https://www.youtube.com/@TolarianCommunityCollege)

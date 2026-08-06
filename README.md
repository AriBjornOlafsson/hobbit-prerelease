# The Hobbit — A Drafter's Field Guide 

### 📖 [**Read the guide live: hobbit-prerelease.vercel.app**](https://hobbit-prerelease.vercel.app/)

An unofficial drafter's guide to *The Hobbit* limited format: the five color-pair
archetypes, best commons/uncommons per color, combat tricks, mana fixing, the
rares/mythics tier list, and a second commentator's read layered in as its own
chapter. Every card mention hovers (or taps, on mobile) to show the real card
image, pulled from Scryfall and shipped locally in `assets/cards/`.

**Installable, and works fully offline.** It's a PWA — open the live link on
a phone and use the browser's "Add to Home Screen" (iOS Safari) or the
install prompt (Android Chrome) to get it as an app icon. A service worker
(`sw.js`) precaches the entire site — every chapter, every card image, and
the fonts — on first visit, so it keeps working with no connection at all
after that (handy at a table with bad venue wifi).

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
  ember animation, service worker registration
- `sw.js` — the service worker: precaches the app shell, fonts, and every
  card image on install, then serves them from cache offline. HTML/CSS/JS
  are network-first (so a fresh deploy shows up right away when online);
  everything else is cache-first, since card art and fonts never change once
  downloaded.
- `manifest.json` — PWA manifest (name, icons, standalone display) that
  makes "Add to Home Screen" install a proper app-like icon instead of a
  browser shortcut
- `assets/cards/*.jpg` — real card art, one file per card referenced in the
  guide (132 total)
- `assets/fonts/` — Cinzel, Cinzel Decorative, and EB Garamond, self-hosted
  (see below) — `fonts.css` holds the `@font-face` rules
- `assets/icons/` — the PWA's home-screen icons (192/512/512-maskable/apple-touch)

Fonts are self-hosted in `assets/fonts/` rather than loaded from Google
Fonts — there's no external dependency left anywhere on the page, so it
renders correctly and identically with zero network access, both before and
after the service worker kicks in. If you ever need to refresh them (new
weight, new family), re-fetch
`https://fonts.googleapis.com/css2?family=...` with a real browser
`User-Agent` header, download the referenced `.woff2` files into
`assets/fonts/`, and rewrite the `url(...)` paths in `fonts.css` to point at
them locally.

**Updating the service worker's cache:** `sw.js` precaches a hardcoded file
list (`PRECACHE_URLS`) rather than discovering it at runtime, matching the
rest of this project's no-build-step philosophy. Whenever cards, fonts, or
icons are added or removed, regenerate that list (a short Python one-liner
over `assets/cards/`, `assets/fonts/`, and `assets/icons/` will do) and bump
`CACHE_VERSION` in `sw.js` so existing installs actually pick up the change
instead of serving a stale cache forever.

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

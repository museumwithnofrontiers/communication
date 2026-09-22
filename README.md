# communication

The **Communication and Transportation** gallery — one of the platform's DXA
gallery sites, built on `@museumwnf/viewer-core` and `@museumwnf/viewer-layout`,
its own texts in `locales/`, its own palette in `theme/`, and its own catalogue
data from `@museumwnf/communication-data`.

Deployed at <https://museumwithnofrontiers.github.io/communication/>.

## Packages

| Package | Role |
| --- | --- |
| `@museumwnf/viewer-core` | Routing, i18n, the shared DXA gallery data layer (`useGalleryData`, `useGalleryCollection`, `useGalleryTimeline`, `useGallerySheet`) |
| `@museumwnf/viewer-layout` | The composed pages (Home/About/Credits/Partners/Collection/Timeline/ItemSheet/…), PageShell chrome, content components |
| `@museumwnf/viewer-i18n` | The shared `gallery` text bundle every DXA gallery site starts from |
| `@museumwnf/communication-data` | This site's own catalogue: items, partners, countries, timelines, dynasties, glossary, tags, the project manifest |

## What is where

- `src/dataset.config.js` — wires the data package into `createViewer()`: the
  site name, the legacy palette-keyed `projectColors` map (one colour class
  per source project this gallery's roster draws from), `noticeProjects` (the
  Explore Islamic Art Collections partner note).
- `src/composables/gallery.js` — this site's one instance of the shared DXA
  gallery data layer, and the item-sheet spec additions
  (`sourceDatabase`/`notice`/`museum`/`related`) that are genuinely this
  gallery's own.
- `src/views/` — the three views not yet promoted to
  `@museumwnf/viewer-layout/views`: `Home.vue` (featured partners + sibling
  galleries), `ItemSheet.vue`, `Timeline.vue` (the entrance form).
- `src/styles/site.css` — this site's own palette variables and page reset.
- `theme/tokens.css` — the webdesigner-facing chrome tokens (header, banner,
  nav, footer) consumed by `@museumwnf/viewer-layout`.
- `theme/overrides.css` — the legacy DXA gallery page shape (fixed-width
  column, six-column menu bar, upper-cased title/menu, the two-column item
  sheet) restated on PageShell's own classes, beyond what a token can express.
- `locales/en.json` — this site's own texts, layered over the shared
  `gallery` bundle.

## Two layers, one merge rule

Every string a page renders comes from either `@museumwnf/viewer-i18n`'s
shared `gallery` bundle or this site's own `locales/` files. Local wins: a key
present in both is resolved from `locales/`. Most of this site's texts are the
shared ones (`gallery.*`) — `locales/en.json` carries only what has to be
this site's own: `communication.credits.body` (the credits page's own
history) and this site's copy of `gallery.about.body` (the About page,
customised with this gallery's name and its own database links). No key here
uses string interpolation or HTML tags, and no `{`/`}` appears in translator-
edited text.

## Development

Everything runs from the host with plain Node — no Docker in this repo.

```
npm ci
npm run dev      # http://localhost:5173
npm run lint
npm test
npm run build
```

## Translator

Every visible string lives in `locales/<lang>.json`, one flat object of
`key: "Markdown text"`. Add a new language by adding a new file with the same
keys; nothing else changes. Do not use `{`/`}` in a value — the viewer treats
them as placeholders — and do not write raw HTML; use Markdown instead
(`**bold**`, `*italic*`, `[text](url)`).

## Webdesigner

`theme/tokens.css` is the palette and spacing every page's chrome reads —
change it freely, it is this site's own. `theme/overrides.css` is the escape
hatch for anything a token cannot express (the legacy site's exact page
shape); most sites will never need to touch it.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages at
<https://museumwithnofrontiers.github.io/communication/>.

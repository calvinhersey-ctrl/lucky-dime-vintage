# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lucky Dime Vintage and Design is a marketing/catalog website for a curated vintage and mid-century modern home goods seller. It is a **static, frontend-only single-page app** — there is no backend, database, cart, or checkout. The site showcases an inventory and routes all actual purchases to an external eBay store via `ebayUrl` links (currently `'#'` placeholders awaiting real listing URLs).

## Commands

```bash
npm install        # install dependencies
npm run dev        # start Vite dev server (port 5173, see .claude/launch.json)
npm run build      # production build to dist/
npm run preview    # serve the production build locally
npm run lint       # run ESLint over the repo
```

There is **no test suite** and **no TypeScript** — the project is plain JSX. "Verifying" a change means running `npm run lint` and checking it in the dev server.

## Architecture

- **Stack:** React 19 + React Router 7 (`BrowserRouter`) + Vite 7 + Tailwind CSS v4. Icons come from `lucide-react`.
- **Entry:** `src/main.jsx` mounts `App` into `#root`. `src/App.jsx` defines all routes and wraps every page in the persistent `Header` / `Footer` shell. A `ScrollToTop` helper in `App.jsx` resets scroll on every route change.
- **Routes:** `/` (Home), `/shop` (Shop), `/product/:id` (ProductDetail), `/about`, `/contact`. Page components live in `src/pages/`; shared UI lives in `src/components/`.
- **Data layer:** `src/data/products.js` is the single source of truth. It exports `products`, `categories`, and `testimonials` as hardcoded arrays. There is no API — all filtering, searching, sorting, and lookup happens client-side in the components (`Shop.jsx` filters/sorts in a `useMemo`; `ProductDetail.jsx` finds by `parseInt(id)` and `Navigate`s to `/shop` if not found).
- **SPA routing in production:** `public/_redirects` rewrites all paths to `/index.html` so client-side routes work on static hosts (Netlify-style).

### Adding or editing products

Edit the `products` array in `src/data/products.js`. Each product needs a unique numeric `id` (used in the `/product/:id` route), a `category` matching a `categories[].id`, an `images` array of paths under `public/images/products/`, and a `price` (number). Optional fields: `subtitle`, `era`, `designer`, `origin`, `description`, `condition`, `isNew`, `ebayUrl`. The `Shop` search matches against `name`, `subtitle`, `designer`, and `description`. To add a category, append to the `categories` array (its `icon` is a lucide icon name as a string).

## Styling Conventions

- **Tailwind v4 is configured CSS-first** in `src/index.css` via the `@theme` block — there is no `tailwind.config.js`. Add design tokens (colors, fonts) as CSS custom properties there, then use them as utility classes (e.g. `--color-cream` → `bg-cream`).
- **Gotcha:** the `olive` token is actually orange (`#E87420`), not green — it is the brand's primary accent color. Don't "fix" it.
- Custom global helpers `.gold-divider` and `.bg-linen-texture` are defined in `index.css` and reused across pages.
- Fonts are loaded via `<link>` in `index.html` and mapped to `font-display` (Cormorant Garamond, serif headings), `font-body` (DM Sans), and `font-accent` (Caveat, the handwritten script). Match these when adding text.
- Layout containers use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`; the design is mobile-first with `sm`/`md`/`lg` breakpoints.

## Code Conventions

- Components are function components using default exports; hooks only (`useState`, `useMemo`, `useEffect`).
- ESLint uses the flat-config format (`eslint.config.js`). The `no-unused-vars` rule **ignores identifiers matching `^[A-Z_]`**, so unused capitalized imports (e.g. components, icon constants) won't error.
- External links use `target="_blank" rel="noopener noreferrer"`; internal navigation uses React Router `<Link>`, never `<a href>`.

# Nook Auctions

A warm, editorial coming-soon site for a neighborhood furniture marketplace.

## Features

- Responsive landing page
- Preview auction cards with save interactions
- How-it-works and trust sections
- Expandable FAQ
- Interactive early-access signup confirmation
- Custom Open Graph artwork in `public/og.png`
- Cloudflare-compatible vinext build

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify a production build

```bash
npm run build
npm test
```

## Main files

- `app/page.tsx` — page content and interactions
- `app/globals.css` — responsive layout and visual design
- `app/layout.tsx` — metadata and document shell
- `public/og.png` — social sharing artwork

## Deploy

The project can be imported into GitHub and connected to any host that supports
the included vinext/Cloudflare configuration. Commit the source files, but do
not commit `node_modules`, `dist`, `.vinext`, or `.wrangler`; they are already
covered by `.gitignore`.

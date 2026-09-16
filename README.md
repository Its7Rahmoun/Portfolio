# Rahmoun Oussama — Portfolio (2026)

Interactive portfolio built with **React**, **Vite**, **Tailwind CSS**, and a scroll-driven **Three.js** “tech universe” background. Content is loaded from [`public/data/portfolio.json`](public/data/portfolio.json).

## Live site

Deployed on **Netlify** from this repository. Set your production URL in Netlify (or GitHub **Settings → Pages / Homepage**) so canonical links and the sitemap match your domain.

Optional local override:

```bash
# .env.local
VITE_SITE_URL=https://your-domain.netlify.app
```

Netlify injects `URL` at build time automatically.

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `npm run dev`    | Dev server                           |
| `npm run build`  | Generate SEO files + production build |
| `npm run preview`| Preview production build             |

## SEO & discoverability

| File | Purpose |
| ---- | ------- |
| [`index.html`](index.html) | Title, meta description, canonical, Open Graph, Twitter Card, JSON-LD (`Person` + `WebSite`) |
| [`public/robots.txt`](public/robots.txt) | Crawler rules + `Sitemap` (generated on build) |
| [`public/sitemap.xml`](public/sitemap.xml) | Homepage + in-page section URLs (generated on build) |
| [`public/llms.txt`](public/llms.txt) | Plain-text summary for AI agents and LLM crawlers |
| [`public/site.webmanifest`](public/site.webmanifest) | PWA / browser install metadata |
| [`public/favicon.svg`](public/favicon.svg) | Favicon (SVG); `/favicon.ico` redirects to SVG |

Generation runs via `npm run prebuild` → [`scripts/generate-seo.mjs`](scripts/generate-seo.mjs).

## Netlify

[`netlify.toml`](netlify.toml): build command, publish `dist`, and content-type headers for `robots.txt`, `sitemap.xml`, and `llms.txt`.

## License

Private portfolio — all rights reserved unless stated otherwise.

# Developer Portfolio

English portfolio built with React, TypeScript, Vite, and Tailwind CSS v4. Local project; not published.

## Run

```powershell
cd F:\profile\frontend
npm install
npm run dev
```

Use `npm run build` for a production build and `npm run preview` to serve it.

## Pages and navigation

Projects open as dedicated pages, not dialogs. Hash routes work on static hosting without server rewrite rules:

- `#/` — home
- `#/work`, `#/about`, `#/contact` — home sections
- `#/projects/news` — HybriNews
- `#/projects/stylio` — STYLIO
- `#/projects/chess` — BitGambit
- `#/projects/cab` — CAB Systems
- `#/projects/analyzer` — Chess Analyzer

Pages support direct links, reloads, browser history, breadcrumb navigation, next-project links, route-specific titles, and an unknown-route fallback. Focus and scroll reset on navigation.

## Styling and content

Tailwind is configured through `@tailwindcss/vite` in `vite.config.ts`. Layouts, spacing, typography, colors, and responsive states use utility classes. Shared demo components use Tailwind `@apply` in `src/index.css`; custom CSS is reserved for motion and illustration effects. The old App.css is removed.

Edit `src/portfolio.ts` for project information and contact links; `src/projectDetails.ts` holds highlights, architecture, and demo URLs. Empty contact links are hidden. Name Nguyen Van Nam is inferred from the CAB Systems folder and should be confirmed. Biography and initials are in `src/App.tsx`.

Motion includes a technology marquee, floating hero art, ambient light, scroll reveals, and pointer tilt. Pause motion, reduced-motion preferences, and background-tab pausing are supported.

## Demo scope

The user requested fictional demo links. `https://example.com/demo/...` links are explicitly labeled placeholders; replace them with verified application URLs before publishing.

Interactive previews are portfolio illustrations, not the original applications:

- HybriNews switches between a prewritten fictional article and summary.
- STYLIO changes an SVG garment color; no AI inference.
- BitGambit and Chess Analyzer replay a fixed opening; no engine analysis.
- CAB Systems advances a simulated trip; no booking or payment is created.

## Content provenance

Project descriptions are based on local README files, dependency manifests, and service structure from HybriNews, llm-news-summarization, STYLIO, BitGambit, CAB Systems, and Chess Analyzer. Planned scope is distinguished from verified implementation. Runtime behavior, production readiness, and personal contribution scope have not been independently verified. No private source code or credentials were copied from those projects.

## Verification

TypeScript and the production Tailwind/Vite build pass. Browser visual verification is unavailable in this environment because the local preview connection times out.

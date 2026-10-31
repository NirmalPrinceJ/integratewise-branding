# IntegrateWise Brand Hub

Internal brand store for [IntegrateWise](https://integratewise.ai): logos, design tokens, stationery, marketing and sales collateral, copy generators, and the documentation library. The product itself is the knowledge workspace powered by the Spine, where AI thinks in context and waits for approval.

The app is a single-page React site. `src/app/routes.tsx` mounts the Brand Hub at `/`. Public marketing pages (home, product, about, contact, and the app landing page) still exist as components, and they are no longer registered on the router.

The original design file is the [IntegrateWise Logo Design](https://www.figma.com/design/94ypKYlbyxVWNVslZ2F7K9/IntegrateWise-Logo-Design) Figma file.

## Canonical brand

Approved copy, colors, pillars, contacts, and logo rules live in [`src/app/lib/brand-data.ts`](src/app/lib/brand-data.ts). CSS variables that match that palette live in [`src/styles/theme.css`](src/styles/theme.css).

| | |
| --- | --- |
| Descriptor | The Knowledge Workspace empowered by AI and the Spine |
| Tagline | AI Thinks in Context — and Waits for Approval |
| Primary | `#4356A9` |
| Accent | `#EB4F72` |
| Navy | `#232D42` |
| Website | integratewise.ai |
| Entity | IntegrateWise LLP, Bengaluru |

Helpers in that file: `getTagline`, `getAssetCopy`, and `getValuePropForRole`.

Some screens still hard-code an older page palette (`#4154A3`, `#EB4379`, navy `#1B2544`). Those values also appear under `colors.page` in [`public/integratewise-figma-tokens.json`](public/integratewise-figma-tokens.json). New copy and color changes belong in `brand-data.ts` and `theme.css`.

## Stack

- React 18 and React Router 7
- Vite 6, with the `@` alias pointing at `src`
- Tailwind CSS 4 through `@tailwindcss/vite`
- shadcn/ui (Radix) in `src/app/components/ui`
- Lucide icons, Motion, and `react-markdown` with GFM
- `html-to-image`, JSZip, and FileSaver for PNG, SVG, and zip downloads

There is no test or lint script. `react` and `react-dom` are peer dependencies at 18.3.1.

## Run locally

Node.js 20 or newer. `react-router` 7.13.0 declares `engines.node` of `>=20.0.0`, so Node 18 is outside the supported range.

```bash
npm install
npm run dev
```

Vite serves the app at `http://localhost:5173`.

```bash
npm run build      # writes dist/
npx vite preview   # serves the production build
```

## Routes

These paths are what the router actually serves. Open them directly.

| Path | Page |
| --- | --- |
| `/` | Brand Hub dashboard (`HomePage`) |
| `/brand-assets` | Logo system, usage rules, messaging |
| `/design-tokens` | Colors, type, spacing, radius, elevation |
| `/stationery` | Letterhead, invoice, proposal, seal, card, signature, cover, envelope |
| `/generators` | Campaign kit, LinkedIn banners, social posts, team signatures, copy library |
| `/marketing` | Social, LinkedIn, WhatsApp, print, web, and event deliverables |
| `/product-landing-pages` | Waitlist, feature, and pricing page templates |
| `/sales` | Decks, one-pagers, case studies, battlecards, proposals |
| `/ready-made-content` | Approved posts, email, ads, and outreach copy |
| `/documentation` | Six documentation packs. Filter with `?pack=pack-a` through `pack-f` |

`vercel.json` and `public/_redirects` send every path back to `index.html` so client routing works on static hosts. `public/CNAME` is `integratewise.ai`. The route file comment names the intended host as `branding.integratewise.ai`.

### Sidebar links

`RootLayout` and the dashboard cards still point at the pre-conversion paths: `/brand`, `/brand/brand-assets`, `/app-landing`, and similar. Those URLs hit the in-app 404. Use the table above until the navigation is updated to match `routes.tsx`.

## Documentation packs

`/documentation` reads pack metadata from `DocumentationPage`. Mapped markdown lives in `src/app/lib/documentationContent.ts`, which imports raw files from `src/imports/pasted_text/`.

A document renders markdown only when its `baseContent` field is set. That field is the gate: without it, the page shows “Document In Progress” and does not look up a file. When `baseContent` is set, the body is `getDocumentContent(id)` when that id is mapped, and `baseContent` when it is not. Several mapped ids reuse the same source file. Download buttons appear only for documents that have `baseContent`.

| Query | Pack |
| --- | --- |
| `?pack=pack-a` | Company & Corporate Strategy |
| `?pack=pack-b` | Category, Positioning & Brand |
| `?pack=pack-c` | Product Narrative & System |
| `?pack=pack-d` | Architecture & Technical System |
| `?pack=pack-e` | AI, Governance & Trust |
| `?pack=pack-f` | GTM, Sales & Customer Success |

A document shows its inline `baseContent` when that field is set. Otherwise the page falls back to `getDocumentContent(id)`. Several pack entries reuse the same source markdown, and many documents are still marked planned.

## Project layout

```
index.html                 Vite entry
src/main.tsx               Mounts App
src/app/App.tsx            RouterProvider
src/app/routes.tsx         Route table
src/app/components/        Layout, logo, and pages
src/app/components/ui/     shadcn/ui primitives
src/app/components/visuals Product visuals (Spine, approval, workspace)
src/app/lib/brand-data.ts  Canonical brand copy and colors
src/app/lib/documentationContent.ts
src/styles/                Tailwind, theme tokens, Inter
src/imports/               Logo SVGs (Frame_*.svg) and source markdown
public/images/             Marketing and product stills
public/integratewise-figma-tokens.json
```

Logo marks used by the asset page are the SVG frames in `src/imports/`. The in-app wordmark component is `src/app/components/IntegrateWiseLogo.tsx`. `src/app/components/Logo.tsx` is a second, older wordmark and is not what the shell renders.

`replace_ctas.js`, `replace_ctas.cjs`, and `replace_routes.cjs` are one-off codemods from earlier route and CTA edits. They are not part of `npm run dev` or `npm run build`.

Unmounted marketing pages remain under `src/app/components/pages/`: `MarketingLandingPage`, `AppLandingPage`, `AboutPage`, `ContactPage`, `ProductDetailPage`, `SpineDetailPage`, `HowItWorksPage`, `UseCasesPage`, `IntegrationsPage`, and `TrustPage`.

## Environment

| File | `VITE_APP_URL` |
| --- | --- |
| `.env.development` | `http://localhost:5174` |
| `.env.production` | `https://app.integratewise.ai` |
| `.env.example` | `https://app.integratewise.ai` |

The variable is meant to point at the product app. Nothing in `src/` reads `import.meta.env` today, so changing it does not change the running UI.

## Credits

See [ATTRIBUTIONS.md](ATTRIBUTIONS.md). UI primitives come from [shadcn/ui](https://ui.shadcn.com/) (MIT). Some photography is from [Unsplash](https://unsplash.com).

# Qestel — Marketing Site

Frontend-only marketing site for **Qestel**, a private, managed email
infrastructure platform for companies. Three static pages built with
Next.js 16, TypeScript, and Tailwind CSS v4.

## Pages

| Route      | Description                                              |
| ---------- | -------------------------------------------------------- |
| `/`        | Home — hero, logo cloud, animated stats, how-it-works, features, security, testimonials, CTA |
| `/features`| Platform features — security, admin & provisioning, deliverability, compliance |
| `/pricing` | Pricing tiers with monthly/annual toggle, comparison table, FAQ accordion |

## Tech

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** design system (light, Stripe-style)
- **Static export** (`output: "export"`, `trailingSlash`) — deployable to
  Vercel, Netlify, S3, or any static host
- **Geist** font via `next/font`
- Brand favicon/icon: indigo→blue gradient envelope mark (`app/icon.svg`,
  `app/favicon.ico`)

## Getting started

Requires Node.js ≥ 20.9.

```bash
npm install
npm run dev     # development server
npm run build   # static export to ./out
npm run lint    # eslint
```

## Deploy

The build outputs a fully static site to `out/`. Serve it with any static
host:

```bash
npx serve out
```

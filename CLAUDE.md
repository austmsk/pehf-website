# Premier Health & Education Foundation — Claude Code Agent Guide

This file is the authoritative reference for all AI-assisted work on this codebase.
Every agent (and Claude session) working in this repo must follow these rules without exception.

---

## Project Overview

**Premier Health & Education Foundation (PEHF)** is a non-profit dedicated to healthcare
access and educational equity. This repo is a Next.js 14 (App Router) website.

> The single existing component is `src/Components/premier-health-education-foundation.jsx`.
> Extract its shared primitives (FadeIn, useInView, design tokens) before building new pages.

---

## Agents Available in This Project

| Agent | Trigger | Description |
|---|---|---|
| `frontend` | Building pages / components | Creates pages from the design system. See §Frontend Agent below. |
| `content` | Updating copy / data | Manages content arrays without touching layout code. |
| `seo` | Before any page ships | Adds metadata, OG tags, structured data, sitemap. |
| `a11y` | After any UI change | Audits WCAG 2.1 AA compliance, fixes violations. |
| `perf` | After image or bundle changes | Optimises images, analyses bundle, adds lazy-loading. |
| `stripe` | Donate page work | Wires Stripe Checkout / Payment Element with webhooks. |
| `email` | Transactional email work | Sends confirmation/receipt emails via Resend or SendGrid. |
| `cms` | Content migration | Integrates Sanity or Contentful for blog, team, events. |
| `analytics` | Tracking setup | Installs GA4, Meta Pixel, and custom conversion events. |
| `test` | QA / regressions | Writes Playwright E2E tests for critical user flows. |

---

## Frontend Agent

### Role
Build pages and components that integrate seamlessly with the existing homepage design.

### Design System — Colors (CSS Variables)

```
--forest:       #1a3c2a   /* Primary — headings, nav, buttons, footer bg   */
--forest-light: #2a5e40   /* Primary hover states                           */
--sage:         #7a9e7e   /* Secondary text, labels, muted UI               */
--sage-light:   #b8ccba   /* Borders, dividers, subtle backgrounds          */
--cream:        #faf8f4   /* Page background                                */
--warm:         #f0ebe1   /* Alternate section backgrounds                  */
--gold:         #c8a84e   /* Accent — CTAs, highlights, tags                */
--gold-light:   #e8d48e   /* Accent hover, stat values                      */
--coral:        #d4715e   /* Emphasis — italic hero text, alerts            */
--text:         #1a2a1a   /* Body text                                      */
--text-muted:   #5a6e5a   /* Secondary body text                            */
```

### Design System — Typography

- **Display / Headings:** `'Playfair Display', serif` — 400 / 600 / 700. Use italic for emphasis.
- **Body / UI:** `'DM Sans', sans-serif` — 400 / 500 / 700.
- **Section tags:** 12px, 600, 2px letter-spacing, uppercase, `--sage`, preceded by a 24px gold line.
- **Section titles:** Playfair Display, `clamp(30px, 4vw, 44px)`, 700, `--forest`.
- **Body paragraphs:** 15–17px DM Sans, line-height 1.7, `--text-muted`.

### Design System — Spacing & Layout

- Max content width: `1200px` centered with `margin: 0 auto`.
- Section padding: `100px 32px` (vertical, horizontal).
- Card border-radius: `20px`. Button border-radius: `50px`.
- Card border: `1px solid rgba(26,60,42,0.06)`.
- Card hover: `translateY(-6px)` + `box-shadow: 0 20px 60px rgba(26,60,42,0.1)`.

### Component Patterns

- **FadeIn:** IntersectionObserver-triggered, `translateY(32px)→0` + `opacity 0→1`,
  cubic-bezier(.22,1,.36,1), staggered via `delay` prop.
- **Buttons:** Primary (`--forest` bg, white text), Gold (`--gold` bg, `--forest` text),
  Ghost (transparent, border). All: 50px radius, 16px 36px padding.
- **Navigation:** Fixed, transparent over heroes, `rgba(250,248,244,0.95)` + backdrop-blur on scroll.
- **Video sections:** Full-bleed with gradient overlay, play/pause + mute controls.

### Existing Shared Components — Import, Never Rewrite

- `FadeIn` / `useInView`
- Navigation bar (sticky, transparent-to-solid)
- Footer (4-column layout)
- Section header pattern (tag + title + description)
- Video hero pattern

### Frontend Workflow (follow every step)

1. **Understand** — identify the page/component; ask one question if business logic is ambiguous.
2. **Check existing code** — read `components/`, `app/`, `styles/globals.css` before writing anything.
3. **Plan** — outline sections in this format before coding:
   ```
   Page: /about
   Sections:
   1. Hero — …
   2. Mission — …
   ```
4. **Build** — write the code following all design system rules.
5. **Verify** — run through the Quality Checklist below.
6. **Report** — use the ✅ / ⚠️ summary format.

### Pages to Build (in order)

| # | Page | Route | Status |
|---|---|---|---|
| 1 | Home | `/` | ✅ Reference implementation |
| 2 | About Us | `/about` | — |
| 3 | Programs | `/programs` | — |
| 4 | Donate | `/donate` | — |
| 5 | Impact | `/impact` | — |
| 6 | Events | `/events` | — |
| 7 | Volunteer | `/volunteer` | — |
| 8 | Blog | `/blog` | — |
| 9 | Contact | `/contact` | — |
| 10 | FAQ | `/faq` | — |

### File Structure Convention

```
app/
  layout.jsx
  page.jsx
  about/page.jsx
  donate/page.jsx
  programs/page.jsx
  impact/page.jsx
  events/page.jsx
  volunteer/page.jsx
  blog/page.jsx
  contact/page.jsx
  faq/page.jsx
components/
  Navigation.jsx
  Footer.jsx
  FadeIn.jsx
  SectionHeader.jsx
  VideoHero.jsx
  Button.jsx
styles/
  globals.css
public/
  videos/
  images/
  team/
```

### Do Not (Non-Negotiable)

- No colors outside the design system palette — no `#333`, no random hex values.
- No fonts other than Playfair Display and DM Sans.
- No Tailwind utility classes. Use CSS variables and scoped CSS.
- No new UI libraries (MUI, Chakra, shadcn) without explicit user approval.
- No inline styles except for dynamic values (e.g., animation `delay`).
- No duplicate shared components — import them.
- No hardcoded content for CMS-bound data; use data arrays at the top of the file marked `// TODO: replace with CMS data`.
- No skipping responsive design — desktop (1200px+), tablet (600–900px), mobile (<600px).
- No missing hover/focus states on interactive elements.
- No `px` for section title font sizes — use `clamp()`.
- No external placeholder images (unsplash, placeholder.com) — use colored divs with initials.
- No new pages without adding them to Navigation.
- No icon-only buttons without `aria-label`.

### Quality Checklist

Before any task is complete:

- [ ] Only design system colors via CSS variables
- [ ] Playfair Display headings / DM Sans body
- [ ] 100px vertical padding, 1200px max-width per section
- [ ] Cards: 20px radius, correct border and hover shadow
- [ ] Buttons: 50px radius, correct variant styling
- [ ] FadeIn animations with staggered delays
- [ ] Responsive at 900px and 600px
- [ ] Shared Navigation and Footer imported
- [ ] All interactive elements have hover/focus states
- [ ] No console errors or warnings
- [ ] Placeholder content marked with comments

---

## Content Agent

**Trigger:** Any copy updates, stat changes, team bios, event listings.

**Rules:**
- Only edit the data arrays / constants at the top of page files — never touch layout or CSS.
- Mark every piece of content that will eventually come from a CMS with `// TODO: CMS`.
- Do not add, remove, or rename component props.
- After editing, confirm the page still compiles and no visual regressions exist.

---

## SEO Agent

**Trigger:** Before any page ships to production.

**Rules:**
- Add a `metadata` export to every `app/*/page.jsx` (title, description, OG image, canonical URL).
- Add JSON-LD structured data for `Organization`, `Event`, and `Article` page types.
- Verify `next-sitemap` or equivalent generates a sitemap on build.
- Use the foundation's brand name consistently: "Premier Health & Education Foundation".

---

## Accessibility (a11y) Agent

**Trigger:** After any UI component is created or changed.

**Rules:**
- Target WCAG 2.1 AA minimum.
- Check color contrast ratios: `--forest` on `--cream` must pass AA for body text.
- Every image needs meaningful `alt` text or `alt=""` if decorative.
- Navigation must be keyboard-navigable with visible focus rings.
- Forms require associated `<label>` elements and error announcements via `aria-live`.
- Run `axe-core` or equivalent and resolve all critical/serious violations before shipping.

---

## Performance Agent

**Trigger:** After adding images, videos, or new npm dependencies.

**Rules:**
- Use `next/image` for all raster images with correct `width`, `height`, and `priority` on above-fold images.
- Videos must use `<video>` with `preload="none"` and a poster image.
- Analyse bundle with `@next/bundle-analyzer`; flag any dependency >50 KB.
- Target Lighthouse Performance score ≥ 90 on mobile.

---

## Stripe Agent

**Trigger:** Working on `/donate`.

**Rules:**
- Use Stripe Payment Element (not Checkout redirect) for a native in-page experience.
- Support one-time and monthly recurring donations.
- Suggested amounts: $25, $50, $100, $250, custom.
- Webhook endpoint at `app/api/webhooks/stripe/route.js` handles `payment_intent.succeeded`.
- Store `.env.local` keys as `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`.
- Never log or expose secret keys.

---

## Email Agent

**Trigger:** Donation confirmation, volunteer signup, event registration.

**Rules:**
- Use Resend (preferred) or SendGrid for transactional email.
- Send donation receipts from `giving@pehf.org` (placeholder — confirm with client).
- Email templates must use the design system color palette in inline styles (email clients strip CSS).
- Store API key as `RESEND_API_KEY` in `.env.local`.

---

## CMS Agent

**Trigger:** Blog, team bios, events, or any structured repeating content.

**Rules:**
- Preferred CMS: Sanity (schema-first, free tier, excellent Next.js integration).
- All CMS content must have a fallback static data array for local development without a CMS connection.
- Use `next: { revalidate: 60 }` on fetch calls for ISR.
- Mark every placeholder `// TODO: CMS` comment once the schema is live.

---

## Analytics Agent

**Trigger:** Pre-launch or when a new conversion event is needed.

**Rules:**
- Use `next/script` with `strategy="afterInteractive"` for GA4 and Meta Pixel.
- Track: page views, donation initiated, donation completed, volunteer form submit, newsletter signup.
- Store IDs as `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `NEXT_PUBLIC_META_PIXEL_ID`.
- Ensure a GDPR/CCPA-compliant cookie consent banner is present before firing any pixel.

---

## Test Agent

**Trigger:** Before any feature is marked complete; on every significant page addition.

**Rules:**
- Use Playwright for E2E tests.
- Critical paths to cover: homepage load, donation flow, contact form submit, navigation links.
- Tests live in `tests/` at the project root.
- CI must not merge if Playwright tests fail.

---

## Environment Variables Reference

```
# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Email
RESEND_API_KEY=

# CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_TOKEN=

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

---

## Git Conventions

- Branch naming: `feature/<page-or-feature>`, `fix/<description>`, `content/<update>`.
- Commit messages: imperative mood, present tense ("Add About page hero section").
- Never commit `.env.local` or any file containing secrets.
- Open a PR for every feature; request review before merging to `main`.

---

## Bootstrap Checklist (First-Time Setup)

- [ ] `npx create-next-app@latest . --app --no-src-dir` (or confirm scaffold exists)
- [ ] Install fonts via `next/font/google`: Playfair Display + DM Sans
- [ ] Move `premier-health-education-foundation.jsx` into `app/page.jsx` and extract shared components
- [ ] Define all CSS variables in `styles/globals.css`
- [ ] Confirm dev server starts with no errors (`npm run dev`)
- [ ] Deploy a staging environment (Vercel recommended for Next.js)

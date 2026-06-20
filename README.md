# Hound & Home — Website

Boutique dog daycare, boarding, and training in Ararat, VA. Lead-generation
marketing site built to the spec in [`CLAUDE.md`](./CLAUDE.md) (the OEG build brief).

## Stack

- **[Astro](https://astro.build) 4** + **[Tailwind CSS](https://tailwindcss.com) 3** — static, fast, SEO-friendly
- Self-hosted fonts: **Fraunces** (display) + **Mulish** (body) via `@fontsource`
- **No backend.** Dynamic pieces are third-party embeds (HoneyBook, Calendly, Brevo)
- Deploys on **Vercel** (auto-detects Astro; build `astro build`, output `dist/`)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
npm run preview  # preview the production build
```

## Project shape

```
src/
  data/        site.ts (NAP + embed URLs), services.ts, faq.ts, testimonials.ts
  components/  Header, Footer, HouseArch (signature frame), ServiceCard,
               EmbedSlot, EmailSignup, CTASection, PageHero, LineIcon
  layouts/     BaseLayout.astro (SEO meta, JSON-LD schema, fonts, reveal)
  pages/       index, about, services/ (+ [program].astro), investment,
               gallery, testimonials, faq, booking, contact, privacy, terms, 404
public/
  assets/brand/  logo + icon  ·  favicons  ·  robots.txt
```

## Before launch — wire these up

All live in **`src/data/site.ts`** unless noted. They are clearly marked and the
UI shows honest placeholders until each is set (no silently-broken forms).

| What | Where | Notes |
|------|-------|-------|
| Domain / canonical URL | `astro.config.mjs` `site`, `site.ts` `url`/`domain` | Once domain is secured (§9) |
| Brand email | `site.ts` `email` | Currently a placeholder |
| Instagram handle | `site.ts` `instagram` | Move from "Taylor Trains Doodles" (§9) |
| HoneyBook inquiry form | `site.ts` `embeds.honeybookInquiry` | Booking step 1 |
| HoneyBook contact form | `site.ts` `embeds.honeybookContact` | Contact page |
| Calendly scheduler | `site.ts` `embeds.calendly` | Booking step 2 |
| Brevo email capture | `site.ts` `embeds.brevoSignup` | Footer + inline offers |
| Real photos | swap into `<HouseArch image="…" />` | Brand shoot pending (§9) |
| Service-area towns | `BaseLayout.astro` schema `areaServed` | Confirm with Taylor (§9) |
| Reversed (cream) logo | header on teal | Post-launch (§9) |
| Privacy / Terms copy | `pages/privacy.astro`, `pages/terms.astro` | OEG to provide |

## Notes for OEG

- Service status is data-driven: flip a program's `status: 'soon'` → `'live'` in
  `src/data/services.ts` to launch daycare/boarding without touching markup.
- Logo assets are raster. Vectorize to SVG post-launch (§2).
- Voice: no em-dashes anywhere (OEG standard); warm, never "alpha."

---
*One Eleven Group · oneelevengroup.net*

# Hound & Home — Website Build Brief

Prepared by One Eleven Group for the Hound & Home website build.
Drop this file in the repo root (rename to `CLAUDE.md` if you want Claude Code to auto-load it). Everything below is the source of truth. Where something is still open, it's flagged in Section 9.

---

## 0. How to use this doc

This is the spec for a lead-generation marketing site. Build in the order in Section 10. Use the design tokens in Section 2 verbatim. Copy in Section 6 is OEG-written starter copy: the three priority pages are close to final, the rest are strong drafts to build against. Do not invent pricing numbers; pricing is inquiry-based for v1 (see Section 5).

---

## 1. Project snapshot

- **Business:** Hound & Home (single brand; "Taylor Trains Dogs" is retired and should appear nowhere)
- **What it is:** Boutique dog daycare, boarding, and training. Home-based facility model, deliberately NOT a loud commercial kennel.
- **Owner:** Taylor Arnder, sole owner, 13 years across shelters, show dogs, sport dogs, and a large daycare/boarding facility she ran as GM at 19. Planning to add 1–2 employees.
- **Location:** 1806 Ararat Hwy, Ararat, VA 24053 (near Mount Airy, NC border). Board-and-train is destination-based; clients travel to her.
- **Primary goal:** Generate leads and inquiries.
- **Secondary goals:** Let people book consults directly, and establish credibility.
- **The one thing to get right:** Reaching out and booking must be painless. This is the north star for the whole site.
- **Owner's biggest worry:** Looking like "just another trainer." The site has to prove depth, experience, and a real point of view, not blend in.

---

## 2. Brand system

### Logo & assets
Files are in `/assets/brand/`:
- `hound-and-home-horizontal.png` — primary lockup (icon + wordmark + "play | stay | train"), transparent
- `hound-and-home-icon.png` — icon only, transparent, for tight spaces and social
- `favicon-32.png`, `apple-touch-icon-180.png`, `icon-512.png` — favicon set

Usage rules:
- Icon = house outline with a seated dog, a camel dot, a sage leaf. The single-line drawing style is part of the identity; echo it elsewhere (see Signature, below).
- Header on light backgrounds: use the horizontal lockup. On a teal section, request/produce a reversed (cream) version.
- Maintain clear space around the logo equal to the height of the "H" in HOUND.
- These are raster (high-res). Good enough to launch. Flag for OEG: vectorize to SVG post-launch for perfect scaling (Illustrator Image Trace or vectorizer.ai on the transparent icon).

### Color tokens
```css
:root {
  --ink:        #2C302F; /* primary text, charcoal */
  --teal:       #2E4A4E; /* primary brand, anchor */
  --teal-deep:  #233A3D; /* hover/active on teal */
  --sage:       #94A98C; /* secondary */
  --sage-soft:  #DCE3D6; /* tints, section backgrounds */
  --camel:      #C9A57B; /* accent only, use sparingly */
  --cream:      #F5F1E8; /* page background */
  --white:      #FFFFFF; /* cards, surfaces */
}
```
Rules: teal anchors, sage supports, camel is a punctuation accent (used the way the logo uses the single dot, not as a fill). No harsh or saturated color. Nothing reads industrial.

Tailwind (v3) equivalent:
```js
colors: {
  ink: '#2C302F', teal: { DEFAULT: '#2E4A4E', deep: '#233A3D' },
  sage: { DEFAULT: '#94A98C', soft: '#DCE3D6' },
  camel: '#C9A57B', cream: '#F5F1E8',
}
```

### Typography
- **Display / headings:** Fraunces (soft serif, variable). Use the optical-size axis for large headings. Weights 400–600. This is the "elevated casualness" Taylor loves.
- **Body / UI:** Mulish. Weights 400/500/600.
- Both are free Google Fonts; self-host via `@fontsource/fraunces` and `@fontsource/mulish` for speed and privacy.
- Type scale (rem): 3.5 / 2.5 / 1.75 / 1.25 (headings) and 1.0 body, 0.875 captions. Generous line-height on body (1.6). Letter-spacing slightly open on small all-caps labels.

### Voice & tone
Warm and personable, like a trusted neighbor who happens to be the most knowledgeable person in the room. Calm and grounded, lightly editorial. Confident without ever being "alpha." Speaks to people who love their dogs and want a partner, not a drill sergeant.
- Words to feel: safe, partnership, holistic, sustainable.
- Words/energy to avoid entirely: industrial, alpha, pack leader, militant, "boot camp," "obedience school," anything harsh.
- Write to the engaged, invested owner. Gently repel the quick-fix crowd by being honest that good results take partnership and follow-through.

### Aesthetic direction (read this before you design)
References Taylor gave: theeverydaytrainer.com (info-rich but not overwhelming), teddybeargoldendoodles.com (clean, elegant lines), thegooddog.org. Mood references: The Greenbrier resort (elegant yet warm, feels safe and at home) and an elevated-casual lifestyle creator feel.

Heads up on the template trap: cream background + soft serif + camel accent sits very close to a generic "AI-designed boutique" look. Taylor's whole worry is blending in, so do NOT let this default. Ground every choice in the subject's actual world: home, structure, the single-line drawn quality, the calm of a dog that's safe. Earn the distinctiveness.

**Signature element (the thing the site is remembered by):** the rooflined house-arch from the logo, used as a recurring structural frame. Mask hero or gallery imagery inside the house silhouette, shape section dividers with its peaked line, or frame the three service cards inside it. Pair with the single-line illustration style for small spot graphics (a leaf, a paw, a bone) drawn in the same one-weight stroke. Use the sage leaf and camel dot as quiet punctuation, never decoration for its own sake.

Motion: minimal and soft. Gentle scroll-reveal on sections, a subtle lift on card hover. Respect `prefers-reduced-motion`. Overdoing animation reads AI-generated and breaks the calm.

Quality floor: responsive to mobile, visible keyboard focus, real alt text, fast (Lighthouse 90+).

### Art direction & photography
Confirmed from Taylor's reference set. The thread across her picks: warm, natural light, real dogs and real people, editorial but never staged-corporate, green-forward outdoor settings that reinforce the sage palette. Premium and calm, closer to a countryside retreat than a facility.
- **Hero and feature imagery:** dogs in motion in lush natural settings, soft overcast or golden light. Aspirational and joyful, not clinical. (ref: doodles running a hedge-lined path)
- **Lifestyle / About:** Taylor with dogs, candid and warm. This carries the "real human behind it" trust on the About page. (ref: trainer walking a group on pretty leads)
- **Daycare / Play:** group play energy is welcome, but shot on grass in natural light. Avoid the sterile-turf, big-facility read Taylor explicitly wants to steer clear of.
- **Show range of breeds, not just doodles.** Working with every kind of dog is her stated differentiator, so the imagery should prove it.
- **Color grade toward warm naturals** that sit with cream, sage, teal, and camel. No cold or heavily filtered edits.

**Reusable component, "Meet the Pack":** a featured-dog format from her reference set. A dog on a soft solid backdrop, a tracked lowercase eyebrow ("meet:"), and the dog's name large in Fraunces. Build it as a repeatable card; it works as a website gallery feature and doubles as an Instagram template, tying the site to her social.

---

## 3. Tech stack & infrastructure

- **Framework:** Astro + Tailwind. Best fit for a content/marketing site: fast, great SEO, component-based, easy to hand back to OEG. (Alternative: Next.js static export if a client portal or course platform becomes near-term. Not needed for v1.)
- **Deploy:** Vercel, connected to GitHub (OEG standard).
- **DNS:** Cloudflare (OEG standard) once the domain is secured (see Section 9).
- **No backend for v1.** All dynamic pieces are third-party embeds (booking, forms, email). Keep it static.

---

## 4. Sitemap & page priority

All pages Taylor marked, in nav order:

1. Home
2. About / Our Story (Meet Taylor)
3. Services (overview) → individual service pages
4. Investment (pricing)
5. Gallery / Past Work
6. Testimonials
7. FAQ
8. Booking
9. Contact

Footer-only: Privacy Policy + Terms (OEG to provide).

**Build first (Taylor's top 3):** Services overview, About / Our Story, Booking. These get designed and written before anything else.

---

## 5. Page-by-page spec

### Home
Front door. Job: communicate in 5 seconds that this is a deeply experienced, holistic, home-based alternative to a commercial kennel, then route people to Services or Booking.
- Hero: full-bleed editorial photo of dogs in motion in a lush natural setting (see Art Direction), with headline and subhead overlaid. Primary CTA "Start with a conversation" → Booking. Secondary "See the programs" → Services. Use the house-arch motif in supporting sections rather than the hero, so the hero photo can breathe.
- Play | Stay | Train: three cards, each linking to its service area. This is the structural spine of the brand; mirror it across the site.
- "Why Hound & Home" band: the differentiators (13 years, every breed, root-cause not one-size-fits-all, enrichment and real home environment, lifelong support).
- A short Meet Taylor teaser → About.
- A few testimonials (pull from Testimonials).
- Closing CTA to Booking.

### About / Our Story (priority)
Job: prove she is not "just another trainer," while staying warm and personable. This is where credibility lives. Use Section 6 copy. Include a real portrait (brand shoot). End with a soft CTA to book.

### Services (priority)
Lead with the philosophy (structured, enriching, breed-fulfilling, hiking and trail time, evening brush-outs, homemade treats, clean and safe, never a free-for-all), then the programs. Group under Play | Stay | Train:
- **Stay** (board & train + boarding): 3-week Puppy Program, 4-week Puppy Program, 3 / 4 / 6-week Stay & Train, Behavioral Modification Stay & Train, Breeder Packages (discounted puppy programs + virtual material). Boarding listed as coming soon if not yet live.
- **Train** (sessions): Virtual One-on-One Sessions. Go-home sessions and ongoing support as part of programs.
- **Play** (daycare): mark "coming soon" if not launched; build the page structure now so it's ready.
Each program gets a short individual page: who it's for, what's included, what the dog goes home knowing, the support that follows. CTA on each → Booking.

### Investment (pricing)
Use "Investment," never "price" or "cost." Pricing is inquiry-based for v1: explain the philosophy (every dog and family is different, so programs are matched in a consult), then a single CTA to book a consultation. Do not hardcode numbers until OEG confirms them.

### Gallery / Past Work
Grid of real dogs and stays. Build to accept video later (nice-to-have, not v1). House-arch image masks tie it to the brand. Include the "Meet the Pack" featured-dog component (see Art Direction) as a repeatable card, also usable on Home and as a social template.

### Testimonials
Card or quote layout. Placeholder structure; OEG collects real quotes.

### FAQ
Seed directly from the questions Taylor answers constantly: What is the investment? What does the booking process look like? Which program is right for my dog? What does the day-to-day process look like? Add: Do you work with all breeds? (yes), What support do I get after my dog goes home? (go-home sessions, check-ins, lifelong support), Where are you located / do clients travel to you? Keep answers in her warm, plain voice.

### Booking (priority — the most important interaction on the site)
This page must feel effortless. Three honest steps (sequence is real here, so numbering is appropriate):
1. Tell me about your dog (short inquiry form → HoneyBook).
2. We talk it through (book a consult → Calendly).
3. We match you to the right program.
Embed the HoneyBook inquiry/lead form and a Calendly consult scheduler. One clear primary action, no clutter. This is the page everything else points to.

### Contact
Simple: HoneyBook contact form, email, phone (336-325-0846), location, hours. Map optional.

---

## 6. Starter copy (OEG-written)

> Note: the "Meet Taylor" paragraph in the intake was borrowed from a breeder's site (Weddington Labradoodles, references Charlotte). Do NOT publish it. The copy below is written fresh for Hound & Home. No em-dashes anywhere, per OEG standard.

### Home — hero
**Headline option A:** A real home for your dog. Not a kennel.
**Headline option B:** Where your dog learns, stays, and feels at home.
**Subhead:** Boutique daycare, boarding, and training from a trainer with thirteen years and a belief that no two dogs are the same. Structured, enriching, and genuinely safe.
**Primary CTA:** Start with a conversation
**Secondary CTA:** See the programs

### About / Our Story
**Headline:** Thirteen years, every kind of dog, and one belief that started it all.
**Body:**
I have spent my life around dogs. Thirteen years of it, across animal shelters, show dogs, sport dogs, and a large daycare and boarding facility I was running as general manager at nineteen. That early responsibility taught me something I have built everything around since: dogs do not need commercialized, one-size-fits-all care. They need individualized attention, and people who understand the why behind their behavior.

That is where I fell in love with the psychology of dogs, and with training. I do not hand families a cookie-cutter program. I dig into the root of what is actually going on, because a dog who only learns to follow rules has not really changed, and a family who does not understand their dog has not really been helped.

Hound & Home is the place I always wished existed. A home, not a loud kennel. A space where your dog trains, boards, and plays in a structured, loving environment, then goes home with new skills, a clear plan, and my support for life. I work with every kind of dog, not just the easy ones, and I treat your dog the way I would want mine treated.

I would love to meet yours.
**CTA:** Book a consultation

### Services — intro
**Headline:** Care that actually fits your dog.
**Body:** Every dog who stays here gets more than a place to sleep. Days are structured and enriching: breed-fulfilling activities, one-on-one time, hikes and trail walks, an evening brush-out, homemade treats, and a clean, calm space to rest. This is never a free-for-all. It is a real home where good habits are built and kept. Explore how your dog can play, stay, and train with us.

### Booking — intro
**Headline:** Let's find the right fit for your dog.
**Body:** Reaching out should be the easy part. Tell me a little about your dog, book a quick consultation, and I will help you choose the program that actually makes sense for where you both are. No pressure, no scripts, just a conversation.

---

## 7. Functionality & integrations

- **Inquiry / contact forms:** HoneyBook (Taylor's CRM of choice). Embed her HoneyBook lead form on Booking and Contact.
- **Consult scheduling:** Calendly embed on Booking.
- **Email signups + lead magnet delivery:** Taylor is not on an email platform yet. Recommend Brevo (OEG standard) for capture + automated lead-magnet delivery. A lead magnet is to be created by OEG (idea: a short "Is your dog ready for board-and-train?" guide or a new-puppy first-week checklist). Email capture lives in the footer and as a soft inline offer on Services/FAQ.
- **Form intake:** longer questionnaire can run through HoneyBook smart files; link from Booking step 1.
- No e-commerce for v1. Structure leaves room for virtual courses within 12 months (Astro handles this cleanly later).

---

## 8. SEO & local

- NAP everywhere consistent: Hound & Home, 1806 Ararat Hwy, Ararat, VA 24053, (336) 325-0846.
- Local intent: optimize for the Mount Airy / Ararat / Surry County region for daycare and boarding, and for "board and train" and "stay and train" as destination services where clients travel in. Confirm exact service-area towns with Taylor (Section 9).
- Per-page titles and meta descriptions in her voice. Schema: LocalBusiness + Service. Set up a Google Business Profile (invite katie@oneelevengroup.net as standard).
- Fast, mobile-first, semantic headings. Alt text on every image.

---

## 9. Open decisions to confirm before/at launch

1. **Domain + handles.** Taylor has no site, domain, or business email yet. Secure a domain (houndandhome.com or closest variant), a matching Instagram handle (currently "Taylor Trains Doodles," should move to the brand), and a brand email. The build should not hardcode social/email until these are locked. OEG can check availability.
2. **Service-area towns** for local SEO copy.
3. **Pricing display.** Inquiry-only for v1 unless Taylor wants ranges shown.
4. **Which services are live at launch** vs "coming soon" (daycare, boarding, virtual courses).
5. **Brand shoot timing.** Taylor wants a shoot before launch. Site uses tasteful placeholders until real photos land; build image slots so the swap is painless.
6. **Reversed (cream) logo** for dark/teal sections, and SVG vectorization, both post-launch nice-to-haves.
7. **Logo direction (flag).** One of Taylor's references is a vintage circular badge logo (Mountain Hound, Est. 2020). It pulls against the holistic, feminine, clean personality you both locked and against the finished Hound & Home logo. Confirm with Taylor whether she wants to revisit the logo or is simply responding to the warm, established, heritage feel. If the latter (recommended), honor it through photography, an optional etched-illustration texture, and an "Est. 2020" credibility touch, while keeping the current logo as primary. Do not change the logo without sign-off.

---

## 10. Build order

1. Scaffold Astro + Tailwind, wire design tokens and fonts, drop in logo + favicons.
2. Shared layout: header (horizontal logo, nav), footer (NAP, email capture, socials placeholder), the house-arch section component, card component.
3. Build the three priority pages: Services overview, About, Booking (with HoneyBook + Calendly embeds).
4. Home.
5. Individual service pages, Investment, FAQ, Contact.
6. Gallery, Testimonials (with placeholder content slots).
7. SEO pass (meta, schema, sitemap, alt text), accessibility + reduced-motion pass, Lighthouse check.
8. Deploy to Vercel, point Cloudflare DNS once domain is secured.

---

*One Eleven Group · 707 N West St Suite 102, Raleigh, NC 27603 · oneelevengroup.net*

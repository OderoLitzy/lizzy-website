# Issue 02: Home Page + Data Layer

**Type:** AFK  
**Blocked by:** #01 Project Bootstrap  
**Demo:** Live `/` route — full home page with hero, impact stats, mission, focus areas, testimonials, and CTA banner

---

## What to build

Build the complete home page and establish the typed data layer that all subsequent pages consume. The home page is the primary donor-facing surface and must be emotionally compelling within the first viewport.

**Data layer (establishes the pattern for all pages):**

All content lives in `lib/content/` as typed TypeScript constants — no CMS, no database. Types to define:

- `TeamMember` — name, title, bio, photoUrl
- `Service` — title, description, cluster (`health` | `economic` | `community` | `legal`)
- `Project` — title, description, status (`active` | `upcoming`)
- `FocusArea` — title, description, icon, color
- `CoreValue` — title, description, icon
- `Testimonial` — quote, author, role, location

Populate all constants now using content scraped from the current CHAKE site. Impact numbers (years active, communities reached, etc.) use placeholder values flagged with a `// TODO: confirm with director` comment.

**Home page sections (top to bottom):**

1. `HeroSection` — full-viewport, emotive background image (Unsplash: African community/youth), dark overlay, Playfair Display headline "Define Your Limits", one-line mission sub-headline, two CTAs: "Support Our Work" (amber, primary) + "Learn About Us" (white outline, secondary)
2. `ImpactStatsBar` — horizontal strip: 4 stats (Founded 2018 · Communities Served · Active Programs · Volunteers). Numbers animate up on scroll into view using Intersection Observer.
3. `MissionBlock` — two-column at desktop: mission statement left, vision statement right, teal left-border accent
4. `FocusAreasGrid` — 5 cards in a responsive grid, each with icon, title, 2-line description, teal hover state
5. `TestimonialsCarousel` — auto-rotating quotes (3 testimonials), pause on hover, dot nav, amber quote marks
6. `CtaBanner` — full-width teal background, bold headline "Ready to Make a Difference?", two buttons: "Donate Now" + "Volunteer"

## Acceptance criteria

- [ ] Home page live at the Vercel URL `/`
- [ ] All 6 sections render at mobile (375px) and desktop (1280px) without layout breaks
- [ ] Impact stats animate on scroll (no animation if `prefers-reduced-motion` is set)
- [ ] Testimonials carousel auto-rotates every 5 seconds and pauses on hover
- [ ] Both hero CTAs link to correct routes (`/donate`, `/about`)
- [ ] `lib/content/` types are exported and used by home page — no inline hardcoded content
- [ ] All images use `next/image` with descriptive `alt` text
- [ ] `npm run build` passes with no TypeScript errors

## Blocked by

- #01 Project Bootstrap

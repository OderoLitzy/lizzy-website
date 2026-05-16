# Issue 06: Skills Development + Initiatives Pages

**Type:** AFK  
**Blocked by:** #01 Project Bootstrap, #02 Home Page + Data Layer  
**Demo:** Live `/skills` and `/initiatives` routes — both pages fully rendered with hero banners, rich body content, and bottom CTAs deployed to Vercel

---

## What to build

Build two content-heavy static pages — `/skills` (Skills Development) and `/initiatives` (Initiatives) — that share a common content-page layout template. Both pages are read-only; no forms or interactive features are introduced in this slice. All content is sourced from the typed data layer established in #02.

**Shared content-page layout template:**

Both pages reuse a single layout template composed of three zones: a hero banner at the top (page title, breadcrumb navigation, and a short atmospheric sub-headline over a tinted background image), a rich body content region in the middle (varied section blocks stacked vertically), and a bottom CTA band. Teal is used for section headers and accent elements. Headings use Playfair Display; body copy uses the project's default sans-serif. This template is defined once and used by both pages — and should be designed so future content pages (e.g. `/about`, `/programs`) can adopt it without modification.

---

## Skills Development page (`/skills`)

The target audience is young people in Homa Bay County seeking economic uplift. The page communicates CHAKE's practical, skills-first approach to youth empowerment and drives readers toward enrolling in a training program.

**Content sections (top to bottom):**

1. Hero banner — page title "Skills Development", breadcrumb "Home › Skills Development", and a one-sentence hook about equipping youth for economic independence.
2. Intro block — two to three sentences positioning CHAKE's skills programs as a direct response to youth unemployment and rural economic exclusion in Homa Bay.
3. Focus areas grid — four program cards, one per focus area: Youth Entrepreneurship, Agribusiness, Money Management, and Digital Literacy. Each card shows the focus area name, a short description (two to four sentences explaining the curriculum emphasis and real-world application), and a visual icon or accent color. Cards should be responsive — two columns on tablet, one column on mobile, and four columns on wide desktop.
4. How it works strip — a simple three-step horizontal sequence (Apply → Train → Launch) communicating the enrollment-to-outcome journey. Steps use numbered indicators and brief labels.
5. Bottom CTA band — prominent call to action linking to `/enroll` (the Training Enrollment page, built in a later slice). Headline: "Ready to Build Your Future?" Button label: "Enroll in a Program". The CTA must not be a dead link — it may route to a placeholder page or scroll-to-top if `/enroll` is not yet live, but the href must be set to `/enroll`.

**Data:** All four focus area entries live in `lib/content/` as typed constants. No content is hardcoded directly in the page component.

---

## Initiatives page (`/initiatives`)

This page presents CHAKE's five core focus areas in full detail. It is the primary reference for donors, partners, and community members wanting to understand what CHAKE does and why. Each initiative is treated as a self-contained section with enough depth to stand alone.

**Content sections (top to bottom):**

1. Hero banner — page title "Our Initiatives", breadcrumb "Home › Initiatives", and a one-sentence summary of CHAKE's community-first mission in Homa Bay County.
2. Intro block — two to three sentences framing the five initiatives as an interconnected response to the intersecting challenges facing youth, women, and the environment in Homa Bay.
3. Five initiative sections — one section per initiative, rendered in the order below. Each section contains: an initiative name as a teal Playfair Display heading, a description paragraph (four to six sentences covering the problem being addressed and CHAKE's response), a "Target Beneficiaries" line (who the initiative serves), and an "Our Approach" line (the method or model used — e.g. peer education, community workshops, school outreach).

   - Girl Child Empowerment and Pregnancy Prevention — focuses on keeping girls in school, building self-confidence, and reducing early pregnancy rates through mentorship and rights education.
   - Menstrual and Reproductive Health Awareness — addresses period poverty and reproductive health stigma through distribution, community education, and school-based campaigns.
   - Community Mobilization and Environmental Waste Management — engages communities in collective environmental stewardship, clean-up campaigns, and waste reduction behavior change.
   - Boys Empowerment and Mental Health Education — counters harmful masculinity norms, builds emotional literacy, and creates safe spaces for boys to discuss mental health and life skills.
   - Youth Skills Development and Economic Empowerment — mirrors the `/skills` page framing but presented in the context of CHAKE's broader community impact rather than as a program catalog.

4. Bottom CTA band — invites visitors to get involved. Headline: "Be Part of the Change." Two buttons side by side: "Support Our Work" (links to `/donate`) and "Volunteer with CHAKE" (links to `/volunteer`). Same teal background treatment as the home page CTA banner.

**Data:** All five initiative entries live in `lib/content/` as typed constants with fields for name, description, targetBeneficiaries, and approach. The page component maps over the array; no initiative content is hardcoded in JSX.

---

## Acceptance criteria

- [ ] Both `/skills` and `/initiatives` are live at their respective Vercel preview URLs with no 404 or build errors.
- [ ] Both pages use the shared content-page layout template — hero banner with breadcrumb, body content, and bottom CTA — without duplicating layout code between the two routes.
- [ ] The `/skills` page renders all four focus area program cards (Youth Entrepreneurship, Agribusiness, Money Management, Digital Literacy) with descriptions sourced from `lib/content/` typed constants, not hardcoded JSX strings.
- [ ] The `/initiatives` page renders all five initiative sections in the specified order, each with a teal Playfair Display heading, description, target beneficiaries, and approach, all sourced from `lib/content/` typed constants.
- [ ] Both pages are fully responsive: no horizontal overflow, no truncated text, and no broken grid layouts at 375px (mobile), 768px (tablet), and 1280px (desktop).
- [ ] All images (hero backgrounds and any illustrative imagery) use `next/image` with meaningful `alt` text; decorative-only images use `alt=""`.
- [ ] The `/skills` bottom CTA button has its `href` set to `/enroll` — not `#`, not `javascript:void(0)`.
- [ ] The `/initiatives` bottom CTA includes both the "Support Our Work" (`/donate`) and "Volunteer with CHAKE" (`/volunteer`) buttons, with correct hrefs even if destination pages are not yet built.
- [ ] Section headings on both pages use teal as the accent color and Playfair Display as the font family, consistent with the design system established in #02.
- [ ] `npm run build` and `npx tsc --noEmit` both pass with zero errors after this slice is merged.

## Blocked by

- #01 Project Bootstrap
- #02 Home Page + Data Layer

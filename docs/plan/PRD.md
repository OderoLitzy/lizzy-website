# PRD: CHAKE Website — Next.js Rebuild

**Organization:** Change Ambassadors Kenya (CHAKE)  
**Project type:** Full site rebuild — static HTML → Next.js 15 App Router  
**Date:** 2026-05-16

---

## Problem Statement

CHAKE's current website is a static HTML site hosted on Firebase. It presents accurate content but fails to emotionally engage its most critical audience — international donors and grant-makers — because it lacks visual hierarchy, impact storytelling, professional design language, and clear calls to action. The site reads as a list of programs rather than a living, credible organization worthy of funding and partnership. Locally, community members and youth encounter a site that feels generic and unrelatable. The result: missed funding opportunities and weak digital presence for an organization doing high-impact grassroots work in Homa Bay County, Kenya.

---

## Solution

Rebuild the CHAKE website as a modern, emotive, professional Next.js 15 application. The redesign elevates the organization's credibility with donors through strong impact storytelling, clear governance transparency, and compelling visual design — while remaining accessible and relatable for local youth and community members. The site is statically generated for speed (critical for users on mobile networks in rural Kenya), deployed on Vercel, and built mobile-first throughout.

---

## User Stories

### Donor / Grant-maker

1. As a donor, I want to immediately understand CHAKE's mission and impact on the homepage, so that I can decide within 30 seconds whether this organization warrants deeper investigation.
2. As a grant-maker, I want to see the governance structure and leadership team with credentials, so that I can assess organizational credibility.
3. As a grant-maker, I want to read about specific programs with clear descriptions of beneficiaries and outcomes, so that I can match CHAKE's work to my funding priorities.
4. As a donor, I want a prominent and trustworthy donation CTA, so that I can contribute without friction.
5. As a donor, I want to read testimonials from real community members, so that I can see evidence of ground-level impact.
6. As a grant-maker, I want to find contact information easily, so that I can reach the director for a partnership discussion.
7. As a donor, I want the site to load fast on a mobile device, so that slow networks don't create a poor impression.
8. As a grant-maker, I want to see future projects and a roadmap, so that I can assess organizational ambition and planning capacity.
9. As a potential partner, I want to understand CHAKE's collaboration history (county government, hospitals, NGOs), so that I can evaluate partnership track record.
10. As a donor, I want to share specific pages (projects, about us) easily, so that I can forward them to a colleague for co-funding consideration.

### Local Youth / Community Member

1. As a young person in Homa Bay, I want to understand what programs are available to me, so that I can access support I need.
2. As a youth, I want to enroll in skills training directly from the website, so that I don't need to travel to find out how to join.
3. As a community member, I want to volunteer with CHAKE, so that I can contribute to my community's development.
4. As a student, I want to learn about reproductive health resources available to me, so that I can make informed decisions.
5. As a youth leader, I want to find out about leadership fellowship programs, so that I can apply and develop my capacity.

### Volunteer / Supporter

1. As a prospective volunteer, I want to submit my interest and skills through a form, so that CHAKE can match me to an appropriate role.
2. As a supporter, I want to follow CHAKE on social media from the website, so that I can stay updated on their work.
3. As a volunteer abroad, I want to understand remote contribution options, so that I can support without being in Homa Bay.

### General Visitor

1. As any visitor, I want the navigation to be clear and consistent across all pages, so that I always know where I am and where to go next.
2. As a mobile user, I want the site to work perfectly on a small screen, so that I can browse without zooming or horizontal scrolling.
3. As a screen reader user, I want all images to have alt text and forms to have proper labels, so that I can access all content.
4. As a returning visitor, I want pages to load fast on a 3G connection, so that I'm not frustrated waiting for content.

---

## Implementation Decisions

### Pages & Routes

The site has 9 public routes, all statically generated:


| Route          | Page                |
| -------------- | ------------------- |
| `/`            | Home                |
| `/about`       | About Us            |
| `/services`    | Services            |
| `/projects`    | Projects            |
| `/skills`      | Skills Development  |
| `/enroll`      | Training Enrollment |
| `/initiatives` | Initiatives         |
| `/volunteer`   | Volunteer           |
| `/donate`      | Support & Donate    |


### Module Architecture

**1. Layout Shell (`components/layout/`)**

- `SiteHeader` — sticky nav with logo, mobile hamburger menu, primary CTA button ("Donate")
- `SiteFooter` — contact info, social links, quick nav, copyright
- `MobileNav` — slide-in drawer for mobile

**2. Home Page Sections (`components/home/`)**

- `HeroSection` — full-viewport hero with tagline "Define Your Limits", emotive background image, dual CTAs (Donate / Learn More)
- `ImpactStatsBar` — animated counter strip: years active, communities reached, programs running, volunteers
- `MissionBlock` — two-column: mission text left, vision statement right
- `FocusAreasGrid` — 5 cards for the core focus areas with icons
- `TestimonialsCarousel` — rotating quotes from community members
- `CtaBanner` — full-width donation/volunteer prompt

**3. About Page (`components/about/`)**

- `OrgStory` — founding story, establishment year (2018), Homa Bay context
- `TeamGrid` — responsive grid of team member cards (photo, name, title)
- `GovernanceSection` — management committee structure, election process
- `ValuesGrid` — 5 core values with icons and descriptions

**4. Services Page (`components/services/`)**

- `ServicesList` — 18 services grouped into 4 thematic clusters (Health & Reproductive, Economic, Community, Legal & Advocacy)
- `ServiceCard` — individual service with icon, title, description

**5. Projects Page (`components/projects/`)**

- `CurrentProjects` — 4 active projects as featured cards
- `FutureProjects` — 4 pipeline projects in a distinct "Coming Soon" visual treatment
- `ProjectCard` — shared card component, accepts `status: 'active' | 'upcoming'`

**6. Forms (`components/forms/`)**

- `EnrollmentForm` — training signup: name, email, phone, program of interest, message
- `VolunteerForm` — volunteer interest: name, email, skills, availability, location
- Both forms use `react-hook-form` + client-side validation; submissions route to the CHAKE Gmail via `mailto:` or a Vercel serverless function in v1

**7. Data Layer (`lib/content/`)**

- All content stored as typed TypeScript constants/arrays (no CMS)
- Types: `TeamMember`, `Service`, `Project`, `FocusArea`, `CoreValue`, `Testimonial`
- Single source of truth — content changes = single file edit

**8. Design System (`tailwind.config.ts`)**

- Brand colors: derive from CHAKE logo (to be confirmed with director)
- Provisional palette: deep teal primary, warm amber accent, off-white background
- Typography: `Inter` for body, `Playfair Display` (or similar serif) for headlines — creates professional/emotive contrast
- Spacing scale: Tailwind defaults, no custom overrides needed

### Static Generation Strategy

- All 9 routes are `generateStaticParams`-free static pages (no dynamic segments in v1)
- `next build` produces fully static HTML — zero server costs, maximum CDN cacheability
- Images use `next/image` with `priority` flag on hero images

### Form Submission (v1)

- Enrollment and Volunteer forms POST to a Next.js Route Handler (`/api/contact`)
- Route Handler sends email via Nodemailer + Gmail SMTP (using CHAKE's existing Gmail account)
- No database in v1 — emails land directly in the CHAKE inbox

---

## Testing Decisions

**What makes a good test here:** test observable behavior (page renders expected content, form validation blocks submission, form success state appears) — not implementation details (component internals, CSS classes).

**Modules to test:**


| Module           | Test type                    | What to verify                                                            |
| ---------------- | ---------------------------- | ------------------------------------------------------------------------- |
| `EnrollmentForm` | Unit (React Testing Library) | Required field validation, submit triggers handler, success state renders |
| `VolunteerForm`  | Unit (React Testing Library) | Same as above                                                             |
| `ImpactStatsBar` | Unit                         | Renders correct numbers from data constants                               |
| `TeamGrid`       | Unit                         | Renders correct count of team members                                     |
| `ProjectCard`    | Unit                         | Active vs upcoming status renders different visual treatment              |
| All 9 routes     | Integration (Playwright)     | Page loads, no hydration errors, key content present, nav works           |
| Mobile nav       | Integration (Playwright)     | Hamburger opens/closes, links navigate correctly                          |
| Form submission  | Integration                  | Valid submission reaches Route Handler, invalid submission blocked        |


---

## Out of Scope

- **CMS / content management UI** — content lives in TypeScript files; director edits via git or requests dev changes
- **Multilingual support (Swahili)** — deferred to v2; i18n-ready structure will be used but not activated
- **Online payment processing** — Donate CTA links to an external payment provider or M-Pesa instructions page; no payment integration in v1
- **User authentication** — no login, no member portal in v1
- **Blog / news section** — deferred to v2
- **Analytics dashboard** — basic Vercel Analytics can be enabled as a zero-config option; no custom dashboard
- **Image CDN / asset management** — `next/image` with local assets is sufficient for v1

---

## Further Notes

- **Brand assets:** The director (Elizabeth Achieng' Odero) should supply the CHAKE logo in SVG format and any high-resolution photography. Placeholder images from Unsplash (African community contexts) will be used during build.
- **Impact numbers:** No quantified impact data exists on the current site. Estimated/actual numbers (beneficiaries reached, communities served, years active) should be confirmed with the director before launch. Placeholders will be used.
- **Deployment:** Vercel free tier is sufficient for v1 traffic. Custom domain setup will require DNS changes on the registrar.
- **Accessibility:** WCAG AA compliance is the target — keyboard navigable, sufficient color contrast, semantic HTML throughout.
- **Performance target:** Lighthouse score ≥ 90 on mobile for Performance, Accessibility, Best Practices, SEO.

---

## Generated Artifacts


| Artifact | Full Path          | Description                                                         |
| -------- | ------------------ | ------------------------------------------------------------------- |
| PRD      | `docs/plan/PRD.md` | This document — full product requirements for CHAKE Next.js rebuild |



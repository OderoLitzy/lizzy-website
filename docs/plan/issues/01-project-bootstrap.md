# Issue 01: Project Bootstrap + Layout Shell

**Type:** AFK  
**Blocked by:** None — start immediately  
**Demo:** Live Vercel URL shows branded header, footer, mobile nav, and a placeholder homepage

---

## What to build

Initialize the Next.js 15 App Router project with TypeScript and Tailwind CSS. Establish the CHAKE design system tokens and the persistent layout shell that wraps every page on the site.

This slice is the foundation every other slice builds on. It must be deployed to Vercel before any other work begins.

**Design system decisions baked in here:**
- Primary: deep teal (`#0f766e` / `teal-700`)
- Accent: warm amber (`#d97706` / `amber-600`)
- Background: off-white (`#fafaf9` / `stone-50`)
- Headline font: Playfair Display (serif) — emotive
- Body font: Inter (sans) — professional
- Tailwind config extends the default scale with these tokens

**Layout shell components:**
- `SiteHeader` — sticky, logo left, nav links center, "Donate" CTA button right (amber, pill-shaped)
- `SiteFooter` — three columns: org description + social icons | quick nav links | contact info (email, phone)
- `MobileNav` — hamburger triggers a full-height slide-in drawer; closes on link click or backdrop tap

**Scaffold includes:**
- `app/layout.tsx` — root layout wrapping all pages with SiteHeader + SiteFooter
- `app/page.tsx` — placeholder "Coming Soon" home with CHAKE tagline
- `app/not-found.tsx` — branded 404 page
- Vercel project linked, auto-deploy on push to `main`

## Acceptance criteria

- [ ] `npm run build` completes with zero errors and zero TypeScript errors
- [ ] Site is live on a Vercel preview URL
- [ ] SiteHeader renders logo, all 9 nav links, and Donate button at desktop widths
- [ ] MobileNav hamburger appears below `md` breakpoint; drawer opens and closes correctly
- [ ] SiteFooter renders contact email, phone, and social media links
- [ ] Playfair Display loads for headings, Inter for body text
- [ ] Teal + amber design tokens are defined in `tailwind.config.ts`
- [ ] Lighthouse accessibility score ≥ 90 on the placeholder home page
- [ ] No console errors in browser

## Blocked by

None — can start immediately

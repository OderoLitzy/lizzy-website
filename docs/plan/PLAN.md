# CHAKE Website — Master Plan

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Vercel  
**Approach:** Phased delivery — every phase ships a demoable Vercel URL

---

## Phase Map

```
Phase 1 → Foundation + Home      (Issues 01, 02)
Phase 2 → Content Pages          (Issues 03, 04, 05, 06, 09)
Phase 3 → Interactive Forms      (Issues 07, 08)
Phase 4 → Polish & Ship          (Issue 10)
```

### Phase 1 — Foundation + Home
**Issues:** 01 (Project Bootstrap + Layout Shell), 02 (Home Page + Data Layer)  
**Demo:** Branded site live on Vercel with full homepage — hero, stats, mission, focus areas, testimonials, CTA  
**Gate:** `npm run build` passes, Lighthouse accessibility ≥ 90 on home page

### Phase 2 — Content Pages
**Issues:** 03 (About), 04 (Services), 05 (Projects), 06 (Skills + Initiatives), 09 (Donate)  
**Demo:** All informational routes live — donors can read the full org story, programs, team, and giving options  
**Gate:** All 7 routes render correct content from data layer, no TypeScript errors

### Phase 3 — Interactive Forms
**Issues:** 07 (Training Enrollment + `/api/contact`), 08 (Volunteer)  
**Demo:** Both forms submit and deliver email to kechangeambassadors@gmail.com  
**Gate:** Form validation works, success/error states render, email received in test run

### Phase 4 — Polish & Ship
**Issue:** 10 (SEO, Performance, Accessibility)  
**Demo:** Lighthouse CI ≥ 90 across all 4 categories on all 9 routes  
**Gate:** All metadata set, sitemap live, WCAG AA contrast passes, bundle clean

---

## Issue → Phase Index

| Issue | Title | Phase |
|---|---|---|
| 01 | Project Bootstrap + Layout Shell | 1 |
| 02 | Home Page + Data Layer | 1 |
| 03 | About Us Page | 2 |
| 04 | Services Page | 2 |
| 05 | Projects Page | 2 |
| 06 | Skills Development + Initiatives Pages | 2 |
| 07 | Training Enrollment + Form Infrastructure | 3 |
| 08 | Volunteer Page | 3 |
| 09 | Support & Donate Page | 2 |
| 10 | SEO, Performance & Accessibility | 4 |

---

## Generated Artifacts

| Artifact | Full Path | Description |
|---|---|---|
| Master plan | `docs/plan/PLAN.md` | This document |
| PRD | `docs/plan/PRD.md` | Full product requirements |
| Issues | `docs/plan/issues/01–10` | Vertical slice specs |

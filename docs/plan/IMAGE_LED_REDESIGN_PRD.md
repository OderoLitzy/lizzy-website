# PRD: CHAKE Image-Led Visual Content Architecture Redesign

Status: needs-triage
Date: 2026-06-05
GitHub parent issue: https://github.com/sondeche-rns/lizzy-website/issues/36

## Problem Statement

The current CHAKE website has the right program structure and much of the right copy, but it does not yet make enough use of the parent site's real imagery. Several internal pages rely on flat color heroes, icon-led cards, or text-heavy layouts, so the site feels cleaner than the parent site but less grounded in visible CHAKE activity.

The parent Firebase website contains a richer set of photos for school outreach, youth empowerment, services, skills development, training, staff, and community work. Those images are not yet mapped into the current Next.js site in a deliberate way. Without a visual content architecture, imagery risks becoming decorative, inconsistent, or mismatched to the page where it appears.

CHAKE needs the current website redesigned so that each page uses relevant imagery cleanly, authentically, and accessibly while preserving the existing route structure, typed content model, and brand direction.

## Solution

Introduce a **visual content architecture** for the CHAKE site. In this PRD, visual content architecture means the page-to-image and program-to-image structure that determines which images belong on each page, which images support each program category, and which layout pattern is appropriate for each image use case.

The redesign will preserve the current Next.js routes and component boundaries, copy selected parent-site images into local public assets with normalized filenames, extend the typed content model where needed, and redesign key page sections to use real imagery instead of mostly icon-led or text-only presentation.

The home page will use a stable image-led hero plus a curated carousel or gallery effect for broad impact storytelling. Internal pages will use restrained visual heroes and relevant image cards, grids, or galleries depending on the page purpose. Carousels will be used only where gallery behavior adds value: home, projects, and optionally about.

## User Stories

1. As a donor, I want the homepage to show real CHAKE work immediately, so that I can quickly trust that the organization is active in the community.
2. As a donor, I want a clean image-led homepage rather than a rough slideshow, so that CHAKE feels credible and professionally presented.
3. As a grant-maker, I want photos to match the programs they describe, so that I can understand CHAKE's work without guessing.
4. As a grant-maker, I want the services page to group imagery by health, economic empowerment, community advocacy, and legal rights, so that I can scan program areas efficiently.
5. As a prospective partner, I want the projects page to show evidence of current and upcoming work, so that I can assess CHAKE's activity and planning.
6. As a prospective trainee, I want the training and enrollment pages to show relevant training pathways, so that I can recognize which opportunity fits me.
7. As a youth visitor, I want images of young people, mentorship, and skills activities to appear in the right places, so that the site feels relevant to my needs.
8. As a parent or caregiver, I want health and empowerment programs to be paired with respectful imagery, so that sensitive topics feel credible and safe.
9. As a community member, I want the volunteer page to show participation and field work, so that I can imagine how I might contribute.
10. As a supporter, I want the donate page to connect giving with visible community outcomes, so that donating feels concrete.
11. As a visitor on a mobile phone, I want image sections to fit the screen cleanly, so that I do not need to zoom or scroll sideways.
12. As a visitor on a slow connection, I want images to load efficiently, so that the site remains usable.
13. As a screen reader user, I want every meaningful image to have accurate alt text, so that I receive the same content context as sighted users.
14. As a keyboard user, I want carousel controls to be reachable and understandable, so that I can browse galleries without a mouse.
15. As a motion-sensitive visitor, I want carousels and animated image treatments to respect reduced-motion preferences, so that the site is comfortable to use.
16. As a maintainer, I want images organized by purpose with normalized filenames, so that future edits are predictable.
17. As a maintainer, I want image metadata centralized in the content layer, so that page components do not hardcode image decisions.
18. As a developer, I want reusable image section and carousel modules, so that pages can share behavior without duplicating accessibility logic.
19. As a reviewer, I want the redesign decisions recorded in a PRD and triage issue, so that implementation can be planned in slices.
20. As a CHAKE stakeholder, I want the current route structure preserved, so that links and existing page expectations remain stable.
21. As a CHAKE stakeholder, I want the parent site used as an image and content source but not copied as a design system, so that the new site is cleaner than the parent.
22. As a visitor, I want the about page to show the team and organization without mislabeling unconfirmed portraits, so that the site remains accurate.
23. As a content editor, I want unknown WhatsApp portraits handled carefully, so that people are not incorrectly identified.
24. As a project visitor, I want upcoming projects to look planned rather than disabled, so that future work still feels credible.
25. As a visitor, I want page headings and text overlays to remain readable over images, so that the design does not sacrifice clarity.
26. As a maintainer, I want image usage rights checked before launch, so that local copies do not create licensing risk.
27. As a QA reviewer, I want desktop and mobile screenshots reviewed after implementation, so that image cropping and text placement are verified visually.
28. As a developer, I want the implementation to follow Next.js 16 App Router guidance, so that the redesign does not rely on stale framework assumptions.

## Implementation Decisions

- Use **visual content architecture** as the canonical planning term for this redesign.
- Preserve the current public route structure rather than adopting the parent site's static HTML route names.
- Treat the parent site as an image and content source, not as a design system to copy.
- Copy selected parent-site images into local public assets once usage rights are confirmed.
- Normalize image filenames and organize image assets by page or content purpose.
- Keep the current brand direction: teal as brand anchor, amber as action/accent, and neutral stone/white for clean page structure.
- Use real imagery as the first-viewport signal on internal pages that currently have flat teal heroes.
- Keep the homepage hero stable and use a carousel or gallery strip after the hero for broader program storytelling.
- Limit carousels to home, projects, and optionally about. Use static grids or image cards elsewhere.
- Build or update a reusable accessible carousel module with explicit controls, keyboard support, reduced-motion handling, and no required auto-advance.
- Build or update reusable image-led section modules for visual heroes, image cards, and gallery grids.
- Extend the content model so services and focus areas can reference images, while using the existing optional project and team image fields where appropriate.
- Do not map timestamped WhatsApp images to named team members until identities are confirmed.
- Use staff and WhatsApp images as organization/gallery imagery if individual identity mapping is not confirmed.
- Replace the focus-area emphasis on emoji icons with real image cards. Keep icons only as small secondary markers when helpful.
- Use cluster-level imagery on services, with optional thumbnails for high-priority services, to avoid visual noise.
- Keep upcoming projects visually credible with a clear "Coming Soon" badge rather than heavy grayscale treatment.
- Use descriptive alt text for meaningful images and empty alt text only for truly decorative images.
- Define fixed aspect ratios and responsive sizes for all image cards, galleries, and carousel slides to avoid layout shift.
- Read the relevant Next.js 16 App Router documentation in the local Next.js docs before implementation.

## Testing Decisions

- Good tests should verify observable behavior: rendered content, links, accessible names, carousel controls, image alt text, and responsive-safe structure. They should not assert incidental implementation details unless a class or attribute is the public contract under test.
- Add or update component tests for the hero, focus-area image cards, services list, projects list, about gallery, and any reusable carousel module.
- Add data-layer tests that verify image metadata is present for mapped services, projects, focus areas, and gallery entries.
- Add accessibility-focused tests that verify carousel buttons have accessible names and meaningful images have alt text.
- Add route-level tests for key pages to verify image-led sections render with expected headings and links.
- Keep prior art from existing React Testing Library tests for home, about, services, projects, and layout components.
- Use Playwright or equivalent browser checks for final visual verification on mobile and desktop if implementation changes major layouts or carousel behavior.
- Verify `npm run lint`, `npm test`, and `npm run build` after implementation.

## Out of Scope

- Changing the public route structure.
- Recreating the parent Firebase site's CSS or navigation behavior.
- Introducing a CMS.
- Building online payment processing.
- Creating new program copy beyond what is needed to label images and galleries.
- Confirming personal identities in WhatsApp images without stakeholder input.
- Launching unlicensed or unconfirmed third-party imagery.
- Adding carousels to every page.
- Reworking form submission behavior except where needed to fit redesigned page layouts.

## Further Notes

- The parent site image inventory and grill questions are recorded in `docs/plan/IMAGE_REDESIGN_GRILL_QUESTIONS.md`.
- The approved image usage decisions, normalized filenames, sensitivity flags, and launch gates are recorded in `docs/plan/IMAGE_ASSET_MAP.md`.
- The existing PRD for the original rebuild remains separate. This PRD covers a follow-on redesign focused on visual content architecture.
- The parent site includes image names with spaces, timestamps, and misspellings. Local asset names should be normalized during implementation.
- The current repo uses Next.js 16.2.6, React 19.2.4, Tailwind CSS 4, Jest, React Testing Library, and Playwright.
- Current tests already cover many components and pages, so the redesign should update existing tests rather than create a parallel test strategy from scratch.

## Generated Artifacts

| Artifact | Full Path | Description |
| --- | --- | --- |
| PRD | `docs/plan/IMAGE_LED_REDESIGN_PRD.md` | Product requirements for the image-led visual content architecture redesign |
| Parent issue | https://github.com/sondeche-rns/lizzy-website/issues/36 | GitHub parent issue for tracking the PRD and child implementation issues |
| Grill questions | `docs/plan/IMAGE_REDESIGN_GRILL_QUESTIONS.md` | Source decision tree and recommendations |
| Asset map | `docs/plan/IMAGE_ASSET_MAP.md` | Approved image usage decisions, normalized local paths, sensitivity flags, and launch gates |

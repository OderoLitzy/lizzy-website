# Issue 05: Projects Page

**Type:** AFK  
**Blocked by:** #01 Project Bootstrap, #02 Home Page + Data Layer  
**Demo:** Live `/projects` route — full projects page with active featured cards and upcoming "Coming Soon" cards, all responsive and deployed to Vercel

---

## What to build

Build the `/projects` page showcasing CHAKE's current and pipeline initiatives. The page communicates organisational momentum: active programmes are given full visual weight as featured cards, while upcoming programmes are presented in a visually distinct "Coming Soon" treatment that signals growth without overpromising.

**Page structure:**

The page opens with a header section that includes a brief introductory paragraph contextualising CHAKE's project pipeline — framing both active and upcoming initiatives as part of a deliberate, community-led strategy for change in Homa Bay County.

Below the header, active projects are rendered first under a labelled section heading. Upcoming projects follow in a separate section with its own heading.

**Active projects (4):**

1. Teenage Pregnancy Awareness Campaigns — educating young people about reproductive health, life choices, and preventing teenage pregnancies
2. Community Education Seminars — programmes providing communities with knowledge on youth development, gender equality, and social responsibility
3. Pamphlet Distribution — disseminates informational pamphlets through schools and public areas, ensuring information reaches those with limited digital access
4. Youth Leadership Forums — platforms enabling young leaders to exchange perspectives and tackle community issues

**Upcoming projects (4):**

1. Economic Empowerment Workshops — train youth in entrepreneurial skills, money management, and launching small enterprises
2. Agribusiness Skills Programs — instruction in contemporary farming methods to strengthen food security and rural livelihoods
3. Youth Leadership Fellowship — mentoring initiative cultivating responsible and impactful community leaders
4. School Mentorship Clubs — school-based guidance structures providing students with ongoing personal and academic support

**`ProjectCard` component:**

The component accepts a `status` prop typed as `'active' | 'upcoming'`. When status is `active`, the card renders with a full-colour hero image, title, and description on a white background with standard teal accent treatment consistent with the site's design system. When status is `upcoming`, the card renders with the same shape and dimensions but applies a muted, desaturated (grayscale) background to the image area, reduces the overall opacity of the card slightly, and overlays an amber "Coming Soon" badge in the upper corner. The badge must be legible and unambiguous. No other interactive affordances (e.g., "Read more" links) are shown on upcoming cards, since there is no destination page yet.

**Data source:**

All project content is consumed from the `Project` typed constants already established in the data layer by issue #02. No new types need to be defined. The page filters the shared project array by the `status` field to produce the two lists. Content is not hardcoded inline in the page component.

**Images:**

Active project cards use representative Unsplash photos (African youth, community outreach, education, rural Kenya themes). Upcoming project cards still render an image placeholder in the grayscale treatment — a generic, neutral image or a solid muted tone — so the card shape remains consistent across both sections.

## Acceptance criteria

- [ ] The `/projects` route is live at the Vercel deployment URL and returns a 200 response
- [ ] The page header renders an introductory paragraph that describes CHAKE's project pipeline before the card grids appear
- [ ] All 4 active projects render as full-colour featured cards with image, title, and description; no content is missing or truncated on mobile (375 px) or desktop (1280 px)
- [ ] All 4 upcoming projects render in the "Coming Soon" treatment: grayscale/muted image area, reduced card brightness, and an amber "Coming Soon" badge visible in the upper corner of each card
- [ ] The `ProjectCard` component is reused for both active and upcoming cards; the visual difference is driven entirely by the `status` prop, not by duplicating the component
- [ ] Active and upcoming project lists are derived by filtering the shared typed constants from `lib/content/` — no project content is hardcoded in the page file
- [ ] All card images use `next/image` with descriptive, meaningful `alt` text relevant to each project's subject matter
- [ ] The two sections (active and upcoming) are visually and semantically separated with distinct headings; a screen reader navigating by headings can distinguish between them
- [ ] The page layout is responsive: cards display in a single column on mobile, two columns on tablet, and three or four columns on desktop without overflow or layout breaks
- [ ] `npm run build` completes with zero TypeScript errors and zero ESLint errors

## Blocked by

- #01 Project Bootstrap
- #02 Home Page + Data Layer

# Issue 04: Services Page

**Type:** AFK  
**Blocked by:** #01 Project Bootstrap, #02 Home Page + Data Layer  
**Demo:** Live `/services` route — full services page with four thematic cluster sections, all 18 services displayed in responsive card grids, and a page intro explaining CHAKE's holistic approach

---

## What to build

Build the `/services` page, presenting all 18 CHAKE services organized into four thematic clusters. The page must communicate the breadth and intentionality of CHAKE's programming — showing donors, partners, and community members that these services form an integrated, holistic response to the challenges facing youth and families in Homa Bay County.

**Data layer additions:**

Extend the `Service` type established in #02 to include an `icon` field (a string key mapping to a Heroicons or similar icon set). Populate all 18 services with titles, short descriptions (one to two sentences each, written in plain language accessible to community members), the correct cluster value, and an icon key that semantically matches each service's theme.

**Page intro:**

A full-width introductory section beneath the page hero explains CHAKE's holistic philosophy — that sustainable change requires addressing health, economic independence, legal rights, and community solidarity together, not in isolation. The copy should be warm, direct, and grounded in the Homa Bay context without being patronizing. This intro is a static prose block, not a data-driven component.

**Cluster sections — four, in order:**

1. Health and Reproductive (6 services): Life Skills, Sexual and Reproductive Health Education; Teen Pregnancy Prevention Education; Family Planning Awareness; Alternatives to Unsafe Abortion; Healthcare Referrals; Menstrual Health Awareness

2. Economic Empowerment (4 services): Economic Empowerment Support; Linking Families to Income-Generating Ideas; Agribusiness and Economic Opportunity Awareness; Youth Skills Development

3. Community and Advocacy (5 services): Community Mobilization and Advocacy; Seminars in Schools, Churches and Community Spaces; Pamphlet and Awareness Campaigns; Victim Storytelling Forums; Safe Spaces and Support Groups

4. Legal and Rights (3 services): Girl and Boy Child Empowerment Programs; Legal Rights Education; Partnerships and Referral Linkages

Each cluster renders as a named section with a visible section heading. The heading carries a teal left-border accent (matching the brand accent used elsewhere in the site) to visually anchor it and distinguish it from the card content below.

**ServiceCard component:**

Each card displays an icon, the service title, and a short description. Cards use a white background with a subtle shadow, teal icon color, and a teal top-border or left-border accent on hover. The card layout is compact enough to work at grid density without truncating text. Cards are not interactive links — they are informational display units only.

**Responsive grid:**

Cards within each cluster section are arranged in a responsive CSS grid. On mobile (single column), each card occupies the full width. On tablet, two cards per row. On desktop, three cards per row. The grid adapts to clusters with fewer cards gracefully — a cluster with three services still aligns left rather than centering or stretching cards to fill the row.

**Page hero:**

A compact page-level hero (shorter than the home page hero) with the page title "Our Services" and a brief sub-headline. Uses a teal or dark background consistent with interior page conventions established in #01 or #02.

## Acceptance criteria

- [ ] The `/services` route is live on the Vercel deployment URL and accessible without authentication
- [ ] All 18 services appear, each in the correct cluster section, with no content omissions or misclassifications
- [ ] Each cluster section heading is visually distinct with a teal accent and clearly separates clusters from one another
- [ ] `ServiceCard` renders icon, title, and description for every card; no card displays a missing icon or empty description
- [ ] The responsive grid collapses to one column on mobile (375px), two columns on tablet (768px), and three columns on desktop (1280px) with no layout breaks at any breakpoint
- [ ] The page intro section is present, readable, and does not contain placeholder or Lorem Ipsum text
- [ ] All service data is sourced from the typed `lib/content/` constants — no content is hardcoded directly inside page or component files
- [ ] All images (if any) use `next/image` with descriptive `alt` text; all icons are rendered with an accessible `aria-label` or accompanied by visible text
- [ ] `npm run build` completes with zero TypeScript errors and no warnings about missing types on the `Service` data shape
- [ ] The page renders correctly with `prefers-reduced-motion` active — no animations are required on this page, and none should fire unconditionally

## Blocked by

- #01 Project Bootstrap
- #02 Home Page + Data Layer

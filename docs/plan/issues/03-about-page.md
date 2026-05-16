# Issue 03: About Us Page

**Type:** AFK  
**Blocked by:** #01 Project Bootstrap, #02 Home Page + Data Layer  
**Demo:** Live `/about` route — full About Us page with org story, team grid, governance section, and values grid

---

## What to build

Build the complete About Us page, which is the primary trust-building surface for donors, partners, and community members. The page draws on the typed content constants established in the data layer (issue #02) and introduces no new data patterns — all team member data comes from the existing `TeamMember` type, and core values come from the existing `CoreValue` type. Both constants should already be populated; this issue only consumes them.

**Page sections (top to bottom):**

1. `OrgStory` — a full-width narrative section opening the page. Opens with a Playfair Display heading and an emotive prose block recounting CHAKE's founding in 2018 in Homa Bay County, Kenya. The copy communicates the organisation's mission — improving lives for youth, women, and vulnerable populations — and leads with the tagline "Define Your Limits". The tone is warm and personal, not corporate. A teal horizontal rule separates this section from the next.

2. `TeamGrid` — a responsive photo-card grid showcasing all 11 team members. Members are: Elizabeth Achieng' Odero (Director), Paskalia Glory Akinyi, Dr. Ibsen Henric Ongidi, Noel Curt Odero, Dr. Caren Adhiambo Otieno, Solet Bunde, Dr. Frida Okeyo, Reinhard Otieno, Dr. Karen Atieno, Maryanne Adhiambo, and Isaac Opiyo. Each card shows a circular photo placeholder (resolved from the `TeamMember` data), the member's name in a semi-bold weight, and their title in a muted smaller size. Cards have a hover lift effect (subtle upward translate with box shadow increase). The Director's card carries a distinct amber accent — a border or badge — to signal her role without breaking the grid layout. At mobile the grid collapses to two columns; at desktop it expands to four.

3. `GovernanceSection` — a clean informational block describing how CHAKE's Management Committee is constituted. The copy explains that the committee is elected by members via secret ballot at Annual General Meetings or Special General Meetings convened for that purpose. The intent is to signal democratic accountability to institutional donors and partners. Rendered as a contained card with a subtle background tint, a Playfair Display sub-heading, and concise body copy — no tables or complex layout.

4. `ValuesGrid` — a five-card grid of CHAKE's core values, each card carrying an icon, a value title, and a two-line description. The five values are: Inclusive participatory leadership; Economic empowerment for sustainable livelihoods; Transparency and ethical governance; Technology-driven innovation; Environmental sustainability and climate resilience. Icons are sourced from the icon set already in use on the home page's `FocusAreasGrid` so the visual language is consistent. Cards use the teal accent colour on the icon and a hover teal border.

## Design decisions

- Playfair Display is used for all section headings on this page, matching the home page heading style.
- Teal is the accent colour on dividers, icons, and interactive states.
- The amber highlight on the Director card is the only amber usage on the page; it should not appear on any other card.
- The overall page background is white with generous vertical padding between sections so the page breathes.
- All section headings are centred at desktop; body copy in `OrgStory` and `GovernanceSection` is left-aligned within a centred max-width container.

## Acceptance criteria

- [ ] The `/about` route is live at the Vercel preview URL and returns a 200 with no hydration errors in the browser console
- [ ] All four sections (`OrgStory`, `TeamGrid`, `GovernanceSection`, `ValuesGrid`) render correctly at 375 px mobile and 1280 px desktop without horizontal overflow or layout breaks
- [ ] All 11 team members appear in the grid with their correct name and title sourced from the `TeamMember` constants — no hardcoded strings in the component
- [ ] The Director card (Elizabeth Achieng' Odero) displays the amber accent; no other card does
- [ ] Team photo placeholders render via `next/image` with descriptive `alt` text matching the member's name
- [ ] Cards in `TeamGrid` and `ValuesGrid` exhibit the hover lift or hover border effect on pointer devices
- [ ] The five core values are rendered from the `CoreValue` constants — no hardcoded strings in the component
- [ ] `GovernanceSection` copy accurately conveys secret-ballot election at AGM/SGM and is free of grammatical errors
- [ ] `npm run build` passes with zero TypeScript errors and zero ESLint errors
- [ ] The page respects `prefers-reduced-motion`: hover transitions and any entrance animations are disabled when the OS preference is set

## Blocked by

- #01 Project Bootstrap
- #02 Home Page + Data Layer

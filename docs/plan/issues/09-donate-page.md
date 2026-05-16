# Issue 09: Support & Donate Page

**Type:** AFK  
**Blocked by:** #01 Project Bootstrap, #02 Home Page + Data Layer  
**Demo:** Live `/donate` route — full Support & Donate page with Hero, Ways to Give cards, Impact Breakdown, pulled-through testimonials, a Major Gifts contact block, and a social-share Bottom CTA, deployed to Vercel with no payment forms

---

## What to build

Build the `/donate` page, giving CHAKE a dedicated giving page that converts visitors into supporters without requiring any payment processing infrastructure in v1. Every call-to-action leads to an external payment method, a mailto link, or an internal navigation link — the site never handles money directly. Amber is the dominant accent color throughout to signal warmth and urgency. Teal is used sparingly as a section divider and structural accent, consistent with the rest of the site.

---

## Sections

### 1. Hero

A full-width hero section with an emotive headline — "Your Support Changes Lives" — and two to three sentences of supporting copy grounding the ask in the Homa Bay context: what CHAKE does, who benefits, and why community support is essential to sustaining the work. The CTA button in this section uses an amber background with dark text to establish the amber action palette that carries through the rest of the page. The hero uses a dark or deep background (consistent with interior page conventions) so the amber button has maximum contrast and visual pull.

### 2. Ways to Give

Three giving methods presented as equal-weight cards in a responsive grid. Each card has a prominent icon, a method title, and enough instructional copy that a first-time donor can act without needing to contact CHAKE.

**M-Pesa (Kenya Mobile Money):** The primary and most prominent card given the local audience. Displays either a Paybill number or a till number — whichever the director confirms — along with a short account name. Includes a numbered step-by-step instruction list (go to M-Pesa → Lipa na M-Pesa → Buy Goods or Pay Bill → enter the number → enter amount → confirm). All numeric details are populated with clearly labeled placeholders (for example, "XXXXXXX — confirm with director") and flagged in a code comment so the handoff to the director is unambiguous.

**Bank Transfer:** Displays placeholder account holder name, bank name, branch, and account number — all flagged the same way as M-Pesa details. Instructs donors to use their name as the payment reference and to email kechangeambassadors@gmail.com after transferring so CHAKE can acknowledge the gift.

**In-Kind / Volunteer:** A lighter card explaining that CHAKE also welcomes donated goods, skills, and time. This card's CTA links internally to `/volunteer` rather than providing an external link or contact detail, creating a natural navigation bridge between the two pages.

Card styling follows the white-background, subtle-shadow pattern established in earlier slices. The M-Pesa card may carry a slightly heavier amber top-border accent to communicate that it is the recommended primary method. Cards are not expandable or interactive beyond their CTA links — all instructional content is visible immediately without any toggle or accordion.

### 3. Impact Breakdown

A visually distinct section — amber or warm-neutral background to separate it from the white card section above — showing how donations are used across three categories: direct programs, community outreach, and operations. Each category is represented by a large percentage figure, a short label, and one sentence explaining what that budget line funds in practice. The percentages are placeholders (for example, 70% / 20% / 10%) and are explicitly flagged for director confirmation both in a visible disclaimer line beneath the block and in a code comment. Numbers should be large enough to read at a glance — this is a trust-building device, not a footnote.

### 4. Testimonials Pull-Through

One or two testimonials drawn from the `Testimonial` type already established in the #02 data layer. The agent should select testimonials that speak directly to the impact of CHAKE's work on individual lives — these carry more persuasive weight on a giving page than general organisational testimonials. Testimonials render in the same `Testimonial` component used elsewhere on the site, maintaining visual consistency. If fewer than two suitable testimonials exist in the current data, a single testimonial with a full-width layout is acceptable. No new testimonial data type is introduced; this section reuses whatever is already defined.

### 5. Contact for Major Gifts

A distinct, text-forward block — not a card — making a direct appeal to institutional donors, companies, or individuals considering significant contributions. The copy should acknowledge that large gifts often require a conversation and invite donors to reach out directly. Contact details are displayed prominently: email kechangeambassadors@gmail.com (rendered as a mailto link) and phone +254 769629620 (rendered as a tel link for mobile users). No contact form is rendered — this is an explicit v1 constraint. The section heading and any accent elements use amber. The block should feel personal and inviting rather than bureaucratic.

### 6. Bottom CTA — Spread the Word

A closing section for visitors who cannot donate financially right now. The headline is "Can't donate right now? Spread the word." followed by a brief sentence affirming that awareness is itself a form of support. Social share prompts are provided for WhatsApp, Twitter/X, and Facebook, each rendered as an accessible link or button that opens the relevant sharing URL pre-populated with a short message and the site URL. No third-party share widget is embedded — each button is a plain anchor with the platform's native share URL scheme. Amber buttons, consistent with the rest of the page.

---

## Acceptance criteria

- [ ] The `/donate` route is live on the Vercel deployment URL and accessible without authentication; no 404 or build error occurs
- [ ] All six sections render in document order — Hero, Ways to Give, Impact Breakdown, Testimonials, Major Gifts Contact, Bottom CTA — with no section missing or out of sequence
- [ ] The M-Pesa, Bank Transfer, and In-Kind cards all display their full instructional content without requiring any user interaction (no accordion, toggle, or modal); all placeholder payment details are visually or textually flagged as pending director confirmation
- [ ] The Impact Breakdown section displays three percentage figures with labels and one-sentence explanations; a visible disclaimer notes that figures are illustrative and pending confirmation
- [ ] Testimonials section renders at least one `Testimonial` component using data from the existing typed data layer — no new content type is introduced and no testimonial content is hardcoded in the page file
- [ ] The Major Gifts block renders kechangeambassadors@gmail.com as a working mailto link and +254 769629620 as a working tel link; both open the correct native handler on mobile
- [ ] All social share buttons in the Bottom CTA open the correct platform share URL with a pre-populated message; links open in a new tab with `rel="noopener noreferrer"`
- [ ] Amber is used as the dominant CTA and accent color throughout — all primary buttons and key numerical callouts use amber; teal appears only as a structural divider or secondary accent, never as a primary button color on this page
- [ ] The page is fully responsive: single-column on mobile (375px), two-column Ways to Give grid on tablet (768px), three-column on desktop (1280px); Impact Breakdown figures remain readable at all breakpoints
- [ ] `npm run build` completes with zero TypeScript errors; no page or component on this route references payment, form submission, or server action logic of any kind

---

## Blocked by

- #01 Project Bootstrap
- #02 Home Page + Data Layer

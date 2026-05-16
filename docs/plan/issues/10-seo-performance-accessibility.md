# Issue 10: SEO, Performance & Accessibility

**Type:** AFK  
**Blocked by:** #01–#09 (all content slices)  
**Demo:** Lighthouse CI report showing ≥ 90 on Performance, Accessibility, Best Practices, and SEO for all 9 routes

---

## What to build / fix

### SEO

Every route file in the app directory exports a typed `metadata` object using Next.js App Router's built-in `Metadata` type. The title field follows the format "[Page Name] | CHAKE — Change Ambassadors Kenya" exactly, with no deviation in separator style or organisation name. The description field is a concise, human-readable sentence for each page drawn from the page's primary content — not a generic fallback.

Open Graph metadata is set on every page. All pages share a single branded OG image (1200 × 630 px) that contains the CHAKE logo and the organisation's tagline; this image is generated once as a static asset and referenced from every page's metadata rather than generated per-route. The canonical URL is set explicitly on every page using the production Vercel domain so that crawlers never encounter duplicate-URL ambiguity.

A `robots.txt` and a `sitemap.xml` are generated using Next.js App Router's `MetadataRoute` conventions (files in the `app/` directory that export the appropriate typed objects). The sitemap includes all 9 public routes with their last-modified dates. The robots file allows all crawlers and points to the sitemap.

Every page has exactly one `<h1>` element. Any page that currently uses an `<h1>` inside a shared component (e.g. a hero section) and also renders another `<h1>` elsewhere must be corrected so that only the primary heading is an `<h1>`.

### Performance

Every hero image across all 9 routes has the `priority` prop set on its `next/image` component so that the Largest Contentful Paint candidate is not lazy-loaded. Images that appear in grid or card layouts use a correct `sizes` prop that matches the CSS column width at each breakpoint, preventing the browser from downloading unnecessarily large assets on mobile.

All custom fonts — Playfair Display and Inter — are loaded exclusively through `next/font`. No `<link>` tags pointing to Google Fonts CDN remain in the codebase, as these are render-blocking on first paint.

The Tailwind CSS `content` configuration covers all source files so that the production build purges unused utility classes. No unused CSS is shipped.

A bundle analysis run (using `@next/bundle-analyzer` or equivalent) is completed and documented. Any individual dependency that contributes more than 50 kb to the client bundle after minification is either replaced with a lighter alternative, dynamically imported so it is deferred off the critical path, or explicitly justified in the PR description with a note explaining why it is necessary.

### Accessibility (WCAG AA)

The teal brand colour used for text on white backgrounds and the amber brand colour used for text or interactive elements on white backgrounds both pass the WCAG AA contrast ratio requirement of 4.5 : 1 for normal-sized text. If either colour fails, the shade is adjusted to the nearest passing value that remains visually consistent with the brand.

Every form input — including the contact form fields, the training enrolment fields, and the donation amount inputs — has an associated `<label>` element linked via the `htmlFor` / `id` pair. Placeholder text alone is not accepted as a label.

Every `<img>` and `next/image` component used for informational content has a descriptive `alt` attribute that conveys the meaning or subject of the image. Decorative images that add no information use `alt=""` intentionally. No image is left without an `alt` attribute.

All interactive elements — links, buttons, form controls, and custom components such as carousel controls and the mobile navigation drawer trigger — display a visible focus indicator when navigated to via keyboard. No `outline: none` or `outline: 0` rule exists without an equivalent custom focus style that meets contrast requirements.

The tab order on every page follows the visual reading order. The mobile navigation drawer and any modal dialogs close when the user presses the Escape key. Focus is returned to the element that triggered the overlay when it closes.

Every page's rendered HTML includes the ARIA landmark elements `<nav>`, `<main>`, and `<footer>` at the top level. No page omits any of these three landmarks.

---

## Acceptance criteria

- [ ] All 9 routes return a `metadata` export with title, description, Open Graph image, and canonical URL; titles match the "[Page Name] | CHAKE — Change Ambassadors Kenya" format exactly.
- [ ] A single shared OG image (1200 × 630 px, CHAKE logo + tagline) is referenced from every page's Open Graph metadata.
- [ ] `robots.txt` and `sitemap.xml` are generated via `MetadataRoute` and include all 9 public routes; the sitemap is reachable at `/sitemap.xml` on the live URL.
- [ ] Every page has exactly one `<h1>` element as verified by automated HTML inspection or Lighthouse.
- [ ] Every hero `next/image` has `priority` set; every grid or card `next/image` has a correct `sizes` prop reflecting its CSS column width at mobile, tablet, and desktop breakpoints.
- [ ] No Google Fonts `<link>` tags are present in the document; Playfair Display and Inter are loaded only via `next/font`.
- [ ] Bundle analysis output is attached to the PR; no single client-side dependency exceeds 50 kb unmitigated, or each exception is documented with justification.
- [ ] The teal and amber brand colours pass WCAG AA 4.5 : 1 contrast ratio for normal-sized text on white backgrounds, verified with a colour-contrast tool output attached to the PR.
- [ ] Every form input on every page is associated with a visible `<label>` element via `htmlFor` / `id`; no input relies solely on placeholder text.
- [ ] Every informational image has a descriptive `alt` attribute; intentionally decorative images use `alt=""`.
- [ ] No interactive element loses its focus indicator; all focus styles meet 3 : 1 contrast against adjacent colours per WCAG 2.2 Focus Appearance guidance.
- [ ] Pressing Escape closes the mobile navigation drawer and any modal or overlay on all pages, and focus returns to the triggering element.
- [ ] Every page's rendered HTML contains `<nav>`, `<main>`, and `<footer>` as direct structural landmarks.
- [ ] Lighthouse CI scores of ≥ 90 on Performance, Accessibility, Best Practices, and SEO are achieved for all 9 routes; screenshots of the four score dials for each route are attached to the PR as evidence.

---

## The demo artifact

Run Lighthouse CI against the production Vercel deployment (or use Vercel's Speed Insights for Performance and a separate `lhci autorun` invocation for the other categories). Screenshot the four score dials for each of the 9 routes. All 36 dial screenshots (9 routes × 4 categories) are attached to the PR before it is marked ready for review.

## Generated Artifacts

| Artifact | Full Path | Description |
|---|---|---|
| Issue file | /home/prototypus/git/lizzy-website/docs/plan/issues/10-seo-performance-accessibility.md | Vertical-slice issue for the SEO, Performance & Accessibility polish pass |

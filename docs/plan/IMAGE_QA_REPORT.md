# Image-Led Redesign Final QA Report

Date: 2026-06-05
Issue: https://github.com/sondeche-rns/lizzy-website/issues/44
Parent PRD: ./IMAGE_LED_REDESIGN_PRD.md
Asset map: ./IMAGE_ASSET_MAP.md

## Routes Covered

Final QA covers the redesigned public routes:

| Route | Primary image treatment |
| --- | --- |
| `/` | Priority split hero image, impact gallery, focus/content sections |
| `/about` | Organization gallery and named team portraits |
| `/services` | Cluster tabs with contextual service imagery |
| `/projects` | Project evidence cards |
| `/skills` | Training program image cards |
| `/initiatives` | Focus-area evidence sections |
| `/enroll` | Training pathway gallery |
| `/volunteer` | Field work gallery |
| `/donate` | Community outcome gallery |

## Responsive Visual QA

- Redesigned pages use bounded containers, `overflow-hidden` image frames, fixed aspect-ratio wrappers, and responsive grid/stack classes to avoid horizontal overflow on mobile and desktop.
- Hero, gallery, card, service, project, skills, initiatives, team, and training images render through `next/image` with positioned parents and `object-cover` cropping.
- Image crops are contextual rather than decorative for minors, health-sensitive, and consent-sensitive imagery. No sensitive image is used as a vague blurred texture or dark decorative background.
- Scripted Playwright QA passed for all covered routes at `390x844` mobile and `1440x1000` desktop viewports with no horizontal overflow, zero-sized images, empty meaningful alt text, or broken image loads detected.

## Accessibility QA

- Meaningful images are sourced from typed image metadata and carry descriptive alt text from `approvedImageAssets`.
- Decorative visual text, separators, and emoji icons use `aria-hidden` where they do not add page meaning.
- The impact gallery exposes a labeled region, previous/next buttons with accessible names, keyboard arrow navigation, and visible `focus-visible` ring styles on controls.
- Reduced-motion users do not receive the gallery slide opacity transition, and the gallery does not auto-advance.

## Image Performance QA

- The home hero image is marked as priority because it is the above-the-fold image.
- Gallery first slides are priority-loaded only for the active initial gallery image; remaining slide images are not independently prioritized.
- Fill images specify responsive `sizes` values so the browser can select appropriate image candidates.
- Card, team, service, project, skills, initiatives, training, volunteer, and donate imagery relies on default lazy loading below the fold.
- `npm run build` passed with all public pages statically prerendered except the dynamic contact API route.

## Verification Commands

- `npm test`
- `npm run lint`
- `npm run build`
- Playwright viewport QA against `http://localhost:3001` for mobile `390x844` and desktop `1440x1000`.

## Remaining Launch Uncertainties

- Volunteer-specific field work hero remains a `needs-replacement` content need in the asset map. Current implementation reuses approved field/community imagery until stakeholders provide a volunteer-specific photo.
- Enroll imagery is based on approved training-route assets because the parent `enroll.html` route did not expose unique imagery during review.
- Donate imagery reuses approved support/community outcome images because earlier `donate.jpg` inventory references returned 404.
- Named team portrait titles should be confirmed with stakeholders. The parent site confirms the person-to-photo mapping, but several titles use the current-site title until corrected.
- No `rights-review`, `needs-review`, or `needs-replacement` asset ships in production content. Those statuses remain documented as launch gates in the asset map.

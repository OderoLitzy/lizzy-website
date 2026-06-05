# CHAKE Image-Led Redesign Grill Questions

Date: 2026-06-05

## Purpose

This document captures the grilling track for updating the current CHAKE website with more imagery, cleaner page layouts, and gallery or carousel behavior informed by the parent website at:

https://chake-a2a48.web.app/index.html

It is intended for later review before implementation. It is not an ADR because the decisions are still reversible and the trade-offs have not been finalized.

## Current Context

The current project is a Next.js App Router site with these public pages:

- Home: `/`
- About: `/about`
- Services: `/services`
- Projects: `/projects`
- Skills: `/skills`
- Enroll: `/enroll`
- Initiatives: `/initiatives`
- Volunteer: `/volunteer`
- Donate: `/donate`

The current app already has component boundaries for home, about, services, projects, forms, layout, and editorial UI. It currently ships one real local photo:

- `public/brand/staff.jpeg`

The parent Firebase site uses a larger image set. Its route naming is inconsistent: the homepage links to `aboutus.html`, `training.html`, and `support.html`, while `/about.html` returns 404. For redesign planning, the parent site's live content and image filenames should be treated as the source of truth, not the inconsistent route labels alone.

## Parent Image Inventory

Images found from the parent site pages:

### Home

- `chakelogo.jpeg`
- `girls.jpeg`
- `girls2.jpeg`
- `girls3.jpeg`
- `skills.jpg`
- `staff.jpeg`
- `AZzn7vk3LutopC11V50F0A-AZzn7vk3F4s3cJckNuWgEg.jpg`

### About

- `staff.jpeg`
- `chakelogo.jpeg`
- `WhatsApp Image 2026-05-06 at 11.44.19 PM.jpeg`
- `WhatsApp Image 2026-05-06 at 11.44.20 PM.jpeg`
- `WhatsApp Image 2026-05-06 at 11.44.20 PM (1).jpeg`
- `WhatsApp Image 2026-05-06 at 11.44.22 PM.jpeg`
- `WhatsApp Image 2026-05-06 at 11.44.22 PM (1).jpeg`
- `WhatsApp Image 2026-05-06 at 11.44.23 PM.jpeg`
- `WhatsApp Image 2026-05-06 at 11.44.25 PM.jpeg`
- `WhatsApp Image 2026-05-06 at 11.44.25 PM (1).jpeg`
- `WhatsApp Image 2026-05-06 at 11.44.27 PM.jpeg`
- `WhatsApp Image 2026-05-06 at 11.44.27 PM (1).jpeg`
- `WhatsApp Image 2026-05-07 at 10.32.57 AM.jpeg`
- `facebook.jpg`
- `instagram.jpg`
- `whatsapp.jpg`

### Services

- `sexhealth.jpg`
- `teen.jpg`
- `familyplanning.jpg`
- `unsafeabortion.jpg`
- `healthcare referrals.jpg`
- `awareness.jpg`
- `economicempowerement.jpg`
- `income.jpg`
- `agribussiness.jpg`
- `community.jpg`
- `seminars.jpg`
- `storytelling.jpg`
- `safespace.jpg`
- `childempowerment.jpg`
- `humanrights.jpg`
- `referral.jpg`
- `homabay.jpg`

### Projects

- `girls2.jpeg`
- `teen.jpg`
- `seminars.jpg`
- `pamphlet.jpg`
- `youth.jpg`
- `economicempowerement.jpg`
- `agribussiness.jpg`
- `girls3.jpeg`
- `staff.jpeg`

### Skills

- `skillsdev.jpg`
- `lifeskills.jpg`
- `economicempowerement.jpg`
- `reproductive.jpg`
- `environment.jpg`

### Enroll

- `caregiver.jpg`
- `caregiving.jpg`
- `housemanager.jpg`
- `communitywork.jpg`

### Initiatives

- `girls.jpeg`

### Volunteer

- No unique content image found beyond `chakelogo.jpeg`.

### Support / Donate

- `donate.jpg`
- `community.jpg`
- `communitywork.jpg`
- `girls2.jpeg`
- `youth.jpg`

## Recommended Page Image Mapping

Use this as the default mapping unless a stakeholder overrides it:

| Current page | Recommended primary imagery | Reason |
| --- | --- | --- |
| Home | `girls.jpeg`, `girls2.jpeg`, `girls3.jpeg`, `skills.jpg`, group discussion image | Home should show the breadth of CHAKE's work: school outreach, youth support, skills, and community life. |
| About | `staff.jpeg`, WhatsApp team images | About should foreground the organization and team rather than generic program imagery. |
| Services | Service-specific images from `services.html` | Services already map naturally to health, economic, community, and rights clusters. |
| Projects | `teen.jpg`, `seminars.jpg`, `pamphlet.jpg`, `youth.jpg`, `economicempowerement.jpg`, `agribussiness.jpg` | Projects need concrete evidence of active and upcoming work. |
| Skills | `skillsdev.jpg`, `lifeskills.jpg`, `economicempowerement.jpg` | Skills page should feel hands-on and training-oriented. |
| Enroll | `caregiver.jpg`, `caregiving.jpg`, `housemanager.jpg`, `communitywork.jpg` | Enroll page should show the training pathways applicants are choosing from. |
| Initiatives | `girls.jpeg`, plus focus-area images reused from services and projects | Initiatives are broader than one hero image, so reuse category images per focus area. |
| Volunteer | `communitywork.jpg`, `staff.jpeg`, `girls3.jpeg` | Volunteer should show participation and field work. |
| Donate | `donate.jpg`, `community.jpg`, `girls2.jpeg`, `youth.jpg` | Donate should connect giving to visible community outcomes. |

## Grill Questions

### 1. What does "architecture from the pictures" mean?

Context: The phrase is ambiguous. It could mean literal building architecture, visual layout architecture, or page-to-image content structure. The parent images mostly show people, programs, school settings, training, community gatherings, and field work rather than buildings.

Recommended answer: Use the term **visual content architecture**. It means each page should be structured around the most relevant parent-site imagery and program category, not literal building architecture.

Status: Resolved. Stakeholder confirmed the term **visual content architecture**.

### 2. Should the redesign preserve the current Next.js page structure?

Context: The current app already maps cleanly to the parent site's content areas: home, about, services, projects, skills, enroll, initiatives, volunteer, and donate.

Recommended answer: Yes. Keep the current route structure and update each page's visual composition. Avoid recreating the parent site's inconsistent static route names.

Status: Recommended.

### 3. Should parent-site images be copied into this repo or loaded remotely?

Context: The current repo only has one local real image. Next/Image works best when assets are either local or configured remote sources. Parent URLs may change or disappear.

Recommended answer: Copy the relevant parent-site images into `public/brand/` or a new `public/images/` structure, then reference them locally. Use remote URLs only during discovery.

Status: Recommended.

### 4. What image organization should the repo use?

Context: The existing image path is `public/brand/staff.jpeg`, but the redesign needs many program images.

Recommended answer: Create clear folders:

- `public/images/home/`
- `public/images/about/`
- `public/images/services/`
- `public/images/projects/`
- `public/images/skills/`
- `public/images/training/`
- `public/images/get-involved/`

Use normalized filenames instead of parent filenames with spaces or timestamps.

Status: Recommended.

### 5. Should every page have a visual hero?

Context: Current home has a split hero with one image. Several internal pages have flat teal hero sections with no imagery.

Recommended answer: Yes, but keep heroes restrained. Use real imagery as first-viewport signal on each page, with readable text overlays or adjacent text bands depending on content density.

Status: Recommended.

### 6. Should the home page use a carousel?

Context: The parent homepage has a slideshow. The user specifically said a carousel would be great for a gallery effect.

Recommended answer: Yes, but use it as a **program gallery strip** or **impact gallery** after the hero, not as the only hero content. Keep the hero stable for performance, accessibility, and message clarity.

Status: Recommended.

### 7. What should the carousel contain?

Context: Home imagery spans school outreach, skills development, group discussion, and staff/community work.

Recommended answer: Use a carousel with 5 to 7 curated slides. Each slide should include an image, a short label, and a program category. Avoid long paragraphs inside slides.

Status: Recommended.

### 8. Should carousels appear on every page?

Context: Too many carousels can reduce usability and make pages feel repetitive.

Recommended answer: No. Use carousels only where gallery behavior helps:

- Home: broad impact gallery
- Projects: project evidence gallery
- About: optional team/photo gallery

Use static image grids or image cards elsewhere.

Status: Recommended.

### 9. What should replace emoji icons in focus areas and values?

Context: The current content model uses emoji icons for focus areas and core values. The redesign goal is more image-led.

Recommended answer: Replace focus-area emoji emphasis with real image cards. Keep icons only as small secondary markers if needed. Values can stay more text-led unless suitable images exist.

Status: Recommended.

### 10. Should services use one image per service or one image per service cluster?

Context: Parent services page has many service-specific images, but the current app groups services into health, economic, community, and legal clusters.

Recommended answer: Use cluster-level hero imagery plus optional image thumbnails for high-priority services. This avoids a noisy page while still incorporating parent imagery relevantly.

Status: Recommended.

### 11. How should upcoming projects be visualized?

Context: Current project cards mark upcoming projects as grayscale and lower opacity. If images are added, upcoming items could look disabled or inactive.

Recommended answer: Keep a clear "Coming Soon" label, but avoid heavy grayscale on photos. Use a subtle badge and lower visual priority instead, so upcoming work still feels credible and alive.

Status: Recommended.

### 12. Should team WhatsApp images be used as individual staff portraits?

Context: About page parent assets include timestamped WhatsApp images. The current app has team member names but no confirmed photo mapping.

Recommended answer: Do not map WhatsApp images to named team members until identities are confirmed. Use them as an "organization moments" gallery or keep the existing initial avatars for named team cards.

Status: Recommended.

### 13. What visual style should guide the redesign?

Context: Current site uses teal, amber, stone backgrounds, serif headings, large editorial typography, and rounded cards. Parent site is simpler and image-heavy but visually less polished.

Recommended answer: Keep the current brand palette and typography direction, but reduce oversized editorial treatments on internal pages. Use clean full-width sections, image-led cards, restrained borders, and strong whitespace.

Status: Recommended.

### 14. Should the design copy the parent site?

Context: Parent site contains valuable imagery and content mapping, but its styling has inconsistent nav links, very tall slides, repeated CSS, and rough mobile behavior.

Recommended answer: No. Use the parent site as an image/content source, not as a design system. The redesigned current site should look cleaner and more intentional than the parent.

Status: Recommended.

### 15. How should image captions and attribution be handled?

Context: Current hero has a photo attribution for `staff.jpeg`. Parent-site images do not expose clear attribution metadata.

Recommended answer: Use descriptive alt text for every image. Do not add visible attribution unless required. If licensing is uncertain, confirm ownership before launch.

Status: Recommended.

### 16. Should image choices prioritize authenticity or polish?

Context: Some parent photos are real field photos, while others may be generic or AI-like. CHAKE's credibility depends on authentic community evidence.

Recommended answer: Prioritize authentic CHAKE/community imagery over generic polish. Use clean cropping, consistent aspect ratios, and subtle overlays to make mixed-quality images feel cohesive.

Status: Recommended.

### 17. What accessibility requirements apply to the carousel?

Context: Carousels can be difficult for keyboard and screen reader users if implemented poorly.

Recommended answer: Use accessible controls with buttons, labels, keyboard support, pause behavior, and reduced-motion support. Do not auto-advance unless there is a visible pause control.

Status: Recommended.

### 18. Should the site auto-download or hotlink parent images during implementation?

Context: The parent site is a live Firebase site. Hotlinking creates reliability and ownership risks.

Recommended answer: Download selected images once, normalize filenames, and commit them as local assets if usage rights are confirmed.

Status: Recommended.

### 19. What content model changes are needed?

Context: `Project` already has optional `imageUrl`. `TeamMember` already has optional `photoUrl`. `Service` and `FocusArea` do not currently include image fields.

Recommended answer: Extend `Service` and `FocusArea` with optional image fields, and populate `Project.imageUrl` where useful. Keep data centralized in `lib/content/data.ts` unless content volume grows enough to justify a CMS.

Status: Recommended.

### 20. Should visual changes be documented in `CONTEXT.md`?

Context: No `CONTEXT.md` exists yet. The skill says to create it only when a domain term is resolved. Design implementation details should not be coupled to domain glossary.

Recommended answer: Create `CONTEXT.md` only if the stakeholder confirms terms like "visual content architecture" or other domain language that future contributors need. Do not add component or file details there.

Status: Resolved. `CONTEXT.md` now defines **Visual content architecture** as domain language.

### 21. Is an ADR needed for this redesign?

Context: ADRs are for decisions that are hard to reverse, surprising without context, and the result of real trade-offs.

Recommended answer: Not yet. If the project commits to owning copied parent-site images locally, or chooses a permanent carousel/gallery architecture across pages, an ADR may be appropriate later.

Status: Not recommended yet.

## Implementation Guardrails

- Read the relevant Next.js 16 docs in `node_modules/next/dist/docs/` before code changes.
- Preserve the current route structure.
- Use `next/image` for local images.
- Avoid layout shift by defining fixed aspect ratios for image cards and carousel slides.
- Keep text readable over images with overlays or separated text regions.
- Do not put long paragraphs inside carousel slides.
- Do not use nested cards or decorative page-section cards.
- Avoid a one-hue design. Keep teal as brand anchor, amber as action/accent, and neutral stone/white for breathing room.
- Verify desktop and mobile layouts after implementation.

## Recommended Next Step

Resolve Question 1 first:

Create the image-led redesign PRD from these decisions, then break it into implementation issues after triage.

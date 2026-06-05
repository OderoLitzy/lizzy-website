# CHAKE Image Asset Map

Date: 2026-06-05
Parent issue: https://github.com/sondeche-rns/lizzy-website/issues/37

## Purpose

This document is the reviewable asset plan for the image-led visual content architecture redesign. It records which parent-site assets may be copied into this repo, how they should be named locally, where they belong in the site, and which images require special handling.

The parent Firebase site is treated as the source of truth for currently published CHAKE imagery. Non-sensitive program, service, project, training, donation, and community images already published there are approved for reuse in this repo unless marked otherwise below.

## Launch Gates

- Only assets with an `approved` status may ship in production content.
- Assets marked `needs-review`, `needs-replacement`, or `rights-review` must not ship in production content.
- Images marked `minors`, `health-sensitive`, or `consent-sensitive` must not be used as vague decorative backgrounds, dark blurred textures, or heavily cropped hero images.
- Named team portraits may use the parent site's person-to-photo mapping unless a stakeholder corrects it.
- Store each image once under its primary semantic home, then reference that local path from multiple pages as needed.
- Use descriptive local filenames and retain the original filename in this map for provenance.
- Meaningful images need descriptive alt text before implementation. Decorative usage must explicitly use empty alt text with a reason.

## Status Values

- `approved`: approved visual content architecture asset.
- `approved-named-team-portrait`: approved portrait mapped to a named team member by the parent site.
- `approved-brand`: approved brand or UI asset, separate from visual content imagery.
- `rejected`: source image should not be copied into the visual content architecture.
- `needs-review`: candidate needs visual/content review before production use.
- `needs-replacement`: content need is valid, but this source image should not ship.
- `rights-review`: cannot ship until ownership, license, or consent is confirmed.

## Sensitivity Values

- `standard`: ordinary program, place, or activity imagery.
- `minors`: includes children or youth.
- `health-sensitive`: health, reproductive health, pregnancy, or related care context.
- `named-person`: portrait mapped to a named person.
- `consent-sensitive`: public use depends on consent or identity sensitivity.
- `rights-review`: usage rights must be checked before launch.

## Brand And UI Assets

| Original filename | Status | Proposed local path | Use | Notes |
| --- | --- | --- | --- | --- |
| `chakelogo.jpeg` | `approved-brand` | `/brand/chake-logo.jpeg` | Site logo, favicon/source brand asset | Keep separate from visual content architecture imagery. |
| `facebook.jpg` | `rejected` | _none_ | Social icon | Rejected for the visual content architecture; handle social icons separately if needed. |
| `instagram.jpg` | `rejected` | _none_ | Social icon | Rejected for the visual content architecture; handle social icons separately if needed. |
| `whatsapp.jpg` | `rejected` | _none_ | Social icon | Rejected for the visual content architecture; handle social icons separately if needed. |

## Team Portraits

The original parent site's `aboutus.html` explicitly maps these image files to names. Preserve these mappings unless a stakeholder later corrects them. Keep current Next.js titles for team members unless the parent site provides a title or stakeholders provide updated titles.

| Original filename | Status | Proposed local path | Name | Title handling | Alt text | Sensitivity |
| --- | --- | --- | --- | --- | --- | --- |
| `WhatsApp Image 2026-05-06 at 11.44.19 PM.jpeg` | `approved-named-team-portrait` | `/images/about/team/elizabeth-achieng-odero.jpeg` | Elizabeth Achieng' Odero | Parent-site title: Director | Portrait of Elizabeth Achieng' Odero, Director of CHAKE. | `named-person` |
| `WhatsApp Image 2026-05-06 at 11.44.20 PM.jpeg` | `approved-named-team-portrait` | `/images/about/team/paskalia-glory-akinyi.jpeg` | Paskalia Glory Akinyi | Current-site title, future verification allowed | Portrait of Paskalia Glory Akinyi of CHAKE. | `named-person` |
| `WhatsApp Image 2026-05-06 at 11.44.20 PM (1).jpeg` | `approved-named-team-portrait` | `/images/about/team/ibsen-henric-ongidi.jpeg` | Dr. Ibsen Henric Ongidi | Current-site title, future verification allowed | Portrait of Dr. Ibsen Henric Ongidi of CHAKE. | `named-person` |
| `WhatsApp Image 2026-05-06 at 11.44.25 PM (1).jpeg` | `approved-named-team-portrait` | `/images/about/team/noel-curt-odero.jpeg` | Noel Curt Odero | Current-site title, future verification allowed | Portrait of Noel Curt Odero of CHAKE. | `named-person` |
| `WhatsApp Image 2026-05-06 at 11.44.25 PM.jpeg` | `approved-named-team-portrait` | `/images/about/team/caren-adhiambo-otieno.jpeg` | Dr. Caren Adhiambo Otieno | Current-site title, future verification allowed | Portrait of Dr. Caren Adhiambo Otieno of CHAKE. | `named-person` |
| `WhatsApp Image 2026-05-06 at 11.44.23 PM.jpeg` | `approved-named-team-portrait` | `/images/about/team/solet-bunde.jpeg` | Solet Bunde | Current-site title, future verification allowed | Portrait of Solet Bunde of CHAKE. | `named-person` |
| `WhatsApp Image 2026-05-06 at 11.44.22 PM (1).jpeg` | `approved-named-team-portrait` | `/images/about/team/frida-okeyo.jpeg` | Dr. Frida Okeyo | Current-site title, future verification allowed | Portrait of Dr. Frida Okeyo of CHAKE. | `named-person` |
| `WhatsApp Image 2026-05-06 at 11.44.22 PM.jpeg` | `approved-named-team-portrait` | `/images/about/team/reinhard-otieno.jpeg` | Reinhard Otieno | Current-site title, future verification allowed | Portrait of Reinhard Otieno of CHAKE. | `named-person` |
| `WhatsApp Image 2026-05-06 at 11.44.27 PM.jpeg` | `approved-named-team-portrait` | `/images/about/team/karen-atieno.jpeg` | Dr. Karen Atieno | Current-site title, future verification allowed | Portrait of Dr. Karen Atieno of CHAKE. | `named-person` |
| `WhatsApp Image 2026-05-06 at 11.44.27 PM (1).jpeg` | `approved-named-team-portrait` | `/images/about/team/maryanne-adhiambo.jpeg` | Maryanne Adhiambo | Current-site title, future verification allowed | Portrait of Maryanne Adhiambo of CHAKE. | `named-person` |
| `WhatsApp Image 2026-05-07 at 10.32.57 AM.jpeg` | `approved-named-team-portrait` | `/images/about/team/isaac-opiyo.jpeg` | Isaac Opiyo | Current-site title, future verification allowed | Portrait of Isaac Opiyo of CHAKE. | `named-person` |

## Visual Content Architecture Assets

| Original filename | Status | Proposed local path | Primary use | Also used by | Draft alt text | Sensitivity | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `staff.jpeg` | `approved` | `/images/about/chake-staff-group.jpeg` | About organization hero/gallery | Home, projects, volunteer | CHAKE staff and community representatives gathered together. | `consent-sensitive` | Existing repo has `public/brand/staff.jpeg`; migrate or reference consistently in implementation. |
| `girls.jpeg` | `approved` | `/images/home/girls-school-outreach.jpeg` | Home hero | Initiatives | Girls participating in a CHAKE school or community outreach activity. | `minors` | Do not use as vague decorative background without clear context. |
| `girls2.jpeg` | `approved` | `/images/home/youth-community-outreach.jpeg` | Home impact gallery | Projects, donate, support content | Young people participating in a CHAKE community outreach activity. | `minors` | Parent projects page also uses this as a hero background. |
| `girls3.jpeg` | `approved` | `/images/home/youth-mentorship-session.jpeg` | Home impact gallery | Projects, volunteer | Youth participants gathered during a CHAKE mentorship or outreach session. | `minors` | Keep crops respectful and contextual. |
| `skills.jpg` | `approved` | `/images/home/skills-development-overview.jpeg` | Home impact gallery | Skills | CHAKE skills development activity with participants learning practical skills. | `standard` | Broad home/program storytelling image. |
| `AZzn7vk3LutopC11V50F0A-AZzn7vk3F4s3cJckNuWgEg.jpg` | `needs-review` | `/images/home/community-discussion.jpeg` | Home impact gallery | About/gallery | CHAKE community members gathered for discussion. | `consent-sensitive` | Review visually before shipping because the filename gives no subject context. |
| `childempowerment.jpg` | `approved` | `/images/services/child-empowerment.jpeg` | Services legal/rights cluster | Initiatives | Children or youth participating in a CHAKE empowerment activity. | `minors` | Use only in child empowerment context. |
| `humanrights.jpg` | `approved` | `/images/services/human-rights-education.jpeg` | Services legal/rights cluster | Initiatives | CHAKE human rights education or advocacy activity. | `standard` | Use for rights education and legal awareness. |
| `safespace.jpg` | `approved` | `/images/services/safe-spaces-support.jpeg` | Services community cluster | Initiatives | CHAKE safe space or support group activity. | `consent-sensitive` | Avoid decorative use because the context may be sensitive. |
| `sexhealth.jpg` | `approved` | `/images/services/reproductive-health-education.jpeg` | Services health cluster | Initiatives | CHAKE reproductive health education activity. | `health-sensitive` | Use with respectful, specific context. |
| `teen.jpg` | `approved` | `/images/services/teen-pregnancy-prevention.jpeg` | Services health cluster | Projects | Teen pregnancy prevention or youth health education activity. | `health-sensitive` | Use only where health/youth context is explicit. |
| `familyplanning.jpg` | `approved` | `/images/services/family-planning-awareness.jpeg` | Services health cluster | Donate/support | CHAKE family planning awareness or health education activity. | `health-sensitive` | Avoid over-cropped hero treatment. |
| `unsafeabortion.jpg` | `approved` | `/images/services/unsafe-abortion-alternatives.jpeg` | Services health cluster | _none_ | CHAKE education related to safe reproductive health services. | `health-sensitive` | Sensitive subject; keep copy and placement careful. |
| `healthcare referrals.jpg` | `approved` | `/images/services/healthcare-referrals.jpeg` | Services health cluster | _none_ | CHAKE healthcare referral or community health support activity. | `health-sensitive` | Normalize filename spacing. |
| `community.jpg` | `approved` | `/images/services/community-mobilization.jpeg` | Services community cluster | Donate/support | Community members gathered for CHAKE mobilization or advocacy work. | `standard` | Good for community advocacy and donate outcome sections. |
| `seminars.jpg` | `approved` | `/images/services/community-seminars.jpeg` | Services community cluster | Projects | CHAKE seminar with community or school participants. | `standard` | Good for projects and services. |
| `awareness.jpg` | `approved` | `/images/services/awareness-campaign.jpeg` | Services community cluster | _none_ | CHAKE awareness campaign activity in the community. | `standard` | Use for outreach and campaigns. |
| `storytelling.jpg` | `approved` | `/images/services/storytelling-forums.jpeg` | Services community cluster | _none_ | CHAKE storytelling or peer support forum. | `consent-sensitive` | Use only in safe-space/storytelling context. |
| `economicempowerement.jpg` | `approved` | `/images/services/economic-empowerment.jpeg` | Services economic cluster | Projects, skills | CHAKE economic empowerment or livelihood training activity. | `standard` | Preserve misspelled original filename only in provenance. |
| `income.jpg` | `approved` | `/images/services/income-generating-ideas.jpeg` | Services economic cluster | _none_ | CHAKE income-generating ideas or livelihood support activity. | `standard` | Use for economic empowerment support. |
| `agribussiness.jpg` | `approved` | `/images/services/agribusiness-training.jpeg` | Services economic cluster | Projects, skills | CHAKE agribusiness training or agricultural livelihood activity. | `standard` | Preserve misspelled original filename only in provenance. |
| `referral.jpg` | `approved` | `/images/services/partnership-referrals.jpeg` | Services legal/rights cluster | _none_ | CHAKE partnership or referral linkage activity. | `standard` | Parent services page references it twice. |
| `homabay.jpg` | `approved` | `/images/services/homa-bay-community.jpeg` | Services/community context | About/gallery | Homa Bay community context for CHAKE work. | `standard` | Use for place-based context if visually suitable. |
| `pamphlet.jpg` | `approved` | `/images/projects/pamphlet-distribution.jpeg` | Projects | Services/community campaigns | CHAKE pamphlet distribution or awareness material activity. | `standard` | Project evidence image. |
| `youth.jpg` | `approved` | `/images/projects/youth-leadership-forum.jpeg` | Projects | Donate/support | Youth participating in a CHAKE leadership or community forum. | `minors` | Keep context clear. |
| `skillsdev.jpg` | `approved` | `/images/skills/skills-development.jpeg` | Skills | Home impact gallery | CHAKE skills development training activity. | `standard` | Parent `skills.html` source. |
| `lifeskills.jpg` | `approved` | `/images/skills/life-skills-training.jpeg` | Skills | Services/economic cluster | CHAKE life skills training activity. | `standard` | Parent `skills.html` source. |
| `reproductive.jpg` | `approved` | `/images/skills/reproductive-health-training.jpeg` | Skills | Services/health cluster | CHAKE reproductive health training or education activity. | `health-sensitive` | Use only where health context is explicit. |
| `environment.jpg` | `approved` | `/images/skills/environmental-sustainability-training.jpeg` | Skills | Initiatives | CHAKE environmental sustainability or community training activity. | `standard` | Parent `skills.html` source. |
| `caregiving.jpg` | `approved` | `/images/training/caregiving-training.jpeg` | Enroll/training | Skills | CHAKE caregiving training pathway activity. | `standard` | Parent `training.html` source. |
| `housemanager.jpg` | `approved` | `/images/training/house-manager-training.jpeg` | Enroll/training | Skills | CHAKE house manager training pathway activity. | `standard` | Parent `training.html` source. |
| `communitywork.jpg` | `approved` | `/images/training/community-work-training.jpeg` | Enroll/training | Volunteer, donate/support | CHAKE community work or field training activity. | `standard` | Strong volunteer/donate supporting image. |

## Replacement Needs

| Content need | Status | Reason | Recommended action |
| --- | --- | --- | --- |
| Volunteer-specific field work hero | `needs-replacement` | Parent volunteer page has no unique content image beyond the logo. | Reuse `communitywork.jpg`, `staff.jpeg`, or `girls3.jpeg` until stakeholder provides a volunteer-specific photo. |
| Enroll page source route | `needs-review` | Parent `enroll.html` did not expose unique imagery during review; `training.html` contains the relevant training images. | Use training images for enroll unless stakeholders provide enroll-specific assets. |
| `caregiver.jpg` candidate | `needs-replacement` | Earlier inventory referenced this filename, but the live parent site currently returns 404 for it. | Use `caregiving.jpg`, `housemanager.jpg`, and `communitywork.jpg` for enroll/training unless a replacement file is provided. |
| `donate.jpg` candidate | `needs-replacement` | Earlier inventory referenced this filename, but the live parent site currently returns 404 for it. | Use support-page images `girls2.jpeg`, `communitywork.jpg`, `community.jpg`, and `youth.jpg` for donate/support sections. |
| Unclear home image with generated filename | `needs-review` | `AZzn7vk3LutopC11V50F0A-AZzn7vk3F4s3cJckNuWgEg.jpg` needs visual confirmation before production use. | Review visually before copying; replace with clearer community image if unsuitable. |

## Remaining Implementation Guidance

- #38 should translate this map into typed image metadata, including status, local source, alt text, sensitivity, and usage fields.
- #39 should ensure reusable image primitives can intentionally render empty alt text only for decorative media.
- #40-#43 should use only approved local image paths from this map.
- #44 should enforce the launch gates above during final QA.

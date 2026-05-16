# Issue 08: Volunteer Page

**Type:** AFK  
**Blocked by:** #07 Training Enrollment + Form Infrastructure  
**Demo:** Live `/volunteer` route — fill and submit the volunteer form, email arrives at kechangeambassadors@gmail.com tagged as a volunteer inquiry

---

## Overview

This slice delivers the Volunteer page, giving CHAKE a dedicated channel for recruiting community members and remote contributors to join its programmes in Homa Bay County and beyond. The page communicates the value of volunteering with CHAKE, captures structured interest from candidates, and routes that interest to staff via email — reusing the shared form API established in issue #07 without any new server-side infrastructure.

The key design decision for this page is that CHAKE explicitly welcomes remote volunteers. The form and surrounding copy must make this unmistakably clear so that skilled contributors from outside Homa Bay, outside Kenya, or anywhere in the world do not self-select out before applying.

---

## What to Build

### Page Layout

The page at `/volunteer` is a server component structured into four visual regions, each serving a distinct purpose in the volunteer conversion journey.

The first region is a hero section anchored by the emotive headline "Be the Change." Beneath the headline sits a short paragraph — two to four sentences — explaining why volunteers are essential to CHAKE's mission: the breadth of the work across health, education, legal advocacy, and economic empowerment means that no single team can do it alone, and that every skill set, applied with purpose, multiplies CHAKE's reach in the communities it serves. The hero must not be purely decorative; it should create a clear emotional invitation.

The second region is the volunteer interest form, rendered as a client component occupying the main content column. On desktop, the form shares the row with a sidebar; on mobile and tablet the form renders as a full-width block beneath the hero.

The third region is an informational sidebar on desktop that collapses to a stacked block on mobile. It contains three distinct panels: a "What happens next" panel explaining the post-submission process (staff review, follow-up email within a few business days, possible short call to discuss fit); a "Typical volunteer roles" panel listing three to five example engagements drawn from CHAKE's actual programme areas; and a testimonial pull-quote from a current or former volunteer, attributed by first name and role, giving the page social proof.

The fourth region, at the bottom of the page, is an FAQ accordion with three to four questions addressing the most common concerns a prospective volunteer might have. Appropriate questions include whether remote volunteering is possible (the answer must be an unambiguous yes), what time commitment is expected, what skills CHAKE most needs, and what the experience is like for first-time volunteers. Each question expands on click to reveal its answer; only one answer is visible at a time.

### VolunteerForm Component

The form is a client component. It collects the following fields in order:

- Full name — required text input.
- Email address — required, validated against a standard email format.
- Phone number — optional text input; no format enforcement is applied, since international volunteers may have non-Kenyan numbers.
- Location / Country — required text input or combobox. The label and placeholder copy must make it clear that applicants outside Kenya are welcome; a short helper line such as "We welcome remote volunteers worldwide" should accompany this field.
- Skills / Areas of expertise — required multi-select presented as a group of checkboxes. The options are: Health & Education, Legal & Advocacy, Communications & Design, Agribusiness, Technology, Community Organizing, Other. At least one option must be selected before the form may be submitted.
- Availability — required dropdown with the options: Full-time, Part-time, Weekends, One-off project.
- Motivation / message — required textarea with a minimum length of 50 characters. A visible character counter or helper text must communicate this requirement to the user before they type.
- Submit button — labelled "Express Interest."

The form POSTs to the existing `/api/contact` Route Handler with a JSON body shaped as `{ formType: "volunteer", fields: { ...formValues } }`. No changes to the Route Handler are needed; this is a pure reuse of the contract established in issue #07.

Loading, success, and error states follow the same pattern as the enrollment form: the button becomes disabled with a spinner during the in-flight request; on success the form is replaced by a thank-you message confirming that the expression of interest was received; on failure an error banner appears above the form and all field values are preserved.

---

## Acceptance Criteria

1. **Remote-volunteering clarity:** The page must make it unambiguous in at least two distinct places — once in the hero or introductory copy, and once adjacent to the Location field — that CHAKE accepts volunteers who work remotely and that applicants need not be based in Homa Bay or Kenya to express interest.

2. **Required-field validation:** Submitting the form with any required field empty or incomplete prevents the POST request and surfaces a descriptive inline error directly below the offending field. No field values are cleared as a side effect of failed validation.

3. **Skills selection requirement:** Submitting without checking at least one Skills / Areas of expertise checkbox triggers an error associated with the checkbox group. Checking any single option clears the error.

4. **Motivation minimum length:** The motivation textarea enforces a 50-character minimum. A visible helper communicates this requirement before submission is attempted. Submitting with fewer than 50 characters triggers an inline error; reaching the minimum clears it.

5. **Phone field is optional:** Leaving the phone field empty does not prevent form submission. The field label must clearly indicate that it is optional so users do not abandon the form under the impression it is required.

6. **Loading state:** From the moment "Express Interest" is clicked (after passing client-side validation) until the API responds, the submit button is disabled and visually indicates a pending state; duplicate submissions are not possible during this window.

7. **Success state:** A successful API response replaces the form with a thank-you message that is visible without scrolling on both mobile and desktop. The message confirms the expression of interest was received and sets the expectation that CHAKE will follow up by email. The thank-you message does not expose a control that could trigger a second identical submission.

8. **Error state:** A failed API response (network failure or `success: false` from the Route Handler) displays an error banner above the form fields explaining the problem and inviting a retry. All previously entered values are preserved. The submit button is re-enabled immediately.

9. **Email delivery:** Submitting a valid form causes an email to arrive in the `kechangeambassadors@gmail.com` inbox within one minute. The subject line identifies the message as a volunteer inquiry and includes the applicant's name. The body presents each field on its own labelled line in a format readable without HTML rendering, including the full list of selected skill areas.

10. **Accessibility:** Every form field and checkbox has a programmatically associated label. Inline error messages are linked to their field via `aria-describedby`. The checkbox group is wrapped in a fieldset with a legend. The submit button retains a meaningful text alternative during the loading state. The form, FAQ accordion, and sidebar are fully operable by keyboard alone, with visible focus indicators.

11. **FAQ accordion behaviour:** Each FAQ item expands on activation to reveal its answer. Only one item is open at a time — activating a second item closes the previously open one. The toggle is keyboard-accessible and the expanded/collapsed state is communicated to assistive technology via appropriate ARIA attributes.

12. **Responsive layout:** On viewports narrower than 768 px, the hero, form, sidebar panels, and FAQ stack vertically in that order with no horizontal overflow. On viewports of 768 px and wider, the form and sidebar render side by side. All touch targets meet a minimum 44 px height on mobile. The FAQ accordion is usable on all viewport widths without horizontal scrolling.

---

## Out of Scope for This Slice

- Database persistence of volunteer applications (no data layer dependency)
- Admin dashboard or application management interface
- CV or file upload
- CAPTCHA or bot protection
- Automated reply email sent to the volunteer applicant
- Volunteer onboarding workflow or status tracking
- Any content managed through a CMS

---

## Generated Artifacts

| Artifact | Full Path | Description |
|---|---|---|
| Issue file | `/home/prototypus/git/lizzy-website/docs/plan/issues/08-volunteer-page.md` | Vertical-slice issue spec for the Volunteer page at `/volunteer` |

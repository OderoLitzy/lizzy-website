# Issue 07: Training Enrollment Page + Form Infrastructure

**Type:** AFK  
**Blocked by:** #01 Project Bootstrap  
**Demo:** Live `/enroll` route — fill and submit the form, email arrives at kechangeambassadors@gmail.com

---

## Overview

This slice delivers two things in one vertical cut: the shared form API infrastructure that all contact-style forms on the site will reuse, and the Training Enrollment page as the first consumer of that infrastructure. The Volunteer page (issue #08) builds directly on top of the API established here and must not land before this slice is merged and deployed.

The goal is a fully working `/enroll` page where a prospective participant can discover CHAKE's training programs, fill in their details, and receive confirmation that their application has been received — while CHAKE receives a formatted notification email at their existing Gmail address.

---

## What to Build

### Form Infrastructure (Shared)

A Next.js Route Handler must be created to serve as the single email dispatch endpoint for the site. It accepts HTTP POST requests with a JSON body containing two fields: a `formType` string identifying which form submitted the request (e.g. `"enrollment"` or `"volunteer"`), and a `fields` object holding the form's key-value pairs. The handler validates that required top-level fields are present, formats the email body based on `formType`, sends the email using Nodemailer configured against Gmail SMTP, and returns a JSON response of either `{ success: true }` or `{ success: false, error: string }`.

The Gmail credentials use CHAKE's existing Google account (`kechangeambassadors@gmail.com`) with a Gmail app password — not the account password — stored in a Vercel environment variable named `GMAIL_APP_PASSWORD`. The sender address and recipient address are both `kechangeambassadors@gmail.com`. The email subject line must identify the form type and include the submitter's name so staff can prioritise at a glance.

The Route Handler must be written as a server-side module with no client imports. It must return appropriate HTTP status codes: 200 for success, 400 for malformed payloads, 500 for send failures.

### Enrollment Form Component

The form is a client component driven by `react-hook-form`. It collects the following fields in order:

- Full name — required text input
- Email address — required, validated against email format
- Phone number — required, validated against the Kenyan mobile format starting with `+254` followed by nine digits
- Program of interest — required dropdown (select element) with the options: Girl/Boy Child Empowerment, Reproductive Health, Economic Empowerment, Agribusiness, Leadership Fellowship, Other
- Message / additional info — optional textarea for any context the applicant wants to share

The submit button reads "Apply Now". All validation runs client-side on submit (and on blur for individual fields); inline error messages appear below each field immediately without a page reload.

While the POST request is in flight the submit button becomes disabled and displays a loading spinner in place of the label text. On a successful response the entire form is unmounted and replaced with a thank-you message that confirms the application was received and sets the expectation that CHAKE will follow up by email within a few business days. On a failed response (network error or `success: false` from the API) an error banner appears above the form explaining the problem and inviting the user to try again; all field values are preserved so the user does not have to retype anything.

### Enrollment Page Layout

The page at `/enroll` is a server component that renders three visual regions:

1. A hero section containing the page title and a short paragraph introducing CHAKE's training programs — what they are, who they serve, and why applying matters. This copy lives as static text in the component (no CMS dependency for this slice).

2. The EnrollmentForm client component occupying the main content column.

3. A sidebar or info panel (positioned alongside the form on wider screens, stacked below the hero on mobile) that communicates: what happens after applying (review timeline, follow-up email), and CHAKE's contact email for questions that cannot wait.

The overall layout must be responsive. On mobile the hero, form, and info panel stack vertically in that order. On tablet and desktop the form and info panel sit side by side.

---

## Acceptance Criteria

1. **Required-field validation:** Submitting the form with any required field empty prevents the POST request from firing and displays a visible, descriptive error message directly below the offending field without clearing any other field values.

2. **Email format validation:** Entering a string that does not conform to a standard email address format in the email field triggers an inline error on blur and on submit; a valid email address clears the error.

3. **Phone format validation:** Entering a phone number that does not match the `+254XXXXXXXXX` pattern triggers an inline error; a conforming number clears the error. The field must not accept submission with fewer or more than the expected digit count.

4. **Dropdown requirement:** Submitting without selecting a program of interest triggers an inline error on the select element; selecting any option from the list clears the error.

5. **Loading state:** From the moment the submit button is clicked (after passing client-side validation) until the API response is received, the submit button is disabled and visually indicates a pending state with a spinner; no duplicate submissions are possible during this window.

6. **Success state:** A successful API response (HTTP 200 with `success: true`) causes the form to be replaced by a thank-you message that is visible without scrolling on both mobile and desktop; the thank-you message does not contain a back-to-form link that would allow accidental resubmission.

7. **Error state:** A failed API response (non-200 status or `success: false`) displays an error banner above the form fields; all previously entered values remain in their fields; the submit button is re-enabled so the user can retry immediately.

8. **Email delivery:** Submitting a valid form causes an email to arrive in the `kechangeambassadors@gmail.com` inbox within one minute. The email subject identifies it as an enrollment inquiry and includes the applicant's name. The body presents each field on its own labelled line in a format readable without HTML rendering.

9. **Environment variable isolation:** The `GMAIL_APP_PASSWORD` value is never exposed in client-side bundles, build output, or API responses. The Route Handler must not import or re-export the variable into any client module.

10. **Accessibility:** Every form field has a programmatically associated label (via `htmlFor` / `id` pairing or wrapping label element). Inline error messages are linked to their field via `aria-describedby`. The submit button has a text alternative that remains meaningful during the loading state (e.g. `aria-label="Submitting…"`). The form is fully operable by keyboard alone.

11. **Mobile layout:** On a 375 px viewport the hero, form fields, and info panel stack vertically with no horizontal overflow. All tap targets (inputs, the dropdown, the submit button) meet a minimum 44 px touch target height.

12. **API reusability:** Sending a POST request to the Route Handler with `formType: "volunteer"` and a different `fields` payload (as issue #08 will do) returns `{ success: true }` and delivers an email without any changes to the Route Handler — confirming the shared contract works before issue #08 begins.

---

## Out of Scope for This Slice

- Database persistence of submissions (no data layer dependency)
- Admin dashboard or submission history
- File or document uploads
- CAPTCHA or bot protection
- Email threading or auto-reply to the applicant
- Any content managed through a CMS

---

## Generated Artifacts

| Artifact | Full Path | Description |
|---|---|---|
| Issue file | `/home/prototypus/git/lizzy-website/docs/plan/issues/07-training-enrollment.md` | Vertical-slice issue spec for the Training Enrollment page and shared form API |

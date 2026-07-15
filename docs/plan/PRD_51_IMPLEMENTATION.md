# PRD #51 Implementation — About Page Our Team Profiles

**Parent PRD:** [#51 PRD: Expand About page Our Team profiles](https://github.com/sondeche-rns/lizzy-website/issues/51)  
**Reviewed:** 2026-06-21  
**Status:** Ready for concurrent implementation planning

---

## Purpose

This file captures the implementation hierarchy for PRD #51 and identifies which implementation issues can run concurrently without creating unnecessary merge conflicts or horizontal work.

PRD #51 is intentionally narrow: it updates the About page **Our Team** section so the approved management-team document is reflected in structured content, compact profile cards, inline expanded details, and behavior-focused tests.

---

## Recommended Implementation Dependencies

| Issue | Title | Recommended blocker |
| --- | --- | --- |
| [#52](https://github.com/sondeche-rns/lizzy-website/issues/52) | Add structured fields for Our Team profiles | None |
| [#53](https://github.com/sondeche-rns/lizzy-website/issues/53) | Populate document-backed Our Team content | #52 |
| [#54](https://github.com/sondeche-rns/lizzy-website/issues/54) | Add Our Team mandate intro copy | None |
| [#55](https://github.com/sondeche-rns/lizzy-website/issues/55) | Render compact profile cards with expertise summaries | #53 |
| [#56](https://github.com/sondeche-rns/lizzy-website/issues/56) | Render accessible inline expanded profile details | #55 |
| [#57](https://github.com/sondeche-rns/lizzy-website/issues/57) | Add Our Team content and behavior coverage tests | #54, #56 |

---

## Clean Dependency Hierarchy

### Wave 1 — Can Start Immediately

- [#52 Add structured fields for Our Team profiles](https://github.com/sondeche-rns/lizzy-website/issues/52)
- [#54 Add Our Team mandate intro copy](https://github.com/sondeche-rns/lizzy-website/issues/54)

Issue #52 is the content-shape foundation. Issue #54 can run in parallel because the mandate copy is already specified in PRD #51 and does not need the migrated team data from #53.

### Wave 2 — After #52

- [#53 Populate document-backed Our Team content](https://github.com/sondeche-rns/lizzy-website/issues/53)

Issue #53 should wait for the structured fields from #52 so the content migration lands directly in the final data shape.

### Wave 3 — After #53

- [#55 Render compact profile cards with expertise summaries](https://github.com/sondeche-rns/lizzy-website/issues/55)

Issue #55 needs the real expertise summaries from #53. It is the clean point to stabilize the card layout before adding expanded details.

### Wave 4 — After #55

- [#56 Render accessible inline expanded profile details](https://github.com/sondeche-rns/lizzy-website/issues/56)

Issue #56 likely touches the same card component as #55, so it should merge after the collapsed card markup is stable.

### Wave 5 — Final Verification

- [#57 Add Our Team content and behavior coverage tests](https://github.com/sondeche-rns/lizzy-website/issues/57)

Issue #57 should land after #54 and #56 because it verifies the final public contract: all document-backed members, corrected names and roles, the unchanged “Our Team” heading, mandate copy, expertise summaries, and expanded qualifications/background details.

---

## Concurrency Summary

Strictly safe concurrent work:

1. Run #52 and #54 at the same time.
2. Run #53 after #52.
3. Run #55 after #53.
4. Run #56 after #55.
5. Run #57 after #54 and #56.

Possible but not recommended:

- #56 can be prototyped while #55 is in progress, but it should not be merged concurrently because both are expected to modify the team card rendering surface.
- #57 can be drafted early as expected behavior, but it should land last to avoid encoding temporary markup or incomplete content.

---

## Implementation Notes

- Keep the visitor-facing section heading exactly `Our Team`.
- Preserve existing named portrait asset mappings even where public names change.
- Prefer native `details` / `summary` expansion for profile details.
- Keep the About page scope narrow; do not redesign the full page.
- Test observable behavior instead of styling internals.
- Run lint and the existing test suite after the implementation issues land.

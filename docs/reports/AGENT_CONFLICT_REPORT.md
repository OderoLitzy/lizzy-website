# Agent Conflict Report — CHAKE Issue Generation

**Date:** 2026-05-16  
**Session:** PRD → 10 vertical-slice issues

---

## Dispatch Map

```
Orchestrator (Claude)
│
├── Wrote directly:  01-project-bootstrap.md
├── Wrote directly:  02-home-page.md
│
├── Wave 1 — 6 agents in parallel
│   ├── Agent A  →  03-about-page.md          ✓ no conflict
│   ├── Agent B  →  04-services-page.md       ✓ no conflict
│   ├── Agent C  →  05-projects-page.md       ✓ no conflict
│   ├── Agent D  →  06-skills-initiatives.md  ✓ no conflict
│   ├── Agent E  →  07-training-enrollment.md ✓ no conflict
│   └── Agent F  →  09-donate-page.md         ✓ no conflict
│
└── Wave 2 — 2 agents after Wave 1 confirmed complete
    ├── Agent G  →  08-volunteer-page.md      ✓ no conflict
    └── Agent H  →  10-seo-performance.md     ✓ no conflict
```

---

## Conflict Tally

| Type | Count | Detail |
|---|---|---|
| Write conflicts (agent vs agent) | **0** | Each agent had a unique, hardcoded output path |
| Location anomaly | **1** | `PRD.md` landed in `issues/` instead of `plan/` |
| Fixed | **1** | `mv issues/PRD.md ../PRD.md` applied |

---

## Anomaly Detail

**PRD.md wrong location**

- Expected: `docs/plan/PRD.md`
- Found at: `docs/plan/issues/PRD.md`
- Cause: the `to-prd` skill explored the `issues/` directory during its run and resolved the write path there rather than the parent.
- Fix: `mv /home/prototypus/git/lizzy-website/docs/plan/issues/PRD.md /home/prototypus/git/lizzy-website/docs/plan/PRD.md`

---

## Why Conflicts Were Avoided

Each agent prompt contained a **fully-specified, unique output path**. Agents shared read context (PRD, site content) but each wrote to exactly one file no other agent targeted. Wave 2 was held until Wave 1 fully completed — issue 08 reuses the API contract from issue 07, so ordering was load-bearing.

---

## Generated Artifacts

| Artifact | Full Path | Description |
|---|---|---|
| This report | `docs/reports/AGENT_CONFLICT_REPORT.md` | Agent dispatch and conflict analysis |

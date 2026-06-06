# Issue Tracker: GitHub Issues

Issues and PRDs for this repo live in GitHub Issues for `sondeche-rns/lizzy-website`.

## Conventions

- Use the `gh` CLI from this repo root.
- PRDs should be parent GitHub issues with the `needs-triage` label until reviewed.
- Implementation slices should be GitHub issues linked back to their parent PRD issue.
- AFK implementation slices should use the `AFK` and `ready-for-agent` labels.
- Human-review or decision slices should use `ready-for-human`.
- When a skill says to apply a triage label, apply the corresponding GitHub label from `docs/agents/triage-labels.md`.

## When A Skill Says "Publish To The Issue Tracker"

Create or update GitHub Issues with `gh issue create`, `gh issue edit`, or `gh issue comment`.

## When A Skill Says "Fetch The Relevant Ticket"

Fetch it with `gh issue view <number> --comments`. The user will normally provide the issue number or URL.

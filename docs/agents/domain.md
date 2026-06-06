# Domain Docs

How engineering skills should consume this repo's domain documentation when exploring the codebase.

## Layout

This is a single-context repo.

Read these if they exist:

- `CONTEXT.md` at the repo root
- `docs/adr/` for architectural decisions relevant to the work

If those files do not exist, proceed silently. The producer skill (`grill-with-docs`) creates them lazily when domain terms or architectural decisions are resolved.

## Vocabulary

Use the glossary's vocabulary when a domain concept is defined in `CONTEXT.md`. If a needed concept is missing, note it for a future `grill-with-docs` pass rather than inventing competing terminology.

## ADR Conflicts

If an output contradicts an existing ADR, surface the conflict explicitly instead of silently overriding it.

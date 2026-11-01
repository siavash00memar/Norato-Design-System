# Feature Specification — AI-Consumable Norato Documentation

## User story

As a coding agent with access to a Norato checkout, I need a reliable entry point and retrieval rules so I can choose a real component, understand its actual API and limitations, and build an RTL Persian Vue interface without fabricating support.

## Acceptance criteria

- The repository contains a valid `SKILL.md` with `name` and `description` frontmatter and actionable instructions for compatible coding agents.
- The skill directs agents to current source-of-truth files and gives different guidance for each catalog maturity state.
- The skill explains Norato tokens, typography, RTL, sizing, page structure, implementation order, browser DoD, and technical gates.
- A human documentation page says how to load the skill in Codex/compatible environments.
- Docs clearly state that Vue/token packages are private workspace packages and require the repo; no public registry install is claimed.
- No instruction says that catalog presence means a runtime adapter or that status alone proves full DoD.
- Relevant markdown links resolve to repository paths.

## Out of scope

- Publishing packages to npm.
- Guaranteeing every external AI product can discover or install local skills automatically.
- Finishing all component implementations as part of this documentation subfeature.
- Claiming direct rendering, testing, Git, or Vercel access is granted by the skill.

## Constraints and assumptions

- Compatible agent tools differ in local skill discovery paths; docs provide the skill path and Codex project path as an option, not a universal installer.
- The current catalog and repository files can change; instructions must resolve them dynamically.
- The current project contract makes the root `AGENTS.md` and per-component artifacts binding for repository work.

# Constitution — AI-Consumable Norato Guidance

## Purpose

Make the existing Norato documentation and component contracts discoverable and safe to consume by coding agents without inventing runtime APIs or overstating component readiness.

## Binding principles

1. The typed component catalog is authoritative for inventory, status, adapter, and usage key. Never hard-code the component count in agent instructions.
2. The Vue source and public export are authoritative for executable API. Contracts guide design and usage but do not prove implementation.
3. Distinguish `Implemented`, `Adapted`, `Proposed`, and `Deferred`; inspect the current DoD before claiming parity or production readiness.
4. Preserve Norato's RTL-first behavior, Persian typography, semantic color tokens, 48px target minimum, and documented proportions.
5. Follow the repository feature workflow and validate browser behavior and required technical gates before handoff.
6. Agent documentation must disclose that packages are private workspace packages and that the skill does not grant repository/browser/deployment access.

## Scope

This feature improves retrieval and safe consumption of the existing documentation. It does not publish npm packages, deploy the site, or claim the 48 component objective is complete.

## Acceptance

- A local Agent Skills-formatted skill gives an ordered retrieval workflow, readiness rules, Vue usage and contribution validation workflow.
- Human documentation explains where the skill is and how to make it available to Codex/compatible agents.
- AI-facing content links to the live catalog/contracts/source and clearly describes private workspace limitations.
- Terminology and counts do not imply that all cataloged components have executable adapters or completed DoDs.

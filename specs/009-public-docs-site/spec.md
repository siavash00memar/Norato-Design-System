# Feature Specification: Norato Public Documentation Site

**Feature Branch**: `009-public-docs-site`
**Created**: 2026-08-23
**Status**: Draft

## Clarifications

### Session 2026-08-23

- Q: سایدبار در موبایل چگونه باز شود؟ → A: در دسکتاپ سایدبار ثابت و در موبایل نوار تب پایین صفحه.

## User Scenarios & Testing

### User Story 1 - Understand Norato (Priority: P1)

As a visitor, I need a clear home page explaining Norato so I can understand its purpose, principles, and coverage quickly.

### User Story 2 - Explore components (Priority: P1)

As a developer or designer, I need component documentation with live examples, states, contracts, and usage guidance.

### User Story 3 - Learn patterns and structures (Priority: P1)

As a product team member, I need user patterns and layout structures so I can design complete experiences consistently.

### User Story 4 - Use Norato with agents (Priority: P1)

As an AI agent user, I need explicit instructions and source authority so agents can extend Norato without violating its design rules.

## Navigation Information Architecture

- خانه
- کامپوننت‌ها
- الگوهای کاربری
- ساختارها
- استفاده در Agentها
- دربارهٔ نوراتو

## Requirements

- **FR-001**: Site MUST expose the six navigation destinations through a persistent responsive sidebar.
- **FR-011**: On compact widths, the sidebar MUST become a fixed bottom navigation bar; on larger widths, it MUST remain a persistent sidebar.
- **FR-012**: The Components page MUST pass visual QA at 1440px, 1024px, 768px, and 390px widths with no card overflow, overlap, clipping, or broken alignment.
- **FR-013**: Site navigation MUST use a consistent vector/icon treatment or text-only labels; emoji and font-dependent structural icons are prohibited.
- **FR-014**: Site MUST provide visible keyboard focus, readable body text, and reduced-motion behavior.
- **FR-015**: Patterns and Structures MUST include verified product examples from the career-path Figma source, including viewport, gutters, progress, message cards, action rows, and field groups.
- **FR-002**: Home MUST explain Norato mission, source authorities, framework coverage, and Spec Driven workflow.
- **FR-003**: Components MUST show implemented components with examples, states, contracts, and accessibility notes.
- **FR-004**: User Patterns MUST provide documented reusable interaction patterns with usage guidance.
- **FR-005**: Structures MUST document layout, form-section alignment, spacing, responsive widths, and composition rules.
- **FR-006**: Agent usage MUST expose AGENTS.md rules, workflow, validation commands, and do/don't guidance.
- **FR-007**: About MUST describe Norato origin, visual authority, Material Design authority, and current version.
- **FR-008**: Site MUST be Persian-first, RTL, responsive, keyboard accessible, and usable at narrow widths.
- **FR-009**: Site MUST reuse Norato tokens and visual language.
- **FR-010**: Local preview MUST be available before any Vercel deployment.

## Success Criteria

- **SC-001**: A visitor can reach all six sections from the sidebar.
- **SC-002**: Every implemented component has at least one visible example and contract link.
- **SC-003**: The site remains usable at compact, medium, and expanded widths.
- **SC-004**: Local preview runs with one documented command before deployment.

## Assumptions

- Vercel deployment will follow local approval.
- Next.js is the target site framework for Vercel.
- Figma is visual reference; Material Design 3 governs UX/accessibility.

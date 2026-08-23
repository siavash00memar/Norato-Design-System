# Implementation Plan: Norato Choice Controls

**Branch**: `007-norato-choice-controls` | **Date**: 2026-08-23 | **Spec**: [spec.md](./spec.md)

## Summary

Implement separate RTL Checkbox Group and Radio Group controls across HTML/CSS, Vue, and Next.js, using Norato tokens and Material accessibility behavior.

## Technical Context

TypeScript 5.7, HTML/CSS, Vue 3, React/Next; existing tokens; validation via TypeScript, token and contract checks; Light Mode, 48px target, semantic native inputs.

## Constitution Check

PASS — scope and separate contracts are clarified before implementation.

## Structure

Extend `packages/core-html`, `packages/vue`, and `packages/next`; add `specs/007-choice-controls/contracts`.

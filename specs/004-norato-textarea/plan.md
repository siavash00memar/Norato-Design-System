# Implementation Plan: Norato Textarea

**Branch**: `004-norato-textarea` | **Date**: 2026-08-23 | **Spec**: [spec.md](./spec.md)

## Summary

Implement a fixed-height RTL Persian Textarea with internal scrolling, semantic messages, and equivalent HTML/CSS, Vue, and Next.js adapters using Norato tokens.

## Technical Context

TypeScript 5.7, HTML/CSS, Vue 3, React/Next; existing Norato tokens and core packages; validation via TypeScript, token checks, and contract review; Light Mode, 48px minimum target, semantic tokens only.

## Constitution Check

PASS — clarification is recorded and implementation follows the required sequence and existing package boundaries.

## Structure

`packages/core-html`, `packages/vue`, `packages/next`, and `specs/004-norato-textarea/contracts`.

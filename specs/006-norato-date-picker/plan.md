# Implementation Plan: Norato Date Picker

**Branch**: `006-norato-date-picker` | **Date**: 2026-08-23 | **Spec**: [spec.md](./spec.md)

## Summary

Implement a single-date Jalali Date Picker with a Figma-matched closed field and Material-aligned calendar semantics across HTML/CSS, Vue, and Next.js.

## Technical Context

TypeScript 5.7, HTML/CSS, Vue 3, React/Next; Norato tokens; Jalali date adapter boundary; validation via TypeScript, tokens, and contract review; Light Mode, RTL, 48px target.

## Constitution Check

PASS — all material scope decisions were clarified and recorded before implementation.

## Structure

Extend `packages/core-html`, `packages/vue`, `packages/next`, and add `specs/006-norato-date-picker/contracts`.

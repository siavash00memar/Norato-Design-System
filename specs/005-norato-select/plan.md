# Implementation Plan: Norato Select

**Branch**: `005-norato-select` | **Date**: 2026-08-23 | **Spec**: [spec.md](./spec.md)

## Summary

Implement a native, RTL-first Norato Select with semantic label/messages, loading/invalid states, and equivalent HTML/CSS, Vue, and Next.js adapters.

## Technical Context

TypeScript 5.7, HTML/CSS, Vue 3, React/Next; existing Norato tokens; TypeScript/token/contract validation; Light Mode, minimum 48px target, native select behavior.

## Constitution Check

PASS — clarified scope, no custom listbox assumptions, and required sequence preserved.

## Structure

Extend `packages/core-html`, `packages/vue`, `packages/next`, and add `specs/005-norato-select/contracts`.

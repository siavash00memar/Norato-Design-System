# Implementation Plan: Norato Date Picker

**Branch**: `006-norato-date-picker` | **Date**: 2026-08-23 | **Spec**: [spec.md](./spec.md)

## Summary

Implement all seven Jalali selection modes documented by Lemon as one Vue 3 Date Picker adapter, while retaining Norato's tokens and component-page structure. The closed field follows the Figma/Norato contract; the open calendar follows Lemon's composition and Material keyboard/accessibility conventions.

## Technical Context

TypeScript, Vue 3, and `@internationalized/date` PersianCalendar for calendar calculation and conversion. Reka DatePicker/RangeCalendar primitives were evaluated; they are Alpha and do not supply a single shared surface for the seven modes plus presets and wheel. The unified Vue component therefore owns grid focus and range interaction, with this custom state-machine decision gated on browser accessibility validation. Controlled API uses canonical Jalali values; Date & Time preserves local wall-clock time. Holiday data is consumer-supplied. Validate token integrity, TypeScript, build, responsive browser render, RTL, keyboard, accessibility tree, and the 7-mode behavior matrix.

## Constitution Check

PASS — current active goal supersedes the historical single-date constraint and requires Lemon parity; absent holiday authority is handled through caller-supplied data, and local wall-clock date-time semantics are recorded in Specify.

## Structure

Add the Jalali utility and the controlled Vue adapter in `packages/vue`; update the Vue usage example, component contract/catalog/primitive map, local component specimen and playground, tokens, acceptance checklist, Figma rules, and error log. Do not add new behavior to the legacy Next surface.

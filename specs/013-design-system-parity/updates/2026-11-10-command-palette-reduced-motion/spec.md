# Specification — Command Palette reduced motion

## Problem

The live loading spinner currently keeps `animation-name: norato-spin` under reduced motion and relies on a 0.01ms, one-iteration animation. That is a short finite animation rather than a fully motion-free loading state.

## Requirement

When the browser reports `prefers-reduced-motion: reduce`, the live Command Palette spinner has no active CSS animation. The Loading text/status, `aria-busy`, dialog, RTL layout, and Norato colors remain present and usable.

## Scope

Change only the Command Palette reduced-motion CSS rule. No API or default-motion behavior changes.

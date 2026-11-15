# Specify — Table image and progress playground cells

## Problem

The public Table adapter supports informative images (`{ src, alt }`) and progress cells, but the default live playground does not render either cell type. Their real rendered semantics therefore cannot be checked in the browser.

## Acceptance contract

1. Add one opt-in, labeled checkbox to the live Table playground for the informative image and progress sample cells.
2. The option is off by default. Existing default columns, rows, selection, responsive appearance and snippet remain unchanged until enabled.
3. When enabled, append one `progress` column labeled «پیشرفت پروژه (درصد)» and one `image` column labeled «تصویر پروژه»; values remain part of the existing sample rows.
4. Each image uses an actual local data URI and a meaningful Persian `alt` describing the illustration. Progress values are numeric and bounded to 0–100.
5. Generated Vue usage synchronizes with the option and contains matching column/value examples.
6. Browser inspection confirms the sample table renders without clipping/stretch, exposes the named `progressbar` and meaningful image alternative text, and preserves RTL and the default state after reset.
7. Run the required token, catalog, typecheck, production build and diff checks. Independent screen-reader speech remains explicitly separate.

## Out of scope

- Changing `NoratoTable` renderer behavior or its public API.
- Adding image/progress columns to the static visual specimen or default playground state.
- Claiming an independent screen-reader review from the accessibility tree.

# Research: Norato Date Picker

- Lemon live reference (`https://lemonui.ir/#date-picker`) documents seven picker modes and nine contract sections; its rendered sample is a compact Jalali calendar in a dotted glass frame.
- Reka UI 2.11.0 exports Calendar, RangeCalendar, DatePicker, and DateRangePicker primitives. The calendar primitives include managed keyboard navigation and RTL support; Date Picker includes focus management, localization, and date-time support. Reka documents date components as Alpha, so browser verification is required before maturity is upgraded.
- Reka depends on `@internationalized/date`; the Vue package now declares it directly. Version 3.12.4 includes `PersianCalendar`; a checked runtime conversion for Gregorian 2026-10-23 produced Persian 1405-08-01.
- `Intl.DateTimeFormat('fa-IR-u-ca-persian')` on the same runtime displayed Persian date fields and `arabext` numerals. It is suitable for localized display, while `@internationalized/date` provides typed calendar arithmetic.
- No authoritative Iran holiday dataset or holiday API is present in the repository. The adapter accepts holiday Jalali dates from its consumer and marks Friday intrinsically.
- The closed field follows the existing Norato/Figma field contract; the open panel follows Lemon's composition with semantic Norato tokens.
- The old draft's single-date decision is historical and superseded by the latest active user goal to bring all remaining components to Lemon parity. Product behavior remains Vue 3 only under the project constitution.

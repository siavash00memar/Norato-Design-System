# Data Model: Norato Date Picker

`id`, `label`, `type`, `size`, `modelValue`, `placeholder`, `helperText`, `errorText`, `disabled`, `loading`, `required`, `holidays`, `open`, and `dir`.

Types: `single`, `range`, `range-presets`, `date-time`, `month`, `year`, and `wheel`.

Canonical values use Jalali fields (`YYYY-MM-DD`); ranges use `{start, end}`, date-time uses `{date, time}` with local wall-clock time, and month/year use their corresponding Jalali strings. `holidays` is a caller-supplied list of Jalali dates. Friday is intrinsic. Calendar states include selected, focused, unavailable, today, outside-month, holiday, range-start, in-range, and range-end.

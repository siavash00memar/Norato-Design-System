# Command Palette — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Implemented — adapter Vue در دسترس است؛ DoD نهایی جدا ثبت می‌شود.

## Preview

نمونهٔ بالای صفحه ایستا، inert و مستقل از playground است. قاب نقطه‌دار ۲۸۸ پیکسل ارتفاع دارد و فقط ساختار پیش‌فرض Lemon را با رنگ‌های Norato نشان می‌دهد.

## Overview

Command Palette پنجرهٔ جست‌وجوی سریع برای فرمان‌ها و صفحه‌هاست؛ با `Ctrl/⌘ + K` باز می‌شود. مصرف‌کننده گروه‌ها را می‌فرستد و پس از انتخاب، adapter دادهٔ فرمان را منتشر می‌کند؛ خودش مسیر را عوض نمی‌کند، شبکه را صدا نمی‌زند و عملیات را اجرا نمی‌کند.

`NoratoCommandPalette` پراپ‌های `id`, `groups`, `label`, `loading`, `emptyText`, `shortcut` و `dir` دارد. `open` و `query` با `v-model:open` و `v-model:query` قابل کنترل‌اند. انتخاب فعال رویداد `select(item)` می‌فرستد.

هر گروه یک `id`, `label` و فهرست `items` دارد. هر فرمان دارای `id` و `label` و به‌صورت اختیاری `description`, `keywords`, `icon`, `shortcut`, `kind` و `disabled` است. شناسه‌ها در فهرست باید یکتا باشند. هر گروه حداکثر ۸ ردیف نمایشی دارد.

## Anatomy

- **Search Row:** ورودی RTL با آیکن جست‌وجو و نشانهٔ بستن `Esc`.
- **Group Title:** عنوان معنایی هر دستهٔ نتایج.
- **Command Item:** ردیف انتخاب با آیکن اختیاری، عنوان و توضیح.
- **Kbd:** میانبر LTR مانند `⌘ N`.
- **Footer:** راهنمای حرکت، انتخاب و بستن.
- **Overlay:** scrim شیشه‌ای با محوشدگی پس‌زمینه؛ dialog حدود ۱۵٪ پایین‌تر از بالای viewport قرار می‌گیرد.

## Variants

- **Command Palette:** Default، Results، Empty و Loading.
- **Command Item:** Command، Navigation و Recent؛ با وضعیت Default، Active یا Disabled.
- **Kbd:** Small و Medium.

## Sizes

- پنجره در دسکتاپ حداکثر ۶۰۰px عرض دارد و در صفحهٔ باریک از viewport بیرون نمی‌زند.
- نشانگر Kbd اندازهٔ Small و Medium دارد؛ ردیف اجرایی هدف حداقل ۴۸px را حفظ می‌کند.

## States

- **Default:** گروه پیشنهادی و فرمان‌های پرکاربرد پیش از تایپ نمایش داده می‌شوند.
- **Results:** جست‌وجو عنوان، توضیح و کلیدواژه‌ها را با نرمال‌سازی حروف فارسی فیلتر می‌کند و گروه خالی را پنهان می‌کند.
- **Empty:** پیام قابل‌خواندن در نبود نتیجه نمایش داده می‌شود.
- **Loading:** ورودی باقی می‌ماند، `aria-busy` فعال است و وضعیت بارگذاری اعلام می‌شود.
- **Active:** ردیف انتخاب‌شده سطح زرد ملایم و focus ring زرد ۲px دارد.
- **Disabled:** از پیمایش/انتخاب صفحه‌کلیدی کنار گذاشته می‌شود و رنگ خنثی دارد.

## Parts

- **Command Palette:** dialog شناور با حداکثر عرض ۶۰۰px، scrim و محوشدگی.
- **Command Item:** ردیف ۴۸px با سه نوع فرمان، ناوبری و اخیر.
- **Kbd:** badge کوچک میانبر صفحه‌کلید.

## Usage

### راهنمای کاربرد Norato

- فرمان‌های رایج را پیش از تایپ در گروه پیشنهادی بگذار.
- آیکن را با کامپوننت Vue بفرست؛ تزئینی است و از درخت دسترس‌پذیری پنهان می‌شود.
- در هر گروه بیش از ۸ نتیجه نگذار. برای صفحه‌ها، گروه‌های جدا و عنوان روشن بساز.
- بعد از رویداد `select`، مصرف‌کننده فرمان را اجرا کند یا مسیر را تغییر دهد.
- `shortcut="k"` میانبر Ctrl/⌘+K را فعال می‌کند؛ با `:shortcut="false"` آن را خاموش کن.

### محدودیت‌های کاربرد

- پالت فرمان را تنها راه دسترسی به یک قابلیت نکن.
- داده و اجرای فرمان در اختیار برنامهٔ میزبان است؛ adapter درخواست شبکه یا ناوبری پنهان انجام نمی‌دهد.
- میانبر سراسری در فیلدهای قابل ویرایش و هنگام IME composition دخالت نمی‌کند.

### جهت RTL

- ورودی و عنوان فارسی راست‌چین است؛ آیکن در inline-end سمت راست قرار می‌گیرد.
- badge میانبر LTR و در inline-start سمت چپ قرار دارد.
- ترتیب خواندن DOM با ترتیب گروه‌ها و فرمان‌های داده یکسان می‌ماند.

## Accessibility

- Reka Dialog نام و توضیح پنجره، چرخهٔ فوکوس modal، Escape و بستن با کلیک بیرون را مدیریت می‌کند؛ فوکوس روی search می‌رود و بعد از بستن به عنصر قبلی برمی‌گردد.
- ورودی یک combobox برچسب‌دار است و با listbox، group و option نام‌دار ارتباط دارد.
- ArrowUp/Down بین گزینه‌های فعال حرکت می‌کند؛ Home/End در query خالی ابتدا/انتها را می‌گیرند؛ Enter انتخاب می‌کند و Escape می‌بندد.
- فرمان disabled با `aria-disabled` مشخص می‌شود و از حرکت/انتخاب حذف است. loading با status زنده اعلام می‌شود.
- focus ring زرد ۲px بیرون کنترل است؛ آیکن‌ها `aria-hidden` هستند.

## Tokens

- `--norato-color-glass-surface-strong`, `--norato-color-glass-line`, `--norato-color-scrim`
- `--norato-color-text-primary`, `--norato-color-text-secondary`, `--norato-color-text-placeholder-subtle`
- `--norato-color-border-default`, `--norato-color-warning-container`, `--norato-color-focus-ring`
- `--norato-command-palette-dialog-width`, `--norato-command-palette-dialog-offset`, `--norato-command-palette-item-block-size`
- `--norato-command-palette-preview-*`, `--norato-layer-command-palette`, `--norato-elevation-modal`
- توکن‌های معنایی فاصله، تایپوگرافی، radius، آیکن و focus.

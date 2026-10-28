# Badge — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**وضعیت نوراتو:** Adapted  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: نشان کوچیک تعداد یا نقطه‌ی «چیز جدید» روی آیکن یا آواتار.

## Anatomy

- **Ring** — حلقه‌ی ۲ پیکسلی
- **Count** — عدد یا نقطه
- **Anchor** — آیکن یا آواتار زیرش

## Variants

- **Badge (16 variant):** Type: Count، Dot؛ Size: Small، Medium؛ Tone: Danger، Inverse، Neutral، Success

## Sizes

- **Badge:** Small، Medium

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Badge — 16 variant:** عدد یا نقطه با حلقه‌ی ۲ پیکسلی. ابعاد/حالت‌ها: Type: Count، Dot؛ Size: Small، Medium؛ Tone: Danger، Inverse، Neutral، Success

## Usage

### راهنمای کاربرد Norato

- برای اعداد بالای ۹۹ بنویس «۹۹+».
- از Dot برای «جدید» بدون تعداد استفاده کن.

### محدودیت‌های کاربرد

- روی همه‌چیز Badge نذار؛ اهمیتش از بین میره.
- متن طولانی توی Badge ننویس؛ Tag درسته.

### جهت RTL

روی گوشه‌ی بالا-چپ قرار می‌گیره. برای اعداد بزرگ «۹۹+» بنویس.

## Accessibility

تعداد باید در برچسب المان زیرش هم بیاد.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

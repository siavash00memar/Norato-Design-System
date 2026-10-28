# Image — قرارداد کامپوننت نوراتو

**حوزه:** Media & Chat  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: قاب تصویر با نسبت‌های مختلف، تامبنیل، گالری و نمایشگر تمام‌صفحه.

## Anatomy

- **Frame** — قاب با نسبت ثابت
- **Image** — تصویر
- **Caption** — زیرنویس روی سایه
- **More** — شمارنده‌ی تصاویر بیشتر

## Variants

- **Image (16 variant):** Ratio: 1:1، 4:3، 16:9، 3:4؛ State: Default، Hover، Loading، Error
- **Thumbnail (9 variant):** Size: Small، Medium، Large؛ State: Default، Selected، More
- **Gallery (3 variant):** Layout: Grid، Masonry، Main + Thumbnails
- **Lightbox (1 variant):** محور variant مشخص نشده

## Sizes

- **Thumbnail:** Small، Medium، Large

## States

- **Image:** Default، Hover، Loading، Error
- **Thumbnail:** Default، Selected، More

## Parts

- **Image — 16 variant:** قاب تصویر. ابعاد/حالت‌ها: Ratio: 1:1، 4:3، 16:9، 3:4؛ State: Default، Hover، Loading، Error
- **Thumbnail — 9 variant:** تصویر کوچیک گالری. ابعاد/حالت‌ها: Size: Small، Medium، Large؛ State: Default، Selected، More
- **Gallery — 3 variant:** چیدمان‌های گالری. ابعاد/حالت‌ها: Layout: Grid، Masonry، Main + Thumbnails
- **Lightbox — 1 variant:** نمایشگر تمام‌صفحه.

## Usage

### راهنمای کاربرد Norato

- برای همه‌ی تصاویر یه نسبت ثابت انتخاب کن.
- حالت خطا رو طراحی کن.

### محدودیت‌های کاربرد

- تصویر رو کشیده یا فشرده نکن.
- متن مهم رو روی تصویر بدون سایه ننویس.

### جهت RTL

زیرنویس پایین تصویر با متن سفید روی سایه.

## Accessibility

هر تصویر معنادار متن جایگزین (alt) داره.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

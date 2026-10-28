# Toast — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: پیام موقتی که بعد از یه اکشن ظاهر میشه و خودش می‌ره. تیره یا شیشه‌ای، ساده یا کامل، با اکشن «برگردون» و نوار زمان.

## Anatomy

- **Status Icon** — آیکن وضعیت یا اسپینر
- **Title** — پیام اصلی
- **Description** — توضیح اختیاری
- **Action** — اکشن مثل «برگردون»
- **Close** — بستن
- **Timer** — نوار زمان باقی‌مونده

## Variants

- **Toast (20 variant):** Style: Dark، Glass؛ Type: Simple، Rich؛ Tone: Neutral، Success، Warning، Danger، Loading

## Sizes

- در قرارداد فعلی Norato محور اندازه برای این خانواده مشخص نشده است.

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Toast — 20 variant:** توست در ۵ حالت. ابعاد/حالت‌ها: Style: Dark، Glass؛ Type: Simple، Rich؛ Tone: Neutral، Success، Warning، Danger، Loading

## Usage

### راهنمای کاربرد Norato

- پیام رو یه جمله‌ی کوتاه بنویس.
- برای اکشن‌های قابل برگشت دکمه‌ی «برگردون» بذار.

### محدودیت‌های کاربرد

- خطاهای مهم رو با Toast نشون نده؛ ممکنه دیده نشه.
- چند Toast رو روی هم نچین؛ پشت‌سرهم نمایششون بده.

### جهت RTL

آیکن وضعیت سمت راست، بستن سمت چپ.

## Accessibility

Toast در یه ناحیه‌ی aria-live اعلام میشه و نباید قبل از خونده شدن ناپدید بشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

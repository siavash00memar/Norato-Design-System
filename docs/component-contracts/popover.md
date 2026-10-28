# Popover — قرارداد کامپوننت نوراتو

**حوزه:** Overlays  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: پنل شناوری که با کلیک کنار المان باز میشه؛ ساده، با اکشن یا فرم.

## Anatomy

- **Arrow** — فلش رو به المان
- **Panel** — پنل شیشه‌ای
- **Content** — متن، اکشن یا فرم

## Variants

- **Popover (12 variant):** Type: Simple، Actions، Form؛ Placement: Top، Bottom، Right، Left

## Sizes

- در قرارداد فعلی Norato محور اندازه برای این خانواده مشخص نشده است.

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Popover — 12 variant:** پاپ‌اور در ۴ جهت. ابعاد/حالت‌ها: Type: Simple، Actions، Form؛ Placement: Top، Bottom، Right، Left

## Usage

### راهنمای کاربرد Norato

- برای تنظیمات سریع کنار یه المان ازش استفاده کن.
- با کلیک بیرون بسته بشه.

### محدودیت‌های کاربرد

- محتوای طولانی توی Popover نذار.
- برای راهنمای کوتاه Popover نذار؛ Tooltip کافیه.

### جهت RTL

فلش پاپ‌اور همیشه به المانی که بازش کرده اشاره می‌کنه.

## Accessibility

دکمه‌ی بازکننده aria-expanded داره و Esc پاپ‌اور رو می‌بنده.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

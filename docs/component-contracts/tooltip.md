# Tooltip — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: یه حباب کوچیک راهنما که با هاور ظاهر میشه. تیره یا شیشه‌ای، یک‌خطی یا کامل.

## Anatomy

- **Bubble** — حباب تیره یا شیشه‌ای
- **Text** — متن کوتاه
- **Arrow** — فلش رو به المان

## Variants

- **Tooltip (16 variant):** Style: Dark، Glass؛ Type: Simple، Rich؛ Placement: Top، Bottom، Right، Left

## Sizes

- در قرارداد فعلی Norato محور اندازه برای این خانواده مشخص نشده است.

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Tooltip — 16 variant:** حباب راهنما در ۴ جهت. ابعاد/حالت‌ها: Style: Dark، Glass؛ Type: Simple، Rich؛ Placement: Top، Bottom، Right، Left

## Usage

### راهنمای کاربرد Norato

- برای دکمه‌های آیکنی همیشه Tooltip بذار.
- متن رو چند کلمه نگه دار.

### محدودیت‌های کاربرد

- اطلاعات ضروری رو فقط توی Tooltip نذار.
- لینک یا فرم داخل Tooltip ساده نذار.

### جهت RTL

برای آیتم‌های سایدبار جمع‌شده، Tooltip سمت چپ باز میشه.

## Accessibility

Tooltip باید با فوکوس کیبورد هم ظاهر بشه، نه فقط با موس.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

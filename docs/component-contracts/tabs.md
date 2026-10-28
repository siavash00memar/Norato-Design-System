# Tabs — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Adapted  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: جابه‌جایی بین بخش‌های یه صفحه. Line با خط زیرین، Soft با پس‌زمینه‌ی شیشه‌ای روشن‌تر.

## Anatomy

- **Tab Bar** — ظرف تب‌ها
- **Selected Tab** — تب فعال با خط یا شیشه
- **Icon** — آیکن اختیاری سمت راست
- **Count** — شمارنده سمت چپ

## Variants

- **Tabs (9 variant):** Style: Line، Soft؛ Size: Small، Medium، Large؛ Orientation: Horizontal، Vertical
- **Tab Item (30 variant):** Style: Line، Soft؛ Size: Small، Medium، Large؛ State: Default، Hover، Selected، Disabled، Focus

## Sizes

- **Tabs:** Small، Medium، Large
- **Tab Item:** Small، Medium، Large

## States

- **Tab Item:** Default، Hover، Selected، Disabled، Focus

## Parts

- **Tabs — 9 variant:** نوار ۳ تا ۵ تب، افقی یا عمودی. ابعاد/حالت‌ها: Style: Line، Soft؛ Size: Small، Medium، Large؛ Orientation: Horizontal، Vertical
- **Tab Item — 30 variant:** یه تب تکی. ابعاد/حالت‌ها: Style: Line، Soft؛ Size: Small، Medium، Large؛ State: Default، Hover، Selected، Disabled، Focus

## Usage

### راهنمای کاربرد Norato

- برچسب تب‌ها رو یکی‌دو کلمه نگه دار.
- محتوای تب‌ها باید هم‌سطح و مرتبط باشن.

### محدودیت‌های کاربرد

- برای مراحل پشت‌سرهم Tabs نذار؛ Stepper درسته.
- تب‌ها رو دو خطی نکن.

### جهت RTL

ترتیب: آیکن سمت راست، برچسب، شمارنده سمت چپ.

## Accessibility

نقش tablist داره و با کلیدهای جهت بین تب‌ها جابه‌جا میشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

# Switch — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: کلید روشن و خاموش برای تنظیماتی که فوراً اعمال میشن. خاموش شیشه‌ای، روشن مشکی.

## Anatomy

- **Track** — ترک؛ شیشه‌ای در خاموش، مشکی در روشن
- **Knob** — دستگیره‌ی سفید با سایه‌ی switch/knob
- **Label** — برچسب تنظیم
- **Description** — توضیح اختیاری

## Variants

- **Switch (30 variant):** Size: Small، Medium، Large؛ On: false، true؛ State: Default، Hover، Disabled، Focus، Error
- **Switch Field (6 variant):** On: false، true؛ State: Default، Error، Disabled

## Sizes

- **Switch:** Small، Medium، Large

## States

- **Switch:** Default، Hover، Disabled، Focus، Error
- **Switch Field:** Default، Error، Disabled

## Parts

- **Switch — 30 variant:** خود سوییچ در سه اندازه. ابعاد/حالت‌ها: Size: Small، Medium، Large؛ On: false، true؛ State: Default، Hover، Disabled، Focus، Error
- **Switch Field — 6 variant:** سوییچ با برچسب و توضیح. ابعاد/حالت‌ها: On: false، true؛ State: Default، Error، Disabled

## Usage

### راهنمای کاربرد Norato

- برچسب رو طوری بنویس که روشن بودن معنی داشته باشه: «اعلان‌ها» نه «خاموش کردن اعلان‌ها».
- وقتی تغییر بلافاصله اعمال میشه ازش استفاده کن.

### محدودیت‌های کاربرد

- توی فرم‌هایی که دکمه‌ی ذخیره دارن Switch نذار؛ Checkbox درسته.
- برای انتخاب بین دو گزینه‌ی غیر روشن و خاموش (مثلاً ماهانه و سالانه) Switch نذار؛ Segmented بهتره.

### جهت RTL

وقتی روشن میشه، دستگیره به سمت چپ میره.

## Accessibility

نقش switch داره و با Space تغییر می‌کنه؛ حالت روشن باید اعلام بشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

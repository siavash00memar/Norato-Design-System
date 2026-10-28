# List — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: ردیف‌های لیست با آیکن، آواتار، چک‌باکس یا سوییچ، و نگه‌دارنده‌های ساده، کارتی و گروه‌بندی‌شده.

## Anatomy

- **Leading** — آیکن، آواتار یا چک‌باکس
- **Title** — عنوان ردیف
- **Description** — توضیح اختیاری
- **Trailing** — فلش، مقدار یا سوییچ

## Variants

- **List (3 variant):** Style: Plain، Inset، Grouped
- **List Item (25 variant):** Type: Icon، Avatar، Checkbox، Switch، Value؛ State: Default، Hover، Selected، Disabled، Focus

## Sizes

- در قرارداد فعلی Norato محور اندازه برای این خانواده مشخص نشده است.

## States

- **List Item:** Default، Hover، Selected، Disabled، Focus

## Parts

- **List — 3 variant:** لیست در ۳ استایل. ابعاد/حالت‌ها: Style: Plain، Inset، Grouped
- **List Item — 25 variant:** یه ردیف لیست. ابعاد/حالت‌ها: Type: Icon، Avatar، Checkbox، Switch، Value؛ State: Default، Hover، Selected، Disabled، Focus

## Usage

### راهنمای کاربرد Norato

- ردیف‌های مرتبط رو گروه‌بندی کن.
- برای ردیف‌هایی که صفحه‌ی جدید باز می‌کنن فلش بذار.

### محدودیت‌های کاربرد

- چند اکشن مختلف رو توی یه ردیف نذار.
- توضیح رو بیشتر از دو خط نکن.

### جهت RTL

المان اول سمت راست، فلش یا مقدار سمت چپ.

## Accessibility

ردیف قابل کلیک باید کامل فوکوس بگیره، نه فقط فلشش.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

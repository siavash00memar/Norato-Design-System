# Pagination — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: جابه‌جایی بین صفحه‌های یه لیست. با شماره‌ی صفحه‌ها یا نسخه‌ی ساده‌ی «صفحه X از Y».

## Anatomy

- **Previous** — رفتن به صفحه‌ی قبل، سمت راست
- **Page Item** — شماره‌ی صفحه
- **Selected** — صفحه‌ی فعلی
- **Ellipsis** — صفحه‌های جاافتاده
- **Next** — رفتن به صفحه‌ی بعد

## Variants

- **Pagination (4 variant):** Type: Numbers، Simple؛ Size: Small، Medium
- **Page Item (14 variant):** Type: Number، Ellipsis؛ Size: Small، Medium؛ State: Default، Hover، Selected، Disabled، Focus

## Sizes

- **Pagination:** Small، Medium
- **Page Item:** Small، Medium

## States

- **Page Item:** Default، Hover، Selected، Disabled، Focus

## Parts

- **Pagination — 4 variant:** نوار صفحه‌بندی. ابعاد/حالت‌ها: Type: Numbers، Simple؛ Size: Small، Medium
- **Page Item — 14 variant:** یه خونه‌ی شماره‌ی صفحه. ابعاد/حالت‌ها: Type: Number، Ellipsis؛ Size: Small، Medium؛ State: Default، Hover، Selected، Disabled، Focus

## Usage

### راهنمای کاربرد Norato

- تعداد کل صفحه‌ها یا نتایج رو نشون بده.
- در موبایل از Simple استفاده کن.

### محدودیت‌های کاربرد

- برای فیدهای بی‌نهایت Pagination نذار؛ Load More بهتره.
- همه‌ی شماره‌ها رو برای ۵۰ صفحه نشون نده.

### جهت RTL

صفحه‌ی اول و قبلی سمت راست، بعدی و آخر سمت چپ.

## Accessibility

هر شماره برچسب «صفحه‌ی X» داره و صفحه‌ی فعلی aria-current.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

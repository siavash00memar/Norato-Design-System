# Rating — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: نمایش و ثبت امتیاز با ستاره. نسخه‌ی فقط‌خواندنی، قابل کلیک و خلاصه‌ی امتیازها.

## Anatomy

- **Stars** — ستاره‌های پر، نیمه و خالی
- **Value** — میانگین با ارقام فارسی و «٫»
- **Count** — تعداد نظرها
- **Distribution** — نوارهای توزیع در Summary

## Variants

- **Rating (24 variant):** Size: Small، Medium، Large؛ Value: 0، 1، 2، 3، 3.5، 4، 4.5، 5
- **Rating Input (10 variant):** Size: Medium، Large؛ State: Default، Hover، Selected، Disabled، Focus
- **Rating Star (12 variant):** Fill: Empty، Half، Full؛ Size: 16، 20، 24، 32
- **Rating Summary (1 variant):** Layout: Default

## Sizes

- **Rating:** Small، Medium، Large
- **Rating Input:** Medium، Large
- **Rating Star:** 16، 20، 24، 32

## States

- **Rating Input:** Default، Hover، Selected، Disabled، Focus

## Parts

- **Rating — 24 variant:** امتیاز فقط‌خواندنی با عدد و تعداد نظر. ابعاد/حالت‌ها: Size: Small، Medium، Large؛ Value: 0، 1، 2، 3، 3.5، 4، 4.5، 5
- **Rating Input — 10 variant:** ستاره‌های قابل کلیک با برچسب زیرشون. ابعاد/حالت‌ها: Size: Medium، Large؛ State: Default، Hover، Selected، Disabled، Focus
- **Rating Star — 12 variant:** یه ستاره‌ی تکی. ابعاد/حالت‌ها: Fill: Empty، Half، Full؛ Size: 16، 20، 24، 32
- **Rating Summary — 1 variant:** میانگین، ستاره‌ها و نمودار توزیع ۵ تا ۱. ابعاد/حالت‌ها: Layout: Default

## Usage

### راهنمای کاربرد Norato

- کنار ستاره‌ها عدد میانگین رو هم بنویس.
- در Rating Input، زیر ستاره‌ها معنی امتیاز رو بنویس («خوب بود»).

### محدودیت‌های کاربرد

- ستاره‌ی خالی رو با رنگ خیلی کم‌رنگ نذار که دیده نشه.
- امتیاز بدون تعداد نظر نشون نده؛ ۵ ستاره با ۱ نظر گمراه‌کننده‌ست.

### جهت RTL

ستاره‌ها از راست پر میشن؛ نیم‌ستاره نیمه‌ی راستش پره.

## Accessibility

امتیاز باید به‌صورت متنی هم اعلام بشه («۴٫۵ از ۵»).

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

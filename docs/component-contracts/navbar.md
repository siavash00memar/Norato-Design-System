# Navbar — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: هدر بالای صفحه برای اپ و وب‌سایت، به‌علاوه‌ی نسخه‌ی موبایل، مگامنو و منوی کشویی موبایل.

## Anatomy

- **Brand** — لوگو و اسم، سمت راست
- **Nav Links** — لینک‌ها؛ فعال روی شیشه‌ی روشن‌تر
- **Actions** — جستجو، اعلان و دکمه‌ها سمت چپ
- **Avatar** — حساب کاربری

## Variants

- **Navbar (9 variant):** Type: App، Website، Centered؛ Style: Bar، Floating، Transparent
- **Navbar Mobile (8 variant):** Type: Default، Back، Search، Large Title؛ Style: Bar، Transparent
- **Nav Link (20 variant):** Style: Pill، Underline؛ Size: Small، Medium؛ State: Default، Hover، Active، Disabled، Focus
- **Brand (2 variant):** Size: Small، Medium
- **Mega Menu (1 variant):** محور variant مشخص نشده
- **Mobile Menu (1 variant):** محور variant مشخص نشده

## Sizes

- **Nav Link:** Small، Medium
- **Brand:** Small، Medium

## States

- **Nav Link:** Default، Hover، Active، Disabled، Focus

## Parts

- **Navbar — 9 variant:** نوار بالای صفحه در ۳ چیدمان. ابعاد/حالت‌ها: Type: App، Website، Centered؛ Style: Bar، Floating، Transparent
- **Navbar Mobile — 8 variant:** هدر موبایل ۳۹۰ پیکسلی. ابعاد/حالت‌ها: Type: Default، Back، Search، Large Title؛ Style: Bar، Transparent
- **Nav Link — 20 variant:** لینک ناوبری با آیکن، شمارنده و زیرمنو. ابعاد/حالت‌ها: Style: Pill، Underline؛ Size: Small، Medium؛ State: Default، Hover، Active، Disabled، Focus
- **Brand — 2 variant:** لوگو و اسم برند. ابعاد/حالت‌ها: Size: Small، Medium
- **Mega Menu — 1 variant:** منوی بزرگ چندستونی.
- **Mobile Menu — 1 variant:** منوی کشویی موبایل.

## Usage

### راهنمای کاربرد Norato

- لینک‌ها رو به ۵ تا ۷ تا محدود کن.
- لینک صفحه‌ی فعلی رو با حالت Active مشخص کن.

### محدودیت‌های کاربرد

- اکشن‌های زیاد رو توی هدر جمع نکن.
- روی تصویر شلوغ از Transparent بدون سایه استفاده نکن؛ خوانا نیست.

### جهت RTL

لوگو سمت راست، بعد لینک‌ها و اکشن‌ها سمت چپ.

## Accessibility

Navbar باید نقش navigation داشته باشه و ترتیب Tab از راست شروع بشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

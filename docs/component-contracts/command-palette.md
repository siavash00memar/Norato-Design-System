# Command Palette — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: جستجوی سریع به سبک Spotlight با میانبر ⌘K. گروه‌های فرمان، صفحه‌ها و جستجوهای اخیر. همین سایت هم ازش استفاده می‌کنه.

## Anatomy

- **Search Row** — فیلد جستجو با Esc
- **Group Title** — عنوان گروه
- **Command Item** — ردیف فرمان با آیکن
- **Kbd** — میانبر یا Enter
- **Footer** — راهنمای کلیدها

## Variants

- **Command Palette (4 variant):** Type: Default، Results، Empty، Loading
- **Command Item (9 variant):** Type: Command، Navigation، Recent؛ State: Default، Active، Disabled
- **Kbd (2 variant):** Size: Small، Medium

## Sizes

- **Kbd:** Small، Medium

## States

- **Command Item:** Default، Active، Disabled

## Parts

- **Command Palette — 4 variant:** پنل ۶۰۰ پیکسلی جستجو. ابعاد/حالت‌ها: Type: Default، Results، Empty، Loading
- **Command Item — 9 variant:** یه ردیف فرمان. ابعاد/حالت‌ها: Type: Command، Navigation، Recent؛ State: Default، Active، Disabled
- **Kbd — 2 variant:** کلید کیبورد مثل ⌘ و K. ابعاد/حالت‌ها: Size: Small، Medium

## Usage

### راهنمای کاربرد Norato

- فرمان‌های پرکاربرد رو قبل از تایپ نشون بده.
- میانبرهای کیبورد رو کنار فرمان‌ها بنویس.

### محدودیت‌های کاربرد

- اون رو تنها راه دسترسی به یه امکان نکن.
- بیشتر از ۸ نتیجه در هر گروه نشون نده.

### جهت RTL

آیکن سمت راست ردیف و میانبر کیبورد سمت چپ.

## Accessibility

فوکوس روی فیلد میره و کلیدهای جهت بین نتایج جابه‌جا میشن.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

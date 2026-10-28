# Time Picker — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: انتخاب ساعت به‌صورت ستونی، چرخ‌دار، اسلات‌های رزرو یا بازه‌ی زمانی.

## Anatomy

- **Time Input** — فیلد با آیکن Clock
- **Hour Column** — ستون ساعت‌ها
- **Minute Column** — ستون دقیقه‌ها
- **Selected Cell** — ساعت انتخاب‌شده، مشکی

## Variants

- **Time Picker (5 variant):** Type: Columns، Columns 12h، Wheel، Slots، Range
- **Time Input (80 variant):** Type: Single، Range؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Error، Disabled؛ Label: Outside، Inside

## Sizes

- Time Input: Small 32px، Medium 40px، Large 48px، XLarge 56px.

## States

- **Time Input:** Default، Hover، Active، Error، Disabled

## Parts

- **Time Picker — 5 variant:** پنل انتخاب ساعت در ۵ حالت. ابعاد/حالت‌ها: Type: Columns، Columns 12h، Wheel، Slots، Range
- **Time Input — 80 variant:** فیلد ساعت با آیکن Clock. ابعاد/حالت‌ها: Type: Single، Range؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Error، Disabled؛ Label: Outside، Inside

## Usage

### راهنمای کاربرد Norato

- برای رزرو نوبت، اسلات‌های آماده (Slots) رو نشون بده.
- دقیقه‌ها رو با قدم‌های منطقی (۵ یا ۱۵) بچین.

### محدودیت‌های کاربرد

- ساعت رو راست‌به‌چپ ننویس.
- برای ورود ساعت دقیق ثانیه‌ای از چرخ استفاده نکن.

### جهت RTL

ارقام ساعت همیشه از چپ به راست نوشته میشن.

## Accessibility

هر ستون با کلیدهای بالا و پایین قابل تغییره.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

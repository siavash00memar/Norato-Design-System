# Checkbox — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Implemented  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: چک‌باکس شیشه‌ای و ظریف برای انتخاب چندتایی. سه حالت داره: خالی، تیک‌خورده و Indeterminate.

## Anatomy

- **Box** — مربع شیشه‌ای ۱۶ یا ۲۰ پیکسلی
- **Check / Dash** — تیک برای true و خط برای Indeterminate
- **Label** — برچسب کنار کنترل
- **Description** — توضیح اختیاری؛ در حالت Error قرمز میشه

## Variants

- **Checkbox (30 variant):** Size: 16، 20؛ Checked: false، true، Indeterminate؛ State: Default، Hover، Disabled، Focus، Error
- **Checkbox Field (6 variant):** Checked: false، true؛ State: Default، Error، Disabled

## Sizes

- Checkbox: 16px یا 20px.

## States

- **Checkbox:** Default، Hover، Disabled، Focus، Error
- **Checkbox Field:** Default، Error، Disabled

## Parts

- **Checkbox — 30 variant:** خود چک‌باکس. ابعاد/حالت‌ها: Size: 16، 20؛ Checked: false، true، Indeterminate؛ State: Default، Hover، Disabled، Focus، Error
- **Checkbox Field — 6 variant:** چک‌باکس با برچسب و توضیح. ابعاد/حالت‌ها: Checked: false، true؛ State: Default، Error، Disabled

## Usage

### راهنمای کاربرد Norato

- کل ردیف (چک‌باکس و متن) رو قابل کلیک کن.
- برای «انتخاب همه» از حالت Indeterminate استفاده کن.

### محدودیت‌های کاربرد

- برای یه تنظیم روشن و خاموش که فوراً اعمال میشه Checkbox نذار؛ Switch بهتره.
- گزینه‌هایی که فقط یکی‌شون قابل انتخابه رو با Checkbox نساز؛ Radio لازمه.

### جهت RTL

چک‌باکس سمت راست برچسب میاد.

## Accessibility

با Space تیک می‌خوره و حالت Indeterminate باید به‌عنوان «mixed» اعلام بشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

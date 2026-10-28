# Combobox — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: فیلدی که موقع تایپ پیشنهاد میده. تکی یا چندتایی، با حالت‌های در حال بارگذاری، بدون نتیجه و ساختن گزینه‌ی جدید.

## Anatomy

- **Field** — فیلد در حالت Typing با نشانگر تایپ
- **Chips** — انتخاب‌ها در حالت Multi
- **Clear / Chevron** — پاک کردن متن و باز و بسته کردن منو
- **Combobox Menu** — پنل پیشنهادها، ۸ پیکسل زیر فیلد
- **Matched Text** — بخشی از گزینه که با متن تایپ‌شده یکیه

## Variants

- **Combobox (96 variant):** Type: Single، Multi؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Typing، Filled، Error، Disabled؛ Label: Outside، Inside
- **Combobox Menu (6 variant):** Type: Results، Multi، Recent، Loading، Empty، Create

## Sizes

- Combobox: Small 32px، Medium 40px، Large 48px، XLarge 56px.

## States

- **Combobox:** Default، Hover، Typing، Filled، Error، Disabled

## Parts

- **Combobox — 96 variant:** فیلد خودکامل‌شونده؛ در حالت چندتایی انتخاب‌ها Chip میشن. ابعاد/حالت‌ها: Type: Single، Multi؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Typing، Filled، Error، Disabled؛ Label: Outside، Inside
- **Combobox Menu — 6 variant:** پنل پیشنهادها: نتایج، اخیر، بارگذاری، خالی و ساختن. ابعاد/حالت‌ها: Type: Results، Multi، Recent، Loading، Empty، Create

## Usage

### راهنمای کاربرد Norato

- برای لیست‌های خیلی بلند (شهرها، مهارت‌ها، کاربران) ازش استفاده کن.
- حالت «بدون نتیجه» رو همیشه طراحی کن و راه بعدی رو نشون بده.

### محدودیت‌های کاربرد

- برای لیست ۵ گزینه‌ای Combobox نذار؛ Select ساده‌تره.
- پیشنهادها رو قبل از تایپ اولین حرف خالی نذار؛ موارد اخیر رو نشون بده.

### جهت RTL

منوی پیشنهاد ۸ پیکسل زیر فیلد باز میشه؛ بخش تطبیق‌خورده‌ی متن Bold میشه.

## Accessibility

گزینه‌ی هایلایت‌شده با کیبورد همون حالت Hover رو داره و باید برای صفحه‌خوان اعلام بشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

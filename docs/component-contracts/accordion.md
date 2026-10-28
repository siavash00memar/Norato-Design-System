# Accordion — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت نوراتو:** Adapted  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: ردیف‌هایی که با کلیک باز و بسته میشن. کارت‌های جدا یا یه پنل گروهی؛ محتوای داخلش هر کامپوننتی می‌تونه باشه.

## Anatomy

- **Header** — عنوان ردیف
- **Chevron** — فلش باز و بسته
- **Content** — محتوای بازشده
- **Container** — کارت یا پنل گروهی

## Variants

- **Accordion (8 variant):** Style: Separated، Grouped؛ Size: Small، Medium، Large، XLarge
- **Accordion Item (64 variant):** Style: Card، Plain؛ Size: Small، Medium، Large، XLarge؛ Expanded: false، true؛ State: Default، Hover، Disabled، Focus
- **Accordion Item / Custom Content (64 variant):** Style: Card، Plain؛ Size: Small، Medium، Large، XLarge؛ Expanded: false، true؛ State: Default، Hover، Disabled، Focus
- **Slot / Placeholder (1 variant):** محور variant مشخص نشده

## Sizes

- **Accordion:** Small، Medium، Large، XLarge
- **Accordion Item:** Small، Medium، Large، XLarge
- **Accordion Item / Custom Content:** Small، Medium، Large، XLarge

## States

- **Accordion Item:** Default، Hover، Disabled، Focus
- **Accordion Item / Custom Content:** Default، Hover، Disabled، Focus

## Parts

- **Accordion — 8 variant:** آکاردئون آماده. ابعاد/حالت‌ها: Style: Separated، Grouped؛ Size: Small، Medium، Large، XLarge
- **Accordion Item — 64 variant:** یه ردیف آکاردئون. ابعاد/حالت‌ها: Style: Card، Plain؛ Size: Small، Medium، Large، XLarge؛ Expanded: false، true؛ State: Default، Hover، Disabled، Focus
- **Accordion Item / Custom Content — 64 variant:** ردیفی که محتوای داخلش اسلات آزاده. ابعاد/حالت‌ها: Style: Card، Plain؛ Size: Small، Medium، Large، XLarge؛ Expanded: false، true؛ State: Default، Hover، Disabled، Focus
- **Slot / Placeholder — 1 variant:** جای‌نگهدار محتوای دلخواه.

## Usage

### راهنمای کاربرد Norato

- عنوان‌ها رو طوری بنویس که بدون باز کردن معنی داشته باشن.
- اولین ردیف مهم رو باز نگه دار.

### محدودیت‌های کاربرد

- محتوای ضروری رو داخل Accordion پنهان نکن.
- Accordion تودرتو نساز.

### جهت RTL

عنوان راست و فلش باز و بسته سمت چپ.

## Accessibility

هدر یه دکمه با aria-expanded هست.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

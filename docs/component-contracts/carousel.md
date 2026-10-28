# Carousel — قرارداد کامپوننت نوراتو

**حوزه:** Media & Chat  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: اسلایدر افقی محتوا با هدر، فلش‌ها و نشانگر نقطه‌ای. هر اسلاید می‌تونه هر کامپوننتی باشه.

## Anatomy

- **Header** — عنوان و فلش‌ها
- **Track** — ردیف اسلایدها
- **Slide** — هر اسلاید
- **Indicator** — نقطه‌های صفحه

## Variants

- **Carousel (3 variant):** Size: Small، Medium، Large
- **Carousel Slot (3 variant):** Size: Small، Medium، Large
- **Carousel Indicator (8 variant):** Tone: Dark، Light؛ Size: Small، Medium؛ Count: 3، 5
- **Carousel Dot (8 variant):** Tone: Dark، Light؛ Size: Small، Medium؛ Active: false، true

## Sizes

- **Carousel:** Small، Medium، Large
- **Carousel Slot:** Small، Medium، Large
- **Carousel Indicator:** Small، Medium
- **Carousel Dot:** Small، Medium

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Carousel — 3 variant:** کاروسل کامل. ابعاد/حالت‌ها: Size: Small، Medium، Large
- **Carousel Slot — 3 variant:** جای یه اسلاید. ابعاد/حالت‌ها: Size: Small، Medium، Large
- **Carousel Indicator — 8 variant:** نشانگر صفحه. ابعاد/حالت‌ها: Tone: Dark، Light؛ Size: Small، Medium؛ Count: 3، 5
- **Carousel Dot — 8 variant:** یه نقطه. ابعاد/حالت‌ها: Tone: Dark، Light؛ Size: Small، Medium؛ Active: false، true

## Usage

### راهنمای کاربرد Norato

- بخشی از اسلاید بعدی رو نشون بده تا معلوم باشه قابل اسکروله.
- تعداد اسلایدها رو محدود نگه دار.

### محدودیت‌های کاربرد

- محتوای مهم رو فقط توی اسلایدهای آخر نذار.
- اسلاید خودکار سریع نساز.

### جهت RTL

اسلاید اول و نقطه‌ی اول سمت راست.

## Accessibility

فلش‌ها برچسب «قبلی» و «بعدی» دارن و حرکت خودکار قابل توقفه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

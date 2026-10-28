# Drawer — قرارداد کامپوننت نوراتو

**حوزه:** Overlays  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: پنل کناری برای جزئیات و فرم‌ها، و Bottom Sheet برای موبایل.

## Anatomy

- **Scrim** — پس‌زمینه‌ی تیره
- **Panel** — پنل شیشه‌ای
- **Header** — عنوان و بستن
- **Content** — محتوای آزاد

## Variants

- **Drawer (6 variant):** Position: Right، Left؛ Size: Small، Medium، Large
- **Bottom Sheet (3 variant):** Type: Content، Actions؛ Detent: Half، Full، Auto

## Sizes

- **Drawer:** Small، Medium، Large

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Drawer — 6 variant:** پنل کناری. ابعاد/حالت‌ها: Position: Right، Left؛ Size: Small، Medium، Large
- **Bottom Sheet — 3 variant:** برگه‌ی پایین موبایل. ابعاد/حالت‌ها: Type: Content، Actions؛ Detent: Half، Full، Auto

## Usage

### راهنمای کاربرد Norato

- برای کارهای فرعی که به صفحه‌ی فعلی مربوطن ازش استفاده کن.
- در موبایل Bottom Sheet رو انتخاب کن.

### محدودیت‌های کاربرد

- ناوبری اصلی رو فقط توی Drawer نذار.
- Drawer خیلی عریض نساز؛ Modal یا صفحه‌ی جدید بهتره.

### جهت RTL

در RTL، کشو به‌طور پیش‌فرض از راست باز میشه.

## Accessibility

مثل Modal فوکوس رو حبس می‌کنه و با Esc بسته میشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

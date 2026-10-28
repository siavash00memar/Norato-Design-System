# Chip — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت نوراتو:** Adapted  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: چیپ فیلتر یا ورودی؛ شیشه‌ای در حالت عادی و مشکی وقتی انتخاب شده. در Multi Select و ردیف فیلترها استفاده میشه.

## Anatomy

- **Container** — کپسول شیشه‌ای یا مشکی
- **Leading Icon** — آیکن یا تیک
- **Label** — متن
- **Remove** — آیکن حذف

## Variants

- **Chip (20 variant):** Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Selected، Disabled، Focus

## Sizes

- **Chip:** Small، Medium، Large، XLarge

## States

- **Chip:** Default، Hover، Selected، Disabled، Focus

## Parts

- **Chip — 20 variant:** چیپ با آیکن اول و آخر. ابعاد/حالت‌ها: Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Selected، Disabled، Focus

## Usage

### راهنمای کاربرد Norato

- برای فیلترهای قابل ترکیب ازش استفاده کن.
- حالت انتخاب‌شده رو واضح نشون بده.

### محدودیت‌های کاربرد

- Chip رو جای دکمه‌ی اکشن نذار.
- متن طولانی نذار.

### جهت RTL

آیکن حذف سمت چپ چیپ قرار می‌گیره.

## Accessibility

Chip قابل انتخاب وضعیت pressed یا checked داره.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

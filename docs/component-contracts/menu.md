# Menu — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: منوی اکشن شناور (همون منوی «⋯»). آیتم‌ها با آیکن، توضیح، میانبر و زیرمنو؛ اکشن خطرناک آخر از همه.

## Anatomy

- **Panel** — پنل شیشه‌ای منو
- **Item** — ردیف اکشن
- **Icon** — آیکن سمت راست
- **Shortcut** — میانبر کیبورد سمت چپ
- **Danger Item** — اکشن خطرناک، قرمز

## Variants

- **Action Menu (3 variant):** Size: Small، Medium، Large
- **Menu Item (24 variant):** Size: Small، Medium، Large؛ Type: Default، Danger؛ State: Default، Hover، Disabled، Focus

## Sizes

- **Action Menu:** Small، Medium، Large
- **Menu Item:** Small، Medium، Large

## States

- **Menu Item:** Default، Hover، Disabled، Focus

## Parts

- **Action Menu — 3 variant:** پنل شیشه‌ای منو. ابعاد/حالت‌ها: Size: Small، Medium، Large
- **Menu Item — 24 variant:** یه ردیف منو. ابعاد/حالت‌ها: Size: Small، Medium، Large؛ Type: Default، Danger؛ State: Default، Hover، Disabled، Focus

## Usage

### راهنمای کاربرد Norato

- اکشن‌ها رو بر اساس کاربرد گروه‌بندی کن.
- اکشن حذف رو با جداکننده از بقیه جدا کن.

### محدودیت‌های کاربرد

- بیشتر از ۸ آیتم توی یه منو نذار.
- اکشن اصلی صفحه رو توی منو پنهان نکن.

### جهت RTL

فلش زیرمنو به چپ اشاره می‌کنه.

## Accessibility

نقش menu داره و با کلیدهای جهت قابل پیمایشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

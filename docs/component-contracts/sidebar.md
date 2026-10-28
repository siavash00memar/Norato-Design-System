# Sidebar — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Adapted  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: منوی کناری کامل با هدر، گروه‌ها، زیرمنو و فوتر کاربر. شیشه‌ای و شناور یا چسبیده به لبه، باز یا جمع‌شده.

## Anatomy

- **Header** — لوگو یا فضای کاری
- **Section Title** — عنوان گروه
- **Item** — لینک با آیکن و شمارنده
- **Active Indicator** — نشانگر ۳ پیکسلی روی لبه‌ی راست
- **Footer** — حساب کاربری

## Variants

- **Sidebar (4 variant):** Style: Glass، Bar؛ Collapsed: false، true
- **Sidebar Item (20 variant):** Collapsed: false، true؛ Size: Small، Medium؛ State: Default، Hover، Active، Disabled، Focus
- **Sidebar Sub Item (8 variant):** Size: Small، Medium؛ State: Default، Hover، Active، Focus
- **Sidebar Section Title (2 variant):** Collapsed: false، true
- **Sidebar Header (4 variant):** Type: Brand، Workspace؛ Collapsed: false، true
- **Sidebar Footer (4 variant):** Type: User، Card؛ Collapsed: false، true

## Sizes

- **Sidebar Item:** Small، Medium
- **Sidebar Sub Item:** Small، Medium

## States

- **Sidebar Item:** Default، Hover، Active، Disabled، Focus
- **Sidebar Sub Item:** Default، Hover، Active، Focus

## Parts

- **Sidebar — 4 variant:** سایدبار کامل. ابعاد/حالت‌ها: Style: Glass، Bar؛ Collapsed: false، true
- **Sidebar Item — 20 variant:** آیتم منو با آیکن و شمارنده. ابعاد/حالت‌ها: Collapsed: false، true؛ Size: Small، Medium؛ State: Default، Hover، Active، Disabled، Focus
- **Sidebar Sub Item — 8 variant:** زیرآیتم با خط درختی. ابعاد/حالت‌ها: Size: Small، Medium؛ State: Default، Hover، Active، Focus
- **Sidebar Section Title — 2 variant:** عنوان گروه. ابعاد/حالت‌ها: Collapsed: false، true
- **Sidebar Header — 4 variant:** لوگو یا انتخاب فضای کاری. ابعاد/حالت‌ها: Type: Brand، Workspace؛ Collapsed: false، true
- **Sidebar Footer — 4 variant:** حساب کاربری یا کارت ارتقا. ابعاد/حالت‌ها: Type: User، Card؛ Collapsed: false، true

## Usage

### راهنمای کاربرد Norato

- آیتم‌های پرکاربرد رو بالاتر بذار.
- در حالت جمع‌شده برای هر آیکن Tooltip بذار.

### محدودیت‌های کاربرد

- بیشتر از دو سطح زیرمنو نساز.
- آیکن‌های شبیه به هم برای آیتم‌های مختلف انتخاب نکن.

### جهت RTL

سایدبار سمت راست صفحه‌ست و نشانگر آیتم فعال روی لبه‌ی راست.

## Accessibility

آیتم فعال باید aria-current داشته باشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

# Breadcrumbs — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: نشون میده کاربر کجای سایته؛ از خانه تا صفحه‌ی فعلی. مسیرهای بلند جمع میشن.

## Anatomy

- **Home** — اولین مرحله، با آیکن خانه
- **Link** — مراحل قابل کلیک
- **Separator** — فلش رو به چپ یا خط مورب
- **Current** — صفحه‌ی فعلی، غیرقابل کلیک

## Variants

- **Breadcrumbs (12 variant):** Style: Plain، Glass؛ Collapsed: false، true؛ Size: Small، Medium، Large
- **Breadcrumb Item (18 variant):** Size: Small، Medium، Large؛ Type: Link، Current؛ State: Default، Hover، Focus
- **Breadcrumb Separator (6 variant):** Size: Small، Medium، Large؛ Type: Chevron، Slash
- **Breadcrumb Ellipsis (6 variant):** Size: Small، Medium، Large؛ State: Default، Hover

## Sizes

- **Breadcrumbs:** Small، Medium، Large
- **Breadcrumb Item:** Small، Medium، Large
- **Breadcrumb Separator:** Small، Medium، Large
- **Breadcrumb Ellipsis:** Small، Medium، Large

## States

- **Breadcrumb Item:** Default، Hover، Focus
- **Breadcrumb Ellipsis:** Default، Hover

## Parts

- **Breadcrumbs — 12 variant:** مسیر کامل. ابعاد/حالت‌ها: Style: Plain، Glass؛ Collapsed: false، true؛ Size: Small، Medium، Large
- **Breadcrumb Item — 18 variant:** یه مرحله‌ی مسیر. ابعاد/حالت‌ها: Size: Small، Medium، Large؛ Type: Link، Current؛ State: Default، Hover، Focus
- **Breadcrumb Separator — 6 variant:** جداکننده‌ی مراحل. ابعاد/حالت‌ها: Size: Small، Medium، Large؛ Type: Chevron، Slash
- **Breadcrumb Ellipsis — 6 variant:** مراحل پنهان‌شده. ابعاد/حالت‌ها: Size: Small، Medium، Large؛ State: Default، Hover

## Usage

### راهنمای کاربرد Norato

- برای سایت‌هایی با بیشتر از دو سطح ازش استفاده کن.
- عنوان مراحل رو با عنوان صفحه‌ها یکی نگه دار.

### محدودیت‌های کاربرد

- Breadcrumbs رو جای ناوبری اصلی نذار.
- مرحله‌ی فعلی رو لینک نکن.

### جهت RTL

مسیر از راست به چپ میره و فلش‌ها به چپ اشاره می‌کنن.

## Accessibility

مرحله‌ی فعلی aria-current="page" داره.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

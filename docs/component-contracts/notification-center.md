# Notification Center — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: لیست اعلان‌ها به‌صورت پاپ‌اور یا پنل کناری، گروه‌بندی‌شده بر اساس روز، با زنگوله‌ی اعلان.

## Anatomy

- **Bell** — زنگوله با نشان تعداد
- **Header** — عنوان و «خواندن همه»
- **Tabs** — دسته‌بندی اعلان‌ها
- **Item** — هر اعلان با آواتار یا آیکن
- **Unread Dot** — نقطه‌ی خوانده‌نشده

## Variants

- **Notification Center (3 variant):** Type: Popover، Panel، Empty
- **Notification Item (6 variant):** Type: System، User، Action؛ Status: Unread، Read
- **Notification Bell (3 variant):** State: Default، Unread، Open

## Sizes

- در قرارداد فعلی Norato محور اندازه برای این خانواده مشخص نشده است.

## States

- **Notification Bell:** Default، Unread، Open

## Parts

- **Notification Center — 3 variant:** پنل کامل اعلان‌ها. ابعاد/حالت‌ها: Type: Popover، Panel، Empty
- **Notification Item — 6 variant:** یه اعلان؛ خوانده‌نشده Bold و نقطه‌دار. ابعاد/حالت‌ها: Type: System، User، Action؛ Status: Unread، Read
- **Notification Bell — 3 variant:** آیکن زنگوله با نشان تعداد. ابعاد/حالت‌ها: State: Default، Unread، Open

## Usage

### راهنمای کاربرد Norato

- اعلان‌ها رو بر اساس زمان گروه‌بندی کن.
- گزینه‌ی «خواندن همه» بذار.

### محدودیت‌های کاربرد

- اعلان‌های تبلیغاتی رو با اعلان‌های مهم قاطی نکن.
- بدون حالت خالی طراحی نکن.

### جهت RTL

نشان تعداد روی گوشه‌ی بالا-چپ زنگوله میشینه.

## Accessibility

تعداد اعلان‌های جدید باید در برچسب زنگوله گفته بشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

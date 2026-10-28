# Tree View — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: نمایش ساختار سلسله‌مراتبی مثل پوشه‌ها و فایل‌ها، با خطوط راهنما.

## Anatomy

- **Chevron** — باز و بسته کردن پوشه
- **Icon** — پوشه یا فایل
- **Label** — اسم آیتم
- **Indent** — فاصله‌ی هر سطح
- **Selected** — آیتم انتخاب‌شده روی شیشه‌ی روشن

## Variants

- **Tree (2 variant):** Guides: Off، On
- **Tree Item (45 variant):** Type: Folder Open، Folder Closed، File؛ Level: 1، 2، 3؛ State: Default، Hover، Selected، Disabled، Focus

## Sizes

- در قرارداد فعلی Norato محور اندازه برای این خانواده مشخص نشده است.

## States

- **Tree Item:** Default، Hover، Selected، Disabled، Focus

## Parts

- **Tree — 2 variant:** درخت در پنل شیشه‌ای. ابعاد/حالت‌ها: Guides: Off، On
- **Tree Item — 45 variant:** یه ردیف درخت. ابعاد/حالت‌ها: Type: Folder Open، Folder Closed، File؛ Level: 1، 2، 3؛ State: Default، Hover، Selected، Disabled، Focus

## Usage

### راهنمای کاربرد Norato

- سطح‌ها رو به ۳ تا ۴ محدود کن.
- آیتم انتخاب‌شده رو همیشه در دید نگه دار.

### محدودیت‌های کاربرد

- برای لیست ساده‌ی یک‌سطحی Tree نذار.
- اسم‌های طولانی رو بدون کوتاه‌سازی نذار.

### جهت RTL

هر سطح ۲۰ پیکسل از راست جلو میره؛ پوشه‌ی بسته فلشش به چپه.

## Accessibility

نقش tree داره؛ چپ و راست برای باز و بسته کردن و بالا و پایین برای جابه‌جایی.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

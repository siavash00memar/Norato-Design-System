# Split Button — قرارداد کامپوننت نوراتو

**حوزه:** Actions  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: یه اکشن اصلی و کنارش یه فلش برای باز کردن منوی اکشن‌های مرتبط. وقتی یه کار پیش‌فرض داری و چند تا گزینه‌ی دیگه.

## Anatomy

- **Main Action** — بخش اصلی؛ همون Button با متن و آیکن
- **Separator** — خط ۱ پیکسلی بین دو بخش؛ گوشه‌های داخلی صاف میشن
- **Menu Toggle** — Icon Button با فلش؛ در حالت Open فلش رو به بالا میشه
- **Action Menu** — منوی اکشن‌های مرتبط، چسبیده به لبه‌ی چپ

## Variants

- **Split Button (60 variant):** Type: Primary، Secondary، Danger؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Open، Disabled، Focus
- **Dropdown Button (48 variant):** Type: Primary، Secondary، Tertiary؛ Size: Small، Medium، Large، XLarge؛ State: Default، Open، Disabled، Focus

## Sizes

- **Split Button:** Small 32px، Medium 40px، Large 48px، XLarge 56px

## States

- **Split Button:** Default، Hover، Open، Disabled، Focus
- **Dropdown Button:** Default، Open، Disabled، Focus

## Parts

- **Split Button — 60 variant:** اکشن اصلی + دکمه‌ی فلش با یه جداکننده‌ی ۱ پیکسلی. ابعاد/حالت‌ها: Type: Primary، Secondary، Danger؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Open، Disabled، Focus
- **Dropdown Button — 48 variant:** دکمه‌ای که فقط منو باز می‌کنه و خودش اکشن مستقیم نداره. ابعاد/حالت‌ها: Type: Primary، Secondary، Tertiary؛ Size: Small، Medium، Large، XLarge؛ State: Default، Open، Disabled، Focus

## Usage

### راهنمای کاربرد Norato

- وقتی یه کار پیش‌فرض واضح داری و چند حالت دیگه از همون کار، ازش استفاده کن.
- اکشن پیش‌فرض رو همونی بذار که بیشتر از همه انتخاب میشه.

### محدودیت‌های کاربرد

- اکشن‌های بی‌ربط رو توی منوش جمع نکن؛ برای اونا Action Menu جدا بذار.
- وقتی اکشن پیش‌فرض نداری، Split نذار؛ Dropdown Button کافیه.

### جهت RTL

فلش منو سمت چپ دکمه قرار می‌گیره و منو زیرش، از لبه‌ی چپ باز میشه.

## Accessibility

بخش اصلی و فلش دو هدف جدای Tab هستن و فلش باید برچسب «گزینه‌های بیشتر» داشته باشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

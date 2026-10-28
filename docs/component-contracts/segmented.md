# Segmented Control — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: جابه‌جایی بین ۲ تا ۴ نما. دو استایل داره: Glass که گزینه‌ی انتخابی سفید و برجسته‌ست، و Contrast که مشکیه.

## Anatomy

- **Track** — ظرف شیشه‌ای کم‌رنگ
- **Selected Segment** — گزینه‌ی فعال، برجسته
- **Segment** — گزینه‌های غیرفعال
- **Icon** — آیکن اختیاری هر گزینه

## Variants

- **Segmented Control (24 variant):** Style: Glass، Contrast؛ Size: Small، Medium، Large، XLarge؛ Items: 2، 3، 4
- **Segment Item (64 variant):** Style: Glass، Contrast؛ Size: Small، Medium، Large، XLarge؛ Selected: false، true؛ State: Default، Hover، Disabled، Focus

## Sizes

- Segmented Control: Small 32px، Medium 40px، Large 48px، XLarge 56px.

## States

- **Segment Item:** Default، Hover، Disabled، Focus

## Parts

- **Segmented Control — 24 variant:** نگه‌دارنده‌ی ۲ تا ۴ گزینه. ابعاد/حالت‌ها: Style: Glass، Contrast؛ Size: Small، Medium، Large، XLarge؛ Items: 2، 3، 4
- **Segment Item — 64 variant:** یه گزینه با آیکن یا برچسب. ابعاد/حالت‌ها: Style: Glass، Contrast؛ Size: Small، Medium، Large، XLarge؛ Selected: false، true؛ State: Default، Hover، Disabled، Focus

## Usage

### راهنمای کاربرد Norato

- برچسب‌ها رو کوتاه و تقریباً هم‌طول نگه دار.
- برای عوض کردن نمای یه محتوای مشترک ازش استفاده کن.

### محدودیت‌های کاربرد

- بیشتر از ۴ گزینه نذار؛ Tabs مناسب‌تره.
- برای ناوبری بین صفحه‌های جدا ازش استفاده نکن.

### جهت RTL

گزینه‌ی اول سمت راسته.

## Accessibility

هر Segment یه دکمه با وضعیت pressed هست و با کیبورد قابل انتخابه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

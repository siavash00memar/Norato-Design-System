# Card — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت نوراتو:** Adapted  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: نگه‌دارنده‌ی محتوا به‌علاوه‌ی کارت‌های آماده‌ی محتوا، آمار، پروفایل، قیمت‌گذاری و انتخابی.

## Anatomy

- **Media** — تصویر یا ویدئو
- **Tag** — دسته‌بندی
- **Title** — عنوان
- **Body** — توضیح
- **Footer** — اکشن یا اطلاعات تکمیلی

## Variants

- **Card (20 variant):** Style: Glass، Elevated، Outline، Filled؛ State: Default، Hover، Selected، Disabled، Focus
- **Content Card (4 variant):** Layout: Vertical، Horizontal، Overlay، Text
- **Stat Card (3 variant):** Trend: Up، Down، Neutral
- **Profile Card (2 variant):** Layout: Center، Cover
- **Pricing Card (2 variant):** Highlight: Off، On
- **Selectable Card (10 variant):** Control: Radio، Checkbox؛ State: Default، Hover، Selected، Disabled، Focus

## Sizes

- در قرارداد فعلی Norato محور اندازه برای این خانواده مشخص نشده است.

## States

- **Card:** Default، Hover، Selected، Disabled، Focus
- **Selectable Card:** Default، Hover، Selected، Disabled، Focus

## Parts

- **Card — 20 variant:** کارت پایه. ابعاد/حالت‌ها: Style: Glass، Elevated، Outline، Filled؛ State: Default، Hover، Selected، Disabled، Focus
- **Content Card — 4 variant:** کارت مقاله، محصول یا پروژه. ابعاد/حالت‌ها: Layout: Vertical، Horizontal، Overlay، Text
- **Stat Card — 3 variant:** کارت عدد کلیدی با روند. ابعاد/حالت‌ها: Trend: Up، Down، Neutral
- **Profile Card — 2 variant:** کارت پروفایل. ابعاد/حالت‌ها: Layout: Center، Cover
- **Pricing Card — 2 variant:** کارت پلن قیمت؛ حالت ویژه با حاشیه‌ی رنگین‌کمانی لمون. ابعاد/حالت‌ها: Highlight: Off، On
- **Selectable Card — 10 variant:** کارت قابل انتخاب. ابعاد/حالت‌ها: Control: Radio، Checkbox؛ State: Default، Hover، Selected، Disabled، Focus

## Usage

### راهنمای کاربرد Norato

- هر کارت رو درباره‌ی یه موضوع نگه دار.
- کارت‌های یه ردیف رو هم‌ارتفاع بچین.

### محدودیت‌های کاربرد

- کارت رو داخل کارت نذار.
- چند اکشن اصلی توی یه کارت نذار.

### جهت RTL

کارت انتخاب‌شده به‌جای رنگ تأکیدی، شیشه‌ی روشن‌تر می‌گیره.

## Accessibility

اگه کل کارت قابل کلیکه، فقط یه لینک اصلی داشته باشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

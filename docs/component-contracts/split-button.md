# Split Button — قرارداد کامپوننت نوراتو

**حوزه:** Actions  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی یک کپسول پیوستهٔ دو‌بخشی با جداکننده است. رنگ Primary از زرد Norato می‌آید و ترکیب/نسبت اجزا از Lemon گرفته شده است. نمونهٔ Vue اجرایی در پایین آن آزمایشی است؛ تا پایان DoD وضعیت خانواده Proposed می‌ماند.

گالری‌های Variants، Sizes و States مانند صفحهٔ Button مستقل‌اند: شش ترکیب پایهٔ Split/Dropdown با adapter آزمایشی، چهار اندازهٔ اجرایی و پنج حالت مستند. نمونهٔ تعاملی بالا منوی Open واقعی را اجرا می‌کند.

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

`size` در adapter آزمایشی چهار مقدار `small`، `medium`، `large` (پیش‌فرض) و `xlarge` دارد. ارتفاع بصری به‌ترتیب ۳۲، ۴۰، ۴۸ و ۵۶ پیکسل است؛ هدف تعاملی دو اندازهٔ اول حداقل ۴۸ پیکسل باقی می‌ماند.

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

### Vue 3 API آزمایشی

`NoratoSplitButton` با `id`، `label` و `items` (آرایهٔ `{ value, label, disabled? }`) کار می‌کند. `mode` برابر `split` یا `dropdown` است؛ `variant` برای Split شامل `primary`، `secondary` و `destructive` و برای Dropdown شامل `primary`، `secondary` و `tertiary` است. `size` چهار مقدار `small`، `medium`، `large` و `xlarge` دارد. `disabled` و `loading` هر دو اکشن را متوقف می‌کنند. اکشن اصلی رویداد `primary-action` و انتخاب منو رویداد `select` با `value` را منتشر می‌کند. پشتیبانی آیکن هنوز وجود ندارد.

## Accessibility

بخش اصلی و فلش دو هدف جدای Tab هستن و فلش باید برچسب «گزینه‌های بیشتر» داشته باشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

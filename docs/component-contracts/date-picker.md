# Date Picker — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Proposed — trigger فعلی پنل تقویم باز نمی‌کند و adapter آمادهٔ محصول نیست.  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: تقویم شمسی برای انتخاب یه روز، یه بازه یا تاریخ و ساعت. جمعه‌ها و تعطیلات رسمی مشخص‌ان.

## Anatomy

- **Date Input** — فیلد با آیکن تقویم
- **Calendar Header** — اسم ماه و فلش‌های ماه قبل و بعد
- **Weekdays** — ش ی د س چ پ ج از راست
- **Calendar Day** — هر روز با حالت‌های مختلف
- **Range Band** — نوار بین شروع و پایان بازه

## Variants

- **Date Picker (8 variant):** Type: Single، Range، Range + Presets، Date & Time، Month، Year، Wheel؛ Size: Small، Medium
- **Date Input (80 variant):** Type: Single، Range؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Error، Disabled؛ Label: Outside، Inside
- **Calendar Month (8 variant):** Size: Small، Medium؛ Selection: None، Single، Range، Multiple
- **Calendar Header (3 variant):** Size: Small، Medium؛ Type: Arrows، Dropdowns
- **Calendar Day (20 variant):** Size: Small، Medium؛ State: Default، Hover، Today، Selected، Range Start، In Range، Range End، Holiday، Outside، Disabled
- **Picker Cell (10 variant):** Size: Small، Medium؛ State: Default، Hover، Selected، Current، Disabled

## Sizes

- Date Picker: Small 32px و Medium 40px.

## States

- **Date Input:** Default، Hover، Active، Error، Disabled
- **Calendar Day:** Default، Hover، Today، Selected، Range Start، In Range، Range End، Holiday، Outside، Disabled
- **Picker Cell:** Default، Hover، Selected، Current، Disabled

## Parts

- **Date Picker — 8 variant:** پنل کامل تقویم در ۷ حالت. ابعاد/حالت‌ها: Type: Single، Range، Range + Presets، Date & Time، Month، Year، Wheel؛ Size: Small، Medium
- **Date Input — 80 variant:** فیلدی که تقویم رو باز می‌کنه. ابعاد/حالت‌ها: Type: Single، Range؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Error، Disabled؛ Label: Outside، Inside
- **Calendar Month — 8 variant:** جدول یه ماه. ابعاد/حالت‌ها: Size: Small، Medium؛ Selection: None، Single، Range، Multiple
- **Calendar Header — 3 variant:** ناوبری بین ماه‌ها. ابعاد/حالت‌ها: Size: Small، Medium؛ Type: Arrows، Dropdowns
- **Calendar Day — 20 variant:** یه روز با همه‌ی حالت‌ها. ابعاد/حالت‌ها: Size: Small، Medium؛ State: Default، Hover، Today، Selected، Range Start، In Range، Range End، Holiday، Outside، Disabled
- **Picker Cell — 10 variant:** خونه‌ی ماه، سال و ساعت. ابعاد/حالت‌ها: Size: Small، Medium؛ State: Default، Hover، Selected، Current، Disabled

## Usage

### راهنمای کاربرد Norato

- برای تاریخ‌های نزدیک (رزرو، تحویل) از Date Picker استفاده کن.
- در بازه‌ی دوماهه، ماه جاری رو سمت راست بذار.

### محدودیت‌های کاربرد

- برای تاریخ تولد تقویم ماه‌به‌ماه نذار؛ نسخه‌ی Year یا Wheel سریع‌تره.
- روزهای غیرقابل انتخاب رو پنهان نکن؛ با حالت Disabled نشونشون بده.

### جهت RTL

ستون‌ها از راست: ش ی د س چ پ ج. در بازه‌ی دوماهه، ماه جاری سمت راسته.

## Accessibility

با کلیدهای جهت بین روزها جابه‌جا میشه و Page Up و Down ماه رو عوض می‌کنه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

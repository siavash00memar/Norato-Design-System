# Date Picker — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Implemented — adapter Vue، playground هفت‌حالته و DoD مرورگری تکمیل شده‌اند؛ صفحه‌خوان مستقل جداگانه اجرا نشده است.

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد Lemon/Norato: هفت حالت Single، Range، Range + Presets، Date & Time، Month، Year و Wheel با تقویم شمسی. جمعه‌ها مشخص‌اند؛ مصرف‌کننده تاریخ تعطیلات را از منبع مورد اعتماد خودش می‌دهد.

## Anatomy

- **Date Input** — فیلد با آیکن تقویم
- **Calendar Header** — اسم ماه و فلش‌های ماه قبل و بعد
- **Weekdays** — ش ی د س چ پ ج از راست
- **Calendar Day** — هر روز با حالت‌های مختلف
- **Range Band** — نوار بین شروع و پایان بازه

## Variants

- **Date Picker (7 mode):** Type: Single، Range، Range + Presets، Date & Time، Month، Year، Wheel؛ Size: Small، Medium
- **Date Input (80 Lemon variants + Loading):** Type: Single، Range؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Error، Disabled، Loading؛ Label: Outside، Inside
- **Calendar Month (8 variant):** Size: Small، Medium؛ Selection: None، Single، Range، Multiple
- **Calendar Header (3 variant):** Size: Small، Medium؛ Type: Arrows، Dropdowns
- **Calendar Day (20 variant):** Size: Small، Medium؛ State: Default، Hover، Today، Selected، Range Start، In Range، Range End، Holiday، Outside، Disabled
- **Picker Cell (10 variant):** Size: Small، Medium؛ State: Default، Hover، Selected، Current، Disabled

## Sizes

- Date Picker: Small 32px و Medium 40px.

## States

- **Date Input:** Default، Hover، Active، Error، Disabled، Loading (spinner و اعلام وضعیت)
- **Calendar Day:** Default، Hover، Today، Selected، Range Start، In Range، Range End، Holiday، Outside، Disabled
- **Picker Cell:** Default، Hover، Selected، Current، Disabled

## Parts

- **Date Picker — 7 mode:** پنل کامل تقویم در ۷ حالت. ابعاد/حالت‌ها: Type: Single، Range، Range + Presets، Date & Time، Month، Year، Wheel؛ Size: Small، Medium
- **Date Input — 80 Lemon variants + Loading:** فیلدی که تقویم رو باز می‌کنه. ابعاد/حالت‌ها: Type: Single، Range؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Error، Disabled، Loading؛ Label: Outside، Inside
- **Calendar Month — 8 variant:** جدول یه ماه. ابعاد/حالت‌ها: Size: Small، Medium؛ Selection: None، Single، Range، Multiple
- **Calendar Header — 3 variant:** ناوبری بین ماه‌ها. ابعاد/حالت‌ها: Size: Small، Medium؛ Type: Arrows، Dropdowns
- **Calendar Day — 20 variant:** یه روز با همه‌ی حالت‌ها. ابعاد/حالت‌ها: Size: Small، Medium؛ State: Default، Hover، Today، Selected، Range Start، In Range، Range End، Holiday، Outside، Disabled
- **Picker Cell — 10 variant:** خونه‌ی ماه، سال و ساعت. ابعاد/حالت‌ها: Size: Small، Medium؛ State: Default، Hover، Selected، Current، Disabled

## Usage

### راهنمای کاربرد Norato

- برای تاریخ‌های نزدیک (رزرو، تحویل) از Date Picker استفاده کن.
- در بازه‌ی دوماهه، ماه جاری رو سمت راست بذار.
- `Range + Presets` گزینه‌های «این هفته» و «ماه قبل» دارد؛ ماه جاری در بازهٔ دوماهه سمت راست قرار می‌گیرد.

### محدودیت‌های کاربرد

- برای تاریخ تولد تقویم ماه‌به‌ماه نذار؛ نسخه‌ی Year یا Wheel سریع‌تره.
- روزهای غیرقابل انتخاب رو پنهان نکن؛ با حالت Disabled نشونشون بده.

### جهت RTL

ستون‌ها از راست: ش ی د س چ پ ج. در بازه‌ی دوماهه، ماه جاری سمت راسته. مقدارهای API با تاریخ جلالی سریال می‌شوند؛ Date & Time ساعت محلی را بدون تبدیل منطقهٔ زمانی نگه می‌دارد. جمعه همیشه مشخص است و تاریخ تعطیلات رسمی از مصرف‌کننده می‌آید.

## Accessibility

با کلیدهای جهت بین روزها جابه‌جا میشه و Page Up و Down ماه رو عوض می‌کنه. Loading کنترل را غیرفعال می‌کند، spinner نشان می‌دهد و از طریق `aria-busy` و status متنی به فناوری کمکی اعلام می‌شود.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

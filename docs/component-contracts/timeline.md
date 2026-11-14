# Timeline — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت نوراتو:** Adapted — چهار adapter Vue پیاده شده‌اند؛ بازبینی نهایی DoD بصری و دسترس‌پذیری ادامه دارد.

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحه در قاب نقطه‌دار هم‌اندازهٔ Button نشان داده می‌شود. قاب دسکتاپ 636×328px و قاب موبایل 327×311.5px در عرض 390px و 257×311.5px در عرض 320px است. چهار رویداد کوتاه، نشانگرهای نقطه‌ای 10.8px و نشانگر فعال 12.96px دارند؛ فاصلهٔ ردیف‌ها با اندازهٔ viewport هماهنگ می‌شود. آزمایش اجرایی زیر آن قرار می‌گیرد.

## Overview

قرارداد طراحی Norato: نمایش رویدادها به ترتیب ورودی، از تاریخچهٔ سفارش تا فید گروه‌بندی‌شدهٔ فعالیت‌ها. آرایه بی‌تغییر و بدون مرتب‌سازی یا کوتاه‌سازی پنهان رندر می‌شود.

## Anatomy

- **Rail** — خط عمودی
- **Marker** — نشانگر رویداد
- **Title** — عنوان رویداد
- **Time** — زمان
- **Description** — توضیح کوتاه اختیاری

## Variants

- **Timeline Item (9 variant):** Layout: Default، Card، Compact؛ Position: First، Middle، Last
- **Timeline Marker (15 variant):** Type: Dot، Icon، Avatar؛ Tone: Neutral، Active، Success، Warning، Danger
- **Activity Feed (2 variant):** Density: Default، Compact

## Sizes

- در قرارداد فعلی Norato محور اندازه برای این خانواده مشخص نشده است.

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Timeline Item — 9 variant:** یه رویداد. ابعاد/حالت‌ها: Layout: Default، Card، Compact؛ Position: First، Middle، Last
- **Timeline Marker — 15 variant:** نشانگر روی خط. ابعاد/حالت‌ها: Type: Dot، Icon، Avatar؛ Tone: Neutral، Active، Success، Warning، Danger
- **Activity Feed — 2 variant:** پنل فعالیت‌ها. ابعاد/حالت‌ها: Density: Default، Compact

## Usage

### راهنمای کاربرد Norato

- جدیدترین رو بالا یا پایین بذار، ولی ثابت.
- برای رویداد فعلی حالت Active استفاده کن.

### محدودیت‌های کاربرد

- متن طولانی برای هر رویداد ننویس.
- بیشتر از ۲۰ رویداد رو بدون صفحه‌بندی نشون نده.

### جهت RTL

خط زمان سمت راسته و متن کنارش.

## Accessibility

لیست رویدادها یه لیست مرتب (ol) معنایی‌ه.

### قاعدهٔ عمومی Focus در Norato

Timeline محتوای غیرتعاملی است و فوکوس نمی‌گیرد. هر فید یک عنوان قابل‌دسترسی دارد، رویدادها در `ol` معنایی‌اند و زمان با `time` نمایش داده می‌شود. نشانگرها نام دسترس‌پذیر مستقل دارند.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-glass-surface-strong`، `--norato-color-text-primary`، `--norato-color-text-secondary`، `--norato-color-brand-yellow`، `--norato-color-border-default`، `--norato-color-success-container`، `--norato-color-warning-container`، `--norato-color-error-container` و توکن‌های فاصله، تایپوگرافی و شعاع.

## Vue API

- `NoratoTimeline`: فهرست مرتب و کنترل‌شده با `events`, `label`, `layout` و `dir`.
- `NoratoTimelineItem`: رندر یک رخداد با `event`, `layout`, `position` و `dir`؛ تنها آیتم به‌صورت داخلی connector را حذف می‌کند.
- `NoratoTimelineMarker`: نشانگر مستقل با نوع `dot|icon|avatar`، لحن، آیکن محدودشده و تصویر/نام آواتار.
- `NoratoActivityFeed`: گروه‌های روز با عنوان و آرایهٔ رویداد صریح از میزبان، به‌همراه تراکم `default|compact`.
- زمان قابل نمایش `time` است؛ `datetime` اختیاری برای مقدار machine-readable می‌آید.
- `avatarName` متن جایگزین/initial است. تصویر ناموفق به حروف اول برمی‌گردد.
- مصرف‌کننده ترتیب را ثابت نگه می‌دارد و بالای ۲۰ رویداد صفحه‌بندی می‌کند.

# Charts — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: کارت نمودار میله‌ای، خطی، ناحیه‌ای و دونات، با کاشی آمار، لجند و تولتیپ. رنگ‌ها به ترتیب ثابت از chart/series.

## Anatomy

- **Header** — عنوان، زیرعنوان و بیشتر
- **Legend** — راهنمای سری‌ها
- **Grid** — خطوط راهنما
- **Marks** — میله‌ها یا خط
- **Value Label** — یه مقدار مستقیم روی نمودار

## Variants

- **Chart (6 variant):** Type: Bar، Grouped Bar، Horizontal Bar، Line، Area، Donut
- **Stat Tile (3 variant):** Trend: Up، Down، Neutral
- **Chart Legend Item (4 variant):** Series: 1، 2، 3، 4
- **Chart Tooltip (1 variant):** Series: 2

## Sizes

- در قرارداد فعلی Norato محور اندازه برای این خانواده مشخص نشده است.

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Chart — 6 variant:** کارت نمودار ۵۲۰ پیکسلی. ابعاد/حالت‌ها: Type: Bar، Grouped Bar، Horizontal Bar، Line، Area، Donut
- **Stat Tile — 3 variant:** کاشی عدد کلیدی با اسپارک‌لاین. ابعاد/حالت‌ها: Trend: Up، Down، Neutral
- **Chart Legend Item — 4 variant:** آیتم لجند. ابعاد/حالت‌ها: Series: 1، 2، 3، 4
- **Chart Tooltip — 1 variant:** تولتیپ تیره‌ی نمودار. ابعاد/حالت‌ها: Series: 2

## Usage

### راهنمای کاربرد Norato

- فقط یه مقدار مهم رو مستقیم روی نمودار بنویس.
- برای دو سری یا بیشتر Legend بذار.

### محدودیت‌های کاربرد

- رنگ سری‌ها رو بی‌نظم انتخاب نکن.
- نمودار سه‌بعدی یا سایه‌دار نساز.

### جهت RTL

عنوان و لجند راست‌چین‌ان ولی اعداد LTR می‌مونن.

## Accessibility

داده‌ی نمودار باید به‌صورت جدول یا متن هم در دسترس باشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

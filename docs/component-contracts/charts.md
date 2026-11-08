# Charts — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت نوراتو:** Adapted — چهار adapter اجرایی Vue آماده‌اند؛ بازبینی کامل DoD هنوز ادامه دارد.

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحه و داخل قاب نقطه‌دار هم‌اندازهٔ Button نشان داده می‌شود. Playground زیر آن اجرایی است.

## Overview

قرارداد طراحی Norato: کارت نمودار میله‌ای، میله‌ای گروهی، میله‌ای افقی، خطی، ناحیه‌ای و دونات، با Stat Tile، Legend و Tooltip. رنگ سری‌ها به ترتیب ثابت از `--norato-color-chart-series-1` تا `--norato-color-chart-series-8` است؛ سری نخست زرد Norato است.

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
- **Chart Legend Item — 4 variant:** آیتم لجند. ابعاد/حالت‌ها: Series: 1 تا 4
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

در Donut، راهنمای رنگ از نام دسته‌ها ساخته می‌شود و به ترتیب ثابت رنگ سری‌ها نگاشت می‌شود؛ برچسب‌های بعد از سری هشتم رنگ‌ها را به‌صورت چرخه‌ای تکرار می‌کنند.

### API در Vue

- `NoratoChartCard` برای شش نوع نمودار؛ داده با `categories` و `series` کنترل می‌شود و بدون مرتب‌سازی پنهان رسم می‌شود.
- `NoratoStatTile` عدد اصلی، عنوان و روند `up|down|neutral` را نمایش می‌دهد.
- `NoratoChartLegendItem` چهار نمونهٔ بصری مرجع را نشان می‌دهد و API آن نگاشت ثابت رنگ را برای سری‌های ۱ تا ۸ پشتیبانی می‌کند.
- `NoratoChartTooltip` نمونهٔ بصری سری دوم را نشان می‌دهد؛ prop اختیاری `id` نقش tooltip را برای اتصال میزبان از طریق `aria-describedby` فعال می‌کند. `series` (۱ تا ۸) و `dir` رنگ و جهت را کنترل می‌کنند.
- نمودارها SVG بومی و با نسبت viewBox ثابت رسم می‌شوند. سری‌ها باید یک مقدار عددی محدود برای هر دسته داشته باشند. دونات فقط یک سری با مقدارهای نامنفی و مجموع محدود و مثبت می‌پذیرد.
- بخش «نمایش داده‌های نمودار» جدول واقعی مقادیر را باز می‌کند. اقدام سربرگ فقط از slot مصرف‌کننده می‌آید.

## Accessibility

خلاصهٔ دسترس‌پذیر و جدول معنایی زیر هر نمودار داده‌ها و ترتیب اصلی دسته‌ها/سری‌ها را در دسترس می‌گذارد. SVG تزئینی از درخت دسترس‌پذیری پنهان است.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-text-secondary`، `--norato-color-border-default`، `--norato-color-chart-series-1` تا `--norato-color-chart-series-8`، توکن‌های وضعیت روند، تایپوگرافی و فاصله.

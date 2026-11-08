# Radio Button — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Implemented برای adapter و نمونه؛ بررسی نهایی ماتریس مرجع در جریان

## Preview

نمونهٔ آغاز صفحه یک گروه سه‌گزینه‌ای غیرفعال در قاب شیشه‌ای ۶۴۰×۲۸۸ است؛ در موبایل عرض قاب ۳۲۰px می‌شود. سه ردیف ۴۸px هستند و گزینهٔ ماهانه انتخاب شده است. آزمایش Vue جداگانه تعاملی است. در ۱۲۸۰×۹۰۰ قاب به‌علت ستون مستندات ۵۸۴×۲۸۸px است؛ مرجع طراحی در همان مرورگر بعد از تغییر viewport ابعاد DOM قاب را در دسترس نگذاشت.

## Overview

قرارداد طراحی Norato: انتخاب دقیقاً یک گزینه از گروه، با کنترل دایره‌ای شیشه‌ای و نشان انتخاب زرد Norato. زرد اکسنت اصلی انتخاب/فعال است؛ آبی برای پیوند و اطلاعات معنایی می‌ماند. API در `NoratoRadioGroup.vue` مقدار تکی controlled دارد.

## Anatomy

- **Ring** — حلقه‌ی شیشه‌ای
- **Dot** — نقطه‌ی زرد Norato وقتی انتخاب شده
- **Label** — برچسب گزینه
- **Description** — توضیح اختیاری

## Variants

- **Radio Button (20 variant):** Size: 16، 20؛ Checked: false، true؛ State: Default، Hover، Disabled، Focus، Error
- **Radio Field (6 variant):** Checked: false، true؛ State: Default، Error، Disabled

## Sizes

- Radio Button: 16px یا 20px.

## States

- **Radio Button:** Default، Hover، Disabled، Focus، Error
- **Radio Field:** Default، Error، Disabled

## Parts

- **Radio Button — 20 variant:** خود رادیو. ابعاد/حالت‌ها: Size: 16، 20؛ Checked: false، true؛ State: Default، Hover، Disabled، Focus، Error
- **Radio Field — 6 variant:** رادیو با برچسب و توضیح. ابعاد/حالت‌ها: Checked: false، true؛ State: Default، Error، Disabled

## Usage

### راهنمای کاربرد Norato

- یه گزینه رو پیش‌فرض انتخاب کن، مگه اینکه انتخاب نکردن معنی داشته باشه.
- وقتی ۲ تا ۶ گزینه داری و همه باید دیده بشن، Radio بهترین انتخابه.

### محدودیت‌های کاربرد

- برای بیشتر از ۶ گزینه Radio نذار؛ Select جای کمتری می‌گیره.
- یه Radio تنها نذار؛ کاربر نمی‌تونه انتخابش رو برداره.

### جهت RTL

در RTL کنترل در سمت راست برچسب قرار می‌گیرد. هر ردیف هدف ۴۸px دارد. گالری ثابت States از کارت‌های عنوان/توضیح مرجع طراحی پیروی می‌کند؛ پنج حالت Radio Button و سه حالت Radio Field با برچسب خانواده و accent معنایی Norato نمایش داده می‌شوند. مثال تعاملی فقط در Preview و playground می‌ماند.

## Accessibility

گروه با Tab فوکوس می‌گیره و با کلیدهای جهت بین گزینه‌ها جابه‌جا میشه. بررسی مرورگر: ArrowDown از ماهانه به سه‌ماهه رفت و مقدار controlled و snippet تغییر کردند؛ ArrowUp مقدار اولیه را برگرداند. در تازه‌ترین مرور، hover یک گزینهٔ انتخاب‌نشده دیده شد و انتخاب ماهانه ثابت ماند. حلقهٔ فوکوس ۲px، role/name گزینه‌ها، RTL و هدف ۴۸px تأیید شد. ماتریس ۱۲ ترکیب checked/unchecked، Default/Error/Disabled و اندازهٔ ۱۶/۲۰px در DOM سنجیده شد؛ اندازهٔ کنترل و ردیف ۴۸px بود. required روی یک radio فعال قرار می‌گیرد؛ errorText و پیام required به همهٔ ورودی‌ها متصل‌اند و disabled واقعی است. حالت بدون انتخاب + پیام required در مرورگر بررسی شد. اشکال playground که مقدار خالی را از status/snippet جدا می‌کرد اصلاح شد: مقدار مؤثر اکنون یکسان است و انتخاب کاربر شبیه‌سازی خالی را می‌بندد. States gallery: هر ۸ کارت خانواده و شرح درست دارد؛ نمونه‌های انتخاب واقعی در playground جدا هستند. Variants بیست ترکیب دیداری را در پنج گروه state با حلقه و نقطهٔ دایره‌ای متناسب، RTL و توکن‌های معنایی نمایش می‌دهد. در مقایسهٔ هم‌viewport دسکتاپ 1280×720، مرجع طراحی چهار کارت نمونه و property selector دارد (عرض گالری 636px)؛ Norato پنج گروه و 20 ترکیب قراردادی را در ستون مستندات 584px نشان می‌دهد. ماتریس Norato عمداً Focus و دو اندازهٔ کامل قرارداد را نیز نگه می‌دارد؛ ارتفاع آن 548px در برابر 321px گالری specimen مرجع طراحی به‌علاوهٔ 161px selector است. در ۳۹۰×۸۴۴ ماتریس Norato پنج کارت ۳۴۳×۱۶۲٫۲px و ارتفاع کل ۸۸۶٫۹px دارد؛ عرض سند ۳۷۵px و بدون overflow است. گالری Variants به‌علاوهٔ property selector مرجع مرجع طراحی برابر ۶۵۱٫۵+۲۷۲٫۵=۹۲۴px در عرض ۳۲۷px است. نقطهٔ انتخاب و حاشیهٔ hover زرد Norato است و با adapter واقعی تطبیق دارد. بررسی مستقل صفحه‌خوان و ماتریس کامل وضعیت/focus همچنان باز است.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-yellow`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

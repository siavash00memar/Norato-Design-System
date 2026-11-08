# Alert — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**وضعیت نوراتو:** Implemented؛ DoD بصری و دسترس‌پذیری هنوز باز است.

## Preview

نمونهٔ پیش‌فرض در صفحهٔ مستقل غیرفعال است. نمونهٔ اجرایی و کنترل‌های ترکیب در بخش Vue قرار دارند.

## Overview

پیام درون‌صفحه‌ای برای اطلاع، موفقیت، هشدار، خطا یا وضعیت خنثی. Alert نزدیک محتوای مرتبط می‌ماند و خودکار ناپدید نمی‌شود. برای پیام موقت از Toast استفاده کن.

API اجرایی `NoratoAlert`: `id` لازم؛ `tone` از `info | success | warning | danger | neutral`؛ `variant` از `soft | glass`؛ `layout` از `inline | expanded`؛ متن‌های `message`، `title` و `description`؛ `dismissible`؛ `label` اختیاری؛ `v-model` کنترل اختیاری نمایش؛ و slot به نام `actions` برای اقدام‌های متعلق به مصرف‌کننده. رویدادهای مدل و `dismiss` هنگام بستن منتشر می‌شوند.

## Anatomy

- **Status icon** — آیکن برداری معنایی در انتهای inline (راست در RTL)، با اندازهٔ intrinsic و پنهان از صفحه‌خوان.
- **Message / title** — پیام کوتاه در Inline یا عنوان در Expanded؛ عنوان با Estedad.
- **Description** — شرح کوتاه زیر عنوان در Expanded.
- **Actions** — slot مصرف‌کننده با امکان شکستن به خط بعد.
- **Dismiss** — دکمهٔ اختیاری در ابتدای inline (چپ در RTL)، target حداقل ۴۸×۴۸px.

## Variants

- **Tone (5):** Info، Success، Warning، Danger، Neutral.
- **Surface (2):** Soft با ظرف معنایی، Glass با سطح شیشه‌ای و Stroke متناسب با tone.
- **Layout (2):** Inline برای پیام یک‌خطی؛ Expanded برای عنوان، توضیح و اقدام.
- حاصل ترکیب سه محور ۲۰ حالت بصری است. لحن با آیکن/متن و رنگ منتقل می‌شود؛ رنگ تنها نشانه نیست.

## Sizes

Alert اندازهٔ انتخابی ندارد. Inline حداقل ارتفاع target تعاملی Norato را حفظ می‌کند؛ Expanded به محتوای خود رشد می‌کند و هیچ ارتفاع ثابتی محتوای متن را نمی‌کشد یا می‌بُرد.

## States

- **Default:** در صفحه باقی می‌ماند؛ بدون timeout.
- **Dismissible:** دکمهٔ بستن با `v-model` کنترل یا مستقل بسته می‌شود.
- **Hidden:** با مقدار مدل `false` از درخت رندر حذف می‌شود.
- **Focus:** فقط کنترل بستن حلقهٔ ۲px زرد و offset توکنی دارد.
- **Responsive:** توضیح و actionها در عرض کم wrap می‌شوند؛ محتوای صفحه overflow افقی ایجاد نمی‌کند.

## Parts

- **`NoratoAlert`** — adapter Vue عمومی، پنج tone، دو surface و دو layout.
- **Icon** — SVG معنایی، intrinsic، `aria-hidden`.
- **Content** — متن inline یا title/description expanded، RTL.
- **Actions slot** — محتوای متعلق به مصرف‌کننده؛ در Expanded نمایش داده می‌شود و target اکشن‌ها دست‌کم ۴۸px است.
- **Close** — دکمهٔ اختیاری نام‌گذاری‌شده، keyboard operable، ۴۸×۴۸px.
- **Semantics** — danger نقش `alert`؛ چهار لحن دیگر نقش `status`.

## Usage

### راهنمای کاربرد Norato

- پیام را نزدیک محتوایی بگذار که به آن مربوط است.
- در خطا، علت و راه اصلاح را با متن و آیکن قابل فهم بیان کن.
- برای اقدام‌ها فقط slot مربوط را با دکمه‌های مقصد واقعی مصرف‌کننده پر کن.

### محدودیت‌های کاربرد

- Alert را با timer خودکار نبند؛ پیام موقت برای Toast است.
- چند Alert را پشت سر هم نچین.
- عنوان و شرح را خالی نگذار مگر layout واقعاً Inline با `message` باشد.

### جهت RTL

جهت محتوای Alert صریحاً RTL است؛ آیکن سمت راست و بستن سمت چپ می‌ماند. محتوای action اگر شناسه/عدد LTR باشد، مصرف‌کننده جهت آن را مشخص کند.

## Accessibility

Danger نقش زندهٔ assertive `alert` دارد؛ سایر toneها `status` غیر assertive هستند. آیکن تزئینی از نام قابل دسترس حذف شده است. دکمهٔ بستن نام فارسی مشخص دارد، با Tab/Enter/Space قابل استفاده است و حلقهٔ فوکوس زرد ۲px دارد. پیام severity را فقط با رنگ منتقل نمی‌کند.

## Tokens

`--norato-color-status-info`، `--norato-color-status-success`، `--norato-color-status-warning`، `--norato-color-status-error`، `--norato-color-text-secondary`، containerهای semantic، `--norato-color-brand-yellow` برای focus، `--norato-alert-inline-size`، `--norato-radius-card`، `--norato-control-target-min`، `--norato-space-*` و توکن‌های تایپوگرافی Estedad/Vazirmatn.

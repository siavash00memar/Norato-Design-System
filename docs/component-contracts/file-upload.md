# File Upload — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Adapted؛ adapterها در دسترس‌اند و DoD مستقل تا پایان بررسی باز می‌ماند.

## Preview

نمونهٔ ابتدای صفحه حالت پیش‌فرض را نشان می‌دهد؛ تنظیم‌ها و رفتارهای اجرایی در playground Vue بررسی می‌شوند.

## Overview

مجموعهٔ انتخاب فایل برای Vue 3 و رابط فارسی RTL است: Dropzone، File Item، Upload Tile و Avatar Upload. این کامپوننت فایل را انتخاب و اعتبارسنجی می‌کند؛ ارسال شبکه و تغییر وضعیت انتقال را برنامهٔ مصرف‌کننده انجام می‌دهد.

## Anatomy

- **Dropzone:** ورودی بومی فایل با دکمهٔ کلیک‌پذیر، drop، hint و خطا.
- **File Item:** نام و حجم LTR، وضعیت، progress واقعی و action حذف/لغو/تلاش دوباره.
- **Upload Tile:** کنترل مربعی انتخاب و پیش‌نمایش فایل.
- **Avatar Upload:** انتخاب تصویر در قاب دایره‌ای.

آیکن بارگذاری Dropzone یک SVG خطی است. سطح کنش اجرایی Dropzone از زرد برند نوراتو با متن تیره استفاده می‌کند؛ در نمونهٔ بصری ایستا، glyph زرد روی tile مربعی خنثی می‌نشیند تا شکل و مقیاس مرجع حفظ شود. شست‌وشوی تزئینی قاب در پالت گرم و خنثی نوراتو می‌ماند.
آیکن نوع فایل در File Item تزئینی است و از سطح خنثی و رنگ متن ثانویه استفاده می‌کند؛ آبی فقط برای معنای واقعی لینک یا اطلاعاتی به کار می‌رود.

## Variants

- **Dropzone (8):** Large/Compact × Default/Drag Over/Error/Disabled.
- **File Item:** Image/Document × Uploading/Complete/Error؛ وضعیت selected برای فایل پذیرفته‌شده نیز پشتیبانی می‌شود.
- **Upload Tile (4):** Add/Uploading/Complete/Error.
- **Avatar Upload (2):** Empty/Filled.

## Sizes

- **Dropzone:** Large با سطح انتخاب ۱۶۰px و Compact با حداقل ۴۸px.
- **Upload Tile:** قاب مربعی ۱۱۲px؛ **Avatar Upload:** قاب دایره‌ای ۹۶px.
- actionها حداقل ۴۸×۴۸px باقی می‌مانند.

## States

فایل پذیرفته‌شده ابتدا `selected` است. وضعیت‌های `uploading`، `complete` و `error` فقط وقتی نمایش داده می‌شوند که مصرف‌کننده مقدار کنترل‌شده را تغییر دهد. پیشرفت زمان‌سنجی یا شبیه‌سازی نمی‌شود. خطای اعتبارسنجی محلی کنار Dropzone و نام فایل ردشده نمایش داده می‌شود.

## Parts

- **`NoratoFileUpload`:** `id`, `label`, `modelValue: NoratoUploadItem[]`, `accept`, `maxSize` (byte، پیش‌فرض 10,000,000)، `maxFiles` (پیش‌فرض 5)، `multiple`, `size`, `disabled`, `required`, `helperText`, `errorText`, `name`, `dir`. پیش‌فرض accept برابر PNG/JPEG/PDF است. رویدادها: `update:modelValue`, `files-selected`, `rejected`, `remove`, `cancel`, `retry`. ورودی بومی فایل‌های واقعی موجود در صف کنترل‌شده را نگه می‌دارد تا `required` و `name` هنگام ارسال native فرم با انتخاب کاربر هم‌خوان باشند؛ ارسال شبکه همچنان بر عهدهٔ میزبان است.
- **`NoratoUploadItem`:** `id`, `file?`, `name`, `size`, `type`, `status`, `progress?`, `errorText?`. Progress بین ۰ تا ۱۰۰ clamp می‌شود.
- **`NoratoFileItem`:** `item` و `disabled`; action مناسب به وضعیت emit می‌شود.
- **`NoratoUploadTile`:** `id`, `modelValue: File|null`, `previewUrl`, `state`, `progress`, `errorText`, `accept`, `disabled`, `label`; رویدادهای model update، `file-selected`, `cancel`, `retry`. در حالت uploading و با progress تعریف‌شده، progressbar نام «پیشرفت بارگذاری {نام فایل}» دارد.
- **`NoratoAvatarUpload`:** `id`, `modelValue: File|null`, `previewUrl`, `label`, `disabled`, `required`; فقط تصویر را می‌پذیرد.
- تطبیق type بر اساس MIME یا پسوند فایل است. ردهای type، size و count در `rejected` با علت منتشر و روی صفحه فهرست می‌شوند؛ فایل‌های معتبر همان انتخاب حفظ می‌شوند.

## Usage

### راهنمای کاربرد Norato

پیش از انتخاب، فرمت و محدودیت حجم را اعلام کن. برای Upload Tile و Avatar، `previewUrl` را از برنامهٔ میزبان بده و چرخهٔ عمر URL را همان‌جا مدیریت کن.

### محدودیت‌های کاربرد

- `selected` به معنی ارسال‌شدن فایل نیست.
- بعد از خطای transport آیتم را در مدل نگه دار، `errorText` بده و برای retry رویداد مربوط را مدیریت کن.
- فایل نامعتبر را بی‌صدا دور نریز؛ پیام و event علت را ارائه می‌کند.
- فایل‌های چندتایی با سقف `maxFiles` و حداکثر اندازهٔ هر فایل کنترل می‌شوند.

### جهت RTL

برچسب‌ها و قاب RTL هستند؛ نام فایل و اطلاعات فایل LTR می‌مانند. محتوای مربع و دایره با aspect-ratio ثابت است.

## Accessibility

Dropzone با pointer، Enter و Space فایل‌انتخاب‌کن بومی را باز می‌کند؛ drag راه جایگزین است. input مخفی برچسب دارد و هنگام `required` بودن، نام دسترس‌پذیر ورودی و دکمهٔ Dropzone واژهٔ «الزامی» را هم شامل می‌شود؛ FileList ورودی با فایل‌های واقعی صف کنترل‌شده همگام می‌ماند تا اعتبارسنجی و ارسال native فرم انتخاب را ببینند. خطا با `role=alert` اعلام می‌شود و نوار پیشرفت درصد کنترل‌شده را به `progressbar` می‌دهد. دکمه‌ها target حداقل ۴۸px و focus ring دوپیکسلی دارند. با جایگزینی action در تغییر status کنترل‌شده، فوکوس به action فعال همان ردیف منتقل می‌شود. با حذف ردیف از صف، فوکوس به action ردیف بعدی، ردیف قبلی یا Dropzone خالی برمی‌گردد. میزبان‌هایی که `NoratoFileItem` را جداگانه استفاده می‌کنند مقصد حذف ردیف را مدیریت می‌کنند. حرکت تزئینی با prefers-reduced-motion حذف می‌شود.

## Tokens

قاب، فاصله، رنگ، فوکوس، ابعاد tile/avatar، گرید نقطه‌ای و شعاع از توکن‌های semantic/layout Norato مصرف می‌شوند. هیچ مقدار بصری صفحه‌ای به‌صورت raw به این کامپوننت افزوده نشده است.

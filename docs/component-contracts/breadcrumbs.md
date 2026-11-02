# Breadcrumbs — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Adapted

## Preview

نمونهٔ بالای صفحه فقط ظاهر را نشان می‌دهد و inert است. تعامل واقعی فقط در playground و adapter اتفاق می‌افتد.

## Overview

Breadcrumbs مسیر صفحه از ریشه تا صفحهٔ فعلی را نشان می‌دهد. برای مسیرهای بلند، آیتم‌های میانی در یک disclosure قابل دسترس جمع می‌شوند. رابط پیش‌فرض فارسی و RTL است.

## Anatomy

- **Home / Link:** مقصدهای قبلی به شکل پیوند واقعی؛ با `home: true` نشان خانهٔ توکنی و مقیاس‌پذیر نمایش داده می‌شود. TypeScript برای مقصدهای قابل‌کلیک `href` را الزامی می‌کند و برای صفحهٔ جاری آن را نمی‌پذیرد.
- **Separator:** جهت‌دار به چپ در RTL یا خط مورب.
- **Current:** عنوان صفحهٔ جاری بدون پیوند و با `aria-current="page"`.
- **Ellipsis / Disclosure:** دکمهٔ بازکردن لینک‌های میانی پنهان‌شده.

## Variants

- **Breadcrumbs (12 variant):** Style: Plain، Glass؛ Collapsed: false، true؛ Size: Small، Medium، Large.
- **Breadcrumb Item (18 variant):** Size: Small، Medium، Large؛ Type: Link، Current؛ State: Default، Hover، Focus.
- **Breadcrumb Separator (6 variant):** Size: Small، Medium، Large؛ Type: Chevron، Slash.
- **Breadcrumb Ellipsis (6 variant):** Size: Small، Medium، Large؛ State: Default، Hover.

ماتریس بالا قرارداد بصری Lemon است؛ adapter Norato style، size، separator و collapsed را دارد. حالت hover/focus از CSS و رفتار مرورگر/دکمه می‌آید.

## Sizes

Small، Medium و Large اندازهٔ متن و فاصله را تغییر می‌دهند؛ ارتفاع لینک و disclosure همیشه دست‌کم ۴۸px باقی می‌ماند.

## States

لینک‌ها Default، Hover و Focus دارند. Current صفحهٔ جاری را نمایش می‌دهد و تعاملی نیست. Disclosure بسته/باز می‌شود؛ دکمه در حالت باز `aria-expanded="true"` دارد. غیرفعال‌سازی عمومی در API وجود ندارد.

## Parts

- **Breadcrumbs:** ظرف `nav` با نام دسترس‌پذیر و فهرست ترتیبی.
- **Breadcrumb Item:** لینک مقصد یا متن صفحهٔ جاری.
- **Breadcrumb Separator:** نشانهٔ تزئینی با `aria-hidden`.
- **Breadcrumb Ellipsis:** دکمه‌ای که با کلیک، Tab و Enter/Space لینک‌های میانی را آشکار می‌کند.

در مسیرهای بیشتر از چهار آیتم و با `collapsed=true`، اگر صفحهٔ جاری آخر مسیر باشد، آیتم اول و دو آیتم آخر دیده می‌شوند و بخش میانی با disclosure باز می‌شود. فهرست لینک‌های پنهان‌شده در حالت بسته از درخت دسترس‌پذیری و نمایش بیرون می‌ماند و شناسهٔ کنترل همیشه معتبر است. در عرض باریک، خود مسیر پیمایش افقی دارد تا عنوان‌ها نشکنند و هدف‌ها فشرده نشوند.

## Usage

- برای نشان‌دادن جایگاه صفحه در سلسله‌مراتب استفاده کن، نه جایگزین ناوبری اصلی.
- عنوان مسیر را با عنوان صفحه‌ها هماهنگ نگه دار.
- برای صفحهٔ جاری `current: true` بده و آن را لینک نکن.
- برای مسیرهای خیلی بلند از جمع‌کردن میانی استفاده کن.

## Accessibility

از `nav` نام‌دار و `ol` برای ساختار استفاده می‌شود. صفحهٔ جاری `aria-current="page"` دارد. دکمهٔ disclosure `aria-expanded` و `aria-controls` می‌گیرد. همهٔ لینک‌ها و دکمهٔ disclosure هدف ۴۸px، فوکوس قابل مشاهده و رفتار صفحه‌کلیدی بومی دارند. جداکننده و متن توضیحی ellipsis برای صفحه‌خوان پنهان‌اند.

## Tokens

از توکن‌های semantic Norato برای رنگ متن، برند آبی، سطح، مرز، focus ring، فاصله، تایپوگرافی و حداقل اندازهٔ هدف استفاده می‌شود. هیچ رنگ صفحه‌ای خامی به API اضافه نشده است.

### Interactive documentation preview

The Button-shaped Breadcrumbs page contains an inert specimen, a live Vue playground for style/size/separator/collapse, and a copyable `@norato/vue` example. Its control targets follow the 48px minimum.

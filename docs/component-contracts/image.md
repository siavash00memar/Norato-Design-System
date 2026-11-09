# Image — قرارداد کامپوننت نوراتو

**حوزه:** Media & Chat  
**وضعیت نوراتو:** Implemented؛ مرور کامل بصری و دسترس‌پذیری مستقل همچنان باز است.

## Overview

خانوادهٔ تصویر شامل تصویر با نسبت ثابت، بندانگشتی انتخابی، گالری سه‌چیدمان و نمایشگر تمام‌صفحه است. منبع تصویر هرگز با تغییر نسبت قاب کشیده نمی‌شود؛ `cover` برش می‌دهد و `contain` حاشیهٔ خالی را حفظ می‌کند.

## Anatomy

- **Media frame:** قاب با نسبت انتخابی و محتوای تصویر با `object-fit`.
- **Caption:** شرح فارسی روی گرادیان تیرهٔ پایین قاب.
- **Thumbnail:** تصویر کوچک قابل انتخاب با هدف تعاملی حداقل ۴۸ پیکسل.
- **Gallery:** شبکه، Masonry یا تصویر اصلی همراه بندانگشتی‌ها.
- **Lightbox:** تصویر محدود به فضای دید، کنترل بستن و پیمایش.

## Variants

- **Image (16 ترکیب):** Ratio: Square، Landscape، Wide، Portrait؛ State: Default، Hover، Loading، Error.
- **Thumbnail (9 ترکیب):** Size: Small، Medium، Large؛ State: Default، Selected، More.
- **Gallery (3):** Layout: Grid، Masonry، Featured (Main + Thumbnails).
- **Lightbox (1):** نمایش تمام‌صفحه با کنترل قبلی/بعدی وقتی بیش از یک تصویر هست.

## Sizes

- **Image ratio:** Square برابر ۱:۱، Landscape برابر ۴:۳، Wide برابر ۱۶:۹ و Portrait برابر ۳:۴.
- **Image specimen media:** عرض رسانه در نمونهٔ ثابت تا ۳۲۰ پیکسل محدود است تا نسبت تصویر طبیعی بماند و قاب مشترک Button کش نیاید.
- **Thumbnail:** Small برابر ۴۸، Medium برابر ۶۴ و Large برابر ۸۰ پیکسل؛ اندازهٔ دکمه حداقل ۴۸×۴۸ می‌ماند.
- **Lightbox media:** حداکثر ۹۰vw در ۷۸dvh دسکتاپ و ۷۶vw در ۷۲dvh موبایل؛ نسبت ذاتی تصویر حفظ می‌شود.

## States

- **Default:** تصویر با نسبت مشخص و بدون تغییر شکل نمایش داده می‌شود.
- **Hover/focus:** سایهٔ تیره و بزرگ‌نمایی ملایم روی تصویر آماده؛ در کاهش حرکت، بزرگ‌نمایی و گذار خاموش است.
- **Loading:** قاب ثابت و وضعیت قابل اعلام؛ تغییر ابعاد ندارد.
- **Error:** جایگزین نمادین و متن خطا داخل همان نسبت قاب.
- **Selected:** دورخط زرد Norato روی بندانگشتی انتخاب‌شده.
- **Disabled:** دکمهٔ بندانگشتی غیرقابل فعال‌سازی و کم‌رنگ.

## Parts

- **NoratoImage:** `src`, `alt`, `caption`, `ratio`, `state`, `objectFit`, `dir`.
- **NoratoImageThumbnail:** `src`, `alt`, `label`, `size`, `selected`, `moreCount`, `disabled` و رویداد `select`.
- **NoratoImageGallery:** `id`, `label`, `items`, `layout`, `columns`, `dir` و مقدار کنترل‌شدهٔ index.
- **NoratoLightbox:** `id`, `items`, `label`, `dir`، مقدار `open` و index کنترل‌شده.

## Usage

برای عکس معنادار `alt` توصیفی بده؛ برای تصویر صرفاً تزئینی `alt=""` استفاده کن. نسبت متناسب با محتوای تصاویر را انتخاب کن. `cover` برای عکس‌های صحنه‌ای برش می‌دهد؛ از `contain` برای تصویر محصولی که باید کامل دیده شود استفاده کن. برای انتخاب چند تصویر، Grid یا Featured را به‌کار ببر و Gallery را با index کنترل‌شده نگه دار.

## Accessibility

- هر تصویر معنادار متن جایگزین دارد؛ تصویر تزئینی alt خالی می‌گیرد.
- دکمه‌های گالری و بندانگشتی نام فارسی قابل‌فهم، وضعیت انتخاب و هدف حداقل ۴۸ پیکسلی دارند.
- Lightbox از Dialog برای فوکوس modal، Escape، بازگرداندن فوکوس و عنوان دسترس‌پذیر استفاده می‌کند؛ قبلی/بعدی با دکمه و کلیدهای جهت‌دار در دسترس‌اند.
- پیام بارگذاری و خطا برای فناوری کمکی نام‌گذاری شده‌اند. حرکت تصویری با `prefers-reduced-motion` خاموش می‌شود.

## Tokens

از توکن‌های معنایی Norato استفاده کن: `--norato-color-surface-subtle`، `--norato-color-border-default`، `--norato-color-brand-yellow`، `--norato-color-scrim`، توکن‌های `--norato-radius-*`، `--norato-space-*`، `--norato-control-target-min`، `--norato-layer-modal` و `--norato-image-preview-media-inline-size`. قاب رسانه با `aspect-ratio` هندسی تعریف می‌شود و ارتفاع ثابتی ندارد.

# Tag — قرارداد کامپوننت نوراتو

## Preview

نمونهٔ ابتدای صفحه حالت پیش‌فرض را نشان می‌دهد؛ تنظیم‌ها و رفتارهای اجرایی در playground Vue بررسی می‌شوند.

## Overview

برچسب غیرتعاملی برای نمایش وضعیت یا دسته‌بندی کوتاه. API عمومی Vue آن `NoratoTag` است. Tag هیچ کلیک، focus یا انتخابی ارائه نمی‌کند؛ برای فیلتر قابل‌انتخاب از Chip استفاده می‌شود.

## Anatomy

- Container: سطح نرم یا قاب خط‌دار
- Leading icon: آیکن تزئینی اختیاری در slot به نام `leadingIcon` (slot قدیمی `icon` نیز پشتیبانی می‌شود)
- Label: متن قابل‌فهم و کوتاه در slot پیش‌فرض
- Trailing icon: آیکن تزئینی اختیاری در slot به نام `trailingIcon`
- Status dot: نشانگر تزئینی اختیاری که در RTL پس از متن قرار می‌گیرد

## Variants

- Appearance: `soft` و `outline`
- Tone: `neutral`, `success`, `warning`, `danger`, `info`
- Dot و آیکن‌های ابتدا/انتها اختیاری و مستقل از tone هستند.
- لحن اطلاعات از سطح خنثی با نقطهٔ زرد استفاده می‌کند تا آبی وارد پالت تعاملی Norato نشود.

## Sizes

| Size | ارتفاع مینیمم |
| --- | ---: |
| Small | 24px |
| Medium | 28px |
| Large | 32px |
| XLarge | 36px |

اندازه‌ها حداقل ارتفاع‌اند؛ ارتفاع Tag به‌خاطر متن یا آیکن کش نمی‌آید. چون Tag تعاملی نیست، حداقل هدف لمس برای آن مطرح نیست.

## States

Tag وضعیت تعاملی ندارد. Hover، focus، selected و disabled به آن اضافه نکن؛ فقط محتوا و tone آن تغییر می‌کند.

## Parts

- `NoratoTag` — props: `tone`, `appearance`, `size`, `dot`, `dir`; متن از slot پیش‌فرض و آیکن از slotهای `leadingIcon` و `trailingIcon` می‌آید. نام قدیمی `icon` به‌عنوان alias برای `leadingIcon` باقی است.
- نقطه و هر دو آیکن تزئینی‌اند و از درخت دسترس‌پذیری پنهان می‌شوند؛ معنی وضعیت باید در متن هم موجود باشد.

## Usage

- متن را به یک یا دو واژه محدود کن و نوع Tag را قابل کلیک نکن.
- برای یک مفهوم ثابت همیشه یک tone مشخص به‌کار ببر.
- رنگ را تنها راه انتقال معنی قرار نده؛ متن کوتاه و روشن بنویس. نمونهٔ Vue: `<NoratoTag tone="success" appearance="soft" size="medium" dot dir="rtl">منتشر شده</NoratoTag>`.

## Accessibility

- عنصر خروجی یک `span` غیرتعاملی است؛ در ترتیب Tab قرار نمی‌گیرد.
- متن slot پیش‌فرض نام قابل‌خواندن Tag را فراهم می‌کند.
- نقطه و آیکن‌های slot با `aria-hidden` تزئینی می‌شوند.
- از success/warning/danger به‌عنوان نشانهٔ مکمل متن استفاده کن، نه جایگزین متن.

## Tokens

از `--norato-tag-height-small`, `--norato-tag-height-medium`, `--norato-tag-height-large`, `--norato-tag-height-xlarge`, `--norato-tag-icon-size`, `--norato-tag-dot-size` و توکن‌های semantic وضعیت، سطح، متن، فاصله، radius و border استفاده می‌شود. Tone اطلاعات از زرد برند و متن خنثی بهره می‌برد؛ هیچ رنگ آبی برند به عنوان accent به‌کار نمی‌رود.

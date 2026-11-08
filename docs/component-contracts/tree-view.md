# Tree View — قرارداد کامپوننت نوراتو

**حوزه:** Navigation
**وضعیت نوراتو:** Implemented؛ مرور کامل DoD ادامه دارد
**adapter:** `NoratoTreeView` در Vue 3، تک‌انتخاب، کنترل‌شده

## Preview

نمونهٔ غیرفعال در قاب نقطه‌ای Button با پالت Norato، ارتفاع ۲۸۸px و نشانگر Default قرار دارد. ردیف‌های نمونه فشرده‌اند؛ هدف تعاملی adapter اجرایی حداقل ۴۸px باقی می‌ماند.

## Overview

درخت راست‌به‌چپ برای مرور پوشه‌ها و فایل‌های تو در تو. هر سطح ۲۰px از راست تورفتگی دارد؛ برچسب فایل ۱۶px اضافه می‌گیرد تا با عنوان پوشه هم‌راستا بماند. خطوط راهنما اختیاری‌اند و پیش‌فرض خاموش هستند. انتخاب تکی است.

## Anatomy

- **Chevron** — باز/بسته‌کردن پوشه؛ کلیک روی پیکان، انتخاب را تغییر نمی‌دهد.
- **Folder / File Icon** — آیکن برداری پیش‌فرض؛ `icon` برای آیکن سفارشی نود اختیاری است.
- **Label** — عنوان نود؛ نام نمایشی درخت و متن آیتم.
- **Indent / Guide** — تورفتگی ۲۰px برای هر سطح و خط عمودی اختیاری.
- **Selected / Focus** — انتخاب سطح زرد ملایم دارد؛ فوکوس صفحه‌کلیدی outline زرد ۲px با offset توکنی ۲px دارد. ریشهٔ دسترس‌پذیر با نام `label` و جهت صریح `dir` ساخته می‌شود.

## Variants

- **Tree — 2 variant:** Guides خاموش (پیش‌فرض) یا روشن.

## Sizes

- ارتفاع ردیف runtime حداقل ۴۸px (`--norato-control-target-min`) است.
- ردیف نمونهٔ ایستا ۲۸px (`--norato-tree-preview-row-height`) است؛ فشرده‌سازی فقط کلاس نمایشی داخلی است و API اجرای مصرف‌کننده را تغییر نمی‌دهد.

## States

- **Default:** متن اصلی و سطح خنثی.
- **Hover:** پس‌زمینهٔ خنثی کم‌رنگ؛ نود disabled تغییر hover ندارد.
- **Selected:** سطح زرد ملایم Norato و `aria-selected=true`.
- **Focus:** outline زرد ۲px با offset ۲px؛ فوکوس از انتخاب جداست.
- **Disabled:** متن کم‌رنگ، `aria-disabled=true` و خارج از حرکت فوکوس/انتخاب.

## Parts

- **Tree Root — 2 variant:** خطوط راهنمای خاموش/روشن.
- **Tree Item — 45 variant مرجع:** Folder Open، Folder Closed و File × Level 1/2/3 × Default، Hover، Selected، Disabled و Focus. API نوراتو هندسهٔ Level را برای درخت‌های عمیق‌تر نیز محاسبه می‌کند.

## Usage

`NoratoTreeView` فهرست `NoratoTreeNode[]` با شناسه‌های پایدار می‌گیرد. صفحهٔ اجرای همین مستند یک مثال Vue کامل و قابل کپی نشان می‌دهد.

- برای انتخاب، `v-model` یک شناسهٔ نود را نگه می‌دارد.
- برای بازبودن پوشه‌ها، `v-model:expanded-ids` آرایهٔ شناسه‌ها را کنترل می‌کند.
- برای نمایش خط راهنما، `showGuides` را فعال کن؛ مقدار پیش‌فرض `false` است.

### راهنمای کاربرد Norato

- عمق کاربردی را معمولاً به ۳ تا ۴ سطح محدود کن و نود انتخاب‌شده را در دید نگه دار.
- برای فهرست یک‌سطحی از List استفاده کن؛ Tree فقط برای رابطهٔ والد/فرزند است.
- برای کنترل مستقل انتخاب یا بازشدن، `modelValue` و `expandedIds` را با IDهای پایدار نگه دار.
- `children: []` پوشه ایجاد نمی‌کند؛ برای پوشه دست‌کم یک فرزند ارائه کن.

### محدودیت‌های کاربرد

- adapter فقط انتخاب تکی دارد؛ multi-select، drag/reorder و ویرایش درجا در این قرارداد نیست.
- متن طولانی در یک ردیف بریده می‌شود؛ متن کامل برای دسترس‌پذیری باقی می‌ماند.
- عمق ۳–۴ توصیهٔ طراحی است، نه محدودیت فنی.

### جهت RTL

جهت پیش‌فرض RTL است. فلش پوشهٔ بسته به چپ و پوشهٔ باز رو به پایین است؛ Right/Left در صفحه‌کلید بر اساس جهت معنایی درخت عمل می‌کنند. `dir="ltr"` برای موارد خاص پشتیبانی می‌شود.

## Accessibility

از `TreeRoot` و `TreeItem` در Reka UI استفاده می‌شود: نقش‌های tree/treeitem/group، نام دسترس‌پذیر، level، selected/expanded/disabled، فوکوس گردشی، typeahead و کلیدهای Up/Down/Home/End/Left/Right/Enter/Space. نود غیرفعال دیده می‌شود اما در حرکت فوکوس، انتخاب و باز/بسته‌کردن شرکت نمی‌کند. chevron یک affordance pointer در همان ردیف است؛ ردیف پوشه با صفحه‌کلید کنترل می‌شود. درخت سراسری disabled تعامل را می‌بندد.

## Tokens

از توکن‌های `--norato-color-brand-yellow`، `--norato-color-warning-container`، `--norato-color-surface-subtle`، `--norato-color-text-primary`، `--norato-color-text-secondary`، `--norato-color-text-disabled`، `--norato-tree-indent`، `--norato-tree-file-offset`، `--norato-tree-row-height`، `--norato-tree-preview-row-height`، `--norato-tree-focus-offset`، `--norato-tree-icon-size`، `--norato-tree-chevron-size`، `--norato-tree-preview-frame-*`، توکن‌های شعاع، فاصله، تایپوگرافی و focus استفاده می‌شود.

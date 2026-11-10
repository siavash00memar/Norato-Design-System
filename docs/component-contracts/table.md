# Table — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت نوراتو:** Implemented؛ DoD مرورگری باز است.

## Preview

پیش‌نمایش ایستا و غیرفعال، قاب نقطه‌ای مشترک صفحهٔ کامپوننت، نشانگر Default و جدول سه‌ردیفی راست‌چین دارد. ردیف اول انتخاب‌شده است؛ ستون‌های نام، وضعیت و شمارندهٔ پروژه با ارقام فارسی دیده می‌شوند. ابزارهای بالای جدول صرفاً ظاهر دارند و هیچ داده‌ای را تغییر نمی‌دهند.

## Overview

`NoratoTable` جدول دادهٔ Vue با ستون‌های قابل مرتب‌سازی، جستجوی اختیاری، انتخاب گروهی، سه تراکم، ردیف جزئیات، وضعیت بارگذاری/خالی/بدون نتیجه و صفحه‌بندی داخلی است. داده، ستون، کلید ردیف و انتخاب کنترل‌شده را برنامهٔ میزبان فراهم می‌کند. جستجو و مرتب‌سازی روی دادهٔ حاضر در همین کامپوننت انجام می‌شوند؛ بارگذاری شبکه، فیلتر سرور و منطق مجوز در اختیار میزبان‌اند.

## Anatomy

- **Toolbar** — عنوان، تعداد نتایج، جستجو، محتوای اقدام و ابزار انتخاب گروهی
- **Header Cell** — عنوان ستون؛ سرستون مرتب‌پذیر دکمهٔ صفحه‌کلیدی و `aria-sort` دارد
- **Select All** — انتخاب/لغو ردیف‌های همین صفحه
- **Row** — دادهٔ اصلی با حالت hover و انتخاب زرد ملایم
- **Cell** — محتوای typed یا slot قابل‌جایگزینی
- **Row Detail** — slot اختیاری جزئیات ردیف بازشده
- **Footer** — محدودهٔ نتایج و ناوبری صفحه
- **Empty / Loading** — پیام محلی، جستجوی بی‌نتیجه و وضعیت مشغول

## Variants

- **Table:** Compact، Default، Comfortable
- **Table Column:** Checkbox، User، Text، Number، Status، Tags، Progress، Avatar Group، Image، Link، Switch، Button، Input، Select، Expand، Drag، Skeleton، Actions
- **Table Cell:** Text، Number، User، Image، Status، Tags، Avatar Group، Progress، Link، Checkbox، Switch، Button، Actions، Input، Select، Expand، Drag، Skeleton، Empty
- **Table Header Cell:** تراز Start/Center/End و وضعیت مرتب‌سازی None/Ascending/Descending
- **Table Toolbar:** حالت عادی یا انتخاب گروهی؛ slotهای `actions` و `bulk-actions`
- **Table Footer:** صفحه‌بندی داخلی؛ هنگام یک صفحه پنهان است
- **Table Row Detail:** جزئیات پیش‌فرض یا slot میزبان
- **Table Empty State:** No Data یا No Results؛ پیام با slot `empty` قابل تکمیل است

مقادیر `NoratoTableColumn.type` برای `text`, `number`, `user`, `status`, `tags`, `progress`, `link`, `image`, `empty` renderer آماده دارند. انواع تعاملی/ترکیبی (`checkbox`, `avatar-group`, `switch`, `button`, `actions`, `input`, `select`, `expand`, `drag`, `skeleton`) در type عمومی حضور دارند و با slot `cell` یا `cell-{key}` پیاده می‌شوند؛ adapter رفتار دادهٔ محصول را حدس نمی‌زند. مقدار تصویر رشتهٔ URL یا شیء `{ src, alt }` است.

## Sizes

- **Compact:** ردیف ۴۸px
- **Default:** ردیف ۵۶px
- **Comfortable:** ردیف ۶۴px
- هدف تعاملی انتخاب، sort، باز/بستن جزئیات و صفحه‌بندی حداقل ۴۸px است.

## States

- **Default / Hover / Selected** — سطح عادی، hover خنثی و انتخاب‌شده با زرد ملایم
- **Loading** — `aria-busy` روی viewport جدول و پیام وضعیت؛ انتخاب و مرتب‌سازی در انتظار دادهٔ جاری بی‌اثر است و این وضعیت بر پیام‌های خالی اولویت دارد
- **Empty** — وقتی `rows` خالی است؛ مستقل از query؛ slot `empty` اختیاری
- **No Results** — وقتی دادهٔ مبنا وجود دارد اما query هیچ ردیفی پیدا نمی‌کند
- **Disabled** — این API وضعیت سراسری disabled ندارد؛ میزبان باید کنترل‌های سلول را با قرارداد همان کنترل غیرفعال کند

## Parts

- **Selection:** `selectable`, `v-model` و `update:modelValue`; انتخاب سرستون محدود به ردیف‌های قابل‌مشاهدهٔ صفحه است.
- **Sorting:** `sortable` روی ستون؛ چرخهٔ None → Ascending → Descending → None و رویداد `sort`.
- **Search:** `searchable`, `searchPlaceholder`; جستجو در رشته‌های قابل‌نمایش داده و بازگشت به صفحهٔ اول.
- **Pagination:** `pageSize` و `page`; رویداد `update:page`; مقدار page در صورت عدم اتصال کنترل‌نشده است. مقدار صفحه در live region مودبانه قرار می‌گیرد؛ اگر کنترل فعال بعد از تغییر غیرفعال شود، فوکوس به دکمهٔ فعال مقابل منتقل می‌شود. فلش‌ها جهت متن را دنبال می‌کنند.
- **Expand:** `expandable` و slot `row-detail`.
- **Cell extension:** slotهای `cell`، `cell-{columnKey}`؛ slot خاص ستون بر slot عمومی تقدم دارد.
- **Toolbar extension:** slotهای `actions` و `bulk-actions`؛ slot دوم `selected-keys` و تابع `clear` دریافت می‌کند.
- **RTL:** ستون اول در سمت راست و ترتیب منطقی header/cell در `dir="rtl"` است. مقدار نوع Number از نظر نوشتاری LTR و در سمت چپ ستون تراز می‌شود.
- **Responsive:** در عرض باریک، هر ردیف به کارت‌های عمودی با برچسب هر سلول تبدیل می‌شود؛ اسکرول افقی صفحه ایجاد نمی‌شود.

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NoratoTable, type NoratoTableColumn, type NoratoTableRow } from '@norato/vue'

const selected = ref<Array<string | number>>([])
const columns: NoratoTableColumn[] = [
  { key: 'name', label: 'نام', type: 'user', sortable: true },
  { key: 'status', label: 'وضعیت', type: 'status', sortable: true },
  { key: 'projects', label: 'پروژه', type: 'number', sortable: true },
]
const rows: NoratoTableRow[] = [{ id: 'sara', name: { name: 'سارا محمدی', description: 'طراح محصول' }, status: 'فعال', projects: 12 }]
</script>

<template>
  <NoratoTable id="team" label="اعضای تیم" :columns="columns" :rows="rows" row-key="id" v-model="selected" selectable searchable :page-size="10" />
</template>
```

`NoratoTableColumn` شامل `key`, `label`, `type`, `align`, `sortable`, `width` است. برای دادهٔ تصویری، اقدام‌ها و ورودی‌های خاص از slot استفاده کن تا تعامل و داده در اختیار برنامهٔ میزبان بماند.

## Accessibility

ساختار بومی `table`, `thead`, `tbody`, `th scope="col"` استفاده می‌شود. مرتب‌سازی از دکمهٔ واقعی و `aria-sort`، انتخاب از checkbox بومی، جستجو از label پنهان، صفحه‌بندی از نام فارسی و دادهٔ جاری از `aria-busy`/`role="status"` پشتیبانی می‌شود. همهٔ کنترل‌های مستقیم هدف حداقل ۴۸px و focus ring زرد ۲px دارند. وضعیت selection فقط با رنگ منتقل نمی‌شود و checkbox آن را هم اعلام می‌کند.

### قاعدهٔ عمومی Focus در Norato

کنترل‌های صفحه‌کلیدی حلقهٔ قابل‌دیدن توکن‌شده دارند؛ focus فیلد جستجو یک stroke زرد دارد و outline دوم رسم نمی‌کند.

## Tokens

**توکن‌های معنایی Norato:** `--norato-color-surface-default`, `--norato-color-surface-subtle`, `--norato-color-text-primary`, `--norato-color-text-secondary`, `--norato-color-brand-yellow`, `--norato-color-border-default`, `--norato-color-focus-ring` و توکن‌های فاصله، اندازه و شعاع مشترک. آبی به‌عنوان accent تعاملی در Table استفاده نمی‌شود.

## Mobile specimen frame

The inert Table frame is inset by the semantic `--norato-space-4` token at mobile widths and centered. This rule applies only to `.sample-table-preview`; desktop geometry and the live `NoratoTable` adapter are unchanged. Exact 390/320 post-change browser confirmation is still open in `specs/013-design-system-parity/updates/2026-11-10-table-mobile-frame-width/checklist.md`.

# Empty State — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**وضعیت adapter:** Implemented؛ مرور کامل DoD و screen reader جداگانه دنبال می‌شود.

## Preview

نمونهٔ بالای صفحه فقط مرجع بصری و inert است. قاب نقطه‌ای و برچسب Default متعلق به صفحهٔ مستندات است؛ در خود `NoratoEmptyState` قاب داخلی فقط با `container="card"` فعال می‌شود.

## Overview

وقتی داده یا محتوایی برای نمایش نیست، عنوان باید وضعیت را روشن کند و توضیح، قدم بعدی را پیشنهاد دهد. از تزئین برای انتقال معنای ضروری استفاده نکن.

### API اجرایی Vue

`NoratoEmptyState` از `id`، `title` و `description` ضروری و propهای زیر پشتیبانی می‌کند:

| Prop | مقدارها | پیش‌فرض | توضیح |
| --- | --- | --- | --- |
| `layout` | `vertical`, `horizontal` | `vertical` | چیدمان افقی، تصویر را در inline-start قرار می‌دهد. |
| `size` | `small`, `medium`, `large` | `medium` | اندازهٔ تصویر و ریتم محتوا. |
| `container` | `none`, `card` | `none` | سطح کارت داخلی اختیاری. |
| `visualType` | `icon`, `illustration` | `icon` | نوع visual داخلی. |
| `visualTone` | `neutral`, `success`, `warning`, `danger` | `neutral` | لحن تکمیلی visual؛ معنای وضعیت را متن بیان می‌کند. |
| `dir` | `rtl`, `ltr` | `rtl` | جهت محلی کامپوننت. |

Slotهای اختیاری: `visual` برای visual سفارشی تزئینی، `primary-action` و `secondary-action`. این adapter اکشن تولید نمی‌کند، مقصد تعیین نمی‌کند و رویداد زنده اعلام نمی‌کند؛ عملکرد و دسترس‌پذیری اکشن‌ها متعلق به برنامهٔ میزبان است.

`NoratoEmptyStateVisual` به‌صورت جداگانه با `type`، `size`، `tone` و `dir` قابل استفاده است.

## Anatomy

- **Visual** — آیکن یا تصویرسازی با اندازهٔ ذاتی
- **Title** — عنوان معنایی
- **Description** — توضیح و راهنمای قدم بعد
- **Actions** — slot اکشن اصلی و فرعی

## Variants

- **Empty State (12 ترکیب):** Layout: Vertical، Horizontal؛ Size: Small، Medium، Large؛ Container: None، Card
- **Empty State Visual (24 ترکیب):** Type: Icon، Illustration؛ Size: Small، Medium، Large؛ Tone: Neutral، Success، Warning، Danger

## Sizes

- **Empty State:** Small، Medium، Large
- **Visual:** Small 40px، Medium 48px، Large 64px؛ تصویرسازی نسبت ابعاد خود را حفظ می‌کند.
- همهٔ دکمه‌ها و لینک‌های داخل action slots حداقل 48px ارتفاع تعاملی دارند.

## States

این کامپوننت وضعیت تعاملی یا داده‌ای مستقل ندارد. حالت خالی، موفقیت، هشدار یا خطا را متن مصرف‌کننده مشخص می‌کند؛ tone فقط ظاهر visual را تنظیم می‌کند.

## Parts

- **Empty State — 12 ترکیب:** محتوای معنایی در چیدمان عمودی/افقی، اندازهٔ کوچک/متوسط/بزرگ، با سطح داخلی اختیاری
- **Empty State Visual — 24 ترکیب:** آیکن یا تصویرسازی؛ اندازهٔ کوچک/متوسط/بزرگ؛ لحن خنثی/موفقیت/هشدار/خطر

## Usage

```vue
<script setup lang="ts">
import { NoratoButton, NoratoEmptyState } from '@norato/vue'
</script>

<template>
  <NoratoEmptyState
    id="projects-empty"
    title="هنوز پروژه‌ای نساختی"
    description="اولین پروژه‌ات را بساز تا اینجا نمایش داده شود."
    layout="vertical"
    size="medium"
    dir="rtl"
  >
    <template #primary-action>
      <NoratoButton label="ساخت پروژه" variant="primary" />
    </template>
    <template #secondary-action>
      <NoratoButton label="راهنما" variant="secondary" />
    </template>
  </NoratoEmptyState>
</template>
```

### راهنمای کاربرد

- متن عنوان بگوید چرا چیزی نمایش داده نمی‌شود؛ توضیح، قدم بعد را روشن کند.
- اکشن اصلی واضح و اختیاری است؛ از اکشن فرعی فقط برای مسیر کم‌اهمیت‌تر استفاده کن.
- برای هر استفاده `id` یکتا بده؛ کامپوننت آن را برای ارتباط نام و توضیح مصرف می‌کند.
- اکشن‌ها رفتار و مقصد ندارند مگر میزبان آن‌ها را تعیین کند.

## Accessibility

- ریشه یک `<section>` نام‌گذاری‌شده است و عنوان/توضیح با شناسه‌های مشتق از `id` به آن متصل‌اند.
- visual پیش‌فرض و slot سفارشی داخل ناحیهٔ `aria-hidden` قرار دارد؛ متن باید به‌تنهایی معنی کامل را منتقل کند.
- نقش `status` یا `alert` به محتوای ثابت تحمیل نمی‌شود؛ میزبان هنگام به‌روزرسانی پویا باید نیاز به live region را تعیین کند.
- اکشن‌های نمونه دکمهٔ native و نام‌دارند؛ میزبان برای لینک/دکمهٔ سفارشی باید نام دسترس‌پذیر و رفتار کیبوردی را حفظ کند.
- ساختار درخت دسترس‌پذیری مرورگر با API مرور می‌شود؛ این بررسی جای جلسهٔ مستقل screen reader را نمی‌گیرد.

## Tokens

از `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-text-secondary`، `--norato-color-brand-yellow`، `--norato-color-warning-container`، `--norato-color-success-container`، `--norato-color-error-container`، `--norato-color-status-success`، `--norato-color-status-warning`، `--norato-color-status-error`، `--norato-empty-state-visual-*`، `--norato-empty-state-icon-*`، `--norato-empty-state-art-*`، `--norato-empty-state-gap`، `--norato-empty-state-padding` و `--norato-empty-state-content-max` استفاده می‌شود.

## Responsive

در عرض‌های کمتر از 600px، layout افقی به چیدمان عمودی و وسط‌چین تبدیل می‌شود. در مرورگر Chromium و اندازه‌های 390×844 و 320×844، قاب inert با مرجع هم‌اندازه و به‌ترتیب 327×300px و 257×300px است. عرض سند محلی 375px و 305px باقی می‌ماند و overflow افقی ندارد.

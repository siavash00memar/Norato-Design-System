# Sidebar — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Adapted (adapter موجود است؛ DoD موبایل/مرورگر باز است)

## Preview
نمونهٔ بصری inert و محدود به قاب مستقل در ابتدای صفحه؛ playground اجرایی و مثال Vue جدا هستند.

## Overview
ناوبری کناری راست‌چین با هدر، بخش‌ها، پیوندهای آیکن‌دار، شمارنده، زیرپیوند و فوتر. Glass/Bar و expanded/collapsed. مرجع طراحی مرجع ترکیب است؛ رنگ و توکن‌ها از Norato می‌آیند.

## Anatomy
- Header: برند و slot فضای کاری
- Section Title: عنوان گروه
- Item: لینک، آیکن و شمارنده
- Active Indicator: نشانگر ۳px در لبهٔ راست
- Sub Item: پیوند فرزند با خط راهنما
- Footer: حساب یا slot مصرف‌کننده
- Mobile Trigger/Drawer: پنل modal راست‌چین با Reka Dialog

## Variants
- Sidebar: Style Glass/Bar × Collapsed false/true (۴)
- Sidebar Item: Collapsed false/true × Size Small/Medium × State Default/Hover/Active/Disabled/Focus (۲۰)
- Sidebar Sub Item: Size Small/Medium × State Default/Hover/Active/Focus (۸)
- Section Title: Collapsed false/true (۲)
- Header: Type Brand/Workspace × Collapsed false/true (۴)
- Footer: Type User/Card × Collapsed false/true (۴)
- مرجع مرجع طراحی مجموعاً ۴۲ حالت را در ۶ جزء ثبت می‌کند. Adapter فعلی زیرمجموعهٔ اجرایی اصلی را پوشش می‌دهد؛ ماتریس کامل هنوز DoD باز است.

## Parts

- Sidebar (4): Glass/Bar × expanded/collapsed.
- Item (20): collapsed × small/medium × default/hover/active/disabled/focus.
- Sub Item (8): small/medium × default/hover/active/focus.
- Section Title (2), Header Brand/Workspace (4), Footer User/Card (4).

## Sizes

Items and subitems use visually compact typography while preserving a 48px minimum hit target; the desktop rail is 72px and panel width 256px.

## States

Default, hover, active, disabled and focus for items; default, hover, active and focus for subitems. Adapter's state matrix is still under browser verification.

## Sizes and states
هدف تعاملی همهٔ لینک‌ها و دکمه‌ها حداقل ۴۸px است. Focus حلقهٔ ۲px با offset توکنی دارد. لینک غیرفعال focusable نیست. لینک جاری `aria-current="page"` دارد. در حالت collapsed نام از `aria-label` و title بومی در دسترس می‌ماند.

## API
`NoratoSidebar` از `id`, `sections`, `activeHref`, `collapsed`, `disabled`, `variant`, `brand`, `dir` پشتیبانی می‌کند. `v-model:collapsed` کنترل‌شده است و `navigate(item)` را منتشر می‌کند. هر section شامل `label` و `items` است؛ item شامل `label`, `href`, `icon`, `count`, `disabled`, `children` است. slotها: `brand`, `workspace`, `footer`. لینک‌ها anchor هستند و به router خاصی وابسته نیستند. عمق زیرمنو حداکثر دو سطح است.

## Responsive behavior
در عرض 700px و کمتر، کنترل ۴۸px بازکننده و Reka Dialog modal drawer نمایش داده می‌شود؛ Escape، بستن بیرون و مدیریت focus به Dialog سپرده می‌شود. اندازهٔ پنل با عرض viewport محدود می‌شود.

## Usage
```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NoratoSidebar, type NoratoSidebarSection } from '@norato/vue'
const collapsed = ref(false)
const activeHref = ref('/overview')
const sections: NoratoSidebarSection[] = [{ label: 'فضای کاری', items: [{ label: 'نمای کلی', href: '/overview', icon: '⌂' }] }]
</script>
<template><NoratoSidebar id="workspace-nav" v-model:collapsed="collapsed" :sections="sections" :active-href="activeHref" /></template>
```

## Usage guidance
- پرکاربردترین مسیرها را بالای گروه نگه دار.
- در حالت جمع‌شده آیکن باید قابل‌شناسایی باشد و نام دسترس‌پذیر بماند.
- بیشتر از دو سطح زیرمنو نساز.
- آیکن‌های مشابه را برای مقصدهای متفاوت تکرار نکن.

## Accessibility
Navigation از `nav` با نام دسترس‌پذیر استفاده می‌کند؛ لینک جاری `aria-current` دارد. دکمهٔ جمع‌کردن نام و `aria-expanded` دارد. Dialog موبایل focus trap/restore و Escape را مدیریت می‌کند. Focus ring بیرونی ۲px و targets حداقل ۴۸px هستند.

## Tokens
`--norato-color-surface-default`, `--norato-color-text-primary`, `--norato-color-brand-blue`, `--norato-color-info-container`, `--norato-color-focus-contrast`, `--norato-color-glass-line`, `--norato-control-target-min` و توکن‌های `--norato-sidebar-*`.

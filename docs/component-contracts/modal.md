# Modal — قرارداد کامپوننت نوراتو

**حوزه:** Overlays  
**وضعیت نوراتو:** Implemented

## Preview

نمونهٔ ثابت یک تأیید حذف با قاب و پس‌زمینهٔ تیره‌شده نمایش داده می‌شود. این بخش inert است و رفتار اجرایی را شبیه‌سازی نمی‌کند؛ ModalPlayground از adapterهای واقعی Vue استفاده می‌کند.

## Overview

`NoratoModal` پنجرهٔ عمومی برای فرم یا محتوای تکمیلی است و `NoratoDialog` گفت‌وگوی تأیید را با لحن‌های پیش‌فرض، موفقیت، هشدار و خطر آماده می‌کند. هر دو وضعیت `v-model:open` دارند و از primitiveهای Dialog در Reka برای portal، مهار focus و چرخهٔ بستن استفاده می‌کنند؛ سطح، ابعاد، رنگ‌ها و کنترل‌ها متعلق به Norato هستند.

## Anatomy

- **Overlay:** scrim نیمه‌شفاف با blur پشت پنجره.
- **Surface:** سطح شیشه‌ای محدود به عرض و ارتفاع viewport.
- **Title / Description:** عنوان لازم و توضیح اختیاری برای پنجرهٔ عمومی؛ عنوان و شرح لازم برای گفت‌وگوی تأیید.
- **Body:** slot محتوای آزاد؛ برای فرم از فیلدهای Norato استفاده کن.
- **Actions:** footer اختیاری در پنجرهٔ عمومی؛ دو action متوازن در Dialog با اقدام اصلی سمت چپ در RTL.
- **Close:** دکمهٔ بستن با هدف تعاملی ۴۸px؛ در Dialog تأیید حذف پیش‌فرض پنهان است.

## Variants

- **Modal:** اندازهٔ `small | medium | large`، عنوان/شرح، slot محتوای اصلی و footer اختیاری.
- **Dialog:** لحن `default | success | warning | danger`، اندازه‌های Modal و actionهای تأیید/انصراف.
- **Create Project:** نمونهٔ فرم کاربردی ساخته‌شده با `NoratoModal` و فیلدها و دکمه‌های Norato؛ variant مجزای adapter نیست.
- **Overlay:** لایهٔ پس‌زمینه در هر دو adapter مشترک است.

## Sizes

| اندازه | عرض بیشینه | رفتار روی viewport کوچک |
| --- | --- | --- |
| Small | `--norato-modal-width-small`، برابر ۳۸۴px | عرض viewport منهای ۳۲px |
| Medium | `--norato-modal-width-medium`، برابر ۴۸۰px | عرض viewport منهای ۳۲px |
| Large | `--norato-modal-width-large`، برابر ۶۴۰px | عرض viewport منهای ۳۲px |

Dialog با اندازهٔ Small از `--norato-modal-dialog-width-small`، برابر ۳۲۰px استفاده می‌کند؛ اندازه‌های Medium و Large عرض‌های جدول را می‌گیرند.

ارتفاع با محتوا رشد می‌کند تا سقف `--norato-modal-max-block-size`؛ بعد از آن محتوای پنجره پیمایش می‌شود. اندازهٔ پنجره از viewport بیرون نمی‌زند.

## States

- **Closed / Open:** Portal و focus lifecycle فقط با بازبودن پنجره فعال است.
- **Default / Hover / Focus:** کنترل‌های Norato از توکن‌های رنگ و focus زرد استفاده می‌کنند.
- **Disabled / Busy:** `confirmDisabled` و `busy` روی action تأیید اثر می‌گذارند؛ `busy` در Modal عمومی به `aria-busy` می‌رسد و در Dialog، تأیید قفل و بستن بیرونی/Escape غیرفعال می‌شود.
- **Dismissible:** با `dismissible=false` Escape و کلیک بیرون پنجره آن را نمی‌بندند؛ close button عمومی همچنان عمل مستقل و آشکار است.
- **Tone:** Dialog از رنگ معنایی موفقیت، هشدار یا خطا برای نشانهٔ وضعیت استفاده می‌کند؛ accent تعاملی زرد می‌ماند.

## Parts

- **NoratoModal:** `id`, `title`, `description?`, `size`, `dismissible`, `showClose`, `closeLabel`, `role`, `variant`, `busy`, `dir`; `v-model:open`; slotهای `default`, `title`, `description`, `footer`.
- **NoratoDialog:** `id`, `title`, `description`, `tone`, `size`, `confirmLabel`, `cancelLabel`, `confirmDisabled`, `busy`, `dismissible`, `dir`; `v-model:open`; eventهای `confirm` و `cancel`.
- `NoratoDialog` با تأیید، event `confirm` را منتشر می‌کند و پنجره را باز نگه می‌دارد تا میزبان بعد از پایان عملیات، `open` را ببندد؛ این امکان نمایش وضعیت busy را می‌دهد. انصراف `cancel` را منتشر و پنجره را می‌بندد.
- نقش accessibility برای Modal برابر `dialog` و برای تأیید برابر `alertdialog` است.

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NoratoButton, NoratoDialog } from '@norato/vue'

const open = ref(false)
function removeProject() {
  // حذف پروژه را در برنامه انجام بده و سپس open.value = false کن.
}
</script>

<template>
  <NoratoButton label="حذف پروژه" variant="destructive" @click="open = true" />
  <NoratoDialog
    id="delete-project"
    v-model:open="open"
    title="این پروژه حذف شود؟"
    description="همهٔ فایل‌ها برای همیشه پاک می‌شوند."
    tone="danger"
    confirm-label="حذف کن"
    @confirm="removeProject"
  />
</template>
```

- Modal را برای کار مشخص، فرم یا تصمیم برگشت‌پذیر بگشا؛ پیام کوتاه را inline یا با Toast نمایش بده.
- محتوا را کوتاه و قابل پیمایش نگه دار؛ Modal را داخل Modal باز نکن.
- عنوان را مستقل از شرح بنویس و action اصلی را با فعل روشن نام‌گذاری کن.
- در RTL، ترتیب DOM را انصراف سپس تأیید قرار بده تا دکمهٔ اصلی در سمت چپ دیده شود.
- مقدار `open` را برای بستن پس از موفقیت عملیات میزبان به‌روز کن.

## Accessibility

- `DialogTitle` عنوان دسترس‌پذیر فراهم می‌کند؛ شرح در صورت وجود از `DialogDescription` نام‌گذاری می‌شود.
- `NoratoDialog` نقش `alertdialog` و Modal عمومی نقش `dialog` می‌گیرد.
- Reka focus را داخل پنجره نگه می‌دارد، پس از بستن به opener بازمی‌گرداند، پس‌زمینه را از تعامل خارج می‌کند و مدیریت scroll صفحه را انجام می‌دهد.
- Escape و pointer بیرون به‌طور پیش‌فرض می‌بندند؛ `dismissible=false` این دو مسیر را متوقف می‌کند. دکمهٔ بستن عمومی مستقل باقی می‌ماند.
- کنترل‌های قابل فوکوس focus ring زرد دارند و target بستن حداقل ۴۸px است.
- RTL از `dir` به محتوای Dialog می‌رسد؛ ابعاد در عرض کم به viewport محدود می‌شود و محتوا پیمایش‌پذیر می‌ماند.
- نمایش ثابت درخت دسترس‌پذیری یا آزمون صفحه‌خوان را ثابت نمی‌کند؛ رفتار focus و dismiss در مرورگر باید هنگام DoD جداگانه بررسی شود.

## Tokens

- سطح و scrim: `--norato-color-glass-surface-strong`, `--norato-color-glass-line`, `--norato-color-scrim`.
- متن و حالت‌ها: `--norato-color-text-primary`, `--norato-color-text-secondary`, `--norato-color-brand-yellow`, `--norato-color-focus-ring`, `--norato-color-warning-container`, `--norato-color-success-container`, `--norato-color-error-container`, `--norato-color-status-warning`, `--norato-color-status-success`, `--norato-color-status-error`.
- ابعاد و هندسه: `--norato-modal-width-small`, `--norato-modal-width-medium`, `--norato-modal-width-large`, `--norato-modal-dialog-width-small`, `--norato-modal-max-block-size`, `--norato-radius-modal`, `--norato-layer-modal`, `--norato-elevation-modal`.
- فاصله و تایپوگرافی: `--norato-space-2`, `--norato-space-3`, `--norato-space-4`, `--norato-space-5`, `--norato-control-target-min`, `--norato-icon-sm`, `--norato-icon-md`, توکن‌های body و heading Norato.

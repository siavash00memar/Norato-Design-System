# Menu — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Implemented — adapter Vue وجود دارد؛ DoD بصری و مرورگر جداگانه ثبت می‌شود.

## Preview

نمونهٔ نمایشی در قاب خنثی و غیرفعال است؛ تعامل واقعی فقط در playground اجرا می‌شود.

## Overview

منوی اقدام شناور که با دکمهٔ سه‌نقطه باز می‌شود. این منو برای اقدام‌های ثانویهٔ همان بخش است، نه جایگزین اقدام اصلی صفحه یا ناوبری سایت. هر اقدام می‌تواند آیکن، توضیح، میانبر صفحه‌کلید یا زیرمنو داشته باشد. حذف از گروه اصلی جدا و آخر فهرست قرار می‌گیرد.

## Anatomy

- **Panel:** سطح شیشه‌ای شناور، محدود به عرض viewport.
- **Item:** ردیف اقدام با هدف تعاملی حداقل ۴۸px.
- **Icon:** آیکن تزئینی در سمت راست در RTL؛ کامپوننت Vue دلخواه مصرف‌کننده.
- **Description:** توضیح کوتاه اختیاری زیر عنوان ردیف.
- **Shortcut:** میانبر صفحه‌کلید در سمت چپ در RTL، با جهت LTR.
- **Submenu Trigger:** ردیف والد با فلش چپ در RTL و پنل فرزند.
- **Separator:** جداکنندهٔ معنایی برای گروه‌بندی.
- **Danger Item:** اقدام مخرب در انتهای منو با رنگ خطای معنایی.

## Variants

- **Action Menu:** اندازهٔ Small، Medium و Large.
- **Menu Item:** Type برابر Default یا Danger؛ حالت Default، Hover، Disabled و Focus. ردیف والد نیز می‌تواند زیرمنو باز کند.

## Sizes

- **Small:** متن کوچک؛ هدف تعاملی همچنان حداقل ۴۸px.
- **Medium:** اندازهٔ پیش‌فرض.
- **Large:** متن برجسته‌تر؛ اندازهٔ هدف تعاملی کمتر از ۴۸px نمی‌شود.

## States

- **Default:** پنل روشن شیشه‌ای و مرز خنثی.
- **Hover:** زمینهٔ زردِ ملایم Norato.
- **Focus:** نشانگر زرد ۲px با فاصلهٔ بیرونی؛ فوکوس با صفحه‌کلید از Hover قابل تشخیص است.
- **Disabled:** کم‌رنگ و غیرقابل انتخاب؛ از چرخهٔ فوکوس حذف می‌شود.
- **Danger:** متن قرمز معنایی؛ در hover از سطح خطای ملایم استفاده می‌کند.
- **Open:** وضعیت trigger در `aria-expanded` بازتاب دارد؛ dismiss و فوکوس را primitive مدیریت می‌کند.

## Parts

- **Action Menu:** پنل و trigger شناور.
- **Menu Item:** ردیف پایهٔ یک اقدام.
- **Submenu:** منوی تو‌در‌تو با جهت منطقی RTL/LTR.
- **Shortcut:** متن کوتاه LTR برای کلیدهای میانبر.
- **Danger Item:** ردیف مخرب انتهایی و جداشده.

## Usage

### راهنمای کاربرد Norato

- اقدام‌ها را بر اساس هدف گروه‌بندی کن.
- اقدام حذف را با جداکننده از گروه‌های دیگر جدا کن و آخر منو قرار بده.
- آیکن‌ها را به‌صورت کامپوننت Vue بفرست؛ آیکن‌ها تزئینی‌اند و خود adapter آن‌ها را از درخت دسترس‌پذیری پنهان می‌کند.
- `v-model:open` وضعیت پنل را کنترل می‌کند؛ `select(value)` فقط برای انتخاب leaf فعال منتشر می‌شود.
- parent دارای `children` فقط زیرمنو را باز می‌کند و `value` آن انتخاب نمی‌شود.

### محدودیت‌های کاربرد

- بیشتر از ۸ leaf action در یک منو نگذار.
- اقدام اصلی صفحه را در منو پنهان نکن.
- آیتم‌های بی‌عمل را با `disabled` علامت بزن؛ برای گروه‌بندی واقعی از separator استفاده کن.

### جهت RTL

- ترتیب داده، ترتیب خواندن و رندر را حفظ می‌کند.
- آیکن در inline-end و میانبر در inline-start است؛ فلش زیرمنو در RTL به چپ اشاره می‌کند.
- در LTR، جایگاه‌ها و جهت فلش با منطق چیدمان معکوس می‌شوند.

## Accessibility

- از Reka DropdownMenu برای `menu`/`menuitem`, حرکت با فلش‌ها، Home/End، typeahead، زیرمنو، Escape، خروج با Tab، dismiss بیرونی و بازگردانی فوکوس استفاده می‌شود.
- trigger نام دسترس‌پذیر مستقل دارد؛ `aria-expanded` و `aria-controls` با وضعیت پنل هماهنگ‌اند.
- آیکن‌ها تزئینی‌اند؛ نام اقدام از متن قابل مشاهده می‌آید.
- فوکوس صفحه‌کلید حلقهٔ ۲px زرد Norato با offset دارد. دکمهٔ مستقل trigger نیز فوکوس مشخص دارد.
- `disabled` از انتخاب و فوکوس آیتم جلوگیری می‌کند.
- نمایش ایستای قرارداد `inert` و بدون تعامل است.

## Tokens

- `--norato-color-glass-surface-strong`
- `--norato-color-glass-line`
- `--norato-color-text-primary`
- `--norato-color-text-secondary`
- `--norato-color-text-disabled`
- `--norato-color-border-default`
- `--norato-color-brand-yellow`
- `--norato-color-warning-container`
- `--norato-color-status-error`
- `--norato-color-error-container`
- `--norato-color-focus-ring`
- `--norato-menu-panel-inline-size`
- `--norato-menu-item-block-size`
- `--norato-menu-preview-frame-*`
- توکن‌های معنایی فاصله، اندازهٔ آیکن، شعاع، elevation و focus.

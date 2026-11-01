# Navbar — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Adapted — adapter اجرایی Vue منتشر شده؛ بررسی نهایی DoD مرورگری ادامه دارد.

## Preview

نمونهٔ بالای صفحه نمایش بصری و غیرفعال است؛ تغییر حالت و رفتار فقط در playground اجرایی زیر بخش Preview انجام می‌شود.

## Overview

هدر ناوبری راست‌به‌چپ با سه چیدمان دسکتاپ App، Website و Centered، سه سبک Bar، Floating و Transparent، نسخهٔ واکنش‌گرای موبایل، زیرمنوی چندستونه و drawer موبایل. پالت آبی/زرد و توکن‌های معنایی Norato حفظ می‌شوند.

## Anatomy

- **Brand** — نشان و نام در سمت راست؛ محتوای سفارشی از slot `brand`.
- **Nav Links** — پیوندهای اصلی، حالت صفحهٔ جاری، شمارنده و disclosure زیرمنو.
- **Actions** — slotهای `search`، `actions` و `avatar` در سمت چپ.
- **Mobile Header** — یکی از Default، Back، Search یا Large Title همراه منوی موبایل.
- **Mega Menu** — گروه پیوندهای فرزند با صفحه‌کلید وب و جهت RTL.
- **Mobile Menu** — drawer مودال دارای focus management و بستن با Escape.

## Variants

- **Navbar (۹):** Type: App، Website، Centered × Style: Bar، Floating، Transparent.
- **Navbar Mobile (۸):** Type: Default، Back، Search، Large Title × Style: Bar، Transparent.
- **Nav Link (۲۰):** Style: Pill، Underline × Size: Small، Medium × State: Default، Hover، Active، Disabled، Focus.
- **Brand (۲):** Size: Small، Medium.
- **Mega Menu (۱)** و **Mobile Menu (۱)** بر اساس قرارداد مرجع.
- مجموع خانواده: ۴۱ حالت ترکیبی مرجع؛ playground ورودی‌های اصلی را قابل تغییر می‌کند.

## Sizes

- Nav Link: Small یا Medium؛ هر پیوند تعاملی حداقل ارتفاع ۴۸px دارد.
- Brand: Small یا Medium؛ اندازهٔ نشان intrinsic می‌ماند.
- Drawer حداکثر در عرض viewport محدود می‌شود؛ قاب/لوگو و متن در ستون محتوا کشیده نمی‌شوند.

## States

- Nav Link: Default، Hover، Active، Disabled، Focus.
- Navbar: فعال، Disabled و حالت‌های باز/بستهٔ زیرمنو و drawer.
- Search موبایل مقدار controlled دارد. Back رویداد `back` را منتشر می‌کند.
- لینک بدون `href` به‌صورت غیرفعال نمایش داده می‌شود؛ `activeHref` یا `current` وضعیت فعلی را تعیین می‌کند.

## Parts

### `NoratoNavbar`

Props: `id` (اجباری)، `links`، `type` (`app|website|centered`)، `style` (`bar|floating|transparent`)، `mobileType` (`default|back|search|large-title`)، `mobileStyle` (`bar|transparent`)، `linkStyle` (`pill|underline`)، `linkSize` (`small|medium`)، `brand`، `brandHref`، `activeHref`، `mobileTitle`، `search`، `searchPlaceholder`، `navigationLabel`، `mobileNavigationLabel`، `disabled` و `dir`.

`NoratoNavbarLink`: `label`، `href?`، `icon?`، `count?`، `current?`، `disabled?` و `children?: NoratoNavbarLink[]`.

`v-model:search` مقدار جست‌وجوی موبایل را کنترل می‌کند. رویدادها: `update:search(value)`، `back` و `navigate(item)`. Slotها: `brand`، `search`، `actions`، `avatar`، `mobile-actions`، `mobile-title-actions` و `mobile-search`.

چیدمان دسکتاپ با Reka NavigationMenu و منوی موبایل با Reka Dialog اجرا می‌شود. وب‌سایت از نقش `menubar` استفاده نمی‌کند. Adapter مسیریابی یا مقصد فرضی ایجاد نمی‌کند.

## Usage

### راهنمای کاربرد Norato

- تعداد پیوندها را به ۵ تا ۷ محدود کن و صفحهٔ جاری را با `current` یا `activeHref` مشخص کن.
- برای گروه‌های فرزند، `children` بده؛ برای محتوای اپلیکیشن از slotهای اکشن استفاده کن.
- سبک Transparent را فقط روی پس‌زمینه‌ای انتخاب کن که کنتراست متن را حفظ کند.
- جزئیات مسیر Vue در [نمونهٔ کپی‌پذیر `apps/vue/src/usage-examples.ts`](../../apps/vue/src/usage-examples.ts) است.

### محدودیت‌ها

- Router، احراز هویت، دادهٔ اعلان و جست‌وجوی شبکه در اختیار برنامهٔ میزبان است.
- `style="bar"` sticky است و داخل ظرف scroll‌شونده ممکن است به context والد وابسته باشد.

### جهت RTL

پیش‌فرض `dir="rtl"` است: Brand راست، پیوندها پس از آن و اکشن‌ها چپ. URL و شمارندهٔ فنی LTR باقی می‌مانند.

## Accessibility

NavigationMenu نقش navigation، مدیریت focus و پیمایش صفحه‌کلید وب را فراهم می‌کند. لینک صفحهٔ جاری `aria-current="page"` دارد؛ پیوندهای disabled یا بی‌مقصد tab نمی‌گیرند. drawer عنوان/شرح نام‌گذاری‌شده، focus containment و بستن با Escape را از Dialog دریافت می‌کند. همهٔ هدف‌ها حداقل ۴۸×۴۸px و focus ring قابل‌مشاهده دارند. رفتار motion با `prefers-reduced-motion` محدود می‌شود.

این قرارداد جای آزمون مستقل صفحه‌خوان را نمی‌گیرد.

## Tokens

Surface، border، متن، برند، focus، شعاع، سایه و فاصله از توکن‌های semantic/layout Norato مصرف می‌شوند. نسبت قاب، عرض drawer/مگامنو و گرید preview توکن component-specific دارند. Lemon فقط منبع composition است؛ رنگ انتخاب و برند همان Norato می‌ماند.

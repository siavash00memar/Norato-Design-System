# Avatar — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت adapter:** Adapted؛ چهار adapter Vue موجودند، اما DoD بصری و screen reader هنوز باز است.

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

نمایش کاربر با عکس، حروف اول یا آیکن؛ از ۲۴ تا ۶۴ پیکسل، به‌همراه گروه، نام و وضعیت حضور. اندازه‌های میانی مرجع طراحی در متن صفحه جداگانه عددگذاری نشده‌اند؛ مقیاس Norato به‌صورت صریح ۲۴/۳۲/۴۰/۴۸/۵۶/۶۴px انتخاب شده است.

### API اجرایی Vue

- NoratoAvatar: name، type (image|initials|icon)، src، initials، size (xs|s|m|l|xl|2xl)، shape (circle|square)، status (none|online|busy|away|offline)، dir و decorative.
- NoratoAvatarGroup: آرایهٔ items با id/name و مقادیر اختیاری src/initials، اندازهٔ s|m|l|xl، max از ۳/۴/۵، نام دسترس‌پذیر label و dir. آیتم گروه وضعیت حضور مستقل ندارد.
- NoratoAvatarLabel: name، description، دادهٔ عکس/حروف، size از s|m|l، shape، status و dir.
- NoratoAvatarStatus: یکی از چهار status؛ برچسب فارسی قابل جایگزینی با label. نقطه همراه متن دیده می‌شود تا معنا فقط با رنگ منتقل نشود.

## Anatomy

- **Ring** — حلقه‌ی ۲ پیکسلی سطح
- **Body** — عکس، حروف یا آیکن
- **Status** — نقطه‌ی حضور پایین-چپ
- **Label** — اسم و توضیح

## Variants

- **Avatar (36 variant):** Type: Image، Initials، Icon؛ Size: XS، S، M، L، XL، 2XL؛ Shape: Circle، Square
- **Avatar Group (12 variant):** Size: S، M، L، XL؛ Max: 3، 4، 5
- **Avatar Label (3 variant):** Size: S، M، L
- **Avatar Status (4 variant):** Status: Online، Busy، Away، Offline

## Sizes

- Avatar: XS، S، M، L، XL و 2XL؛ بازهٔ کلی 24–64px (اندازهٔ جداگانهٔ هر نام در دادهٔ متن صفحه ارائه نشده است).
- نگاشت Norato: XS 24px، S 32px، M 40px، L 48px، XL 56px، 2XL 64px. این نگاشت برای فاصلهٔ ۸px بین شش اندازه، تصمیم اجرایی نوراتو است.
- Group: S/M/L/XL به‌ترتیب از اندازه‌های 32/40/48/56px استفاده می‌کنند. max تعداد آواتارهای اشخاص است؛ نشانگر +N در صورت وجود نفرات بیشتر، جداگانه نمایش داده می‌شود.

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Avatar — 36 variant:** آواتار در ۶ اندازه. ابعاد/حالت‌ها: Type: Image، Initials، Icon؛ Size: XS، S، M، L، XL، 2XL؛ Shape: Circle، Square
- **Avatar Group — 12 variant:** چند آواتار روی هم. ابعاد/حالت‌ها: Size: S، M، L، XL؛ Max: 3، 4، 5
- **Avatar Label — 3 variant:** آواتار با اسم و توضیح. ابعاد/حالت‌ها: Size: S، M، L
- **Avatar Status — 4 variant:** نقطه‌ی وضعیت حضور. ابعاد/حالت‌ها: Status: Online، Busy، Away، Offline

## Usage

### راهنمای کاربرد Norato

- اگه عکس نیست یا بارگیری آن شکست خورد، از حروف اول استفاده می‌شود.
- در گروه، حداکثر ۵ نفر نشون بده.

### محدودیت‌های کاربرد

- بیشتر از دو حرف نذار.
- وضعیت حضور رو فقط با رنگ نشون نده.

### جهت RTL

در گروه، نفر اول سمت راسته و «+N» سمت چپ. نقطه‌ی وضعیت پایین-چپ.

## Accessibility

اسم کاربر، نام دسترس‌پذیر تصویر است و در صورت وجود وضعیت روی Avatar مستقل، متن وضعیت هم به آن افزوده می‌شود. حالت decorative برای Avatar داخل Label/Group یا کنار نامی که قبلاً خوانده می‌شود، تکرار را حذف می‌کند. Avatar Group نام گروه و نام هر عضو را به درخت دسترس‌پذیری می‌دهد؛ +N هم نام تعداد افراد پنهان‌شده را دارد. Avatar Label وضعیت را جداگانه با نقطه و متن نشان می‌دهد؛ Avatar Status نیز متن دیداری و نام دسترس‌پذیر دارد.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-surface-subtle`، `--norato-color-warning-container`، `--norato-color-text-primary`، `--norato-color-text-secondary`، `--norato-color-status-success`، `--norato-color-status-warning`، `--norato-color-status-error`، `--norato-color-status-neutral`، `--norato-avatar-size-*`، `--norato-avatar-initials-size-*`، `--norato-avatar-ring-width` و `--norato-avatar-status-size`.

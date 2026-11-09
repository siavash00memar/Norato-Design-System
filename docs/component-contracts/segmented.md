# Segmented Control — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Adapted — بررسی کامل DoD ادامه دارد

## Preview

یک Segmented Control سه‌گزینه‌ای با گزینهٔ اول در سمت راست، انتخاب پیش‌فرض برجسته و marker کوچک Default در قاب dotted-glass نمایش داده می‌شود. نمونه inert است؛ Playground پایین صفحه نمونهٔ واقعی را کنترل می‌کند.

## Overview

برای جابه‌جایی بین ۲ تا ۴ نمای مرتبط از همان محتوا به کار می‌رود. سبک Glass انتخاب را روی سطح سفید و برجسته می‌کند؛ سبک Contrast از زرد برند Norato با متن تیره استفاده می‌کند. کنترل انتخاب تکی و controlled است و همیشه یک مقدار معتبر نگه می‌دارد.

## Anatomy

- **Track** — سطح شیشه‌ای کم‌رنگ نگه‌دارندهٔ گزینه‌ها
- **Selected Segment** — گزینهٔ انتخاب‌شده با سطح برجستهٔ سفید در Glass یا پس‌زمینهٔ زرد Norato با متن تیره در Contrast
- **Segment** — دکمهٔ گزینه با label و آیکن اختیاری
- **Icon** — کامپوننت آیکن اختیاری پیش از label

## Variants

- **Segmented Control (24 variant):** Style: Glass، Contrast؛ Size: Small، Medium، Large، XLarge؛ Items: 2، 3، 4.
- **Segment Item (64 variant):** Style: Glass، Contrast؛ Size: Small، Medium، Large، XLarge؛ Selected: false، true؛ State: Default، Hover، Disabled، Focus.

گالری Variants صفحه هر ۶۴ ترکیب Segment Item را در هشت کارت Style×Size نشان می‌دهد. این ماتریس برای مقایسهٔ بصری است، `inert` و از درخت دسترس‌پذیری کنار گذاشته شده؛ تعامل واقعی فقط در Playground اجرا می‌شود. در سبک Contrast، انتخاب‌شده زرد و متن تیره است؛ Disabled اولویت سطح و متن خنثی دارد؛ Focus حلقهٔ کنتراست‌دار را نشان می‌دهد.

## Sizes

مرجع مرجع طراحی اندازه‌های بصری ۳۲، ۴۰، ۴۸ و ۵۶px را ثبت می‌کند. Norato برای کنترل تعاملی حداقل هدف ۴۸px را حفظ می‌کند؛ Small، Medium و Large هدف ۴۸px و XLarge هدف ۵۶px دارد. متن و فاصلهٔ افقی بین اندازه‌ها تغییر می‌کند؛ متن به‌ترتیب ۱۲، ۱۳، ۱۴ و ۱۶px است.

## States

- **Default:** گزینه‌ها در track شیشه‌ای؛ مقدار controlled مشخص است.
- **Selected:** Glass سفید و برجسته؛ Contrast زرد برند با متن تیره، در سکون و Hover.
- **Hover:** متن گزینهٔ قابل‌تعامل با رنگ برند مشخص می‌شود.
- **Disabled:** کنترل یا گزینهٔ خاص غیرقابل‌تعامل و با متن خنثی نمایش داده می‌شود. Disabled بر Selected اولویت دارد؛ گزینهٔ انتخاب‌شدهٔ غیرفعال در هر دو سبک سطح خنثی، متن غیرفعال و بدون elevation دارد. زرد Contrast فقط برای انتخاب فعال است.
- **Focus:** حلقهٔ بیرونی ۲px برای گزینهٔ دارای focus-visible.

## Parts

- **Segmented Control — 24 variant:** گروه دکمه‌های انتخاب تکی با Style، Size و تعداد ۲ تا ۴.
- **Segment Item — 64 variant:** دکمهٔ دارای مقدار، label، آیکن اختیاری، disabled اختیاری و وضعیت pressed.

## Usage

### راهنمای کاربرد Norato

- labelها را کوتاه و تقریباً هم‌طول نگه دار.
- از آن برای تغییر نمای همان محتوا استفاده کن؛ گزینهٔ اول در RTL سمت راست است.

### محدودیت‌های کاربرد

- بیشتر از چهار گزینه را به Tabs بسپار.
- برای رفتن به صفحه‌های مستقل از آن استفاده نکن.
- برای انتخاب چندگانه از checkbox یا الگوی چندانتخابی مناسب استفاده کن.

### API اجرایی

`NoratoSegmentedControl` از `id`، `label`، `items`، `modelValue`، `style`، `size` و `disabled` استفاده می‌کند. هر item دارای `value` و `label` و به‌صورت اختیاری `icon` و `disabled` است. نمونه در Vue با `v-model` کنترل می‌شود.

## Accessibility

Reka `ToggleGroupRoot` و `ToggleGroupItem` را با `type="single"`، `dir="rtl"` و فوکوس چرخشی استفاده می‌کند. آیتم‌ها دکمه با `aria-pressed` هستند؛ Tab گروه را وارد می‌کند، کلیدهای جهت فوکوس را جابه‌جا می‌کنند، Home/End به ابتدا/انتها می‌روند و Space/Enter انتخاب می‌کنند. هر دکمه هدف حداقل ۴۸px دارد. حلقهٔ focus-visible دوپیکسلی است.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

از `--norato-color-glass-surface`، `--norato-color-surface-default`، `--norato-color-brand-yellow`، `--norato-color-text-primary`، `--norato-color-warning-container`، `--norato-color-info-container`، `--norato-color-border-default`، `--norato-color-focus-contrast`، `--norato-color-focus-ring`، توکن‌های spacing، `--norato-radius-pill`، `--norato-elevation-box` و `--norato-control-target-min` استفاده می‌شود. ابعاد قاب و XLarge از توکن‌های `--norato-segmented-preview-*` و `--norato-segmented-xlarge-visual-block-size` می‌آیند.

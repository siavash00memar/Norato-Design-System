# Chip — قرارداد کامپوننت نوراتو

## Overview

Chip برای انتخاب فیلتر یا نمایش برچسب ورودیِ قابل‌حذف است. این دو کاربرد با `mode="filter"` و `mode="input"` از هم جدا می‌شوند. ظاهر انتخاب‌شده از سطح زرد ملایم و Stroke زرد استفاده می‌کند؛ پرکردگی مشکی یا Accent آبی ندارد.

## Anatomy

- **Filter container:** دکمهٔ native با هدف صفحه‌کلیدی حداقل ۴۸ پیکسل؛ کپسول دیداری اندازهٔ مستقل دارد.
- **Leading icon:** آیکن تزئینی اختیاری در slot به همین نام؛ در حالت انتخاب‌شده اگر آیکن سفارشی نفرستی تیک نمایش داده می‌شود.
- **Label:** متن کوتاه و ضروری از prop به نام `label`؛ متن بلند بریده می‌شود و اندازهٔ Chip را نمی‌کشد.
- **Remove:** فقط در mode ورودی؛ دکمهٔ مستقل با نام دسترس‌پذیر `حذف {label}` و رویداد `remove`.

## Variants

- Mode: `filter` یا `input`.
- Filter: انتخاب کنترل‌شده از طریق `v-model`; فعال‌سازی native دکمه با Space یا Enter کار می‌کند.
- Input: برچسب غیرقابل‌انتخاب با دکمهٔ حذف مستقل.
- Unselected: سطح شیشه‌ای سفید و Stroke خنثی `#E8E8E8`.
- Hover و Selected: سطح زرد کم‌رنگ و Stroke زرد Norato.
- Disabled: سطح خنثی و بدون تعامل؛ فوکوس زرد ۲ پیکسلی در حالت فعال.

## Sizes

| Size | ارتفاع دیداری حداقل |
| --- | ---: |
| Small | 24px |
| Medium | 28px |
| Large | 32px |
| XLarge | 36px |

ارتفاع دکمهٔ فیلتر و هدف حذف حداقل ۴۸ پیکسل می‌ماند؛ کپسول دیداری فشرده است.

## States

- Filter: default، hover، selected، disabled و focus.
- Input: default و disabled؛ حذف فقط در دسترس بودن دکمهٔ حذف را کنترل می‌کند.
- State انتخاب از `modelValue` می‌آید و `aria-pressed` را همگام نگه می‌دارد.

## Parts

- `NoratoChip` props: `label` ضروری، `mode`, `modelValue`, `disabled`, `size`, `dir`.
- Events: `update:modelValue` برای filter؛ `remove(label)` برای input.
- Slot اختیاری `leadingIcon` تزئینی است و با `aria-hidden` پنهان می‌شود.
- Size tokens: `--norato-chip-height-small`, `--norato-chip-height-medium`, `--norato-chip-height-large`, `--norato-chip-height-xlarge`.

## Usage

- برای فیلترهای قابل‌ترکیب از mode فیلتر استفاده کن؛ Chip را جای دکمهٔ اقدام نگذار.
- برای برچسبِ داخل فرم یا چندانتخابی از mode ورودی استفاده کن و state حذف را در برنامه به‌روز کن.
- متن را کوتاه نگه دار و حذف را با رنگ یا آیکن تنها توضیح نده.
- RTL پیش‌فرض است؛ آیکن آغاز در راست و دکمهٔ حذف در چپ قرار می‌گیرد.

نمونهٔ اجرایی و کد قابل‌کپی در playground همین صفحه قرار دارد.

## Accessibility

- Filter یک `<button>` واقعی با `aria-pressed`, disabled native و هدف حداقل ۴۸ پیکسل است.
- دکمهٔ حذف در mode ورودی ۴۸×۴۸ پیکسل و نامش «حذف {label}» است.
- Focus هر دو دکمه با Stroke/حلقهٔ ۲ پیکسلی زرد دیده می‌شود.
- آیکن تزئینی وارد نام دسترس‌پذیر نمی‌شود؛ متن label معنای انتخاب را فراهم می‌کند.

## Tokens

ارتفاع‌های دیداری از توکن‌های اختصاصی Chip، هدف از `--norato-control-target-min`، رنگ‌ها از توکن‌های سطح/متن/مرز/زرد/زرد ملایم، و شکل و فاصله از توکن‌های Norato می‌آیند. در این قرارداد رنگ آبی به‌عنوان Accent Chip استفاده نمی‌شود.

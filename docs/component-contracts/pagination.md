# Pagination — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Adapted

## Preview

نمونهٔ بالای صفحه فقط ظاهر را نشان می‌دهد و inert است؛ تغییر صفحه فقط در playground و adapter اجرایی انجام می‌شود.

## Overview

Pagination برای حرکت میان صفحات یک فهرست محدود است. حالت Numbers صفحه‌ها و فاصله‌های حذف‌شده را نشان می‌دهد؛ حالت Simple خلاصهٔ «صفحهٔ X از Y» را با قبلی/بعدی ارائه می‌کند.

## Anatomy

- **Previous:** رفتن به صفحهٔ قبلی؛ در RTL سمت راست.
- **Page Item:** دکمهٔ صفحه با برچسب صفحه‌خوان «صفحهٔ X».
- **Selected:** صفحهٔ جاری با `aria-current="page"`.
- **Ellipsis:** نشانهٔ غیرتعاملی صفحه‌های پنهان‌شده.
- **Next:** رفتن به صفحهٔ بعد؛ در RTL سمت چپ.

## Variants

- **Pagination (4 variant):** Type: Numbers، Simple؛ Size: Small، Medium.
- **Page Item (14 variant):** Type: Number، Ellipsis؛ Size: Small، Medium؛ State: Default، Hover، Selected، Disabled، Focus.

این قرارداد تعداد ۱۸ ترکیب مرجع طراحی را نگه می‌دارد. adapter همهٔ دکمه‌های تعاملی را حداقل ۴۸px می‌سازد؛ اندازهٔ Small فقط ظاهر متن/فاصله را کوچک می‌کند.

## Sizes

Small و Medium؛ هر دو با هدف تعاملی حداقل ۴۸px.

## States

صفحهٔ عادی، hover، صفحهٔ انتخاب‌شده، دکمهٔ قبلی/بعدی غیرفعال در ابتدا/انتها، و focus-visible با حلقهٔ دوپیکسلی.

## Parts

- **Pagination:** ظرف `nav` نام‌دار با Numbers یا Simple.
- **Page Item:** دکمهٔ عددی با مقدار صفحه و برچسب «صفحهٔ X».
- **Ellipsis:** علامت غیرتعاملی، بدون فوکوس.
- **Previous/Next:** دکمه‌های مرزی که در صفحهٔ اول/آخر واقعاً disabled هستند.

در Numbers همهٔ صفحه‌ها تا هفت صفحه دیده می‌شوند. برای تعدادهای بیشتر، صفحهٔ اول و آخر و یک همسایه پیرامون صفحهٔ جاری نشان داده می‌شود؛ فاصلهٔ حذف‌شده با ellipsis مشخص می‌شود. Simple برای فضاهای کوچک و موبایل مناسب است.

## Usage

- تعداد کل صفحه‌ها را مشخص کن.
- برای فهرست محدود از Pagination و برای فید بی‌نهایت از الگوی Load More استفاده کن.
- برای صفحه‌های زیاد، همهٔ شماره‌ها را یک‌جا نمایش نده.
- در موبایل Simple را ترجیح بده.

## Accessibility

ظرف `nav` نام دارد. هر شماره با برچسب فارسی «صفحهٔ X» خوانده می‌شود و صفحهٔ فعال `aria-current="page"` دارد. دکمه‌های قبلی و بعدی به‌ترتیب نام ثابت «رفتن به صفحهٔ قبلی» و «رفتن به صفحهٔ بعدی» دارند تا در مرزها مقصد نامعتبر اعلام نشود. Ellipsis تزئینی و غیرتعاملی است. قبلی/بعدی در ابتدا/انتها disabled هستند و صفحه‌های بعدی را با Enter/Space فعال می‌کنند. حلقهٔ فوکوس Norato واضح است.

## Tokens

صفحهٔ جاری از accent زرد Norato با متن تیره استفاده می‌کند؛ آبی برای لینک و معنای اطلاعاتی حفظ می‌شود. از توکن‌های semantic Norato برای رنگ زرد/آبی، سطح، متن، disabled، مرز، focus، فاصله، شعاع، تایپوگرافی و حداقل اندازهٔ هدف استفاده می‌شود.

### Interactive documentation preview

The Button-shaped Pagination page includes an inert preview, a live controlled playground for type, size and page bounds, and copyable Vue usage. Controls and page targets keep the 48px Norato minimum.

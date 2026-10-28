# Component Contracts

این فهرست شامل مستند مستقل هر یک از ۴۹ کامپوننت است. هر فایل، مسیر و نمونه فقط به همان کامپوننت تعلق دارد.

کاتالوگ تایپ‌شدهٔ metadata شامل شناسه، مسیر، برچسب جست‌وجو، بلوغ و ارجاع به adapter در `packages/components/src/catalog.ts` نگه‌داری می‌شود. متن کامل قرارداد در همین فایل‌های مستقل مرجع است؛ آن را در کاتالوگ کپی نکنید. راهنمای فیلدها و import برای Vue: [داده‌های کامپوننت نوراتو](../../packages/components/README.md).

- قرارداد هر کامپوننت شامل Overview، Anatomy، Variants، Sizes، States، Parts، Usage، Accessibility و Tokens است.
- جزئیات نامشخص با عبارت «در قرارداد Norato مشخص نشده است» علامت‌گذاری می‌شوند.
- توکن‌های هر صفحه بر پایهٔ نقش‌های semantic نوراتو نوشته شده‌اند.
- هر صفحه و کارت فهرست نمونهٔ بصری مختص همان کامپوننت دارد؛ نمونه‌های نمایشی به‌تنهایی به معنی API اجرایی نیستند.
- `Implemented` یعنی adapter اجرایی Vue در workspace موجود است؛ API و محدودیت‌های آن در صفحهٔ همان کامپوننت آمده است.
- `Adapted` یعنی الگو با primitiveهای فعلی Norato قابل ساخت است، اما adapter مستقل ندارد.
- `Proposed` یعنی قرارداد و نمونه وجود دارد، اما API اجرایی Vue هنوز آماده نیست.
- packageهای خصوصی `@norato/vue` و `@norato/tokens` در همین workspace قابل استفاده‌اند.
- فهرست API: [Vue adapters](../../packages/vue/src/components/README.md) و [راهنمای تیم Vue](http://localhost:5173/#team).

## Actions — صفحه‌های مستقل

- [Button](./button.md)
- [Split Button](./split-button.md)

## Forms & Inputs — صفحه‌های مستقل

- [Input](./input.md)
- [Select](./select.md)
- [Combobox](./combobox.md)
- [Checkbox](./checkbox.md)
- [Radio Button](./radio-button.md)
- [Switch](./switch.md)
- [Segmented Control](./segmented-control.md)
- [Range](./range.md)
- [Rating](./rating.md)
- [Date Picker](./date-picker.md)
- [Time Picker](./time-picker.md)
- [File Upload](./file-upload.md)

## Navigation — صفحه‌های مستقل

- [Navbar](./navbar.md)
- [Sidebar](./sidebar.md)
- [Tabs](./tabs.md)
- [Breadcrumbs](./breadcrumbs.md)
- [Pagination](./pagination.md)
- [Stepper](./stepper.md)
- [Menu](./menu.md)
- [Command Palette](./command-palette.md)
- [Tree View](./tree-view.md)

## Feedback & Status — صفحه‌های مستقل

- [Alert](./alert.md)
- [Banner](./banner.md)
- [Toast](./toast.md)
- [Tooltip](./tooltip.md)
- [Progress](./progress.md)
- [Spinner](./spinner.md)
- [Skeleton](./skeleton.md)
- [Empty State](./empty-state.md)
- [Notification Center](./notification-center.md)
- [Badge](./badge.md)

## Data Display — صفحه‌های مستقل

- [Table](./table.md)
- [List](./list.md)
- [Card](./card.md)
- [Tag](./tag.md)
- [Chip](./chip.md)
- [Avatar](./avatar.md)
- [Timeline](./timeline.md)
- [Charts](./charts.md)
- [Divider](./divider.md)
- [Accordion](./accordion.md)

## Overlays — صفحه‌های مستقل

- [Modal](./modal.md)
- [Drawer](./drawer.md)
- [Popover](./popover.md)

## Media & Chat — صفحه‌های مستقل

- [Image](./image.md)
- [Carousel](./carousel.md)
- [Chat](./chat.md)

# Sidebar Specification

## Acceptance contract
یک صفحهٔ مستقل هم‌ساختار Button: پیش‌نمایش بصری محدود و inert، playground اجرایی، نمونهٔ قابل‌کپی، و بخش‌های قرارداد. مطابق Lemon: header (brand/workspace)، عنوان بخش، لینک‌های آیکن‌دار با شمارنده، active indicator لبهٔ راست، footer user/card؛ حالت Glass/Bar و expanded/collapsed. پالت Norato حفظ شود.

## API decisions
`NoratoSidebar`: `id`, `sections`, `activeHref`, `collapsed` و `disabled`؛ `v-model:collapsed`; emits `navigate(item)`; slots `brand`, `workspace`, `footer`. Item includes label, href, icon, count, disabled, children; section includes label and items. Maximum two child levels. Collapse uses tooltip via accessible label/title. Mobile modal drawer below 700px with Reka Dialog; panel remains bounded. Links remain anchors and never assume router.

## Responsive and accessibility
RTL/default Persian. Desktop inline-end/right. 48px target for actions, aria-current page for active link, buttons for collapsible groups, focus-visible 2px Norato ring. Mobile opens from a labeled trigger; Dialog manages focus, Escape and outside close. Collapsed labels remain available to assistive technology.

## Out of scope
Routing integration, permission model, remote workspace switching, persistence, more than two nested levels.

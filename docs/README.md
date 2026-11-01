# Norato Documentation

The Vue app at `apps/vue` is the local Norato design system surface. It provides foundations, team adoption guidance, a 49-component inventory, and an independent route, contract, and specimen for each component. It uses Norato yellow/blue semantic roles and distinguishes Implemented, Adapted, Proposed, and Deferred maturity. The “راهنمای تیم Vue” route explains workspace imports, token setup, RTL, adapter limitations, and the Spec Kit contribution/validation workflow. Private workspace packages `@norato/vue` and `@norato/tokens` are available for repository-local use.

## استفاده با عامل‌های هوش مصنوعی

Skill قابل‌ردیابی مخزن در [`skills/norato-design-system/SKILL.md`](../skills/norato-design-system/SKILL.md) قرار دارد. آن را به‌عنوان دستورالعمل محلی عامل کدنویس نصب یا به context آن اضافه کنید. این فایل عامل را به قرارداد مستقل همان کامپوننت، API واقعی Vue، توکن‌ها و وضعیت آمادگی ارجاع می‌دهد؛ وجود قرارداد برای هر ۴۹ مورد به معنی پیاده‌سازی اجرایی همهٔ آن‌ها نیست.

برای پیدا کردن و استفاده از یک کامپوننت، نقطهٔ شروع [کاتالوگ کامپوننت‌ها](../packages/components/src/catalog.ts) و [فهرست قراردادها](./component-contracts/README.md) است. بسته‌های Vue و token فعلاً خصوصی و workspace-only هستند؛ مصرف‌کننده باید مخزن را clone کند و وابستگی‌ها را از workspace نصب کند.

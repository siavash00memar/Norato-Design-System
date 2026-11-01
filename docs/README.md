# Norato Documentation

The Vue app at `apps/vue` is the local Norato design system surface. It provides foundations, team adoption guidance, a 49-component inventory, and an independent route, contract, and specimen for each component. It uses Norato yellow/blue semantic roles and distinguishes Implemented, Adapted, Proposed, and Deferred maturity. The “راهنمای تیم Vue” route explains workspace imports, token setup, RTL, adapter limitations, and the Spec Kit contribution/validation workflow. Private workspace packages `@norato/vue` and `@norato/tokens` are available for repository-local use.

## استفاده با عامل‌های هوش مصنوعی

Skill قابل‌ردیابی مخزن در [مسیر Codex پروژه](../.agents/skills/norato-design-system/SKILL.md) و [مسیر عمومی Agent Skills](../skills/norato-design-system/SKILL.md) قرار دارد. مسیر Codex برای کشف خودکار از checkout اضافه شده است؛ هر دو نسخه باید همگام بمانند. این دستورالعمل عامل را به قرارداد مستقل همان کامپوننت، API واقعی Vue، توکن‌ها و وضعیت آمادگی ارجاع می‌دهد؛ وجود قرارداد برای همهٔ موارد کاتالوگ به معنی پیاده‌سازی اجرایی همه نیست.

برای پیدا کردن و استفاده از یک کامپوننت، نقطهٔ شروع [کاتالوگ کامپوننت‌ها](../packages/components/src/catalog.ts) و [فهرست قراردادها](./component-contracts/README.md) است. بسته‌های Vue و token فعلاً خصوصی و workspace-only هستند؛ مصرف‌کننده باید مخزن را clone کند و وابستگی‌ها را از workspace نصب کند.

### نصب skill برای Codex یا عامل‌های سازگار با قالب Agent Skills

پس از clone کردن مخزن، Codex skill را از `.agents/skills/norato-design-system/SKILL.md` همان پروژه می‌خواند. برای سایر عامل‌های سازگار با Agent Skills، پوشهٔ `skills/norato-design-system` را به مسیر skill محلی آن‌ها اضافه کنید یا فایل را به context عامل بدهید. عامل باید به checkout همین مخزن دسترسی داشته باشد، چون catalog، قراردادها، سورس و پکیج‌ها را زنده از آن می‌خواند.

این skill راهنمای استفاده و توسعه است، نه پکیج مستقل یا تضمین صحت خودکار. برای اجرای کامپوننت‌ها باید از ریشهٔ repository دستورهای `pnpm install` و سپس `pnpm --filter @norato/vue-app dev` را اجرا کرد. بسته‌های `@norato/vue` و `@norato/tokens` در حال حاضر در npm عمومی منتشر نشده‌اند.

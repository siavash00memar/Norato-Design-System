# Norato Figma Component Rules

## File-wide evidence and typography policy

- Current reference: Figma file `WWw9btcZcWPxJGpWw8fko5`, 14 chapters `9678:58478`–`9678:60263`; see [figma-source-ledger.md](figma-source-ledger.md) for extracted values and uncertainty.
- Brand Yellow is `#FDC101`; brand Blue is `#134F89`. Old direct link blues `#2A60E7` and `#2D81FF` remain documented as inconsistent legacy instances, not brand tokens.
- Observed info/tag pairs are kept distinct: Info `#FFF8E0/#FBEAB2`; Tag Blue `#E4F2FF/#B0D7FE`.
- Source spacing values are evidence, not a regular product scale. Documentation-only page gutters/gaps are not promoted to component tokens.
- Source radii `5/12/25/36/50px`, observed component surface `25px`, and observed elevation styles live as evidence-named tokens; component-specific accepted contracts remain authoritative.
- Figma includes legacy Lalezar text roles and reports unavailable legacy font layers. Norato policy maps title roles to Estedad and body/input roles to Vazirmatn; never load Lalezar.
- The Figma extraction says global error/success/focus colors are not known. Preserve the existing Norato state colors and do not describe them as Figma-derived.
- Documentation page grammar: compact identity/status, yellow divider, numbered RTL title, visual content sections, source/evidence rail, and footer. It applies to the documentation presentation, not as a new component API.

این سند رجیستری مرکزی تصمیم‌های بصری و فاصله‌ای کامپوننت‌های نوراتو است. هر تصمیم جدید باید ابتدا در قرارداد همان کامپوننت و سپس در این رجیستری ثبت شود.

## قواعد مشترک

- جهت پیش‌فرض همه‌ی کامپوننت‌ها RTL است.
- عنوان‌ها و نقش‌های نمایشی قدیمی با Estedad Black، وزن ۹۰۰، اجرا می‌شوند.
- متن عمومی و کنترل‌ها حدود ۱۳px هستند.
- placeholder با Vazir، اندازه ۱۲px و رنگ `#a1a1a1` است.
- فاصله‌ی متن از Radio/Checkbox برابر ۶px است.
- padding containerها: افقی ۱۸px و عمودی ۱۲px.
- Documentation component-layout rule: every component example, including Figma specimens and
  general shadcn Cards, is a direct member of one RTL responsive grid. Desktop cards are 360px wide
  with 20px gaps; at a narrower content width the grid becomes one fluid column without overflow.

## Button

- مرجع: Figma `8775:23830`، instanceهای `8775:23831` تا `8775:23833`
- عرض: ۱۲۱px
- ارتفاع بصری: ۳۶px
- radius: ۲۵px
- متن: Estedad Black، ۱۳px
- حالت‌ها: Main، Secondary، Third
- مرجع Third: Figma `8818:9982`؛ زمینه سفید، border دوپیکسل `#e8e8e8`، متن `#1a1a1a`،
  padding افقی ۵۰px و عمودی ۸px. فونت قراردادی نوراتو برای متن همچنان Estedad Black 13px است؛
  فونت Lalezar موجود در فایل Figma استفاده نمی‌شود.

## Field

- مرجع: Figma `8775:23866`، instance `8775:23867`
- کنترل: ۲۷۰×۳۶px
- فاصله‌ی label و کنترل: ۶px
- فاصله‌ی متن از راست: ۱۲px
- border: `#e8e8e8`
- radius: ۲۵px

## Split Button — Lemon visual parity, 2026-10-31

- The top specimen follows `https://lemonui.ir/#split-button`: one connected capsule, a single divider, main action on the right and menu toggle on the physical left in RTL. Norato yellow Primary and semantic tokens replace Lemon's dark palette.
- Both runtime segments must be separate 48px-or-larger Tab targets. The menu opens below the toggle with its left edge aligned to the toggle's left edge; ArrowDown/ArrowUp, Home/End, Escape and outside-click behavior follow the documented Vue contract.
- Split Button size API implements Small/Medium/Large/XLarge with 32/40/48/56px visual capsules; Small/Medium keep 48px native button targets. Verify both visual size and target geometry in the browser.

## Input — Lemon visual parity, 2026-10-31

- Use `https://lemonui.ir/#input` for the visual arrangement of the top specimen: one compact, labeled field with helper text. Preserve Norato semantic colors, Estedad/Vazirmatn, RTL label/helper placement and the 48px control target.
- The top Input specimen is inert and uses an LTR email placeholder inside an RTL field group. The separate Vue playground exercises the actual `NoratoField` adapter; do not imply that its generic text API implements the other Input families or four sizes.
- Keep the field's rendered height independent of the preview frame. Current desktop measurement: field 48px, group about 97px, frame about 147px.

## Select

- مرجع: Figma `8775:23875`
- کنترل: ۲۷۰×۳۶px
- متن از راست: ۱۲px
- frame فلش: ۲۴×۲۴px
- فاصله‌ی frame فلش از لبه‌ی چپ: ۶px
- فاصله‌ی متن و frame فلش: ۶px
- فلش از asset واقعی Figma/Material استفاده می‌کند.
- الزام مشترک Norato برای target تعاملی ۴۸px بر اندازهٔ مرجع ۳۶px مقدم است؛ رندر مرورگر فعلی ۴۸px است. adapter بومی تنها single-select را اجرا می‌کند؛ منوی Lemon و Multi Select هنوز در محدودهٔ تکمیل‌اند.

## Date Picker

- مرجع: Figma `8775:23884`، instance `8775:23885`
- ارتفاع: ۳۶px
- بخش آیکن: ۳۶×۳۶px
- frame آیکن: ۲۴×۲۴px
- فاصله‌ی label و control: ۶px

## Radio Button

- مرجع: Figma `8775:23886`، instanceهای `8775:23887` و `8775:23888`
- frame: ۲۴×۲۴px
- حالت خاموش و روشن از asset/state واقعی Figma استخراج می‌شوند.
- فاصله‌ی متن: ۶px

## Checkbox

- مرجع: Figma `8818:10028`
- frame: ۲۴×۲۴px
- خاموش: node `8818:10026`
- روشن: node `8818:10025`
- نیمه‌انتخاب‌شده: node `8818:10027`
- فاصله‌ی متن: ۶px

## Field Group

- مرجع: Figma `8775:23874`، instance `8775:23875`
- اندازه‌ی گروه: ۳۶۰×۱۶۴px
- padding داخلی گروه: افقی ۱۸px، عمودی ۱۲px
- فاصله‌ی عنوان تا محتوای گروه: ۸px
- shadow: `0 2px 4px #00000026`
- Date Picker Figma `8775:23884`, instance `8775:23885`: overall height 36px; icon segment 36×36px with 6px padding and 24×24px icon frame; white field 84×36px; label gap 6px; visual order is icon on the left and field on the right. Reference asset: `ff21d836-c47b-4d56-9d8f-c6fca6f2bc7f.svg`.
- Checkbox checked state (Figma `8818:10025`): 24×24px yellow rounded square with white checkmark; this overrides the generic fallback color.
- Checkbox states are a three-state contract from Figma: unchecked = white 24×24 with 6px `#e8e8e8` border; indeterminate = yellow rounded 24×24 with white horizontal dash; checked = yellow rounded 24×24 with white checkmark.
- Unchecked checkbox refinement: the 24×24px frame must remain fixed in flex layouts; use a 3px `#e8e8e8` border with a white interior so the control does not render as a filled gray tile.
- Radio control uses the previous Material Icons presentation: `radio_button_unchecked` for off and `radio_button_checked` for on, in a fixed 24×24px frame with a 6px text gap.
- Radio states use the provided SVG assets: `radio-empty.svg` for unchecked and `radio-checked.svg` for checked, both 24×24px.
- Global implementation rule: before adding visual CSS to an existing component, audit its legacy selectors and remove or neutralize conflicting border, background, box-shadow, pseudo-element, and state rules. The canonical record is `docs/error-log.md` (ERR-001).
- Field Example alignment rule: all labels, including `جنسیت`, share one fixed title column with a common left edge; all controls share one fixed field column with a common right edge. Field titles use Estedad Black 900.
- Mandatory Field Example grid: use a fluid two-column contract—`minmax(0, 1fr)` for controls, `max-content` for titles, and a constant 12px gap. Title left edges and field right edges must align without assuming fixed widths.
- Field group placement rule: controls are placed on the left; their right edges share one alignment line. Labels are placed on the right with a 12px gap from the control column. The content box containing fields and labels has 12px padding on all four sides.
- Field Example final layout: controls occupy the left column and share a right edge; row titles occupy the right column and share a left edge; the inter-column gap is 12px. The section title is above the box and aligned right.
- Gender option rule: Field Example uses the provided 24×24 SVG assets `/icons/gender-man.svg` and `/icons/gender-woman.svg` beside the corresponding Persian labels and Radio controls.
- Gender option order rule: the visual order is always gender SVG icon first, then the Persian label (`آیکن مرد → مرد`, `آیکن زن → زن`), then the Radio control. Explicit flex ordering must prevent RTL/CSS overrides from reversing it.
- Tag `8819:10049`: background `#E4F2FF`, border `#B0D7FE`, radius 25px, shadow `0 2px 4px #00000026`, padding inline 8px left / 4px right, vertical 1px, gap 2px, text Vazir 12px, close icon frame 18×18px.
- Tag Box `8819:10054`: title outside the box, gap 8px, title Estedad Black 13px with 30px line-height; inner box width fills the component, height 88px, background `#F5F5F5`, border `#E8E8E8`, radius 12px, padding 12px; Tag is aligned to the box's top-right.
- Global RTL rule: all components and their internal layout directions are RTL by default without exception; Tag and Tag Box explicitly use `direction: rtl`, with the Tag aligned to the right side of its box.
- Component presentation rule: the Tag Box remains the inner Figma structure, while the documentation page also wraps it in the standard Norato component card; these are separate visual layers.
- Field Group `8772:189` / `8775:23875`: multiple independent Dropdown fields are grouped in one 360px structure; outer padding 18px horizontal / 12px vertical, title-to-box gap 8px, inner box height 112px with 12px padding, row gap 16px, Select width 270px, label-to-control gap 6px.
- Field Group documentation rule: the multi-dropdown Field Group must be wrapped in the standard Norato component card; its 112px Dropdown box remains an inner layer.
- Field Group container padding rule: the documentation card/container uses 12px on all four sides; the inner dropdown box also uses 12px padding on all four sides.
- Search Dropdown active reference `8775:24026` (supersedes `8775:23957`): open RTL dropdown card 324px wide and 558px high; inner field/list width 300px; input height 36px; open list white with 258px height; option rows 36px; uses Norato SVG Checkboxes for multi-select states and Figma arrow/search assets.
- Search Dropdown option rule: options are multi-select and must use the canonical Norato Checkbox SVG component; text-only checkmarks are forbidden.
- Tree View references `8775:24029` (closed parent) and `8822:10062` (open parent): RTL parent/child hierarchy, 36px rows, 24px expand icons, nested child branches, and independently expandable children. The active implementation is recursive and stateful.
- Tree View interaction rule: every node has the canonical Norato Checkbox; expand/collapse uses the provided Figma 24×24 SVG arrow asset, never a text glyph or CSS character.
- Tree View asset rule: the expand arrow MUST use the exact Figma Tree View asset saved as
  `public/icons/tree-arrow.svg` (`#134F89`, 24×24). Select keeps its separate black arrow
  because the latest Tree View Figma reference is a different visual asset.
- Tree View multi-parent reference `8822:10469`: closed-state card is 324×248 with a visible
  12px edge inset (11px CSS padding plus 1px border), a 300×36 search field, then four closed
  300×36 parent rows. Search-to-list gap is 8px; parent-to-parent gap is 12px. Every parent
  uses the canonical indeterminate Checkbox, Estedad Black 12px label, and the Tree View
  24×24 arrow. The card expands only when a parent is opened.
- Documentation wrapper rule: the Tree View Figma card MUST be placed inside the standard
  360px documentation card, titled `Tree view` with Estedad Black 13px; the Figma card stays
  unchanged inside it.
- Tree View open-parent reference `8822:10470`: the open Parent remains 300×36 but has only
  top 12px radii and an upward blue arrow. Its attached child surface is white, 48px high,
  bordered `#E8E8E8`, and has only bottom 12px radii. The Child uses a canonical checked
  Checkbox, Estedad Black 13px label, and a 24px nested arrow.
- Tree View open-child reference `8822:10493`: when that Child expands, it becomes an
  indeterminate 36px nested header with an upward nested arrow. The Parent's white child
  surface grows to 153px and contains three 36px leaf rows: checked, unchecked, checked.
  Nested and leaf labels use Estedad Black 11px.
- Tree View Child order reference `8822:10568`: for every Child row in RTL, the exact visual
  sequence from right to left is canonical Checkbox (24px), nested arrow (24px), then the
  Child title. The arrow is never placed after the title.
- Tree View leaf alignment rule: when a Child opens, its Leaf checkbox MUST align vertically
  below the Child arrow. The third-level inset therefore includes the Child's 24px checkbox
  frame plus the 6px Checkbox-to-arrow gap; Leaf content must not begin directly under the
  Child checkbox.
- Tree View selection state machine: selection is derived from descendant Leaf nodes. If all
  descendant Leaf nodes are checked, the Parent/Child is checked; if none are checked, it is
  unchecked; otherwise it is indeterminate. Toggling a Parent/Child checks all descendants
  unless all are already checked, in which case it clears all descendants.
- Tree View typography and sample-data rule: Parent titles use Estedad Bold (700); Child and
  Leaf titles use Vazir Bold (700). Documentation data must demonstrate at least multiple
  Children per Parent and multiple Leaf nodes per Child.
- Tree View typography stability rule: every Parent, Child, and Leaf title is 12px in every
  state. Parent uses Estedad Bold; Child and Leaf use Vazir Bold. Opening, selecting, or
  indeterminate state must never change the size.
- Tree View Child spacing rule: direct Children of the same Parent have exactly 0px vertical
  spacing. This applies only to Child siblings; Leaf rows inside an expanded Child retain their
  own Figma-derived compact spacing.
- Norato design system updates (2026-10-27): preserve Norato yellow and blue as the only brand accents; use glass surfaces as a neutral treatment; component inventory status must distinguish Implemented, Adapted, Proposed and Deferred; new runtime behavior targets Vue 3 and remains RTL-first.
# اصلاح داشبورد مستندات و نمونه‌های Vue — 2026-10-27

- renderer قدیمی جزئیات کامپوننت با متن عمومی حذف شد؛ هر route فقط قرارداد مستقل همان خانواده را نشان می‌دهد.
- کارت‌های inventory از همان نمونهٔ اختصاصی component page استفاده می‌کنند؛ specimenهای غیرفعال `inert` هستند تا کنترل بی‌عمل وارد ترتیب Tab نشود.
- rail دوم دیگر فهرست تکراری ۴۹ کامپوننت را نمایش نمی‌دهد؛ مسیرهای اصلی و sectionهای صفحه را نگه می‌دارد.
- راهنمای تیم، source exportها و محدودیت adapterهای فعلی را از نمونه‌های پیشنهادی جدا می‌کند.
- تصمیم بصری: داشبورد برای اسکن‌پذیری و خوانایی ساده‌تر شده؛ رنگ، فونت و RTL نوراتو حفظ شده‌اند. این تغییر زبان بصری Figma کامپوننت‌ها را تغییر نمی‌دهد.

## Button card interaction rule — 2026-10-28

- Button detail uses balanced RTL card layout with separate Preview, Vue usage, and nine independent contract cards.
- Each contract variant has a visual sample. Only actual `NoratoButton` API variants may be marked executable; contract-only options remain explicitly visual references.
- Copy controls expose a 48px minimum target, visible focus, accessible name, and live success/failure feedback. Other component families adopt this presentation only after the Button pattern is reviewed.

## Button accent and compact spacing rule — 2026-10-28

- Primary fill uses Norato yellow with dark text. Secondary uses a 2px Norato-yellow stroke and dark text.
- Button variant/state samples align content to the top with consistent gaps; sample buttons keep intrinsic width. Button preview uses compact specimen padding.
- The focus indicator keeps the contrast outline paired with the yellow ring.
- Button → Anatomy documentation presents the assembled primary sample and an RTL exploded map: Container is the empty enclosing outline; optional Leading Icon, Label and optional Trailing Icon are separate contents and the label appears once. Icon layers are explicitly conceptual because the current Vue adapter does not support icon slots.

## Button type and shape rule — 2026-10-28

- Button labels use Estedad Bold.
- Button silhouettes use `--norato-radius-pill` (the observed 50px radius) for fully rounded ends at every Button height; copy controls, fields and surrounding cards do not inherit this shape.

## Button vertical documentation and minimal card treatment — 2026-10-28

- Button detail keeps Preview, Vue usage, and each contract section in one vertical column at every viewport width. Variant/state/size examples remain inside their relevant card.
- Button contract copy is Persian-first; API names and tokens render as isolated LTR code units. Keep explanatory rows short and copyable.
- Use a quiet surface and semantic border with compact token spacing; retain heading hierarchy, focus indication, copy target size, and the approved yellow button treatment.

## Button documentation hierarchy — 2026-10-28

- Apply the restrained editorial hierarchy only to the Button documentation shell: compact metadata/title, 15px section headings, 14px body, and subtle separators instead of repeated outlined/shadowed cards.
- Keep code and copy controls quiet while preserving 48px hit targets and visible keyboard focus.
- Do not alter Button specimen, variant, state, or size example styling as part of this page-level treatment.

## Button Vue usage code block color — 2026-10-28

- Use semantic `--norato-color-surface-code` (`#484848`) for the Button usage snippet and `--norato-color-text-on-code` (`#ffffff`) for its code text.
- Scope this treatment to the Button documentation usage block. Inline code, component specimens, and other pages retain their existing roles.

## Button variant gallery layout — 2026-10-28

- Arrange the nine individual variant cards in three columns on desktop so all rows are complete. At tablet widths use two columns and center an unmatched final card; at narrow mobile use one column.
- The pale sample well should hug the visual sample. Keep each Button sample's shape, type, color, size, explanatory label, support status, and copy behavior unchanged.
- Keep card padding compact and consistent; retain the 48px minimum target for copy controls.

## Button variant sample surfaces and duplicate entry — 2026-10-28

- Variant samples sit directly on the page surface; do not place a gray demo well behind them. The variant treatment itself (for example, Tertiary's subtle fill) remains visible.
- The Button gallery and contract expose seven distinct types (168 type × size × state combinations). `Danger` is the single destructive treatment; the visually identical visual-only `Danger Solid` entry is removed. `Inverse` remains a separate supported API visual example.

## Button top specimen — 2026-10-28

- The top Button specimen shows the yellow Primary and yellow-outline Secondary, plus a neutral gray-outline pill labeled «انصراف».
- Inverse/Destructive stay available in the API gallery but do not appear in the top specimen. The cancellation sample is visual-only and does not add an API variant.

## Component documentation rollout — 2026-10-28

- Each component keeps its own route and nine-part contract. Do not group components or reuse Button-specific contract content as a stand-in for other families.
- The compact, vertical editorial hierarchy from Button applies to non-Button documentation; keep family-specific specimens intact and use semantic tokens, RTL and accessible focus/target sizes.
- Every useful contract section has an individually operable copy action with clear success/failure feedback.
- Only display copyable Vue usage when the named adapter exists and the snippet matches its real props/events/model. Proposal visuals and contract-only axes are visibly labeled and never presented as executable behavior.
- In batch 1, Input/Select examples may use `v-model` with actual `NoratoField`/`NoratoSelect` props. Checkbox/Radio examples use `NoratoChoiceGroup` with `v-model:selected`, `kind`, `id`, `label`, `options`; error and disabled examples must use supported props. ChoiceGroup has no loading or size props.
- Button-specific approved sample, gallery, state/size axes and CSS are excluded from this general treatment.

## Button playground presentation (2026-10-28)

- Controls in the executable Button playground use clear RTL labels, 48px interaction targets, visible selected states and restrained motion. Respect reduced-motion preferences.
- The Vue code copy action stays adjacent to the generated snippet. The playground remains separate from inert visual specimens.
- Playground dropdown triggers use a centered chevron inset from the left edge in RTL. Playground switches show only their track and label, without an enclosing pill or card.
- The Button playground variant and HTML type controls use in-page Vue listboxes with RTL placement and a yellow selected state. Their menus open below the trigger rather than through the operating system popup.

## Persian numeral presentation (2026-10-28)

- All user-facing numbers in the Vue documentation UI use Persian digit glyphs, including dynamic counts, section indices, sizes and component previews.
- Executable code, token identifiers, resolved technical values and editable input values keep their machine-readable spelling; copy actions preserve the source value.

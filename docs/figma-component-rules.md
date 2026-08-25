# Norato Figma Component Rules

این سند رجیستری مرکزی تصمیم‌های بصری و فاصله‌ای کامپوننت‌های نوراتو است. هر تصمیم جدید باید ابتدا در قرارداد همان کامپوننت و سپس در این رجیستری ثبت شود.

## قواعد مشترک

- جهت پیش‌فرض همه‌ی کامپوننت‌ها RTL است.
- عنوان‌ها و نقش‌های نمایشی قدیمی با Estedad Black، وزن ۹۰۰، اجرا می‌شوند.
- متن عمومی و کنترل‌ها حدود ۱۳px هستند.
- placeholder با Vazir، اندازه ۱۲px و رنگ `#a1a1a1` است.
- فاصله‌ی متن از Radio/Checkbox برابر ۶px است.
- padding containerها: افقی ۱۸px و عمودی ۱۲px.

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

## Select

- مرجع: Figma `8775:23875`
- کنترل: ۲۷۰×۳۶px
- متن از راست: ۱۲px
- frame فلش: ۲۴×۲۴px
- فاصله‌ی frame فلش از لبه‌ی چپ: ۶px
- فاصله‌ی متن و frame فلش: ۶px
- فلش از asset واقعی Figma/Material استفاده می‌کند.

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

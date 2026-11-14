# Norato Figma Component Rules

## File-wide evidence and typography policy

- Current reference: Figma file `WWw9btcZcWPxJGpWw8fko5`, 14 chapters `9678:58478`–`9678:60263`; see [figma-source-ledger.md](figma-source-ledger.md) for extracted values and uncertainty.
- Brand Yellow is `#FDC101`; brand Blue is `#134F89`. Old direct link blues `#2A60E7` and `#2D81FF` remain documented as inconsistent legacy instances, not brand tokens.
- Keyboard focus pairs the Norato-yellow outer ring with a dark amber contrast outline (`--norato-color-focus-contrast: #805A00`) so the indicator remains visible against white and yellow surfaces without using blue as the focus accent.
- Use brand yellow for component accents and selected/active emphasis. Reserve brand blue for links and informational/status semantics; generic anatomy markers stay neutral unless they represent an active item.
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

- The top Button specimen uses the Split Button preview frame tokens (640px max width, 320px mobile cap, 288px height, 24px radius) and the same dotted glass warm/cool wash. Show only Primary and Secondary, each 48px high like Split Button Large; preserve intrinsic widths and use semantic Norato tokens.
- Secondary Button hover uses Norato's yellow `--norato-color-warning-container` with the yellow brand Stroke and dark text; do not use the blue informational container for this interaction state.

- مرجع: Figma `8775:23830`، instanceهای `8775:23831` تا `8775:23833`
- عرض: ۱۲۱px
- ارتفاع بصری: ۳۶px
- radius: ۲۵px
- متن: Estedad Black، ۱۳px
- حالت‌ها: Main، Secondary، Third
- مرجع Third: Figma `8818:9982`؛ زمینه سفید، border دوپیکسل `#e8e8e8`، متن `#1a1a1a`،
  padding افقی ۵۰px و عمودی ۸px. فونت قراردادی نوراتو برای متن همچنان Estedad Black 13px است؛
  فونت Lalezar موجود در فایل Figma استفاده نمی‌شود.

## Popover

- قاب نمونهٔ ثابت از هندسهٔ پیش‌نمایش Button پیروی می‌کند؛ محرک، پنل و پیکان داخل قاب می‌مانند و اندازهٔ ذاتی خود را حفظ می‌کنند.
- پنل نمونه حداکثر عرض توکنی دارد، پیکان را به محرک وصل می‌کند و سطح شیشه‌ای/سایهٔ معنایی نوراتو می‌گیرد. جایگاه افقی باید در RTL واقعاً مرکز محرک باشد؛ از ترکیب جابه‌جایی logical با `translateX(-50%)` که پنل را بیرون قاب می‌برد استفاده نشود.
- Playground سه نوع Simple/Actions/Form و چهار جایگاه Top/Bottom/Right/Left را جداگانه قابل بررسی می‌کند؛ رنگ‌های برند و Focus از توکن‌های Norato می‌آیند.

## Field

- مرجع: Figma `8775:23866`، instance `8775:23867`
- کنترل: ۲۷۰×۳۶px
- فاصله‌ی label و کنترل: ۶px
- فاصله‌ی متن از راست: ۱۲px
- border: `#e8e8e8`
- radius: ۲۵px

## Split Button — design reference visual parity, 2026-10-31

- The top specimen follows `design reference one connected capsule, a single divider, main action on the right and menu toggle on the physical left in RTL. Norato yellow Primary and semantic tokens replace design reference's dark palette.
- Both runtime segments must be separate 48px-or-larger Tab targets. The menu opens below the toggle with its left edge aligned to the toggle's left edge; ArrowDown/ArrowUp, Home/End, Escape and outside-click behavior follow the documented Vue contract.
- Split Button size API implements Small/Medium/Large/XLarge with 32/40/48/56px visual capsules; Small/Medium keep 48px native button targets. Verify both visual size and target geometry in the browser.
- Keep the standalone inert Split Button preview frame 288px high (max width 640px; mobile cap 320px) with the design reference Default marker and Norato glass tokens. Center the control without stretching it. Render the actual adapter in the 6-variant, 4-size and 5-state galleries; use inert only for those visual specimens.
- Place the runnable Split Button playground inside the single «استفاده در Vue» section after the adapter source, with its controls and generated snippet. Do not place it in an unreachable sibling conditional or create a second implementation section.

## Input — design reference visual parity and Norato runtime, 2026-11-01

- Use `design reference for the top specimen arrangement: one compact, labeled email field. Preserve Norato semantic colors, Estedad/Vazirmatn and RTL. The latest user rule removes helper text from the top specimen.
- The top specimen is inert; its email entry is LTR inside an RTL field group. Keep it separate from the live Vue playground, which covers all eight public adapters: Text, Password, Phone, OTP, Textarea, Number, Amount and Search. `NoratoField` remains backward-compatible and does not replace those specialized adapters.
- Use a 36px visible capsule for single-line Input fields wherever they appear across component pages; this includes the Input top preview, variant/state cards, live adapters, generic `NoratoField`, and shared component-playground text/number/select controls. Keep a 1px neutral `#e8e8e8` stroke at rest and a single yellow stroke on hover/focus; avoid dark outlines or extra shadows. Field titles use Estedad Bold; placeholders use RTL Vazirmatn Light at 12px and `#a1a1a1`. Live adapter/OTP hit targets remain at least 48px; use an inset visual shell where needed. Textarea keeps its multiline height. The top email field remains capped at 324px, the frame at 640×288px desktop/320px mobile, with the Default marker and Norato glass/wash/dots.
- The user's approved DoD requires the Button-style page structure: Preview, live Vue playground, then nine independently copyable contract sections.
- design reference's 32/40/48/56px are reference sizes. Norato's interactive target floor is 48px: single-line controls measure 50/52/56/60px outside and 62/64/68/72px inside; OTP targets measure 48/52/56/60px and contain a centered 36px-high capsule; cells wrap without horizontal overflow; three-row Textarea measures 103/108/120/128px. Hide native Number spinners beside Norato's own 48px step actions.
- State/variant galleries remain inert references. Behavioral claims belong to the live playground/adapters. Full state/focus matrices and independent screen-reader review remain open until verified.
- The primary Input States section uses ten compact title/description cards in four desktop columns and two mobile columns, with Persian RTL copy and Norato semantic status colors. Keep the 41 adapter-specific inert field examples in a clearly secondary gallery after the canonical nine sections; use bounded controls and two columns on mobile. These specimens remain inert; never substitute them for adapter behavior checks.
- Input field shells and OTP cells are capsule-shaped at all sizes and states; use Norato's semantic `--norato-radius-pill` token. Keep this radius scoped to the Input family.
- Neutral Input and OTP strokes use a 1px `--norato-color-border-default` (`#e8e8e8`) border at rest. Pointer hover and keyboard focus use a 1px `--norato-color-brand-yellow` stroke; this is the capsule's own stroke, and the layout wrapper stays transparent so it cannot add a second gray line. Disabled fields keep a neutral stroke even when invalid; preserve `aria-invalid` and the linked error message. Hover on disabled fields does not recolor the Stroke. Remove contrast outlines and glow shadows. Error and success keep their semantic status colors at rest.
- Focus takes precedence over the Input error/success border while the field is focused; its visible message/icon continues to communicate the status.
- Simultaneous status priority: Error suppresses Success; Loading suppresses Success until processing completes. Keep existing Error visible during Loading, expose `aria-busy`, and never reference a status message ID that is not rendered.
- Latest component-page rule (2026-11-02): every Input title/label wherever it appears across component pages uses Estedad Bold; placeholders are RTL, Vazirmatn Light 12px `#a1a1a1`. Remove the old helper line under the top email sample. All single-line Input visual capsules are 36px while interactive hit boxes stay 48px minimum; OTP visual capsules are 36px with 48px targets. Keep Textarea multiline and preserve LTR values for phone/amount.
- Follow-up (2026-11-08): Default Input specimens and the Input playground show no generic helper copy beneath fields. Keep the optional `helperText` API and status messages for consuming applications; do not use them as default preview copy.
- The generic backward-compatible `NoratoField` shares this appearance in the all-components playground; its input itself remains 48px and carries a centered 36px capsule.
- Latest specimen correction (2026-11-02): place the decorative envelope icon beside the «ایمیل» title inside the semantic label; title uses Estedad Bold. Use the Persian placeholder «ایمیل خود را وارد کنید» with Vazirmatn Light 12px and `--norato-color-text-placeholder-subtle` (`#a1a1a1`); remove `name@example.com`. The inert top sample's visual control height is 36px. Keep live interactive controls at their documented minimum 48px target.

## Select

- مرجع: Figma `8775:23875`
- کنترل: ۲۷۰×۳۶px
- متن از راست: ۱۲px
- frame فلش: ۲۴×۲۴px
- فاصله‌ی frame فلش از لبه‌ی چپ: ۶px
- فاصله‌ی متن و frame فلش: ۶px
- فلش از asset واقعی Figma/Material استفاده می‌کند.
- الزام مشترک Norato برای target تعاملی ۴۸px بر اندازهٔ مرجع ۳۶px مقدم است؛ رندر مرورگر فعلی ۴۸px است. adapter Vue اکنون منوی Reka با جست‌وجو، گروه‌بندی و انتخاب چندتایی مرحله‌ای دارد؛ DoD بصری نهایی آن هنوز باز است.
- نمونهٔ Select در قاب مستندات، فیلد ۳۰۰px را وسط قاب ۲۹۶px نشان می‌دهد؛ اندازهٔ مشاهده‌شدهٔ مرجع طراحی در دسکتاپ و موبایل حدود ۳۰۲px است. عرض فیلد را به عرض قاب نکشانید.
- نمونهٔ بالای صفحه در حالت Default بدون مقدار انتخاب‌شده است و placeholder فارسی تأییدشدهٔ Norato «یک شهر انتخاب کنید» را نشان می‌دهد؛ مقدار Tehran/تهران فقط در playground اجرایی می‌ماند.
- فلش Select باید SVG ثابت در قاب ۲۴×۲۴px سمت چپ فیلد RTL باشد؛ نویسهٔ متنی وابسته به فونت برای این نقش مجاز نیست. در حالت باز همان آیکن می‌چرخد.
- در برچسب داخلی Select، متن برچسب و مقدار/Chip در یک کنترل ۵۶px قرار می‌گیرند؛ فاصلهٔ داخلی نباید دو خط را به ارتفاع ۶۵px بکشد. حداقل هدف تعاملی همچنان ۴۸px است.
- Multi Select در نمای Chips یک مقدار به‌همراه شمارندهٔ بقیه را نشان می‌دهد؛ همهٔ انتخاب‌ها در منوی باز و Summary در دسترس می‌مانند و خود فیلد با افزایش انتخاب‌ها قد نمی‌کشد.
- بخش States صفحهٔ مستندات Select از ۹ کارت یکتا با عنوان+توضیح مانند مرجع طراحی استفاده می‌کند: Default، Hover، Open، Filled، Error، Disabled، Read-only، Selected، Focus. نام خانوادهٔ تکراری روی کارت‌ها نمی‌آید؛ حالت‌های Select Option و Multi Select در Parts و playground باقی می‌مانند. accent هر حالت از semantic token نوراتو می‌آید. گالری static/inert است، کارت‌ها حداقل ارتفاع یکسان و عرض خودکار tokenized دارند؛ desktop چهار ستون و viewport باریک یک ستون دارد.

## Combobox

- The static States gallery has six RTL field samples: Default, Hover, Typing, Filled, Error, Disabled. Use four columns on desktop, two at medium widths, and one on narrow mobile; each card has a Persian explanation specific to its state and does not repeat the generic family name.
- Each sample keeps the 36px capsule inside the 48px interaction target. Default/Disabled use neutral Stroke, Hover/Typing/Filled use Norato yellow, and Error uses the semantic error color. The actual live Combobox stays in the Vue playground.

## Date Picker

- قاب inert از همان stage نقطه‌ای ۳۰۰px و پس‌زمینهٔ shared نمونهٔ Button استفاده می‌کند؛ زمینهٔ داخلی تقویم شفاف است تا گرادیان Norato قاب دیده شود. قاب در عرض‌های کم از bounds responsive خودش پیروی می‌کند.

- مرجع: Figma `8775:23884`، instance `8775:23885`
- ارتفاع: ۳۶px
- بخش آیکن: ۳۶×۳۶px
- frame آیکن: ۲۴×۲۴px
- فاصله‌ی label و control: ۶px
- صفحهٔ مرجع طراحی `مرجع طراحی الگوی preview را تعیین می‌کند: قاب dotted-glass با نشان Default، تقویم سفید و کم‌ارتفاع وسط قاب، نام ماه و کنترل‌های قبل/بعد در سرستون، و هفت ستون از شنبه در سمت راست تا جمعه در سمت چپ. پالت اجرا از semantic tokenهای Norato می‌آید.
- هر هفت حالت Single، Range، Range + Presets، Date & Time، Month، Year و Wheel در playground مستقل صفحهٔ Date Picker قابل اجرا هستند؛ wheel در موبایل سه انتخاب‌گر سال/ماه/روز دارد.
- اندازهٔ دیداری روز در Small/Medium با target حداقل ۴۸px جدا نگه داشته می‌شود؛ grid هفت‌ستونه داخل پنل با inline-size محدود قرار می‌گیرد و ارتفاعش ثابت از target سلول‌ها ناشی نمی‌شود.
- محاسبات و سریال‌سازی از PersianCalendar در `@internationalized/date` استفاده می‌کنند. جمعه‌ها حالت Holiday دارند؛ روزهای تعطیل رسمی را مصرف‌کننده با رشتهٔ جلالی می‌دهد. تاریخ و ساعت، زمان محلی را حفظ می‌کند.
- نمونهٔ بالای صفحه inert و فقط بصری است؛ Date Picker اجرایی در بخش استفادهٔ Vue قرار دارد.
- در انتخاب Range، روزهای ابتدا/انتها زمینهٔ زرد برند دارند و روزهای میانی از `--norato-color-warning-container` به‌عنوان زمینهٔ زرد کم‌رنگ انتخاب استفاده می‌کنند؛ آبی اطلاعاتی برای حالت انتخاب بازه به‌کار نمی‌رود.

## Radio Button

- مرجع: Figma `8775:23886`، instanceهای `8775:23887` و `8775:23888`
- frame: ۲۴×۲۴px
- حالت خاموش و روشن از asset/state واقعی Figma استخراج می‌شوند.
- فاصله‌ی متن: ۶px
- design reference preview composition: one centered three-option group in a 640×288 desktop glass frame, 320×288 on mobile, with a Default/green-dot marker. Norato uses its own yellow selected dot and semantic glass/border tokens; hover border also uses the Norato yellow accent.
- Each option row stays 48px tall; the control is on the right in RTL. Runtime sizes are 16px and 20px. Do not stack multiple state groups in the specimen or stretch the control to fill the frame.
- `NoratoRadioGroup` is controlled by one optional string value; native radio inputs preserve arrow-key group behavior. The separate playground covers required, disabled, invalid, and size settings.
- The static States gallery follows design reference's title-plus-description cards. Keep all five Radio Button states and three Radio Field states, with family labels and semantic Norato status accents; do not render the generic elongated pill there. Actual radio specimens stay in Preview and Variants.

## Switch — design reference composition, Norato palette

- Reference: `design reference one Switch Field with concise label and optional description, the control beside the copy, and a Default/green-dot marker inside the same dotted glass preview frame as design reference.
- Track is light gray (`--norato-color-surface-muted`) when off and Norato brand yellow when on; the checked track has no gray stroke. The white, stroke-free knob moves toward physical left when enabled in RTL and remains inset from both ends. Do not use design reference's raw black color as Norato brand color.
- Small/Medium/Large track sizes are 32×20, 40×24 and 48×28px; the actual button remains a 48×48px target. Keep the preview to one field; do not stretch the switch to the frame.
- `NoratoSwitch` wraps the installed Reka `SwitchRoot`/`SwitchThumb` primitive for `role="switch"`, `aria-checked`, keyboard behavior, controlled boolean state and connected label/description; Norato retains visual token ownership. Use only for settings applied immediately.
- The static States gallery follows design reference's title-plus-description card hierarchy and contains five Switch plus three Switch Field entries; keep family names, Persian descriptions, and Norato semantic status accents. Do not use the generic pill artwork there. Interactive Switch specimens belong in Preview and the Vue playground.

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
- در adapter Vue، نشانگر برداری مشترک `NoratoCheckboxVisual` برای گزینه‌های Multi Select استفاده می‌شود؛ قاب ۲۴×۲۴px است، ردیف ۴۸px هدف تعاملی دارد و چک‌باکس نمایشی نقش تعاملی جدا نمی‌گیرد.
**Superseded historical Tree View notes (do not apply):** The Checkbox-tree rows, blue arrow assets, Figma IDs, typography, sizing and selection state machine in the following legacy bullets describe an abandoned experiment. The active single-select file-navigation contract is defined in “Tree View — 2026-11-08” below.
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

## Primary accent and dropdown consistency — 2026-11-02

- Norato yellow is the primary accent for selected, checked, active, progress and primary-control states. Use dark foregrounds on yellow. Keep blue for links and informational/status semantics, not as a substitute primary selection color.
- Product and playground dropdowns use Norato's custom accessible dropdown patterns. Do not expose browser-native option menus for component interactions or playground settings.
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
- The focus indicator keeps the dark amber contrast outline paired with the yellow ring.
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

- Superseded by the 2026-11-02 Button preview alignment rule below: only Primary and Secondary remain in the top specimen; the neutral Cancel sample has been removed.

## Component documentation rollout — 2026-10-28

- Each component keeps its own route and contract. Do not group components or reuse Button-specific contract content as a stand-in for other families.
- Every component page uses the Button structure: the fixed visual Preview, the live Vue playground when an adapter exists, then Overview, Anatomy, Variants, Sizes, States, Parts, Usage, Accessibility and Tokens in that order. Family-specific supplemental sections follow Tokens.
- Keep the Preview note first in the source contract; the page renderer filters that note from the secondary section cards because the fixed specimen is already rendered at the top.
- The compact, vertical editorial hierarchy from Button applies to non-Button documentation; keep family-specific specimens intact and use semantic tokens, RTL and accessible focus/target sizes.
- Every useful contract section has an individually operable copy action with clear success/failure feedback.
- Only display copyable Vue usage when the named adapter exists and the snippet matches its real props/events/model. Proposal visuals and contract-only axes are visibly labeled and never presented as executable behavior.
- In batch 1, Input/Select examples may use `v-model` with actual `NoratoField`/`NoratoSelect` props. Checkbox/Radio examples use `NoratoChoiceGroup` with `v-model:selected`, `kind`, `id`, `label`, `options`; error and disabled examples must use supported props. ChoiceGroup has no loading or size props.
- Button-specific approved sample, gallery, state/size axes and CSS are excluded from this general treatment.

## Combobox multi-selection height — 2026-11-01

- Keep multi-selection compact on one line: show the first selected label and a localized `+N` count, not a wrapping stack of chips. Chips remain visual tokens below 48px; the field and its clear/chevron actions retain at least 48px targets.
- Keep the suggestion menu anchored 8px below the field, matching text bold, and every semantic brand/focus color on Norato tokens. Small/Medium design reference sizes remain 48px interactive controls to satisfy Norato's global target rule; XLarge is 56px.
- The inert top specimen uses one centered field, the design reference-like dotted glass frame, and an upper-right `Default` marker. Reuse the semantic Norato blue/yellow wash and preview tokens; never depend on white glass-line color for dots on Norato's light glass background. Keep the specimen separate from the live playground.
- Superseded 2026-11-08 by the cross-component Input rule: Combobox keeps a 48px interactive target with a centered 36px capsule; resting Stroke is 1px `#e8e8e8`, hover/focus Stroke is 1px Norato yellow, with no outer field outline or halo. Independent action buttons retain their own keyboard focus indicator.
- The inert Combobox States gallery uses six real RTL field silhouettes. Default/disabled use neutral `#e8e8e8`, Hover/Typing/Filled use Norato yellow, and Error uses the semantic error color; the gallery must not use the generic blue dot/bar fallback.
- Disabled takes visual priority over validation: a disabled+invalid Combobox keeps the neutral `#e8e8e8` Stroke and muted surface; the error Stroke returns when enabled. Hover never recolors a disabled field.
- `aria-activedescendant` points to an existing option only while the menu is open. Closing removes the reference; reopening restores a valid active-option reference.

## Button playground presentation (2026-10-28)

- Controls in the executable Button playground use clear RTL labels, 48px interaction targets, visible selected states and restrained motion. Respect reduced-motion preferences.
- The Vue code copy action stays adjacent to the generated snippet. The playground remains separate from inert visual specimens.
- Playground dropdown triggers use a centered chevron inset from the left edge in RTL. Playground switches show only their track and label, without an enclosing pill or card.
- The Button playground variant and HTML type controls use in-page Vue listboxes with RTL placement and a yellow selected state. Their menus open below the trigger rather than through the operating system popup.

## Persian numeral presentation (2026-10-28)

- All user-facing numbers in the Vue documentation UI use Persian digit glyphs, including dynamic counts, section indices, sizes and component previews.
- Executable code, token identifiers, resolved technical values and editable input values keep their machine-readable spelling; copy actions preserve the source value.

## Checkbox preview and field — 2026-11-01

- The inert top preview uses design reference's compact, centered single-field composition and dotted glass frame; Norato yellow/blue, border, radius, text and focus colors remain semantic Norato tokens.
- Show the small `Default` label and green state dot in the upper-right corner of the sample frame. This marker belongs to the specimen, not the live checkbox API.
- Use the Norato 78% glass token and default light border for the resting box; the checked state uses Norato blue rather than design reference's black border/fill.
- Keep the desktop frame at 640×288px and mobile maximum at 320×288px. Use the preview-specific 24px radius and 12px dot spacing; keep the top specimen to one field. Interactive state exploration stays in the live playground.
- Keep Checkbox Field RTL with the control on the right, label/description to its left, whole row clickable, 48px minimum row height, and a 16px or 20px visual box.

## Select specimen — 2026-11-01

- Use design reference's one-field, centered preview with a small upper-right `Default` marker; keep the specimen inert and the state controls in the live Vue playground.
- Use the Norato dotted glass frame, soft yellow/blue wash, semantic border/radius/elevation; retain the Norato palette and the 48px minimum field target.
- Constrain the frame to the available documentation column, with 640px desktop and 320px mobile maxima; keep the selected field at 300px max so it cannot stretch vertically or horizontally.
- Keep the Select control and option content RTL; the chevron/check align at the logical left.

## Range — 2026-11-01

- Use design reference's compact one-field specimen structure: Persian label, numeric value above the thumb, track, range fill, and min/max beneath. Preserve Default marker and dotted-glass preview frame.
- In RTL, minimum is on the physical right and fill grows right-to-left. Keep values anchored to their thumb positions. Keep the interactive SliderTrack full width; inset the visual rail by 24px (half the 48px thumb target) and render SliderRange inside that rail so fill endpoints meet thumb centers without changing pointer mapping.
- Use Norato semantic colors. Keep visible thumb/rail compact while the actual pointer/keyboard target is at least 48px; Small/Medium affect rail and thumb appearance only.
- Exact values should pair with a numeric input; the slider alone communicates approximate adjustment.
- گالری حالت‌های Range باید rail و fill زرد، thumb سفید با Stroke خنثی، Disabled خاکستری و Focus زرد را نشان دهد؛ نمونهٔ عمومی نقطه/خط آبی برای این خانواده مناسب نیست.

## Segmented Control — 2026-11-01

- Match design reference's single selected group, raised Glass segment or Contrast segment and horizontal track; the first option is on the right in RTL.
- Preserve Norato's yellow accent and semantic tokens; do not copy design reference's black selected color. Contrast selection and its hover use yellow with dark text.
- Disabled styling takes precedence over selected styling in both Glass and Contrast; a disabled selected item uses a neutral surface/text and no elevation. Yellow Contrast is reserved for enabled selection.
- In the controlled Vue API, a parent may retain the current value when its item becomes disabled; the Playground exposes this Selected + Disabled state without silently changing the model.
- Support 2–4 options, 2 styles and 4 documented sizes. Small/Medium/Large retain 48px hit targets; XLarge is 56px.
- Keep the specimen centered in a dotted-glass 640×288 desktop / 320×288 narrow frame. Use its small Default marker; leave the specimen inert and put working state exploration in the executable Vue playground.
- Use a single controlled selection and Reka ToggleGroup keyboard/focus behavior; labels stay compact and items do not wrap vertically.
- The Variants section includes an inert 64-cell Segment Item matrix: both styles × four sizes × selected/unselected × Default/Hover/Disabled/Focus. This matrix is visual documentation only; keep the playground as the interactive source.

## Rating — 2026-11-01

- Preserve design reference's top specimen order and scale: Default marker, four filled stars and one empty star for 4.0, Persian score, and review count in one centered RTL row.
- Keep read-only star glyphs at the documented 16/20/24px sizes and input glyphs at 24/32px inside 48px targets; do not let the hit area stretch the visible stars.
- Half stars use a physical right-side fill in RTL. Rating Input accepts whole-star values only; half values remain read-only.
- Summary presents mean, review count, and five-to-one distribution bars. The sample stays inert; the live Reka RadioGroup and summary controls belong in the page playground.
- Use Norato semantic yellow, text, border, glass and focus tokens inside a dotted-glass 640×288 desktop / 320×288 mobile frame.
- **Remaining:** independent screen-reader review is not recorded; Rating maturity remains `Implemented`, but its family DoD stays open.

## Time Picker — 2026-11-01

- Use design reference's compact two-column hour/minute composition, dotted glass frame, Default marker, and bounded centered picker card. Keep the page sample inert and explore behavior in the Vue playground.
- Keep the canonical model 24-hour `HH:mm` and render time digits LTR inside Persian RTL surroundings; 12-hour mode changes only the presentation.
- Support Columns, Columns 12h, Wheel, Slots and Range. Use five-minute increments by default; slot availability is explicit; range endpoints remain chronological.
- Preserve at least 48px hit targets and compact visual geometry. The default desktop/mobile preview frame is content-column bounded; the picker panel is capped and repositions above/below the anchor to stay in view.
- Use Norato's brand-yellow token with dark text for the selected cell, consistent with the active Norato accent rule; blue remains for links and informational/status semantics.

## File Upload — 2026-11-02

- Use design reference's four-part hierarchy: Dropzone, File Item, Upload Tile, Avatar Upload. Keep the default specimen inert, with a bounded dotted-glass frame, upper-right Default marker and centered inner dropzone.
- Retain Norato semantic colors and Persian RTL surroundings; keep file names and file metadata LTR.
- Dropzone supports click, Enter/Space and drag/drop. Advertise formats and per-file maximum size before selection; keep invalid file reasons visible.
- A locally selected file is not an uploaded file. Network transfer and truthful progress are controlled by the host application; preserve retryable error details.
- Give each Upload Tile progressbar an accessible name that identifies the file; keep its numeric progress controlled by the host.
- Use fixed square/circular tile geometry and 48px minimum action targets; do not stretch preview parts to fill the available column.
- Use a purpose-drawn upload SVG in the inert and live Dropzone; treat it as the primary action with Norato yellow and dark text. Keep the dotted frame wash warm/neutral rather than using blue as an action accent.
- Keep decorative File Item type icons on neutral surface and secondary-text tokens; reserve blue for actual link and informational meaning.
- When required, include the word «الزامی» in the accessible name of the Dropzone. The decorative visible star alone does not communicate the requirement to assistive technology.
- Use Norato yellow for the Tile progress control's active track and thumb; keep this range treatment scoped to the File Upload playground.
- Preserve keyboard focus when a File Item action is replaced by a controlled status transition. When an action removes its row from the upload queue, continue at the next/previous surviving action, or return focus to the Dropzone when no file rows remain.

## Navbar — 2026-11-01

- Use design reference's six-part composition and 41 documented variant combinations; preserve the Button-like page structure of inert Preview, executable playground/copy example and nine contract sections.
- Use Norato yellow with dark text for the primary CTA, brand mark, current/open/hover navigation states, and a warm/neutral dotted specimen wash. Blue stays for link and informational semantics. Preserve RTL navigation order, Vazirmatn body and Estedad headings. Brand sits at inline-end, primary links follow it and actions sit at inline-start.
- Support App/Website/Centered × Bar/Floating/Transparent on desktop and Default/Back/Search/Large Title × Bar/Transparent on mobile. Mobile drawer and grouped links remain keyboard operable.
- Keep every link/action target at least 48px while nav text and logo stay intrinsic; the inert sample row may compress to its 48px control height plus stroke. Bound drawer/menu/frame widths to the viewport so neither items nor icons stretch.
- Use Reka NavigationMenu for website link/disclosure semantics and Reka Dialog for the modal mobile drawer. Do not use a desktop `menubar` role for site navigation.
- Transparent headers require a host background with readable contrast; do not assume or invent an image layer.
- The Variants section contains six inert galleries totaling 41 examples: Navbar (9), Mobile Header (8), Nav Link (20), Brand (2), Mega Menu (1), Mobile Menu (1). Keep state samples static; behavior stays in Playground.

## Sidebar — 2026-11-02

- Keep the panel at inline-end in RTL; place the 3px active indicator at the right edge. The 48px interaction target may be roomier than compact visual rows.
- The default inert specimen uses the shared Button frame and shows a brand header, one section title and four icon links. The live component retains its workspace slot, counters, nested links and user/card footer. Keep icon geometry intrinsic and bound the panel width.
- The Variants section renders six inert galleries totaling 42 samples: Sidebar (4), Item (20), Sub Item (8), Section Title (2), Header (4), Footer (4). Mobile Trigger/Drawer and Active Indicator are anatomy/behavior parts and are excluded from this total. Keep the live accessible behavior in Playground.
- Section titles are static headings, not disclosure controls. Parent/child destinations are native links in Tab order; only the Sidebar rail has an expand/collapse control.
- Use Norato semantic blue/yellow tokens and Persian typography. Collapsed labels remain accessible; mobile uses a modal drawer.


## Tabs — 2026-11-02

- Map design reference's four parts and 39 variants to the Button-structured page: inert bounded preview, live playground, copyable Vue usage and nine contract sections.
- Use Norato yellow for the active Line indicator and Soft selected surface; reserve brand blue for informational and link semantics.
- Support horizontal/vertical orientation and Small/Medium/Large while preserving 48px interaction targets; in vertical RTL, the list stays at inline-end.
- Keep icons intrinsic, order icon → label → count in RTL, and allow horizontal tab scrolling at narrow widths rather than squeezing or stretching labels.
- The inert top specimen uses the shared dotted Button-aligned 300px frame; mobile bounds are 327×300px at 390px and 257×300px at 320px. Keep its row 48px high and suppress vertical overflow while retaining horizontal scroll only when needed.
- Use Reka Tabs for tab/tabpanel relationships, controlled selection and keyboard focus.

## Breadcrumbs — 2026-11-02

- Follow design reference's four-part structure and 42 documented combinations on the Button-shaped page: inert bounded preview, live playground, copyable Vue usage and nine contract sections.
- Keep the semantic path in an ordered list inside a named navigation landmark. Current page remains non-link text with `aria-current="page"`.
- Use Norato's own semantic palette, RTL direction and Persian fonts. Use a direction-stable SVG chevron pointing left in RTL, per the user's explicit 2026-11-02 correction; slash is neutral.
- For long paths collapse middle destinations behind a 48px disclosure trigger. Keep the first and final two destinations visible, reveal actual links when expanded, and use `aria-expanded`/`aria-controls`.
- Keep labels intrinsic and prevent wrapping; at narrow widths allow the trail itself to scroll rather than stretching links or creating page overflow.
- In the inert default specimen, show the current-page label on a compact raised glass surface using Norato semantic tokens; preserve the reference's intrinsic ~29px visual height without changing 48px link/disclosure targets.

## Pagination — 2026-11-02

- Preserve design reference's five-part anatomy and 18 documented combinations on the Button-shaped page.
- Keep Norato's semantic blue palette, RTL ordering and Persian labels; Previous/Page items sit at inline-end, Next at inline-start.
- Numbers mode uses a bounded page window with first/last pages and a current-page sibling; Simple shows page X of Y with Previous/Next and suits narrow/mobile layouts.
- Keep all interactive targets at least 48px even for Small. Number buttons expose `aria-current="page"`; boundary controls are truly disabled.
- Keep ellipses noninteractive and intrinsic. On narrow screens the numbered rail can scroll internally; do not squash the page cells.

## Button preview geometry — 2026-11-02

- The top Button preview frame matches Split Button's 640px max width, 320px mobile cap, 288px block size and 24px radius tokens.
- Only Primary and Secondary are shown; both use the 48px Split Button Large height and content-based widths. The static Cancel specimen has been removed.
- This is documentation-preview geometry only and does not change runtime Button sizing.

## Stepper — 2026-11-08
- Preserve design reference's four progress compositions (Horizontal, Vertical, Compact, Dots) and status hierarchy, with Norato yellow current/completed accent, neutral upcoming connector and Norato error red. The first step follows logical inline-start (right in RTL); never turn status items into navigation controls. Current step has a 2px yellow ring; indicators stay circular/intrinsic and responsive overflow is internal. Use the dedicated --norato-stepper-preview-* tokens for the Button-shaped dotted 288px preview.
- Dots inherit the Stepper size: Small uses 4px upcoming/8px current, Medium 8px/12px and Large 12px/16px outer diameters. Current dots keep a 2px yellow ring inside that size; all dots use border-box geometry and semantic spacing tokens.

## Menu — 2026-11-08
- Match design reference's compact action-menu hierarchy: panel near 235×160px with four concise leaf actions, action icons on the right in RTL, shortcuts on the left, a separator before the final destructive action, and an inert dotted preview frame using Norato's own palette.
- Runtime menu rows retain at least 48px interaction height. Static specimen rows use the compact 36px token to match the reference preview. Small/Medium/Large remain proportional; icons keep intrinsic sizes.
- Use Norato yellow for hover and keyboard focus, neutral default surface/stroke and semantic error red for destructive actions. RTL submenu arrows point left and mirror in LTR. Reka DropdownMenu owns menu keyboard and dismissal behavior.
- **Verified:** matched desktop capture showed design reference frame/panel 636×300px / 235×160px and Norato column-constrained frame/panel about 576×288px / 234×157px. Root and child menus fit at 390px; RTL/LTR, leaf selection and keyboard close/focus return were checked. Pointer hover remains yellow when focus is on a different row; the disabled hovered item remains visually neutral.
- **Remaining:** 320px viewport and independent screen-reader review are not verified; Menu DoD remains open.

## Command Palette — 2026-11-09
- Follow design reference's single-dialog composition: search row, grouped commands, recent items, shortcut badges and keyboard-hint footer over a blurred backdrop. Keep the documentation specimen inert and bounded inside the same dotted preview frame used by Button.
- Use Norato glass surfaces, semantic tokens and yellow active/focus strokes. Search and Persian command text flow RTL; shortcut badges and key hints are explicitly LTR. Keep runtime targets at least 48px and let results scroll inside the panel.
- Center the modal independently of text direction using symmetric inline insets and auto margins; do not position it with a direction-sensitive horizontal transform.
- **Browser evidence:** matched desktop render at 1904×950: local frame/panel/search/group/rows/footer measure 635.98×334, 454×246, 452×48, 452×31, 440×43 and 452×72.19px; the current reference measures 636×333.88, 453.6×246.1, 451.44×47.25, 451.44×30.64, 438.48×43.2 and 451.44×73.17px. Maximum dimensional difference is 1.52px. The RTL search icon sits at the right edge; row icons use a 26px tile and 16px glyph; key hints align in two rows.
- **Mobile browser evidence (2026-11-10):** at 390×844 the local frame/panel/search/rows/footer measure 342×318, 338×246, 336×48, 320×43 and 336×72.2px; at 320×844 they measure 272×341, 260×271, 258×72, 250×43 and 258×72.2px. These are within 4px of the matched reference; document width equals viewport; search icons stay 18×18px and row icons are 16×16px.
- **Remaining:** independent screen-reader review remains open; Command Palette DoD remains open.

## Tree View — 2026-11-08
- Follow design reference’s single-select file-navigation model: Guides Off/On, folder open/closed and file rows, 20px logical indentation per depth, plus 16px file-label offset. Closed folders point left in RTL; open folders point down.
- Use the five design reference row states: Default, Hover, Selected, Disabled and Focus. Norato’s selected surface and 2px focus outline use its yellow palette; the disabled row stays muted. Do not carry over the retired checkbox-tree model in ERR-016–023.
- Keep the inert sample in the Button-sized dotted 288px frame, with a compact centered glass panel and Default marker. Runtime rows retain the 48px hit target. Reka TreeRoot/TreeItem owns tree roles, roving focus, direction-aware navigation and typeahead.
- Reset the focused TreeItem root outline so the only keyboard indicator is the 2px Norato-yellow row ring with the 2px offset; do not let the primitive's browser-default ring appear alongside it.
- Fine-pointer neutral hover applies only to enabled, unselected rows; selected rows keep the yellow surface, disabled rows get no hover surface, and keyboard focus retains a separate yellow outline.
- **Verified (2026-11-10):** live Chrome confirmed selected README remains yellow while hovered, keyboard focus remains distinct, and a globally disabled unselected row does not gain hover or selection. Playground returned to enabled, README-selected and the default expanded folders.
- **Remaining:** exact 390px/320px viewport, coarse-pointer/touch rendering, reduced-motion emulation and independent screen-reader review are not verified; Tree View DoD remains open.

## Alert — 2026-11-08
- Use design reference's 20 combinations: five status tones, Soft/Glass surface and Inline/Expanded composition. Preserve the status icon right and optional close action left in RTL.
- Keep preview inert and compact in the Button dotted frame. The separate playground controls tone, surface, layout and dismissibility.
- Use semantic Norato status containers, Estedad title, Vazirmatn body, intrinsic SVG and semantic roles; use yellow for interactive focus. Never reuse design reference's blue as Norato's brand accent.
- **Remaining:** browser parity, narrow 390/320 widths, manual keyboard/error announcements and independent screen-reader review remain open; Alert DoD remains open.

## Banner — 2026-11-08
- Match design reference's global announcement strip: status icon right, message, optional action and close on the left; desktop keeps one row and mobile stacks message/action. Keep the component full-width in its page placement.
- Use six semantic tones and explicit desktop/mobile options, but apply Norato status containers and yellow as the brand/focus accent. Action dispatches an event; the host owns navigation and visibility persistence.
- The top specimen is inert, uses the Button-sized dotted frame and Default marker; the lower playground is executable.
- **Verified (2026-11-09):** all six Mobile tones rendered in 390px and 320px same-origin browser frames; RTL, Danger `alert`/other `status` roles, 48px close and action targets, intrinsic 18px icon, and no horizontal document overflow (375/375px and 305/305px client/scroll widths).
- **Verified (2026-11-10):** matched 1265×720 desktop frames measure 636×300px in the reference and 631.98×300px in Norato. The banner measures 583.2×52.9px and 584×49px respectively after a desktop-only tokenized max width on the inert specimen. All six tones × both local layouts were captured; the reference provides only static Info and Inverse samples, and those two were compared. Browser AX confirms the six Persian tone labels and Danger `alert`/other `status` roles. At 390px/320px the inert frames measure 342×300px / 272×300px and local documents have no overflow.
- **Remaining:** independent screen-reader review; keep Banner DoD open until it is complete.

## Tooltip — 2026-11-09
- Match design reference's 16 combinations (Dark/Glass × Simple/Rich × Top/Bottom/Right/Left) with a compact default icon trigger and Bubble/Arrow in the Button-sized dotted specimen.
- Use Reka Tooltip Provider/Root/Trigger/Portal/Content/Arrow for keyboard focus, hover delay, Escape and collision handling. Preserve the host's semantic trigger and its yellow 2px focus ring; adapter content itself is noninteractive.
- For sibling Tooltip instances, wrap them in `NoratoTooltipProvider` so the 300ms skip-delay context is shared. Standalone `NoratoTooltip` keeps its own default provider.
- For sibling Tooltip instances, wrap them in `NoratoTooltipProvider` so the 300ms skip-delay context is shared. Standalone `NoratoTooltip` keeps its own default provider.
- Keep Rich's supplemental label noninteractive; actual actions remain in host UI. Use Popover for links/forms/actions.
- Use Norato inverse/glass and semantic text/elevation/radius tokens; RTL is explicit, and design reference blue is not imported.
- **Remaining:** independent screen-reader review remains open in the current DoD; visual/behavior evidence and technical gates are tracked in `tooltip-checklist.md`.

## Progress — 2026-11-08
- Match design reference's two presentations and 120 states: Linear/Circular, three sizes, four tones and five values. Linear thicknesses are 4/8/12px; only circular Medium/Large show a centered percentage.
- Use Norato yellow as the default fill, semantic green/amber/red for status tones, and neutral track. RTL linear fill begins at inline-start/right; circular begins at 12 o'clock and retains fixed geometry.
- Reka ProgressRoot owns accessible progressbar values; the progress is noninteractive and does not receive focus. Unknown duration belongs to Spinner.
- Match design reference's Linear composition: label and localized percentage share a metadata row above a full-width track. Keep RTL/LTR fill anchored to logical inline-start and circular geometry fixed.
- **Remaining:** matched browser render, 120-state visual matrix, mobile overflow and screen-reader review remain open.

## Spinner — 2026-11-08
- Match design reference's Ring (30% arc), Dots and custom-brand spinner (45% arc), three tones and five intrinsic square sizes; make Norato's default yellow rather than design reference's dark default.
- Keep Spinner decorative and Loader the sole polite status announcement. Support Inline, Refresh, Overlay and Page patterns without focus trap or stretching.
- Use reduced-motion-aware animation, semantic Norato color/size/motion tokens, and the Button-sized dotted inert preview with a separate playground.
- **Remaining:** browser matrix, responsive checks, reduced-motion review, screen-reader review and design reference comparison are recorded in the Spinner DoD; keep it open until those pass.
- Badge follows design reference's compact count/dot marker over an independent anchor, with a 2px surface ring and top-left placement in RTL. Keep Norato's semantic tones and require the host anchor to provide the count-aware accessible name. Neutral uses a dedicated status token to keep Dot visible on both the sample canvas and its white ring. At mobile widths, inset the specimen frame by 8px per side with Norato spacing tokens so the frame matches the reference width without causing document overflow.

## Skeleton — design reference shape, Norato palette, 2026-11-08

- design reference defines four base shapes, eight content patterns, and Pulse/Shimmer. Keep the expected content silhouette and use one effect across a busy region.
- Use Norato semantic neutral Skeleton tokens, never design reference's default dark fill. In RTL, Shimmer moves from left to right; disable animation for reduced motion.
- Keep skeletons inert and non-focusable, label the busy region, and hide decorative shapes from assistive technology.
- The component's `dir` attribute must control computed direction and mirror the Avatar/Text inline order; do not override it with inherited `direction` CSS.
# Empty State

- Use `design reference as the composition reference; retain Norato semantic color, Vazirmatn/Estedad and RTL-first layout.
- The documentation specimen uses the shared Button dotted/glass frame and Default marker. The component itself has no frame unless `container="card"` is set.
- Visual is fixed-size and decorative; horizontal layout places it at logical inline-start, and narrow screens stack without clipping. Titles/descriptions provide all meaning.
- Actions remain caller-owned slots with native, named buttons/links and 48px minimum targets. Do not add implicit navigation or a live region to static content.

# Avatar

- Match design reference's four families and 55 variants: Avatar 36, Group 12, Label 3, Status 4. Keep the specimen inert and the executable matrices in a separate playground.
- Keep the 2px surface ring, 24–64px intrinsic avatar sizes, image cover crop, and circle/square shape distinction. Norato's 24/32/40/48/56/64px progression is an explicit 8px-step inference because design reference only states the endpoints.
- Use Norato yellow/neutral initials surfaces and semantic presence tokens; do not copy design reference's dark default or use blue as the brand accent. Show a status label outside the avatar and add status meaning to the avatar's accessible name.
- In RTL, the first group member is on the right, +N remains on the left, and the presence dot sits physically bottom-left. Use logical overlap and verify LTR mirroring.
- Derive at most two initials, preserve Unicode graphemes, and fall back from failed images without stretching or changing geometry.
- **Remaining:** matched screenshots, complete 55-variant browser review, RTL/LTR, responsive behavior, accessibility and final DoD remain open until recorded in Avatar's feature checklist.

# Timeline

- Follow design reference's right-side RTL rail, compact event hierarchy, Dot/Icon/Avatar markers, three item layouts and day-grouped Activity Feed. Preserve its 26 documented combinations.
- Use Norato semantic neutral/success/warning/error tones. Active is a raised neutral marker with Norato yellow detail; do not use blue as an accent.
- Keep rail and text mirrored in LTR, event order caller-controlled, avatar crops circular/intrinsic, and all specimens inert. Use ordered-list and time semantics; do not introduce unnecessary focus targets.
- **Remaining:** matched browser comparison, complete 26-variant matrix, RTL/LTR, narrow widths, accessibility tree and independent screen-reader review remain open in the Timeline DoD.

# Image — 2026-11-08

- Preserve source geometry with 1:1, 4:3, 16:9 or 3:4 aspect ratios; `cover` may crop and `contain` preserves the full source. Never stretch an image to fill an unrelated height.
- Keep the inert image specimen media capped at 320px through `--norato-image-preview-media-inline-size`; preserve the shared 288px Button frame and let aspect ratio determine media height.
- The default artwork uses a warm sunset field, a cropped soft sun disc, a cool lower edge, and a shaded caption. Keep the illustration abstract and direction-neutral while retaining the local Norato yellow accent. Refreshed browser comparison confirms its composition now follows the reference; the fixed 4:3 media and shared frame remain proportional.
- Gallery supports Grid, Masonry and Featured (main + thumbnails). Selected thumbnail uses Norato yellow; keyboard focus remains a separate visible ring.
- Keep all thumbnail targets at least 48×48px. Lightbox media is bounded by the viewport and keeps its intrinsic ratio.
- **Review note:** At the recorded 1280×720 viewport, the Norato frame measured 584×288px and media 320×240px; the reference measured 636×331px with media 324×243px. At 390px, Norato measured 343×288px with media 320×240px; reference measured 327×315px with media 320.76×243px. At 320px, Norato measured 273×288px with media 263×197.25px and no document overflow; reference measured 257×315px with media 245×243px and a 326px-wide document. The 4:3 media proportions are preserved; shared-frame geometry still differs and requires a deliberate review against the Button frame rule.
- **Verified:** Lightbox previous/next controls, RTL index wrap, focus retention, Tab/Shift+Tab containment and Escape return to the opener. Exact 4:3 image bounds were measured at 1920×908, 390×844 and 320×640; all stayed within the modal without horizontal overflow. The expanded Image Playground was measured at 390×844 and 320×640; controls stack in one column and the document has no horizontal overflow. The live Image hover scrim was inspected at all four ratios.
- **Remaining:** failed-source behavior, reduced-motion emulation, and independent screen-reader review are open; see the Image DoD checklist.
## Charts — 2026-11-08

- کارت نمودار ۵۲۰ پیکسل است؛ نمودارها SVG با نسبت ثابت هستند و در عرض کم در قاب خود اسکرول افقی می‌گیرند تا شکل داده‌ها فشرده یا کشیده نشود.
- ترتیب سری‌ها ثابت است و سری اول زرد Norato است. راهنمای Donut از نام دسته‌ها استفاده می‌کند؛ مقدارها در جدول واقعی نیز حفظ می‌شوند.
- Tooltip فقط وقتی میزبان `id` اتصال `aria-describedby` را فراهم کند نقش دسترس‌پذیر tooltip می‌گیرد.
- نمودارهای نمایشی بالای صفحه غیرفعال‌اند؛ تغییر نوع، جهت و روند فقط در playground پایین صفحه انجام می‌شود.

## فهرست کامپوننت‌ها در مستندات — 2026-11-08

- صفحهٔ کامپوننت انتخاب‌شده باید در فهرست کناری با پس‌زمینهٔ زرد Norato و `aria-current="page"` مشخص باشد.
- تغییر کامپوننت در همان اپ انجام می‌شود؛ URL و تاریخچهٔ مرورگر همگام می‌مانند و انتخاب جاری در محدودهٔ فهرست کناری دیده می‌شود.

# Accordion — selected/open row

- Open trigger uses Norato's warning-container fill, distinct from the white expanded content region.
- Keep every sibling title visible when selection changes; the prior row's panel may close in single mode, but its trigger/title remains.

## Carousel — RTL order and intrinsic media

- First slide and first pagination dot belong on the right in RTL. The next action advances left; ArrowLeft advances and ArrowRight goes back.
- Show a portion of the adjacent slide. Keep slide media at an intrinsic aspect ratio; never force a shared fixed height that stretches images.
- Norato's active pagination uses the yellow brand accent. The control remains keyboard reachable with at least a 48px hit target.
- **Observation:** at 385px, arrow navigation initially scrolled the page vertically and immediate scroll events could reset the active dot.
- **Correction:** scroll the carousel track to the target slide center and debounce active-index synchronization until scrolling settles.
- **Validation:** local mobile screenshot showed first slide right-aligned, neighboring slide peeking on the left, and arrow plus ArrowLeft navigation advancing the card and active indicator together.
- Mobile variant cards reflow to one column below 600px; Norato 48px interaction targets remain intrinsic. Dot cards stack their label/control, and semantic spacing tokens let five indicators fit without stretching or page overflow.
- **Verified:** same-origin 390px/320px frames measure document client/scroll widths 375/375px and 305/305px; every sample matrix remains within bounds and its 48×48px targets remain unchanged. The host-controlled model action fits at both widths. Reduced-motion emulation centers slide 2 immediately (within 0.23px at 390px and 0.04px at 320px).
- **Remaining:** native touch scrolling could not be verified with synthetic CDP touch input, and independent screen-reader review remains open.

## Chat — sender sides and message grouping

- The inert Chat specimen uses the shared Button dotted frame at 640×300 and shows two opposite message bubbles with timestamp/read metadata; keep the full header and composer in the separate live playground.
- In RTL, incoming remains right aligned and outgoing remains left aligned. Do not rely on color alone to identify sender.
- The outgoing bubble uses Norato yellow with primary text; incoming uses a neutral surface. Keep text bubbles below the available conversation width.
- Reduce vertical spacing only between consecutive messages from the same sender. Preserve the normal gap when the sender changes.
- Images retain intrinsic proportion and audio/file controls keep their accessible names and 48px target.
- **Validation:** local mobile page was reviewed alongside the matching reference capture. Enter sent a typed outgoing message and reset the composer; the message-type selector exposed its image alternative text, and the display-only recording state disabled text input.

## Notification Center — grouping and unread state

- Keep the page's inert visual specimen in the same dotted glass frame size as Button; place its implementation playground below the preview, following Button's page structure.
- Use a compact floating Popover for the bell presentation and a viewport-bounded side panel for the panel presentation. Group items under day labels without stretching avatar/icon geometry.
- Unread title, marker and soft surface use Norato yellow tokens. User/system marks stay neutral; do not import another system's accent colors.
- In RTL the bell badge sits at the upper inline-start corner; headings, groups and actions follow RTL reading order. Preserve 48px controls and use natural text truncation inside bounded rows.

## Modal — dialog and form patterns

- Keep the inert preview in the shared Button-sized dotted glass frame; show the destructive confirmation as the default visual specimen with danger action on the left and cancel on the right in RTL.
- Dialog surfaces use Norato semantic status colors for tone while interactive focus remains yellow. Keep the overlay behind the dialog and bound long content to the viewport instead of stretching the surface.
- The page follows Button's structure: static preview, live playground, copyable Vue usage, then the component contract sections.

## Drawer — physical side and inner corners

- `side="right"` and `side="left"` refer to physical viewport edges in both RTL and LTR; the default RTL side opens on the right.
- Round only the two corners facing the page content. A right-side panel has rounded left corners; a left-side panel has rounded right corners. Bottom sheets round both top corners.
- The static preview uses the same right-side geometry as the default interactive drawer. Keep its panel and handle at intrinsic sizes.

## Radio Button — disabled and error priority

- When a Radio group is both invalid and disabled, render the neutral disabled stroke, surface, indicator and text treatment ahead of error color. Preserve `aria-invalid`, the linked validation message and the selected value; native disabled behavior prevents changes until re-enabled.

## Input — variant-axis chips

- Input variant-axis values in both the Variant gallery and Parts section are descriptive, inert labels; keep their fill and outline neutral. Use the Norato-yellow Stroke only on the actual focused/active example, not on every axis chip or a noninteractive state label.

## Table — desktop specimen bounds

- Keep the Table's inert specimen frame at the measured 636px desktop reference width when the documentation column is slightly narrower; use a semantic spacing token for the scoped extension.
- Preserve the inner table geometry, 48px rows and live adapter. At mobile widths, inset the inert frame by 16px and center it to match the reference composition.
- **Validation:** live local browser measures 635.984×345px at 1920×903, matching the 636px desktop width cap; exact 390/320 post-change measurements remain open in the mobile inset follow-up.

## Table — mobile specimen frame inset

- At mobile widths, center the inert Table specimen at 16px less than its parent width using the semantic `space-4` token. Do not apply the inset to the live table or desktop frame.
- Exact 390/320 post-change browser measurements remain an open validation item until captured.
File Upload — وقتی انتخاب فایل الزامی است، واژهٔ «الزامی» در نام دسترس‌پذیر Dropzone قرار می‌گیرد؛ ستارهٔ کنار عنوان فقط نشان بصری است و به‌تنهایی جایگزین اعلام دسترس‌پذیر نمی‌شود.

## Avatar — static default specimen

- «Default» ایستا باید حالت پیش‌فرض adapter یعنی initials را نشان دهد. اندازهٔ XL با مقیاس specimen-only برابر 1.08 نمایش داده می‌شود؛ اندازهٔ عمومی 56px و playground تغییر نمی‌کنند.
- در عرض حداکثر 599px، قاب نمونه 300px ارتفاع و حداکثر 328px عرض دارد؛ در viewportهای 390 و 320 پیکسل به‌ترتیب 327 و 257px شده و در x=24 مرکز می‌شود. این قاعده به قاب ایستا محدود است.
- رنگ Norato، نام فارسی، RTL، عدم کشیدگی محتوای Avatar و semantics نمونهٔ inert حفظ می‌شوند.

## Timeline — default specimen geometry

- قاب ایستا با قاب مشترک Button هم‌اندازه می‌ماند: 636×328px دسکتاپ، 327×311.5px در عرض 390 و 257×311.5px در عرض 320.
- چهار رویداد کوتاه در RTL، ترتیب ورودی را حفظ می‌کنند؛ نقطهٔ عادی 10.8px، نقطهٔ فعال 12.96px و ردیف‌ها حدود 59.8px هستند. در عرض‌های زیر 360px، ریل و نقطه در یک محور باقی می‌مانند.
- قاب و چیدمان نمونه inert هستند؛ رنگ‌های موفقیت/خنثی معنایی‌اند و وضعیت فعال از زرد Norato استفاده می‌کند.

## Charts — default specimen geometry

- قاب نمودار ایستا 636×332px در دسکتاپ، 327×300px در عرض390 و 257×300px در عرض320 است؛ روی موبایل در x=24 مرکز می‌شود.
- کارت ایستا و SVG بدون کشیدگی fit می‌شوند؛ نمودار ثابت در 320px اسکرول داخلی نشان نمی‌دهد. نمودارهای اجرایی همچنان حداقل عرض خوانا و اسکرول محلی خود را حفظ می‌کنند.
- سری اول زرد Norato می‌ماند؛ جهت عنوان و کارت RTL است و محور SVG از چپ به راست نگه داشته می‌شود.

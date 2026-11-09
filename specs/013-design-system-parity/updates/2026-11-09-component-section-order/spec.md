# Specify — Component page section order

## Evidence

A heading audit of all 49 component contracts found deviations from Button's structure: six contracts lack `Preview`; Card places States before Sizes; Sidebar duplicates `Sizes` and places Parts before Sizes; Empty State inserts `Responsive` before States; Toast puts custom API/RTL material before or among canonical sections and puts Sizes/Parts/Usage/Accessibility after Tokens; and several contracts append supplemental DoD/API sections after Tokens without a consistent rule.

## Acceptance

1. Every component contract has a `Preview` heading, kept first because the app filters it from generated secondary sections while rendering the visual specimen at the top.
2. The first nine rendered contract sections after Preview exactly follow Button order: Overview, Anatomy, Variants, Sizes, States, Parts, Usage, Accessibility, Tokens.
3. All existing content is retained. Component-specific supplemental sections follow Tokens.
4. Duplicate canonical headings are consolidated without losing their body content.
5. No component API, runtime behavior, visual values, RTL policy or DoD status changes in this documentation-structure correction.
6. A catalog-wide parser audit, browser render of representative affected pages, and required project technical gates pass; DoD ledgers remain open where other criteria are open.

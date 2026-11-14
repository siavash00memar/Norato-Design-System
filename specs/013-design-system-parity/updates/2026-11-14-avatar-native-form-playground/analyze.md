# Analyze — Avatar native-form playground

- `NoratoFileUpload` and `NoratoAvatarUpload` already accept `name`, `required`, and `disabled` props; the blocker is only the playground context.
- The preview's existing action buttons declare `type="button"`, so wrapping the section in a form will not make them submit.
- Retaining the existing preview class preserves the current layout selector. The form can be checked with matched screenshots after implementation.
- Browser chooser automation can provide real local File objects to both controls. Native cancel restoration still requires a separately observable cancel path.

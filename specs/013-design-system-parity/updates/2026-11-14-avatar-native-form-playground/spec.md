# Specify — Avatar native-form playground

## Problem
The runnable File Upload playground shows `NoratoAvatarUpload` and `NoratoFileUpload` outside a `<form>` and passes neither a `name` prop. That makes native `FormData` integration impossible to verify in the actual browser page.

## Acceptance contract
- Put the runnable preview in a native `<form>` with no submit control or network action.
- Give the two native inputs stable names (`attachments` and `avatar`).
- Bind the existing required and disabled playground toggles to both adapters.
- Keep all playground actions non-submitting and keep the visible geometry unchanged.
- Verify real file selection, input validity, `FormData` names and values, clear behavior, same-file reselection, RTL, and no console errors in the browser.

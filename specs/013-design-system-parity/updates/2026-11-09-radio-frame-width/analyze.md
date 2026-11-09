# Analyze — Radio Button mobile specimen frame

- The existing mobile selector is limited by available parent width and the 328px mobile token, but at 320px the parent is 272.8px while the reference frame is 256.8px.
- The Combobox mobile selector already uses viewport width minus the shared 64px spacing token to prevent this narrow-screen oversizing.
- Reuse that responsive relationship with a 1px border token adjustment for Radio Button: expected widths are about 257px at 320px and 327px at 390px, both within 1px of observed reference widths 256.8px and 327.2px.
- Keep the frame height and specimen content untouched; verify measured result before recording success.

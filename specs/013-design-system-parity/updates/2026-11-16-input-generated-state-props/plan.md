# Input generated-state props — Plan

1. Reproduce a shared-state mismatch in the actual local Input playground and compare the browser accessibility tree with the generated SFC.
2. Inspect `NoratoInputFieldProps`, all eight adapters, and the playground template to establish supported common props and subtype differences.
3. Build one small state-prop formatter from the existing playground refs and apply it to each generated adapter line, preserving subtype settings and current model initializers.
4. Browser-check the default, shared disabled, shared required/read-only, and error+success combinations across all eight code lines; confirm live AX state and SFC agree.
5. Restore the initial playground state; update component/request evidence and error log.
6. Run token, catalog, Vue TypeScript/build, and diff checks. Do not deploy.

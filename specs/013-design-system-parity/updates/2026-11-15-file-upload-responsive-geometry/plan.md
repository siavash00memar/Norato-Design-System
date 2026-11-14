# Plan — File Upload responsive geometry evidence

1. Inspect File Upload responsive selectors, token ownership, and the component contract.
2. Render local and reference pages at 390px and 320px viewport widths; measure frame, Dropzone, and document overflow.
3. Adjust only existing responsive frame width/padding using semantic spacing tokens; keep inner height 152px.
4. Re-render both viewports and compare measured frame/Dropzone geometry and screenshots.
5. Update the component contract only if the existing fixed-height rule needs clarification, then update DoD and request-validation evidence.
6. Run project-mandated token, catalog, Vue typecheck/build, and diff gates; do not deploy.

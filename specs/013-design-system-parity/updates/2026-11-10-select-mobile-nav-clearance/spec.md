# Spec — Select mobile navigation clearance

At narrow viewports, an expanded Select listbox must not be covered by the fixed mobile navigation. The listbox must reserve the same bottom clearance already used by mobile page content, preserve its search/footer rows, and keep the option area scrollable. Selection, RTL, and keyboard dismissal semantics remain unchanged.

**Acceptance:** At 320×844 and 390×844, the popup ends above the fixed navigation; every grouped option, including the final disabled option, can be brought into view. Desktop geometry remains unchanged.

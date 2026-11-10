# Analyze — Select mobile navigation clearance

The popup is portaled and uses Reka's viewport-available height. On the 320×844 page this lets it extend beneath the fixed bottom navigation. Raising z-index would not make the obscured content reachable on all devices and would merely place the popup over navigation controls. Instead, reserve the existing 48px target plus 24px mobile content spacing and let the options row scroll within the remaining popup height. Keep the rule below the mobile breakpoint so desktop geometry is unaffected.

**Analyze gate: passed; no unresolved product decision.**

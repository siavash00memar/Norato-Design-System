# Plan — Modal optional trigger and uncontrolled open

1. Audit NoratoModal model/slots, current Reka DialogTrigger usage elsewhere, Modal playground and contract API.
2. Add the optional trigger slot and slot-provided close callback without changing current controlled defaults.
3. Add a playground control and generated Vue snippet for internal-open mode; keep existing controlled mode intact.
4. Update the component contract, DoD, request validation and error log.
5. Verify controlled and uncontrolled paths in the local browser, including focus return, Escape, cancel/close and RTL.
6. Run token/catalog, Vue typecheck/build and diff gates; keep independent screen-reader review open.

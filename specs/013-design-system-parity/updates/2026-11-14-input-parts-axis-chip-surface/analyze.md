# Analyze — Input Parts axis chip surface

At the same browser viewport, the reference Parts area presents variant values as plain metadata on its rows. Local Input Parts currently renders each value inside a pale-blue chip, which conflicts with the existing Norato rule that Input axis values are neutral descriptive labels and the active accent is reserved for actual focused/selected samples.

Source inspection found the shared `.variant-axis > span` rule uses `--norato-color-info-container`. The earlier scoped Input correction covers `.input-family-matrix` and therefore fixes the supplemental state/variant gallery, but the Parts template independently applies `.part-axes` and inherits the shared blue surface. Extend the existing Input-only rule to that specific Parts group. Do not edit the shared base rule or sibling families.

export type InteractionMode =
  | { mode: 'immediate'; applies: 'switches-and-independent-controls' }
  | { mode: 'transactional'; applies: 'multi-field-or-reviewable-changes'; actions: ['save/apply', 'cancel/revert'] };

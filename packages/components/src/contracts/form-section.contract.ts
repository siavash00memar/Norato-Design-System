export interface NoratoFormSectionAlignmentContract {
  titleBlock: 'shared-left-edge';
  fieldBlock: 'shared-right-edge';
  blockGap: '12px';
  direction: 'rtl';
}

export const noratoProductPattern = {
  mobileFrame: '360px',
  contentGutter: '24px',
  contentWidth: '312px',
  labelControlGap: '6px',
  fieldGroupGap: '8px',
  visualControlHeight: '36px',
  interactionTarget: '48px',
} as const;

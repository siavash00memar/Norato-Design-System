export type TokenCategory =
  | 'color'
  | 'typography'
  | 'spacing'
  | 'shape'
  | 'elevation'
  | 'motion'
  | 'layout'
  | 'direction';

export interface DesignToken {
  name: string;
  category: TokenCategory;
  primitiveValue: string;
  semanticRole: string;
  sourceNode: string;
  usageRule: string;
  verification: string;
}

export const productPatternTokens = {
  mobileFrameWidth: '--norato-frame-mobile-width',
  compactGutter: '--norato-content-gutter-compact',
  mobileContentWidth: '--norato-content-width-mobile',
  visualControlHeight: '--norato-control-visual-height',
  touchTargetMin: '--norato-control-target-min',
  fieldLabelGap: '--norato-field-label-gap',
  fieldGroupGap: '--norato-field-group-gap',
  messageCardPadding: '--norato-message-card-padding',
  progressHeight: '--norato-progress-height',
} as const;

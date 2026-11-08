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
  progressLinearSmall: '--norato-progress-linear-small',
  progressLinearMedium: '--norato-progress-linear-medium',
  progressLinearLarge: '--norato-progress-linear-large',
  progressCircleSmall: '--norato-progress-circle-small',
  progressCircleMedium: '--norato-progress-circle-medium',
  progressCircleLarge: '--norato-progress-circle-large',
  progressCircleStrokeSmall: '--norato-progress-circle-stroke-small',
  progressCircleStrokeMedium: '--norato-progress-circle-stroke-medium',
  progressCircleStrokeLarge: '--norato-progress-circle-stroke-large',
  progressPreviewInlineSize: '--norato-progress-preview-inline-size',
} as const;

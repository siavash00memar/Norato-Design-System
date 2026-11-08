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
  spinnerSize16: '--norato-spinner-size-16',
  spinnerSize20: '--norato-spinner-size-20',
  spinnerSize24: '--norato-spinner-size-24',
  spinnerSize32: '--norato-spinner-size-32',
  spinnerSize48: '--norato-spinner-size-48',
  spinnerStroke16: '--norato-spinner-stroke-16',
  spinnerStroke20: '--norato-spinner-stroke-20',
  spinnerStroke24: '--norato-spinner-stroke-24',
  spinnerStroke32: '--norato-spinner-stroke-32',
  spinnerStroke48: '--norato-spinner-stroke-48',
  spinnerAnimationDuration: '--norato-spinner-animation-duration',
  spinnerDotDelay: '--norato-spinner-dot-delay',
} as const;

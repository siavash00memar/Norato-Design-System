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

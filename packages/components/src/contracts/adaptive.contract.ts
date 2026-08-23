export type NoratoWidthClass = 'compact' | 'medium' | 'expanded' | 'large' | 'extra-large';

export const noratoWidthRanges: Record<NoratoWidthClass, string> = {
  compact: '<600px', medium: '600–839px', expanded: '840–1199px', large: '1200–1599px', 'extra-large': '≥1600px',
};

export const readableMeasure = '65ch';

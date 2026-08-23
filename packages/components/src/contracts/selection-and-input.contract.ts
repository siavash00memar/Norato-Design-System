export type NoratoSelectionComponent =
  | 'Tag'
  | 'Search'
  | 'Checkbox'
  | 'Radio'
  | 'Date Picker'
  | 'Upload'
  | 'Tree View';

export interface SelectionAndInputContract {
  component: NoratoSelectionComponent;
  rtl: true;
  requiresAccessibleName: true;
  states: string[];
}

export interface NoratoFieldContract {
  id: string;
  label: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  dir?: 'rtl' | 'ltr' | 'auto';
}

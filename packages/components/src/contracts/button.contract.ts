export type NoratoButtonVariant = 'primary' | 'secondary' | 'inverse';

export interface NoratoButtonContract {
  variant?: NoratoButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  label: string;
}

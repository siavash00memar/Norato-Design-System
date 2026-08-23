type Props = { label: string; variant?: 'primary' | 'secondary' | 'inverse' | 'destructive'; type?: 'button' | 'submit' | 'reset'; disabled?: boolean; loading?: boolean; pressed?: boolean; iconOnly?: boolean; accessibleLabel?: string };

export function NoratoButton({ label, variant = 'primary', type = 'button', disabled = false, loading = false, pressed, iconOnly = false, accessibleLabel }: Props) {
  if (iconOnly && !accessibleLabel) throw new Error('Icon-only Norato Button requires accessibleLabel');
  return <button className={`norato-button${iconOnly ? ' norato-button--icon-only' : ''}`} data-variant={variant} type={type} disabled={disabled || loading} aria-label={iconOnly ? accessibleLabel : undefined} aria-busy={loading || undefined} aria-pressed={pressed}>{loading && <span className="norato-button__progress" aria-hidden="true" />}{label}</button>;
}

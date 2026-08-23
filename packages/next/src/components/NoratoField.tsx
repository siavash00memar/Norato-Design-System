type Props = { id: string; label: string; placeholder?: string; value?: string; helperText?: string; errorText?: string; disabled?: boolean; loading?: boolean; required?: boolean; dir?: 'rtl' | 'ltr' | 'auto' };

export function NoratoField({ id, label, placeholder, value, helperText, errorText, disabled = false, loading = false, required = false, dir = 'rtl' }: Props) {
  const describedBy = [helperText && `${id}-helper`, errorText && `${id}-error`].filter(Boolean).join(' ') || undefined;
  return <div className={`norato-field-group${errorText ? ' is-invalid' : ''}${loading ? ' is-loading' : ''}`}><label className="norato-field__label" htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label><input id={id} className="norato-field" dir={dir} value={value} placeholder={placeholder} disabled={disabled || loading} required={required} aria-invalid={errorText ? 'true' : undefined} aria-describedby={describedBy} />{helperText && <p className="norato-field__message" id={`${id}-helper`}>{helperText}</p>}{errorText && <p className="norato-field__message norato-field__error" id={`${id}-error`} role="alert">{errorText}</p>}</div>;
}

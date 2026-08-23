export type NoratoButtonOptions = { label: string; variant?: 'primary' | 'secondary' | 'inverse' | 'destructive'; type?: 'button' | 'submit' | 'reset'; disabled?: boolean; loading?: boolean; pressed?: boolean; iconOnly?: boolean; accessibleLabel?: string };
export function noratoButtonMarkup(options: NoratoButtonOptions | string, variant: NoratoButtonOptions['variant'] = 'primary') {
  const value = typeof options === 'string' ? { label: options, variant } : options;
  const { label, variant: intent = 'primary', type = 'button', disabled = false, loading = false, pressed, iconOnly = false, accessibleLabel } = value;
  if (iconOnly && !accessibleLabel) throw new Error('Icon-only Norato Button requires accessibleLabel');
  const attrs = [`class="norato-button${iconOnly ? ' norato-button--icon-only' : ''}"`, `data-variant="${intent}"`, `type="${type}"`, disabled || loading ? 'disabled' : '', loading ? 'aria-busy="true"' : '', pressed === undefined ? '' : `aria-pressed="${pressed}"`, iconOnly ? `aria-label="${accessibleLabel}"` : ''].filter(Boolean).join(' ');
  return `<button ${attrs}>${loading ? '<span class="norato-button__progress" aria-hidden="true"></span>' : ''}${label}</button>`;
}

export type NoratoFieldOptions = {
  id: string; label: string; placeholder?: string; value?: string;
  helperText?: string; errorText?: string; disabled?: boolean; loading?: boolean;
  required?: boolean; dir?: 'rtl' | 'ltr' | 'auto';
};

export function noratoFieldMarkup(options: NoratoFieldOptions) {
  const { id, label, placeholder = '', value = '', helperText, errorText, disabled = false, loading = false, required = false, dir = 'rtl' } = options;
  const describedBy = [helperText && `${id}-helper`, errorText && `${id}-error`].filter(Boolean).join(' ');
  const attrs = [`id="${id}"`, `dir="${dir}"`, `value="${value}"`, `placeholder="${placeholder}"`, required ? 'required' : '', disabled ? 'disabled' : '', errorText ? 'aria-invalid="true"' : '', describedBy ? `aria-describedby="${describedBy}"` : ''].filter(Boolean).join(' ');
  return `<div class="norato-field-group${errorText ? ' is-invalid' : ''}${loading ? ' is-loading' : ''}"><label class="norato-field__label" for="${id}">${label}${required ? ' <span aria-hidden="true">*</span>' : ''}</label><input class="norato-field" ${attrs} />${helperText ? `<p class="norato-field__message" id="${id}-helper">${helperText}</p>` : ''}${errorText ? `<p class="norato-field__message norato-field__error" id="${id}-error" role="alert">${errorText}</p>` : ''}</div>`;
}

export type NoratoTextareaOptions = Omit<NoratoFieldOptions, 'value'> & { value?: string };
export function noratoTextareaMarkup(options: NoratoTextareaOptions) {
  const { id, label, placeholder = '', value = '', helperText, errorText, disabled = false, loading = false, required = false, dir = 'rtl' } = options;
  const describedBy = [helperText && `${id}-helper`, errorText && `${id}-error`].filter(Boolean).join(' ');
  return `<div class="norato-textarea-group${errorText ? ' is-invalid' : ''}${loading ? ' is-loading' : ''}"><label class="norato-textarea__label" for="${id}">${label}${required ? ' <span aria-hidden="true">*</span>' : ''}</label><textarea class="norato-textarea" id="${id}" dir="${dir}" placeholder="${placeholder}" ${disabled || loading ? 'disabled' : ''} ${required ? 'required' : ''} ${errorText ? 'aria-invalid="true"' : ''}${describedBy ? ` aria-describedby="${describedBy}"` : ''}>${value}</textarea>${helperText ? `<p id="${id}-helper" class="norato-textarea__message">${helperText}</p>` : ''}${errorText ? `<p id="${id}-error" class="norato-textarea__message norato-textarea__error" role="alert">${errorText}</p>` : ''}</div>`;
}

export type NoratoSelectOption = { value: string; label: string; disabled?: boolean };
export type NoratoSelectOptions = { id: string; label: string; options: NoratoSelectOption[]; value?: string; placeholder?: string; helperText?: string; errorText?: string; disabled?: boolean; loading?: boolean; required?: boolean; dir?: 'rtl' | 'ltr' | 'auto' };
export function noratoSelectMarkup(options: NoratoSelectOptions) {
  const { id, label, options: items, value = '', placeholder, helperText, errorText, disabled = false, loading = false, required = false, dir = 'rtl' } = options;
  const describedBy = [helperText && `${id}-helper`, errorText && `${id}-error`].filter(Boolean).join(' ');
  const choices = [placeholder ? `<option value="">${placeholder}</option>` : '', ...items.map(item => `<option value="${item.value}"${item.value === value ? ' selected' : ''}${item.disabled ? ' disabled' : ''}>${item.label}</option>`)].join('');
  return `<div class="norato-select-group${errorText ? ' is-invalid' : ''}${loading ? ' is-loading' : ''}"><label class="norato-select__label" for="${id}">${label}${required ? ' <span aria-hidden="true">*</span>' : ''}</label><select class="norato-select" id="${id}" dir="${dir}" ${disabled || loading ? 'disabled' : ''} ${required ? 'required' : ''} ${errorText ? 'aria-invalid="true"' : ''}${describedBy ? ` aria-describedby="${describedBy}"` : ''}>${choices}</select>${helperText ? `<p id="${id}-helper" class="norato-select__message">${helperText}</p>` : ''}${errorText ? `<p id="${id}-error" class="norato-select__message norato-select__error" role="alert">${errorText}</p>` : ''}</div>`;
}

export type NoratoDatePickerOptions = { id: string; label: string; value?: string; placeholder?: string; helperText?: string; errorText?: string; disabled?: boolean; loading?: boolean; dir?: 'rtl' | 'ltr' | 'auto' };
export function noratoDatePickerMarkup(options: NoratoDatePickerOptions) { const { id, label, value = '', placeholder = 'تاریخ را انتخاب کنید', helperText, errorText, disabled = false, loading = false, dir = 'rtl' } = options; const describedBy = [helperText && `${id}-helper`, errorText && `${id}-error`].filter(Boolean).join(' '); return `<div class="norato-date-picker${errorText ? ' is-invalid' : ''}${loading ? ' is-loading' : ''}"><label class="norato-date-picker__label" for="${id}">${label}</label><div class="norato-date-picker__control"><input class="norato-date-picker__input" id="${id}" dir="${dir}" value="${value}" placeholder="${placeholder}" readonly ${disabled || loading ? 'disabled' : ''}${errorText ? ' aria-invalid="true"' : ''}${describedBy ? ` aria-describedby="${describedBy}"` : ''} /><button class="norato-date-picker__trigger" type="button" aria-label="باز کردن تقویم" aria-haspopup="dialog" aria-expanded="false" ${disabled || loading ? 'disabled' : ''}>▣</button></div>${helperText ? `<p id="${id}-helper" class="norato-date-picker__message">${helperText}</p>` : ''}${errorText ? `<p id="${id}-error" class="norato-date-picker__message norato-date-picker__error" role="alert">${errorText}</p>` : ''}</div>`; }

export type NoratoChoiceOption = { value: string; label: string; disabled?: boolean };
export function noratoChoiceGroupMarkup(kind: 'checkbox' | 'radio', id: string, label: string, options: NoratoChoiceOption[], selected: string[] = [], errorText = '') { const controls = options.map((option, index) => `<label class="norato-choice"><input type="${kind}" name="${id}" value="${option.value}"${selected.includes(option.value) ? ' checked' : ''}${option.disabled ? ' disabled' : ''} /><span>${option.label}</span></label>`).join(''); return `<fieldset class="norato-choice-group${errorText ? ' is-invalid' : ''}" dir="rtl"><legend>${label}</legend>${controls}${errorText ? `<p class="norato-choice__error" role="alert">${errorText}</p>` : ''}</fieldset>`; }

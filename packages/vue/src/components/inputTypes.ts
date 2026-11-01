export type NoratoInputSize = 'small' | 'medium' | 'large' | 'xlarge'
export type NoratoInputDirection = 'rtl' | 'ltr' | 'auto'
export type NoratoInputLabelPlacement = 'inside' | 'outside'

export type NoratoInputFieldProps = {
  id: string
  label: string
  modelValue?: string
  placeholder?: string
  helperText?: string
  errorText?: string
  successText?: string
  required?: boolean
  disabled?: boolean
  loading?: boolean
  readOnly?: boolean
  dir?: NoratoInputDirection
  size?: NoratoInputSize
  labelPlacement?: NoratoInputLabelPlacement
}

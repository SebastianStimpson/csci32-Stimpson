import { getInputSizeStyles, Size } from './size'
import { HTMLInputTypeAttribute } from 'react'
import { getVariantBorderStyles, getVariantInputTextStyles, getVariantOutlineStyles, Variant } from './variant'
import { getCommonStyles } from './tokens'

interface InputProps {
  variant?: Variant
  size?: Size
  placeholder?: string
  type?: HTMLInputTypeAttribute
  value?: any
  setValue?: (newValue: any) => void
  defaultValue?: any
  name: string
  id: string
}

export default function Input({
  variant = Variant.PRIMARY,
  size = Size.MEDIUM,
  value,
  name,
  id,
  defaultValue,
  setValue,
  type = 'text',
  placeholder,
  ...InputProps
}: InputProps) {
  const sizeCssClasses = getInputSizeStyles(size)
  const variantOutlineCssClasses = getVariantOutlineStyles(variant)
  const variantBorderCssClasses = getVariantBorderStyles(variant)
  const variantInputTextCssClasses = getVariantInputTextStyles(variant)
  const commonCssClasses = getCommonStyles()

  return (
    <input
      className={`${sizeCssClasses} ${variantBorderCssClasses} ${variantInputTextCssClasses} ${variantOutlineCssClasses} ${commonCssClasses}`}
      name={name}
      id={id}
      defaultValue={defaultValue}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={setValue ? (newValue) => setValue(newValue.currentTarget.value) : () => {}}
    />
  )
}

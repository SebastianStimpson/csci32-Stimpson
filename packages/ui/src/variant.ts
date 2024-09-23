import { Size } from './size'

export enum Variant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export function getVariantStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'bg-emerald-600 outline-emerald-600 hover:bg-emerald-700 active:bg-emerald-800'
    case Variant.SECONDARY:
      return 'bg-violet-600 outline-violet-600 hover:bg-violet-700 active:bg-violet-800'
    case Variant.TERTIARY:
      return 'bg-pink-600 outline-pink-600 hover:bg-pink-700 active:bg-pink-800'
  }
}

export function getVariantOutlineStyles(cariant: Variant) {
  switch (cariant) {
    case Variant.PRIMARY:
      return 'outline-emerald-600'
    case Variant.SECONDARY:
      return 'outline-violet-600'
    case Variant.TERTIARY:
      return 'outline-pink-600'
  }
}

export function getVariantBorderStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'border-2 border-emerald-600'
    case Variant.SECONDARY:
      return 'border-2 border-violet-600'
    case Variant.TERTIARY:
      return 'border-2 border-pink-600'
  }
}
export function getVariantInputTextStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'text-black'
    case Variant.SECONDARY:
      return 'text-black'
    case Variant.TERTIARY:
      return 'text-black'
  }
}
export function getInputSizeStyles(size: Size) {
  switch (size) {
    case Size.SMALL:
      return 'px-2 py-1 rounded shadow'
    case Size.MEDIUM:
      return 'px-3 py-1.5 rounded-md shadow-md'
    case Size.LARGE:
      return 'px-4 py-2 rounded-lg shadow-lg'
  }
}

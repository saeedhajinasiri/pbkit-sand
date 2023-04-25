import {CSSProperties} from "react";
import {Colors, OverridableStringUnion} from "../../types";

export interface TextProps {
  itemProp?: string

  children: any

  variant?: Variants

  className?: string

  typography?: Typography

  color?: OverridableStringUnion<TextColors, TextPropsColorOverrides>;

  align?: Align

  type?: Types

  style?: CSSProperties

  disabled?: boolean

  dataTestId?: string

  direction?: 'rtl' | 'ltr'

  onClick?: () => void

}

export interface TextPropsColorOverrides {

}

export type Variants = "p" | "body" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "li"
export type Typography = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl' | 'xxxl' | '4xl' | '5xl'
export type TextColors = Colors | "grey.100" | "grey.200" | "grey.300" | "grey.400" | "grey.500" | "grey.600" | "grey.700" | "grey.800" | "grey.900" | "white" | "black"
export type Align = 'right' | 'left' | 'center' | 'justify' | 'start' | 'end' | 'inherit'
export type Types = "medium" | "bold" | "light" | "regular"

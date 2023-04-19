import {OverridableStringUnion, Colors} from "../../types";
import {ReactNode} from "react";

export interface MultiSelectProps {
  optionsList: Array<any>

  defaultText?: string

  value: any

  onChange: (newValue: any) => void

  id: number | string

  text: string

  disabled?: boolean

  variant?: Variant

  color?: OverridableStringUnion<Colors,
    SelectPropsColorOverrides>;

  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge'

  error?: boolean

  StartAdornment?: ReactNode

  helperText?: string,

  rounded?: 'full' | 'huge' | 'large' | 'medium' | 'small' | 'tiny' | 'none'
}

export type Variant = 'outlined' | 'filled';

export interface SelectPropsColorOverrides {

}

export interface List {
  id: number
  text: string
}

import {OverridableStringUnion, Colors} from "../../types";
import {ReactNode} from "react";

export interface MultiSelectProps {
  optionsList: Array<any>

  value: Array<string | number>

  onChange: (newValue: any) => void

  id: number | string

  text: string

  placeholder?: string

  label?: string

  disabled?: boolean

  variant?: Variant

  color?: OverridableStringUnion<Colors,
    multiSelectPropsColorOverrides>;

  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge'

  error?: boolean

  StartAdornment?: ReactNode

  helperText?: string

  rounded?: 'full' | 'huge' | 'large' | 'medium' | 'small' | 'tiny' | 'none'

  direction?: string
}

export type Variant = 'outlined' | 'filled';

export interface multiSelectPropsColorOverrides {

}

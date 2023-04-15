import {OverridableStringUnion, Colors} from "../../types";
import {ReactNode} from "react";

export interface SelectProps {
  optionsList: Array<any>

  defaultText?: string

  value: string

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
}

export type Variant = 'outlined' | 'filled';

export interface SelectPropsColorOverrides {

}

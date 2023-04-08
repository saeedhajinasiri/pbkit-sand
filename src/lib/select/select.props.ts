import {OverridableStringUnion, Colors} from "../../types";

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

  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'search'

  error?: boolean
}

export type Variant = 'text' | 'outlined' | 'contained';

export interface SelectPropsColorOverrides {

}

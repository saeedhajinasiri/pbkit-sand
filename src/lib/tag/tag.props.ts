import {Colors, OverridableStringUnion} from "../../types";

export interface TagProps {
  onChange: (newValue: any) => void

  id: number | string

  title: string

  disabled?: boolean

  variant?: Variant

  color?: OverridableStringUnion<Colors,
    SelectPropsColorOverrides>;

  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge'

  rounded?: 'full' | 'huge' | 'large' | 'medium' | 'small' | 'tiny' | 'none'
}

export type Variant = 'outlined' | 'filled';

export interface SelectPropsColorOverrides {

}

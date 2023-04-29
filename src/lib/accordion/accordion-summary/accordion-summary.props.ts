import {ReactNode} from "react";
import {OverridableStringUnion, Colors, Rounded} from "../../../types";

export interface AccordionSummaryProps {
  children?: ReactNode

  color?: OverridableStringUnion<Colors,
    AccordionSummaryPropsColorOverrides>;

  style?: any

  size?: Size

  className?: string

  disabled?: boolean

  onClick?: () => void

  expandIcon?: ReactNode | null

  rounded?: Rounded
}

export interface AccordionSummaryPropsColorOverrides {

}


export type Size = 'auto' | 'small' | 'medium' | 'large';

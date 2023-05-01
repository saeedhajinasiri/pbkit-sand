import {ReactNode} from "react";
import {OverridableStringUnion, Colors, Rounded} from "../../../types";

export interface AccordionSummaryProps {
  children?: ReactNode;

  title?: string;

  StartAdornment?: ReactNode;

  color?: OverridableStringUnion<Colors,
    AccordionSummaryPropsColorOverrides>;

  size?: Size;

  className?: string;

  disabled?: boolean;

  onClick?: () => void;

  rounded?: Rounded;
}

export interface AccordionSummaryPropsColorOverrides {

}

export type Size = 'tiny' | 'small' | 'medium' | 'large' | 'huge';

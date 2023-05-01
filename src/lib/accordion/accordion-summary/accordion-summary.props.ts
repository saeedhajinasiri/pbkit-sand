import {ReactNode} from "react";
import {OverridableStringUnion, Colors, Size} from "../../../types";

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
}

export interface AccordionSummaryPropsColorOverrides {

}
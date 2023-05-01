import {ReactNode} from "react";
import {Colors, OverridableStringUnion, Rounded} from "../../../types";

export interface AccordionDetailsProps {
  children: ReactNode;

  variant?: 'outlined' | 'filled';

  disabled?: boolean;

  color?: OverridableStringUnion<Colors,
    AccordionDetailsPropsColorOverrides>;

  rounded?:Rounded;

  className?: string;
}

export interface AccordionDetailsPropsColorOverrides {

}
import {ReactNode} from "react";
import {DivProps} from "../div/div.props";
import {Colors, OverridableStringUnion, Rounded} from "../../types";

export interface AccordionProps extends DivProps {
  icon?: ReactNode;

  disabled?: boolean;

  children: ReactNode;

  expendedColor?: OverridableStringUnion<Colors, AccordionPropsColorOverrides>;

  className?: string;

  defaultExpanded?: boolean;

  rounded?: Rounded

}

export interface AccordionPropsColorOverrides {

}
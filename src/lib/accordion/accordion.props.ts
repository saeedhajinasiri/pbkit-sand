import {ReactNode} from "react";
import {DivProps} from "../div/div.props";
import {Colors, OverridableStringUnion, Rounded} from "../../types";

export interface AccordionProps extends DivProps {
  title?: string;

  description?: string;

  disabled?: boolean;

  variant?: 'outlined' | 'filled';

  color?: OverridableStringUnion<Colors, AccordionPropsColorOverrides>;

  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge';

  rounded?: Rounded;

  defaultExpanded?: boolean;

  className?: string;

  children: ReactNode;

  StartAdornment?: ReactNode;
}

export interface AccordionPropsColorOverrides {

}
import {ReactNode} from "react";

export interface AccordionDetailsProps {
  children: ReactNode;

  variant?: 'outlined' | 'filled';

  disabled?: boolean;

  color?: 'primary' | 'warning' | 'danger' | 'secondary' | 'control' | 'purple' | 'tertiary' | 'success' | 'info' | 'inherit';

  rounded?: 'none' | 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'full';

  className?: string;
}
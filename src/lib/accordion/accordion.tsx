import React from 'react';
import {AccordionProps} from "./accordion.props";
import classNames from "../../utils/helpers/class-names";
import {ROUNDED, COLORS} from './accordion.style';

const CustomAccordion = ({children, expendedColor = 'inherit', rounded = 'none', defaultExpanded = false, className, ...rest}: AccordionProps) => {
  return (
    <details
      className={classNames(
        `flex flex-col ${COLORS[expendedColor]}`,
        ROUNDED[rounded],
        className,
      )}
      open={defaultExpanded}
      {...rest}>
      {children}
    </details>
  )
}

export default CustomAccordion
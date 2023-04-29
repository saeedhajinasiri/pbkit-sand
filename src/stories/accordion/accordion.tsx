import React from "react";
import CustomAccordion from '../../lib/accordion/accordion'
import {AccordionProps} from "../../lib/accordion/accordion.props";

/**
 * Primary UI component for user interaction
 */
export const Accordion = ({children, ...props}: AccordionProps) => {
  return (
    <CustomAccordion {...props}>
      {children}
    </CustomAccordion>
  );
};

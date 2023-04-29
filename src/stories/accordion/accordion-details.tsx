import React from "react";
import CustomAccordionDetails from '../../lib/accordion/accordion-details/accordion-details'
import {AccordionDetailsProps} from '../../lib/accordion/accordion-details/accordion-details.props'

/**
 * Primary UI component for user interaction
 */
export const AccordionDetails = ({children, ...props}: AccordionDetailsProps) => {
  return (
    <CustomAccordionDetails {...props}>
      {children}
    </CustomAccordionDetails>
  );
};

import React from "react";
import CustomAccordionSummary from '../../lib/accordion/accordion-summary/accordion-summary'
import {AccordionSummaryProps} from '../../lib/accordion/accordion-summary/accordion-summary.props'

/**
 * Primary UI component for user interaction
 */
export const AccordionSummary = ({children, ...props}: AccordionSummaryProps) => {
  return (
    <CustomAccordionSummary {...props}>
      {children}
    </CustomAccordionSummary>
  );
};
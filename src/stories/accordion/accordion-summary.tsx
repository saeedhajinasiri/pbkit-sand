import React from "react";
import CustomAccordionSummary from '../../lib/accordion/accordion-summary/accordion-summary'
import {AccordionSummaryProps} from '../../lib/accordion/accordion-summary/accordion-summary.props'
import {Div} from "@pezeshk-book/ui-kit";

/**
 * Primary UI component for user interaction
 */
export const AccordionSummary = ({children, disabled, StartAdornment, ...props}: AccordionSummaryProps) => {
  return (
    <CustomAccordionSummary {...props}>
      {StartAdornment ? (
        <Div className={'min-w-4 min-h-4'}>
          {StartAdornment}
        </Div>
      ) : null}
      {children}
      {!disabled ? (
        <Div id={'svg'} className={'min-w-4 min-h-2'}>
          <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.44 1.71252L8.55 6.60253C7.9725 7.18003 7.0275 7.18003 6.45 6.60253L1.56 1.71252" stroke="#121212" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Div>
      ) : (
        <Div className={'min-w-4 min-h-2'}>
          <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.44 1.71252L8.55 6.60253C7.9725 7.18003 7.0275 7.18003 6.45 6.60253L1.56 1.71252" stroke="#121212" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Div>
      )}

    </CustomAccordionSummary>
  );
};

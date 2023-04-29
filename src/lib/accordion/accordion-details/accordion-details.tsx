import React from 'react'
import {AccordionDetailsProps} from './accordion-details.props'
import classNames from '../../../utils/helpers/class-names'

const CustomAccordionDetails = ({children, className, ...rest}: AccordionDetailsProps) => {
  return (
    <div className={classNames(className, 'p-2')} {...rest}>
      {children}
    </div>
  )
}

export default CustomAccordionDetails;

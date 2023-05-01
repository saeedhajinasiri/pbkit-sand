import React from 'react'
import {AccordionDetailsProps} from './accordion-details.props'
import classNames from '../../../utils/helpers/class-names'
import {COLORS, ROUNDED} from "../accordion.style";

const AccordionDetails = (
  {
    children,
    variant = 'outlined',
    rounded = 'medium',
    color = "primary",
    className,
    disabled,
    ...rest
  }: AccordionDetailsProps) => {

  const accordionDetailsClassName = classNames(
    'mt-3 p-2',
    variant === 'outlined' ? '!bg-white' : COLORS[color],
    ROUNDED[rounded],
    className
  );

  if (disabled) {
    return null;
  }

  return (
    <div className={accordionDetailsClassName} {...rest}>
      {children}
    </div>
  )
}

export default AccordionDetails;
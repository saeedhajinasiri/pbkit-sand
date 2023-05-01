import React from 'react'
import classNames from "../../../utils/helpers/class-names";
import {ROUNDED, SIZES} from "./accordion-summary.style";
import {AccordionSummaryProps} from './accordion-summary.props'

const AccordionSummary = (
  {
    children,
    rounded = 'none',
    className,
    color = 'primary',
    size = 'medium',
    onClick,
    ...rest
  }: AccordionSummaryProps) => {

  const accordionSummaryClassName = classNames(
    `flex gap-x-3 select-none items-center cursor-pointer px-2`,
    SIZES[size],
    ROUNDED[rounded],
    className,
  )

  return (
    <summary onClick={onClick} className={accordionSummaryClassName} {...rest}>
      {children}
    </summary>
  )
}

export default AccordionSummary;
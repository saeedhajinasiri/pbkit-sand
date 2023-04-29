import React from 'react'
import classNames from "../../../utils/helpers/class-names";
import {COLORS, ROUNDED, SIZES} from "./accordion-summary.style";
import {AccordionSummaryProps} from './accordion-summary.props'

const CustomAccordionSummary = ({children, rounded = 'none', className, color = 'inherit', size = 'medium', style, onClick, expandIcon = null, ...rest}: AccordionSummaryProps) => {
  return (
    <summary onClick={onClick} style={style} className={classNames(
      `flex flex-row-reverse items-center cursor-pointer justify-between hover:transition hover:duration-300 hover:ease-in-out px-8`,
      COLORS[color],
      SIZES[size],
      ROUNDED[rounded],
      className,
    )} {...rest}>
      {children}
      {expandIcon}
    </summary>
  )
}

export default CustomAccordionSummary;

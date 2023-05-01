import React from 'react'
import classNames from "../../../utils/helpers/class-names";
import {SIZES} from "./accordion-summary.style";
import {AccordionSummaryProps} from './accordion-summary.props'
import {Div} from "@pezeshk-book/ui-kit";
import ArrowDown from "./arrowDown";

const AccordionSummary = (
  {
    children,
    className,
    color = 'primary',
    size = 'medium',
    onClick,
    StartAdornment,
    disabled,
    ...rest
  }: AccordionSummaryProps) => {

  const accordionSummaryClassName = classNames(
    `flex gap-x-3 select-none items-center cursor-pointer px-2`,
    SIZES[size],
    className,
  )

  return (
    <summary onClick={onClick} className={accordionSummaryClassName} {...rest}>
      {StartAdornment ? (
        <Div className={'min-w-4 min-h-4'}>
          {StartAdornment}
        </Div>
      ) : null
      }
      {children}
      {!disabled ? (
        <Div id={'svg'} className={'min-w-4 min-h-2'}>
          <ArrowDown/>
        </Div>
      ) : (
        <Div className={'min-w-4 min-h-2'}>
          <ArrowDown/>
        </Div>
      )}
    </summary>
  )
}

export default AccordionSummary;
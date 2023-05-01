import React from 'react'
import classNames from "../../../utils/helpers/class-names";
import {SIZES, TypographyEnum} from "./accordion-summary.style";
import {AccordionSummaryProps} from './accordion-summary.props'
import {Div, Text} from "@pezeshk-book/ui-kit";
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
      ) : null}
      <Text
        disabled={disabled}
        align={"start"}
        className={classNames(
          'w-full break-words',
        )}
        typography={TypographyEnum[size]}
        type={'bold'}>
        {children}
      </Text>
      <Div className={classNames(
        `min-w-4 min-h-2`,
        !disabled ? 'svg' : 'text-control-300'
      )}>
        <ArrowDown/>
      </Div>
    </summary>
  )
}

export default AccordionSummary;

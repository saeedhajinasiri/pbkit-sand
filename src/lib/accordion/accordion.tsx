import React from 'react';
import {AccordionProps} from "./accordion.props";
import classNames from "../../utils/helpers/class-names";
import {ROUNDED, COLORS} from './accordion.style';

const Accordion = (
  {
    children,
    disabled,
    variant = 'outlined',
    size = 'medium',
    rounded = 'medium',
    StartAdornment,
    color = 'primary',
    defaultExpanded = false,
    className,
    ...rest
  }: AccordionProps) => {

  const accordionClassName = classNames(
    'w-full px-4',
    disabled === true ? 'open:pb-0' : 'open:pb-3',
    disabled ? 'bg-control-100' : variant === 'outlined' ? COLORS[color] : 'bg-white',
    ROUNDED[rounded],
    className
  );

  return (
    <details
      className={accordionClassName}
      open={!disabled && defaultExpanded}
      {...rest}
    >
      {children}
    </details>
  );
};

export default Accordion;
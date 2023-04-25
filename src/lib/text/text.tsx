import React from 'react';
import {TextProps} from './text.props'
import classNames from '../../utils/helpers/class-names'
import {ALIGN, COLOR, TYPE, TYPOGRAPHY} from './text.style'

const Text = (
  {
    children,
    variant = 'p',
    className,
    typography = 'base',
    color = 'grey.800',
    align = 'center',
    type = 'regular',
    style,
    disabled = false,
    dataTestId,
    direction = 'rtl',
    ...rest
  }: TextProps) => {

  const Component = variant;

  return (
    <Component
      data-testid={dataTestId}
      dir={direction}
      style={style}
      className={classNames(
        'z-[4]',
        TYPOGRAPHY[typography],
        disabled ? 'text-grey-300' : COLOR[color],
        ALIGN[align],
        TYPE[type],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Text

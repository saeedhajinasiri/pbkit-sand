import React from 'react';
import {BadgeProps} from './badge.props'
import classNames from "../../utils/helpers/class-names";
import {COLORS, DOT, STANDARD} from "./badge.style";
import {Text} from "@pezeshk-book/ui-kit";

export const Badge = (props: BadgeProps) => {
  const {
    children,
    variant = 'standard',
    badgeContent,
    max = badgeContent,
    color = "primary",
    size = 'base',
    shape = 'rounded',
    anchorSituation = 'outer',
    className,
    anchorOrigin = {vertical: 'top', horizontal: 'right'}
  } = props;

  const content:string | number = variant !== 'dot' ? (max < badgeContent ? `${max}+` : badgeContent) : "";
  return (
    <div className={classNames('inline-flex relative shrink-0', className)}>
      {children}
      <Text
        color={"inherit"}
        typography={"xxs"}
        className={classNames(
          'absolute flex flex-row-reverse justify-center items-center rounded-full',
          COLORS[color],
          variant === 'dot' ? DOT[size] : shape === 'rounded' ? STANDARD[size] : `${STANDARD[size]}  !rounded-lg`,
          anchorSituation === 'inner' ? (
            `${anchorOrigin.vertical === 'top' ? 'top-0' : 'bottom-0'} ${anchorOrigin.horizontal === 'right' ? 'right-0' : 'left-0'}`
          ) : (
            `${anchorOrigin.vertical === 'top' ? 'top-0 -translate-y-1/2' : 'bottom-0 translate-y-1/2'} ${anchorOrigin.horizontal === 'right' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`
          )
        )}>
        {content}
      </Text>
    </div>
  )
};

export default Badge;
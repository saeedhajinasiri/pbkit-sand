import React from 'react'
import classNames from "../../utils/helpers/class-names";
import {AvatarProps} from "./avatar.props";
import {AVATAR_SHAPE, AVATAR_SIZES} from './avatar.style';
import {Div, Text} from "@pezeshk-book/ui-kit";
import Badge from '../badge/badge'

export const Avatar = ({className, alt = 'آواتار', size = 'base', rounded = "medium",isOnline= true, src, BadgeProps, ...rest}: AvatarProps) => {
  let Children = (
    <img
      className={classNames('rounded-full',
        className,
        AVATAR_SIZES[size],
        AVATAR_SHAPE[rounded]
      )}
      src={src}
      alt={alt}
      loading="lazy"
      {...rest}
    />
  )
  if (!src) {
    Children = (
      <Div
        className={classNames('flex items-center justify-center border border-control-100 shadow',
          className,
          AVATAR_SIZES[size],
          AVATAR_SHAPE[rounded]
        )}>

        <Text
          type={'regular'}
          typography={size}
        >
          {alt.charAt(0)}
        </Text>
      </Div>
    )
  }

  if (isOnline) {
    return (
      <Badge
        variant={"dot"}
        badgeContent={0}
        anchorSituation={'inner'}
        size={size}
        {...BadgeProps}
        children={Children}
      />
    )
  }

  return (Children)
}

export default Avatar;
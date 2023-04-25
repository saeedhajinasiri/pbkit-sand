import React from 'react'
import classNames from "../../utils/helpers/class-names";
import {AvatarProps} from "./avatar.props";
import {AVATAR_SHAPE, SIZES, STATUS_POSITION, STATUS_SIZES} from './avatar.style';
import {Div, Text} from "@pezeshk-book/ui-kit";

export const Avatar = ({className, alt = 'آواتار', size = 'medium', shape = "rounded", position = "topRight", src , ...rest}: AvatarProps) => {

  if (!src) {
    return (
      <Div
        className={classNames('relative flex items-center justify-center border',
          SIZES[size],
          AVATAR_SHAPE[shape]
        )}>
        <Text typography={'base'} type={'regular'}>
          {alt.charAt(0)}
        </Text>
        <svg
          className={classNames('absolute',
            STATUS_POSITION[position]
          )}
          width={STATUS_SIZES[size]} height={STATUS_SIZES[size]} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="14" height="14" rx="7" fill="#4AD15F" stroke="#EBEBEB" strokeWidth="2"/>
        </svg>
      </Div>
    )
  }

  return (
    <Div className={'relative'}>
      <img className={classNames('rounded-full',
        className,
        SIZES[size],
        AVATAR_SHAPE[shape]
      )} alt={alt} src={src} {...rest} />

      <svg
        className={classNames('absolute',
          STATUS_POSITION[position]
        )}
        width={STATUS_SIZES[size]} height={STATUS_SIZES[size]} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="14" height="14" rx="7" fill="#4AD15F" stroke="#EBEBEB" strokeWidth="2"/>
      </svg>

    </Div>
  )
}

export default Avatar;
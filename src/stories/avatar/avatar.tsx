import React from 'react';
import CustomAvatar from '../../lib/avatar'
import {AvatarProps} from "../../lib/avatar/avatar.props";

/**
 * Primary UI component for user interaction
 */
export const Avatar = ({...props}: AvatarProps) => {
  return (
    <CustomAvatar {...props}/>
  );
};

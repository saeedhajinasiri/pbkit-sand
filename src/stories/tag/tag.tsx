import React from 'react';
import CustomTag from '../../lib/tag/tag'
import {TagProps} from "../../lib/tag/tag.props"

/**
 * Primary UI component for user interaction
 */
export const Tag = ({...props}: TagProps) => {
  return (
    <CustomTag {...props}/>
  );
};

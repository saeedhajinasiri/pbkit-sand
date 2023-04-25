import React from 'react';
import CustomText from '../../lib/text/text'
import {TextProps} from "../../lib/text/text.props";

/**
 * Primary UI component for user interaction
 */
export const Text = ({children, ...props}: TextProps) => {
  return (
    <CustomText {...props}>
      {children}
    </CustomText>
  );
};

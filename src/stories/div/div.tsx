import React from 'react';
import CustomDiv from '../../lib/div'
import {DivProps} from "../../lib/div/div.props";

/**
 * Primary UI component for user interaction
 */
export const Div = ({children, ...props}: DivProps) => {
  return (
    <CustomDiv {...props}>
      {children}
    </CustomDiv>
  );
};

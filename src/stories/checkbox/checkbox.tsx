import React from 'react';
import CustomCheckbox from '../../lib/checkbox/checkbox'
import {CheckboxProps} from "../../lib/checkbox/checkbox.props";

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({...props}: CheckboxProps) => {
  return (
    <CustomCheckbox {...props} />
  );
};

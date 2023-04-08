import React from 'react';
import CustomSelect from '../../lib/select/select'
import {SelectProps} from "../../lib/select/select.props";

/**
 * Primary UI component for user interaction
 */
export const Select = ({...props}: SelectProps) => {
  return (
    <CustomSelect {...props}/>
  );
};

import React from 'react';
import CustomSelect from '../../lib/multi-select/multi-select'
import {MultiSelectProps} from "../../lib/multi-select/multi-select.props";

/**
 * Primary UI component for user interaction
 */
export const MultiSelect = ({...props}: MultiSelectProps) => {
  return (
    <CustomSelect {...props}/>
  );
};

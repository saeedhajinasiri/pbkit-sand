import React from 'react';
import CustomBadge from '../../lib/badge/badge'
import {BadgeProps} from "../../lib/badge/badge.props";

/**
 * Primary UI component for user interaction
 */
export const Badge = ({children, ...props}: BadgeProps) => {
  return (
    <CustomBadge {...props}>
      {children}
    </CustomBadge>
  );
};

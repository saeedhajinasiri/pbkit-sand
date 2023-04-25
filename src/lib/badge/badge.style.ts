import {AnchorOriginProps, Shape, Size, Variant} from './badge.props'

export const COLORS = {
  primary: 'bg-primary border-primary text-primary-50 hover:bg-primary-dark',
  danger: 'bg-danger border-danger text-danger-50 hover:bg-danger-dark',
  warning: 'bg-warning border-warning text-warning-50 hover:bg-warning-dark',
  secondary: 'bg-secondary border-secondary text-secondary-50 hover:bg-secondary-dark',
  tertiary: 'bg-tertiary border-tertiary text-tertiary-50 hover:bg-tertiary-dark',
  success: 'bg-success border-success text-success-50 hover:bg-success-dark',
  info: 'bg-info border-info text-info-50 hover:bg-info-dark',
  purple: 'bg-purple border-purple text-purple-50 hover:bg-purple-dark',
  control: 'bg-control border-control text-control-50 hover:bg-control-dark',
  inherit: 'bg-inherit border-inherit text-inherit'
};

/**
 *
 * @param size
 * @param shape
 * @param variant
 * @constructor
 */
export const SHAPES = ({size, shape, variant}: { size: Size, shape: Shape, variant: Variant }) => {
  if (variant === 'dot') {
    return 'w-2 h-2 p-0 rounded-full';
  }
  let className = 'rounded-lg';
  if (shape === 'rounded') {
    className = 'rounded-full'
  }
  if (size === 'tiny') {
    className = `min-w-[12px] h-3 p-0 px-1 ${className}`;
  } else if (size === 'small') {
    className = `min-w-[16px] h-4 p-0 px-1 ${className}`;
  } else if (size === 'medium') {
    className = `min-w-[20px] h-5 p-0 px-1 ${className}`;
  } else if (size === 'large') {
    className = `min-w-[24px] h-6 p-0 px-1 ${className}`;
  } else if (size === 'huge') {
    className = `min-w-[32px] h-8 p-0 px-1 ${className}`;
  }

  return className;
}

/**
 *
 * @param vertical
 * @param horizontal
 * @constructor
 */
export const POSITIONS = ({vertical, horizontal}: AnchorOriginProps) => {
  let translateYClassname = '';
  let translateXClassname = '';
  if (vertical === 'top') {
    translateYClassname = 'top-0 -translate-y-1/2';
  } else {
    translateYClassname = 'bottom-0 translate-y-1/2';
  }
  if (horizontal === 'left') {
    translateXClassname = 'left-0 -translate-x-1/2';
  } else {
    translateXClassname = 'right-0 translate-x-1/2';
  }
  return `${translateYClassname} ${translateXClassname}`;
}

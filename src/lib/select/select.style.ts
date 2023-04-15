// import {Variant} from "../button/button.props";

export const COLORS = {
  primary: 'bg-primary-100 border-primary-dark text-primary-dark active:primary-dark',
  danger: 'bg-danger-100 border-danger-dark text-danger-dark active:danger-dark',
  warning: 'bg-warning-100 border-warning-dark text-warning-dark active:warning-dark',
  secondary: 'bg-secondary-100 border-secondary-dark text-secondary-dark active:secondary-dark ',
  control: 'bg-control-100 border-control-dark text-control-dark active:control-dark',
  purple: 'bg-purple-100 border-purple-dark text-purple-dark active:purple-dark',
  tertiary: 'bg-tertiary-100 border-tertiary-dark text-tertiary-dark active:tertiary-dark',
  success: 'bg-success-100 border-success-dark text-success-dark active:success-dark',
  info: 'bg-info-100 border-info-dark text-info-dark active:info-dark',
  inherit: 'bg-transparent hover:bg-transparent'
};

export const SIZES = {
  huge: 'h-14 md:h-16',
  large: 'h-12 md:h-14',
  medium: 'h-10 md:h-12',
  small: 'h-8 md:h-10',
  tiny: 'h-6 md:h-8',
}

export const LABEL_SIZES = {
  huge: 'h-14 md:h-16 h-auto peer-focus:!h-auto',
  large: 'h-12 md:h-14 h-auto peer-focus:!h-auto',
  medium: 'h-10 md:h-12 h-auto peer-focus:!h-auto',
  small: 'h-8 md:h-10 h-auto peer-focus:!h-auto',
  tiny: 'h-6 md:h-8 h-auto peer-focus:!h-auto',
}

export const HOVER_COLORS = {
  primary: 'hover:bg-primary hover:text-white',
  danger: 'hover:bg-danger hover:text-white',
  warning: 'hover:bg-warning hover:text-white',
  secondary: 'hover:bg-secondary hover:text-white',
  control: 'hover:bg-control hover:text-white',
  purple: 'hover:bg-purple hover:text-white',
  tertiary: 'hover:bg-tertiary hover:text-white',
  success: 'hover:bg-success hover:text-white',
  info: 'hover:bg-info hover:text-white',
  inherit: 'bg-transparent hover:bg-transparent'
};

/**
 *
 * @param variants
 * @constructor
 */

export const VARIANTS = {
  filled: ' text-m-sm md:text-d-sm bg-grey-light flex',
  outlined: 'text-grey-light bg-white border flex',
};

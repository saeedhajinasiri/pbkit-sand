import {ReactNode} from "react";
import {OverridableStringUnion, Colors} from "../../types";

export interface AnchorOriginProps {
  horizontal: 'left' | 'right',
  vertical: 'top' | 'bottom',
}

export type AnchorSituation ='inner' | 'outer'


export interface BadgeProps {
  children: ReactNode

  badgeContent: number

  max?: number

  anchorOrigin?: AnchorOriginProps

  variant?: Variant;

  color?: OverridableStringUnion<Colors,
    BadgePropsColorOverrides>;

  size?: Size

  shape?: Shape

  className?: string

  anchorSituation?: AnchorSituation
}

export interface BadgePropsColorOverrides {

}

export type Variant = 'standard' | 'dot';
export type Size = 'xxs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl';
export type Shape = "rectangle" | 'rounded'

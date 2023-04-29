import { BadgeProps } from "../badge/badge.props"

export interface AvatarProps {

  alt: string

  className?: string

  size?: 'xxs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl'

  rounded?: 'none' | 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'full'

  isOnline?: boolean

  src?: string

  BadgeProps?: BadgeProps
}
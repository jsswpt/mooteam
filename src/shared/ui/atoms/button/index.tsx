import cn from 'clsx'
import { ButtonHTMLAttributes, RefObject } from 'react'

import { getClassList } from '@/shared/lib/class-list'

import styles from './styles.module.scss'

// Сторибук отказывается читать типы, поэтому это здесь :(
const colors = ['primary', 'inherit'] as const
const variants = ['contained', 'outlined'] as const
const sizes = ['md'] as const

const colorToClass = getClassList(colors, 'color', '_')
const variantToClass = getClassList(variants, 'variant', '_')
const sizeToClass = getClassList(sizes, 'size', '_')

export type ButtonProps = {
  color?: (typeof colors)[number]
  variant?: (typeof variants)[number]
  size?: (typeof sizes)[number]
  fullWidth?: boolean
  ref?: RefObject<HTMLButtonElement>
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  children,
  color = 'primary',
  fullWidth,
  ref,
  size = 'md',
  variant = 'contained',
  ...rest
}: ButtonProps) => (
  <button
    {...rest}
    ref={ref}
    className={cn(
      'button1',
      styles.button,
      styles[colorToClass[color]],
      styles[variantToClass[variant]],
      styles[sizeToClass[size]],
      {
        [styles['full-width']]: fullWidth,
      }
    )}
  >
    {children}
  </button>
)

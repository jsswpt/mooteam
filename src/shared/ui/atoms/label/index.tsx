import cn from 'clsx'
import { LabelHTMLAttributes, RefObject } from 'react'

import styles from './styles.module.scss'

export type LabelProps = {
  title: string
  children: React.ReactNode
  disabled?: boolean
  ref?: RefObject<HTMLLabelElement>
} & Omit<LabelHTMLAttributes<HTMLLabelElement>, 'className' | 'children'>

export const Label = ({
  children,
  disabled,
  ref,
  title,
  ...rest
}: LabelProps) => (
  <label
    {...rest}
    ref={ref}
    aria-disabled={disabled}
    onClick={(e) => {
      if (disabled) {
        e.preventDefault()
      } else {
        rest.onClick?.(e)
      }
    }}
    className={cn(styles.label, {
      [styles.disabled]: disabled,
    })}
  >
    <span className={cn('subtitle1', styles['label-title'])}>{title}</span>
    {children}
  </label>
)

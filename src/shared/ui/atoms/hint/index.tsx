import cn from 'clsx'
import { HTMLAttributes, RefObject } from 'react'

import { getClassList } from '@/shared/lib/class-list'

import styles from './styles.module.scss'

const types = ['default', 'warning'] as const

const typesToClasses = getClassList(types, 'type', '_')

export type HintProps = {
  type?: (typeof types)[number]
  children: React.ReactNode
  ref?: RefObject<HTMLSpanElement>
} & Omit<HTMLAttributes<HTMLSpanElement>, 'className'>

export const Hint = ({
  children,
  ref,
  type = 'default',
  ...rest
}: HintProps) => (
  <span
    {...rest}
    ref={ref}
    className={cn('body2', styles.hint, styles[typesToClasses[type]])}
  >
    {children}
  </span>
)

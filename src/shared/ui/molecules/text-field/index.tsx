import cn from 'clsx'
import { InputHTMLAttributes, RefObject } from 'react'

import { getClassList } from '@/shared/lib/class-list'
import { Hint } from '@/shared/ui'

import styles from './styles.module.scss'

const sizes = ['md'] as const
const variants = ['outlined'] as const

const sizeToClass = getClassList(sizes, 'size', '_')
const variantToClass = getClassList(variants, 'variant', '_')

export type TextFieldProps = {
  helperText?: string
  errorText?: string
  error?: boolean
  size?: (typeof sizes)[number]
  variant?: (typeof variants)[number]
  ref?: RefObject<HTMLInputElement>
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export const TextField = ({
  error,
  errorText,
  helperText,
  ref,
  size = 'md',
  variant = 'outlined',
  ...rest
}: TextFieldProps) => (
  <div className={styles.wrapper}>
    <input
      {...rest}
      ref={ref}
      className={cn(
        'body1',
        styles['text-field'],
        styles[variantToClass[variant]],
        styles[sizeToClass[size]],
        {
          [styles.error]: error,
        }
      )}
    />
    {(helperText || errorText) && (
      <div className={styles.hints}>
        <Hint children={helperText} type="default" />
        {error && <Hint children={errorText} type="warning" />}
      </div>
    )}
  </div>
)

import cn from 'clsx'
import { useEffect, useState } from 'react'

import { getClassList } from '@/shared/lib/class-list'

import styles from './styles.module.scss'

const sizes = ['lg'] as const

const sizeToClass = getClassList(sizes, 'size', '_')

export type AvatarProps = {
  size?: (typeof sizes)[number]
  src?: string
  children?: string
}

export const Avatar = ({ children, size = 'lg', src }: AvatarProps) => {
  const [isUrlCorrect, setIsUrlCorrect] = useState(true)

  const placeholder =
    children
      ?.toUpperCase()
      .split(' ')
      .filter((item) => item !== '')
      .map((item) => item[0])
      .join('. ') + '.'

  useEffect(() => setIsUrlCorrect(true), [src])

  const showAvatar = isUrlCorrect && src

  return (
    <div className={cn(styles.avatar, styles[sizeToClass[size]])}>
      {showAvatar && (
        <img
          src={src}
          onLoad={() => setIsUrlCorrect(true)}
          onError={() => setIsUrlCorrect(false)}
          className={styles.img}
        />
      )}
      {!showAvatar && <span className={styles.placeholder}>{placeholder}</span>}
    </div>
  )
}

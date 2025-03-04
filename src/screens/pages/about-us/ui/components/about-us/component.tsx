import cn from 'clsx'
import { useUnit } from 'effector-react'

import { Fallback } from './fallback'
import styles from './styles.module.scss'
import { Template } from './template'
import { $pageInfo, getInfoFx } from '@/screens'

export const Component = () => {
  const [pageInfo, isLoading] = useUnit([$pageInfo, getInfoFx.pending])

  if (isLoading) {
    return <Fallback />
  }

  return (
    <Template
      info={
        <span
          className={cn('h1', styles['welcome-title'])}
          dangerouslySetInnerHTML={{ __html: pageInfo?.info ?? '' }}
        />
      }
    />
  )
}

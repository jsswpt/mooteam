import cn from 'clsx'
import { useUnit } from 'effector-react'

import { $pageInfo, getInfoFx } from '../../../'
import { Fallback } from './fallback'
import styles from './styles.module.scss'
import { Template } from './template'

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

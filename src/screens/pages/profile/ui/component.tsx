import cn from 'clsx'
import { useUnit } from 'effector-react'

import { Avatar } from '@/shared/ui'

import { $author, $quote } from '../'
import { GetQuote } from './components/get-quote/ui'
import styles from './styles.module.scss'
import { Template } from './template'
import { $user } from '@/entities'

export const Component = () => {
  const user = useUnit($user)

  const [author, quote] = useUnit([$author, $quote])

  return (
    <Template
      quote={
        author && quote ? (
          <blockquote className={styles.quote}>
            <p className={cn('body1', styles['quote-text'])}>{quote}</p>
            <footer className={styles['quote-footer']}>
              <cite className={cn('subtitle2', styles['quote-author'])}>
                {author}
              </cite>
            </footer>
          </blockquote>
        ) : (
          <></>
        )
      }
      userData={
        <div className={styles['user-data']}>
          <div className={styles['user-avatar']}>
            <Avatar src="https://avatars.mds.yandex.net/i?id=e7f107bce7cf646f0e2a7f0067d23bc1c230e04d-9211188-images-thumbs&n=13">
              {user?.fullname}
            </Avatar>
          </div>
          <div className={styles['user-info-wrapper']}>
            <div className={styles['user-info']}>
              <h1 className={cn('h2', styles.title)}>
                Welcome, {user?.fullname.split(' ')[0]}!
              </h1>
              <div className={styles['button-wrapper']}>
                <GetQuote />
              </div>
            </div>
          </div>
        </div>
      }
    />
  )
}

import cn from 'clsx'
import { useState } from 'react'

import { Button, Modal } from '@/shared/ui'

import styles from './styles.module.scss'
import { useQuote } from '@/screens'

export const GetQuote = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { author, quote } = useQuote(isOpen, () => setIsOpen(false))

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Update</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles['title-wrapper']}>
              <h2 className={cn('h1', styles.title)}>Requesting a quote</h2>
            </div>
            <div className={styles['steps-wrapper']}>
              <ol className={styles['steps-list']}>
                <li
                  className={cn('body1', styles.step, {
                    [styles['step-inactive']]: author.isLoaded,
                  })}
                >
                  Step 1: Requesting author... {author.isLoaded && 'Completed'}
                </li>
                <li
                  className={cn('body1', styles.step, {
                    [styles['step-inactive']]: quote.isLoaded,
                  })}
                >
                  Step 2: Requesting quote... {quote.isLoaded && 'Completed'}
                </li>
              </ol>
            </div>
            <div className={styles['actions']}>
              <Button
                onClick={() => {
                  author.controller.current.abort()
                  quote.controller.current.abort()
                  setIsOpen(false)
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

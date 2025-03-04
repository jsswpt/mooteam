import cn from 'clsx'
import { useId } from 'react'
import ReactDOM from 'react-dom'

import { createWrapper } from '@/shared/utils'

import styles from './styles.module.scss'

export type ModalProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ children, onClose, open }: ModalProps) => {
  const id = useId()

  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div
        className={cn(styles['modal-bg'], {
          [styles.open]: open,
          [styles.close]: !open,
        })}
        onClick={onClose}
      >
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    </div>,
    createWrapper(`modal-${id}`)
  )
}

import cn from 'clsx'

import styles from './styles.module.scss'

type TemplateProps = {
  navigationItems: React.ReactNode
}

export const Template = ({ navigationItems }: TemplateProps) => (
  <header className={styles.header}>
    <div className={cn('container', styles['header-container'])}>
      <nav>
        <ul className={styles['nav-list']}>{navigationItems}</ul>
      </nav>
    </div>
  </header>
)

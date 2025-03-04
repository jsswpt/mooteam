import styles from './styles.module.scss'

type TemplateProps = {
  header: React.ReactNode
  children: React.ReactNode
}

export const Template = ({ children, header }: TemplateProps) => (
  <div className={styles.wrapper}>
    {header}
    <main className={styles.main}>{children}</main>
  </div>
)

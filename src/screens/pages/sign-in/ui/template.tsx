import styles from './styles.module.scss'

type TemplateProps = {
  signInForm: React.ReactNode
}

export const Template = ({ signInForm }: TemplateProps) => (
  <section className="section">
    <div className="container">
      <div className={styles['sign-in-form-wrapper']}>{signInForm}</div>
    </div>
  </section>
)

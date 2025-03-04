type TemplateProps = {
  userData: React.ReactNode
  quote: React.ReactNode
}

export const Template = ({ quote, userData }: TemplateProps) => (
  <>
    <section className="section">
      <div className="container">{userData}</div>
    </section>
    <section className="section">
      <div className="container">{quote}</div>
    </section>
  </>
)

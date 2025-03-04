type TemplateProps = {
  aboutUs: React.ReactNode
}

export const Template = ({ aboutUs }: TemplateProps) => (
  <section id="about-us" className="section">
    <div className="container">{aboutUs}</div>
  </section>
)

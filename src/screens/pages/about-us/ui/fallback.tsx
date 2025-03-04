import { AboutUsSection } from './components'
import { Template } from './template'

export const Fallback = () => (
  <Template aboutUs={<AboutUsSection isFallback />} />
)

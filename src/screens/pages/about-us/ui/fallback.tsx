import { AboutUsSection } from './sections'
import { Template } from './template'

export const Fallback = () => (
  <Template aboutUs={<AboutUsSection isFallback />} />
)

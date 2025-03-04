import { useGate } from 'effector-react'

import { AboutUsSection } from './components'
import { Template } from './template'
import { gate } from '@/screens'

export const Component = () => {
  useGate(gate)

  return <Template aboutUs={<AboutUsSection />} />
}

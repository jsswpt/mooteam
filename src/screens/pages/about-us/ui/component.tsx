import { useGate } from 'effector-react'

import { gate } from '../'
import { AboutUsSection } from './sections'
import { Template } from './template'

export const Component = () => {
  useGate(gate)

  return <Template aboutUs={<AboutUsSection />} />
}

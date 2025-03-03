import { useGate } from 'effector-react'

import { gate } from './model'
import { Router } from '@/screens'

export const App = () => {
  useGate(gate)

  return <Router />
}

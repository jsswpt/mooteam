import { sample } from 'effector'
import { createGate } from 'effector-react'

import { handleAuthorizeOnLoad } from '@/entities'

export const gate = createGate()

sample({
  clock: gate.open,
  target: handleAuthorizeOnLoad,
})

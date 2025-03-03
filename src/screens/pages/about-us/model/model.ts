import { createEffect, createStore, sample } from 'effector'
import { createGate } from 'effector-react'

import { getInfoReq } from '../'

export const getInfoFx = createEffect(getInfoReq)

const $isInfoRequested = createStore(false)

export const gate = createGate()

export type PageInfo = {
  info: string
}

export const $pageInfo = createStore<PageInfo | null>(null)

sample({
  clock: gate.open,
  source: $isInfoRequested,
  filter: (src) => !src,
  target: getInfoFx,
})

sample({
  clock: getInfoFx.doneData,
  fn: (clk) => clk.data,
  target: $pageInfo,
})

sample({
  clock: getInfoFx.finally,
  fn: () => true,
  target: $isInfoRequested,
})

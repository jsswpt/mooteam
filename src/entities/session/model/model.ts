import { createEffect, createEvent, createStore, sample } from 'effector'

import { authorizeByTokenReq } from '../'

export const authorizeOnLoadFx = createEffect(authorizeByTokenReq)

export const $isAuthorizeRequested = createStore(false)

export const handleAuthorizeOnLoad = createEvent()

export type User = {
  fullname: string
  email: string
}

export const $user = createStore<User | null>(null)

export const $isAuthorized = $user.map(Boolean)

sample({
  clock: handleAuthorizeOnLoad,
  source: $isAuthorizeRequested,
  filter: (src) => !src,
  target: authorizeOnLoadFx,
})

sample({
  clock: authorizeOnLoadFx.doneData,
  fn: (clk) =>
    clk ? { email: clk.data.email, fullname: clk.data.email } : null,
  target: $user,
})

sample({
  clock: authorizeOnLoadFx.failData,
  fn: (clk) => alert(clk.message),
})

sample({
  clock: authorizeOnLoadFx.finally,
  fn: () => true,
  target: $isAuthorizeRequested,
})

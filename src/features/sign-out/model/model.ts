import { createEffect, createEvent, sample } from 'effector'

import { $user } from '@/entities'
import { signOutReq } from '@/features'

export const signOutFx = createEffect(signOutReq)

const clearCurrentUserFx = createEffect(
  () => (document.cookie = 'auth_token=null')
)

export const handleSignOut = createEvent()

const clearCurrentUser = createEvent()

sample({
  clock: handleSignOut,
  target: signOutFx,
})

sample({
  clock: signOutFx.doneData,
  filter: (clk) => clk.success,
  target: clearCurrentUser,
})

sample({
  clock: clearCurrentUser,
  target: clearCurrentUserFx,
})

sample({
  clock: clearCurrentUserFx.doneData,
  fn: () => null,
  target: $user,
})

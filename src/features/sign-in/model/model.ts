import { createEffect, createEvent, createStore, sample } from 'effector'

import { useFormik } from '@/shared/lib/formik'

import { signInByCredentialsReq } from '../'
import { validationSchema } from './validators'
import { $user, User } from '@/entities'

export type FormData = { email: string; password: string }

export const signInFx = createEffect(signInByCredentialsReq)

export const $error = createStore<Error | null>(null)

const handleSubmit = createEvent<FormData>()

sample({
  clock: handleSubmit,
  target: signInFx,
})

sample({
  clock: signInFx.doneData,
  fn: ({ data }): User => ({ email: data.email, fullname: data.fullname }),
  target: $user,
})

sample({
  clock: signInFx.doneData,
  fn: () => null,
  target: $error,
})

sample({
  clock: signInFx.failData,
  target: $error,
})

const initialValues = {
  email: '',
  password: '',
}

export const useModel = () =>
  useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values)
    },
    onReset: (_, { setFormikState, validateForm }) => {
      setFormikState((prev) => ({ ...prev, values: initialValues }))
      validateForm()
    },
    validateOnBlur: true,
    validateOnChange: false,
  })

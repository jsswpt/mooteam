import * as yup from 'yup'

import { errors } from '@/shared/consts'
import { validators, YupValidator } from '@/shared/lib/yup'

import { FormData } from './model'

export const schema: YupValidator<FormData> = {
  email: validators.EMAIL.required(errors.THIS_FIELD_IS_REQUIRED),
  password: validators.PASSWORD.required(errors.THIS_FIELD_IS_REQUIRED),
}

export const validationSchema = yup.object(schema)

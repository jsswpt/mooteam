import * as yup from 'yup'

import { errors } from '@/shared/consts'

export const validators = {
  EMAIL: yup.string().email(errors.INVALID_EMAIL),
  PASSWORD: yup.string().min(5, errors.MIN_LENGHT_IS + '5 symbols'),
} as const

import { ISchema, Reference } from 'yup'

export type YupValidator<T extends Record<string, unknown>> = Record<
  keyof T,
  ISchema<unknown> | Reference
>

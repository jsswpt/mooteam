import { FormikConfig, FormikValues, useFormik as useFormikHook } from 'formik'

type UseFormik<T extends FormikValues = FormikValues> = FormikConfig<T>

export const useFormik = <T extends FormikValues = FormikValues>(
  data: UseFormik<T>
) => {
  const { handleBlur, handleChange, handleReset, handleSubmit, ...formik } =
    useFormikHook<T>(data)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(e)
  }
  const onBlur = (e: React.FocusEvent<unknown, Element>) => {
    handleBlur(e)
  }
  const onChange = (e: React.ChangeEvent<unknown>) => {
    handleChange(e)
  }
  const onReset = (e: unknown) => {
    handleReset(e)
  }

  return { formProps: { onBlur, onChange, onReset, onSubmit }, ...formik }
}

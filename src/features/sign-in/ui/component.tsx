import { useUnit } from 'effector-react'

import { Button, Form, Hint, Label, TextField } from '@/shared/ui'

import { $error, useModel } from '../'
import { signInFx } from '../'

export const Component = () => {
  const { dirty, errors, formProps, isValid, values } = useModel()

  const [isLoading, error] = useUnit([signInFx.pending, $error])

  return (
    <Form
      formProps={formProps}
      items={[
        {
          id: 'email-password',
          rows: [
            {
              id: 'email',
              children: (
                <Label title="Email address" disabled={isLoading}>
                  <TextField
                    disabled={isLoading}
                    name="email"
                    error={Boolean(errors.email)}
                    errorText={errors.email}
                    helperText="We'll never share your email with anyone else."
                    value={values.email}
                    onChange={formProps.onChange}
                  />
                </Label>
              ),
            },
            {
              id: 'password',
              children: (
                <Label title="Password" disabled={isLoading}>
                  <TextField
                    disabled={isLoading}
                    name="password"
                    type="password"
                    error={Boolean(errors.password)}
                    errorText={errors.password}
                    value={values.password}
                    onChange={formProps.onChange}
                  />
                </Label>
              ),
            },
          ],
        },
        ...(error
          ? [
              {
                id: 'error',
                rows: [
                  {
                    id: 'error-message',
                    children: <Hint type="warning">{error.message}</Hint>,
                  },
                ],
              },
            ]
          : []),
      ]}
      actions={[
        {
          id: 'actions',
          rows: [
            {
              id: 'buttons',
              children: [
                {
                  id: 'submit',
                  children: (
                    <Button
                      disabled={!dirty || !isValid || isLoading}
                      type="submit"
                      fullWidth
                    >
                      Submit
                    </Button>
                  ),
                },
                {
                  id: 'reset',
                  children: (
                    <Button
                      disabled={isLoading}
                      type="reset"
                      color="inherit"
                      fullWidth
                    >
                      Reset
                    </Button>
                  ),
                },
              ],
            },
          ],
        },
      ]}
    />
  )
}

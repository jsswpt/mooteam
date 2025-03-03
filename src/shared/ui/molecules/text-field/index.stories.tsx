import type { Meta, StoryObj } from '@storybook/react'

import { TextField as Component } from './index'

const meta = {
  title: 'Molecules/TextField',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Component>

type Story = StoryObj<typeof meta>

export const TextField: Story = {
  args: {
    error: false,
    errorText: 'Error message',
    helperText: 'Helper text',
    size: 'md',
    variant: 'outlined',
    placeholder: 'Some text',
    type: 'email',
    disabled: false,
  },
}

export default meta

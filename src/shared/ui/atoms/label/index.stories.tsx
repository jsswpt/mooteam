import type { Meta, StoryObj } from '@storybook/react'

import { Label as Component } from './index'

const meta = {
  title: 'Atoms/Label',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Component>

type Story = StoryObj<typeof meta>

export const Label: Story = {
  args: {
    title: 'I am label',
    children: <input />,
    disabled: false,
  },
}

export default meta

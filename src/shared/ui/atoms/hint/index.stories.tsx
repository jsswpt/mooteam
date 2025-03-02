import type { Meta, StoryObj } from '@storybook/react'

import { Hint as Component } from './index'

const meta = {
  title: 'Atoms/Hint',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Component>

type Story = StoryObj<typeof meta>

export const Hint: Story = {
  args: {
    children: 'Подсказка',
    type: 'default',
  },
}

export default meta

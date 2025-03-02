import type { Meta, StoryObj } from '@storybook/react'

import { Button as Component } from './index'

const meta = {
  title: 'Atoms/Button',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Component>

type Story = StoryObj<typeof meta>

export const Button = {
  args: {
    children: 'I am button',
    variant: 'contained',
    color: 'primary',
    disabled: false,
    fullWidth: false,
    size: 'md',
  },
} satisfies Story

export default meta

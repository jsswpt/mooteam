import type { Meta, StoryObj } from '@storybook/react'

const Component = () => <></>

const meta = {
  title: 'Introduction',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Component>

type Story = StoryObj<typeof meta>

export const Introduction: Story = {
  args: {},
}

export default meta

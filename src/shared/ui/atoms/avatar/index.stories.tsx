import type { Meta, StoryObj } from '@storybook/react'

import { Avatar as Component } from './index'

const meta = {
  title: 'Atoms/Avatar',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Component>

type Story = StoryObj<typeof meta>

export const Avatar: Story = {
  args: {
    src: 'https://avatars.mds.yandex.net/i?id=e7f107bce7cf646f0e2a7f0067d23bc1c230e04d-9211188-images-thumbs&n=13',
    children: 'Name LastName',
  },
}

export default meta

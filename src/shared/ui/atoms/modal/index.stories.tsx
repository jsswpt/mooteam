import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Modal as Component } from './index'

const meta = {
  title: 'Atoms/Modal',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Component>

type Story = StoryObj<typeof meta>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Render = (props: any) => {
  const [isOpen, setIsOpen] = useState(props.open)

  return (
    <>
      <Component open={isOpen} onClose={() => setIsOpen(false)}>
        {props.children}
      </Component>
      <button onClick={() => setIsOpen(true)}>toggle</button>
    </>
  )
}

export const Modal: Story = {
  args: {
    onClose: () => {},
    open: true,
    children: (
      <div
        style={{
          width: '10rem',
          height: '10rem',
          background: 'var(--MAIN)',
          borderRadius: 'var(--RADIUS-MD)',
        }}
      />
    ),
  },
  render: Render,
}

export default meta

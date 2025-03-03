import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '../../atoms'
import { Form as Component } from './index'

const meta = {
  title: 'Molecules/Form',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Component>

type Story = StoryObj<typeof meta>

export const Form: Story = {
  args: {
    items: [
      {
        id: 'inputs',
        rows: [
          {
            id: 'long-input',
            children: (
              <Label title="Some input">
                <input style={{ width: '100%' }} />
              </Label>
            ),
          },
          {
            id: 'split-select',
            children: [
              {
                id: '1',
                children: (
                  <Label title="Select 1">
                    <select style={{ width: '100%' }}>
                      <option>First</option>
                      <option>Second</option>
                    </select>
                  </Label>
                ),
              },
              {
                id: '2',
                children: (
                  <Label title="Select 2">
                    <select style={{ width: '100%' }}>
                      <option>First</option>
                      <option>Second</option>
                    </select>
                  </Label>
                ),
              },
            ],
          },
        ],
      },
      {
        id: 'inputs-2',
        rows: [
          {
            id: 'long-input',
            children: (
              <Label title="Some input">
                <input style={{ width: '100%' }} />
              </Label>
            ),
          },
          {
            id: 'split-input',
            children: [
              {
                id: '1',
                children: (
                  <Label title="Input 1">
                    <input style={{ width: '100%' }} />
                  </Label>
                ),
              },
              {
                id: '2',
                children: (
                  <Label title="Input 2 with long title ">
                    <input style={{ width: '100%' }} />
                  </Label>
                ),
              },
              {
                id: '3',
                children: (
                  <Label title="Input 3">
                    <input style={{ width: '100%' }} />
                  </Label>
                ),
              },
              {
                id: '4',
                children: (
                  <Label title="Input 4">
                    <input style={{ width: '100%' }} />
                  </Label>
                ),
              },
            ],
          },
        ],
      },
    ],
    actions: [
      {
        id: 'actions',
        rows: [
          {
            id: 'submit',
            children: <button style={{ width: '100%' }}>submit</button>,
          },
          {
            id: 'reset',
            children: <button style={{ width: '100%' }}>reset</button>,
          },
        ],
      },
    ],
  },
}

export default meta

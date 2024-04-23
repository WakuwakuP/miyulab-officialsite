import { Toc } from './Toc'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Toc,
  args: {
    toc: [
      {
        id: '1',
        text: 'Section Title Test h2',
        name: 'h2',
      },
      {
        id: '2',
        text: 'Section Sub Title Test h3',
        name: 'h3',
      },
      {
        id: '3',
        text: 'Section Sub Title Test h3',
        name: 'h3',
      },
      {
        id: '4',
        text: 'Section Title Test h2',
        name: 'h2',
      },
    ],
  },
} satisfies Meta<typeof Toc>

export default meta

type Story = StoryObj<typeof Toc>

export const Default: Story = {}

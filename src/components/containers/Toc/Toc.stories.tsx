import { type Meta, type StoryObj } from '@storybook/nextjs'
import { Toc } from './Toc'

const meta = {
  args: {
    toc: [
      {
        id: '1',
        name: 'h2',
        text: 'Section Title Test h2',
      },
      {
        id: '2',
        name: 'h3',
        text: 'Section Sub Title Test h3',
      },
      {
        id: '3',
        name: 'h3',
        text: 'Section Sub Title Test h3',
      },
      {
        id: '4',
        name: 'h2',
        text: 'Section Title Test h2',
      },
    ],
  },
  component: Toc,
} satisfies Meta<typeof Toc>

export default meta

type Story = StoryObj<typeof Toc>

export const Default: Story = {}

import { type Meta, type StoryObj } from '@storybook/react'
import { Particle } from './Particle'

const meta = {
  args: {
    id: 'particle',
  },
  component: Particle,
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
} satisfies Meta<typeof Particle>

export default meta

type Story = StoryObj<typeof Particle>

export const Default: Story = {}

import { Particle } from './Particle'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Particle,
  args: {
    id: 'particle',
  },
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
} satisfies Meta<typeof Particle>

export default meta

type Story = StoryObj<typeof Particle>

export const Default: Story = {}

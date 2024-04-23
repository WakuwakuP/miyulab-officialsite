import { Particle } from './Particle'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Particle> = {
  component: Particle,
  args: {
    id: 'particle',
  },
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
}

export default meta

type story = StoryObj<typeof Particle>

export const Default: story = {}

import React from 'react'

import { Particle } from './Particle'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'parts/Particle',
  component: Particle,
  args: {
    id: 'particle',
  },
  argTypes: {},
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
} as ComponentMeta<typeof Particle>

const Template: ComponentStory<typeof Particle> = (args) => <Particle {...args} />

export const Default = Template.bind({})

Default.args = {
  // TODO
}

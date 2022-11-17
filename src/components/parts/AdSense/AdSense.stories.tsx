import React from 'react'

import { AdSense } from './AdSense'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'parts/AdSense',
  component: AdSense,
  argTypes: {
    // TODO
  },
} as ComponentMeta<typeof AdSense>

const Template: ComponentStory<typeof AdSense> = (args) => <AdSense {...args} />

export const Default = Template.bind({})

Default.args = {
  // TODO
}

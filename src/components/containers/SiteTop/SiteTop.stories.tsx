import React from 'react'

import { SiteTop } from './SiteTop'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'containers/SiteTop',
  component: SiteTop,
  argTypes: {
    // TODO
  },
} as ComponentMeta<typeof SiteTop>

const Template: ComponentStory<typeof SiteTop> = (args) => (
  <div style={{ height: 100 + 'vh' }}>
    <SiteTop {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  // TODO
}

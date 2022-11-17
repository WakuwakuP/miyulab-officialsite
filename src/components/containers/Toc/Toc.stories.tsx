import React from 'react'

import { Toc } from './Toc'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'containers/Toc',
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
  argTypes: {
    // TODO
  },
} as ComponentMeta<typeof Toc>

const Template: ComponentStory<typeof Toc> = (args) => <Toc {...args} />

export const Default = Template.bind({})

Default.args = {
  // TODO
}
